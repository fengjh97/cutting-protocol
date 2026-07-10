import React, { useMemo, useState, useEffect } from 'react';
import { computeModel } from './model.js';
import { tFor } from './i18n.js';
import { DEFAULT_TARGET_PROFILE, DEFAULT_TDEE, WEEKLY_SHOP_ITEMS } from './data.js';
import { createDefaultShopPlan, round } from './nutritionSolver.js';
import { sfx, toggleMusic, isMusicOn, primeAudio } from './sound.js';
import { asset } from './widgets.jsx';
import {
  IntakeSheet, DinnerSheet, StructureSheet, ShopSheet, DetailSheet, CheatSheet, SettingsSheet,
} from './panels.jsx';

const initialState = {
  locale: 'zh',
  targetProfile: { ...DEFAULT_TARGET_PROFILE },
  tdee: DEFAULT_TDEE,
  lunchMode: 'planned',
  lunchKcal: 800,
  tally: {},
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
  saltG: 6.5,
  foodK: 2000,
  shopPlan: createDefaultShopPlan(WEEKLY_SHOP_ITEMS),
  shopDays: 7,
  lunchAdjustments: {},
  dinnerAdjustments: {},
  snack: { name: '手动加餐', p: 0, c: 0, f: 0, kcal: 0 },
  cheat: {},
};

/* furniture hotspots as % of the 3:4 kitchen scene */
const HOTSPOTS = [
  { id: 'intake',    label: { zh: '冰箱 · 今日已吃', ja: '冷蔵庫 · 食べたもの' }, box: { left: '1%',  top: '39%', width: '21%', height: '36%' } },
  { id: 'dinner',    label: { zh: '灶台 · 今晚就这样吃', ja: 'コンロ · 夕食' },   box: { left: '22%', top: '43%', width: '26%', height: '31%' } },
  { id: 'structure', label: { zh: '黑板 · 今日结构', ja: '黒板 · 今日の構成' },   box: { left: '46%', top: '20%', width: '17%', height: '22%' } },
  { id: 'shop',      label: { zh: '篮子 · 采购', ja: 'かご · 買い物' },          box: { left: '53%', top: '61%', width: '21%', height: '18%' } },
  { id: 'detail',    label: { zh: '账本 · 明细', ja: '帳簿 · 詳細' },           box: { left: '27%', top: '73%', width: '22%', height: '13%' } },
  { id: 'cheat',     label: { zh: '摇椅 · 放松', ja: 'ロッキングチェア · ごほうび' }, box: { left: '77%', top: '50%', width: '22%', height: '35%' } },
];

function timeOfDay() {
  const h = new Date().getHours();
  if (h >= 6 && h < 16) return 'day';
  if (h >= 16 && h < 19) return 'dusk';
  return 'night';
}

