// THE UNIT — the unit circle. A point cycling the circle: phase IS the clock
// reading and the angle IS the rotation reading (one cycling phase — clock and
// rotation are the same thing). Holds the in-plane projection (cos/sin) and every
// relational signal. The root everything downstream projects from.
//
// A mountable atomic unit behind the shell (main.js): mount() builds its controls
// + GPU pipeline, frame() renders one tick, unmount() tears its UI down. The shell
// owns the canvas, the device, and the render loop.
//
// Plain JS + JSDoc, no build. clock.js / clock.proof.js are this unit's math.

import { clock, phaseAt, cyclesAt, frequency, angularVelocity, cosAt, sinAt } from './clock.js';
import { runProofs } from './clock.proof.js';

/** @typedef {{ canvas: HTMLCanvasElement, device: GPUDevice, ctx: GPUCanvasContext,
 *   format: GPUTextureFormat, read: HTMLElement, controls: HTMLElement, msg: HTMLElement }} Shared */

// --- the clock being watched, and the timebase (the beam) ------------------
// The driver owns a monotonic odometer of TURNS — advances with real time when
// playing, scaled by timeScale (negative = reverse), frozen when paused. The clock
// stays pure (phase = fract(turns+phase0)); only this odometer accumulates.
const theClock = clock(2.0);
let turns = 0;
let distance = 0;
let timeScale = 1;
let playing = true;
let lastFrame = 0;
let radixN = 3;
const LOG_LO = -2; // 0.01 Hz
const LOG_HI = 4;  // 10 kHz

// --- resources assigned at mount -------------------------------------------
let running = false;
/** @type {Shared | null} */
let S = null;
/** @type {GPUBuffer} */ let uniform;
const uniformData = new Float32Array(8);
/** @type {GPURenderPipeline} */ let pipeline;
/** @type {GPUBindGroup} */ let bindGroup;
/** @type {HTMLInputElement} */ let slider;
/** @type {HTMLElement} */ let pval;
/** @type {HTMLInputElement} */ let phase0El;
/** @type {HTMLElement} */ let phase0val;
/** @type {HTMLInputElement} */ let scaleEl;
/** @type {HTMLElement} */ let scaleval;
/** @type {HTMLInputElement} */ let scrubEl;
/** @type {HTMLElement} */ let scrubval;
/** @type {HTMLInputElement} */ let radixEl;
/** @type {HTMLElement} */ let radixval;
/** @type {HTMLElement} */ let hint;
/** @type {(e: KeyboardEvent) => void} */ let keyHandler;

const CONTROLS_HTML = `
  <div class="ctl"><label>speed <span id="pval">0.50 Hz</span></label>
    <input id="period" type="range" min="0" max="1" step="0.001" value="0.283" /></div>
  <div class="ctl"><label>radix <span id="radixval">3.000</span></label>
    <input id="radix" type="range" min="2" max="16" step="0.01" value="3" />
    <div class="presets"><button data-r="3">3</button><button data-r="1.61803398875">&phi;</button><button data-r="2.718281828459">e</button><button data-r="3.14159265359">&pi;</button></div></div>
  <div class="ctl"><label>phase&#8320; <span id="phase0val">0.000</span></label>
    <input id="phase0" type="range" min="0" max="1" step="0.001" value="0" /></div>
  <div class="ctl"><label>playback <span id="scaleval">1.00&times;</span></label>
    <input id="scale" type="range" min="-3" max="3" step="0.01" value="1" /></div>
  <div class="ctl"><label>scrub <span id="scrubval">&mdash;</span></label>
    <input id="scrub" type="range" min="0" max="1" step="0.0005" value="0" /></div>
  <div id="hint">space pause &middot; &larr;/&rarr; step</div>`;

