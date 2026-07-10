# Cutting Lab (cutting-protocol) — REBUILD SPEC

Single source of truth for rebuilding the app 1:1 with a new UI. All data/logic values copied
verbatim from source. **Read the "GAPS / AMBIGUITIES" section at the end before shipping.**

Source files:
- `src/CuttingProtocol.jsx` (~3213 lines) — everything: data tables, i18n, state, UI.
- `src/nutritionSolver.js` (~302 lines) — pure logic (macros, targets, meal solver, shopping).
- `src/main.jsx`, `src/index.css` — mount + styling.
- `index.html`, `vite.config.js`, `scripts/build-static.mjs`, `package.json`, `tailwind.config.cjs` — build/deploy.

---

## 0. High-level architecture

- **Single React component** `CuttingProtocol` (default export) rendered by `main.jsx` into `#root` in `React.StrictMode`.
- No router. A `tab` state (`'plan' | 'detail' | 'shop' | 'cheat'`) switches the main view. Header logo click → `plan`.
- One big `useMemo` `model` derives every computed number from state (see §7).
- Bilingual zh/ja via a plain object `TEXT` + `localize()` merging per-item `ja` overrides.
- Persistence: a handful of values are saved to `localStorage` (see §1.4). Most UI state is ephemeral (resets on reload).
- Pure math lives in `nutritionSolver.js`; the component imports and calls it.

### Constants at top of CuttingProtocol.jsx
```
LOCALES = ['zh', 'ja']
DEFAULT_TARGET_PROFILE = { bodyWeightKg: 83, proteinPerKg: 1.8, fatMinPerKg: 0.6, kcal: 2000 }
DEFAULT_TDEE = 2900
emptyMacro = { p: 0, c: 0, f: 0, kcal: 0 }
```
`asset(name)` → `${BASE_URL}assets/${name}`; `generated(name)` → `assets/generated/${name}`.

---

## 1. Default profile / user constants

### 1.1 Target profile (`DEFAULT_TARGET_PROFILE`)
| Field | Default | Editable range (min,max) | Unit |
|---|---|---|---|
| bodyWeightKg | **83** | 30–250 | kg |
| proteinPerKg | **1.8** | 0.8–3 | g/kg |
| fatMinPerKg | **0.6** | 0.3–1.5 | g/kg |
| kcal (target) | **2000** | 1000–5000 | kcal |

(`deriveMacroTargets` internally clamps: bodyWeight 1–300, proteinPerKg 0–5, fatMinPerKg 0–3, kcal 0–9000. The tighter ranges above are the UI input min/max.)

### 1.2 Other tunables (component state defaults)
| State | Default | Notes / range |
|---|---|---|
| tab | `'plan'` | |
| locale | `'zh'` | persisted `cutting:locale:v1` |
| tdee | **2900** | persisted `cutting:tdee`; input 0–9000 |
| lunchMode | `'planned'` | one of `planned` / `quick` / `tally` |
| lunchKcal | **800** | quick-kcal direct entry; clamp 0–5000; quick chips 600/700/800/900/1000 |
| tally | `{}` | map key→qty |
| mealSplitPct | **40** | lunch %; chips 35/40/45/50 (paired 65/60/55/50); `splitMealTargets` clamps ratio 0.1–0.9 |
| lunchCarbPlan | `'fresh_noodle'` | |
| lunchProteinKeys | `['chicken']` | ≥1 always kept |
| lunchFatKeys | `[]` | |
| carbPlan (dinner) | `'pasta'` | |
| proteinKeys (dinner) | `['beef']` | ≥1 always kept |
| fatKeys (dinner) | `[]` | |
| extraCarbs | `{}` | dinner fruit/yogurt map |
| beefFat | **13** | g fat / 100g raw beef; chips 5/9/13/18; input clamp 0–40 |
| pre | `{}` | pre-workout food map |
| drinkKey | `'none'` | |
| drinkMl | **0** | input clamp 0–2000; chips 200/400/600 |
| saltG | **6.5** | electrolyte; input 0–20 |
| foodK | **2000** | food potassium mg; input 0–8000 |
| shopDays | **7** | shopping cycle; chips 3/5/7/10 (`buildWeeklyShopping` clamps 1–21) |
| shopPlan | `createDefaultShopPlan(WEEKLY_SHOP_ITEMS)` | persisted `cutting:shopPlan:v1` |
| advancedOpen | `false` | "细节设置" disclosure |
| intakeOpen | `false` | intake drawer |
| lunchAdjustments | `{}` | per-item ± tweaks |
| dinnerAdjustments | `{}` | per-item ± tweaks |
| snack | `{ name: '手动加餐', p:0, c:0, f:0, kcal:0 }` | manual extra record |
| cheat | `{}` | cheat-item qty map |

### 1.3 Carb-day classification (`classifyCarbDay`, uses total carbs / bodyWeight)
carbPerKg = carbs / max(1, bodyWeightKg):
| Threshold | label | tone | note (zh) |
|---|---|---|---|
| < 2.0 g/kg | 低碳 | amber | 碳水低于 2.0g/kg，今天算收紧日 |
| 2.0–3.0 g/kg | 中碳 | green | 碳水在 2.0-3.0g/kg，训练和恢复都比较稳 |
| ≥ 3.0 g/kg | 高碳 | red | 碳水超过 3.0g/kg，更像补糖或高活动日 |

### 1.4 localStorage keys
- `cutting:locale:v1` (JSON string) — `'zh'`/`'ja'`
- `cutting:targetProfile:v1` (JSON) — target profile
- `cutting:tdee` (number) — TDEE
- `cutting:shopPlan:v1` (JSON) — shop plan `{key:{enabled,target,stock}}`

`useLocalNumber(key, fallback)`: reads number, uses fallback if not finite or ≤0, writes back on change.
`useLocalJson(key, fallback)`: JSON parse with fallback (fallback may be a function).

---

## 2. Complete food library

`localize(item, locale)`: if `locale==='ja'` and `item.ja` exists, returns `{...item, ...item.ja}` (ja keys override, e.g. `unit`, `label`, `sub`, `note`, `buyHint`). Any field not in `ja` falls back to the zh/base value.

Macro convention: `p`/`c`/`f` are **per one unit**; `kcal` is per-unit if present, else computed as `p*4 + c*4 + f*9` (`macroKcal`). `scaleMacro(item, qty)` multiplies p/c/f by qty and, if item has explicit kcal, multiplies that too.

### 2.1 CARB_PLANS (dinner + lunch carb choice) — keyed
Fields: unit, step, `perUnit {p,c,f[,kcal]}`, kcalUnit, color, optional max, `ja{name,short,sub[,unit]}`.

