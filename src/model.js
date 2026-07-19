// Core computation module for the Cutting Lab rebuild.
//
// Pure helpers ported 1:1 from src/CuttingProtocol.jsx (the `model` useMemo and
// its supporting functions). All meal/target math lives here; the UI only reads
// the returned object. See REBUILD_SPEC.md §4 / §4.1 / §6.

import {
  addMacros,
  deriveMacroTargets,
  splitMealTargets,
  optimizeDinnerItems as solveDinnerItems,
  macroAnalysis,
  macroKcal,
  scaleMacro,
  withKcal,
  round,
  roundTo,
  clamp,
  buildWeeklyShopping,
  buildShoppingRunPlan,
  createDefaultShopPlan,
  normalizeShopPlan,
} from './nutritionSolver.js';

import {
  DEFAULT_TARGET_PROFILE,
  DEFAULT_TDEE,
  EMPTY_MACRO,
  CARB_PLANS,
  PROTEINS,
  FAT_SOURCES,
  DINNER_EXTRAS,
  TALLY_ITEMS,
  BREAKFAST_ITEMS,
  PRE_ITEMS,
  DRINKS,
  WEEKLY_SHOP_ITEMS,
} from './data.js';

// Re-export a couple of solver helpers that consumers of this module also use.
export {
  addMacros,
  deriveMacroTargets,
  splitMealTargets,
  macroAnalysis,
  macroKcal,
  scaleMacro,
  withKcal,
  round,
  roundTo,
  clamp,
  buildWeeklyShopping,
  buildShoppingRunPlan,
  createDefaultShopPlan,
  normalizeShopPlan,
};
export { solveDinnerItems };

const emptyMacro = EMPTY_MACRO;

const SHOP_TONE_ORDER = { red: 0, green: 1, gold: 2, amber: 3 };

// ---------------------------------------------------------------------------
// §4.1 UI-side formulas (ported verbatim from CuttingProtocol.jsx)
// ---------------------------------------------------------------------------

// estimateLunch(kcal) — approximate macro split for quick / empty-tally lunch.
// 31% P / 49% C / 20% F by kcal. (source line 813)
export function estimateLunch(kcal) {
  return withKcal({
    p: (kcal * 0.31) / 4,
    c: (kcal * 0.49) / 4,
    f: (kcal * 0.2) / 9,
    kcal,
  });
}

// proteinUnit(key, beefFat) — beef fat is dynamic (g fat / 100g raw beef),
// every other protein uses its static f. (source line 822)
export function proteinUnit(key, beefFat) {
  const protein = PROTEINS[key];
  return {
    ...protein,
    f: key === 'beef' ? (beefFat * 0.8) / 100 : protein.f || 0,
  };
}

// mealSolveTargets(targets, proteinKeys, fatKeys, beefFat) — if there is no
// meaningful fat source, pour the fat target back into carbs. (source line 736)
export function mealSolveTargets(targets, proteinKeys, fatKeys, beefFat) {
  const canMeaningfullySolveFat = fatKeys.length > 0 || proteinKeys.some((key) => {
    const unit = proteinUnit(key, beefFat);
    return ['beef', 'duck', 'kfc'].includes(key) || (unit.f || 0) >= 6;
  });
  if (canMeaningfullySolveFat) return targets;
  return {
    ...targets,
    c: round((targets.c || 0) + ((targets.f || 0) * 9) / 4, 1),
    f: 0,
  };
}

