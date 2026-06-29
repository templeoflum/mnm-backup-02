// THE PLANE — the unit's STAGE: the static space, nothing moving on it yet. Its one
// job is the smooth κ-morph — curvature swept continuously through hyperbolic (κ<0) ←
// euclidean (0) → spherical (κ>0), each clearly being what it is. Shown the intrinsic
// way (Gauss, Theorema Egregium) in the geodesic GRID: rings bunch toward the rim for
// κ>0 (a sphere's cap), spread for κ<0, square at 0 — one formula, continuous through 0.
//
// κ is the MASTER. Its sign DERIVES the algebra (Cayley–Klein: complex/dual/split) — a
// face of the geometry-type, drawn as the unit "circle" |z|²=1 + null set. The CHART
// (cartesian/polar) is the method axis — gauge, free, changes no invariant.
//
// Refocused (operator, 20260616): the MOTION (isometry/tilt) and the RIGIDITY spectrum
// were pulled OUT — motion is the unit riding the stage (the deferred MERGE); rigidity
// is its own atom. The full packed version is backed up at plane.20260616-165442.js,
// accessible on the floor (pull motion/rigidity/closure from there when we build them).
// A mountable atomic unit behind the shell (main.js). Plain JS + JSDoc, no build.

/** @typedef {{ canvas: HTMLCanvasElement, device: GPUDevice, ctx: GPUCanvasContext,
 *   format: GPUTextureFormat, read: HTMLElement, controls: HTMLElement, msg: HTMLElement }} Shared */

let kappa = 0;          // curvature continuum: <0 hyperbolic · 0 euclidean · >0 spherical (the master)
let chart = 'cartesian'; // coordinate chart (method/axis-2) — relabels the same space; gauge, free
const CHARTS = ['cartesian', 'polar'];
let subdiv = 4;         // divisions of the unit (grid lines per axis / rings × rays)

/** algebra name from κ's sign (Cayley–Klein): complex (κ>0) · dual (κ=0) · split (κ<0). */
function algebraName() { return kappa > 1e-4 ? 'complex' : kappa < -1e-4 ? 'split-complex' : 'dual'; }
/** algebra index for the shader: 0 complex · 1 dual · 2 split. */
function algebraIdx() { return kappa > 1e-4 ? 0 : kappa < -1e-4 ? 2 : 1; }

let running = false;
/** @type {Shared | null} */
let S = null;
/** @type {GPUBuffer} */ let uniform;
const uniformData = new Float32Array(8);
/** @type {GPURenderPipeline} */ let pipeline;
/** @type {GPUBindGroup} */ let bindGroup;
/** @type {HTMLElement} */ let kval;
/** @type {HTMLElement} */ let subval;

const CONTROLS_HTML = `
  <div class="ctl"><label>curvature κ <span id="kval">0.00</span></label>
    <input id="kappa" type="range" min="-2.3" max="2.3" step="0.01" value="0" /></div>
  <div class="ctl"><label>chart</label>
    <div class="presets"><button data-c="cartesian">cartesian</button><button data-c="polar">polar</button></div></div>
  <div class="ctl"><label>subdivisions <span id="subval">4.00</span></label>
    <input id="subdiv" type="range" min="2" max="16" step="0.01" value="4" /></div>
  <div id="hint">the static space — curvature as one smooth continuum (flat at 0, sphere κ&gt;0, hyperbolic κ&lt;0)</div>`;

const SHADER = /* wgsl */ `
  struct U { res: vec2f, kappa: f32, subdiv: f32, chart: f32, algebra: f32, _p0: f32, _p1: f32 };  // chart: 0 cart · 1 polar · algebra: 0 complex · 1 dual · 2 split (derived from κ)
  @group(0) @binding(0) var<uniform> u: U;

  // one chart's grid value at geodesic distance g, angle th (rho gates the polar rays).
  fn gridAt(g: f32, th: f32, chart: f32, subdiv: f32, rho: f32) -> f32 {
    if (chart < 0.5) {
      let gx = g * cos(th); let gy = g * sin(th);
      let cx = smoothstep(0.05, 0.0, abs(gx * subdiv - round(gx * subdiv)));
      let cy = smoothstep(0.05, 0.0, abs(gy * subdiv - round(gy * subdiv)));
      return max(cx, cy);
    }
    let ring = smoothstep(0.05, 0.0, abs(g * subdiv - round(g * subdiv)));
    let turns = th / 6.2831853;
    let ray = smoothstep(0.010, 0.0, min(fract(turns * subdiv), 1.0 - fract(turns * subdiv))) * step(0.02, rho);
    return max(ring, ray);
  }

  @vertex fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
    var p = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0));
    return vec4f(p[i], 0.0, 1.0);
  }

  @fragment fn fs(@builtin(position) frag: vec4f) -> @location(0) vec4f {
    let center = u.res * 0.5;
    let scale = min(u.res.x, u.res.y);
    let p = (frag.xy - center) / scale;
    let m = vec2f(p.x, -p.y);
    let r = length(m);
    let R = 0.35;
    var col = vec3f(0.02, 0.03, 0.05);
    let k = u.kappa;

    if (r < R) {
      let z = m / R;                                    // the static unit coordinate (no motion)
      let rho = length(z);
      let th = atan2(z.y, z.x);
      // geodesic distance g from screen radius: screen_r/R = sin_κ(g)/sin_κ(1), g=1 at the rim.
      var g = rho;
      if (k > 0.0001) { let s = sqrt(k); g = asin(clamp(rho * sin(s), -1.0, 1.0)) / s; }   // κ>0: rings bunch (sphere cap)
      else if (k < -0.0001) { let s = sqrt(-k); g = asinh(rho * sinh(s)) / s; }            // κ<0: rings spread (hyperbolic)
      col += vec3f(0.20, 0.26, 0.38) * gridAt(g, th, u.chart, u.subdiv, rho);
      // ALGEBRA overlay — Cayley–Klein, DERIVED from κ: unit "circle" |z|²=1 + null q=0.
      // complex (κ>0): x²+y² (circle) · dual (κ=0): x² (lines) · split (κ<0): x²−y² (hyperbola).
      var q = z.x * z.x + z.y * z.y;
      if (u.algebra > 1.5) { q = z.x * z.x - z.y * z.y; }
      else if (u.algebra > 0.5) { q = z.x * z.x; }
      col += vec3f(0.95, 0.72, 0.30) * smoothstep(0.022, 0.0, abs(abs(q) - 1.0)); // |z| = 1
      col += vec3f(0.88, 0.30, 0.30) * smoothstep(0.010, 0.0, abs(q));            // null set
    }
    col += vec3f(0.12, 0.15, 0.20) * smoothstep(0.005, 0.0, abs(r - R)); // the unit's edge
    return vec4f(col, 1.0);
  }
`;

