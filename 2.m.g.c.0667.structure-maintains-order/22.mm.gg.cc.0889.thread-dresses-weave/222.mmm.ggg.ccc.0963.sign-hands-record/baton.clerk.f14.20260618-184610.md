# baton — clerk — f14

closed: 20260618-184610 · gait: [hold] (operator stepping away; pick up on his chosen direction) · folds from [[baton.clerk.f13]]

## state (live threads — 1, healthy)

- **THE KIT INSTRUMENT — built out heavily this session, rig 26/26 green, tsc n/a (no compiler on this box; the rig is the gate).** Home: `211/kit`. A precision instrument: the unit-circle **heart** + a **readout bank** + the **scope**. Shipped this session (all committed, rig-checked):
  - **readouts R1·R2·R3** — a fixed **bank under the heart** of **30 source-node chips** (output-only, heart-driven, click → scope). Full parity with the heart's `readout(t)` via **one `heartReadings()` export** = the single source of truth (bank + on-face draw from it; also fixed an R1 phase₀ drift). frame `kit/frame.readouts.f3`.
  - **scope = precision** — **resolution-correct** (backing store = displayed px × dpr, 1 sample/px, crisp, re-fits on resize; killed the blur); **follow-window** for climbers (distance/cycles ride `[v−span,v]`, never peg); **scroll-wheel zoom-X** (history reservoir HIST=4096, zoom in/out of time); **clear button** in the scope head.
  - **two readouts added by request** — **`square`** (1–4 diagonal-flash index, ticks 1/8-turn off `quad`); **`sec-pt`** (the polygon dot's (x,y) = unit-pt × polyR, 2-ch, traces the N-gon).
  - **heart params are FULL smart params now (FM-self)** — dropped `noDrive` on speed/radix/phase₀/playback; a driven heart param animates off the heart and `set()→onOutput→` the clock setter = **self-modulation** (drive radix → base/N-gon sweep; drive speed → FM). scrub stays a jog. frame `kit/frame.heartdrive.f0`. **BUILT, feel-test + fine-tuning pending.**

## next pull (ONE — operator's choice, a gate)

**Operator picks the next exploration direction** (he left a menu at close):
1. the **deeper ratio system**, 2. **other loop modes**, 3. **deeper smart-param features**, or 4. **another pass on the heart** — hunt what we missed / can improve / can make more capable + precise as a real instrument.
Do NOT pick for him — surface the menu, take his word, then frame→build.

## snags

- **self-FM stability** — speed-driving-itself is genuine nonlinear feedback (can be chaotic). Bounded (signal [0,1] + setter clamps), but if unusable add an optional rate clamp. Watch by feel. (`frame.heartdrive` deferred.)
- **heart settings + drive NOT persisted** — autosave covers the bench floor, not the heart. Later.
- **heart-param value overlay can sit over the readout bank** — rig brushed it as a click-intercept (setHeart left an overlay); maybe transient, verify when in there.
- **bug.pool** — still OPEN (`kit/bug.pool.f0`), untouched: selecting the pool locks selection.
- **lattice/viewer perf** — slow tree load, kit empty on open. Parked for after the kit thread.
- LF→CRLF git warnings on every kit commit (cosmetic).
- **pre-existing uncommitted (NOT mine, untouched)**: `201/manifest.live.md`, `222/log.session.f13+f14`, branch-0 `quarantine/` + `mythic library/` — all dirty at session start.

## wants-word

- **the next direction** (the 4-way menu above) — his pick.
- **self-FM feel** — usable, or needs a rate clamp?
- **provisional readout ranges** (`tan` ±8, `sec` [1,2.5], `p-gap` [0,0.4], the large constants) — retune by feel?
- whether to start **maintaining session logs** again (prior sessions wrote `log.session.fN`; I held off per recording-maturity — baton + commits carry the trail).

## carry

Frame conventions corrected this session, saved to memory [[frame-doc-conventions]]: **project frames live WITH the project (kit), not at 210**; the **agreement section is a minimum-LOD glance** (terse bullets, no explanation). The 210-vs-kit churn is resolved — frames co-locate with code. **The rig is the correctness gate** (`node dev/verify.mjs`, 26 checks); **feel is the operator's.** `heartReadings()` is the one source of truth for the heart's readings. Operator is the persistence — no operator baton; his close-out menu folded into next-pull/wants-word. Keystone (CLAUDE.md) is the shared ground; this file is only the seat. **Resume:** read `kit/frame.readouts.f3` + `kit/frame.heartdrive.f0` + this baton, run `node dev/verify.mjs` (expect 26/26), then surface the menu and take his pick.
