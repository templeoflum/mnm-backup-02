# sketch — spline-overview — f1 — 20260607-160000

review. proposed changes to the collapsed spline instrument.

---

## proposed organization

the collapsed instrument is one standalone HTML file with 6 clearly separated sections, matching the three structural layers (curve → ladder → routing) plus interaction, UI, and glue.

### 1. DATA (constants, state, configuration)
- all state variables in one place: order, nseg, mode, tension, knots, polys
- derivative naming table
- channel definitions (names, display types, defaults)

### 2. CURVE (polynomial construction)
- hermitePoly, solve, polyEval, polyDeriv, factorial
- rebuild (independent mode)
- buildCoupled, blendedSlope, buildCoupledSegments (coupled mode)
- buildGlobal (single mode)
- fAt, derivAt, derivAtSeg (evaluation)
- periodic utilities (periodicKnot, kv)

### 3. LADDER (derivative stack + break detection)
- knotBreaks (break detection)
- buildLadder (DOM construction)
- drawLadder (rendering — curves, breaks, join dots)
- derivative naming + coloring

### 4. ROUTING (channels + audio)
- drivers, computeRanges, chan, chanSigned
- updateDomains (all channel monitors)
- audio: audioOn, setTone, toneOff
- gates: knot gate, peak gate, zero-cross gate
- waveform trace

### 5. INTERACTION (drag + prediction + influence)
- drag system (pointer events, snapshotBaseline)
- prediction (reachZone, previewCurve, hover preview)
- influence (ghost, heat, tug)
- curvature combs (rendering feature, belongs with interaction since it's a curve-examination tool)

### 6. UI + GLUE
- mode selector, scrubs, pickers, toggles
- setText (educational text)
- playback loop
- event wiring, initialization

## proposed file structure

```html
<!-- 1. STYLE -->
<!-- 2. HTML structure -->
<script>
// ═══ 1. DATA ═══
// state, derivative names, channel definitions

// ═══ 2. CURVE ═══
// hermitePoly, rebuild, buildCoupled, buildGlobal, evaluation

// ═══ 3. LADDER ═══
// knotBreaks, buildLadder, drawLadder

// ═══ 4. ROUTING ═══
// drivers, normalization, updateDomains, audio, gates

// ═══ 5. INTERACTION ═══
// drag, prediction, influence, combs

// ═══ 6. UI + GLUE ═══
// controls, pickers, text, playback, init
</script>
```

## decisions summary

| decision | options | leaning |
|----------|---------|---------|
| standalone or lattice-integrated? | standalone / lattice view | standalone (same as TS) |
| voice system keep? | keep / drop / simplify | keep — the audio IS a channel, routing to sound is the thesis |
| channel count | keep all 13 / reduce | keep all — each channel tests a different perceptual dimension |
| educational text | keep / drop / externalize | keep in-instrument — it's part of the teaching function |
| detail levels | keep 3 levels / simplify | keep — clean/standard/full is useful density control |
| gate system | keep / drop | keep — gates are the discrete complement to the continuous channels |

## what emerged

the spline instrument is simpler than TS architecturally. TS has 8 sections because it has more distinct subsystems (composition, cascade, proportion, scope, formulas, projection, visualization, UI). the spline has three clean layers (curve → ladder → routing) plus interaction and UI. the total is ~1000 lines vs TS's ~2800 combined.

the spline doesn't need:
- no multi-view (it's 1D → many channels, not 3D/4D spatial)
- no projection (1D curve, nothing to project)
- no formula bank (one curve type, three construction modes instead)
- no caliper (no spatial features to measure between)
- no overlay groups (the ladder IS the visualization)

what it has that TS doesn't:
- the routing (derivative → channel mapping). TS measures but doesn't route to arbitrary outputs.
- the prediction/influence system (reach zones, hover preview, ghost, heat, tug). TS has nothing equivalent.
- the educational text panel. TS has info readouts but not explanatory text.
- audio as a first-class output channel.

---
