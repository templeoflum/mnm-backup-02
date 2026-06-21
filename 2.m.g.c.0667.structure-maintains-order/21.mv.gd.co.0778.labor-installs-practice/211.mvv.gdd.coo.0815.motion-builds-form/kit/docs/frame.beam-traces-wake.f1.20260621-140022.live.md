# frame — beam · traces · wake — f1 — [building · live]

Build the reusable analog-beam renderer (clock → `(advance, latch)` → light) and wire it into the scope as a new readout type, the connected-line kept alongside.

## §1 — agreement · at a glance
- **triad `beam·traces·wake` — kept** (operator word 20260621).
- The clock→renderer interface is **`(advance, latch)` and nothing more** — the load-bearing contract; protected above all. (freeze = `advance 0`; step = `advance` one quantum.)
- The beam is a **reusable module** (clock domain → contract → render domain). Consumers: the kit **scope** (time-series), the **Trajectoscope** (projected n-D curve), the **phosphor-synth**.
- The scope **keeps the connected-line as one readout type**; the analog phosphor-beam is a **new type alongside it**, not a replacement.
- Render domain is a **measurement pipeline that outputs light**: never invent structure the signal lacks, never hide structure it has.
- Wake + persistence + sweep keyed to **arc-length-behind-head**, not wall-clock.
- **Linear-HDR additive** accumulation, tone-map **once**; glow is the aperture (visitation density), **not blur**.
- **cut = slices 1–5** (spine → glow → persistence → freeze → scope-integration). strobe / hold-off / trigger / color / 2nd-beam **deferred** (operator word).
- **4 channels** confirmed (operator word).
- **trajectory-only machinery OUT of this build** — projection-last live matrix · n-D-dominance color · dual-projection second-beam belong to the Trajectoscope consumer (operator word).
- **OPEN — scroll vs sweep?** the beam ships in **scroll** mode (head at the right edge, wake ages left — the in-place upgrade of the current scope). **sweep** (head sweeps a fixed screen, retrace, figures) is the more classically-analog look and where strobe/hold-off live (slice 6+). First feel-question for the eye-test. (does not block; informs slice 6)
- **OPEN — per-channel output-select?** which signal feeds each of the 4 channels. The rendering supports 4 lanes; *feeding* 3–4 needs a per-channel source picker — a direct-manipulation choice held for the operator. (blocks channels 3–4 being useful)

## §2 — plan · slices & rungs
status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked
*(slices 1–5 are CODE-BUILT and committed; they stay ▸ until the operator's eye blesses the look — green ≠ done, the feel-gate closes them.)*

**slice 1 — the beam module spine**  ▸ built · awaiting eye-test  ·  `kit/src/beam.js` (51c16c6)
- ✓ `beam.js` — clock-agnostic; `tick(samples, latch)` is the whole contract
- ✓ head = latest sample; wake = field decaying by **arc-length-behind-head**
- ✓ arc-length sweep: arc read from sample geometry (**never one-per-frame**); chords never exceed the spot
- ✓ verify path: held = flat bright line, swept = curve (by construction; eye-test pending)

**slice 2 — honest glow (HDR accumulation)**  ▸ built · awaiting eye-test  ·  (51c16c6)
- ✓ additive accumulation buffer in **linear** space (Float32)
- ✓ per-sample gaussian PSF; **spot size = the displayed resolution quantity** (`spotSize()`)
- ✓ tone-map once (Reinhard-ish); chords never exceed the spot (honesty rule)

**slice 3 — persistence (arc-length-keyed)**  ▸ built · awaiting eye-test  ·  (51c16c6)
- ✓ decay keyed to arc-length advanced (frame-rate independent)
- ✓ three regimes available: comet / breathing / standing (`REGIME`) — *UI labels pending (eye-test)*

**slice 4 — freeze + sample-step**  ▸ built · awaiting eye-test  ·  (51c16c6 / 6010dfe)
- ✓ freeze = `advance 0`, field holds, view stays live; head is the inspection cursor
- ✓ sample-step = one quantum (`scope.step()` / `beam.step()`); feature-step is predicates added later

**slice 5 — scope integration: readout-type + channels**  ▸ built · awaiting eye-test  ·  `scope.js` + `workbench.js` (6010dfe)
- ✓ readout-type selector: **connected-line** (current) | **analog-beam** (new), persisted
- ✓ scope feeds its time-series value through the beam, one sample/frame; line readout unchanged
- ✓ up to **4 channels** (lanes + selector + persistence)
- ○ **per-channel output-select** — held for the operator (§1 OPEN); ch 3/4 show flat until wired

**slices 6–8 — DEFERRED** (strobe + ratio-anchoring · hold-off + trigger · head/trail split + color). Out of this cut; sweep mode (§1 OPEN) lands here.

*TS-only, NOT in this build: projection-last live matrix · second-beam dual-projection · feature-step predicate catalog.*

## §3 — trace · DAG & status
```
slice1 spine ─→ slice2 glow ─→ slice3 persistence ─→ slice4 freeze ─→ slice5 scope-integration
   [all CODE-BUILT, committed 51c16c6 / 6010dfe — awaiting operator eye-test]
                                                                         └─ 6/7/8 deferred (sweep mode lands here)
```
- **status:** building · live — slices 1–5 built + committed, syntax-clean (no `tsc` in env; net not gate). **Awaiting operator EYE-TEST on the beam look** — the gate, never a green rig. First feel-question: scroll vs sweep (§1 OPEN). Then per-channel output-select.
- **touches:** `kit/src/beam.js` (new) · `kit/src/scope.js` (N-channel + readout type) · `kit/src/workbench.js` (selectors + persistence). `kit/src/clock.js` untouched (the beam's clock domain leans on it only at slice 6 strobe).
- **lineage:** folds [[frame.beam-traces-wake.f0]] (OPENs resolved → agreements; rungs built). f0 stays as the record.
- mode: builder window · `.live` while building (crystallize on close, after the eye-test blesses the look).
