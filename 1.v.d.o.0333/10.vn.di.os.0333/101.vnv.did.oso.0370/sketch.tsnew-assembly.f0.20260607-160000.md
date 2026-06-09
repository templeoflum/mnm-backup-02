# sketch — tsnew-assembly — f0 — 20260607-160000

the assembly. where the toys become the instrument.

---

## what this toy is

not a toy anymore — the assembled instrument. one standalone HTML file that integrates trace + scope + formulas + projection + caliper into the full Trajectoscope. plus: the visualization overlays, the complete UI, and the glue that wires everything together.

this is the last step. every toy before this was a part tested in isolation. the assembly composes them.

## what it contains

### all five toy engines

- **trace**: buildRaw, cascade, proportion, dual trace, animation loop
- **scope**: measure(N), principal axes, center, extent, closure, rotation, feature angles
- **formulas**: formulaPoint dispatch, composed (default) + lissajous/torus/epicyclic/simultaneous
- **projection**: project4to3, 3D camera, multi-view slots, n-dimensional stubs
- **caliper**: features, rulers, chart, warp, cross-system, triangle, meeting analysis

each of these was verified in its own toy. the assembly doesn't redesign them — it wires them together and adds what the toys deliberately left out.

### visualization — what the toys didn't draw

the toys only drew trails and numbers. the full instrument draws structural overlays on top of the trail. organized into overlay groups (replacing the old tier system):

**structural group:**
- skeleton (drawChain) — the step-by-step construction. each depth's rotation and translation shown as connected segments. the only way to see HOW the form is built.
- axes — world coordinate axes
- scale ring — reference circle at the base radius

**extent group:**
- bounding box — wireframe bbox around the form
- center marker — COM position
- radius rings — rmin and rmax circles
- stacked depths — nested rings showing each depth's contribution
- orbit references — reference orbits at each depth

**shape group:**
- ellipsoid — the PCA-derived shape, drawn as an ellipsoid with principal axes
- superquadric — alternative shape model
- PCA axes — lines along the principal directions, length = eigenvalue

**reference group:**
- sphere — unit sphere for scale reference
- torus — reference torus at the form's mean radius
- vector equilibrium — cuboctahedron reference (VE alignment found at depth 1)

**measurement group:**
- caliper lines — drawn between selected features, with ruler indicators
- meeting locus — dots where two traces nearly coincide
- accumulation frame — reference frame for the net rotation
- net rotation axis — the axis of the composite rotation

each group toggleable as a unit. each overlay within a group toggleable individually. the overlay system replaces the old LOD/tier opacity system — simpler, more direct.

### UI — the full control surface

**info panel** (from ts-ui, reorganized):
collapsible sections matching scope's organization:
1. construction — depth, cycle, radius, k, ratio
2. extent — bbox, rmin/rmax, center
3. shape — principal axes, shape ratios, classification
4. dynamics — net rotation, closure, feature angles
5. caliper — distance, chart, distortion, cross-system (when active)
6. trace meeting — separation, locus (when two traces active)

**controls:**
- scrub widgets for all continuous parameters (speed, timebase, radius, k, ratio, zoom, etc.)
- per-depth rate overrides — row of scrubs, one per active depth
- formula selector — segmented button row, composed distinguished as default
- overlay group toggles — collapsible sections with individual overlay checkboxes
- 4D projection controls (hidden when using 3D formulas)
- trace 2 controls (hidden when trace 2 disabled)
- view slot controls (per multi-view slot)

**state capture:**
- log state as TSV row
- export configuration as JSON
- signature capture (high-res measurement snapshot)
- save canvas as PNG

**interaction:**
- keyboard: depth change (arrow keys), speed, view snaps
- mouse: drag to rotate view, scroll to zoom
- resize handler

### glue — the connective tissue

the animation loop, fully wired:

```
tick():
  advancePhases()                    // cascade drives phases
  point = formulaPoint(currentFormula, phases, depth, radius)  // formulas
  if (4D) point3 = project4to3(point)     // projection
  projected = camera(point3)              // 3D → 2D
  drawTrail(projected)                    // trail accumulation
  drawOverlays()                          // structural/extent/shape/reference/measurement
  updatePanel()                           // info readout
  if (paramChanged) measure(1200)         // scope (triggered, not per-frame)
```

