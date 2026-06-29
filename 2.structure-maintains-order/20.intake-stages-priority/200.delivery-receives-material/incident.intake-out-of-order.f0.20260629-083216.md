# incident — intake out of order — f0 — delivery·receives·material

stamp: 20260629-083216 UTC · status: **caught — corrected in flight** (material walked before it was received; the move to receiving follows this record) · concerns the clerk's intake routing

## what happened

New project material (the three event-suite builders — `class-builder`, `flyer-content-builder`, `zine-builder`) arrived and sat in the keeper's quarantine (000). Rather than **receiving it first** — landing it at the clerk's dock (200) and logging it — the clerk went straight to **walking/surveying** it (a full shape-walk of the zine-builder, a co-located note). Then, asked to move it, the clerk began routing it toward **211 (build floor)** — before any frame exists.

Two steps skipped, both directions:
1. **received nothing first.** Work began on material that had never been docked. Quarantine (000, keeper's) is not the clerk's receiving (200); tool-projects route through the clerk's dock, not keeper's quarantine.
2. **nearly built before framing.** Started toward 211 with no frame at 210. "frame before you build" (keystone 210).

## root cause

No intake reflex. The clerk took the operator's "let's look at this" as license to start processing, with no step that says *receive it first*. The operator named it: this is partially a missing-direction problem, but the floor should not depend on the operator remembering the order — the clerk owns the routing.

The correct order for material destined to become a tool:

```
200 receive (land, unsigned — endorses nothing)
  → walk / survey (note co-located in the project folder)
  → 210 frame (frame before build)
  → 211 build (folder moves to the build floor only once framed)
```

## remedy direction (NOT applied — operator's call)

- **receive-first is an intentional clerk act**, performed on identified project material at the moment it's taken up — *not* an automatic wake-time scan of everything entering the lattice. (An auto-scan was proposed and **rejected**: digestion is specific and deliberate, not general; the clerk does not ingest every arrival.)
- before walking/surveying any new project material, dock it at 200 and log the row at 201. Receiving endorses nothing, so the step is cheap and safe.
- a tool-project folder moves to 211 **only after a frame exists** at 210.
- whether this hardens into a written intake protocol (the opening half of the seat, sibling to the close-out) is the operator's call — held, not assumed.

## connection — surfaced from the .unit architecture

This is also the unsolved **per-project manifest.count**, flagged in [[frame.unit-marker.f0]] (210). That frame settled: a unit is opaque — the witness skips inside it, git is its internal log, and it gets **one placement row** in the global manifest ("register once, then git"). It explicitly **deferred** the *project-local manifest / check-in-check-out inside the unit* as the **multi-seat form** — "booked, not now."

The builders are units. A filesystem move (`Move-Item`) did neither: no placement row booked at 201, no per-unit count. So the three builders sit at 200 **unbooked**. The clean fix is that deferred project-local manifest.count — its own frame, when we reach it. Until then, unit relocation is a structural move that leaves no ledger trace.

## landing

20 intake·stages·priority → the work got ahead of the dock. Nothing was lost (receiving endorses nothing; the walk's note stands and travels with its project), but the order was wrong twice. This record is the visible friction so the receive-first step is taken next time. The corrective move (builders → 200) follows immediately.
