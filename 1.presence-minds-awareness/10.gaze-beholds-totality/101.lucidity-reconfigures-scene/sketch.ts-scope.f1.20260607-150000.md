# sketch — ts-scope — f1 — 20260607-150000

review. proposed changes to the scope.

---

## what should stay
- analyzeLocus with Weyl sampling. verified correct (COM stays at origin, |COM|/rmax < 0.5%).
- PCA via Jacobi iteration. standard, correct, fast enough.
- closure heuristic. useful even if it's a heuristic (not a proof of rational-relatedness).
- caliper with feature snapping. grounded — measures real distances between real features.
- cross-system comparison. the instrument's thesis on measurement: many charts, one invariant.

## what should change

### naming (per vocab sketch)
- PCA → "principal axes" in vocabulary (PCA stays as implementation)
- COM → "center"
- fingerprint → "signature"
- ellipsoid → "shape" (the derived shape description)

### consolidation
analyzeLocus and measureDense do the same thing at different resolutions. in the collapsed instrument, one function with a configurable sample count. `measure(N)` — default N for live updates, high N for signature capture.

### caliper sub-sections
the caliper is complex enough to organize internally:
1. **features**: the snap targets (origin, center, point, PCA axes, etc.)
2. **rulers**: the four coordinate systems (cartesian, polar, logpolar, spherical)
3. **chart**: the computation (true metric, observed metric, distortion)
4. **triangle**: three-point mode (angles, sides, area)
5. **cross-system**: all rulers at once

these are sub-sections of scope, not separate parts.

### warp system
the caliper includes a "warp" mechanism — `calWarp(depth)` and `calObserve(p)` — that distorts point positions to simulate grid observation effects. this is how the "observed" metric differs from the "true" metric. it's part of the caliper's thesis but it's subtle and worth documenting clearly.

**decision needed:** the warp is currently grid-dependent (polar grids warp radially, logpolar grids warp logarithmically). is this the right abstraction? the warp is what makes cross-system comparison meaningful — without it, all rulers give the same answer.

## summary
scope is the richest part after composition. main changes: naming, consolidating analyzeLocus + measureDense into one function, organizing caliper sub-sections clearly. the measurements themselves are verified and don't change.

---
