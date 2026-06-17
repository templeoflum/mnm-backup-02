// clock.js — THE HEART. The shared phase primitive, copied in from the TS unit
// (ts/clock.js) per our portability rule: reusable = copy the file out. One in-house
// tool every piece references, like the UI parts.
//
// A clock is a PERIOD: cyclic and bounded. Its one knob is the period's LENGTH. The
// phase is the normalized position within the current period, always in [0, 1).
//
// STATELESS — phase is a pure function of TIME and period:  phase = fract(t/period + phase0).
// Nothing accumulates: same t ⇒ same phase, forever, drift-free, frame-rate independent,
// exactly reproducible. (NOT rate×time, which grows without bound — the stopwatch, not the
// tally counter.) A longer period is a slower clock; a shorter one faster.
//
// It also carries the readings everything downstream drives off: cycles (the integer count),
// angle (radians), cos/sin (the position→signal projections), frequency & angular velocity
// (the rate read-outs). None of them accumulate.
//
// Plain JS the browser runs as-is; types in JSDoc, checked by tsc (emits nothing). No build.

/**
 * @typedef {object} Clock
 * @property {number} period  The period's length, in the same time unit as `t`. The one knob. Must be > 0.
 * @property {number} phase0  A constant head-start into the period, in turns. Lets two clocks run the
 *   same period yet sit out of step. Any real value; only its fractional part matters.
 */

/**
 * A clock with the given period length and (optional) head-start.
 * @param {number} period
 * @param {number} [phase0=0]
 * @returns {Clock}
 */
export function clock(period, phase0 = 0) {
  return { period, phase0 };
}

/**
 * The phase: normalized position within the current period, always in [0, 1). `fract` keeps it
 * bounded no matter how large (or negative) `t` grows — the period never overflows.
 * @param {Clock} c @param {number} t @returns {number}
 */
export function phaseAt(c, t) {
  return fract(t / c.period + c.phase0);
}

/**
 * The cycle count: how many whole periods have completed by time `t`. The integer companion to
 * the phase — together they say exactly where time sits (cycle N, fraction phase).
 * @param {Clock} c @param {number} t @returns {number}
 */
export function cyclesAt(c, t) {
  return Math.floor(t / c.period + c.phase0);
}

/**
 * The angle: the phase in radians, always in [0, 2π). `angle = 2π·phase`.
 * @param {Clock} c @param {number} t @returns {number}
 */
export function angleAt(c, t) {
  return 2 * Math.PI * phaseAt(c, t);
}

/**
 * The cosine projection — the clock's output as a *signal* (a wave) rather than a *position*.
 * Starts at 1 (phase 0). The bridge from "a point on a circle" to everything that oscillates.
 * @param {Clock} c @param {number} t @returns {number}
 */
export function cosAt(c, t) {
  return Math.cos(angleAt(c, t));
}

/**
 * The sine projection — trails the cosine by a quarter turn. cos and sin together are the
 * clock's two quadrature drive signals.
 * @param {Clock} c @param {number} t @returns {number}
 */
export function sinAt(c, t) {
  return Math.sin(angleAt(c, t));
}

/**
 * The clock placed on the unit circle: point = (cos, sin), `|point|` always 1.
 * @param {Clock} c @param {number} t @returns {[number, number]}
 */
export function unitCirclePoint(c, t) {
  return [cosAt(c, t), sinAt(c, t)];
}

/**
 * The frequency: whole turns per unit time, `1/period`. A read-out derived from the one knob,
 * not a mechanism. (When t is in seconds, this is Hz.)
 * @param {Clock} c @returns {number}
 */
export function frequency(c) {
  return 1 / c.period;
}

/**
 * The angular velocity: radians swept per unit time, `2π/period`. Companion to `frequency`.
 * @param {Clock} c @returns {number}
 */
export function angularVelocity(c) {
  return (2 * Math.PI) / c.period;
}

/**
 * Fractional part mapped into [0, 1), correct for negative inputs too.
 * @param {number} x @returns {number}
 */
function fract(x) {
  return x - Math.floor(x);
}
