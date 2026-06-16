// TS — entry point. Runs the U0 clock proof on load, then renders the clock as
// the **unit circle** it is: a point cycling forward around the circle, phase
// 0→1 = one trip around, never resting. This circle is the device's clock —
// everything else will be a projection and sampling of it.
//
// The render is deliberately crude — just enough to show the clock. The good
// render is TS-B's, later. ↑/↓ change the period length (the trip's duration);
// the point keeps cycling, bounded to the circle, however the period changes.
//
// Plain JS the browser runs as-is. The lattice serves this file directly — the
// file you edit is the file that runs. Types are JSDoc, checked by `tsc --noEmit`.

import { clock, phaseAt, cyclesAt, frequency, angularVelocity, cosAt, sinAt } from './clock.js';
import { runProofs } from './clock.proof.js';

const canvas = /** @type {HTMLCanvasElement} */ (document.querySelector('canvas'));
const msg = /** @type {HTMLDivElement} */ (document.querySelector('#msg'));
const read = /** @type {HTMLDivElement} */ (document.querySelector('#read'));

// --- U0 proof, run in isolation on load -----------------------------------
const proofs = runProofs();
const allPass = proofs.every((p) => p.pass);
for (const p of proofs) {
  // eslint-disable-next-line no-console
  console.log(`[U0 clock] ${p.pass ? 'PASS' : 'FAIL'}  ${p.name} — ${p.detail}`);
}
console.log(`[U0 clock] ${allPass ? 'ALL PASS' : 'FAILURES PRESENT'}`);
msg.textContent = `U0 — the clock · the unit circle   ·   proof ${allPass ? 'ALL PASS' : 'FAIL (console)'}`;

// --- the clock being watched ----------------------------------------------
const theClock = clock(2.0); // period = 2s to start

// --- timebase (the beam) ---------------------------------------------------
// The driver owns a monotonic odometer of TURNS. It advances with real time when
// playing, scaled by `timeScale` (negative = reverse), frozen when paused, and is
// the single source of position. The clock stays pure: phase = fract(turns+phase0)
// recomputed each frame (clock.js), so it never accumulates or overflows — only
// this odometer accumulates, which is exactly what an odometer is for. A period
// change just alters how fast `turns` advances next — `turns` is continuous, so
// the phase never jumps; the old re-anchor hack is gone.
let turns = 0;       // total turns since load — survives speed changes (the odometer)
let distance = 0;    // path length the point has traveled (arc, always grows; |Δ| even in reverse)
let timeScale = 1;   // playback rate: 1 = real, <1 slow-mo, <0 reverse
let playing = true;  // space toggles
let lastFrame = performance.now() / 1000;
let radixN = 3;      // subdivisions of the circle (the radix base; 3 = ternary, the keystone). May be irrational.

// speed slider — logarithmic, ~0.01 Hz (almost halted, a 100 s trip) up to a
// 10 kHz cap. Above the visible-cycling range it would only alias, which is a
// sampling/beam concern, so the clock's playable range stops here.
const slider = /** @type {HTMLInputElement} */ (document.querySelector('#period'));
const pval = /** @type {HTMLSpanElement} */ (document.querySelector('#pval'));
const LOG_LO = -2; // 0.01 Hz — a 100 s trip, almost halted
const LOG_HI = 4;  // 10 kHz — the cap

/** Set the clock's period. With the odometer driving position this just changes
 * how fast `turns` advances next; `turns` is continuous, so phase never jumps.
 * @param {number} p */
function setPeriod(p) {
  theClock.period = p;
}
/** @param {number} f @returns {string} */
function fmtFreq(f) {
  if (f >= 1e3) return (f / 1e3).toFixed(2) + ' kHz';
  return f.toFixed(2) + ' Hz';
}
/** @param {number} p @returns {string} */
function fmtPeriod(p) {
  if (p >= 1) return p.toFixed(2) + ' s';
  if (p >= 1e-3) return (p * 1e3).toFixed(2) + ' ms';
  return (p * 1e6).toFixed(0) + ' µs';
}
/** Signed 3-decimal with a leading space for '+', so cos/sin columns line up.
 * @param {number} v @returns {string} */
