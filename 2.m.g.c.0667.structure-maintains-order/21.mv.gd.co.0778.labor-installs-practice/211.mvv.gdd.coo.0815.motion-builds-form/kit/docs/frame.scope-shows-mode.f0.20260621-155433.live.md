# frame — scope · shows · mode — f0 — [forming · live]

Grow the scope into a dual-mode instrument: its own properties panel, a square display, and a TIME/CM knob that switches TIME-sweep (waveforms) ↔ XY (stable figures). Built on the [[frame.beam-traces-wake]] renderer.

## §1 — agreement · at a glance
- **triad `scope·shows·mode` — blessed** (operator word 20260621).
- The **beam renderer is the engine** ([[frame.beam-traces-wake]], crystallized) — this frame builds the INSTRUMENT around it; it doesn't re-touch the deposit/accumulation/color core except to recalibrate the white-out.
- The scope gets a **dedicated properties panel BELOW the display** — scope props move out of the shared inspector into it. (Per-scope settings grow there later.)
- Display = **1:1 SQUARE cells in a grid config** — so XY figures render true (a circle is *round*, not an ellipse). The scope **stops widening into the parts pane**; it holds a fixed square-cell footprint with the panel underneath. (1=one square · 2=two · 3=three · 4=2×2.)
- **TIME/CM is a MODE knob** (mirrors the hardware — XY sits at one end of the rotary):
  - **TIME** (sweep): *waveforms*. x = sawtooth timebase, y = signal. Needs a **trigger** to stand still (the free-running smear we diagnosed).
  - **XY**: stable *shapes*. x AND y are both signals → the beam traces a closed figure (cos/sin → a circle; later Lissajous, a rotating wireframe cube, a logo). **No sweep, no trigger** — inherently stable. **Does NOT do waveforms.**
  - XY ≠ TIME — two different instruments on one knob. Either/or.
- **XY reuses the beam renderer as-is** (it already deposits x,y) — and it's the **bridge to the Trajectoscope** (n-D projected wireframes → the XY beam).
- **carried from the beam frame** (tails): white-out recalibration · time-mode trigger · (later) dense sub-frame sampling.

## §2 — plan · slices & rungs
status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked

**slice 1 — the scope's own properties panel**  ○ todo
goal: a dedicated panel below the scope display holding its properties; move them out of the shared inspector.
- ○ panel mounts under the scope (its own surface, not the right inspector)
- ○ move scope props there: readout · channels · layout · INTEN / FOCUS / TIME-CM · persist
- ○ selecting the scope still works; the inspector no longer owns scope props

**slice 2 — square-cell display (1:1)**  ○ todo
goal: cells are square in a grid config; the scope holds a fixed footprint, doesn't widen.
- ○ layout → square cells (a circle renders round); 1 / 2 / 3 / 4 channels in the grid (4 = 2×2)
- ○ scope sizing decoupled from the parts-pane width (the panel-below frees it)

**slice 3 — XY mode**  ○ todo  *(the new instrument)*
goal: TIME/CM → XY position; feed both axes from signals; stable closed figures.
- ○ TIME/CM knob gains an **XY position** (one end of the rotary)
- ○ XY: scope feeds the beam `{x: signalX, y: signalY}` (e.g. heart cos→x, sin→y → a circle)
- ○ per-axis source select (which signal drives x, which drives y)
- ○ verify: cos/sin → a steady round circle (beam renderer unchanged)

**slice 4 — time-mode trigger**  ○ todo  *(carried — the free-running fix)*
goal: lock the sweep to the signal so a waveform stands still ("the beam changes, not the shape").
- ○ trigger: sweep starts on a signal **level + slope** crossing (the standing-sine fix)
- ○ hold-off (re-arm delay) so the figure locks instead of crawling
- ○ free-run fallback when no trigger condition (today's behavior)

**slice 5 — white-out recalibration**  ○ todo  *(carried; eye-tuned)*
goal: the color ramp stays green under accumulation; white only at the genuine hot core.
- ○ raise the white threshold / drop per-hit energy so heavy-hit regions read green, not pure white
- ○ re-check against the LBO-508A photos (green field, white core)

**slice 6 — framerate-drop guess (profile before fixing)**  ○ todo  *(operator-noted; not yet rooted)*
goal: find why the workbench framerate decays the longer it runs (clock animation drops), then decide a fix.
- ○ first: **is it beam-mode-specific?** the beam adds, every frame, a `decay` + `tone-map` loop over W·H ×channels **plus a `ctx.filter:'blur'` bloom drawImage** — heavy, and the canvas blur filter is a known GPU-memory footgun that can degrade over thousands of frames (top suspect for *degrades-over-time*)
- ○ rule out **rAF-loop stacking** (scope/beam re-created without the old loop stopping) and listener/DOM accumulation
- ○ candidate cheap wins (pick after profiling): replace the filter-blur bloom with a fixed downsample-blur · throttle the bloom · cap/skip decay when the field is near-empty

*later:* per-scope settings · 3D wireframe in XY (projection — the TS bridge) · feature-step.

## §3 — trace · DAG & status
```
slice1 panel ─→ slice2 square display ─┐
slice3 XY mode ───────────────────────┤  (the instrument)
slice4 time trigger ──────────────────┘
slice5 white-out recal (independent · eye) · slice6 framerate (profile-first)
```
- **status:** forming — phase boundary: [[frame.beam-traces-wake]] crystallized (the engine); this frame is the scope **INSTRUMENT** (panel · square display · TIME↔XY modes · trigger). **Awaiting operator review of this draft before building.**
- **touches:** `kit/src/scope.js` (panel, square cells, XY feed, trigger) · `kit/src/workbench.js` (mount the panel, move props, axis-source select) · `kit/src/beam.js` (white-out recal only — engine otherwise frozen) · possibly a new `kit/src/scopepanel.js`.
- **lineage:** f0, no prior. Builds on the crystallized [[frame.beam-traces-wake]].
- mode: builder window · `.live` while building (crystallize on close).
