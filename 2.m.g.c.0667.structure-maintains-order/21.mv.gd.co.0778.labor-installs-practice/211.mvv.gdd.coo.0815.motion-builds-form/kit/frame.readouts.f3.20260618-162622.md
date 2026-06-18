# frame — readouts — f3 — source · bank · scope

home: `kit` (211/kit, co-located with the code) · mode: builder window · status: **R1 BUILT (21/21 green) · R2 framed, building · R3 named** · folds [[frame.readouts.f2]] (R2 redefined: resolution + follow, wrap dropped; R3 added: full readout parity) · the readouts thread from [[baton.clerk.f13]] · sibling of [[frame.unify.f0]]

Surface the heart's live readings as a **bank under the heart**; click one → the **scope plots it**.

## the agreement (at a glance)

- readouts are **nodes** — a SOURCE kind: output-only, heart-driven, clickable → scope. **(R1 built)**
- a **bank** under the heart, fixed (not the palette). Only sink is the scope. **(R1 built)**
- **all** the readings — R1 did 11; the heart's `readout(t)` exposes **27**. R3 reaches parity.
- the scope is a **precision instrument** — resolution-correct (1 sample/px, crisp), high control.
- **accumulators follow, don't wrap** — an unbounded climber rides a sliding y-window at the rate's slope.

## the scope — resolution-correct (R2)

The blur/aliasing is a rendering bug: the canvas is 560px internal, **CSS-stretched** and **DPR-upscaled**, so every line is smeared across ~2× its real pixels. Fix: size the backing store to *displayed px × devicePixelRatio*, **one sample per physical pixel column** (1px detail), crisp 1px lines, re-fit on resize. Capture stays frame-locked (~60 Hz) — spatial resolution is what was missing, not temporal rate.

## follow-window — accumulators, not wrap (R2)

For an unbounded climber (distance, cycles), the y-range itself **follows the value**: a fixed-height window `[value − span, value]` that slides up as it grows. The value rides the top; the trace climbs at the rate's **slope**. Constant rate → a steady diagonal that holds; rate change → slope change. Never pegs. `span` = the readout's natural range (16); a feel knob later. (The large *constants* — freq, ang-vel, velocity, accel — don't climb; they stay a crisp flatline until manual y-zoom, parked.) **Wrap / waterfall / trigger / time-base — dropped.**

## the readouts

R1 (built, 11): phase · cycles · angle · cos · sin · unit-pt · freq · ang-vel · distance · velocity · accel.

R3 (missing, → full parity with the heart's `readout(t)`):
- **sec** (the N-gon dot's secant value — "the big one") and the **radix family**: `radix(N)` · `base` (digit expansion) · `sub φ` · `r-idx` (current tick) · `r-cnt` (tick count) · `perim` · `area` · `side` · `gap` · `p-gap`.
- and: `tan` · `quad` · `turns` (continuous odometer) · `cos2φ` · `sin2φ` · `|pt|` · `v·r`.
- **approach**: export one `heartReadings()` from `unit-circle.js` returning the whole struct (the exact formulas already in `readout(t)`) — ONE source of truth, no formula duplication between the visual and the bank. The bank picks which keys to chip.

## build sequence (chunk × slice × rung)

**R2 — scope precision** (this build):
1. **resolution** — `scope.js`: device-pixel backing store, 1 sample/px, crisp lines, re-fit on resize (ResizeObserver).
2. **follow-window** — `scope.setFollow(on, span)`; in follow, each `set(v)` slides the range to `[v−span, v]`. Wire `follow` on the climbing readouts (distance, cycles); `focus()` picks follow vs fixed range.
3. **rig checks** — backing store = displayed × dpr (resolution-correct); a follow readout climbs past its span without pegging (trace stays a climbing diagonal, not flat at top).

**R3 — full readout parity** (next): export `heartReadings()`; expand the bank to the 27, foregrounding `sec` + the radix family; per-readout natural ranges + follow flags.

## deferred / open (named)

- **manual y-zoom / position** — for the large constants (freq, ang-vel, velocity, accel) so they're not a bottom flatline. Parked (was scope control #3).
- **render modes / trigger / time-base / waterfall** — dropped this pass; revisit only if a need surfaces.
- **patch panel / matrix view** (PARKED) — route readouts to sinks beyond the scope.
- **lattice/viewer perf** — slow tree load, kit empty on open; deeper look after the readouts thread.

## laws (carried)

a readout's `out` is the raw reading; the scope range is per-readout (display, not signal) · ONE source of truth for the heart's readings (`heartReadings()`, not re-derived) · focus by interaction only, never emission ([[incident.scope-focus-miss.f0]]) · a rig check encodes the operator's requirement, never my own change ([[reproduce-the-real-repro]]) · feel is the operator's, correctness in the rig · settle before build · buildless, no deps ([[buildless-unit-default]]) · direct manipulation ([[operator-builds-by-hand]]).
