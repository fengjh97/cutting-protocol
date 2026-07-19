import React from 'react';
import {
  Sheet, Pbtn, Chip, Stepper, NumInput, MacroBar, Pill, OptionBlock,
  Segmented, FoodCard, FoodRow, Sprite,
} from './widgets.jsx';
import { localize } from './i18n.js';
import { round, macroKcal, scaleMacro } from './nutritionSolver.js';
import {
  PROTEINS, CARB_PLANS, FAT_SOURCES, DINNER_EXTRAS, TALLY_ITEMS, BREAKFAST_ITEMS, PRE_ITEMS,
  DRINKS, WEEKLY_SHOP_ITEMS, CHEAT_ITEMS, DEFAULT_TARGET_PROFILE,
} from './data.js';

/* tone -> macro bar / accent color (spec §6.1) */
const MACRO_COLOR = { p: '#ff8d82', c: '#ffcf7d', f: '#69cda5', kcal: '#85d7e3' };
const CARB_BANNER = {
  amber: { bg: '#fff6df', fg: '#b97325' },
  green: { bg: '#edfff6', fg: '#3da77d' },
  red: { bg: '#fff1ee', fg: '#ff7d75' },
};

/* map a solved item key -> localized display name + sprite key + unit */
export function itemDisplay(item, locale) {
  const k = item.key || '';
  if (k.startsWith('carb-')) {
    const key = k.slice(5); const c = localize(CARB_PLANS[key], locale) || {};
    return { name: c.short || c.name || item.name, unit: c.unit || item.unit, spriteKey: key };
  }
  if (k.startsWith('fat-')) {
    const key = k.slice(4); const f = localize(FAT_SOURCES[key], locale) || {};
    return { name: f.short || f.label || item.name, unit: f.unit || item.unit, spriteKey: key };
  }
  if (k.startsWith('extra-')) {
    const key = k.slice(6); const e = localize(DINNER_EXTRAS[key], locale) || {};
    return { name: e.label || item.name, unit: e.unit || item.unit, spriteKey: key };
  }
  if (PROTEINS[k]) {
    const p = localize(PROTEINS[k], locale);
    return { name: p.short || p.label, unit: p.unit || item.unit, spriteKey: k };
  }
  return { name: item.name, unit: item.unit, spriteKey: k };
}

function carbLabel(model, t) {
  const l = model.carbDay?.label;
  return t(l === '低碳' ? 'lowCarb' : l === '中碳' ? 'mediumCarb' : l === '高碳' ? 'highCarb' : 'carbDay');
}

/* ── shared small pieces ──────────────────────────────────────────────── */

function TextInput({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: '100%', fontFamily: 'inherit', fontSize: 15, padding: '6px 8px',
        background: '#fff6e2', border: '3px solid #6a4a2c', color: 'var(--ink)',
        boxShadow: 'inset 0 3px 0 rgba(255,255,255,.5)',
      }}
    />
  );
}

function LabeledNum({ label, value, onChange, min, max, suffix }) {
  return (
    <div className="stack" style={{ gap: 4 }}>
      <span className="muted">{label}</span>
      <NumInput value={value} onChange={onChange} min={min} max={max} suffix={suffix} width={92} />
    </div>
  );
}

function StepperRow({ k, name, meta, value, onChange, step, min = 0, max, unit }) {
  return (
    <div className="row" style={{ gap: 8, padding: '4px 0' }}>
      <Sprite k={k} size={34} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13 }}>{name}</div>
        {meta && <div className="muted num">{meta}</div>}
      </div>
      <Stepper value={value} onChange={onChange} step={step} min={min} max={max} unit={unit} />
    </div>
  );
}

function LedgerRow({ label, macro, strong }) {
  return (
    <div className="row" style={{ justifyContent: 'space-between', padding: '6px 0' }}>
      <span style={{ fontSize: 13, fontWeight: strong ? 700 : 400 }}>{label}</span>
      <span className="muted num">
        P{round(macro.p)} C{round(macro.c)} F{round(macro.f)} · {round(macro.kcal)} kcal
      </span>
    </div>
  );
}

