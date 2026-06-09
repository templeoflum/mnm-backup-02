# sketch — tsnew-projection — f0 — 20260607-160000

the projection toy. multi-view, n-dimensional stubs, the camera system.

---

## what this toy is

a standalone HTML file. takes the trace engine and focuses entirely on how higher-dimensional trajectories get collapsed to the screen. multiple views of the same form. stubs for dimensions beyond 4. the user decided: build for arbitrary dimensions — the wiring exists even before the formulas do.

this is the fourth toy. it answers: how do you look at something that lives in more dimensions than your screen?

## what it contains

### the trace engine (from tsnew-trace)

the composition engine. for this toy, only composed and simultaneous matter (the 4D formulas). 3D formulas don't need rich projection.

### 4D → 3D projection — project4to3(point4)

the existing mechanism, carried forward:

- six 4D viewing angles (one per rotation plane: XY, YZ, ZW, XW, XZ, YW)
- two modes: orthographic (drop w) and perspective (divide by w + offset)
- w-turn: auto-rotation of the 4D viewing angle. speed controllable. this is how you "walk around" a 4D form.
- perspective scaling: eye distance proportional to form radius. prevents the projection from exploding at deep depths.

### 3D → 2D projection — the camera

- yaw, pitch: orbital camera around the form
- zoom/distance
- view pivot: center of rotation (origin, center, or arbitrary point)
- axis snaps: click to jump to axis-aligned views (front, side, top, isometric)
- mouse drag to rotate, scroll to zoom

### multi-view (NEW)

the user's decision: not just one view. multiple canvases showing the same form through different projection settings.

- **view slots**: 2–4 canvas panels side by side (or in a grid)
- each slot has its own projection settings: its own 4D viewing angles, its own 3D camera orientation, its own perspective/ortho mode
- all slots receive the same trajectory data — same phases, same form, different viewpoints
- example: slot 1 shows XY-plane orthographic from front. slot 2 shows ZW-plane perspective from above. same form, two angles into 4D, two angles into 3D.

### n-dimensional stubs (NEW)

the user said: think wider. 5D, 6D, arbitrary. the wiring should exist.

- **projection chain**: the general pattern is nD → (n-1)D → ... → 3D → 2D. each step drops one dimension.
- for 4D→3D, the code exists (project4to3). for 5D→4D, the same pattern applies: viewing rotations in the 5D hyperplanes, then project out one coordinate.
- **stub**: `projectNto3(pointN, viewAnglesN)` — a function signature that accepts an n-dimensional point and a set of viewing angles, and returns a 3D point by iteratively projecting out dimensions. the 4D case is the first real implementation. 5D+ are empty stubs that just drop coordinates (no viewing rotations yet).
- the **schedule** generalizes: n dimensions have n(n-1)/2 rotation planes. 3D=3, 4D=6, 5D=10, 6D=15. the schedule pattern (cycle through planes) extends naturally.
- the **formulas** don't exist for 5D+ yet — but the projection chain doesn't care. if a formula produces a 5D point, the projection chain can handle it (even if "handle it" means trivially dropping coordinates until a real 5D projection is implemented).

### view controls per slot

each view slot gets:

| control | what it does |
|---------|-------------|
| 4D angles (6 sliders) | viewing orientation in 4D |
| w-turn speed | auto-rotation rate in 4D |
| ortho / perspective toggle | projection mode |
| yaw / pitch | 3D camera orientation |
| zoom | 3D camera distance |
| axis snaps | jump to axis-aligned views |
| view pivot | center of rotation |

## what it does NOT contain

- no scope (measurement) — this toy is about seeing, not measuring
- no formula bank — only composed (the 4D formula). formulas toy handles the bank
- no caliper, no overlays, no UI panels
- no actual 5D/6D formulas — only the projection stubs. the formulas come when they come

## inputs

trace engine controls (depth, ratio, k, speed, schedule) plus per-view-slot projection controls.

| control | what it does |
|---------|-------------|
| add/remove view slot | manage how many views are visible (2–4) |
| per-slot 4D angles | independent 4D viewing per slot |
| per-slot camera | independent 3D camera per slot |
| link/unlink toggle | option to lock two slots' cameras together (rotate in sync) |

## outputs

- multiple canvases showing the same trajectory from different angles and projection settings
- rotate one view → see the form from a new angle without losing the other view
- change w-turn in one slot → that view rotates through 4D while the other stays fixed
- the comparison reveals structure that a single view hides (a form that looks flat from one angle has depth from another)

## decisions needed

1. **how many default slots**: start with 2? the minimum useful comparison. add more via button. leaning toward 2 default, up to 4.

2. **slot layout**: side by side (horizontal split) or grid (2×2)? leaning toward horizontal split for 2, grid for 4. responsive — adapts to window shape.

3. **linked cameras**: useful for "rotate together" exploration (same 3D angle, different 4D angle). how does the link work — does changing one propagate to the other? leaning toward a simple toggle: linked = same yaw/pitch/zoom, independent 4D angles.

4. **n-dimensional UI**: for the stubs, is there any UI? leaning toward no — the stubs exist in code as plug points. no UI until a 5D formula exists to exercise them. the wiring is there, the knobs appear when they're needed.

5. **trail per slot**: does each slot accumulate its own trail (projected from the same 3D/4D points through its own camera)? yes — each slot is its own canvas with its own projection of the same underlying trajectory.

## dependencies

- **depends on**: tsnew-trace (engine)
- **does not depend on**: tsnew-scope or tsnew-formulas (projection is about viewing, not measuring or generating)
- **blocks**: tsnew-assembly (multi-view becomes part of the full instrument's visualization)

## what "done" looks like

- open the file, see two canvases side by side showing the same trajectory
- rotate one canvas → that view changes, the other stays fixed
- toggle w-turn in one slot → 4D rotation reveals hidden structure
- switch ortho/perspective → the form's depth perception changes
- the same depth/ratio/k parameters produce the same form in both slots, visibly different due to viewing angle
- the n-dimensional stub exists in code (projectNto3 function signature) even though it only handles 4D for now

---
