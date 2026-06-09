# sketch — spline-ladder — f1 — 20260607-160000

review. proposed changes to the ladder.

---

## what should stay
- the stacked canvas display. one row per derivative order. this IS the instrument — the visual derivative stack. nothing to change about the concept.
- break detection via left/right limit comparison. correct, straightforward.
- per-row break count readout. essential at-a-glance information.
- autoscaling per row. each derivative order has a different range. autoscale is the only way to make them all visible.
- per-segment stroke rendering. essential for C0 breaks — you have to draw each segment separately to show the gap.

## what should change

### naming (per vocab sketch)
- `knotBreaks(dn)` → `joinBreaks(dn)`. per vocab: joins, not knots.
- the function name `drawLadder()` stays — "ladder" is the settled term for this instrument.
- derivative names stay as-is: value, velocity, acceleration, jerk, snap, crackle, pop. these are the standard physics nicknames and they're correctly used.

### separation of concerns in drawLadder()
`drawLadder()` is currently ~160 lines and does everything: grid, breaks, curves, knot dots, reach zones, hover preview, ghost, heat, tug, combs, running drag preview. that's nine different things in one function.

**proposal**: break into focused drawing passes:
1. `drawGrid(ctx, d)` — grid lines, zero line
2. `drawBreaks(ctx, d)` — break markers
3. `drawCurve(ctx, d)` — the derivative curve per segment
4. `drawJoins(ctx)` — draggable dots (row 0 only)
5. `drawPrediction(ctx)` — reach zones, hover preview (row 0 only)
6. `drawInfluence(ctx)` — ghost, heat, tug (row 0 only)
7. `drawCombs(ctx)` — curvature combs (row 0 only)

each function takes the canvas context and the current autoscale. `drawLadder()` becomes a loop that calls the appropriate passes per row.

**decision needed**: is this worth the refactor? the current monolithic function works. the break-up adds clarity but adds function-call overhead. leaning toward yes — 160 lines in one function with 9 different conditional blocks is hard to read and harder to modify.

### canvas sizing
current: row 0 = 150px, rest = `max(44, 78 - rows*2)`. rows shrink as order increases. at C12 that's 13 rows and each is ~52px. tight but readable.

**decision needed**: any change? leaning toward keep — the shrinking is appropriate. deeply stacked ladders should show less per row because the higher orders are less perceptible anyway.

### break threshold
current: `|left - right| > 0.06 × max(1, |left|, |right|)`. relative threshold with a floor of 1. this means very small derivatives (close to zero) might report breaks that aren't visually meaningful. and very large derivatives might miss breaks that are proportionally small.

**decision needed**: adjust threshold? leaning toward keep — it works well enough in practice. the 6% relative threshold catches visually meaningful breaks without false positives. a more sophisticated threshold would add complexity without clear benefit.

## what stays as-is
- `buildLadder()` DOM construction
- `knotBreaks()` algorithm
- `rowColor()` (hue ramp per order)
- `rowLabel()` (derivative names)
- autoscale logic

## summary
the ladder is the instrument's core display and it works well. main changes: naming (knot→join in function names), and optionally breaking `drawLadder()` into focused passes. the break detection and display mechanisms don't change.

---
