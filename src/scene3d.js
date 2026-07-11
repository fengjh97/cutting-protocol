/* ============================================================
   scene3d.js — 铬金属·粒子艺术 中央雕塑
   Vanilla Three.js (no R3F) so it bundles cleanly against the
   existing three@0.184 dep and stays framework-agnostic.

   Exposes createScene(container) → {
     morphTo(spriteUrl),  // hover a node: particles morph into that food
     reset(),             // leave: back to the chrome sphere sculpture
     resize(), dispose(), setPointer(nx, ny)
   }
   ============================================================ */
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import gsap from 'gsap';

const isMobile = () =>
  window.matchMedia('(max-width: 640px)').matches ||
  (navigator.maxTouchPoints > 0 && window.innerWidth < 820);

const VERT = /* glsl */ `
  uniform float uTime, uMorph, uSize, uPixelRatio;
  attribute vec3 aTarget;
  attribute float aSeed;
  varying float vGlow;
  varying float vMix;
  vec3 swirl(vec3 p, float t, float s){
    float a = t*0.28 + s*6.2831;
    return vec3(sin(a + p.y*1.7), cos(a*1.1 + p.z*1.3), sin(a*0.9 + p.x*1.5));
  }
  void main(){
    vec3 base = position;
    vec3 disp = swirl(base, uTime, aSeed) * (0.14 + 0.10*sin(uTime*0.5 + aSeed*10.0));
    vec3 idle = base + disp;
    vec3 pos  = mix(idle, aTarget, uMorph);
    vMix = uMorph;
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    float d = max(0.1, -mv.z);
    gl_PointSize = uSize * uPixelRatio * (9.0 / d) * (0.6 + 0.4*aSeed);
    gl_Position = projectionMatrix * mv;
    vGlow = 0.5 + 0.5*sin(uTime*2.0 + aSeed*30.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uColA, uColB, uColC;
  varying float vGlow;
  varying float vMix;
  void main(){
    vec2 uv = gl_PointCoord - 0.5;
    float r = length(uv);
    if (r > 0.5) discard;
    float soft = smoothstep(0.5, 0.0, r);
    float core = smoothstep(0.28, 0.0, r);
    vec3 col = mix(uColA, uColB, vGlow);
    col = mix(col, uColC, vMix * 0.55);
    col += core * 0.38;
    float alpha = soft * (0.45 + 0.4*core);
    gl_FragColor = vec4(col, alpha);
  }
`;

function sampleSprite(url, count) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const S = 100;
      const c = document.createElement('canvas');
      c.width = S; c.height = S;
      const ctx = c.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(img, 0, 0, S, S);
      const data = ctx.getImageData(0, 0, S, S).data;
      const pts = [];
      for (let y = 0; y < S; y++) {
        for (let x = 0; x < S; x++) {
          if (data[(y * S + x) * 4 + 3] > 90) {
            pts.push((x / S - 0.5) * 2, -(y / S - 0.5) * 2);
          }
        }
      }
      const n = pts.length / 2;
      const arr = new Float32Array(count * 3);
      const scale = 2.35;
      for (let i = 0; i < count; i++) {
        const j = n ? (Math.floor(Math.random() * n) * 2) : 0;
        arr[i * 3]     = (n ? pts[j] : 0) * scale + (Math.random() - 0.5) * 0.06;
        arr[i * 3 + 1] = (n ? pts[j + 1] : 0) * scale + (Math.random() - 0.5) * 0.06;
        arr[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
      }
      resolve(arr);
    };
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

