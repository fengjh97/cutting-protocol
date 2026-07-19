import React, { useMemo, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { computeModel, buildDailyPlanPayload, isSnackActive } from './model.js';
import { tFor, localize } from './i18n.js';
import { DEFAULT_TARGET_PROFILE, DEFAULT_TDEE, WEEKLY_SHOP_ITEMS, PRE_ITEMS, DRINKS } from './data.js';
import { createDefaultShopPlan, round } from './nutritionSolver.js';
import { asset, Sprite } from './widgets.jsx';
import {
  IntakeSheet, DinnerSheet, StructureSheet, ShopSheet, DetailSheet, CheatSheet, SettingsSheet,
  itemDisplay,
} from './panels.jsx';

const initialState = {
  locale: 'zh',
  targetProfile: { ...DEFAULT_TARGET_PROFILE },
  tdee: DEFAULT_TDEE,
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
  beefFat: 5,
  pre: {},
  drinkKey: 'none',
  drinkMl: 0,
  saltG: 6.5,
  foodK: 2000,
  shopPlan: createDefaultShopPlan(WEEKLY_SHOP_ITEMS),
  shopDays: 7,
  lunchAdjustments: {},
  dinnerAdjustments: {},
  snack: { name: '手动加餐', p: 0, c: 0, f: 0, kcal: 0 },
  cheat: {},
};

const ui = (name) => asset(`ui/${name}.png`);

/* icon-tile helper */
function Tile({ name, size = 'm' }) {
  return <span className={`it ${size}`}><img src={ui(name)} alt="" /></span>;
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try { await navigator.clipboard.writeText(text); return; } catch { /* fall through */ }
  }
  const ta = document.createElement('textarea');
  ta.value = text; ta.setAttribute('readonly', '');
  ta.style.position = 'fixed'; ta.style.left = '-9999px'; ta.style.fontSize = '16px';
  document.body.appendChild(ta); ta.focus(); ta.select(); ta.setSelectionRange(0, text.length);
  try { if (!document.execCommand('copy')) throw new Error('copy failed'); }
  finally { document.body.removeChild(ta); }
}

const Press = ({ children, onClick, className, style }) => (
  <motion.div className={className} style={style} onClick={onClick}
    whileTap={{ scale: 0.975 }} transition={{ type: 'spring', stiffness: 500, damping: 30 }}>
    {children}
  </motion.div>
);

