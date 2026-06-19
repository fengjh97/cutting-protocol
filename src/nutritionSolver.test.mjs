import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
  addMacros,
  buildShoppingRunPlan,
  buildWeeklyShopping,
  deriveMacroTargets,
  macroAnalysis,
  optimizeDinnerItems,
  scaleMacro,
  scoreDinnerTotal,
} from './nutritionSolver.js';

const round = (value, digits = 0) => Number((Number(value) || 0).toFixed(digits));

function testWeeklyShoppingReplenishesInventory() {
  const weeklyItems = [
    {
      key: 'pasta',
      label: '干意面',
      unit: 'g',
      step: 100,
      max: 2000,
      defaultTarget: 700,
      unitMacro: { p: 0.12, c: 0.71, f: 0.015 },
    },
    {
      key: 'pineapple',
      label: '菠萝 240g',
      unit: '盒',
      step: 1,
      max: 8,
      defaultTarget: 2,
      unitMacro: { p: 1.44, c: 31.2, f: 0.24 },
    },
    {
      key: 'nuts',
      label: '坚果',
      unit: '10g',
      step: 1,
      max: 20,
      defaultTarget: 5,
      unitMacro: { p: 2, c: 2, f: 5 },
    },
  ];

  const plan = {
    pasta: { enabled: true, target: 700, stock: 300 },
    pineapple: { enabled: true, target: 2, stock: 1 },
    nuts: { enabled: false, target: 5, stock: 0 },
  };

  const shopping = buildWeeklyShopping(weeklyItems, plan, 7);
  const pasta = shopping.find((item) => item.key === 'pasta');
  const pineapple = shopping.find((item) => item.key === 'pineapple');
  const nuts = shopping.find((item) => item.key === 'nuts');

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
    {
      key: 'beef',
      label: '牛肉',
      unit: 'g',
      step: 100,
      max: 3000,
      defaultTarget: 1200,
      unitMacro: { p: 0.19, c: 0, f: 0.104 },
    },
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

function testFreshChilledNoodleCarbPlanUsesTenGramSteps() {
  const source = fs.readFileSync(new URL('./CuttingProtocol.jsx', import.meta.url), 'utf8');

  assert.match(source, /fresh_noodle:\s*{[\s\S]*short:\s*'鲜面'[\s\S]*unit:\s*'g'[\s\S]*step:\s*10/);
  assert.match(source, /fresh_noodle:\s*{[\s\S]*kcalUnit:\s*2\.623/);
  assert.match(source, /fresh_noodle:\s*{[\s\S]*perUnit:\s*{\s*p:\s*0\.0869,\s*c:\s*0\.5469,\s*f:\s*0\.0123,\s*kcal:\s*2\.623/);
  assert.match(source, /sourceKey:\s*'fresh_noodle'[\s\S]*label:\s*'冷藏鲜面'/);
}

function testMobileFlowHasCommandDockAndAnchoredSections() {
  const source = fs.readFileSync(new URL('./CuttingProtocol.jsx', import.meta.url), 'utf8');

  assert.match(source, /function PlanCommandDock/);
  assert.match(source, /data-plan-flow-dock/);
  assert.match(source, /key:\s*'intake'[\s\S]*onJump\('intake'\)/);
  assert.match(source, /data-flow-action={action\.key}/);
  assert.match(source, /id="plan-intake"/);
  assert.match(source, /id="plan-dinner"/);
  assert.match(source, /id="plan-rhythm"/);
  assert.match(source, /scrollToPlanSection/);
}

function testTabChangesResetPageScroll() {
  const source = fs.readFileSync(new URL('./CuttingProtocol.jsx', import.meta.url), 'utf8');

  assert.match(source, /useEffect\(\(\) => {\s*window\.scrollTo\({ top: 0, behavior: 'auto' }\);\s*}, \[tab\]\);/);
}

function testTargetInputsPreserveEditableNumericDrafts() {
  const source = fs.readFileSync(new URL('./CuttingProtocol.jsx', import.meta.url), 'utf8');
  const match = source.match(/function TargetInput[\s\S]*?function TargetFormulaSummary/);

  assert.ok(match, 'TargetInput component should exist');
  assert.match(match[0], /useState/);
  assert.match(match[0], /editingRef/);
  assert.match(match[0], /type="text"/);
  assert.match(match[0], /inputMode="decimal"/);
  assert.match(match[0], /aria-label={label}/);
  assert.doesNotMatch(match[0], /value={round\(value, 1\)}/);
}

function testMacroTargetsUseBodyweightProteinFatAndCarbRemainder() {
  const targets = deriveMacroTargets({
    bodyWeightKg: 83,
    proteinPerKg: 1.8,
    fatMinPerKg: 0.6,
    kcal: 2000,
  });

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
    {
      key: 'pasta',
      label: '干意面',
      short: '意面',
      tone: 'green',
      unit: 'g',
      enabled: true,
      targetQty: 500,
      stockQty: 0,
      buyQty: 500,
      macro: { p: 60, c: 355, f: 7.5, kcal: 1727.5 },
    },
    {
      key: 'beef',
      label: '牛肉切り落とし',
      short: '牛肉',
      tone: 'red',
      unit: 'g',
      enabled: true,
      targetQty: 1200,
      stockQty: 100,
      buyQty: 1100,
      buyHint: '主蛋白先拿',
      macro: { p: 209, c: 0, f: 114, kcal: 1862 },
    },
    {
      key: 'banana',
      label: '香蕉',
      tone: 'gold',
      unit: '根',
      enabled: true,
      targetQty: 4,
      stockQty: 4,
      buyQty: 0,
      macro: { p: 0, c: 0, f: 0, kcal: 0 },
    },
    {
      key: 'nuts',
      label: '坚果',
      tone: 'amber',
      unit: '10g',
      enabled: false,
      targetQty: 4,
      stockQty: 0,
      buyQty: 4,
      macro: { p: 8, c: 8, f: 20, kcal: 244 },
    },
  ];

  const runPlan = buildShoppingRunPlan(shopping, { red: 0, green: 1, gold: 2, amber: 3 });

  assert.deepEqual(runPlan.map((item) => item.key), ['beef', 'pasta']);
  assert.equal(runPlan[0].order, 1);
  assert.equal(runPlan[0].buyText, '1100g');
  assert.equal(runPlan[0].reason, '主蛋白先拿');
  assert.match(runPlan[1].reason, /目标 500g/);
}

function testScoringAllowsSmallKcalOvershootForBetterBalance() {
  const targets = { p: 140, c: 225, f: 60, kcal: 2000 };
  const exactKcalButUnbalanced = { p: 130, c: 225, f: 50, kcal: 2000 };
  const balancedButSlightlyOver = { p: 141, c: 226, f: 60, kcal: 2060 };

  assert.ok(
    scoreDinnerTotal(balancedButSlightlyOver, targets) < scoreDinnerTotal(exactKcalButUnbalanced, targets),
    'balanced macros with a small kcal overshoot should score better than exact kcal with protein/fat gaps',
  );
}

function testOptimizerImprovesASeedDinnerAcrossAllMacros() {
  const targets = { p: 140, c: 225, f: 60, kcal: 2000 };
  const fixed = { p: 54, c: 100, f: 18, kcal: 778 };
  const seedItems = [
    {
      key: 'beef',
      qty: 450,
      step: 10,
      max: 650,
      unitMacro: { p: 0.19, c: 0, f: 0.104 },
    },
    {
      key: 'egg',
      qty: 2,
      step: 1,
      max: 6,
      unitMacro: { p: 6, c: 0.4, f: 7 },
    },
    {
      key: 'pasta',
      qty: 140,
      step: 10,
      max: 420,
      unitMacro: { p: 0.12, c: 0.71, f: 0.015 },
    },
  ];

  const seedTotal = addMacros(fixed, ...seedItems.map((item) => ({
    p: item.unitMacro.p * item.qty,
    c: item.unitMacro.c * item.qty,
    f: item.unitMacro.f * item.qty,
  })));
  const optimized = optimizeDinnerItems(seedItems, fixed, targets);
  const optimizedTotal = addMacros(fixed, ...optimized.map((item) => item.macro));

  assert.ok(
    scoreDinnerTotal(optimizedTotal, targets) < scoreDinnerTotal(seedTotal, targets) * 0.55,
    `optimized score should materially improve the seed; got seed ${scoreDinnerTotal(seedTotal, targets)} vs optimized ${scoreDinnerTotal(optimizedTotal, targets)}`,
  );
  assert.ok(Math.abs(optimizedTotal.p - targets.p) <= 8, `protein gap too large: ${optimizedTotal.p}`);
  assert.ok(Math.abs(optimizedTotal.c - targets.c) <= 16, `carb gap too large: ${optimizedTotal.c}`);
  assert.ok(Math.abs(optimizedTotal.f - targets.f) <= 7, `fat gap too large: ${optimizedTotal.f}`);
  assert.ok(optimizedTotal.kcal <= targets.kcal + 180, `kcal overshoot too large: ${optimizedTotal.kcal}`);
}

testWeeklyShoppingReplenishesInventory();
testWeeklyShoppingScalesTheInventoryWindow();
testScaleMacroPreservesExplicitCalories();
testFreshChilledNoodleCarbPlanUsesTenGramSteps();
testMobileFlowHasCommandDockAndAnchoredSections();
testTabChangesResetPageScroll();
testTargetInputsPreserveEditableNumericDrafts();
testMacroTargetsUseBodyweightProteinFatAndCarbRemainder();
testMacroAnalysisReportsPercentagesRatiosAndCarbDay();
testShoppingRunPlanListsConcreteBuyItemsInAisleOrder();
testScoringAllowsSmallKcalOvershootForBetterBalance();
testOptimizerImprovesASeedDinnerAcrossAllMacros();
