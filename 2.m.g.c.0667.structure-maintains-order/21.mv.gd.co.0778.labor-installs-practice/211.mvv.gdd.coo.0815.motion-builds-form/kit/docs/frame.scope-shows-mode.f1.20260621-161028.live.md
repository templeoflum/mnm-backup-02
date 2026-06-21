# frame — scope · shows · mode — f1 — [forming · live]

Make the scope a faithful instrument: its own properties panel, a square display, and **correct scanning** — a trigger that stands the waveform still. Beam mechanics + scanning are the point. Built on the [[frame.beam-traces-wake]] renderer.

## §1 — agreement · at a glance
- **triad `scope·shows·mode` — blessed** (operator word 20260621).
- **The point is beam mechanics + scanning** (operator word) — a faithful oscilloscope. *Not* a vector-synth tool. The renderer is built ([[frame.beam-traces-wake]], crystallized); this frame makes the scanning correct and gives the scope a real shell.
- The scope gets a **dedicated properties panel BELOW the display** — its props move out of the shared inspector. The scope **stops widening into the parts pane** and holds a **1:1 square-cell** footprint (grid config: 1=one square · 2=two · 3=three · 4=2×2).
- **TIME-mode scanning needs a TRIGGER** — the core of this frame. The sweep must lock to the signal so a waveform stands still ("the beam changes, not the shape of the sine"). The free-running smear we diagnosed is the missing trigger.
- **XY is a MINOR feature** (operator word — least concern; faithful-to-a-scope, not the goal): the TIME/CM knob has an XY end where a **2-output source drives x,y directly** (e.g. the `unit-pt` readout's cos→x, sin→y → a circle). It's "just the function" of feeding both axes — low priority, build last or later.
- **NOT in this frame:** graticule / screen tint (operator word, earlier). (Framerate decay is a separate optimization, not a concern of this frame.)
- **carried tails:** white-out recalibration (beam look) · trigger (now a core slice).

## §2 — plan · slices & rungs
status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked

**slice 1 — the scope's own properties panel**  ▸ built · awaiting eye-test  ·  (51b00cb)
- ✓ `.scope-panel` mounts under the canvas (built once, rebuilt after restore); canvas → flex:1
- ✓ scope props moved there: channels · readout · layout · INTEN / FOCUS / TIME-CM · persist
- ✓ inspector renders nothing on scope-select (props live in the panel); select still highlights

**slice 2 — square-cell display (1:1)**  ▸ built · awaiting eye-test  ·  (1f34633)
goal: cells are square in a grid config; the scope holds a fixed footprint, doesn't widen into the pane.
- ○ layout → square cells; 1 / 2 / 3 / 4 channels in the grid (4 = 2×2)
- ○ scope sizing decoupled from the parts-pane width (the panel-below frees it)

**slice 3 — TIME-mode trigger (the scanning fix)**  ▸ built · awaiting LIVE eye-test  ·  (1f34633)  *(the core of this frame)*
goal: lock the sweep to the signal so a waveform stands still — beam mechanics + scanning done right.
- ○ trigger: sweep starts on a signal **level + slope** crossing (the standing-sine fix)
- ○ hold-off (re-arm delay) so the figure locks instead of crawling
- ○ auto / free-run fallback when no trigger condition (today's behavior)
- **TARGETS to reproduce** (screenshot, must STAND STILL across frames): clean **sine** (heart `sin` readout) + clean **saw** (heart `phase` readout) at a few heart freqs (e.g. 1 / 2 / 4 Hz) — standing, recognizable, aligned each sweep. *(High-freq shape clarity is bounded by one-sample/frame; dense sub-frame sampling stays the deferred tail — targets met where the frame rate can represent the wave.)*

**slice 4 — white-out recalibration**  ▸ built · awaiting eye-test  ·  (49da4dc)  *(carried; eye-tuned)*
goal: the color ramp stays green under accumulation; white only at the genuine hot core.
- ○ raise the white threshold / drop per-hit energy so heavy-hit regions read green, not pure white
- ○ re-check against the LBO-508A photos (green field, white core)

**slice 5 — XY mode**  ▸ built · awaiting eye-test  ·  (49da4dc)  *(minor — faithful-to-a-scope feature)*
goal: TIME/CM → XY end; a 2-output source drives both axes (no time, no trigger — inherently stable).
- ○ TIME/CM gains an XY position; the scope feeds the beam `{x: srcX, y: srcY}` from a 2-output source
- ○ `unit-pt` (cos,sin) → a steady round circle (beam renderer unchanged)

## §3 — trace · DAG & status
```
slice1 panel ─→ slice2 square display ─→ slice3 TRIGGER (the scanning fix, core)
                                          slice4 white-out recal (independent · eye)
                                          slice5 XY (minor · last)
```
- **status:** building · live — slices 1–5 built; then the SAMPLING was reworked + **calibrated on `dev/scope-bench.html`** (synthetic signal, no WebGPU heart, headless). **`scope.setSignal(fn)`**: dense (~1/pixel, clean at any freq) + sub-frame-precise trigger (`lastRise` scanned every frame → standing on one phase) + saw edges connect (pen-up = flyback only). **Bench-verified clean (commit `31eaad1`):** sine 1/4 Hz standing, sawtooth with proper edges, XY → round circle. The bench is the calibration loop — open `scope-bench.html?wave=sine&freq=4&readout=beam&persist=1&inten=0.8&sweep=1` (works in any browser; no heart). **Next: wire the live workbench to feed `setSignal` from the heart-as-function-of-time** so the live scope matches the bench (the per-frame fallback still walks/aliases). Then live eye-test + crystallize.
- **touches:** `kit/src/scope.js` (panel hooks · square cells · trigger · XY feed) · `kit/src/workbench.js` (mount the panel, move scope props out of the inspector) · `kit/src/beam.js` (white-out recal only — engine otherwise frozen) · possibly a new `kit/src/scopepanel.js`.
- **lineage:** folds [[frame.scope-shows-mode.f0]] (reviewed draft, crystallized). Builds on the crystallized [[frame.beam-traces-wake]].
- mode: builder window · `.live` while building (crystallize on close).
