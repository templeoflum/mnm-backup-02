// THE PLANE — a GEOMETRY, and the unit's stage. Two classical views meet here:
// Klein (a geometry = the invariants of a transformation GROUP — "what may move")
// and Riemann (a geometry = a manifold with local CURVATURE). Their fusion is
// CARTAN geometry: a local symmetry model varying over a curved base, where
// curvature = how far it deviates from the flat model (the `C/flat` readout).
//
// κ is the MASTER dial — a curvature continuum, hyperbolic (κ<0) ← euclidean (0)
// → spherical (κ>0), shown intrinsically (Gauss, Theorema Egregium) in the geodesic
// GRID (rings bunch for κ>0, spread for κ<0; one formula through zero), not a fake
// 3D bend. κ's SIGN fixes the geometry-type, which DERIVES the algebra (Cayley–Klein:
// complex/dual/split) and the available ISOMETRIES (the unit's motion). The CHART
// (cartesian/polar) is the method axis — gauge, free, changes no invariant.
// Faithful baseline: everything geometric follows κ; no unfaithful state is reachable.
// A mountable atomic unit behind the shell (main.js). Plain JS + JSDoc, no build.

/** @typedef {{ canvas: HTMLCanvasElement, device: GPUDevice, ctx: GPUCanvasContext,
 *   format: GPUTextureFormat, read: HTMLElement, controls: HTMLElement, msg: HTMLElement }} Shared */

// the plane's knobs. κ is the MASTER (Riemann/local). CHART is the method axis
// (free, gauge). The algebra + the available isometries DERIVE from κ — not free.
let kappa = 0;          // curvature continuum: <0 hyperbolic · 0 euclidean · >0 spherical (the master)
let chart = 'cartesian'; // coordinate chart (method/axis-2) — relabels the same space; gauge, free
const CHARTS = ['cartesian', 'polar'];
let subdiv = 4;         // divisions of the unit (grid lines per axis / rings × rays)

// ISOMETRY = Klein's transformation group (axis 1), at the STRICT end of the rigidity
// spectrum (isometry ⊂ similarity ⊂ affine ⊂ projective ⊂ topological) — the rung where
// the unit circle is PRESERVED. The unit-preserving SU(1,1) disk automorphisms
// w=(α·z+β)/(β̄·z+ᾱ), |α|²−|β|²=1, fix |z|=1 (coeffs a=α, b=β, c=β̄, d=ᾱ). The AMOUNT t
// (0=identity) is how far the unit flows; for rotation t IS the phase angle. Which types
// are isometries follows κ: rotation at every κ; horocycle & translate only at κ<0 (the
// richer hyperbolic group). At κ≥0 the others aren't offered — faithful baseline.
let isoType = 'elliptic';  // 'elliptic' rotate · 'parabolic' horocycle · 'hyperbolic' translate
let isoAmt = 0;            // the amount t (0 = identity)
let tilt = 0;              // sphere tilt (κ>0 only) — rotate the sphere about a horizontal axis to wrap the grid over the limb
/** @type {[number,number]} */ let ma = [1, 0];
/** @type {[number,number]} */ let mb = [0, 0];
/** @type {[number,number]} */ let mc = [0, 0];
/** @type {[number,number]} */ let md = [1, 0];
/** @type {Record<string,string>} */
const ISONAME = { elliptic: 'rotate', parabolic: 'horocycle', hyperbolic: 'translate' };

// RIGIDITY = where on Klein's rigidity spectrum we sit (axis 1, the group's looseness):
// isometry ⊂ similarity ⊂ affine ⊂ projective. Looser → fewer invariants → the unit
// circle unbinds (circle → ellipse → conic). The looser rungs are FLAT-space only —
// curved space (κ≠0) is rigid (isometry-only) — so they unlock at κ=0 (the "T").
let rigidity = 0;          // 0 isometry · 1 similarity · 2 affine · 3 projective
const RIGNAME = ['isometry', 'similarity', 'affine', 'projective'];

