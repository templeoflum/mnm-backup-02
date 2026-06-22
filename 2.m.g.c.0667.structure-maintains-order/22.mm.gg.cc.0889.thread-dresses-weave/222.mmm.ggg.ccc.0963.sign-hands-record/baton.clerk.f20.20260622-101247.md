# baton — clerk — f20

closed: 20260622-101247 · gait: [work] · folds [[baton.clerk.f19]]

**next session = ROOT-CAUSE the beam-fade blank-render regression, then re-wire slice 2.** The instrument works right now (heavy beam restored); the light-beam swap is reverted pending the fix.

## what landed this session (all committed)

- **ratio dense-path fix** (`5c2c81b`) — wired the ratio node's φ(turns) to the scope's dense path; operator eye-confirmed it stands (no jump). Closed the f19 next-pull.
- **the live-sweep reckoning** — operator realized the scope wasn't *sweeping*, just buffered-redrawing (the live sweep was deleted in scope-shows-mode under "fix" framing). Recorded: [[incident.live-sweep-removed]] (guard: surface subtractive tradeoffs). Memory added: [[surface-subtractive-tradeoffs]], [[single-seat-no-worktrees]].
- **frame.sweep-locks-turns f0→f1→f2** (blessed) — the REAL independent sweep, turn-locked. **Slices 1–3 BUILT + eye-confirmed:**
  - slice 1 `src/sweep.js` (`5c2c81b`-area, `cd86a7c`) — pure turn-locked sawtooth (`sweepX`/`sweepCount`/`walkSweep`), rig spec-net `sweepMath`, node-verified 10/10.
  - slice 2 (`03f758e`) — `scope.setTurnSignal(at, nowTurns)` + the real-sweep beam branch; heart signals ride the sweep, buffered = fallback for real-time value-nodes. **Operator: "dot sweeps and stays locked."**
  - slice 3 (`cacb9dc`) — `turns/cm` rate knob (separate from `time/cm`; deviation flagged for him to consolidate or keep).
- **frame.beam-fades-trace f0→f1** (blessed) — the lightweight beam (drop the HDR phosphor, canvas-fade persistence, park beam.js for an eventual Rust port).
  - slice 1 `src/beam-fade.js` (`82478c6`) — drop-in `createBeam` (13-key contract parity), fade+stroke renderer. Renders correctly in isolation.
  - slice 2 wired (`1019be5`) → **BLANKED THE SCOPE** → **reverted (`93314f8`).**

## state (live threads — 2)

1. **[SNAG] beam-fade blank-render regression — the next pull.** Wiring beam-fade as 'beam' made the scope render nothing. What I established:
   - beam-fade renders FINE in isolation: a synthetic diagonal → 315 non-bg green px, no errors.
   - In the real workbench (headless, bundled Chromium): switching to beam → **no console/page errors**; scope canvas stays ~blank. BUT headless freezes the WebGPU heart ([[kit-heart-webgpu-headless]]) → no sweep movement → can't reproduce the live moving-render. Jogging the heart scrub headless barely moved it (3→4 px) — inconclusive (jog may not advance turns headless).
   - All 13 contract methods the scope calls on a beam are present on beam-fade (no missing-method).
   - **NOT yet run (operator interrupted):** a drawImage-isolation probe — render beam-fade, then `ctx.drawImage(bm.el,…)` onto a dest canvas, measure the dest. Isolates whether the scope's copy-of-the-beam-canvas step shows beam-fade's output.
   - **Two live hypotheses:** (a) `drawImage` of beam-fade's canvas fails/shows nothing (size/format) — the probe tests this; (b) the fade trace is too FAINT — heavy beam ACCUMULATED energy (bright); beam-fade strokes once at `alpha = exposure = 0.5` with no accumulation, then fades → at inherited inten=0.5 may read as "blank." Likely fix for (b): draw the freshly-swept segment BRIGHT (near full alpha — the beam *head* is always bright), let persistence govern only the trail; recalibrate inten for the fade renderer (that's slice 3 of this frame anyway).
   - **Resume recipe:** re-apply the one-line import swap in `scope.js:16` (`./beam.js` → `./beam-fade.js`) on a scratch branch/locally, write the drawImage probe (a temp `dev/_probe.mjs` — I deleted mine for floor-clean; it served the kit + bundled-chromium `await import('/src/beam-fade.js')`, ticked samples, counted non-bg px), and discriminate (a) vs (b). If (b), brighten the fresh stroke + retune inten, then re-wire + operator eye.

2. **frame.sweep-locks-turns slices 4–6 still owed** (once the renderer's sorted): slice 4 = trigger anchors `turns0` (resolves the slice-2 caveat: trigger knobs currently inert on heart signals, sweep free-runs from turns0=0); slice 5 = buffered fallback keep-or-drop; slice 6 = verify. These are independent of the beam-fade bug but ride on whatever renderer wins.

## snags

- **beam-fade blank-render** (above) — SNAG-STOP on the beam-fades-trace chain until root-caused. sweep-locks-turns slices 4–6 can proceed in parallel if desired (different concern).
- **headless can't run the WebGPU heart** ([[kit-heart-webgpu-headless]]) — dynamic render/sweep behaviour is operator-eye or jog-the-scrub only; calibrate on synthetic/isolation probes.
- **run the rig sparingly** ([[kit-rig-run-sparingly]]) — channel:'chrome' hijacks the mouse; use **bundled** chromium (`chromium.launch()` no channel) for canvas-only probes — no hijack, but no WebGPU.

## wants-word

- bless/rename the `beam · fades · trace` triad sub-decisions if any (triad itself blessed).
- the `turns/cm` vs `time/cm` two-knob split (slice 3 deviation) — keep two, or consolidate to one reinterpreted knob?
- after the beam-fade fix: which first — finish beam-fades-trace (slices 3 retune·4 verify) or jump to sweep-locks-turns slice 4 (trigger anchor)?

## carry

- **Feel/render changes are operator-EYE gated, never a green rig** ([[checks-are-a-net-not-a-gate]]). The WebGPU heart only runs live → dynamic verification is his eye or jog-the-scrub.
- **Surface subtractive tradeoffs** ([[surface-subtractive-tradeoffs]]) — the live-sweep-removal lesson; when a build replaces/removes a capability, name the loss and bless it on a view that exercises it.
- **Single seat, no worktrees** ([[single-seat-no-worktrees]]) — serial, one focused thread.
- **The light beam swap is reverted** — `scope.js:16` imports `./beam.js` (heavy, works). `beam-fade.js` is built + correct-in-isolation but unwired. Re-wire is one line once the blank-render cause is found.
- **Resume:** read this baton → reproduce the blank via the drawImage probe (or brightness check) → fix → re-wire slice 2 → operator eye.