| key | name (zh) | short | sub (zh) | unit | step | max | p | c | f | kcal(perUnit) | kcalUnit | color | ja.name / ja.short / ja.sub |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| pasta | 意面 · Garlic oil | 意面 | 力量日最爽 | g | 10 | — | 0.12 | 0.71 | 0.015 | — | 3.55 | #ffb86b | パスタ · ガーリックオイル / パスタ / しっかり食べる日 |
| soba | 荞麦面 · Soba | 荞麦 | 清爽低负担 | g | 10 | — | 0.14 | 0.66 | 0.023 | — | 3.44 | そば · Soba / そば / 軽くて落ち着く |
| nissin | 日清非油炸 | 日清 | 懒人汤面 | 包 | 1 | — | 6.7 | 55 | 4.9 | — | 291 | 日清ノンフライ / 日清 / 時間がない日 |
| fresh_noodle | 冷藏鲜面 · 生ラーメン | 鲜面 | 冷藏柜无调味包 | g | 10 | — | 0.0869 | 0.5469 | 0.0123 | 2.623 | 2.623 | #f1c47b · 冷蔵生麺 · 調味なし / 生麺 / 10g 単位で調整 |
| banana | 香蕉 | 香蕉 | 按整根补碳水 | 根 | 1 | 8 | 1 | 27 | 0.25 | 114 | 114 | #f4cf58 · バナナ / バナナ / 1本単位で調整 (ja.unit=本) |
| rice_dry | 白米 · 生米干重 | 白米 | 煮饭前称重 | g | 10 | — | 0.061 | 0.776 | 0.009 | 3.42 | 3.42 | 精白米 · 生米 / 白米 / 炊飯前の重量 |
| pho | 越南米粉 | 米粉 | 低脂换口味 | 包 | 1 | — | 4 | 43 | 2 | — | 210 | #86d8df · フォー / フォー / 低脂質で変化 |
| bifun | 纯干米粉 | 干米粉 | 纯碳水补满 | g | 10 | — | 0.06 | 0.79 | 0.005 | — | 3.45 | 乾燥ビーフン / ビーフン / 炭水化物を足す |