export default function App() {
  const [S, setS] = useState(initialState);
  const [open, setOpen] = useState(null);
  const [music, setMusic] = useState(false);
  const [tod, setTod] = useState(timeOfDay());
  const [toast, setToast] = useState('');

  const up = (patch) => setS((s) => ({ ...s, ...(typeof patch === 'function' ? patch(s) : patch) }));
  const t = useMemo(() => tFor(S.locale), [S.locale]);
  const model = useMemo(() => computeModel(S), [S]);
  const locale = S.locale;

  useEffect(() => {
    document.documentElement.lang = locale === 'ja' ? 'ja' : 'zh-CN';
    document.title = locale === 'ja' ? 'Cutting Lab · 今日のごはん' : 'Cutting Lab · 今日餐盘';
  }, [locale]);

  useEffect(() => {
    const id = setInterval(() => setTod(timeOfDay()), 60000);
    return () => clearInterval(id);
  }, []);

  const flash = (msg) => { setToast(msg); setTimeout(() => setToast(''), 1600); };

  const sceneImg = asset(`scene/kitchen_${tod}.webp`);
  const carbLabel = model.carbDay ? t(
    model.carbDay.label === '低碳' ? 'lowCarb' : model.carbDay.label === '中碳' ? 'mediumCarb' : 'highCarb'
  ) : '';
  const carbPerKg = round((model.total.c || 0) / Math.max(1, S.targetProfile.bodyWeightKg), 1);

  const sheetProps = { S, up, model, t, locale, flash };

  return (
    <div className="app">
      {/* top bar */}
      <div className="appbar">
        <div className="brand">
          <img className="logo pix" src={asset('char/chef_idle.png')} alt="" />
          <div>
            <b>Cutting Lab</b>
            <span>{t('appSub')}</span>
          </div>
        </div>
        <div className="row" style={{ gap: 6 }}>
          <button className={`pbtn sm ${music ? 'on' : 'ghost'}`}
            onClick={() => { primeAudio(); const on = toggleMusic(); setMusic(on); sfx('tap'); }}
            aria-label="music" title="music">♪</button>
          <button className={`pbtn sm ${locale === 'zh' ? 'sel' : 'ghost'}`} onClick={() => { sfx('tap'); up({ locale: 'zh' }); }}>中文</button>
          <button className={`pbtn sm ${locale === 'ja' ? 'sel' : 'ghost'}`} onClick={() => { sfx('tap'); up({ locale: 'ja' }); }}>日本語</button>
        </div>
      </div>

      <div className="screen stack">
        {/* HUD ribbon — the always-visible key numbers */}
        <div className="grid3">
          <Pill k={t('dinnerKcal')} v={round(model.dinner.kcal)} />
          <Pill k={t('deficit')} v={`${model.deficit >= 0 ? '' : '+'}${model.deficit >= 0 ? '-' : ''}${Math.abs(model.deficit)}`}
            tone={model.deficit >= 0 ? 'good' : 'hot'} sub={`${round(model.total.kcal)} / ${S.targetProfile.kcal}`} />
          <Pill k={carbLabel} v={`C ${carbPerKg}`} sub="g/kg" />
        </div>

        {/* HUB scene */}
        <div className="hub">
          <img className="hub-bg" src={sceneImg} alt="" />
          {HOTSPOTS.map((h) => (
            <button key={h.id} className="hub-hot" style={h.box}
              onClick={() => { sfx('open'); setOpen(h.id); }} aria-label={h.label[locale]}>
              <span className="tag">{h.label[locale]}</span>
            </button>
          ))}
          {/* chef */}
          <img className="hub-chef pix" src={asset('char/chef_idle.png')} alt=""
            style={{ left: '5%', top: '55%', width: '23%' }} />
          {/* fx overlays */}
          <img className="hub-fx anim-steam pix" src={asset('fx/fx_steam.png')} alt=""
            style={{ left: '30%', top: '36%', width: '7%' }} />
          {tod !== 'night' && (
            <img className="hub-fx anim-fire pix" src={asset('fx/fx_fire.png')} alt=""
              style={{ left: '28%', top: '58%', width: '8%' }} />
          )}
          <img className="hub-fx anim-twinkle pix" src={asset('fx/fx_sparkle.png')} alt=""
            style={{ left: '58%', top: '30%', width: '5%' }} />
          {/* settings gear (floating) */}
          <button className="hub-hot" style={{ right: '2%', top: '2%', width: '13%', height: '10%', left: 'auto' }}
            onClick={() => { sfx('open'); setOpen('settings'); }} aria-label={locale === 'ja' ? '設定' : '设置'}>
            <span className="wood-sign" style={{ fontSize: 16 }}>⚙</span>
          </button>
        </div>

        <div className="muted" style={{ textAlign: 'center' }}>
          {locale === 'ja' ? '家具をタップして操作 · 窓の外は時間で変わる' : '点家具进各功能 · 窗外随时间变化'}
        </div>
      </div>

      {open === 'intake'    && <IntakeSheet    {...sheetProps} onClose={() => setOpen(null)} />}
      {open === 'dinner'    && <DinnerSheet    {...sheetProps} onClose={() => setOpen(null)} />}
      {open === 'structure' && <StructureSheet {...sheetProps} onClose={() => setOpen(null)} />}
      {open === 'shop'      && <ShopSheet      {...sheetProps} onClose={() => setOpen(null)} />}
      {open === 'detail'    && <DetailSheet    {...sheetProps} onClose={() => setOpen(null)} />}
      {open === 'cheat'     && <CheatSheet     {...sheetProps} onClose={() => setOpen(null)} />}
      {open === 'settings'  && <SettingsSheet  {...sheetProps} onClose={() => setOpen(null)} />}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

function Pill({ k, v, sub, tone = '' }) {
  return (
    <div className={`pill ${tone}`}>
      <div className="k">{k}</div>
      <div className="v num">{v}</div>
      {sub && <div className="k num">{sub}</div>}
    </div>
  );
}
