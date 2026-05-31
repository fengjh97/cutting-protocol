import React, { useState, useMemo, useEffect } from 'react';

// ============ 食材营养数据 (每基础单位) ============
const FOODS = {
  beef:    { p: 0.19,  c: 0,    f: 0.09,  unit: 'g',   label: '牛肉切り落とし(生)' },
  pasta:   { p: 0.12,  c: 0.71, f: 0.015, unit: 'g',   label: '干意面' },
  sauce:   { p: 0.9,   c: 1.5,  f: 10,    unit: '包',  label: 'ペペロンチーノ酱' },
  banana:  { p: 1,     c: 27,   f: 0.25,  unit: '根',  label: '香蕉(中)' },
  nissin:  { p: 6.7,   c: 55,   f: 4.9,   unit: '包',  label: '日清非油炸泡面' },
  pho:     { p: 4,     c: 43,   f: 2,     unit: '包',  label: '越南米粉(60g)' },
  oikos:   { p: 12,    c: 5,    f: 0,     unit: '個',  label: 'オイコス砂糖不使用' },
};

// ============ 训练前食材(用于动态计算)============
const PRE_ITEMS = {
  chicken: { p: 22, c: 1, f: 2, label: '速食鸡胸', unit: '块' },
  egg:     { p: 6, c: 0.5, f: 5, label: '全蛋', unit: '个' },
  banana:  { p: 1, c: 27, f: 0.25, label: '香蕉', unit: '根' },
};
const DEFAULT_TARGETS = { p: 140, c: 225, f: 60, kcal: 2000 };
const DEFAULT_TDEE = 2900;

// ============ 午餐设计 · 蛋白源 ============
const LUNCH_PROTEINS = {
  chicken: {
    label: '速食小鸡胸',
    sub: 'READY-EAT CHICKEN',
    tag: 'POULTRY · LEAN',
    p: 0.22, c: 0.01, f: 0.02,
    perPiece: 100,
    pieceUnit: '块',
    pieceUnitEn: 'PCS',
    note: '低脂高蛋白 · 最经济',
  },
  salmon: {
    label: '三文鱼(空气炸锅)',
    sub: 'AIR-FRIED SALMON',
    tag: 'FISH · OMEGA-3',
    p: 0.20, c: 0, f: 0.13,
    perPiece: null,
    pieceUnit: 'g',
    pieceUnitEn: 'GRAM',
    note: '高脂高 Ω-3 · 饱和脂低',
  },
  beef: {
    label: '牛肉 切り落とし(水煮)',
    sub: 'BOILED BEEF',
    tag: 'RED MEAT · IRON',
    p: 0.19, c: 0, f: 0.09,
    perPiece: null,
    pieceUnit: 'g',
    pieceUnitEn: 'GRAM',
    note: '高铁高锌 · 中等脂肪',
  },
};

// ============ 午餐设计 · 碳水源 ============
const LUNCH_CARBS = {
  rice: {
    label: '米饭(熟)',
    sub: 'COOKED RICE',
    p: 0.026, c: 0.28, f: 0.003,
    isDiscrete: false,
  },
  pho: {
    label: '越南米粉(60g 包)',
    sub: 'VIETNAMESE PHO PACK',
    p: 4, c: 43, f: 2,
    perPack: 60,
    isDiscrete: true,
  },
  pasta: {
    label: '干意面',
    sub: 'DRY PASTA',
    p: 0.12, c: 0.71, f: 0.015,
    isDiscrete: false,
  },
  sweet: {
    label: '烤红薯(熟)',
    sub: 'ROASTED SWEET POTATO',
    p: 0.02, c: 0.20, f: 0.001,
    isDiscrete: false,
  },
};

function designLunch(targetKcal, proteinKey, carbKey) {
  const prot = LUNCH_PROTEINS[proteinKey];
  const carb = LUNCH_CARBS[carbKey];

  // 目标蛋白:中午约占全天蛋白的 35-40%,根据热量动态调整
  // 800 kcal → 约 60 g 蛋白; 600 → 45 g; 1000 → 75 g
  const targetP = Math.max(30, targetKcal * 0.30 / 4);

  // 蛋白源克数
  let protGrams = targetP / prot.p;
  if (proteinKey === 'chicken') {
    protGrams = Math.max(prot.perPiece, Math.round(protGrams / prot.perPiece) * prot.perPiece);
  } else {
    protGrams = Math.max(50, Math.round(protGrams / 10) * 10);
  }
  const protP = protGrams * prot.p;
  const protC = protGrams * prot.c;
  const protF = protGrams * prot.f;
  const protKcal = protP * 4 + protC * 4 + protF * 9;

  // 碳水源:剩余 kcal
  const remainingKcal = Math.max(0, targetKcal - protKcal);
  let carbGrams = 0, carbPacks = 0;
  let carbP = 0, carbC = 0, carbF = 0;

  if (carb.isDiscrete) {
    const kcalPerPack = carb.p * 4 + carb.c * 4 + carb.f * 9;
    carbPacks = Math.max(0, Math.round(remainingKcal / kcalPerPack));
    carbGrams = carbPacks * carb.perPack;
    carbP = carbPacks * carb.p;
    carbC = carbPacks * carb.c;
    carbF = carbPacks * carb.f;
  } else {
    const kcalPerG = carb.p * 4 + carb.c * 4 + carb.f * 9;
    if (kcalPerG > 0) {
      carbGrams = Math.max(0, Math.round((remainingKcal / kcalPerG) / 10) * 10);
    }
    carbP = carbGrams * carb.p;
    carbC = carbGrams * carb.c;
    carbF = carbGrams * carb.f;
  }

  const total = {
    p: protP + carbP,
    c: protC + carbC,
    f: protF + carbF,
  };
  total.kcal = total.p * 4 + total.c * 4 + total.f * 9;

  return {
    protein: { key: proteinKey, grams: protGrams, ...prot },
    carb: { key: carbKey, grams: carbGrams, packs: carbPacks, ...carb },
    total,
  };
}

// ============ 三种方案锚点(训练前可调 · 晚餐固定 1 Oikos · 碳水全靠主食)============
const PLANS = {
  pasta: {
    name: '意面 + 酱',
    tagline: 'PASTA · SAUCE',
    desc: '慢糖配脂肪,饱腹最强 · 推荐力量训练日',
    anchors: {
      600:  { beef: 220, pasta: 210, sauce: 1, banana: 0, nissin: 0, pho: 0, oikos: 1 },
      800:  { beef: 160, pasta: 180, sauce: 1, banana: 0, nissin: 0, pho: 0, oikos: 1 },
      1000: { beef: 100, pasta: 150, sauce: 1, banana: 0, nissin: 0, pho: 0, oikos: 1 },
    },
  },
  nissin: {
    name: '日清 × 2',
    tagline: 'NISSIN · DOUBLE',
    desc: '汤面清爽 · 推荐有氧日或想吃面',
    anchors: {
      600:  { beef: 260, pasta: 0, sauce: 1, banana: 0, nissin: 2, pho: 0, oikos: 1 },
      800:  { beef: 180, pasta: 0, sauce: 1, banana: 0, nissin: 2, pho: 0, oikos: 1 },
      1000: { beef: 110, pasta: 0, sauce: 1, banana: 0, nissin: 2, pho: 0, oikos: 1 },
    },
  },
  pho: {
    name: '越南米粉 × 2',
    tagline: 'PHO · DOUBLE',
    desc: '低脂米粉清淡 · 嘴想换口味',
    anchors: {
      600:  { beef: 280, pasta: 0, sauce: 1, banana: 0, nissin: 0, pho: 2, oikos: 1 },
      800:  { beef: 200, pasta: 0, sauce: 1, banana: 0, nissin: 0, pho: 2, oikos: 1 },
      1000: { beef: 130, pasta: 0, sauce: 1, banana: 0, nissin: 0, pho: 2, oikos: 1 },
    },
  },
};

// ============ 计算逻辑(支持任意 kcal,含外推)============
function interpolate(kcal, anchors) {
  // 通用插值/外推函数 (基于 600/800/1000 三个锚点)
  function lerp(key, discrete = false) {
    let result;
    if (kcal <= 800) {
      // 600-800 段(含 600 以下外推)
      const slope = (anchors[800][key] - anchors[600][key]) / 200;
      result = anchors[600][key] + slope * (kcal - 600);
    } else {
      // 800-1000 段(含 1000 以上外推)
      const slope = (anchors[1000][key] - anchors[800][key]) / 200;
      result = anchors[800][key] + slope * (kcal - 800);
    }
    if (discrete) {
      return Math.max(0, Math.round(result));
    }
    // 连续量取整到 10 g
    return Math.max(0, Math.round(result / 10) * 10);
  }
  return {
    beef:   lerp('beef'),
    pasta:  lerp('pasta'),
    sauce:  lerp('sauce',  true),
    banana: lerp('banana', true),
    nissin: lerp('nissin', true),
    pho:    lerp('pho',    true),
    oikos:  lerp('oikos',  true),
  };
}

function estimateLunchMacros(kcal) {
  return {
    p: (kcal * 0.31) / 4,
    c: (kcal * 0.49) / 4,
    f: (kcal * 0.20) / 9,
    kcal,
  };
}

// 晚餐蛋白源。p/f/c = 每"单位"的宏量;step=取整步长;
//   牛肉/虾仁 按克(step 10g),鸡胸按整块(step 1 块,每块≈100g/22P/2F/1C)
// lean=true 的蛋白几乎不带脂肪 → 不靠"多加肉"补脂,改为酱放宽到 2 包
const DINNER_PROTEINS = {
  beef:    { label: '牛肉 切り落とし(生)', sub: 'Beef · raw wt',        tag: 'RED MEAT',      p: 0.19,         c: 0, step: 10, unitEN: 'GRAM', logUnit: 'g', lean: false, logName: '牛肉',   note: '带脂肪 · 可自动补脂' },
  shrimp:  { label: '冷冻大虾仁',          sub: 'Shrimp · thawed raw',  tag: 'SEAFOOD · LEAN', p: 0.20, f: 0.01, c: 0, step: 10, unitEN: 'GRAM', logUnit: 'g', lean: true,  logName: '大虾仁', note: '超低脂高蛋白 · 脂肪靠酱补' },
  chicken: { label: '速食鸡胸(整块)',     sub: 'Ready-eat · per pack', tag: 'POULTRY · LEAN', p: 22,   f: 2,    c: 1, step: 1,  unitEN: '块',   logUnit: '块', lean: true,  logName: '鸡胸',   note: '每块≈100g/22g蛋白 · 按整块算' },
};

