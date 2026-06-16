// THE SCHEDULE — SEED / playing-around stage. Scheduling, most atomically, is a
// SEQUENCE + ORDER (keystone 202: sort, then schedule — "work that isn't sorted can't
// be scheduled"). In the ts spine it's the sequence the unit lifts through (the planes,
// the dimensional climb). We don't yet know what fills the slots — so this is the bare
// bones: an ordered row of N slots and a cursor that steps through them. We play from
// here to discover what a slot IS (a plane? a dimension? a step of the lift).
// A mountable atomic unit behind the shell (main.js). Plain JS + JSDoc, no build.

/** @typedef {{ canvas: HTMLCanvasElement, device: GPUDevice, ctx: GPUCanvasContext,
 *   format: GPUTextureFormat, read: HTMLElement, controls: HTMLElement, msg: HTMLElement }} Shared */

let count = 6;   // how many slots in the sequence
let pos = 0;     // the cursor's position in the sequence (0 .. count-1)

let running = false;
/** @type {Shared | null} */
let S = null;
/** @type {GPUBuffer} */ let uniform;
const uniformData = new Float32Array(4);
/** @type {GPURenderPipeline} */ let pipeline;
/** @type {GPUBindGroup} */ let bindGroup;
/** @type {HTMLElement} */ let cval;
/** @type {HTMLElement} */ let pval;

const CONTROLS_HTML = `
  <div class="ctl"><label>slots <span id="cval">6</span></label>
    <input id="count" type="range" min="2" max="12" step="1" value="6" /></div>
  <div class="ctl"><label>cursor <span id="pval">0</span></label>
    <input id="pos" type="range" min="0" max="11" step="1" value="0" /></div>
  <div id="hint">the schedule — a sequence + a cursor (seed; what a slot IS is still open)</div>`;

const SHADER = /* wgsl */ `
  struct U { res: vec2f, count: f32, pos: f32 };
  @group(0) @binding(0) var<uniform> u: U;

  @vertex fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
    var p = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0));
    return vec4f(p[i], 0.0, 1.0);
  }

  @fragment fn fs(@builtin(position) frag: vec4f) -> @location(0) vec4f {
    let uv = frag.xy / u.res;
    let x = uv.x;
    let y = 1.0 - uv.y;
    var col = vec3f(0.02, 0.03, 0.05);

    // the track — the sequence's spine
    col += vec3f(0.12, 0.15, 0.20) * smoothstep(0.004, 0.0, abs(y - 0.5));

    // N slots as marks along the track; cursor slot lit gold
    let nx = x * u.count;
    let slot = floor(nx);
    let frac = fract(nx);
    let band = smoothstep(0.20, 0.17, abs(y - 0.5));            // central band
    let mark = smoothstep(0.05, 0.0, abs(frac - 0.5));          // a mark at each slot centre
    let isCursor = smoothstep(0.5, 0.4, abs(slot - round(u.pos)));
    col += vec3f(0.20, 0.26, 0.38) * mark * band;              // the slots
    col += vec3f(0.95, 0.72, 0.30) * mark * band * isCursor;   // the cursor, gold
    return vec4f(col, 1.0);
  }
`;

/** @returns {string} */
function readout() {
  const N = Math.floor(count);
  const p = Math.min(Math.floor(pos), N - 1);
  const rows = [
    ['slots', String(N)],
    ['cursor', `${p} / ${N - 1}`],
    ['note', 'a sequence + a cursor — the bare schedule. open: what fills a slot?'],
  ];
  return rows.map(([a, b]) => a.padEnd(8) + b).join('\n');
}

export const schedule = {
  name: 'schedule',
  /** @param {Shared} shared */
  mount(shared) {
    S = shared;
    shared.msg.textContent = 'the schedule · a sequence + a cursor (seed)';

    shared.controls.innerHTML = CONTROLS_HTML;
    cval = /** @type {HTMLElement} */ (shared.controls.querySelector('#cval'));
    pval = /** @type {HTMLElement} */ (shared.controls.querySelector('#pval'));
    const cEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#count'));
    const pEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#pos'));
    cEl.addEventListener('input', () => {
      count = parseInt(cEl.value, 10);
      if (pos > count - 1) { pos = count - 1; pEl.value = String(pos); }
      cval.textContent = String(count); pval.textContent = String(pos);
      shared.read.textContent = readout();
    });
    pEl.addEventListener('input', () => {
      pos = Math.min(parseInt(pEl.value, 10), count - 1);
      pval.textContent = String(pos); shared.read.textContent = readout();
    });
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
    uniformData[2] = count;
    uniformData[3] = Math.min(pos, count - 1);
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
