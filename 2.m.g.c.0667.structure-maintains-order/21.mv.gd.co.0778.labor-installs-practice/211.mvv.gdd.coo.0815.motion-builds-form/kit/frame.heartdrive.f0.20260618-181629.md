# frame — heart drive — f0 — drive · modulate · feed-back

home: `kit` (211/kit, co-located with the code) · mode: builder window · status: **BUILT (rig green, 26/26) — operator feel-test + fine-tuning pending** · unfreezes the "FM-self" item deferred in [[frame.unify.f0]] · sibling of [[frame.readouts.f3]]

The heart's params are smart params built with `noDrive` — full except they can't be driven. Make them full: a driven heart param animates its [0,1] signal off the heart and maps it to the clock — the heart modulating itself.

## the agreement (at a glance)

- drop `noDrive` on the four heart params (speed · radix · phase₀ · playback). scrub stays noDrive (it's a jog).
- a driven heart param's signal = `wrap(heartTurns × ratio × mult + offset)` — same drive law as a bench param.
- `set(signal)` already fires `onOutput` → the clock setter, so driving = self-modulation, no new path.
- **drive radix → the base counter + N-gon sweep** (the payoff from the base talk). drive speed → FM.
- feedback is bounded, not guarded: signal stays [0,1]; setters clamp (freq > 0). Wild is the point.

## what driving each does

| param    | setter         | driven =                                            |
|----------|----------------|-----------------------------------------------------|
| speed    | `setFrequency` | FM — frequency swept by the heart's own phase       |
| radix    | `setRadixN`    | the measuring base sweeps (N-gon morphs, base recounts) |
| phase₀   | `setPhase0`    | continuous phase precession                         |
| playback | `setTimeScale` | playback speed swept (accel/decel, reversal)        |

Ratio/mult/offset (the Animation menu, now live on the heart params) tune the sweep rate — low ratio = slow sweep.

## build sequence (chunk × slice × rung)

1. **drop noDrive** — the heartParam helper builds drivable smart params; track `driven/ratio/mult/offset` per param (onDrive + onConfig).
2. **animate** — in the workbench loop, each driven heart param: `sp.set(wrap(heartTurns × ratio × mult + offset))` → fires onOutput → its clock setter. (scrub excluded.)
3. **rig** — drive radix → its name latches `driven` and its value sweeps off the heart over time (self-modulation observable).

## deferred / open (named)

- **self-FM stability** — speed-driving-itself is genuine nonlinear feedback; if it's unusable we add an optional rate clamp. Watch by feel first.
- **persisting heart drive** — heart settings + drive aren't serialized yet (carried from the bench autosave note). Later.

## laws (carried)

drive law is the same as the bench param (heart × ratio × mult + offset) · `set` fires onOutput, no second path · feedback bounded by the [0,1] signal + setter clamps · feel is the operator's, correctness in the rig · settle before build · buildless, no deps ([[buildless-unit-default]]) · direct manipulation ([[operator-builds-by-hand]]).
