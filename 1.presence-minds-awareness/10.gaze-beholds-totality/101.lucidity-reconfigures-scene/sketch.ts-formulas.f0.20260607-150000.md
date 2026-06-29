# sketch — ts-formulas — f0 — 20260607-150000

the formula bank. alternative trajectory generators. baseline.

---

## what it is now

### the dispatch
```
if currentFormula !== 'staged':
  point = formulaPoint(currentFormula, D)
else:
  point = buildRaw()  // fall through to composition
```

formulas are alternatives to the composed (staged) construction. they produce a 3D point from the same phase array and depth. the measurement spine (scope) doesn't care which formula generated the point.

### the formulas

**composed** (currently "staged"): the full SE(4) construction. buildRaw. this IS the composition — not really a formula, it's the core. but architecturally it sits in the same slot.

**lissajous**: `[D·sin(ph[0]), D·sin(ph[1]), D·sin(ph[2])]`. one sin per axis, each on its own phase. the simplest parametric trajectory. depth controls how many axes are active (1→line, 2→plane figure, 3→3D figure).

**torus**: two circles — major radius + minor radius. `(R+r·cos(a1))·cos(a0)` etc. depth ≥ 3 adds a third rotation. a standard parametric surface.

**epicyclic**: circles on circles. starts at radius D×0.7, each level adds a smaller circle (halving radius). up to 4 levels. like a spirograph.

**simultaneous** (currently "freed"): all 3 rotation planes at once per step, with displacement on all axes. sweeps volume. 3D-native, no dimensional climb.

### what's shared across formulas
- the phase array ph[] — all formulas read it
- depth — all formulas use it to determine complexity
- radius D — base scale
- the measurement spine — all formulas feed the same scope

### what's NOT shared
- the matrix construction (only composed uses it)
- the schedule (only composed uses it)
- the cascade rates (all formulas advance phases at the same rates, but only composed uses the rates structurally in the displacement rule)

---
