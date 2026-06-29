# baton — clerk — f11

closed: 20260617-105000 · gait: [work] (next pull clear) · folds from [[baton.clerk.f10]]

## state (live threads — 3, healthy)

- **THE KIT — a UI design + diagnostics bench, at 211/kit. The whole session built this.** House shape = an **oscilloscope** (operator: every app = one canvas + a param pool either side): left sidebar (parts + inspector) · **left param pool** · **center scope** (auto-follows the param you touch/select; continuous, never resets) · **right = the heart**. Two modes: **edit** (arrange) · **interact** (run). Composable nested **layout containers** (stack/row/grid/dropdown) you drop, nest, **drag-reorder**, and **resize snapped to an 8px grid module**. Buildless, no deps, self-injecting CSS per part, vocab-neutral, **no tooltips**. Design trail = **frames frame.kit.f0–f7 at 210**.
- **THE HEART — the master clock, at 211/kit.** `clock.js` copied in from ts/ (the **stateless stopwatch** phase: `phase = fract(t/period+phase0)` — drift-free, reproducible; **`phase.js` retired**). The TS **unit-circle WebGPU visual** is mounted as the "heart" — **visual only** (stripped its controls/readout/msg; exposed setters), driven by **our scrub controls** (speed/radix/phase₀/playback/pause), face pinned + always visible, params scroll. It's the **master** — params don't drive it.
- **VALUE/SIGNAL/INTERACTION vocab (conceptual ground, NOT yet a frame).** Carved with operator: all params **normalized [0,1]**. VALUES = continuous · stepped(**base-N**) · cyclic. SIGNALS = held · periodic · transient · stochastic · coupled(=ratio). INTERACTION = set · scrub · step · trigger · grab/release. **Base-N positional = the precision↔sweep unifier** (= the scrub's Ctrl/Shift/Alt tiers). Fixes landed: button=trigger-pulse, selector=N-states-across-[0,1]. Record as a frame next session if it firms.

## next pull (ONE)

**Wire params to derive from the heart by RATIO** — a drivable param's period = `heart.period × ratio`, so every param locks to the one heartbeat (the ratio catalog from `parameter loop system` doc at the 200 dock). Operator named this as the next step ("a slider follows it"). Confirm the heart reads right, then wire.

## snags

- **kit now uses WebGPU (the heart) but has NO tsconfig/@webgpu/types.** My typecheck is ad-hoc: include `ts/node_modules/@webgpu/types/dist/index.d.ts` in the tsc invocation. Decide the kit's typecheck story.
- `unit-circle.js` (kit copy) has **dead code** after the strip (CONTROLS_HTML, readout(), base-digit helpers, unused module vars) — harmless, not erroring, but messy; trim when touched.
- the heart is **standalone**, not yet ratio-linked to params — that's the next pull, not a defect.
- **save/recall is DEPRIORITIZED by operator** ("last priority, stop recommending it") — do not offer.
- named workbench rough edges (drag-reorder hit-test on fast drags · region/child overflow · no un-nest · no drag-from-palette) — known, deferred.

## wants-word

- confirm the heart visual reads right + **greenlight the ratio-wiring** (the next pull).
- whether **base-N positional** gets built into the param controls (the precision/sweep model).

## meta-arc (operator, carry)

The session's lesson: the operator is a **visual/spatial non-coder** who wants a **hand-design instrument** (direct manipulation), not a coder's component library — I built the wrong KIND of thing for ~4 turns until he named it, then pivoted to the drag-design workbench. New memory [[operator-builds-by-hand]]. Also: **reuse in-house primitives** (the clock) over reinventing (phase.js) [[ground-in-the-source-first]]; **bring the EXACT artifact** when asked (the unit-circle), not a stand-in. **TS formula thread (f10's "climb dimensions") is PARKED** — untouched this session, still valid. Resume: read **frame.kit.f7 + this baton**. Operator is the persistence — no operator baton. Keystone (CLAUDE.md) is the shared ground; this file is only the seat.
