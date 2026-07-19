import assert from 'node:assert/strict';
import {
  addMacros,
  buildShoppingRunPlan,
  buildWeeklyShopping,
  deriveMacroTargets,
  macroAnalysis,
  scaleMacro,
  splitMealTargets,
} from './nutritionSolver.js';
import { scoreDinnerTotal, optimizeDinnerItems } from './nutritionSolver.js';
import { computeModel, estimateLunch, proteinUnit, mealSolveTargets, orderMealItems, buildDailyPlanPayload } from './model.js';

const round = (value, digits = 0) => Number((Number(value) || 0).toFixed(digits));

// ---------------------------------------------------------------------------
// Ported solver assertions (from src/nutritionSolver.test.mjs) — logic-only,
// no source-string / build-file greps (those belong to the old monolith).
// ---------------------------------------------------------------------------

function testWeeklyShoppingReplenishesInventory() {
  const weeklyItems = [
    { key: 'pasta', label: '干意面', unit: 'g', step: 100, max: 2000, defaultTarget: 700, unitMacro: { p: 0.12, c: 0.71, f: 0.015 } },
    { key: 'pineapple', label: '菠萝 240g', unit: '盒', step: 1, max: 8, defaultTarget: 2, unitMacro: { p: 1.44, c: 31.2, f: 0.24 } },
    { key: 'nuts', label: '坚果', unit: '10g', step: 1, max: 20, defaultTarget: 5, unitMacro: { p: 2, c: 2, f: 5 } },
  ];
  const plan = {
    pasta: { enabled: true, target: 700, stock: 300 },
    pineapple: { enabled: true, target: 2, stock: 1 },
    nuts: { enabled: false, target: 5, stock: 0 },
  };
  const shopping = buildWeeklyShopping(weeklyItems, plan, 7);
  const pasta = shopping.find((i) => i.key === 'pasta');
  const pineapple = shopping.find((i) => i.key === 'pineapple');
  const nuts = shopping.find((i) => i.key === 'nuts');
  assert.equal(pasta.targetQty, 700);
  assert.equal(pasta.stockQty, 300);
  assert.equal(pasta.buyQty, 400);
  assert.equal(pasta.weeklyQty, 400);
  assert.equal(round(pasta.macro.c), 284);
  assert.equal(pineapple.targetQty, 2);
  assert.equal(pineapple.stockQty, 1);
  assert.equal(pineapple.buyQty, 1);
  assert.equal(nuts.enabled, false);
  assert.equal(nuts.buyQty, 0);
}

function testWeeklyShoppingScalesTheInventoryWindow() {
  const weeklyItems = [
    { key: 'beef', label: '牛肉', unit: 'g', step: 100, max: 3000, defaultTarget: 1200, unitMacro: { p: 0.19, c: 0, f: 0.104 } },
  ];
  const shopping = buildWeeklyShopping(weeklyItems, { beef: { enabled: true, target: 1200, stock: 200 } }, 3.5);
  assert.equal(shopping[0].targetQty, 600);
  assert.equal(shopping[0].buyQty, 400);
}

function testScaleMacroPreservesExplicitCalories() {
  const macro = scaleMacro({ p: 1, c: 1, f: 1, kcal: 20 }, 3);
  assert.equal(macro.p, 3);
  assert.equal(macro.c, 3);
  assert.equal(macro.f, 3);
  assert.equal(macro.kcal, 60);
}

function testSplitMealTargetsAppliesFortySixtyAfterFixedIntake() {
  const split = splitMealTargets({ p: 150, c: 240, f: 50, kcal: 2000 }, { p: 10, c: 20, f: 5, kcal: 200 }, 0.4);
  assert.deepEqual(split.remaining, { p: 140, c: 220, f: 45, kcal: 1800 });
  assert.deepEqual(split.lunch, { p: 56, c: 88, f: 18, kcal: 720 });
  assert.deepEqual(split.dinner, { p: 84, c: 132, f: 27, kcal: 1080 });
}

function testMacroTargetsUseBodyweightProteinFatAndCarbRemainder() {
  const targets = deriveMacroTargets({ bodyWeightKg: 83, proteinPerKg: 1.8, fatMinPerKg: 0.6, kcal: 2000 });
  assert.equal(targets.p, 149.4);
  assert.equal(targets.f, 49.8);
  assert.equal(targets.c, 238.6);
  assert.equal(targets.kcal, 2000);
  assert.equal(round(targets.p * 4 + targets.c * 4 + targets.f * 9), 2000);
}

