# sketch — spline-ladder — f0 — 20260607-160000

the derivative stack. break detection. the instrument's core display. baseline.

---

## what it does

evaluates every derivative order of the curve at every point, detects where continuity breaks at joins, and displays the full derivative stack as a vertical column of canvases — one row per order, from f(t) at top through f', f'', f''' and beyond.

## break detection

`knotBreaks(dn)` — lines 444–457.

for derivative order dn:
- at each interior join (i = 1..nseg-1): compare left limit (right end of segment i-1) to right limit (left end of segment i)
- threshold: |left - right| > 0.06 × max(1, |left|, |right|)
- also test the loop seam: end of last segment vs start of first segment
- global mode: returns empty (C-infinity, no breaks anywhere)

returns array of t-positions where breaks occur.

## the ladder display

`buildLadder()` — lines 414–430.

creates DOM elements: one label + one canvas per derivative order (0 to `order`). global mode always shows 4 rows (f through f'''). canvas height: row 0 = 150px, rest shrink as rows increase.

`drawLadder()` — lines 505–667.

for each row d (0 to rows-1):
1. clear canvas
2. draw grid lines at join positions
3. draw zero line (if range includes 0)
4. sample the derivative: 320 points across [0,1], call `derivAt(t, d)`
5. autoscale: find min/max of samples, add 15% padding
6. draw breaks: red vertical lines + red dots at left/right limits
7. draw the curve: per-segment strokes (separate at C0 breaks)
8. row 0 only: draw draggable join dots

additionally on row 0, when active:
- **reach zones**: colored bands showing each join's influence footprint (prediction mode)
- **hover preview**: ghost curves showing hypothetical up/down displacement (prediction mode)
- **ghost trail**: dashed before-drag curve (influence mode)
- **heat tint**: red shading proportional to |change from baseline| (influence mode)
- **tug arrows**: slope-target shift vectors at each other join (influence mode)
- **curvature combs**: perpendicular hairs, length ∝ |f''|, with connecting spine (combs mode)
- **running drag preview**: ghost overlay during active drag

## derivative naming

| order | symbol | name |
|-------|--------|------|
| 0 | f | value — the spline |
| 1 | f' | velocity (slope) |
| 2 | f'' | acceleration (curvature) |
| 3 | f''' | jerk |
| 4 | f'''' | snap |
| 5 | f''''' | crackle |
| 6 | f'''''' | pop |
| 7+ | f^(n) | n-th derivative |

## per-row readout

each row has a label showing: break count ("2 breaks here") or "continuous". colored red if broken, dim if continuous. this is the ladder's primary output at a glance — which orders are broken.

## what it depends on

- curve engine: `derivAt()`, `derivAtSeg()`, `knotBreaks()` for evaluation and break detection
- interaction: baseline, hoverKnot, dragI for the overlay features

---
