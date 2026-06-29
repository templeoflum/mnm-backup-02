# sketch — ts-composition — f1 — 20260607-150000

review. what should change in the collapsed instrument's composition.

---

## proposed changes

### one buildRaw, always 5×5
the 3D version (4×4) is just the 4D version without w-planes. use 5×5 always. when depth stays below 4, the w components remain zero — it's 3D behavior inside a 4D matrix. no performance concern at these sizes.

**decision needed:** does the 3D schedule (period 4, XY/YZ/XZ) produce different forms than the 4D schedule (period 6, XY/YZ/ZW/XW/XZ/YW) truncated to depth < 4? yes — different plane ordering changes the form even at the same depth. the 3D schedule at depth 3 gives a torus. the 4D schedule at depth 3 does XY/YZ/ZW which enters 4D immediately. **this matters.** probably need both schedules available, selectable. not one-size-fits-all.

### rename variables
- `rung` → `depth` (per vocab sketch)
- `beam` → `trace` (per vocab sketch)
- `normalize` → `compress` (per vocab sketch)
- function stays `buildRaw` — it's internal, not vocabulary

### simplify oscillation
oscillation mode (pendulum blend) is a single if-statement inside the loop. it modifies theta. keep it but understand what it is: a nonlinear phase distortion. when oscBlend > 0, the rotation isn't uniform anymore — it swings. this changes the trajectory's time behavior but not its spatial extent (the same point cloud, different speed through it).

### chain recording
currently toggled by `recordChain` flag, builds `_chain[]` array. this is for the skeleton visualization. keep it — it's the only way to show the step-by-step construction (where each rotation's pivot is, how the point moves at each step).

### growth animation
the growth factor on the last rotation (`A = growth` when `k === nRot-1`, else `A = 1`) is purely UI — it animates the addition of a new depth. keep in code, not in vocabulary. it's presentation, not mechanism.

### the two-trace system
currently beam1 (globals) + beam2 (independent parameter set). the second trace can be:
- **derived**: spatial transform of trace 1 (mirror, antipodal, polar inversion)
- **independent**: own radius, k, ratio, driven by rescaled phases

keep this. it's the comparison mechanism — two trajectories measured against each other. the meeting analysis (measureMeeting) checks where/how they coincide.

**decision needed:** the derived/independent mode names. "derived" is clear. "independent" is clear. keep them.

## what stays exactly as-is
- the matrix construction (left-multiply plane rotations, translate at cycle boundaries)
- the schedule mechanism
- the phase array
- the seed point
- lastM capture for readouts

## summary
the composition is mostly carry-forward. main changes are naming (rung→depth, beam→trace) and consolidation (one 5×5 buildRaw, both schedules available). the mechanism is verified and doesn't need redesign.

---
