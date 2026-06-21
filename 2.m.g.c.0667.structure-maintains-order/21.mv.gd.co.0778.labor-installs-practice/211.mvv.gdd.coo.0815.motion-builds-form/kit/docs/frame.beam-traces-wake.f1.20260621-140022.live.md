# frame — beam · traces · wake — f1 — [building · live]

Build the reusable analog-beam renderer (clock → `(advance, latch)` → light) and wire it into the scope as a new readout type, the connected-line kept alongside.

## §1 — agreement · at a glance
- **triad `beam·traces·wake` — kept** (operator word 20260621).
- The clock→renderer interface is **`(advance, latch)` and nothing more** — the load-bearing contract; protected above all. (freeze = `advance 0`; step = `advance` one quantum.)
- The beam is a **reusable module** (clock domain → contract → render domain). Consumers: the kit **scope** (time-series), the **Trajectoscope** (projected n-D curve), the **phosphor-synth**.
- The scope **keeps the connected-line as one readout type**; the analog phosphor-beam is a **new type alongside it**, not a replacement.
- Render domain is a **measurement pipeline that outputs light**: never invent structure the signal lacks, never hide structure it has.
- **Persistence is a PHOSPHOR property — glow-time in wall-clock SECONDS, its own quality, independent of beam speed/timebase** (operator-corrected 20260621). The design-doc's arc-length keying was wrong: it made fast signals fade faster, which is backwards. Wake length = glow-time × beam speed (a consequence, not the knob). Freeze pauses the decay clock so the picture holds. The doc is a dock proposal, not ground — I shouldn't have adopted its framing unchecked.
- **Linear-HDR additive** accumulation, tone-map **once**; glow is the aperture (visitation density), **not blur**.
- **scroll vs sweep = a SETTING** (operator word) — both shipped, 'scroll' default. 'sweep' retraces a fixed screen (old sweeps glow until they fade); trigger/hold-off to *lock* figures still deferred (slice 6+).
- **layout = a SETTING**: 'stack' (vertical lanes) | 'row' (2-col grid, odd-last spans full width — 1=full · 2=side-by-side · 3=two-on-top+one-below · 4=2×2) (operator spec 20260621).
- **cut = slices 1–5** (spine → glow → persistence → freeze → scope-integration). strobe / hold-off / trigger / color / 2nd-beam **deferred** (operator word).
- **4 channels** confirmed (operator word).
- **trajectory-only machinery OUT of this build** — projection-last live matrix · n-D-dominance color · dual-projection second-beam belong to the Trajectoscope consumer (operator word).
- 4-channel output **confirmed working** (operator 20260621).

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

**slice 3 — persistence (PHOSPHOR glow-time, seconds)**  ▸ built · awaiting eye-test  ·  (51c16c6 → fixed 2bce87d)
*was framed wrong (arc-length-keyed); corrected — persistence is its own quality, wall-clock seconds, speed-independent.*
- ✓ decay = `exp(−dt/tau)`, tau = glow seconds; frame-rate independent; freeze pauses the decay clock
- ✓ regimes comet / breathing / standing (`REGIME`, seconds); a **persist scrub** (0.05–3 s) exposed in the scope inspector for hand-tuning

**slice 4 — freeze + sample-step**  ▸ built · awaiting eye-test  ·  (51c16c6 / 6010dfe)
- ✓ freeze = `advance 0`, field holds, view stays live; head is the inspection cursor
- ✓ sample-step = one quantum (`scope.step()` / `beam.step()`); feature-step is predicates added later

**slice 5 — scope integration: readout-type + channels**  ▸ built · awaiting eye-test  ·  `scope.js` + `workbench.js` (6010dfe)
- ✓ readout-type selector: **connected-line** (current) | **analog-beam** (new), persisted
- ✓ scope feeds its time-series value through the beam, one sample/frame; line readout unchanged
- ✓ up to **4 channels** (lanes + selector + persistence) — confirmed working

**slice 5b — scope display settings (layout + timebase mode)**  ▸ built · awaiting eye-test  ·  `beam.js` + `scope.js` + `workbench.js` (3abae96)
goal: scroll/sweep and stack/row as live settings on the scope (operator-asked, done now — not deferred).
- ✓ **timebase mode** scroll | sweep selector; sweep = head sweeps a fixed screen + retrace (beam.js second emit path)
- ✓ **layout** stack | row selector; row = 2-col grid, odd-last spans full width (`cellRects`, drives both line + beam)
- ✓ both persisted; per-cell beams sized + refit on layout/channel/resize

**slices 6–8 — DEFERRED** (strobe + ratio-anchoring · hold-off + trigger · head/trail split + color). Out of this cut; sweep mode (§1 OPEN) lands here.

*TS-only, NOT in this build: projection-last live matrix · second-beam dual-projection · feature-step predicate catalog.*

## §3 — trace · DAG & status
```
slice1 spine ─→ slice2 glow ─→ slice3 persistence(FIXED) ─→ slice4 freeze ─→ slice5 scope-integration ─→ slice5b layout+mode
   [all CODE-BUILT — 51c16c6 / 6010dfe / 2bce87d / 3abae96 — awaiting operator eye-test]
                                                                         └─ 6/7/8 deferred (strobe · hold-off+trigger · head/trail+color)
```
- **status:** building · live — slices 1–5 + 5b built + committed, syntax-clean (no `tsc` in env; net not gate). **Awaiting operator EYE-TEST** — the gate, never a green rig. Persistence corrected to phosphor glow-time; scroll/sweep + stack/row are live settings; 4ch confirmed working. Re-look after the fix.
- **touches:** `kit/src/beam.js` (new) · `kit/src/scope.js` (N-channel + readout + layout/mode) · `kit/src/workbench.js` (selectors + persist scrub + persistence). `kit/src/clock.js` untouched (the beam's clock domain leans on it only at slice 6 strobe).
- **lineage:** folds [[frame.beam-traces-wake.f0]]. f1 is the **living tracker, edited in place** (operator word 20260621 — f0 preserves the record, so corrections + new rungs land in f1 directly, not a new fold).
- mode: builder window · `.live` while building (crystallize on close, after the eye-test blesses the look).
