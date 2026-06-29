# sketch — tsnew-scope — f0 — 20260607-160000

the scope toy. measurement apparatus. what the trace produces, the scope measures.

---

## what this toy is

a standalone HTML file. imports or includes the trace toy's engine. adds measurement: sample a point cloud, compute statistics, display readouts. no visualization beyond a simple trail — the scope is about numbers, not pictures.

this is the second toy. it takes the trace engine and asks: what IS this form? the trace draws. the scope measures what was drawn.

## what it contains

### the trace engine (from tsnew-trace)

everything from the trace toy: buildRaw, cascade, proportion, animation loop, trail canvas. this toy extends it, doesn't replace it.

### sampling — measure(N)

one function, configurable sample count. consolidates analyzeLocus and measureDense from the current code.

- run the composition at N evenly-spaced phase values (Weyl sequence: phi × i mod 1, or uniform). N=1200 for live, N=10000+ for signature capture.
- collect the 3D point cloud (after 4D→3D projection if in 4D mode).
- this is a snapshot, not per-frame. triggered on parameter change, not every animation frame.

### principal axes

PCA via Jacobi eigenvalue iteration on the 3×3 covariance matrix of the point cloud.

- three eigenvalues (λ1 ≥ λ2 ≥ λ3) — the principal radii
- three eigenvectors — the principal directions
- shape ratios: λ2/λ1, λ3/λ1 — oblate vs prolate vs spherical
- ellipsoid classification: prolate (cigar), oblate (disk), spherical, triaxial

### center

center of mass (COM) of the point cloud.

- position: [x, y, z]
- magnitude: |COM| relative to rmax — how centered the form is
- verified: |COM|/rmax < 0.5% for composed trajectories (centered by construction)

### extent

bounding measurements of the point cloud.

- bounding box: min/max on each axis
- rmin, rmax: minimum and maximum radial distance from origin
- the extent tells you how big the form is and where it sits

### closure

heuristic for whether the trajectory closes (returns near its start after some period).

- not a proof of rational-relatedness — it's a proximity test
- useful as an indicator, not a conclusion

### rotation

net rotation: what the full composition matrix does as a single rigid motion.

- from lastM (the accumulated matrix): extract the rotation component
- net angle + axis
- feature angles: spin axis vs PCA axes, PCA axes vs world axes, spin vs world

### readout panel

a simple HTML panel beside the canvas showing all measured quantities. organized by section:

1. **construction** — depth, cycle count, radius, k, ratio (from the trace engine, not measured — displayed for context)
2. **extent** — bbox, rmin/rmax, center position + magnitude
3. **shape** — principal axes (eigenvalues), eigenvectors, shape ratios, classification
4. **dynamics** — net rotation angle + axis, closure, feature angles
5. **signature** — button to capture high-res measurement snapshot (N=10000)

each section collapsible. the panel is the scope's output — dense, informative, every number grounded in the point cloud.

## what it does NOT contain

- no caliper — distance measurement between features is its own toy (tsnew-caliper)
- no cross-system — multiple rulers is a caliper concept
- no overlays — no ellipsoid drawing, no PCA axis lines, no bbox lines. that's visualization (tsnew-assembly)
- no formula selector — only composed. formulas come in tsnew-formulas
- no second trace — no meeting analysis. single trace measurement only

## inputs

everything from the trace toy, plus:

| control | what it does |
|---------|-------------|
| sample count | N for live measurement (default 1200) |
| capture button | trigger high-res signature snapshot |
| section toggles | collapse/expand readout sections |

## outputs

the readout panel. numbers. the full quantitative description of the current form.

## decisions needed

1. **sampling trigger**: on every parameter change? or manual "measure" button? leaning toward automatic on parameter change (depth, ratio, k) — the numbers should always reflect the current form. with a separate "capture" for high-res.

2. **snapshot format**: the current code exports signatures as a block of text. for the toy, is plain text sufficient or should it be structured (JSON)? leaning toward both — display as text, export as JSON.

3. **time-varying measurement**: the findings note that PCA shape-ratios are time-varying (the form breathes). should the scope show instantaneous values or time-averaged? the current code samples at fixed phases (Weyl). leaning toward fixed-phase sampling (what it does now) — it's a shape measurement, not a dynamics measurement.

## dependencies

- **depends on**: tsnew-trace (the engine that produces what scope measures)
- **blocks**: tsnew-caliper (caliper extends scope's measurement), tsnew-assembly (visualization draws scope's measurements)

## what "done" looks like

- the trace runs, drawing a trail
- beside it, a readout panel shows: principal axes, center, extent, rotation, closure
- change depth → numbers update (principal axes change, extent changes)
- change ratio → numbers update (different resonances produce different shapes)
- change k → numbers update (proportions change)
- capture button → high-res measurement logged/exported
- the numbers match the current TS instrument's readouts for the same parameters

---
