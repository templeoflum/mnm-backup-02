# sketch — splinenew-curve — f0 — 20260607-160000

the curve toy. the foundation everything else builds on.

---

## what this toy is

a standalone HTML file. one canvas. a curve drawn from draggable joins. three construction modes (independent, coupled, single). the user drags joins and watches the curve change in real time. nothing else — no derivative stack, no channels, no audio, no prediction, no influence analysis. just the polynomial engine running visibly.

this is the smallest thing that demonstrates the mechanism. if this doesn't work, nothing above it works.

## what it contains

### polynomial construction

the full curve engine from spline-curve:

- `hermitePoly(L, R, m)` — polynomial of degree 2m+1 matching m+1 derivatives at both ends
- `solve(A, b)` — gaussian elimination
- `polyEval(c, t)` — Horner evaluation
- `polyDeriv(c)` — symbolic differentiation
- `rebuild()` — periodic hermite, builds all segment polynomials for independent mode
- `buildCoupled()` / `buildCoupledSegments()` — global slope solve + tension blend
- `buildGlobal()` — single polynomial through all joins
- `fAt(t)` — evaluate curve at global t, dispatches on mode
- `joinValue(i)` — periodic join value (renamed from kv)

state: `order`, `segments` (nseg), `mode`, `tension`, `joins[]` (renamed from knots), `segPolys[]`, `globalPoly[]`, `coupledSlopes[]`.

### basic display

one canvas showing:
- the curve drawn per-segment (separate strokes to show C0 gaps)
- grid lines at join positions
- zero line
- draggable join dots (click + drag to change value)

autoscaling: find min/max of curve values, add padding. same as the current value row.

### basic drag

pointer events on the canvas:
- nearest join within snapping distance
- drag updates join value
- seam joins move together (periodic)
- redraw on every move

### controls (minimal)

| control | what it does | range |
|---------|-------------|-------|
| mode selector | independent / coupled / single | segmented buttons |
| order | continuity level C0..C12 | scrub |
| segments | number of joins - 1 | 2–12, scrub |
| tension | coupled mode blend | 0–1, scrub (hidden except in coupled) |
| random shape | generate new join values | button |

## what it does NOT contain

- no derivative stack (ladder) — only the value curve. derivatives come in splinenew-ladder
- no channels — no routing, no output monitors
- no audio
- no prediction (reach zones, hover preview)
- no influence analysis (ghost, heat, tug)
- no curvature combs
- no playback (no play button, no phase advancement)
- no educational text
- no break detection display (breaks happen but aren't marked)

## inputs

| control | what it does |
|---------|-------------|
| join drag | change curve shape |
| mode | switch construction strategy |
| order | change continuity level |
| segments | change number of segments |
| tension | blend coupled toward independent |

## outputs

- a curve on a canvas. the user sees the polynomial shape.
- drag a join → curve changes. in independent mode, only nearby segments move. in coupled mode, the whole curve responds. in single mode, the whole curve thrashes (Runge).
- change order → curve gets smoother at joins (higher-degree polynomials match more derivatives)
- change mode → same joins produce a different curve shape

## decisions needed

1. **join visual**: same as current (circles, yellow when dragged)? yes — simple, works.

2. **canvas aspect**: the current instrument uses a landscape rectangle. for the toy, same? leaning toward same — it's a 1D function display, landscape is natural.

3. **periodic display**: the curve loops (joins[0] = joins[nseg]). should the display show the wrap? currently it draws t ∈ [0,1] with join 0 at left edge and join nseg at right edge. the loop is implicit. leaning toward keep — showing two copies would be confusing for this minimal toy.

## dependencies

none. this is the root.

## what "done" looks like

- open the file, see a curve with 4 segments and joins
- drag a join → curve changes smoothly in real time
- switch to coupled → drag a join → the whole curve responds (tension 0)
- slide tension to 1 → coupled behaves like independent
- switch to single → see Runge oscillation (especially at 8+ segments)
- raise order from C0 to C3 → corners disappear, the curve gets smoother at joins
- at C0 in independent mode: visible kinks at every join
- at C2: smooth curves, no visible corners

---