export default function AppMin() {
  const [S, setS] = useState(initialState);
  const [open, setOpen] = useState(null);
  const [toast, setToast] = useState('');
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef(null);

  const up = (patch) => setS((s) => ({ ...s, ...(typeof patch === 'function' ? patch(s) : patch) }));
  const t = useMemo(() => tFor(S.locale), [S.locale]);
  const model = useMemo(() => computeModel(S), [S]);
  const locale = S.locale;
  const L = (zh, ja) => (locale === 'ja' ? ja : zh);

  useEffect(() => {
    document.documentElement.lang = locale === 'ja' ? 'ja' : 'zh-CN';
    document.title = locale === 'ja' ? 'Cutting Lab · 今日のごはん' : 'Cutting Lab · 今日餐盘';
  }, [locale]);

  const flash = (msg) => { setToast(msg); setTimeout(() => setToast(''), 1600); };
  const sheetProps = { S, up, model, t, locale, flash };

  // ── hero derived values ──────────────────────────────────
  const dgood = model.deficit >= 0;
  const carbLabel = model.carbDay ? t(
    model.carbDay.label === '低碳' ? 'lowCarb' : model.carbDay.label === '中碳' ? 'mediumCarb' : 'highCarb'
  ) : '';
  const carbPerKg = round((model.total.c || 0) / Math.max(1, S.targetProfile.bodyWeightKg), 1);
  const dinnerRows = model.dinnerItems.map((item) => ({ ...itemDisplay(item, locale), qty: item.qty }));

  // ── intake summary ───────────────────────────────────────
  const preTags = Object.entries(S.pre)
    .filter(([, q]) => q > 0)
    .map(([k, q]) => ({ k, label: localize(PRE_ITEMS[k], locale)?.label || k, q, unit: localize(PRE_ITEMS[k], locale)?.unit || '' }));
  const drinkTag = S.drinkKey && S.drinkKey !== 'none'
    ? `${localize(DRINKS[S.drinkKey], locale)?.label || ''} ${S.drinkMl}ml` : null;
  const snackOn = isSnackActive(S.snack);

  const doCopy = async () => {
    const payload = { ...buildDailyPlanPayload(S, model), copiedAt: new Date().toISOString() };
    const text = JSON.stringify(payload, null, 2);
    try {
      await copyTextToClipboard(text);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      flash(L('复制被拦截，请长按手动复制', 'コピーがブロックされました。長押しでコピーしてください'));
    }
  };

  return (
    <div className="appmin">
      <div className="stagger">
        {/* top bar */}
        <div className="top">
          <div>
            <div className="day">{L('今日', '今日')}</div>
            <div className="date">{new Date().toLocaleDateString(locale === 'ja' ? 'ja-JP' : 'zh-CN', { month: 'long', day: 'numeric', weekday: 'short' })}</div>
          </div>
          <div className="rt">
            <div className="seg">
              <button className={locale === 'zh' ? 'on' : ''} onClick={() => up({ locale: 'zh' })}>中</button>
              <button className={locale === 'ja' ? 'on' : ''} onClick={() => up({ locale: 'ja' })}>日</button>
            </div>
            <Press><button className="tilebtn" onClick={() => setOpen('settings')} aria-label="settings"><img src={ui('gear')} alt="" /></button></Press>
          </div>
        </div>

        {/* HERO */}
        <Press className="card hero" onClick={() => setOpen('dinner')}>
          <div className="hlbl"><Tile name="plate" /><span className="t">{L('今晚就这样吃', '今夜はこう食べる')}</span></div>
          <div className="kwrap">
            <motion.span className="k"
              key={round(model.dinner.kcal)}
              initial={{ scale: 0.8, opacity: 0.4 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}>
              {round(model.dinner.kcal)}
            </motion.span>
            <span className="ku">kcal</span>
          </div>
          <div className="chips">
            <span className={`chip-s ${dgood ? 'ok' : 'hot'}`}>
              {L('距目标', '目標差')} · <span className="n">{dgood ? '−' : '+'}{Math.abs(model.deficit)}</span>
            </span>
            {carbLabel && <span className="chip-s hot">{carbLabel} · <span className="n">{carbPerKg}</span> g/kg</span>}
          </div>
          {dinnerRows.length > 0 && (
            <div className="plate">
              {dinnerRows.map((d, i) => (
                <div className="prow" key={i}>
                  <Sprite k={d.spriteKey} size={40} />
                  <span className="nm">{d.name}</span>
                  <span className="qt">{round(d.qty, 1)}<small>{d.unit}</small></span>
                </div>
              ))}
            </div>
          )}
          <div className="macros">
            <div className="mac p"><div className="mv">{round(model.dinner.p)}</div><div className="ml">{L('蛋白 P', 'たんぱく P')}</div></div>
            <div className="mac c"><div className="mv">{round(model.dinner.c)}</div><div className="ml">{L('碳水 C', '炭水 C')}</div></div>
            <div className="mac f"><div className="mv">{round(model.dinner.f)}</div><div className="ml">{L('脂肪 F', '脂質 F')}</div></div>
          </div>
        </Press>

        {/* BIG COPY */}
        <motion.button className={`copybtn ${copied ? 'done' : ''}`} onClick={doCopy}
          whileTap={{ scale: 0.955 }} transition={{ type: 'spring', stiffness: 500, damping: 30 }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2.5" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
          {copied ? L('✓ 已复制', '✓ コピー済み') : L('复制今日计划', '今日の計画をコピー')}
        </motion.button>

        {/* L1 每日输入 */}
        <div className="seclbl">{L('每日输入', '毎日の入力')}</div>
        <Press className="card sum" onClick={() => setOpen('intake')}>
          <div className="sh"><Tile name="notebook" size="l" /><span className="st">{L('今日已吃', '食べたもの')}</span><span className="go">›</span></div>
          <div className="sd">
            {L('早餐', '朝食')} {round(model.breakfastMacro.kcal)} kcal · {L('午餐', '昼食')} {round(model.lunch.kcal)} kcal（{S.lunchMode === 'planned' ? L('计划', '計画') : L('记录', '記録')}）· {S.mealSplitPct}/{100 - S.mealSplitPct}
          </div>
          <div className="tags">
            {preTags.map((p) => (
              <span className="tg" key={p.k}><Sprite k={p.k} size={22} />{p.label} ×{round(p.q)}</span>
            ))}
            {drinkTag && <span className="tg"><Sprite k={S.drinkKey} size={22} />{drinkTag}</span>}
            {snackOn && <span className="tg plain">＋ {L('加餐', '間食')} {round(S.snack.kcal)} kcal</span>}
            {preTags.length === 0 && !drinkTag && !snackOn && <span className="tg plain">＋ {L('无补给', '補給なし')}</span>}
          </div>
        </Press>

        {/* L2 secondary */}
        <div className="duo">
          <Press className="card" onClick={() => setOpen('shop')}><Tile name="basket" size="l" /><div className="dt">{L('采购', '買い物')}</div><div className="ds">{L('本周', '今週')} {S.shopDays} {L('天', '日')}</div></Press>
          <Press className="card" onClick={() => setOpen('cheat')}><Tile name="donut" size="l" /><div className="dt">{L('放纵', 'ごほうび')}</div><div className="ds">{Object.values(S.cheat || {}).some((v) => v > 0) ? L('已记录', '記録あり') : L('今天没作弊', '今日はなし')}</div></Press>
        </div>

        {/* L3 reference + settings */}
        <div className="seclbl">{L('参考 · 设置', '参考 · 設定')}</div>
        <div className="card list">
          <Press className="li" onClick={() => setOpen('detail')}><Tile name="receipt" /><span className="it2">{L('营养明细', '栄養の詳細')}</span><span className="iv">{L('账本拆解', '内訳')}</span><span className="go">›</span></Press>
          <Press className="li" onClick={() => setOpen('structure')}><Tile name="barchart" /><span className="it2">{L('今日结构', '今日の構成')}</span><span className="iv">{L('节奏一览', 'リズム')}</span><span className="go">›</span></Press>
          <Press className="li" onClick={() => setOpen('settings')}><Tile name="gear" /><span className="it2">{L('设置', '設定')}</span><span className="iv">{L('体重 · 公式 · 牛肉脂肪', '体重 · 式 · 脂質')}</span><span className="go">›</span></Press>
        </div>
      </div>

      {/* sheets (reused 1:1) */}
      {open === 'intake' && <IntakeSheet {...sheetProps} onClose={() => setOpen(null)} />}
      {open === 'dinner' && <DinnerSheet {...sheetProps} onClose={() => setOpen(null)} />}
      {open === 'structure' && <StructureSheet {...sheetProps} onClose={() => setOpen(null)} />}
      {open === 'shop' && <ShopSheet {...sheetProps} onClose={() => setOpen(null)} />}
      {open === 'detail' && <DetailSheet {...sheetProps} onClose={() => setOpen(null)} />}
      {open === 'cheat' && <CheatSheet {...sheetProps} onClose={() => setOpen(null)} />}
      {open === 'settings' && <SettingsSheet {...sheetProps} onClose={() => setOpen(null)} />}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
