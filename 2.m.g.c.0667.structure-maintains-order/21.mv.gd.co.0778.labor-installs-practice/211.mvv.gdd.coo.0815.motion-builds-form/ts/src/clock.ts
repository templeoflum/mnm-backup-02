// U0 — the clock. The first atomic unit of the formula, built from first
// principles and proven in isolation before anything hangs off it.
//
// FIRST PRINCIPLES
//   A clock is a PERIOD: cyclic and bounded. Its one defining quantity is the
//   period's LENGTH — the frame's "speed = the period's length". The phase is
//   the normalized position within the current period, always in [0, 1). When
//   time crosses a period boundary the phase wraps back to 0; it never escapes.
//
//   This is NOT rate×time. The toy accumulated phase as rate×elapsed, a value
//   that grows without bound — so "where are we in the turn?" had no honest
//   answer once the number got large. Here phase IS that answer by construction:
//   a pure, bounded function of time and period that sweeps 0→1 and repeats.
//
// The period length is the clock's only knob. A longer period is a slower clock
// (the phase sweeps 0→1 over more time); a shorter period is a faster one. There
// is no rate multiplying time anywhere in this unit.
//
// DIRECTION. The clock runs one way: phase increases, the point sweeps CCW from
// 3 o'clock. Reverse (CW) is not a knob here — it is a projection downstream
// (read 1−phase, or negate the angle). The atomic clock is the canonical forward
// clock; turning it around is something done TO it, not a setting on it.
//
// CONNECTIONS. The unit exposes three readings of WHERE it is — phase (ratio),
// angle (radians), cycles (integer) — the two PROJECTIONS that turn position
// into signal — cos, sin — and two read-outs of HOW FAST — frequency, angular
// velocity. Everything downstream drives off these; none of them accumulates.

export interface Clock {
  /**
   * The period's length, in the same time unit as `t`. The clock's one knob —
   * what the frame calls its "speed". Must be > 0.
   */
  period: number;
  /**
   * A constant head-start into the period, in turns. Lets two clocks run the
   * same period yet sit out of step. Any real value; only its fractional part
   * matters to the phase.
   */
  phase0: number;
}

/** A clock with the given period length and no head-start. */
export function clock(period: number, phase0 = 0): Clock {
  return { period, phase0 };
}

/**
 * The phase: the normalized position within the current period, always in
 * [0, 1). `fract` keeps it bounded no matter how large (or negative) `t` grows —
 * the period never overflows. This is the unit's whole point.
 */
export function phaseAt(c: Clock, t: number): number {
  return fract(t / c.period + c.phase0);
}

/**
 * The cycle count: how many whole periods have completed by time `t`. The
 * integer companion to the phase — together they say exactly where time sits
 * (cycle N, fraction phase). U4 (self-scaling) reads this at cycle boundaries.
 */
export function cyclesAt(c: Clock, t: number): number {
  return Math.floor(t / c.period + c.phase0);
}

/**
 * The angle: the phase in radians, always in [0, 2π). The phase is the trip as a
 * ratio (0→1); the angle is that same trip in the unit the circle's trigonometry
 * speaks — `angle = 2π·phase`. Rotation (U1) reads this directly.
 */
export function angleAt(c: Clock, t: number): number {
  return 2 * Math.PI * phaseAt(c, t);
}

/**
 * The cosine projection — the point's x-coordinate on the unit circle. Starts at
 * 1 (phase 0, 3 o'clock) and is the clock's output as a *signal* (a wave) rather
 * than a *position*. This is the bridge from "a point on a circle" to everything
 * that oscillates.
 */
export function cosAt(c: Clock, t: number): number {
  return Math.cos(angleAt(c, t));
}

/**
 * The sine projection — the point's y-coordinate. Starts at 0 and trails the
 * cosine by a quarter turn (the same wave, sampled 90° apart). cos and sin
 * together are the clock's two quadrature drive signals.
 */
export function sinAt(c: Clock, t: number): number {
  return Math.sin(angleAt(c, t));
}

/**
 * The clock placed on the **unit circle** — its true form. The phase is one trip
 * around it: angle = 2π·phase, point = (cos, sin). This circle is the device's
 * clock; everything else (rotation, ratio, the whole formula) is a projection and
 * sampling of this one cycling circle. Always radius 1 — `|point|` is always 1.
 */
export function unitCirclePoint(c: Clock, t: number): [number, number] {
  return [cosAt(c, t), sinAt(c, t)];
}

/**
 * The frequency: how many whole turns complete per unit time — the phase's rate,
 * `1/period`. (When t is in seconds, this is Hz.) A READ-OUT derived from the one
 * knob, not a mechanism: phase is still computed from t, never rate×time. The
 * honest report of "how fast", with none of the accumulation that report once
 * caused. phase ↔ frequency.
 */
export function frequency(c: Clock): number {
  return 1 / c.period;
}

/**
 * The angular velocity: radians swept per unit time, `2π/period` — the angle's
 * rate. On the unit circle (radius 1) this is also the point's tangential speed
 * around the circle. The companion to `frequency`: angle ↔ angular velocity.
 */
export function angularVelocity(c: Clock): number {
  return (2 * Math.PI) / c.period;
}

/** Fractional part mapped into [0, 1), correct for negative inputs too. */
function fract(x: number): number {
  return x - Math.floor(x);
}