function signed(v) {
  return (v >= 0 ? ' ' : '') + v.toFixed(3);
}

/** A non-negative integer `value` written in base β (β>1), high→low digits. Exact
 * for an integer base (the keystone case: β=3 → ternary); a greedy beta-expansion
 * for a non-integer/irrational base. This is the radix CROSSING COUNTER in its own
 * base: each crossing is +1, one full turn carries to "10". @param {number} value
 * @param {number} base @returns {number[]} */
function intToBaseDigits(value, base) {
  if (value <= 0) return [0];
  const intBase = Math.abs(base - Math.round(base)) < 1e-9;
  if (intBase) {
    const b = Math.round(base);
    /** @type {number[]} */
    const ds = [];
    let v = value;
    while (v > 0) { ds.unshift(v % b); v = Math.floor(v / b); }
    return ds;
  }
  let k = Math.floor(Math.log(value) / Math.log(base) + 1e-9);
  if (k < 0) k = 0;
  /** @type {number[]} */
  const ds = [];
  let v = value;
  for (let i = k; i >= 0; i--) {
    const p = Math.pow(base, i);
    let d = Math.floor(v / p + 1e-9);
    if (d < 0) d = 0;
    ds.push(d);
    v -= d * p;
  }
  return ds;
}
/** Render base-β digits: packed for an integer base ≤10, else dot-separated (a
 * digit can exceed 9 for base>10 or irrational β). @param {number[]} digits
 * @param {number} base @returns {string} */
function fmtBaseInt(digits, base) {
  const intBase = Math.abs(base - Math.round(base)) < 1e-9;
  return intBase && base <= 10 ? digits.join('') : digits.map(String).join('·');
}

/** The full readout panel — every output the clock exposes at time `t`, as
 * aligned `label  value` rows. This is the atomic unit talking: position,
 * projection, and motion, all live. (Radius is 1 here, so tangential speed |v|
 * and angular momentum L coincide with ω; they separate once radius scales.)
 * @param {number} t @returns {string} */
function readout(t) {
  const phase = phaseAt(theClock, t);
  const total = t / theClock.period + theClock.phase0; // unwrapped turns — monotonic (the odometer)
  const cos = cosAt(theClock, t);
  const sin = sinAt(theClock, t);
  const f = frequency(theClock);
  const w = angularVelocity(theClock);
  const tan = Math.abs(cos) < 1e-9 ? (sin >= 0 ? ' +∞' : ' -∞') : signed(sin / cos);
  // radix: a second clock running N× faster — the circle subdivided N ways
  const N = radixN;
  const subPhase = phase * N - Math.floor(phase * N); // the radix sub-clock's own phase
  const radixCount = Math.floor(total * N);           // crossings counted (one per subdivision passed)
  /** @type {[string, string][]} */
  const rows = [
    ['phase', phase.toFixed(4)],
    ['angle', (phase * 360).toFixed(1).padStart(6) + '°'],
    ['rad', (phase * 2 * Math.PI).toFixed(4)],
    ['cos', signed(cos)],
    ['sin', signed(sin)],
    ['tan', tan],
    ['cycle', String(cyclesAt(theClock, t))],
    ['turns', total.toFixed(4)],
    ['freq', fmtFreq(f)],
    ['ω', w.toFixed(4) + ' rad/s'],
    ['accel', (w * w).toFixed(4)],
    ['dist', distance.toFixed(3)],
    ['radix', N.toFixed(3)],
    ['base', fmtBaseInt(intToBaseDigits(radixCount, N), N)], // the crossing counter in base N (N=3 → ternary)
    ['sub φ', subPhase.toFixed(4)],
    ['r-idx', String(Math.floor(phase * N))],   // which subdivision this turn (= base-N last digit)
    ['r-cnt', String(radixCount)],              // crossings, decimal (same count, base 10)
  ];
  return rows.map(([k, v]) => k.padEnd(7) + v).join('\n');
}
/** @param {number} freq */
function apply(freq) {
  setPeriod(1 / freq);
  // read the speed back OFF the clock (frequency(theClock)), not the slider input —
  // the read-out is a connection on the unit, exercised live.
  pval.textContent = `${fmtFreq(frequency(theClock))}  ·  ${fmtPeriod(theClock.period)}`;
}
const sliderFreq = () => Math.pow(10, LOG_LO + parseFloat(slider.value) * (LOG_HI - LOG_LO));
slider.addEventListener('input', () => apply(sliderFreq()));
apply(sliderFreq());

