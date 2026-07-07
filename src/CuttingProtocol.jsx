import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import Activity from 'lucide-react/dist/esm/icons/activity.mjs';
import Apple from 'lucide-react/dist/esm/icons/apple.mjs';
import CheckCircle2 from 'lucide-react/dist/esm/icons/circle-check.mjs';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down.mjs';
import ClipboardList from 'lucide-react/dist/esm/icons/clipboard-list.mjs';
import Dumbbell from 'lucide-react/dist/esm/icons/dumbbell.mjs';
import Flame from 'lucide-react/dist/esm/icons/flame.mjs';
import Gauge from 'lucide-react/dist/esm/icons/gauge.mjs';
import Goal from 'lucide-react/dist/esm/icons/goal.mjs';
import Leaf from 'lucide-react/dist/esm/icons/leaf.mjs';
import Minus from 'lucide-react/dist/esm/icons/minus.mjs';
import PackageCheck from 'lucide-react/dist/esm/icons/package-check.mjs';
import Plus from 'lucide-react/dist/esm/icons/plus.mjs';
import RotateCcw from 'lucide-react/dist/esm/icons/rotate-ccw.mjs';
import Settings2 from 'lucide-react/dist/esm/icons/settings-2.mjs';
import ShoppingBasket from 'lucide-react/dist/esm/icons/shopping-basket.mjs';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles.mjs';
import Timer from 'lucide-react/dist/esm/icons/timer.mjs';
import Utensils from 'lucide-react/dist/esm/icons/utensils.mjs';
import X from 'lucide-react/dist/esm/icons/x.mjs';
import Zap from 'lucide-react/dist/esm/icons/zap.mjs';
import {
  addMacros,
  buildShoppingRunPlan,
  buildWeeklyShopping,
  clamp,
  createDefaultShopPlan,
  deriveMacroTargets,
  macroAnalysis,
  macroKcal,
  normalizeShopPlan,
  optimizeDinnerItems as solveDinnerItems,
  round,
  roundTo,
  scaleMacro,
  splitMealTargets,
  withKcal,
} from './nutritionSolver.js';

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;
const generated = (name) => asset(`generated/${name}`);

const LOCALES = ['zh', 'ja'];
const DEFAULT_TARGET_PROFILE = { bodyWeightKg: 83, proteinPerKg: 1.8, fatMinPerKg: 0.6, kcal: 2000 };
const DEFAULT_TDEE = 2900;
const emptyMacro = { p: 0, c: 0, f: 0, kcal: 0 };

const TEXT = {
  zh: {
    appSub: '今天怎么吃',
    navPlan: '今日',
    navDetail: '明细',
    navShop: '采购',
    navCheat: '放松',
    language: '语言',
    zh: '中文',
    ja: '日本語',
    heroTitle: '今日餐盘',
    heroAccent: '轻轻松松定下来',
    heroCopy: '先把今天已经吃过的东西放进来，晚餐、赤字和采购都会自动跟着算。界面只保留真正要操作的部分。',
    profile: '目标',
    fuel: '训练前',
    snack: '额外',
    copy: '复制',
    copying: '复制中',
    copied: '已复制',
    retry: '重试',
    record: '记录',
    intake: '已吃',
    dinner: '晚餐',
    rhythm: '节奏',
    kcal: '热量',
    deficit: '赤字',
    todayTotal: '今日合计',
    dinnerKcal: '晚餐热量',
    noEat: '不吃',
    noDrink: '不喝',
    off: 'OFF',
    on: 'ON',
    planIntakeEyebrow: '01 · 先记今天',
    planIntakeTitle: '今天吃到哪了',
    intakeHubTitle: '今日已吃',
    intakeHubSub: '午餐、训练前、额外吃的都在一个地方改',
    intakeDrawerTitle: '今日已吃',
    intakeDrawerSub: '改完这里，晚餐会自动重新收口',
    beforeDinnerTotal: '晚餐前合计',
    editIntake: '调整已吃',
    quickKcal: '直接 kcal',
    tallyMode: '点选记账',
    plannedMode: '自动规划',
    mealSplit: '午晚比例',
    lunchPlannerTitle: '午餐想吃什么',
    dinnerPlannerTitle: '晚餐想吃什么',
    generatedLunch: '生成午餐',
    generatedDinner: '生成晚餐',
    lunchShare: '午餐比例',
    lunchKcal: '午餐热量',
    commonPicks: '常用数字',
    planChoiceEyebrow: '02 · 晚餐方向',
    planChoiceTitle: '今晚想吃什么',
    advanced: '细节设置',
    advancedSub: '蛋白、脂肪、水果、牛肉脂肪和目标公式',
    dinnerProtein: '晚餐蛋白',
    fatSource: '脂肪来源',
    extras: '水果 / 酸奶',
    beefFat: '牛肉脂肪',
    targetFormula: '目标公式',
    resetDefault: '重置默认',
    dinnerAnswerEyebrow: '03 · 自动答案',
    dinnerAnswerTitle: '今晚就这样吃',
    resetTune: '重置微调',
    noDinner: '今天晚餐已经很轻，先检查午餐或目标',
    rhythmEyebrow: '04 · 今日结构',
    rhythmTitle: '看一眼就够',
    protein: '蛋白',
    carb: '碳水',
    fat: '脂肪',
    calorie: '热量',
    carbDay: '今天碳水日',
    lowCarb: '低碳',
    mediumCarb: '中碳',
    highCarb: '高碳',
    ledger: '今日账本',
    ledgerTitle: '吃进去的东西',
    targetByWeight: '按体重自动分配',
    structureTitle: '占比和体重倍数',
    beforeTraining: '训练前',
    beforeTrainingTitle: '垫一口也算进去',
    electrolyte: '电解质',
    electrolyteTitle: '钾钠别太偏',
    balanced: '平衡',
    lowPotassium: '钾偏低',
    shopHero: '采购清单',
    shopCopy: '不用自己填。下面已经按进店顺序列好这轮直接买什么，库存只有需要微调时再打开。',
    cycle: '周期',
    products: '商品',
    picked: '已拿',
    clearStock: '清空已有',
    directPlan: '直接方案',
    directPlanTitle: '照单买这些',
    nothingToBuy: '这轮不用买',
    nothingToBuySub: '已选品类的家里库存覆盖了这个备货周期。要强制生成清单可以点“清空已有”。',
    stockTune: '库存微调',
    stockTuneSub: '平时不用管；只有家里还有东西时再改目标和已有',
    weeklyTarget: '周目标',
    stock: '家里已有',
    skip: '跳过',
    add: '加入',
    enough: '已够',
    buy: '补',
    cheatTitle: '想吃也能算',
    cheatResult: '吃完大概这样',
    cheatKcal: '放松热量',
    clear: '清空',
    fuelSwitch: '补给开关',
    fuelSub: '训练前吃什么喝什么',
    currentState: '当前状态',
    fueled: '已补给',
    noFuel: '不补给',
    applyNoFuel: '清空训练前',
    eatWhat: '吃什么',
    drinkWhat: '喝什么',
    manualCopy: '手动复制',
    manualCopySub: '浏览器拦截了自动复制，文本已经选中。手机上直接长按复制也可以。',
    copyAgain: '再复制一次',
    snackTitle: '额外记录',
    snackSub: '自己填一下也行',
    snackName: '名称',
    noSnack: '没有额外',
    manualSnack: '临时记录',
    dinnerWillClose: '晚餐会跟着收口',
    clearSnack: '清除记录',
    bodyWeight: '体重',
    proteinRatio: '蛋白倍率',
    fatMin: '脂肪最低',
    tdee: 'TDEE',
    proteinTarget: '蛋白目标',
    fatTarget: '脂肪最低',
    carbRemainder: '剩余碳水',
    carbRemainderSub: '热量扣完 P/F 后全给碳水',
    proteinCalories: '蛋白热量',
    carbCalories: '碳水热量',
    fatCalories: '脂肪热量',
    carbJudge: '低碳判断',
    lunch: '午餐',
    preTraining: '训练前',
    drinkElectrolyte: '饮料/电解质',
    snackMeal: '额外记录',
    sauce: '饮料',
    salt: '盐',
    foodK: '食物钾',
    actual: '实际',
    target: '目标',
    adjust: '调整',
  },
  ja: {
    appSub: '今日のごはん',
    navPlan: '今日',
    navDetail: '詳細',
    navShop: '買い物',
    navCheat: 'ごほうび',
    language: '言語',
    zh: '中文',
    ja: '日本語',
    heroTitle: '今日のごはん',
    heroAccent: 'ふんわり決める',
    heroCopy: '食べたものを入れるだけ。夕食、補給、赤字、買い物リストまで一枚のカードで整えます。',
    profile: '目標',
    fuel: '運動前',
    snack: '追加',
    copy: 'コピー',
    copying: 'コピー中',
    copied: 'コピー済み',
    retry: '再試行',
    record: '記録',
    intake: '食べたもの',
    dinner: '夕食',
    rhythm: 'バランス',
    kcal: 'カロリー',
    deficit: '赤字',
    todayTotal: '今日の合計',
    dinnerKcal: '夕食カロリー',
    noEat: '食べない',
    noDrink: '飲まない',
    off: 'OFF',
    on: 'ON',
    planIntakeEyebrow: '01 · まず記録',
    planIntakeTitle: '食べたもの',
    intakeHubTitle: '今日食べたもの',
    intakeHubSub: '昼食、運動前、追加分をここでまとめて調整',
    intakeDrawerTitle: '今日食べたもの',
    intakeDrawerSub: 'ここを変えると夕食が自動で調整されます',
    beforeDinnerTotal: '夕食前の合計',
    editIntake: '食べたもの調整',
    quickKcal: 'kcal だけ',
    tallyMode: '食材で記録',
    plannedMode: '自動プラン',
    mealSplit: '昼夜比率',
    lunchPlannerTitle: '昼食で食べたいもの',
    dinnerPlannerTitle: '夕食で食べたいもの',
    generatedLunch: '昼食プラン',
    generatedDinner: '夕食プラン',
    lunchShare: '昼食比率',
    lunchKcal: '昼食カロリー',
    commonPicks: 'よく使う数字',
    planChoiceEyebrow: '02 · 夕食の気分',
    planChoiceTitle: '今夜なに食べる',
    advanced: 'こまかい設定',
    advancedSub: 'たんぱく質、脂質、果物、牛脂、目標式',
    dinnerProtein: '夕食たんぱく',
    fatSource: '脂質ソース',
    extras: '果物 / ヨーグルト',
    beefFat: '牛肉脂質',
    targetFormula: '目標式',
    resetDefault: '初期値に戻す',
    dinnerAnswerEyebrow: '03 · 自動プラン',
    dinnerAnswerTitle: '夕食はこれでいく',
    resetTune: '微調整を戻す',
    noDinner: '夕食がかなり軽いです。昼食か目標を確認してください。',
    rhythmEyebrow: '04 · 今日の構成',
    rhythmTitle: 'ここだけ見ればOK',
    protein: 'たんぱく',
    carb: '炭水化物',
    fat: '脂質',
    calorie: 'カロリー',
    carbDay: '今日の炭水化物',
    lowCarb: '低炭水',
    mediumCarb: '中炭水',
    highCarb: '高炭水',
    ledger: '今日の帳簿',
    ledgerTitle: '食べたもの一覧',
    targetByWeight: '体重から自動配分',
    structureTitle: '割合と体重倍率',
    beforeTraining: '運動前',
    beforeTrainingTitle: '少し食べても計算',
    electrolyte: '電解質',
    electrolyteTitle: 'カリウムとナトリウム',
    balanced: 'バランス',
    lowPotassium: 'K 少なめ',
    shopHero: '買い物リスト',
    shopCopy: '入力しなくてOK。店内で取る順番に、今回買うものをそのまま出します。库存は必要なときだけ調整。',
    cycle: '周期',
    products: '品目',
    picked: '取った',
    clearStock: '在庫を0にする',
    directPlan: '買うもの',
    directPlanTitle: 'このまま買う',
    nothingToBuy: '今回は買わなくてOK',
    nothingToBuySub: '選択中の品目は在庫で足りています。リストを出したい場合は在庫を0にしてください。',
    stockTune: '在庫調整',
    stockTuneSub: '普段は触らなくてOK。家に残っているものがある時だけ。',
    weeklyTarget: '週目標',
    stock: '家の在庫',
    skip: '外す',
    add: '追加',
    enough: '足りる',
    buy: '買う',
    cheatTitle: '食べたい日も計算',
    cheatResult: '食べた後の見込み',
    cheatKcal: 'ごほうび kcal',
    clear: 'クリア',
    fuelSwitch: '補給スイッチ',
    fuelSub: '運動前に食べる/飲むもの',
    currentState: '現在',
    fueled: '補給あり',
    noFuel: '補給なし',
    applyNoFuel: '運動前をクリア',
    eatWhat: '食べるもの',
    drinkWhat: '飲むもの',
    manualCopy: '手動コピー',
    manualCopySub: 'ブラウザが自動コピーを止めました。テキストは選択済みなので、スマホでは長押しでコピーできます。',
    copyAgain: 'もう一度コピー',
    snackTitle: '追加分を記録',
    snackSub: 'ざっくり入力でOK',
    snackName: '名前',
    noSnack: '追加なし',
    manualSnack: '手入力の追加分',
    dinnerWillClose: '夕食が自動で調整されます',
    clearSnack: '記録を消す',
    bodyWeight: '体重',
    proteinRatio: 'たんぱく倍率',
    fatMin: '脂質最低',
    tdee: 'TDEE',
    proteinTarget: 'たんぱく目標',
    fatTarget: '脂質最低',
    carbRemainder: '残りを炭水化物へ',
    carbRemainderSub: 'P/F を引いた残りの kcal を炭水化物に配分',
    proteinCalories: 'たんぱく kcal',
    carbCalories: '炭水化物 kcal',
    fatCalories: '脂質 kcal',
    carbJudge: '低炭水判定',
    lunch: '昼食',
    preTraining: '運動前',
    drinkElectrolyte: '飲み物/電解質',
    snackMeal: '追加分',
    sauce: '飲み物',
    salt: '塩',
    foodK: '食事K',
    actual: '実際',
    target: '目標',
    adjust: '調整',
  },
};

const CARB_PLANS = {
  pasta: {
    name: '意面 · Garlic oil',
    short: '意面',
    sub: '力量日最爽',
    unit: 'g',
    step: 10,
    perUnit: { p: 0.12, c: 0.71, f: 0.015 },
    kcalUnit: 3.55,
    color: '#ffb86b',
    ja: { name: 'パスタ · ガーリックオイル', short: 'パスタ', sub: 'しっかり食べる日' },
  },
  soba: {
    name: '荞麦面 · Soba',
    short: '荞麦',
    sub: '清爽低负担',
    unit: 'g',
    step: 10,
    perUnit: { p: 0.14, c: 0.66, f: 0.023 },
    kcalUnit: 3.44,
    color: '#86c9a9',
    ja: { name: 'そば · Soba', short: 'そば', sub: '軽くて落ち着く' },
  },
  nissin: {
    name: '日清非油炸',
    short: '日清',
    sub: '懒人汤面',
    unit: '包',
    step: 1,
    perUnit: { p: 6.7, c: 55, f: 4.9 },
    kcalUnit: 291,
    color: '#ff9d91',
    ja: { name: '日清ノンフライ', short: '日清', sub: '時間がない日' },
  },
  fresh_noodle: {
    name: '冷藏鲜面 · 生ラーメン',
    short: '鲜面',
    sub: '冷藏柜无调味包',
    unit: 'g',
    step: 10,
    perUnit: { p: 0.0869, c: 0.5469, f: 0.0123, kcal: 2.623 },
    kcalUnit: 2.623,
    color: '#f1c47b',
    ja: { name: '冷蔵生麺 · 調味なし', short: '生麺', sub: '10g 単位で調整' },
  },
  banana: {
    name: '香蕉',
    short: '香蕉',
    sub: '按整根补碳水',
    unit: '根',
    step: 1,
    max: 8,
    perUnit: { p: 1, c: 27, f: 0.25, kcal: 114 },
    kcalUnit: 114,
    color: '#f4cf58',
    ja: { name: 'バナナ', short: 'バナナ', unit: '本', sub: '1本単位で調整' },
  },
  rice_dry: {
    name: '白米 · 生米干重',
    short: '白米',
    sub: '煮饭前称重',
    unit: 'g',
    step: 10,
    perUnit: { p: 0.061, c: 0.776, f: 0.009, kcal: 3.42 },
    kcalUnit: 3.42,
    color: '#d9d4c8',
    ja: { name: '精白米 · 生米', short: '白米', sub: '炊飯前の重量' },
  },
  pho: {
    name: '越南米粉',
    short: '米粉',
    sub: '低脂换口味',
    unit: '包',
    step: 1,
    perUnit: { p: 4, c: 43, f: 2 },
    kcalUnit: 210,
    color: '#86d8df',
    ja: { name: 'フォー', short: 'フォー', sub: '低脂質で変化' },
  },
  bifun: {
    name: '纯干米粉',
    short: '干米粉',
    sub: '纯碳水补满',
    unit: 'g',
    step: 10,
    perUnit: { p: 0.06, c: 0.79, f: 0.005 },
    kcalUnit: 3.45,
    color: '#f5d66b',
    ja: { name: '乾燥ビーフン', short: 'ビーフン', sub: '炭水化物を足す' },
  },
};

