# sketch — spline-overview — f0 — 20260607-160000

architecture map. baseline. what the spline continuity instrument is, in parts.

---

## what it is

one HTML file (~1000 lines). builds a piecewise polynomial curve, evaluates every derivative order, detects where continuity breaks, and routes derivative values to perceptible output channels. the thesis: a break in the curve is the same break in every channel — position, color, sound — because it's one broken derivative driving all of them. routing imperceptible derivatives to perceptible channels makes invisible breaks visible.

## data flow

```
joins (user values)
  ↓
curve construction (hermite / coupled / single)
  ↓
polynomial coefficients (per segment or global)
  ↓
evaluation: f(t), f'(t), f''(t), f'''(t) ...
  ↓
break detection (left/right limits at each join)
  ↓
ladder display (stacked derivative canvases)
  ↓
routing (derivative order → output channel)
  ↓
channel outputs: position, size, rotation, opacity, skew,
                 hue, brightness, saturation,
                 pitch, amplitude, timbre,
                 gates (knot, peak, zero-cross)
```

## the parts

### 1. curve — polynomial construction

three modes:
- **independent** (local spline): periodic hermite, order determines polynomial degree (2×order+1). each segment's left derivatives carried from previous segment, right value from join target.
- **coupled**: periodic natural cubic spline. globally solved slopes, tension blends toward local.
- **single** (global polynomial): one polynomial of degree nseg through all joins. C-infinity, Runge oscillation.

core functions: `hermitePoly()`, `rebuild()`, `buildGlobal()`, `buildCoupled()`, `buildCoupledSegments()`, `solve()` (gaussian elimination), `polyEval()`, `polyDeriv()`.

state: `order`, `nseg`, `mode`, `tension`, `knots[]`, `segPolys[]`, `globalPoly[]`, `coupledSlopes[]`.

### 2. ladder — derivative evaluation + break detection

evaluation: `fAt(t)`, `derivAt(t, dn)`, `derivAtSeg(seg, lt, dn)`. chain rule scaling: local derivatives × nseg^dn.

break detection: `knotBreaks(dn)` — for each join, compare left/right limits of the dn-th derivative. includes loop seam test.

display: `buildLadder()` creates one canvas per derivative order (0 to `order`). `drawLadder()` renders: grid lines, zero line, per-segment curves, break markers (red dots + vertical lines), join dots (draggable on row 0).

derivative naming: value, velocity (f'), acceleration (f''), jerk (f'''), snap (f''''), crackle (f''''''), pop (f''''''').

### 3. routing — channel system

`drivers{}` maps each channel to a derivative order. 13 channels total:
- transform: position, size, rotation, skew
- appearance: hue, brightness, saturation, opacity
- sound: pitch, amplitude, timbre
- gates: knot gate, peak gate, zero-cross gate

normalization: `computeRanges()` caches min/max per derivative order. `chan(key, t)` returns [0,1]. `chanSigned(key, t)` returns [-1,1] zero-preserving (max-abs scaling, not range scaling).

polarity: unipolar [0,1] fills observed range. bipolar [-1,1] pins zero to center.

source picker: `d:N` scrub per channel. drag to change which derivative feeds the channel.

`updateDomains(t)` renders all 13 channel monitors: ball position, size circle, rotation bar, skew box, color swatches, opacity box, pitch/amp/timbre indicators, gate flashes, waveform trace.

### 4. audio — voice

three oscillators sharing one base frequency (160–680 Hz from pitch channel):
- osc1: sine, direct to gain
- osc2: triangle, amplitude-modulated by amp channel
- osc3: sawtooth → lowpass filter (cutoff from timbre channel) → gain

`audioOn()`, `setTone(t)`, `toneOff()`. Web Audio API.

### 5. interaction — drag, prediction, influence

**drag**: pointer events on the value canvas (row 0). nearest join within 22px snaps. drag updates knot value. seam knots move together (periodic).

**baseline**: `snapshotBaseline()` captures the curve + per-join slopes before a drag. used by influence visualizations.

**prediction** (before drag):
- reach zones: `reachZone(ki)` probes a small displacement, measures where the curve changes. displayed as colored bands.
- hover preview: `previewCurve(ki, nv, N)` computes the hypothetical curve if a join were moved. draws ghost curves (up+down) around the hovered join.

**influence** (during/after drag):
- ghost: the before-drag curve as a dashed overlay
- heat: red tint proportional to |current - baseline| at each point
- tug: arrows at each OTHER join showing how its effective slope target shifted

modes: `influenceMode` (all/ghost/heat/tug/off), `predictMode` (off/zones/hover/both).

### 6. visualization

**curvature combs**: perpendicular hairs on the value curve, length proportional to |f''|. spine connecting tips. positive curvature one color, negative another.

**detail levels**: clean (minimal), standard (default), full (dense combs, more samples). gates how much rendering detail appears.

**playhead**: during playback, a vertical line + dot sweeps across all ladder rows.

### 7. UI

- mode selector (segmented buttons: local/coupled/global)
- scrub controls: order, segments, tension, speed
- derivative pickers (d:N per channel, scrub or click)
- polarity toggle (unipolar/bipolar)
- influence mode selector (all/ghost/heat/tug/off)
- prediction mode selector (off/reach-zones/hover/both)
- detail level selector (clean/standard/full)
- curvature combs toggle
- play/pause button
- random shape button
- text panel: mode-specific description + note (educational)

### 8. playback

`loop(ts)`: requestAnimationFrame. advances phase. calls `updateDomains(phase)`, `setTone(phase)`, redraws ladder with playhead overlay.

## distribution in the source

| section | approx lines | what |
|---------|-------------|------|
| CSS | 1–92 | styling, layout, channel monitors |
| HTML | 94–198 | layout structure, channel DOM |
| curve engine | 200–368 | hermitePoly, rebuild, buildGlobal, buildCoupled |
| ladder | 394–667 | buildLadder, drawLadder, knotBreaks, prediction, influence overlays |
| routing | 669–776 | drivers, chan, updateDomains, waveform |
| audio | 778–811 | oscillators, setTone |
| playback | 813–834 | loop, phase, playhead |
| interaction | 836–882 | drag, baseline, hoverKnot |
| controls | 884–998 | scrubs, pickers, toggles, setText |

## dependency table

| part | depends on |
|------|-----------|
| curve | nothing (self-contained polynomial engine) |
| ladder | curve (needs evaluation functions) |
| routing | curve (needs derivAt), ladder (shares the canvas space conceptually) |
| audio | routing (reads channel values) |
| interaction | curve (modifies knots, calls rebuild), ladder (renders on its canvases) |
| visualization | ladder (draws on ladder canvases), interaction (ghost/heat/tug need baseline) |
| UI | everything (controls all parameters, reads all state) |
| playback | routing (updateDomains), audio (setTone), ladder (redraw with playhead) |

---
