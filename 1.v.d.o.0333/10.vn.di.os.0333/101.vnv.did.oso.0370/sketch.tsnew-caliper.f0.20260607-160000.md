# sketch — tsnew-caliper — f0 — 20260607-160000

the caliper toy. feature measurement, multi-ruler comparison, the instrument's thesis on measurement.

---

## what this toy is

a standalone HTML file. the trace engine + scope + a caliper system for measuring distances between features of the form. the caliper's point: the same distance measured in different coordinate systems gives different numbers, but the distortion pattern between them is the invariant. this is the scope's most specific claim — that measurement is chart-dependent but something about the measurement is chart-independent.

this is the fifth toy. it answers: what does distance mean on a trajectory, and how does the answer depend on how you ask?

## what it contains

### the trace + scope engines (from tsnew-trace, tsnew-scope)

the form runs, the basic measurements exist. the caliper extends the measurement apparatus.

### features — snap targets

things you can measure FROM and TO. the caliper needs to know what's measurable:

- **origin**: [0, 0, 0] — always available
- **center**: COM of the point cloud (from scope)
- **point**: the current trajectory point (live, moving)
- **principal axes**: endpoints of the PCA eigenvectors scaled by eigenvalues (from scope). six snap targets (±axis1, ±axis2, ±axis3)
- **trace point**: a specific point on the trail (click to select)

feature snapping: when the caliper is active, nearby features highlight. click to snap to a feature. two features selected = one measurement.

### rulers — coordinate systems

four ways to measure the same distance:

1. **cartesian**: euclidean distance in xyz. the default.
2. **polar**: distance in (r, θ, φ) coordinates. radial + angular.
3. **logpolar**: distance in (log r, θ, φ). compresses radial range.
4. **spherical**: distance on the unit sphere (angular distance only, ignoring radius).

each ruler defines a metric — a way to compute distance. the same two features, measured in four rulers, give four different numbers. the ratios between those numbers are the distortion.

### chart — the computation

for a selected feature pair:

- **true metric**: distance computed directly from the two feature positions in each ruler's coordinate system.
- **observed metric**: distance computed through the warp (see below). what you'd measure on a discretized grid.
- **distortion**: ratio of observed to true. how much the grid distorts the measurement.

### warp — observation simulation

`calWarp(depth)` and `calObserve(p)` — the mechanism that simulates what happens when you measure on a grid instead of in continuous space.

- the warp is ruler-dependent. polar grids warp radially (angle bins are uniform but radius bins are linear). logpolar grids warp logarithmically. cartesian grids warp uniformly.
- the warp is what makes cross-system comparison meaningful. without it, all rulers give the same answer (because the underlying space is the same). with it, each ruler reveals its own measurement bias.
- depth controls the grid resolution — coarser grids produce more distortion.

### cross-system — all rulers at once

one button: measure the current feature pair in all four rulers simultaneously. display as a comparison table:

| ruler | true | observed | distortion |
|-------|------|----------|------------|
| cartesian | ... | ... | ... |
| polar | ... | ... | ... |
| logpolar | ... | ... | ... |
| spherical | ... | ... | ... |

the cross-system view is the caliper's thesis made visible: four measurements, four distortions, one underlying distance.

### triangle mode

three features instead of two. computes:

- three side lengths (in each ruler)
- three angles
- area
- the triangle measured in different rulers has different shapes — the distortion is now a geometric transformation, not just a scalar.

### dual trace + meeting analysis

the caliper is where the second trace becomes meaningful. two traces can be measured against each other:

- **separation**: distance between trace 1's current point and trace 2's current point, over time
- **meeting locus**: the set of points where the two traces come within threshold distance
- the second trace can be derived (mirror, antipodal, polar inversion of trace 1) or independent (own parameters)

this is the first toy that needs the dual-trace system from the composition sketch.

## what it does NOT contain

- no formula bank — only composed. the caliper measures composed trajectories
- no rich projection — basic 3D camera only
- no overlay visualization of measurements — no drawn lines between features, no drawn rulers. that's tsnew-assembly. the caliper toy shows numbers and tables, not drawings

## inputs

everything from scope toy, plus:

| control | what it does |
|---------|-------------|
| caliper toggle | activate/deactivate the caliper mode |
| feature snap | click near a feature to select it (origin, center, PCA axes, point) |
| ruler selector | which ruler(s) to measure in |
| cross-system button | measure in all rulers simultaneously |
| triangle toggle | switch from 2-point to 3-point mode |
| warp depth | grid resolution for observed metric |
| trace 2 toggle | enable second trace |
| trace 2 mode | derived (mirror/antipodal/inversion) or independent |
| trace 2 params | if independent: own ratio, k, radius |

## outputs

- feature pair selected → distance readout in the chosen ruler
- cross-system → comparison table (true/observed/distortion across all rulers)
- triangle mode → side lengths, angles, area in the chosen ruler
- meeting analysis → separation over time, meeting locus coordinates
- the distortion values reveal the ruler's measurement bias at that location

## decisions needed

1. **feature click target**: how close does the click need to be to snap to a feature? pixel threshold? leaning toward generous snapping (20px radius) with visual highlight of the nearest feature.

2. **warp abstraction**: the current warp is hard-wired per ruler type. is that the right design, or should the warp be configurable? leaning toward hard-wired — the warp IS the ruler's character. making it configurable defeats the point.

3. **meeting threshold**: what distance counts as "meeting"? currently a fixed threshold. should it scale with the form's extent? leaning toward scaled — threshold = fraction of rmax.

4. **dual trace in this toy or defer to assembly**: the caliper is the first place dual-trace matters. but the dual-trace mechanism (second phase array, independent parameters) is composition-level. should this toy include it, or should assembly be the first time two traces appear? leaning toward include — the meeting analysis is a caliper measurement, not a visualization feature.

## dependencies

- **depends on**: tsnew-trace (engine + dual trace system), tsnew-scope (point cloud, PCA, center — the features the caliper snaps to)
- **blocks**: tsnew-assembly (caliper visualization — drawn measurement lines, ruler grids)

## what "done" looks like

- the trace runs, scope readout shows
- activate caliper → features highlight on the canvas (origin marker, center marker, PCA axis endpoints)
- click origin, click a PCA axis endpoint → distance appears in cartesian ruler
- click cross-system → table shows the same distance in all four rulers with distortion values
- switch to triangle mode → select three features → angles + sides + area
- enable trace 2 (derived, mirror) → two trails drawing. meeting analysis shows separation curve
- change warp depth → distortion values change (coarser grid = more distortion)
- the numbers match the current TS_fingerprint instrument's caliper for the same parameters

---