const SHADER = /* wgsl */ `
  struct U { phase: f32, radixN: f32, res: vec2f, vsign: f32, _p0: f32, _p1: f32, _p2: f32 };
  @group(0) @binding(0) var<uniform> u: U;

  @vertex fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
    var p = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0));
    return vec4f(p[i], 0.0, 1.0);
  }

  // distance from point p to the segment a→b (guarded for a zero-length segment,
  // which happens when a projection sits on an axis at phase 0/¼/½/¾)
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
    // light them white as the hand passes; the 0 tick gets a bigger, slower pulse
    let tPhase = round(pixPhase * 4.0) / 4.0;
    let tSince = fract(u.vsign * (u.phase - tPhase));
    let isZero = step(tPhase, 0.001) + step(0.999, tPhase);
    let tWin = 0.16 + isZero * 0.12;
    col += vec3f(0.90, 0.95, 1.0) * tickMask * smoothstep(tWin, 0.0, tSince) * (1.0 + isZero * 0.7);

    // radix subdivisions — N spokes dividing the DISC into sectors
    let aN = pixPhase * u.radixN;
    let dAng = min(fract(aN), 1.0 - fract(aN)) / u.radixN;
    let perp = r * 6.2831853 * dAng;
    let spoke = smoothstep(0.004, 0.0, perp) * step(r, R) * smoothstep(0.0, 0.03, r);
    col += vec3f(0.14, 0.16, 0.24) * spoke;
    // light a spoke white as the hand passes it, fading; direction-aware
    let sPhase = round(pixPhase * u.radixN) / u.radixN;
    let since = fract(u.vsign * (u.phase - sPhase));
    col += vec3f(0.85, 0.92, 1.0) * spoke * smoothstep(0.18, 0.0, since);
    // the sector the hand is in — a faint fill
    let inSector = step(abs(floor(pixPhase * u.radixN) - floor(u.phase * u.radixN)), 0.5) * step(r, R);
    col += vec3f(0.04, 0.05, 0.10) * inSector;

    // the inscribed N-gon — chords between consecutive radix vertices. floor(N)
    // chords: closes for integer N; for irrational N stops at the last real spoke.
    var polyD = 1e9;
    let edges = i32(floor(u.radixN));
    for (var k: i32 = 0; k < 16; k = k + 1) {
      if (k >= edges) { break; }
      let a0 = 6.2831853 * f32(k) / u.radixN;
      let a1 = 6.2831853 * f32(k + 1) / u.radixN;
      let v0 = vec2f(cos(a0), sin(a0)) * R;
      let v1 = vec2f(cos(a1), sin(a1)) * R;
      polyD = min(polyD, segDist(m, v0, v1));
    }
    col += vec3f(0.45, 0.34, 0.62) * smoothstep(0.004, 0.0, polyD);

    // phase 0 — a brighter notch at angle 0; flares white + glows on each crossing
    let zeroAt = vec2f(R + 0.075, 0.0);
    let zeroDot = smoothstep(0.018, 0.0, length(m - zeroAt));
    col += vec3f(0.34) * zeroDot;
    let hit0 = smoothstep(0.30, 0.0, fract(u.vsign * u.phase));
    col += vec3f(0.95, 0.97, 1.0) * zeroDot * hit0 * 1.5;
    col += vec3f(0.55, 0.75, 1.0) * smoothstep(0.06, 0.0, length(m - zeroAt)) * hit0 * 0.6;

    // the cycling point — angle = 2π·phase, CCW, never resting
    let a = TAU * u.phase;
    let pt = vec2f(cos(a), sin(a)) * R;
    let h = clamp(dot(m, pt) / dot(pt, pt), 0.0, 1.0);
    col += vec3f(0.16, 0.45, 0.65) * smoothstep(0.004, 0.0, length(m - pt * h)) * 0.8;  // the hand
    col += vec3f(0.32, 0.86, 1.0) * smoothstep(0.020, 0.0, length(m - pt));             // the point

    // the polygon point — where the hand meets the inscribed N-gon edge. A second dot
    // tracing the N-gon as the main point traces the circle. Along the hand the edge
    // sits at R·cos(π/N)/cos(β), β = offset from the edge midpoint (= R at a vertex,
    // = the apothem at the midpoint). Gated off in the open gap of an irrational N-gon.
    let pf = fract(u.phase * u.radixN);                              // position within the current edge
    let hasEdge = step(floor(u.phase * u.radixN) + 0.5, floor(u.radixN));
    let beta = (6.2831853 / u.radixN) * (pf - 0.5);
    let rPoly = R * cos(3.14159265 / u.radixN) / max(cos(beta), 0.001);
    let ppt = vec2f(cos(a), sin(a)) * rPoly;
    col += vec3f(0.92, 0.88, 0.25) * smoothstep(0.018, 0.0, length(m - ppt)) * hasEdge; // yellow polygon dot

    // cos / sin as the point's PROJECTIONS onto the axes (its coordinates dropped
    // to each axis). cos = x-projection (orange); sin = y-projection (green).
    let cosPt = vec2f(pt.x, 0.0);
    let sinPt = vec2f(0.0, pt.y);
    col += vec3f(0.30, 0.18, 0.08) * smoothstep(0.004, 0.0, segDist(m, pt, cosPt));
    col += vec3f(0.08, 0.26, 0.14) * smoothstep(0.004, 0.0, segDist(m, pt, sinPt));
    col += vec3f(0.85, 0.55, 0.20) * smoothstep(0.006, 0.0, segDist(m, vec2f(0.0, 0.0), cosPt));
    col += vec3f(0.30, 0.80, 0.45) * smoothstep(0.006, 0.0, segDist(m, vec2f(0.0, 0.0), sinPt));
    col += vec3f(1.00, 0.65, 0.25) * smoothstep(0.016, 0.0, length(m - cosPt));
    col += vec3f(0.40, 0.95, 0.60) * smoothstep(0.016, 0.0, length(m - sinPt));

    // |cos| = |sin| → the point + its projections + origin make a perfect SQUARE
    // (45° moments, 4/turn). Warm-gold flash peaks there, contrasting the blue arc.
    let inX = step(min(0.0, pt.x), m.x) * step(m.x, max(0.0, pt.x));
    let inY = step(min(0.0, pt.y), m.y) * step(m.y, max(0.0, pt.y));
    let squareness = smoothstep(0.045, 0.0, abs(abs(pt.x) - abs(pt.y)));
    col += vec3f(0.95, 0.78, 0.38) * inX * inY * squareness * 0.28;

    // velocity (tangent, flips on reverse) and acceleration (centripetal) vectors
    let tang = normalize(vec2f(-pt.y, pt.x)) * u.vsign;
    col += vec3f(0.25, 0.95, 0.95) * arrowMask(m, pt, pt + tang * 0.15, 0.005);
    let toC = normalize(vec2f(0.0, 0.0) - pt);
    col += vec3f(0.98, 0.42, 0.58) * arrowMask(m, pt, pt + toC * 0.11, 0.005);

    return vec4f(col, 1.0);
  }
`;