const PROTEINS = {
  beef: {
    label: '牛肉切り落とし',
    short: '牛肉',
    tag: 'raw · per g',
    unit: 'g',
    step: 10,
    p: 0.19,
    c: 0,
    max: 650,
    note: '脂肪按包装校准',
    ja: { label: '牛肉切り落とし', short: '牛肉', note: '脂質は包装で調整' },
  },
  chicken: {
    label: '速食鸡胸',
    short: '鸡胸',
    tag: 'per pack',
    unit: '块',
    step: 1,
    p: 22,
    c: 1,
    f: 2,
    max: 6,
    note: '最稳高蛋白',
    ja: { label: 'サラダチキン', short: 'チキン', unit: '個', note: '安定の高たんぱく' },
  },
  duck: {
    label: '合鸭胸去皮',
    short: '合鸭',
    tag: '100g serve',
    unit: '份',
    step: 1,
    p: 21,
    c: 0.5,
    f: 6,
    max: 4,
    note: '香但不太肥',
    ja: { label: '合鴨むね皮なし', short: '合鴨', unit: '皿', note: '香りがあって軽め' },
  },
  kfc: {
    label: 'KFC 原味鸡',
    short: 'KFC',
    tag: 'per piece',
    unit: '块',
    step: 1,
    p: 18,
    c: 8,
    f: 14,
    max: 5,
    note: '爽，但盐高',
    ja: { label: 'KFC オリジナルチキン', short: 'KFC', unit: '個', note: '満足感あり、塩分高め' },
  },
};

const FAT_SOURCES = {
  egg_fried: {
    label: '煎蛋',
    short: '煎蛋',
    unit: '个',
    step: 1,
    p: 6,
    c: 0.4,
    f: 7,
    max: 6,
    ja: { label: '目玉焼き', short: '卵', unit: '個' },
  },
  sauce: {
    label: 'ペペロン酱',
    short: '蒜油酱',
    unit: '包',
    step: 1,
    p: 0.9,
    c: 1.5,
    f: 10,
    max: 2,
    ja: { label: 'ペペロンソース', short: 'ソース', unit: '袋' },
  },
  olive: {
    label: '橄榄油',
    short: '橄榄油',
    unit: '小勺',
    step: 1,
    p: 0,
    c: 0,
    f: 4.5,
    max: 6,
    ja: { label: 'オリーブオイル', short: 'オイル', unit: '小さじ' },
  },
  nuts: {
    label: '素焼きナッツ',
    short: '坚果',
    unit: '10g',
    step: 1,
    p: 2,
    c: 2,
    f: 5,
    max: 5,
    ja: { label: '素焼きナッツ', short: 'ナッツ' },
  },
  cheese_bite: {
    label: '小芝士',
    short: '芝士',
    unit: '个',
    step: 1,
    p: 2.6,
    c: 0.4,
    f: 3.4,
    kcal: 43,
    max: 8,
    ja: { label: 'ベビーチーズ', short: 'チーズ', unit: '個' },
  },
  avocado: {
    label: 'アボカド',
    short: '牛油果',
    unit: '半个',
    step: 1,
    p: 1,
    c: 4,
    f: 15,
    max: 2,
    ja: { label: 'アボカド', short: 'アボカド', unit: '半分' },
  },
};

const DINNER_EXTRAS = {
  banana: { label: '香蕉', unit: '根', step: 1, max: 4, p: 1, c: 27, f: 0.3, ja: { label: 'バナナ', unit: '本' } },
  apple: { label: '苹果', unit: '个', step: 1, max: 3, p: 0.4, c: 35, f: 0.3, ja: { label: 'りんご', unit: '個' } },
  kiwi: { label: '奇异果', unit: '个', step: 1, max: 4, p: 1, c: 14, f: 0.2, ja: { label: 'キウイ', unit: '個' } },
  pineapple: { label: '切块菠萝 240g', unit: '盒', step: 1, max: 2, p: 1.44, c: 31.2, f: 0.24, ja: { label: 'カットパイン 240g', unit: '盒' } },
  yogurt: { label: '无糖酸奶', unit: 'g', step: 50, max: 400, p: 0.036, c: 0.049, f: 0.03, ja: { label: '無糖ヨーグルト' } },
};

const WEEKLY_SHOP_ITEMS = [
  { key: 'beef', tone: 'red', source: 'protein', sourceKey: 'beef', label: '牛肉切り落とし', short: '牛肉', unit: 'g', step: 100, defaultTarget: 1200, max: 3000, buyHint: '晚餐主蛋白，先拿这个', ja: { label: '牛肉切り落とし', short: '牛肉', buyHint: '夕食の主役。まず取る' } },
  { key: 'chicken', tone: 'red', source: 'protein', sourceKey: 'chicken', label: '速食鸡胸', short: '鸡胸', unit: '块', step: 1, defaultTarget: 3, max: 12, buyHint: '懒人备用蛋白', ja: { label: 'サラダチキン', short: 'チキン', unit: '個', buyHint: '忙しい日のたんぱく質' } },
  { key: 'pasta', tone: 'green', source: 'carb', sourceKey: 'pasta', label: '干意面', short: '意面', unit: 'g', step: 100, defaultTarget: 500, max: 2000, buyHint: '主力晚餐碳水', ja: { label: '乾燥パスタ', short: 'パスタ', buyHint: '夕食の主力炭水化物' } },
  { key: 'soba', tone: 'green', source: 'carb', sourceKey: 'soba', label: '荞麦面', short: '荞麦', unit: 'g', step: 100, defaultTarget: 400, max: 1600, buyHint: '清爽换口味', ja: { label: 'そば', short: 'そば', buyHint: '軽く味変できる' } },
  { key: 'nissin', tone: 'green', source: 'carb', sourceKey: 'nissin', label: '日清非油炸', short: '日清', unit: '包', step: 1, defaultTarget: 2, max: 10, buyHint: '没时间时顶上', ja: { label: '日清ノンフライ', short: '日清', unit: '袋', buyHint: '時間がない日の保険' } },
  { key: 'fresh_noodle', tone: 'green', source: 'carb', sourceKey: 'fresh_noodle', label: '冷藏鲜面', short: '鲜面', unit: 'g', step: 10, defaultTarget: 400, max: 2000, buyHint: '冷藏柜无调味包，按 10g 算', ja: { label: '冷蔵生麺', short: '生麺', buyHint: '調味なし。10g 単位で買う' } },
  { key: 'pineapple', tone: 'gold', source: 'extra', sourceKey: 'pineapple', label: '菠萝 240g', short: '菠萝', unit: '盒', step: 1, defaultTarget: 2, max: 8, buyHint: '训练前后直接吃', ja: { label: 'カットパイン 240g', short: 'パイン', unit: '盒', buyHint: '運動前後にそのまま食べる' } },
  { key: 'banana', tone: 'gold', source: 'extra', sourceKey: 'banana', label: '香蕉', short: '香蕉', unit: '根', step: 1, defaultTarget: 4, max: 14, buyHint: '快速补碳水', ja: { label: 'バナナ', short: 'バナナ', unit: '本', buyHint: 'すぐ足せる炭水化物' } },
  { key: 'apple', tone: 'gold', source: 'extra', sourceKey: 'apple', label: '苹果', short: '苹果', unit: '个', step: 1, defaultTarget: 2, max: 10, buyHint: '顶饥水果', ja: { label: 'りんご', short: 'りんご', unit: '個', buyHint: 'お腹にたまる果物' } },
  { key: 'egg_fried', tone: 'amber', source: 'fat', sourceKey: 'egg_fried', label: '鸡蛋', short: '鸡蛋', unit: '个', step: 1, defaultTarget: 6, max: 20, defaultEnabled: false, buyHint: '补脂肪和口感', ja: { label: '卵', short: '卵', unit: '個', buyHint: '脂質と満足感を足す' } },
  { key: 'sauce', tone: 'amber', source: 'fat', sourceKey: 'sauce', label: 'ペペロン酱', short: '蒜油酱', unit: '包', step: 1, defaultTarget: 3, max: 12, defaultEnabled: false, buyHint: '意面直接好吃', ja: { label: 'ペペロンソース', short: 'ソース', unit: '袋', buyHint: 'パスタがすぐおいしい' } },
  { key: 'nuts', tone: 'amber', source: 'fat', sourceKey: 'nuts', label: '素焼きナッツ', short: '坚果', unit: '10g', step: 1, defaultTarget: 4, max: 20, defaultEnabled: false, buyHint: '少量脂肪备用', ja: { label: '素焼きナッツ', short: 'ナッツ', buyHint: '少量脂質の保険' } },
  { key: 'cheese_bite', tone: 'amber', source: 'fat', sourceKey: 'cheese_bite', label: '小芝士', short: '芝士', unit: '个', step: 1, defaultTarget: 6, max: 24, defaultEnabled: false, buyHint: '每个 43kcal，少量补脂肪', ja: { label: 'ベビーチーズ', short: 'チーズ', unit: '個', buyHint: '1個43kcal。少量脂質に' } },
];

const TALLY_ITEMS = {
  chicken: { label: '鸡胸', unit: '块', step: 1, max: 10, p: 22, c: 1, f: 2, ja: { label: 'チキン', unit: '個' } },
  egg: { label: '全蛋', unit: '个', step: 1, max: 10, p: 6, c: 0.5, f: 5, ja: { label: '卵', unit: '個' } },
  onigiri: { label: '饭团', unit: '个', step: 1, max: 6, p: 3, c: 39, f: 0.5, ja: { label: 'おにぎり', unit: '個' } },
  nissin: { label: '日清面', unit: '包', step: 1, max: 4, p: 6.7, c: 55, f: 4.9, ja: { label: '日清麺', unit: '袋' } },
  rice: { label: '米饭', unit: 'g', step: 50, max: 1000, p: 0.026, c: 0.28, f: 0.003, ja: { label: 'ごはん' } },
  beef: { label: '牛肉', unit: 'g', step: 50, max: 600, p: 0.19, c: 0, f: 0.072, ja: { label: '牛肉' } },
  pasta: { label: '干意面', unit: 'g', step: 50, max: 300, p: 0.12, c: 0.71, f: 0.015, ja: { label: '乾燥パスタ' } },
  fresh_noodle: { label: '冷藏鲜面', unit: 'g', step: 10, max: 600, p: 0.0869, c: 0.5469, f: 0.0123, kcal: 2.623, ja: { label: '冷蔵生麺' } },
  banana: { label: '香蕉', unit: '根', step: 1, max: 4, p: 1, c: 27, f: 0.25, ja: { label: 'バナナ', unit: '本' } },
};

const PRE_ITEMS = {
  onigiri: { label: '饭团（普通）', unit: '个', step: 1, max: 3, p: 3, c: 39, f: 0.5, ja: { label: 'おにぎり（普通）', unit: '個' } },
  gold_bread: { label: '711 金の食パン', unit: '片', step: 1, max: 2, p: 8.8, c: 45.4, f: 5.3, kcal: 261, ja: { label: 'セブン 金の食パン', unit: '枚' } },
};

const DRINKS = {
  tomato: { label: '无盐番茄汁', sub: 'K 600 / 200ml', p: 1.8, c: 7.1, f: 0, kcal: 39, k: 600, na: 5, ja: { label: '無塩トマトジュース', sub: 'K 600 / 200ml' } },
  yasai: { label: '野菜一日', sub: 'K 740 / 200ml', p: 3, c: 14.5, f: 0, kcal: 75, k: 740, na: 80, ja: { label: '野菜一日', sub: 'K 740 / 200ml' } },
  none: { label: '不补钾', sub: '今天省了', p: 0, c: 0, f: 0, kcal: 0, k: 0, na: 0, ja: { label: '補給なし', sub: '今日はなし' } },
};

const CHEAT_ITEMS = [
  { id: 'burger', label: '汉堡 + 薯条', kcal: 980, ja: { label: 'バーガー + ポテト' } },
  { id: 'ramen', label: '拉面 + 饭', kcal: 1200, ja: { label: 'ラーメン + ごはん' } },
  { id: 'sushi', label: '回转寿司 12 皿', kcal: 1050, ja: { label: '回転寿司 12皿' } },
  { id: 'pizza', label: 'Pizza 半张', kcal: 1150, ja: { label: 'ピザ 半分' } },
  { id: 'dessert', label: '甜品奶茶', kcal: 620, ja: { label: 'デザート + ミルクティー' } },
  { id: 'katsu', label: '炸猪排咖喱', kcal: 1450, ja: { label: 'カツカレー' } },
];

const NAV = [
  { id: 'plan', labelKey: 'navPlan', icon: Utensils },
  { id: 'detail', labelKey: 'navDetail', icon: Gauge },
  { id: 'shop', labelKey: 'navShop', icon: ShoppingBasket },
  { id: 'cheat', labelKey: 'navCheat', icon: Flame },
];

function tFor(locale) {
  const dict = TEXT[locale] || TEXT.zh;
  return (key) => dict[key] ?? TEXT.zh[key] ?? key;
}

function localize(item, locale) {
  if (!item) return item;
  return locale === 'ja' && item.ja ? { ...item, ...item.ja } : item;
}

function localizedCarbDay(report, t) {
  const labelMap = { 低碳: t('lowCarb'), 中碳: t('mediumCarb'), 高碳: t('highCarb') };
  return { ...report.carbDay, label: labelMap[report.carbDay.label] || report.carbDay.label };
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Mobile browsers can expose Clipboard API and still block it.
    }
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  textarea.style.top = '0';
  textarea.style.fontSize = '16px';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, text.length);

  try {
    const ok = document.execCommand('copy');
    if (!ok) throw new Error('copy command failed');
  } finally {
    document.body.removeChild(textarea);
  }
}

