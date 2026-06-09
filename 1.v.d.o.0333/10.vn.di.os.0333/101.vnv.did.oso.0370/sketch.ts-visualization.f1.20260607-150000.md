# sketch — ts-visualization — f1 — 20260607-150000

review. proposed changes.

---

## what should stay
- dual canvas (trail + overlay). the trail accumulation is core to the instrument — you see the form build up over time.
- the skeleton (drawChain). the only way to see the construction's step-by-step logic.
- measurement overlays (bbox, center, radius rings, stacked depths). essential readouts.
- PCA ellipsoid. the shape visualization that connects to the measured eigenvalues.
- caliper drawing. visual feedback for the measurement.

## what should change

### tier → rendering plumbing
per vocab sketch, "tier" is dropped from vocabulary. the LOD system stays in code but it's implementation, not a structural concept. the user doesn't need to think in terms of "tiers" — they think in terms of which overlays are visible.

**proposal:** replace the tier system with a simpler overlay toggle. each overlay is on/off. group them by category (structural, measurement, shape, reference). the LOD zone UI already does this with collapsible sections — just make the sections the primary interface instead of the tier opacity system.

### overlay inventory
there are ~18 draw functions. that's a lot. some are rarely used. in the collapsed instrument, organize them into groups:

1. **structural**: skeleton, axes, scale ring
2. **extent**: bbox, center, radius rings, stacked depths, orbit refs
3. **shape**: ellipsoid, superquadric, PCA axes
4. **reference**: sphere, torus, vector equilibrium
5. **measurement**: caliper, meet locus, accum frame, net axis

each group can be toggled as a unit or individually.

### frame() restructure
frame() currently does everything — phase advance, build, project, draw, UI update. in the collapsed instrument, break it into clear steps:

```
tick():
  advancePhases()
  point = compose()      // formulas → composition
  projected = project()  // 4D→3D→2D
  draw(projected)        // visualization
  updateReadout()        // UI
```

each step is a named function call. the glue (from the overview sketch) is tick().

**decision needed:** should scope sampling happen every frame or on a timer? currently analyzeLocus runs on demand (when depth changes, on init, etc.), not every frame. that's correct — sampling 1200 points per frame would be expensive. keep it triggered, not continuous.

## summary
visualization is mostly carry-forward with organizational changes. tier→simple toggles, overlay grouping, frame() broken into clear steps. no mechanism changes — everything that's drawn stays drawn.

---
