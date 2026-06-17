// phase.js — the parameter engine, Layer 1: master phase + parameter phase.
//
// Vocab-neutral and pure (no DOM, no deps). One master cycle M ∈ [0,1) advances
// at 1/period; every parameter derives its phase from M by a ratio and an offset:
//
//     φ = (M·ratio + offset) mod 1
//
// No parameter keeps its own clock — M is the only source of truth. That buys:
//   · determinism      — same M ⇒ same phase, everywhere
//   · speed immunity    — changing the period changes only future advance, not M
//   · exact save/recall — serialize M + period to reconstruct full state
//
// `phase()` also serves a sub-master (a master derived from another): same formula.

/** Wrap any real number into [0, 1). @param {number} x @returns {number} */
export function wrap1(x) { return ((x % 1) + 1) % 1; }

/** A parameter's phase at master position `m`: (m·ratio + offset) mod 1. Pure.
 * @param {number} m master phase ∈ [0,1)
 * @param {number} ratio any real (rational → re-syncs; irrational → never does)
 * @param {number} [offset] phase offset ∈ [0,1)
 * @returns {number} the parameter phase ∈ [0,1) */
export function phase(m, ratio, offset = 0) { return wrap1(m * ratio + offset); }

/** @typedef {{ m: number, period: number }} MasterState */

/** Create a master cycle. `M` is the source of truth; `period` sets advance rate
 * (t-units per full cycle). Drive it internally (advance) or externally (set).
 * @param {number} [period] default 1
 * @param {number} [m0] start phase, default 0
 */
export function createMaster(period = 1, m0 = 0) {
  let M = wrap1(m0);
  let T = period;
  return {
    /** Current master phase ∈ [0,1). */
    get M() { return M; },
    /** Period (t-units per cycle). Setting it affects only future advance. */
    get period() { return T; },
    set period(v) { T = v; },
    /** Advance by elapsed t: M += dt/period, wrapped. @param {number} dt @returns {number} */
    advance(dt) { if (T !== 0) M = wrap1(M + dt / T); return M; },
    /** Set M directly (external driver / transport). @param {number} m @returns {number} */
    set(m) { M = wrap1(m); return M; },
    /** Back to phase 0. @returns {number} */
    reset() { M = 0; return M; },
    /** Serialize for save/recall. @returns {MasterState} */
    save() { return { m: M, period: T }; },
    /** Restore from a saved state. @param {MasterState} s */
    load(s) { M = wrap1(s.m); T = s.period; },
  };
}