function getPreEntries(pre) {
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

function isFuelActive(pre, drinkKey, drinkMl) {
  return getPreEntries(pre).length > 0 || (drinkKey !== 'none' && drinkMl > 0);
}

function describeFuel(pre, drinkKey, drinkMl, locale, t) {
  return `${describePre(pre, locale, t)} · ${describeDrink(drinkKey, drinkMl, locale, t)}`;
}

function isSnackActive(snack) {
  return (snack?.kcal || 0) > 0 || (snack?.p || 0) > 0 || (snack?.c || 0) > 0 || (snack?.f || 0) > 0;
}

function describeSnack(snack, t) {
  if (!isSnackActive(snack)) return t('noSnack');
  return `${snack.name || t('snackMeal')} ${Math.round(macroKcal(snack))} kcal`;
}

function describeIntake(lunch, pre, drinkKey, drinkMl, snack, locale, t) {
  return `${t('lunch')} ${Math.round(lunch?.kcal || 0)} kcal · ${describeFuel(pre, drinkKey, drinkMl, locale, t)} · ${describeSnack(snack, t)}`;
}

function applyDinnerAdjustments(items, adjustments) {
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

function orderMealItems(items, fixedItems = []) {
  return [
    ...items.filter((item) => item.tone === 'red'),
    ...items.filter((item) => item.tone === 'amber'),
    ...fixedItems,
    ...items.filter((item) => item.tone === 'green'),
    ...items.filter((item) => !['red', 'amber', 'green'].includes(item.tone)),
  ];
}

function mealSolveTargets(targets, proteinKeys, fatKeys, beefFat) {
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

function buildMealVariableItems({ proteinKeys, fatKeys, carbPlan, targets, fixedMacro = emptyMacro, beefFat }) {
  const safeProteinKeys = proteinKeys.length ? proteinKeys : ['beef'];
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

  const activeFatKeys = fatKeys.length ? fatKeys : [];
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
  const carb = CARB_PLANS[carbPlan] || CARB_PLANS.pasta;
  const carbMax = carb.max ?? (carb.unit === '包' ? 8 : 420);
  const carbQty = clamp(roundTo(remainingKcal / carb.kcalUnit, carb.step), 0, carbMax);
  const carbItem = {
    key: `carb-${carbPlan}`,
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

function estimateLunch(kcal) {
  return withKcal({
    p: (kcal * 0.31) / 4,
    c: (kcal * 0.49) / 4,
    f: (kcal * 0.2) / 9,
    kcal,
  });
}

function proteinUnit(key, beefFat) {
  const protein = PROTEINS[key];
  return {
    ...protein,
    f: key === 'beef' ? (beefFat * 0.8) / 100 : protein.f || 0,
  };
}

function shopUnitMacro(item, beefFat) {
  if (item.source === 'protein') return proteinUnit(item.sourceKey, beefFat);
  if (item.source === 'carb') return CARB_PLANS[item.sourceKey].perUnit;
  if (item.source === 'extra') return DINNER_EXTRAS[item.sourceKey];
  if (item.source === 'fat') return FAT_SOURCES[item.sourceKey];
  return emptyMacro;
}

function resolveWeeklyShopItems(beefFat, locale) {
  return WEEKLY_SHOP_ITEMS.map((item) => ({
    ...localize(item, locale),
    unitMacro: shopUnitMacro(item, beefFat),
  }));
}

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

function useLocalNumber(key, fallback) {
  const [value, setValue] = useState(() => {
    const saved = Number(localStorage.getItem(key));
    return Number.isFinite(saved) && saved > 0 ? saved : fallback;
  });

  useEffect(() => {
    localStorage.setItem(key, String(value));
  }, [key, value]);

  return [value, setValue];
}

function useLocalJson(key, fallback) {
  const fallbackValue = () => (typeof fallback === 'function' ? fallback() : fallback);
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallbackValue();
    } catch {
      return fallbackValue();
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function MacroOrbit3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 10);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    } catch {
      return undefined;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0xffffff, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);
    scene.add(new THREE.AmbientLight(0xffffff, 1.1));
    const peachLight = new THREE.PointLight(0xff9f95, 2.8, 24);
    peachLight.position.set(5, 3, 7);
    scene.add(peachLight);
    const mintLight = new THREE.PointLight(0x81d5b0, 1.9, 18);
    mintLight.position.set(-5, -2, 5);
    scene.add(mintLight);

    const palette = [0xffa59b, 0xffcf7d, 0x8ad8b4, 0x93d9e4];
    const ribbonGeo = new THREE.TorusKnotGeometry(0.56, 0.12, 120, 16);
    const beadGeo = new THREE.CapsuleGeometry(0.12, 0.34, 8, 18);
    const ribbons = palette.map((color, index) => {
      const material = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.12,
        roughness: 0.42,
        metalness: 0.04,
      });
      const mesh = new THREE.Mesh(ribbonGeo, material);
      const angle = index * Math.PI * 0.5;
      mesh.position.set(Math.cos(angle) * 3.2, Math.sin(angle) * 1.5, -1 - index * 0.2);
      mesh.rotation.set(index * 0.5, index * 0.35, index * 0.8);
      mesh.userData = { angle, speed: 0.002 + index * 0.0007 };
      group.add(mesh);
      return mesh;
    });

    const beads = Array.from({ length: 26 }, (_, index) => {
      const material = new THREE.MeshStandardMaterial({
        color: palette[index % palette.length],
        roughness: 0.48,
        metalness: 0.02,
      });
      const mesh = new THREE.Mesh(beadGeo, material);
      const angle = index * 0.58;
      const radius = 2.2 + (index % 4) * 0.54;
      mesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.42, -2.4 - (index % 5) * 0.18);
      mesh.rotation.set(angle * 0.7, angle * 0.3, angle);
      mesh.userData = { angle, radius, speed: 0.003 + (index % 5) * 0.0006 };
      group.add(mesh);
      return mesh;
    });

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(Math.max(1, width), Math.max(1, height), false);
      camera.aspect = Math.max(1, width) / Math.max(1, height);
      camera.updateProjectionMatrix();
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    let frameId = 0;
    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      group.rotation.z += 0.0011;
      group.rotation.y = Math.sin(Date.now() * 0.00028) * 0.16;
      ribbons.forEach((mesh) => {
        mesh.rotation.x += mesh.userData.speed * 1.7;
        mesh.rotation.y += mesh.userData.speed;
      });
      beads.forEach((mesh) => {
        mesh.userData.angle += mesh.userData.speed;
        mesh.position.x = Math.cos(mesh.userData.angle) * mesh.userData.radius;
        mesh.position.y = Math.sin(mesh.userData.angle) * mesh.userData.radius * 0.42;
        mesh.rotation.z += 0.006;
      });
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      renderer.dispose();
      ribbonGeo.dispose();
      beadGeo.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="pointer-events-none fixed inset-0 -z-10 opacity-55" data-three-orbit />;
}

