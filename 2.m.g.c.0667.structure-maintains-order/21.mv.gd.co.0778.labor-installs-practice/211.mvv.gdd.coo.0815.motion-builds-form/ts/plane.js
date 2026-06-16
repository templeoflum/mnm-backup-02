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

// the plane's knobs
let planeType = 'euclidean';
let dimension = 2;
let subdiv = 4;   // cells per axis (the division of the unit; may be irrational)

// curvature κ by type (a correct fact even while the render is euclidean-only)
const CURVATURE = { euclidean: 0, complex: 0, hyperbolic: -1, spherical: 1 };
const TYPES = ['euclidean', 'complex', 'hyperbolic', 'spherical'];
// per-type note + whether its render is built yet (vs scaffold)
const NOTE = {
  euclidean: 'unit square · 0→1 perimeter · N cells/axis',
  complex: 'ℂ · z = x+iy = e^(iθ) · |z|=1',
  hyperbolic: 'Poincaré disk · boundary = circle at ∞',
  spherical: 'sphere · the unit circle is a great circle (equator)',
};
const BUILT = { euclidean: true, complex: true, hyperbolic: true, spherical: true };

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
  <div class="ctl"><label>subdivisions <span id="subval">4.00</span></label>
    <input id="subdiv" type="range" min="2" max="16" step="0.01" value="4" /></div>
  <div class="ctl"><label>dimension <span id="dimval">2</span></label>
    <input id="dim" type="range" min="2" max="4" step="1" value="2" /></div>
  <div id="hint">the bare subdivided unit — no point (that's projection)</div>`;

const SHADER = /* wgsl */ `
  struct U { res: vec2f, ptype: f32, subdiv: f32 };  // ptype: 0 euclidean · 1 complex · 2 hyperbolic · 3 spherical · subdiv: cells per axis
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
    let r = length(m);
    let R = 0.35;                             // the unit circle's drawn radius
    var col = vec3f(0.02, 0.03, 0.05);

    if (u.ptype == 3.0) {
      // SPHERICAL plane (κ = +1) — the flat plane wraps to a sphere; the unit circle
      // becomes a GREAT CIRCLE (the equator). Orthographic front hemisphere, Lambert-
      // shaded, 30° graticule. (the dimension lift wires in later.)
      if (r < R) {
        let z = sqrt(max(R * R - r * r, 0.0));
        let n = vec3f(m.x, m.y, z) / R;                 // unit sphere point / surface normal
        let L = normalize(vec3f(-0.4, 0.55, 0.8));
        let diff = max(dot(n, L), 0.0);
        col = vec3f(0.05, 0.07, 0.11) + vec3f(0.16, 0.20, 0.28) * diff;   // shaded ball
        let step6 = 0.5235988;                          // 30° in radians
        let lat = asin(clamp(n.y, -1.0, 1.0));
        let lon = atan2(n.x, n.z);
        let latd = abs(lat / step6 - round(lat / step6));
        let lond = abs(lon / step6 - round(lon / step6));
        let lines = max(smoothstep(0.05, 0.0, latd), smoothstep(0.05, 0.0, lond));
        col += vec3f(0.12, 0.15, 0.20) * lines * (0.4 + 0.6 * z / R);     // graticule, fading to the rim
        col += vec3f(0.30, 0.70, 0.95) * smoothstep(0.022, 0.0, abs(lat)) * (z / R); // equator = the great circle
      }
      col += vec3f(0.34, 0.46, 0.58) * smoothstep(0.005, 0.0, abs(r - R)); // silhouette / outline
      return vec4f(col, 1.0);
    }

    if (u.ptype == 2.0) {
      // HYPERBOLIC plane (κ = −1) — the Poincaré disk. The whole hyperbolic plane
      // fits inside; the boundary (our unit circle) is the CIRCLE AT INFINITY. Radial
      // diameters are geodesics; rings at equal hyperbolic distance d = ln((1+ρ)/(1−ρ))
      // crowd toward the edge — the signature metric blowup.
      if (r < R) {
        let rho = r / R;                                  // 0..1 within the disk
        col = vec3f(0.04, 0.05, 0.09);
        let d = log((1.0 + rho) / max(1.0 - rho, 1e-4));  // hyperbolic distance from center
        let ring = smoothstep(0.06, 0.0, abs(d - round(d)));
        let ang = atan2(m.y, m.x) / 6.2831853;            // 0..1 around
        let radial = smoothstep(0.010, 0.0, min(fract(ang * 12.0), 1.0 - fract(ang * 12.0))) * step(0.02, rho);
        col += vec3f(0.11, 0.14, 0.22) * max(ring, radial);
      }
      col += vec3f(0.45, 0.55, 0.85) * smoothstep(0.005, 0.0, abs(r - R)); // the circle at infinity
      return vec4f(col, 1.0);
    }

    if (u.ptype == 1.0) {
      // COMPLEX plane ℂ — flat; grid + Re/Im axes + the units 1, i, -1, -i + |z|=1.
      // (left as the earlier representation — euclidean is the one reworked to the
      //  bare-subdivided-unit vision; the others follow once that's settled.)
      let cs = 0.1;
      let dx = abs(m.x / cs - round(m.x / cs));
      let dy = abs(m.y / cs - round(m.y / cs));
      col += vec3f(0.07, 0.09, 0.13) * max(smoothstep(0.04, 0.0, dx), smoothstep(0.04, 0.0, dy));
      col += vec3f(0.55, 0.38, 0.20) * smoothstep(0.0018, 0.0, abs(m.y));  // Re axis
      col += vec3f(0.22, 0.40, 0.62) * smoothstep(0.0018, 0.0, abs(m.x));  // Im axis
      col += vec3f(0.30, 0.70, 0.95) * smoothstep(0.004, 0.0, abs(r - R)); // |z| = 1
      col += vec3f(0.98, 0.72, 0.30) * smoothstep(0.020, 0.0, length(m - vec2f(R, 0.0)));
      col += vec3f(0.98, 0.72, 0.30) * smoothstep(0.020, 0.0, length(m - vec2f(-R, 0.0)));
      col += vec3f(0.42, 0.72, 1.00) * smoothstep(0.020, 0.0, length(m - vec2f(0.0, R)));
      col += vec3f(0.42, 0.72, 1.00) * smoothstep(0.020, 0.0, length(m - vec2f(0.0, -R)));
      return vec4f(col, 1.0);
    }

    // EUCLIDEAN plane — the bare SUBDIVIDED UNIT (the corrected vision). A unit square
    // divided into N cells per axis; 0→1 runs the perimeter (0 and 1 meet at the
    // right), quarter ticks at the edge midpoints — in relation to the circle's phase.
    // No privileged center, no ±1 (those were projections), no point, no circle.
    let s = R;                                              // half-side, matching the circle's scale
    let dsq = max(abs(m.x), abs(m.y));                      // L∞ radius — the square's "r"
    let inSq = step(dsq, s);
    let cell = (2.0 * s) / u.subdiv;                        // cell size (subdiv may be irrational)
    let gx = abs((m.x + s) / cell - round((m.x + s) / cell));
    let gy = abs((m.y + s) / cell - round((m.y + s) / cell));
    col += vec3f(0.10, 0.13, 0.18) * max(smoothstep(0.06, 0.0, gx), smoothstep(0.06, 0.0, gy)) * inSq;
    col += vec3f(0.30, 0.45, 0.60) * smoothstep(0.004, 0.0, abs(dsq - s));               // the square outline
    col += vec3f(0.70, 0.74, 0.80) * smoothstep(0.012, 0.0, length(m - vec2f(0.0, s)));  // ¼ top
    col += vec3f(0.70, 0.74, 0.80) * smoothstep(0.012, 0.0, length(m - vec2f(-s, 0.0))); // ½ left
    col += vec3f(0.70, 0.74, 0.80) * smoothstep(0.012, 0.0, length(m - vec2f(0.0, -s))); // ¾ bottom
    col += vec3f(0.95, 0.97, 1.0) * smoothstep(0.016, 0.0, length(m - vec2f(s, 0.0)));   // 0/1 at the right
    return vec4f(col, 1.0);
  }
`;

/** @returns {string} */
function readout() {
  const key = /** @type {keyof typeof CURVATURE} */ (planeType);
  const rows = [
    ['plane', planeType],
    ['dim', String(dimension)],
    ['subdiv', subdiv.toFixed(2)],
    ['cells', String(Math.floor(subdiv)) + '/axis'],
    ['curv κ', String(CURVATURE[key])],
    ['render', BUILT[key] ? 'built' : 'scaffold'],
    ['note', NOTE[key]],
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
    const subEl = /** @type {HTMLInputElement} */ (shared.controls.querySelector('#subdiv'));
    const subval = /** @type {HTMLElement} */ (shared.controls.querySelector('#subval'));
    subEl.addEventListener('input', () => {
      subdiv = parseFloat(subEl.value);
      subval.textContent = subdiv.toFixed(2);
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
    uniformData[2] = TYPES.indexOf(planeType); // 0 euclidean · 1 complex · 2 hyperbolic · 3 spherical
    uniformData[3] = subdiv;                    // cells per axis
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
