# frame — beam · fades · trace — f1 — [blessed · live]

Replace the heavy HDR phosphor renderer with a **lightweight beam**: a stroked trace with canvas-fade persistence. Drop the glow/phosphor/bloom, keep just enough persistence·decay to dial in the scanning math. The real subject is the **beam mechanics** ([[frame.sweep-locks-turns]]), not the look.

## §1 — agreement · at a glance
- **the realization (operator 20260622):** the HDR phosphor beam ([[frame.beam-traces-wake]], `beam.js`) is too heavy for JS — every frame it lays a gaussian splat with a per-cell `exp()` at every pixel of the path, sums a float accumulator, decays the whole buffer, and blurs a bloom pass. That cost IS the high-speed halt. Making *that* fast is a Rust/WASM job, not a JS one.
- **the move:** a **lightweight beam** honoring the same `tick(samples, latch)` contract (so the scope wiring is untouched), rendered the cheap way — **canvas-fade persistence:** each frame, fade the whole canvas down by the decay (one low-alpha `fillRect` of the background), then stroke the new swept segment as a thin line. No per-pixel `exp()`, no float accumulator, no bloom. Cost is a fade + a stroke — frequency-independent. **Persistence = the fade rate; decay = how fast the trail dims.**
- **what we keep:** the turn-locked sweep math (slices 1–3 of [[frame.sweep-locks-turns]]) — that IS "the beam mechanics" the operator wants to focus on. This frame only swaps what *renders* the swept path.
- **park, don't delete:** `beam.js` (the crystallized HDR phosphor) stays as the reference for an **eventual Rust/WASM port** — where per-pixel phosphor becomes cheap and the real glow returns. We stop *using* it; we don't throw the work away.
- **persistence default goes WAY down** (operator: 0.45s is too long a trail) — a short trail for dialing in the scan; tune by eye.
- **NOT this frame:** the Rust port itself (future) · the sweep math (its own frame) · the trigger · XY-mode figures (the fade renderer must still serve them — verify, don't redesign).
- **triad `beam · fades · trace` — BLESSED** (operator 20260622).

## §2 — plan · slices & rungs
status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked

**slice 1 — the lightweight renderer**  ✓ done · (`82478c6`)
- ✓ `src/beam-fade.js` — drop-in `createBeam` (same 13-key contract as `beam.js`, parity-checked), so it swaps with zero scope changes.
- ✓ `tick(samples, latch)`: fade canvas by `1 − exp(−dt/τ)`, then stroke the new samples; pen-up on flyback (x backward jump); frozen → hold.
- ✓ knobs mapped: `setPersistence`→fade τ (default 0.1s) · `setSpot`→stroke width · `setColor`→stroke colour · `setExposure`→stroke alpha. Not wired yet (slice 2 swaps the import); verified by syntax + contract parity.

**slice 2 — wire it as the 'beam' readout (park the heavy one)**  ○
- ○ point `scope.js`'s beam import at the light renderer; `beam.js` stays on disk, unused, with a header note → the Rust-port reference. The 'line' readout (crisp, no persistence) is unchanged; 'beam' now = the light fade renderer.
- ○ confirm XY mode + multi-beam layouts still render through the new contract.

**slice 3 — persistence default down + range retune**  ○
- ○ lower the persistence default (~0.1s, by eye) and retune the `persist` cfg range for the fade renderer (the old range was tuned for HDR re-hit accumulation, a different feel).

**slice 4 — verify**  ○
- ○ bench/eye: the sweep renders cheap, **no halt at high speed** (the whole point), persistence + decay read right (short trail dials cleanly), the crawl→standing range from [[frame.sweep-locks-turns]] still reads.
- ○ **operator live eye-test** (WebGPU heart runs live only — [[kit-heart-webgpu-headless]]). Crystallize once it blesses.

## §3 — trace · DAG & status
```
slice1 light renderer ──→ slice2 wire as 'beam' (park heavy) ──┐
slice3 persistence down ───────────────────────────────────────┼─→ a cheap beam: real-time at any speed, basic persistence/decay
slice4 verify ─────────────────────────────────────────────────┘   sweep math rides on top, look set aside
```
- **status:** **blessed · live.** Triad blessed; building slice 1. folds [[frame.beam-fades-trace.f0]].
- **supersedes [[frame.beam-holds-speed]]:** that frame was "optimize the heavy beam"; we're replacing it instead, so its cost-bounding goal dissolves (the light beam is cheap by construction) and the "make phosphor fast" goal moves to the Rust port. → mark beam-holds-speed parked/superseded.
- **parks [[frame.beam-traces-wake]]:** the crystallized HDR renderer becomes the Rust-port reference, not deleted.
- **carries [[frame.sweep-locks-turns]]:** slices 1–3 built (turn-locked sweep + rate knob); 4–6 (trigger anchor, verify) continue, now rendered by the light beam.
- **touches (planned):** new `beam-fade.js` · `scope.js` (import swap) · `workbench.js` (persistence default + range). `beam.js` untouched (parked).
- mode: clerk · builder window · `.live`.
