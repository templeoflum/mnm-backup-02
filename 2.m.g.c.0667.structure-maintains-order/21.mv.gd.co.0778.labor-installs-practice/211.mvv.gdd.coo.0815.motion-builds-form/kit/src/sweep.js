// sweep.js — THE SWEEP, pure math. An independent timebase: the beam's horizontal position is a
// sawtooth in HEART-TURNS, not wall-clock —   x = fract((H − H0) / turnsPerScreen).
//   turnsPerScreen  — heart-turns for one left→right crossing (the rate knob; larger = slower crawl)
//   H0 (turns0)     — the turn the sweep starts from (the trigger anchor; slice 4)
// Locked to turns: the phase is the heart's phase, so it does not drift on wall-clock. Slow rate → the
// dot crawls (each spot decays before the next pass); fast rate → overlapping passes stand a line.
// See frame.sweep-locks-turns.f2. Attaching y = signal(H) and depositing the path is the consumer's job.
//
// Plain JS + JSDoc, reuses fract from ratio.js. The rig (dev/verify.mjs · sweepMath) checks it without
// a DOM. turnsPerScreen must be > 0 — the consumer's rate knob holds that floor, not this layer.

import { fract } from './ratio.js';

/** The beam's x ∈ [0,1) at heart-turns H. @param {number} H @param {number} H0 @param {number} turnsPerScreen @returns {number} */
export function sweepX(H, H0, turnsPerScreen) { return fract((H - H0) / turnsPerScreen); }

/** Which sweep (0,1,2…) H falls in — the integer part. A change between two H means a flyback happened.
 *  @param {number} H @param {number} H0 @param {number} turnsPerScreen @returns {number} */
export function sweepCount(H, H0, turnsPerScreen) { return Math.floor((H - H0) / turnsPerScreen); }

/**
 * Sub-sample the swept path from Ha to Hb into n+1 points. Each carries x (the beam position) and the
 * turns H to read the signal at (the consumer maps H → y). penUp marks a point the beam reached by a
 * FLYBACK since the previous one (a sweep wrapped) — the consumer lifts the pen there, no retrace line.
 * @param {number} Ha @param {number} Hb @param {number} H0 @param {number} turnsPerScreen @param {number} n
 * @returns {{x:number,turns:number,penUp:boolean}[]}
 */
export function walkSweep(Ha, Hb, H0, turnsPerScreen, n) {
  const steps = Math.max(1, n | 0);
  const out = [];
  let prevCount = sweepCount(Ha, H0, turnsPerScreen);
  for (let k = 0; k <= steps; k++) {
    const H = Ha + (Hb - Ha) * k / steps;
    const count = sweepCount(H, H0, turnsPerScreen);
    out.push({ x: sweepX(H, H0, turnsPerScreen), turns: H, penUp: k > 0 && count !== prevCount });
    prevCount = count;
  }
  return out;
}
