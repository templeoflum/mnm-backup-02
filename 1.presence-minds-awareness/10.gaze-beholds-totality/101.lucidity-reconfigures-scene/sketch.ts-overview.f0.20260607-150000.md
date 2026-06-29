# sketch — ts-overview — f0 — 20260607-150000

top-level architecture of the collapsed TS instrument. maps the parts and their relationships. baseline — what's here now across the four source instruments.

---

## the parts

```
                    ┌─────────────┐
                    │  FORMULAS   │  alternative trajectory generators
                    │  (vary)     │  lissajous, torus, epicyclic, simultaneous, composed
                    └──────┬──────┘
                           │ produces a point
                           ▼
┌──────────┐    ┌─────────────────────┐    ┌──────────────┐
│ CASCADE  │───▶│    COMPOSITION      │◀───│  PROPORTION  │
│ (rates)  │    │  (the construction) │    │  (scaling)   │
└──────────┘    │  iterative matrix   │    └──────────────┘
                │  rotation+translate │
                └──────────┬──────────┘
                           │ trajectory (point cloud)
                           ▼
                ┌─────────────────────┐
                │    PROJECTION       │
                │  4D→3D, 3D→2D      │
                └──────────┬──────────┘
                           │ visible points
                           ▼
          ┌────────────────────────────────┐
          │         SCOPE                  │
          │  (measurement apparatus)       │
          │  principal axes, center,       │
          │  closure, caliper, cross-sys,  │
          │  signature                     │
          └────────────────┬───────────────┘
                           │ readings
                           ▼
          ┌────────────────────────────────┐
          │      VISUALIZATION             │
          │  skeleton, overlays, rings,    │
          │  ellipsoid, VE, grid           │
          └────────────────┬───────────────┘
                           │ rendered
                           ▼
          ┌────────────────────────────────┐
          │           UI                   │
          │  scrubs, panels, LOD zones,    │
          │  info readout, logging         │
          └────────────────────────────────┘
```

## data flow

1. **formulas** choose HOW to generate a point (composed is the core, others are alternatives)
2. **composition** generates the point using **cascade** (rates per depth) and **proportion** (displacement scaling)
3. **projection** collapses the point to drawable dimensions
4. **scope** samples many points and computes invariant measurements
5. **visualization** draws the trajectory + overlays + measurement readouts
6. **UI** provides controls and displays info

## dependencies (what needs what)

| part | depends on | depended on by |
|------|-----------|---------------|
| formulas | phase array, depth | composition |
| composition | formulas, cascade, proportion | projection, scope |
| cascade | ratio, depth | composition |
| proportion | k, depth, radius | composition |
| projection | raw point (3D or 4D) | visualization |
| scope | many raw points (sampling) | visualization, UI |
| visualization | projected points, scope readings | UI (canvas) |
| UI | scope readings, visualization canvas | user |

## current distribution across source files

| part | TS_3D | TS_4D | TS_fingerprint | TS_formulas |
|------|-------|-------|----------------|-------------|
| composition | buildRaw (4×4) | buildRaw (5×5) | buildRaw (5×5) | buildRaw (5×5) + formulaPoint |
| cascade | rateFor | rateFor | rateFor | rateFor |
| proportion | in buildRaw | in buildRaw | in buildRaw | in buildRaw |
| scope | analyzeLocus, featureAngles | same + 4D metrics | same + caliper + crossSystem | same + measureDense |
| formulas | — | — | — | formulaPoint, FORMULA_LABELS |
| projection | rot, proj (3D→2D) | same + project4to3 | same | same |
| visualization | draw*, frame | same + 4D overlays | same + drawCaliper | same |
| UI | updatePanel, scrubs | same + 4D controls | same + caliper controls | same + formula selector |

## observation

every successor added to the previous — nothing was replaced. the 4×4 became 5×5. caliper was added on top of PCA. formulas were added on top of composed. the collapsed instrument is the union of all four, organized into these 8 parts.

---
