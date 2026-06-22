# frame — beam · holds · speed — f0 — [draft · triad unblessed]

The beam readout halts the system at high speed (operator: "completely unacceptable"). Bound the beam's per-frame cost so it stays real-time across the WHOLE speed range, with no visible loss to the trace.

## §1 — agreement · at a glance
- **the symptom:** at high heart-rate the beam readout drags the whole system to a halt. The line readout (cheap polyline) does not — so the cost is in the **beam deposit path**, not the trigger/sweep/sampling. (Operator: "it's def the beam settings.")
- **the diagnosed root (confirm by profiling first — slice 0):** `beam.js segment()` lays `round(len)` gaussian splats between consecutive samples, `len` = full pixel distance INCLUDING vertical. The scope feeds a FIXED `W+1` samples/frame (speed-independent), BUT at high heart-rate many cycles pack into the window → between adjacent x-samples (~1px apart in x) the signal swings the FULL height → each segment ≈ H splats → up to W·H splats/frame, each a 25–81-cell `exp()`. Cost scales with **cycles-in-window** (≈ freq × sweepPeriod) up to the W·H aliasing ceiling.
- **the key realization:** past ~W/2 cycles in the window the signal **aliases** — you cannot resolve more detail than there are horizontal pixels, so drawing every full-height swing is wasted work that also looks like noise. The fix is to stop drawing past what the screen can resolve, + cheapen the per-splat cost.
- **goal:** real-time across the whole range; the trace at high speed should read as a stable bright band (correct — overlapping sweeps), not melt the frame budget.
- **NOT this frame:** the timebase ([[frame.sweep-locks-turns]] — separate) · brightness/color tuning (crystallized) · the trigger.
- **triad `beam · holds · speed` — PROPOSED, awaiting operator bless** (working name; the operator authors triads).

## §2 — plan · slices & rungs
status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked  — *(all ○ — draft, nothing built)*

**slice 0 — confirm the root**  ○  *(measure before fixing — [[reproduce-the-real-repro]])*
- ○ profile the beam readout at rising heart-rate (bench, synthetic): confirm deposit-count/frame scales with cycles-in-window and that `segment()` length is the dominant cost. Red-first — don't fix a guessed cause.

**slice 1 — cheapen the deposit kernel**  ○
- ○ precompute the fixed-CORE gaussian splat as a lookup STAMP (one `(2R+1)²` array) → offset-add per hit, no `exp()` in the hot loop. CORE is already fixed (focus rides the bloom pass), so the stamp is constant. Pure speedup, no visual change.

**slice 2 — bound the path to what the screen resolves**  ○
- ○ cap deposited path length / cycles per frame at the Nyquist ceiling (~W/2 cycles): beyond it, decimate or clamp — the extra swings are sub-pixel-in-x and read as noise, so dropping them is *more* honest, not less. Energy stays correct (per-hit DEP unchanged; fewer redundant hits).
- ○ alternative/也: draw a full-height swing between 1px-apart x-samples as a single cheap vertical smear rather than H separate splats.

**slice 3 — verify real-time across the range**  ○
- ○ bench timing: frame budget held from slowest to fastest heart-rate (synthetic, deterministic).
- ○ **operator live eye-test** — the trace at high speed reads as a clean standing band, no halt, no melt. Crystallize once it blesses.

## §3 — trace · DAG & status
```
slice0 confirm root ─→ slice1 cheap kernel ──┐
                       slice2 bound path ─────┼─→ beam real-time across the whole speed range
                                              ┘
slice3 verify ──────────────────────────────── operator eye blesses → crystallize
```
- **status:** **draft (f0).** Root diagnosed from the code, NOT yet profiled — slice 0 confirms it before any fix. Triad proposed, unblessed. Wants the operator's bless on the triad + the build-go.
- **touches (planned):** `kit/src/beam.js` (deposit kernel → stamp; segment path bound) · maybe `dev/scope-bench.html` (a rising-rate timing harness). Likely no `scope.js`/`workbench.js` change — but it shares those with [[frame.sweep-locks-turns]], so the two build serially, not parallel (operator: single-seat focus, no worktrees).
- **lineage:** new draft. Sits on the crystallized [[frame.beam-traces-wake]] (the renderer) — this bounds its COST, doesn't change its look.
- mode: clerk · builder window · `.draft` until the triad + build-go, then fold f0→f1 `.live`.