/** @param {number} p */
function setPeriod(p) { theClock.period = p; }
// — the heart's parameters, exposed so the kit drives it with our own (scrub) controls —
/** @param {number} f */ export function setFrequency(f) { theClock.period = 1 / Math.max(f, 1e-9); }
/** @param {number} p */ export function setPhase0(p) { theClock.phase0 = p; }
/** @param {number} s */ export function setTimeScale(s) { timeScale = s; }
/** @param {boolean} b */ export function setPlaying(b) { playing = b; }
/** Seek the hand to phase `p∈[0,1]` by hand — sets the odometer so phase reads p
 *  (independent of phase0). Play, if running, continues forward from here. @param {number} p */
export function setScrub(p) { turns = p - theClock.phase0; }
/** @param {number} n */ export function setRadixN(n) { radixN = n; }
export function heartState() { return { freq: frequency(theClock), radix: radixN, phase0: theClock.phase0, timeScale, playing }; }
/** The master clock's current period (seconds). Driven params derive theirs: period = heartPeriod × ratio. */
export function heartPeriod() { return theClock.period; }
/** @param {number} f @returns {string} */
function fmtFreq(f) { return f >= 1e3 ? (f / 1e3).toFixed(2) + ' kHz' : f.toFixed(2) + ' Hz'; }
/** @param {number} p @returns {string} */
function fmtPeriod(p) {
  if (p >= 1) return p.toFixed(2) + ' s';
  if (p >= 1e-3) return (p * 1e3).toFixed(2) + ' ms';
  return (p * 1e6).toFixed(0) + ' µs';
}
/** @param {number} v @returns {string} */
function signed(v) { return (v >= 0 ? ' ' : '') + v.toFixed(3); }

