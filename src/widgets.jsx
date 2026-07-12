import React from 'react';
import { sfx } from './sound.js';
import { round } from './nutritionSolver.js';

const BASE = import.meta.env.BASE_URL || './';
export const asset = (p) => `${BASE}assets/${p}`;

/* data-key -> food sprite filename */
export const SPRITE = {
  // proteins
  beef: 'beef', chicken: 'chicken_cooked', duck: 'duck', kfc: 'kfc',
  // carbs
  pasta: 'pasta', soba: 'soba', nissin: 'cupnoodle', fresh_noodle: 'freshnoodle',
  banana: 'banana', rice_dry: 'rice', pho: 'ricenoodle', bifun: 'driedricenoodle',
  // fats
  egg_fried: 'egg', sauce: 'garlicoil', olive: 'oliveoil', nuts: 'nuts',
  cheese_bite: 'cheese', avocado: 'avocado',
  // extras
  apple: 'apple', kiwi: 'kiwi', pineapple: 'pineapple', yogurt: 'yogurt',
  // tally / pre
  egg: 'egg', onigiri: 'onigiri', rice: 'rice', gold_bread: 'bread',
  // drinks
  tomato: 'tomatojuice', yasai: 'vegjuice',
};

export function Sprite({ k, size = 46, className = '', style }) {
  if (k === 'none' || !k) return <span style={{ width: size, height: size, display: 'inline-block', textAlign: 'center', lineHeight: `${size}px`, fontSize: size * 0.5 }}>✕</span>;
  const file = SPRITE[k] || k;
  return (
    <img
      className={`sprite ${className}`}
      src={asset(`food/${file}.png`)}
      alt=""
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: 'contain', ...style }}
      onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
    />
  );
}

export function Pbtn({ variant = '', sound = 'tap', onClick, className = '', children, ...rest }) {
  return (
    <button
      className={`pbtn ${variant} ${className}`}
      onClick={(e) => { sfx(sound); onClick && onClick(e); }}
      {...rest}
    >{children}</button>
  );
}

export function Chip({ on, onClick, children }) {
  return (
    <button className={`chip ${on ? 'on' : ''}`} onClick={() => { sfx('tap'); onClick && onClick(); }}>
      {children}
    </button>
  );
}

export function Stepper({ value, onChange, step = 1, min = 0, max = Infinity, unit = '' }) {
  const dec = () => { const v = Math.max(min, round((value || 0) - step, step < 1 ? 2 : 0)); if (v !== value) { sfx('minus'); onChange(v); } };
  const inc = () => { const v = Math.min(max, round((value || 0) + step, step < 1 ? 2 : 0)); if (v !== value) { sfx('plus'); onChange(v); } };
  return (
    <div className="stepper">
      <button className="pbtn sm" onClick={dec} aria-label="-">–</button>
      <div className="val num">{round(value || 0, step < 1 ? 1 : 0)}{unit && <span style={{ fontSize: 10, opacity: .7 }}>{unit}</span>}</div>
      <button className="pbtn sm" onClick={inc} aria-label="+">+</button>
    </div>
  );
}

/* Robust numeric input.
   Bug this avoids: clearing the field must NOT snap back to `min` mid-edit,
   0 must be enterable, and partial input ("1.", "", "-") must be allowed while
   typing. We keep a local text buffer; clamp only on blur; live-propagate only
   when the value is already valid & in range so the model never sees garbage. */
export function NumInput({ value, onChange, min = 0, max = 99999, suffix = '', width = 90, step }) {
  const [buf, setBuf] = React.useState(value == null ? '' : String(value));
  const focused = React.useRef(false);
  const decimals = (step && step < 1) ? 2 : 0;

  React.useEffect(() => {
    if (!focused.current) setBuf(value == null || value === '' ? '' : String(value));
  }, [value]);

  const clampCommit = () => {
    focused.current = false;
    if (buf === '' || buf === '-' || buf === '.') { onChange(min); setBuf(String(min)); return; }
    let n = Number(buf);
    if (Number.isNaN(n)) { setBuf(value == null ? '' : String(value)); return; }
    n = Math.max(min, Math.min(max, round(n, decimals)));
    onChange(n); setBuf(String(n));
  };

  return (
    <div className="row" style={{ gap: 4 }}>
      <input
        className="num num-field"
        type="text"
        inputMode={decimals ? 'decimal' : 'numeric'}
        value={buf}
        onFocus={() => { focused.current = true; }}
        onChange={(e) => {
          const t = e.target.value;
          if (!/^-?\d*\.?\d*$/.test(t)) return;      // keep only valid partial numbers; allow ''
          setBuf(t);
          if (t === '' || t === '-' || t === '.') return;   // don't clamp while clearing
          const n = Number(t);
          if (!Number.isNaN(n) && n >= min && n <= max) onChange(n); // live only when in range
        }}
        onBlur={clampCommit}
        aria-label="number"
        style={{ width }}
      />
      {suffix && <span className="muted">{suffix}</span>}
    </div>
  );
}

