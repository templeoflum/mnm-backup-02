# frame — sweep · locks · turns — f0 — [draft · triad unblessed]

Lock the scope's sweep to the heart's turn-count instead of wall-clock seconds, so heart-derived signals stand jitter-free by construction and the modulated-signal drift (deferred from [[frame.trigger-steadies-beam]]) disappears. The kit's answer to **sync-generation + timebase-correction** — which, here, are one move.

## §1 — agreement · at a glance
- **the trigger is the BLIND stabilizer** — it hunts a level-crossing each sweep because it doesn't know the signal's clock. Sync-gen says: stop hunting, lock to the master clock everything's derived from. The kit already HAS that master — the **heart**. The dense path (`phaseAt(turns)`, `heartReadings(turns)`) is already the sync primitive: a heart-derived signal's phase is known exactly from turns.
- **the deferred drift IS a timebase error.** The dense path maps scope-time→turns by an *instantaneous* rate: `turns = heartTurns() + rate·(tt−now)`, `rate = timeScale·freq` sampled once/frame. Exact on a steady heart; on a **modulated** heart (FM-self drive — the heart's own rate wobbles across the window) it drifts, because rate isn't constant across the window.
- **the convergence (operator + clerk, 20260622, float):** TBC says *don't extrapolate — lock the readout to the master* (canonical architecture: buffer + re-clock against master + genlock, not extrapolate — video-synth research doc, line 333). Sync-gen says *lock the sweep to the master*. In this kit both collapse to ONE move: **define the sweep window in heart-TURNS, not seconds.** Nothing to extrapolate → nothing to drift. Phase-locked → jitter-free by construction. Sub-frame fidelity free (sample at any turns).
- **the catch — not everything is heart-native.** The workbench live feed + driven value-nodes run on REAL time (`clk`), not turns. Turn-space is for **heart-derived** signals (readouts, smart-params, the ratio node — all reconstructable as f(turns)). External/real-time signals keep the time path. So this is a turn-native path ALONGSIDE the time path, picked by the signal's nature — not a replacement.
- **NOT this frame:** the beam high-speed halt (separate — [[frame.beam-holds-speed]], the deposit-cost bug) · the renderer · brightness · the trigger controls (level/slope/hold-off/hyst — crystallized, ride alongside unchanged).
- **triad `sweep · locks · turns` — PROPOSED, awaiting operator bless** (working name; the operator authors triads).

## §2 — plan · slices & rungs
status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked  — *(all ○ — draft, nothing built)*

**slice 1 — turn-native signal contract**  ○
- ○ a heart-derived signal carries a function of **turns** (not seconds). Either `setSignal` gains a turn-native variant, or focus() tags the signal turn-native and feeds `phaseAt(turns)` / `heartReadings(turns)` / readout-of-readings(turns) **directly** — dropping the `rate·(tt−now)` extrapolation in every branch.
- ○ focus() branches simplify: param/ratio/readout already compute turns internally — they stop guessing rate, take turns as the argument.

**slice 2 — turn-space sweep window**  ○
- ○ the scope's trigger scan + dense sampling walk **turns** directly (window = Δturns), via the turn-native signal. The trigger state machine (level/slope/hold-off/hyst) is unchanged — it just scans a turn-axis instead of a time-axis.
- ○ window anchored on a turn boundary → standing, no rate drift.

**slice 3 — TIME/CM ↔ TURNS/CM control**  ○
- ○ the sweep-span knob reads in **turns-per-screen** for turn-native signals (cycles-in-window is then exact + stable); keep seconds-per-screen for the time path. Likely the same knob, reinterpreted by which path is active — not a new mode the operator has to manage.

**slice 4 — verify the drift is gone**  ○
- ○ bench: a modulated heart (FM-self drive) that visibly drifts on the time path stands on the turn path (synthetic, deterministic — calibration only).
- ○ **operator live eye-test** — the WebGPU heart only advances live ([[kit-heart-webgpu-headless]]); the real confirmation is the operator's eye on a modulated signal. Crystallize once it blesses.

## §3 — trace · DAG & status
```
slice1 turn-native signal ──┐
slice2 turn-space window ────┼─→ heart-derived signals stand jitter-free; modulated drift gone
slice3 turns/cm control ─────┘   (sync-gen + TBC, one move)
slice4 verify ──────────────── operator eye blesses → crystallize
```
- **status:** **draft (f0).** Nothing built. Shape agreed in conversation (operator "I think so yes" to the convergence); triad proposed, unblessed. Wants the operator's bless on (a) the triad, (b) the turn-native-ALONGSIDE-time split (is the time path kept for external signals, or is everything forced turn-native?), (c) whether slice 3 is one reinterpreted knob or a mode.
- **the loose thread it closes:** [[frame.trigger-steadies-beam]] §3 explicitly deferred *"the rate-extrapolation drift on modulated signals."* This frame is that fix — not a better extrapolation, but no extrapolation.
- **builds on:** the crystallized dense path ([[frame.scope-shows-mode]]) + the just-wired ratio dense-path branch (`5c2c81b`). The reconstruction machinery already exists; this re-anchors what it samples against.
- **lineage:** sibling to [[frame.beam-holds-speed]] (the perf frame) — independent, different files mostly, but both touch `scope.js`/`workbench.js` so they do NOT cleanly parallelize.
- mode: clerk · builder window · `.draft` until the triad + shape are blessed, then fold f0→f1 `.live` for build.