// --- input knobs & time controls -------------------------------------------
const phase0El = /** @type {HTMLInputElement} */ (document.querySelector('#phase0'));
const phase0val = /** @type {HTMLSpanElement} */ (document.querySelector('#phase0val'));
const scaleEl = /** @type {HTMLInputElement} */ (document.querySelector('#scale'));
const scaleval = /** @type {HTMLSpanElement} */ (document.querySelector('#scaleval'));
const scrubEl = /** @type {HTMLInputElement} */ (document.querySelector('#scrub'));
const scrubval = /** @type {HTMLSpanElement} */ (document.querySelector('#scrubval'));
const hint = /** @type {HTMLDivElement} */ (document.querySelector('#hint'));

function refreshHint() {
  hint.textContent = (playing ? '▶ playing' : '⏸ paused') + '   ·   space pause · ←/→ step';
}
// phase0 — the head-start knob: shifts where the clock sits, mod 1
phase0El.addEventListener('input', () => {
  theClock.phase0 = parseFloat(phase0El.value);
  phase0val.textContent = theClock.phase0.toFixed(3);
});
// playback — the beam's rate; negative runs the clock backward
scaleEl.addEventListener('input', () => {
  timeScale = parseFloat(scaleEl.value);
  scaleval.textContent = timeScale.toFixed(2) + '×';
});
// scrub — set the phase within the current turn (drag while paused to inspect)
scrubEl.addEventListener('input', () => {
  turns = Math.floor(turns) + parseFloat(scrubEl.value);
  scrubval.textContent = parseFloat(scrubEl.value).toFixed(3);
});
// space = play/pause; arrows = step one notch (and pause, for deterministic inspection)
window.addEventListener('keydown', (e) => {
  const el = document.activeElement;
  if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) return;
  if (e.code === 'Space') { e.preventDefault(); playing = !playing; refreshHint(); }
  else if (e.code === 'ArrowRight') { e.preventDefault(); playing = false; turns += 1 / radixN; refreshHint(); } // one subdivision
  else if (e.code === 'ArrowLeft') { e.preventDefault(); playing = false; turns -= 1 / radixN; refreshHint(); }
});
refreshHint();

// radix — subdivisions of the circle. A continuous slider plus presets, so an
// irrational base (φ, e, π) can be set exactly (a slider step never lands on one).
const radixEl = /** @type {HTMLInputElement} */ (document.querySelector('#radix'));
const radixval = /** @type {HTMLSpanElement} */ (document.querySelector('#radixval'));
/** @param {number} n */
function setRadix(n) {
  radixN = n;
  radixval.textContent = n.toFixed(3);
  radixEl.value = String(Math.min(16, Math.max(2, n))); // keep the thumb in range when a preset sets it
}
radixEl.addEventListener('input', () => setRadix(parseFloat(radixEl.value)));
document.querySelectorAll('#controls .presets button').forEach((b) => {
  b.addEventListener('click', () => setRadix(parseFloat(/** @type {HTMLElement} */ (b).dataset.r || '3')));
});
setRadix(radixN);

