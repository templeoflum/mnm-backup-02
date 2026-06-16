// THE SCHEDULE — the formula laid bare: an ordered SEQUENCE OF OPERATIONS applied to a
// seed, building the form. The bare engine. First operation: rotate + scale per step —
// repeated, that IS a logarithmic spiral (the nautilus self-scaling). The cursor steps
// through the schedule and you watch the form GENERATE, op by op.
//
// Overlays (points · path · spokes) toggle independently — the form can get crowded, so
// each layer is opt-in. A mountable atomic unit behind the shell (main.js). No build.

/** @typedef {{ canvas: HTMLCanvasElement, device: GPUDevice, ctx: GPUCanvasContext,
 *   format: GPUTextureFormat, read: HTMLElement, controls: HTMLElement, msg: HTMLElement }} Shared */

let count = 8;       // schedule length (number of operations)
let cursor = 7;      // how many ops applied so far (0 .. count-1) — the form built up to here
let theta = 0.6;     // rotate per step (radians)
let scaleS = 1.15;   // scale per step (>1 grows out, <1 spirals in)
let showPoints = true, showPath = true, showSpokes = false;

let running = false;
/** @type {Shared | null} */
let S = null;
/** @type {GPUBuffer} */ let uniform;
const uniformData = new Float32Array(12);
/** @type {GPURenderPipeline} */ let pipeline;
/** @type {GPUBindGroup} */ let bindGroup;
/** @type {Record<string, HTMLElement>} */
const val = {};

const CONTROLS_HTML = `
  <div class="ctl"><label>slots <span id="cval">8</span></label>
    <input id="count" type="range" min="2" max="16" step="1" value="8" /></div>
  <div class="ctl"><label>cursor <span id="pval">7</span></label>
    <input id="cursor" type="range" min="0" max="15" step="1" value="7" /></div>
  <div class="ctl"><label>rotate θ <span id="tval">0.60</span></label>
    <input id="theta" type="range" min="-1.5708" max="1.5708" step="0.01" value="0.6" /></div>
  <div class="ctl"><label>scale s <span id="sval">1.15</span></label>
    <input id="scale" type="range" min="0.6" max="1.6" step="0.01" value="1.15" /></div>
  <div class="ctl"><label>overlays</label>
    <div class="presets"><button data-ov="points">points</button><button data-ov="path">path</button><button data-ov="spokes">spokes</button></div></div>
  <div id="hint">the formula laid bare — rotate + scale per step → a logarithmic spiral (the nautilus)</div>`;

const SHADER = /* wgsl */ `
  struct U { res: vec2f, count: f32, cursor: f32, theta: f32, scale: f32, pts: f32, path: f32, spokes: f32 };
  @group(0) @binding(0) var<uniform> u: U;

  fn segDist(p: vec2f, a: vec2f, b: vec2f) -> f32 {
    let pa = p - a; let ba = b - a;
    let h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-9), 0.0, 1.0);
    return length(pa - ba * h);
  }

  @vertex fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
    var p = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0));
    return vec4f(p[i], 0.0, 1.0);
  }

  @fragment fn fs(@builtin(position) frag: vec4f) -> @location(0) vec4f {
    let center = u.res * 0.5;
    let scale = min(u.res.x, u.res.y);
    let pp = (frag.xy - center) / scale;
    let m = vec2f(pp.x, -pp.y);
    var col = vec3f(0.02, 0.03, 0.05);

    // normalize so the FULL spiral's outermost point sits at radius 0.4 (stable as the cursor steps)
    let fit = 0.4 / max(1.0, pow(u.scale, u.count - 1.0));

    var prev = vec2f(0.0, 0.0);
    for (var k = 0; k < 32; k = k + 1) {
      if (f32(k) > u.cursor) { break; }                 // only the form built up to the cursor
      let ang = f32(k) * u.theta;
      let rad = fit * pow(u.scale, f32(k));
      let pk = vec2f(rad * cos(ang), rad * sin(ang));
      let isC = abs(f32(k) - u.cursor) < 0.5;
      // spoke — origin → point (the rotation made visible)
      if (u.spokes > 0.5) { col += vec3f(0.18, 0.22, 0.30) * smoothstep(0.003, 0.0, segDist(m, vec2f(0.0), pk)); }
      // path — the segment from the previous op's result (the spiral curve)
      if (u.path > 0.5 && k > 0) { col += vec3f(0.30, 0.42, 0.55) * smoothstep(0.004, 0.0, segDist(m, prev, pk)); }
      // point — each op's result; the cursor's point gold
      if (u.pts > 0.5) {
        let d = length(m - pk);
        let dot = smoothstep(0.013, 0.0, d);
        col += select(vec3f(0.55, 0.65, 0.78), vec3f(0.95, 0.72, 0.30), isC) * dot;
      }
      prev = pk;
    }
    return vec4f(col, 1.0);
  }
`;

