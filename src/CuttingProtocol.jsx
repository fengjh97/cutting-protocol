import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  Activity,
  Apple,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Dumbbell,
  Flame,
  Gauge,
  Goal,
  Leaf,
  Minus,
  Plus,
  RotateCcw,
  Settings2,
  ShoppingBasket,
  Sparkles,
  Utensils,
  X,
  Zap,
} from 'lucide-react';

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;
const generated = (name) => asset(`generated/${name}`);

const DEFAULT_TARGETS = { p: 140, c: 225, f: 60, kcal: 2000 };
const DEFAULT_TDEE = 2900;
const PROTEIN_FLOOR = 135;

const CARB_PLANS = {
  pasta: {
    name: '意面 · Garlic oil',
    short: '意面',
    sub: '力量日最爽',
    unit: 'g',
    step: 10,
    perUnit: { p: 0.12, c: 0.71, f: 0.015 },
    kcalUnit: 3.55,
    color: '#ffb55c',
  },
  soba: {
    name: '荞麦面 · Soba',
    short: '荞麦',
    sub: '清爽低负担',
    unit: 'g',
    step: 10,
    perUnit: { p: 0.14, c: 0.66, f: 0.023 },
    kcalUnit: 3.44,
    color: '#a8d46f',
  },
  nissin: {
    name: '日清非油炸',
    short: '日清',
    sub: '懒人汤面',
    unit: '包',
    step: 1,
    perUnit: { p: 6.7, c: 55, f: 4.9 },
    kcalUnit: 291,
    color: '#ff766f',
  },
  pho: {
    name: '越南米粉',
    short: '米粉',
    sub: '低脂换口味',
    unit: '包',
    step: 1,
    perUnit: { p: 4, c: 43, f: 2 },
    kcalUnit: 210,
    color: '#7bd6d0',
  },
  bifun: {
    name: '纯干米粉',
    short: '干米粉',
    sub: '纯碳水补满',
    unit: 'g',
    step: 10,
    perUnit: { p: 0.06, c: 0.79, f: 0.005 },
    kcalUnit: 3.45,
    color: '#f7df77',
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
  },
  oikos: {
    label: 'Oikos 高蛋白酸奶',
    short: 'Oikos',
    tag: 'per cup',
    unit: '個',
    step: 1,
    p: 12,
    c: 5,
    f: 0,
    max: 8,
    note: '零脂补蛋白',
  },
};

const FAT_SOURCES = {
  egg_fried: { label: '煎蛋', short: '煎蛋', unit: '个', step: 1, p: 6, c: 0.4, f: 7, max: 6 },
  sauce: { label: 'ペペロン酱', short: '蒜油酱', unit: '包', step: 1, p: 0.9, c: 1.5, f: 10, max: 2 },
  olive: { label: '橄榄油', short: '橄榄油', unit: '小勺', step: 1, p: 0, c: 0, f: 4.5, max: 6 },
  nuts: { label: '素焼きナッツ', short: '坚果', unit: '10g', step: 1, p: 2, c: 2, f: 5, max: 5 },
  avocado: { label: 'アボカド', short: '牛油果', unit: '半个', step: 1, p: 1, c: 4, f: 15, max: 2 },
};

const DINNER_EXTRAS = {
  banana: { label: '香蕉', unit: '根', step: 1, max: 4, p: 1, c: 27, f: 0.3 },
  apple: { label: '苹果', unit: '个', step: 1, max: 3, p: 0.4, c: 35, f: 0.3 },
  kiwi: { label: '奇异果', unit: '个', step: 1, max: 4, p: 1, c: 14, f: 0.2 },
  pineapple: { label: '切块菠萝 240g', unit: '盒', step: 1, max: 2, p: 1.44, c: 31.2, f: 0.24 },
  yogurt: { label: '无糖酸奶', unit: 'g', step: 50, max: 400, p: 0.036, c: 0.049, f: 0.03 },
};

const TALLY_ITEMS = {
  chicken: { label: '鸡胸', unit: '块', step: 1, max: 10, p: 22, c: 1, f: 2 },
  egg: { label: '全蛋', unit: '个', step: 1, max: 10, p: 6, c: 0.5, f: 5 },
  oikos: { label: 'Oikos', unit: '個', step: 1, max: 6, p: 12, c: 5, f: 0 },
  onigiri: { label: '饭团', unit: '个', step: 1, max: 6, p: 3, c: 39, f: 0.5 },
  nissin: { label: '日清面', unit: '包', step: 1, max: 4, p: 6.7, c: 55, f: 4.9 },
  rice: { label: '米饭', unit: 'g', step: 50, max: 1000, p: 0.026, c: 0.28, f: 0.003 },
  beef: { label: '牛肉', unit: 'g', step: 50, max: 600, p: 0.19, c: 0, f: 0.072 },
  pasta: { label: '干意面', unit: 'g', step: 50, max: 300, p: 0.12, c: 0.71, f: 0.015 },
  banana: { label: '香蕉', unit: '根', step: 1, max: 4, p: 1, c: 27, f: 0.25 },
};

const PRE_ITEMS = {
  chicken: { label: '鸡胸', unit: '块', step: 1, max: 5, p: 22, c: 1, f: 2 },
  eggs: { label: '全蛋', unit: '个', step: 1, max: 6, p: 6, c: 0.5, f: 5 },
  banana: { label: '香蕉', unit: '根', step: 1, max: 4, p: 1, c: 27, f: 0.25 },
  pineapple: { label: '菠萝 240g', unit: '盒', step: 1, max: 2, p: 1.44, c: 31.2, f: 0.24 },
  oikos: { label: 'Oikos', unit: '個', step: 1, max: 5, p: 12, c: 5, f: 0 },
};

const DRINKS = {
  tomato: { label: '无盐番茄汁', sub: 'K 600 / 200ml', p: 1.8, c: 7.1, f: 0, kcal: 39, k: 600, na: 5 },
  yasai: { label: '野菜一日', sub: 'K 740 / 200ml', p: 3, c: 14.5, f: 0, kcal: 75, k: 740, na: 80 },
  none: { label: '不补钾', sub: '今天省了', p: 0, c: 0, f: 0, kcal: 0, k: 0, na: 0 },
};

const CHEAT_ITEMS = [
  { id: 'burger', label: '汉堡 + 薯条', kcal: 980 },
  { id: 'ramen', label: '拉面 + 饭', kcal: 1200 },
  { id: 'sushi', label: '回转寿司 12 皿', kcal: 1050 },
  { id: 'pizza', label: 'Pizza 半张', kcal: 1150 },
  { id: 'dessert', label: '甜品奶茶', kcal: 620 },
  { id: 'katsu', label: '炸猪排咖喱', kcal: 1450 },
];

const NAV = [
  { id: 'plan', label: '今日', icon: Utensils },
  { id: 'detail', label: '明细', icon: Gauge },
  { id: 'shop', label: '采购', icon: ShoppingBasket },
  { id: 'cheat', label: '放松', icon: Flame },
];

const emptyMacro = { p: 0, c: 0, f: 0, kcal: 0 };
const clamp = (value, min, max) => Math.max(min, Math.min(max, Number(value) || 0));
const round = (value, digits = 0) => Number((Number(value) || 0).toFixed(digits));
const macroKcal = (m) => m.kcal ?? (m.p * 4 + m.c * 4 + m.f * 9);
const withKcal = (m) => ({ ...m, kcal: macroKcal(m) });
const addMacros = (...items) => withKcal(items.reduce((sum, item) => ({
  p: sum.p + (item?.p || 0),
  c: sum.c + (item?.c || 0),
  f: sum.f + (item?.f || 0),
  kcal: sum.kcal + macroKcal(item || emptyMacro),
}), { ...emptyMacro }));