/** Integer `value` in base β (β>1), high→low digits. Exact for integer base
 * (β=3 → ternary); greedy beta-expansion otherwise. @param {number} value
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
/** @param {number[]} digits @param {number} base @returns {string} */
function fmtBaseInt(digits, base) {
  const intBase = Math.abs(base - Math.round(base)) < 1e-9;
  return intBase && base <= 10 ? digits.join('') : digits.map(String).join('·');
}

/** The full readout — every output the unit exposes at time `t`, two columns.
 * @param {number} t @returns {string} */
function readout(t) {
  const phase = phaseAt(theClock, t);
  const total = t / theClock.period + theClock.phase0;
  const cos = cosAt(theClock, t);
  const sin = sinAt(theClock, t);
  const f = frequency(theClock);
  const w = angularVelocity(theClock);
  const tan = Math.abs(cos) < 1e-9 ? (sin >= 0 ? ' +∞' : ' -∞') : signed(sin / cos);
  const N = radixN;
  const subPhase = phase * N - Math.floor(phase * N);
  const radixCount = Math.floor(total * N);
  const side = 2 * Math.sin(Math.PI / N);
  const perim = N * side;
  const area = (N / 2) * Math.sin((2 * Math.PI) / N);
  const gap = 2 * Math.PI - perim;
  // the polygon dot's local deviation — how far the N-gon edge sits inside the circle
  // along the hand (0 at a vertex, max ≈ 1−cos(π/N) at the edge midpoint), N×/turn
  const pf = phase * N - Math.floor(phase * N);
  const hasEdge = Math.floor(phase * N) < Math.floor(N);
  const beta = ((2 * Math.PI) / N) * (pf - 0.5);   // angle off the edge midpoint
  const secVal = 1 / Math.max(Math.cos(beta), 1e-3);  // the polygon dot's value: sec(β)
  const polyR = Math.cos(Math.PI / N) * secVal;       // dot radius / R = apothem-ratio · sec(β)
  const quad = 1 + Math.floor(phase * 4);
  const cos2 = cos * cos - sin * sin;
  const sin2 = 2 * sin * cos;
  const rMag = Math.hypot(cos, sin);
  const vdotr = -sin * cos + cos * sin;
  /** @type {[string, string][]} */
  const rows = [
    ['phase', phase.toFixed(4)],
    ['angle', (phase * 360).toFixed(1).padStart(6) + '°'],
    ['rad', (phase * 2 * Math.PI).toFixed(4)],
    ['cycle', String(cyclesAt(theClock, t))],
    ['turns', total.toFixed(4)],
    ['quad', String(quad)],
    ['cos', signed(cos)],
    ['sin', signed(sin)],
    ['tan', tan],
    ['sec', hasEdge ? secVal.toFixed(4) : '—'],  // the polygon dot's value: sec(β), 1 at midpoint → sec(π/N) at a vertex
    ['cos2φ', signed(cos2)],
    ['sin2φ', signed(sin2)],
    ['freq', fmtFreq(f)],
    ['ω', w.toFixed(4) + ' rad/s'],
    ['accel', (w * w).toFixed(4)],
    ['dist', distance.toFixed(3)],
    ['radix', N.toFixed(3)],
    ['base', fmtBaseInt(intToBaseDigits(radixCount, N), N)],
    ['sub φ', subPhase.toFixed(4)],
    ['r-idx', String(Math.floor(phase * N))],
    ['r-cnt', String(radixCount)],
    ['perim', perim.toFixed(4) + ' →2π'],
    ['area', area.toFixed(4) + ' →π'],
    ['side', side.toFixed(4)],
    ['gap', gap.toFixed(4)],
    ['p-gap', hasEdge ? (1 - polyR).toFixed(4) : '—'],  // polygon dot's local deviation along the hand

    ['|pt|', rMag.toFixed(4)],
    ['v·r', vdotr.toFixed(4)],
  ];
  const fmtRow = (/** @type {[string,string]} */ row) => row[0].padEnd(7) + row[1];
  const half = Math.ceil(rows.length / 2);
  const leftStrs = rows.slice(0, half).map(fmtRow);
  const rightStrs = rows.slice(half).map(fmtRow);
  const colW = Math.max(...leftStrs.map((s) => s.length)) + 3;
  /** @type {string[]} */
  const lines = [];
  for (let i = 0; i < half; i++) {
    lines.push((leftStrs[i] || '').padEnd(colW) + (rightStrs[i] || ''));
  }
  return lines.join('\n');
}
export const unitCircle = {
  name: 'unit circle',
  /** @param {Shared} shared */
  mount(shared) {
    S = shared;

    // proof, run in isolation on mount
    const proofs = runProofs();
    const allPass = proofs.every((pr) => pr.pass);
    for (const pr of proofs) console.log(`[U0 clock] ${pr.pass ? 'PASS' : 'FAIL'}  ${pr.name} — ${pr.detail}`);
    console.log(`[U0 clock] ${allPass ? 'ALL PASS' : 'FAILURES PRESENT'}`);
    // (kit) no injected controls / readout / msg — just the visual; the kit drives it via setters

    // GPU pipeline — built once, kept across re-mounts on the same device
    if (!pipeline) {
      uniform = shared.device.createBuffer({ size: 32, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
      const shaderModule = shared.device.createShaderModule({ code: SHADER });
      pipeline = shared.device.createRenderPipeline({
        layout: 'auto',
        vertex: { module: shaderModule, entryPoint: 'vs' },
        fragment: { module: shaderModule, entryPoint: 'fs', targets: [{ format: shared.format }] },
        primitive: { topology: 'triangle-list' },
      });
      bindGroup = shared.device.createBindGroup({
        layout: pipeline.getBindGroupLayout(0),
        entries: [{ binding: 0, resource: { buffer: uniform } }],
      });
    }

    lastFrame = performance.now() / 1000;
    running = true;
  },

  frame() {
    if (!running || !S) return;
    const now = performance.now() / 1000;
    const dt = now - lastFrame;
    lastFrame = now;
    if (playing) {
      const dTurns = (dt * timeScale) / theClock.period;
      turns += dTurns;
      distance += Math.abs(dTurns) * 2 * Math.PI;
    }
    const t = turns * theClock.period;
    const phase = phaseAt(theClock, t);

    uniformData[0] = phase;
    uniformData[1] = radixN;
    uniformData[2] = S.canvas.width;
    uniformData[3] = S.canvas.height;
    uniformData[4] = timeScale >= 0 ? 1 : -1;
    S.device.queue.writeBuffer(uniform, 0, uniformData);

    const encoder = S.device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [{
        view: S.ctx.getCurrentTexture().createView(),
        clearValue: { r: 0.02, g: 0.03, b: 0.05, a: 1 },
        loadOp: 'clear',
        storeOp: 'store',
      }],
    });
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);
    pass.draw(3);
    pass.end();
    S.device.queue.submit([encoder.finish()]);
  },

  unmount() {
    running = false;
  },
};