// buildMealVariableItems — seed the solver with protein/fat/carb items sized so
// proteins hit (targets.p − fixedMacro.p) split across proteinKeys, fats hit the
// remaining fat, and the carb item fills the remaining kcal. (source line 749)
export function buildMealVariableItems({
  proteinKeys,
  fatKeys,
  carbPlanKey,
  carbPlan, // accept either name
  targets,
  fixedMacro = emptyMacro,
  beefFat,
}) {
  const carbKey = carbPlanKey ?? carbPlan;
  const safeProteinKeys = (proteinKeys && proteinKeys.length) ? proteinKeys : ['beef'];
  const proteinNeed = Math.max(0, (targets.p || 0) - (fixedMacro.p || 0));
  const proteinItems = safeProteinKeys.map((key) => {
    const unit = proteinUnit(key, beefFat);
    const rawQty = proteinNeed / Math.max(1, safeProteinKeys.length) / Math.max(1, unit.p);
    const qty = clamp(roundTo(rawQty, unit.step), 0, unit.max);
    return {
      key,
      name: unit.label,
      short: unit.short,
      qty,
      unit: unit.unit,
      step: unit.step,
      max: unit.max,
      unitMacro: unit,
      macro: scaleMacro(unit, qty),
      tone: 'red',
    };
  });
  const proteinSeedMacro = proteinItems.reduce((sum, item) => addMacros(sum, item.macro), emptyMacro);

  const activeFatKeys = (fatKeys && fatKeys.length) ? fatKeys : [];
  const fatNeed = Math.max(0, (targets.f || 0) - (fixedMacro.f || 0) - proteinSeedMacro.f);
  const fatItems = activeFatKeys.map((key) => {
    const src = FAT_SOURCES[key];
    const rawQty = fatNeed / Math.max(1, activeFatKeys.length) / Math.max(1, src.f);
    const qty = clamp(roundTo(rawQty, src.step), 0, src.max);
    return {
      key: `fat-${key}`,
      name: src.label,
      short: src.short,
      qty,
      unit: src.unit,
      step: src.step,
      max: src.max,
      unitMacro: src,
      macro: scaleMacro(src, qty),
      tone: 'amber',
    };
  });
  const fatSeedMacro = fatItems.reduce((sum, item) => addMacros(sum, item.macro), emptyMacro);

  const usedBeforeCarb = addMacros(fixedMacro, proteinSeedMacro, fatSeedMacro);
  const remainingKcal = Math.max(0, (targets.kcal || 0) - usedBeforeCarb.kcal);
  const carb = CARB_PLANS[carbKey] || CARB_PLANS.pasta;
  const carbMax = carb.max ?? (carb.unit === '包' ? 8 : 420);
  const carbQty = clamp(roundTo(remainingKcal / carb.kcalUnit, carb.step), 0, carbMax);
  const carbItem = {
    key: `carb-${carbKey}`,
    name: carb.name,
    short: carb.short,
    qty: carbQty,
    unit: carb.unit,
    step: carb.step,
    max: carbMax,
    unitMacro: carb.perUnit,
    macro: scaleMacro(carb.perUnit, carbQty),
    tone: 'green',
  };

  return [...proteinItems, ...fatItems, carbItem];
}

// orderMealItems — red, amber, injected fixed items, green, then the rest.
// (source line 726)
export function orderMealItems(items, fixedItems = []) {
  return [
    ...items.filter((item) => item.tone === 'red'),
    ...items.filter((item) => item.tone === 'amber'),
    ...fixedItems,
    ...items.filter((item) => item.tone === 'green'),
    ...items.filter((item) => !['red', 'amber', 'green'].includes(item.tone)),
  ];
}

// applyDinnerAdjustments — apply per-item ± tweaks and recompute macros.
// (source line 710)
export function applyDinnerAdjustments(items, adjustments = {}) {
  return items.map((item) => {
    const baseQty = item.baseQty ?? item.qty;
    const adjustment = adjustments[item.key] || 0;
    const qty = clamp(baseQty + adjustment, 0, item.max ?? Infinity);
    const actualAdjustment = round(qty - baseQty, item.step < 1 ? 1 : 2);
    return {
      ...item,
      baseQty,
      qty,
      adjustment: actualAdjustment,
      macro: scaleMacro(item.unitMacro, qty),
    };
  });
}

// ---------------------------------------------------------------------------
// Human-readable summaries (§3.5 IntakeEditor). Ported from source describe*.
// ---------------------------------------------------------------------------

function localize(item, locale) {
  if (!item) return item;
  return locale === 'ja' && item.ja ? { ...item, ...item.ja } : item;
}

function getPreEntries(pre = {}) {
  return Object.entries(pre).filter(([key, qty]) => PRE_ITEMS[key] && qty > 0);
}

