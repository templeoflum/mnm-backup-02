// THE PLANE — the space the unit lives in. Its geometry is a CURVATURE CONTINUUM:
// one dial κ runs hyperbolic (κ<0) ← euclidean (κ=0) → spherical (κ>0), replacing
// the three discrete "types" with the single thing that distinguishes them. Shown
// the intrinsic way (Gauss, Theorema Egregium): curvature lives in the metric, so
// it shows in the geodesic GRID, not a fake 3D bend. The grid is the orthographic
// projection of the constant-κ surface — a geodesic-polar mesh (rings at equal
// geodesic distance, radial geodesics). Ring at geodesic radius g lands at screen
// radius sin_κ(g): rings BUNCH toward the rim for κ>0 (a sphere's limb), SPREAD for
// κ<0 (hyperbolic), even for κ=0 (flat). One formula, continuous through zero.
//
// The COORDINATE chart and the ALGEBRA axis (complex/dual/split-complex) are
// separate axes — this slice carries both, plus the MÖBIUS probe (the bridge):
// one map w=(az+b)/(cz+d) acting on geometry (the grid) and algebra (the unit
// circle) at once, classified by its trace (elliptic/parabolic/hyperbolic/loxo).
// A mountable atomic unit behind the shell (main.js). Plain JS + JSDoc, no build.

/** @typedef {{ canvas: HTMLCanvasElement, device: GPUDevice, ctx: GPUCanvasContext,
 *   format: GPUTextureFormat, read: HTMLElement, controls: HTMLElement, msg: HTMLElement }} Shared */

// the plane's knobs — two independent axes exposed: GEOMETRY (κ) and CHART
let kappa = 0;          // curvature: <0 hyperbolic · 0 euclidean · >0 spherical
let chart = 'cartesian'; // coordinate chart: how the space is labeled (separate from its curvature)
const CHARTS = ['cartesian', 'polar'];
let algebra = 'complex'; // multiplicative structure (the algebra axis) — overlay, not a geometry
const ALGEBRAS = ['complex', 'dual', 'split-complex'];
let subdiv = 4;         // divisions of the unit (grid lines per axis / rings × rays)
let dimension = 2;      // how many planes the unit is (assembly = projection)

// MÖBIUS PROBE — the bridge: w = (a·z + b)/(c·z + d) is ONE map that acts on the
// number (algebra) and the point (geometry) at once. params are complex [re, im].
// the unit overlay (|z|=1) and the geodesic grid get carried by the SAME map — so
// you watch algebra↔geometry move together. trace a+d classifies it (tr²/det):
// in [0,4) elliptic · =4 parabolic · >4 hyperbolic · complex → loxodromic.
let mob = false;        // off → the κ disk; on → the plane under the map
let mobName = 'identity';
/** @type {[number,number]} */ let ma = [1, 0];
/** @type {[number,number]} */ let mb = [0, 0];
/** @type {[number,number]} */ let mc = [0, 0];
/** @type {[number,number]} */ let md = [1, 0];
const COS60 = 0.5, SIN60 = 0.8660254;
/** @type {{k:string,a:[number,number],b:[number,number],c:[number,number],d:[number,number]}[]} */
const MOBIUS = [
  { k: 'identity',   a: [1, 0],         b: [0, 0],   c: [0, 0], d: [1, 0] },
  { k: 'elliptic',   a: [COS60, SIN60], b: [0, 0],   c: [0, 0], d: [1, 0] }, // rotate  w = e^{iθ}·z
  { k: 'parabolic',  a: [1, 0],         b: [0.4, 0], c: [0, 0], d: [1, 0] }, // shift   w = z + t
  { k: 'hyperbolic', a: [1.8, 0],       b: [0, 0],   c: [0, 0], d: [1, 0] }, // scale   w = λ·z
  { k: 'loxodromic', a: [1.4, 0.5],     b: [0, 0],   c: [0, 0], d: [1, 0] }, // complex λ
  { k: 'inversion',  a: [0, 0],         b: [1, 0],   c: [1, 0], d: [0, 0] }, // w = 1/z
];

/** @param {[number,number]} a @param {[number,number]} b @returns {[number,number]} */
const cadd = (a, b) => [a[0] + b[0], a[1] + b[1]];
/** @param {[number,number]} a @param {[number,number]} b @returns {[number,number]} */
const csub = (a, b) => [a[0] - b[0], a[1] - b[1]];
/** @param {[number,number]} a @param {[number,number]} b @returns {[number,number]} */
const cmul = (a, b) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
/** @param {[number,number]} a @param {[number,number]} b @returns {[number,number]} */
const cdiv = (a, b) => { const s = b[0] * b[0] + b[1] * b[1]; return [(a[0] * b[0] + a[1] * b[1]) / s, (a[1] * b[0] - a[0] * b[1]) / s]; };

