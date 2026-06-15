// TS — entry point. Runs the U0 clock proof on load, then renders the clock as
// the **unit circle** it is: a point cycling forward around the circle, phase
// 0→1 = one trip around, never resting. This circle is the device's clock —
// everything else will be a projection and sampling of it.
//
// The render is deliberately crude — just enough to show the clock. The good
// render is TS-B's, later. ↑/↓ change the period length (the trip's duration);
// the point keeps cycling, bounded to the circle, however the period changes.

import { clock, phaseAt, cyclesAt } from './clock';
import { runProofs } from './clock.proof';

const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const msg = document.querySelector('#msg') as HTMLDivElement;

// --- U0 proof, run in isolation on load -----------------------------------
const proofs = runProofs();
const allPass = proofs.every((p) => p.pass);
for (const p of proofs) {
  // eslint-disable-next-line no-console
  console.log(`[U0 clock] ${p.pass ? 'PASS' : 'FAIL'}  ${p.name} — ${p.detail}`);
}
console.log(`[U0 clock] ${allPass ? 'ALL PASS' : 'FAILURES PRESENT'}`);

// --- the clock being watched ----------------------------------------------
const theClock = clock(2.0); // period = 2s to start
let t0 = performance.now() / 1000;

// speed slider — LOGARITHMIC, spanning ~0.01 Hz (almost halted, a 100 s trip) to
// 1 GHz (a 1 ns trip). Sets the period; phase is preserved across the change so
// the point never teleports (re-anchor t0 to hold the current phase).
const slider = document.querySelector('#period') as HTMLInputElement;
const freqin = document.querySelector('#freqin') as HTMLInputElement;
const pval = document.querySelector('#pval') as HTMLSpanElement;
const LOG_LO = -2; // slider's slow end: 0.01 Hz — 100 s, almost halted
const LOG_HI = 9;  // slider's fast end: 1 GHz — 1 ns. the exact-Hz box has no limit.

function setPeriod(p: number): void {
  const now = performance.now() / 1000;
  const phase = phaseAt(theClock, now - t0);
  theClock.period = p;
  t0 = now - phase * p;
}
function fmtFreq(f: number): string {
  if (f >= 1e9) return (f / 1e9).toFixed(2) + ' GHz';
  if (f >= 1e6) return (f / 1e6).toFixed(2) + ' MHz';
  if (f >= 1e3) return (f / 1e3).toFixed(2) + ' kHz';
  return f.toFixed(2) + ' Hz';
}
function fmtPeriod(p: number): string {
  if (p >= 1) return p.toFixed(2) + ' s';
  if (p >= 1e-3) return (p * 1e3).toFixed(2) + ' ms';
  if (p >= 1e-6) return (p * 1e6).toFixed(2) + ' µs';
  return (p * 1e9).toFixed(2) + ' ns';
}
const fracToFreq = (frac: number): number => Math.pow(10, LOG_LO + frac * (LOG_HI - LOG_LO));
const freqToFrac = (f: number): number => (Math.log10(f) - LOG_LO) / (LOG_HI - LOG_LO);

function apply(freq: number): void {
  setPeriod(1 / freq);
  pval.textContent = `${fmtFreq(freq)}  ·  ${fmtPeriod(1 / freq)}`;
}
// slider drives freq (coarse, log); reflect the exact value into the box
slider.addEventListener('input', () => {
  const freq = fracToFreq(parseFloat(slider.value));
  apply(freq);
  freqin.value = String(Number(freq.toPrecision(8)));
});
// the box drives freq exactly, with NO range limit — type any Hz to hunt a freeze
freqin.addEventListener('input', () => {
  const freq = parseFloat(freqin.value);
  if (!isFinite(freq) || freq <= 0) return;
  apply(freq);
  slider.value = String(Math.min(1, Math.max(0, freqToFrac(freq))));
});
{
  const freq = fracToFreq(parseFloat(slider.value));
  apply(freq);
  freqin.value = String(Number(freq.toPrecision(8)));
}

async function main(): Promise<void> {
  if (!navigator.gpu) { msg.textContent = 'WebGPU is not available in this browser.'; return; }
  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) { msg.textContent = 'No WebGPU adapter found.'; return; }
  const device = await adapter.requestDevice();
  const ctx = canvas.getContext('webgpu') as GPUCanvasContext;
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

      @fragment fn fs(@builtin(position) frag: vec4f) -> @location(0) vec4f {
        let PI = 3.14159265;
        let center = u.res * 0.5;
        let scale = min(u.res.x, u.res.y);
        let p = (frag.xy - center) / scale;      // aspect-correct, ~[-0.5,0.5]
        let r = length(p);
        let R = 0.35;                            // the unit circle's drawn radius
        var col = vec3f(0.02, 0.03, 0.05);

        // the unit circle — the clock's true form, the whole 0→1
        col += vec3f(smoothstep(0.005, 0.0, abs(r - R)) * 0.45);

        // phase 0 — a small notch at angle 0 (the start/return of the trip)
        col += vec3f(0.25) * smoothstep(0.016, 0.0, length(p - vec2f(R + 0.03, 0.0)));

        // the cycling point — angle = 2π·phase, counterclockwise, never resting
        let a = 2.0 * PI * u.phase;
        let pt = vec2f(cos(a), -sin(a)) * R;     // -sin: screen y is down

        // the hand from center to the point
        let h = clamp(dot(p, pt) / dot(pt, pt), 0.0, 1.0);
        col += vec3f(0.16, 0.45, 0.65) * smoothstep(0.004, 0.0, length(p - pt * h)) * 0.7;

        // the point itself
        col += vec3f(0.30, 0.85, 1.0) * smoothstep(0.020, 0.0, length(p - pt));

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

  function resize(): void {
    const dpr = Math.min(window.devicePixelRatio, 2);
    canvas.width = Math.round(canvas.clientWidth * dpr);
    canvas.height = Math.round(canvas.clientHeight * dpr);
  }
  resize();
  window.addEventListener('resize', resize);

  function frame(): void {
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

    msg.textContent =
      `U0 clock — the unit circle  ${allPass ? '· proof: ALL PASS' : '· proof: FAIL (console)'}\n` +
      `phase ${phase.toFixed(3)}   cycles ${cyclesAt(theClock, t)}`;

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  msg.textContent = '';
}

main().catch((e: unknown) => {
  msg.textContent = 'WebGPU init failed: ' + (e instanceof Error ? e.message : String(e));
});