function scaleMacro(item, qty) {
  return withKcal({
    p: item.p * qty,
    c: item.c * qty,
    f: item.f * qty,
  });
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall through to the textarea path for mobile browsers that expose but block Clipboard API.
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

function describePre(pre) {
  const entries = getPreEntries(pre);
  if (!entries.length) return '不吃';
  return entries.map(([key, qty]) => `${PRE_ITEMS[key].label} ${round(qty)}${PRE_ITEMS[key].unit}`).join(' / ');
}

function describeDrink(drinkKey, drinkMl) {
  const drink = DRINKS[drinkKey] || DRINKS.none;
  if (drinkKey === 'none' || drinkMl <= 0) return '不喝';
  return `${drink.label} ${round(drinkMl)}ml`;
}

function isFuelActive(pre, drinkKey, drinkMl) {
  return getPreEntries(pre).length > 0 || (drinkKey !== 'none' && drinkMl > 0);
}

function describeFuel(pre, drinkKey, drinkMl) {
  return `${describePre(pre)} · ${describeDrink(drinkKey, drinkMl)}`;
}

function applyDinnerAdjustments(items, adjustments) {
  return items.map((item) => {
    const baseQty = item.qty;
    const adjustment = adjustments[item.key] || 0;
    const max = item.max ?? Infinity;
    const qty = clamp(baseQty + adjustment, 0, max);
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

function roundTo(value, step) {
  if (!Number.isFinite(value) || value <= 0) return 0;
  return Math.max(0, Math.round(value / step) * step);
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
    f: key === 'beef' ? (beefFat * 0.8) / 100 : protein.f,
  };
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

function MacroOrbit3D({ tone = 'warm' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const startFallback = () => {
      const canvas = document.createElement('canvas');
      canvas.dataset.engine = '2d-fallback';
      const context = canvas.getContext('2d');
      mount.appendChild(canvas);

      const resizeFallback = () => {
        const { width, height } = mount.getBoundingClientRect();
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.max(1, Math.floor(width * ratio));
        canvas.height = Math.max(1, Math.floor(height * ratio));
        canvas.style.width = `${Math.max(1, width)}px`;
        canvas.style.height = `${Math.max(1, height)}px`;
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
      };
      resizeFallback();
      const observer = new ResizeObserver(resizeFallback);
      observer.observe(mount);

      let frameId = 0;
      const dots = Array.from({ length: 46 }, (_, index) => ({
        angle: index * 0.72,
        radius: 70 + (index % 9) * 22,
        color: ['#ff8068', '#ffcf69', '#a8d46f'][index % 3],
        size: 2.5 + (index % 5),
      }));

      const animateFallback = () => {
        frameId = window.requestAnimationFrame(animateFallback);
        const { width, height } = canvas.getBoundingClientRect();
        context.clearRect(0, 0, width, height);
        const gradient = context.createRadialGradient(width * 0.55, height * 0.28, 0, width * 0.55, height * 0.28, Math.max(width, height) * 0.75);
        gradient.addColorStop(0, 'rgba(255,207,105,0.18)');
        gradient.addColorStop(0.45, 'rgba(255,128,104,0.08)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        context.fillStyle = gradient;
        context.fillRect(0, 0, width, height);
        context.globalCompositeOperation = 'screen';
        dots.forEach((dot) => {
          dot.angle += 0.006;
          const x = width * 0.5 + Math.cos(dot.angle) * dot.radius * (width / 390);
          const y = height * 0.46 + Math.sin(dot.angle) * dot.radius * 0.52 * (height / 844);
          context.beginPath();
          context.fillStyle = dot.color;
          context.globalAlpha = 0.38;
          context.arc(x, y, dot.size, 0, Math.PI * 2);
          context.fill();
        });
        context.globalAlpha = 1;
        context.globalCompositeOperation = 'source-over';
      };
      animateFallback();

      return () => {
        window.cancelAnimationFrame(frameId);
        observer.disconnect();
        mount.removeChild(canvas);
      };
    };

    const probe = document.createElement('canvas');
    let hasWebgl = false;
    try {
      hasWebgl = Boolean(probe.getContext('webgl2') || probe.getContext('webgl'));
    } catch {
      hasWebgl = false;
    }
    if (!hasWebgl) return startFallback();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 9);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    } catch {
      return startFallback();
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    const keyLight = new THREE.PointLight(0xffbd73, 3.4, 22);
    keyLight.position.set(4, 2, 6);
    scene.add(keyLight);
    const sageLight = new THREE.PointLight(0x94d18a, 2.1, 18);
    sageLight.position.set(-5, -2, 4);
    scene.add(sageLight);

    const palette = tone === 'cool'
      ? [0x83d6ff, 0xa8d46f, 0xffcf69]
      : [0xff8b71, 0xffcf69, 0xa8d46f];

    const sphereGeo = new THREE.SphereGeometry(0.16, 32, 32);
    const spheres = palette.flatMap((color, band) => {
      const material = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.22,
        roughness: 0.22,
        metalness: 0.24,
      });
      return Array.from({ length: 9 }, (_, index) => {
        const mesh = new THREE.Mesh(sphereGeo, material);
        const angle = (index / 9) * Math.PI * 2 + band * 0.55;
        const radius = 2.05 + band * 0.68;
        mesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.48, band * -0.4);
        mesh.userData = { angle, radius, band, speed: 0.004 + band * 0.0015 };
        group.add(mesh);
        return mesh;
      });
    });

    [2.05, 2.75, 3.45].forEach((radius, band) => {
      const curve = new THREE.EllipseCurve(0, 0, radius, radius * 0.48, 0, Math.PI * 2);
      const points = curve.getPoints(120).map((p) => new THREE.Vector3(p.x, p.y, -0.5 + band * -0.2));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: palette[band],
        transparent: true,
        opacity: 0.22,
      });
      const line = new THREE.LineLoop(geometry, material);
      line.rotation.z = band * 0.34;
      group.add(line);
    });

    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const a = i * 1.618;
      const r = 1.5 + ((i * 37) % 100) / 22;
      positions[i * 3] = Math.cos(a) * r;
      positions[i * 3 + 1] = Math.sin(a * 0.9) * r * 0.42;
      positions[i * 3 + 2] = -2.2 - ((i * 17) % 80) / 32;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeo,
      new THREE.PointsMaterial({
        color: 0xffe1a3,
        size: 0.035,
        transparent: true,
        opacity: 0.46,
      }),
    );
    scene.add(particles);

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
      group.rotation.z += 0.0018;
      group.rotation.y = Math.sin(Date.now() * 0.00035) * 0.18;
      particles.rotation.z -= 0.0009;
      spheres.forEach((mesh) => {
        mesh.userData.angle += mesh.userData.speed;
        const { angle, radius, band } = mesh.userData;
        mesh.position.x = Math.cos(angle) * radius;
        mesh.position.y = Math.sin(angle) * radius * 0.48;
        mesh.position.z = -0.25 - band * 0.42 + Math.sin(angle * 2) * 0.12;
      });
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      renderer.dispose();
      sphereGeo.dispose();
      particleGeo.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [tone]);

  return <div ref={mountRef} className="pointer-events-none fixed inset-0 -z-10 opacity-70" data-three-orbit />;
}