function describePre(pre, locale, t) {
  const entries = getPreEntries(pre);
  if (!entries.length) return t('noEat');
  return entries.map(([key, qty]) => {
    const item = localize(PRE_ITEMS[key], locale);
    return `${item.label} ${round(qty)}${item.unit}`;
  }).join(' / ');
}

function describeDrink(drinkKey, drinkMl, locale, t) {
  const drink = localize(DRINKS[drinkKey] || DRINKS.none, locale);
  if (drinkKey === 'none' || drinkMl <= 0) return t('noDrink');
  return `${drink.label} ${round(drinkMl)}ml`;
}

// describeFuel(pre, drink, locale, t) — `drink` may be a drinkKey string or a
// `{ key, ml }` object (the shape the UI / payload carries). See INTERPRETATION.
export function describeFuel(pre, drink, locale, t) {
  const drinkKey = typeof drink === 'string' ? drink : drink?.key ?? 'none';
  const drinkMl = typeof drink === 'string' ? undefined : drink?.ml;
  return `${describePre(pre, locale, t)} · ${describeDrink(drinkKey, drinkMl ?? 0, locale, t)}`;
}

export function isSnackActive(snack) {
  return (snack?.kcal || 0) > 0 || (snack?.p || 0) > 0 || (snack?.c || 0) > 0 || (snack?.f || 0) > 0;
}

export function describeSnack(snack, t) {
  if (!isSnackActive(snack)) return t('noSnack');
  return `${snack.name || t('snackMeal')} ${Math.round(macroKcal(snack))} kcal`;
}

// displayDinnerItem — resolve a solved item's display name/unit for the payload.
// (source line 845)
function displayDinnerItem(item, locale) {
  if (item.key?.startsWith('carb-')) {
    const key = item.key.replace('carb-', '');
    const carb = localize(CARB_PLANS[key], locale);
    return { ...item, name: carb.name, short: carb.short, unit: carb.unit };
  }
  if (item.key?.startsWith('fat-')) {
    const key = item.key.replace('fat-', '');
    const fat = localize(FAT_SOURCES[key], locale);
    return { ...item, name: fat.label, short: fat.short, unit: fat.unit };
  }
  if (item.key?.startsWith('extra-')) {
    const key = item.key.replace('extra-', '');
    const extra = localize(DINNER_EXTRAS[key], locale);
    return { ...item, name: extra.label, short: extra.label, unit: extra.unit };
  }
  if (PROTEINS[item.key]) {
    const protein = localize(PROTEINS[item.key], locale);
    return { ...item, name: protein.label, short: protein.short, unit: protein.unit };
  }
  return item;
}

// ---------------------------------------------------------------------------
// Shopping helpers
// ---------------------------------------------------------------------------

function shopUnitMacro(item, beefFat) {
  if (item.source === 'protein') return proteinUnit(item.sourceKey, beefFat);
  if (item.source === 'carb') return CARB_PLANS[item.sourceKey].perUnit;
  if (item.source === 'extra') return DINNER_EXTRAS[item.sourceKey];
  if (item.source === 'fat') return FAT_SOURCES[item.sourceKey];
  return emptyMacro;
}

function resolveWeeklyShopItems(beefFat, locale) {
  return WEEKLY_SHOP_ITEMS.map((item) => ({
    ...(locale ? localize(item, locale) : item),
    unitMacro: shopUnitMacro(item, beefFat),
  }));
}

// ---------------------------------------------------------------------------
// buildDailyPlanPayload — the JSON copied to clipboard (§6). Pure: date /
// copiedAt are injected (with sensible fallbacks) so it never depends on a
// hidden clock.
// ---------------------------------------------------------------------------

