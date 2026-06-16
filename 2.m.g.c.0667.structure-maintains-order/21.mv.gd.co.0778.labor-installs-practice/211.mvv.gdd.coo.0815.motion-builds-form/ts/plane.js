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
// separate axes, deferred to their own slices — this slice is the geometry.
// A mountable atomic unit behind the shell (main.js). Plain JS + JSDoc, no build.

/** @typedef {{ canvas: HTMLCanvasElement, device: GPUDevice, ctx: GPUCanvasContext,
 *   format: GPUTextureFormat, read: HTMLElement, controls: HTMLElement, msg: HTMLElement }} Shared */

// the plane's knobs
let kappa = 0;      // curvature: <0 hyperbolic · 0 euclidean · >0 spherical
let subdiv = 4;     // geodesic rings × radial rays (the division of the unit)
let dimension = 2;  // how many planes the unit is (assembly = projection)

let running = false;
/** @type {Shared | null} */
let S = null;
/** @type {GPUBuffer} */ let uniform;
const uniformData = new Float32Array(4);
/** @type {GPURenderPipeline} */ let pipeline;
/** @type {GPUBindGroup} */ let bindGroup;
/** @type {HTMLElement} */ let kval;
/** @type {HTMLElement} */ let subval;
/** @type {HTMLElement} */ let dimval;

const CONTROLS_HTML = `
  <div class="ctl"><label>curvature κ <span id="kval">0.00</span></label>
    <input id="kappa" type="range" min="-2.3" max="2.3" step="0.01" value="0" /></div>
  <div class="ctl"><label>subdivisions <span id="subval">4.00</span></label>
    <input id="subdiv" type="range" min="2" max="16" step="0.01" value="4" /></div>
  <div class="ctl"><label>dimension <span id="dimval">2</span></label>
    <input id="dim" type="range" min="2" max="4" step="1" value="2" /></div>
  <div id="hint">geometry as one curvature continuum — flat at 0, sphere κ&gt;0, hyperbolic κ&lt;0</div>`;

const SHADER = /* wgsl */ `
  struct U { res: vec2f, kappa: f32, subdiv: f32 };
  @group(0) @binding(0) var<uniform> u: U;

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
      // geodesic-polar grid: N rings at equal geodesic distance, N radial geodesics
      let ring = smoothstep(0.05, 0.0, abs(g * u.subdiv - round(g * u.subdiv)));
      let ang = atan2(m.y, m.x) / 6.2831853;
      let ray = smoothstep(0.010, 0.0, min(fract(ang * u.subdiv), 1.0 - fract(ang * u.subdiv))) * step(0.02, rho);
      col += vec3f(0.20, 0.26, 0.38) * max(ring, ray);
    }
    col += vec3f(0.30, 0.42, 0.55) * smoothstep(0.005, 0.0, abs(r - R)); // the unit's outline
    return vec4f(col, 1.0);
  }
`;

/** @returns {string} */
function readout() {
  const k = kappa;
  const geom = k > 1e-4 ? 'spherical (κ>0)' : k < -1e-4 ? 'hyperbolic (κ<0)' : 'euclidean (κ=0)';
  // boundary circumference vs flat = sin_κ(1): <1 sphere (closing), >1 hyperbolic (opening)
  let cFactor = 1;
  if (k > 1e-6) { const s = Math.sqrt(k); cFactor = Math.sin(s) / s; }
  else if (k < -1e-6) { const s = Math.sqrt(-k); cFactor = Math.sinh(s) / s; }
  const N = Math.floor(subdiv);
  const rows = [
    ['κ', k.toFixed(3)],
    ['geometry', geom],
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
    shared.read.textContent = readout();

    if (!pipeline) {
      uniform = shared.device.createBuffer({ size: 16, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
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
