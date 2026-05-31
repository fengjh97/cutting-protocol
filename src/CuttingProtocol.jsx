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
const TARGETS = { p: 140, c: 225, f: 60, kcal: 2000 };

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

function calculate(lunchKcalIn, planKey, lunchOverride, beefFatIn = 9, preWorkout = { p: 22, c: 1, f: 2, kcal: 110 }, oikosIn = 1) {
  // 安全网:用局部常量净化输入(不改写参数本身,避免 iOS 只读报错)
  const lunchKcal = Number.isFinite(lunchKcalIn) ? Math.max(0, Math.min(5000, lunchKcalIn)) : 0;
  const beefFatPer100g = Number.isFinite(beefFatIn) ? Math.max(0, Math.min(40, beefFatIn)) : 9;
  const oikosCount = Number.isFinite(oikosIn) ? Math.max(0, Math.min(10, oikosIn)) : 0;

  const lunch = lunchOverride
    ? { ...lunchOverride }
    : estimateLunchMacros(lunchKcal);
  if (!lunch.kcal) {
    lunch.kcal = lunch.p * 4 + lunch.c * 4 + lunch.f * 9;
  }

  const beefFatCooked = beefFatPer100g * 0.80 / 100; // 水煮保留 80%

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

  // ===== 2. 牛肉基础量:按剩余蛋白缺口算,蛋白够了可降到 0 =====
  // 预留 1 包酱蛋白(0.9g)
  const proteinFromBeef = dinnerNeedP - carbFoodP - 0.9;
  let beef = Math.max(0, Math.round(proteinFromBeef / 0.19 / 10) * 10);

  // ===== 3. 脂肪缺口 → 酱(≤1 包)+ 额外牛肉补 =====
  const PROTEIN_CEILING = 165; // 蛋白安全上限 ≈ 2.66 g/kg LBM(补脂肪加牛肉的天花板)
  const fatFromFood = beef * beefFatCooked + carbFoodF;
  const fatGap = dinnerNeedF - fatFromFood;
  let sauceCount = Math.max(0, Math.min(1, Math.round(fatGap / 10)));
  const remainingFatGap = fatGap - sauceCount * 10;
  let extraBeef = 0;
  if (remainingFatGap > 2 && beefFatCooked > 0) {
    extraBeef = Math.min(250, Math.round((remainingFatGap / beefFatCooked) / 10) * 10);
    // 蛋白闸门:加牛肉补脂肪不能突破安全上限。蛋白已到顶 → 牛肉归 0,脂肪宁可略低
    const proteinSoFar = lunch.p + preWorkout.p + oikosP + carbFoodP + sauceCount * 0.9 + beef * 0.19;
    const proteinHeadroom = PROTEIN_CEILING - proteinSoFar;
    if (proteinHeadroom <= 0) {
      extraBeef = 0;
    } else {
      const maxExtraByProtein = Math.max(0, Math.floor(proteinHeadroom / 0.19 / 10) * 10);
      extraBeef = Math.min(extraBeef, maxExtraByProtein);
    }
  }
  beef += extraBeef;

  // ===== 4. 2000 kcal 铁线:分级削减 extraBeef → 酱 → 碳水主食,直到 ≤ 2000 =====
  const dinKcal = (b, cP, cC, cF, s) =>
    (b * 0.19 + cP + s * 0.9 + oikosP) * 4
    + (cC + s * 1.5 + oikosC) * 4
    + (b * beefFatCooked + cF + s * 10) * 9;
  const fixedKcal = lunch.kcal + preWorkout.kcal;

  // (a) 砍补脂肪的额外牛肉(牛肉回到纯蛋白需求量)
  if (fixedKcal + dinKcal(beef, carbFoodP, carbFoodC, carbFoodF, sauceCount) > TARGETS.kcal + 5 && extraBeef > 0) {
    beef -= extraBeef;
    extraBeef = 0;
  }
  // (b) 砍酱
  if (fixedKcal + dinKcal(beef, carbFoodP, carbFoodC, carbFoodF, sauceCount) > TARGETS.kcal + 5 && sauceCount > 0) {
    sauceCount = 0;
  }
  // (c) 砍碳水主食(可到 0)
  let over = fixedKcal + dinKcal(beef, carbFoodP, carbFoodC, carbFoodF, sauceCount) - TARGETS.kcal;
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
  // (d) 碳水主食砍光仍超 → 砍牛肉兜底(极端:训练前/午餐热量过高且蛋白偏低,此时 2000 铁线优先于蛋白)
  over = fixedKcal + dinKcal(beef, carbFoodP, carbFoodC, carbFoodF, sauceCount) - TARGETS.kcal;
  if (over > 5 && beef > 0) {
    const beefKcalPer10g = 1.9 * 4 + beefFatCooked * 10 * 9;
    beef = Math.max(0, beef - Math.ceil(over / beefKcalPer10g) * 10);
  }

  const plan = { beef, pasta, nissin, pho, sauce: sauceCount, banana: 0, oikos: oikosCount };

  // ===== 4. 实际晚餐宏量 =====
  const dinner = {
    p: beef * 0.19 + carbFoodP + sauceCount * 0.9 + oikosP,
    c: carbFoodC + sauceCount * 1.5 + oikosC,
    f: beef * beefFatCooked + carbFoodF + sauceCount * 10,
  };
  dinner.kcal = dinner.p * 4 + dinner.c * 4 + dinner.f * 9;

  const total = {
    p: lunch.p + preWorkout.p + dinner.p,
    c: lunch.c + preWorkout.c + dinner.c,
    f: lunch.f + preWorkout.f + dinner.f,
    kcal: lunch.kcal + preWorkout.kcal + dinner.kcal,
  };
  return { plan, lunch, dinner, total, beefFatPer100g, preWorkout, oikosKcal: oikosCount * 71 };
}

// ============ UI 组件 ============
const MacroBar = ({ label, value, target, unit = 'g', accent }) => {
  const pct = Math.min((value / target) * 100, 130);
  const diff = value - target;
  const status = Math.abs(diff) <= target * 0.05 ? 'ok' : (diff < 0 ? 'under' : 'over');
  const colors = {
    ok: '#7da671',
    under: '#c4a55a',
    over: '#c4402e',
  };
  return (
    <div className="mb-5">
      <div className="flex items-baseline justify-between mb-1.5">
        <div className="flex items-baseline gap-3">
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#7a6e5a] font-mono">{label}</span>
          <span className="text-[11px] text-[#7a6e5a] font-mono">target {target}{unit}</span>
        </div>
        <div className="font-mono">
          <span className="text-2xl text-[#efe5d6]">{Math.round(value)}</span>
          <span className="text-xs text-[#7a6e5a] ml-1">{unit}</span>
          <span 
            className="text-[10px] ml-3 font-mono"
            style={{ color: colors[status] }}
          >
            {diff >= 0 ? '+' : ''}{Math.round(diff)}
          </span>
        </div>
      </div>
      <div className="relative h-[3px] bg-[#251c14] overflow-hidden">
        <div 
          className="absolute h-full transition-all duration-500"
          style={{ width: `${Math.min(pct, 100)}%`, backgroundColor: colors[status] }}
        />
        {pct > 100 && (
          <div 
            className="absolute h-full"
            style={{ left: '100%', width: `${pct - 100}%`, backgroundColor: '#c4402e', opacity: 0.6 }}
          />
        )}
        <div className="absolute top-0 right-0 w-px h-full bg-[#3a2e22]" style={{ right: 0 }} />
      </div>
    </div>
  );
};