export default function CuttingProtocol() {
  const [tab, setTab] = useState('plan');
  const [targets, setTargets] = useState(DEFAULT_TARGETS);
  const [tdee, setTdee] = useLocalNumber('cutting:tdee', DEFAULT_TDEE);
  const [lunchMode, setLunchMode] = useState('quick');
  const [lunchKcal, setLunchKcal] = useState(800);
  const [tally, setTally] = useState({});
  const [carbPlan, setCarbPlan] = useState('pasta');
  const [proteinKeys, setProteinKeys] = useState(['beef']);
  const [fatKeys, setFatKeys] = useState(['sauce', 'egg_fried']);
  const [extraCarbs, setExtraCarbs] = useState({});
  const [beefFat, setBeefFat] = useState(13);
  const [pre, setPre] = useState({});
  const [drinkKey, setDrinkKey] = useState('tomato');
  const [drinkMl, setDrinkMl] = useState(400);
  const [saltG, setSaltG] = useState(6.5);
  const [foodK, setFoodK] = useState(2000);
  const [shopDays, setShopDays] = useState(7);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [fuelOpen, setFuelOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
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

  const toggleFat = (key) => {
    setFatKeys((current) => (current.includes(key) ? current.filter((x) => x !== key) : [...current, key]));
  };

  const model = useMemo(() => {
    const tallyMacro = Object.entries(tally).reduce((sum, [key, qty]) => addMacros(sum, scaleMacro(TALLY_ITEMS[key], qty)), emptyMacro);
    const lunch = lunchMode === 'tally' && tallyMacro.kcal > 0 ? tallyMacro : estimateLunch(lunchKcal);

    const preMacro = Object.entries(pre).reduce((sum, [key, qty]) => addMacros(sum, scaleMacro(PRE_ITEMS[key], qty)), emptyMacro);
    const drink = DRINKS[drinkKey] || DRINKS.none;
    const drinkMacro = withKcal(scaleMacro(drink, drinkMl / 200));
    drinkMacro.kcal = drink.kcal * (drinkMl / 200);
    const snackMacro = withKcal(snack);
    const beforeDinner = addMacros(lunch, preMacro, drinkMacro, snackMacro);

    const extraEntries = Object.entries(extraCarbs).filter(([key, qty]) => DINNER_EXTRAS[key] && qty > 0);
    const extraMacro = extraEntries.reduce((sum, [key, qty]) => addMacros(sum, scaleMacro(DINNER_EXTRAS[key], qty)), emptyMacro);
    const extraItems = extraEntries.map(([key, qty]) => ({
      key: `extra-${key}`,
      name: DINNER_EXTRAS[key].label,
      qty,
      unit: DINNER_EXTRAS[key].unit,
      step: DINNER_EXTRAS[key].step,
      max: DINNER_EXTRAS[key].max,
      unitMacro: DINNER_EXTRAS[key],
      macro: scaleMacro(DINNER_EXTRAS[key], qty),
      tone: 'gold',
    }));

    const proteinNeed = Math.max(0, Math.min(PROTEIN_FLOOR, targets.p) - beforeDinner.p);
    const proteinItems = proteinKeys.map((key) => {
      const unit = proteinUnit(key, beefFat);
      const rawQty = proteinNeed / Math.max(1, proteinKeys.length) / unit.p;
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
    }).filter((item) => item.qty > 0);
    const proteinMacro = proteinItems.reduce((sum, item) => addMacros(sum, item.macro), emptyMacro);

    const fatNeed = Math.max(0, targets.f - beforeDinner.f - extraMacro.f - proteinMacro.f);
    const activeFatKeys = fatKeys.length ? fatKeys : [];
    const fatItems = activeFatKeys.map((key) => {
      const src = FAT_SOURCES[key];
      const rawQty = fatNeed / Math.max(1, activeFatKeys.length) / src.f;
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
    }).filter((item) => item.qty > 0);
    const fatMacro = fatItems.reduce((sum, item) => addMacros(sum, item.macro), emptyMacro);

    const usedBeforeCarb = addMacros(beforeDinner, extraMacro, proteinMacro, fatMacro);
    const remainingKcal = Math.max(0, targets.kcal - usedBeforeCarb.kcal);
    const carb = CARB_PLANS[carbPlan];
    const carbMax = carb.unit === '包' ? 8 : 420;
    const carbQty = clamp(roundTo(remainingKcal / carb.kcalUnit, carb.step), 0, carbMax);
    const carbMacro = scaleMacro(carb.perUnit, carbQty);
    const carbItem = carbQty > 0 ? [{
      key: `carb-${carbPlan}`,
      name: carb.name,
      short: carb.short,
      qty: carbQty,
      unit: carb.unit,
      step: carb.step,
      max: carbMax,
      unitMacro: carb.perUnit,
      macro: carbMacro,
      tone: 'green',
    }] : [];

    const dinnerItems = applyDinnerAdjustments([...proteinItems, ...fatItems, ...extraItems, ...carbItem], dinnerAdjustments);
    const dinner = dinnerItems.reduce((sum, item) => addMacros(sum, item.macro), emptyMacro);
    const total = addMacros(beforeDinner, dinner);
    const deficit = Math.round(tdee - total.kcal);
    const drinkK = (DRINKS[drinkKey]?.k || 0) * (drinkMl / 200);
    const drinkNa = (DRINKS[drinkKey]?.na || 0) * (drinkMl / 200);
    const sodium = saltG * 393 + drinkNa;
    const potassium = foodK + drinkK;

    const shopping = dinnerItems.filter((item) => item.qty > 0).map((item) => ({
      ...item,
      weeklyQty: round(item.qty * shopDays, item.unit === 'g' ? 0 : 1),
    }));

    return {
      lunch,
      pre: preMacro,
      drink: drinkMacro,
      snack: snackMacro,
      beforeDinner,
      dinner,
      dinnerItems,
      total,
      deficit,
      potassium,
      sodium,
      shopping,
      carb,
    };
  }, [beefFat, carbPlan, dinnerAdjustments, drinkKey, drinkMl, extraCarbs, fatKeys, foodK, lunchKcal, lunchMode, pre, saltG, shopDays, snack, tally, targets, tdee, proteinKeys]);

  const cheatTotal = CHEAT_ITEMS.reduce((sum, item) => sum + (cheat[item.id] || 0) * item.kcal, 0);
  const cheatSurplus = Math.round(model.total.kcal + cheatTotal - tdee);
  const fuelActive = isFuelActive(pre, drinkKey, drinkMl);
  const fuelSummary = describeFuel(pre, drinkKey, drinkMl);
  const snackActive = snack.kcal > 0 || snack.p > 0 || snack.c > 0 || snack.f > 0;

  const tuneDinnerItem = (item, delta) => {
    setDinnerAdjustments((current) => {
      const baseQty = item.baseQty ?? item.qty;
      const nextQty = clamp(item.qty + delta, 0, item.max ?? Infinity);
      const nextAdjustment = round(nextQty - baseQty, item.step < 1 ? 1 : 2);
      const next = { ...current };
      if (nextAdjustment !== 0) next[item.key] = nextAdjustment;
      else delete next[item.key];
      return next;
    });
  };

  const resetDefaults = () => {
    setTargets(DEFAULT_TARGETS);
    setLunchKcal(800);
    setTally({});
    setCarbPlan('pasta');
    setProteinKeys(['beef']);
    setFatKeys(['sauce', 'egg_fried']);
    setExtraCarbs({});
    setBeefFat(13);
    setPre({});
    setDrinkKey('tomato');
    setDrinkMl(400);
    setDinnerAdjustments({});
    setSnack({ name: '手动加餐', p: 0, c: 0, f: 0, kcal: 0 });
  };

  useEffect(() => () => window.clearTimeout(copyResetRef.current), []);

  const buildDailyPlanPayload = () => ({
    date: new Date().toISOString().slice(0, 10),
    targets,
    lunch: model.lunch,
    pre: model.pre,
    drink: { key: drinkKey, ml: drinkMl, macro: model.drink },
    snack,
    dinnerAdjustments,
    dinner: { items: model.dinnerItems, macro: model.dinner },
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

  return (
    <div className="min-h-screen overflow-hidden text-zinc-50">
      <MacroOrbit3D tone={tab === 'cheat' ? 'cool' : 'warm'} />
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,181,92,0.24),transparent_38%),radial-gradient(circle_at_0%_20%,rgba(122,214,208,0.16),transparent_32%),linear-gradient(135deg,#0d0f10_0%,#17120f_45%,#101615_100%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-28 pt-4 sm:px-6 lg:px-8">
        <header className="sticky top-3 z-40 flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-black/35 px-2 py-2 backdrop-blur-2xl sm:gap-3 sm:px-3">
          <button onClick={() => setTab('plan')} className="flex min-w-0 items-center gap-2 text-left">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-zinc-950">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block truncate font-display text-base leading-none">Cutting Lab</span>
              <span className="mt-1 block truncate text-[10px] uppercase tracking-[0.24em] text-zinc-400">dinner pilot</span>
            </span>
          </button>
          <nav className="ml-auto hidden shrink-0 grid-cols-4 rounded-lg bg-white/7 p-1 lg:grid">
            <NavButtons tab={tab} setTab={setTab} mode="top" />
          </nav>
        </header>

        <Hero
          model={model}
          targets={targets}
          onFuel={() => setFuelOpen(true)}
          fuelActive={fuelActive}
          fuelSummary={fuelSummary}
          onSnack={() => setSnackOpen(true)}
          onCopy={copyDailyPlan}
          copyStatus={copyStatus}
        />

        {tab === 'plan' && (
          <PlanView
            model={model}
            lunchMode={lunchMode}
            setLunchMode={setLunchMode}
            lunchKcal={lunchKcal}
            setLunchKcal={setLunchKcal}
            tally={tally}
            setTally={setTally}
            setMapQty={setMapQty}
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
            setTargets={setTargets}
            resetDefaults={resetDefaults}
            onTuneDinner={tuneDinnerItem}
            resetDinnerAdjustments={() => setDinnerAdjustments({})}
          />
        )}

        {tab === 'detail' && (
          <DetailView
            model={model}
            targets={targets}
            setTargets={setTargets}
            tdee={tdee}
            setTdee={setTdee}
            pre={pre}
            setPre={setPre}
            setMapQty={setMapQty}
            drinkKey={drinkKey}
            setDrinkKey={setDrinkKey}
            drinkMl={drinkMl}
            setDrinkMl={setDrinkMl}
            saltG={saltG}
            setSaltG={setSaltG}
            foodK={foodK}
            setFoodK={setFoodK}
          />
        )}

        {tab === 'shop' && (
          <ShopView model={model} shopDays={shopDays} setShopDays={setShopDays} />
        )}

        {tab === 'cheat' && (
          <CheatView cheat={cheat} setCheat={setCheat} cheatTotal={cheatTotal} cheatSurplus={cheatSurplus} tdee={tdee} dayKcal={model.total.kcal} />
        )}
      </div>

      <FuelDrawer
        open={fuelOpen}
        setOpen={setFuelOpen}
        pre={pre}
        setPre={setPre}
        setMapQty={setMapQty}
        drinkKey={drinkKey}
        setDrinkKey={setDrinkKey}
        drinkMl={drinkMl}
        setDrinkMl={setDrinkMl}
        model={model}
      />

      <SnackDrawer
        open={snackOpen}
        setOpen={setSnackOpen}
        snack={snack}
        setSnack={setSnack}
        active={snackActive}
        dinnerSummary={model.dinnerItems.slice(0, 4).map((item) => `${item.short || item.name} ${round(item.qty)}${item.unit}`).join(' · ')}
      />

      <CopyPanel
        open={copyPanelOpen}
        setOpen={setCopyPanelOpen}
        text={copyText}
        onCopied={() => {
          setCopyPanelOpen(false);
          setCopyStatus('copied');
          window.clearTimeout(copyResetRef.current);
          copyResetRef.current = window.setTimeout(() => setCopyStatus('idle'), 1800);
        }}
      />

      <button
        onClick={() => setSnackOpen(true)}
        className="fixed bottom-24 right-5 z-50 grid h-14 w-14 place-items-center rounded-lg border border-white/15 bg-[#ff8068] text-white shadow-[0_16px_40px_-18px_#ff8068] transition hover:-translate-y-0.5 lg:bottom-5"
        aria-label="零食加餐"
      >
        <Camera className="h-6 w-6" />
        {snackActive && <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#a8d46f]" />}
      </button>

      <nav className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 rounded-lg border border-white/10 bg-black/65 p-1 backdrop-blur-2xl lg:hidden">
        <NavButtons tab={tab} setTab={setTab} mode="bottom" />
      </nav>
    </div>
  );
}

function NavButtons({ tab, setTab, mode }) {
  return NAV.map((item) => {
    const Icon = item.icon;
    return (
      <button
        key={item.id}
        onClick={() => setTab(item.id)}
        className={`grid h-11 place-items-center rounded-md px-2 text-[11px] transition ${
          mode === 'top' ? 'min-w-20 grid-cols-[16px_auto] gap-1.5' : 'grid-rows-[18px_auto] gap-0.5'
        } ${
          tab === item.id ? 'bg-white text-zinc-950 shadow-[0_10px_30px_-18px_rgba(255,255,255,0.9)]' : 'text-zinc-400 hover:bg-white/10 hover:text-white'
        }`}
        aria-label={item.label}
      >
        <Icon className="h-4 w-4" />
        <span>{item.label}</span>
      </button>
    );
  });
}

function Hero({ model, targets, onFuel, fuelActive, fuelSummary, onSnack, onCopy, copyStatus }) {
  const deficitTone = model.deficit >= 650 ? 'text-[#a8d46f]' : model.deficit >= 300 ? 'text-[#ffcf69]' : 'text-[#ff8068]';
  const copyMeta = {
    idle: { label: '复制', sub: '今日记录', icon: ClipboardList },
    copying: { label: '复制中', sub: 'clipboard', icon: ClipboardList },
    copied: { label: '已复制', sub: '可直接粘贴', icon: CheckCircle2 },
    failed: { label: '复制失败', sub: '再点一次', icon: ClipboardList },
  }[copyStatus] || { label: '复制', sub: '今日记录', icon: ClipboardList };

  return (
    <section className="relative grid min-h-[78vh] items-end gap-6 py-4 lg:grid-cols-[minmax(0,1.03fr)_minmax(360px,0.97fr)] lg:items-center">
      <div className="relative order-2 lg:order-1">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/8 px-3 py-2 text-xs text-zinc-300 backdrop-blur-xl">
            <Activity className="h-4 w-4 text-[#a8d46f]" />
            <span>83 kg · 25% BF · 16:8 IF · 今日 {targets.kcal} kcal</span>
          </div>
          <button
            data-home-fuel-button
            onClick={onFuel}
            className={`inline-flex max-w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-xs backdrop-blur-xl transition hover:-translate-y-0.5 ${
              fuelActive ? 'border-[#a8d46f]/35 bg-[#a8d46f]/12 text-[#d8ffc9]' : 'border-white/10 bg-white/8 text-zinc-300 hover:border-[#ffcf69]/40'
            }`}
            aria-label={`补给：${fuelSummary}`}
          >
            <Dumbbell className={`h-4 w-4 shrink-0 ${fuelActive ? 'text-[#a8d46f]' : 'text-[#ffcf69]'}`} />
            <span className="shrink-0 font-cjk font-semibold">补给</span>
            <span className={`rounded-md px-2 py-0.5 font-mono text-[10px] ${fuelActive ? 'bg-[#a8d46f] text-zinc-950' : 'bg-white/10 text-zinc-300'}`}>
              {fuelActive ? 'ON' : 'OFF'}
            </span>
            <span className="hidden max-w-[260px] truncate text-zinc-400 sm:inline">{fuelSummary}</span>
          </button>
        </div>
        <h1 className="max-w-3xl font-display text-5xl leading-[0.92] tracking-normal text-white sm:text-7xl lg:text-8xl">
          今晚吃得
          <span className="block text-[#ffcf69]">刚刚好</span>
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
          中午吃了多少，训练前垫了什么，晚餐自己收口。肉、主食、脂肪和水果都算好，打开手机先看答案。
        </p>
        <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          <HeroAction icon={Zap} label="零食" onClick={onSnack} />
          <HeroAction icon={copyMeta.icon} label={copyMeta.label} sub={copyMeta.sub} onClick={onCopy} dataAttr="copy-plan-button" />
          <HeroAction icon={Goal} label={`${model.deficit > 0 ? '-' : '+'}${Math.abs(model.deficit)}`} sub="今日赤字" />
        </div>
      </div>

      <div className="relative order-1 lg:order-2">
        <div className="absolute -inset-8 rounded-[2rem] bg-[#ff8068]/10 blur-3xl" />
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] shadow-[0_30px_90px_-50px_rgba(0,0,0,0.95)] backdrop-blur-xl">
          <img src={generated('protocol-hero.jpg')} alt="Cutting Lab dinner visual" className="h-[280px] w-full object-cover sm:h-[420px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <div className="mb-3 flex items-end justify-between gap-3">
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#ffcf69]">今晚</div>
                <div className="font-display text-4xl leading-none text-white sm:text-5xl">{Math.round(model.dinner.kcal)}</div>
                <div className="mt-1 text-xs text-zinc-400">晚餐热量</div>
              </div>
              <div className={`rounded-lg bg-black/45 px-3 py-2 text-right backdrop-blur ${deficitTone}`}>
                <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">今日赤字</div>
                <div className="font-mono text-xl">{model.deficit > 0 ? '-' : '+'}{Math.abs(model.deficit)}</div>
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

function PlanView(props) {
  const {
    model,
    lunchMode,
    setLunchMode,
    lunchKcal,
    setLunchKcal,
    tally,
    setTally,
    setMapQty,
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
    setTargets,
    resetDefaults,
    onTuneDinner,
    resetDinnerAdjustments,
  } = props;
  const hasDinnerAdjustments = model.dinnerItems.some((item) => item.adjustment !== 0);

  return (
    <main className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="space-y-6">
        <Panel eyebrow="01 · 先记今天" title="今天吃到哪了" icon={ClipboardList}>
          <Segmented
            value={lunchMode}
            onChange={setLunchMode}
            options={[
              { value: 'quick', label: '直接 kcal' },
              { value: 'tally', label: '点选记账' },
            ]}
          />
          {lunchMode === 'quick' ? (
            <div className="mt-5">
              <label className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">Lunch kcal</label>
              <div className="mt-2 flex items-end gap-3">
                <input
                  type="number"
                  value={lunchKcal}
                  onChange={(event) => setLunchKcal(clamp(event.target.value, 0, 5000))}
                  className="w-36 border-b border-white/20 bg-transparent font-display text-6xl leading-none text-white outline-none focus:border-[#ffcf69]"
                />
                <span className="pb-2 text-xs uppercase tracking-[0.2em] text-zinc-500">kcal</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[600, 700, 800, 900, 1000].map((value) => (
                  <Chip key={value} active={lunchKcal === value} onClick={() => setLunchKcal(value)}>{value}</Chip>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {Object.entries(TALLY_ITEMS).map(([key, item]) => (
                <StepperRow
                  key={key}
                  label={item.label}
                  meta={`每${item.step}${item.unit} · ${Math.round(macroKcal(scaleMacro(item, item.step)))} kcal`}
                  value={tally[key] || 0}
                  unit={item.unit}
                  step={item.step}
                  max={item.max}
                  onChange={(value) => setMapQty(setTally, key, value, item.max)}
                />
              ))}
            </div>
          )}
        </Panel>

        <Panel eyebrow="02 · 选个口味" title="今晚想吃什么" icon={Utensils}>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {Object.entries(CARB_PLANS).map(([key, plan]) => (
              <button
                key={key}
                onClick={() => setCarbPlan(key)}
                className={`rounded-lg border p-3 text-left transition ${
                  carbPlan === key ? 'border-[#ffcf69] bg-[#ffcf69]/12 text-white' : 'border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/25 hover:text-white'
                }`}
              >
                <div className="font-cjk text-sm font-semibold">{plan.short}</div>
                <div className="mt-1 text-[10px] text-zinc-500">{plan.sub}</div>
              </button>
            ))}
          </div>
        </Panel>

        <Disclosure
          open={advancedOpen}
          onToggle={() => setAdvancedOpen(!advancedOpen)}
          title="高级配置"
          subtitle="肉、油脂、水果、牛肉脂肪、目标值"
        >
          <div className="grid gap-5">
            <OptionBlock title="晚餐蛋白">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {Object.entries(PROTEINS).map(([key, item]) => (
                  <OptionCard key={key} active={proteinKeys.includes(key)} onClick={() => toggleProtein(key)} title={item.short} meta={item.note} />
                ))}
              </div>
            </OptionBlock>

            <OptionBlock title="脂肪来源">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {Object.entries(FAT_SOURCES).map(([key, item]) => (
                  <OptionCard key={key} active={fatKeys.includes(key)} onClick={() => toggleFat(key)} title={item.short} meta={`${item.f}g 脂 / ${item.unit}`} tone="amber" />
                ))}
              </div>
            </OptionBlock>

            <OptionBlock title="水果 / 酸奶">
              <div className="grid gap-2 sm:grid-cols-2">
                {Object.entries(DINNER_EXTRAS).map(([key, item]) => (
                  <StepperRow
                    key={key}
                    label={item.label}
                    meta={`每${item.step}${item.unit} · C${Math.round(item.c * item.step)}`}
                    value={extraCarbs[key] || 0}
                    unit={item.unit}
                    step={item.step}
                    max={item.max}
                    onChange={(value) => setMapQty(setExtraCarbs, key, value, item.max)}
                  />
                ))}
              </div>
            </OptionBlock>

            <OptionBlock title="牛肉脂肪">
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
                  className="h-11 w-20 rounded-lg border border-white/10 bg-white/5 text-center font-mono text-lg outline-none focus:border-[#ffcf69]"
                />
                <span className="text-xs text-zinc-500">脂質 g / 100g raw · 水煮按 80%</span>
              </div>
            </OptionBlock>

            <OptionBlock title="目标值">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  ['p', '蛋白', 'g', 500],
                  ['c', '碳水', 'g', 800],
                  ['f', '脂肪', 'g', 300],
                  ['kcal', '热量', '', 8000],
                ].map(([key, label, unit, max]) => (
                  <TargetInput
                    key={key}
                    label={label}
                    unit={unit}
                    value={targets[key]}
                    onChange={(value) => setTargets((current) => ({ ...current, [key]: clamp(value, 0, max) }))}
                  />
                ))}
              </div>
              <button onClick={resetDefaults} className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 transition hover:border-[#ff8068]/60 hover:text-[#ff8068]">
                <RotateCcw className="h-4 w-4" />
                重置默认
              </button>
            </OptionBlock>
          </div>
        </Disclosure>
      </section>

      <section className="space-y-6">
        <Panel eyebrow="03 · 今晚答案" title="今晚就这样吃" icon={Sparkles}>
          <div className="grid gap-2">
            {model.dinnerItems.map((item, index) => (
              <FoodRow key={item.key} item={item} index={index} onTune={onTuneDinner} />
            ))}
          </div>
          {hasDinnerAdjustments && (
            <button onClick={resetDinnerAdjustments} className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 transition hover:border-[#ff8068]/60 hover:text-[#ff8068]">
              <RotateCcw className="h-4 w-4" />
              重置微调
            </button>
          )}
        </Panel>

        <Panel eyebrow="04 · 今日节奏" title="看一眼就够" icon={Gauge}>
          <div className="space-y-3">
            <MacroBar label="蛋白" value={model.total.p} target={targets.p} unit="g" color="#ff8068" />
            <MacroBar label="碳水" value={model.total.c} target={targets.c} unit="g" color="#ffcf69" />
            <MacroBar label="脂肪" value={model.total.f} target={targets.f} unit="g" color="#a8d46f" />
            <MacroBar label="热量" value={model.total.kcal} target={targets.kcal} unit="kcal" color="#7bd6d0" />
          </div>
        </Panel>
      </section>
    </main>
  );
}

function DetailView(props) {
  const {
    model,
    targets,
    setTargets,
    tdee,
    setTdee,
    pre,
    setPre,
    setMapQty,
    drinkKey,
    setDrinkKey,
    drinkMl,
    setDrinkMl,
    saltG,
    setSaltG,
    foodK,
    setFoodK,
  } = props;
  const balanceOk = model.potassium >= model.sodium;

  return (
    <main className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <Panel eyebrow="今日账本" title="吃进去的东西" icon={ClipboardList}>
        <LedgerRow label="午餐" macro={model.lunch} />
        <LedgerRow label="训练前" macro={model.pre} />
        <LedgerRow label="饮料/电解质" macro={model.drink} />
        <LedgerRow label="零食加餐" macro={model.snack} />
        <LedgerRow label="晚餐" macro={model.dinner} strong />
      </Panel>

      <Panel eyebrow="目标设置" title="目标和消耗" icon={Goal}>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {[
            ['p', '蛋白', 'g', 500],
            ['c', '碳水', 'g', 800],
            ['f', '脂肪', 'g', 300],
            ['kcal', '热量', '', 8000],
          ].map(([key, label, unit, max]) => (
            <TargetInput key={key} label={label} unit={unit} value={targets[key]} onChange={(value) => setTargets((current) => ({ ...current, [key]: clamp(value, 0, max) }))} />
          ))}
          <TargetInput label="TDEE" unit="" value={tdee} onChange={(value) => setTdee(clamp(value, 0, 9000))} />
        </div>
      </Panel>

      <Panel eyebrow="训练前" title="垫一口也算进去" icon={Dumbbell}>
        <div className="grid gap-2 sm:grid-cols-2">
          {Object.entries(PRE_ITEMS).map(([key, item]) => (
            <StepperRow key={key} label={item.label} meta={`每${item.step}${item.unit} · ${Math.round(macroKcal(scaleMacro(item, item.step)))} kcal`} value={pre[key] || 0} unit={item.unit} step={item.step} max={item.max} onChange={(value) => setMapQty(setPre, key, value, item.max)} />
          ))}
        </div>
      </Panel>

      <Panel eyebrow="电解质" title="钾钠别太偏" icon={Leaf}>
        <div className="grid grid-cols-3 gap-2">
          {Object.entries(DRINKS).map(([key, item]) => (
            <OptionCard key={key} active={drinkKey === key} onClick={() => setDrinkKey(key)} title={item.label} meta={item.sub} tone="green" />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <TargetInput label="饮料" unit="ml" value={drinkMl} onChange={(value) => setDrinkMl(clamp(value, 0, 2000))} />
          <TargetInput label="盐" unit="g" value={saltG} onChange={(value) => setSaltG(clamp(value, 0, 20))} />
          <TargetInput label="食物钾" unit="mg" value={foodK} onChange={(value) => setFoodK(clamp(value, 0, 8000))} />
        </div>
        <div className={`mt-4 rounded-lg border p-4 ${balanceOk ? 'border-[#a8d46f]/30 bg-[#a8d46f]/10' : 'border-[#ff8068]/30 bg-[#ff8068]/10'}`}>
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-zinc-300">K / Na</span>
            <span className={balanceOk ? 'text-[#a8d46f]' : 'text-[#ff8068]'}>{balanceOk ? '平衡' : '钾偏低'}</span>
          </div>
          <div className="mt-2 text-xs text-zinc-500">钾 {Math.round(model.potassium)} mg · 钠 {Math.round(model.sodium)} mg</div>
        </div>
      </Panel>
    </main>
  );
}

function ShopView({ model, shopDays, setShopDays }) {
  return (
    <main className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <section className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]">
        <img src={generated('shop-basket.jpg')} alt="weekly grocery basket" className="h-[360px] w-full object-cover" />
        <div className="p-4">
          <div className="text-[10px] uppercase tracking-[0.28em] text-[#ffcf69]">备货模式</div>
          <h2 className="mt-1 font-display text-4xl">按 {shopDays} 天备货</h2>
          <div className="mt-4 flex gap-2">
            {[3, 5, 7, 10].map((days) => (
              <Chip key={days} active={shopDays === days} onClick={() => setShopDays(days)}>{days} 天</Chip>
            ))}
          </div>
        </div>
      </section>
      <Panel eyebrow="买这些就行" title="采购清单" icon={CalendarDays}>
        <div className="grid gap-2">
          {model.shopping.map((item) => (
            <div key={item.key} className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-black/25 px-3 py-3">
              <div>
                <div className="font-cjk text-sm text-white">{item.name}</div>
                <div className="mt-1 text-xs text-zinc-500">每天 {round(item.qty)}{item.unit}</div>
              </div>
              <div className="rounded-md bg-white px-2.5 py-1 font-mono text-sm text-zinc-950">{item.weeklyQty}{item.unit}</div>
            </div>
          ))}
        </div>
      </Panel>
    </main>
  );
}

function CheatView({ cheat, setCheat, cheatTotal, cheatSurplus, tdee, dayKcal }) {
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
    <main className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
      <Panel eyebrow="放松一下" title="想吃也能算" icon={Flame}>
        <div className="grid gap-2 sm:grid-cols-2">
          {CHEAT_ITEMS.map((item) => (
            <div key={item.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="font-cjk text-sm text-white">{item.label}</div>
                  <div className="mt-1 text-xs text-zinc-500">{item.kcal} kcal</div>
                </div>
                <MiniStepper value={cheat[item.id] || 0} onChange={(value) => setQty(item.id, value)} />
              </div>
            </div>
          ))}
        </div>
      </Panel>
      <section className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]">
        <img src={asset('cheat.jpg')} alt="cheat meal" className="h-56 w-full object-cover" />
        <div className="p-5">
          <div className="text-[10px] uppercase tracking-[0.28em] text-[#ff8068]">吃完大概这样</div>
          <div className="mt-2 font-display text-6xl text-white">{cheatTotal}</div>
          <div className="text-sm text-zinc-500">放松热量</div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <ResultPill label="今日总摄入" value={Math.round(dayKcal + cheatTotal)} />
            <ResultPill label="TDEE" value={tdee} />
            <ResultPill label="盈余" value={(cheatSurplus >= 0 ? '+' : '') + cheatSurplus} hot={cheatSurplus > 0} />
          </div>
          <button onClick={() => setCheat({})} className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 transition hover:border-[#ff8068]/60 hover:text-[#ff8068]">
            <RotateCcw className="h-4 w-4" />
            清空
          </button>
        </div>
      </section>
    </main>
  );
}

function FuelDrawer({ open, setOpen, pre, setPre, setMapQty, drinkKey, setDrinkKey, drinkMl, setDrinkMl, model }) {
  if (!open) return null;

  const fuelActive = isFuelActive(pre, drinkKey, drinkMl);
  const summary = describeFuel(pre, drinkKey, drinkMl);
  const fuelMacro = addMacros(model.pre, model.drink);

  const applyNoFuel = () => {
    setPre({});
    setDrinkKey('none');
    setDrinkMl(0);
  };

  const applyLightFuel = () => {
    setPre({ banana: 1 });
    setDrinkKey('tomato');
    setDrinkMl(400);
  };

  const applyPineappleFuel = () => {
    setPre({ pineapple: 1 });
    setDrinkKey('tomato');
    setDrinkMl(400);
  };

  const chooseDrink = (key) => {
    setDrinkKey(key);
    if (key === 'none') setDrinkMl(0);
    else if (drinkMl <= 0) setDrinkMl(400);
  };

  return (
    <div className="fixed inset-0 z-[70]">
      <button className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} aria-label="关闭补给" />
      <aside className="absolute inset-y-0 right-0 flex w-[min(460px,94vw)] flex-col border-l border-white/10 bg-[#101312] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <div className="flex items-center gap-3">
            <img src={asset('pre.jpg')} alt="" className="h-12 w-12 rounded-lg object-cover" />
            <div>
              <div className="font-display text-xl text-white">补给开关</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">训练前吃什么喝什么</div>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-400 hover:text-white" aria-label="关闭">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className={`rounded-lg border p-4 ${fuelActive ? 'border-[#a8d46f]/30 bg-[#a8d46f]/10' : 'border-white/10 bg-white/[0.045]'}`}>
            <div className="flex items-center justify-between gap-3">
              <span className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">当前状态</span>
              <span className={fuelActive ? 'text-[#a8d46f]' : 'text-zinc-400'}>{fuelActive ? '已补给' : '不补给'}</span>
            </div>
            <div className="mt-2 text-sm leading-6 text-zinc-200">{summary}</div>
            <div className="mt-2 font-mono text-xs text-zinc-500">P{round(fuelMacro.p)} C{round(fuelMacro.c)} F{round(fuelMacro.f)} · {Math.round(fuelMacro.kcal)} kcal</div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <button onClick={applyNoFuel} className="rounded-lg border border-white/10 bg-white/[0.04] p-3 text-left transition hover:border-[#ff8068]/50">
              <div className="font-cjk text-sm font-semibold text-white">一键不补给</div>
              <div className="mt-1 text-[10px] text-zinc-500">不吃也不喝</div>
            </button>
            <button onClick={applyLightFuel} className="rounded-lg border border-[#ffcf69]/30 bg-[#ffcf69]/10 p-3 text-left transition hover:-translate-y-0.5">
              <div className="font-cjk text-sm font-semibold text-white">轻补给</div>
              <div className="mt-1 text-[10px] text-zinc-500">香蕉 + 番茄汁</div>
            </button>
            <button onClick={applyPineappleFuel} className="rounded-lg border border-[#a8d46f]/30 bg-[#a8d46f]/10 p-3 text-left transition hover:-translate-y-0.5">
              <div className="font-cjk text-sm font-semibold text-white">菠萝盒</div>
              <div className="mt-1 text-[10px] text-zinc-500">240g + 番茄汁</div>
            </button>
          </div>

          <div className="mt-5 grid gap-5">
            <OptionBlock title="吃什么">
              <div className="grid gap-2 sm:grid-cols-2">
                {Object.entries(PRE_ITEMS).map(([key, item]) => (
                  <StepperRow
                    key={key}
                    label={item.label}
                    meta={`每${item.step}${item.unit} · ${Math.round(macroKcal(scaleMacro(item, item.step)))} kcal`}
                    value={pre[key] || 0}
                    unit={item.unit}
                    step={item.step}
                    max={item.max}
                    onChange={(value) => setMapQty(setPre, key, value, item.max)}
                  />
                ))}
              </div>
            </OptionBlock>

            <OptionBlock title="喝什么">
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(DRINKS).map(([key, item]) => (
                  <OptionCard key={key} active={drinkKey === key} onClick={() => chooseDrink(key)} title={item.label} meta={item.sub} tone="green" />
                ))}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[200, 400, 600].map((value) => (
                  <Chip key={value} active={drinkMl === value} onClick={() => setDrinkMl(value)}>{value}ml</Chip>
                ))}
              </div>
              <div className="mt-3">
                <TargetInput label="饮料" unit="ml" value={drinkMl} onChange={(value) => setDrinkMl(clamp(value, 0, 2000))} />
              </div>
            </OptionBlock>
          </div>
        </div>
      </aside>
    </div>
  );
}

function CopyPanel({ open, setOpen, text, onCopied }) {
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
      <button className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} aria-label="关闭复制面板" />
      <aside className="absolute inset-x-3 bottom-3 rounded-lg border border-white/10 bg-[#111311] p-4 shadow-2xl sm:left-auto sm:right-5 sm:w-[min(520px,92vw)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-display text-xl text-white">手动复制</div>
            <div className="mt-1 text-xs leading-5 text-zinc-500">浏览器拦截了自动复制，文本已经选中。手机上直接长按复制也可以。</div>
          </div>
          <button onClick={() => setOpen(false)} className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 text-zinc-400 hover:text-white" aria-label="关闭">
            <X className="h-4 w-4" />
          </button>
        </div>
        <textarea
          ref={textareaRef}
          readOnly
          value={text}
          className="mt-4 h-48 w-full resize-none rounded-lg border border-white/10 bg-black/35 p-3 font-mono text-xs leading-5 text-zinc-200 outline-none focus:border-[#ffcf69]"
        />
        <div className="mt-3 flex justify-end gap-2">
          <button onClick={retryCopy} className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-zinc-950">
            <ClipboardList className="h-4 w-4" />
            再复制一次
          </button>
        </div>
      </aside>
    </div>
  );
}

function SnackDrawer({ open, setOpen, snack, setSnack, active, dinnerSummary }) {
  if (!open) return null;

  const setField = (key, value) => {
    setSnack((current) => ({ ...current, [key]: key === 'name' ? value : clamp(value, 0, key === 'kcal' ? 5000 : 500) }));
  };

  return (
    <div className="fixed inset-0 z-[70]">
      <button className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} aria-label="关闭零食加餐" />
      <aside className="absolute inset-y-0 right-0 flex w-[min(430px,94vw)] flex-col border-l border-white/10 bg-[#111311] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <div className="flex items-center gap-3">
            <img src={generated('snack-scanner.jpg')} alt="" className="h-12 w-12 rounded-lg object-cover" />
            <div>
              <div className="font-display text-xl text-white">零食加餐</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">自己填一下也行</div>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-400 hover:text-white" aria-label="关闭">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <label className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">名称</label>
          <input
            value={snack.name}
            onChange={(event) => setField('name', event.target.value)}
            className="mt-2 h-11 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white outline-none focus:border-[#ffcf69]"
          />
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[
              ['kcal', '热量'],
              ['p', '蛋白'],
              ['c', '碳水'],
              ['f', '脂肪'],
            ].map(([key, label]) => (
              <TargetInput key={key} label={label} unit={key === 'kcal' ? '' : 'g'} value={snack[key]} onChange={(value) => setField(key, value)} />
            ))}
          </div>
          <div className="mt-5 rounded-lg border border-[#ffcf69]/20 bg-[#ffcf69]/10 p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-[#ffcf69]">晚餐会跟着收口</div>
            <div className="mt-2 text-sm leading-6 text-zinc-300">{dinnerSummary || '晚餐已砍到很低'} · 全天 {Math.round(snack.kcal)} kcal snack</div>
          </div>
          {active && (
            <button onClick={() => setSnack({ name: '手动加餐', p: 0, c: 0, f: 0, kcal: 0 })} className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 hover:text-[#ff8068]">
              <RotateCcw className="h-4 w-4" />
              清除加餐
            </button>
          )}
        </div>
      </aside>
    </div>
  );
}

function Panel({ eyebrow, title, icon: Icon, children }) {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.055] p-4 shadow-[0_24px_80px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.28em] text-[#ffcf69]">{eyebrow}</div>
          <h2 className="mt-1 font-display text-2xl text-white">{title}</h2>
        </div>
        {Icon && (
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-zinc-950">
            <Icon className="h-4 w-4" />
          </span>
        )}
      </div>
      {children}
    </section>
  );
}

function HeroAction({ icon: Icon, label, sub, onClick, dataAttr }) {
  const Comp = onClick ? 'button' : 'div';
  return (
    <Comp data-copy-plan-button={dataAttr === 'copy-plan-button' ? true : undefined} onClick={onClick} className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-3 text-left backdrop-blur-xl transition hover:border-white/25">
      <Icon className="mb-2 h-4 w-4 text-[#ffcf69]" />
      <div className="text-sm text-white">{label}</div>
      {sub && <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-zinc-500">{sub}</div>}
    </Comp>
  );
}

function MetricTile({ label, value, target, unit }) {
  const diff = value - target;
  const ok = Math.abs(diff) <= (unit ? Math.max(8, target * 0.08) : Math.max(80, target * 0.05));
  return (
    <div className="rounded-lg bg-white/10 p-2 backdrop-blur">
      <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-400">{label}</div>
      <div className="mt-1 font-mono text-lg text-white">{Math.round(value)}</div>
      <div className={`text-[10px] ${ok ? 'text-[#a8d46f]' : 'text-[#ffcf69]'}`}>{diff >= 0 ? '+' : ''}{Math.round(diff)}{unit}</div>
    </div>
  );
}

function Segmented({ value, onChange, options }) {
  return (
    <div className="grid grid-cols-2 rounded-lg bg-black/25 p-1">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`rounded-md px-3 py-2 text-sm transition ${value === option.value ? 'bg-white text-zinc-950' : 'text-zinc-400 hover:text-white'}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function Chip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border px-3 py-2 text-xs transition ${
        active ? 'border-[#ffcf69] bg-[#ffcf69]/15 text-[#ffcf69]' : 'border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/25 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}

function OptionBlock({ title, children }) {
  return (
    <div>
      <div className="mb-2 text-[10px] uppercase tracking-[0.24em] text-zinc-500">{title}</div>
      {children}
    </div>
  );
}

function OptionCard({ active, onClick, title, meta, tone = 'gold' }) {
  const color = tone === 'green' ? '#a8d46f' : tone === 'amber' ? '#ffb55c' : '#ffcf69';
  return (
    <button
      onClick={onClick}
      className="rounded-lg border p-3 text-left transition hover:-translate-y-0.5"
      style={{
        borderColor: active ? color : 'rgba(255,255,255,0.10)',
        background: active ? `${color}1f` : 'rgba(255,255,255,0.045)',
      }}
    >
      <div className="font-cjk text-sm font-semibold text-white">{title}</div>
      <div className="mt-1 text-[10px] text-zinc-500">{meta}</div>
    </button>
  );
}

function Disclosure({ open, onToggle, title, subtitle, children }) {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.045] backdrop-blur-xl">
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-3 p-4 text-left">
        <span>
          <span className="flex items-center gap-2 font-display text-2xl text-white">
            <Settings2 className="h-4 w-4 text-[#ffcf69]" />
            {title}
          </span>
          <span className="mt-1 block text-xs text-zinc-500">{subtitle}</span>
        </span>
        <ChevronDown className={`h-5 w-5 text-zinc-500 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="border-t border-white/10 p-4">{children}</div>}
    </section>
  );
}

function StepperRow({ label, meta, value, unit, step, max, onChange }) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-black/20 p-3">
      <div className="min-w-0">
        <div className="truncate font-cjk text-sm font-semibold text-white">{label}</div>
        <div className="mt-1 truncate text-[10px] text-zinc-500">{meta}</div>
      </div>
      <div className="flex items-center gap-1">
        <IconSquare label={`减少${label}`} onClick={() => onChange(value - step)} icon={Minus} />
        <span className="w-14 text-center font-mono text-sm text-white">{round(value)}{value > 0 && unit === 'g' ? 'g' : ''}</span>
        <IconSquare label={`增加${label}`} onClick={() => onChange(Math.min(max, value + step))} icon={Plus} />
      </div>
    </div>
  );
}