function calculate(lunchKcalIn, planKey, lunchOverride, beefFatIn = 9, preWorkout = { p: 22, c: 1, f: 2, kcal: 110 }, oikosIn = 1, dinnerProteinIn = 'beef', targetsIn = DEFAULT_TARGETS) {
  // 安全网:用局部常量净化输入(不改写参数本身,避免 iOS 只读报错)
  const lunchKcal = Number.isFinite(lunchKcalIn) ? Math.max(0, Math.min(5000, lunchKcalIn)) : 0;
  const beefFatPer100g = Number.isFinite(beefFatIn) ? Math.max(0, Math.min(40, beefFatIn)) : 9;
  const oikosCount = Number.isFinite(oikosIn) ? Math.max(0, Math.min(10, oikosIn)) : 0;
  const protKey = DINNER_PROTEINS[dinnerProteinIn] ? dinnerProteinIn : 'beef';
  const prot = DINNER_PROTEINS[protKey];

  // 目标(可由用户修改):净化兜底,防 NaN
  const TARGETS = {
    p: Number.isFinite(targetsIn?.p) ? Math.max(0, Math.min(500, targetsIn.p)) : DEFAULT_TARGETS.p,
    c: Number.isFinite(targetsIn?.c) ? Math.max(0, Math.min(800, targetsIn.c)) : DEFAULT_TARGETS.c,
    f: Number.isFinite(targetsIn?.f) ? Math.max(0, Math.min(300, targetsIn.f)) : DEFAULT_TARGETS.f,
    kcal: Number.isFinite(targetsIn?.kcal) ? Math.max(0, Math.min(8000, targetsIn.kcal)) : DEFAULT_TARGETS.kcal,
  };

  const lunch = lunchOverride
    ? { ...lunchOverride }
    : estimateLunchMacros(lunchKcal);
  if (!lunch.kcal) {
    lunch.kcal = lunch.p * 4 + lunch.c * 4 + lunch.f * 9;
  }

  const beefFatCooked = beefFatPer100g * 0.80 / 100; // 水煮保留 80%

  // 晚餐蛋白源的每单位宏量(牛肉/虾仁 per g;鸡胸 per 块)
  const unitP = prot.p;
  const unitFat = protKey === 'beef' ? beefFatCooked : prot.f; // 牛肉脂肪随档位;其余固定
  const unitC = prot.c || 0;
  const step = prot.step;                   // 取整步长:克→10,块→1
  const fatBearing = !prot.lean;            // 只有带脂蛋白(牛肉)能靠多加肉补脂肪
  const sauceMax = prot.lean ? 2 : 1;       // 低脂蛋白几乎无脂 → 允许酱到 2 包补脂

  // Oikos 固定项宏量
  const oikosP = oikosCount * 12;
  const oikosC = oikosCount * 5;

  // 晚餐要填补的剩余缺口 = 全天目标 − 午餐 − 训练前 − Oikos
  const dinnerNeedP = TARGETS.p - lunch.p - preWorkout.p - oikosP;
  const dinnerNeedC = TARGETS.c - lunch.c - preWorkout.c - oikosC;
  const dinnerNeedF = TARGETS.f - lunch.f - preWorkout.f;

  // ===== 1. 碳水主食:完全按碳水缺口动态计算(三种方案都会升降) =====
  // 预留 1 包酱的碳水(1.5g)
  const carbFromStaple = Math.max(0, dinnerNeedC - 1.5);
  let pasta = 0, nissin = 0, pho = 0;
  let carbFoodP = 0, carbFoodC = 0, carbFoodF = 0;

  if (planKey === 'pasta') {
    pasta = Math.max(0, Math.round(carbFromStaple / 0.71 / 10) * 10);
    carbFoodP = pasta * 0.12; carbFoodC = pasta * 0.71; carbFoodF = pasta * 0.015;
  } else if (planKey === 'nissin') {
    nissin = Math.max(0, Math.min(4, Math.round(carbFromStaple / 55)));
    carbFoodP = nissin * 6.7; carbFoodC = nissin * 55; carbFoodF = nissin * 4.9;
  } else if (planKey === 'pho') {
    pho = Math.max(0, Math.min(4, Math.round(carbFromStaple / 43)));
    carbFoodP = pho * 4; carbFoodC = pho * 43; carbFoodF = pho * 2;
  }

  // ===== 2. 蛋白源基础量:按剩余蛋白缺口算,蛋白够了可降到 0(按 step 取整)=====
  // 预留 1 包酱蛋白(0.9g)
  const proteinFromMeat = dinnerNeedP - carbFoodP - 0.9;
  let meat = Math.max(0, Math.round(proteinFromMeat / unitP / step) * step);

  // ===== 3. 脂肪缺口 → 酱 + (仅牛肉)额外肉补 =====
  const PROTEIN_CEILING = 165; // 蛋白安全上限 ≈ 2.66 g/kg LBM(补脂肪加肉的天花板)
  const fatFromFood = meat * unitFat + carbFoodF;
  const fatGap = dinnerNeedF - fatFromFood;
  let sauceCount = Math.max(0, Math.min(sauceMax, Math.round(fatGap / 10)));
  const remainingFatGap = fatGap - sauceCount * 10;
  let extraMeat = 0;
  if (fatBearing && remainingFatGap > 2 && unitFat > 0) {
    extraMeat = Math.min(250, Math.round((remainingFatGap / unitFat) / step) * step);
    // 蛋白闸门:加肉补脂肪不能突破安全上限。蛋白已到顶 → 不加,脂肪宁可略低
    const proteinSoFar = lunch.p + preWorkout.p + oikosP + carbFoodP + sauceCount * 0.9 + meat * unitP;
    const proteinHeadroom = PROTEIN_CEILING - proteinSoFar;
    if (proteinHeadroom <= 0) {
      extraMeat = 0;
    } else {
      const maxExtraByProtein = Math.max(0, Math.floor(proteinHeadroom / unitP / step) * step);
      extraMeat = Math.min(extraMeat, maxExtraByProtein);
    }
  }
  meat += extraMeat;

  // ===== 4. 2000 kcal 铁线:分级削减 额外肉 → 酱 → 碳水主食,直到 ≤ 2000 =====
  const dinKcal = (b, cP, cC, cF, s) =>
    (b * unitP + cP + s * 0.9 + oikosP) * 4
    + (b * unitC + cC + s * 1.5 + oikosC) * 4
    + (b * unitFat + cF + s * 10) * 9;
  const fixedKcal = lunch.kcal + preWorkout.kcal;

  // (a) 砍补脂肪的额外肉(回到纯蛋白需求量)
  if (fixedKcal + dinKcal(meat, carbFoodP, carbFoodC, carbFoodF, sauceCount) > TARGETS.kcal + 5 && extraMeat > 0) {
    meat -= extraMeat;
    extraMeat = 0;
  }
  // (b) 砍酱(从上限往下砍到 0)
  while (fixedKcal + dinKcal(meat, carbFoodP, carbFoodC, carbFoodF, sauceCount) > TARGETS.kcal + 5 && sauceCount > 0) {
    sauceCount -= 1;
  }
  // (c) 砍碳水主食(可到 0)
  let over = fixedKcal + dinKcal(meat, carbFoodP, carbFoodC, carbFoodF, sauceCount) - TARGETS.kcal;
  if (over > 5) {
    if (planKey === 'pasta' && pasta > 0) {
      pasta = Math.max(0, pasta - Math.ceil(over / 3.55 / 10) * 10);
      carbFoodP = pasta * 0.12; carbFoodC = pasta * 0.71; carbFoodF = pasta * 0.015;
    } else if (planKey === 'nissin' && nissin > 0) {
      nissin = Math.max(0, nissin - Math.ceil(over / 291));
      carbFoodP = nissin * 6.7; carbFoodC = nissin * 55; carbFoodF = nissin * 4.9;
    } else if (planKey === 'pho' && pho > 0) {
      pho = Math.max(0, pho - Math.ceil(over / 210));
      carbFoodP = pho * 4; carbFoodC = pho * 43; carbFoodF = pho * 2;
    }
  }
  // (d) 碳水主食砍光仍超 → 砍蛋白源兜底(极端:训练前/午餐热量过高,此时 2000 铁线优先于蛋白)
  over = fixedKcal + dinKcal(meat, carbFoodP, carbFoodC, carbFoodF, sauceCount) - TARGETS.kcal;
  if (over > 5 && meat > 0) {
    const meatKcalPerStep = (unitP * 4 + unitC * 4 + unitFat * 9) * step;
    meat = Math.max(0, meat - Math.ceil(over / meatKcalPerStep) * step);
  }

  const plan = { meat, pasta, nissin, pho, sauce: sauceCount, banana: 0, oikos: oikosCount };

  // ===== 5. 实际晚餐宏量 =====
  const dinner = {
    p: meat * unitP + carbFoodP + sauceCount * 0.9 + oikosP,
    c: meat * unitC + carbFoodC + sauceCount * 1.5 + oikosC,
    f: meat * unitFat + carbFoodF + sauceCount * 10,
  };
  dinner.kcal = dinner.p * 4 + dinner.c * 4 + dinner.f * 9;

  const total = {
    p: lunch.p + preWorkout.p + dinner.p,
    c: lunch.c + preWorkout.c + dinner.c,
    f: lunch.f + preWorkout.f + dinner.f,
    kcal: lunch.kcal + preWorkout.kcal + dinner.kcal,
  };
  return { plan, lunch, dinner, total, beefFatPer100g, preWorkout, oikosKcal: oikosCount * 71, dinnerProtein: protKey, protPerG: unitP, protFatPerG: unitFat, protCPerG: unitC };
}


// ============ 素材引用 ============
const asset = (n) => `${import.meta.env.BASE_URL}assets/${n}`;

