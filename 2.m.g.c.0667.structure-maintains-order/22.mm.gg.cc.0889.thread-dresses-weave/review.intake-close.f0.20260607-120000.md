# Review — intake-close — f0 — 20260607-120000

Closing review of the intake frame (frame.intake.f1.260606-144500.md at 210). Sources: log.session.f3.260607-073000.md (entries 0400–0436), log.session.f2.260606-124256.md (entries 0382–0396), frame.intake.f1, audit.session.f0.260607-071500.md, manifest.session.f0.20260607-074500.md, count.instrument-rebuild.f0.20260607-110000.md. This review closes the intake cycle and hands off to the instrument-rebuild frame.

---

## What this cycle was

The intake frame had three chunks:
- **Chunk 0 (research grounding):** survey, extract, crossref — DONE in f2 segment
- **Chunk 1 (carry forward):** TS rebuild and naming — PROMOTED to own frame
- **Chunk 2 (interface):** persistence, dynamic files, keyboard nav, debug tools, addr bar — all DONE or SETTLED

The intake cycle took raw material at 200 (research compilations, TS instruments, legacy docs, sketches) and built the first working version of the lattice instrument while establishing the operational discipline to work inside it. What arrived unsigned left with a signature.

---

## What was built

**Instrument features (all verified and working):**
- State persistence via saveState() on all paths that change currentAddr
- Dynamic file discovery — async fetch + cache per address, no hardcoded arrays
- Keyboard navigation — left alt d0, space d1, right alt d2, bare last, backspace shallow [settled]
- Debug overlay — collapsible panel, state display, key event log, error catch, eval input
- Hot reload — Last-Modified polling with cache bypass on all fetches
- Address bar — shared across all views, digit clicking, depth +/-
- View 0 selector (patchboard) — foldable branch/leaf/cell tree
- View 0 scope (microscope) — full address display, structural breakdown, triad, position, registers, file reader

**Documents created this cycle:**
- manifest.session.f0 at 201 — first properly folded manifest
- audit.session.f0 at 221 — 55-finding blind-walk audit
- log.session.f3 at 222 — session log continuation (entries 0400–0436)
- frame.instrument-rebuild.f0 and f1 at 210 — new frame for next cycle
- count.instrument-rebuild.f0 at 201 — first count document (movement log)
- dream.instrument.f0 at 122 — prepared for next dream cycle
- parked.f0 at 100 — three parked ideas (verb map, file naming, keystone rework)

**Research placed:**
- FINDINGS_ternary_TS.md → 111 [settled]
- TS_BRIEF.md → 111 [settled]
- 9 instrument files → 100 for assessment (logged in count)

---

## What was learned

**About the process:**
- Diagnose before fixing. Rule out causes systematically. Don't touch code until you've exhausted diagnostics. (0388)
- Operator reports "working" (function verified). User confirms "settled" (fit verified). Neither substitutes for the other. (0408)
- The process teaches itself. Session 1: corrected. Session 2: dreamed first. Session 3: paused naturally before building. The discipline is becoming native. (0422)
- Spot fixes are an operational category with different levels — service call, repair, surgery, catastrophic. Each needs different planning depth. (0390)

**About the structure:**
- Triads carry meaning even when wrong — a made-up triad pointed at the right territory, but the real triad also tells you where you live in the nesting structure. (0392)
- Views are verb forms of branches — read-only library (0), sandbox/playground (1), formal warehouse (2). (0396)
- Each address may encode two file types in its noun and mod. The verb is a different DOF that connects them. Shaky beyond the two-file-types observation. (0432)
- The keystone itself wants restructuring by branch principle — 0 is definitions, 1 is movement, 2 is tracking. Parked. (100)

**About the instruments:**
- TS and spline continuity may connect at the mechanism level — measuring the continuity of a trajectory. Must be assessed with claims stripped, math only. (0428)
- 200 holds 41 files across 5 streams. The TS rebuild alone involves 11 files. Scope was drastically underestimated in the original two-line-item frame.
- The count document type emerged from needing to track files as they move through addresses. The word was already in 201's triad.

---

## Open items carried forward

**Bugs (logged, not fixed):**
- File cache doesn't refresh on disk changes (0412)
- File reader doesn't clear on address change (0418)

**Parked at 100:**
- Verb map / verb navigation — needs settled verbs first
- File naming convention — has structural answer now (noun/mod = file types) but not solid
- Keystone rework — "0 is definitions, 1 is movement, 2 is tracking"

**Housekeeping (from audit, low priority):**
- nul file at root — 0-byte Windows artifact
- MATRIX at root — stale branch names
- eyes scripts at root — should be addressed within lattice structure

---

## What's next

The instrument-rebuild frame (frame.instrument-rebuild.f1 at 210) picks up. 9 files at 100, bounded. The dream at 122 is set up with the question framed. Next step is the dream — strip vocabulary to mechanism, find whether TS and spline continuity connect, attempt to reduce into one instrument.

The intake cycle is closed. A new cycle begins.