event wiring:
- parameter change → flag for re-measurement
- depth change → rebuild rate override row, re-measure
- formula switch → clear trail, re-measure, show/hide 4D controls
- overlay toggle → redraw overlays
- view slot change → update projection for that slot
- caliper click → feature snap, compute distance, update caliper readout
- resize → resize all canvases, update projection

initialization:
- set defaults (depth 3, composed, ratio phi, k golden)
- build UI (scrubs, toggles, panel)
- start animation loop

### naming throughout

all vocabulary uses the settled terms:
- depth (not level/rung)
- trace (not beam)
- signature (not fingerprint)
- proportional (not selfScale/normalize)
- composed (not staged)
- simultaneous (not freed)
- w-turn (not w-spin)
- principal axes (not PCA in UI, PCA in code)
- center (not COM in UI)
- compress (not normalize in UI)
- cascade (not rate cascade)

## what it does NOT contain

- no integration with the lattice instrument — standalone HTML
- no spline continuity — separate instrument, separate build
- no formula extensibility beyond the five — add formulas by editing the dispatch
- no 5D+ formulas — only projection stubs

## the eight sections in the file

following the overview sketch's proposed structure:

```
1. STYLE      — CSS for canvas, panel, overlays, controls
2. HTML       — canvas container, panel structure, control layout
3. DATA       — state variables, ratio library, schedules, defaults
4. FORMULAS   — formulaPoint, composed, lissajous, torus, epicyclic, simultaneous
5. COMPOSITION — buildRaw, cascade (rateFor + depthMult), proportion (displacement)
6. SCOPE      — measure, PCA, center, extent, closure, rotation, caliper, cross-system
7. PROJECTION — project4to3, camera, multi-view slots, nD stubs
8. VISUALIZATION — frame/tick, draw*, overlays, trail
9. UI         — updatePanel, scrubs, overrides, toggles, state capture
10. GLUE      — animation loop, events, init
```

(ten sections — the overview said eight but style and HTML are their own.)

## decisions needed

1. **deep-depth UX**: at depth > 10, rates are microscopic and the form is enormous. auto-adapt timebase? presets for deep depths? or document the manual process? this is flagged in both the cascade and UI sketches. the assembly is where it has to be answered.

2. **overlay draw order**: overlays need to draw in the right order (reference behind form behind measurement). fixed draw order? or z-sorting? leaning toward fixed order (groups drawn in sequence: reference → extent → structural → shape → measurement).

3. **multi-view in the assembly**: all views share the same trail data but each has its own canvas. does the overlay system draw in all views or only the primary? leaning toward all views — but some overlays (caliper lines) are only meaningful in the primary.

4. **performance at depth 15+**: the current instruments slow down at deep depths. the assembly should handle it gracefully. options: reduce trail length, skip frames, LOD on overlays. this is an implementation concern, not a design concern — flag it but don't over-design.

5. **the dual-trace system's home**: dual trace lives in composition (second phase array, second parameter set). the meeting analysis lives in caliper. the visualization (two different-colored trails) lives here in assembly. is this the right split? leaning yes — each piece lives where it belongs functionally.

## dependencies

- **depends on**: all five toys (trace, scope, formulas, projection, caliper)
- **blocks**: nothing — this is the end product

## what "done" looks like

- open the file, see the Trajectoscope running
- composed formula at depth 3, ratio phi, k golden → recognizable torus-like form with trail accumulating
- info panel shows all measurements, collapsible sections
- formula selector lets you switch to lissajous → form changes, measurements update
- overlay groups toggle structural/extent/shape/reference/measurement independently
- skeleton shows the construction step by step
- ellipsoid wraps the form along principal axes
- caliper measures distance between origin and a PCA axis endpoint, cross-system shows four rulers
- two view slots show the same form from different angles
- w-turn rotates the form through 4D in one slot while the other stays fixed
- trace 2 (mirror) draws a second trail, meeting locus appears where they coincide
- state capture exports JSON, logs TSV, saves PNG
- the instrument produces the same forms and measurements as the four current TS instruments, verified by visual comparison and matching readout values
- all vocabulary is settled terms — no old naming leaks through

---
