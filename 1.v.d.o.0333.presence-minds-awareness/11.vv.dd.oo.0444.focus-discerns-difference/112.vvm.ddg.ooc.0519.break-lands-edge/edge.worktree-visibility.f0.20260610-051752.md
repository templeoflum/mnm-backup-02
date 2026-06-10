# Edge — worktree-visibility — f0 — 20260610-051752

Incident log. Dream documents appeared to vanish mid-dream. No data was lost — every file is intact. The failure was in visibility, and it has three distinct layers. Logged before any fix is planned or implemented, per operator instruction. Written in the 2-warehouse worktree by branch 2.

## Symptom as reported

During an active dream session on branch 1, dream.fable (f0–f1) and dream.fable-settled (f0–f2) disappeared from view. Operator could not see them in the lattice instrument, and subsequently could not see them in Windows Explorer. Branch 1's session simultaneously reported still having them.

## Finding: the files are intact

All five exist, exactly where branch 1 wrote them:

```
.claude\worktrees\1-mind\…\102.vnm.dig.osc.0407.chaos-untethers-finality\
    dream.fable.f0.20260610-033630.md
    dream.fable.f1.20260610-040616.md
.claude\worktrees\1-mind\…\101.vnv.did.oso.0370.lucidity-reconfigures-scene\
    dream.fable-settled.f0.20260610-044345.md
    dream.fable-settled.f1.20260610-045113.md
    dream.fable-settled.f2.20260610-045855.md
```

They exist in this one tree and nowhere else. They are uncommitted — git has never seen them.

## The topology (ground for understanding everything below)

Five checkouts of this repository exist on disk, each a separate working directory:

| path | branch | recent state |
|------|--------|--------------|
| `mind not map\` (main) | 1-mind | neither branch's new work — this is what Explorer at the main path shows |
| `mind not map\.claude\worktrees\1-mind\` | worktree-1-mind | dream.fable ×5 (uncommitted) |
| `mind not map\.claude\worktrees\2-warehouse\` | worktree-2-warehouse | warehouse session docs + hygiene pass (uncommitted) |
| `mind not map--0\` | 0-ground | older (55ecfdd) |
| `mind not map--2\` | 2-build | older (55ecfdd) |

An uncommitted file exists in exactly one working directory. It does not propagate. Five trees = five partially divergent universes until commits merge them.

## Three layers of the failure

**Layer 1 — shared port, ambiguous root.** server.py hardcodes PORT = 8000. Whichever tree starts a server first owns the port; every lattice client on the machine then shows THAT tree. Branch 2 ran a verification server rooted in 2-warehouse from ~04:33 to ~05:05 UTC — squarely during the dream session (settled folds written 04:43–04:58). Any instrument view in that window showed the warehouse tree, where dream.fable does not exist. The dream logs "vanished" from the instrument.

**Layer 2 — worktree isolation.** Operator then checked Windows Explorer — at the main repo path. The main tree is a different checkout; the dream files were never there. Explorer was accurate about a tree that was never the one the dream was written into. The files were "missing" from a place they had never been.

**Layer 3 — the current server compounds it.** As of this log, a server IS running on :8000 (not branch 2's — ours was stopped ~05:05). Forensic check of its /scan/files shows its 102 lacks dream.fable AND its 201 lacks branch 2's session docs: it is rooted in the MAIN tree. So the instrument right now shows a tree that contains neither branch's recent work. The client gives no indication of which tree it serves — the root is invisible at the UI.

## Evidence of containment (nothing crossed, nothing lost)

- Branch 2's deletions this session: 13 files, explicit named paths, transcript confirms each; none dream.*, all within the 2-warehouse tree.
- No instrument writes ever hit branch 2's server: server.py auto-creates a log.session at 222 on any mutation op — no 20260610 log.session exists in the 2-warehouse tree. /reconcile (read-only) was the only traffic.
- Branch 2's manifest contains no foreign rows; git status shows exactly the known hygiene footprint.
- No git operations (checkout/reset/clean) were run by branch 2 at any point.

## Near-miss, named

The harmless version happened: read-side confusion. The dangerous version was one step away — if branch 1 had written THROUGH the instrument during the window (drop zone, /create, /fold), the files would have landed in the 2-warehouse tree with rows in the 2-warehouse manifest, silently. Cross-tree contamination with consistent-looking books. The boundary between trees is exactly the kind of boundary where this system already knows errors cluster.

## Fix candidates — [float], for planning, none implemented

1. Per-tree port: derive port from branch/tree name (e.g., 8000+digit) so servers can't collide and clients can't silently switch trees.
2. Server announces its root: /scan response and client header display the serving tree's path and branch. Cheapest honesty fix — the client should never not know.
3. Startup guard: server refuses to start (or warns loudly) if :8000 is already serving a DIFFERENT root.
4. Commit cadence: working files commit at session close so trees stop being five divergent universes (intersects end-of-session-reconcile proposal in schedule.lattice.f6).
5. Operating discipline: one server at a time, started only from the tree being worked. Cheapest of all, weakest of all — relies on memory, and today proves memory is what fails.

These want a frame after discussion. 1+2 together look like the shape; 3 hardens them; 4 is policy beyond this edge.

## Status

- files: all safe, in `.claude\worktrees\1-mind`
- data lost: none
- fixes applied: none — per operator instruction, log precedes plan
- current :8000 server (main-tree root): left running, untouched — not branch 2's to stop
