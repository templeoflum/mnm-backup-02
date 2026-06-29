# sketch — splinenew-ladder — f0 — 20260607-160000

the ladder toy. derivative stack + break detection. the core visual.

---

## what this toy is

a standalone HTML file. the curve toy plus the derivative ladder — a vertical stack of canvases, one per derivative order, from f(t) at top through f', f'', f''' and beyond. at each join, the ladder shows where continuity breaks: red markers where left and right limits disagree. raise the order and breaks retreat to higher derivatives. this is the instrument's central display.

this is the second toy. it adds observation to the curve: not just what the curve looks like, but what it's doing at every derivative order.

## what it contains

### the curve engine (from splinenew-curve)

everything from the curve toy: construction, modes, drag, controls.

### derivative evaluation

- `derivAt(t, dn)` — evaluate the dn-th derivative at global t. chain rule: local derivative × segments^dn.
- `derivAtSeg(i, lt, dn)` — evaluate in a specific segment at local position.

### break detection

`joinBreaks(dn)` (renamed from knotBreaks):
- for each interior join: compare left/right limits of the dn-th derivative
- threshold: |left - right| > 0.06 × max(1, |left|, |right|)
- test the loop seam too
- global mode: always returns empty (C-infinity)

### the ladder display

`buildLadder()`:
- create one canvas per derivative order (0 to `order`). global mode: fixed 4 rows (f through f''').
- row 0 = 150px, rest shrink as rows increase.

`drawLadder()` — for each row:
1. grid lines at join positions
2. zero line (when range includes 0)
3. per-segment curve strokes (320 samples)
4. break markers: red vertical lines + red dots at left/right limits
5. join dots on row 0 (draggable)
6. per-row label: break count or "continuous"

autoscaling per row.

### derivative naming + coloring

- row 0 (value): green (`--v`)
- rows 1+: hue ramp from cyan through the spectrum
- labels: "value", "f' — velocity", "f'' — acceleration", "f''' — jerk", etc.

## what it does NOT contain

- no channels — no routing, no output monitors. that's splinenew-routing
- no audio
- no prediction (reach zones, hover preview) — that's assembly
- no influence analysis (ghost, heat, tug) — that's assembly
- no curvature combs — assembly
- no playback — assembly
- no educational text

## inputs

everything from the curve toy. no new controls — the ladder is a pure observation layer. it reads the curve and shows what's happening. the only "input" is the curve parameters themselves.

## outputs

- a vertical stack of canvases. each row shows one derivative order.
- at C0: row 0 (value) is continuous, row 1 (f') has breaks at every join. the kink is visible in the value row, the discontinuity is visible in the derivative row.
- at C1: rows 0–1 are continuous, row 2 (f'') has breaks. the kinks are gone but curvature changes abruptly.
- at C2: rows 0–2 are continuous, row 3 (f''') has breaks. the curve is smooth but jerk jumps at joins.
- in single mode: all rows are continuous (C-infinity). but the curve oscillates wildly between joins (Runge). the ladder shows the oscillation amplifying in higher derivative rows.

the ladder makes the abstract concept of continuity order visually concrete: you can SEE which derivative order breaks, and you can SEE the break disappear when you raise the order.

## decisions needed

1. **playhead in this toy?**: the current instrument draws a playhead sweeping across all rows during playback. this toy has no playback. leaning toward defer playhead to assembly — it's a presentation feature, not a measurement feature.

2. **break threshold**: keep 0.06 relative? yes — it works. see spline-ladder.f1 for discussion.

## dependencies

- **depends on**: splinenew-curve (the polynomial engine)
- **blocks**: splinenew-routing (channels need to read derivatives), splinenew-assembly

## what "done" looks like

- open the file, see the curve with a ladder of derivative rows stacked below it
- at C0: value row shows kinks, f' row shows discontinuities (red markers at every join)
- raise order to C1 → f' row becomes continuous, f'' row shows breaks
- raise to C2 → f'' continuous, f''' breaks
- drag a join → ALL rows update in real time. the break markers move or appear/disappear
- switch to single mode → all rows continuous, but the curves oscillate wildly between joins
- each row is labeled with its derivative order and whether it's broken or continuous
- the ladder makes continuity order tangible — you understand C0 vs C2 by looking at it

---
