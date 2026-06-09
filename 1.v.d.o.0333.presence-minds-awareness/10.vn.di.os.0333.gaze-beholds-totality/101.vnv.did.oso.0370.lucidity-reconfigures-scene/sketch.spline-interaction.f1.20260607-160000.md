# sketch — spline-interaction — f1 — 20260607-160000

review. proposed changes to the interaction system.

---

## what should stay
- join dragging. the primary interaction. works well, no change.
- baseline snapshot. essential for influence visualizations. correct.
- periodic seam enforcement. joins 0 and nseg move together. correct.
- reach zones. grounded — measured by actually probing the curve. visual evidence of coupling vs independence.
- hover preview. shows the envelope of possible change before committing.
- influence modes (ghost, heat, tug). each shows a different aspect of what changed. all useful.
- the prediction/influence mode selectors. clear, orthogonal toggles.

## what should change

### naming (per vocab sketch)
- `knots[dragI]` → `joins[dragI]`. per vocab.
- `hoverKnot` → `hoverJoin`. per vocab.
- `snapshotBaseline()` → name stays. "baseline" is the settled vocab term.
- functions that say "knot" internally → "join": `periodicKnot` → `periodicJoin` (or just `wrap`).

### curvature combs location
combs are currently drawn inside `drawLadder()` in an inline conditional block. they're a visualization feature that belongs with interaction (they're a curve-examination tool, like reach zones and hover preview — you're examining the curve without changing it).

**proposal**: move combs to the interaction section. the comb drawing code (~30 lines) becomes `drawCombs(ctx, Y)` alongside `drawPrediction()` and `drawInfluence()`. the toggle stays in the UI.

### previewCurve() efficiency
`previewCurve()` saves all knots, modifies one, rebuilds the entire curve, samples, then restores. it calls `rebuild()` twice (once for preview, once for restore). this is fine for the current instrument size but would be slow if nseg were large.

**decision needed**: optimize? leaning toward no — nseg maxes at 12, rebuild is fast, this is not a performance bottleneck. premature optimization.

### influence persistence
currently influence visualizations (ghost, heat, tug) only show during a drag — they clear on pointerup. sometimes it would be useful to see "what did my last drag do?" after releasing.

**decision needed**: persist influence after drag? leaning toward no for now — the clean state on release is less confusing. if needed, add a "freeze influence" toggle later.

### drag sensitivity
the y-mapping during drag uses the autoscale range of the value curve. at deep autoscale (when the curve's range is very small), tiny mouse movements produce large value changes. at wide autoscale, you need big movements for small changes.

**decision needed**: normalize drag sensitivity? leaning toward keep as-is — the sensitivity naturally adapts to the curve's current range, which is actually intuitive (big curve = big drags, small curve = small drags).

## what stays as-is
- pointer event handling pattern
- snapshotBaseline() structure
- reachZone() probing algorithm
- previewCurve() save/restore pattern
- influenceAt() measurement
- tug arrow drawing

## summary
interaction is the instrument's hands — how you touch and examine the curve. main changes: naming (knot→join), moving combs to the interaction section. the mechanisms don't change.

---
