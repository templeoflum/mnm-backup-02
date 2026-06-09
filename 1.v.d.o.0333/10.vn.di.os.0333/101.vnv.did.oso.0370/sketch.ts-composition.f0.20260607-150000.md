# sketch — ts-composition — f0 — 20260607-150000

the construction rule. what buildRaw actually does. baseline.

---

## what it is now

one function — `buildRaw(B)` — that appears in all four source instruments. it's the core.

### inputs
- **radius D**: seed distance from origin (default 80)
- **depth** (currently `rung`): how many rotations to apply (1→circle, 2→sphere, 3→torus, ...)
- **phase array** `ph[]`: 40 accumulated angles, one per possible rotation
- **beam B** (optional): independent parameter set for a second trace
- **cascade**: rate per depth via rateFor(k) — controls how fast each rotation advances
- **proportion**: displacement rule via k, selfScale — controls how far to translate each cycle

### process
1. start with 5×5 identity matrix M (homogeneous coordinates, SE(4))
2. loop k from 0 to depth-1:
   - at cycle boundaries (even k, cycle ≥ 1): translate along X by displacement d
   - pick rotation plane from schedule: SCHED[k % period]
   - rotate by phase angle ph[k] in that plane (left-multiply M)
3. final point = M · seed = M · [D, 0, 0, 0, 1]

### outputs
- a 4D point [x, y, z, w] (or 3D [x, y, z] for non-SE(4) formulas)
- lastM: the composite matrix (kept for readouts like net rotation)
- optionally: _chain[] recording each step (for skeleton visualization)

### key details from code
- **schedule**: `SCHED = [[0,1],[1,2],[2,3],[0,3],[0,2],[1,3]]` — the 6 rotation planes of 4-space, period 6
- **3D schedule was**: `[[0,1],[1,2],[0,2],[1,2]]` — period 4, only 3 planes. the 4D schedule subsumes this.
- **displacement**: `d = k·(k+1)^(C-1)·D` when proportional (self-scale on). `d = off·(1/dispRatio)^(C-1)` in legacy mode.
- **oscillation mode**: optional blend of orbit angle with pendulum swing. `theta = (1-blend)·ph[k] + blend·amp·sin(ph[k])`
- **growth**: the last rotation gets multiplied by a growth factor (animation for adding depths)
- **chain recording**: when enabled, records each step (seed, displace, rotate, final) for skeleton drawing

### what depends on this
everything. the composition is the core. scope samples it. visualization draws it. formulas dispatch to it. projection transforms its output.

---