export default function CuttingProtocol() {
  const [tab, setTab] = useState('plan');
  const [locale, setLocale] = useLocalJson('cutting:locale:v1', 'zh');
  const activeLocale = LOCALES.includes(locale) ? locale : 'zh';
  const t = useMemo(() => tFor(activeLocale), [activeLocale]);
  const [targetProfile, setTargetProfile] = useLocalJson('cutting:targetProfile:v1', DEFAULT_TARGET_PROFILE);
  const targetProfileModel = useMemo(() => ({ ...DEFAULT_TARGET_PROFILE, ...(targetProfile || {}) }), [targetProfile]);
  const targets = useMemo(() => deriveMacroTargets(targetProfileModel), [targetProfileModel]);
  const [tdee, setTdee] = useLocalNumber('cutting:tdee', DEFAULT_TDEE);
  const [lunchMode, setLunchMode] = useState('planned');
  const [lunchKcal, setLunchKcal] = useState(800);
  const [tally, setTally] = useState({});
  const [mealSplitPct, setMealSplitPct] = useState(40);
  const [lunchCarbPlan, setLunchCarbPlan] = useState('fresh_noodle');
  const [lunchProteinKeys, setLunchProteinKeys] = useState(['chicken']);
  const [lunchFatKeys, setLunchFatKeys] = useState([]);
  const [carbPlan, setCarbPlan] = useState('pasta');
  const [proteinKeys, setProteinKeys] = useState(['beef']);
  const [fatKeys, setFatKeys] = useState([]);
  const [extraCarbs, setExtraCarbs] = useState({});
  const [beefFat, setBeefFat] = useState(13);
  const [pre, setPre] = useState({});
  const [drinkKey, setDrinkKey] = useState('none');
  const [drinkMl, setDrinkMl] = useState(0);
  const [saltG, setSaltG] = useState(6.5);
  const [foodK, setFoodK] = useState(2000);
  const [shopDays, setShopDays] = useState(7);
  const [shopPlan, setShopPlan] = useLocalJson('cutting:shopPlan:v1', () => createDefaultShopPlan(WEEKLY_SHOP_ITEMS));
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [intakeOpen, setIntakeOpen] = useState(false);
  const [lunchAdjustments, setLunchAdjustments] = useState({});
  const [dinnerAdjustments, setDinnerAdjustments] = useState({});
  const [snack, setSnack] = useState({ name: '手动加餐', p: 0, c: 0, f: 0, kcal: 0 });
  const [cheat, setCheat] = useState({});
  const [copyStatus, setCopyStatus] = useState('idle');
  const [copyText, setCopyText] = useState('');
  const [copyPanelOpen, setCopyPanelOpen] = useState(false);
  const copyResetRef = useRef(0);

  const setMapQty = (setter, key, value, max = Infinity) => {
    setter((current) => {
      const nextValue = clamp(value, 0, max);
      const next = { ...current };
      if (nextValue > 0) next[key] = nextValue;
      else delete next[key];
      return next;
    });
  };

  const toggleProtein = (key) => {
    setProteinKeys((current) => {
      if (current.includes(key)) return current.length > 1 ? current.filter((x) => x !== key) : current;
      return [...current, key];
    });
  };

  const toggleLunchProtein = (key) => {
    setLunchProteinKeys((current) => {
      if (current.includes(key)) return current.length > 1 ? current.filter((x) => x !== key) : current;
      return [...current, key];
    });
  };

  const toggleFat = (key) => {
    setFatKeys((current) => (current.includes(key) ? current.filter((x) => x !== key) : [...current, key]));
  };

  const toggleLunchFat = (key) => {
    setLunchFatKeys((current) => (current.includes(key) ? current.filter((x) => x !== key) : [...current, key]));
  };

  const model = useMemo(() => {
    const tallyMacro = Object.entries(tally).reduce((sum, [key, qty]) => addMacros(sum, scaleMacro(TALLY_ITEMS[key], qty)), emptyMacro);
    const preMacro = Object.entries(pre).reduce((sum, [key, qty]) => addMacros(sum, scaleMacro(PRE_ITEMS[key], qty)), emptyMacro);
    const drink = DRINKS[drinkKey] || DRINKS.none;
    const drinkMacro = withKcal(scaleMacro(drink, drinkMl / 200));
    const snackMacro = withKcal(snack);
    const fixedIntake = addMacros(preMacro, drinkMacro, snackMacro);
    const mealTargets = splitMealTargets(targets, fixedIntake, mealSplitPct / 100);

    const extraEntries = Object.entries(extraCarbs).filter(([key, qty]) => DINNER_EXTRAS[key] && qty > 0);
    const extraMacro = extraEntries.reduce((sum, [key, qty]) => addMacros(sum, scaleMacro(DINNER_EXTRAS[key], qty)), emptyMacro);
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

    const lunchSolveTargets = mealSolveTargets(mealTargets.lunch, lunchProteinKeys, lunchFatKeys, beefFat);
    const lunchVariableItems = buildMealVariableItems({
      proteinKeys: lunchProteinKeys,
      fatKeys: lunchFatKeys,
      carbPlan: lunchCarbPlan,
      targets: lunchSolveTargets,
      beefFat,
    });
    const optimizedLunchItems = solveDinnerItems(lunchVariableItems, emptyMacro, lunchSolveTargets);
    const lunchItems = lunchMode === 'planned' ? applyDinnerAdjustments(orderMealItems(optimizedLunchItems), lunchAdjustments) : [];
    const plannedLunch = lunchItems.reduce((sum, item) => addMacros(sum, item.macro), emptyMacro);
    const manualLunch = lunchMode === 'tally' && tallyMacro.kcal > 0 ? tallyMacro : estimateLunch(lunchKcal);
    const lunch = lunchMode === 'planned' ? plannedLunch : manualLunch;
    const beforeDinner = addMacros(lunch, fixedIntake);

    const dinnerTarget = lunchMode === 'planned' ? splitMealTargets(targets, beforeDinner, 0.5).remaining : targets;
    const activeMealTargets = lunchMode === 'planned' ? { ...mealTargets, dinner: dinnerTarget } : mealTargets;
    const dinnerSolveTarget = lunchMode === 'planned' ? mealSolveTargets(dinnerTarget, proteinKeys, fatKeys, beefFat) : dinnerTarget;
    const dinnerFixedMacro = lunchMode === 'planned' ? extraMacro : addMacros(beforeDinner, extraMacro);
    const dinnerVariableItems = buildMealVariableItems({
      proteinKeys,
      fatKeys,
      carbPlan,
      targets: dinnerSolveTarget,
      fixedMacro: dinnerFixedMacro,
      beefFat,
    });
    const optimizedDinnerItems = solveDinnerItems(dinnerVariableItems, dinnerFixedMacro, dinnerSolveTarget);
    const dinnerItems = applyDinnerAdjustments(orderMealItems(optimizedDinnerItems, extraItems), dinnerAdjustments);
    const dinner = dinnerItems.reduce((sum, item) => addMacros(sum, item.macro), emptyMacro);
    const total = addMacros(beforeDinner, dinner);
    const deficit = Math.round(tdee - total.kcal);
    const drinkK = (DRINKS[drinkKey]?.k || 0) * (drinkMl / 200);
    const drinkNa = (DRINKS[drinkKey]?.na || 0) * (drinkMl / 200);
    const sodium = saltG * 393 + drinkNa;
    const potassium = foodK + drinkK;
    const shopping = buildWeeklyShopping(resolveWeeklyShopItems(beefFat, activeLocale), shopPlan, shopDays);
    const shoppingMacro = shopping.reduce((sum, item) => addMacros(sum, item.macro), emptyMacro);

    return {
      lunch,
      lunchItems,
      pre: preMacro,
      drink: drinkMacro,
      snack: snackMacro,
      beforeDinner,
      dinner,
      dinnerItems,
      mealTargets: activeMealTargets,
      total,
      deficit,
      potassium,
      sodium,
      shopping,
      shoppingMacro,
      carb: CARB_PLANS[carbPlan] || CARB_PLANS.pasta,
    };
  }, [activeLocale, beefFat, carbPlan, dinnerAdjustments, drinkKey, drinkMl, extraCarbs, fatKeys, foodK, lunchAdjustments, lunchCarbPlan, lunchFatKeys, lunchKcal, lunchMode, lunchProteinKeys, mealSplitPct, pre, saltG, shopDays, shopPlan, snack, tally, targets, tdee, proteinKeys]);

  const macroReport = useMemo(() => macroAnalysis(model.total, targets, targetProfileModel.bodyWeightKg), [model.total, targetProfileModel.bodyWeightKg, targets]);
  const cheatTotal = CHEAT_ITEMS.reduce((sum, item) => sum + (cheat[item.id] || 0) * item.kcal, 0);
  const cheatSurplus = Math.round(model.total.kcal + cheatTotal - tdee);
  const fuelActive = isFuelActive(pre, drinkKey, drinkMl);
  const snackActive = isSnackActive(snack);
  const intakeActive = fuelActive || snackActive || model.lunch.kcal > 0;
  const intakeSummary = describeIntake(model.lunch, pre, drinkKey, drinkMl, snack, activeLocale, t);

  const tuneMealItem = (setter, item, delta) => {
    setter((current) => {
      const baseQty = item.baseQty ?? item.qty;
      const nextQty = clamp(item.qty + delta, 0, item.max ?? Infinity);
      const nextAdjustment = round(nextQty - baseQty, item.step < 1 ? 1 : 2);
      const next = { ...current };
      if (nextAdjustment !== 0) next[item.key] = nextAdjustment;
      else delete next[item.key];
      return next;
    });
  };

  const tuneLunchItem = (item, delta) => tuneMealItem(setLunchAdjustments, item, delta);
  const tuneDinnerItem = (item, delta) => tuneMealItem(setDinnerAdjustments, item, delta);

  const resetDefaults = () => {
    setTargetProfile(DEFAULT_TARGET_PROFILE);
    setLunchMode('planned');
    setLunchKcal(800);
    setTally({});
    setMealSplitPct(40);
    setLunchCarbPlan('fresh_noodle');
    setLunchProteinKeys(['chicken']);
    setLunchFatKeys([]);
    setCarbPlan('pasta');
    setProteinKeys(['beef']);
    setFatKeys([]);
    setExtraCarbs({});
    setBeefFat(13);
    setPre({});
    setDrinkKey('none');
    setDrinkMl(0);
    setLunchAdjustments({});
    setDinnerAdjustments({});
    setSnack({ name: activeLocale === 'ja' ? '手入力の間食' : '手动加餐', p: 0, c: 0, f: 0, kcal: 0 });
  };

  useEffect(() => () => window.clearTimeout(copyResetRef.current), []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [tab]);

  useEffect(() => {
    document.documentElement.lang = activeLocale === 'ja' ? 'ja' : 'zh-CN';
    document.documentElement.dataset.locale = activeLocale;
    document.title = activeLocale === 'ja' ? 'Cutting Lab · 今日のごはん' : 'Cutting Lab · 今日餐盘';
  }, [activeLocale]);

  const buildDailyPlanPayload = () => ({
    date: new Date().toISOString().slice(0, 10),
    locale: activeLocale,
    targetProfile: targetProfileModel,
    targets,
    mealSplitPct,
    lunch: model.lunch,
    lunchItems: model.lunchItems.map((item) => displayDinnerItem(item, activeLocale)),
    pre: model.pre,
    drink: { key: drinkKey, ml: drinkMl, macro: model.drink },
    snack,
    dinnerAdjustments,
    dinner: {
      items: model.dinnerItems.map((item) => displayDinnerItem(item, activeLocale)),
      macro: model.dinner,
    },
    total: model.total,
    deficit: model.deficit,
  });

  const copyDailyPlan = async () => {
    const payload = {
      ...buildDailyPlanPayload(),
      copiedAt: new Date().toISOString(),
    };
    const text = JSON.stringify(payload, null, 2);
    setCopyText(text);
    window.clearTimeout(copyResetRef.current);
    setCopyStatus('copying');
    try {
      await copyTextToClipboard(text);
      setCopyPanelOpen(false);
      setCopyStatus('copied');
    } catch (error) {
      console.error(error);
      setCopyStatus('failed');
      setCopyPanelOpen(true);
    }
    copyResetRef.current = window.setTimeout(() => setCopyStatus('idle'), 1800);
  };

  const scrollToPlanSection = (section) => {
    window.requestAnimationFrame(() => {
      document.getElementById(`plan-${section}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const activeCarbDay = localizedCarbDay(macroReport, t);

  return (
    <div className="theme-soft min-h-screen overflow-hidden text-[#4d3934]">
      <MacroOrbit3D />
      <div className="soft-app-bg fixed inset-0 -z-30" />
      <div className="soft-grid-bg fixed inset-0 -z-20" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-3 pb-28 pt-3 sm:px-5 lg:px-8">
        <header className="soft-header sticky top-3 z-40 flex items-center justify-between gap-2 rounded-[26px] border border-white/70 bg-white/78 px-2.5 py-2 shadow-[0_20px_60px_-35px_rgba(162,96,82,0.55)] backdrop-blur-2xl">
          <button onClick={() => setTab('plan')} className="flex min-w-0 items-center gap-2.5 text-left">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[18px] bg-[#ff9f95] text-white shadow-[0_12px_30px_-18px_rgba(255,122,113,0.8)]">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="block min-w-0">
              <span className="block truncate font-display text-base font-extrabold leading-none text-[#4d3934]">Cutting Lab</span>
              <span className="mt-1 block truncate text-[11px] font-bold text-[#a47b72]">{t('appSub')}</span>
            </span>
          </button>

          <nav className="ml-auto hidden shrink-0 grid-cols-4 rounded-[22px] border border-[#ffd8d1]/80 bg-[#fff7f0]/80 p-1 lg:grid">
            <NavButtons tab={tab} setTab={setTab} mode="top" t={t} />
          </nav>
          <LanguageToggle locale={activeLocale} setLocale={setLocale} t={t} />
        </header>

        {tab === 'plan' && (
          <PlanCommandDock
            model={model}
            macroReport={macroReport}
            activeCarbDay={activeCarbDay}
            onIntake={() => setIntakeOpen(true)}
            onCopy={copyDailyPlan}
            copyStatus={copyStatus}
            onJump={scrollToPlanSection}
            t={t}
          />
        )}

        {tab === 'plan' && (
          <Hero
            model={model}
            targets={targets}
            targetProfile={targetProfileModel}
            onIntake={() => setIntakeOpen(true)}
            intakeActive={intakeActive}
            intakeSummary={intakeSummary}
            onCopy={copyDailyPlan}
            copyStatus={copyStatus}
            t={t}
          />
        )}

        {tab === 'plan' && (
          <PlanView
            locale={activeLocale}
            t={t}
            model={model}
            lunchMode={lunchMode}
            setLunchMode={setLunchMode}
            lunchKcal={lunchKcal}
            setLunchKcal={setLunchKcal}
            tally={tally}
            setTally={setTally}
            setMapQty={setMapQty}
            mealSplitPct={mealSplitPct}
            setMealSplitPct={setMealSplitPct}
            lunchCarbPlan={lunchCarbPlan}
            setLunchCarbPlan={setLunchCarbPlan}
            lunchProteinKeys={lunchProteinKeys}
            toggleLunchProtein={toggleLunchProtein}
            lunchFatKeys={lunchFatKeys}
            toggleLunchFat={toggleLunchFat}
            pre={pre}
            setPre={setPre}
            drinkKey={drinkKey}
            setDrinkKey={setDrinkKey}
            drinkMl={drinkMl}
            setDrinkMl={setDrinkMl}
            snack={snack}
            setSnack={setSnack}
            carbPlan={carbPlan}
            setCarbPlan={setCarbPlan}
            proteinKeys={proteinKeys}
            toggleProtein={toggleProtein}
            fatKeys={fatKeys}
            toggleFat={toggleFat}
            extraCarbs={extraCarbs}
            setExtraCarbs={setExtraCarbs}
            beefFat={beefFat}
            setBeefFat={setBeefFat}
            advancedOpen={advancedOpen}
            setAdvancedOpen={setAdvancedOpen}
            targets={targets}
            targetProfile={targetProfileModel}
            setTargetProfile={setTargetProfile}
            macroReport={macroReport}
            activeCarbDay={activeCarbDay}
            resetDefaults={resetDefaults}
            onTuneLunch={tuneLunchItem}
            resetLunchAdjustments={() => setLunchAdjustments({})}
            onTuneDinner={tuneDinnerItem}
            resetDinnerAdjustments={() => setDinnerAdjustments({})}
          />
        )}

        {tab === 'detail' && (
          <DetailView
            locale={activeLocale}
            t={t}
            model={model}
            targets={targets}
            targetProfile={targetProfileModel}
            setTargetProfile={setTargetProfile}
            macroReport={macroReport}
            activeCarbDay={activeCarbDay}
            tdee={tdee}
            setTdee={setTdee}
            lunchMode={lunchMode}
            setLunchMode={setLunchMode}
            lunchKcal={lunchKcal}
            setLunchKcal={setLunchKcal}
            tally={tally}
            setTally={setTally}
            mealSplitPct={mealSplitPct}
            setMealSplitPct={setMealSplitPct}
            lunchCarbPlan={lunchCarbPlan}
            setLunchCarbPlan={setLunchCarbPlan}
            lunchProteinKeys={lunchProteinKeys}
            toggleLunchProtein={toggleLunchProtein}
            lunchFatKeys={lunchFatKeys}
            toggleLunchFat={toggleLunchFat}
            pre={pre}
            setPre={setPre}
            setMapQty={setMapQty}
            drinkKey={drinkKey}
            setDrinkKey={setDrinkKey}
            drinkMl={drinkMl}
            setDrinkMl={setDrinkMl}
            snack={snack}
            setSnack={setSnack}
            onTuneLunch={tuneLunchItem}
            resetLunchAdjustments={() => setLunchAdjustments({})}
            saltG={saltG}
            setSaltG={setSaltG}
            foodK={foodK}
            setFoodK={setFoodK}
          />
        )}

        {tab === 'shop' && (
          <ShopView locale={activeLocale} t={t} model={model} shopDays={shopDays} setShopDays={setShopDays} setShopPlan={setShopPlan} />
        )}

        {tab === 'cheat' && (
          <CheatView locale={activeLocale} t={t} cheat={cheat} setCheat={setCheat} cheatTotal={cheatTotal} cheatSurplus={cheatSurplus} tdee={tdee} dayKcal={model.total.kcal} />
        )}
      </div>

      <IntakeDrawer
        locale={activeLocale}
        t={t}
        open={intakeOpen}
        setOpen={setIntakeOpen}
        model={model}
        lunchMode={lunchMode}
        setLunchMode={setLunchMode}
        lunchKcal={lunchKcal}
        setLunchKcal={setLunchKcal}
        tally={tally}
        setTally={setTally}
        mealSplitPct={mealSplitPct}
        setMealSplitPct={setMealSplitPct}
        lunchCarbPlan={lunchCarbPlan}
        setLunchCarbPlan={setLunchCarbPlan}
        lunchProteinKeys={lunchProteinKeys}
        toggleLunchProtein={toggleLunchProtein}
        lunchFatKeys={lunchFatKeys}
        toggleLunchFat={toggleLunchFat}
        pre={pre}
        setPre={setPre}
        setMapQty={setMapQty}
        drinkKey={drinkKey}
        setDrinkKey={setDrinkKey}
        drinkMl={drinkMl}
        setDrinkMl={setDrinkMl}
        snack={snack}
        setSnack={setSnack}
        onTuneLunch={tuneLunchItem}
        resetLunchAdjustments={() => setLunchAdjustments({})}
        dinnerSummary={model.dinnerItems.slice(0, 4).map((item) => {
          const display = displayDinnerItem(item, activeLocale);
          return `${display.short || display.name} ${round(display.qty)}${display.unit}`;
        }).join(' · ')}
      />

      <CopyPanel open={copyPanelOpen} setOpen={setCopyPanelOpen} text={copyText} onCopied={() => {
        setCopyPanelOpen(false);
        setCopyStatus('copied');
        window.clearTimeout(copyResetRef.current);
        copyResetRef.current = window.setTimeout(() => setCopyStatus('idle'), 1800);
      }} t={t} />

      <button
        onClick={() => setIntakeOpen(true)}
        className="fixed bottom-5 right-5 z-50 hidden h-14 w-14 place-items-center rounded-[22px] border border-white/80 bg-[#ffcf7d] text-[#5d4037] shadow-[0_18px_38px_-22px_rgba(204,125,57,0.8)] transition hover:-translate-y-0.5 lg:grid"
        aria-label={t('intakeDrawerTitle')}
      >
        <ClipboardList className="h-6 w-6" />
        {(fuelActive || snackActive) && <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#69cda5]" />}
      </button>

      <nav className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 rounded-[24px] border border-white/80 bg-white/82 p-1.5 shadow-[0_18px_65px_-35px_rgba(134,80,70,0.8)] backdrop-blur-2xl lg:hidden">
        <NavButtons tab={tab} setTab={setTab} mode="bottom" t={t} />
      </nav>
    </div>
  );
}

function LanguageToggle({ locale, setLocale, t }) {
  return (
    <div data-language-toggle className="grid shrink-0 grid-cols-2 rounded-[18px] border border-[#ffd8d1]/80 bg-[#fff9f4] p-1" aria-label={t('language')}>
      {LOCALES.map((item) => (
        <button
          key={item}
          onClick={() => setLocale(item)}
          className={`rounded-[14px] px-2.5 py-2 text-[11px] font-extrabold transition sm:px-3 ${
            locale === item ? 'bg-[#ff9f95] text-white shadow-[0_10px_24px_-18px_rgba(255,122,113,0.8)]' : 'text-[#a47b72] hover:bg-white'
          }`}
        >
          {t(item)}
        </button>
      ))}
    </div>
  );
}

function NavButtons({ tab, setTab, mode, t }) {
  return NAV.map((item) => {
    const Icon = item.icon;
    return (
      <button
        key={item.id}
        onClick={() => setTab(item.id)}
        className={`grid h-11 place-items-center rounded-[18px] px-2 text-[11px] font-extrabold transition ${
          mode === 'top' ? 'min-w-20 grid-cols-[16px_auto] gap-1.5' : 'grid-rows-[18px_auto] gap-0.5'
        } ${
          tab === item.id ? 'bg-[#5fc89e] text-white shadow-[0_12px_28px_-20px_rgba(57,156,118,0.9)]' : 'text-[#a47b72] hover:bg-white hover:text-[#4d3934]'
        }`}
        aria-label={t(item.labelKey)}
      >
        <Icon className="h-4 w-4" />
        <span>{t(item.labelKey)}</span>
      </button>
    );
  });
}

function PlanCommandDock({ model, macroReport, activeCarbDay, onIntake, onCopy, copyStatus, onJump, t }) {
  const copyMeta = {
    idle: t('copy'),
    copying: t('copying'),
    copied: t('copied'),
    failed: t('retry'),
  }[copyStatus] || t('copy');
  const actions = [
    { key: 'intake', icon: ClipboardList, label: t('intake'), value: `${Math.round(model.beforeDinner.kcal)} kcal`, onClick: () => onJump('intake') },
    { key: 'dinner', icon: Utensils, label: t('dinner'), value: `${Math.round(model.dinner.kcal)} kcal`, onClick: () => onJump('dinner') },
    { key: 'rhythm', icon: Gauge, label: activeCarbDay.label, value: `C ${macroReport.carbPerKg}g/kg`, onClick: () => onJump('rhythm') },
    { key: 'edit-intake', icon: Zap, label: t('editIntake'), value: `${Math.round(model.beforeDinner.kcal)} kcal`, onClick: onIntake },
    { key: 'copy', icon: ClipboardList, label: copyMeta, value: t('record'), onClick: onCopy },
  ];

  return (
    <div data-plan-flow-dock className="sticky top-[74px] z-30 rounded-[24px] border border-white/75 bg-white/80 p-1.5 shadow-[0_18px_60px_-40px_rgba(134,80,70,0.65)] backdrop-blur-2xl lg:top-[82px]">
      <div className="grid grid-cols-5 gap-1">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.key}
              data-flow-action={action.key}
              onClick={action.onClick}
              className="min-w-0 rounded-[18px] border border-[#ffe3da] bg-[#fff9f4]/90 px-1.5 py-2 text-left transition hover:-translate-y-0.5 hover:border-[#ffb8ae] hover:bg-white"
            >
              <Icon className="mx-auto h-4 w-4 text-[#ff8d82]" />
              <div className="mt-1 truncate text-center font-cjk text-[11px] font-extrabold leading-none text-[#4d3934]">{action.label}</div>
              <div className="mt-1 truncate text-center font-mono text-[9px] leading-none text-[#a47b72]">{action.value}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Hero({ model, targets, targetProfile, onIntake, intakeActive, intakeSummary, onCopy, copyStatus, t }) {
  const copyMeta = {
    idle: { label: t('copy'), sub: t('record'), icon: ClipboardList },
    copying: { label: t('copying'), sub: 'clipboard', icon: ClipboardList },
    copied: { label: t('copied'), sub: 'ok', icon: CheckCircle2 },
    failed: { label: t('retry'), sub: 'clipboard', icon: ClipboardList },
  }[copyStatus] || { label: t('copy'), sub: t('record'), icon: ClipboardList };

  return (
    <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
      <div className="soft-hero-panel relative overflow-hidden rounded-[34px] border border-white/70 bg-white/72 p-5 shadow-[0_30px_90px_-60px_rgba(134,80,70,0.75)] backdrop-blur-2xl sm:p-7">
        <div className="relative z-10 flex h-full min-h-[330px] flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge icon={Activity}>
                {round(targetProfile.bodyWeightKg)} kg · P {round(targetProfile.proteinPerKg, 1)}g/kg · F {round(targetProfile.fatMinPerKg, 1)}g/kg
              </Badge>
              <button
                data-home-intake-button
                onClick={onIntake}
                className={`inline-flex max-w-full items-center gap-2 rounded-[999px] border px-3 py-2 text-left text-xs font-bold transition hover:-translate-y-0.5 ${
                  intakeActive ? 'border-[#6fd2aa] bg-[#e8fff4] text-[#2c765e]' : 'border-[#ffe3da] bg-white/72 text-[#a47b72]'
                }`}
                aria-label={`${t('intake')}: ${intakeSummary}`}
              >
                <ClipboardList className="h-4 w-4 shrink-0" />
                <span>{t('intake')}</span>
                <span className="rounded-full bg-white px-2 py-0.5 font-mono text-[10px]">{Math.round(model.beforeDinner.kcal)} kcal</span>
              </button>
            </div>
            <h1 className="mt-7 max-w-2xl font-display text-4xl font-extrabold leading-[1.04] text-[#4d3934] sm:text-7xl">
              {t('heroTitle')}
              <span className="block text-[#ff8d82]">{t('heroAccent')}</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-[#8f6c64] sm:text-base">{t('heroCopy')}</p>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-2">
            <HeroAction icon={Zap} label={t('editIntake')} sub={`${Math.round(model.beforeDinner.kcal)} kcal`} onClick={onIntake} />
            <HeroAction icon={copyMeta.icon} label={copyMeta.label} sub={copyMeta.sub} onClick={onCopy} dataAttr="copy-plan-button" />
            <HeroAction icon={Goal} label={`${model.deficit > 0 ? '-' : '+'}${Math.abs(model.deficit)}`} sub={t('deficit')} />
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-[34px] border border-white/70 bg-white/72 shadow-[0_30px_90px_-60px_rgba(134,80,70,0.75)] backdrop-blur-xl">
        <div className="relative h-[230px] overflow-hidden sm:h-[360px] lg:h-full lg:min-h-[430px]">
          <img src={generated('protocol-hero-premium.jpg')} alt="Cutting Lab dinner visual" className="h-full w-full object-cover object-center brightness-[1.08] contrast-[0.95] saturate-[0.92]" />
          <div className="soft-image-wash absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <div className="mb-3 flex items-end justify-between gap-3">
              <div>
                <div className="text-xs font-extrabold text-[#8f6c64]">{t('dinnerKcal')}</div>
                <div className="font-display text-5xl font-extrabold leading-none text-[#4d3934]">{Math.round(model.dinner.kcal)}</div>
              </div>
              <div className="rounded-[22px] border border-white/80 bg-white/78 px-3 py-2 text-right backdrop-blur">
                <div className="text-[11px] font-bold text-[#a47b72]">{t('todayTotal')}</div>
                <div className="font-mono text-xl font-bold text-[#5fc89e]">{Math.round(model.total.kcal)}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <MetricTile label="P" value={model.total.p} target={targets.p} unit="g" />
              <MetricTile label="C" value={model.total.c} target={targets.c} unit="g" />
              <MetricTile label="F" value={model.total.f} target={targets.f} unit="g" />
              <MetricTile label="Kcal" value={model.total.kcal} target={targets.kcal} unit="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MealPreferenceEditor({ locale, t, proteinKeys, toggleProtein, carbPlan, setCarbPlan, fatKeys, toggleFat }) {
  return (
    <div className="grid gap-4">
      <OptionBlock title={t('protein')}>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {Object.entries(PROTEINS).map(([key, source]) => {
            const item = localize(source, locale);
            return <OptionCard key={key} active={proteinKeys.includes(key)} onClick={() => toggleProtein(key)} title={item.short} meta={item.note} />;
          })}
        </div>
      </OptionBlock>

      <OptionBlock title={t('carb')}>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {Object.entries(CARB_PLANS).map(([key, source]) => {
            const plan = localize(source, locale);
            return (
              <button
                key={key}
                onClick={() => setCarbPlan(key)}
                className={`rounded-[22px] border p-3 text-left transition hover:-translate-y-0.5 ${
                  carbPlan === key ? 'border-[#ffb8ae] bg-[#fff0ed] text-[#4d3934]' : 'border-[#ffe3da] bg-white/58 text-[#8f6c64] hover:border-[#ffb8ae] hover:bg-white'
                }`}
              >
                <div className="h-2 w-10 rounded-full" style={{ backgroundColor: plan.color }} />
                <div className="mt-3 font-cjk text-sm font-extrabold">{plan.short}</div>
                <div className="mt-1 text-[11px] font-semibold text-[#a47b72]">{plan.sub}</div>
              </button>
            );
          })}
        </div>
      </OptionBlock>

      <OptionBlock title={t('fatSource')}>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {Object.entries(FAT_SOURCES).map(([key, source]) => {
            const item = localize(source, locale);
            return <OptionCard key={key} active={fatKeys.includes(key)} onClick={() => toggleFat(key)} title={item.short} meta={`${item.f}g / ${item.unit}`} tone="amber" />;
          })}
        </div>
      </OptionBlock>
    </div>
  );
}

function PlannedMealEditor({ locale, t, title, items, target, preferenceProps, onTune, resetAdjustments }) {
  const hasAdjustments = items.some((item) => item.adjustment !== 0);
  const total = items.reduce((sum, item) => addMacros(sum, item.macro), emptyMacro);

  return (
    <div className="grid gap-4">
      <MealPreferenceEditor locale={locale} t={t} {...preferenceProps} />
      <div className="rounded-[24px] border border-[#ffe3da] bg-white/58 p-3">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <div className="text-xs font-extrabold text-[#ff8d82]">{title}</div>
            <div className="mt-1 text-[11px] font-bold text-[#a47b72]">target {Math.round(target.kcal)} kcal</div>
          </div>
          <div className="font-mono text-xs font-bold text-[#a47b72]">P{round(total.p)} C{round(total.c)} F{round(total.f)}</div>
        </div>
        <div className="grid gap-2">
          {items.length ? items.map((item, index) => (
            <FoodRow key={item.key} item={displayDinnerItem(item, locale)} index={index} onTune={onTune} t={t} />
          )) : (
            <div className="rounded-[22px] border border-[#ffe3da] bg-white/58 p-4 text-sm font-bold text-[#a47b72]">{t('noDinner')}</div>
          )}
        </div>
        {hasAdjustments && (
          <button onClick={resetAdjustments} className="mt-3 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/60 px-3 py-2 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]">
            <RotateCcw className="h-4 w-4" />
            {t('resetTune')}
          </button>
        )}
      </div>
    </div>
  );
}

function LunchEditor({
  locale,
  t,
  model,
  lunchMode,
  setLunchMode,
  lunchKcal,
  setLunchKcal,
  tally,
  setTally,
  setMapQty,
  mealSplitPct,
  setMealSplitPct,
  lunchCarbPlan,
  setLunchCarbPlan,
  lunchProteinKeys,
  toggleLunchProtein,
  lunchFatKeys,
  toggleLunchFat,
  onTuneLunch,
  resetLunchAdjustments,
}) {
  return (
    <div className="grid gap-4">
      <Segmented
        value={lunchMode}
        onChange={setLunchMode}
        options={[
          { value: 'planned', label: t('plannedMode') },
          { value: 'quick', label: t('quickKcal') },
          { value: 'tally', label: t('tallyMode') },
        ]}
      />
      {lunchMode === 'planned' ? (
        <div className="grid gap-4">
          <OptionBlock title={t('mealSplit')}>
            <div className="grid grid-cols-4 gap-2">
              {[35, 40, 45, 50].map((value) => (
                <Chip key={value} active={mealSplitPct === value} onClick={() => setMealSplitPct(value)}>{value}/{100 - value}</Chip>
              ))}
            </div>
            <div className="mt-2 text-[11px] font-bold text-[#a47b72]">{t('lunchShare')} {mealSplitPct}% · {t('dinner')} {100 - mealSplitPct}%</div>
          </OptionBlock>
          <PlannedMealEditor
            locale={locale}
            t={t}
            title={t('generatedLunch')}
            items={model.lunchItems}
            target={model.mealTargets.lunch}
            preferenceProps={{
              proteinKeys: lunchProteinKeys,
              toggleProtein: toggleLunchProtein,
              carbPlan: lunchCarbPlan,
              setCarbPlan: setLunchCarbPlan,
              fatKeys: lunchFatKeys,
              toggleFat: toggleLunchFat,
            }}
            onTune={onTuneLunch}
            resetAdjustments={resetLunchAdjustments}
          />
        </div>
      ) : lunchMode === 'quick' ? (
        <LunchKcalInput value={lunchKcal} onChange={setLunchKcal} t={t} />
      ) : (
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {Object.entries(TALLY_ITEMS).map(([key, source]) => {
            const item = localize(source, locale);
            return (
              <StepperRow
                key={key}
                label={item.label}
                meta={`${round(macroKcal(scaleMacro(source, source.step)))} kcal / ${source.step}${item.unit}`}
                value={tally[key] || 0}
                unit={item.unit}
                step={source.step}
                max={source.max}
                onChange={(value) => setMapQty(setTally, key, value, source.max)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function FuelControls({ locale, t, pre, setPre, setMapQty, drinkKey, setDrinkKey, drinkMl, setDrinkMl, model }) {
  const fuelActive = isFuelActive(pre, drinkKey, drinkMl);
  const summary = describeFuel(pre, drinkKey, drinkMl, locale, t);
  const fuelMacro = addMacros(model.pre, model.drink);

  const applyNoFuel = () => {
    setPre({});
    setDrinkKey('none');
    setDrinkMl(0);
  };

  const chooseDrink = (key) => {
    setDrinkKey(key);
    if (key === 'none') setDrinkMl(0);
    else if (drinkMl <= 0) setDrinkMl(400);
  };

  return (
    <div className="grid gap-4">
      <div className={`rounded-[24px] border p-3 ${fuelActive ? 'border-[#bdf0d9] bg-[#edfff6]' : 'border-[#ffe3da] bg-white/64'}`}>
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-extrabold text-[#a47b72]">{t('fuel')}</span>
          <span className={fuelActive ? 'font-extrabold text-[#3da77d]' : 'font-extrabold text-[#a47b72]'}>{fuelActive ? t('on') : t('off')}</span>
        </div>
        <div className="mt-2 text-sm font-bold leading-6 text-[#4d3934]">{summary}</div>
        <div className="mt-2 font-mono text-xs font-bold text-[#a47b72]">P{round(fuelMacro.p)} C{round(fuelMacro.c)} F{round(fuelMacro.f)} · {Math.round(fuelMacro.kcal)} kcal</div>
      </div>

      <OptionBlock title={t('eatWhat')}>
        <div className="grid gap-2 sm:grid-cols-2">
          {Object.entries(PRE_ITEMS).map(([key, source]) => {
            const item = localize(source, locale);
            return (
              <StepperRow key={key} label={item.label} meta={`${round(macroKcal(scaleMacro(source, source.step)))} kcal / ${source.step}${item.unit}`} value={pre[key] || 0} unit={item.unit} step={source.step} max={source.max} onChange={(value) => setMapQty(setPre, key, value, source.max)} />
            );
          })}
        </div>
        {fuelActive && (
          <button onClick={applyNoFuel} className="mt-3 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/70 px-3 py-2 text-xs font-extrabold text-[#a47b72] hover:text-[#ff7d75]">
            <RotateCcw className="h-4 w-4" />
            {t('applyNoFuel')}
          </button>
        )}
      </OptionBlock>

      <OptionBlock title={t('drinkWhat')}>
        <div className="grid grid-cols-3 gap-2">
          {Object.entries(DRINKS).map(([key, source]) => {
            const item = localize(source, locale);
            return <OptionCard key={key} active={drinkKey === key} onClick={() => chooseDrink(key)} title={item.label} meta={item.sub} tone="green" />;
          })}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[200, 400, 600].map((value) => (
            <Chip key={value} active={drinkMl === value} onClick={() => setDrinkMl(value)}>{value}ml</Chip>
          ))}
        </div>
        <div className="mt-3">
          <TargetInput label={t('sauce')} unit="ml" value={drinkMl} min={0} max={2000} onChange={(value) => setDrinkMl(clamp(value, 0, 2000))} />
        </div>
      </OptionBlock>
    </div>
  );
}

function SnackMacroEditor({ locale, t, snack, setSnack, dinnerSummary }) {
  const active = isSnackActive(snack);
  const setField = (key, value) => {
    setSnack((current) => ({ ...current, [key]: key === 'name' ? value : clamp(value, 0, key === 'kcal' ? 5000 : 500) }));
  };

  return (
    <div>
      <label className="text-xs font-extrabold text-[#a47b72]">{t('snackName')}</label>
      <input value={snack.name} onChange={(event) => setField('name', event.target.value)} className="mt-2 h-11 w-full rounded-[18px] border border-[#ffe3da] bg-white/70 px-3 text-sm font-bold text-[#4d3934] outline-none focus:border-[#ff9f95]" />
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          ['kcal', t('calorie')],
          ['p', t('protein')],
          ['c', t('carb')],
          ['f', t('fat')],
        ].map(([key, label]) => (
          <TargetInput key={key} label={label} unit={key === 'kcal' ? '' : 'g'} value={snack[key]} min={0} max={key === 'kcal' ? 5000 : 500} onChange={(value) => setField(key, value)} />
        ))}
      </div>
      <div className="mt-4 rounded-[24px] border border-[#ffd6a5] bg-[#fff6df] p-4">
        <div className="text-xs font-extrabold text-[#d8903d]">{t('dinnerWillClose')}</div>
        <div className="mt-2 text-sm font-semibold leading-6 text-[#8f6c64]">{dinnerSummary || t('noDinner')} · {Math.round(macroKcal(snack))} kcal</div>
      </div>
      {active && (
        <button onClick={() => setSnack({ name: locale === 'ja' ? '手入力の間食' : '手动加餐', p: 0, c: 0, f: 0, kcal: 0 })} className="mt-4 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/70 px-3 py-2 text-xs font-extrabold text-[#a47b72] hover:text-[#ff7d75]">
          <RotateCcw className="h-4 w-4" />
          {t('clearSnack')}
        </button>
      )}
    </div>
  );
}

function IntakeEditor(props) {
  const {
    locale,
    t,
    model,
    lunchMode,
    setLunchMode,
    lunchKcal,
    setLunchKcal,
    tally,
    setTally,
    setMapQty,
    mealSplitPct,
    setMealSplitPct,
    lunchCarbPlan,
    setLunchCarbPlan,
    lunchProteinKeys,
    toggleLunchProtein,
    lunchFatKeys,
    toggleLunchFat,
    pre,
    setPre,
    drinkKey,
    setDrinkKey,
    drinkMl,
    setDrinkMl,
    snack,
    setSnack,
    onTuneLunch,
    resetLunchAdjustments,
    dinnerSummary,
  } = props;

  return (
    <div className="grid gap-5">
      <div className="grid gap-2 sm:grid-cols-4">
        <ResultPill label={t('beforeDinnerTotal')} value={Math.round(model.beforeDinner.kcal)} sub={`P${round(model.beforeDinner.p)} C${round(model.beforeDinner.c)} F${round(model.beforeDinner.f)}`} />
        <ResultPill label={t('lunch')} value={Math.round(model.lunch.kcal)} sub="kcal" />
        <ResultPill label={t('fuel')} value={Math.round(addMacros(model.pre, model.drink).kcal)} sub={describeFuel(pre, drinkKey, drinkMl, locale, t)} />
        <ResultPill label={t('snack')} value={Math.round(macroKcal(snack))} sub={describeSnack(snack, t)} />
      </div>

      <OptionBlock title={t('lunch')}>
        <LunchEditor
          locale={locale}
          t={t}
          model={model}
          lunchMode={lunchMode}
          setLunchMode={setLunchMode}
          lunchKcal={lunchKcal}
          setLunchKcal={setLunchKcal}
          tally={tally}
          setTally={setTally}
          setMapQty={setMapQty}
          mealSplitPct={mealSplitPct}
          setMealSplitPct={setMealSplitPct}
          lunchCarbPlan={lunchCarbPlan}
          setLunchCarbPlan={setLunchCarbPlan}
          lunchProteinKeys={lunchProteinKeys}
          toggleLunchProtein={toggleLunchProtein}
          lunchFatKeys={lunchFatKeys}
          toggleLunchFat={toggleLunchFat}
          onTuneLunch={onTuneLunch}
          resetLunchAdjustments={resetLunchAdjustments}
        />
      </OptionBlock>

      <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
        <OptionBlock title={t('fuel')}>
          <FuelControls locale={locale} t={t} pre={pre} setPre={setPre} setMapQty={setMapQty} drinkKey={drinkKey} setDrinkKey={setDrinkKey} drinkMl={drinkMl} setDrinkMl={setDrinkMl} model={model} />
        </OptionBlock>
        <OptionBlock title={t('manualSnack')}>
          <SnackMacroEditor locale={locale} t={t} snack={snack} setSnack={setSnack} dinnerSummary={dinnerSummary} />
        </OptionBlock>
      </div>
    </div>
  );
}

function PlanView(props) {
  const {
    locale,
    t,
    model,
    lunchMode,
    setLunchMode,
    lunchKcal,
    setLunchKcal,
    tally,
    setTally,
    setMapQty,
    mealSplitPct,
    setMealSplitPct,
    lunchCarbPlan,
    setLunchCarbPlan,
    lunchProteinKeys,
    toggleLunchProtein,
    lunchFatKeys,
    toggleLunchFat,
    pre,
    setPre,
    drinkKey,
    setDrinkKey,
    drinkMl,
    setDrinkMl,
    snack,
    setSnack,
    carbPlan,
    setCarbPlan,
    proteinKeys,
    toggleProtein,
    fatKeys,
    toggleFat,
    extraCarbs,
    setExtraCarbs,
    beefFat,
    setBeefFat,
    advancedOpen,
    setAdvancedOpen,
    targets,
    targetProfile,
    setTargetProfile,
    macroReport,
    activeCarbDay,
    resetDefaults,
    onTuneLunch,
    resetLunchAdjustments,
    onTuneDinner,
    resetDinnerAdjustments,
  } = props;
  const hasDinnerAdjustments = model.dinnerItems.some((item) => item.adjustment !== 0);

  const updateTargetProfile = (key, value, min, max) => {
    setTargetProfile((current) => ({
      ...DEFAULT_TARGET_PROFILE,
      ...(current || {}),
      [key]: clamp(value, min, max),
    }));
  };

  return (
    <main className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="space-y-5">
        <Panel id="plan-intake" eyebrow={t('planIntakeEyebrow')} title={t('intakeHubTitle')} icon={ClipboardList}>
          <IntakeEditor
            locale={locale}
            t={t}
            model={model}
            lunchMode={lunchMode}
            setLunchMode={setLunchMode}
            lunchKcal={lunchKcal}
            setLunchKcal={setLunchKcal}
            tally={tally}
            setTally={setTally}
            setMapQty={setMapQty}
            mealSplitPct={mealSplitPct}
            setMealSplitPct={setMealSplitPct}
            lunchCarbPlan={lunchCarbPlan}
            setLunchCarbPlan={setLunchCarbPlan}
            lunchProteinKeys={lunchProteinKeys}
            toggleLunchProtein={toggleLunchProtein}
            lunchFatKeys={lunchFatKeys}
            toggleLunchFat={toggleLunchFat}
            pre={pre}
            setPre={setPre}
            drinkKey={drinkKey}
            setDrinkKey={setDrinkKey}
            drinkMl={drinkMl}
            setDrinkMl={setDrinkMl}
            snack={snack}
            setSnack={setSnack}
            onTuneLunch={onTuneLunch}
            resetLunchAdjustments={resetLunchAdjustments}
            dinnerSummary={model.dinnerItems.slice(0, 4).map((item) => {
              const display = displayDinnerItem(item, locale);
              return `${display.short || display.name} ${round(display.qty)}${display.unit}`;
            }).join(' · ')}
          />
        </Panel>

        <Disclosure open={advancedOpen} onToggle={() => setAdvancedOpen(!advancedOpen)} title={t('advanced')} subtitle={t('advancedSub')}>
          <div className="grid gap-5">
            <OptionBlock title={t('extras')}>
              <div className="grid gap-2 sm:grid-cols-2">
                {Object.entries(DINNER_EXTRAS).map(([key, source]) => {
                  const item = localize(source, locale);
                  return (
                    <StepperRow
                      key={key}
                      label={item.label}
                      meta={`${round(macroKcal(scaleMacro(source, source.step)))} kcal / ${source.step}${item.unit}`}
                      value={extraCarbs[key] || 0}
                      unit={item.unit}
                      step={source.step}
                      max={source.max}
                      onChange={(value) => setMapQty(setExtraCarbs, key, value, source.max)}
                    />
                  );
                })}
              </div>
            </OptionBlock>

            <OptionBlock title={t('beefFat')}>
              <div className="grid grid-cols-4 gap-2">
                {[5, 9, 13, 18].map((value) => (
                  <Chip key={value} active={beefFat === value} onClick={() => setBeefFat(value)}>{value}g</Chip>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-3">
                <input
                  type="number"
                  value={beefFat}
                  onChange={(event) => setBeefFat(clamp(event.target.value, 0, 40))}
                  className="h-11 w-24 rounded-[18px] border border-[#ffe3da] bg-white/70 text-center font-mono text-lg font-bold text-[#4d3934] outline-none focus:border-[#ff9f95]"
                />
                <span className="text-xs font-semibold text-[#a47b72]">g / 100g raw</span>
              </div>
            </OptionBlock>

            <OptionBlock title={t('targetFormula')}>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  ['bodyWeightKg', t('bodyWeight'), 'kg', 30, 250],
                  ['proteinPerKg', t('proteinRatio'), 'g/kg', 0.8, 3],
                  ['fatMinPerKg', t('fatMin'), 'g/kg', 0.3, 1.5],
                  ['kcal', t('calorie'), 'kcal', 1000, 5000],
                ].map(([key, label, unit, min, max]) => (
                  <TargetInput key={key} label={label} unit={unit} value={targetProfile[key]} min={min} max={max} onChange={(value) => updateTargetProfile(key, value, min, max)} />
                ))}
              </div>
              <TargetFormulaSummary targets={targets} targetProfile={targetProfile} t={t} />
              <button onClick={resetDefaults} className="mt-3 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/60 px-3 py-2 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]">
                <RotateCcw className="h-4 w-4" />
                {t('resetDefault')}
              </button>
            </OptionBlock>
          </div>
        </Disclosure>
      </section>

      <section className="space-y-5">
        <Panel id="plan-dinner" eyebrow={t('dinnerAnswerEyebrow')} title={t('dinnerAnswerTitle')} icon={Sparkles}>
          <OptionBlock title={t('dinnerPlannerTitle')}>
            <MealPreferenceEditor
              locale={locale}
              t={t}
              proteinKeys={proteinKeys}
              toggleProtein={toggleProtein}
              carbPlan={carbPlan}
              setCarbPlan={setCarbPlan}
              fatKeys={fatKeys}
              toggleFat={toggleFat}
            />
          </OptionBlock>

          <div className="grid gap-2">
            {model.dinnerItems.length ? model.dinnerItems.map((item, index) => (
              <FoodRow key={item.key} item={displayDinnerItem(item, locale)} index={index} onTune={onTuneDinner} t={t} />
            )) : (
              <div className="rounded-[22px] border border-[#ffe3da] bg-white/58 p-4 text-sm font-bold text-[#a47b72]">{t('noDinner')}</div>
            )}
          </div>
          {hasDinnerAdjustments && (
            <button onClick={resetDinnerAdjustments} className="mt-3 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/60 px-3 py-2 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]">
              <RotateCcw className="h-4 w-4" />
              {t('resetTune')}
            </button>
          )}
        </Panel>

        <Panel id="plan-rhythm" eyebrow={t('rhythmEyebrow')} title={t('rhythmTitle')} icon={Gauge}>
          <div className="space-y-3">
            <MacroBar label={t('protein')} value={model.total.p} target={targets.p} unit="g" color="#ff8d82" />
            <MacroBar label={t('carb')} value={model.total.c} target={targets.c} unit="g" color="#ffcf7d" />
            <MacroBar label={t('fat')} value={model.total.f} target={targets.f} unit="g" color="#69cda5" />
            <MacroBar label={t('calorie')} value={model.total.kcal} target={targets.kcal} unit="kcal" color="#85d7e3" />
            <CarbDayBanner report={macroReport} activeCarbDay={activeCarbDay} t={t} />
          </div>
        </Panel>
      </section>
    </main>
  );
}

function DetailView(props) {
  const {
    locale,
    t,
    model,
    targets,
    targetProfile,
    setTargetProfile,
    macroReport,
    activeCarbDay,
    tdee,
    setTdee,
    lunchMode,
    setLunchMode,
    lunchKcal,
    setLunchKcal,
    tally,
    setTally,
    mealSplitPct,
    setMealSplitPct,
    lunchCarbPlan,
    setLunchCarbPlan,
    lunchProteinKeys,
    toggleLunchProtein,
    lunchFatKeys,
    toggleLunchFat,
    pre,
    setPre,
    setMapQty,
    drinkKey,
    setDrinkKey,
    drinkMl,
    setDrinkMl,
    snack,
    setSnack,
    onTuneLunch,
    resetLunchAdjustments,
    saltG,
    setSaltG,
    foodK,
    setFoodK,
  } = props;
  const balanceOk = model.potassium >= model.sodium;
  const updateTargetProfile = (key, value, min, max) => {
    setTargetProfile((current) => ({
      ...DEFAULT_TARGET_PROFILE,
      ...(current || {}),
      [key]: clamp(value, min, max),
    }));
  };

  return (
    <main className="grid gap-5 lg:grid-cols-[1fr_1fr]">
      <Panel eyebrow={t('ledger')} title={t('ledgerTitle')} icon={ClipboardList}>
        <LedgerRow label={t('lunch')} macro={model.lunch} />
        <LedgerRow label={t('preTraining')} macro={model.pre} />
        <LedgerRow label={t('drinkElectrolyte')} macro={model.drink} />
        <LedgerRow label={t('snackMeal')} macro={model.snack} />
        <LedgerRow label={t('dinner')} macro={model.dinner} strong />
      </Panel>

      <Panel eyebrow={t('planIntakeEyebrow')} title={t('intakeHubTitle')} icon={ClipboardList}>
        <IntakeEditor
          locale={locale}
          t={t}
          model={model}
          lunchMode={lunchMode}
          setLunchMode={setLunchMode}
          lunchKcal={lunchKcal}
          setLunchKcal={setLunchKcal}
          tally={tally}
          setTally={setTally}
          setMapQty={setMapQty}
          mealSplitPct={mealSplitPct}
          setMealSplitPct={setMealSplitPct}
          lunchCarbPlan={lunchCarbPlan}
          setLunchCarbPlan={setLunchCarbPlan}
          lunchProteinKeys={lunchProteinKeys}
          toggleLunchProtein={toggleLunchProtein}
          lunchFatKeys={lunchFatKeys}
          toggleLunchFat={toggleLunchFat}
          pre={pre}
          setPre={setPre}
          drinkKey={drinkKey}
          setDrinkKey={setDrinkKey}
          drinkMl={drinkMl}
          setDrinkMl={setDrinkMl}
          snack={snack}
          setSnack={setSnack}
          onTuneLunch={onTuneLunch}
          resetLunchAdjustments={resetLunchAdjustments}
          dinnerSummary={model.dinnerItems.slice(0, 4).map((item) => {
            const display = displayDinnerItem(item, locale);
            return `${display.short || display.name} ${round(display.qty)}${display.unit}`;
          }).join(' · ')}
        />
      </Panel>

      <Panel eyebrow={t('targetFormula')} title={t('targetByWeight')} icon={Goal}>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {[
            ['bodyWeightKg', t('bodyWeight'), 'kg', 30, 250],
            ['proteinPerKg', t('proteinRatio'), 'g/kg', 0.8, 3],
            ['fatMinPerKg', t('fatMin'), 'g/kg', 0.3, 1.5],
            ['kcal', t('calorie'), 'kcal', 1000, 5000],
          ].map(([key, label, unit, min, max]) => (
            <TargetInput key={key} label={label} unit={unit} value={targetProfile[key]} min={min} max={max} onChange={(value) => updateTargetProfile(key, value, min, max)} />
          ))}
          <TargetInput label={t('tdee')} unit="kcal" value={tdee} min={0} max={9000} onChange={(value) => setTdee(clamp(value, 0, 9000))} />
        </div>
        <TargetFormulaSummary targets={targets} targetProfile={targetProfile} t={t} />
      </Panel>

      <Panel eyebrow={t('rhythmEyebrow')} title={t('structureTitle')} icon={Gauge}>
        <MacroInsightGrid report={macroReport} activeCarbDay={activeCarbDay} targets={targets} t={t} />
      </Panel>

      <Panel eyebrow={t('electrolyte')} title={t('electrolyteTitle')} icon={Leaf}>
        <div className="grid grid-cols-2 gap-2">
          <TargetInput label={t('salt')} unit="g" value={saltG} min={0} max={20} onChange={(value) => setSaltG(clamp(value, 0, 20))} />
          <TargetInput label={t('foodK')} unit="mg" value={foodK} min={0} max={8000} onChange={(value) => setFoodK(clamp(value, 0, 8000))} />
        </div>
        <div className={`mt-4 rounded-[24px] border p-4 ${balanceOk ? 'border-[#bdf0d9] bg-[#edfff6]' : 'border-[#ffd1cb] bg-[#fff1ee]'}`}>
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-bold text-[#8f6c64]">K / Na</span>
            <span className={balanceOk ? 'font-extrabold text-[#3da77d]' : 'font-extrabold text-[#ff7d75]'}>{balanceOk ? t('balanced') : t('lowPotassium')}</span>
          </div>
          <div className="mt-2 text-xs font-semibold text-[#a47b72]">K {Math.round(model.potassium)} mg · Na {Math.round(model.sodium)} mg</div>
        </div>
      </Panel>
    </main>
  );
}

function ShopView({ locale, t, model, shopDays, setShopDays, setShopPlan }) {
  const [pickedItems, setPickedItems] = useState({});
  const [stockOpen, setStockOpen] = useState(false);
  const groupMeta = [
    { tone: 'red', label: locale === 'ja' ? 'たんぱく' : '蛋白主菜', caption: locale === 'ja' ? '肉、チキンを先に' : '肉、鸡胸先补齐', icon: Dumbbell, accent: '#ff8d82' },
    { tone: 'green', label: locale === 'ja' ? '主食' : '主食碳水', caption: locale === 'ja' ? '周期分の炭水化物' : '按一周期望备货', icon: Utensils, accent: '#69cda5' },
    { tone: 'gold', label: locale === 'ja' ? '果物' : '水果加料', caption: locale === 'ja' ? 'パイン、バナナ、りんご' : '菠萝 240g、香蕉、苹果', icon: Apple, accent: '#ffcf7d' },
    { tone: 'amber', label: locale === 'ja' ? '脂質' : '油脂口味', caption: locale === 'ja' ? '卵、チーズ、ソース、ナッツ' : '蛋、芝士、酱和坚果', icon: Flame, accent: '#f1b36a' },
  ];
  const priorityOrder = { red: 0, green: 1, gold: 2, amber: 3 };
  const groupByTone = Object.fromEntries(groupMeta.map((group) => [group.tone, group]));
  const plannedItems = model.shopping.filter((item) => item.enabled);
  const needItems = plannedItems.filter((item) => item.buyQty > 0);
  const coveredItems = plannedItems.filter((item) => item.buyQty <= 0);
  const groups = groupMeta
    .map((group) => ({ ...group, items: model.shopping.filter((item) => item.tone === group.tone) }))
    .filter((group) => group.items.length > 0);
  const runPlan = buildShoppingRunPlan(model.shopping, priorityOrder);
  const pickedCount = runPlan.filter((item) => pickedItems[item.key]).length;
  const buyMacro = needItems.reduce((sum, item) => addMacros(sum, item.macro), emptyMacro);
  const targetMacro = plannedItems.reduce((sum, item) => addMacros(sum, item.expectedMacro), emptyMacro);

  const updatePlan = (key, patch) => {
    setShopPlan((current) => {
      const normalized = normalizeShopPlan(current, model.shopping);
      return {
        ...normalized,
        [key]: {
          ...normalized[key],
          ...patch,
        },
      };
    });
  };

  const clearStocks = () => {
    setShopPlan((current) => {
      const normalized = normalizeShopPlan(current, model.shopping);
      return Object.fromEntries(Object.entries(normalized).map(([key, value]) => [key, { ...value, stock: 0 }]));
    });
  };

  const togglePicked = (key) => {
    setPickedItems((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <main className="grid gap-5">
      <section className="relative overflow-hidden rounded-[34px] border border-white/70 bg-white/76 shadow-[0_30px_90px_-60px_rgba(134,80,70,0.75)]">
        <img src={generated('shop-basket.jpg')} alt="weekly grocery basket" className="absolute inset-0 h-full w-full object-cover opacity-40 brightness-[1.16] contrast-[0.92]" />
        <div className="soft-shop-wash absolute inset-0" />
        <div className="relative grid gap-6 p-5 sm:p-7 lg:grid-cols-[1fr_0.95fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-3 py-2 text-xs font-extrabold text-[#ff8d82] backdrop-blur">
              <PackageCheck className="h-4 w-4" />
              market run
            </div>
            <h2 className="mt-4 font-display text-5xl font-extrabold leading-none text-[#4d3934]">{t('shopHero')}</h2>
            <p className="mt-3 max-w-xl text-sm font-semibold leading-7 text-[#8f6c64]">{t('shopCopy')}</p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {[3, 5, 7, 10].map((days) => (
                <Chip key={days} active={shopDays === days} onClick={() => setShopDays(days)}>{days} 天</Chip>
              ))}
              <button onClick={clearStocks} className="inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/70 px-3 py-2 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]">
                <RotateCcw className="h-4 w-4" />
                {t('clearStock')}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <ShopStat icon={Timer} label={t('cycle')} value={`${shopDays}`} sub="days" />
            <ShopStat icon={ShoppingBasket} label={t('products')} value={runPlan.length} sub={`${t('picked')}${pickedCount}`} />
            <ShopStat icon={Gauge} label={t('actual')} value={Math.round(buyMacro.kcal)} sub="kcal" />
          </div>
        </div>
      </section>

      <Panel eyebrow={t('directPlan')} title={t('directPlanTitle')} icon={ShoppingBasket}>
        {runPlan.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {runPlan.map((item) => (
              <DirectBuyCard key={item.key} item={item} group={groupByTone[item.tone]} picked={Boolean(pickedItems[item.key])} onToggle={() => togglePicked(item.key)} t={t} />
            ))}
          </div>
        ) : (
          <div className="rounded-[24px] border border-[#bdf0d9] bg-[#edfff6] p-4">
            <div className="font-cjk text-sm font-extrabold text-[#3da77d]">{t('nothingToBuy')}</div>
            <div className="mt-1 text-xs font-semibold leading-5 text-[#7a9789]">{t('nothingToBuySub')}</div>
          </div>
        )}
        <div className="mt-4 grid grid-cols-4 gap-2">
          <ResultPill label={t('products')} value={runPlan.length} />
          <ResultPill label={t('picked')} value={pickedCount} />
          <ResultPill label={t('enough')} value={coveredItems.length} />
          <ResultPill label="Kcal" value={Math.round(buyMacro.kcal)} />
        </div>
      </Panel>

      <Disclosure open={stockOpen} onToggle={() => setStockOpen(!stockOpen)} title={t('stockTune')} subtitle={t('stockTuneSub')}>
        <div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="rounded-[24px] border border-[#ffe3da] bg-white/58 p-4">
            <div className="text-xs font-extrabold text-[#a47b72]">cycle target base</div>
            <div className="mt-2 grid grid-cols-4 gap-2">
              <ResultPill label="P" value={Math.round(targetMacro.p)} />
              <ResultPill label="C" value={Math.round(targetMacro.c)} />
              <ResultPill label="F" value={Math.round(targetMacro.f)} />
              <ResultPill label="Kcal" value={Math.round(targetMacro.kcal)} />
            </div>
          </div>
          <div className="grid gap-3">
            {groups.map((group) => (
              <ShopGroupCard key={group.tone} group={group} shopDays={shopDays} onUpdate={updatePlan} t={t} />
            ))}
          </div>
        </div>
      </Disclosure>
    </main>
  );
}

function DirectBuyCard({ item, group, picked, onToggle, t }) {
  const Icon = group?.icon || ShoppingBasket;
  const accent = group?.accent || '#ff8d82';

  return (
    <button
      data-direct-buy-card
      onClick={onToggle}
      aria-pressed={picked}
      className={`min-h-[158px] rounded-[26px] border p-4 text-left transition hover:-translate-y-0.5 ${
        picked ? 'border-[#9fe8ca] bg-[#edfff6]' : 'border-[#ffe3da] bg-white/62 hover:border-[#ffb8ae] hover:bg-white'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-extrabold" style={{ backgroundColor: `${accent}22`, color: accent }}>
          <Icon className="h-3.5 w-3.5" />
          {group?.label || t('products')}
        </span>
        <span className={`grid h-8 w-8 place-items-center rounded-[14px] border ${picked ? 'border-[#9fe8ca] bg-[#69cda5] text-white' : 'border-[#ffe3da] bg-white/70 text-[#caa39b]'}`}>
          <CheckCircle2 className="h-4 w-4" />
        </span>
      </div>
      <div className="mt-4 min-w-0">
        <div className="truncate font-cjk text-base font-extrabold text-[#4d3934]">{item.label}</div>
        <div className="mt-2 flex items-end gap-2">
          <span className="font-display text-5xl font-extrabold leading-none text-[#4d3934]">{round(item.buyQty)}</span>
          <span className="pb-1 text-xs font-bold text-[#a47b72]">{item.unit}</span>
        </div>
        <div className="mt-3 text-xs font-semibold leading-5 text-[#8f6c64]">{item.reason}</div>
        <div className="mt-2 text-[11px] font-semibold text-[#a47b72]">{t('target')} {item.targetText} · {t('stock')} {item.stockText}</div>
      </div>
    </button>
  );
}

function ShopStat({ icon: Icon, label, value, sub }) {
  return (
    <div className="rounded-[24px] border border-white/80 bg-white/70 p-3 backdrop-blur">
      <Icon className="h-4 w-4 text-[#ff8d82]" />
      <div className="mt-3 font-display text-3xl font-extrabold leading-none text-[#4d3934]">{value}</div>
      <div className="mt-1 text-[11px] font-bold text-[#a47b72]">{label} · {sub}</div>
    </div>
  );
}

function ShopGroupCard({ group, shopDays, onUpdate, t }) {
  const Icon = group.icon;
  const needCount = group.items.filter((item) => item.enabled && item.buyQty > 0).length;
  return (
    <section className="rounded-[26px] border border-[#ffe3da] bg-white/58 p-3">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[16px]" style={{ backgroundColor: `${group.accent}24`, color: group.accent }}>
            <Icon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <div className="truncate font-cjk text-sm font-extrabold text-[#4d3934]">{group.label}</div>
            <div className="mt-0.5 truncate text-[11px] font-semibold text-[#a47b72]">{group.caption}</div>
          </div>
        </div>
        <span className="rounded-full border border-[#ffe3da] bg-white/70 px-2.5 py-1 font-mono text-xs font-bold text-[#8f6c64]">{t('buy')} {needCount}/{group.items.length}</span>
      </div>
      <div className="grid gap-2">
        {group.items.map((item) => (
          <ShopItemRow key={item.key} item={item} accent={group.accent} shopDays={shopDays} onUpdate={onUpdate} t={t} />
        ))}
      </div>
    </section>
  );
}

function ShopItemRow({ item, accent, shopDays, onUpdate, t }) {
  const changeTarget = (delta) => {
    onUpdate(item.key, {
      target: clamp(roundTo(item.weeklyTarget + delta, item.step), 0, item.max ?? Infinity),
    });
  };
  const changeStock = (delta) => {
    onUpdate(item.key, {
      stock: clamp(roundTo(item.stockQty + delta, item.step), 0, item.max ?? Infinity),
    });
  };
  const buyLabel = item.enabled ? (item.buyQty > 0 ? `${t('buy')} ${round(item.buyQty)}${item.unit}` : t('enough')) : t('skip');

  return (
    <div data-shop-item-row className={`rounded-[24px] border border-[#ffe3da] bg-white/64 p-3 transition ${item.enabled ? '' : 'opacity-55'}`}>
      <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
        <div className="min-w-0">
          <div className="truncate font-cjk text-sm font-extrabold text-[#4d3934]">{item.label}</div>
          <div className="mt-1 text-xs font-semibold leading-5 text-[#a47b72]">
            {t('weeklyTarget')} {round(item.weeklyTarget)}{item.unit} · {shopDays}d {round(item.targetQty)}{item.unit} · {t('stock')} {round(item.stockQty)}{item.unit}
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 sm:justify-end">
          <div className="rounded-[16px] px-2.5 py-1 text-right" style={{ backgroundColor: `${accent}22` }}>
            <div className="font-mono text-sm font-bold text-[#4d3934]">{buyLabel}</div>
            <div className="mt-0.5 text-[10px] font-bold text-[#a47b72]">this run</div>
          </div>
          <button onClick={() => onUpdate(item.key, { enabled: !item.enabled })} className="h-9 rounded-[16px] border border-[#ffe3da] bg-white/70 px-3 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#4d3934]">
            {item.enabled ? t('skip') : t('add')}
          </button>
        </div>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <ShopQuantityControl label={t('weeklyTarget')} value={item.weeklyTarget} unit={item.unit} onMinus={() => changeTarget(-item.step)} onPlus={() => changeTarget(item.step)} />
        <ShopQuantityControl label={t('stock')} value={item.stockQty} unit={item.unit} onMinus={() => changeStock(-item.step)} onPlus={() => changeStock(item.step)} />
      </div>
    </div>
  );
}

function ShopQuantityControl({ label, value, unit, onMinus, onPlus }) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-[18px] border border-[#ffe3da] bg-[#fff9f4] px-2.5 py-2">
      <span className="text-[11px] font-extrabold text-[#a47b72]">{label}</span>
      <div className="flex items-center gap-1">
        <IconSquare label={`-${label}`} onClick={onMinus} icon={Minus} />
        <span className="w-16 text-center font-mono text-xs font-bold text-[#4d3934]">{round(value)}{unit}</span>
        <IconSquare label={`+${label}`} onClick={onPlus} icon={Plus} />
      </div>
    </div>
  );
}

function CheatView({ locale, t, cheat, setCheat, cheatTotal, cheatSurplus, tdee, dayKcal }) {
  const setQty = (id, value) => {
    setCheat((current) => {
      const next = { ...current };
      const qty = clamp(value, 0, 9);
      if (qty > 0) next[id] = qty;
      else delete next[id];
      return next;
    });
  };

  return (
    <main className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
      <Panel eyebrow={t('navCheat')} title={t('cheatTitle')} icon={Flame}>
        <div className="grid gap-2 sm:grid-cols-2">
          {CHEAT_ITEMS.map((source) => {
            const item = localize(source, locale);
            return (
              <div key={item.id} className="rounded-[24px] border border-[#ffe3da] bg-white/62 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-cjk text-sm font-extrabold text-[#4d3934]">{item.label}</div>
                    <div className="mt-1 text-xs font-semibold text-[#a47b72]">{item.kcal} kcal</div>
                  </div>
                  <MiniStepper value={cheat[item.id] || 0} onChange={(value) => setQty(item.id, value)} />
                </div>
              </div>
            );
          })}
        </div>
      </Panel>
      <section className="overflow-hidden rounded-[34px] border border-white/70 bg-white/76 shadow-[0_30px_90px_-60px_rgba(134,80,70,0.75)]">
        <img src={asset('cheat.jpg')} alt="cheat meal" className="h-56 w-full object-cover brightness-[1.08] contrast-[0.94]" />
        <div className="p-5">
          <div className="text-xs font-extrabold text-[#ff8d82]">{t('cheatResult')}</div>
          <div className="mt-2 font-display text-6xl font-extrabold text-[#4d3934]">{cheatTotal}</div>
          <div className="text-sm font-bold text-[#a47b72]">{t('cheatKcal')}</div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <ResultPill label={t('todayTotal')} value={Math.round(dayKcal + cheatTotal)} />
            <ResultPill label={t('tdee')} value={tdee} />
            <ResultPill label={t('deficit')} value={(cheatSurplus >= 0 ? '+' : '') + cheatSurplus} hot={cheatSurplus > 0} />
          </div>
          <button onClick={() => setCheat({})} className="mt-4 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/70 px-3 py-2 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]">
            <RotateCcw className="h-4 w-4" />
            {t('clear')}
          </button>
        </div>
      </section>
    </main>
  );
}

function IntakeDrawer({
  locale,
  t,
  open,
  setOpen,
  model,
  lunchMode,
  setLunchMode,
  lunchKcal,
  setLunchKcal,
  tally,
  setTally,
  mealSplitPct,
  setMealSplitPct,
  lunchCarbPlan,
  setLunchCarbPlan,
  lunchProteinKeys,
  toggleLunchProtein,
  lunchFatKeys,
  toggleLunchFat,
  pre,
  setPre,
  setMapQty,
  drinkKey,
  setDrinkKey,
  drinkMl,
  setDrinkMl,
  snack,
  setSnack,
  onTuneLunch,
  resetLunchAdjustments,
  dinnerSummary,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <button className="absolute inset-0 bg-[#5d4037]/30 backdrop-blur-sm" onClick={() => setOpen(false)} aria-label="close intake" />
      <aside className="absolute inset-y-0 right-0 flex w-[min(760px,96vw)] flex-col border-l border-white/80 bg-[#fffaf4] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#ffe3da] p-4">
          <div className="flex items-center gap-3">
            <img src={asset('pre.jpg')} alt="" className="h-12 w-12 rounded-[18px] object-cover brightness-[1.08]" />
            <div>
              <div className="font-display text-xl font-extrabold text-[#4d3934]">{t('intakeDrawerTitle')}</div>
              <div className="text-[11px] font-bold text-[#a47b72]">{t('intakeDrawerSub')}</div>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-[16px] border border-[#ffe3da] bg-white/70 text-[#a47b72] hover:text-[#4d3934]" aria-label="close">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <IntakeEditor
            locale={locale}
            t={t}
            model={model}
            lunchMode={lunchMode}
            setLunchMode={setLunchMode}
            lunchKcal={lunchKcal}
            setLunchKcal={setLunchKcal}
            tally={tally}
            setTally={setTally}
            setMapQty={setMapQty}
            mealSplitPct={mealSplitPct}
            setMealSplitPct={setMealSplitPct}
            lunchCarbPlan={lunchCarbPlan}
            setLunchCarbPlan={setLunchCarbPlan}
            lunchProteinKeys={lunchProteinKeys}
            toggleLunchProtein={toggleLunchProtein}
            lunchFatKeys={lunchFatKeys}
            toggleLunchFat={toggleLunchFat}
            pre={pre}
            setPre={setPre}
            drinkKey={drinkKey}
            setDrinkKey={setDrinkKey}
            drinkMl={drinkMl}
            setDrinkMl={setDrinkMl}
            snack={snack}
            setSnack={setSnack}
            onTuneLunch={onTuneLunch}
            resetLunchAdjustments={resetLunchAdjustments}
            dinnerSummary={dinnerSummary}
          />
        </div>
      </aside>
    </div>
  );
}

function CopyPanel({ open, setOpen, text, onCopied, t }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const timer = window.setTimeout(() => {
      textareaRef.current?.focus();
      textareaRef.current?.select();
      textareaRef.current?.setSelectionRange(0, text.length);
    }, 80);
    return () => window.clearTimeout(timer);
  }, [open, text]);

  if (!open) return null;

  const retryCopy = async () => {
    try {
      await copyTextToClipboard(text);
      onCopied();
    } catch {
      textareaRef.current?.focus();
      textareaRef.current?.select();
      textareaRef.current?.setSelectionRange(0, text.length);
    }
  };

  return (
    <div className="fixed inset-0 z-[80]">
      <button className="absolute inset-0 bg-[#5d4037]/30 backdrop-blur-sm" onClick={() => setOpen(false)} aria-label="close copy panel" />
      <aside className="absolute inset-x-3 bottom-3 rounded-[28px] border border-white/80 bg-[#fffaf4] p-4 shadow-2xl sm:left-auto sm:right-5 sm:w-[min(520px,92vw)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-display text-xl font-extrabold text-[#4d3934]">{t('manualCopy')}</div>
            <div className="mt-1 text-xs font-semibold leading-5 text-[#a47b72]">{t('manualCopySub')}</div>
          </div>
          <button onClick={() => setOpen(false)} className="grid h-9 w-9 shrink-0 place-items-center rounded-[16px] border border-[#ffe3da] bg-white/70 text-[#a47b72] hover:text-[#4d3934]" aria-label="close">
            <X className="h-4 w-4" />
          </button>
        </div>
        <textarea ref={textareaRef} readOnly value={text} className="mt-4 h-48 w-full resize-none rounded-[20px] border border-[#ffe3da] bg-white/70 p-3 font-mono text-xs leading-5 text-[#4d3934] outline-none focus:border-[#ff9f95]" />
        <div className="mt-3 flex justify-end gap-2">
          <button onClick={retryCopy} className="inline-flex items-center gap-2 rounded-[18px] bg-[#ff9f95] px-3 py-2 text-xs font-extrabold text-white">
            <ClipboardList className="h-4 w-4" />
            {t('copyAgain')}
          </button>
        </div>
      </aside>
    </div>
  );
}

function Panel({ id, eyebrow, title, icon: Icon, children }) {
  return (
    <section id={id} className="soft-panel scroll-mt-28 rounded-[30px] border border-white/75 bg-white/74 p-4 shadow-[0_24px_70px_-52px_rgba(134,80,70,0.7)] backdrop-blur-2xl sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-extrabold text-[#ff8d82]">{eyebrow}</div>
          <h2 className="mt-1 font-display text-2xl font-extrabold text-[#4d3934]">{title}</h2>
        </div>
        {Icon && (
          <span className="grid h-10 w-10 place-items-center rounded-[18px] bg-[#fff0ed] text-[#ff8d82]">
            <Icon className="h-5 w-5" />
          </span>
        )}
      </div>
      {children}
    </section>
  );
}

function Badge({ icon: Icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#ffe3da] bg-white/72 px-3 py-2 text-xs font-bold text-[#8f6c64]">
      <Icon className="h-4 w-4 text-[#5fc89e]" />
      <span>{children}</span>
    </div>
  );
}

function HeroAction({ icon: Icon, label, sub, onClick, dataAttr }) {
  const Comp = onClick ? 'button' : 'div';
  return (
    <Comp data-copy-plan-button={dataAttr === 'copy-plan-button' ? true : undefined} onClick={onClick} className="min-w-0 rounded-[22px] border border-[#ffe3da] bg-white/70 px-3 py-3 text-left transition hover:-translate-y-0.5 hover:border-[#ffb8ae] hover:bg-white">
      <Icon className="mb-1.5 h-4 w-4 text-[#ff8d82]" />
      <div className="truncate text-sm font-extrabold text-[#4d3934]">{label}</div>
      {sub && <div className="mt-0.5 truncate text-[11px] font-bold text-[#a47b72]">{sub}</div>}
    </Comp>
  );
}

function MetricTile({ label, value, target, unit }) {
  const diff = value - target;
  const ok = Math.abs(diff) <= (unit ? Math.max(8, target * 0.08) : Math.max(80, target * 0.05));
  return (
    <div className="rounded-[18px] border border-white/75 bg-white/72 p-2 backdrop-blur">
      <div className="text-[11px] font-extrabold text-[#a47b72]">{label}</div>
      <div className="mt-1 font-mono text-lg font-bold text-[#4d3934]">{Math.round(value)}</div>
      <div className={`text-[11px] font-bold ${ok ? 'text-[#3da77d]' : 'text-[#ff8d82]'}`}>{diff >= 0 ? '+' : ''}{Math.round(diff)}{unit}</div>
    </div>
  );
}

function Segmented({ value, onChange, options }) {
  return (
    <div className="grid rounded-[22px] border border-[#ffe3da] bg-[#fff9f4] p-1" style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}>
      {options.map((option) => (
        <button key={option.value} onClick={() => onChange(option.value)} className={`rounded-[18px] px-3 py-2 text-sm font-extrabold transition ${value === option.value ? 'bg-[#ff9f95] text-white' : 'text-[#a47b72] hover:bg-white hover:text-[#4d3934]'}`}>
          {option.label}
        </button>
      ))}
    </div>
  );
}

function Chip({ active, onClick, children }) {
  return (
    <button onClick={onClick} className={`rounded-[18px] border px-3 py-2 text-xs font-extrabold transition ${active ? 'border-[#ffb8ae] bg-[#fff0ed] text-[#ff7d75]' : 'border-[#ffe3da] bg-white/62 text-[#a47b72] hover:border-[#ffb8ae] hover:bg-white hover:text-[#4d3934]'}`}>
      {children}
    </button>
  );
}

function OptionBlock({ title, children }) {
  return (
    <div>
      <div className="mb-2 text-xs font-extrabold text-[#a47b72]">{title}</div>
      {children}
    </div>
  );
}

function OptionCard({ active, onClick, title, meta, tone = 'gold' }) {
  const color = tone === 'green' ? '#69cda5' : tone === 'amber' ? '#f1b36a' : '#ff9f95';
  return (
    <button onClick={onClick} className="rounded-[22px] border p-3 text-left transition hover:-translate-y-0.5" style={{ borderColor: active ? color : '#ffe3da', background: active ? `${color}1f` : 'rgba(255,255,255,0.66)' }}>
      <div className="font-cjk text-sm font-extrabold text-[#4d3934]">{title}</div>
      <div className="mt-1 text-[11px] font-semibold text-[#a47b72]">{meta}</div>
    </button>
  );
}

function Disclosure({ open, onToggle, title, subtitle, children }) {
  return (
    <section className="rounded-[30px] border border-white/75 bg-white/72 shadow-[0_24px_70px_-52px_rgba(134,80,70,0.7)] backdrop-blur-2xl">
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-3 p-4 text-left">
        <span>
          <span className="flex items-center gap-2 font-display text-2xl font-extrabold text-[#4d3934]">
            <Settings2 className="h-4 w-4 text-[#ff8d82]" />
            {title}
          </span>
          <span className="mt-1 block text-xs font-semibold text-[#a47b72]">{subtitle}</span>
        </span>
        <ChevronDown className={`h-5 w-5 text-[#a47b72] transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="border-t border-[#ffe3da] p-4">{children}</div>}
    </section>
  );
}

function LunchKcalInput({ value, onChange, t }) {
  const editingRef = useRef(false);
  const [draft, setDraft] = useState(String(Math.round(value)));

  useEffect(() => {
    if (!editingRef.current) setDraft(String(Math.round(value)));
  }, [value]);

  const update = (raw) => {
    const digits = raw.replace(/\D/g, '');
    if (!digits) {
      setDraft('');
      onChange(0);
      return;
    }
    const normalized = digits.replace(/^0+(?=\d)/, '');
    const next = clamp(normalized, 0, 5000);
    setDraft(String(next));
    onChange(next);
  };

  return (
    <div className="mt-5">
      <label className="text-xs font-extrabold text-[#a47b72]">{t('lunchKcal')}</label>
      <div className="mt-2 flex items-end gap-3">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          aria-label={t('lunchKcal')}
          value={draft}
          onFocus={() => {
            editingRef.current = true;
          }}
          onBlur={() => {
            editingRef.current = false;
            setDraft(String(Math.round(value)));
          }}
          onChange={(event) => update(event.target.value)}
          className="w-40 border-b-2 border-[#ffd8d1] bg-transparent font-display text-6xl font-extrabold leading-none text-[#4d3934] outline-none focus:border-[#ff9f95]"
        />
        <span className="pb-2 text-xs font-extrabold text-[#a47b72]">kcal</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {[600, 700, 800, 900, 1000].map((quick) => (
          <Chip key={quick} active={value === quick} onClick={() => onChange(quick)}>{quick}</Chip>
        ))}
      </div>
    </div>
  );
}

function StepperRow({ label, meta, value, unit, step, max, onChange }) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-[22px] border border-[#ffe3da] bg-white/64 p-3">
      <div className="min-w-0">
        <div className="truncate font-cjk text-sm font-extrabold text-[#4d3934]">{label}</div>
        <div className="mt-1 truncate text-[11px] font-semibold text-[#a47b72]">{meta}</div>
      </div>
      <div className="flex items-center gap-1">
        <IconSquare label={`-${label}`} onClick={() => onChange(value - step)} icon={Minus} />
        <span className="w-14 text-center font-mono text-sm font-bold text-[#4d3934]">{round(value)}{value > 0 && unit === 'g' ? 'g' : ''}</span>
        <IconSquare label={`+${label}`} onClick={() => onChange(Math.min(max, value + step))} icon={Plus} />
      </div>
    </div>
  );
}

function MiniStepper({ value, onChange }) {
  return (
    <div className="flex items-center gap-1">
      <IconSquare label="minus" onClick={() => onChange(value - 1)} icon={Minus} />
      <span className="w-7 text-center font-mono text-sm font-bold text-[#4d3934]">{value}</span>
      <IconSquare label="plus" onClick={() => onChange(value + 1)} icon={Plus} />
    </div>
  );
}

function IconSquare({ label, onClick, icon: Icon }) {
  return (
    <button onClick={onClick} aria-label={label} className="grid h-8 w-8 place-items-center rounded-[14px] border border-[#ffe3da] bg-white/70 text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]">
      <Icon className="h-4 w-4" />
    </button>
  );
}

function formatNumberDraft(value) {
  return String(round(value, 1));
}

function cleanNumberDraft(value) {
  const text = String(value).replace(/[^\d.]/g, '');
  if (!text) return '';
  const [integer = '', ...decimalParts] = text.split('.');
  const integerPart = integer.replace(/^0+(?=\d)/, '');
  if (!decimalParts.length) return integerPart;
  return `${integerPart || '0'}.${decimalParts.join('')}`;
}

function TargetInput({ label, unit, value, onChange, min = 0, max = Infinity }) {
  const editingRef = useRef(false);
  const [draft, setDraft] = useState(() => formatNumberDraft(value));

  useEffect(() => {
    if (!editingRef.current) setDraft(formatNumberDraft(value));
  }, [value]);

  const commitDraft = () => {
    const nextValue = Number(draft);
    if (!draft || !Number.isFinite(nextValue)) {
      setDraft(formatNumberDraft(value));
      return;
    }
    const committedValue = clamp(nextValue, min, max);
    onChange(committedValue);
    setDraft(formatNumberDraft(committedValue));
  };

  const finishEditing = () => {
    editingRef.current = false;
    commitDraft();
  };

  return (
    <label className="block rounded-[20px] border border-[#ffe3da] bg-white/64 p-3">
      <span className="block text-[11px] font-extrabold text-[#a47b72]">{label}</span>
      <span className="mt-1 flex items-baseline gap-1">
        <input
          type="text"
          inputMode="decimal"
          aria-label={label}
          value={draft}
          onFocus={() => {
            editingRef.current = true;
          }}
          onBlur={finishEditing}
          onKeyDown={(event) => {
            if (event.key === 'Enter') event.currentTarget.blur();
          }}
          onChange={(event) => {
            const nextDraft = cleanNumberDraft(event.target.value);
            setDraft(nextDraft);
          }}
          className="min-w-0 flex-1 bg-transparent font-mono text-lg font-bold text-[#4d3934] outline-none"
        />
        <span className="text-[11px] font-bold text-[#a47b72]">{unit}</span>
      </span>
    </label>
  );
}

function TargetFormulaSummary({ targets, targetProfile, t }) {
  const items = [
    { label: t('proteinTarget'), value: `${round(targets.p, 1)}g`, sub: `${round(targetProfile.proteinPerKg, 1)}g/kg` },
    { label: t('fatTarget'), value: `${round(targets.f, 1)}g`, sub: `${round(targetProfile.fatMinPerKg, 1)}g/kg` },
    { label: t('carbRemainder'), value: `${round(targets.c, 1)}g`, sub: t('carbRemainderSub') },
  ];

  return (
    <div className="mt-3 grid gap-2 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="rounded-[20px] border border-[#ffe3da] bg-white/64 p-3">
          <div className="text-[11px] font-extrabold text-[#a47b72]">{item.label}</div>
          <div className="mt-1 font-mono text-lg font-bold text-[#4d3934]">{item.value}</div>
          <div className="mt-1 text-[11px] font-semibold text-[#a47b72]">{item.sub}</div>
        </div>
      ))}
    </div>
  );
}

function CarbDayBanner({ report, activeCarbDay, t }) {
  const toneClass = {
    amber: 'border-[#ffd6a5] bg-[#fff6df] text-[#b97325]',
    green: 'border-[#bdf0d9] bg-[#edfff6] text-[#3da77d]',
    red: 'border-[#ffd1cb] bg-[#fff1ee] text-[#ff7d75]',
  }[report.carbDay.tone] || 'border-[#ffe3da] bg-white/64 text-[#8f6c64]';

  return (
    <div className={`rounded-[24px] border p-3 ${toneClass}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-bold text-[#a47b72]">{t('carbDay')}</span>
        <span className="font-cjk text-sm font-extrabold">{activeCarbDay.label}</span>
      </div>
      <div className="mt-1 text-[11px] font-bold text-[#a47b72]">C {report.carbPerKg}g/kg · P {report.proteinPerKg}g/kg</div>
    </div>
  );
}

function MacroInsightGrid({ report, activeCarbDay, targets, t }) {
  const insights = [
    { label: t('proteinCalories'), value: `${report.proteinPct}%`, sub: `${report.proteinPerKg}g/kg · ${t('target')} ${report.proteinTargetPerKg}g/kg` },
    { label: t('carbCalories'), value: `${report.carbPct}%`, sub: `${report.carbPerKg}g/kg · ${t('target')} ${report.carbTargetPerKg}g/kg` },
    { label: t('fatCalories'), value: `${report.fatPct}%`, sub: `${report.fatPerKg}g/kg · ${t('target')} ${round(targets.f, 1)}g` },
    { label: t('carbJudge'), value: activeCarbDay.label, sub: report.carbDay.note, hot: report.carbDay.tone === 'red' },
  ];

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {insights.map((item) => (
        <ResultPill key={item.label} label={item.label} value={item.value} sub={item.sub} hot={item.hot} />
      ))}
    </div>
  );
}

function FoodRow({ item, index, onTune, t }) {
  const colorMap = {
    red: '#ff8d82',
    amber: '#f1b36a',
    gold: '#ffcf7d',
    green: '#69cda5',
  };
  const color = colorMap[item.tone] || '#85d7e3';
  const adjustmentLabel = item.adjustment > 0 ? `+${round(item.adjustment)}` : round(item.adjustment);
  return (
    <div data-dinner-tune-row className="grid grid-cols-[40px_1fr_auto] items-center gap-3 rounded-[24px] border border-[#ffe3da] bg-white/64 p-3">
      <span className="grid h-10 w-10 place-items-center rounded-[17px] font-mono text-xs font-extrabold text-white" style={{ backgroundColor: color }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="min-w-0">
        <div className="truncate font-cjk text-sm font-extrabold text-[#4d3934]">{item.name}</div>
        <div className="mt-1 truncate text-[11px] font-semibold text-[#a47b72]">
          P{round(item.macro.p)} · C{round(item.macro.c)} · F{round(item.macro.f)}
          {item.adjustment !== 0 && <span className="text-[#ff8d82]"> · {t('adjust')} {adjustmentLabel}{item.unit}</span>}
        </div>
      </div>
      <div className="text-right">
        <div className="font-display text-2xl font-extrabold leading-none text-[#4d3934]">{round(item.qty)}</div>
        <div className="mt-1 text-[11px] font-bold text-[#a47b72]">{item.unit}</div>
        {onTune && (
          <div className="mt-2 flex items-center justify-end gap-1">
            <IconSquare label={`-${item.name}`} onClick={() => onTune(item, -item.step)} icon={Minus} />
            <IconSquare label={`+${item.name}`} onClick={() => onTune(item, item.step)} icon={Plus} />
          </div>
        )}
      </div>
    </div>
  );
}

function MacroBar({ label, value, target, unit, color }) {
  const pct = Math.min(135, (value / Math.max(1, target)) * 100);
  const diff = Math.round(value - target);
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-sm font-extrabold text-[#4d3934]">{label}</span>
        <span className="font-mono text-xs font-bold text-[#a47b72]">{Math.round(value)} / {round(target)} {unit}</span>
      </div>
      <div className="relative h-2.5 overflow-hidden rounded-full bg-[#fff0ed]">
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
      <div className="mt-1 text-right text-[11px] font-bold text-[#a47b72]">{diff >= 0 ? '+' : ''}{diff}{unit}</div>
    </div>
  );
}

function LedgerRow({ label, macro, strong }) {
  return (
    <div className={`grid grid-cols-[1fr_auto] items-center gap-3 border-t border-[#ffe3da] py-3 first:border-t-0 ${strong ? 'text-[#4d3934]' : 'text-[#8f6c64]'}`}>
      <div className="font-cjk text-sm font-extrabold">{label}</div>
      <div className="font-mono text-xs font-bold text-[#a47b72]">P{round(macro.p)} C{round(macro.c)} F{round(macro.f)} · {Math.round(macroKcal(macro))} kcal</div>
    </div>
  );
}

function ResultPill({ label, value, sub, hot }) {
  return (
    <div className={`rounded-[20px] border p-3 ${hot ? 'border-[#ffd1cb] bg-[#fff1ee]' : 'border-[#ffe3da] bg-white/64'}`}>
      <div className="text-[11px] font-extrabold text-[#a47b72]">{label}</div>
      <div className={`mt-1 font-mono text-lg font-bold ${hot ? 'text-[#ff7d75]' : 'text-[#4d3934]'}`}>{value}</div>
      {sub && <div className="mt-1 text-[11px] font-semibold leading-4 text-[#a47b72]">{sub}</div>}
    </div>
  );
}
