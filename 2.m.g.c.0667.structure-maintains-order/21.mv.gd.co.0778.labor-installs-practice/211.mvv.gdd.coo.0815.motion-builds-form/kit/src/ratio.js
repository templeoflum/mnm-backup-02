// ratio.js — THE RATIO SYSTEM, pure math. A param derives its own rotation from the
// heart's monotonic turn count H:   φ = fract(H · m · r + o).   See frame.ratio-system.f1.
//   r (ratio)  ∈ [0, 1)  — the fraction, library-bookmarked
//   m (mult)   |m| ≥ 1   — the whole scale; sign = direction (− = reverse rotation)
//   o (offset) ∈ [0, 1)  — a constant head-start (a position on the ring, wraps)
//
// m·r is the param's CYCLES PER HEART-TURN (signed) — the whole relationship. Rational m·r
// re-syncs with the heart at the reduced denominator (q heart-turns both come home together);
// irrational m·r runs free forever. Convention here: larger |m·r| = faster (frame's default,
// a one-line feel-flip if it reads backward).
//
// Plain JS + JSDoc, no deps — the rig (dev/verify.mjs) checks it without a DOM.

/** Fractional part in [0,1), correct for negatives. @param {number} x @returns {number} */
export function fract(x) { return x - Math.floor(x); }

/** The param's phase at heart-turns H. @param {number} H @param {number} m @param {number} r @param {number} o @returns {number} */
export function paramPhase(H, m, r, o) { return fract(H * m * r + o); }

/** Cycles per heart-turn (signed): the whole relationship. @param {number} m @param {number} r @returns {number} */
export function cyclesPerTurn(m, r) { return m * r; }

/**
 * Nearest rational p/q to x via continued fractions — smallest q within `tol`, q ≤ `maxQ`.
 * Returns null if no rational that close (x is effectively irrational at this resolution —
 * e.g. 1/φ never lands within tol below maxQ, so it reads as free-running). Convergents come
 * out already reduced, so q is the reduced denominator.
 * @param {number} x @param {number} [maxQ] @param {number} [tol] @returns {{p:number,q:number}|null}
 */
export function nearestRational(x, maxQ = 64, tol = 1e-4) {
  const sign = x < 0 ? -1 : 1;
  let v = Math.abs(x);
  let h0 = 0, h1 = 1, k0 = 1, k1 = 0;     // running convergent (h/k)
  let a = Math.floor(v);
  for (let i = 0; i < 64; i++) {
    const h2 = a * h1 + h0, k2 = a * k1 + k0;
    if (k2 > maxQ) break;
    h0 = h1; h1 = h2; k0 = k1; k1 = k2;
    if (Math.abs((sign * h1) / k1 - x) <= tol) return { p: sign * h1, q: k1 };
    const frac = v - a;
    if (frac < 1e-12) break;
    v = 1 / frac; a = Math.floor(v);
  }
  return k1 > 0 && Math.abs((sign * h1) / k1 - x) <= tol ? { p: sign * h1, q: k1 } : null;
}

/**
 * Heart-turns until the param re-syncs with the heart (both home together) = the reduced
 * denominator of m·r; null if free-running (m·r effectively irrational) or motionless (m·r=0).
 * @param {number} m @param {number} r @param {number} [maxQ] @param {number} [tol] @returns {number|null}
 */
export function syncTurns(m, r, maxQ = 64, tol = 1e-4) {
  const x = m * r;
  if (x === 0) return null;
  const rat = nearestRational(x, maxQ, tol);
  return rat ? rat.q : null;
}
