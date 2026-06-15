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
 * The clock placed on the **unit circle** — its true form. The phase is one trip
 * around it: angle = 2π·phase, point = (cos, sin). This circle is the device's
 * clock; everything else (rotation, ratio, the whole formula) is a projection and
 * sampling of this one cycling circle. Always radius 1 — `|point|` is always 1.
 */
export function unitCirclePoint(c: Clock, t: number): [number, number] {
  const a = 2 * Math.PI * phaseAt(c, t);
  return [Math.cos(a), Math.sin(a)];
}

/** Fractional part mapped into [0, 1), correct for negative inputs too. */
function fract(x: number): number {
  return x - Math.floor(x);
}