export function buildDailyPlanPayload(state = {}, model, options = {}) {
  const nowIso = options.now
    ? new Date(options.now).toISOString()
    : new Date().toISOString();
  const date = options.date ?? nowIso.slice(0, 10);
  const copiedAt = options.copiedAt ?? nowIso;
  const locale = state.locale && ['zh', 'ja'].includes(state.locale) ? state.locale : 'zh';
  const targetProfileModel = { ...DEFAULT_TARGET_PROFILE, ...(state.targetProfile || {}) };

  return {
    date,
    locale,
    targetProfile: targetProfileModel,
    targets: model.targets,
    mealSplitPct: state.mealSplitPct,
    breakfast: { items: state.breakfast || {}, macro: model.breakfastMacro },
    lunch: model.lunch,
    lunchItems: model.lunchItems.map((item) => displayDinnerItem(item, locale)),
    pre: model.preMacro,
    drink: { key: state.drinkKey, ml: state.drinkMl, macro: model.drinkMacro },
    snack: state.snack,
    dinnerAdjustments: state.dinnerAdjustments,
    dinner: {
      items: model.dinnerItems.map((item) => displayDinnerItem(item, locale)),
      macro: model.dinner,
    },
    total: model.total,
    deficit: model.deficit,
    copiedAt,
  };
}

// ---------------------------------------------------------------------------
// MAIN EXPORT — computeModel(state). Mirrors the `model` useMemo in the source
// (lines 970–1051) and additionally exposes macroReport / carbDay / runPlan and
// the individual intermediate macros the UI reads.
// ---------------------------------------------------------------------------