function testMacroAnalysisReportsPercentagesRatiosAndCarbDay() {
  const report = macroAnalysis({ p: 150, c: 160, f: 50, kcal: 1690 }, { p: 149.4, c: 238.6, f: 49.8, kcal: 2000 }, 83);
  assert.equal(report.proteinPct, 35.5);
  assert.equal(report.carbPct, 37.9);
  assert.equal(report.fatPct, 26.6);
  assert.equal(report.proteinPerKg, 1.8);
  assert.equal(report.carbPerKg, 1.9);
  assert.equal(report.carbDay.label, '低碳');
}

function testShoppingRunPlanListsConcreteBuyItemsInAisleOrder() {
  const shopping = [
    { key: 'pasta', label: '干意面', short: '意面', tone: 'green', unit: 'g', enabled: true, targetQty: 500, stockQty: 0, buyQty: 500, macro: { p: 60, c: 355, f: 7.5, kcal: 1727.5 } },
    { key: 'beef', label: '牛肉切り落とし', short: '牛肉', tone: 'red', unit: 'g', enabled: true, targetQty: 1200, stockQty: 100, buyQty: 1100, buyHint: '主蛋白先拿', macro: { p: 209, c: 0, f: 114, kcal: 1862 } },
    { key: 'banana', label: '香蕉', tone: 'gold', unit: '根', enabled: true, targetQty: 4, stockQty: 4, buyQty: 0, macro: { p: 0, c: 0, f: 0, kcal: 0 } },
    { key: 'nuts', label: '坚果', tone: 'amber', unit: '10g', enabled: false, targetQty: 4, stockQty: 0, buyQty: 4, macro: { p: 8, c: 8, f: 20, kcal: 244 } },
  ];
  const runPlan = buildShoppingRunPlan(shopping, { red: 0, green: 1, gold: 2, amber: 3 });
  assert.deepEqual(runPlan.map((i) => i.key), ['beef', 'pasta']);
  assert.equal(runPlan[0].order, 1);
  assert.equal(runPlan[0].buyText, '1100g');
  assert.equal(runPlan[0].reason, '主蛋白先拿');
  assert.match(runPlan[1].reason, /目标 500g/);
}

function testScoringAllowsSmallKcalOvershootForBetterBalance() {
  const targets = { p: 140, c: 225, f: 60, kcal: 2000 };
  const exactKcalButUnbalanced = { p: 130, c: 225, f: 50, kcal: 2000 };
  const balancedButSlightlyOver = { p: 141, c: 226, f: 60, kcal: 2060 };
  assert.ok(scoreDinnerTotal(balancedButSlightlyOver, targets) < scoreDinnerTotal(exactKcalButUnbalanced, targets));
}

function testOptimizerImprovesASeedDinnerAcrossAllMacros() {
  const targets = { p: 140, c: 225, f: 60, kcal: 2000 };
  const fixed = { p: 54, c: 100, f: 18, kcal: 778 };
  const seedItems = [
    { key: 'beef', qty: 450, step: 10, max: 650, unitMacro: { p: 0.19, c: 0, f: 0.104 } },
    { key: 'egg', qty: 2, step: 1, max: 6, unitMacro: { p: 6, c: 0.4, f: 7 } },
    { key: 'pasta', qty: 140, step: 10, max: 420, unitMacro: { p: 0.12, c: 0.71, f: 0.015 } },
  ];
  const seedTotal = addMacros(fixed, ...seedItems.map((item) => ({
    p: item.unitMacro.p * item.qty,
    c: item.unitMacro.c * item.qty,
    f: item.unitMacro.f * item.qty,
  })));
  const optimized = optimizeDinnerItems(seedItems, fixed, targets);
  const optimizedTotal = addMacros(fixed, ...optimized.map((item) => item.macro));
  assert.ok(scoreDinnerTotal(optimizedTotal, targets) < scoreDinnerTotal(seedTotal, targets) * 0.55);
  assert.ok(Math.abs(optimizedTotal.p - targets.p) <= 8);
  assert.ok(Math.abs(optimizedTotal.c - targets.c) <= 16);
  assert.ok(Math.abs(optimizedTotal.f - targets.f) <= 7);
  assert.ok(optimizedTotal.kcal <= targets.kcal + 180);
}

