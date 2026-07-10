/* Cozy pixel sound — all synthesized via WebAudio, no external files.
   SFX for taps/toggles + an optional gentle looping chiptune (muted by default). */

let ctx = null;
let master = null;
let musicOn = false;
let musicTimer = null;
let musicGain = null;
let step = 0;

function ac() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.5;
    master.connect(ctx.destination);
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function blip(freq, dur = 0.08, type = 'square', vol = 0.18, slideTo = null) {
  const c = ac();
  if (!c) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, c.currentTime);
  if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, c.currentTime + dur);
  g.gain.setValueAtTime(0.0001, c.currentTime);
  g.gain.exponentialRampToValueAtTime(vol, c.currentTime + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
  o.connect(g);
  g.connect(master);
  o.start();
  o.stop(c.currentTime + dur + 0.02);
}

export function sfx(name) {
  switch (name) {
    case 'tap':     blip(520, 0.05, 'square', 0.12); break;
    case 'select':  blip(660, 0.06, 'square', 0.15); blip(880, 0.05, 'square', 0.10); break;
    case 'open':    blip(392, 0.10, 'triangle', 0.16, 784); break;
    case 'close':   blip(560, 0.10, 'triangle', 0.14, 300); break;
    case 'confirm': blip(523, 0.07, 'square', 0.16); setTimeout(() => blip(784, 0.10, 'square', 0.16), 70); break;
    case 'plus':    blip(700, 0.045, 'square', 0.12); break;
    case 'minus':   blip(430, 0.045, 'square', 0.12); break;
    case 'coin':    blip(988, 0.06, 'square', 0.14); setTimeout(() => blip(1319, 0.09, 'square', 0.14), 55); break;
    default:        blip(500, 0.05, 'square', 0.1);
  }
}

/* ---- gentle looping cozy melody (pentatonic, soft) ---- */
const MELODY = [ // freq, in a warm C pentatonic; 0 = rest
  523, 0, 587, 659, 0, 784, 659, 587,
  523, 0, 440, 523, 0, 587, 523, 0,
];
const BASS = [131, 131, 165, 165, 175, 175, 147, 147];

function tick() {
  const c = ac();
  if (!c || !musicOn) return;
  const t = c.currentTime;
  const note = MELODY[step % MELODY.length];
  if (note) {
    const o = c.createOscillator(), g = c.createGain();
    o.type = 'triangle';
    o.frequency.value = note;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.06, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.26);
    o.connect(g); g.connect(musicGain); o.start(); o.stop(t + 0.3);
  }
  if (step % 2 === 0) {
    const b = BASS[(step / 2) % BASS.length];
    const o = c.createOscillator(), g = c.createGain();
    o.type = 'sine'; o.frequency.value = b;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.05, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
    o.connect(g); g.connect(musicGain); o.start(); o.stop(t + 0.55);
  }
  step++;
}

export function toggleMusic() {
  const c = ac();
  if (!c) return false;
  musicOn = !musicOn;
  if (musicOn) {
    if (!musicGain) { musicGain = c.createGain(); musicGain.gain.value = 0.7; musicGain.connect(master); }
    step = 0;
    tick();
    musicTimer = setInterval(tick, 300); // ~200bpm eighth-ish, cozy
  } else {
    clearInterval(musicTimer);
    musicTimer = null;
  }
  return musicOn;
}

export function isMusicOn() { return musicOn; }
export function primeAudio() { ac(); } // call on first gesture
