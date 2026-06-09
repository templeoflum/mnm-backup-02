# sketch — spline-routing — f0 — 20260607-160000

channel system. the derivative-to-output mapping. baseline.

---

## what it does

maps derivative values to perceptible output channels. each channel has a source picker: which derivative order feeds it. the same curve, the same breaks, made visible/audible through different channels. this is the instrument's thesis: routing makes imperceptible breaks perceptible.

## the drivers

`drivers{}` — maps channel name to derivative order. default: all channels read f(0) (the value itself).

```javascript
drivers = {
  position:0, size:0, rotation:0, opacity:0, skew:0,    // transform
  hue:0, bright:0, sat:0,                                // appearance
  zc:1,                                                   // zero-cross gate source
  pitch:0, amp:0, timbre:0                                // sound
}
```

the source picker (d:N scrub) lets the user set any channel to read any derivative order. drive a channel with the broken order and the break appears in that channel.

## normalization

`computeRanges()` — samples each derivative order at 240 points, caches min/max.

`chan(key, t)` — returns [0,1]:
- unipolar: (raw - min) / (max - min). fills the observed range.
- bipolar: (chanSigned + 1) / 2. zero pinned to 0.5.

`chanSigned(key, t)` — returns [-1,1]:
- scales by max(|min|, |max|). zero-preserving. the signal's real zero (flat slope, no curvature) stays at 0 regardless of range asymmetry.

## the 13 channels

### transform family (spatial)

| channel | display | what it drives |
|---------|---------|---------------|
| position | ball x-position in a box | horizontal displacement |
| size | circle diameter | grows/shrinks |
| rotation | bar angle | rotates ±180° (bipolar) or 360° (unipolar) |
| skew | box skew+scale transform | CSS skewX + scaleY |

### appearance family (visual)

| channel | display | what it drives |
|---------|---------|---------------|
| hue | color swatch | HSL hue 0–330° |
| brightness | grayscale swatch | lightness 10–90% |
| saturation | purple swatch | saturation 0–100% |
| opacity | checkered box with overlay | opacity 0.06–1.0 |

### gate family (discrete events)

| channel | display | what triggers it |
|---------|---------|-----------------|
| knot gate | flash dot | playhead crosses a join boundary |
| peak gate | flash dot | f' changes sign (local max/min) |
| zero-cross gate | flash dot | chosen derivative crosses zero |

gates are binary: they flash when a feature is crossed between previous and current playhead position. the zero-cross gate has its own source picker.

### sound family (audio)

| channel | display | what it drives |
|---------|---------|---------------|
| pitch | colored circle | base frequency 160–680 Hz |
| amplitude | glowing circle | oscillator gain |
| timbre | rounded/blurred square | lowpass filter cutoff 250–4250 Hz |

## the voice

three oscillators sharing one base frequency:
- osc1: sine → gain → master
- osc2: triangle → gain (amplitude-modulated) → master
- osc3: sawtooth → lowpass filter (timbre-modulated) → gain → master

Web Audio API. `audioOn()` creates the audio graph. `setTone(t)` reads pitch/amp/timbre channels and updates frequencies, gains, filter cutoff. `toneOff()` fades master gain to 0.

waveform trace: canvas strip showing recent pitch channel history (last 120 samples).

## polarity

toggle between unipolar [0,1] and bipolar [-1,1].

unipolar: zero of the derivative may land anywhere in the range. good for channels where the absolute value matters (size, opacity).

bipolar: zero is pinned to center (0.5). good for channels where the sign matters (rotation: positive = clockwise, negative = counterclockwise).

## what it depends on

- curve engine: `derivAt()` for evaluation
- normalization: `computeRanges()` needs to be called after any curve change

---