/** is `type` an isometry at the current κ? rotation always; the others only κ<0. @param {string} type */
function isoAvailable(type) { return type === 'elliptic' || kappa < -1e-4; }
/** is rigidity `level` reachable? isometry always; looser rungs only at κ=0. @param {number} level */
function rigAvailable(level) { return level === 0 || Math.abs(kappa) < 1e-4; }
/** algebra name derived from κ's sign (Cayley–Klein): complex (κ>0) · dual (κ=0) · split (κ<0). */
function algebraName() { return kappa > 1e-4 ? 'complex' : kappa < -1e-4 ? 'split-complex' : 'dual'; }
/** algebra index for the shader: 0 complex · 1 dual · 2 split. */
function algebraIdx() { return kappa > 1e-4 ? 0 : kappa < -1e-4 ? 2 : 1; }
/** rebuild SU(1,1) coeffs (a=α, b=β, c=β̄, d=ᾱ) from isoType + isoAmt. */
function computeIso() {
  const t = isoAmt;
  /** @type {[number,number]} */ let al;
  /** @type {[number,number]} */ let be;
  if (isoType === 'hyperbolic') { al = [Math.cosh(t / 2), 0]; be = [Math.sinh(t / 2), 0]; }        // translate along the real geodesic
  else if (isoType === 'parabolic') { al = [1, t]; be = [0, -t]; }                                   // horocycle fixing z=1
  else { al = [Math.cos(t / 2), Math.sin(t / 2)]; be = [0, 0]; }                                     // rotation by t about center
  ma = al; mb = be; mc = [be[0], -be[1]]; md = [al[0], -al[1]];
}

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
const uniformData = new Float32Array(20);
/** @type {GPURenderPipeline} */ let pipeline;
/** @type {GPUBindGroup} */ let bindGroup;
/** @type {HTMLElement} */ let kval;
/** @type {HTMLElement} */ let subval;

const CONTROLS_HTML = `
  <div class="ctl"><label>curvature κ <span id="kval">0.00</span></label>
    <input id="kappa" type="range" min="-2.3" max="2.3" step="0.01" value="0" /></div>
  <div class="ctl"><label>chart</label>
    <div class="presets"><button data-c="cartesian">cartesian</button><button data-c="polar">polar</button></div></div>
  <div class="ctl"><label>isometry — the unit's motion <span id="isoval">0.00</span></label>
    <div class="presets"><button data-iso="elliptic">rotate</button><button data-iso="parabolic">horocycle</button><button data-iso="hyperbolic">translate</button></div>
    <input id="isoamt" type="range" min="-3.14159" max="3.14159" step="0.01" value="0" /></div>
  <div class="ctl"><label>rigidity — the group (κ=0 only)</label>
    <div class="presets"><button data-rig="0">isometry</button><button data-rig="1">similarity</button><button data-rig="2">affine</button><button data-rig="3">projective</button></div></div>
  <div class="ctl"><label>tilt — wrap the sphere (κ>0 only) <span id="tiltval">0.00</span></label>
    <input id="tilt" type="range" min="-3.14159" max="3.14159" step="0.01" value="0" /></div>
  <div class="ctl"><label>subdivisions <span id="subval">4.00</span></label>
    <input id="subdiv" type="range" min="2" max="16" step="0.01" value="4" /></div>
  <div id="hint">geometry as one curvature continuum — flat at 0, sphere κ&gt;0, hyperbolic κ&lt;0</div>`;

