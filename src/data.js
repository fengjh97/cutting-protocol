// Auto-derived from REBUILD_SPEC.md — verbatim values.
// Pure data module (no logic). Every number/tag/color/ja override copied 1:1
// from src/CuttingProtocol.jsx (the single source of truth per the spec).

export const DEFAULT_TARGET_PROFILE = { bodyWeightKg: 78, proteinPerKg: 1.8, fatMinPerKg: 0.6, kcal: 2000 };

export const DEFAULT_TDEE = 2900;

export const EMPTY_MACRO = { p: 0, c: 0, f: 0, kcal: 0 };

// ── §2.1 CARB_PLANS ───────────────────────────────────────────────────────────
// kcalUnit = per-unit kcal used by the carb-fill solver (verbatim from source).
export const CARB_PLANS = {
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

// ── §2.2 PROTEINS ─────────────────────────────────────────────────────────────
export const PROTEINS = {
  beef: {
    label: '牛すね肉',
    short: 'すね',
    tag: 'raw · per g',
    unit: 'g',
    step: 10,
    // 牛すね肉（牛腱子肉）＝赤身の脂質少なめ部位。日本食品標準成分表(八訂)の
    // 輸入牛肉 もも赤肉 生を近似値として採用: たんぱく質 21.2g / 脂質 4.3g / 100g。
    p: 0.212,
    c: 0,
    // NOTE: beef has no static `f`. Fat is overridden dynamically by
    // proteinUnit('beef') in model.js as f = (beefFat * 0.8) / 100 per gram.
    // Default beefFat=5 → 実効 4.0g/100g（すねの脂質水準）。
    max: 650,
    note: '赤身・脂質少なめ',
    ja: { label: '牛すね肉', short: 'すね', note: '赤身で脂質控えめ' },
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

// ── §2.3 FAT_SOURCES ──────────────────────────────────────────────────────────
export const FAT_SOURCES = {
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

// ── §2.4 DINNER_EXTRAS (tone: 'gold') ─────────────────────────────────────────
export const DINNER_EXTRAS = {
  banana: { label: '香蕉', unit: '根', step: 1, max: 4, p: 1, c: 27, f: 0.3, tone: 'gold', ja: { label: 'バナナ', unit: '本' } },
  apple: { label: '苹果', unit: '个', step: 1, max: 3, p: 0.4, c: 35, f: 0.3, tone: 'gold', ja: { label: 'りんご', unit: '個' } },
  kiwi: { label: '奇异果', unit: '个', step: 1, max: 4, p: 1, c: 14, f: 0.2, tone: 'gold', ja: { label: 'キウイ', unit: '個' } },
  pineapple: { label: '切块菠萝 240g', unit: '盒', step: 1, max: 2, p: 1.44, c: 31.2, f: 0.24, tone: 'gold', ja: { label: 'カットパイン 240g', unit: '盒' } },
  yogurt: { label: '无糖酸奶', unit: 'g', step: 50, max: 400, p: 0.036, c: 0.049, f: 0.03, tone: 'gold', ja: { label: '無糖ヨーグルト' } },
};

// ── §2.5 TALLY_ITEMS ──────────────────────────────────────────────────────────
export const TALLY_ITEMS = {
  chicken: { label: '鸡胸', unit: '块', step: 1, max: 10, p: 22, c: 1, f: 2, ja: { label: 'チキン', unit: '個' } },
  egg: { label: '全蛋', unit: '个', step: 1, max: 10, p: 6, c: 0.5, f: 5, ja: { label: '卵', unit: '個' } },
  onigiri: { label: '饭团', unit: '个', step: 1, max: 6, p: 3, c: 39, f: 0.5, ja: { label: 'おにぎり', unit: '個' } },
  nissin: { label: '日清面', unit: '包', step: 1, max: 4, p: 6.7, c: 55, f: 4.9, ja: { label: '日清麺', unit: '袋' } },
  rice: { label: '米饭', unit: 'g', step: 50, max: 1000, p: 0.026, c: 0.28, f: 0.003, ja: { label: 'ごはん' } },
  beef: { label: '牛すね', unit: 'g', step: 50, max: 600, p: 0.212, c: 0, f: 0.043, ja: { label: '牛すね肉' } },
  pasta: { label: '干意面', unit: 'g', step: 50, max: 300, p: 0.12, c: 0.71, f: 0.015, ja: { label: '乾燥パスタ' } },
  bifun: { label: '干米粉', unit: 'g', step: 10, max: 500, p: 0.06, c: 0.79, f: 0.005, kcal: 3.45, ja: { label: '乾燥ビーフン' } },
  fresh_noodle: { label: '冷藏鲜面', unit: 'g', step: 10, max: 600, p: 0.0869, c: 0.5469, f: 0.0123, kcal: 2.623, ja: { label: '冷蔵生麺' } },
  banana: { label: '香蕉', unit: '根', step: 1, max: 4, p: 1, c: 27, f: 0.25, ja: { label: 'バナナ', unit: '本' } },
};

// ── §2.6 BREAKFAST_ITEMS ─────────────────────────────────────────────────────
export const BREAKFAST_ITEMS = {
  chojuku_bread: { label: '吐司 · Pasco 超熟（6片装）', unit: '片', step: 1, max: 20, p: 4.9, c: 30.4, f: 2.5, kcal: 164, ja: { label: '食パン · Pasco 超熟 6枚スライス', unit: '枚' } },
  onigiri: { label: '饭团（普通）', unit: '个', step: 1, max: 6, p: 3, c: 39, f: 0.5, ja: { label: 'おにぎり（普通）', unit: '個' } },
  tea_egg: { label: '茶叶蛋', unit: '个', step: 1, max: 10, p: 6, c: 0.5, f: 5, kcal: 71, ja: { label: '味付けゆで卵', unit: '個' } },
  baguette: { label: '法棍', unit: 'g', step: 50, max: 500, p: 0.094, c: 0.575, f: 0.013, kcal: 2.8, ja: { label: 'バゲット' } },
};

// ── §2.7 PRE_ITEMS ────────────────────────────────────────────────────────────
export const PRE_ITEMS = {
  onigiri: { label: '饭团（普通）', unit: '个', step: 1, max: 3, p: 3, c: 39, f: 0.5, ja: { label: 'おにぎり（普通）', unit: '個' } },
  chojuku_bread: { label: 'Pasco 超熟（6片装）', unit: '片', step: 1, max: 20, p: 4.9, c: 30.4, f: 2.5, kcal: 164, ja: { label: 'Pasco 超熟 6枚スライス', unit: '枚' } },
};

// ── §2.8 DRINKS (macros per 200ml) ────────────────────────────────────────────
export const DRINKS = {
  tomato: { label: '无盐番茄汁', sub: 'K 600 / 200ml', p: 1.8, c: 7.1, f: 0, kcal: 39, k: 600, na: 5, ja: { label: '無塩トマトジュース', sub: 'K 600 / 200ml' } },
  yasai: { label: '野菜一日', sub: 'K 740 / 200ml', p: 3, c: 14.5, f: 0, kcal: 75, k: 740, na: 80, ja: { label: '野菜一日', sub: 'K 740 / 200ml' } },
  none: { label: '不补钾', sub: '今天省了', p: 0, c: 0, f: 0, kcal: 0, k: 0, na: 0, ja: { label: '補給なし', sub: '今日はなし' } },
};

// ── §2.8 WEEKLY_SHOP_ITEMS (ordered) ──────────────────────────────────────────
export const WEEKLY_SHOP_ITEMS = [
  { key: 'beef', tone: 'red', source: 'protein', sourceKey: 'beef', label: '牛すね肉', short: '牛すね', unit: 'g', step: 100, defaultTarget: 1200, max: 3000, buyHint: '晚餐主蛋白，先拿这个', ja: { label: '牛すね肉', short: '牛すね', buyHint: '夕食の主役。まず取る' } },
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

// ── §2.9 CHEAT_ITEMS ──────────────────────────────────────────────────────────
export const CHEAT_ITEMS = [
  { id: 'burger', label: '汉堡 + 薯条', kcal: 980, ja: { label: 'バーガー + ポテト' } },
  { id: 'ramen', label: '拉面 + 饭', kcal: 1200, ja: { label: 'ラーメン + ごはん' } },
  { id: 'sushi', label: '回转寿司 12 皿', kcal: 1050, ja: { label: '回転寿司 12皿' } },
  { id: 'pizza', label: 'Pizza 半张', kcal: 1150, ja: { label: 'ピザ 半分' } },
  { id: 'dessert', label: '甜品奶茶', kcal: 620, ja: { label: 'デザート + ミルクティー' } },
  { id: 'katsu', label: '炸猪排咖喱', kcal: 1450, ja: { label: 'カツカレー' } },
];

// ── §3 NAV (icon = string identifier, resolved to a component in the UI) ───────
export const NAV = [
  { id: 'plan', labelKey: 'navPlan', icon: 'plan' },
  { id: 'detail', labelKey: 'navDetail', icon: 'detail' },
  { id: 'shop', labelKey: 'navShop', icon: 'shop' },
  { id: 'cheat', labelKey: 'navCheat', icon: 'cheat' },
];

// ── §6.1 TONE_COLORS ──────────────────────────────────────────────────────────
export const TONE_COLORS = {
  red: '#ff8d82',
  amber: '#f1b36a',
  gold: '#ffcf7d',
  green: '#69cda5',
  aqua: '#85d7e3',
};