export function MacroBar({ label, value, target, color = 'var(--tone-green)', unit = 'g' }) {
  const pct = Math.min(135, target > 0 ? (value / target) * 100 : 0);
  const tol = unit ? Math.max(6, target * 0.08) : Math.max(80, target * 0.05);
  const ok = Math.abs(value - target) <= tol;
  return (
    <div className="stack" style={{ gap: 4 }}>
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <span style={{ fontSize: 13 }}>{label}</span>
        <span className="num" style={{ fontSize: 13 }}>
          <b style={{ color: ok ? 'var(--tone-green)' : 'var(--ink)' }}>{round(value, unit === 'g' && value < 100 ? 1 : 0)}</b>
          <span className="muted"> / {round(target)}{unit}</span>
        </span>
      </div>
      <div className="macrobar tick" style={{ ['--tickpos']: `${Math.min(100, pct)}%` }}>
        <i style={{ width: `${Math.min(100, pct)}%`, color }} />
      </div>
    </div>
  );
}

export function Pill({ k, v, sub, tone = '' }) {
  return (
    <div className={`pill ${tone}`}>
      <div className="k">{k}</div>
      <div className="v num">{v}</div>
      {sub && <div className="k">{sub}</div>}
    </div>
  );
}

export function OptionBlock({ title, right, children }) {
  return (
    <div className="stack" style={{ gap: 8 }}>
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <span className="wood-sign">{title}</span>
        {right}
      </div>
      {children}
    </div>
  );
}

export function Segmented({ options, value, onChange }) {
  return (
    <div className="wrap" style={{ gap: 6 }}>
      {options.map((o) => (
        <button
          key={o.value}
          className={`pbtn sm ${value === o.value ? 'sel' : 'ghost'}`}
          onClick={() => { sfx('select'); onChange(o.value); }}
        >{o.label}</button>
      ))}
    </div>
  );
}

/* selectable food card (protein/carb/fat pickers) */
export function FoodCard({ k, name, sub, on, onClick }) {
  return (
    <button className={`food-card ${on ? 'on' : ''}`} onClick={() => { sfx('select'); onClick && onClick(); }}>
      <Sprite k={k} size={46} className="anim-bob" style={{ animationDelay: `${(k.length % 5) * 0.2}s` }} />
      <div className="nm">{name}</div>
      {sub && <div className="sub">{sub}</div>}
    </button>
  );
}

/* generated food row with qty + tune */
export function FoodRow({ k, name, qty, unit, macro, onTune }) {
  return (
    <div className="row" style={{ gap: 8, padding: '6px 0' }}>
      <Sprite k={k} size={38} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13 }}>{name}</div>
        <div className="muted num">P{round(macro.p)} C{round(macro.c)} F{round(macro.f)} · {round(macro.kcal)} kcal</div>
      </div>
      {onTune && (
        <div className="row" style={{ gap: 4 }}>
          <button className="pbtn sm" onClick={() => { sfx('minus'); onTune(-1); }}>–</button>
          <div className="val num" style={{ minWidth: 52 }}>{round(qty, 1)}<span style={{ fontSize: 10 }}>{unit}</span></div>
          <button className="pbtn sm" onClick={() => { sfx('plus'); onTune(1); }}>+</button>
        </div>
      )}
      {!onTune && <div className="num" style={{ fontSize: 13 }}>{round(qty, 1)}{unit}</div>}
    </div>
  );
}

export function Sheet({ title, sub, onClose, children }) {
  return (
    <>
      <div className="sheet-scrim" onClick={() => { sfx('close'); onClose(); }} />
      <div className="sheet" role="dialog" aria-modal="true">
        <div className="sheet-title">
          <div>
            <h2>{title}</h2>
            {sub && <div className="muted">{sub}</div>}
          </div>
          <button className="pbtn sm" onClick={() => { sfx('close'); onClose(); }} aria-label="close">✕</button>
        </div>
        <div className="stack">{children}</div>
      </div>
    </>
  );
}
