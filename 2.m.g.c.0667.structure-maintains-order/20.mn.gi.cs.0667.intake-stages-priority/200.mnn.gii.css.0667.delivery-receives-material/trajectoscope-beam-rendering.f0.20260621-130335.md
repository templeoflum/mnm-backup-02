# Trajectoscope — Beam Rendering Mechanics

*Proposal for Track 3: the beam/render and timebase layer. Live-sweep, freezable, steppable. Instrument-first (no signal input yet).*

---

## 0. Governing principle

The Trajectoscope's identity is **making high-dimensional trajectory-structure visible with fidelity.** The beam renderer therefore has one prime directive, and every choice below is checked against it:

> **The render must never invent structure the trajectory doesn't contain, and never hide structure it does.**

A CRT's phosphor is a physical accident you inherit. Yours is *designed*, which makes you responsible for what it asserts. So the renderer is built as a **measurement pipeline that happens to output light** — beauty is the byproduct of every stage being honest about the trajectory, not a layer painted on top. Where honesty admits two valid readings, both are offered as switchable modes (the same self-similar-baseline / deformation-mode duality the instrument already runs on everywhere else).

---

## 1. Architecture: two clocks, one thin interface

The whole timebase track is the relationship between **two independent clocks**:

- **Trajectory clock** — how fast the write-head walks the curve (the *sweep rate*).
- **Observation clock** — how fast the display latches what it shows (the *strobe / refresh*).

Every classic scope behavior lives in the *beat* between them. The renderer is deliberately **dumb about time**: the clock domain owns all timing, and talks to the renderer through exactly **two values per frame**:

1. `advance` — how much **arc-length** the head moved since the last frame.
2. `latch` — did the strobe fire this frame (boolean).

That two-channel contract is the load-bearing design decision. Keep it that thin and either side can be rebuilt without touching the other, and freeze/step fall out for free (freeze = `advance 0`; step = `advance one quantum`, `latch` forced).

```
[CLOCK DOMAIN]                          [RENDER DOMAIN]
 sweep rate ┐                            PSF / spot size
 strobe     ├─→ (advance, latch) ──────→ accumulation buffer
 hold-off   │                            persistence decay
 trigger    ┘                            projection (final lens)
```

---

## 2. The trajectory clock (sweep)

The head advances in **arc-length per second**, not frames per sample. Each frame asks "how much arc-length elapsed since I last drew?" and emits exactly that many beam samples — possibly 3, possibly 3000. **Never one-sample-per-frame**: binding samples to frames makes the trajectory's apparent speed change when the GPU stutters, which is the instrument lying.

**Sweep parameterization — switchable (two honest readings):**

- **Arc-length sweep (calibrated baseline).** Equal speed along the curve regardless of how the math parameterizes it. Shows pure *geometry*; beam intensity is uniform, so brightness carries no velocity bias.
- **Parameter sweep (math-native).** Equal steps in the formula's own variable — fast through some regions, slow through others. Shows the formula's intrinsic *rhythm*. Under accumulation this naturally brightens where the trajectory dwells (velocity-as-brightness), which is now an honest, chosen reading rather than an artifact.

This is where velocity-weighting lives — in the timebase, not smeared through the renderer.

---

## 3. The observation clock (strobe)

Independent of sweep rate: how often the display **latches**. This is the knob that operates the aliasing-as-optics regime the instrument was designed for.

- strobe : sweep period **rational** → frozen or slowly-walking figure (wagon-wheel).
- strobe : sweep period **irrational** → densifying, never-repeating motion.

**Critical integration:** sweep-rate and strobe-rate must each be **anchorable to the clock's ratio library.** Dial `strobe = sweep × 3/2` and watch precisely what a 3:2 relationship looks like, live. This is where the deep-ratio system and the timebase become the same instrument — the main payoff of the track.

**Two strobe modes (both shipped, per the "it's both" call):**

