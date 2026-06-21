# baton — clerk — f19

closed: 20260621-200126 · gait: [hold] (scope/beam arc deep; operator put it down — **next session = the RATIO dense-path fix, then bless the trigger**) · folds [[baton.clerk.f18]]

## what landed (the scope/beam arc — all committed)

- **`.shelf` marker** (re-entry latency root): the lattice sweep no longer deep-walks reference material (`000` quarantine + mythic-library shelved; record kept, just not scanned). server.py honors `.shelf` like `.unit`. **Needs a `lattice.bat` restart to go live.** Lazy-sweep redesign booked-deferred (D4 on the schedule).
- **beam-traces-wake — CRYSTALLIZED** (`kit/src/beam.js`): the analog phosphor-beam renderer. Additive-HDR accumulation + wall-clock decay; FIXED deposit kernel (focus drives bloom only → cheap); brightness = re-hit accumulation (line forms at HIGH speed, NOT dwell); persistence = phosphor glow-seconds; pen-up on flyback only. Thin `tick(samples, latch)` contract → reusable.
- **scope-shows-mode — CRYSTALLIZED** (`kit/src/scope.js` + workbench): the instrument. Buffered-trigger-window scan (teropa pattern, stateless/phase-locked), live-wired to the **heart-as-function** dense path (`setSignal(fn)` → sub-frame sampling, no walk); square cells, stack/row/2-up/2×2 layout, dedicated scope panel, XY mode, uncapped knob config; 60fps with 4 beams.
- **trigger-steadies-beam — BUILT, `.live`** (`77cfac4`): real trigger — level/slope/hold-off/hysteresis/mode(auto|normal), all configurable + persisted. Bench-verified: offset sine locks at level 0.8 (0.00%) where 0.5 can't.

## state (live threads — 3)

- **trigger-steadies-beam — `.live`, two things owed before crystallize.** (1) **RATIO READOUT JUMPY** — operator's verdict: output readouts steady, but the **ratio jumps**. Cause = the ratio node falls to `focus()`'s **per-frame fallback** (it's neither a readout nor a driven param/value-node, so the `setSignal(fn)` branches miss it → it walks). Fix = one more branch in `focus()` (workbench.js) reconstructing the ratio's **φ as a function of turns** (same shape as the param branch; the ratio's φ is pure over turns via ratio.js). (2) hold-off/hysteresis built but **not stress-verified** — my deterministic harm/jit signals didn't reproduce the shimmer; needs the operator's real busy signal.
- **`.shelf` fix awaits a `lattice.bat` restart** to take effect (re-entry latency stays until then).
- **lazy-sweep redesign (D4)** booked-deferred on the schedule.

## next pull (ONE)

**Wire the ratio node to the dense standing path** (the `focus()` branch in workbench.js → reconstruct φ(turns) like params/readouts do) → that kills the ratio jumpiness. Then hand to the operator for the **live eye-test** (ratio steady? busy signals quelled by hold-off/hysteresis?) → crystallize trigger-steadies-beam. Headless freezes the WebGPU heart, so the live ratio test is **operator-eye only**; bench (`dev/scope-bench.html`) is for synthetic-signal calibration.

## snags

- **ratio jumpy** (above) — the standing fix, next pull.
- **headless can't run the WebGPU heart** ([[kit-heart-webgpu-headless]]) — dynamic heart behavior is operator-eye-only; calibrate trigger/beam on the synthetic bench, not the live heart.
- **`.shelf` restart pending** (re-entry latency until `lattice.bat` rerun).
- **run the rig SPARINGLY** — hijacks the operator's mouse ([[kit-rig-run-sparingly]]).
- **pre-existing uncommitted, NOT mine (untouched):** `201/manifest.live.md`, `222/log.session.f13/f14/f15`, branch-0 `quarantine/` + `mythic library/`.

## wants-word

- the ratio fix (confirm the direction: wire φ(turns) to the dense path — same as params).
- bless trigger-steadies-beam **after the live eye-test** (do NOT crystallize unprompted).
- whether the `.shelf` restart happens this/next session.

## carry

- **Feel/display changes are operator-gated by EYE, never a green rig** ([[checks-are-a-net-not-a-gate]]). Bench-green = calibrated, NOT blessed.
- **The dense path is the rule**: anything focused onto the scope must reconstruct its signal as a **function of turns** (readouts ✓, driven params/value-nodes ✓, **ratio ✗ — the gap**); the per-frame fallback walks/jumps.
- **No outside deps, no installs without a proposal** (the pillow-heif miss — uninstalled, owned).
- **No caps on configurable inputs** ([[dont-hardcap-configurable-inputs]]) — defaults yes, ceilings no; rely on the setter's internal clamp.
- **Resume:** read this baton → wire the ratio dense-path branch → hand for the live eye-test → crystallize.
