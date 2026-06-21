export const EMPTY_MACRO = { p: 0, c: 0, f: 0, kcal: 0 };

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, Number(value) || 0));
}

export function round(value, digits = 0) {
  return Number((Number(value) || 0).toFixed(digits));
}

export function roundTo(value, step = 1) {
  if (!Number.isFinite(Number(value)) || Number(value) <= 0) return 0;
  return Math.max(0, Math.round(Number(value) / step) * step);
}

export function macroKcal(macro = EMPTY_MACRO) {
  if (Number.isFinite(macro.kcal)) return macro.kcal;
  return (macro.p || 0) * 4 + (macro.c || 0) * 4 + (macro.f || 0) * 9;
}

export function withKcal(macro = EMPTY_MACRO) {
  return { ...macro, kcal: macroKcal(macro) };
}

export function addMacros(...items) {
  return withKcal(items.reduce((sum, item) => ({
    p: sum.p + (item?.p || 0),
    c: sum.c + (item?.c || 0),
    f: sum.f + (item?.f || 0),
    kcal: sum.kcal + macroKcal(item || EMPTY_MACRO),
  }), { ...EMPTY_MACRO }));
}

export function splitMealTargets(targets = EMPTY_MACRO, fixedMacro = EMPTY_MACRO, lunchRatio = 0.4) {
  const ratio = clamp(lunchRatio, 0.1, 0.9);
  const remaining = {
    p: round(Math.max(0, (targets.p || 0) - (fixedMacro.p || 0)), 1),
    c: round(Math.max(0, (targets.c || 0) - (fixedMacro.c || 0)), 1),
    f: round(Math.max(0, (targets.f || 0) - (fixedMacro.f || 0)), 1),
    kcal: round(Math.max(0, macroKcal(targets) - macroKcal(fixedMacro))),
  };
  const lunch = {
    p: round(remaining.p * ratio, 1),
    c: round(remaining.c * ratio, 1),
    f: round(remaining.f * ratio, 1),
    kcal: round(remaining.kcal * ratio),
  };
  const dinner = {
    p: round(Math.max(0, remaining.p - lunch.p), 1),
    c: round(Math.max(0, remaining.c - lunch.c), 1),
    f: round(Math.max(0, remaining.f - lunch.f), 1),
    kcal: round(Math.max(0, remaining.kcal - lunch.kcal)),
  };

  return { remaining, lunch, dinner };
}

export function scaleMacro(item = EMPTY_MACRO, qty = 0) {
  return withKcal({
    p: (item.p || 0) * qty,
    c: (item.c || 0) * qty,
    f: (item.f || 0) * qty,
    ...(Number.isFinite(item.kcal) ? { kcal: item.kcal * qty } : {}),
  });
}

export function deriveMacroTargets(profile = {}) {
  const bodyWeightKg = clamp(profile.bodyWeightKg, 1, 300);
  const proteinPerKg = clamp(profile.proteinPerKg, 0, 5);
  const fatMinPerKg = clamp(profile.fatMinPerKg, 0, 3);
  const kcal = round(clamp(profile.kcal, 0, 9000));
  const p = round(bodyWeightKg * proteinPerKg, 1);
  const f = round(bodyWeightKg * fatMinPerKg, 1);
  const remainingKcal = Math.max(0, kcal - p * 4 - f * 9);
  const c = round(remainingKcal / 4, 1);

  return { p, c, f, kcal };
}

export function classifyCarbDay(carbs = 0, bodyWeightKg = 1) {
  const carbPerKg = clamp(carbs, 0, Infinity) / Math.max(1, clamp(bodyWeightKg, 1, 300));

  if (carbPerKg < 2) {
    return {
      label: '低碳',
      tone: 'amber',
      note: '碳水低于 2.0g/kg，今天算收紧日',
    };
  }

  if (carbPerKg < 3) {
    return {
      label: '中碳',
      tone: 'green',
      note: '碳水在 2.0-3.0g/kg，训练和恢复都比较稳',
    };
  }

  return {
    label: '高碳',
    tone: 'red',
    note: '碳水超过 3.0g/kg，更像补糖或高活动日',
  };
}

