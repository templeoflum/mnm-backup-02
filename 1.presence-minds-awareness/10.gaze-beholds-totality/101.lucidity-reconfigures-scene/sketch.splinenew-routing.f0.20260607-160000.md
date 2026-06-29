# sketch — splinenew-routing — f0 — 20260607-160000

the routing toy. channels + source pickers + audio + gates. the instrument's thesis.

---

## what this toy is

a standalone HTML file. the curve + ladder + a panel of output channels, each driven by a configurable derivative order. drag joins, watch the break propagate through every channel at once. change a channel's source to the broken order and the break jumps into that channel. route an imperceptible derivative (jerk, snap) to a perceptible channel (position, hue, pitch) and the invisible break becomes visible/audible.

this is the third toy. it makes the instrument's thesis tangible: continuity is channel-dependent. the same break looks different in every channel because each channel maps the derivative differently.

## what it contains

### the curve + ladder engines (from splinenew-curve, splinenew-ladder)

everything from the first two toys: construction, modes, derivative stack, break detection, drag.

### source configuration

`sources{}` (renamed from drivers):
- maps each channel name to a derivative order
- default: all channels read f(0)
- source picker per channel: scrub or click to change

`refreshPickers()`:
- clamps all sources to max allowable order
- marks "hot" when a channel reads a broken derivative (source order > continuity order in independent/coupled mode)

### normalization

`computeRanges()`:
- samples each derivative order at 240 points, caches min/max
- called after any curve change

`chan(key, t)` → [0,1]:
- unipolar: range-normalized
- bipolar: max-abs normalized, zero at center

`chanSigned(key, t)` → [-1,1]:
- zero-preserving (scale by max-abs, not range)

### polarity toggle

unipolar [0,1] / bipolar [-1,1]. affects all channel monitors.

### the 13 channels

**transform:** position (ball x), size (circle diameter), rotation (bar angle), skew (CSS transform)

**appearance:** hue (color swatch), brightness (grayscale), saturation (purple gradient), opacity (checkered overlay)

**gates:** knot gate (join crossing), peak gate (f' sign change), zero-cross gate (chosen derivative crosses zero)

**sound:** pitch (frequency 160-680 Hz), amplitude (oscillator gain), timbre (filter cutoff 250-4250 Hz)

each channel has:
- a source picker (d:N) showing which derivative feeds it
- a specialty monitor (ball, swatch, bar, etc.)
- "hot" indicator when reading a broken derivative

### the voice

three oscillators, one shared base frequency:
- sine → gain → master
- triangle → gain (amplitude-driven) → master
- sawtooth → lowpass filter (timbre-driven) → gain → master

Web Audio API. `audioOn()`, `setTone(t)`, `toneOff()`.

waveform trace: canvas strip showing recent pitch history.

### playback

this toy needs playback — the channels animate over time as the playhead sweeps the curve. the gates fire when the playhead crosses features.

`loop(ts)`:
- advance phase: phase = (phase + dt × 0.28 × speed) % 1
- update all channels: `updateChannels(phase)` (renamed from updateDomains)
- update audio: `setTone(phase)`
- draw playhead across all ladder rows

play/pause button. speed scrub.

## what it does NOT contain

- no prediction (reach zones, hover preview) — assembly
- no influence analysis (ghost, heat, tug) — assembly
- no curvature combs — assembly
- no educational text — assembly
- no detail levels — assembly

## inputs

everything from the ladder toy, plus:

| control | what it does |
|---------|-------------|
| source pickers (d:N) | set which derivative feeds each channel |
| polarity toggle | unipolar / bipolar |
| play/pause | start/stop playback |
| speed | playback rate |

## outputs

- the ladder shows derivatives and breaks
- beside it, 13 channel monitors showing real-time values
- press play → the playhead sweeps, channels animate, sound plays
- change a channel's source to the broken order → the break appears in that channel (ball jumps, color shifts, tone cracks)
- switch all channels to f'' on a C1 spline → every channel shows the curvature break simultaneously. same break, thirteen different manifestations.
- change to C2 → the break retreats from f'' to f'''. channels reading f'' become smooth. channels reading f''' show the break.
- the voice makes breaks audible. a C0 break sounds like a click. a C1 break sounds like a pitch/amplitude corner. a C3+ break is inaudible unless routed to a perceptible channel.

## decisions needed

1. **channel layout**: same as current (two-column grid of monitors in the right panel)? yes — it works. 13 channels, 4 groups, compact.

2. **source picker max in single mode**: currently 9. is that enough? single mode is C-infinity so any order is meaningful. but higher orders oscillate more wildly. leaning toward keep 9 — beyond f^(9) the polynomial coefficients get noisy anyway.

3. **audio auto-start**: currently audio requires a user gesture (play button). keep — browsers require user gesture for AudioContext.

## dependencies

- **depends on**: splinenew-curve (engine), splinenew-ladder (derivative stack + breaks)
- **blocks**: splinenew-assembly (full instrument wires everything together)

## what "done" looks like

- open the file, see curve + ladder on the left, channel monitors on the right
- all channels defaulting to f(0) — smooth, no breaks visible in channels
- change position's source to f' on a C0 spline → the ball jumps at every join. "hot" indicator lights up.
- press play → channels animate, sound plays, playhead sweeps
- the knot gate flashes at every join crossing. the peak gate flashes at curve maxima/minima.
- change all channels to f'' on a C1 spline → every monitor shows the same curvature break simultaneously
- raise to C2 → all channels smooth. the break retreated to f'''.
- the visual + audio evidence makes the abstract concept of continuity order immediate and physical

---