/** @param {string} c */
function setChart(c) {
  chart = c;
  if (S) {
    S.controls.querySelectorAll('[data-c]').forEach((b) =>
      b.classList.toggle('on', /** @type {HTMLElement} */ (b).dataset.c === c));
    S.read.textContent = readout();
  }
}

/** @returns {string} */
function readout() {
  const k = kappa;
  const geom = k > 1e-4 ? 'spherical · elliptic (κ>0)' : k < -1e-4 ? 'hyperbolic (κ<0)' : 'euclidean · parabolic (κ=0)';
  // boundary circumference vs flat = sin_κ(1): <1 sphere (closing), >1 hyperbolic (opening) — the curvature signature
  let cFactor = 1;
  if (k > 1e-6) { const s = Math.sqrt(k); cFactor = Math.sin(s) / s; }
  else if (k < -1e-6) { const s = Math.sqrt(-k); cFactor = Math.sinh(s) / s; }
  const N = Math.floor(subdiv);
  const gen2 = k > 1e-4 ? '−1 (i²)' : k < -1e-4 ? '+1 (j²)' : '0 (ε²)';
  const rows = [
    ['κ', k.toFixed(3)],
    ['geometry', geom],                  // space · type (the +/0/− trichotomy)
    ['algebra', algebraName() + ' (←κ)'], // Cayley–Klein, derived from κ
    ['gen²', gen2],
    ['chart', chart],                    // method / gauge — free, no invariant changes
    ['subdiv', subdiv.toFixed(2)],
    ['rings', String(N)],
    ['rays', String(N)],
    ['cells', String(N * N)],
    ['C/flat', cFactor.toFixed(4)],      // boundary circumference vs euclidean — the curvature signature
    ['note', 'the static stage · κ master → geometry-type → algebra · motion is the merge (deferred)'],
  ];
  return rows.map(([a, b]) => a.padEnd(9) + b).join('\n');
}

export const plane = {
  name: 'plane',
  /** @param {Shared} shared */
  mount(shared) {
    S = shared;
    shared.msg.textContent = 'the plane · the static space (curvature as one smooth continuum)';

    shared.controls.innerHTML = CONTROLS_HTML;
    kval = /** @type {HTMLElement} */ (shared.controls.querySelector('#kval'));
    subval = /** @type {HTMLElement} */ (shared.controls.querySelector('#subval'));
    const kEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#kappa'));
    const subEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#subdiv'));
    kEl.addEventListener('input', () => {
      let v = parseFloat(kEl.value);
      if (Math.abs(v) < 0.08) { v = 0; kEl.value = '0'; } // detent at κ=0 — make the parabolic/euclidean case landable
      kappa = v; kval.textContent = kappa.toFixed(2); shared.read.textContent = readout();
    });
    subEl.addEventListener('input', () => { subdiv = parseFloat(subEl.value); subval.textContent = subdiv.toFixed(2); shared.read.textContent = readout(); });
    shared.controls.querySelectorAll('[data-c]').forEach((b) =>
      b.addEventListener('click', () => setChart(/** @type {HTMLElement} */ (b).dataset.c || 'cartesian')));
    setChart(chart);

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
    running = true;
  },

  frame() {
    if (!running || !S) return;
    uniformData[0] = S.canvas.width;
    uniformData[1] = S.canvas.height;
    uniformData[2] = kappa;
    uniformData[3] = subdiv;
    uniformData[4] = CHARTS.indexOf(chart); // 0 cartesian · 1 polar
    uniformData[5] = algebraIdx();          // algebra follows κ: 0 complex · 1 dual · 2 split
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
    if (S) { S.controls.innerHTML = ''; S.read.textContent = ''; }
  },
};