let running = false;
/** @type {Shared | null} */
let S = null;
/** @type {GPUBuffer} */ let uniform;
const uniformData = new Float32Array(16);
/** @type {GPURenderPipeline} */ let pipeline;
/** @type {GPUBindGroup} */ let bindGroup;
/** @type {HTMLElement} */ let kval;
/** @type {HTMLElement} */ let subval;
/** @type {HTMLElement} */ let dimval;

const CONTROLS_HTML = `
  <div class="ctl"><label>curvature κ <span id="kval">0.00</span></label>
    <input id="kappa" type="range" min="-2.3" max="2.3" step="0.01" value="0" /></div>
  <div class="ctl"><label>chart</label>
    <div class="presets"><button data-c="cartesian">cartesian</button><button data-c="polar">polar</button></div></div>
  <div class="ctl"><label>algebra</label>
    <div class="presets"><button data-a="complex">complex</button><button data-a="dual">dual</button><button data-a="split-complex">split</button></div></div>
  <div class="ctl"><label>möbius (bridge) — one map, both faces</label>
    <div class="presets"><button data-m="identity">off</button><button data-m="elliptic">ellip</button><button data-m="parabolic">parab</button><button data-m="hyperbolic">hyper</button><button data-m="loxodromic">loxo</button><button data-m="inversion">1/z</button></div></div>
  <div class="ctl"><label>subdivisions <span id="subval">4.00</span></label>
    <input id="subdiv" type="range" min="2" max="16" step="0.01" value="4" /></div>
  <div class="ctl"><label>dimension <span id="dimval">2</span></label>
    <input id="dim" type="range" min="2" max="4" step="1" value="2" /></div>
  <div id="hint">geometry as one curvature continuum — flat at 0, sphere κ&gt;0, hyperbolic κ&lt;0</div>`;

