# sketch — tsnew-trace — f0 — 20260607-160000

the trace toy. the foundation everything else builds on.

---

## what this toy is

a standalone HTML file. one canvas. a dot traces a trajectory. nothing else — no measurement, no formulas, no projection, no UI panels. just the core engine running visibly: iterative matrix composition with cascading rates and proportional displacement, drawing a trail on a 2D canvas.

this is the smallest thing that demonstrates the mechanism. if this doesn't work, nothing above it works. if this works, everything above it is measurement and presentation.

## what it contains

### composition (from ts-composition)

the engine: `buildRaw(phases)`

- 5x5 homogeneous matrix, always. 3D behavior is 4D behavior with w=0.
- schedule: selectable. at minimum two schedules — the 3D period-4 (XY/YZ/XZ) and the 4D period-6 (XY/YZ/ZW/XW/XZ/YW). the schedule determines which planes rotate at each depth.
- loop: for each depth (0 to maxDepth-1), pick the plane from schedule[depth % period], build a rotation matrix for that plane at angle theta[depth], left-multiply into the accumulator. at cycle boundaries (every `period` depths), apply translation along current axis.
- seed: [D, 0, 0, 0, 1] where D is the displacement at the outermost cycle.
- output: one point per frame (the final matrix × seed).
- chain recording: build `_chain[]` showing the point after each step. for the skeleton overlay later — not drawn in the trace toy, but the data structure should exist.

### cascade (from ts-cascade)

the rate system: `cascade(depth)`

- rate at depth d = (1/ratio)^d × depthMult(d)
- ratio is the base — irrational default (1/phi ≈ 0.618). ratio library available but the toy only needs one ratio at a time.
- depthMult: per-depth override array. defaults to 1.0 at every depth. when overridden, multiplies the geometric rate at that depth.
- phase advance per frame: `phases[d] += cascade(d) × speed × dt`
- the cascade is what makes the form — deeper depths rotate slower, producing finer structure nested inside coarser structure.

### proportion (from ts-proportion)

the displacement rule: `displacement(depth)`

- proportional mode (default): d = k × (k+1)^(C-1) × D, where C is the cycle number (counted from outermost), D is the base displacement (radius), k is the proportion parameter.
- this produces self-similar scaling — each cycle's displacement shrinks by exactly (k+1), keeping the hole fraction constant at (k-1)/(k+1).
- k is the single parameter. it IS the proportion.
- legacy mode: available as "fixed displacement" for comparison but not default. uses dispRatio geometric decay instead of the self-similar formula.

### the glue (minimal)

- animation loop: requestAnimationFrame → advance phases → buildRaw → project to 2D → draw point → repeat
- 3D → 2D projection: simple orthographic or perspective. just enough to see the form. no 4D projection in this toy — that's the projection toy's job.
- trail: accumulate points on the canvas (don't clear each frame). the trail IS the visualization. fade or alpha optional.
- controls: minimal. depth (how many depths active), speed, ratio selector, k, and per-depth rate overrides. enough to explore the mechanism, not more.

## what it does NOT contain

- no measurement (scope) — no PCA, no eigenvalues, no caliper, no COM
- no formula bank — only composed (the SE(4) construction). other formulas come in the formulas toy
- no 4D projection — just 3D camera. the projection toy handles 4D viewing
- no info panel — no readouts, no state display beyond what's on the canvas
- no second trace — single trace only. dual-trace comparison comes later
- no overlay system — no skeleton, no reference shapes, no bbox. just the trail
- no state capture — no JSON export, no logging, no screenshots

## inputs (what the user controls)

| control | what it does | range |
|---------|-------------|-------|
| depth | how many depths active | 1–19 |
| speed | phase advance rate | 0.001–10 |
| ratio | base frequency ratio | from ratio library or manual |
| k | proportion parameter | 1.01–100 |
| schedule | which rotation schedule | 3D (period 4) / 4D (period 6) |
| per-depth rate | override cascade at one depth | 0–10× |
| oscillation | pendulum blend amount | 0–1 (0 = off) |
| legacy mode | fixed vs proportional displacement | toggle |

## outputs (what the user sees)

- a trail on a canvas. the form builds up over time.
- at low depth (1–3): simple curves, visible rotation.
- at medium depth (4–8): nested structure, recognizable forms (torus, spiral shell).
- at deep depth (9+): fine fractal-like detail, self-similar nesting visible.
- changing k changes the proportions — how much space each cycle takes relative to the next.
- changing ratio changes the frequency relationships — which resonances appear.
- changing schedule changes the spatial character — 3D forms vs 4D forms projected to 3D.

## decisions needed

1. **3D projection for this toy**: simple perspective (divide by z+offset) or proper camera (yaw/pitch/distance)? leaning toward proper camera — it's small code, and without it you can't rotate the view to see the form from different angles. but it shouldn't be the 4D projection system.

2. **canvas size and scaling**: auto-fit the form? or fixed viewport with manual zoom? the form's extent varies wildly with parameters. auto-fit means measuring the extent, which is scope's job. leaning toward fixed viewport + manual zoom scrub for the toy.

3. **trail persistence**: infinite trail (never clears) or rolling window? infinite builds the full form but gets heavy at deep depths (millions of points). rolling window shows the last N points. leaning toward configurable — default long trail, option to cap.

4. **oscillation**: include in the trace toy or defer? it's a single if-statement that modifies theta. leaning toward include — it's part of the composition mechanism, small code, and it changes the trajectory character significantly.

5. **legacy displacement**: include in the trace toy? leaning toward yes — it's a toggle that shows what the proportional rule actually does by showing what happens without it. pedagogically useful in the foundation toy.

## dependencies

none. this is the root. everything else depends on this.

## what "done" looks like

- open the HTML file in a browser
- see a dot tracing a trajectory on a canvas, leaving a trail
- change depth → form gets more complex
- change ratio → form changes character (different resonances)
- change k → form changes proportions (spacing, hole size)
- switch schedule → form changes spatial structure (3D vs 4D character)
- override a rate at one depth → that layer's contribution changes
- the form is visually recognizable as the same forms the current TS instruments produce
- the trail accumulates cleanly without artifacts
- it runs smoothly at depth 8+ without frame drops

---
