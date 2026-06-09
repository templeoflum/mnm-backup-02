# sketch — spline-rebuild — f0 — 20260607-143000

vocab inventory for the spline continuity instrument. raw, as found in the code. everything floating.

---

## what it actually does (mechanism, no vocab)

1. **build a curve**: place values at evenly spaced points. fit piecewise polynomials between them (Hermite interpolation). the continuity order determines how many derivatives match at each join.

2. **walk the derivative stack**: evaluate f, f', f'', f''' ... at every point. at each join, compare left and right limits. where they disagree = a break at that derivative order.

3. **route to outputs**: map derivative values to output channels — position, size, rotation, opacity, skew, hue, brightness, saturation, pitch, amplitude, timbre. each channel can be driven by any derivative order. a break appears in whatever channel is reading the broken order.

4. **three construction modes**: local (independent segments), coupled (global solve for slopes, tension-blended), global (single polynomial, C-infinity but oscillates).

---

## current vocabulary (as found in the code)

### construction words

| word | what it means | notes |
|------|--------------|-------|
| order | continuity level (C0, C1, C2...) | how many derivatives match at joins |
| segment | one piece between two knots | a polynomial on [0,1] |
| knot | a control point | draggable value at a fixed t position |
| mode | local / coupled / global | three ways to build the curve |
| tension | coupled mode blend | 0 = fully coupled/loose, 1 = behaves like local |
| periodic | the curve loops | knot[n] = knot[0], seam obeys same continuity |

### measurement words

| word | what it means | notes |
|------|--------------|-------|
| derivative ladder | the stack of f, f', f''... visualized | core display of the instrument |
| break | a discontinuity at a join | at a specific derivative order |
| continuous | no break at this order | the complement of break |
| reach zone | how far a knot's influence extends | probed by displacing the knot |
| influence | how much a drag changed the curve | compared to baseline snapshot |
| baseline | snapshot before a drag | for comparison / ghost overlay |

### output words

| word | what it means | notes |
|------|--------------|-------|
| medium / domain | an output channel | position, hue, pitch, etc. |
| driver | which derivative order feeds a channel | the d:N picker |
| unipolar / bipolar | [0,1] or [-1,1] | bipolar pins zero to center |
| channel | a single output stream | the actual value going to a medium |
| gate | discrete event on feature crossing | knot gate, peak gate, zero-cross gate |
| fused voice | three oscillators sharing one fundamental | pitch, amplitude, timbre attributes |

### UI words

| word | what it means | structural? |
|------|--------------|-------------|
| playhead | moving position during playback | no — animation timing |
| combs | curvature visualization hairs | no — rendering option |
| ghost | before-drag curve overlay | no — comparison aid |
| heat | influence shown as red tint | no — visualization mode |
| tug | slope-target shift arrows | no — drag feedback |
| detail | how much is shown (clean/standard/full) | no — rendering density |

---

## what feels redundant or misnamed

- **medium vs domain**: used interchangeably. the code says "domain" (DOM class names, `updateDomains()`), the UI text says "medium" (page title: "continuity across mediums"). in math, domain means INPUT space. here it's used for OUTPUT channels. confusing.
- **derivative ladder**: strong image but "ladder" implies vertical climbing with rungs. the display IS vertical, and you DO climb. but "rung" was dropped from TS vocab. is "ladder" still ok here? it's not the same word, but it's the same metaphor. the ladder is native to this instrument though — it literally shows stacked derivative orders. maybe keep.
- **fused voice**: "fused" implies something merged into one. what actually happens: three oscillators share a base frequency, each attribute (pitch/amplitude/timbre) driven by a derivative. they aren't fused — they share a parameter.
- **order**: standard spline term. correct. but also means many things in general english. within this instrument it's unambiguous.
- **break**: clear and accurate. a break is a break. keep.

## what might be missing

- a word for the **output routing as a whole** — the configurable mapping from derivative orders to output channels. it's a signal chain. each derivative can be routed to any medium. the routing IS the instrument's thesis: same break, visible in different mediums.
- a word for the **perceptibility boundary** — at C0-C2 breaks are perceptible (position, velocity, acceleration). at C3+ breaks are in derivatives nobody perceives directly (jerk, snap, crackle, pop). the instrument makes imperceptible breaks perceptible by routing them to perceptible channels. that phenomenon has no name.
- the **three modes** need better framing. "local" means independent segments. "coupled" means globally solved. "global" means one polynomial. these are three points on a spectrum from fully independent to fully dependent. the tension slider in coupled mode IS that spectrum. but the mode selector jumps between discrete points while tension slides within one.

---
