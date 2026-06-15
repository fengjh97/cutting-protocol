import assert from 'node:assert/strict';
import {
  addMacros,
  buildWeeklyShopping,
  optimizeDinnerItems,
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
testScoringAllowsSmallKcalOvershootForBetterBalance();
testOptimizerImprovesASeedDinnerAcrossAllMacros();
