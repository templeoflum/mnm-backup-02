// TS — entry point. Runs the U0 clock proof on load, then renders a crude
// playhead driven by the clock so the period can be played and watched.
//
// The render here is deliberately crude — just enough to PROVE the clock. The
// good render is TS-B's, later. What this shows: a cyan playhead sweeps a track
// left→right as phase goes 0→1, snaps back at the period boundary, and never
// leaves the track however the period is changed. ↑/↓ change the period length.

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
        let uv = frag.xy / u.res;               // 0..1, y down
        var col = vec3f(0.02, 0.03, 0.05);       // background

        // the track: a dim horizontal line the playhead rides
        let track = smoothstep(0.006, 0.0, abs(uv.y - 0.5)) * 0.22;
        col += vec3f(track);

        // period boundaries: faint ticks at x = 0 and x = 1
        let edge = smoothstep(0.004, 0.0, min(uv.x, 1.0 - uv.x)) * 0.18;
        col += vec3f(edge);

        // the playhead: a bright band at x == phase, only near the track
        let near = smoothstep(0.10, 0.0, abs(uv.y - 0.5));
        let band = smoothstep(0.010, 0.0, abs(uv.x - u.phase));
        col += vec3f(0.30, 0.85, 1.0) * band * near;

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

  // ↑/↓ change the period length (the clock's one knob). Re-anchor time so the
  // phase reads continuously across the change instead of jumping.
  window.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
    const now = performance.now() / 1000;
    const elapsed = now - t0;
    const factor = e.key === 'ArrowUp' ? 1.25 : 1 / 1.25;
    theClock.period = Math.min(20, Math.max(0.2, theClock.period * factor));
    t0 = now - elapsed; // keep elapsed continuous; phase recomputes from new period
    e.preventDefault();
  });

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
      `U0 clock  ${allPass ? '· proof: ALL PASS' : '· proof: FAIL (see console)'}\n` +
      `period ${theClock.period.toFixed(2)}s   phase ${phase.toFixed(3)}   cycles ${cyclesAt(theClock, t)}\n` +
      `↑ / ↓  change period length`;

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  msg.textContent = '';
}

main().catch((e: unknown) => {
  msg.textContent = 'WebGPU init failed: ' + (e instanceof Error ? e.message : String(e));
});
