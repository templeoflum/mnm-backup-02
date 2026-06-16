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
let t0 = performance.now() / 1000;

// speed slider — logarithmic, ~0.01 Hz (almost halted, a 100 s trip) up to a
// 10 kHz cap. Above the visible-cycling range it would only alias, which is a
// sampling/beam concern, so the clock's playable range stops here. Phase is
// preserved across a change so the point never teleports (re-anchor t0).
const slider = /** @type {HTMLInputElement} */ (document.querySelector('#period'));
const pval = /** @type {HTMLSpanElement} */ (document.querySelector('#pval'));
const LOG_LO = -2; // 0.01 Hz — a 100 s trip, almost halted
const LOG_HI = 4;  // 10 kHz — the cap

/** @param {number} p */
function setPeriod(p) {
  const now = performance.now() / 1000;
  const phase = phaseAt(theClock, now - t0);
  theClock.period = p;
  t0 = now - phase * p;
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

/** The full readout panel — every output the clock exposes at time `t`, as
 * aligned `label  value` rows. This is the atomic unit talking: position,
 * projection, and motion, all live. (Radius is 1 here, so tangential speed |v|
 * and angular momentum L coincide with ω; they separate once radius scales.)
 * @param {number} t @returns {string} */
function readout(t) {
  const phase = phaseAt(theClock, t);
  const total = t / theClock.period + theClock.phase0; // unwrapped turns (resets on a speed change — see odometer note)
  const cos = cosAt(theClock, t);
  const sin = sinAt(theClock, t);
  const f = frequency(theClock);
  const w = angularVelocity(theClock);
  const tan = Math.abs(cos) < 1e-9 ? (sin >= 0 ? ' +∞' : ' -∞') : signed(sin / cos);
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

async function main() {
  if (!navigator.gpu) { msg.textContent = 'WebGPU is not available in this browser.'; return; }
  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) { msg.textContent = 'No WebGPU adapter found.'; return; }
  const device = await adapter.requestDevice();
  const ctx = /** @type {GPUCanvasContext} */ (canvas.getContext('webgpu'));
  const format = navigator.gpu.getPreferredCanvasFormat();
  ctx.configure({ device, format, alphaMode: 'premultiplied' });

  // uniform: { phase: f32, _pad: f32, res: vec2f } — 16 bytes
  const uniform = device.createBuffer({
    size: 16,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });
  const uniformData = new Float32Array(4);

  const shader = device.createShaderModule({
    code: /* wgsl */ `
      struct U { phase: f32, _pad: f32, res: vec2f };
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

        // quarter ticks at 0, ¼, ½, ¾ — short marks just outside the ring
        let qd = fract(pixPhase * 4.0);
        let tickRing = smoothstep(0.035, 0.0, abs(r - (R + 0.04)));
        col += vec3f(0.22) * smoothstep(0.010, 0.0, min(qd, 1.0 - qd)) * tickRing;

        // phase 0 — a brighter notch at angle 0 (the start/return of the trip)
        col += vec3f(0.34) * smoothstep(0.018, 0.0, length(m - vec2f(R + 0.075, 0.0)));

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
    const t = performance.now() / 1000 - t0;
    const phase = phaseAt(theClock, t);

    uniformData[0] = phase;
    uniformData[1] = 0;
    uniformData[2] = canvas.width;
    uniformData[3] = canvas.height;
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
