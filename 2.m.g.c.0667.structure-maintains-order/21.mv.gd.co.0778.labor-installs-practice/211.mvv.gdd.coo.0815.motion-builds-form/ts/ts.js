// THE TS FORMULA — bare, bones exposed. The uniform iterative construction (TS_3D ground
// source): a seed at radius D, then `level` rotations applied left-to-right. Each rotation
// turns in the next plane of a SCHEDULE (XY, YZ, XZ, …) at a cascading rate (1/ratio)^k.
// At each cycle boundary the whole figure is TRANSLATED outward by a SELF-SCALING amount
// d = k·(k+1)^(C−1)·D (holds the central hole a constant proportion (k−1)/(k+1)).
//   level 1 → circle · 2 → sphere · 3 → torus · 4 → torus-sphere · then it climbs.
// Composed as one 4×4 operator M; the point is M·[D,0,0,1]. The traced locus IS the form,
// drawn as a wireframe (a line, not a surface) — the bones exposed. Plain JS + WebGPU, no build.

/** @typedef {{ canvas: HTMLCanvasElement, device: GPUDevice, ctx: GPUCanvasContext,
 *   format: GPUTextureFormat, read: HTMLElement, controls: HTMLElement, msg: HTMLElement }} Shared */

let level = 2;          // number of rotations (1 circle · 2 sphere · 3 torus · …)
let kHole = 2.0;        // self-scaling hole constant (hole = (k−1)/(k+1); k=2 → 1/3)
let ratio = Math.PI;    // rate cascade base — each level runs at (1/ratio)^level
let spin = 0.4;         // camera auto-spin speed
let yaw = 0.6, pitch = 0.4;

const D = 1.0, DISP = 0;            // seed radius; translate along X
const SCHED = [[0, 1], [1, 2], [0, 2]]; // XY, YZ, XZ — the 3D rotation-plane schedule
const N = 4000, DT = 0.04;          // locus samples + phase step

let running = false;
/** @type {Shared | null} */
let S = null;
/** @type {GPUBuffer} */ let vbuf;
/** @type {GPURenderPipeline} */ let pipeline;
const vdata = new Float32Array(N * 2);     // projected 2D (clip space)
const pts3 = new Float32Array(N * 3);      // 3D locus (recomputed on param change)
let dirty = true;
/** @type {Record<string, HTMLElement>} */
const val = {};

const FORMS = ['(point)', 'circle', 'sphere', 'torus', 'torus-sphere'];

const CONTROLS_HTML = `
  <div class="ctl"><label>level <span id="lval">2</span></label>
    <input id="level" type="range" min="1" max="6" step="1" value="2" /></div>
  <div class="ctl"><label>k (hole) <span id="kval">2.00</span></label>
    <input id="khole" type="range" min="1.1" max="4" step="0.01" value="2" /></div>
  <div class="ctl"><label>ratio <span id="rval">3.14</span></label>
    <input id="ratio" type="range" min="1.2" max="4" step="0.01" value="3.14159" /></div>
  <div class="ctl"><label>spin <span id="sval">0.40</span></label>
    <input id="spin" type="range" min="0" max="2" step="0.01" value="0.4" /></div>
  <div id="hint">the TS formula, bones exposed — rotations through a plane schedule + a self-scaling translate</div>`;

const SHADER = /* wgsl */ `
  @vertex fn vs(@location(0) p: vec2f) -> @builtin(position) vec4f { return vec4f(p, 0.0, 1.0); }
  @fragment fn fs() -> @location(0) vec4f { return vec4f(0.55, 0.72, 0.95, 1.0); }
`;

/** @param {number} k */
function rateFor(k) { return Math.pow(1 / ratio, k); }

/** build the construction point for the given phases into out[0..2]. @param {number[]} out @param {number[]} ph */
function buildPoint(out, ph) {
  // M = identity 4×4 (row-major)
  const M = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  for (let k = 0; k < level; k++) {
    const cyc = (k / 2) | 0, idx = k % 2;
    if (idx === 0 && cyc >= 1) {                         // cycle boundary: self-scaling translate
      M[DISP * 4 + 3] += kHole * Math.pow(kHole + 1, cyc - 1) * D;
    }
    const pl = SCHED[k % SCHED.length], i = pl[0], j = pl[1];
    const th = ph[k], c = Math.cos(th), s = Math.sin(th);
    for (let col = 0; col < 4; col++) {                  // left-multiply R(i,j,θ): rotate rows i,j
      const a = M[i * 4 + col], b = M[j * 4 + col];
      M[i * 4 + col] = c * a - s * b;
      M[j * 4 + col] = s * a + c * b;
    }
  }
  out[0] = M[0] * D + M[3]; out[1] = M[4] * D + M[7]; out[2] = M[8] * D + M[11];
}

