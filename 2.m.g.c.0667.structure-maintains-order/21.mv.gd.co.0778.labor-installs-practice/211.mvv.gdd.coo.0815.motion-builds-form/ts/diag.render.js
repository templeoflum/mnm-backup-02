// DIAGNOSTIC — CPU port of plane.js's fragment shader (fs). The shader is a pure
// function of (pixel, uniforms), so we mirror it exactly here, sweep the settings
// (κ · chart · algebra · möbius), and write contact-sheet PNGs to look at without a
// browser/GPU. Equipment for the plane unit — kept beside it. Run: node diag.render.js
import zlib from 'node:zlib';
import { writeFileSync } from 'node:fs';

// ---- complex + glsl helpers (match WGSL) ----
const cmul = (a, b) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const csub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const cdiv = (a, b) => { const s = b[0] * b[0] + b[1] * b[1]; return [(a[0] * b[0] + a[1] * b[1]) / s, (a[1] * b[0] - a[0] * b[1]) / s]; };
const fract = (x) => x - Math.floor(x);
function smoothstep(e0, e1, x) { let t = Math.min(Math.max((x - e0) / (e1 - e0), 0), 1); return t * t * (3 - 2 * t); }

// ---- fs(): exact port of the plane.js fragment shader ----
function fs(fx, fy, U) {
  const { W, H, kappa, subdiv, chart, ma, mb, mc, md } = U;
  const algebra = kappa > 1e-4 ? 0 : kappa < -1e-4 ? 2 : 1; // algebra DERIVES from κ (matches plane.js)
  const scale = Math.min(W, H);
  const p = [(fx - W * 0.5) / scale, (fy - H * 0.5) / scale];
  const m = [p[0], -p[1]];
  const r = Math.hypot(m[0], m[1]);
  const R = 0.35;
  const col = [0.02, 0.03, 0.05];
  const k = kappa;
  if (r < R) {
    const z0 = [m[0] / R, m[1] / R];
    const z = cdiv(csub(cmul(md, z0), mb), csub(ma, cmul(mc, z0)));
    const rho = Math.hypot(z[0], z[1]);
    let g = rho;
    if (k > 0.0001) { const s = Math.sqrt(k); g = Math.asin(Math.min(Math.max(rho * Math.sin(s), -1), 1)) / s; }
    else if (k < -0.0001) { const s = Math.sqrt(-k); g = Math.asinh(rho * Math.sinh(s)) / s; }
    const th = Math.atan2(z[1], z[0]);
    let gridLine = 0;
    if (chart < 0.5) {
      const gx = g * Math.cos(th), gy = g * Math.sin(th);
      const cx = smoothstep(0.05, 0, Math.abs(gx * subdiv - Math.round(gx * subdiv)));
      const cy = smoothstep(0.05, 0, Math.abs(gy * subdiv - Math.round(gy * subdiv)));
      gridLine = Math.max(cx, cy);
    } else {
      const ring = smoothstep(0.05, 0, Math.abs(g * subdiv - Math.round(g * subdiv)));
      const turns = th / 6.2831853;
      const ray = smoothstep(0.010, 0, Math.min(fract(turns * subdiv), 1 - fract(turns * subdiv))) * (rho >= 0.02 ? 1 : 0);
      gridLine = Math.max(ring, ray);
    }
    col[0] += 0.20 * gridLine; col[1] += 0.26 * gridLine; col[2] += 0.38 * gridLine;
    const n = z;
    let q = n[0] * n[0] + n[1] * n[1];
    if (algebra > 1.5) q = n[0] * n[0] - n[1] * n[1];
    else if (algebra > 0.5) q = n[0] * n[0];
    const unit = smoothstep(0.022, 0, Math.abs(Math.abs(q) - 1));
    col[0] += 0.95 * unit; col[1] += 0.72 * unit; col[2] += 0.30 * unit;
    const nul = smoothstep(0.010, 0, Math.abs(q));
    col[0] += 0.88 * nul; col[1] += 0.30 * nul; col[2] += 0.30 * nul;
  }
  const out = smoothstep(0.005, 0, Math.abs(r - R));
  col[0] += 0.12 * out; col[1] += 0.15 * out; col[2] += 0.20 * out;
  return col;
}

