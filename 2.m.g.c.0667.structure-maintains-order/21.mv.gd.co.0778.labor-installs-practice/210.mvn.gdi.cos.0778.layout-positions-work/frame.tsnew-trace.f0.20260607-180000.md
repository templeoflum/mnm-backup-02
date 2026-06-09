# Frame — tsnew-trace — f0 — 20260607-180000

First toy build. The root of the TS dependency chain — everything else stacks on this. Standalone HTML, no dependencies on other toys. Source: dream output at 101 (sketch.tsnew-trace.f0) + settled decisions at 102 (float.ts-sc-toys.f3).

## What this toy IS

One dot tracing a trajectory through composed SE(4) rotations and translations. One canvas. The three core subsystems unified: composition (matrix construction), cascade (rate decay), proportion (self-similar displacement). No measurement, no formulas, no projection, no UI chrome beyond what's needed to see and control the trace.

This is the engine. If this works, everything else plugs into it.

## Source material

- `101/sketch.tsnew-trace.f0.20260607-160000.md` — the blueprint
- `102/float.ts-sc-toys.f3.20260607-170000.md` — settled decisions
- `100/TS_formulas.html` — reference implementation (the most complete existing TS instrument)
- `101/sketch.ts-composition.f1.20260607-150000.md` — composition architecture
- `101/sketch.ts-cascade.f1.20260607-150000.md` — cascade architecture
- `101/sketch.ts-proportion.f1.20260607-150000.md` — proportion architecture

## Settled decisions (from 102, relevant to this toy)

1. **One buildRaw** — always 5x5 (SE(4)), 3D formulas set w-plane params to zero
2. **Both schedules** — 3D (XY, XZ, YZ) and 4D (XW, YW, ZW) available
3. **Legacy displacement** — include as comparison toggle (composed vs legacy)
4. **Trail persistence** — configurable, default OFF
5. **Oscillation** — include in trace toy
6. **3D camera** — proper camera (yaw/pitch/distance), not fixed isometric
7. **Canvas scaling** — fixed viewport + manual zoom

## What to build

### 0 — Core engine

The mathematical core. No display, no interaction.

- `buildRaw(depth, params)` — construct the SE(4) matrix at given depth
  - Always 5x5 homogeneous
  - Iterative composition: M = M_1 · M_2 · ... · M_depth
  - Each M_i is a product of plane rotations (from schedule) and axis translations
  - Returns the composed matrix
- `cascade(depth, k, ratio)` — compute the rate multiplier at each depth level
  - Geometric decay: rate_i = k * ratio^i
  - Provides the angle/displacement magnitudes per level
- `proportion(depth, ratio)` — compute displacement scaling
  - Self-similar: each level's translation is ratio × parent's
  - The proportional rule verified to depth 19
- `trace(t, depth, params)` — compose one point
  - Build the matrix at depth with time parameter t driving the angles
  - Extract the 3D point (first 3 components of the 5-vector)
  - Returns [x, y, z]

### 1 — Display

Single `<canvas>`. 3D→2D projection via a proper camera.

- Camera: yaw, pitch, distance. Orbit around origin.
- Projection: perspective or orthographic (toggle)
- The dot: current position, drawn each frame
- Trail: optional afterglow (default off), configurable length
- Axes: faint reference lines through origin

### 2 — Controls

Minimal panel. Only what's needed to operate the trace.

- **depth** — integer spinner, 1-20+
- **k** — base frequency, slider or input
- **ratio** — geometric ratio, slider or input (0.0-1.0)
- **schedule** — 3D / 4D toggle
- **speed** — animation rate
- **trail** — off / short / long
- **oscillation** — on/off toggle (breathing amplitude)
- **mode** — composed / legacy comparison toggle
- **camera** — yaw/pitch/distance (drag to orbit, scroll to zoom)

### 3 — Animation loop

`requestAnimationFrame` loop. Each frame:
1. Advance t by speed increment
2. Compute `trace(t, depth, params)` — get [x, y, z]
3. Project 3D → 2D via camera
4. Draw dot (and trail if on)
5. Update any readouts (current t, current point)

## Vocabulary

Use the settled vocabulary from the dream:

| old | new | why |
|-----|-----|-----|
| level, rung | depth | actual meaning — how deep in the composition |
| beam | trace | it traces a path, not a beam |
| buildRaw | buildRaw | keep — it builds the raw matrix |
| cycle | (keep) | one full revolution of a rate |
| seed, k | k | base frequency multiplier |
| ratio | ratio | geometric ratio between levels |
| phase | phase | angular offset |
| schedule | schedule | which rotation planes are active |
| normalize | compress | what it actually does to the displacement |
| self-scale | proportional | self-similar scaling rule |

## Definition of done

- [ ] Single HTML file, opens in browser, no server needed for core function
- [ ] One dot traces a 3D trajectory on a canvas
- [ ] Depth slider goes from 1 to at least 15
- [ ] Changing k, ratio, depth produces visibly different trajectories
- [ ] 3D schedule and 4D schedule both work
- [ ] Camera orbits with mouse drag, zooms with scroll
- [ ] Trail toggle works (off/on, configurable length)
- [ ] Oscillation toggle produces visible breathing
- [ ] Composed vs legacy mode toggle shows the difference
- [ ] No measurement, no multi-view, no formulas — just the trace
- [ ] Clean code, settled vocabulary, no legacy names

## Dependency chain

```
tsnew-trace (THIS) → no dependencies
  ↓
tsnew-scope → depends on trace
tsnew-formulas → depends on trace + scope
tsnew-projection → depends on trace
  ↓
tsnew-caliper → depends on trace + scope
  ↓
tsnew-assembly → depends on all above
```

## Execution

### 0.0 — Stub the file

Create `tsnew-trace.html`. Boilerplate HTML + canvas + minimal CSS. Verify it opens.

### 0.1 — Build the math

Implement `buildRaw`, `cascade`, `proportion`, `trace`. Test with console.log — verify points are reasonable at various depths.

### 0.2 — Build the camera

Implement 3D→2D projection with orbit camera. Draw a static point to verify.

### 0.3 — Build the loop

`requestAnimationFrame`. Dot moves. Trail optional.

### 0.4 — Build the controls

Depth, k, ratio, schedule, speed, trail, oscillation, mode. Wire to the engine.

### 0.5 — Polish and verify

Check all definition-of-done items. Clean up code. Verify vocabulary.

---
