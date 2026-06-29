// THE TS FORMULA — bare mechanism. The uniform iterative construction (TS_3D ground source)
// shown as its EPICYCLES: nested rotating orbits + arms that drive the point. NOT the traced
// form — the mechanism. Per rotation k (left-to-right): the point sits at the end of the prior
// arm; this rotation sweeps it around an ORBIT CIRCLE of radius = its distance in plane SCHED[k]
// (XY, YZ, XZ, …). At each cycle boundary the figure is TRANSLATED outward (self-scaling
// d = k·(k+1)^(C−1)·D). Drawn as orbit circles + pivot→point spokes + displacement arrows + point.
//   ALL rotations are driven by one master phase θ — no per-level rate cascade. The structure
//   (radii, arms, displacement) is rate-independent; the cascade only mattered for FILLING the
//   traced form (a separate locus view, not built here). Plain JS + WebGPU, no build.

/** @typedef {{ canvas: HTMLCanvasElement, device: GPUDevice, ctx: GPUCanvasContext,
 *   format: GPUTextureFormat, read: HTMLElement, controls: HTMLElement, msg: HTMLElement }} Shared */

let level = 2;          // number of rotations = number of nested epicycles
let kHole = 2.0;        // self-scaling hole constant (displacement = k × radius each cycle)
let theta = 0;          // master phase — drives every rotation (scrub or play)
let playing = true;     // animate θ
let speed = 0.5;        // play rate (how fast θ advances)
let spin = 0.3;         // camera auto-spin
let yaw = 0.6, pitch = 0.4;

const D = 1.0, DISP = 0;
const SCHED = [[0, 1], [1, 2], [0, 2]]; // XY, YZ, XZ
const TAU = Math.PI * 2, ORBN = 48;     // orbit-circle segments
const MAXSEG = 700;
const FORMS = ['(point)', 'circle', 'sphere', 'torus', 'torus-sphere'];

let running = false;
/** @type {Shared | null} */
let S = null;
/** @type {GPUBuffer} */ let vbuf;
/** @type {GPURenderPipeline} */ let pipeline;
let lastFin = [0, 0, 0];                     // last computed point (for the readout)
const vdata = new Float32Array(MAXSEG * 4); // line-list: per segment, 2 verts × (x,y)
/** @type {Record<string, HTMLElement>} */
const val = {};

const CONTROLS_HTML = `
  <div class="ctl"><label>level <span id="lval">2</span></label>
    <input id="level" type="range" min="1" max="6" step="1" value="2" /></div>
  <div class="ctl"><label>k <span id="kval">2.00</span></label>
    <input id="khole" type="range" min="1.1" max="4" step="0.01" value="2" /></div>
  <div class="ctl"><label>phase <span id="thval">0.00</span></label>
    <input id="phase" type="range" min="0" max="6.2832" step="0.001" value="0" /></div>
  <div class="ctl"><label>speed <span id="spdval">0.50</span></label>
    <input id="speed" type="range" min="0" max="2" step="0.01" value="0.5" /></div>
  <div class="ctl"><label>spin <span id="sval">0.30</span></label>
    <input id="spin" type="range" min="0" max="2" step="0.01" value="0.3" /></div>
  <div class="ctl"><button id="play">pause</button><button id="reset">reset</button></div>`;

const SHADER = /* wgsl */ `
  @vertex fn vs(@location(0) p: vec2f) -> @builtin(position) vec4f { return vec4f(p, 0.0, 1.0); }
  @fragment fn fs() -> @location(0) vec4f { return vec4f(0.62, 0.78, 0.95, 1.0); }
`;

/** current point = M·[D,0,0,1]. @param {number[]} M */
function pt(M) { return [M[0] * D + M[3], M[4] * D + M[7], M[8] * D + M[11]]; }

