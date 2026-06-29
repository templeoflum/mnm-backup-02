# frame — sweep · locks · turns — f2 — [blessed · live · ready to build]

Bring back a **real independent sweep** — its own rate, a beam that actually scans — and **lock it to heart-turns** so it can't drift. Slow it → watch the dot crawl across, independent of the signal. Fast it → the overlapping passes build a standing trace. The drift that got the live sweep deleted is solved by turn-locking it, not by removing it. ([[incident.live-sweep-removed]].)

## §1 — agreement · at a glance
- **the correction (operator confirmed 20260622):** f1 had this wrong — it said "re-axis the buffered window from seconds to turns." But the buffered-trigger-window has **no sweep at all** (it re-stamps the whole window every frame — [[incident.live-sweep-removed]]). What the operator wants, and always wanted, is the **real moving sweep** back: *"I should be able to slow the sweep down slow enough to see the dot slowly scan independent of the signal."*
- **the confirmed model:**
  - the sweep is an **independent generator** with its own **rate knob** (turns-per-screen-crossing). Not derived from the signal.
  - its phase is **locked to heart-turns** → `x = sweep-position = fract((turns − turns0)/turnsPerScreen)`. Pure function of turns ⇒ **cannot drift** (no wall-clock anywhere). This is what sync-gen actually means: an independent sweep oscillator genlocked to the master clock.
  - the beam **deposits the swept path each frame, sub-frame dense** → fast sweeps stay smooth, the phosphor accumulation ([[frame.beam-traces-wake]]) does the rest.
  - **slow rate → the dot crawls** (short path/frame, each spot decays before re-hit = a moving dot); **fast rate → standing trace** (overlapping passes re-hit before decay = a bright steady line). Same generator, both behaviors, by rate alone.