const SHADER = /* wgsl */ `
  struct U { res: vec2f, kappa: f32, subdiv: f32, chart: f32, algebra: f32, rig: f32, amt: f32, ma: vec2f, mb: vec2f, mc: vec2f, md: vec2f, tilt: f32 };  // rig 0..3 · amt t · ma..md SU(1,1) · tilt: sphere tilt (κ>0, rad)
  @group(0) @binding(0) var<uniform> u: U;

  fn cmul(a: vec2f, b: vec2f) -> vec2f { return vec2f(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x); }
  fn cdiv(a: vec2f, b: vec2f) -> vec2f { let s = b.x*b.x + b.y*b.y; return vec2f((a.x*b.x + a.y*b.y)/s, (a.y*b.x - a.x*b.y)/s); }

  // RIGIDITY ladder (κ=0): the inverse of each rung's characteristic deformation, by amount.
  fn rigidityInv(z0: vec2f, rig: f32, amt: f32) -> vec2f {
    if (rig > 2.5) { let c = 0.5 * amt; let d = 1.0 - c * z0.x; return vec2f(z0.x / d, z0.y / d); } // projective (perspective): circle → conic
    if (rig > 1.5) { let a = 0.4 * amt; return vec2f(z0.x * exp(-a), z0.y * exp(a)); }              // affine (area-preserving stretch): circle → ellipse
    let s = exp(0.4 * amt); return vec2f(z0.x / s, z0.y / s);                                        // similarity (uniform scale): circle → circle
  }

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

    // the isometry / rigidity transform (the unit's motion), applied to the unit coord
    let z0 = m / R;
    var z = cdiv(cmul(u.md, z0) - u.mb, u.ma - cmul(u.mc, z0)); // isometry: SU(1,1) pre-image
    if (u.rig > 0.5) { z = rigidityInv(z0, u.rig, u.amt); }      // looser rung (κ=0)
    let rho = length(z);
    let th = atan2(z.y, z.x);

    if (k > 0.0001) {
      // SPHERE — CLOSED and TILTABLE. u.tilt rotates it about a horizontal axis so the
      // grid wraps over the limb and the far side comes round. Orthographic: for each
      // pixel the FRONT point of the tilted sphere is solid, the BACK faint; un-tilt each
      // to read its (g, θ). tilt=0 → the pole-on view. As κ→0⁺ the limb recedes to ∞.
      let s = sqrt(k);
      let X = z.x * sin(s);                                 // su-space coords (the limb is |·|=1)
      let Y = z.y * sin(s);
      let su2 = X * X + Y * Y;
      if (su2 <= 1.0) {
        let Zf = sqrt(1.0 - su2);
        let cf = cos(u.tilt); let sf = sin(u.tilt);
        let rho2 = sqrt(su2);
        let farFade = smoothstep(0.25, 0.8, k);
        // FRONT (visible) point of the tilted sphere → un-tilt → its (g, θ)
        let pf = vec3f(X, Y * cf + Zf * sf, -Y * sf + Zf * cf);
        let gF = acos(clamp(pf.z, -1.0, 1.0)) / s;
        let thF = atan2(pf.y, pf.x);
        col += vec3f(0.20, 0.26, 0.38) * gridAt(gF, thF, u.chart, u.subdiv, rho2);
        col += vec3f(0.95, 0.72, 0.30) * smoothstep(0.04, 0.0, abs(gF - 1.0));      // unit circle (g=1)
        col += vec3f(0.88, 0.30, 0.30) * smoothstep(0.05, 0.0, gF);                 // null = north pole (g=0)
        // BACK (far) point, faint — the back of the sphere showing through
        let pb = vec3f(X, Y * cf - Zf * sf, -Y * sf - Zf * cf);
        let gB = acos(clamp(pb.z, -1.0, 1.0)) / s;
        let thB = atan2(pb.y, pb.x);
        col += vec3f(0.07, 0.10, 0.15) * farFade * gridAt(gB, thB, u.chart, u.subdiv, rho2);
        col += vec3f(0.28, 0.22, 0.10) * farFade * smoothstep(0.04, 0.0, abs(gB - 1.0));
      }
      col += vec3f(0.30, 0.55, 0.45) * smoothstep(0.012, 0.0, abs(su2 - 1.0));      // the EQUATOR / limb (silhouette)
    } else if (k < -0.0001) {
      // HYPERBOLIC — the bounded disk; the interior IS the whole plane (boundary at ∞).
      if (r < R) {
        let s = sqrt(-k); let g = asinh(rho * sinh(s)) / s;        // rings spread
        col += vec3f(0.20, 0.26, 0.38) * gridAt(g, th, u.chart, u.subdiv, rho);
        var q = z.x * z.x + z.y * z.y;                              // split algebra (κ<0)
        if (u.algebra > 1.5) { q = z.x * z.x - z.y * z.y; }
        col += vec3f(0.95, 0.72, 0.30) * smoothstep(0.022, 0.0, abs(abs(q) - 1.0));
        col += vec3f(0.88, 0.30, 0.30) * smoothstep(0.010, 0.0, abs(q));
        col += vec3f(0.12, 0.15, 0.20) * smoothstep(0.005, 0.0, abs(r - R)); // boundary at ∞
      }
    } else {
      // EUCLIDEAN (κ=0) — an infinite flat plane: render the WHOLE canvas (continuous
      // with κ>0; no disk clip — that clip was the snap). The rigidity ladder lives here.
      let g = rho;
      col += vec3f(0.20, 0.26, 0.38) * gridAt(g, th, u.chart, u.subdiv, rho);
      var q = z.x * z.x + z.y * z.y;                                // dual algebra (κ=0); rig>0 keeps round
      if (u.rig < 0.5 && u.algebra > 0.5) { q = z.x * z.x; }
      col += vec3f(0.95, 0.72, 0.30) * smoothstep(0.022, 0.0, abs(abs(q) - 1.0));
      col += vec3f(0.88, 0.30, 0.30) * smoothstep(0.010, 0.0, abs(q));
    }
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
/** reflect both gates against κ: collapse rigidity to isometry off κ=0; snap the motion
 * to rotation when its type isn't an isometry here; disable the buttons that don't apply. */
function refreshUI() {
  if (!S) return;
  if (!rigAvailable(rigidity)) { rigidity = 0; }                      // κ left 0 — the ladder closes
  if (!isoAvailable(isoType)) { isoType = 'elliptic'; computeIso(); } // motion type no longer an isometry
  // isometry-type buttons: meaningful only at the isometry rung, gated by κ
  S.controls.querySelectorAll('[data-iso]').forEach((b) => {
    const el = /** @type {HTMLElement} */ (b);
    const avail = rigidity === 0 && isoAvailable(el.dataset.iso || '');
    el.classList.toggle('on', rigidity === 0 && el.dataset.iso === isoType);
    el.style.opacity = avail ? '1' : '0.3';
    el.style.pointerEvents = avail ? 'auto' : 'none';
  });
  // rigidity-rung buttons: looser rungs only at κ=0
  S.controls.querySelectorAll('[data-rig]').forEach((b) => {
    const el = /** @type {HTMLElement} */ (b);
    const avail = rigAvailable(Number(el.dataset.rig));
    el.classList.toggle('on', Number(el.dataset.rig) === rigidity);
    el.style.opacity = avail ? '1' : '0.3';
    el.style.pointerEvents = avail ? 'auto' : 'none';
  });
  // tilt slider: only on the sphere (κ>0); disable + reset off it
  const tEl = /** @type {HTMLInputElement | null} */ (S.controls.querySelector('#tilt'));
  if (tEl) {
    const onSphere = kappa > 1e-4;
    tEl.style.opacity = onSphere ? '1' : '0.3';
    tEl.style.pointerEvents = onSphere ? 'auto' : 'none';
    if (!onSphere && tilt !== 0) { tilt = 0; tEl.value = '0'; const tv = S.controls.querySelector('#tiltval'); if (tv) { tv.textContent = '0.00'; } }
  }
  S.read.textContent = readout();
}

/** isometry class from tr²/det. @returns {string} */
function isoClass() {
  if (isoAmt === 0) return 'identity';
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
  const geom = k > 1e-4 ? 'spherical · elliptic (κ>0)' : k < -1e-4 ? 'hyperbolic (κ<0)' : 'euclidean · parabolic (κ=0)';
  // boundary circumference vs flat = sin_κ(1): <1 sphere (closing), >1 hyperbolic (opening) — the Cartan deviation
  let cFactor = 1;
  if (k > 1e-6) { const s = Math.sqrt(k); cFactor = Math.sin(s) / s; }
  else if (k < -1e-6) { const s = Math.sqrt(-k); cFactor = Math.sinh(s) / s; }
  const N = Math.floor(subdiv);
  const gen2 = k > 1e-4 ? '−1 (i²)' : k < -1e-4 ? '+1 (j²)' : '0 (ε²)';
  const tr = cadd(ma, md);
  const active = isoAmt !== 0;
  const trStr = active ? `${tr[0].toFixed(2)}${tr[1] >= 0 ? '+' : '−'}${Math.abs(tr[1]).toFixed(2)}i` : '—';
  const RIGINV = ['distance · angle · size', 'angle · shape (ratios)', 'parallelism · area-ratios', 'incidence · cross-ratio'];
  const RIGSHAPE = ['circle', 'circle (any size)', 'ellipse', 'conic'];
  const loose = rigidity > 0;
  const rows = [
    ['κ', k.toFixed(3)],
    ['geometry', geom],            // space · type (the +/0/− trichotomy)
    ['algebra', algebraName() + ' (←κ)'], // Cayley–Klein, derived from κ
    ['gen²', gen2],
    ['chart', chart],              // method / gauge — free, no invariant changes
    ['rigidity', RIGNAME[rigidity] + (loose ? ' (κ=0)' : '')],  // the group's looseness (axis 1)
    ['preserves', RIGINV[rigidity]],   // the invariants this rung keeps
    ['unit →', active ? RIGSHAPE[rigidity] : 'circle'], // what the unit circle has become
    ['motion', loose ? '— (group loosened)' : ISONAME[isoType] + (active ? '' : ' (identity)')],
    ['amount', isoAmt.toFixed(2)], // t — the unit's flow / the deformation amount
    ['trace', loose ? '—' : trStr],   // a+d — classifies the isometry (isometry rung only)
    ['iso-type', loose ? '—' : isoClass()],
    ['subdiv', subdiv.toFixed(2)],
    ['rings', String(N)],
    ['rays', String(N)],
    ['cells', String(N * N)],
    ['C/flat', cFactor.toFixed(4)],   // boundary circumference vs euclidean = Cartan deviation from flat
    ['note', 'κ master → geometry-type → algebra + isometries (Cartan baseline)'],
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
    const kEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#kappa'));
    const subEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#subdiv'));
    const isoEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#isoamt'));
    const isoval = /** @type {HTMLElement} */ (shared.controls.querySelector('#isoval'));
    const tiltEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#tilt'));
    const tiltval = /** @type {HTMLElement} */ (shared.controls.querySelector('#tiltval'));
    // κ change also re-checks isometry validity (which motions are real isometries here)
    kEl.addEventListener('input', () => {
      let v = parseFloat(kEl.value);
      if (Math.abs(v) < 0.08) { v = 0; kEl.value = '0'; } // detent at κ=0 — make the parabolic/euclidean case landable
      kappa = v; kval.textContent = kappa.toFixed(2); refreshUI();
    });
    subEl.addEventListener('input', () => { subdiv = parseFloat(subEl.value); subval.textContent = subdiv.toFixed(2); shared.read.textContent = readout(); });
    isoEl.addEventListener('input', () => { isoAmt = parseFloat(isoEl.value); isoval.textContent = isoAmt.toFixed(2); computeIso(); shared.read.textContent = readout(); });
    tiltEl.addEventListener('input', () => { tilt = parseFloat(tiltEl.value); tiltval.textContent = tilt.toFixed(2); shared.read.textContent = readout(); });
    shared.controls.querySelectorAll('[data-c]').forEach((b) =>
      b.addEventListener('click', () => setChart(/** @type {HTMLElement} */ (b).dataset.c || 'cartesian')));
    shared.controls.querySelectorAll('[data-iso]').forEach((b) =>
      b.addEventListener('click', () => { isoType = /** @type {HTMLElement} */ (b).dataset.iso || 'elliptic'; computeIso(); refreshUI(); }));
    shared.controls.querySelectorAll('[data-rig]').forEach((b) =>
      b.addEventListener('click', () => { rigidity = Number(/** @type {HTMLElement} */ (b).dataset.rig); refreshUI(); }));
    setChart(chart);
    computeIso();
    refreshUI();

    if (!pipeline) {
      uniform = shared.device.createBuffer({ size: 80, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
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
    uniformData[5] = algebraIdx();              // algebra follows κ: 0 complex · 1 dual · 2 split
    uniformData[6] = rigidity;                   // 0 isometry · 1 similarity · 2 affine · 3 projective
    uniformData[7] = isoAmt;                      // amount t (drives the rigidity deformation when rig>0)
    uniformData[8] = ma[0]; uniformData[9] = ma[1];
    uniformData[10] = mb[0]; uniformData[11] = mb[1];
    uniformData[12] = mc[0]; uniformData[13] = mc[1];
    uniformData[14] = md[0]; uniformData[15] = md[1];
    uniformData[16] = tilt;                       // sphere tilt (κ>0)
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