export function createScene(container) {
  const low = isMobile();
  const COUNT = low ? 3800 : 9000;
  const R = 2.05;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    52, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 0, 6.4);

  const renderer = new THREE.WebGLRenderer({
    antialias: !low, alpha: true, powerPreference: 'high-performance',
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  const pr = Math.min(window.devicePixelRatio, low ? 1.5 : 2);
  renderer.setPixelRatio(pr);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.02;
  container.appendChild(renderer.domElement);

  // chrome environment (procedural, no external HDRI needed)
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
  scene.environment = envRT.texture;

  // ── central chrome core ─────────────────────────────────────
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.62, low ? 3 : 6),
    new THREE.MeshStandardMaterial({
      color: 0xcfd9ea, metalness: 1.0, roughness: 0.14,
      envMapIntensity: 1.0,
    }),
  );
  scene.add(core);
  const coreGlow = new THREE.PointLight(0x9fd7ff, 3.2, 12);
  scene.add(coreGlow);
  scene.add(new THREE.AmbientLight(0x4a5578, 0.6));

  // ── particle sculpture ──────────────────────────────────────
  const base = new Float32Array(COUNT * 3);
  const target = new Float32Array(COUNT * 3);
  const seed = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    const u = Math.random(), v = Math.random();
    const theta = Math.acos(2 * u - 1), phi = 2 * Math.PI * v;
    const rr = R * (0.8 + 0.2 * Math.random());
    const x = rr * Math.sin(theta) * Math.cos(phi);
    const y = rr * Math.sin(theta) * Math.sin(phi);
    const z = rr * Math.cos(theta);
    base[i * 3] = x; base[i * 3 + 1] = y; base[i * 3 + 2] = z;
    target[i * 3] = x; target[i * 3 + 1] = y; target[i * 3 + 2] = z;
    seed[i] = Math.random();
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(base, 3));
  geo.setAttribute('aTarget', new THREE.BufferAttribute(target, 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));

  const uniforms = {
    uTime: { value: 0 },
    uMorph: { value: 0 },
    uSize: { value: low ? 2.4 : 3.0 },
    uPixelRatio: { value: pr },
    uColA: { value: new THREE.Color(0.62, 0.84, 1.0) },
    uColB: { value: new THREE.Color(0.80, 0.70, 1.0) },
    uColC: { value: new THREE.Color(1.0, 0.85, 0.94) },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms, vertexShader: VERT, fragmentShader: FRAG,
    transparent: true, depthWrite: false, blending: THREE.NormalBlending,
  });
  const points = new THREE.Points(geo, mat);
  scene.add(points);

  // ── postprocessing ──────────────────────────────────────────
  const composer = new EffectComposer(renderer);
  composer.setPixelRatio(pr);
  composer.setSize(container.clientWidth, container.clientHeight);
  composer.addPass(new RenderPass(scene, camera));
  if (!low) {
    composer.addPass(new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      0.5, 0.5, 0.34));
    const rgb = new ShaderPass(RGBShiftShader);
    rgb.uniforms.amount.value = 0.0011;
    composer.addPass(rgb);
  }
  composer.addPass(new OutputPass());

  // ── interaction state ───────────────────────────────────────
  const targetAttr = geo.getAttribute('aTarget');
  let morphSeq = 0;

  async function morphTo(url) {
    const seq = ++morphSeq;
    const arr = await sampleSprite(url, COUNT);
    if (seq !== morphSeq || !arr) return; // superseded / failed
    targetAttr.array.set(arr);
    targetAttr.needsUpdate = true;
    gsap.to(uniforms.uMorph, { value: 1, duration: 1.05, ease: 'power3.inOut' });
    gsap.to(core.scale, { x: 0.15, y: 0.15, z: 0.15, duration: 0.8, ease: 'power2.in' });
  }
  function reset() {
    morphSeq++;
    gsap.to(uniforms.uMorph, { value: 0, duration: 0.9, ease: 'power3.inOut' });
    gsap.to(core.scale, { x: 1, y: 1, z: 1, duration: 0.9, ease: 'power2.out' });
  }

  // pointer parallax
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  function setPointer(nx, ny) { pointer.tx = nx; pointer.ty = ny; }

  // ── render loop ─────────────────────────────────────────────
  const clock = new THREE.Clock();
  let raf = 0, alive = true;
  function tick() {
    if (!alive) return;
    raf = requestAnimationFrame(tick);
    const t = clock.getElapsedTime();
    uniforms.uTime.value = t;
    points.rotation.y = t * 0.06;
    points.rotation.x = Math.sin(t * 0.15) * 0.12;
    core.rotation.y = t * 0.22;
    core.rotation.x = t * 0.13;

    pointer.x += (pointer.tx - pointer.x) * 0.05;
    pointer.y += (pointer.ty - pointer.y) * 0.05;
    camera.position.x = pointer.x * 0.7;
    camera.position.y = pointer.y * 0.5;
    camera.lookAt(0, 0, 0);

    composer.render();
  }
  tick();

  // ── resize / dispose ────────────────────────────────────────
  function resize() {
    const w = container.clientWidth, h = container.clientHeight;
    camera.aspect = w / h; camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    composer.setSize(w, h);
  }
  function dispose() {
    alive = false; cancelAnimationFrame(raf);
    geo.dispose(); mat.dispose(); core.geometry.dispose();
    core.material.dispose(); envRT.dispose(); pmrem.dispose();
    composer.dispose?.(); renderer.dispose();
    if (renderer.domElement.parentNode === container)
      container.removeChild(renderer.domElement);
  }

  return { morphTo, reset, resize, dispose, setPointer };
}
