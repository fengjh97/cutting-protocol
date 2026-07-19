import React, { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import { computeModel } from './model.js';
import { tFor } from './i18n.js';
import { DEFAULT_TARGET_PROFILE, DEFAULT_TDEE, WEEKLY_SHOP_ITEMS } from './data.js';
import { createDefaultShopPlan, round } from './nutritionSolver.js';
import { sfx, toggleMusic, primeAudio } from './sound.js';
import { asset, SPRITE, Pill } from './widgets.jsx';
import {
  IntakeSheet, DinnerSheet, StructureSheet, ShopSheet, DetailSheet, CheatSheet, SettingsSheet,
} from './panels.jsx';
import { createScene } from './scene3d.js';

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

const spriteUrl = (k) => asset(`food/${SPRITE[k] || k}.png`);

/* the 6 primary functions arranged on the ring + settings gear.
   `food` = signature sprite the particles morph into on hover. */
const NODES = [
  { id: 'intake',    food: 'beef',    label: { zh: '今日已吃', ja: '食べたもの' }, sub: { zh: '冰箱 · 记录', ja: '冷蔵庫 · 記録' } },
  { id: 'dinner',    food: 'pasta',   label: { zh: '今晚就这样吃', ja: '今夜の夕食' }, sub: { zh: '灶台 · 晚餐', ja: 'コンロ · 夕食' } },
  { id: 'structure', food: 'onigiri', label: { zh: '今日结构', ja: '今日の構成' }, sub: { zh: '黑板 · 一览', ja: '黒板 · 一覧' } },
  { id: 'shop',      food: 'apple',   label: { zh: '采购清单', ja: '買い物' },     sub: { zh: '篮子 · 一周', ja: 'かご · 一週間' } },
  { id: 'detail',    food: 'banana',  label: { zh: '营养明细', ja: '栄養の詳細' }, sub: { zh: '账本 · 拆解', ja: '帳簿 · 内訳' } },
  { id: 'cheat',     food: 'kfc',     label: { zh: '放纵一下', ja: 'ごほうび' },   sub: { zh: '摇椅 · 作弊餐', ja: '休憩 · チート' } },
];

// ring geometry: 6 nodes evenly, starting at top
const RING = NODES.map((n, i) => {
  const ang = (-90 + i * 60) * (Math.PI / 180);
  return { ...n, cos: Math.cos(ang), sin: Math.sin(ang) };
});

export default function App3D() {
  const [S, setS] = useState(initialState);
  const [open, setOpen] = useState(null);
  const [music, setMusic] = useState(false);
  const [toast, setToast] = useState('');
  const [booted, setBooted] = useState(false);

  const stageRef = useRef(null);
  const sceneRef = useRef(null);

  const up = (patch) => setS((s) => ({ ...s, ...(typeof patch === 'function' ? patch(s) : patch) }));
  const t = useMemo(() => tFor(S.locale), [S.locale]);
  const model = useMemo(() => computeModel(S), [S]);
  const locale = S.locale;

  useEffect(() => {
    document.documentElement.lang = locale === 'ja' ? 'ja' : 'zh-CN';
    document.title = locale === 'ja' ? 'Cutting Lab · 今日のごはん (3D)' : 'Cutting Lab · 今日餐盘 (3D)';
  }, [locale]);

  // ── mount the 3D scene once ──────────────────────────────────
  useEffect(() => {
    if (!stageRef.current) return;
    const scene = createScene(stageRef.current);
    sceneRef.current = scene;
    const t0 = setTimeout(() => setBooted(true), 500);

    const onResize = () => scene.resize();
    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -((e.clientY / window.innerHeight) * 2 - 1);
      scene.setPointer(nx, ny);
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onMove);
    return () => {
      clearTimeout(t0);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onMove);
      scene.dispose();
    };
  }, []);

  const morph = useCallback((food) => {
    if (food && sceneRef.current) sceneRef.current.morphTo(spriteUrl(food));
  }, []);
  const resetMorph = useCallback(() => {
    if (!open && sceneRef.current) sceneRef.current.reset();
  }, [open]);

  const openNode = (n) => {
    sfx('open');
    setOpen(n.id);
    if (n.food) morph(n.food);
  };
  const closeSheet = () => {
    sfx('close');
    setOpen(null);
    if (sceneRef.current) sceneRef.current.reset();
  };

  const flash = (msg) => { setToast(msg); setTimeout(() => setToast(''), 1600); };
  const sheetProps = { S, up, model, t, locale, flash };

  const carbLabel = model.carbDay ? t(
    model.carbDay.label === '低碳' ? 'lowCarb' : model.carbDay.label === '中碳' ? 'mediumCarb' : 'highCarb'
  ) : '';
  const carbPerKg = round((model.total.c || 0) / Math.max(1, S.targetProfile.bodyWeightKg), 1);

  return (
    <div className="app3d">
      {/* boot splash */}
      <div className={`boot ${booted ? 'hide' : ''}`}>
        <div>
          <div className="ring-spin" />
          <div className="bt">Cutting Lab · 3D</div>
        </div>
      </div>

      {/* full-viewport 3D stage */}
      <div className="stage3d" ref={stageRef} />
      <div className="stage-vignette" />

      {/* top bar */}
      <div className="appbar">
        <div className="brand">
          <img className="logo" src={asset('char/chef_idle.png')} alt="" />
          <div>
            <b>Cutting Lab</b>
            <span>{t('appSub')}</span>
          </div>
        </div>
        <div className="row" style={{ gap: 6 }}>
          {/* device switch: 桌面端(this 3D build) ⇄ 手机端(pixel build at site root) */}
          <div className="row" style={{ gap: 0 }}>
            <a className="pbtn sm ghost" href="../" onClick={() => sfx('tap')}
              aria-label={locale === 'ja' ? 'モバイル' : '手机端'}
              title={locale === 'ja' ? 'モバイル版へ' : '切换到手机端'}
              style={{ textDecoration: 'none', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>📱</a>
            <button className="pbtn sm sel"
              aria-label={locale === 'ja' ? 'デスクトップ' : '桌面端'}
              title={locale === 'ja' ? 'デスクトップ 3D(表示中)' : '桌面端 3D · 当前'}
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>🖥</button>
          </div>
          <button className={`pbtn sm ${music ? 'on' : 'ghost'}`}
            onClick={() => { primeAudio(); const on = toggleMusic(); setMusic(on); sfx('tap'); }}
            aria-label="music" title="music">♪</button>
          <button className={`pbtn sm ${locale === 'zh' ? 'sel' : 'ghost'}`}
            onClick={() => { sfx('tap'); up({ locale: 'zh' }); }}>中文</button>
          <button className={`pbtn sm ${locale === 'ja' ? 'sel' : 'ghost'}`}
            onClick={() => { sfx('tap'); up({ locale: 'ja' }); }}>日本語</button>
          <button className="pbtn sm ghost"
            onClick={() => { sfx('open'); setOpen('settings'); }}
            aria-label={locale === 'ja' ? '設定' : '设置'} title="settings">⚙</button>
        </div>
      </div>

      {/* ring nav nodes */}
      <div className="ring">
        {RING.map((n) => (
          <button
            key={n.id}
            className="node"
            style={{
              left: `calc(50% + (${n.cos} * min(34vw, 340px)))`,
              top: `calc(50% + (${n.sin} * min(32vh, 300px)))`,
            }}
            onMouseEnter={() => morph(n.food)}
            onMouseLeave={resetMorph}
            onFocus={() => morph(n.food)}
            onBlur={resetMorph}
            onClick={() => openNode(n)}
            aria-label={n.label[locale]}
          >
            <span className="node-ic">
              <img src={spriteUrl(n.food)} alt="" />
            </span>
            <span className="node-lb">{n.label[locale]}</span>
            <span className="node-sub">{n.sub[locale]}</span>
          </button>
        ))}
      </div>
      <div className="stage-hint">
        {locale === 'ja' ? '節点にホバー → 粒子が食材に変わる · タップで詳細' : '悬停节点 · 粒子化作食材 · 点击展开'}
      </div>

      {/* HUD ribbon */}
      <div className="hud">
        <div className="grid3">
          <Pill k={t('dinnerKcal')} v={round(model.dinner.kcal)} />
          <Pill k={t('deficit')}
            v={`${model.deficit >= 0 ? '' : '+'}${model.deficit >= 0 ? '-' : ''}${Math.abs(model.deficit)}`}
            tone={model.deficit >= 0 ? 'good' : 'hot'}
            sub={`${round(model.total.kcal)} / ${S.targetProfile.kcal}`} />
          <Pill k={carbLabel} v={`C ${carbPerKg}`} sub="g/kg" />
        </div>
      </div>

      {toast && <div className="toast">{toast}</div>}

      {/* panels (reused 1:1 from the pixel build) */}
      {open === 'intake'    && <IntakeSheet    {...sheetProps} onClose={closeSheet} />}
      {open === 'dinner'    && <DinnerSheet    {...sheetProps} onClose={closeSheet} />}
      {open === 'structure' && <StructureSheet {...sheetProps} onClose={closeSheet} />}
      {open === 'shop'      && <ShopSheet      {...sheetProps} onClose={closeSheet} />}
      {open === 'detail'    && <DetailSheet    {...sheetProps} onClose={closeSheet} />}
      {open === 'cheat'     && <CheatSheet     {...sheetProps} onClose={closeSheet} />}
      {open === 'settings'  && <SettingsSheet  {...sheetProps} onClose={closeSheet} />}
    </div>
  );
}