/** build the epicycle chain at the current phase → flat 3D segments [ax,ay,az,bx,by,bz,...]; returns final point. */
function buildSegs() {
  const M = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  /** @type {number[]} */ const segs = [];
  const push = (/** @type {number[]} */ a, /** @type {number[]} */ b) => segs.push(a[0], a[1], a[2], b[0], b[1], b[2]);
  for (let k = 0; k < level; k++) {
    const cyc = (k / 2) | 0, idx = k % 2;
    if (idx === 0 && cyc >= 1) {                          // cycle boundary: self-scaling translate (arrow)
      const from = pt(M);
      M[DISP * 4 + 3] += kHole * Math.pow(kHole + 1, cyc - 1) * D;
      push(from, pt(M));
    }
    const pl = SCHED[k % SCHED.length], i = pl[0], j = pl[1];
    const pB = pt(M);                                     // the point entering this rotation (arm tip)
    const pivot = pB.slice(); pivot[i] = 0; pivot[j] = 0; // pivot = its foot on the rotation axis
    const orbR = Math.hypot(pB[i], pB[j]);               // orbit radius = arm length in this plane
    if (orbR > 1e-6) {
      let prev = pivot.slice(); prev[i] = orbR; prev[j] = 0;
      for (let s = 1; s <= ORBN; s++) {                  // the orbit circle (the epicycle)
        const a = s / ORBN * TAU;
        const q = pivot.slice(); q[i] = orbR * Math.cos(a); q[j] = orbR * Math.sin(a);
        push(prev, q); prev = q;
      }
      push(pivot, pB);                                   // the arm (spoke pivot → point)
    }
    const c = Math.cos(theta), sn = Math.sin(theta);     // apply the rotation (all driven by θ)
    for (let col = 0; col < 4; col++) { const a = M[i * 4 + col], b = M[j * 4 + col]; M[i * 4 + col] = c * a - sn * b; M[j * 4 + col] = sn * a + c * b; }
  }
  const fin = pt(M); lastFin = fin;
  return { segs, fin };
}

function draw3D() {
  if (!S) return;
  const { segs, fin } = buildSegs();
  const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
  /** project a 3D point → raw 2D. @param {number} X @param {number} Y @param {number} Z */
  const proj = (X, Y, Z) => { const x1 = cy * X + sy * Z, z1 = -sy * X + cy * Z; return [x1, cp * Y - sp * z1]; };
  // pass 1: project every segment endpoint into vdata, track max extent
  let nSeg = Math.min(segs.length / 6, MAXSEG - 2), maxr = 1e-6;
  for (let s = 0; s < nSeg; s++) {
    const a = proj(segs[s * 6], segs[s * 6 + 1], segs[s * 6 + 2]);
    const b = proj(segs[s * 6 + 3], segs[s * 6 + 4], segs[s * 6 + 5]);
    vdata[s * 4] = a[0]; vdata[s * 4 + 1] = a[1]; vdata[s * 4 + 2] = b[0]; vdata[s * 4 + 3] = b[1];
    maxr = Math.max(maxr, Math.hypot(a[0], a[1]), Math.hypot(b[0], b[1]));
  }
  const W = S.canvas.width, Hh = S.canvas.height;
  const ax = W > Hh ? Hh / W : 1, ay = W > Hh ? 1 : W / Hh;
  const fit = 0.82 / maxr;
  for (let s = 0; s < nSeg; s++) { vdata[s * 4] *= fit * ax; vdata[s * 4 + 1] *= fit * ay; vdata[s * 4 + 2] *= fit * ax; vdata[s * 4 + 3] *= fit * ay; }
  // the live point: a small cross at the final position (2 segments, fixed screen size)
  const fp = proj(fin[0], fin[1], fin[2]); const fx = fp[0] * fit * ax, fy = fp[1] * fit * ay, h = 0.022;
  vdata[nSeg * 4] = fx - h; vdata[nSeg * 4 + 1] = fy; vdata[nSeg * 4 + 2] = fx + h; vdata[nSeg * 4 + 3] = fy; nSeg++;
  vdata[nSeg * 4] = fx; vdata[nSeg * 4 + 1] = fy - h; vdata[nSeg * 4 + 2] = fx; vdata[nSeg * 4 + 3] = fy + h; nSeg++;
  return nSeg;
}

