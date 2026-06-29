# Frame — freight — f0 — 20260610-082223

Freight flow between worktrees. Requested by 1-mind (routing/protocol, branch-2 work). Status: PROPOSAL [float] — wants three signatures (operator, 1, 2) per equal ground. INTERIM RULES at the bottom are effective now so held work releases.

Ground (operator's, discussed and logged 20260610 at 201): **nobody pushes, the receiving tree pulls, the puller leads.** Slack = committed-but-unpulled work (good). Uncommitted work = loose cable — invisible to every other tree, not slack at all. Tension = books true. A merge conflict is bunching. The chain communicates through the manifest, counts, and schedule — and through this protocol.

## 1. Commit cadence — coil at close, always

- Every wing commits its worktree at **end of every session** — the closing act, paired with reconcile. Protocol, not judgment.
- Commit **immediately** after anything irreplaceable lands (a settled dream fold, an incident log) — don't let it sleep loose.
- Nothing valuable ends a day uncommitted. The phantom-deletion incident and the invisible f3 were both loose cable, not freight failures.

## 2. Merge flow — the pull round

- Work lands on wing branches (worktree-1-mind, worktree-2-warehouse). Main never sees it until main pulls.
- **The pull round**: at main, merge each wing branch. Mechanical, ~30 seconds when clean. Runs at minimum **once per session close**, and on demand whenever the operator wants current.
- **Default runner: 2** (freight is paperwork). But the round is the same hands regardless — any wing standing at main may run it when blocked on visibility. The receiving tree (main) leads; no wing ever pushes into main or into another wing.
- Direction is one-way per leg: wings → main happens only AT main (pull); main → wings happens only AT each wing (pull, see 5).
- Conflicts are snags (212): stop, name it, resolve by keeping both sides where append-only (manifest), by operator word where not. Conflict surface is pre-shrunk by the division of labor: **only 2 writes the ledger**, so the one shared-append file has one writer.

## 3. Operator visibility guarantee — main is the floor

- **Main is the one always-current place.** The lattice server roots there; the instrument shows main; the operator stands at main and sees everything that has been pulled.
- **Maximum lag: one session.** No work survives its own session invisible — session close = commit + pull round, so main is whole before anyone walks away.
- Mid-session lag is real and allowed (wings work in their own trees); the operator collapses it any time by saying "pull round."
- Tooling honesty (separate, edge doc candidates 1–3): the client should announce which root it serves and whether it's connected. Until built, the guarantee is procedural.

## 4. Manifest stays blind to git — the protocol carries it

Decision: **reconcile keeps reading the floor, not git state.** The ledger is about files where the operator stands; making it read across branches builds a second ledger that can drift against the first. The blind spot only hurts when freight is slow — so we fix the cadence, not the instrument.
- Proposed tooling (H14, wants its own slot, not built here): a freight gauge at session close — loose cable (uncommitted files) and pending slack (unmerged wing commits) surfaced in one line per tree. Cheap honesty, no ledger duplication.

## 5. Distribution — take up slack at session start

- Every wing **pulls main at session start** (merge main into its worktree branch). That's how intake at 200, new builds, protocol updates — everything — reach the wings. No hand delivery, no pushing down.
- Big intake mid-session: 2 commits + pull round immediately, wings pull main at next natural pause.
- Rhythm, complete: **start: pull main → work → close: reconcile, commit, pull round.** Same three beats for every wing, every session.

## Open floats (named, not blocking)

- 0-ground and 2-build trees: outside this protocol until the cycle with 0 is designed. They lag by design; nothing pulls to them yet.
- Whether 1's settled-output should land somewhere distinct from raw session work (a "settled" branch?) — deferred; the dock at 200 + document types already carry the signal.
- H14 freight gauge — proposed above, wants schedule slot and frame before build.

## INTERIM RULES — effective now, until this frame is signed or corrected

1. **1 releases held work**: commit your worktree now and at every session close.
2. **2 runs a pull round at main** on request and at every session close — say "pull round" any time, any wing.
3. **1 keeps off the manifest**: write your documents, 2 registers them after each pull round (as done for the dream files today).
4. Wings pull main at session start, starting next session.