export function macroAnalysis(total = EMPTY_MACRO, targets = EMPTY_MACRO, bodyWeightKg = 1) {
  const kcal = Math.max(1, macroKcal(total));
  const weight = Math.max(1, clamp(bodyWeightKg, 1, 300));
  const proteinKcal = (total.p || 0) * 4;
  const carbKcal = (total.c || 0) * 4;
  const fatKcal = (total.f || 0) * 9;

  return {
    proteinPct: round((proteinKcal / kcal) * 100, 1),
    carbPct: round((carbKcal / kcal) * 100, 1),
    fatPct: round((fatKcal / kcal) * 100, 1),
    proteinPerKg: round((total.p || 0) / weight, 1),
    carbPerKg: round((total.c || 0) / weight, 1),
    fatPerKg: round((total.f || 0) / weight, 1),
    proteinTargetPerKg: round((targets.p || 0) / weight, 1),
    carbTargetPerKg: round((targets.c || 0) / weight, 1),
    carbDay: classifyCarbDay(total.c || 0, weight),
  };
}

export function refreshItemMacro(item, qty) {
  const roundedQty = roundTo(clamp(qty, 0, item.max ?? Infinity), item.step || 1);
  return {
    ...item,
    qty: roundedQty,
    macro: scaleMacro(item.unitMacro, roundedQty),
  };
}

export function scoreDinnerTotal(total, targets) {
  const kcalDelta = total.kcal - targets.kcal;
  const kcalPenalty = Math.pow(kcalDelta / (kcalDelta > 0 ? 150 : 125), 2) * 8
    + Math.max(0, kcalDelta - 220) * 0.28;
  const proteinShort = Math.max(0, targets.p - total.p);
  const proteinOver = Math.max(0, total.p - targets.p);
  const carbDelta = total.c - targets.c;
  const fatShort = Math.max(0, targets.f - total.f);
  const fatOver = Math.max(0, total.f - targets.f);

  return kcalPenalty
    + Math.pow(proteinShort / 4, 2) * 28
    + Math.pow(proteinOver / 12, 2) * 4
    + Math.pow(carbDelta / 14, 2) * 10
    + Math.pow(fatShort / 4, 2) * 24
    + Math.pow(fatOver / 7, 2) * 12;
}

function candidateQuantities(item) {
  const step = item.step || 1;
  const max = Math.max(0, item.max ?? item.qty ?? step * 20);
  const count = Math.floor(max / step);
  const values = new Set([0, roundTo(item.qty || 0, step), roundTo(max, step)]);

  if (count <= 90) {
    for (let index = 0; index <= count; index += 1) values.add(roundTo(index * step, step));
  } else {
    for (let index = -14; index <= 14; index += 1) values.add(roundTo((item.qty || 0) + index * step, step));
    [0.15, 0.25, 0.35, 0.5, 0.65, 0.8, 1].forEach((ratio) => values.add(roundTo(max * ratio, step)));
  }

  return [...values].filter((value) => value >= 0 && value <= max).sort((a, b) => a - b);
}

function optimisticPartialScore(macro, targets, remainingItems) {
  const remainingMax = remainingItems.reduce((sum, item) => addMacros(sum, scaleMacro(item.unitMacro, item.max ?? 0)), EMPTY_MACRO);
  const maxPossible = addMacros(macro, remainingMax);
  const proteinGap = macro.p > targets.p ? macro.p - targets.p : Math.max(0, targets.p - maxPossible.p);
  const carbGap = macro.c > targets.c ? macro.c - targets.c : Math.max(0, targets.c - maxPossible.c);
  const fatGap = macro.f > targets.f ? macro.f - targets.f : Math.max(0, targets.f - maxPossible.f);
  const kcalHardOver = Math.max(0, macro.kcal - targets.kcal - 220);
  const kcalImpossibleUnder = Math.max(0, targets.kcal - maxPossible.kcal);

  return Math.pow(proteinGap / 6, 2) * 30
    + Math.pow(carbGap / 22, 2) * 10
    + Math.pow(fatGap / 7, 2) * 20
    + Math.pow(kcalHardOver / 110, 2) * 12
    + Math.pow(kcalImpossibleUnder / 160, 2) * 8
    + scoreDinnerTotal(macro, targets) * 0.015;
}

