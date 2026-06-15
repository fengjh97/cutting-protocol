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

export function scaleMacro(item = EMPTY_MACRO, qty = 0) {
  return withKcal({
    p: (item.p || 0) * qty,
    c: (item.c || 0) * qty,
    f: (item.f || 0) * qty,
  });
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
