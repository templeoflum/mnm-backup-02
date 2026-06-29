# sketch — spline-interaction — f0 — 20260607-160000

drag, prediction, influence analysis. baseline.

---

## what it does

lets the user physically manipulate the curve by dragging joins, shows what would happen before they drag (prediction), and shows what changed after they drag (influence analysis). the interaction is the instrument's hands — how you touch the curve and what it tells you in response.

## drag system

pointer events on the value canvas (ladder row 0).

- `pointerdown`: find nearest join within 22px. set `dragI`. capture pointer. snapshot baseline.
- `pointermove`: if dragging, convert mouse y to curve value using the current autoscale range. update `knots[dragI]`. enforce periodicity (seam knots move together). redraw.
- `pointerup`: clear dragI, clear baseline, redraw.

join dots: drawn on the value canvas. the dragged join is highlighted yellow and larger. seam joins (0 and nseg) are dimmed.

## baseline snapshot

`snapshotBaseline()` — captures before a drag begins:
- `samp[]`: 200 curve samples across [0,1]
- `knots[]`: copy of all join values
- `slopes[]`: per-join finite-difference slope targets

used by all influence visualizations to show "what changed."

## prediction (before drag)

shown when NOT dragging, when the relevant mode is active.

### reach zones

`reachZone(ki)` — for join ki:
- probe: temporarily set knot to value+0.15, rebuild, sample, compare to baseline
- where |probe - baseline| > 0.004: that's within reach
- returns {lo, hi} t-range

display: colored bands on the value canvas at each join's reach zone. hovered join's zone is brighter.

in independent mode: reach is local (one or two segments). in coupled mode: reach extends across the entire curve. visual evidence of the coupling.

### hover preview

`previewCurve(ki, nv, N)` — compute hypothetical curve if join ki were set to nv:
- saves current knots, sets new value, rebuilds, samples, restores. non-destructive.

display: two ghost curves (dashed) — one for upward displacement, one for downward. shows the envelope of possible change before you commit to a drag direction.

`hoverKnot`: tracked via pointermove when not dragging. set to nearest join when within 26px. cleared on pointerleave.

## influence analysis (during/after drag)

shown when dragging, when the relevant mode is active.

### ghost

the before-drag curve as a dashed overlay. you see exactly where the curve was, superimposed on where it is now.

### heat

red tint proportional to |current - baseline| at each t-position. normalized by the maximum influence. shows the spatial distribution of how much the drag changed things.

### tug

arrows at each OTHER join (not the one being dragged) showing how its effective slope target shifted. the arrow's tilt = new slope target direction, length = magnitude of change. shows how dragging one join propagates through the slope targets of its neighbors.

### combined modes

`influenceMode`:
- `all`: ghost + heat + tug simultaneously
- `ghost`: ghost only
- `heat`: heat only
- `tug`: tug only
- `off`: no influence visualization

## what it depends on

- curve engine: modifies `knots[]`, calls `rebuild()`
- ladder: draws on the value canvas (row 0)
- `previewCurve()` calls rebuild internally (saves/restores state)

---
