# frame — beam · traces · wake — f0 — [forming · live]

Build the reusable analog-beam renderer (clock → `(advance, latch)` → light) and wire it into the scope as a new readout type, the connected-line kept alongside.

## §1 — agreement · at a glance
- The clock→renderer interface is **`(advance, latch)` and nothing more** — the load-bearing contract; protected above all. (freeze = `advance 0`; step = `advance` one quantum, `latch` forced.)
- The beam is a **reusable module** (clock domain → contract → render domain). Consumers: the kit **scope** (time-series, x=time/y=value), the **Trajectoscope** (projected n-D curve), the **phosphor-synth** — all feed the same module.
- The scope **keeps the connected-line as one readout type**; the analog phosphor-beam is a **new type alongside it**, not a replacement.
- Render domain is a **measurement pipeline that outputs light**: never invent structure the signal lacks, never hide structure it has.
- Wake + persistence + sweep keyed to **arc-length-behind-head**, not wall-clock — so freeze holds the picture rock-steady and step advances one quantum.
- **Linear-HDR additive** accumulation, tone-map **once**; glow is the aperture (visitation density), **not blur**.
- **OPEN — triad name?** `beam·traces·wake` (proposed) / other. The frame's name is yours to author. (blocks nothing; confirm)
- **OPEN — scope scope?** up to **4 channels** · **per-channel output-select** · **readout-type selector**. Confirm the channel count, and whether per-channel output-select lands in THIS push or later. (blocks slice 5)
- **OPEN — first-deliverable cut?** §13 is a 10-stage arc. Proposed cut for this push: **slices 1–5** (spine → glow → persistence → freeze → scope-integration) = the first shippable analog-beam readout; strobe / hold-off / trigger / color / 2nd-beam deferred. (blocks slice ordering)
- **OPEN — trajectory-only machinery OUT of the scope's scope?** projection-last live matrix · n-D-dominance color · dual-projection second-beam belong to the Trajectoscope consumer, not the kit scope. Confirm they're excluded here. (confirm)

## §2 — plan · slices & rungs
status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked

**slice 1 — the beam module spine**  ⊘ blocked (awaiting §1 OPENs: cut + scope confirm)
goal: a standalone `beam.js`: write-head + arc-length sweep + ring-buffer wake, frame-rate-decoupled, driven only by `(advance, latch)`.
- ○ new `kit/src/beam.js` — clock-agnostic; takes `(advance, latch)` per frame
- ○ head = latest emitted sample; wake = ring buffer tagged by **arc-length-behind-head** (not age)
- ○ arc-length sweep: emit beam-samples = arc-length elapsed (**never one-per-frame**)
- ○ verify against a known path (held = flat, swept = curve), independent of GPU rate

**slice 2 — honest glow (HDR accumulation)**  ○ todo
goal: linear-HDR additive buffer + per-sample PSF + tone-map once; crossings sum brighter.
- ○ additive accumulation buffer in **linear** space
- ○ per-sample PSF deposit; **spot size = the displayed resolution quantity**
- ○ tone-map at the end; **never draw a chord longer than the PSF spot** (honesty rule)

**slice 3 — persistence (arc-length-keyed)**  ○ todo
goal: decay keyed to arc-length-behind-head; three labeled regimes.
- ○ persistence as a timebase quantity, frame-rate-independent (real seconds, not framebuffer fade)
- ○ three regimes labeled: comet (≪period) · breathing (≈period) · standing (≫period)

**slice 4 — freeze + sample-step**  ○ todo
goal: freeze = `advance 0`, accumulation stops decaying; step = `advance` one quantum.
- ○ freeze holds the picture (no fade); head becomes the inspection cursor
- ○ sample-step built as **`advance until predicate`** (predicate = one quantum now; feature-step is predicates added later)

**slice 5 — scope integration: readout-type + channels**  ○ todo
goal: `scope.js` consumes the beam module as a readout type; connected-line stays; up to 4 channels.
- ○ readout-type selector: **connected-line** (current) | **analog-beam** (new)
- ○ scope feeds its time-series path (x=time advance, y=value) through `(advance, latch)`
- ○ up to 4 channels · per-channel output-select  *(pending §1 scope confirm)*

**slice 6 — strobe + ratio-library anchoring**  ○ todo  *(deferred candidate)*
goal: observation clock latches independent of sweep; anchor sweep & strobe to the ratio library (dial `strobe = sweep × 3/2`, watch it live — the deep-ratio × timebase payoff).
- ○ stroboscopic mode (latch gates display only) · ○ anchor strobe:sweep to the ratio system

**slice 7 — hold-off + internal trigger**  ○ todo  *(deferred candidate)*
goal: hold-off (a near-periodic figure sits still), trigger (near-return / param-wrap / plane-cross) for phase-stability — the seam where future signal input plugs in.
- ○ hold-off control · ○ internal trigger (signal-free now; reserves the input path)

**slice 8 — head/trail split + color-as-channel**  ○ todo  *(deferred candidate; partly TS-only)*
- ○ head rendered distinctly from wake (the separation **is** the liveness)
- ○ color = phase closure (rational/irrational visible as hue closure); n-D-dominance color is **TS-only**

*TS-only, NOT in this scope: projection-last live matrix · second-beam dual-projection · feature-step predicate catalog — they belong to the Trajectoscope consumer.*

## §3 — trace · DAG & status
```
slice1 spine ─→ slice2 glow ─→ slice3 persistence ─→ slice4 freeze ─→ slice5 scope-integration
                                                                         ├─ slice6 strobe   (needs ratio lib)
                                                                         ├─ slice7 hold-off+trigger
                                                                         └─ slice8 head/trail+color
                                                              (6/7/8 deferred — confirm the cut, §1)
```
- **status:** forming — grounded in the three 200 research docs (beam-rendering design · oscilloscope lineage · [archive-planning deferred]) + current `scope.js`. **Awaiting operator scope-confirm (the §1 OPENs) before building slice 1.**
- **touches:** `kit/src/beam.js` (new) · `kit/src/scope.js` (readout-type + channels) · `kit/src/clock.js` (the `(advance, latch)` clock domain — confirm wiring on build) · a readout-type selector in the scope UI.
- **lineage:** f0, no prior. Predecessor *context* (not a fold): the scope-autorange fix-forward + `incident.scope-autorange.f0` — the connected-line that the beam readout sits beside.
- mode: builder window · `.live` while building (tick rungs as you go; crystallize on close).