function computeLocus() {
  const ph = new Array(level);
  const p = [0, 0, 0];
  for (let n = 0; n < N; n++) {
    const t = n * DT;
    for (let k = 0; k < level; k++) ph[k] = t * rateFor(k);
    buildPoint(p, ph);
    pts3[n * 3] = p[0]; pts3[n * 3 + 1] = p[1]; pts3[n * 3 + 2] = p[2];
  }
  dirty = false;
}

function project() {
  if (!S) return;
  const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
  let maxr = 1e-6;
  for (let n = 0; n < N; n++) {
    const X = pts3[n * 3], Y = pts3[n * 3 + 1], Z = pts3[n * 3 + 2];
    const x1 = cy * X + sy * Z, z1 = -sy * X + cy * Z;   // yaw about Y
    const y2 = cp * Y - sp * z1;                         // pitch about X
    vdata[n * 2] = x1; vdata[n * 2 + 1] = y2;
    const r = Math.hypot(x1, y2); if (r > maxr) maxr = r;
  }
  const W = S.canvas.width, Hh = S.canvas.height;
  const ax = W > Hh ? Hh / W : 1, ay = W > Hh ? 1 : W / Hh;  // keep the form un-stretched
  const fit = 0.82 / maxr;
  for (let n = 0; n < N; n++) { vdata[n * 2] *= fit * ax; vdata[n * 2 + 1] *= fit * ay; }
}

/** @returns {string} */
function readout() {
  const rows = [
    ['level', String(level) + ' rotation' + (level === 1 ? '' : 's')],
    ['form', FORMS[level] || `level ${level}`],
    ['k', kHole.toFixed(2) + `  (hole ${((kHole - 1) / (kHole + 1)).toFixed(3)})`],
    ['ratio', ratio.toFixed(3)],
    ['rates', Array.from({ length: level }, (_, k) => rateFor(k).toFixed(2)).join(' · ')],
    ['note', 'rotate through the plane schedule + self-scaling translate; the locus is the form'],
  ];
  return rows.map(([a, b]) => a.padEnd(7) + b).join('\n');
}

export const ts = {
  name: 'TS',
  /** @param {Shared} shared */
  mount(shared) {
    S = shared;
    shared.msg.textContent = 'the TS formula · the uniform iterative construction (bones exposed)';

    shared.controls.innerHTML = CONTROLS_HTML;
    ['lval', 'kval', 'rval', 'sval'].forEach((id) => { val[id] = /** @type {HTMLElement} */ (shared.controls.querySelector('#' + id)); });
    const lEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#level'));
    const kEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#khole'));
    const rEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#ratio'));
    const spEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#spin'));
    lEl.addEventListener('input', () => { level = parseInt(lEl.value, 10); val.lval.textContent = String(level); dirty = true; shared.read.textContent = readout(); });
    kEl.addEventListener('input', () => { kHole = parseFloat(kEl.value); val.kval.textContent = kHole.toFixed(2); dirty = true; shared.read.textContent = readout(); });
    rEl.addEventListener('input', () => { ratio = parseFloat(rEl.value); val.rval.textContent = ratio.toFixed(2); dirty = true; shared.read.textContent = readout(); });
    spEl.addEventListener('input', () => { spin = parseFloat(spEl.value); val.sval.textContent = spin.toFixed(2); });
    shared.read.textContent = readout();

    if (!pipeline) {
      vbuf = shared.device.createBuffer({ size: N * 2 * 4, usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST });
      const mod = shared.device.createShaderModule({ code: SHADER });
      pipeline = shared.device.createRenderPipeline({
        layout: 'auto',
        vertex: { module: mod, entryPoint: 'vs', buffers: [{ arrayStride: 8, attributes: [{ format: 'float32x2', offset: 0, shaderLocation: 0 }] }] },
        fragment: { module: mod, entryPoint: 'fs', targets: [{ format: shared.format }] },
        primitive: { topology: 'line-strip' },
      });
    }
    dirty = true;
    running = true;
  },

  frame() {
    if (!running || !S) return;
    if (dirty) computeLocus();
    yaw += spin * 0.016;
    project();
    S.device.queue.writeBuffer(vbuf, 0, vdata);

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
    pass.setVertexBuffer(0, vbuf);
    pass.draw(N);
    pass.end();
    S.device.queue.submit([encoder.finish()]);
  },

  unmount() {
    running = false;
    if (S) { S.controls.innerHTML = ''; S.read.textContent = ''; }
  },
};