// ============ 通用小组件 ============
const SectionHead = ({ no, zh, en, accent = 'terra' }) => (
  <div className="flex items-center gap-3.5 mb-6">
    <span
      className={`grid place-items-center w-8 h-8 rounded-full text-[11px] font-mono font-medium shrink-0 ${
        accent === 'sage' ? 'bg-sage/15 text-sagedeep' : 'bg-terra/15 text-terradeep'
      }`}
    >
      {no}
    </span>
    <div className="leading-tight">
      <h2 className="font-display text-xl text-ink" style={{ fontWeight: 500 }}>{zh}</h2>
      {en && <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-inkfaint mt-0.5">{en}</div>}
    </div>
  </div>
);

const Card = ({ className = '', children }) => (
  <div className={`rounded-3xl bg-card border border-line shadow-warm ${className}`}>{children}</div>
);

// 加减步进器(训练前加餐 / Oikos 共用)
const Stepper = ({ zh, en, value, set, max = 5, accent = 'terra' }) => {
  const ring = accent === 'honey' ? 'hover:border-honey hover:text-honey' : 'hover:border-terra hover:text-terra';
  return (
    <div className="flex-1 min-w-[120px]">
      <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-inkfaint mb-2.5">{zh} / {en}</div>
      <div className="flex items-center gap-2.5">
        <button
          onClick={() => set(Math.max(0, value - 1))}
          aria-label={`减少${zh}`}
          className={`w-9 h-9 grid place-items-center rounded-full border border-line text-inksoft bg-card transition-all active:scale-90 ${ring}`}
        >−</button>
        <span className="font-display text-3xl w-9 text-center text-ink tnum" style={{ fontWeight: 400 }}>{value}</span>
        <button
          onClick={() => set(Math.min(max, value + 1))}
          aria-label={`增加${zh}`}
          className={`w-9 h-9 grid place-items-center rounded-full border border-line text-inksoft bg-card transition-all active:scale-90 ${ring}`}
        >+</button>
      </div>
    </div>
  );
};

const STATUS = {
  ok:    { bar: '#7E8C56', text: '#5F6B3E' },
  under: { bar: '#E0A23D', text: '#B07B16' },
  over:  { bar: '#D2683F', text: '#B14E2A' },
};

const MacroBar = ({ label, en, value, target, unit = 'g' }) => {
  const pct = Math.min((value / target) * 100, 130);
  const diff = value - target;
  const status = Math.abs(diff) <= target * 0.05 ? 'ok' : diff < 0 ? 'under' : 'over';
  const c = STATUS[status];
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex items-end justify-between mb-2">
        <div className="flex items-baseline gap-2.5">
          <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-inksoft">{en}</span>
          <span className="text-[11px] text-inkfaint">{label} · 目标 {target}{unit}</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-3xl text-ink tnum" style={{ fontWeight: 400 }}>{Math.round(value)}</span>
          <span className="text-[11px] text-inkfaint">{unit}</span>
          <span className="text-[11px] font-mono tnum ml-1" style={{ color: c.text }}>
            {diff >= 0 ? '+' : ''}{Math.round(diff)}
          </span>
        </div>
      </div>
      <div className="relative h-2.5 rounded-full bg-paper2 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${Math.min(pct, 100)}%`, backgroundColor: c.bar }}
        />
        {pct > 100 && (
          <div
            className="absolute inset-y-0 rounded-r-full"
            style={{ left: '100%', width: `${Math.min(pct - 100, 30)}%`, backgroundColor: '#D2683F', opacity: 0.55 }}
          />
        )}
      </div>
    </div>
  );
};

const FoodItem = ({ icon, name, sub, qty, unit }) => {
  if (qty <= 0) return null;
  return (
    <div className="flex items-center justify-between gap-4 py-3.5 px-4 rounded-2xl hover:bg-paper/70 transition-colors">
      <div className="flex items-center gap-3.5 min-w-0">
        <span className="grid place-items-center w-7 h-7 rounded-full bg-terra/10 text-terradeep text-[10px] font-mono shrink-0">{icon}</span>
        <div className="min-w-0">
          <div className="text-[15px] text-ink font-cjk truncate" style={{ fontWeight: 500 }}>{name}</div>
          {sub && <div className="text-[10px] text-inkfaint font-mono uppercase tracking-wider mt-0.5 truncate">{sub}</div>}
        </div>
      </div>
      <div className="flex items-baseline gap-1.5 shrink-0">
        <span className="font-display text-3xl text-ink tnum" style={{ fontWeight: 400 }}>{qty}</span>
        <span className="text-[11px] text-inkfaint font-mono uppercase tracking-wider">{unit}</span>
      </div>
    </div>
  );
};

const Pill = ({ active, onClick, children, small }) => (
  <button
    onClick={onClick}
    className={`${small ? 'px-3 py-1.5 text-[11px]' : 'px-3.5 py-2 text-xs'} rounded-full font-mono tracking-wider transition-all border ${
      active
        ? 'border-terra bg-terra text-card shadow-warm'
        : 'border-line bg-card text-inksoft hover:border-terra/50 hover:text-ink'
    }`}
  >
    {children}
  </button>
);

// ============ 主组件 ============
export default function CuttingProtocol() {
  const [lunchKcal, setLunchKcal] = useState(800);
  const [planKey, setPlanKey] = useState('pasta');
  const [lunchMode, setLunchMode] = useState('quick');
  const [lunchProtein, setLunchProtein] = useState('beef');
  const [lunchCarb, setLunchCarb] = useState('rice');
  const [beefFat, setBeefFat] = useState(13);
  const [dinnerProtein, setDinnerProtein] = useState('beef');

  // 可编辑目标:TDEE + 目标 P/C/F/kcal(存本机)
  const [targets, setTargets] = useState(() => {
    try { return { ...DEFAULT_TARGETS, ...JSON.parse(localStorage.getItem('targets') || '{}') }; }
    catch { return { ...DEFAULT_TARGETS }; }
  });
  const [tdee, setTdee] = useState(() => {
    try { const v = Number(localStorage.getItem('tdee')); return Number.isFinite(v) && v > 0 ? v : DEFAULT_TDEE; }
    catch { return DEFAULT_TDEE; }
  });
  useEffect(() => { try { localStorage.setItem('targets', JSON.stringify(targets)); } catch {} }, [targets]);
  useEffect(() => { try { localStorage.setItem('tdee', String(tdee)); } catch {} }, [tdee]);
  const setTarget = (k, v, max) => setTargets((t) => ({ ...t, [k]: Math.max(0, Math.min(max, Number(v) || 0)) }));
  const [preChicken, setPreChicken] = useState(1);
  const [preEggs, setPreEggs] = useState(0);
  const [preBanana, setPreBanana] = useState(0);
  const [dinnerOikos, setDinnerOikos] = useState(1);

  const preWorkout = useMemo(() => {
    const p = preChicken * PRE_ITEMS.chicken.p + preEggs * PRE_ITEMS.egg.p + preBanana * PRE_ITEMS.banana.p;
    const c = preChicken * PRE_ITEMS.chicken.c + preEggs * PRE_ITEMS.egg.c + preBanana * PRE_ITEMS.banana.c;
    const f = preChicken * PRE_ITEMS.chicken.f + preEggs * PRE_ITEMS.egg.f + preBanana * PRE_ITEMS.banana.f;
    return { p, c, f, kcal: Math.round(p * 4 + c * 4 + f * 9) };
  }, [preChicken, preEggs, preBanana]);

  const lunchDesign = useMemo(
    () => designLunch(lunchKcal, lunchProtein, lunchCarb),
    [lunchKcal, lunchProtein, lunchCarb]
  );

  // 零食(成分表识别结果);并入今日固定摄入,晚餐据此回算
  const [snack, setSnack] = useState(null); // {name,serving,note,confidence,p,c,f,kcal}
  const effectivePre = useMemo(() => {
    if (!snack) return preWorkout;
    return {
      p: preWorkout.p + snack.p,
      c: preWorkout.c + snack.c,
      f: preWorkout.f + snack.f,
      kcal: preWorkout.kcal + snack.kcal,
    };
  }, [preWorkout, snack]);

  const result = useMemo(() => {
    const override = lunchMode === 'designer'
      ? { p: lunchDesign.total.p, c: lunchDesign.total.c, f: lunchDesign.total.f, kcal: lunchDesign.total.kcal }
      : null;
    return calculate(lunchKcal, planKey, override, beefFat, effectivePre, dinnerOikos, dinnerProtein, targets);
  }, [lunchKcal, planKey, lunchMode, lunchDesign, beefFat, effectivePre, dinnerOikos, dinnerProtein, targets]);

  const fasted = preChicken === 0 && preEggs === 0 && preBanana === 0;

  // 两页翻页:配置(输入+零食) / 晚餐(处方+明细+采购)
  const PAGES = [
    { zh: '配餐', en: 'Plan' },
    { zh: '明细', en: 'Detail' },
  ];
  const [page, setPage] = useState(0);
  const go = (i) => setPage(Math.max(0, Math.min(PAGES.length - 1, i)));
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [page]);

  // ===== 零食加餐:拍成分表 → Gemini 识别 → 计入今日并自动调整晚餐 =====
  const [apiKey, setApiKey] = useState(() => {
    try { return localStorage.getItem('gemini_key') || ''; } catch { return ''; }
  });
  const [keyEditing, setKeyEditing] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [snackErr, setSnackErr] = useState('');
  const [snackOpen, setSnackOpen] = useState(false); // 加餐抽屉:默认收起,点小球才展开

  const saveKey = (k) => {
    setApiKey(k);
    try { k ? localStorage.setItem('gemini_key', k) : localStorage.removeItem('gemini_key'); } catch {}
  };

  const fileToBase64 = (file) => new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(String(r.result).split(',')[1]);
    r.onerror = rej;
    r.readAsDataURL(file);
  });

  const analyzeSnack = async (file) => {
    if (!file) return;
    const key = apiKey.trim();
    if (!key) { setSnackErr('请先填入 Gemini API Key'); setKeyEditing(true); return; }
    setSnackErr(''); setAnalyzing(true);
    try {
      const data = await fileToBase64(file);
      const body = {
        contents: [{ parts: [
          { text: '你是营养师。这是一张零食包装背面的成分表照片(可能是日文 栄養成分表示 或中文)。请提取整个包装(1袋/1个/单份)的营养:热量kcal、蛋白质p、碳水c、脂肪f(单位克,数字)。若标注的是每100g而净重不同,请按净重换算成整袋/整份。name给出中文零食名称猜测,serving说明你按多少量计算,note用一句中文点评它对减脂期是否友好,confidence取 high/medium/low。' },
          { inline_data: { mime_type: file.type || 'image/jpeg', data } },
        ] }],
        generationConfig: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: 'object',
            properties: {
              name: { type: 'string' }, serving: { type: 'string' },
              kcal: { type: 'number' }, p: { type: 'number' }, c: { type: 'number' }, f: { type: 'number' },
              confidence: { type: 'string' }, note: { type: 'string' },
            },
            required: ['kcal', 'p', 'c', 'f', 'name', 'serving', 'note', 'confidence'],
          },
        },
      };
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(key)}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }
      );
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error?.message || `请求失败 (HTTP ${res.status})`);
      const txt = json?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!txt) throw new Error('未能识别成分表,请换一张更清晰的照片');
      const o = JSON.parse(txt);
      const num = (x) => Math.max(0, Math.round((Number(x) || 0) * 10) / 10);
      setSnack({
        name: o.name || '零食', serving: o.serving || '', note: o.note || '', confidence: o.confidence || '',
        p: num(o.p), c: num(o.c), f: num(o.f), kcal: Math.max(0, Math.round(Number(o.kcal) || 0)),
      });
    } catch (e) {
      setSnackErr(e?.message || '识别失败,请重试');
    } finally {
      setAnalyzing(false);
    }
  };

  const setSnackField = (k, v) => setSnack((s) => s ? { ...s, [k]: Math.max(0, Number(v) || 0) } : s);

  // 调整后晚餐一句话菜单
  const dinnerSummary = useMemo(() => {
    const p = result.plan;
    const parts = [];
    if (p.meat > 0) parts.push(`${DINNER_PROTEINS[result.dinnerProtein].logName} ${p.meat}${DINNER_PROTEINS[result.dinnerProtein].logUnit}`);
    if (p.pasta > 0) parts.push(`意面 ${p.pasta}g`);
    if (p.nissin > 0) parts.push(`日清 ${p.nissin}包`);
    if (p.pho > 0) parts.push(`米粉 ${p.pho}包`);
    if (p.sauce > 0) parts.push(`酱 ${p.sauce}包`);
    if ((p.oikos || 0) > 0) parts.push(`Oikos ${p.oikos}个`);
    const over = result.total.kcal > targets.kcal + 5;
    return (parts.join(' · ') || '晚餐已砍到最低') + ` ｜ 全天 ${Math.round(result.total.kcal)} kcal` + (over ? `(已超 ${targets.kcal},见晚餐页提示)` : '');
  }, [result, targets]);

  return (
    <div className="grain relative min-h-screen text-ink font-sans">
      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-7 py-8 sm:py-12">

        {/* ============ 紧凑头部 ============ */}
        <header className="rise mb-5" style={{ animationDelay: '0ms' }}>
          <div className="relative overflow-hidden rounded-3xl shadow-warm border border-line">
            <img
              src={asset('hero.jpg')}
              alt="温暖的减脂餐食材平铺"
              className="w-full h-28 sm:h-32 object-cover object-center"
              loading="eager"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(251,243,231,0.05) 0%, rgba(251,243,231,0.5) 55%, rgba(251,243,231,0.95) 100%)' }}
            />
            <div className="absolute inset-x-0 bottom-0 px-5 sm:px-6 py-3 flex items-end justify-between">
              <h1 className="font-display text-4xl sm:text-5xl text-ink leading-none" style={{ fontWeight: 400 }}>
                晚餐<span className="text-terra">·</span><span style={{ fontStyle: 'italic' }}>处方</span>
              </h1>
              <span className="text-[10px] tracking-[0.2em] font-mono text-inksoft mb-1">v2.0 / 16:8 IF</span>
            </div>
          </div>
          <p className="mt-3 text-[10px] sm:text-[11px] font-mono tracking-wider text-inksoft text-center">