// ---------------------------------------------------------------------------
// model.js pure-helper unit tests
// ---------------------------------------------------------------------------

function testEstimateLunchSplits() {
  const l = estimateLunch(800);
  assert.equal(round(l.p, 2), round((800 * 0.31) / 4, 2));
  assert.equal(round(l.c, 2), round((800 * 0.49) / 4, 2));
  assert.equal(round(l.f, 2), round((800 * 0.2) / 9, 2));
  assert.equal(l.kcal, 800);
}

function testProteinUnitBeefFatIsDynamic() {
  const beef = proteinUnit('beef', 13);
  assert.equal(beef.f, (13 * 0.8) / 100);
  const chicken = proteinUnit('chicken', 13);
  assert.equal(chicken.f, 2); // static from data
}

function testMealSolveTargetsPoursFatIntoCarbsWhenNoFatSource() {
  // chicken (f=2, <6) with no fat keys => fat should be poured into carbs.
  const t = mealSolveTargets({ p: 50, c: 100, f: 20, kcal: 1000 }, ['chicken'], [], 13);
  assert.equal(t.f, 0);
  assert.equal(t.c, round(100 + (20 * 9) / 4, 1));
  // beef counts as a meaningful fat source => pass-through.
  const t2 = mealSolveTargets({ p: 50, c: 100, f: 20, kcal: 1000 }, ['beef'], [], 13);
  assert.equal(t2.f, 20);
  assert.equal(t2.c, 100);
}

function testOrderMealItemsOrdering() {
  const items = [
    { key: 'g', tone: 'green' },
    { key: 'r', tone: 'red' },
    { key: 'a', tone: 'amber' },
    { key: 'x', tone: 'gold' },
  ];
  const fixed = [{ key: 'fx', tone: 'gold' }];
  const ordered = orderMealItems(items, fixed);
  assert.deepEqual(ordered.map((i) => i.key), ['r', 'a', 'fx', 'g', 'x']);
}

// ---------------------------------------------------------------------------
// computeModel smoke tests with the DEFAULT state
// ---------------------------------------------------------------------------

const DEFAULT_STATE = {
  targetProfile: { bodyWeightKg: 83, proteinPerKg: 1.8, fatMinPerKg: 0.6, kcal: 2000 },
  tdee: 2900,
  lunchMode: 'planned',
  lunchKcal: 800,
  tally: {},
  breakfast: {},
  mealSplitPct: 40,
  lunchCarbPlan: 'fresh_noodle',
  lunchProteinKeys: ['chicken'],
  lunchFatKeys: [],
  carbPlan: 'pasta',
  proteinKeys: ['beef'],
  fatKeys: [],
  extraCarbs: {},
  beefFat: 13,
  pre: {},
  drinkKey: 'none',
  drinkMl: 0,
  snack: { name: '手动加餐', p: 0, c: 0, f: 0, kcal: 0 },
  saltG: 6.5,
  foodK: 2000,
  shopPlan: undefined,
  shopDays: 7,
  lunchAdjustments: {},
  dinnerAdjustments: {},
  locale: 'zh',
};

function testComputeModelDefaultTargets() {
  const m = computeModel(DEFAULT_STATE);
  assert.deepEqual(m.targets, deriveMacroTargets(DEFAULT_STATE.targetProfile));
  assert.equal(m.targets.p, 149.4);
  assert.equal(m.targets.f, 49.8);
  assert.equal(m.targets.c, 238.6);
  assert.equal(m.targets.kcal, 2000);
}

function testComputeModelCarbDayClassification() {
  const m = computeModel(DEFAULT_STATE);
  // Solver aims total carbs near target 238.6 => ~2.9 g/kg over 83kg => 中碳.
  assert.equal(m.carbDay.label, '中碳');
  assert.equal(m.macroReport.carbDay.label, '中碳');
}

function testComputeModelDinnerFiniteAndSane() {
  const m = computeModel(DEFAULT_STATE);
  assert.ok(m.dinnerItems.length > 0, 'dinner should produce items');
  for (const it of m.dinnerItems) {
    assert.ok(Number.isFinite(it.macro.p) && Number.isFinite(it.macro.c) && Number.isFinite(it.macro.f) && Number.isFinite(it.macro.kcal));
  }
  assert.ok(Number.isFinite(m.total.kcal));
  // With an empty intake the whole day should land in a sane band around 2000.
  assert.ok(m.total.kcal > 1500 && m.total.kcal < 2400, `total.kcal out of band: ${m.total.kcal}`);
  // Deficit against TDEE 2900 should be a healthy positive cut.
  assert.equal(m.deficit, round(2900 - m.total.kcal));
  assert.ok(m.deficit > 400);
}