function MiniStepper({ value, onChange }) {
  return (
    <div className="flex items-center gap-1">
      <IconSquare label="减少" onClick={() => onChange(value - 1)} icon={Minus} />
      <span className="w-7 text-center font-mono text-sm text-white">{value}</span>
      <IconSquare label="增加" onClick={() => onChange(value + 1)} icon={Plus} />
    </div>
  );
}

function IconSquare({ label, onClick, icon: Icon }) {
  return (
    <button onClick={onClick} aria-label={label} className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-400 transition hover:border-[#ffcf69]/60 hover:text-[#ffcf69]">
      <Icon className="h-4 w-4" />
    </button>
  );
}

function TargetInput({ label, unit, value, onChange }) {
  return (
    <label className="block rounded-lg border border-white/10 bg-black/20 p-3">
      <span className="block text-[10px] uppercase tracking-[0.18em] text-zinc-500">{label}</span>
      <span className="mt-1 flex items-baseline gap-1">
        <input
          type="number"
          value={round(value, 1)}
          onChange={(event) => onChange(event.target.value)}
          className="min-w-0 flex-1 bg-transparent font-mono text-lg text-white outline-none"
        />
        <span className="text-[10px] text-zinc-500">{unit}</span>
      </span>
    </label>
  );
}

function FoodRow({ item, index, onTune }) {
  const colorMap = {
    red: '#ff8068',
    amber: '#ffb55c',
    gold: '#ffcf69',
    green: '#a8d46f',
  };
  const color = colorMap[item.tone] || '#ffffff';
  const adjustmentLabel = item.adjustment > 0 ? `+${round(item.adjustment)}` : round(item.adjustment);
  return (
    <div data-dinner-tune-row className="grid grid-cols-[38px_1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-3">
      <span className="grid h-9 w-9 place-items-center rounded-lg font-mono text-xs text-zinc-950" style={{ backgroundColor: color }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="min-w-0">
        <div className="truncate font-cjk text-sm font-semibold text-white">{item.name}</div>
        <div className="mt-1 truncate text-[10px] text-zinc-500">
          P{round(item.macro.p)} · C{round(item.macro.c)} · F{round(item.macro.f)}
          {item.adjustment !== 0 && <span className="text-[#ffcf69]"> · 调整 {adjustmentLabel}{item.unit}</span>}
        </div>
      </div>
      <div className="text-right">
        <div className="font-display text-2xl leading-none text-white">{round(item.qty)}</div>
        <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-zinc-500">{item.unit}</div>
        {onTune && (
          <div className="mt-2 flex items-center justify-end gap-1">
            <IconSquare label={`减少${item.name}`} onClick={() => onTune(item, -item.step)} icon={Minus} />
            <IconSquare label={`增加${item.name}`} onClick={() => onTune(item, item.step)} icon={Plus} />
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
        <span className="text-sm text-zinc-300">{label}</span>
        <span className="font-mono text-xs text-zinc-500">{Math.round(value)} / {target} {unit}</span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
      <div className="mt-1 text-right text-[10px] text-zinc-500">{diff >= 0 ? '+' : ''}{diff}{unit}</div>
    </div>
  );
}

function LedgerRow({ label, macro, strong }) {
  return (
    <div className={`grid grid-cols-[1fr_auto] items-center gap-3 border-t border-white/10 py-3 first:border-t-0 ${strong ? 'text-white' : 'text-zinc-300'}`}>
      <div className="font-cjk text-sm">{label}</div>
      <div className="font-mono text-xs text-zinc-500">P{round(macro.p)} C{round(macro.c)} F{round(macro.f)} · {Math.round(macroKcal(macro))} kcal</div>
    </div>
  );
}

function ResultPill({ label, value, hot }) {
  return (
    <div className={`rounded-lg border p-3 ${hot ? 'border-[#ff8068]/30 bg-[#ff8068]/10' : 'border-white/10 bg-black/20'}`}>
      <div className="text-[10px] text-zinc-500">{label}</div>
      <div className={`mt-1 font-mono text-lg ${hot ? 'text-[#ff8068]' : 'text-white'}`}>{value}</div>
    </div>
  );
}