const FoodItem = ({ icon, name, sub, qty, unit, highlight }) => {
  if (qty <= 0) return null;
  return (
    <div className="flex items-baseline justify-between py-4 border-b border-[#251c14] last:border-b-0">
      <div className="flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-[10px] font-mono text-[#7a6e5a] tracking-widest">{icon}</span>
          <span className="text-base text-[#efe5d6]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            {name}
          </span>
        </div>
        {sub && <div className="text-[10px] text-[#5a5040] mt-1 font-mono uppercase tracking-wider ml-7">{sub}</div>}
      </div>
      <div className="flex items-baseline gap-1.5">
        <span 
          className="text-4xl text-[#efe5d6]"
          style={{ fontFamily: "'Newsreader', serif", fontWeight: 300 }}
        >
          {qty}
        </span>
        <span className="text-xs text-[#7a6e5a] font-mono uppercase tracking-wider">{unit}</span>
      </div>
    </div>
  );
};

// ============ 主组件 ============
export default function CuttingProtocol() {
  const [lunchKcal, setLunchKcal] = useState(800);
  const [planKey, setPlanKey] = useState('pasta');
  const [lunchMode, setLunchMode] = useState('quick');
  const [lunchProtein, setLunchProtein] = useState('beef');
  const [lunchCarb, setLunchCarb] = useState('rice');
  const [beefFat, setBeefFat] = useState(13);
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

  const result = useMemo(() => {
    const override = lunchMode === 'designer'
      ? { p: lunchDesign.total.p, c: lunchDesign.total.c, f: lunchDesign.total.f, kcal: lunchDesign.total.kcal }
      : null;
    return calculate(lunchKcal, planKey, override, beefFat, preWorkout, dinnerOikos);
  }, [lunchKcal, planKey, lunchMode, lunchDesign, beefFat, preWorkout, dinnerOikos]);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,300;0,400;0,500;1,400&family=DM+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+SC:wght@300;400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div 
      className="min-h-screen bg-[#0f0a07] text-[#efe5d6] py-10 px-5 sm:px-8"
      style={{ fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif" }}
    >
      <div className="max-w-2xl mx-auto">
        
        {/* ============ HEADER ============ */}
        <header className="mb-12 pb-8 border-b border-[#251c14]">
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-[10px] tracking-[0.3em] text-[#c4402e] font-mono uppercase">
              Protocol · 减脂指南
            </span>
            <span className="text-[10px] tracking-[0.2em] text-[#5a5040] font-mono">
              v2.0 / 16:8 IF
            </span>
          </div>
          <h1 
            className="text-5xl sm:text-6xl leading-[0.95] text-[#efe5d6] mb-3"
            style={{ fontFamily: "'Newsreader', serif", fontWeight: 300, fontStyle: 'italic' }}
          >
            晚餐<span style={{ fontStyle: 'normal' }}>·</span>处方
          </h1>
          <p className="text-[11px] text-[#7a6e5a] font-mono tracking-wider uppercase">
            83 kg · 25% BF · TDEE ≈ 2900 kcal · Daily Target 2000 kcal
          </p>
        </header>

        {/* ============ PRE-WORKOUT CONFIG ============ */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-mono text-[#c4402e] tracking-[0.25em]">00</span>
            <h2 className="text-xs font-mono tracking-[0.25em] uppercase text-[#7a6e5a]">
              训练前加餐 · Pre-Workout
            </h2>
          </div>

          <div className="flex gap-8 items-start flex-wrap">
            <div>
              <div className="text-[9px] font-mono text-[#5a5040] tracking-widest uppercase mb-2">鸡胸 / Chicken</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPreChicken(Math.max(0, preChicken - 1))}
                  className="w-8 h-8 border border-[#3a2e22] text-[#7a6e5a] hover:border-[#c4402e] hover:text-[#c4402e] transition-all font-mono text-lg"
                >−</button>
                <span
                  className="text-3xl w-8 text-center text-[#efe5d6]"
                  style={{ fontFamily: "'Newsreader', serif", fontWeight: 300 }}
                >{preChicken}</span>
                <button
                  onClick={() => setPreChicken(Math.min(5, preChicken + 1))}
                  className="w-8 h-8 border border-[#3a2e22] text-[#7a6e5a] hover:border-[#c4402e] hover:text-[#c4402e] transition-all font-mono text-lg"
                >+</button>
                <span className="text-[9px] text-[#5a5040] font-mono ml-1">块</span>
              </div>
            </div>

            <div>
              <div className="text-[9px] font-mono text-[#5a5040] tracking-widest uppercase mb-2">全蛋 / Eggs</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPreEggs(Math.max(0, preEggs - 1))}
                  className="w-8 h-8 border border-[#3a2e22] text-[#7a6e5a] hover:border-[#c4402e] hover:text-[#c4402e] transition-all font-mono text-lg"
                >−</button>
                <span
                  className="text-3xl w-8 text-center text-[#efe5d6]"
                  style={{ fontFamily: "'Newsreader', serif", fontWeight: 300 }}
                >{preEggs}</span>
                <button
                  onClick={() => setPreEggs(Math.min(5, preEggs + 1))}
                  className="w-8 h-8 border border-[#3a2e22] text-[#7a6e5a] hover:border-[#c4402e] hover:text-[#c4402e] transition-all font-mono text-lg"
                >+</button>
                <span className="text-[9px] text-[#5a5040] font-mono ml-1">个</span>
              </div>
            </div>

            <div>
              <div className="text-[9px] font-mono text-[#5a5040] tracking-widest uppercase mb-2">香蕉 / Banana</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPreBanana(Math.max(0, preBanana - 1))}
                  className="w-8 h-8 border border-[#3a2e22] text-[#7a6e5a] hover:border-[#c4402e] hover:text-[#c4402e] transition-all font-mono text-lg"
                >−</button>
                <span
                  className="text-3xl w-8 text-center text-[#efe5d6]"
                  style={{ fontFamily: "'Newsreader', serif", fontWeight: 300 }}
                >{preBanana}</span>
                <button
                  onClick={() => setPreBanana(Math.min(5, preBanana + 1))}
                  className="w-8 h-8 border border-[#3a2e22] text-[#7a6e5a] hover:border-[#c4402e] hover:text-[#c4402e] transition-all font-mono text-lg"
                >+</button>
                <span className="text-[9px] text-[#5a5040] font-mono ml-1">根</span>
              </div>
            </div>

            <div>
              <div className="text-[9px] font-mono text-[#c4a55a] tracking-widest uppercase mb-2">Oikos / 晚餐</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDinnerOikos(Math.max(0, dinnerOikos - 1))}
                  className="w-8 h-8 border border-[#3a2e22] text-[#7a6e5a] hover:border-[#c4a55a] hover:text-[#c4a55a] transition-all font-mono text-lg"
                >−</button>
                <span
                  className="text-3xl w-8 text-center text-[#efe5d6]"
                  style={{ fontFamily: "'Newsreader', serif", fontWeight: 300 }}
                >{dinnerOikos}</span>
                <button
                  onClick={() => setDinnerOikos(Math.min(5, dinnerOikos + 1))}
                  className="w-8 h-8 border border-[#3a2e22] text-[#7a6e5a] hover:border-[#c4a55a] hover:text-[#c4a55a] transition-all font-mono text-lg"
                >+</button>
                <span className="text-[9px] text-[#5a5040] font-mono ml-1">個</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-baseline gap-4">
            <div className="text-[10px] font-mono text-[#7a6e5a] tracking-wider">
              → P{preWorkout.p} · C{Math.round(preWorkout.c)} · F{preWorkout.f} = <span className="text-[#efe5d6]">{preWorkout.kcal} kcal</span>
            </div>
            {preChicken === 0 && preEggs === 0 && (
              <span className="text-[9px] font-mono text-[#c4a55a]">空腹训练</span>
            )}
          </div>
        </section>

        {/* ============ INPUT SECTION ============ */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-mono text-[#c4402e] tracking-[0.25em]">01</span>
            <h2 className="text-xs font-mono tracking-[0.25em] uppercase text-[#7a6e5a]">
              中午摄入
            </h2>
          </div>

          {/* Mode Toggle */}
          <div className="flex gap-0 mb-6 border border-[#251c14]">
            <button
              onClick={() => setLunchMode('quick')}
              className={`flex-1 px-4 py-2.5 text-[10px] font-mono tracking-[0.25em] uppercase transition-all ${
                lunchMode === 'quick'
                  ? 'bg-[#c4402e] text-[#0f0a07]'
                  : 'text-[#7a6e5a] hover:text-[#efe5d6]'
              }`}
            >
              直接输入 / Quick
            </button>
            <button
              onClick={() => setLunchMode('designer')}
              className={`flex-1 px-4 py-2.5 text-[10px] font-mono tracking-[0.25em] uppercase transition-all border-l border-[#251c14] ${
                lunchMode === 'designer'
                  ? 'bg-[#c4402e] text-[#0f0a07]'
                  : 'text-[#7a6e5a] hover:text-[#efe5d6]'
              }`}
            >
              设计午餐 / Designer
            </button>
          </div>

          {/* === Quick Mode === */}
          {lunchMode === 'quick' && (
            <>
              <div className="flex items-baseline gap-3 mb-6">
                <input
                  type="number"
                  value={lunchKcal}
                  onChange={(e) => {
                    const v = e.target.value;
                    if (v === '') { setLunchKcal(0); return; }
                    const n = Number(v);
                    setLunchKcal(Number.isFinite(n) ? Math.min(5000, Math.max(0, n)) : 0);
                  }}
                  className="bg-transparent border-b border-[#3a2e22] focus:border-[#c4402e] outline-none text-6xl sm:text-7xl text-[#efe5d6] w-48 pb-1 transition-colors"
                  style={{ fontFamily: "'Newsreader', serif", fontWeight: 300 }}
                  step={1}
                />
                <span className="text-sm font-mono text-[#7a6e5a] tracking-widest">KCAL</span>
              </div>

              <div className="flex gap-2 flex-wrap items-center">
                <span className="text-[9px] font-mono text-[#5a5040] tracking-widest uppercase mr-1">Quick</span>
                {[600, 700, 800, 900, 1000].map((v) => (
                  <button
                    key={v}
                    onClick={() => setLunchKcal(v)}
                    className={`px-3 py-1.5 text-xs font-mono tracking-wider transition-all border ${
                      lunchKcal === v
                        ? 'border-[#c4402e] text-[#c4402e] bg-[#1a0f0a]'
                        : 'border-[#3a2e22] text-[#7a6e5a] hover:border-[#5a5040] hover:text-[#efe5d6]'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>

              {(lunchKcal < 500 || lunchKcal > 1100) && lunchKcal > 0 && (
                <div className="mt-4 text-[10px] font-mono text-[#c4a55a] tracking-wider">
                  ⚠ {lunchKcal < 500 ? '中午吃得偏少,晚上配方按外推计算' : '中午吃得偏多,赤字会被压缩,晚上配方按外推计算'}
                </div>
              )}
            </>
          )}

          {/* === Designer Mode === */}
          {lunchMode === 'designer' && (
            <div className="space-y-6">
              {/* 目标热量 */}
              <div>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-[9px] font-mono text-[#5a5040] tracking-[0.25em] uppercase">Target</span>
                  <input
                    type="number"
                    value={lunchKcal}
                    onChange={(e) => {
                      const v = e.target.value;
                      if (v === '') { setLunchKcal(0); return; }
                      const n = Number(v);
                      setLunchKcal(Number.isFinite(n) ? Math.min(5000, Math.max(0, n)) : 0);
                    }}
                    className="bg-transparent border-b border-[#3a2e22] focus:border-[#c4402e] outline-none text-5xl text-[#efe5d6] w-36 pb-1 transition-colors"
                    style={{ fontFamily: "'Newsreader', serif", fontWeight: 300 }}
                    step={1}
                  />
                  <span className="text-xs font-mono text-[#7a6e5a] tracking-widest">KCAL</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {[600, 700, 800, 900, 1000].map((v) => (
                    <button
                      key={v}
                      onClick={() => setLunchKcal(v)}
                      className={`px-2.5 py-1 text-[10px] font-mono tracking-wider transition-all border ${
                        lunchKcal === v
                          ? 'border-[#c4402e] text-[#c4402e] bg-[#1a0f0a]'
                          : 'border-[#3a2e22] text-[#7a6e5a] hover:border-[#5a5040]'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* 蛋白源选择 */}
              <div>
                <div className="text-[9px] font-mono text-[#5a5040] tracking-[0.25em] uppercase mb-3">
                  Protein Source · 蛋白源
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {Object.entries(LUNCH_PROTEINS).map(([key, prot]) => (
                    <button
                      key={key}
                      onClick={() => setLunchProtein(key)}
                      className={`text-left p-3 border transition-all ${
                        lunchProtein === key
                          ? 'border-[#c4402e] bg-[#1a0f0a]'
                          : 'border-[#251c14] hover:border-[#5a5040]'
                      }`}
                    >
                      <div className="text-[8px] font-mono tracking-[0.25em] text-[#c4402e] mb-1">
                        {prot.tag}
                      </div>
                      <div
                        className="text-sm text-[#efe5d6] mb-1"
                        style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                      >
                        {prot.label}
                      </div>
                      <div className="text-[9px] text-[#7a6e5a]">{prot.note}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 碳水源选择 */}
              <div>
                <div className="text-[9px] font-mono text-[#5a5040] tracking-[0.25em] uppercase mb-3">
                  Carb Source · 碳水源
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Object.entries(LUNCH_CARBS).map(([key, carb]) => (
                    <button
                      key={key}
                      onClick={() => setLunchCarb(key)}
                      className={`text-left p-3 border transition-all ${
                        lunchCarb === key
                          ? 'border-[#c4402e] bg-[#1a0f0a]'
                          : 'border-[#251c14] hover:border-[#5a5040]'
                      }`}
                    >
                      <div className="text-[10px] text-[#efe5d6]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                        {carb.label}
                      </div>
                      <div className="text-[8px] text-[#5a5040] mt-1 font-mono uppercase">{carb.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 午餐方案输出 */}
              <div className="p-5 bg-[#13100c] border-l-2 border-[#c4a55a]">
                <div className="flex items-baseline justify-between mb-4">
                  <div className="text-[9px] font-mono text-[#c4a55a] tracking-[0.3em]">
                    LUNCH · COMPOSITION
                  </div>
                  <div className="text-right">
                    <span
                      className="text-2xl text-[#efe5d6]"
                      style={{ fontFamily: "'Newsreader', serif", fontWeight: 300 }}
                    >
                      {Math.round(lunchDesign.total.kcal)}
                    </span>
                    <span className="text-[10px] text-[#7a6e5a] ml-1 font-mono">KCAL</span>
                  </div>
                </div>

                {/* 蛋白源输出 */}
                <div className="flex items-baseline justify-between py-3 border-b border-[#251c14]">
                  <div className="flex-1">
                    <div className="text-[9px] font-mono text-[#5a5040] tracking-widest mb-0.5">
                      01 · PROTEIN
                    </div>
                    <div className="text-sm text-[#efe5d6]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      {lunchDesign.protein.label}
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className="text-3xl text-[#efe5d6]"
                      style={{ fontFamily: "'Newsreader', serif", fontWeight: 300 }}
                    >
                      {lunchProtein === 'chicken'
                        ? Math.round(lunchDesign.protein.grams / LUNCH_PROTEINS.chicken.perPiece)
                        : lunchDesign.protein.grams}
                    </span>
                    <span className="text-[10px] text-[#7a6e5a] font-mono uppercase">
                      {lunchDesign.protein.pieceUnitEn}
                    </span>
                  </div>
                </div>

                {/* 碳水源输出 */}
                <div className="flex items-baseline justify-between py-3">
                  <div className="flex-1">
                    <div className="text-[9px] font-mono text-[#5a5040] tracking-widest mb-0.5">
                      02 · CARB
                    </div>
                    <div className="text-sm text-[#efe5d6]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      {lunchDesign.carb.label}
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className="text-3xl text-[#efe5d6]"
                      style={{ fontFamily: "'Newsreader', serif", fontWeight: 300 }}
                    >
                      {lunchDesign.carb.isDiscrete ? lunchDesign.carb.packs : lunchDesign.carb.grams}
                    </span>
                    <span className="text-[10px] text-[#7a6e5a] font-mono uppercase">
                      {lunchDesign.carb.isDiscrete ? 'PACK' : 'GRAM'}
                    </span>
                  </div>
                </div>

                {/* 午餐宏量 */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-[#251c14]">
                  <div className="text-center">
                    <div className="text-[9px] font-mono text-[#7a6e5a] tracking-widest">蛋白</div>
                    <div className="font-mono text-base text-[#efe5d6] mt-0.5">
                      {Math.round(lunchDesign.total.p)}<span className="text-[10px] text-[#5a5040] ml-0.5">g</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[9px] font-mono text-[#7a6e5a] tracking-widest">碳水</div>
                    <div className="font-mono text-base text-[#efe5d6] mt-0.5">
                      {Math.round(lunchDesign.total.c)}<span className="text-[10px] text-[#5a5040] ml-0.5">g</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[9px] font-mono text-[#7a6e5a] tracking-widest">脂肪</div>
                    <div className="font-mono text-base text-[#efe5d6] mt-0.5">
                      {Math.round(lunchDesign.total.f)}<span className="text-[10px] text-[#5a5040] ml-0.5">g</span>
                    </div>
                  </div>
                </div>

                {lunchProtein === 'salmon' && (
                  <div className="mt-3 text-[10px] font-mono text-[#c4a55a] tracking-wider leading-relaxed">
                    ⓘ 三文鱼天然高脂(13g/100g),晚上脂肪空间会被挤压,推荐选 <span className="text-[#c4402e]">日清</span> 或 <span className="text-[#c4402e]">米粉</span> 方案。
                  </div>
                )}
              </div>
            </div>
          )}
        </section>

        {/* ============ PLAN SELECTOR ============ */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-mono text-[#c4402e] tracking-[0.25em]">02</span>
            <h2 className="text-xs font-mono tracking-[0.25em] uppercase text-[#7a6e5a]">
              选择方案
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {Object.entries(PLANS).map(([key, plan]) => (
              <button
                key={key}
                onClick={() => setPlanKey(key)}
                className={`text-left p-4 border transition-all ${
                  planKey === key
                    ? 'border-[#c4402e] bg-[#1a0f0a]'
                    : 'border-[#251c14] hover:border-[#5a5040]'
                }`}
              >
                <div className="text-[9px] font-mono tracking-[0.25em] text-[#c4402e] mb-1.5">
                  {plan.tagline}
                </div>
                <div 
                  className="text-lg text-[#efe5d6] mb-1.5"
                  style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
                >
                  {plan.name}
                </div>
                <div className="text-[10px] text-[#7a6e5a] leading-relaxed">
                  {plan.desc}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ============ BEEF FAT CALIBRATION ============ */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-mono text-[#c4402e] tracking-[0.25em]">03</span>
            <h2 className="text-xs font-mono tracking-[0.25em] uppercase text-[#7a6e5a]">
              牛肉脂肪校准 · Beef Fat
            </h2>
          </div>

          <div className="text-[10px] text-[#7a6e5a] mb-4 leading-relaxed">
            查看包装背面「脂質」一行,输入或选择档位。<span className="text-[#c4402e]">酱固定 ≤1 包,脂肪缺口由牛肉补。</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {[
              { v: 5,  label: '5g 极瘦',  sub: 'もも赤身' },
              { v: 9,  label: '9g 标准',   sub: 'もも / 混合' },
              { v: 13, label: '13g 偏肥',  sub: '肩 / 肩ロース' },
              { v: 18, label: '18g 较肥',  sub: 'バラ混合' },
            ].map(opt => (
              <button
                key={opt.v}
                onClick={() => setBeefFat(opt.v)}
                className={`text-left p-3 border transition-all ${
                  beefFat === opt.v
                    ? 'border-[#c4402e] bg-[#1a0f0a]'
                    : 'border-[#251c14] hover:border-[#5a5040]'
                }`}
              >
                <div className="text-sm text-[#efe5d6] font-mono">{opt.label}</div>
                <div className="text-[8px] text-[#5a5040] mt-0.5 font-mono uppercase">{opt.sub}</div>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[9px] font-mono text-[#5a5040] tracking-wider">自定义</span>
            <input
              type="number"
              value={beefFat}
              onChange={(e) => setBeefFat(Math.max(0, Math.min(40, Number(e.target.value) || 0)))}
              className="bg-transparent border-b border-[#3a2e22] focus:border-[#c4402e] outline-none text-xl text-[#efe5d6] w-16 pb-0.5 transition-colors font-mono text-center"
              step={1}
            />
            <span className="text-[9px] font-mono text-[#5a5040] tracking-wider">g / 100g (raw)</span>
            <span className="text-[9px] font-mono text-[#c4a55a] tracking-wider ml-2">
              → 水煮后 {(beefFat * 0.8).toFixed(1)}g
            </span>
          </div>

          <div className="mt-3 text-[10px] font-mono text-[#5a5040] leading-relaxed">
            水煮脂肪保留率 ≈ 80% · 酱固定 ≤1 包 · 脂肪缺口由牛肉补: 当前牛肉 <span className="text-[#c4402e]">{result.plan.beef}g</span> / 酱 <span className="text-[#c4402e]">{result.plan.sauce}包</span>
          </div>
        </section>

        {/* ============ DINNER PROTOCOL ============ */}
        <section className="mb-10 p-6 sm:p-8 bg-[#13100c] border-l-2 border-[#c4402e]">
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <div className="text-[9px] font-mono tracking-[0.3em] text-[#c4402e] mb-1.5">
                TONIGHT · 训练后晚餐
              </div>
              <h2 
                className="text-3xl text-[#efe5d6]"
                style={{ fontFamily: "'Newsreader', serif", fontWeight: 300, fontStyle: 'italic' }}
              >
                Dinner Composition
              </h2>
            </div>
            <div className="text-right">
              <div className="text-[9px] font-mono tracking-widest text-[#7a6e5a] mb-1">DINNER KCAL</div>
              <div 
                className="text-3xl text-[#efe5d6]"
                style={{ fontFamily: "'Newsreader', serif", fontWeight: 300 }}
              >
                {Math.round(result.dinner.kcal)}
              </div>
            </div>
          </div>
          
          <div className="space-y-0">
            <FoodItem 
              icon="01" 
              name="牛肉 切り落とし(生)" 
              sub="Australian Beef · Boiled" 
              qty={result.plan.beef} 
              unit="GRAM" 
            />
            <FoodItem 
              icon="02" 
              name="干意面" 
              sub="Dry Pasta · 100g portion" 
              qty={result.plan.pasta} 
              unit="GRAM" 
            />
            <FoodItem 
              icon="03" 
              name="日清非油炸泡面" 
              sub="Non-fried Ramen" 
              qty={result.plan.nissin} 
              unit="PACK" 
            />
            <FoodItem 
              icon="04" 
              name="越南米粉" 
              sub="Vietnamese Pho · 60g" 
              qty={result.plan.pho} 
              unit="PACK" 
            />
            <FoodItem 
              icon="05" 
              name="ペペロンチーノ酱" 
              sub="Garlic Oil Sauce · S&B" 
              qty={result.plan.sauce} 
              unit="PACK" 
            />
            <FoodItem 
              icon="06" 
              name="香蕉(中)" 
              sub="Banana · Medium" 
              qty={result.plan.banana} 
              unit="PCS" 
            />
            <FoodItem 
              icon="07" 
              name="オイコス 砂糖不使用" 
              sub="OIKOS Plain · Dessert" 
              qty={result.plan.oikos || 0} 
              unit="PCS" 
            />
          </div>
        </section>

        {/* ============ MACRO VERIFICATION ============ */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-mono text-[#c4402e] tracking-[0.25em]">04</span>
            <h2 className="text-xs font-mono tracking-[0.25em] uppercase text-[#7a6e5a]">
              全天营养验算
            </h2>
          </div>
          
          <MacroBar label="Protein 蛋白" value={result.total.p} target={TARGETS.p} unit="g" />
          <MacroBar label="Carbs 碳水" value={result.total.c} target={TARGETS.c} unit="g" />
          <MacroBar label="Fat 脂肪" value={result.total.f} target={TARGETS.f} unit="g" />
          <MacroBar label="Calories 热量" value={result.total.kcal} target={TARGETS.kcal} unit="kcal" />
          
          <div className="mt-8 grid grid-cols-3 gap-3 text-[10px] font-mono">
            <div className="border border-[#251c14] p-3">
              <div className="text-[#7a6e5a] mb-1 tracking-wider">LUNCH</div>
              <div className="text-[#efe5d6] text-base">{Math.round(result.lunch.kcal)} kcal</div>
              <div className="text-[#5a5040] mt-1 text-[9px]">
                P{Math.round(result.lunch.p)} · C{Math.round(result.lunch.c)} · F{Math.round(result.lunch.f)}
              </div>
            </div>
            <div className="border border-[#251c14] p-3">
              <div className="text-[#7a6e5a] mb-1 tracking-wider">PRE-W/O</div>
              <div className="text-[#efe5d6] text-base">{preWorkout.kcal} kcal</div>
              <div className="text-[#5a5040] mt-1 text-[9px]">
                P{preWorkout.p} · C{Math.round(preWorkout.c)} · F{preWorkout.f}
              </div>
            </div>
            <div className="border border-[#c4402e] p-3 bg-[#1a0f0a]">
              <div className="text-[#c4402e] mb-1 tracking-wider">DINNER</div>
              <div className="text-[#efe5d6] text-base">{Math.round(result.dinner.kcal)} kcal</div>
              <div className="text-[#5a5040] mt-1 text-[9px]">
                P{Math.round(result.dinner.p)} · C{Math.round(result.dinner.c)} · F{Math.round(result.dinner.f)}
              </div>
            </div>
          </div>
        </section>

        {/* ============ TODAY'S FOOD LOG ============ */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-mono text-[#c4402e] tracking-[0.25em]">05</span>
            <h2 className="text-xs font-mono tracking-[0.25em] uppercase text-[#7a6e5a]">
              今日食物明细 · Food Log
            </h2>
          </div>

          <div className="border border-[#251c14] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-12 gap-0 bg-[#1a120c] px-3 py-2 text-[9px] font-mono tracking-widest text-[#7a6e5a] uppercase">
              <div className="col-span-5">Item</div>
              <div className="col-span-2 text-right">P</div>
              <div className="col-span-2 text-right">C</div>
              <div className="col-span-1 text-right">F</div>
              <div className="col-span-2 text-right">kcal</div>
            </div>

            {/* 训练前 */}
            <div className="px-3 py-1.5 bg-[#13100c] text-[9px] font-mono text-[#c4402e] tracking-widest uppercase">PRE-WORKOUT</div>
            {preChicken > 0 && (
              <div className="grid grid-cols-12 gap-0 px-3 py-1.5 border-t border-[#1a120c] text-xs">
                <div className="col-span-5 text-[#efe5d6]">鸡胸 × {preChicken}</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{preChicken * 22}</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{preChicken * 1}</div>
                <div className="col-span-1 text-right font-mono text-[#7a6e5a]">{preChicken * 2}</div>
                <div className="col-span-2 text-right font-mono text-[#efe5d6]">{preChicken * 110}</div>
              </div>
            )}
            {preEggs > 0 && (
              <div className="grid grid-cols-12 gap-0 px-3 py-1.5 border-t border-[#1a120c] text-xs">
                <div className="col-span-5 text-[#efe5d6]">全蛋 × {preEggs}</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{preEggs * 6}</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{Math.round(preEggs * 0.5)}</div>
                <div className="col-span-1 text-right font-mono text-[#7a6e5a]">{preEggs * 5}</div>
                <div className="col-span-2 text-right font-mono text-[#efe5d6]">{Math.round(preEggs * 72)}</div>
              </div>
            )}
            {preBanana > 0 && (
              <div className="grid grid-cols-12 gap-0 px-3 py-1.5 border-t border-[#1a120c] text-xs">
                <div className="col-span-5 text-[#efe5d6]">香蕉 × {preBanana}</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{preBanana}</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{preBanana * 27}</div>
                <div className="col-span-1 text-right font-mono text-[#7a6e5a]">{Math.round(preBanana * 0.25)}</div>
                <div className="col-span-2 text-right font-mono text-[#efe5d6]">{Math.round(preBanana * 113)}</div>
              </div>
            )}
            {preChicken === 0 && preEggs === 0 && preBanana === 0 && (
              <div className="px-3 py-1.5 border-t border-[#1a120c] text-xs text-[#5a5040]">空腹训练</div>
            )}

            {/* 午餐 */}
            <div className="px-3 py-1.5 bg-[#13100c] text-[9px] font-mono text-[#c4402e] tracking-widest uppercase">LUNCH · {lunchMode === 'designer' ? '自制' : '食堂'}</div>
            <div className="grid grid-cols-12 gap-0 px-3 py-1.5 border-t border-[#1a120c] text-xs">
              <div className="col-span-5 text-[#efe5d6]">{lunchMode === 'designer' ? '午餐设计' : '食堂'} ~{lunchKcal}kcal</div>
              <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{Math.round(result.lunch.p)}</div>
              <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{Math.round(result.lunch.c)}</div>
              <div className="col-span-1 text-right font-mono text-[#7a6e5a]">{Math.round(result.lunch.f)}</div>
              <div className="col-span-2 text-right font-mono text-[#efe5d6]">{Math.round(result.lunch.kcal)}</div>
            </div>

            {/* 晚餐 */}
            <div className="px-3 py-1.5 bg-[#13100c] text-[9px] font-mono text-[#c4402e] tracking-widest uppercase">DINNER</div>
            {result.plan.beef > 0 && (
              <div className="grid grid-cols-12 gap-0 px-3 py-1.5 border-t border-[#1a120c] text-xs">
                <div className="col-span-5 text-[#efe5d6]">牛肉 {result.plan.beef}g</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{Math.round(result.plan.beef * 0.19)}</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">0</div>
                <div className="col-span-1 text-right font-mono text-[#7a6e5a]">{Math.round(result.plan.beef * beefFat * 0.8 / 100)}</div>
                <div className="col-span-2 text-right font-mono text-[#efe5d6]">{Math.round(result.plan.beef * 0.19 * 4 + result.plan.beef * beefFat * 0.8 / 100 * 9)}</div>
              </div>
            )}
            {result.plan.pasta > 0 && (
              <div className="grid grid-cols-12 gap-0 px-3 py-1.5 border-t border-[#1a120c] text-xs">
                <div className="col-span-5 text-[#efe5d6]">干意面 {result.plan.pasta}g</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{Math.round(result.plan.pasta * 0.12)}</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{Math.round(result.plan.pasta * 0.71)}</div>
                <div className="col-span-1 text-right font-mono text-[#7a6e5a]">{Math.round(result.plan.pasta * 0.015)}</div>
                <div className="col-span-2 text-right font-mono text-[#efe5d6]">{Math.round(result.plan.pasta * 3.55)}</div>
              </div>
            )}
            {result.plan.nissin > 0 && (
              <div className="grid grid-cols-12 gap-0 px-3 py-1.5 border-t border-[#1a120c] text-xs">
                <div className="col-span-5 text-[#efe5d6]">日清 × {result.plan.nissin}</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{Math.round(result.plan.nissin * 6.7)}</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{Math.round(result.plan.nissin * 55)}</div>
                <div className="col-span-1 text-right font-mono text-[#7a6e5a]">{Math.round(result.plan.nissin * 4.9)}</div>
                <div className="col-span-2 text-right font-mono text-[#efe5d6]">{Math.round(result.plan.nissin * 291)}</div>
              </div>
            )}
            {result.plan.pho > 0 && (
              <div className="grid grid-cols-12 gap-0 px-3 py-1.5 border-t border-[#1a120c] text-xs">
                <div className="col-span-5 text-[#efe5d6]">越南米粉 × {result.plan.pho}</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{Math.round(result.plan.pho * 4)}</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{Math.round(result.plan.pho * 43)}</div>
                <div className="col-span-1 text-right font-mono text-[#7a6e5a]">{Math.round(result.plan.pho * 2)}</div>
                <div className="col-span-2 text-right font-mono text-[#efe5d6]">{Math.round(result.plan.pho * 210)}</div>
              </div>
            )}
            {result.plan.sauce > 0 && (
              <div className="grid grid-cols-12 gap-0 px-3 py-1.5 border-t border-[#1a120c] text-xs">
                <div className="col-span-5 text-[#efe5d6]">ペペロン酱 × {result.plan.sauce}</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{Math.round(result.plan.sauce * 0.9)}</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{Math.round(result.plan.sauce * 1.5)}</div>
                <div className="col-span-1 text-right font-mono text-[#7a6e5a]">{result.plan.sauce * 10}</div>
                <div className="col-span-2 text-right font-mono text-[#efe5d6]">{result.plan.sauce * 100}</div>
              </div>
            )}
            {result.plan.banana > 0 && (
              <div className="grid grid-cols-12 gap-0 px-3 py-1.5 border-t border-[#1a120c] text-xs">
                <div className="col-span-5 text-[#efe5d6]">香蕉 × {result.plan.banana}</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{result.plan.banana}</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{result.plan.banana * 27}</div>
                <div className="col-span-1 text-right font-mono text-[#7a6e5a]">{Math.round(result.plan.banana * 0.25)}</div>
                <div className="col-span-2 text-right font-mono text-[#efe5d6]">{Math.round(result.plan.banana * 113)}</div>
              </div>
            )}
            {(result.plan.oikos || 0) > 0 && (
              <div className="grid grid-cols-12 gap-0 px-3 py-1.5 border-t border-[#1a120c] text-xs">
                <div className="col-span-5 text-[#efe5d6]">オイコス × {result.plan.oikos}</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{result.plan.oikos * 12}</div>
                <div className="col-span-2 text-right font-mono text-[#7a6e5a]">{result.plan.oikos * 5}</div>
                <div className="col-span-1 text-right font-mono text-[#7a6e5a]">0</div>
                <div className="col-span-2 text-right font-mono text-[#efe5d6]">{result.plan.oikos * 71}</div>
              </div>
            )}

            {/* 合计 */}
            <div className="grid grid-cols-12 gap-0 px-3 py-2.5 bg-[#1a120c] border-t-2 border-[#c4402e] text-xs font-mono">
              <div className="col-span-5 text-[#c4402e] tracking-widest uppercase text-[9px]">Total</div>
              <div className="col-span-2 text-right text-[#efe5d6]">{Math.round(result.total.p)}</div>
              <div className="col-span-2 text-right text-[#efe5d6]">{Math.round(result.total.c)}</div>
              <div className="col-span-1 text-right text-[#efe5d6]">{Math.round(result.total.f)}</div>
              <div className="col-span-2 text-right text-[#efe5d6]">{Math.round(result.total.kcal)}</div>
            </div>

            {/* 目标 */}
            <div className="grid grid-cols-12 gap-0 px-3 py-2 border-t border-[#251c14] text-xs font-mono">
              <div className="col-span-5 text-[#5a5040] tracking-widest uppercase text-[9px]">Target</div>
              <div className="col-span-2 text-right text-[#5a5040]">{TARGETS.p}</div>
              <div className="col-span-2 text-right text-[#5a5040]">{TARGETS.c}</div>
              <div className="col-span-1 text-right text-[#5a5040]">{TARGETS.f}</div>
              <div className="col-span-2 text-right text-[#5a5040]">{TARGETS.kcal}</div>
            </div>

            {/* 差异 */}
            <div className="grid grid-cols-12 gap-0 px-3 py-2 border-t border-[#251c14] text-xs font-mono">
              <div className="col-span-5 text-[#5a5040] tracking-widest uppercase text-[9px]">Diff</div>
              {[
                { val: result.total.p - TARGETS.p },
                { val: result.total.c - TARGETS.c },
                { val: result.total.f - TARGETS.f },
                { val: result.total.kcal - TARGETS.kcal },
              ].map((d, i) => (
                <div key={i} className={`${i === 2 ? 'col-span-1' : 'col-span-2'} text-right`}
                  style={{ color: Math.abs(d.val) <= (i === 3 ? 100 : 15) ? '#7da671' : '#c4a55a' }}
                >
                  {d.val >= 0 ? '+' : ''}{Math.round(d.val)}
                </div>
              ))}
            </div>

            {/* 超标警告:固定摄入已超 2000,晚餐砍无可砍 */}
            {result.total.kcal > 2005 && (
              <div className="px-3 py-3 border-t-2 border-[#c4402e] bg-[#1f1310]">
                <div className="text-[10px] font-mono text-[#c4402e] tracking-wider mb-1">⚠ 已超 2000 kcal 铁线</div>
                <div className="text-[11px] text-[#a89878] leading-relaxed">
                  训练前 + 午餐 + Oikos 这些<span className="text-[#efe5d6]">已经吃掉的部分</span>合计 {Math.round(result.lunch.kcal + result.preWorkout.kcal + result.oikosKcal)} kcal,
                  晚餐已压到最低(牛肉 {result.plan.beef}g、主食砍光)仍超标。
                  <span className="text-[#c4a55a]">减少训练前加餐或 Oikos 数量。</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ============ DAILY SCHEDULE ============ */}
        <section className="mb-10 py-6 border-y border-[#251c14]">
          <div className="text-[10px] font-mono tracking-[0.25em] text-[#7a6e5a] mb-4">
            DAILY SCHEDULE · 16:8 IF
          </div>
          <div className="space-y-3 font-mono text-xs">
            <div className="flex">
              <span className="text-[#c4402e] w-16">12:00</span>
              <span className="text-[#efe5d6] flex-1">食堂午餐 / 替代 — Lunch (open feeding window)</span>
            </div>
            <div className="flex">
              <span className="text-[#c4402e] w-16">15:00</span>
              <span className="text-[#7a6e5a] flex-1">训练前 — {preChicken > 0 ? `${preChicken}块鸡胸` : ''}{preChicken > 0 && (preEggs > 0 || preBanana > 0) ? ' + ' : ''}{preEggs > 0 ? `${preEggs}个全蛋` : ''}{preEggs > 0 && preBanana > 0 ? ' + ' : ''}{preBanana > 0 ? `${preBanana}根香蕉` : ''}{preChicken === 0 && preEggs === 0 && preBanana === 0 ? '空腹' : ''}</span>
            </div>
            <div className="flex">
              <span className="text-[#c4402e] w-16">17:00</span>
              <span className="text-[#7a6e5a] flex-1">训练时段 — MET7 1h + 力量(周3次)</span>
            </div>
            <div className="flex">
              <span className="text-[#efe5d6] w-16">19:00</span>
              <span className="text-[#efe5d6] flex-1">★ 训练后晚餐 — 按上方处方</span>
            </div>
            <div className="flex">
              <span className="text-[#c4402e] w-16">20:00</span>
              <span className="text-[#7a6e5a] flex-1">关窗 — Close feeding window</span>
            </div>
          </div>
        </section>

        {/* ============ SHOPPING LIST ============ */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-mono text-[#c4402e] tracking-[0.25em]">06</span>
            <h2 className="text-xs font-mono tracking-[0.25em] uppercase text-[#7a6e5a]">
              超市采购清单 · 每周一次
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="border border-[#251c14] p-5">
              <div className="text-[10px] font-mono text-[#c4402e] tracking-widest mb-3">PROTEIN · 蛋白源</div>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-baseline">
                  <div>
                    <div className="text-[#efe5d6]">オーストラリア産 肩ロース切り落とし</div>
                    <div className="text-[10px] text-[#5a5040] mt-0.5 font-mono">BEEF · 300g/盒 · 晚餐 7 天</div>
                  </div>
                  <span className="text-[#c4a55a] font-mono text-xs">6 盒 (~1.8kg)</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <div>
                    <div className="text-[#efe5d6]">速食小鸡胸(22g 蛋白/块)</div>
                    <div className="text-[10px] text-[#5a5040] mt-0.5 font-mono">训前 3 块 + 午餐替代 6 块</div>
                  </div>
                  <span className="text-[#c4a55a] font-mono text-xs">10 块</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <div>
                    <div className="text-[#efe5d6]">卵 10個入り</div>
                    <div className="text-[10px] text-[#5a5040] mt-0.5 font-mono">训前 3 天 × 2 個 = 6 個 + 余量</div>
                  </div>
                  <span className="text-[#c4a55a] font-mono text-xs">1 盒</span>
                </li>
              </ul>
            </div>

            <div className="border border-[#251c14] p-5">
              <div className="text-[10px] font-mono text-[#c4402e] tracking-widest mb-3">CARBS · 碳水源</div>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-baseline">
                  <div>
                    <div className="text-[#efe5d6]">干意面(500g/袋)</div>
                    <div className="text-[10px] text-[#5a5040] mt-0.5 font-mono">晚餐 3 天 × 180g = 540g</div>
                  </div>
                  <span className="text-[#c4a55a] font-mono text-xs">1 袋</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <div>
                    <div className="text-[#efe5d6]">越南米粉(60g/包)</div>
                    <div className="text-[10px] text-[#5a5040] mt-0.5 font-mono">晚餐 4 包 + 午餐替代 6 包</div>
                  </div>
                  <span className="text-[#c4a55a] font-mono text-xs">11 包</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <div>
                    <div className="text-[#efe5d6]">日清 ノンフライ麺</div>
                    <div className="text-[10px] text-[#5a5040] mt-0.5 font-mono">晚餐 2 天 × 2 包</div>
                  </div>
                  <span className="text-[#c4a55a] font-mono text-xs">4 包</span>
                </li>
              </ul>
            </div>

            <div className="border border-[#251c14] p-5">
              <div className="text-[10px] font-mono text-[#c4402e] tracking-widest mb-3">FAT + FLAVOR · 脂肪与调味</div>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-baseline">
                  <div>
                    <div className="text-[#efe5d6]">S&B ペペロンチーノ酱(22.3g/包)</div>
                    <div className="text-[10px] text-[#5a5040] mt-0.5 font-mono">意面日 3 + 米粉日 2 + 备用 1</div>
                  </div>
                  <span className="text-[#c4a55a] font-mono text-xs">6 包</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <div>
                    <div className="text-[#efe5d6]">酱油 + 辣酱</div>
                    <div className="text-[10px] text-[#5a5040] mt-0.5 font-mono">牛肉蘸料 · 常备</div>
                  </div>
                  <span className="text-[#c4a55a] font-mono text-xs">有就不买</span>
                </li>
              </ul>
            </div>

            <div className="border border-[#251c14] p-5">
              <div className="text-[10px] font-mono text-[#c4402e] tracking-widest mb-3">DAIRY · 乳制品</div>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-baseline">
                  <div>
                    <div className="text-[#efe5d6]">ダノン オイコス 砂糖不使用(123g)</div>
                    <div className="text-[10px] text-[#5a5040] mt-0.5 font-mono">晚餐甜品 · 每天 1 個</div>
                  </div>
                  <span className="text-[#c4a55a] font-mono text-xs">7 個</span>
                </li>
              </ul>
            </div>

            <div className="border border-[#c4a55a] border-opacity-30 p-5 bg-[#13100c]">
              <div className="text-[10px] font-mono text-[#c4a55a] tracking-widest mb-3">BUDGET · 预算 ≈ ¥7,580/周</div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[10px] font-mono text-[#7a6e5a]">
                <span>牛肉 6盒</span><span className="text-right">¥2,700</span>
                <span>鸡胸 10块</span><span className="text-right">¥1,200</span>
                <span>鸡蛋 1盒</span><span className="text-right">¥250</span>
                <span>意面 1袋</span><span className="text-right">¥200</span>
                <span>米粉 11包</span><span className="text-right">¥1,100</span>
                <span>日清 4包</span><span className="text-right">¥600</span>
                <span>酱 6包</span><span className="text-right">¥480</span>
                <span>Oikos 7個</span><span className="text-right">¥1,050</span>
                <span className="text-[#efe5d6] border-t border-[#251c14] pt-1 mt-1">日均</span>
                <span className="text-right text-[#efe5d6] border-t border-[#251c14] pt-1 mt-1">≈ ¥1,082</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ MEMO ============ */}
        <section className="mb-10 p-6 bg-[#13100c]">
          <div className="text-[10px] font-mono text-[#c4402e] tracking-[0.3em] mb-4">
            MEMO · 速记规则
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-[#c4a899]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            <p>
              <span className="text-[#efe5d6]">·</span> 训练前可调:鸡胸 0-5 块 + 全蛋 0-5 个,午晚方案自动重算。
            </p>
            <p>
              <span className="text-[#efe5d6]">·</span> 碳水全靠主食(意面/日清/米粉),不用香蕉。
            </p>
            <p>
              <span className="text-[#efe5d6]">·</span> 意面/米粉比旧方案多(130-170g)——碳水全压在午餐和晚餐。
            </p>
            <p>
              <span className="text-[#efe5d6]">·</span> 监测优先级:<span className="text-[#c4402e]">腰围 &gt; 力量 &gt; 体重 7 日均值</span>。
            </p>
            <p>
              <span className="text-[#efe5d6]">·</span> 体重单日波动 ±2 kg 是正常的(糖原+水分),不要据此调整饮食。
            </p>
            <p>
              <span className="text-[#efe5d6]">·</span> 连续 8 周后做 1 周 diet break(回到 ~2700 kcal),再切回赤字。
            </p>
          </div>
        </section>

        {/* ============ FOOTER ============ */}
        <footer className="pt-8 border-t border-[#251c14] text-center">
          <div className="text-[9px] font-mono tracking-[0.3em] text-[#5a5040] uppercase">
            Based on Helms 2014 · Jäger 2017 ISSN · Mettler 2010 · Moro 2016
          </div>
          <div className="text-[9px] font-mono tracking-[0.2em] text-[#3a2e22] mt-2">
            For Personal Use · 不构成医疗建议
          </div>
        </footer>

      </div>
    </div>
  );
}