async function main() {
  if (!navigator.gpu) { msg.textContent = 'WebGPU is not available in this browser.'; return; }
  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) { msg.textContent = 'No WebGPU adapter found.'; return; }
  const device = await adapter.requestDevice();
  const ctx = /** @type {GPUCanvasContext} */ (canvas.getContext('webgpu'));
  const format = navigator.gpu.getPreferredCanvasFormat();
  ctx.configure({ device, format, alphaMode: 'premultiplied' });

  // uniform: { phase: f32, radixN: f32, res: vec2f, vsign: f32, pad×3 } — 32 bytes
  const uniform = device.createBuffer({
    size: 32,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });
  const uniformData = new Float32Array(8);

  const shader = device.createShaderModule({
    code: /* wgsl */ `
      struct U { phase: f32, radixN: f32, res: vec2f, vsign: f32, _p0: f32, _p1: f32, _p2: f32 };
      @group(0) @binding(0) var<uniform> u: U;

      @vertex fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
        var p = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0));
        return vec4f(p[i], 0.0, 1.0);
      }

      // distance from point p to the segment a→b (guarded for a zero-length segment,
      // which happens when a shadow sits on an axis at phase 0/¼/½/¾)
      fn segDist(p: vec2f, a: vec2f, b: vec2f) -> f32 {
        let pa = p - a;
        let ba = b - a;
        let d = dot(ba, ba);
        if (d < 1e-9) { return length(pa); }
        let h = clamp(dot(pa, ba) / d, 0.0, 1.0);
        return length(pa - ba * h);
      }

      // an arrow from tail to tip: shaft + a two-stroke arrowhead
      // (params are tail/tip — 'from' is a WGSL reserved word)
      fn arrowMask(m: vec2f, tail: vec2f, tip: vec2f, w: f32) -> f32 {
        let shaft = smoothstep(w, 0.0, segDist(m, tail, tip));
        let back = -normalize(tip - tail);
        let c = 0.906; let s = 0.423;   // ±25°
        let hl = 0.034;
        let lft = tip + vec2f(back.x * c - back.y * s, back.x * s + back.y * c) * hl;
        let rgt = tip + vec2f(back.x * c + back.y * s, -back.x * s + back.y * c) * hl;
        let head = smoothstep(w, 0.0, min(segDist(m, tip, lft), segDist(m, tip, rgt)));
        return max(shaft, head);
      }

      @fragment fn fs(@builtin(position) frag: vec4f) -> @location(0) vec4f {
        let TAU = 6.2831853;
        let center = u.res * 0.5;
        let scale = min(u.res.x, u.res.y);
        let p = (frag.xy - center) / scale;
        let m = vec2f(p.x, -p.y);                // math orientation: +y is up
        let r = length(m);
        let R = 0.35;                            // the unit circle's drawn radius
        var col = vec3f(0.02, 0.03, 0.05);

        let ring = smoothstep(0.005, 0.0, abs(r - R));
        let pixPhase = fract(atan2(m.y, m.x) / TAU);   // 0..1 around, CCW from +x

        // the unit circle — the whole 0→1, dim
        col += vec3f(0.15) * ring;
        // swept arc 0 → phase: the FILLED RATIO (phase shown as how much of the circle)
        col += vec3f(0.10, 0.42, 0.60) * ring * step(pixPhase, u.phase);

        // quarter (cos/sin) ticks at 0, ¼, ½, ¾ — short marks just OUTSIDE the ring
        let qd = fract(pixPhase * 4.0);
        let tickRing = smoothstep(0.035, 0.0, abs(r - (R + 0.04)));
        let tickMask = smoothstep(0.010, 0.0, min(qd, 1.0 - qd)) * tickRing;
        col += vec3f(0.22) * tickMask;
        // light them white as the hand passes (like the spokes); the 0 tick gets a
        // bigger, slower pulse. direction-aware via vsign.
        let tPhase = round(pixPhase * 4.0) / 4.0;          // nearest quarter tick (0/.25/.5/.75)
        let tSince = fract(u.vsign * (u.phase - tPhase));
        let isZero = step(tPhase, 0.001) + step(0.999, tPhase);
        let tWin = 0.16 + isZero * 0.12;                   // 0 fades slower
        col += vec3f(0.90, 0.95, 1.0) * tickMask * smoothstep(tWin, 0.0, tSince) * (1.0 + isZero * 0.7);

        // radix subdivisions — N literal divisions of the DISC: spokes from center to
        // rim at each k/N, dividing it into sectors. Distinct from the outside quarter
        // ticks (these live inside). For irrational N the spokes never close — honest.
        let aN = pixPhase * u.radixN;
        let dAng = min(fract(aN), 1.0 - fract(aN)) / u.radixN;   // turns to the nearest spoke
        let perp = r * 6.2831853 * dAng;                         // ≈ screen distance to that spoke
        let spoke = smoothstep(0.004, 0.0, perp) * step(r, R) * smoothstep(0.0, 0.03, r);
        col += vec3f(0.14, 0.16, 0.24) * spoke;
        // light a spoke white as the hand passes it, fading over ~0.18 turn after.
        // direction-aware (u.vsign), so it lights the spoke just behind the motion.
        let sPhase = round(pixPhase * u.radixN) / u.radixN;      // the nearest spoke's phase
        let since = fract(u.vsign * (u.phase - sPhase));         // turns since the hand crossed it
        col += vec3f(0.85, 0.92, 1.0) * spoke * smoothstep(0.18, 0.0, since);
        // the sector the hand is in — a faint fill
        let inSector = step(abs(floor(pixPhase * u.radixN) - floor(u.phase * u.radixN)), 0.5) * step(r, R);
        col += vec3f(0.04, 0.05, 0.10) * inSector;

        // phase 0 — a brighter notch at angle 0 (the start/return of the trip). It
        // flares white and glows when the hand crosses 0 — the biggest pulse of all.
        let zeroAt = vec2f(R + 0.075, 0.0);
        let zeroDot = smoothstep(0.018, 0.0, length(m - zeroAt));
        col += vec3f(0.34) * zeroDot;
        let hit0 = smoothstep(0.30, 0.0, fract(u.vsign * u.phase)); // recency of crossing 0
        col += vec3f(0.95, 0.97, 1.0) * zeroDot * hit0 * 1.5;                          // the dot flares
        col += vec3f(0.55, 0.75, 1.0) * smoothstep(0.06, 0.0, length(m - zeroAt)) * hit0 * 0.6; // soft halo

        // the cycling point — angle = 2π·phase, counterclockwise, never resting
        let a = TAU * u.phase;
        let pt = vec2f(cos(a), sin(a)) * R;
        // the hand from center to the point
        let h = clamp(dot(m, pt) / dot(pt, pt), 0.0, 1.0);
        col += vec3f(0.16, 0.45, 0.65) * smoothstep(0.004, 0.0, length(m - pt * h)) * 0.8;
        // the point itself
        col += vec3f(0.32, 0.86, 1.0) * smoothstep(0.020, 0.0, length(m - pt));

        // cos / sin as the point's SHADOWS on the axes — the projections made visible.
        // cos = x-shadow (orange, along the x-axis); sin = y-shadow (green, up the y-axis).
        let cosPt = vec2f(pt.x, 0.0);
        let sinPt = vec2f(0.0, pt.y);
        // dim drop-lines from the point down to each axis
        col += vec3f(0.30, 0.18, 0.08) * smoothstep(0.004, 0.0, segDist(m, pt, cosPt));
        col += vec3f(0.08, 0.26, 0.14) * smoothstep(0.004, 0.0, segDist(m, pt, sinPt));
        // the projected lengths on the axes (bright): cos along x, sin along y
        col += vec3f(0.85, 0.55, 0.20) * smoothstep(0.006, 0.0, segDist(m, vec2f(0.0, 0.0), cosPt));
        col += vec3f(0.30, 0.80, 0.45) * smoothstep(0.006, 0.0, segDist(m, vec2f(0.0, 0.0), sinPt));
        // the shadow points on the axes
        col += vec3f(1.00, 0.65, 0.25) * smoothstep(0.016, 0.0, length(m - cosPt));
        col += vec3f(0.40, 0.95, 0.60) * smoothstep(0.016, 0.0, length(m - sinPt));

        // when |cos| = |sin| the point + its two shadows + origin make a perfect
        // SQUARE (the 45° moments, 4 per turn). Flash a warm fill inside that box,
        // peaking at the square moment — warm gold contrasts the blue swept arc.
        let inX = step(min(0.0, pt.x), m.x) * step(m.x, max(0.0, pt.x));
        let inY = step(min(0.0, pt.y), m.y) * step(m.y, max(0.0, pt.y));
        let squareness = smoothstep(0.045, 0.0, abs(abs(pt.x) - abs(pt.y)));
        col += vec3f(0.95, 0.78, 0.38) * inX * inY * squareness * 0.28;

        // velocity vector — tangent to the circle, the way the point moves (flips with
        // reverse playback). |v| is constant on the unit circle, so a fixed length.
        let tang = normalize(vec2f(-pt.y, pt.x)) * u.vsign;
        col += vec3f(0.25, 0.95, 0.95) * arrowMask(m, pt, pt + tang * 0.15, 0.005);
        // acceleration vector — centripetal, always toward the center
        let toC = normalize(vec2f(0.0, 0.0) - pt);
        col += vec3f(0.98, 0.42, 0.58) * arrowMask(m, pt, pt + toC * 0.11, 0.005);

        return vec4f(col, 1.0);
      }
    `,
  });

  const pipeline = device.createRenderPipeline({
    layout: 'auto',
    vertex: { module: shader, entryPoint: 'vs' },
    fragment: { module: shader, entryPoint: 'fs', targets: [{ format }] },
    primitive: { topology: 'triangle-list' },
  });

  const bindGroup = device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [{ binding: 0, resource: { buffer: uniform } }],
  });

  function resize() {
    const dpr = Math.min(window.devicePixelRatio, 2);
    canvas.width = Math.round(canvas.clientWidth * dpr);
    canvas.height = Math.round(canvas.clientHeight * dpr);
  }
  resize();
  window.addEventListener('resize', resize);

  function frame() {
    const now = performance.now() / 1000;
    const dt = now - lastFrame;
    lastFrame = now;
    if (playing) {
      const dTurns = (dt * timeScale) / theClock.period;
      turns += dTurns;                              // signed: reverses under negative playback
      distance += Math.abs(dTurns) * 2 * Math.PI;   // path length: always grows (arc on the unit circle)
    }
    const t = turns * theClock.period; // effective t so phaseAt = fract(turns + phase0)
    const phase = phaseAt(theClock, t);

    uniformData[0] = phase;
    uniformData[1] = radixN;
    uniformData[2] = canvas.width;
    uniformData[3] = canvas.height;
    uniformData[4] = timeScale >= 0 ? 1 : -1; // velocity-arrow direction (forward/reverse)
    device.queue.writeBuffer(uniform, 0, uniformData);

    const encoder = device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [{
        view: ctx.getCurrentTexture().createView(),
        clearValue: { r: 0.02, g: 0.03, b: 0.05, a: 1 },
        loadOp: 'clear',
        storeOp: 'store',
      }],
    });
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);
    pass.draw(3);
    pass.end();
    device.queue.submit([encoder.finish()]);

    // the full readout panel — every output the clock exposes, live
    read.textContent = readout(t);

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

main().catch((/** @type {unknown} */ e) => {
  msg.textContent = 'WebGPU init failed: ' + (e instanceof Error ? e.message : String(e));
});