(`pasta` color #ffb86b, `soba` #86c9a9, `nissin` #ff9d91, `fresh_noodle` #f1c47b, `banana` #f4cf58, `rice_dry` #d9d4c8, `pho` #86d8df, `bifun` #f5d66b.)
When solving, carb max defaults to: `carb.max ?? (unit==='包' ? 8 : 420)`.

### 2.2 PROTEINS (dinner + lunch protein choice)
Fields: label, short, tag, unit, step, p, c, [f], max, note, `ja{label,short[,unit],note}`.
**Beef fat is dynamic** (see §7.4): `proteinUnit('beef')` overrides `f = (beefFat*0.8)/100` per gram; others use static `f`.

| key | label (zh) | short | tag | unit | step | p | c | f (static) | max | note (zh) | ja.label / ja.short / ja.unit / ja.note |
|---|---|---|---|---|---|---|---|---|---|---|---|
| beef | 牛肉切り落とし | 牛肉 | raw · per g | g | 10 | 0.19 | 0 | dynamic | 650 | 脂肪按包装校准 | 牛肉切り落とし / 牛肉 / — / 脂質は包装で調整 |
| chicken | 速食鸡胸 | 鸡胸 | per pack | 块 | 1 | 22 | 1 | 2 | 6 | 最稳高蛋白 | サラダチキン / チキン / 個 / 安定の高たんぱく |
| duck | 合鸭胸去皮 | 合鸭 | 100g serve | 份 | 1 | 21 | 0.5 | 6 | 4 | 香但不太肥 | 合鴨むね皮なし / 合鴨 / 皿 / 香りがあって軽め |
| kfc | KFC 原味鸡 | KFC | per piece | 块 | 1 | 18 | 8 | 14 | 5 | 爽，但盐高 | KFC オリジナルチキン / KFC / 個 / 満足感あり、塩分高め |

### 2.3 FAT_SOURCES (dinner + lunch fat choice)
Fields: label, short, unit, step, p, c, f, [kcal], max, `ja{label,short[,unit]}`. Shown meta = `${f}g / ${unit}`.

| key | label (zh) | short | unit | step | p | c | f | kcal | max | ja.label / ja.short / ja.unit |
|---|---|---|---|---|---|---|---|---|---|---|
| egg_fried | 煎蛋 | 煎蛋 | 个 | 1 | 6 | 0.4 | 7 | — | 6 | 目玉焼き / 卵 / 個 |
| sauce | ペペロン酱 | 蒜油酱 | 包 | 1 | 0.9 | 1.5 | 10 | — | 2 | ペペロンソース / ソース / 袋 |
| olive | 橄榄油 | 橄榄油 | 小勺 | 1 | 0 | 0 | 4.5 | — | 6 | オリーブオイル / オイル / 小さじ |
| nuts | 素焼きナッツ | 坚果 | 10g | 1 | 2 | 2 | 5 | — | 5 | 素焼きナッツ / ナッツ / — |
| cheese_bite | 小芝士 | 芝士 | 个 | 1 | 2.6 | 0.4 | 3.4 | **43** | 8 | ベビーチーズ / チーズ / 個 |
| avocado | アボカド | 牛油果 | 半个 | 1 | 1 | 4 | 15 | — | 2 | アボカド / アボカド / 半分 |

### 2.4 DINNER_EXTRAS (dinner fruit / yogurt — the "水果/酸奶" block)
Fields: label, unit, step, max, p, c, f, `ja{label[,unit]}`. tone = `gold`.

| key | label (zh) | unit | step | max | p | c | f | ja.label / ja.unit |
|---|---|---|---|---|---|---|---|---|
| banana | 香蕉 | 根 | 1 | 4 | 1 | 27 | 0.3 | バナナ / 本 |
| apple | 苹果 | 个 | 1 | 3 | 0.4 | 35 | 0.3 | りんご / 個 |
| kiwi | 奇异果 | 个 | 1 | 4 | 1 | 14 | 0.2 | キウイ / 個 |
| pineapple | 切块菠萝 240g | 盒 | 1 | 2 | 1.44 | 31.2 | 0.24 | カットパイン 240g / 盒 |
| yogurt | 无糖酸奶 | g | 50 | 400 | 0.036 | 0.049 | 0.03 | 無糖ヨーグルト / (g) |

### 2.5 TALLY_ITEMS (lunch "点选记账" / tally mode)
Fields: label, unit, step, max, p, c, f, [kcal], `ja{label[,unit]}`. Meta shown = `${round(macroKcal(scaleMacro(item, step)))} kcal / ${step}${unit}`.

| key | label (zh) | unit | step | max | p | c | f | kcal | ja.label / ja.unit |
|---|---|---|---|---|---|---|---|---|---|
| chicken | 鸡胸 | 块 | 1 | 10 | 22 | 1 | 2 | — | チキン / 個 |
| egg | 全蛋 | 个 | 1 | 10 | 6 | 0.5 | 5 | — | 卵 / 個 |
| onigiri | 饭团 | 个 | 1 | 6 | 3 | 39 | 0.5 | — | おにぎり / 個 |
| nissin | 日清面 | 包 | 1 | 4 | 6.7 | 55 | 4.9 | — | 日清麺 / 袋 |
| rice | 米饭 | g | 50 | 1000 | 0.026 | 0.28 | 0.003 | — | ごはん / (g) |
| beef | 牛肉 | g | 50 | 600 | 0.19 | 0 | 0.072 | — | 牛肉 / (g) |
| pasta | 干意面 | g | 50 | 300 | 0.12 | 0.71 | 0.015 | — | 乾燥パスタ / (g) |
| fresh_noodle | 冷藏鲜面 | g | 10 | 600 | 0.0869 | 0.5469 | 0.0123 | 2.623 | 冷蔵生麺 / (g) |
| banana | 香蕉 | 根 | 1 | 4 | 1 | 27 | 0.25 | バナナ / 本 |

### 2.6 PRE_ITEMS (训练前 "吃什么")
Fields: label, unit, step, max, p, c, f, [kcal], `ja{label[,unit]}`.

| key | label (zh) | unit | step | max | p | c | f | kcal | ja.label / ja.unit |
|---|---|---|---|---|---|---|---|---|---|
| onigiri | 饭团（普通） | 个 | 1 | 3 | 3 | 39 | 0.5 | — | おにぎり（普通） / 個 |
| gold_bread | 711 金の食パン | 片 | 1 | 2 | 8.8 | 45.4 | 5.3 | **261** | セブン 金の食パン / 枚 |

### 2.7 DRINKS (补钾 "喝什么" / electrolyte drink) — macros are per 200ml
Fields: label, sub, p, c, f, kcal, k(mg), na(mg), `ja{label,sub}`. Drink macro scaled by `drinkMl/200`.

| key | label (zh) | sub | p | c | f | kcal | k | na | ja.label / ja.sub |
|---|---|---|---|---|---|---|---|---|---|
| tomato | 无盐番茄汁 | K 600 / 200ml | 1.8 | 7.1 | 0 | 39 | 600 | 5 | 無塩トマトジュース / K 600 / 200ml |
| yasai | 野菜一日 | K 740 / 200ml | 3 | 14.5 | 0 | 75 | 740 | 80 | 野菜一日 / K 740 / 200ml |
| none | 不补钾 | 今天省了 | 0 | 0 | 0 | 0 | 0 | 0 | 補給なし / 今日はなし |

Volume chips: **200 / 400 / 600 ml** + free input (0–2000). Choosing a non-none drink when ml≤0 auto-sets ml=**400**; choosing `none` sets ml=0.

### 2.8 WEEKLY_SHOP_ITEMS (采购 shopping list) — array, ordered
Each has: key, tone, source (`protein`/`carb`/`extra`/`fat`), sourceKey (→ macro source table), label, short, unit, step, defaultTarget, max, buyHint, optional `defaultEnabled` (default true), `ja{label,short[,unit],buyHint}`.
Unit macro resolved via `shopUnitMacro`: protein→`proteinUnit(sourceKey)`, carb→`CARB_PLANS[sourceKey].perUnit`, extra→`DINNER_EXTRAS[sourceKey]`, fat→`FAT_SOURCES[sourceKey]`.

| key | tone | source | sourceKey | label (zh) | short | unit | step | defaultTarget | max | defaultEnabled | buyHint (zh) | ja.label / buyHint |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| beef | red | protein | beef | 牛肉切り落とし | 牛肉 | g | 100 | 1200 | 3000 | true | 晚餐主蛋白，先拿这个 | 牛肉切り落とし / 夕食の主役。まず取る |
| chicken | red | protein | chicken | 速食鸡胸 | 鸡胸 | 块(ja:個) | 1 | 3 | 12 | true | 懒人备用蛋白 | サラダチキン / 忙しい日のたんぱく質 |
| pasta | green | carb | pasta | 干意面 | 意面 | g | 100 | 500 | 2000 | true | 主力晚餐碳水 | 乾燥パスタ / 夕食の主力炭水化物 |
| soba | green | carb | soba | 荞麦面 | 荞麦 | g | 100 | 400 | 1600 | true | 清爽换口味 | そば / 軽く味変できる |
| nissin | green | carb | nissin | 日清非油炸 | 日清 | 包(ja:袋) | 1 | 2 | 10 | true | 没时间时顶上 | 日清ノンフライ / 時間がない日の保険 |
| fresh_noodle | green | carb | fresh_noodle | 冷藏鲜面 | 鲜面 | g | 10 | 400 | 2000 | true | 冷藏柜无调味包，按 10g 算 | 冷蔵生麺 / 調味なし。10g 単位で買う |
| pineapple | gold | extra | pineapple | 菠萝 240g | 菠萝 | 盒 | 1 | 2 | 8 | true | 训练前后直接吃 | カットパイン 240g / 運動前後にそのまま食べる |
| banana | gold | extra | banana | 香蕉 | 香蕉 | 根(ja:本) | 1 | 4 | 14 | true | 快速补碳水 | バナナ / すぐ足せる炭水化物 |
| apple | gold | extra | apple | 苹果 | 苹果 | 个(ja:個) | 1 | 2 | 10 | true | 顶饥水果 | りんご / お腹にたまる果物 |
| egg_fried | amber | fat | egg_fried | 鸡蛋 | 鸡蛋 | 个(ja:個) | 1 | 6 | 20 | **false** | 补脂肪和口感 | 卵 / 脂質と満足感を足す |
| sauce | amber | fat | sauce | ペペロン酱 | 蒜油酱 | 包(ja:袋) | 1 | 3 | 12 | **false** | 意面直接好吃 | ペペロンソース / パスタがすぐおいしい |
| nuts | amber | fat | nuts | 素焼きナッツ | 坚果 | 10g | 1 | 4 | 20 | **false** | 少量脂肪备用 | 素焼きナッツ / 少量脂質の保険 |
| cheese_bite | amber | fat | cheese_bite | 小芝士 | 芝士 | 个(ja:個) | 1 | 6 | 24 | **false** | 每个 43kcal，少量补脂肪 | ベビーチーズ / 1個43kcal。少量脂質に |

Note: no item sets `defaultStock`, so all default stock = 0 (`createDefaultShopPlan` uses `item.defaultStock ?? 0`).

### 2.9 CHEAT_ITEMS (放松 cheat-day items) — array
Fields: id, label, kcal, `ja{label}`. Qty clamped 0–9 each.

| id | label (zh) | kcal | ja.label |
|---|---|---|---|
| burger | 汉堡 + 薯条 | 980 | バーガー + ポテト |
| ramen | 拉面 + 饭 | 1200 | ラーメン + ごはん |
| sushi | 回转寿司 12 皿 | 1050 | 回転寿司 12皿 |
| pizza | Pizza 半张 | 1150 | ピザ 半分 |
| dessert | 甜品奶茶 | 620 | デザート + ミルクティー |
| katsu | 炸猪排咖喱 | 1450 | カツカレー |

---

## 3. Tab & section structure

`NAV` array drives both the top (lg) nav and the bottom (mobile) nav:
| id | labelKey (zh / ja) | icon |
|---|---|---|
| plan | navPlan 今日 / 今日 | Utensils |
| detail | navDetail 明细 / 詳細 | Gauge |
| shop | navShop 采购 / 買い物 | ShoppingBasket |
| cheat | navCheat 放松 / ごほうび | Flame |

Header: logo (Sparkles) "Cutting Lab" + `appSub` (今天怎么吃 / 今日のごはん); nav (lg only, top mode); LanguageToggle (中文/日本語, persisted). Bottom nav shows on mobile only.

Two rendering tracks per view: **desktop (`hidden lg:*`)** and **mobile (`lg:hidden`)** — same data, different layout. A floating ClipboardList FAB (lg only, bottom-right, honey #ffcf7d) opens the Intake drawer; green dot badge if fuel or snack active.

### 3.1 `plan` tab (今日)
Desktop-only pieces above the fold: **PlanCommandDock** (sticky, 5 buttons) and **Hero**.

**PlanCommandDock** (5 action tiles, `data-plan-flow-dock`):
1. intake (ClipboardList) — label `intake`(已吃), value `${round(beforeDinner.kcal)} kcal`, scrolls to `plan-intake`.
2. dinner (Utensils) — label `dinner`(晚餐), value `${round(dinner.kcal)} kcal`, scrolls to `plan-dinner`.
3. rhythm (Gauge) — label = carbDay label (低碳/中碳/高碳), value `C ${carbPerKg}g/kg`, scrolls to `plan-rhythm`.
4. edit-intake (Zap) — label `editIntake`(调整已吃), value `${round(beforeDinner.kcal)} kcal`, opens intake drawer.
5. copy (ClipboardList) — label = copy status (复制/复制中/已复制/重试), value `record`(记录), runs `copyDailyPlan`.

**Hero** (2-col): left panel = Badge (`{bodyWeight}kg · P {proteinPerKg}g/kg · F {fatMinPerKg}g/kg`), an intake pill button (kcal = beforeDinner), big title `heroTitle`+`heroAccent`, `heroCopy`, and 3 HeroActions (editIntake / copy / deficit). Deficit HeroAction label = `${deficit>0?'-':'+'}${abs(deficit)}`, sub `deficit`. Right panel = hero image (`generated/protocol-hero-premium.jpg`) with dinner kcal, today total, and 4 MetricTiles P/C/F/Kcal (value vs target).

**PlanView** contains:
- **MobilePlanHome** (`lg:hidden`, `data-mobile-home`): TODAY card — PixelBuddy runner + carbDay badge; dinner-kcal tile (coral #ff9f95) + deficit/over tile (deficit ≥0 green "赤字", <0 red "超出"/"オーバー"); today-total progress bar `total.kcal / targets.kcal`; 3 MobileMacro P/C/F; buttons editIntake + copy; pixel-crew stage (`generated/pixel-cutting-crew-v1.webp`). Second card DINNER: list of first 4 dinner items (MobileDinnerRow) + "调整晚餐/調整" button opening MobileDinnerSheet.
- **MobileDinnerSheet** (bottom sheet, `lg:hidden`): MealPreferenceEditor + full dinner item list with ± tune + reset.
- **Desktop `<main>` (2-col)**:
  - Left `<section>`:
    - **Panel `plan-intake`** — eyebrow `planIntakeEyebrow` (01 · 先记今天 / 01 · まず記録), title `intakeHubTitle` (今日已吃 / 今日食べたもの), holds **IntakeEditor** (see §3.5).
    - **Disclosure `advanced`** (细节设置 / こまかい設定; subtitle `advancedSub`): three OptionBlocks —
      - `extras` (水果 / 酸奶): DINNER_EXTRAS steppers.
      - `beefFat` (牛肉脂肪): chips 5/9/13/18 g + number input (0–40), suffix "g / 100g raw".
      - `targetFormula` (目标公式): 4 TargetInputs (bodyWeightKg/proteinPerKg/fatMinPerKg/kcal) + `TargetFormulaSummary` + reset-default button (`resetDefaults`).
  - Right `<section>`:
    - **Panel `plan-dinner`** — eyebrow `dinnerAnswerEyebrow` (03 · 自动答案), title `dinnerAnswerTitle` (今晚就这样吃), OptionBlock `dinnerPlannerTitle` (晚餐想吃什么) → MealPreferenceEditor, then dinner item list (FoodRow with ± tune) or `noDinner` message; reset-tune button if adjustments exist.
    - **Panel `plan-rhythm`** — eyebrow `rhythmEyebrow` (04 · 今日结构), title `rhythmTitle` (看一眼就够): 4 MacroBars (P #ff8d82 / C #ffcf7d / F #69cda5 / kcal #85d7e3) + CarbDayBanner.

Note: the `02 · 晚餐方向` / `planChoice*` strings exist in TEXT but the section header actually used for dinner preference is `dinnerPlannerTitle`. See GAPS.

### 3.2 `detail` tab (明细) — **DetailView**, 2-col grid of Panels
1. **Panel `ledger`/`ledgerTitle`** (今日账本 / 吃进去的东西): LedgerRows for lunch, preTraining, drinkElectrolyte, snackMeal, dinner(strong). Each row shows `P.. C.. F.. · N kcal`.
2. **Panel `planIntakeEyebrow`/`intakeHubTitle`**: full **IntakeEditor** again (same as plan tab).
3. **Panel `targetFormula`/`targetByWeight`** (按体重自动分配): 5 TargetInputs (bodyWeightKg, proteinPerKg, fatMinPerKg, kcal, **tdee**) + TargetFormulaSummary.
4. **Panel `rhythmEyebrow`/`structureTitle`** (占比和体重倍数): **MacroInsightGrid** — 4 ResultPills: proteinCalories `%` + `g/kg · target g/kg`; carbCalories; fatCalories; carbJudge (label + carbDay.note, hot if red).
5. **Panel `electrolyte`/`electrolyteTitle`** (钾钠别太偏): TargetInputs salt(g,0–20) + foodK(mg,0–8000); K/Na balance card — `balanced`(平衡) if potassium≥sodium else `lowPotassium`(钾偏低); shows `K {potassium} mg · Na {sodium} mg`.

### 3.3 `shop` tab (采购) — **ShopView**
- Local state: `pickedItems {}`, `stockOpen false`.
- `groupMeta` (4 tone groups, priority order red=0, green=1, gold=2, amber=3):
  | tone | label zh / ja | caption zh / ja | icon | accent |
  |---|---|---|---|---|
  | red | 蛋白主菜 / たんぱく | 肉、鸡胸先补齐 / 肉、チキンを先に | Dumbbell | #ff8d82 |
  | green | 主食碳水 / 主食 | 按一周期望备货 / 周期分の炭水化物 | Utensils | #69cda5 |
  | gold | 水果加料 / 果物 | 菠萝 240g、香蕉、苹果 / パイン、バナナ、りんご | Apple | #ffcf7d |
  | amber | 油脂口味 / 脂質 | 蛋、芝士、酱和坚果 / 卵、チーズ、ソース、ナッツ | Flame | #f1b36a |
- Hero: `shopHero`(采购清单) + `shopCopy`, image `generated/shop-basket.jpg`, day chips **3/5/7/10** ("N 天"), clear-stock button (`clearStock`), 3 ShopStats (cycle days / products count+picked / actual buyMacro kcal).
- **Panel `directPlan`/`directPlanTitle`** (照单买这些): `runPlan` = `buildShoppingRunPlan(model.shopping, priorityOrder)` → DirectBuyCards (label, buyQty big, unit, reason=buyHint, target/stock text, tap to toggle picked). If empty → `nothingToBuy`/`nothingToBuySub` card. Below: 4 ResultPills (products, picked, enough=coveredItems, Kcal=buyMacro).
- **Disclosure `stockTune`/`stockTuneSub`** (库存微调): left card = cycle target base macro (P/C/F/Kcal of `expectedMacro` sums); right = ShopGroupCards per tone. Each **ShopItemRow** shows weeklyTarget/`{days}d targetQty`/stock, buy label (`buy N`/`enough`/`skip`), enable toggle (skip/add), and two ShopQuantityControls (weeklyTarget ±step, stock ±step). `clearStocks` sets all stock→0.

### 3.4 `cheat` tab (放松) — **CheatView** — this is the "refeed/relax" calculator
- NOT a rest-day macro engine. It is a simple cheat-meal kcal adder.
- Left Panel `navCheat`/`cheatTitle` (想吃也能算): CHEAT_ITEMS list, each a MiniStepper (qty 0–9).
- Right section: image `assets/cheat.jpg`, PixelBuddy relax; `cheatResult`(吃完大概这样); big number `cheatTotal` = Σ qty*kcal; label `cheatKcal`; 3 ResultPills: todayTotal `= round(model.total.kcal + cheatTotal)`, tdee, deficit `= (cheatSurplus>=0?'+':'')+cheatSurplus` (hot if >0). Clear button resets `cheat`.
- `cheatSurplus = round(model.total.kcal + cheatTotal - tdee)`.

### 3.5 IntakeEditor (shared by plan panel, detail panel, and IntakeDrawer)
Top: 4 ResultPills — beforeDinnerTotal (kcal + `P.. C.. F..`), lunch (kcal), fuel (`addMacros(pre,drink).kcal` + describeFuel), snack (`macroKcal(snack)` + describeSnack).
- OptionBlock `lunch`(午餐): **LunchEditor**:
  - Segmented: `plannedMode`(自动规划) / `quickKcal`(直接 kcal) / `tallyMode`(点选记账).
  - `planned`: OptionBlock `mealSplit`(午晚比例) chips 35/40/45/50 + share text; then **PlannedMealEditor** = MealPreferenceEditor (lunch protein/carb/fat) + generated lunch items (title `generatedLunch`, target kcal, FoodRows with ± tune) + reset-tune.
  - `quick`: **LunchKcalInput** — big text input (kcal, 0–5000) + quick chips 600/700/800/900/1000.
  - `tally`: TALLY_ITEMS StepperRows.
- Two OptionBlocks: `fuel`(训练前) → **FuelControls**; `manualSnack`(临时记录) → **SnackMacroEditor**.

**FuelControls** (训练前 toggle behaviour): status card shows `fuel`+ON/OFF (`isFuelActive`), fuel summary (`describeFuel`), fuel macro. OptionBlock `eatWhat`(吃什么): PRE_ITEMS steppers + `applyNoFuel`(清空训练前) button when active. OptionBlock `drinkWhat`(喝什么): DRINKS OptionCards + ml chips 200/400/600 + free ml TargetInput (`sauce` label, 0–2000).
- OFF state = pre `{}`, drinkKey `none`, drinkMl 0. `applyNoFuel` resets to that.

**SnackMacroEditor** (临时记录): name input; 4 TargetInputs kcal/p/c/f (kcal 0–5000, others 0–500); a note card `dinnerWillClose`(晚餐会跟着收口) + dinnerSummary; clear button resets to `{name: 手动加餐/手入力の間食, 0,0,0,0}`.

**IntakeDrawer** (right sheet on desktop / bottom sheet on mobile): header image `assets/pre.jpg`, title `intakeDrawerTitle` + `intakeDrawerSub`, close X, then IntakeEditor. `dinnerSummary` = first 4 dinner items `"short|name qty unit"` joined by ` · `.

---

## 4. Logic wiring — nutritionSolver exports used by UI

Imported: `addMacros, buildShoppingRunPlan, buildWeeklyShopping, clamp, createDefaultShopPlan, deriveMacroTargets, macroAnalysis, macroKcal, normalizeShopPlan, optimizeDinnerItems as solveDinnerItems, round, roundTo, scaleMacro, splitMealTargets, withKcal`. (`classifyCarbDay`, `refreshItemMacro`, `scoreDinnerTotal`, `formatShopQty`, `EMPTY_MACRO` are used indirectly/internally.)

| Solver export | Signature (as used) | Where called | Output |
|---|---|---|---|
| `deriveMacroTargets(profile)` | `{bodyWeightKg,proteinPerKg,fatMinPerKg,kcal}` | `targets` memo | `{p,c,f,kcal}`: p=bw*ppk, f=bw*fpk, c=(kcal−p*4−f*9)/4 (≥0), all rounded (p/f/c to .1) |
| `splitMealTargets(targets, fixedMacro, lunchRatio)` | ratio clamped 0.1–0.9 | model: lunch/dinner split | `{remaining, lunch, dinner}` where remaining=targets−fixed (≥0), lunch=remaining*ratio, dinner=remaining−lunch |
| `optimizeDinnerItems(variableItems, fixedMacro, targets, {beamWidth=520})` (aliased `solveDinnerItems`) | beam search over per-item candidate quantities | lunch (`fixedMacro=emptyMacro`) **and** dinner (`fixedMacro=dinnerFixedMacro`) | items with optimized qty>0, macro refreshed; minimizes `scoreDinnerTotal` |
| `macroAnalysis(total, targets, bodyWeightKg)` | | `macroReport` memo | pct + per-kg for P/C/F, target per-kg P/C, `carbDay` (via classifyCarbDay) |
| `buildWeeklyShopping(items, plan, days)` | days clamped 1–21 | model.shopping | per-item `{weeklyTarget, targetQty=round(weeklyTarget*days/7), stockQty, buyQty=max(0,target−stock) if enabled else 0, macro, expectedMacro, needState}` |
| `buildShoppingRunPlan(items, toneOrder)` | filters enabled & buyQty>0, sorts by tone then buyQty desc | ShopView runPlan | ordered buy list with order#, buyText, targetText, stockText, reason |
| `createDefaultShopPlan(items)` | | shopPlan fallback | `{key:{enabled:defaultEnabled!==false, target:defaultTarget??0, stock:defaultStock??0}}` |
| `normalizeShopPlan(plan, items)` | | ShopView updates | clamps target/stock to [0,max], fills defaults |
| `addMacros / scaleMacro / withKcal / macroKcal / round / roundTo / clamp` | helpers | everywhere | see solver source |

Scoring internals (needed for exact reproduction of meal solver):
- `scoreDinnerTotal(total, targets)`: kcalPenalty = `(kcalDelta/(kcalDelta>0?150:125))^2 *8 + max(0,kcalDelta−220)*0.28`; + `(proteinShort/4)^2*28` + `(proteinOver/12)^2*4` + `(carbDelta/14)^2*10` + `(fatShort/4)^2*24` + `(fatOver/7)^2*12`.
- `candidateQuantities(item)`: step, max=max(0, item.max??item.qty??step*20), count=floor(max/step). If count≤90 → all multiples 0..max. Else → ±14 steps around item.qty plus ratios [.15,.25,.35,.5,.65,.8,1]*max. Always includes {0, item.qty, max}.
- `optimisticPartialScore` (beam ranking heuristic): see solver lines 169–184.
- `refreshItemMacro(item, qty)`: qty = roundTo(clamp(qty,0,max), step); macro=scaleMacro(unitMacro, qty).

### 4.1 UI-side formulas NOT in solver
- **Meal targets pipeline** (`model` memo, lines 970–1051):
  - `tallyMacro` = Σ scaleMacro(TALLY_ITEMS[k], qty).
  - `preMacro` = Σ scaleMacro(PRE_ITEMS[k], qty).
  - `drinkMacro` = withKcal(scaleMacro(drink, **drinkMl/200**)).
  - `snackMacro` = withKcal(snack).
  - `fixedIntake` = pre + drink + snack.
  - `mealTargets` = splitMealTargets(targets, fixedIntake, mealSplitPct/100).
  - `extraMacro`/`extraItems` from extraCarbs (tone `gold`).
  - **Lunch**: `lunchSolveTargets = mealSolveTargets(mealTargets.lunch, lunchProteinKeys, lunchFatKeys, beefFat)`; build variable items → `solveDinnerItems(..., emptyMacro, lunchSolveTargets)`; `lunchItems` only in planned mode (ordered + adjustments applied). `plannedLunch` = Σ items.
  - `manualLunch = (lunchMode==='tally' && tallyMacro.kcal>0) ? tallyMacro : estimateLunch(lunchKcal)`. So **quick mode AND empty-tally both use `estimateLunch(lunchKcal)`**.
  - `lunch = planned ? plannedLunch : manualLunch`.
  - `beforeDinner = lunch + fixedIntake`.
  - **Dinner**: planned mode → `dinnerTarget = splitMealTargets(targets, beforeDinner, 0.5).remaining` (note ratio 0.5 but only `.remaining` used = targets−beforeDinner); non-planned → `dinnerTarget = targets`. `dinnerSolveTarget = planned ? mealSolveTargets(dinnerTarget,...) : dinnerTarget`. `dinnerFixedMacro = planned ? extraMacro : (beforeDinner + extraMacro)`. Build variable items → solve → order (with extraItems as fixed) → apply adjustments.
  - `total = beforeDinner + dinner`. `deficit = round(tdee − total.kcal)`.
  - `drinkK = DRINKS[key].k * drinkMl/200`; `drinkNa = na * drinkMl/200`; **`sodium = saltG*393 + drinkNa`**; **`potassium = foodK + drinkK`**.
- **estimateLunch(kcal)** (line 813): `p=(kcal*0.31)/4, c=(kcal*0.49)/4, f=(kcal*0.2)/9, kcal`. (31% P / 49% C / 20% F split by kcal.)
- **mealSolveTargets(targets, proteinKeys, fatKeys, beefFat)** (line 736): if no meaningful fat source (fatKeys empty AND no protein in {beef,duck,kfc} and none with unit.f≥6) → convert fat target to carbs: `c += f*9/4, f=0`. Else pass through.
- **proteinUnit(key, beefFat)**: spreads PROTEINS[key], overrides `f = key==='beef' ? beefFat*0.8/100 : (protein.f||0)`.
- **buildMealVariableItems**: protein items sized to hit `targets.p − fixedMacro.p` split evenly across proteinKeys; fat items to hit remaining fat; carb item fills remaining kcal (`remainingKcal / carb.kcalUnit`). Default proteinKeys `['beef']` if empty; carb defaults to `pasta`.
- **applyDinnerAdjustments(items, adjustments)**: qty = clamp(baseQty + adjustment, 0, max); recompute macro. adjustments stored per item.key.
- **orderMealItems(items, fixedItems)**: order = red, amber, fixedItems, green, others.
- **MacroBar pct** = min(135, value/target*100). **MobileMacro ok** = |value−target| ≤ max(6, target*0.08). **MetricTile ok** = |diff| ≤ (unit? max(8,target*0.08) : max(80,target*0.05)).

---

## 5. i18n

- Implementation: `TEXT = { zh: {...}, ja: {...} }` object at top of CuttingProtocol.jsx (lines 49–344). `tFor(locale)` returns `(key) => dict[key] ?? TEXT.zh[key] ?? key`. `t` memoized per locale.
- Per-item localization via `localize(item, locale)` merging `item.ja` (see §2).
- `activeLocale` = locale if in `['zh','ja']` else `'zh'`. LanguageToggle persists to `cutting:locale:v1`.
- Side effects on locale change (lines 1104–1108): `<html lang>` = `ja`→`ja`, else `zh-CN`; `document.documentElement.dataset.locale`; `document.title` = `Cutting Lab · 今日のごはん` / `Cutting Lab · 今日餐盘`.
- `localizedCarbDay`: maps solver labels 低碳/中碳/高碳 → t('lowCarb'/'mediumCarb'/'highCarb').

### 5.1 Full TEXT key → {zh, ja} map
| key | zh | ja |
|---|---|---|
| appSub | 今天怎么吃 | 今日のごはん |
| navPlan | 今日 | 今日 |
| navDetail | 明细 | 詳細 |
| navShop | 采购 | 買い物 |
| navCheat | 放松 | ごほうび |
| language | 语言 | 言語 |
| zh | 中文 | 中文 |
| ja | 日本語 | 日本語 |
| heroTitle | 今日餐盘 | 今日のごはん |
| heroAccent | 轻轻松松定下来 | ふんわり決める |
| heroCopy | 先把今天已经吃过的东西放进来，晚餐、赤字和采购都会自动跟着算。界面只保留真正要操作的部分。 | 食べたものを入れるだけ。夕食、補給、赤字、買い物リストまで一枚のカードで整えます。 |
| profile | 目标 | 目標 |
| fuel | 训练前 | 運動前 |
| snack | 额外 | 追加 |
| copy | 复制 | コピー |
| copying | 复制中 | コピー中 |
| copied | 已复制 | コピー済み |
| retry | 重试 | 再試行 |
| record | 记录 | 記録 |
| intake | 已吃 | 食べたもの |
| dinner | 晚餐 | 夕食 |
| rhythm | 节奏 | バランス |
| kcal | 热量 | カロリー |
| deficit | 赤字 | 赤字 |
| todayTotal | 今日合计 | 今日の合計 |
| dinnerKcal | 晚餐热量 | 夕食カロリー |
| noEat | 不吃 | 食べない |
| noDrink | 不喝 | 飲まない |
| off | OFF | OFF |
| on | ON | ON |
| planIntakeEyebrow | 01 · 先记今天 | 01 · まず記録 |
| planIntakeTitle | 今天吃到哪了 | 食べたもの |
| intakeHubTitle | 今日已吃 | 今日食べたもの |
| intakeHubSub | 午餐、训练前、额外吃的都在一个地方改 | 昼食、運動前、追加分をここでまとめて調整 |
| intakeDrawerTitle | 今日已吃 | 今日食べたもの |
| intakeDrawerSub | 改完这里，晚餐会自动重新收口 | ここを変えると夕食が自動で調整されます |
| beforeDinnerTotal | 晚餐前合计 | 夕食前の合計 |
| editIntake | 调整已吃 | 食べたもの調整 |
| quickKcal | 直接 kcal | kcal だけ |
| tallyMode | 点选记账 | 食材で記録 |
| plannedMode | 自动规划 | 自動プラン |
| mealSplit | 午晚比例 | 昼夜比率 |
| lunchPlannerTitle | 午餐想吃什么 | 昼食で食べたいもの |
| dinnerPlannerTitle | 晚餐想吃什么 | 夕食で食べたいもの |
| generatedLunch | 生成午餐 | 昼食プラン |
| generatedDinner | 生成晚餐 | 夕食プラン |
| lunchShare | 午餐比例 | 昼食比率 |
| lunchKcal | 午餐热量 | 昼食カロリー |
| commonPicks | 常用数字 | よく使う数字 |
| planChoiceEyebrow | 02 · 晚餐方向 | 02 · 夕食の気分 |
| planChoiceTitle | 今晚想吃什么 | 今夜なに食べる |
| advanced | 细节设置 | こまかい設定 |
| advancedSub | 蛋白、脂肪、水果、牛肉脂肪和目标公式 | たんぱく質、脂質、果物、牛脂、目標式 |
| dinnerProtein | 晚餐蛋白 | 夕食たんぱく |
| fatSource | 脂肪来源 | 脂質ソース |
| extras | 水果 / 酸奶 | 果物 / ヨーグルト |
| beefFat | 牛肉脂肪 | 牛肉脂質 |
| targetFormula | 目标公式 | 目標式 |
| resetDefault | 重置默认 | 初期値に戻す |
| dinnerAnswerEyebrow | 03 · 自动答案 | 03 · 自動プラン |
| dinnerAnswerTitle | 今晚就这样吃 | 夕食はこれでいく |
| resetTune | 重置微调 | 微調整を戻す |
| noDinner | 今天晚餐已经很轻，先检查午餐或目标 | 夕食がかなり軽いです。昼食か目標を確認してください。 |
| rhythmEyebrow | 04 · 今日结构 | 04 · 今日の構成 |
| rhythmTitle | 看一眼就够 | ここだけ見ればOK |
| protein | 蛋白 | たんぱく |
| carb | 碳水 | 炭水化物 |
| fat | 脂肪 | 脂質 |
| calorie | 热量 | カロリー |
| carbDay | 今天碳水日 | 今日の炭水化物 |
| lowCarb | 低碳 | 低炭水 |
| mediumCarb | 中碳 | 中炭水 |
| highCarb | 高碳 | 高炭水 |
| ledger | 今日账本 | 今日の帳簿 |
| ledgerTitle | 吃进去的东西 | 食べたもの一覧 |
| targetByWeight | 按体重自动分配 | 体重から自動配分 |
| structureTitle | 占比和体重倍数 | 割合と体重倍率 |
| beforeTraining | 训练前 | 運動前 |
| beforeTrainingTitle | 垫一口也算进去 | 少し食べても計算 |
| electrolyte | 电解质 | 電解質 |
| electrolyteTitle | 钾钠别太偏 | カリウムとナトリウム |
| balanced | 平衡 | バランス |
| lowPotassium | 钾偏低 | K 少なめ |
| shopHero | 采购清单 | 買い物リスト |
| shopCopy | 不用自己填。下面已经按进店顺序列好这轮直接买什么，库存只有需要微调时再打开。 | 入力しなくてOK。店内で取る順番に、今回買うものをそのまま出します。库存は必要なときだけ調整。 |
| cycle | 周期 | 周期 |
| products | 商品 | 品目 |
| picked | 已拿 | 取った |
| clearStock | 清空已有 | 在庫を0にする |
| directPlan | 直接方案 | 買うもの |
| directPlanTitle | 照单买这些 | このまま買う |
| nothingToBuy | 这轮不用买 | 今回は買わなくてOK |
| nothingToBuySub | 已选品类的家里库存覆盖了这个备货周期。要强制生成清单可以点“清空已有”。 | 選択中の品目は在庫で足りています。リストを出したい場合は在庫を0にしてください。 |
| stockTune | 库存微调 | 在庫調整 |
| stockTuneSub | 平时不用管；只有家里还有东西时再改目标和已有 | 普段は触らなくてOK。家に残っているものがある時だけ。 |
| weeklyTarget | 周目标 | 週目標 |
| stock | 家里已有 | 家の在庫 |
| skip | 跳过 | 外す |
| add | 加入 | 追加 |
| enough | 已够 | 足りる |
| buy | 补 | 買う |
| cheatTitle | 想吃也能算 | 食べたい日も計算 |
| cheatResult | 吃完大概这样 | 食べた後の見込み |
| cheatKcal | 放松热量 | ごほうび kcal |
| clear | 清空 | クリア |
| fuelSwitch | 补给开关 | 補給スイッチ |
| fuelSub | 训练前吃什么喝什么 | 運動前に食べる/飲むもの |
| currentState | 当前状态 | 現在 |
| fueled | 已补给 | 補給あり |
| noFuel | 不补给 | 補給なし |
| applyNoFuel | 清空训练前 | 運動前をクリア |
| eatWhat | 吃什么 | 食べるもの |
| drinkWhat | 喝什么 | 飲むもの |
| manualCopy | 手动复制 | 手動コピー |
| manualCopySub | 浏览器拦截了自动复制，文本已经选中。手机上直接长按复制也可以。 | ブラウザが自動コピーを止めました。テキストは選択済みなので、スマホでは長押しでコピーできます。 |
| copyAgain | 再复制一次 | もう一度コピー |
| snackTitle | 额外记录 | 追加分を記録 |
| snackSub | 自己填一下也行 | ざっくり入力でOK |
| snackName | 名称 | 名前 |
| noSnack | 没有额外 | 追加なし |
| manualSnack | 临时记录 | 手入力の追加分 |
| dinnerWillClose | 晚餐会跟着收口 | 夕食が自動で調整されます |
| clearSnack | 清除记录 | 記録を消す |
| bodyWeight | 体重 | 体重 |
| proteinRatio | 蛋白倍率 | たんぱく倍率 |
| fatMin | 脂肪最低 | 脂質最低 |
| tdee | TDEE | TDEE |
| proteinTarget | 蛋白目标 | たんぱく目標 |
| fatTarget | 脂肪最低 | 脂質最低 |
| carbRemainder | 剩余碳水 | 残りを炭水化物へ |
| carbRemainderSub | 热量扣完 P/F 后全给碳水 | P/F を引いた残りの kcal を炭水化物に配分 |
| proteinCalories | 蛋白热量 | たんぱく kcal |
| carbCalories | 碳水热量 | 炭水化物 kcal |
| fatCalories | 脂肪热量 | 脂質 kcal |
| carbJudge | 低碳判断 | 低炭水判定 |
| lunch | 午餐 | 昼食 |
| preTraining | 训练前 | 運動前 |
| drinkElectrolyte | 饮料/电解质 | 飲み物/電解質 |
| snackMeal | 额外记录 | 追加分 |
| sauce | 饮料 | 飲み物 |
| salt | 盐 | 塩 |
| foodK | 食物钾 | 食事K |
| actual | 实际 | 実際 |
| target | 目标 | 目標 |
| adjust | 调整 | 調整 |

Keys defined but not obviously rendered: `profile`, `rhythm`, `kcal`, `planIntakeTitle`, `lunchPlannerTitle`, `generatedDinner`, `commonPicks`, `planChoiceEyebrow`, `planChoiceTitle`, `dinnerProtein`, `beforeTraining`, `beforeTrainingTitle`, `fuelSwitch`, `fuelSub`, `currentState`, `fueled`, `noFuel`, `snackTitle`, `snackSub`. (Leftovers / partially used.)

---

## 6. Other stateful behavior

- **Copy plan** (`copyDailyPlan`): builds `buildDailyPlanPayload()` JSON (date, locale, targetProfile, targets, mealSplitPct, lunch, lunchItems, pre, drink{key,ml,macro}, snack, dinnerAdjustments, dinner{items,macro}, total, deficit, copiedAt) → `JSON.stringify(payload, null, 2)`, copies to clipboard. `copyTextToClipboard` tries `navigator.clipboard` (secure context) then falls back to hidden textarea + `execCommand('copy')`. On failure → opens **CopyPanel** (manual copy with readonly textarea auto-selected). copyStatus cycles idle→copying→copied/failed; auto-reset to idle after 1800ms.
- **Deficit / stat rows**: PlanCommandDock (5 tiles §3.1); Hero deficit action; MobilePlanHome deficit tile (green "赤字" when ≥0, red "超出"/"オーバー" when <0). Example "赤字 -879" = deficit sign display. `today合计` (todayTotal) = round(total.kcal). `今日合计`/kcal progress bar vs targets.kcal.
- **Quick actions**: 调整已吃 (editIntake, opens drawer), 复制 (copy), 赤字 tile.
- **Carb-day display**: badge/banner using `activeCarbDay.label` (localized) + tone colors; MacroInsightGrid carbJudge with `report.carbDay.note` (zh string, hot if red).
- **Item tuning**: `tuneMealItem(setter, item, delta)` stores per-key adjustment = round(nextQty−baseQty, item.step<1?1:2); 0 removes key. Reset buttons clear the adjustments map.
- **Toggle rules**: protein toggles keep ≥1 selected; fat toggles free (can be empty).
- **Scroll**: on tab change → scroll to top; PlanCommandDock jumps scroll to `plan-{section}` anchors.

### 6.1 Color / tone palette
| tone | color | usage |
|---|---|---|
| red | #ff8d82 (FoodRow) / #ff9f95 (OptionCard) | protein |
| amber | #f1b36a | fat |
| gold | #ffcf7d | extras/fruit |
| green | #69cda5 | carb / positive |
| aqua | #85d7e3 | kcal / fallback |
Ink: #4d3934 (primary), #8f6c64 (soft), #a47b72 (faint). Paper: #fff7f1. Line: #ffe3da / #fff0ed. Coral #ff7d75. Honey #ffcf7d. Full tailwind palette in `tailwind.config.cjs` / inline in `index.html`. CarbDayBanner tone classes: amber `#fff6df/#b97325`, green `#edfff6/#3da77d`, red `#fff1ee/#ff7d75`.

---

## 7. Build / deploy

- **package.json**: React 18.3.1 + react-dom, lucide-react ^1.18.0, three ^0.184.0 (three imported nowhere in these files — likely unused). Scripts: `dev`=vite, `build`=`node scripts/build-static.mjs`, `build:vite`=vite build, `preview`, `test:logic`=`node src/nutritionSolver.test.mjs`.
- **vite.config.js**: react plugin, `base: './'` (relative for GitHub Pages subpath).
- **scripts/build-static.mjs**: custom esbuild static build → `dist/`. Copies `public/` → dist, writes hashed `app-<hash>.css` (raw `index.css`, NOT tailwind-compiled — see GAPS), esbuild-bundles `src/main.jsx` → `assets/app-<hash>.js` (esm, minify, jsx automatic, `import.meta.env.BASE_URL='./'`), rewrites `index.html` script tag to the hashed bundle + css link, writes `.nojekyll`. Image loaders: jpg/jpeg/png/svg/webp = file.
- **index.html**: loads Google Fonts (Nunito, M PLUS Rounded 1c, Zen Maru Gothic, Noto Sans SC, Spline Sans Mono) + Tailwind Play CDN (`cdn.tailwindcss.com`) with inline `tailwind.config`. Dev entry `/src/main.jsx`. Favicon `./favicon.svg`. title `Cutting Lab · 今日餐盘`.
- **tailwind.config.cjs**: content globs; extended colors (paper/ink/peach/coral/honey/mint/aqua/line…), fontFamily (display/sans/mono/cjk), boxShadow warm/warmlg.
- **index.css**: Tailwind directives + custom `.soft-*`, `.mobile-glass-card`, `.pixel-buddy*`, `.pixel-crew-*` styles, warm gradient backgrounds, noise overlay, reduced-motion handling. Body font Nunito/M PLUS Rounded, bg #fff7f1, color #4d3934, `color-scheme: light` (no dark mode).

### 7.1 Assets referenced (in `public/assets/`)
- `generated/protocol-hero-premium.jpg` (Hero), `generated/pixel-cutting-crew-v1.webp` (mobile crew), `generated/shop-basket.jpg` (shop hero).
- `cheat.jpg` (cheat view), `pre.jpg` (intake drawer header).
- Present but unreferenced in these files: `belly.jpg`, `dinner.jpg`, `hero.jpg`, `yogurt.jpg`, `generated/protocol-hero.jpg`, `generated/snack-scanner.jpg`.

---

## 8. Icons (lucide-react) mapping
Activity(hero badge), Apple(shop gold group), CheckCircle2(copied/done), ChevronDown(disclosure), ClipboardList(intake/ledger/copy), Dumbbell(shop red group), Flame(cheat nav/amber group), Gauge(detail nav/rhythm/shop actual), Goal(deficit/target), Leaf(electrolyte), Minus/Plus(steppers), PackageCheck(shop badge), RotateCcw(reset buttons), Settings2(disclosure title), ShoppingBasket(shop nav/direct plan), Sparkles(logo/dinner answer), Timer(shop cycle), Utensils(plan nav/dinner/green group), X(close), Zap(edit-intake).

---

## GAPS / AMBIGUITIES

1. **CSS in static build is NOT compiled Tailwind.** `build-static.mjs` writes the raw `src/index.css` (only `@tailwind` directives + custom rules) — the Tailwind utility classes rely on the Play CDN loaded in `index.html`. A rebuild must either keep the CDN or run a real Tailwind build. The `build:vite` path would need PostCSS/Tailwind wired (a `postcss.config` was not read/confirmed here).
2. **`three` dependency unused** in the four inspected source files. Confirm no other module imports it before dropping.
3. **Unused/leftover i18n keys** (listed in §5.1) and the `02 · planChoice*` strings suggest an earlier "dinner direction" section that no longer renders as its own panel — dinner preference now lives under `dinnerPlannerTitle` inside Panel `plan-dinner`. Decide whether to keep these strings.
4. **`fresh_noodle` CARB_PLANS ja override** merges `{name,short,sub}` — but its zh `name` ("冷藏鲜面 · 生ラーメン") already contains Japanese; the ja variant is "冷蔵生麺 · 調味なし". Also note `CARB_PLANS.banana` has `ja.unit='本'` overriding unit '根'.
5. **`rice_dry`, `pho`, `bifun` carb plans** exist in CARB_PLANS and are selectable in MealPreferenceEditor, but only `pasta/soba/nissin/fresh_noodle` appear in WEEKLY_SHOP_ITEMS. Shopping cannot restock rice/pho/bifun. Intentional?
6. **`avocado`, `olive`, `nuts` fat sources** exist but shop only stocks egg_fried/sauce/nuts/cheese_bite (no olive/avocado). Intentional gap.
7. **estimateLunch used for both `quick` and empty `tally`** — the `LunchKcalInput` (quick) and estimateLunch macro split (31/49/20) is an approximation, not a solved plan. A rebuild should preserve this exact fallback behavior.
8. **Dinner target uses `splitMealTargets(targets, beforeDinner, 0.5).remaining`** — the 0.5 ratio is irrelevant since only `.remaining` (= targets − beforeDinner, floored at 0) is read. Keep as `targets − beforeDinner`.
9. **Sodium constant 393**: `sodium = saltG*393 + drinkNa` (mg Na per g salt). Hard-coded; no UI exposure.
10. **`nutritionSolver.test.mjs`** was not read — it may encode additional expected-behavior assertions worth mirroring in the rebuild's tests.
11. **Beam search determinism**: `optimizeDinnerItems` beamWidth=520 with tie-breaking on `rank`; results depend on JS sort stability. Output should match if the scoring functions are reproduced exactly (§4).
12. **No dark mode** (`color-scheme: light`). New UI theming is a fresh decision.
13. **Persisted state migration**: keys are versioned `:v1`. If the rebuild changes data shapes, bump versions or migrate.