// ---- PNG encode (8-bit truecolor, zlib via node) ----
const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
function crc32(buf) { let c = 0xFFFFFFFF; for (let i = 0; i < buf.length; i++) c = CRC[(c ^ buf[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}
function encodePNG(W, H, rgb) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(W, 0); ihdr.writeUInt32BE(H, 4); ihdr[8] = 8; ihdr[9] = 2;
  const stride = W * 3, raw = Buffer.alloc((stride + 1) * H);
  for (let y = 0; y < H; y++) { raw[y * (stride + 1)] = 0; rgb.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride); }
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]);
}

// ---- render one tile into a big rgb buffer at (ox,oy) ----
function drawTile(big, BW, ox, oy, T, U) {
  const u = { ...U, W: T, H: T };
  for (let y = 0; y < T; y++) for (let x = 0; x < T; x++) {
    const c = fs(x + 0.5, y + 0.5, u);
    const i = ((oy + y) * BW + (ox + x)) * 3;
    big[i] = Math.min(255, Math.max(0, Math.round(c[0] * 255)));
    big[i + 1] = Math.min(255, Math.max(0, Math.round(c[1] * 255)));
    big[i + 2] = Math.min(255, Math.max(0, Math.round(c[2] * 255)));
  }
}
// contact sheet: tiles laid out in `cols` columns, gap px between
function sheet(name, tiles, cols, T = 200, gap = 4) {
  const rows = Math.ceil(tiles.length / cols);
  const BW = cols * T + (cols + 1) * gap, BH = rows * T + (rows + 1) * gap;
  const big = Buffer.alloc(BW * BH * 3);
  for (let i = 0; i < big.length; i += 3) { big[i] = 26; big[i + 1] = 30; big[i + 2] = 36; } // bg
  tiles.forEach((U, idx) => {
    const r = Math.floor(idx / cols), c = idx % cols;
    drawTile(big, BW, gap + c * (T + gap), gap + r * (T + gap), T, U);
  });
  writeFileSync(name, encodePNG(BW, BH, big));
  console.log(`${name}  (${cols}×${rows} tiles, ${BW}×${BH})`);
}

// SU(1,1) coeffs from (type, amount t) — matches plane.js computeIso. fixes |z|=1.
function iso(type, t) {
  let al, be;
  if (type === 'hyperbolic') { al = [Math.cosh(t / 2), 0]; be = [Math.sinh(t / 2), 0]; }
  else if (type === 'parabolic') { al = [1, t]; be = [0, -t]; }
  else { al = [Math.cos(t / 2), Math.sin(t / 2)]; be = [0, 0]; }
  return { ma: al, mb: be, mc: [be[0], -be[1]], md: [al[0], -al[1]] };
}
const base = { subdiv: 4, chart: 0, ...iso('elliptic', 0) };
const AMTS = [-2, -1, 0, 1, 2];

// A — curvature sweep (κ: -2 -1 0 1 2): the algebra overlay now FOLLOWS κ (split ← κ<0 → complex)
sheet('diag.A.curvature.png', AMTS.map((kappa) => ({ ...base, kappa })), 5);
// B — the three geometry-types × the two charts (rows: cartesian, polar · cols: κ=-1, 0, +1)
sheet('diag.B.types-charts.png', [0, 1].flatMap((chart) => [-1, 0, 1].map((kappa) => ({ ...base, kappa, chart }))), 3);
// C — ROTATE amount sweep on the Poincaré disk (κ=-1): unit circle held, grid rotates, point fixed
sheet('diag.C.rotate.png', AMTS.map((t) => ({ ...base, kappa: -1, ...iso('elliptic', t) })), 5);
// D — TRANSLATE amount sweep at κ=-1 (a true isometry): point flows to boundary, circle held, geodesics rigid
sheet('diag.D.translate-hyperbolic.png', AMTS.map((t) => ({ ...base, kappa: -1, ...iso('hyperbolic', t) })), 5);
