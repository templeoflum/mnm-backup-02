# sketch — ts-scope — f0 — 20260607-150000

the measurement apparatus. what gets measured and how. baseline.

---

## what it is now

### analyzeLocus — the core sampler
samples the trajectory over a full pass (N=1200 points) using Weyl-sequence sampling (irrational increments per phase → uniform filling of the phase torus). measures:

- **bounding box**: min/max per axis
- **extent**: bbox dimensions
- **rmin/rmax**: inner/outer radius from origin
- **center** (COM): centroid of the point cloud
- **symmetry**: per-axis bbox symmetry around origin (0 = symmetric)
- **principal axes** (PCA): covariance tensor → eigenvalues + eigenvectors via Jacobi iteration (eigSym3). eigenvalues = shape (prolate/oblate/isotropic). eigenvectors = principal directions.
- **closure**: evolve trajectory from start, track minimum return distance after leaving neighborhood. low = closed curve, high = space-filling.

### compositeRotation — net rotation
extracts the net rotation from the composite matrix (upper-left 3×3). Euler's theorem: any rotation = angle + axis. gives the composite operator's rotation independent of the individual steps.

### featureAngles — angular relationships
measures angles between:
- spin axis vs world axes (X, Y, Z)
- primary PCA axis vs world axes
- primary PCA axis vs spin axis (shape vs rotation alignment)

### caliper (from fingerprint) — distance measurement
- snaps to real 3D features: origin, COM, current point, second point, PCA axes, ellipsoid extremes
- measures distance in chosen ruler (cartesian, polar, logpolar, spherical)
- chart computation: true metric, observed metric (grid-warped), distortion
- triangle mode: three-point measurement (angles, sides, area)

### crossSystem (from fingerprint) — multi-ruler comparison
measures the SAME distance in all four rulers simultaneously. the invariant 3D distance is the anchor. each ruler's true metric should agree. the spread = distortion = how much the rulers diverge.

### measureDense (from fingerprint/formulas) — high-res sampling
dedicated dense sampler (N configurable). used for accurate signature capture. same measurements as analyzeLocus but with more points.

### signature (from formulas) — state snapshot
captures all current measurements + configuration into one object. the "fingerprint" — a full characterization at one setting.

---

## what depends on scope
- visualization: reads meas.* for drawing overlays (ellipsoid, bbox, COM, radius rings, orbit refs)
- UI: reads meas.* for the info panel (all readout numbers)
- caliper: reads meas.* for feature positions
- the scope is read-only — it samples the composition but doesn't modify it

---