/** @returns {string} */
function readout() {
  const N = Math.floor(count);
  const p = Math.min(Math.floor(cursor), N - 1);
  const rows = [
    ['op', 'rotate θ + scale s'],
    ['slots', String(N)],
    ['cursor', `${p} / ${N - 1}`],
    ['θ/step', theta.toFixed(2) + ' rad'],
    ['s/step', scaleS.toFixed(2)],
    ['form', 'logarithmic spiral (rotate+scale repeated = the nautilus)'],
    ['note', 'the formula as a sequence of operations — the bare engine'],
  ];
  return rows.map(([a, b]) => a.padEnd(8) + b).join('\n');
}

/** reflect overlay button states. */
function refreshOv() {
  if (!S) return;
  /** @type {Record<string, boolean>} */
  const on = { points: showPoints, path: showPath, spokes: showSpokes };
  S.controls.querySelectorAll('[data-ov]').forEach((b) => {
    const el = /** @type {HTMLElement} */ (b);
    el.classList.toggle('on', !!on[el.dataset.ov || '']);
  });
}

export const schedule = {
  name: 'schedule',
  /** @param {Shared} shared */
  mount(shared) {
    S = shared;
    shared.msg.textContent = 'the schedule · the formula as a sequence of operations';

    shared.controls.innerHTML = CONTROLS_HTML;
    ['cval', 'pval', 'tval', 'sval'].forEach((id) => { val[id] = /** @type {HTMLElement} */ (shared.controls.querySelector('#' + id)); });
    const cEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#count'));
    const curEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#cursor'));
    const tEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#theta'));
    const sEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#scale'));
    cEl.addEventListener('input', () => {
      count = parseInt(cEl.value, 10);
      if (cursor > count - 1) { cursor = count - 1; curEl.value = String(cursor); val.pval.textContent = String(cursor); }
      val.cval.textContent = String(count); shared.read.textContent = readout();
    });
    curEl.addEventListener('input', () => { cursor = Math.min(parseInt(curEl.value, 10), count - 1); val.pval.textContent = String(cursor); shared.read.textContent = readout(); });
    tEl.addEventListener('input', () => { theta = parseFloat(tEl.value); val.tval.textContent = theta.toFixed(2); shared.read.textContent = readout(); });
    sEl.addEventListener('input', () => { scaleS = parseFloat(sEl.value); val.sval.textContent = scaleS.toFixed(2); shared.read.textContent = readout(); });
    shared.controls.querySelectorAll('[data-ov]').forEach((b) =>
      b.addEventListener('click', () => {
        const o = /** @type {HTMLElement} */ (b).dataset.ov;
        if (o === 'points') showPoints = !showPoints;
        else if (o === 'path') showPath = !showPath;
        else if (o === 'spokes') showSpokes = !showSpokes;
        refreshOv();
      }));
    refreshOv();
    shared.read.textContent = readout();

    if (!pipeline) {
      uniform = shared.device.createBuffer({ size: 48, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
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
    uniformData[3] = Math.min(cursor, count - 1);
    uniformData[4] = theta;
    uniformData[5] = scaleS;
    uniformData[6] = showPoints ? 1 : 0;
    uniformData[7] = showPath ? 1 : 0;
    uniformData[8] = showSpokes ? 1 : 0;
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