export function computeModel(state = {}) {
  const {
    targetProfile,
    tdee = DEFAULT_TDEE,
    lunchMode = 'planned',
    lunchKcal = 800,
    tally = {},
    breakfast = {},
    mealSplitPct = 40,
    lunchCarbPlan = 'fresh_noodle',
    lunchProteinKeys = ['chicken'],
    lunchFatKeys = [],
    carbPlan = 'pasta',
    proteinKeys = ['beef'],
    fatKeys = [],
    extraCarbs = {},
    beefFat = 13,
    pre = {},
    drinkKey = 'none',
    drinkMl = 0,
    snack = { name: '手动加餐', p: 0, c: 0, f: 0, kcal: 0 },
    saltG = 6.5,
    foodK = 2000,
    shopPlan,
    shopDays = 7,
    lunchAdjustments = {},
    dinnerAdjustments = {},
    locale,
  } = state;

  const targetProfileModel = { ...DEFAULT_TARGET_PROFILE, ...(targetProfile || {}) };
  const targets = deriveMacroTargets(targetProfileModel);

  const tallyMacro = Object.entries(tally).reduce(
    (sum, [key, qty]) => addMacros(sum, scaleMacro(TALLY_ITEMS[key], qty)),
    emptyMacro,
  );
  const breakfastMacro = Object.entries(breakfast).reduce(
    (sum, [key, qty]) => addMacros(sum, scaleMacro(BREAKFAST_ITEMS[key], qty)),
    emptyMacro,
  );
  const preMacro = Object.entries(pre).reduce(
    (sum, [key, qty]) => addMacros(sum, scaleMacro(PRE_ITEMS[key], qty)),
    emptyMacro,
  );
  const drink = DRINKS[drinkKey] || DRINKS.none;
  const drinkMacro = withKcal(scaleMacro(drink, drinkMl / 200));
  const snackMacro = withKcal(snack);
  const fixedIntake = addMacros(breakfastMacro, preMacro, drinkMacro, snackMacro);
  const mealTargetsRaw = splitMealTargets(targets, fixedIntake, mealSplitPct / 100);

  const extraEntries = Object.entries(extraCarbs).filter(([key, qty]) => DINNER_EXTRAS[key] && qty > 0);
  const extraMacro = extraEntries.reduce(
    (sum, [key, qty]) => addMacros(sum, scaleMacro(DINNER_EXTRAS[key], qty)),
    emptyMacro,
  );
  const extraItems = extraEntries.map(([key, qty]) => ({
    key: `extra-${key}`,
    name: DINNER_EXTRAS[key].label,
    short: DINNER_EXTRAS[key].label,
    qty,
    unit: DINNER_EXTRAS[key].unit,
    step: DINNER_EXTRAS[key].step,
    max: DINNER_EXTRAS[key].max,
    unitMacro: DINNER_EXTRAS[key],
    macro: scaleMacro(DINNER_EXTRAS[key], qty),
    tone: 'gold',
  }));

  // ---- Lunch ----
  const lunchSolveTargets = mealSolveTargets(mealTargetsRaw.lunch, lunchProteinKeys, lunchFatKeys, beefFat);
  const lunchVariableItems = buildMealVariableItems({
    proteinKeys: lunchProteinKeys,
    fatKeys: lunchFatKeys,
    carbPlanKey: lunchCarbPlan,
    targets: lunchSolveTargets,
    beefFat,
  });
  const optimizedLunchItems = solveDinnerItems(lunchVariableItems, emptyMacro, lunchSolveTargets);
  const lunchItems = lunchMode === 'planned'
    ? applyDinnerAdjustments(orderMealItems(optimizedLunchItems), lunchAdjustments)
    : [];
  const plannedLunch = lunchItems.reduce((sum, item) => addMacros(sum, item.macro), emptyMacro);
  const manualLunch = lunchMode === 'tally' && tallyMacro.kcal > 0 ? tallyMacro : estimateLunch(lunchKcal);
  const lunch = lunchMode === 'planned' ? plannedLunch : manualLunch;
  const beforeDinner = addMacros(lunch, fixedIntake);

  // ---- Dinner ----
  const dinnerTarget = lunchMode === 'planned'
    ? splitMealTargets(targets, beforeDinner, 0.5).remaining
    : targets;
  const mealTargets = lunchMode === 'planned'
    ? { ...mealTargetsRaw, dinner: dinnerTarget }
    : mealTargetsRaw;
  const dinnerSolveTarget = lunchMode === 'planned'
    ? mealSolveTargets(dinnerTarget, proteinKeys, fatKeys, beefFat)
    : dinnerTarget;
  const dinnerFixedMacro = lunchMode === 'planned'
    ? extraMacro
    : addMacros(beforeDinner, extraMacro);
  const dinnerVariableItems = buildMealVariableItems({
    proteinKeys,
    fatKeys,
    carbPlanKey: carbPlan,
    targets: dinnerSolveTarget,
    fixedMacro: dinnerFixedMacro,
    beefFat,
  });
  const optimizedDinnerItems = solveDinnerItems(dinnerVariableItems, dinnerFixedMacro, dinnerSolveTarget);
  const dinnerItems = applyDinnerAdjustments(orderMealItems(optimizedDinnerItems, extraItems), dinnerAdjustments);
  const dinner = dinnerItems.reduce((sum, item) => addMacros(sum, item.macro), emptyMacro);

  const total = addMacros(beforeDinner, dinner);
  const deficit = round(tdee - total.kcal);

  // ---- Electrolytes ----
  const drinkK = (DRINKS[drinkKey]?.k || 0) * (drinkMl / 200);
  const drinkNa = (DRINKS[drinkKey]?.na || 0) * (drinkMl / 200);
  const sodium = saltG * 393 + drinkNa;
  const potassium = foodK + drinkK;

  // ---- Shopping ----
  const shopItemsWithMacro = resolveWeeklyShopItems(beefFat, locale);
  const effectiveShopPlan = shopPlan ?? createDefaultShopPlan(WEEKLY_SHOP_ITEMS);
  const shopping = buildWeeklyShopping(shopItemsWithMacro, effectiveShopPlan, shopDays);
  const shoppingMacro = shopping.reduce((sum, item) => addMacros(sum, item.macro), emptyMacro);
  const runPlan = buildShoppingRunPlan(shopping, SHOP_TONE_ORDER);

  // ---- Reports ----
  const macroReport = macroAnalysis(total, targets, targetProfileModel.bodyWeightKg);
  const carbDay = macroReport.carbDay;

  return {
    targets,
    mealTargets,
    tallyMacro,
    breakfastMacro,
    preMacro,
    drinkMacro,
    snackMacro,
    fixedIntake,
    extraMacro,
    extraItems,
    lunchItems,
    plannedLunch,
    manualLunch,
    lunch,
    beforeDinner,
    dinnerTarget,
    dinnerSolveTarget,
    dinnerItems,
    dinner,
    total,
    deficit,
    macroReport,
    carbDay,
    shopping,
    shoppingMacro,
    runPlan,
    potassium,
    sodium,
    drinkK,
    drinkNa,
    // aliases matching source `model` field names, for convenience:
    pre: preMacro,
    drink: drinkMacro,
    snack: snackMacro,
  };
}

export default computeModel;
