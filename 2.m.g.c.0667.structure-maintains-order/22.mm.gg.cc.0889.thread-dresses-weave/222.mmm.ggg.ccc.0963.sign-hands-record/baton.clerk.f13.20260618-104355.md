# baton — clerk — f13

closed: 20260618-104355 · gait: [hold] (operator off; pick up on the readouts) · folds from [[baton.clerk.f12]]

## state (live threads — 3, healthy)

- **THE UNIFICATION — heart controls ARE smart params now. BUILT, rig green (17/17), tsc clean.** frame: `kit/frame.unify.f0` (BUILT). The smart param grew: **output mapping** layer (`outMin/outMax/log/unit` → mapped display + `onOutput`, signal stays [0,1]); **min/max wired as the [0,1] limiter** (clamp confines); **resizable** (no fixed 128px, content-sizes + fills a sized node); **display projection** (raw 0–1 is the standard; properties toggle to show the mapped output); **cyclic `wrap` mode** + a **movement channel `onDelta`** (general — any param). The heart's speed(log Hz)·radix·phase₀·playback(×)·**scrub** are all smart params (`noDrive`), selectable (any-click-in-any-zone → properties), compact 3×2 layout. **Scrub = a CDJ platter**: wrap + movement → `nudge(delta)` on the heart (1 scrub = 1 cycle, no skip; stopped = scrub position, playing = momentary nudge). Mode reframe: **edit→move**; properties live in both modes, **focus latches to the touched part** (no snap-back).
- **THE INCIDENT — scope-focus miss, REMEDIATED.** `kit/incident.scope-focus-miss.f0`. I misdiagnosed "parts don't connect" as a channel issue, built a wrong fix (channels-by-focus, broke the pad), and a rig check that asserted my own change went green. Root cause: **emission-driven focus** (`out.subscribe → focus`) yanked focus every frame. Fixed: focus by interaction only; **channel count is manual (scope property), not focus**; pad shows 2ch when set. New checks `focusLatch` + `channelsManual` encode the spec. Lesson saved to memory [[reproduce-the-real-repro]].
- **THE READOUTS — discussed, NOT built (this is the next pull).** Operator wants the unit-circle's relational readouts surfaced **under the heart settings**, and **click a value → scope displays it**. clock.js readouts confirmed: phase · cycles · angle · cos · sin · unit-circle-point · frequency · angular-velocity (the shader also shows the N-gon point, velocity/accel vectors, distance). I was mid-grounding in clock.js when the session closed.

## next pull (ONE)

**Talk out + frame the READOUTS, then build.** Surface the unit-circle's value readouts beneath the heart; clicking one points the scope at it. Two design forks to settle first: (1) **which readouts** (the clock.js set above + which shader-derived ones — polygon point, velocity, accel, distance); (2) **scope source generalization** — the scope currently samples `focused.out.get()`; readouts aren't nodes, so it needs to point at a heart-derived *signal* (a value provider), selected by clicking a readout. Ground in clock.js / unit-circle.js (read first), talk the forks, frame, build. Do NOT build before the talk.

## snags

- **bug.pool** — still OPEN (`kit/bug.pool.f0`): selecting the pool locks selection in edit/move mode. Untouched.
- **scope source is part-only** — only samples a focused node's `out`; the readouts need it to accept a non-node signal provider (part of the next pull).
- **consolidation pending** — frames at `210` (frame.workbench-devloop, frame.smartparam) vs the rest in `kit`; gather into the kit project home in a cleanup pass (noted in `kit/pin.radial-param.f0`). Deferred.
- LF→CRLF git warnings on every kit commit (cosmetic).

## wants-word

- the **readouts** design (the two forks above) — talk before frame.
- **1 scrub = 1 cycle** ratio — does the platter feel right, or retune.
- the **radial-param** idea (`kit/pin.radial-param.f0`) — leaning "a mode on the smart param, not a new type"; deferred, his call when picked up.
- whether `pin` should be **registered in the keystone** (supersede sketch+parked) once the format settles — part of the consolidation pass.

## carry

Hard lesson this session ([[reproduce-the-real-repro]]): for "X doesn't work," reproduce the operator's EXACT scenario (I tested a slider alone; the bug needed an emitting param present), find the mechanism before fixing, never encode un-asked behavior, and **a rig check must encode the operator's requirement — a green check on my own change is confirmation bias, not verification.** The rig is the correctness gate (`node dev/verify.mjs`, 17 checks); **feel is the operator's**. Operator is the persistence — no operator baton; his mid-flight (readouts talk, scrub-feel) folded into wants-word. Keystone (CLAUDE.md) is the shared ground; this file is only the seat. Resume: read **kit/frame.unify.f0 + kit/incident.scope-focus-miss.f0 + this baton**, run `node dev/verify.mjs`, then talk the readouts.