/** @returns {string} — bare numeric readout, no prose. */
function readout() {
  const rows = [
    ['level', String(level)],
    ['form', FORMS[level] || `level ${level}`],
    ['k', kHole.toFixed(2)],
    ['hole', ((kHole - 1) / (kHole + 1)).toFixed(3)],
    ['phase', theta.toFixed(3)],
    ['point', lastFin.map((v) => v.toFixed(2)).join(' ')],
  ];
  return rows.map(([a, b]) => a.padEnd(6) + b).join('\n');
}

export const ts = {
  name: 'TS',
  /** @param {Shared} shared */
  mount(shared) {
    S = shared;
    shared.msg.textContent = '';

    shared.controls.innerHTML = CONTROLS_HTML;
    ['lval', 'kval', 'thval', 'spdval', 'sval'].forEach((id) => { val[id] = /** @type {HTMLElement} */ (shared.controls.querySelector('#' + id)); });
    const lEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#level'));
    const kEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#khole'));
    const thEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#phase'));
    const spdEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#speed'));
    const spEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#spin'));
    const playEl = /** @type {HTMLButtonElement} */ (shared.controls.querySelector('#play'));
    const resetEl = /** @type {HTMLButtonElement} */ (shared.controls.querySelector('#reset'));
    lEl.addEventListener('input', () => { level = parseInt(lEl.value, 10); val.lval.textContent = String(level); shared.read.textContent = readout(); });
    kEl.addEventListener('input', () => { kHole = parseFloat(kEl.value); val.kval.textContent = kHole.toFixed(2); shared.read.textContent = readout(); });
    thEl.addEventListener('input', () => { theta = parseFloat(thEl.value); playing = false; playEl.textContent = 'play'; val.thval.textContent = theta.toFixed(2); shared.read.textContent = readout(); });
    spdEl.addEventListener('input', () => { speed = parseFloat(spdEl.value); val.spdval.textContent = speed.toFixed(2); });
    spEl.addEventListener('input', () => { spin = parseFloat(spEl.value); val.sval.textContent = spin.toFixed(2); });
    playEl.addEventListener('click', () => { playing = !playing; playEl.textContent = playing ? 'pause' : 'play'; });
    resetEl.addEventListener('click', () => { theta = 0; thEl.value = '0'; val.thval.textContent = '0.00'; yaw = 0.6; pitch = 0.4; shared.read.textContent = readout(); });
    shared.read.textContent = readout();

    if (!pipeline) {
      vbuf = shared.device.createBuffer({ size: MAXSEG * 4 * 4, usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST });
      const mod = shared.device.createShaderModule({ code: SHADER });
      pipeline = shared.device.createRenderPipeline({
        layout: 'auto',
        vertex: { module: mod, entryPoint: 'vs', buffers: [{ arrayStride: 8, attributes: [{ format: 'float32x2', offset: 0, shaderLocation: 0 }] }] },
        fragment: { module: mod, entryPoint: 'fs', targets: [{ format: shared.format }] },
        primitive: { topology: 'line-list' },
      });
    }
    running = true;
  },

  frame() {
    if (!running || !S) return;
    if (playing) {
      theta = (theta + speed * 0.016) % TAU;
      if (val.thval) val.thval.textContent = theta.toFixed(2);
      const thEl = /** @type {HTMLInputElement | null} */ (S.controls.querySelector('#phase'));
      if (thEl) thEl.value = String(theta);
    }
    yaw += spin * 0.016;
    const nSeg = draw3D() || 0;
    S.read.textContent = readout();
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
    pass.draw(nSeg * 2);
    pass.end();
    S.device.queue.submit([encoder.finish()]);
  },

  unmount() {
    running = false;
    if (S) { S.controls.innerHTML = ''; S.read.textContent = ''; }
  },
};