- **Stroboscopic** — strobe gates *display latching only*. Between flashes the trajectory keeps moving and the wake keeps decaying underneath; you see snapshots of a still-evolving trace caught where it lands. (What a real strobe light does.)
- **Sample-and-hold** — strobe gates the *whole clock domain*. Everything pauses between strobes, then advances as a block. (What a sampling scope does.)

They look and mean different things; default to **stroboscopic** (the arc-length-keyed wake holds anyway), expose the switch prominently.

---

## 4. Hold-off and trigger

**Hold-off** (first-class clock control, straight from scope lineage): how long the head waits before it may re-start a sweep. On a periodic/near-periodic trajectory this is what makes a closed loop *sit still* instead of crawling.

- hold-off tuned to the period → figure locks.
- hold-off slightly off → figure precesses slowly, and the **precession rate reads out how far off-period you are** (often more informative than a frozen figure).

**Trigger** — the condition that defines "sweep start," needed even with no external input:

- trajectory returns near its start point, **or**
- parameter wraps, **or**
- a chosen plane is crossed (the Poincaré section already in the instrument's DNA).

Trigger keeps the figure **phase-stable** instead of sliding. Design it now, signal-free: trigger is the exact seam where future input will plug in, so shaping it early means the input path is already there when you want it.

---

## 5. The write-head and the wake

Because the instrument is *live*, the trajectory is **emitted, not retrieved** — there's a "now" point (the head) and a receding past (the wake). Architecturally:

- **Head** = the current beam position (the latest emitted sample).
- **Wake** = a ring buffer of the last N emitted samples, **each tagged by arc-length-distance behind the head** (not by wall-clock age).

**Why arc-length and not seconds:** when you freeze, wall-time stops, but the object must stay fully visible. If persistence were wall-time-keyed, freezing would fade the whole trace to black while you study it. Keying the wake to *arc-length-behind-head* means **freeze holds the picture rock-steady**, and **step** advances the head one quantum while aging the wake one quantum — the trace grows forward and decays behind, one increment at a time. That's the fine-focus knob for time.

---

## 6. Persistence

Frame-rate-independent, keyed to arc-length-behind-head, exposed as a **timebase quantity** (because persistence-length relative to trajectory-period is the instrument's main "looking mode"):

- persistence ≪ period → a comet (moving point, short tail).
- persistence ≈ period → the figure draws and erases (breathing).
- persistence ≫ period → the full standing object.

Label these three regimes in the UI; they are the primary modes of seeing. Decay constant is explicit and time-real ("persistence = 0.5 s" means half a second regardless of render speed) — **never** a fading framebuffer of past *frames*, which couples persistence to frame rate and lies.

---

## 7. Glow / the accumulation buffer (the aperture)

Glow is **not a blur** — blur destroys exactly the fine structure the instrument exists to show (self-intersections, near-misses, touch-vs-pass-close). Instead:

- Maintain an **additive accumulation buffer in linear HDR** (not gamma/sRGB space — additive glow in sRGB lies about intensity where strokes overlap).
- Each beam sample deposits energy via a **point-spread function (PSF)** applied per-sample, additively.
- Tone-map **once**, at the end.

This gives correct intensity-grading "for free": crossings and revisits sum brighter, so **bright regions mean visitation density** — the invariant measure of the trajectory, displayed honestly.

**The PSF width is a calibration parameter = spatial resolution.** The beam's spot size determines whether two nearby features resolve or merge — it is the instrument's risetime/aperture. **Display the current spot size as a known quantity** so the operator knows the resolution limit they're looking at. Glow is the aperture, not decoration.

---

## 8. Head vs trail (two visual registers)

Render the instantaneous head **distinctly** from its wake — brighter, tighter PSF, possibly the one place "color-as-now" is honest. Knowing where the beam *currently is* is real information in a live instrument.

- On **freeze**, the head becomes the inspection cursor.
- On **step**, the head is the thing that visibly jumps one quantum.
- The trail behind it is the accumulation buffer doing its density work.

Don't let head and trail blur into one stroke — the separation *is* the liveness.

---

## 9. Color and the second beam (channels, not decoration)

Color is a **channel**; spend it on a true variable or don't spend it.

Honest hue assignments:
- **Phase along a periodic trajectory** → a closed loop reads as a clean color cycle; an open/quasiperiodic one reads as drifting hue. Makes **rational-vs-irrational ratio visible as color closure.**
- **Dominant high-D dimension(s) in the current projection** → color becomes the readout of the *hidden dimensions you can't show spatially*. (Recommended; it's the instrument's signature: color tells you where in n-D space the visible 3D arc is coming from.)

**Second beam** — reserve for showing the *same* trajectory under **two projections at once**: the calibrated reference projection in one color, the deformed/explored one in another. The deformation is then read directly as the **divergence between the two beams** — cross-channel coherence, rendered.

---

## 10. Projection last

Keep the entire pipeline — trajectory, arc-length, accumulation — in **true high-dimensional rotation-space coordinates** as long as possible, and apply projection-to-3D/2D as the **final step**, as a live-rotatable matrix.

- Never bake the projection early.
- The same verified trajectory is then inspectable from any angle without re-derivation.
- The projection stays a single, swappable, **characterizable** component — the objective lens.

---

## 11. Freeze and step (precise semantics)

- **Freeze** = clock stops issuing `advance`; accumulation buffer **stops decaying**; **projection stays live.** Signature capability: *frozen trajectory, still-rotatable view* — stop time, keep looking, walk around the captured arc.
- **Sample-step** = advance the head one beam-sample quantum (inspect fine local geometry). Build now.
- **Feature-step** = advance to the next *meaningful* event (self-crossing, cusp, period boundary, near-return). Build the head's advance as `advance until predicate true` from the start, even if the only predicate today is sample-step — then feature-step is just predicates added later. (Cheap legible version now; address left for the richer one.)

---

## 12. Honesty rules (the things that keep it an instrument)

- **Never draw a chord longer than the PSF spot size.** When the head moves fast and per-frame arc-length exceeds the sample budget, the beam would skip and draw straight lines the trajectory never took. Forbidden.
- **When sample-limited, degrade visibly.** Either spend the samples and let displayed sweep-rate drop, or refuse the long chords — and raise a telltale ("under-sampled," like a scope's bandwidth-limit light). Never silently connect distant points.
- **Show the resolution.** Current spot size and (optionally) effective sample density are displayed quantities, not hidden internals.

---

## 13. Suggested build order

1. **Write-head + arc-length sweep + ring-buffer wake**, frame-rate-decoupled. (The spine; everything hangs on `advance`.)
2. **Linear-HDR additive accumulation + per-sample PSF + tone-map.** Get honest glow/density first.
3. **Persistence keyed to arc-length-behind-head**, with the three labeled regimes.
4. **Freeze + sample-step**, projection kept live during freeze.
5. **Strobe (stroboscopic mode) + ratio-library anchoring** of sweep and strobe.
6. **Hold-off + internal trigger** (near-return / parameter-wrap / plane-cross).
7. **Sample-and-hold strobe mode** as the second switch.
8. **Head/trail register split**, then **color-as-hidden-dimension**.
9. **Second beam = dual projection** (reference vs deformed).
10. **Feature-step predicates.**

Each step is independently verifiable against a known trajectory (the torus and sphere you can already prove) — every working step is a calibration mark.

---

## 14. Open forks (deferred, deliberately)

- **Feature-step event set** — which trajectory events deserve to be "features." Hook is built; the catalog of predicates is open.
- **Eventual input** — when the instrument takes signal, it enters at the **trigger seam** (§4). The architecture already reserves the spot; the mapping (signal → sweep? → trigger? → deformation?) is a later track.
- **Color gamut honesty** — mapping n-D dominance to hue without implying false adjacency between dimensions that happen to land on similar hues. Worth a calibration pass later.

---

*Interface contract to protect above all else: clock → renderer is `(advance, latch)` and nothing more. If that stays thin, the three tracks never tangle.*
