# frame — scope · shows · mode — f1 — [built · crystallized]

> **CRYSTALLIZED 20260621.** The scope is a faithful instrument: own panel below the display, 1:1 square cells, TIME-mode scanning that **stands still** (buffered-trigger-window, classic software-scope model), XY mode, configurable beam-knob ranges, and 4-beam 60fps performance. Operator-confirmed working live ("works pretty slick"). Built on the [[frame.beam-traces-wake]] renderer.

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
- ✓ beam knobs are **click-to-select → min/max/default/step config + reset** in the properties pane (`74b29cc`), persisted (`scopeCfg`)

**slice 2 — square-cell display (1:1)**  ✓ done  ·  (1f34633)
- ✓ centered square cells in the grid (4 = 2×2) so XY circles render round; scope holds a fixed footprint, stops widening
- ✓ sizing decoupled from the parts-pane width (the panel-below frees it)

**slice 3 — TIME-mode trigger (the scanning fix)**  ✓ done  ·  (buffered-trigger-window `6f67261`; live-wired `e242865` / `5525c46`)  *(the core)*
- ✓ **buffered-trigger-window** (classic software scope, per teropa): re-find the rising-edge trigger + redraw a fixed window each frame → phase-locked, robust, no sweep-state drift
- ✓ **live-wired to the heart-as-function** — readouts AND driven params/value-nodes (the heart is stateless → reconstruct at any time); dense (~1/px) + sub-frame-precise
- ✓ TARGETS met: bench-verified STANDING (saw 0.00% · sine 4Hz 0.12% · sine 1Hz 0.00% pixel-change/1.3s), correct shapes, **operator-confirmed live**

**slice 4 — white-out recalibration**  ✓ done  ·  (`49da4dc`; energy retuned `aa6089b`)  *(eye-tuned via INTEN/FOCUS)*
- ✓ color ramp deep-green → white-cyan hot core; per-hit energy tuned for the full-window redraw (green, not white)

**slice 5 — XY mode**  ✓ done  ·  (`49da4dc`)  *(minor)*
- ✓ `time | xy` selector; XY feeds the beam both axes from a 2-output source → `unit-pt` cos,sin = a round circle (bench-verified)

*Also delivered (not original slices): **beam-knob min/max/default config** in the properties pane, uncapped (`74b29cc` / `38b1003`); **performance pass** — 4 beams maxed 22.5ms → 16.7ms/60fps (`aa6089b`, focus decoupled from deposit, trigger scan early-exits). Framerate was the separate optimization concern, addressed.*

## §3 — trace · DAG & status
```
slice1 panel ─→ slice2 square display ─→ slice3 TRIGGER (the scanning fix, core)
                                          slice4 white-out recal (independent · eye)
                                          slice5 XY (minor · last)
```
- **status:** **DONE / crystallized.** All slices built + the buffered-trigger-window sampling, live-wired to the heart-as-function for readouts AND driven params/value-nodes (anything periodic stands). Operator-confirmed working live. Calibrated on `dev/scope-bench.html` (the standing calibration harness — kept). Open follow-ups, none blocking: dense path only kicks in for *driven* sources (undriven/static = a flat held line, correct); look is hand-tuned via the knobs; the `.shelf` lattice fix still wants a `lattice.bat` restart.
- **touches (built):** `kit/src/scope.js` (panel · square cells · buffered-trigger · XY · setSignal · knob cfg) · `kit/src/beam.js` (color/bloom/persistence/perf) · `kit/src/workbench.js` (panel mount · scope props out of inspector · heart-as-function feed · knob config) · `kit/src/unit-circle.js` (`heartReadings(turns)`) · `dev/scope-bench.html` (calibration harness).
- **lineage:** folds [[frame.scope-shows-mode.f0]] (reviewed draft, crystallized). Builds on the crystallized [[frame.beam-traces-wake]] (the renderer engine).
- mode: builder window · crystallized 20260621 — the scope instrument is built; further tuning is hand-work, not new slices.