export function optimizeDinnerItems(variableItems, fixedMacro, targets, options = {}) {
  const items = variableItems.filter((item) => item && item.unitMacro && (item.max ?? 0) > 0);
  const beamWidth = options.beamWidth ?? 520;
  let states = [{ choices: [], macro: withKcal(fixedMacro || EMPTY_MACRO), rank: 0 }];

  items.forEach((item, index) => {
    const remaining = items.slice(index + 1);
    const quantities = candidateQuantities(item);
    const nextStates = [];

    states.forEach((state) => {
      quantities.forEach((qty) => {
        const itemMacro = scaleMacro(item.unitMacro, qty);
        const macro = addMacros(state.macro, itemMacro);
        const rank = optimisticPartialScore(macro, targets, remaining) + Math.abs(qty - (item.qty || 0)) * 0.0005;
        nextStates.push({
          choices: [...state.choices, qty],
          macro,
          rank,
        });
      });
    });

    nextStates.sort((a, b) => a.rank - b.rank);
    states = nextStates.slice(0, beamWidth);
  });

  const best = states.reduce((winner, state) => (
    scoreDinnerTotal(state.macro, targets) < scoreDinnerTotal(winner.macro, targets) ? state : winner
  ), states[0]);

  return items
    .map((item, index) => refreshItemMacro(item, best.choices[index] || 0))
    .filter((item) => item.qty > 0);
}

export function createDefaultShopPlan(items) {
  return items.reduce((plan, item) => ({
    ...plan,
    [item.key]: {
      enabled: item.defaultEnabled !== false,
      target: item.defaultTarget ?? 0,
      stock: item.defaultStock ?? 0,
    },
  }), {});
}

export function normalizeShopPlan(plan, items) {
  const defaults = createDefaultShopPlan(items);
  return items.reduce((normalized, item) => {
    const saved = plan?.[item.key] || {};
    const max = item.max ?? Infinity;
    normalized[item.key] = {
      enabled: saved.enabled ?? defaults[item.key].enabled,
      target: clamp(saved.target ?? defaults[item.key].target, 0, max),
      stock: clamp(saved.stock ?? defaults[item.key].stock, 0, max),
    };
    return normalized;
  }, {});
}

export function buildWeeklyShopping(items, plan, days = 7) {
  const normalized = normalizeShopPlan(plan, items);
  const cycleDays = clamp(days, 1, 21);

  return items.map((item) => {
    const cfg = normalized[item.key];
    const max = item.max ?? Infinity;
    const weeklyTarget = clamp(cfg.target, 0, max);
    const targetQty = clamp(roundTo((weeklyTarget * cycleDays) / 7, item.step || 1), 0, max);
    const stockQty = clamp(roundTo(cfg.stock, item.step || 1), 0, max);
    const buyQty = cfg.enabled ? clamp(roundTo(Math.max(0, targetQty - stockQty), item.step || 1), 0, max) : 0;
    const unitMacro = item.unitMacro || EMPTY_MACRO;

    return {
      ...item,
      enabled: cfg.enabled,
      weeklyTarget,
      targetQty,
      stockQty,
      buyQty,
      weeklyQty: buyQty,
      qty: buyQty,
      unitMacro,
      macro: scaleMacro(unitMacro, buyQty),
      expectedMacro: scaleMacro(unitMacro, targetQty),
      needState: cfg.enabled && buyQty > 0 ? 'need' : 'ok',
    };
  });
}

export function formatShopQty(qty, unit) {
  return `${round(qty, unit === 'g' ? 0 : 1)}${unit}`;
}

export function buildShoppingRunPlan(items, toneOrder = {}) {
  return items
    .filter((item) => item.enabled && item.buyQty > 0)
    .sort((a, b) => ((toneOrder[a.tone] ?? 9) - (toneOrder[b.tone] ?? 9)) || b.buyQty - a.buyQty)
    .map((item, index) => {
      const targetText = formatShopQty(item.targetQty, item.unit);
      const stockText = formatShopQty(item.stockQty, item.unit);
      const buyText = formatShopQty(item.buyQty, item.unit);
      const reason = item.buyHint || (item.stockQty > 0
        ? `家里还有 ${stockText}，补到目标 ${targetText}`
        : `本周期目标 ${targetText}`);

      return {
        ...item,
        order: index + 1,
        buyText,
        targetText,
        stockText,
        reason,
      };
    });
}
