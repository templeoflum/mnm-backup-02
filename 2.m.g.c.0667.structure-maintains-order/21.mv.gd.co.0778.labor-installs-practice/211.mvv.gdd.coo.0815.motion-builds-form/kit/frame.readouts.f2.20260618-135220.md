# frame — readouts — f2 — source · bank · scope

home: `kit` (211/kit, co-located with the code) · mode: builder window · status: **FRAMED — not built** · folds [[frame.readouts.f1]] (agreement → minimum-LOD glance; moved back to the project from 210) · the readouts thread from [[baton.clerk.f13]] · sibling of [[frame.unify.f0]]

Surface the heart's live readings as a **bank under the heart**; click one → the **scope plots it**.

## the agreement (at a glance)

- readouts are **nodes** — a new SOURCE kind: output-only, heart-driven, clickable → scope.
- a **bank** under the heart, fixed (not the palette). Only sink is the scope.
- **all** the readings (scalar / 2-ch). N-gon vertex deferred.
- **baseline = raw value at natural range.** Projection (wrap / log / text-only) is R2.
- scope path **unchanged** — readout-is-a-node means focus→scope just works.

## anatomy

```
heart zone
┌─────────────────────────────┐
│  [speed][radix] [play][stop] │   heart params (smart params)
│  [phase₀][playbk][  scrub  ] │
├─────────────────────────────┤
│  READOUTS                    │
│  phase 0.42  cos -0.31  …    │   chip = label + live value
│  cycles 7    sin  0.95  …    │   click → scope plots it
└─────────────────────────────┘
        click ──────────────▶  scope · phase  ╱╲╱╲
```

## the readouts (all — scalar / 2-channel)

Sourced from existing exports (`heartTurns()`, `heartPeriod()`) except where noted:

| readout            | source                        | natural range | note |
|--------------------|-------------------------------|---------------|------|
| phase              | `fract(turns)`                | [0, 1]        | sweeps |
| cycles             | `floor(turns)`                | [0, 16]*      | integer; unbounded — pegs at raw |
| angle              | `2π·fract(turns)`             | [0, 2π]       | sweeps |
| cos                | `cos(angle)`                  | [-1, 1]       | sweeps |
| sin                | `sin(angle)`                  | [-1, 1]       | sweeps |
| unit-point         | `(cos, sin)`                  | [-1, 1] ×2    | 2-channel (out=cos, outY=sin) |
| frequency          | `1/period`                    | [0, 10000]*   | constant → flatline |
| angular-velocity   | `2π/period`                   | [0, ~63k]*    | constant → flatline |
| distance           | module `distance`             | [0, 16]*      | unbounded; needs **1-line export** |
| velocity (speed)   | `±2π/period` (sign=playback)  | [-63k, 63k]*  | magnitude+sign; derived |
| accel (centripetal)| `(2π/period)²`                | [0, …]*       | derived |

`*` = no bounded natural range — provisional window; these are exactly what R2 revisits. **N-gon vertex** deferred (a 2D position, not a scalar).

## build sequence (chunk × slice × rung)

**R1 — baseline** (this build):
1. **source-node kind** — `out` written each frame by `source(t)`, no control widget, clickable → focus, carries its natural range.
2. **distance export** — one line: `export function heartDistance(){ return distance }` in `unit-circle.js`.
3. **the bank** — readout-chip row/grid in the heart zone; click → `focus` + `select`. Wire the 11 readouts.
4. **scope integration** — click a chip → `focus(node)`; the latch holds (a sweeping readout must not yank focus); `focus()` sets the per-readout range.
5. **rig checks** — bank present; click → scopes it (chead "scope · phase"); latch holds with a readout focused; the 2-ch readout drives ch B.

each rung committed; checks added to `dev/verify.mjs`. **feel is the operator's.**

## deferred / open (named)

- **R2 — projection** — wrap→saw (distance), log map (frequency / angular-velocity), text-only (cycles — its scope-twin is phase). Reuses the smart param's output-map + wrap; no new mechanism. His call after baseline feel.
- **R3 — patch panel / matrix view** (PARKED) — route readouts to sinks beyond the scope.
- **N-gon vertex readout** — with R2.
- **lattice/viewer perf** — slow tree load, kit empty on open; deeper look after this build.

## laws (carried)

a readout's `out` is the raw reading; scope range is per-readout (display, not signal) · focus by interaction only, never emission ([[incident.scope-focus-miss.f0]]) · a rig check encodes the operator's requirement, never my own change ([[reproduce-the-real-repro]]) · feel is the operator's, correctness in the rig · settle before build · buildless, no deps ([[buildless-unit-default]]) · direct manipulation ([[operator-builds-by-hand]]).
