// U0 proof — the clock's invariants, checked in isolation.
//
// "Prove the unit in isolation before trusting it in the whole." These checks
// have no DOM and no GPU; they exercise clock.js alone. They run on every load
// (printed by main.js) and are the honest answer to "is the clock right?".
// They are pure functions of clock.js, so they also run straight under node:
//   node --input-type=module -e "import('./clock.proof.js').then(m=>console.log(m.runProofs()))"

import {
  clock,
  phaseAt,
  cyclesAt,
  unitCirclePoint,
  angleAt,
  cosAt,
  sinAt,
  frequency,
  angularVelocity,
} from './clock.js';

/**
 * @typedef {object} ProofResult
 * @property {string} name
 * @property {boolean} pass
 * @property {string} detail
 */

const EPS = 1e-9;

/**
 * Run every clock invariant. Returns one result per check, in order.
 * @returns {ProofResult[]}
 */
export function runProofs() {
  return [
    bounded(),
    periodic(),
    speedIsPeriodLength(),
    phase0Offset(),
    notRateTimes(),
    onUnitCircle(),
    angleIsPhaseInRadians(),
    projections(),
    rateReadouts(),
  ];
}

/**
 * The clock's form is the unit circle: its point is always radius 1.
 * @returns {ProofResult}
 */
function onUnitCircle() {
  const c = clock(2.0, 0.13);
  let worst = '';
  for (let i = 0; i < 360; i++) {
    const [x, y] = unitCirclePoint(c, i * 0.071);
    const rad = Math.sqrt(x * x + y * y);
    if (Math.abs(rad - 1) > EPS) {
      worst = `|point| = ${rad} at sample ${i}`;
      break;
    }
  }
  return result('on unit circle', worst === '', worst || '|point| = 1 across a full sweep — the clock is the unit circle');
}

/**
 * Phase stays in [0, 1) across a huge sweep of t, including negatives.
 * @returns {ProofResult}
 */
function bounded() {
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

/**
 * phase repeats every period: phaseAt(t) == phaseAt(t + period).
 * @returns {ProofResult}
 */
function periodic() {
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

/**
 * The knob IS the period's length: one full turn completes exactly at t = period.
 * @returns {ProofResult}
 */
function speedIsPeriodLength() {
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

/**
 * phase0 is a head-start: it shifts the phase by its fractional part, mod 1.
 * @returns {ProofResult}
 */
function phase0Offset() {
  /** @type {import('./clock.js').Clock} */
  const base = clock(2.0, 0);
  /** @type {import('./clock.js').Clock} */
  const shifted = clock(2.0, 0.3);
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

/**
 * The anti-toy check: rate×time would diverge; the period stays put.
 * @returns {ProofResult}
 */
function notRateTimes() {
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

/**
 * The angle is the phase in radians: angle = 2π·phase, always in [0, 2π).
 * @returns {ProofResult}
 */
function angleIsPhaseInRadians() {
  const c = clock(3.0, 0.4);
  let bad = '';
  for (let i = -500; i <= 500; i++) {
    const t = i * 0.123;
    const a = angleAt(c, t);
    if (!(a >= 0 && a < 2 * Math.PI)) { bad = `angleAt(${t.toFixed(3)}) = ${a}`; break; }
    if (Math.abs(a - 2 * Math.PI * phaseAt(c, t)) > EPS) { bad = `t=${t}: angle != 2π·phase`; break; }
  }
  return result('angle = 2π·phase', bad === '', bad || 'angle ∈ [0,2π) and equals 2π·phase across the sweep');
}

/**
 * cos/sin are the unit circle's coordinates: cos²+sin²=1, start at (1,0), sin trails cos a quarter-turn.
 * @returns {ProofResult}
 */
function projections() {
  const c = clock(2.0, 0.07);
  let bad = '';
  for (let i = 0; i < 360; i++) {
    const t = i * 0.071;
    const co = cosAt(c, t);
    const si = sinAt(c, t);
    if (Math.abs(co - Math.cos(angleAt(c, t))) > EPS || Math.abs(si - Math.sin(angleAt(c, t))) > EPS) {
      bad = `t=${t.toFixed(3)}: projection != cos/sin of angle`; break;
    }
    if (Math.abs(co * co + si * si - 1) > EPS) { bad = `t=${t.toFixed(3)}: cos²+sin² = ${co * co + si * si}`; break; }
    // sin(φ) is cos read a quarter-turn (period/4) earlier
    if (Math.abs(si - cosAt(c, t - c.period / 4)) > EPS) { bad = `t=${t.toFixed(3)}: sin != cos a quarter-turn behind`; break; }
  }
  // phase 0 sits at (1, 0): 3 o'clock
  const c0 = clock(2.0, 0);
  if (Math.abs(cosAt(c0, 0) - 1) > EPS || Math.abs(sinAt(c0, 0)) > EPS) bad = 'phase 0 is not at (1,0)';
  return result('projections cos/sin', bad === '', bad || 'cos²+sin²=1, starts at (1,0), sin trails cos by ¼ turn');
}

/**
 * frequency and angular velocity are honest read-outs of the one knob — and frequency IS the phase's slope.
 * @returns {ProofResult}
 */
function rateReadouts() {
  let bad = '';
  for (const period of [0.5, 2.0, 7.0]) {
    const c = clock(period, 0.1);
    if (Math.abs(frequency(c) - 1 / period) > EPS) bad = `period=${period}: frequency != 1/period`;
    if (Math.abs(frequency(c) * period - 1) > EPS) bad = `period=${period}: frequency·period != 1`;
    if (Math.abs(angularVelocity(c) - 2 * Math.PI * frequency(c)) > EPS) bad = `period=${period}: angularVelocity != 2π·frequency`;
    // the read-out matches the phase's measured slope, away from a wrap
    const t = 0.123;
    const h = 1e-6;
    const slope = (phaseAt(c, t + h) - phaseAt(c, t)) / h;
    if (Math.abs(slope - frequency(c)) > 1e-3) bad = `period=${period}: measured slope ${slope} != frequency ${frequency(c)}`;
    if (bad) break;
  }
  return result('rate read-outs', bad === '', bad || 'frequency=1/period, angularVelocity=2π·frequency, and frequency IS the phase slope');
}

/**
 * @param {number} x
 * @returns {number}
 */
function fractLocal(x) {
  return x - Math.floor(x);
}

/**
 * @param {string} name
 * @param {boolean} pass
 * @param {string} detail
 * @returns {ProofResult}
 */
function result(name, pass, detail) {
  return { name, pass, detail };
}
