// U0 proof — the clock's invariants, checked in isolation.
//
// "Prove the unit in isolation before trusting it in the whole." These checks
// have no DOM and no GPU; they exercise clock.ts alone. They run on every dev
// load (printed by main.ts) and are the honest answer to "is the clock right?".
// A test runner can later wrap each `check` with `expect`; the logic stays here.

import { clock, phaseAt, cyclesAt, type Clock } from './clock';

export interface ProofResult {
  name: string;
  pass: boolean;
  detail: string;
}

const EPS = 1e-9;

/** Run every clock invariant. Returns one result per check, in order. */
export function runProofs(): ProofResult[] {
  return [
    bounded(),
    periodic(),
    speedIsPeriodLength(),
    phase0Offset(),
    notRateTimes(),
  ];
}

/** Phase stays in [0, 1) across a huge sweep of t, including negatives. */
function bounded(): ProofResult {
  const c = clock(2.0);
  let worst = '';
  for (let i = -1000; i <= 1000; i++) {
    const t = i * 0.137; // irrational-ish step so we land mid-period, not on boundaries
    const p = phaseAt(c, t);
    if (!(p >= 0 && p < 1)) {
      worst = `phaseAt(t=${t.toFixed(3)}) = ${p}`;
      break;
    }
  }
  // and at an extreme magnitude, where rate×time would have exploded
  const big = phaseAt(c, 1e9 + 0.5);
  const bigOk = big >= 0 && big < 1;
  if (!bigOk) worst = `phaseAt(t=1e9+0.5) = ${big}`;
  return result('bounded', worst === '', worst || 'phase ∈ [0,1) over t∈[-137,137] and at t=1e9');
}

/** phase repeats every period: phaseAt(t) == phaseAt(t + period). */
function periodic(): ProofResult {
  const c = clock(2.0, 0.21);
  let bad = '';
  for (const t of [0, 0.4, 1.3, 7.77, 123.4]) {
    const a = phaseAt(c, t);
    const b = phaseAt(c, t + c.period);
    const d = phaseAt(c, t + 5 * c.period);
    if (Math.abs(a - b) > EPS || Math.abs(a - d) > EPS) {
      bad = `t=${t}: phase ${a} vs +1period ${b} vs +5period ${d}`;
      break;
    }
  }
  return result('periodic', bad === '', bad || 'phase identical after 1 and 5 whole periods');
}

/** The knob IS the period's length: one full turn completes exactly at t = period. */
function speedIsPeriodLength(): ProofResult {
  let bad = '';
  for (const period of [0.5, 2.0, 5.0, 13.0]) {
    const c = clock(period);
    // at the instant t = period, exactly one cycle has elapsed and phase wraps to 0
    if (cyclesAt(c, period) !== 1) bad = `period=${period}: cyclesAt(period) = ${cyclesAt(c, period)} (want 1)`;
    if (Math.abs(phaseAt(c, period)) > EPS) bad = `period=${period}: phaseAt(period) = ${phaseAt(c, period)} (want 0)`;
    // halfway through the period the phase is exactly 0.5, whatever the length
    if (Math.abs(phaseAt(c, period / 2) - 0.5) > EPS) bad = `period=${period}: phaseAt(period/2) = ${phaseAt(c, period / 2)} (want 0.5)`;
    if (bad) break;
  }
  return result('speed = period length', bad === '', bad || 'one turn completes at t=period for every length; phase is length-independent');
}

/** phase0 is a head-start: it shifts the phase by its fractional part, mod 1. */
function phase0Offset(): ProofResult {
  const base: Clock = clock(2.0, 0);
  const shifted: Clock = clock(2.0, 0.3);
  let bad = '';
  for (const t of [0, 0.5, 1.7, 9.0]) {
    const expected = fractLocal(phaseAt(base, t) + 0.3);
    const got = phaseAt(shifted, t);
    if (Math.abs(expected - got) > EPS) {
      bad = `t=${t}: expected ${expected}, got ${got}`;
      break;
    }
  }
  return result('phase0 offset', bad === '', bad || 'phase0 shifts phase by its fraction, staying bounded');
}

/** The anti-toy check: rate×time would diverge; the period stays put. */
function notRateTimes(): ProofResult {
  const c = clock(2.0);
  const rate = 1 / c.period; // the toy's "rate"
  const t = 1e6;
  const rateTimes = rate * t; // what the toy accumulated — large, unbounded
  const phase = phaseAt(c, t); // what the clock reports — bounded
  const pass = rateTimes > 1000 && phase >= 0 && phase < 1;
  return result(
    'not rate×time',
    pass,
    `at t=1e6 the toy's rate×time = ${rateTimes} (unbounded); the clock's phase = ${phase} (bounded)`,
  );
}

function fractLocal(x: number): number {
  return x - Math.floor(x);
}

function result(name: string, pass: boolean, detail: string): ProofResult {
  return { name, pass, detail };
}
