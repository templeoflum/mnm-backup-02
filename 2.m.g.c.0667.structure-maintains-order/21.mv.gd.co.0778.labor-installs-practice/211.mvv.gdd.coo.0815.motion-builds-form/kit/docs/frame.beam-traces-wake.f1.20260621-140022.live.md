# frame — beam · traces · wake — f1 — [building · live]

Build the reusable analog-beam renderer (real sweep timebase → dense sampling → accumulating phosphor light) and wire it into the scope as a new readout type, the connected-line kept alongside.

## §1 — agreement · at a glance
- **triad `beam·traces·wake` — kept** (operator word).
- The beam is a **reusable module** behind a thin per-frame contract: `tick(samples, latch)` — `samples` = the path points the beam swept since last frame (the scope generates them by sampling its signal densely along the sweep). Consumers: kit **scope** (time-series), **Trajectoscope** (n-D curve), **phosphor-synth**.
- The scope **keeps the connected-line as one readout type**; the analog beam is a new type alongside it.
- Render domain = **measurement pipeline that outputs light**: never invent structure the signal lacks, never hide structure it has. **Keep the crisp 1px precision** — realistic beam mechanics, not lost resolution (operator word).
- **MECHANISM (ground — from the operator's LBO-508A photos + research; I had it wrong twice, this is the corrected model):**
  - **Brightness = additive accumulation vs time-decay, NOT dwell.** Each hit deposits **fixed energy, uniform along the path (≈1px spacing)** — beam speed does not bias per-pass brightness; the field decays over wall-clock time. Where the beam **re-hits a spot before it fades**, energy piles up → bright. **slow ≠ bright.**
  - **The line forms at HIGH sweep speed** — many overlapping sweeps re-trace the same path before it decays → accumulates into a steady bright line. Low sweep → each point decays before re-hit → a moving dot, no line.
  - **Persistence = phosphor glow-time in wall-clock SECONDS** (its own quality, speed/timebase-independent): `exp(−dt/τ)`. Freeze pauses the decay clock.
  - **Real timebase**: X = sawtooth sweep at the TIME/CM rate, flyback reset. Signal sampled **densely (≈1px) along each sweep** — needs the signal as a **FUNCTION** (a sampler feed), not one value/frame.
  - **Color ramp** (from the photos): deep **green** at low energy → **white-cyan hot core** at high (energy desaturates toward white); a **two-scale glow** — tight core + soft green bloom.
- **Controls mirror the hardware** (operator word): **INTEN** (beam energy) · **FOCUS** (spot size) · **TIME/CM** (sweep rate). These replace the generic persist scrub as the beam's knobs.
- **sweep-only for now** — scroll mode **parked** until sweep is right (operator word).
- **4 channels** + **layout** (stack | row: 1=full · 2=side-by-side · 3=two-on-top+one-below · 4=2×2) — confirmed working, kept.
- **NOT modeled** (operator word): graticule / green-grey screen tint — background stays plain.
- **trajectory-only OUT** of this build: projection-last · n-D color · 2nd-beam (the Trajectoscope's).
- **Reference**: the operator's Leader LBO-508A photos at `kit/dev/oscillscope reference/png` — green→white core, soft bloom, dwell/turnaround brightness, the INTEN/FOCUS/TIME-CM knobs.

## §2 — plan · slices & rungs
status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked
*(the beam-MECHANISM slices 1–2 were built on the WRONG model — kept in git as the record — and are REBUILD. Persistence (3) is corrected. The scope scaffolding (4–5: freeze, readout, 4ch, layout) stands. Nothing closes until the operator's eye blesses it — green ≠ done.)*

**slice 1 — beam spine: real timebase sweep**  ▸ built · awaiting eye-test  ·  (bf74efb; prior 51c16c6 kept as the wrong-mechanism record)
goal: a sweep-only beam — X = sawtooth sweep, flyback reset; phosphor accumulates where the beam re-hits.
- ✓ scope drives a sawtooth sweep (`sweepX`, `sweepPeriod` = TIME/CM); feeds the beam {sweepX, signalY}; flyback = pen-up
- ✓ beam is mode-less (consumer owns the motion); scroll dropped (parked)
- ✓ ≈1px hit spacing along the path — crisp precision kept
- ○ **dense sub-frame sampling** (signal as a function) — still one-sample/frame; needed for signals faster than ~30 Hz (Nyquist of the frame rate). **DEFERRED until the look is blessed.**

**slice 2 — glow: accumulation + color + bloom**  ▸ built · awaiting eye-test  ·  (bf74efb)
- ✓ additive linear-HDR buffer; **fixed energy per 1px hit, uniform along the path** (slow ≠ brighter); repeated re-hits accumulate
- ✓ **color ramp**: deep green → white-cyan hot core (whitens where energy piles up)
- ✓ **two-scale glow**: sharp core PSF + soft bloom overlay; tone-map once
- ✓ spot = FOCUS · exposure = INTEN (params exist; the knobs themselves = slice 6)

**slice 3 — persistence (phosphor glow-time, seconds)**  ✓ done (mechanism) · awaiting eye-test  ·  (2bce87d)
- ✓ decay `exp(−dt/τ)`, τ = glow seconds, speed-independent; freeze pauses the decay clock
- → brightness is the **accumulation (slice 2) vs this decay** — repeated hits build up, unhit fades

**slice 4 — freeze + sample-step**  ▸ built · awaiting eye-test  ·  (51c16c6 / 6010dfe)
- ✓ freeze = no advance, field holds, view stays; step = one sweep-quantum

**slice 5 — scope integration: readout-type + channels + layout**  ▸ built (scaffolding) · awaiting eye-test  ·  (6010dfe / 3abae96)
- ✓ readout selector line | beam (line unchanged) · 4 channels · layout stack | row — persisted, confirmed working
- ○ rewire the beam feed to the **sampler** (slice 1) instead of one-value/frame

**slice 6 — beam knobs (mirror the hardware)**  ○ todo
goal: the scope's beam controls = **INTEN** (energy) · **FOCUS** (spot) · **TIME/CM** (sweep rate), replacing the generic persist scrub.
- ○ three controls wired to beam params; persisted

**DEFERRED** (later): strobe + ratio-anchoring · hold-off + trigger (lock the figure) · head/trail split. **scroll mode** parked here too. *TS-only:* projection-last · n-D color · 2nd-beam.

## §3 — trace · DAG & status
```
slice1 sweep (built) ─→ slice2 accumulation+color+bloom (built) ─→ slice3 decay (done)
   slice4 freeze (built) · slice5 readout/4ch/layout (built) ─→ slice6 knobs (INTEN/FOCUS/TIME-CM)
   [deferred: dense sub-frame sampling · strobe · hold-off+trigger (lock figure) · head/trail · scroll mode]
```
- **status:** building · live. The beam MECHANISM (1–2) is **rebuilt to the corrected model** (bf74efb) — sawtooth sweep, per-hit accumulation vs time-decay, green→white color + two-scale bloom — and committed. Persistence (3) corrected; scaffolding (4–5: freeze/readout/4ch/layout) stands. **AWAITING EYE-TEST** on the beam look (the gate, never a rig). Remaining: dense sub-frame sampling (slice 1 rung, deferred) + the INTEN/FOCUS/TIME-CM knobs (slice 6).
- **touches:** `kit/src/beam.js` (rewrite mechanism — sweep + per-hit accumulation + color) · `kit/src/scope.js` (sampler feed + knobs, sweep-only) · `kit/src/workbench.js` (INTEN/FOCUS/TIME-CM controls + signal sampler) · reference photos `kit/dev/oscillscope reference/png`.
- **lineage:** f1, **edited in place** (operator word — f0 preserves the record). The prior beam build (51c16c6 / 3abae96) stays in git as the wrong-mechanism record.
- mode: builder window · `.live` while building (crystallize on close, after the eye blesses it).