const SHADER = /* wgsl */ `
  struct U { res: vec2f, kappa: f32, subdiv: f32, chart: f32, algebra: f32, mob: f32, _p: f32, ma: vec2f, mb: vec2f, mc: vec2f, md: vec2f };  // chart: 0 cart · 1 polar · algebra: 0 complex · 1 dual · 2 split · mob: 0 off · 1 on · ma..md: Möbius coeffs (complex)
  @group(0) @binding(0) var<uniform> u: U;

  fn cmul(a: vec2f, b: vec2f) -> vec2f { return vec2f(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x); }
  fn cdiv(a: vec2f, b: vec2f) -> vec2f { let s = b.x*b.x + b.y*b.y; return vec2f((a.x*b.x + a.y*b.y)/s, (a.y*b.x - a.x*b.y)/s); }

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

    // === MÖBIUS PROBE (the bridge) — one map carries geometry + algebra together ===
    if (u.mob > 0.5) {
      let w = m / R;                                              // complex coord, unit circle at |w|=1
      let zsrc = cdiv(cmul(u.md, w) - u.mb, u.ma - cmul(u.mc, w)); // pre-image under the map (inverse)
      var mcol = vec3f(0.02, 0.03, 0.05);
      // GEOMETRY — the square grid warped by the map (conformal: circles → circles)
      let cx = smoothstep(0.045, 0.0, abs(zsrc.x * u.subdiv - round(zsrc.x * u.subdiv)));
      let cy = smoothstep(0.045, 0.0, abs(zsrc.y * u.subdiv - round(zsrc.y * u.subdiv)));
      mcol += vec3f(0.20, 0.26, 0.38) * max(cx, cy);
      // ALGEBRA — the unit set |z|=1 (gold) and null set (red), carried by the SAME map
      var q = zsrc.x * zsrc.x + zsrc.y * zsrc.y;                  // complex |z|²
      if (u.algebra > 1.5) { q = zsrc.x * zsrc.x - zsrc.y * zsrc.y; } // split
      else if (u.algebra > 0.5) { q = zsrc.x * zsrc.x; }             // dual
      mcol += vec3f(0.95, 0.72, 0.30) * smoothstep(0.03, 0.0, abs(abs(q) - 1.0));
      mcol += vec3f(0.88, 0.30, 0.30) * smoothstep(0.014, 0.0, abs(q));
      return vec4f(mcol, 1.0);
    }

    var col = vec3f(0.02, 0.03, 0.05);
    let k = u.kappa;

    if (r < R) {
      let rho = r / R;                                  // 0..1 across the unit
      // geodesic distance g from screen radius: screen_r/R = sin_κ(g)/sin_κ(1),
      // normalized so g=1 at the rim. Invert per the sign of κ.
      var g = rho;
      if (k > 0.0001) {
        let s = sqrt(k);
        g = asin(clamp(rho * sin(s), -1.0, 1.0)) / s;   // κ>0: rings bunch toward the rim (sphere limb)
      } else if (k < -0.0001) {
        let s = sqrt(-k);
        g = asinh(rho * sinh(s)) / s;                   // κ<0: rings spread (hyperbolic)
      }
      // the CHART grids the same κ-curved space two ways (g carries the curvature):
      let th = atan2(m.y, m.x);                          // angle (radians)
      var gridLine = 0.0;
      if (u.chart < 0.5) {
        // cartesian chart — x,y grid in geodesic normal coordinates (x=g·cosθ, y=g·sinθ)
        let gx = g * cos(th);
        let gy = g * sin(th);
        let cx = smoothstep(0.05, 0.0, abs(gx * u.subdiv - round(gx * u.subdiv)));
        let cy = smoothstep(0.05, 0.0, abs(gy * u.subdiv - round(gy * u.subdiv)));
        gridLine = max(cx, cy);
      } else {
        // polar chart — geodesic rings + radial rays
        let ring = smoothstep(0.05, 0.0, abs(g * u.subdiv - round(g * u.subdiv)));
        let turns = th / 6.2831853;
        let ray = smoothstep(0.010, 0.0, min(fract(turns * u.subdiv), 1.0 - fract(turns * u.subdiv))) * step(0.02, rho);
        gridLine = max(ring, ray);
      }
      col += vec3f(0.20, 0.26, 0.38) * gridLine;

      // ALGEBRA overlay — the chosen 2D algebra's unit "circle" |z|²=1 (orbits of
      // multiplication by the unit) and its NULL set q=0 (zero-divisors). complex:
      // x²+y² (circle, elliptic; a field, null is just the origin) · dual: x² (lines,
      // parabolic; null = the y-axis) · split: x²−y² (hyperbola, hyperbolic; null =
      // the diagonals). Drawn flat in unit coords — the algebra is a separate axis.
      let n = m / R;
      var q = n.x * n.x + n.y * n.y;                     // complex |z|²
      if (u.algebra > 1.5) { q = n.x * n.x - n.y * n.y; } // split
      else if (u.algebra > 0.5) { q = n.x * n.x; }        // dual
      col += vec3f(0.95, 0.72, 0.30) * smoothstep(0.022, 0.0, abs(abs(q) - 1.0)); // |z| = 1
      col += vec3f(0.88, 0.30, 0.30) * smoothstep(0.010, 0.0, abs(q));            // null set (zero-divisors)
    }
    col += vec3f(0.30, 0.42, 0.55) * smoothstep(0.005, 0.0, abs(r - R)); // the unit's outline
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
/** @param {string} a */
function setAlgebra(a) {
  algebra = a;
  if (S) {
    S.controls.querySelectorAll('[data-a]').forEach((b) =>
      b.classList.toggle('on', /** @type {HTMLElement} */ (b).dataset.a === a));
    S.read.textContent = readout();
  }
}
/** @param {string} name */
function setMobius(name) {
  const pre = MOBIUS.find((x) => x.k === name) || MOBIUS[0];
  mobName = name;
  mob = name !== 'identity';
  ma = pre.a; mb = pre.b; mc = pre.c; md = pre.d;
  if (S) {
    S.controls.querySelectorAll('[data-m]').forEach((b) =>
      b.classList.toggle('on', /** @type {HTMLElement} */ (b).dataset.m === name));
    S.read.textContent = readout();
  }
}

/** Möbius class from tr²/det (complex). @returns {string} */
function mobiusClass() {
  if (!mob) return '—';
  const tr = cadd(ma, md);
  const det = csub(cmul(ma, md), cmul(mb, mc));
  const kk = cdiv(cmul(tr, tr), det);
  if (Math.abs(kk[1]) > 1e-4) return 'loxodromic';
  const x = kk[0];
  if (Math.abs(x - 4) < 1e-3) return 'parabolic';
  if (x >= -1e-6 && x < 4) return 'elliptic';
  return 'hyperbolic';
}

/** @returns {string} */
function readout() {
  const k = kappa;
  const geom = k > 1e-4 ? 'spherical (κ>0)' : k < -1e-4 ? 'hyperbolic (κ<0)' : 'euclidean (κ=0)';
  // boundary circumference vs flat = sin_κ(1): <1 sphere (closing), >1 hyperbolic (opening)
  let cFactor = 1;
  if (k > 1e-6) { const s = Math.sqrt(k); cFactor = Math.sin(s) / s; }
  else if (k < -1e-6) { const s = Math.sqrt(-k); cFactor = Math.sinh(s) / s; }
  const N = Math.floor(subdiv);
  const gen2 = algebra === 'complex' ? '−1 (i²)' : algebra === 'dual' ? '0 (ε²)' : '+1 (ϵ²)';
  const atype = algebra === 'complex' ? 'elliptic' : algebra === 'dual' ? 'parabolic' : 'hyperbolic';
  const tr = cadd(ma, md);
  const trStr = mob ? `${tr[0].toFixed(2)}${tr[1] >= 0 ? '+' : '−'}${Math.abs(tr[1]).toFixed(2)}i` : '—';
  const rows = [
    ['κ', k.toFixed(3)],
    ['geometry', geom],
    ['chart', chart],
    ['algebra', algebra],
    ['gen²', gen2],
    ['alg-type', atype],         // elliptic/parabolic/hyperbolic — same trichotomy as curvature
    ['möbius', mob ? mobName : 'off (κ disk)'],
    ['trace', trStr],            // a+d — the invariant that classifies the map
    ['mob-type', mobiusClass()], // elliptic/parabolic/hyperbolic/loxodromic — the trichotomy on MOTION
    ['subdiv', subdiv.toFixed(2)],
    ['rings', String(N)],
    ['rays', String(N)],
    ['cells', String(N * N)],
    ['C/flat', cFactor.toFixed(4)],   // boundary circumference vs euclidean (the curvature signature)
    ['dim', String(dimension)],
    ['note', 'curvature continuum · rings bunch (sphere) / spread (hyperbolic)'],
  ];
  return rows.map(([a, b]) => a.padEnd(9) + b).join('\n');
}

export const plane = {
  name: 'plane',
  /** @param {Shared} shared */
  mount(shared) {
    S = shared;
    shared.msg.textContent = 'the plane · geometry as a curvature continuum';

    shared.controls.innerHTML = CONTROLS_HTML;
    kval = /** @type {HTMLElement} */ (shared.controls.querySelector('#kval'));
    subval = /** @type {HTMLElement} */ (shared.controls.querySelector('#subval'));
    dimval = /** @type {HTMLElement} */ (shared.controls.querySelector('#dimval'));
    const kEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#kappa'));
    const subEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#subdiv'));
    const dimEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#dim'));
    kEl.addEventListener('input', () => { kappa = parseFloat(kEl.value); kval.textContent = kappa.toFixed(2); shared.read.textContent = readout(); });
    subEl.addEventListener('input', () => { subdiv = parseFloat(subEl.value); subval.textContent = subdiv.toFixed(2); shared.read.textContent = readout(); });
    dimEl.addEventListener('input', () => { dimension = parseInt(dimEl.value, 10); dimval.textContent = String(dimension); shared.read.textContent = readout(); });
    shared.controls.querySelectorAll('[data-c]').forEach((b) =>
      b.addEventListener('click', () => setChart(/** @type {HTMLElement} */ (b).dataset.c || 'cartesian')));
    shared.controls.querySelectorAll('[data-a]').forEach((b) =>
      b.addEventListener('click', () => setAlgebra(/** @type {HTMLElement} */ (b).dataset.a || 'complex')));
    shared.controls.querySelectorAll('[data-m]').forEach((b) =>
      b.addEventListener('click', () => setMobius(/** @type {HTMLElement} */ (b).dataset.m || 'identity')));
    setChart(chart);
    setAlgebra(algebra);
    setMobius(mobName);

    if (!pipeline) {
      uniform = shared.device.createBuffer({ size: 64, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
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
    uniformData[4] = CHARTS.indexOf(chart);     // 0 cartesian · 1 polar
    uniformData[5] = ALGEBRAS.indexOf(algebra); // 0 complex · 1 dual · 2 split
    uniformData[6] = mob ? 1 : 0;               // Möbius probe on/off
    uniformData[7] = 0;                          // pad (struct aligns ma.. to offset 32)
    uniformData[8] = ma[0]; uniformData[9] = ma[1];
    uniformData[10] = mb[0]; uniformData[11] = mb[1];
    uniformData[12] = mc[0]; uniformData[13] = mc[1];
    uniformData[14] = md[0]; uniformData[15] = md[1];
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