/* target-profile inputs (shared by DetailSheet & SettingsSheet) */
function TargetFields({ S, up, t, withTdee }) {
  const p = S.targetProfile;
  const setP = (patch) => up((s) => ({ targetProfile: { ...s.targetProfile, ...patch } }));
  return (
    <div className="grid2">
      <LabeledNum label={t('bodyWeight')} value={p.bodyWeightKg} min={30} max={250} onChange={(v) => setP({ bodyWeightKg: v })} />
      <LabeledNum label={t('proteinRatio')} value={p.proteinPerKg} min={0.8} max={3} onChange={(v) => setP({ proteinPerKg: v })} />
      <LabeledNum label={t('fatMin')} value={p.fatMinPerKg} min={0.3} max={1.5} onChange={(v) => setP({ fatMinPerKg: v })} />
      <LabeledNum label={t('kcal')} value={p.kcal} min={1000} max={5000} onChange={(v) => setP({ kcal: v })} />
      {withTdee && <LabeledNum label={t('tdee')} value={S.tdee} min={0} max={9000} onChange={(v) => up({ tdee: v })} />}
    </div>
  );
}

/* MealPreferenceEditor — reused for lunch & dinner (spec §3.5) */
function MealPreferenceEditor({ t, locale, proteinKeys, carbPlan, fatKeys, onProtein, onCarb, onFat, proteinOptions = Object.keys(PROTEINS), carbKeys = Object.keys(CARB_PLANS) }) {
  const toggleProtein = (key) => {
    if (proteinKeys.includes(key)) {
      if (proteinKeys.length <= 1) return; // keep >=1 selected
      onProtein(proteinKeys.filter((k) => k !== key));
    } else onProtein([...proteinKeys, key]);
  };
  const toggleFat = (key) => {
    if (fatKeys.includes(key)) onFat(fatKeys.filter((k) => k !== key));
    else onFat([...fatKeys, key]);
  };
  return (
    <div className="stack" style={{ gap: 10 }}>
      <div className="stack" style={{ gap: 6 }}>
        <span className="eyebrow">{t('protein')}</span>
        <div className="grid-food">
          {proteinOptions.map((key) => {
            const it = localize(PROTEINS[key], locale);
            return (
              <FoodCard key={key} k={key} name={it.short} sub={it.note}
                on={proteinKeys.includes(key)} onClick={() => toggleProtein(key)} />
            );
          })}
        </div>
      </div>
      <div className="stack" style={{ gap: 6 }}>
        <span className="eyebrow">{t('carb')}</span>
        <div className="grid-food">
          {carbKeys.map((key) => {
            const it = localize(CARB_PLANS[key], locale);
            return (
              <FoodCard key={key} k={key} name={it.short} sub={it.sub}
                on={carbPlan === key} onClick={() => onCarb(key)} />
            );
          })}
        </div>
      </div>
      <div className="stack" style={{ gap: 6 }}>
        <span className="eyebrow">{t('fat')}</span>
        <div className="grid-food">
          {Object.keys(FAT_SOURCES).map((key) => {
            const it = localize(FAT_SOURCES[key], locale);
            return (
              <FoodCard key={key} k={key} name={it.short} sub={`${FAT_SOURCES[key].f}g / ${it.unit}`}
                on={fatKeys.includes(key)} onClick={() => toggleFat(key)} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* generic tune helper: cumulative ± step delta stored per item.key */
function makeTuner(up, field) {
  return (item, dir) => up((s) => {
    const step = item.step || 1;
    const cur = s[field][item.key] || 0;
    const next = round(cur + dir * step, step < 1 ? 2 : 0);
    const map = { ...s[field] };
    if (next === 0) delete map[item.key];
    else map[item.key] = next;
    return { [field]: map };
  });
}

/* ══════════════════════════════════════════════════════════════════════
   1. IntakeSheet
   ══════════════════════════════════════════════════════════════════════ */
export function IntakeSheet({ S, up, model, t, locale, onClose }) {
  const bd = model.beforeDinner;
  const tuneLunch = makeTuner(up, 'lunchAdjustments');

  const drinkPick = (key) => up((s) => (
    key === 'none' ? { drinkKey: 'none', drinkMl: 0 }
      : { drinkKey: key, drinkMl: s.drinkMl > 0 ? s.drinkMl : 400 }
  ));

  return (
    <Sheet title={t('intakeHubTitle')} sub={t('intakeHubSub')} onClose={onClose}>
      <div className="grid2">
        <Pill k={t('beforeDinnerTotal')} v={round(bd.kcal)} sub={`P${round(bd.p)} C${round(bd.c)} F${round(bd.f)}`} />
        <Pill k={t('breakfast')} v={round(model.breakfastMacro.kcal)} />
        <Pill k={t('lunch')} v={round(model.lunch.kcal)} />
        <Pill k={t('fuel')} v={round(model.preMacro.kcal + model.drinkMacro.kcal)} />
        <Pill k={t('snack')} v={round(model.snackMacro.kcal)} />
      </div>

      <OptionBlock title={t('breakfast')}>
        <div className="stack" style={{ gap: 2 }}>
          {Object.entries(BREAKFAST_ITEMS).map(([key, item]) => {
            const it = localize(item, locale);
            const meta = `${round(macroKcal(scaleMacro(item, item.step)))} kcal / ${item.step}${it.unit}`;
            return (
              <StepperRow key={key} k={key} name={it.label} meta={meta}
                value={S.breakfast[key] || 0} step={item.step} max={item.max} unit={it.unit}
                onChange={(v) => up((s) => ({ breakfast: { ...s.breakfast, [key]: v } }))} />
            );
          })}
        </div>
        <Pbtn variant="ghost sm" onClick={() => up({ breakfast: {} })}>{t('clearBreakfast')}</Pbtn>
      </OptionBlock>

      <OptionBlock title={t('lunch')}>
        <Segmented
          options={[
            { value: 'planned', label: t('plannedMode') },
            { value: 'quick', label: t('quickKcal') },
            { value: 'tally', label: t('tallyMode') },
          ]}
          value={S.lunchMode}
          onChange={(v) => up({ lunchMode: v })}
        />

        {S.lunchMode === 'planned' && (
          <div className="stack" style={{ gap: 10 }}>
            <OptionBlock title={`${t('lunchShare')} ${S.mealSplitPct}% · ${t('dinner')} ${100 - S.mealSplitPct}%`}>
              <div className="wrap">
                {[35, 40, 45, 50].map((v) => (
                  <Chip key={v} on={S.mealSplitPct === v} onClick={() => up({ mealSplitPct: v })}>{v}%</Chip>
                ))}
              </div>
            </OptionBlock>
            <MealPreferenceEditor
              t={t} locale={locale}
              carbKeys={Object.keys(CARB_PLANS)}
              proteinKeys={S.lunchProteinKeys} carbPlan={S.lunchCarbPlan} fatKeys={S.lunchFatKeys}
              onProtein={(v) => up({ lunchProteinKeys: v })}
              onCarb={(v) => up({ lunchCarbPlan: v })}
              onFat={(v) => up({ lunchFatKeys: v })}
            />
            <OptionBlock
              title={t('generatedLunch')}
              right={<span className="muted num">{round(model.mealTargets.lunch.kcal)} kcal</span>}
            >
              {model.lunchItems.map((item) => {
                const d = itemDisplay(item, locale);
                return (
                  <FoodRow key={item.key} k={d.spriteKey} name={d.name} qty={item.qty}
                    unit={d.unit} macro={item.macro} onTune={(dir) => tuneLunch(item, dir)} />
                );
              })}
              {Object.keys(S.lunchAdjustments).length > 0 && (
                <Pbtn variant="ghost sm" onClick={() => up({ lunchAdjustments: {} })}>{t('resetTune')}</Pbtn>
              )}
            </OptionBlock>
          </div>
        )}

        {S.lunchMode === 'quick' && (
          <div className="stack" style={{ gap: 8 }}>
            <NumInput value={S.lunchKcal} onChange={(v) => up({ lunchKcal: v })} min={0} max={5000} suffix="kcal" width={110} />
            <div className="wrap">
              {[600, 700, 800, 900, 1000].map((v) => (
                <Chip key={v} on={S.lunchKcal === v} onClick={() => up({ lunchKcal: v })}>{v}</Chip>
              ))}
            </div>
          </div>
        )}

        {S.lunchMode === 'tally' && (
          <div className="stack" style={{ gap: 2 }}>
            {Object.entries(TALLY_ITEMS).map(([key, item]) => {
              const it = localize(item, locale);
              const meta = `${round(macroKcal(scaleMacro(item, item.step)))} kcal / ${item.step}${it.unit}`;
              return (
                <StepperRow key={key} k={key} name={it.label} meta={meta}
                  value={S.tally[key] || 0} step={item.step} max={item.max} unit={it.unit}
                  onChange={(v) => up((s) => ({ tally: { ...s.tally, [key]: v } }))} />
              );
            })}
          </div>
        )}
      </OptionBlock>

      <OptionBlock title={t('fuel')}>
        <span className="eyebrow">{t('eatWhat')}</span>
        {Object.entries(PRE_ITEMS).map(([key, item]) => {
          const it = localize(item, locale);
          const meta = `${round(macroKcal(scaleMacro(item, item.step)))} kcal / ${item.step}${it.unit}`;
          return (
            <StepperRow key={key} k={key} name={it.label} meta={meta}
              value={S.pre[key] || 0} step={item.step} max={item.max} unit={it.unit}
              onChange={(v) => up((s) => ({ pre: { ...s.pre, [key]: v } }))} />
          );
        })}
        <span className="eyebrow">{t('drinkWhat')}</span>
        <div className="grid-food">
          {['tomato', 'yasai', 'none'].map((key) => {
            const it = localize(DRINKS[key], locale);
            return (
              <FoodCard key={key} k={key} name={it.label} sub={it.sub}
                on={S.drinkKey === key} onClick={() => drinkPick(key)} />
            );
          })}
        </div>
        <div className="wrap">
          {[200, 400, 600].map((v) => (
            <Chip key={v} on={S.drinkMl === v} onClick={() => up({ drinkMl: v })}>{v}ml</Chip>
          ))}
          <NumInput value={S.drinkMl} onChange={(v) => up({ drinkMl: v })} min={0} max={2000} suffix="ml" />
        </div>
        <Pbtn variant="ghost sm" onClick={() => up({ pre: {}, drinkKey: 'none', drinkMl: 0 })}>{t('applyNoFuel')}</Pbtn>
      </OptionBlock>

      <OptionBlock title={t('manualSnack')}>
        <TextInput value={S.snack.name} onChange={(v) => up((s) => ({ snack: { ...s.snack, name: v } }))} />
        <div className="grid2">
          <LabeledNum label={t('kcal')} value={S.snack.kcal} min={0} max={5000}
            onChange={(v) => up((s) => ({ snack: { ...s.snack, kcal: v } }))} />
          <LabeledNum label={t('protein')} value={S.snack.p} min={0} max={500}
            onChange={(v) => up((s) => ({ snack: { ...s.snack, p: v } }))} />
          <LabeledNum label={t('carb')} value={S.snack.c} min={0} max={500}
            onChange={(v) => up((s) => ({ snack: { ...s.snack, c: v } }))} />
          <LabeledNum label={t('fat')} value={S.snack.f} min={0} max={500}
            onChange={(v) => up((s) => ({ snack: { ...s.snack, f: v } }))} />
        </div>
        <div className="muted">{t('dinnerWillClose')}</div>
        <Pbtn variant="ghost sm" onClick={() => up({
          snack: { name: locale === 'ja' ? '手入力の間食' : '手动加餐', p: 0, c: 0, f: 0, kcal: 0 },
        })}>{t('clearSnack')}</Pbtn>
      </OptionBlock>
    </Sheet>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   2. DinnerSheet
   ══════════════════════════════════════════════════════════════════════ */
export function DinnerSheet({ S, up, model, t, locale, onClose }) {
  const tuneDinner = makeTuner(up, 'dinnerAdjustments');
  const hasAdj = Object.keys(S.dinnerAdjustments).length > 0;
  return (
    <Sheet title={t('dinnerAnswerTitle')} onClose={onClose}>
      <OptionBlock title={t('dinnerPlannerTitle')}>
        <MealPreferenceEditor
          t={t} locale={locale}
          proteinOptions={Object.keys(PROTEINS).filter((key) => key !== 'duck' && key !== 'kfc')}
          carbKeys={Object.keys(CARB_PLANS).filter((key) => key !== 'pho')}
          proteinKeys={S.proteinKeys} carbPlan={S.carbPlan} fatKeys={S.fatKeys}
          onProtein={(v) => up({ proteinKeys: v })}
          onCarb={(v) => up({ carbPlan: v })}
          onFat={(v) => up({ fatKeys: v })}
        />
      </OptionBlock>

      {model.dinnerItems.length === 0 ? (
        <Pill k={t('dinner')} v="—" sub={t('noDinner')} />
      ) : (
        <div className="stack" style={{ gap: 2 }}>
          {model.dinnerItems.map((item) => {
            const d = itemDisplay(item, locale);
            return (
              <FoodRow key={item.key} k={d.spriteKey} name={d.name} qty={item.qty}
                unit={d.unit} macro={item.macro} onTune={(dir) => tuneDinner(item, dir)} />
            );
          })}
        </div>
      )}

      {hasAdj && (
        <Pbtn variant="ghost sm" onClick={() => up({ dinnerAdjustments: {} })}>{t('resetTune')}</Pbtn>
      )}

      <Pill k={t('dinner')} v={`${round(model.dinner.kcal)} kcal`}
        sub={`P${round(model.dinner.p)} C${round(model.dinner.c)} F${round(model.dinner.f)}`} tone="good" />
    </Sheet>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   3. StructureSheet
   ══════════════════════════════════════════════════════════════════════ */
export function StructureSheet({ model, t, onClose }) {
  const tone = model.carbDay?.tone || 'green';
  const c = CARB_BANNER[tone] || CARB_BANNER.green;
  return (
    <Sheet title={t('rhythmTitle')} onClose={onClose}>
      <div className="stack" style={{ gap: 12 }}>
        <MacroBar label={t('protein')} value={model.total.p} target={model.targets.p} color={MACRO_COLOR.p} />
        <MacroBar label={t('carb')} value={model.total.c} target={model.targets.c} color={MACRO_COLOR.c} />
        <MacroBar label={t('fat')} value={model.total.f} target={model.targets.f} color={MACRO_COLOR.f} />
        <MacroBar label={t('calorie')} value={model.total.kcal} target={model.targets.kcal} color={MACRO_COLOR.kcal} unit="" />
      </div>
      <div className="stack" style={{ gap: 4, padding: '14px 16px', background: c.bg, borderRadius: 12 }}>
        <div className="big-num" style={{ color: c.fg }}>{carbLabel(model, t)}</div>
        <div style={{ color: c.fg, fontSize: 13 }}>{model.macroReport.carbDay.note}</div>
      </div>
    </Sheet>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   4. ShopSheet
   ══════════════════════════════════════════════════════════════════════ */
const SHOP_GROUPS = ['red', 'green', 'gold', 'amber'];

export function ShopSheet({ S, up, model, t, locale, onClose }) {
  const enabled = model.shopping.filter((i) => i.enabled);
  const buyKcal = round(enabled.reduce((s, i) => s + macroKcal(i.macro), 0));

  const setPlan = (key, patch) => up((s) => {
    const cur = s.shopPlan[key] || { enabled: true, target: 0, stock: 0 };
    return { shopPlan: { ...s.shopPlan, [key]: { ...cur, ...patch } } };
  });
  const clearStock = () => up((s) => {
    const next = { ...s.shopPlan };
    Object.keys(next).forEach((k) => { next[k] = { ...next[k], stock: 0 }; });
    return { shopPlan: next };
  });

  return (
    <Sheet title={t('shopHero')} sub={t('shopCopy')} onClose={onClose}>
      <div className="wrap">
        {[3, 5, 7, 10].map((v) => (
          <Chip key={v} on={S.shopDays === v} onClick={() => up({ shopDays: v })}>{v}d</Chip>
        ))}
      </div>
      <div className="grid3">
        <Pill k={t('cycle')} v={`${S.shopDays}d`} />
        <Pill k={t('products')} v={enabled.length} />
        <Pill k={t('kcal')} v={buyKcal} />
      </div>

      <OptionBlock title={t('directPlanTitle')}>
        {model.runPlan.length === 0 ? (
          <div className="stack" style={{ gap: 4 }}>
            <div className="wood-sign">{t('nothingToBuy')}</div>
            <div className="muted">{t('nothingToBuySub')}</div>
          </div>
        ) : (
          model.runPlan.map((item) => (
            <div key={item.key} className="row" style={{ gap: 10, padding: '8px 0' }}>
              <div className="num" style={{ fontSize: 12, opacity: .6, minWidth: 20 }}>{item.order}</div>
              <Sprite k={item.sourceKey || item.key} size={36} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{item.label}</div>
                <div className="muted">{item.reason}</div>
                <div className="muted num">{t('target')} {item.targetText} · {t('stock')} {item.stockText}</div>
              </div>
              <div className="big-num" style={{ fontSize: 22 }}>{item.buyText}</div>
            </div>
          ))
        )}
      </OptionBlock>

      <OptionBlock
        title={t('stockTune')}
        right={<Pbtn variant="ghost sm" onClick={clearStock}>{t('clearStock')}</Pbtn>}
      >
        <div className="muted">{t('stockTuneSub')}</div>
        {SHOP_GROUPS.map((tone) => (
          WEEKLY_SHOP_ITEMS.filter((i) => i.tone === tone).map((item) => {
            const it = localize(item, locale);
            const cur = S.shopPlan[item.key] || { enabled: true, target: item.defaultTarget, stock: 0 };
            return (
              <div key={item.key} className="stack" style={{ gap: 6, padding: '8px 0', borderTop: '1px solid var(--line, #ffe3da)' }}>
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <div className="row" style={{ gap: 8 }}>
                    <Sprite k={item.sourceKey || item.key} size={30} />
                    <span style={{ fontSize: 13 }}>{it.label}</span>
                  </div>
                  <Pbtn variant={cur.enabled ? 'ghost sm' : 'green sm'}
                    onClick={() => setPlan(item.key, { enabled: !cur.enabled })}>
                    {cur.enabled ? t('skip') : t('add')}
                  </Pbtn>
                </div>
                <div className="row" style={{ justifyContent: 'space-between', gap: 8 }}>
                  <span className="muted">{t('weeklyTarget')}</span>
                  <Stepper value={cur.target} onChange={(v) => setPlan(item.key, { target: v })}
                    step={item.step} max={item.max} unit={it.unit} />
                </div>
                <div className="row" style={{ justifyContent: 'space-between', gap: 8 }}>
                  <span className="muted">{t('stock')}</span>
                  <Stepper value={cur.stock} onChange={(v) => setPlan(item.key, { stock: v })}
                    step={item.step} max={item.max} unit={it.unit} />
                </div>
              </div>
            );
          })
        ))}
      </OptionBlock>
    </Sheet>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   5. DetailSheet
   ══════════════════════════════════════════════════════════════════════ */
export function DetailSheet({ S, up, model, t, onClose }) {
  const mr = model.macroReport;
  const balanced = model.potassium >= model.sodium;
  const carbHot = model.carbDay?.tone === 'red';
  return (
    <Sheet title={t('ledgerTitle')} onClose={onClose}>
      <div className="stack" style={{ gap: 0 }}>
        <LedgerRow label={t('breakfast')} macro={model.breakfastMacro} />
        <LedgerRow label={t('lunch')} macro={model.lunch} />
        <LedgerRow label={t('preTraining')} macro={model.preMacro} />
        <LedgerRow label={t('drinkElectrolyte')} macro={model.drinkMacro} />
        <LedgerRow label={t('snackMeal')} macro={model.snackMacro} />
        <LedgerRow label={t('dinner')} macro={model.dinner} strong />
      </div>

      <OptionBlock title={t('targetByWeight')}>
        <TargetFields S={S} up={up} t={t} withTdee />
      </OptionBlock>

      <OptionBlock title={t('structureTitle')}>
        <div className="grid2">
          <Pill k={t('proteinCalories')} v={`${mr.proteinPct}%`} sub={`${mr.proteinPerKg}g/kg · ${mr.proteinTargetPerKg}`} />
          <Pill k={t('carbCalories')} v={`${mr.carbPct}%`} sub={`${mr.carbPerKg}g/kg · ${mr.carbTargetPerKg}`} />
          <Pill k={t('fatCalories')} v={`${mr.fatPct}%`} sub={`${mr.fatPerKg}g/kg`} />
          <Pill k={t('carbJudge')} v={carbLabel(model, t)} sub={mr.carbDay.note} tone={carbHot ? 'hot' : ''} />
        </div>
      </OptionBlock>

      <OptionBlock title={t('electrolyte')}>
        <div className="grid2">
          <LabeledNum label={t('salt')} value={S.saltG} min={0} max={20} onChange={(v) => up({ saltG: v })} suffix="g" />
          <LabeledNum label={t('foodK')} value={S.foodK} min={0} max={8000} onChange={(v) => up({ foodK: v })} suffix="mg" />
        </div>
        <Pill k={t(balanced ? 'balanced' : 'lowPotassium')}
          v={`K ${round(model.potassium)}mg`}
          sub={`Na ${round(model.sodium)}mg`}
          tone={balanced ? 'good' : 'hot'} />
      </OptionBlock>
    </Sheet>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   6. CheatSheet
   ══════════════════════════════════════════════════════════════════════ */
export function CheatSheet({ S, up, model, t, locale, onClose }) {
  const cheatTotal = CHEAT_ITEMS.reduce((sum, it) => sum + (S.cheat[it.id] || 0) * it.kcal, 0);
  const todayTotal = round(model.total.kcal + cheatTotal);
  const cheatSurplus = round(model.total.kcal + cheatTotal - S.tdee);
  return (
    <Sheet title={t('cheatTitle')} onClose={onClose}>
      <div className="stack" style={{ gap: 2 }}>
        {CHEAT_ITEMS.map((it) => {
          const item = localize(it, locale);
          return (
            <div key={it.id} className="row" style={{ gap: 8, padding: '6px 0' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14 }}>{item.label}</div>
                <div className="muted num">{it.kcal} kcal</div>
              </div>
              <Stepper value={S.cheat[it.id] || 0} step={1} min={0} max={9}
                onChange={(v) => up((s) => ({ cheat: { ...s.cheat, [it.id]: v } }))} />
            </div>
          );
        })}
      </div>

      <div className="stack" style={{ gap: 2, textAlign: 'center' }}>
        <div className="big-num">{round(cheatTotal)}</div>
        <div className="muted">{t('cheatKcal')}</div>
      </div>

      <div className="grid3">
        <Pill k={t('todayTotal')} v={todayTotal} />
        <Pill k={t('tdee')} v={S.tdee} />
        <Pill k={t('deficit')} v={`${cheatSurplus > 0 ? '+' : ''}${cheatSurplus}`} tone={cheatSurplus > 0 ? 'hot' : 'good'} />
      </div>

      <Pbtn variant="ghost sm" onClick={() => up({ cheat: {} })}>{t('clear')}</Pbtn>
    </Sheet>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   7. SettingsSheet
   ══════════════════════════════════════════════════════════════════════ */
export function SettingsSheet({ S, up, t, locale, onClose }) {
  const p = S.targetProfile;
  const pTarget = round(p.bodyWeightKg * p.proteinPerKg, 1);
  const fTarget = round(p.bodyWeightKg * p.fatMinPerKg, 1);
  const carbRemainder = round(Math.max(0, (p.kcal - pTarget * 4 - fTarget * 9) / 4), 1);
  return (
    <Sheet title={t('advanced')} sub={t('advancedSub')} onClose={onClose}>
      <OptionBlock title={t('extras')}>
        {Object.entries(DINNER_EXTRAS).map(([key, item]) => {
          const it = localize(item, locale);
          return (
            <StepperRow key={key} k={key} name={it.label} unit={it.unit}
              value={S.extraCarbs[key] || 0} step={item.step} max={item.max}
              onChange={(v) => up((s) => ({ extraCarbs: { ...s.extraCarbs, [key]: v } }))} />
          );
        })}
      </OptionBlock>

      <OptionBlock title={t('beefFat')}>
        <div className="wrap">
          {[5, 9, 13, 18].map((v) => (
            <Chip key={v} on={S.beefFat === v} onClick={() => up({ beefFat: v })}>{v}</Chip>
          ))}
          <NumInput value={S.beefFat} onChange={(v) => up({ beefFat: v })} min={0} max={40} suffix="g/100g" />
        </div>
      </OptionBlock>

      <OptionBlock title={t('targetFormula')}>
        <TargetFields S={S} up={up} t={t} />
        <div className="muted num">
          {t('proteinTarget')} P {pTarget} · {t('fatTarget')} F {fTarget} · {t('carbRemainder')} C {carbRemainder}
        </div>
        <Pbtn variant="ghost sm" onClick={() => up({ targetProfile: { ...DEFAULT_TARGET_PROFILE } })}>
          {t('resetDefault')}
        </Pbtn>
      </OptionBlock>
    </Sheet>
  );
}
