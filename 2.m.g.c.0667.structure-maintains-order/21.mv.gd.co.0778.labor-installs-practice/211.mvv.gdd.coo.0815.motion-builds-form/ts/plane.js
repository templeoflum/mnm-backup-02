// THE PLANE — the space the unit lives in and projects through. Its two knobs:
// plane TYPE (euclidean · complex · hyperbolic · spherical · …) and DIMENSION
// count. Together these are what turn the unit circle into a sphere and beyond —
// projection = the unit realized through the plane (frame.ts-formula.f2).
//
// SCAFFOLD (step 2): the mountable shape + the two controls + a faithful readout.
// The render is the euclidean plane only (a grid + the unit circle sitting in it);
// changing type/dimension updates the state + readout but not yet the geometry —
// that's the next build. A mountable atomic unit behind the shell (main.js).
//
// Plain JS + JSDoc, no build.

/** @typedef {{ canvas: HTMLCanvasElement, device: GPUDevice, ctx: GPUCanvasContext,
 *   format: GPUTextureFormat, read: HTMLElement, controls: HTMLElement, msg: HTMLElement }} Shared */

// the plane's two knobs
let planeType = 'euclidean';
let dimension = 2;

// curvature κ by type (a correct fact even while the render is euclidean-only)
const CURVATURE = { euclidean: 0, complex: 0, hyperbolic: -1, spherical: 1 };
const TYPES = ['euclidean', 'complex', 'hyperbolic', 'spherical'];

let running = false;
/** @type {Shared | null} */
let S = null;
/** @type {GPUBuffer} */ let uniform;
const uniformData = new Float32Array(4);
/** @type {GPURenderPipeline} */ let pipeline;
/** @type {GPUBindGroup} */ let bindGroup;
/** @type {HTMLElement} */ let dimval;

const CONTROLS_HTML = `
  <div class="ctl"><label>plane</label>
    <div class="presets">
      <button data-p="euclidean">euclidean</button>
      <button data-p="complex">complex</button>
      <button data-p="hyperbolic">hyperbolic</button>
      <button data-p="spherical">spherical</button>
    </div></div>
  <div class="ctl"><label>dimension <span id="dimval">2</span></label>
    <input id="dim" type="range" min="2" max="4" step="1" value="2" /></div>
  <div id="hint">the space the unit projects through — render is euclidean (scaffold)</div>`;

const SHADER = /* wgsl */ `
  struct U { res: vec2f, _pad: vec2f };
  @group(0) @binding(0) var<uniform> u: U;

  @vertex fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
    var p = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0));
    return vec4f(p[i], 0.0, 1.0);
  }

  @fragment fn fs(@builtin(position) frag: vec4f) -> @location(0) vec4f {
    let center = u.res * 0.5;
    let scale = min(u.res.x, u.res.y);
    let p = (frag.xy - center) / scale;
    let m = vec2f(p.x, -p.y);                 // math orientation: +y up
    var col = vec3f(0.02, 0.03, 0.05);

    // the euclidean grid — lines every 0.1, anti-aliased
    let s = 0.1;
    let dx = abs(m.x / s - round(m.x / s));
    let dy = abs(m.y / s - round(m.y / s));
    let grid = max(smoothstep(0.04, 0.0, dx), smoothstep(0.04, 0.0, dy));
    col += vec3f(0.09, 0.11, 0.15) * grid;
    // the axes, brighter
    let ax = max(smoothstep(0.0016, 0.0, abs(m.x)), smoothstep(0.0016, 0.0, abs(m.y)));
    col += vec3f(0.20, 0.24, 0.30) * ax;

    // the unit circle, sitting in the plane (same drawn radius as the unit)
    let r = length(m);
    let R = 0.35;
    col += vec3f(0.30, 0.70, 0.95) * smoothstep(0.004, 0.0, abs(r - R));

    return vec4f(col, 1.0);
  }
`;

/** @returns {string} */
function readout() {
  const rows = [
    ['plane', planeType],
    ['dim', String(dimension)],
    ['curv κ', String(CURVATURE[/** @type {keyof typeof CURVATURE} */ (planeType)])],
    ['status', 'scaffold (euclidean render)'],
  ];
  return rows.map(([k, v]) => k.padEnd(8) + v).join('\n');
}

/** @param {string} t */
function setType(t) {
  planeType = t;
  if (S) {
    S.controls.querySelectorAll('.presets button').forEach((b) =>
      b.classList.toggle('on', /** @type {HTMLElement} */ (b).dataset.p === t));
    S.read.textContent = readout();
  }
}

export const plane = {
  name: 'plane',
  /** @param {Shared} shared */
  mount(shared) {
    S = shared;
    shared.msg.textContent = 'the plane · the space the unit projects through';

    shared.controls.innerHTML = CONTROLS_HTML;
    dimval = /** @type {HTMLElement} */ (shared.controls.querySelector('#dimval'));
    const dimEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#dim'));
    dimEl.addEventListener('input', () => {
      dimension = parseInt(dimEl.value, 10);
      dimval.textContent = String(dimension);
      shared.read.textContent = readout();
    });
    shared.controls.querySelectorAll('.presets button').forEach((b) =>
      b.addEventListener('click', () => setType(/** @type {HTMLElement} */ (b).dataset.p || 'euclidean')));
    setType(planeType);

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