83 kg · 25% BF · TDEE ≈ {tdee} · <span className="text-terradeep">目标 {targets.kcal} kcal</span>{tdee > targets.kcal ? ` · 赤字 ${Math.round(tdee - targets.kcal)}` : ''}
          </p>
        </header>

        {/* ============ 翻页标签(吸顶)============ */}
        <nav className="rise sticky top-3 z-20 mb-7" style={{ animationDelay: '60ms' }}>
          <div className="flex gap-1 p-1 rounded-full bg-card/90 backdrop-blur border border-line shadow-warm">
            {PAGES.map((pg, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`flex-1 px-2 py-2 rounded-full transition-all ${
                  page === i ? 'bg-terra text-card shadow-warm' : 'text-inksoft hover:text-ink'
                }`}
              >
                <span className="font-cjk font-medium text-[13px]">{pg.zh}</span>
                <span className="hidden sm:inline ml-1.5 text-[10px] font-mono uppercase tracking-wider opacity-70">{pg.en}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* ============ 页面内容(按 page 切换)============ */}
        <main key={page} className="min-h-[44vh]">

        {page === 0 && (<>
        {/* ============ 00 · PRE-WORKOUT ============ */}
        <section className="rise mb-9" style={{ animationDelay: '80ms' }}>
          <SectionHead no="00" zh="训练前加餐" en="Pre-Workout" />
          <Card className="p-5 sm:p-6">
            <div className="flex gap-x-6 gap-y-5 flex-wrap">
              <Stepper zh="鸡胸" en="Chicken" value={preChicken} set={setPreChicken} />
              <Stepper zh="全蛋" en="Eggs" value={preEggs} set={setPreEggs} />
              <Stepper zh="香蕉" en="Banana" value={preBanana} set={setPreBanana} />
              <Stepper zh="Oikos" en="晚餐" value={dinnerOikos} set={setDinnerOikos} accent="honey" />
            </div>
            <div className="mt-5 pt-4 border-t border-linesoft flex items-center gap-4 flex-wrap">
              <span className="text-xs font-mono text-inksoft tracking-wide">
                → P{preWorkout.p} · C{Math.round(preWorkout.c)} · F{preWorkout.f} =
                <span className="text-ink font-medium"> {preWorkout.kcal} kcal</span>
              </span>
              {fasted && (
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-honey/15 text-honey tracking-wider">空腹训练</span>
              )}
            </div>
          </Card>
        </section>

        {/* ============ 01 · LUNCH ============ */}
        <section className="rise mb-9" style={{ animationDelay: '160ms' }}>
          <SectionHead no="01" zh="中午摄入" en="Lunch Intake" />
          <Card className="p-5 sm:p-6">
            {/* Mode Toggle */}
            <div className="flex p-1 rounded-full bg-paper2 mb-6">
              {[['quick', '直接输入 / Quick'], ['designer', '设计午餐 / Designer']].map(([k, t]) => (
                <button
                  key={k}
                  onClick={() => setLunchMode(k)}
                  className={`flex-1 px-4 py-2 rounded-full text-[11px] font-mono tracking-[0.12em] uppercase transition-all ${
                    lunchMode === k ? 'bg-card text-terradeep shadow-warm' : 'text-inksoft hover:text-ink'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {lunchMode === 'quick' && (
              <>
                <div className="flex items-baseline gap-3 mb-5">
                  <input
                    type="number"
                    value={lunchKcal}
                    onChange={(e) => {
                      const v = e.target.value;
                      if (v === '') { setLunchKcal(0); return; }
                      const n = Number(v);
                      setLunchKcal(Number.isFinite(n) ? Math.min(5000, Math.max(0, n)) : 0);
                    }}
                    className="bg-transparent border-b-2 border-line focus:border-terra outline-none font-display text-6xl sm:text-7xl text-ink w-44 pb-1 transition-colors tnum"
                    style={{ fontWeight: 400 }}
                    step={1}
                  />
                  <span className="text-sm font-mono text-inksoft tracking-widest">KCAL</span>
                </div>
                <div className="flex gap-2 flex-wrap items-center">
                  <span className="text-[10px] font-mono text-inkfaint tracking-widest uppercase mr-1">Quick</span>
                  {[600, 700, 800, 900, 1000].map((v) => (
                    <Pill key={v} small active={lunchKcal === v} onClick={() => setLunchKcal(v)}>{v}</Pill>
                  ))}
                </div>
                {(lunchKcal < 500 || lunchKcal > 1100) && lunchKcal > 0 && (
                  <div className="mt-4 text-[11px] font-mono text-honey tracking-wide flex items-start gap-1.5">
                    <span>⚠</span>
                    <span>{lunchKcal < 500 ? '中午吃得偏少,晚上配方按外推计算' : '中午吃得偏多,赤字会被压缩,晚上配方按外推计算'}</span>
                  </div>
                )}
              </>
            )}

            {lunchMode === 'designer' && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-[10px] font-mono text-inkfaint tracking-[0.22em] uppercase">Target</span>
                    <input
                      type="number"
                      value={lunchKcal}
                      onChange={(e) => {
                        const v = e.target.value;
                        if (v === '') { setLunchKcal(0); return; }
                        const n = Number(v);
                        setLunchKcal(Number.isFinite(n) ? Math.min(5000, Math.max(0, n)) : 0);
                      }}
                      className="bg-transparent border-b-2 border-line focus:border-terra outline-none font-display text-5xl text-ink w-32 pb-1 transition-colors tnum"
                      style={{ fontWeight: 400 }}
                      step={1}
                    />
                    <span className="text-xs font-mono text-inksoft tracking-widest">KCAL</span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {[600, 700, 800, 900, 1000].map((v) => (
                      <Pill key={v} small active={lunchKcal === v} onClick={() => setLunchKcal(v)}>{v}</Pill>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-inkfaint tracking-[0.22em] uppercase mb-3">Protein Source · 蛋白源</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {Object.entries(LUNCH_PROTEINS).map(([key, prot]) => (
                      <button
                        key={key}
                        onClick={() => setLunchProtein(key)}
                        className={`text-left p-3.5 rounded-2xl border transition-all ${
                          lunchProtein === key ? 'border-terra bg-terra/[0.06] shadow-warm' : 'border-line bg-card hover:border-terra/40'
                        }`}
                      >
                        <div className="text-[8px] font-mono tracking-[0.22em] text-terradeep mb-1">{prot.tag}</div>
                        <div className="text-sm text-ink font-cjk mb-1" style={{ fontWeight: 500 }}>{prot.label}</div>
                        <div className="text-[10px] text-inkfaint">{prot.note}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-inkfaint tracking-[0.22em] uppercase mb-3">Carb Source · 碳水源</div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {Object.entries(LUNCH_CARBS).map(([key, carb]) => (
                      <button
                        key={key}
                        onClick={() => setLunchCarb(key)}
                        className={`text-left p-3 rounded-2xl border transition-all ${
                          lunchCarb === key ? 'border-terra bg-terra/[0.06] shadow-warm' : 'border-line bg-card hover:border-terra/40'
                        }`}
                      >
                        <div className="text-[11px] text-ink font-cjk" style={{ fontWeight: 500 }}>{carb.label}</div>
                        <div className="text-[8px] text-inkfaint mt-1 font-mono uppercase">{carb.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-paper border border-line p-5">
                  <div className="flex items-baseline justify-between mb-4">
                    <div className="text-[10px] font-mono text-honey tracking-[0.28em]">LUNCH · COMPOSITION</div>
                    <div className="text-right">
                      <span className="font-display text-2xl text-ink tnum" style={{ fontWeight: 400 }}>{Math.round(lunchDesign.total.kcal)}</span>
                      <span className="text-[10px] text-inkfaint ml-1 font-mono">KCAL</span>
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between py-3 border-b border-linesoft">
                    <div>
                      <div className="text-[9px] font-mono text-inkfaint tracking-widest mb-0.5">01 · PROTEIN</div>
                      <div className="text-sm text-ink font-cjk" style={{ fontWeight: 500 }}>{lunchDesign.protein.label}</div>
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-3xl text-ink tnum" style={{ fontWeight: 400 }}>
                        {lunchProtein === 'chicken'
                          ? Math.round(lunchDesign.protein.grams / LUNCH_PROTEINS.chicken.perPiece)
                          : lunchDesign.protein.grams}
                      </span>
                      <span className="text-[10px] text-inkfaint font-mono uppercase">{lunchDesign.protein.pieceUnitEn}</span>
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between py-3">
                    <div>
                      <div className="text-[9px] font-mono text-inkfaint tracking-widest mb-0.5">02 · CARB</div>
                      <div className="text-sm text-ink font-cjk" style={{ fontWeight: 500 }}>{lunchDesign.carb.label}</div>
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-3xl text-ink tnum" style={{ fontWeight: 400 }}>
                        {lunchDesign.carb.isDiscrete ? lunchDesign.carb.packs : lunchDesign.carb.grams}
                      </span>
                      <span className="text-[10px] text-inkfaint font-mono uppercase">{lunchDesign.carb.isDiscrete ? 'PACK' : 'GRAM'}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-linesoft">
                    {[['蛋白', lunchDesign.total.p], ['碳水', lunchDesign.total.c], ['脂肪', lunchDesign.total.f]].map(([k, v]) => (
                      <div key={k} className="text-center">
                        <div className="text-[9px] font-mono text-inkfaint tracking-widest">{k}</div>
                        <div className="font-mono text-base text-ink mt-0.5 tnum">{Math.round(v)}<span className="text-[10px] text-inkfaint ml-0.5">g</span></div>
                      </div>
                    ))}
                  </div>
                  {lunchProtein === 'salmon' && (
                    <div className="mt-3 text-[10px] font-mono text-honey tracking-wide leading-relaxed">
                      ⓘ 三文鱼天然高脂(13g/100g),晚上脂肪空间会被挤压,推荐选 <span className="text-terradeep">日清</span> 或 <span className="text-terradeep">米粉</span> 方案。
                    </div>
                  )}
                </div>
              </div>
            )}
          </Card>
        </section>

        {/* ============ 02 · PLAN SELECTOR ============ */}
        <section className="rise mb-9" style={{ animationDelay: '240ms' }}>
          <SectionHead no="02" zh="选择方案" en="Choose Plan" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {Object.entries(PLANS).map(([key, plan]) => (
              <button
                key={key}
                onClick={() => setPlanKey(key)}
                className={`text-left p-4 rounded-2xl border transition-all ${
                  planKey === key ? 'border-terra bg-terra/[0.06] shadow-warm -translate-y-0.5' : 'border-line bg-card hover:border-terra/40 hover:-translate-y-0.5'
                }`}
              >
                <div className="text-[9px] font-mono tracking-[0.22em] text-terradeep mb-1.5">{plan.tagline}</div>
                <div className="font-display text-lg text-ink mb-1.5" style={{ fontWeight: 500 }}>{plan.name}</div>
                <div className="text-[11px] text-inksoft leading-relaxed">{plan.desc}</div>
              </button>
            ))}
          </div>
        </section>

        {/* ============ 03 · DINNER PROTEIN ============ */}
        <section className="rise mb-9" style={{ animationDelay: '300ms' }}>
          <SectionHead no="03" zh="晚餐蛋白源" en="Dinner Protein" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {Object.entries(DINNER_PROTEINS).map(([key, prot]) => (
              <button
                key={key}
                onClick={() => setDinnerProtein(key)}
                className={`text-left p-4 rounded-2xl border transition-all ${
                  dinnerProtein === key ? 'border-terra bg-terra/[0.06] shadow-warm -translate-y-0.5' : 'border-line bg-card hover:border-terra/40 hover:-translate-y-0.5'
                }`}
              >
                <div className="text-[9px] font-mono tracking-[0.22em] text-terradeep mb-1.5">{prot.tag}</div>
                <div className="font-display text-lg text-ink mb-1.5" style={{ fontWeight: 500 }}>{prot.label}</div>
                <div className="text-[11px] text-inksoft leading-relaxed">{prot.note}</div>
              </button>
            ))}
          </div>
          {dinnerProtein === 'shrimp' && (
            <div className="mt-3 text-[11px] font-mono text-honey tracking-wide leading-relaxed flex items-start gap-1.5">
              <span>ⓘ</span>
              <span>克数 = <span className="text-terradeep">解冻沥干后的生重</span>(去冰衣、和牛肉同一口径,别带冰称)。虾仁几乎零脂 → 脂肪偏低,酱自动放宽到 2 包补脂;「牛肉脂肪校准」对虾仁不生效。</span>
            </div>
          )}
          {dinnerProtein === 'chicken' && (
            <div className="mt-3 text-[11px] font-mono text-honey tracking-wide leading-relaxed flex items-start gap-1.5">
              <span>ⓘ</span>
              <span>按<span className="text-terradeep">整块</span>算(每块速食鸡胸≈100g/22g蛋白),不是按克。鸡胸低脂 → 脂肪偏低,酱自动放宽到 2 包补脂。想再加蛋白可叠：训练前的<span className="text-terradeep">全蛋</span>、晚餐的 <span className="text-terradeep">Oikos 酸奶</span>(每个 +12g)。</span>
            </div>
          )}
        </section>

        {/* ============ 04 · BEEF FAT ============ */}
        <section className="rise mb-9" style={{ animationDelay: '360ms' }}>
          <SectionHead no="04" zh="牛肉脂肪校准" en="Beef Fat" />
          <Card className={`p-5 sm:p-6 transition-opacity ${dinnerProtein !== 'beef' ? 'opacity-50' : ''}`}>
            <div className="text-[11px] text-inksoft mb-4 leading-relaxed">
              查看包装背面「脂質」一行,输入或选择档位。<span className="text-terradeep">酱固定 ≤1 包,脂肪缺口由牛肉补。</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
              {[
                { v: 5, label: '5g 极瘦', sub: 'もも赤身' },
                { v: 9, label: '9g 标准', sub: 'もも / 混合' },
                { v: 13, label: '13g 偏肥', sub: '肩 / 肩ロース' },
                { v: 18, label: '18g 较肥', sub: 'バラ混合' },
              ].map((opt) => (
                <button
                  key={opt.v}
                  onClick={() => setBeefFat(opt.v)}
                  className={`text-left p-3 rounded-2xl border transition-all ${
                    beefFat === opt.v ? 'border-terra bg-terra/[0.06] shadow-warm' : 'border-line bg-card hover:border-terra/40'
                  }`}
                >
                  <div className="text-sm text-ink font-mono">{opt.label}</div>
                  <div className="text-[8px] text-inkfaint mt-0.5 font-mono uppercase">{opt.sub}</div>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[10px] font-mono text-inkfaint tracking-wider">自定义</span>
              <input
                type="number"
                value={beefFat}
                onChange={(e) => setBeefFat(Math.max(0, Math.min(40, Number(e.target.value) || 0)))}
                className="bg-paper border border-line rounded-xl focus:border-terra outline-none text-xl text-ink w-16 py-1 transition-colors font-mono text-center tnum"
                step={1}
              />
              <span className="text-[10px] font-mono text-inkfaint tracking-wider">g / 100g (raw)</span>
              <span className="text-[10px] font-mono text-honey tracking-wider">→ 水煮后 {(beefFat * 0.8).toFixed(1)}g</span>
            </div>
            <div className="mt-3 text-[11px] font-mono text-inkfaint leading-relaxed">
              水煮脂肪保留率 ≈ 80% · 当前牛肉 <span className="text-terradeep">{result.plan.beef}g</span> / 酱 <span className="text-terradeep">{result.plan.sauce}包</span>
            </div>
          </Card>
        </section>


        {/* ============ 06 · DINNER(配置页底部直接出菜单,免翻页)============ */}
        <section id="dinner" className="rise mb-4 scroll-mt-4" style={{ animationDelay: '480ms' }}>
          <SectionHead no="06" zh="今晚的晚餐" en="Tonight's Dinner" />
          <Card className="overflow-hidden">
            <div className="relative">
              <img src={asset('dinner.jpg')} alt="今晚的晚餐" className="w-full h-40 object-cover" loading="lazy" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(255,252,246,0) 30%, rgba(255,252,246,0.7) 75%, rgba(255,252,246,1) 100%)' }} />
              <div className="absolute inset-x-0 bottom-0 px-5 sm:px-7 pb-4 flex items-end justify-between">
                <div>
                  <div className="text-[9px] font-mono tracking-[0.28em] text-terradeep mb-1">TONIGHT · 训练后晚餐</div>
                  <h2 className="font-display text-3xl text-ink" style={{ fontWeight: 400, fontStyle: 'italic' }}>Dinner</h2>
                </div>
                <div className="text-right">
                  <div className="text-[9px] font-mono tracking-widest text-inksoft mb-0.5">DINNER KCAL</div>
                  <div className="font-display text-3xl text-ink tnum" style={{ fontWeight: 400 }}>{Math.round(result.dinner.kcal)}</div>
                </div>
              </div>
            </div>
            <div className="p-3 sm:p-4">
              <FoodItem icon="01" name={DINNER_PROTEINS[result.dinnerProtein].label} sub={DINNER_PROTEINS[result.dinnerProtein].sub} qty={result.plan.meat} unit={DINNER_PROTEINS[result.dinnerProtein].unitEN} />
              <FoodItem icon="02" name="干意面" sub="Dry Pasta · 100g portion" qty={result.plan.pasta} unit="GRAM" />
              <FoodItem icon="03" name="日清非油炸泡面" sub="Non-fried Ramen" qty={result.plan.nissin} unit="PACK" />
              <FoodItem icon="04" name="越南米粉" sub="Vietnamese Pho · 60g" qty={result.plan.pho} unit="PACK" />
              <FoodItem icon="05" name="ペペロンチーノ酱" sub="Garlic Oil Sauce · S&B" qty={result.plan.sauce} unit="PACK" />
              <FoodItem icon="06" name="香蕉(中)" sub="Banana · Medium" qty={result.plan.banana} unit="PCS" />
              <FoodItem icon="07" name="オイコス 砂糖不使用" sub="OIKOS Plain · Dessert" qty={result.plan.oikos || 0} unit="PCS" />
            </div>
          </Card>
          {/* 紧凑全天小结,免翻页也能看是否达标 */}
          <div className="mt-3 grid grid-cols-4 gap-2">
            {[
              { k: '蛋白', v: result.total.p, t: targets.p, u: 'g' },
              { k: '碳水', v: result.total.c, t: targets.c, u: 'g' },
              { k: '脂肪', v: result.total.f, t: targets.f, u: 'g' },
              { k: '热量', v: result.total.kcal, t: targets.kcal, u: '' },
            ].map((m) => {
              const diff = m.v - m.t;
              const ok = Math.abs(diff) <= (m.u === '' ? Math.max(80, m.t * 0.05) : Math.max(8, m.t * 0.08));
              return (
                <div key={m.k} className="rounded-2xl bg-card border border-line p-2.5 text-center shadow-warm">
                  <div className="text-[9px] font-mono text-inkfaint tracking-wider mb-0.5">{m.k}</div>
                  <div className="font-display text-xl text-ink tnum" style={{ fontWeight: 400 }}>{Math.round(m.v)}</div>
                  <div className="text-[9px] font-mono tnum" style={{ color: ok ? '#5F6B3E' : '#B07B16' }}>
                    {diff >= 0 ? '+' : ''}{Math.round(diff)}{m.u}
                  </div>
                </div>
              );
            })}
          </div>
          <button onClick={() => go(1)} className="mt-3 w-full px-4 py-2.5 rounded-full border border-line bg-card text-inksoft text-xs font-mono tracking-wider hover:border-terra hover:text-terra transition-all">
            验算 / 明细 / 采购清单 →
          </button>
        </section>

        </>)}

        {page === 1 && (<>
        {/* ============ ✱ · TARGETS ============ */}
        <section className="rise mb-9" style={{ animationDelay: '0ms' }}>
          <SectionHead no="✱" zh="目标设定" en="Targets" accent="sage" />
          <Card className="p-5 sm:p-6">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
              <TargetInput label="总消耗" en="TDEE" value={tdee} unit="kcal" onChange={(v) => setTdee(Math.max(0, Math.min(8000, Number(v) || 0)))} />
              <TargetInput label="目标" en="kcal" value={targets.kcal} unit="kcal" accent onChange={(v) => setTarget('kcal', v, 8000)} />
              <TargetInput label="蛋白" en="P" value={targets.p} unit="g" onChange={(v) => setTarget('p', v, 500)} />
              <TargetInput label="碳水" en="C" value={targets.c} unit="g" onChange={(v) => setTarget('c', v, 800)} />
              <TargetInput label="脂肪" en="F" value={targets.f} unit="g" onChange={(v) => setTarget('f', v, 300)} />
            </div>
            <div className="mt-4 pt-3 border-t border-linesoft flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[11px] font-mono text-inksoft">
              {tdee > targets.kcal && <span>赤字 ≈ <span className="text-terradeep">{Math.round(tdee - targets.kcal)} kcal/天</span></span>}
              <span>宏量热量合计 <span className={Math.abs(targets.p * 4 + targets.c * 4 + targets.f * 9 - targets.kcal) <= 60 ? 'text-sagedeep' : 'text-honey'}>{Math.round(targets.p * 4 + targets.c * 4 + targets.f * 9)}</span> kcal</span>
              <button
                onClick={() => { setTargets({ ...DEFAULT_TARGETS }); setTdee(DEFAULT_TDEE); }}
                className="text-terradeep hover:underline ml-auto"
              >↺ 恢复默认</button>
            </div>
          </Card>
        </section>

        {/* ============ 04 · MACRO VERIFICATION ============ */}
        <section className="rise mb-9" style={{ animationDelay: '90ms' }}>
          <SectionHead no="04" zh="全天营养验算" en="Macro Check" accent="sage" />
          <Card className="p-5 sm:p-7">
            <MacroBar label="蛋白" en="Protein" value={result.total.p} target={targets.p} unit="g" />
            <MacroBar label="碳水" en="Carbs" value={result.total.c} target={targets.c} unit="g" />
            <MacroBar label="脂肪" en="Fat" value={result.total.f} target={targets.f} unit="g" />
            <MacroBar label="热量" en="Calories" value={result.total.kcal} target={targets.kcal} unit="kcal" />

            <div className="mt-7 grid grid-cols-3 gap-2.5 text-[11px] font-mono">
              {[
                { t: 'LUNCH', k: Math.round(result.lunch.kcal), m: `P${Math.round(result.lunch.p)} · C${Math.round(result.lunch.c)} · F${Math.round(result.lunch.f)}`, hl: false },
                { t: snack ? 'PRE+零食' : 'PRE-W/O', k: Math.round(result.preWorkout.kcal), m: `P${Math.round(result.preWorkout.p)} · C${Math.round(result.preWorkout.c)} · F${Math.round(result.preWorkout.f)}`, hl: false },
                { t: 'DINNER', k: Math.round(result.dinner.kcal), m: `P${Math.round(result.dinner.p)} · C${Math.round(result.dinner.c)} · F${Math.round(result.dinner.f)}`, hl: true },
              ].map((x) => (
                <div key={x.t} className={`rounded-2xl p-3 border ${x.hl ? 'border-terra bg-terra/[0.06]' : 'border-line bg-paper'}`}>
                  <div className={`mb-1 tracking-wider ${x.hl ? 'text-terradeep' : 'text-inksoft'}`}>{x.t}</div>
                  <div className="text-ink text-base tnum">{x.k} kcal</div>
                  <div className="text-inkfaint mt-1 text-[9px]">{x.m}</div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* ============ 05 · FOOD LOG ============ */}
        <section className="rise mb-9" style={{ animationDelay: '0ms' }}>
          <SectionHead no="05" zh="今日食物明细" en="Food Log" />
          <Card className="overflow-hidden">
            <div className="grid grid-cols-12 gap-0 bg-paper2 px-4 py-2.5 text-[9px] font-mono tracking-widest text-inksoft uppercase">
              <div className="col-span-5">Item</div>
              <div className="col-span-2 text-right">P</div>
              <div className="col-span-2 text-right">C</div>
              <div className="col-span-1 text-right">F</div>
              <div className="col-span-2 text-right">kcal</div>
            </div>

            <LogGroup label="PRE-WORKOUT" />
            {preChicken > 0 && <LogRow name={`鸡胸 × ${preChicken}`} p={preChicken * 22} c={preChicken * 1} f={preChicken * 2} k={preChicken * 110} />}
            {preEggs > 0 && <LogRow name={`全蛋 × ${preEggs}`} p={preEggs * 6} c={Math.round(preEggs * 0.5)} f={preEggs * 5} k={Math.round(preEggs * 72)} />}
            {preBanana > 0 && <LogRow name={`香蕉 × ${preBanana}`} p={preBanana} c={preBanana * 27} f={Math.round(preBanana * 0.25)} k={Math.round(preBanana * 113)} />}
            {fasted && <div className="px-4 py-2 text-xs text-inkfaint border-t border-linesoft">空腹训练</div>}

            <LogGroup label={`LUNCH · ${lunchMode === 'designer' ? '自制' : '食堂'}`} />
            <LogRow name={`${lunchMode === 'designer' ? '午餐设计' : '食堂'} ~${lunchKcal}kcal`} p={Math.round(result.lunch.p)} c={Math.round(result.lunch.c)} f={Math.round(result.lunch.f)} k={Math.round(result.lunch.kcal)} />

            {snack && <LogGroup label="SNACK · 加餐" />}
            {snack && <LogRow name={snack.name} p={Math.round(snack.p)} c={Math.round(snack.c)} f={Math.round(snack.f)} k={Math.round(snack.kcal)} />}

            <LogGroup label="DINNER" />
            {result.plan.meat > 0 && <LogRow name={`${DINNER_PROTEINS[result.dinnerProtein].logName} ${result.plan.meat}${DINNER_PROTEINS[result.dinnerProtein].logUnit}`} p={Math.round(result.plan.meat * result.protPerG)} c={Math.round(result.plan.meat * result.protCPerG)} f={Math.round(result.plan.meat * result.protFatPerG)} k={Math.round(result.plan.meat * result.protPerG * 4 + result.plan.meat * result.protCPerG * 4 + result.plan.meat * result.protFatPerG * 9)} />}
            {result.plan.pasta > 0 && <LogRow name={`干意面 ${result.plan.pasta}g`} p={Math.round(result.plan.pasta * 0.12)} c={Math.round(result.plan.pasta * 0.71)} f={Math.round(result.plan.pasta * 0.015)} k={Math.round(result.plan.pasta * 3.55)} />}
            {result.plan.nissin > 0 && <LogRow name={`日清 × ${result.plan.nissin}`} p={Math.round(result.plan.nissin * 6.7)} c={Math.round(result.plan.nissin * 55)} f={Math.round(result.plan.nissin * 4.9)} k={Math.round(result.plan.nissin * 291)} />}
            {result.plan.pho > 0 && <LogRow name={`越南米粉 × ${result.plan.pho}`} p={Math.round(result.plan.pho * 4)} c={Math.round(result.plan.pho * 43)} f={Math.round(result.plan.pho * 2)} k={Math.round(result.plan.pho * 210)} />}
            {result.plan.sauce > 0 && <LogRow name={`ペペロン酱 × ${result.plan.sauce}`} p={Math.round(result.plan.sauce * 0.9)} c={Math.round(result.plan.sauce * 1.5)} f={result.plan.sauce * 10} k={result.plan.sauce * 100} />}
            {result.plan.banana > 0 && <LogRow name={`香蕉 × ${result.plan.banana}`} p={result.plan.banana} c={result.plan.banana * 27} f={Math.round(result.plan.banana * 0.25)} k={Math.round(result.plan.banana * 113)} />}
            {(result.plan.oikos || 0) > 0 && <LogRow name={`オイコス × ${result.plan.oikos}`} p={result.plan.oikos * 12} c={result.plan.oikos * 5} f={0} k={result.plan.oikos * 71} />}

            <div className="grid grid-cols-12 gap-0 px-4 py-3 bg-terra/[0.07] border-t-2 border-terra/40 text-xs font-mono tnum">
              <div className="col-span-5 text-terradeep tracking-widest uppercase text-[9px] self-center">Total</div>
              <div className="col-span-2 text-right text-ink">{Math.round(result.total.p)}</div>
              <div className="col-span-2 text-right text-ink">{Math.round(result.total.c)}</div>
              <div className="col-span-1 text-right text-ink">{Math.round(result.total.f)}</div>
              <div className="col-span-2 text-right text-ink">{Math.round(result.total.kcal)}</div>
            </div>
            <div className="grid grid-cols-12 gap-0 px-4 py-2.5 border-t border-linesoft text-xs font-mono text-inkfaint tnum">
              <div className="col-span-5 tracking-widest uppercase text-[9px] self-center">Target</div>
              <div className="col-span-2 text-right">{targets.p}</div>
              <div className="col-span-2 text-right">{targets.c}</div>
              <div className="col-span-1 text-right">{targets.f}</div>
              <div className="col-span-2 text-right">{targets.kcal}</div>
            </div>
            <div className="grid grid-cols-12 gap-0 px-4 py-2.5 border-t border-linesoft text-xs font-mono tnum">
              <div className="col-span-5 text-inkfaint tracking-widest uppercase text-[9px] self-center">Diff</div>
              {[
                { val: result.total.p - targets.p, tol: 15 },
                { val: result.total.c - targets.c, tol: 15 },
                { val: result.total.f - targets.f, tol: 15, narrow: true },
                { val: result.total.kcal - targets.kcal, tol: 100 },
              ].map((d, i) => (
                <div key={i} className={`${d.narrow ? 'col-span-1' : 'col-span-2'} text-right`} style={{ color: Math.abs(d.val) <= d.tol ? '#5F6B3E' : '#B07B16' }}>
                  {d.val >= 0 ? '+' : ''}{Math.round(d.val)}
                </div>
              ))}
            </div>

            {result.total.kcal > targets.kcal + 5 && (
              <div className="px-5 py-4 border-t-2 border-terra/40 bg-terra/[0.06]">
                <div className="text-[11px] font-mono text-terradeep tracking-wider mb-1.5">⚠ 已超 {targets.kcal} kcal 铁线</div>
                <div className="text-[12px] text-inksoft leading-relaxed font-cjk">
                  训练前 + 午餐 + 零食 + Oikos 这些<span className="text-ink font-medium">已经吃掉的部分</span>合计 {Math.round(result.lunch.kcal + result.preWorkout.kcal + result.oikosKcal)} kcal,晚餐已压到最低({DINNER_PROTEINS[result.dinnerProtein].logName} {result.plan.meat}{DINNER_PROTEINS[result.dinnerProtein].logUnit}、主食砍光)仍超标。<span className="text-terradeep">减少训练前加餐 / 零食 / Oikos,或上调目标热量。</span>
                </div>
              </div>
            )}
          </Card>
        </section>

        {/* ============ DAILY SCHEDULE ============ */}
        <section className="rise mb-9" style={{ animationDelay: '90ms' }}>
          <Card className="p-5 sm:p-6">
            <div className="text-[10px] font-mono tracking-[0.25em] text-honey mb-4">DAILY SCHEDULE · 16:8 IF</div>
            <div className="space-y-3 font-mono text-xs">
              {[
                { t: '12:00', d: '食堂午餐 / 替代 — Lunch (open feeding window)', hl: true },
                { t: '15:00', d: `训练前 — ${preChicken > 0 ? `${preChicken}块鸡胸` : ''}${preChicken > 0 && (preEggs > 0 || preBanana > 0) ? ' + ' : ''}${preEggs > 0 ? `${preEggs}个全蛋` : ''}${preEggs > 0 && preBanana > 0 ? ' + ' : ''}${preBanana > 0 ? `${preBanana}根香蕉` : ''}${fasted ? '空腹' : ''}`, hl: false },
                { t: '17:00', d: '训练时段 — MET7 1h + 力量(周3次)', hl: false },
                { t: '19:00', d: '★ 训练后晚餐 — 按上方处方', hl: true },
                { t: '20:00', d: '关窗 — Close feeding window', hl: false },
              ].map((r) => (
                <div key={r.t} className="flex gap-3">
                  <span className="text-terradeep w-14 shrink-0">{r.t}</span>
                  <span className={r.hl ? 'text-ink font-cjk' : 'text-inksoft font-cjk'}>{r.d}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* ============ 06 · SHOPPING LIST ============ */}
        <section className="rise mb-9" style={{ animationDelay: '0ms' }}>
          <SectionHead no="06" zh="超市采购清单" en="Weekly Shopping" />
          <div className="space-y-3">
            <ShopGroup title="PROTEIN · 蛋白源" items={[
              ['オーストラリア産 肩ロース切り落とし', 'BEEF · 300g/盒 · 晚餐 7 天', '6 盒 (~1.8kg)'],
              ['速食小鸡胸(22g 蛋白/块)', '训前 3 块 + 午餐替代 6 块', '10 块'],
              ['卵 10個入り', '训前 3 天 × 2 個 = 6 個 + 余量', '1 盒'],
            ]} />
            <ShopGroup title="CARBS · 碳水源" items={[
              ['干意面(500g/袋)', '晚餐 3 天 × 180g = 540g', '1 袋'],
              ['越南米粉(60g/包)', '晚餐 4 包 + 午餐替代 6 包', '11 包'],
              ['日清 ノンフライ麺', '晚餐 2 天 × 2 包', '4 包'],
            ]} />
            <ShopGroup title="FAT + FLAVOR · 脂肪与调味" items={[
              ['S&B ペペロンチーノ酱(22.3g/包)', '意面日 3 + 米粉日 2 + 备用 1', '6 包'],
              ['酱油 + 辣酱', '牛肉蘸料 · 常备', '有就不买'],
            ]} />
            <ShopGroup title="DAIRY · 乳制品" items={[
              ['ダノン オイコス 砂糖不使用(123g)', '晚餐甜品 · 每天 1 個', '7 個'],
            ]} img="yogurt.jpg" />

            <div className="rounded-3xl border border-honey/40 bg-honey/[0.07] p-5">
              <div className="text-[10px] font-mono text-honey tracking-widest mb-3">BUDGET · 预算 ≈ ¥7,580/周</div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-[11px] font-mono text-inksoft tnum">
                {[['牛肉 6盒', '¥2,700'], ['鸡胸 10块', '¥1,200'], ['鸡蛋 1盒', '¥250'], ['意面 1袋', '¥200'], ['米粉 11包', '¥1,100'], ['日清 4包', '¥600'], ['酱 6包', '¥480'], ['Oikos 7個', '¥1,050']].map(([a, b]) => (
                  <React.Fragment key={a}><span>{a}</span><span className="text-right">{b}</span></React.Fragment>
                ))}
                <span className="text-ink border-t border-honey/30 pt-1.5 mt-1">日均</span>
                <span className="text-right text-ink border-t border-honey/30 pt-1.5 mt-1">≈ ¥1,082</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ MEMO ============ */}
        <section className="rise mb-9" style={{ animationDelay: '90ms' }}>
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <img src={asset('pre.jpg')} alt="" className="w-12 h-12 rounded-2xl object-cover border border-line" loading="lazy" />
              <div className="text-[10px] font-mono text-terradeep tracking-[0.3em]">MEMO · 速记规则</div>
            </div>
            <div className="space-y-2.5 text-[13px] leading-relaxed text-inksoft font-cjk">
              {[
                ['训练前可调:鸡胸 0-5 块 + 全蛋 0-5 个,午晚方案自动重算。'],
                ['碳水全靠主食(意面/日清/米粉),不用香蕉。'],
                ['意面/米粉比旧方案多(130-170g)——碳水全压在午餐和晚餐。'],
                ['监测优先级:', '腰围 > 力量 > 体重 7 日均值', '。'],
                ['体重单日波动 ±2 kg 是正常的(糖原+水分),不要据此调整饮食。'],
                ['连续 8 周后做 1 周 diet break(回到 ~2700 kcal),再切回赤字。'],
              ].map((parts, i) => (
                <p key={i} className="flex gap-2">
                  <span className="text-terra shrink-0">·</span>
                  <span>{parts[0]}{parts[1] && <span className="text-terradeep font-medium">{parts[1]}</span>}{parts[2]}</span>
                </p>
              ))}
            </div>
          </Card>
        </section>

        </>)}

        {/* ============ 翻页器 ============ */}
        <div className="rise flex items-center justify-between gap-3 mt-8" style={{ animationDelay: '160ms' }}>
          <button
            disabled={page === 0}
            onClick={() => go(page - 1)}
            className="px-4 py-2.5 rounded-full border border-line bg-card text-inksoft text-xs font-mono tracking-wider transition-all disabled:opacity-30 enabled:hover:border-terra enabled:hover:text-terra enabled:active:scale-95"
          >← 上一页</button>
          <div className="flex items-center gap-1.5">
            {PAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`第 ${i + 1} 页`}
                className={`h-2 rounded-full transition-all ${page === i ? 'w-6 bg-terra' : 'w-2 bg-line hover:bg-terra/50'}`}
              />
            ))}
          </div>
          <button
            disabled={page === PAGES.length - 1}
            onClick={() => go(page + 1)}
            className="px-4 py-2.5 rounded-full border border-line bg-card text-inksoft text-xs font-mono tracking-wider transition-all disabled:opacity-30 enabled:hover:border-terra enabled:hover:text-terra enabled:active:scale-95"
          >下一页 →</button>
        </div>

        </main>

        {/* ============ FOOTER ============ */}
        <footer className="pt-8 mt-4 border-t border-line text-center">
          <div className="text-[9px] font-mono tracking-[0.28em] text-inkfaint uppercase">
            Based on Helms 2014 · Jäger 2017 ISSN · Mettler 2010 · Moro 2016
          </div>
          <div className="text-[9px] font-mono tracking-[0.2em] text-inkfaint/70 mt-2">For Personal Use · 不构成医疗建议</div>
        </footer>

      </div>

      {/* ============ 加餐小球(FAB)============ */}
      <button
        onClick={() => setSnackOpen(true)}
        aria-label="零食加餐"
        className="snack-fab fixed z-40 bottom-6 right-5 w-14 h-14 rounded-full bg-terra text-card shadow-warmlg grid place-items-center text-2xl active:scale-90"
      >
        🍪
        {snack && <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-sage border-2 border-paper" />}
      </button>

      {/* ============ 加餐抽屉(侧滑)============ */}
      {snackOpen && (
        <div className="fixed inset-0 z-50">
          <div className="snack-backdrop absolute inset-0 bg-ink/30 backdrop-blur-[2px]" onClick={() => setSnackOpen(false)} />
          <div className="snack-panel absolute inset-y-0 right-0 w-[min(420px,92vw)] bg-paper shadow-warmlg flex flex-col">
            {/* 抓手 + 标题 */}
            <div className="relative flex items-center justify-between px-5 pt-5 pb-3 border-b border-line">
              <span className="absolute left-1/2 -translate-x-1/2 top-1.5 w-10 h-1 rounded-full bg-line" />
              <div className="flex items-center gap-2.5">
                <span className="grid place-items-center w-9 h-9 rounded-full bg-honey/15 text-honey text-base">🍪</span>
                <div>
                  <div className="font-display text-lg text-ink leading-none" style={{ fontWeight: 500 }}>零食加餐</div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-inkfaint mt-1">Snack · AI 识别</div>
                </div>
              </div>
              <button onClick={() => setSnackOpen(false)} aria-label="关闭" className="w-9 h-9 grid place-items-center rounded-full border border-line text-inksoft hover:border-terra hover:text-terra transition-all">✕</button>
            </div>

            {/* 内容(可滚动)*/}
            <div className="flex-1 overflow-y-auto p-5">
              {!snack && (
                <>
                  <p className="text-[12px] text-inksoft leading-relaxed mb-4 font-cjk">
                    想吃点别的?拍一张零食包装<span className="text-terradeep">背面的成分表</span>,Gemini 自动识别营养、计入今天,并帮你重算晚餐。
                  </p>
                  <label className={`flex flex-col items-center justify-center gap-2 px-5 py-8 rounded-2xl border-2 border-dashed cursor-pointer transition-all ${analyzing ? 'border-honey/50 bg-honey/[0.05]' : 'border-line hover:border-terra hover:bg-terra/[0.04]'}`}>
                    <input
                      type="file" accept="image/*" capture="environment" className="hidden" disabled={analyzing}
                      onChange={(e) => { const f = e.target.files?.[0]; e.target.value = ''; analyzeSnack(f); }}
                    />
                    <span className="text-4xl">{analyzing ? '🍳' : '📷'}</span>
                    <span className="text-sm font-cjk text-ink" style={{ fontWeight: 500 }}>{analyzing ? 'Gemini 识别中…' : '拍 / 选 成分表照片'}</span>
                  </label>
                  {analyzing && (
                    <div className="mt-3 h-1.5 rounded-full bg-paper2 overflow-hidden">
                      <div className="h-full w-2/3 bg-honey animate-pulse rounded-full" />
                    </div>
                  )}
                </>
              )}

              {snack && (
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="min-w-0">
                      <div className="text-base font-cjk text-ink truncate" style={{ fontWeight: 600 }}>{snack.name}</div>
                      {snack.serving && <div className="text-[11px] text-inkfaint font-mono mt-0.5">按 {snack.serving} 计</div>}
                    </div>
                    <span className={`text-[9px] font-mono px-2 py-1 rounded-full tracking-wider shrink-0 ${snack.confidence === 'high' ? 'bg-sage/15 text-sagedeep' : snack.confidence === 'low' ? 'bg-terra/15 text-terradeep' : 'bg-honey/15 text-honey'}`}>
                      {snack.confidence === 'high' ? '识别可信' : snack.confidence === 'low' ? '仅供参考' : '大致估算'}
                    </span>
                  </div>
                  {snack.note && <p className="text-[12px] text-inksoft leading-relaxed mb-4 font-cjk">💬 {snack.note}</p>}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[['kcal', '热量', 'kcal'], ['p', '蛋白', 'g'], ['c', '碳水', 'g'], ['f', '脂肪', 'g']].map(([k, zh, u]) => (
                      <div key={k} className="rounded-2xl bg-card border border-line p-2.5 text-center">
                        <div className="text-[9px] font-mono text-inkfaint tracking-wider mb-1">{zh}</div>
                        <input
                          type="number" value={snack[k]} onChange={(e) => setSnackField(k, e.target.value)}
                          className="w-full bg-transparent outline-none text-center font-display text-2xl text-ink tnum" style={{ fontWeight: 400 }}
                        />
                        <div className="text-[8px] font-mono text-inkfaint">{u}</div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl bg-terra/[0.06] border border-terra/30 p-3.5 mb-3">
                    <div className="text-[10px] font-mono text-terradeep tracking-wider mb-1.5">→ 晚餐已自动调整</div>
                    <div className="text-[12px] text-inksoft font-cjk leading-relaxed">{dinnerSummary}</div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => { setSnackOpen(false); go(0); setTimeout(() => document.getElementById('dinner')?.scrollIntoView({ behavior: 'smooth' }), 380); }}
                      className="flex-1 px-4 py-2.5 rounded-full bg-terra text-card text-xs font-mono tracking-wider shadow-warm active:scale-95 transition-all"
                    >看调整后的晚餐 →</button>
                    <button onClick={() => { setSnack(null); setSnackErr(''); }} className="px-4 py-2.5 rounded-full border border-line bg-card text-inksoft text-xs font-mono tracking-wider hover:border-terra hover:text-terra transition-all">清除</button>
                  </div>
                </div>
              )}

              {snackErr && <div className="mt-3 text-[11px] font-mono text-terradeep leading-relaxed">⚠ {snackErr}</div>}

              {/* Gemini API Key(仅存本机浏览器)*/}
              <div className="mt-5 pt-4 border-t border-linesoft">
                {!keyEditing && apiKey && (
                  <div className="flex items-center justify-between text-[10px] font-mono text-inkfaint">
                    <span>🔑 Gemini Key 已保存 · 仅存本机</span>
                    <button onClick={() => setKeyEditing(true)} className="text-terradeep hover:underline">更换</button>
                  </div>
                )}
                {(keyEditing || !apiKey) && (
                  <div>
                    <div className="text-[10px] font-mono text-inkfaint mb-2 leading-relaxed">
                      填入你的 Gemini API Key（<a href="https://aistudio.google.com/apikey" target="_blank" rel="noreferrer" className="text-terradeep underline">aistudio.google.com/apikey</a>）。只保存在本机浏览器,不上传、不进仓库。
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="password" defaultValue={apiKey} placeholder="AIza..." id="gk"
                        className="flex-1 bg-card border border-line rounded-xl px-3 py-2 text-xs font-mono text-ink outline-none focus:border-terra"
                      />
                      <button
                        onClick={() => { const v = document.getElementById('gk').value.trim(); saveKey(v); setKeyEditing(false); }}
                        className="px-4 py-2 rounded-xl bg-terra text-card text-xs font-mono shrink-0"
                      >保存</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// ============ Food Log 小组件 ============
function TargetInput({ label, en, value, unit, onChange, accent }) {
  return (
    <div className={`rounded-2xl border p-2.5 text-center ${accent ? 'border-terra/40 bg-terra/[0.05]' : 'border-line bg-paper'}`}>
      <div className="text-[9px] font-mono text-inkfaint tracking-wider mb-1">{label} · {en}</div>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-transparent outline-none text-center font-display text-2xl tnum ${accent ? 'text-terradeep' : 'text-ink'}`}
        style={{ fontWeight: 400 }}
      />
      <div className="text-[8px] font-mono text-inkfaint">{unit}</div>
    </div>
  );
}
function LogGroup({ label }) {
  return <div className="px-4 py-2 bg-paper text-[9px] font-mono text-terradeep tracking-widest uppercase border-t border-linesoft">{label}</div>;
}
function LogRow({ name, p, c, f, k }) {
  return (
    <div className="grid grid-cols-12 gap-0 px-4 py-2 border-t border-linesoft text-xs font-mono tnum">
      <div className="col-span-5 text-ink font-cjk">{name}</div>
      <div className="col-span-2 text-right text-inksoft">{p}</div>
      <div className="col-span-2 text-right text-inksoft">{c}</div>
      <div className="col-span-1 text-right text-inksoft">{f}</div>
      <div className="col-span-2 text-right text-ink">{k}</div>
    </div>
  );
}
function ShopGroup({ title, items, img }) {
  return (
    <div className="rounded-3xl border border-line bg-card shadow-warm p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[10px] font-mono text-terradeep tracking-widest">{title}</div>
        {img && <img src={asset(img)} alt="" className="w-10 h-10 rounded-xl object-cover border border-line" loading="lazy" />}
      </div>
      <ul className="space-y-3 text-sm">
        {items.map(([name, note, qty]) => (
          <li key={name} className="flex justify-between items-baseline gap-3">
            <div className="min-w-0">
              <div className="text-ink font-cjk" style={{ fontWeight: 500 }}>{name}</div>
              <div className="text-[10px] text-inkfaint mt-0.5 font-mono">{note}</div>
            </div>
            <span className="text-honey font-mono text-xs shrink-0">{qty}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
