# frame — readouts — f1 — source · bank · scope

address: 210 (layout·positions·work) · mode: builder window · status: **FRAMED — not built** · scope: `kit` (211/kit) · folds [[frame.readouts.f0]] into the frame home + canonical format (f0 mis-placed in kit, copying [[frame.unify.f0]]) · the readouts thread from [[baton.clerk.f13]] · sibling of [[frame.unify.f0]]

The heart already carries a stack of live readings, all derived from one knob (period) + the odometer (`turns`). Surface them as a **bank under the heart**; click one → the **scope plots it**.

## the agreement

### the key move — a readout IS a node
The scope already plots exactly one thing: `focused.out.get()` — a node's output. Rather than add a second, parallel signal-provider path into the scope (and re-touch the focus latch just fixed in [[incident.scope-focus-miss.f0]]), make the readout **be a node**. A readout is a signal with no input; a node's core *is* its `out`. Focus→scope then works unchanged, the latch applies for free, no special case. **The scope-source fork dissolves.**

### the new node kind — a SOURCE node (output-only)
Every existing part is an INPUT the user drives. A readout is the first node the **heart** drives and the user only **reads**:
- `out` is written every frame by the loop from a **source fn** `source(t)→number` (a heart projection). Where a param does `n.setValue(phase…)`, a readout does `n.out.set(n.source(t))`.
- **no control widget** — the body is a chip: label + live value, not user-settable.
- **clickable → focus** — selecting it points the scope at it (reuses `focus(node)` + the latch).
- carries its own **natural scope range** (so `focus()` sets the y-scale per readout).

### the bank — pinned under the heart, fixed
A readout **bank** lives in the heart zone (under the heart params), NOT in the palette — readouts aren't dragged in. Each readout is a chip; clicking it scopes it. (A patch-panel / matrix view to route readouts elsewhere is **parked** — for now the only sink is the scope.)

### baseline first — raw, natural range (operator call)
Get the bank standing with the **raw value at its natural range** for every readout. No projection machinery in the first build — the unbounded/large ones (cycles, distance, frequency) will peg or flatline at raw range, and *that's the honest baseline that tells us what to tune next.* Wrap / log / text-only is a later rung, not R1.

## anatomy

```
heart zone
┌─────────────────────────────┐
│  [speed][radix] [play][stop] │   the heart params (smart params)
│  [phase₀][playbk][  scrub  ] │
├─────────────────────────────┤
│  READOUTS                    │
│  phase 0.42  cos -0.31  …    │   chips: label + live value
│  cycles 7    sin  0.95  …    │   click a chip → scope plots it
└─────────────────────────────┘
        click ──────────────▶  scope · phase  ╱╲╱╲
```

## the readouts (all — scalar / 2-channel)

All sourced from existing exports (`heartTurns()`, `heartPeriod()`) except where noted:

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

`*` = no bounded natural range — the starting window is provisional; these are exactly the readouts the projection rung revisits. **N-gon vertex** (the radix point) is **deferred** — a chosen 2D position, not a scalar; revisit with the projection rung.

## build sequence (chunk × slice × rung)

**R1 — baseline** (this build):
1. **source-node kind** — a node whose `out` is written by `source(t)`, no control widget, clickable to focus, carries its natural range. The loop updates every readout's `out` each frame.
2. **distance export** — one line in `unit-circle.js`: `export function heartDistance(){ return distance }`.
3. **the bank** — a readout-chip row/grid in the heart zone; each chip = label + live value, click → `focus` + `select`. Wire the 11 readouts with source fns + ranges.
4. **scope integration** — clicking a chip plots it (reuse `focus(node)`); the latch holds (a sweeping readout must not yank focus — same rule as a driven param). `focus()` sets the per-readout range.
5. **rig checks** — bank present; clicking a readout scopes it (chead reads "scope · phase"); focus latch holds with a readout focused; a 2-channel readout (unit-point) drives ch B.

each rung committed; correctness checks added to `dev/verify.mjs` where headless can see them. **feel is the operator's.**

## deferred / open (named)

- **R2 — projection** (his call after baseline feel): wrap→saw for accumulating (distance), log output-map for large constants (frequency / angular-velocity), text-only for cycles (its scope-twin is literally phase — don't double-plot). Reuses the smart param's existing output-map + wrap; no new mechanism.
- **R3 — patch panel / matrix view** (PARKED): route readouts to sinks beyond the scope.
- **N-gon vertex readout** — a 2D chosen position; with R2.
- **lattice/viewer perf** — the viewer loads slow with the kit open (slow tree load, kit empty on open). A deeper look *after* this build ([[baton.clerk.f14]] snag).

## resolved this talk

- **which** — all of them (scalar/2ch; N-gon vertex deferred).
- **scope source** — dissolved: readouts are nodes, scope path unchanged.
- **where** — readout bank under the heart, fixed (not palette); patch panel parked.
- **projection** — baseline raw natural range first; wrap/log/text-only is R2, tuned by feel.

## laws (carried)

a readout's `out` is the raw reading; the scope range is per-readout (display, not signal) · focus by interaction only, never by emission ([[incident.scope-focus-miss.f0]]) · a rig check encodes the operator's requirement, never asserts my own change ([[reproduce-the-real-repro]]) · feel is the operator's, correctness in the rig · settle before build · buildless, no deps ([[buildless-unit-default]]) · direct manipulation, not code ([[operator-builds-by-hand]]).