function testComputeModelElectrolytes() {
  const m = computeModel(DEFAULT_STATE);
  assert.equal(m.sodium, 6.5 * 393 + 0);
  assert.equal(m.potassium, 2000 + 0);
  // with a tomato drink 400ml
  const m2 = computeModel({ ...DEFAULT_STATE, drinkKey: 'tomato', drinkMl: 400 });
  assert.equal(round(m2.drinkK), round(600 * (400 / 200)));
  assert.equal(round(m2.drinkNa), round(5 * (400 / 200)));
  assert.equal(m2.potassium, 2000 + 600 * (400 / 200));
}

function testBreakfastCountsTowardDailyIntake() {
  const breakfast = { chojuku_bread: 2, onigiri: 1, tea_egg: 2, baguette: 100 };
  const m = computeModel({ ...DEFAULT_STATE, breakfast });
  assert.equal(round(m.breakfastMacro.kcal), 923);
  assert.equal(round(m.fixedIntake.kcal), 923);
}

function testComputeModelShoppingAndRunPlan() {
  const m = computeModel(DEFAULT_STATE);
  assert.ok(Array.isArray(m.shopping) && m.shopping.length > 0);
  assert.ok(Array.isArray(m.runPlan));
  // run plan is tone-ordered: red group first.
  if (m.runPlan.length > 1) {
    const order = { red: 0, green: 1, gold: 2, amber: 3 };
    for (let i = 1; i < m.runPlan.length; i += 1) {
      assert.ok((order[m.runPlan[i - 1].tone] ?? 9) <= (order[m.runPlan[i].tone] ?? 9));
    }
  }
}

function testBuildDailyPlanPayloadIsPureWithInjectedNow() {
  const m = computeModel(DEFAULT_STATE);
  const payload = buildDailyPlanPayload(DEFAULT_STATE, m, { now: '2026-07-04T12:00:00.000Z' });
  assert.equal(payload.date, '2026-07-04');
  assert.equal(payload.copiedAt, '2026-07-04T12:00:00.000Z');
  assert.equal(payload.locale, 'zh');
  assert.deepEqual(payload.targets, m.targets);
  assert.equal(payload.mealSplitPct, 40);
  assert.ok(Array.isArray(payload.dinner.items));
  assert.equal(payload.drink.key, 'none');
  assert.equal(payload.deficit, m.deficit);
}

const tests = [
  testWeeklyShoppingReplenishesInventory,
  testWeeklyShoppingScalesTheInventoryWindow,
  testScaleMacroPreservesExplicitCalories,
  testSplitMealTargetsAppliesFortySixtyAfterFixedIntake,
  testMacroTargetsUseBodyweightProteinFatAndCarbRemainder,
  testMacroAnalysisReportsPercentagesRatiosAndCarbDay,
  testShoppingRunPlanListsConcreteBuyItemsInAisleOrder,
  testScoringAllowsSmallKcalOvershootForBetterBalance,
  testOptimizerImprovesASeedDinnerAcrossAllMacros,
  testEstimateLunchSplits,
  testProteinUnitBeefFatIsDynamic,
  testMealSolveTargetsPoursFatIntoCarbsWhenNoFatSource,
  testOrderMealItemsOrdering,
  testComputeModelDefaultTargets,
  testComputeModelCarbDayClassification,
  testComputeModelDinnerFiniteAndSane,
  testComputeModelElectrolytes,
  testBreakfastCountsTowardDailyIntake,
  testComputeModelShoppingAndRunPlan,
  testBuildDailyPlanPayloadIsPureWithInjectedNow,
];

let passed = 0;
for (const t of tests) {
  t();
  passed += 1;
}
console.log(`model.test.mjs: ${passed}/${tests.length} passed`);

// Print computed default targets for the report.
const m = computeModel(DEFAULT_STATE);
console.log('default targets:', JSON.stringify(m.targets));
console.log('default total:', JSON.stringify(m.total), 'deficit:', m.deficit, 'carbDay:', m.carbDay.label);