- **why this is stable AND real:** the live sweep was deleted because it drifted — but it drifted because it free-ran on **wall-clock**. Locked to **turns**, its phase is the heart's phase exactly → stable by construction. We get the real sweep back *without* the drift that killed it.
- **NOT this frame:** the beam high-speed cost ([[frame.beam-holds-speed]] — but see lineage: that frame's analysis is now partly obsolete and must be rescoped against THIS sweep model) · the renderer's look (crystallized) · brightness.
- **triad `sweep · locks · turns` — BLESSED** (operator 20260622); the triad fits f2 *better* — the real sweep locks to turns.

## §2 — plan · slices & rungs
status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked  — *(all ○ — model confirmed, not yet built)*

**slice 1 — the turn-locked sweep generator**  ✓ done  ·  (`cd86a7c`)
- ✓ pure `src/sweep.js` (like ratio.js): `sweepX = fract((H−H0)/turnsPerScreen)` · `sweepCount` (flyback detect) · `walkSweep` (sub-samples the path, flags flyback as `penUp`). Reuses `fract` from ratio.js, no new deps. `sweepMath` spec-net in the rig; node-verified 10/10 (mutation bites). Nothing renders yet — the deposit is slice 2.

**slice 2 — beam deposits the swept path (sub-frame dense)**  ✓ done · live eye-test owed · (`03f758e`)
- ✓ `scope.js`: `setTurnSignal(at, nowTurns)` + the real-sweep beam branch — advance heart-turns prev→now, `walkSweep` the path, deposit x=sweep, y=signal(turns). Heart-derived signals (readout/param/ratio) take the real sweep; buffered-window stays as the FALLBACK for non-heart real-time value-nodes (the slice-5 split, landed reversibly).
- ✓ `workbench.js focus()`: turn-native signal for heart nodes, null for the wall-clock value-node.
- ⚠ **trigger controls are inert on heart signals until slice 4** (turns0=0 free-run for now) · rate fixed at turnsPerScreen=1 until slice 3 · 8·W placeholder sample-bound until [[frame.beam-holds-speed]].
- ○ **operator eye:** beam readout + focus a heart node (a `sin` readout reads clearest) → the dot should crawl across, turn-locked (no drift). Slow heart → slow crawl.

**slice 3 — the rate knob (TURNS/CM) + slow-crawl first-class**  ✓ done · live eye-test owed · (`cacb9dc`)
- ✓ `setTurnsPerScreen` + a `turns/cm` beam-knob (scopeProps.turnsPerScreen, cfg 0.05→8 def 1, editable range, no hard cap), persisted. Larger = slower crawl, smaller = standing.
- ⚠ **deviation from the "one reinterpreted knob" plan:** built a SEPARATE `turns/cm` knob alongside the existing `time/cm` (which now only drives the buffered real-time fallback). Reinterpreting one knob is fragile (value/units/range swap by focus + ambiguous persistence); two clearly-labelled knobs is simpler. **Flagged for the operator to consolidate if preferred.**
- ○ **operator eye:** dial `turns/cm` — small → standing trace, large → slow crawl.

**slice 4 — trigger anchors the sweep start (turns0)**  ○  *(settle at the slice)*
- ○ the crystallized trigger (level/slope/hold-off/hyst) sets `turns0` = where the sweep begins, found in turn-space; auto free-run anchors to a turn boundary.
- ○ **open Q:** since turn-locked, the sweep *could* anchor to the signal's turn-phase directly (sync-gen, no crossing-hunt) for heart signals — is the trigger still the anchor, or does sync-gen replace the hunt? Decide when building this slice, surface the tradeoff.

**slice 5 — buffered-redraw: fallback only (or drop)**  ○  *(settle at the slice)*
- ○ heart-derived signals use the real sweep. The buffered-trigger-window survives ONLY as a fallback for non-heart **real-time** signals (workbench live feed, value-nodes on `clk`) — or gets dropped entirely if those go on a wall-clock sweep too. **open Q**, surface the tradeoff before removing anything (the lesson of [[incident.live-sweep-removed]]).

**slice 6 — verify**  ○
- ○ bench (synthetic, deterministic): slow sweep → crawling dot; fast sweep → standing; modulated heart → stands (the deferred drift gone).
- ○ **operator live eye-test** — the WebGPU heart only advances live ([[kit-heart-webgpu-headless]]); the dot-crawl + standing-trace + no-drift are operator-eye. Crystallize once it blesses.

## §3 — trace · DAG & status
```
slice1 sweep generator ──→ slice2 swept-path deposit ──┐
slice3 rate knob ──────────────────────────────────────┼─→ a real sweep: slow=crawl, fast=standing, turn-locked=no drift
slice4 trigger anchors turns0 ─────────────────────────┘
slice5 buffered → fallback/drop ── (surface the tradeoff)
slice6 verify ───────────────────── operator eye blesses → crystallize
```
- **status:** **blessed · live, model confirmed, not yet built.** Two build-time forks flagged (slice 4 trigger-vs-sync-anchor, slice 5 buffered fallback-or-drop) — settle each AT the slice, surfacing the tradeoff (the incident's guard).
- **the loose thread it closes:** restores what [[incident.live-sweep-removed]] recorded as lost, AND closes the [[frame.trigger-steadies-beam]] deferred "rate-extrapolation drift" — turn-locking kills both.
- **builds on:** the dense path ([[frame.scope-shows-mode]]) + the ratio dense-path branch (`5c2c81b`); the beam renderer ([[frame.beam-traces-wake]], unchanged look).
- **lineage:** folds [[frame.sweep-locks-turns.f1]] (the "re-axis the window" misread — corrected here to the real sweep) ← folds [[frame.sweep-locks-turns.f0]]. **⚠ rescopes [[frame.beam-holds-speed]]:** that frame's cost analysis was about the buffered redraw (cost ∝ cycles-in-window); with the real sweep the cost driver becomes the **swept path/frame** (∝ sweep-rate, not signal-freq) — so beam-holds-speed.f0 must be re-cut against this model. Likely **build sweep-locks-turns FIRST** (the beam cost can't be bounded until the sweep model it rides on exists), reversing the earlier beam-first order.
- mode: clerk · builder window · `.live`, ready to build on the operator's build-go.
