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
  complex: 'ℂ · flat unit · structure is multiplicative',
  hyperbolic: 'hyperbolic unit (bounded) · cells stretch outward',
  spherical: 'unit sphere · cells shrink toward the poles',
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
      // SPHERICAL plane (κ = +1) — the bare unit sphere, subdivided into an N×N
      // graticule. The metric shows itself: the cells shrink toward the poles (equal
      // latitude/longitude steps, but the longitude cells narrow with cos(lat)). No
      // overlaid circle — the sphere IS the unit. Orthographic front hemisphere.
      if (r < R) {
        let z = sqrt(max(R * R - r * r, 0.0));
        let n = vec3f(m.x, m.y, z) / R;                 // unit sphere point / surface normal
        let L = normalize(vec3f(-0.4, 0.55, 0.8));
        let diff = max(dot(n, L), 0.0);
        col = vec3f(0.05, 0.07, 0.11) + vec3f(0.16, 0.20, 0.28) * diff;   // shaded ball
        let stepLat = 3.14159265 / u.subdiv;            // latitude divided into N
        let stepLon = 6.2831853 / u.subdiv;             // longitude divided into N
        let lat = asin(clamp(n.y, -1.0, 1.0));
        let lon = atan2(n.x, n.z);
        let latd = abs(lat / stepLat - round(lat / stepLat));
        let lond = abs(lon / stepLon - round(lon / stepLon));
        let lines = max(smoothstep(0.05, 0.0, latd), smoothstep(0.05, 0.0, lond));
        col += vec3f(0.16, 0.20, 0.28) * lines * (0.4 + 0.6 * z / R);     // graticule, fading to the rim
      }
      col += vec3f(0.34, 0.46, 0.58) * smoothstep(0.005, 0.0, abs(r - R)); // the unit's outline
      return vec4f(col, 1.0);
    }

    if (u.ptype == 2.0) {
      // HYPERBOLIC plane (κ = −1) — a BOUNDED unit patch (not the disk-to-infinity).
      // The drawn edge is hyperbolic distance 1 (the unit), so ρ = (r/R)·tanh(½).
      // Subdivided into N rings (equal hyperbolic distance) × N radials; the rings
      // crowd outward — the metric stretching, capped at the unit.
      if (r < R) {
        col = vec3f(0.04, 0.05, 0.09);
        let rho = (r / R) * 0.46211716;                   // tanh(0.5): edge → distance 1
        let d = log((1.0 + rho) / max(1.0 - rho, 1e-4));  // hyperbolic distance 0..1 across the unit
        let ring = smoothstep(0.06, 0.0, abs(d * u.subdiv - round(d * u.subdiv)));
        let ang = atan2(m.y, m.x) / 6.2831853;
        let radial = smoothstep(0.010, 0.0, min(fract(ang * u.subdiv), 1.0 - fract(ang * u.subdiv))) * step(0.02, r / R);
        col += vec3f(0.12, 0.16, 0.24) * max(ring, radial);
      }
      col += vec3f(0.30, 0.42, 0.55) * smoothstep(0.005, 0.0, abs(r - R)); // the unit's outline (bounded)
      return vec4f(col, 1.0);
    }

    // COMPLEX (ptype 1) is the flat unit too — it falls through to the same square
    // render below; ℂ's specialness is multiplicative, which lives in projection, not
    // in the bare plane. So no separate branch.

    // EUCLIDEAN / COMPLEX plane — the bare SUBDIVIDED UNIT. A unit square
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
  // the plane's signals — a normalized 2D unit, subdivided, with a metric, and a
  // DIMENSION (how many such planes the unit is). Dimension is the plane's own
  // property; assembling the planes into a cube is projection's display, so we keep
  // the count + what it implies, but never the cube-shape metrics.
  const flat = key === 'euclidean' || key === 'complex';
  const cells = Math.pow(Math.floor(subdiv), 2);       // N² — one plane's subdivided cells
  const cellMeasure = 1 / Math.pow(subdiv, 2);         // per-cell measure (unit total = 1)
  const totalCells = cells * dimension;                // d·N² — across the dimension's planes
  const rows = [
    ['plane', planeType],
    ['dim', String(dimension)],                        // how many planes the unit is
    ['subdiv', subdiv.toFixed(2)],
    ['cells', String(cells)],                          // N² per plane
    ['Σcells', String(totalCells)],                    // d·N² across the dimension
    ['cell·m', cellMeasure.toExponential(2)],          // per-cell measure 1/N²
    ['metric', flat ? 'flat · uniform' : 'curved · varies'],  // local measure — the slot curved types fill
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
