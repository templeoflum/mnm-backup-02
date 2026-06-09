# sketch — splinenew-assembly — f0 — 20260607-160000

the assembly. where the toys become the instrument.

---

## what this toy is

not a toy — the full spline continuity instrument. one standalone HTML file that integrates curve + ladder + routing, then adds everything the toys left out: prediction, influence analysis, curvature combs, educational text, full UI, and the glue.

## what it contains

### all three toy engines

- **curve**: hermite construction, three modes (independent/coupled/single), periodic, drag
- **ladder**: derivative stack, break detection, stacked canvas display
- **routing**: 13 channels, source pickers, normalization, polarity, gates, voice, playback

each verified in its own toy. the assembly wires them together and adds what was deliberately left out.

### prediction system (NEW in assembly)

shown when NOT dragging. tools for examining the curve before committing to a change.

**reach zones** — `reachZone(ki)`:
- probe a small displacement at join ki
- measure where the curve changes (|probe - baseline| > threshold)
- display as colored bands on the value canvas
- visual evidence: independent mode → tight bands. coupled mode → bands stretch across the curve.

**hover preview** — `previewCurve(ki, nv, N)`:
- compute hypothetical curve with join ki set to nv
- draw ghost curves (dashed, up+down) showing the envelope of possible change
- non-destructive: saves/restores knots

**prediction toggle**: off / reach-zones / hover-preview / both

### influence analysis (NEW in assembly)

shown during/after drag. tools for understanding what a drag changed.

**ghost**: the before-drag curve as a dashed overlay. current vs previous, superimposed.

**heat**: red tint proportional to |change from baseline|. spatial distribution of influence.

**tug**: arrows at neighboring joins showing how their effective slope targets shifted. propagation made visible.

**influence toggle**: all / ghost / heat / tug / off

### curvature combs (NEW in assembly)

perpendicular hairs on the value curve, length proportional to |f''(t)|. spine connecting tips. positive curvature one color, negative another. a direct visualization of the second derivative as a geometric feature of the curve.

toggle: off / curvature

### detail levels (NEW in assembly)

master density gate: clean / standard / full. controls how much rendering detail appears (comb density, sample count, etc.).

### educational text (NEW in assembly)

the text panel: mode-specific explanations of what the user is seeing.

- **independent mode**: explains continuity order, what's broken where, the cross-channel point, the perceptibility threshold, Runge onset at high order.
- **coupled mode**: explains the tension spectrum, global influence without Runge, the controllable cousin of the single polynomial.
- **single mode**: explains C-infinity, Runge's phenomenon, the cautionary twin — perfect smoothness, useless control.

text updates dynamically with mode and order. vocabulary uses settled terms (join, channel, source, independent/coupled/single).

### full UI

**controls:**
- mode selector (independent / coupled / single)
- order scrub (C0–C12)
- segments scrub (2–12)
- tension scrub (0–1, coupled only)
- speed scrub
- source pickers (d:N per channel)
- polarity toggle (unipolar/bipolar)
- prediction toggle
- influence toggle
- detail toggle
- curvature combs toggle
- play/pause button
- random shape button

**layout:**
- two-column responsive grid
- left: ladder (stacked derivative canvases)
- right (sticky): channel monitors + text panel

### naming throughout

all vocabulary uses settled terms:
- joins (not knots)
- channels (not mediums/domains)
- sources (not drivers)
- independent / coupled / single (not local / coupled / global)
- voice (not fused voice)
- ladder (kept — native to this instrument)
- break, continuous, reach, influence, baseline (all kept)

### the six sections in the file

```
1. STYLE      — CSS for layout, ladder, channels, controls
2. HTML       — ladder container, channel monitors, controls, text panel
3. DATA       — state, derivative names, channel definitions
4. CURVE      — hermitePoly, rebuild, buildCoupled, buildGlobal, evaluation
5. LADDER     — joinBreaks, buildLadder, drawLadder (broken into passes)
6. ROUTING    — sources, normalization, updateChannels, audio, gates
7. INTERACTION — drag, prediction, influence, combs
8. UI + GLUE  — controls, pickers, text, playback loop, events, init
```

(eight sections — the overview said six but style, HTML, and data are their own.)

## decisions needed

1. **drawLadder decomposition**: break the 160-line monolithic function into focused passes (drawGrid, drawBreaks, drawCurve, drawJoins, drawPrediction, drawInfluence, drawCombs)? the f1 sketch proposes this. leaning toward yes — clarity over brevity.

2. **"hot" extension**: extend the red "hot" indicator from the source picker to the channel monitor itself? leaning toward yes — a subtle red border on the monitor makes the break visible at the channel level.

3. **channel group collapsing**: make the four channel groups (transform, appearance, gates, sound) collapsible? leaning toward no — 13 channels is manageable flat. add if it feels cluttered during build.

4. **text externalization**: keep educational text inline or load from external files? leaning toward inline — it's ~30 lines total, needs dynamic values, not worth the complexity of external loading.

## dependencies

- **depends on**: all three toys (curve, ladder, routing)
- **blocks**: nothing — this is the end product

## what "done" looks like

- open the file, see the full spline continuity instrument
- curve with ladder on the left, channels on the right, text at bottom-right
- independent mode at C0: visible kinks in the value row, f' row shows breaks with red markers, position channel shows the ball jumping at joins
- raise to C2: smooth curve, breaks retreat to f'''. channels reading f'' become smooth.
- coupled mode: drag a join → reach zones stretch across the entire curve. tug arrows show propagation.
- single mode: C-infinity, no breaks anywhere, but wild Runge oscillation in higher derivative rows
- all 13 channels working: position ball, size circle, rotation bar, skew box, hue/bright/sat/opacity swatches, gates flashing, pitch/amp/timbre voice playing
- source pickers: change position's source to f'' → ball responds to curvature. "hot" indicator when reading a broken derivative.
- prediction: hover over a join → ghost curves show what would happen if you dragged it up/down
- influence: drag a join → ghost shows the before state, heat shows the magnitude, tug shows the propagation
- curvature combs: perpendicular hairs showing |f''| along the value curve
- text panel: mode-specific explanation updating with each mode/order change
- all vocabulary is settled terms — no old naming leaks through
- the instrument produces the same behavior as the current spline_continuity_v2 (4).html, verified by visual comparison

---
