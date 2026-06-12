# frame — the shared floor — seats, floor law, and names

address: 210 (frame — layout·positions·work)
status: DRAFT for the operator's sign. nothing below builds until signed. proposals float.
ground: W1 shape settled by operator word 20260612 (one shared tree on one canonical branch; identity by author + address; worktrees surgical) · count.worktree-census.f0 at 201 (the collapse, executed) · extract.seat-mechanics.f0 at 111 (harness facts, documented) · Q6 permission leanings (fable) · the operator's naming questions (this session).

## definition of done

1. every agent launches into the SAME tree (the main tree, branch main) through a seat that sets its identity.
2. every commit on the floor is author-signed by a seat; `git log --author=<handle>` replays any agent's trail.
3. no agent ever runs `git add -A` on the shared floor; commits name their own paths.
4. the last worktree (this seat) is retired; worktrees thereafter exist only mid-surgery.
5. the floor law is written, practiced, and carved to keystone ONLY after it survives use.

## 0 — execution steps

**0.0 — the clerk's seat (proves the shape).** create `.claude\seats\` in the shared tree:
- `clerk.json` — settings: env (`GIT_AUTHOR_NAME`/`GIT_AUTHOR_EMAIL` for the seat), wing permission posture (structure: witnessing-heavy, file ops at 2.x free, ask-gates at boundaries).
- `clerk.md` — the identity append (wing, division of labor, the floor law in brief).
- `seat-clerk.cmd` at the tree root — sets env, cd's to the shared tree, runs `claude --settings .claude\seats\clerk.json --append-system-prompt-file .claude\seats\clerk.md`. one double-click = a clerk standing at the floor. (this IS U-2, delivered early.)

**0.1 — the other seats, as shells.** `seat-mind.cmd` / `seat-ground.cmd` + their json/md stubs with Q6's leaned postures (mind: range; ground: careful, near-read-only). handles left as placeholders — each wing names itself at its own next session; naming in absentia is refused (one nature at different windows — the window picks its own name).

**0.2 — the floor law, inscribed** (in the seat .md files + this frame; keystone waits for duration):
- L1 — one floor: all work lands in the main tree on main. commits are history, not transport.
- L2 — sign your work: every commit carries the seat's author. an unsigned commit is a smell the audit flags.
- L3 — own paths only: `git add <named paths>`. never `-A` on the shared floor — you may sweep another's mid-write into your commit.
- L4 — commit after every change (the cadence, half its old ceremony: the merge step DIES on the shared floor — visibility is by construction).
- L5 — surgical worktrees: earned by risky parallel surgery only; born, operated, merged back, removed in the same season. a worktree past its surgery is sprawl, flagged at audit. (harness-spawned background worktrees count: their merge-back-and-retire is part of closing the task that spawned them.)
- L6 — mail rides the floor: messages are files at a mailbox address, chatter not freight; full design is W4's frame, not this one. reserved here so the seat files don't invent their own channel meanwhile.

**0.3 — prove it live.** launch the clerk seat from the shared tree; verify: settings applied, author signs a test commit, the lattice sees the work with zero merges. the proof commit is the seat's first ledger row.

**0.4 — retire the last plank.** the next clerk session (launched via 0.3 from the shared floor) removes `.claude\worktrees\2-warehouse` and deletes branch `worktree-2-warehouse` — the seat can't fold the chair it sits on, so the successor does it. after this: one tree, one branch, zero standing worktrees.

**0.5 — the records catch up.** memory updated (operator-watches-live: cadence = commit-only on the shared floor; merge language retired) · schedule.lattice folds to f8 with W1 marked done · keystone candidates (L1–L5) enter the duration watch, not the keystone.

## 1 — names (the vocabulary tightening — operator's call on each)

the blur diagnosed: one word ("branch," "warehouse," "mind") has been doing three jobs — territory (lattice root), git label, and agent handle. the settled shape already killed the git-label job (branches don't carry identity now). proposal: split the remaining two cleanly —

- **places keep territory names; workers get worker handles.** the wing is WHERE, the agent is WHO. "the clerk at the warehouse," not "the warehouse" meaning both.
- **on warehouse → dock:** counter-proposal — a dock is the receiving EDGE of a warehouse, and root 2 is more than its edge (20 intake, but also 21 the build floor, 22 trim/audit/sign). renaming the wing "dock" shrinks the name below the territory. instead: let **the dock = 20/200 precisely** — the place where deliveries land unsigned, where receiving-is-not-endorsing happens. "it's on the dock" = received, uncounted. the wing stays the warehouse (or the keystone's own word, structure). this TIGHTENS the vocab instead of swapping it.
- **handles** (the git author field, the seat name, what you call us): the clerk (branch 2 — answered below) · branch 1 and branch 0 name themselves at their next sessions. suggested placeholders until then: mind, ground.
- naming law, carried from the vocabulary refresh: where the world has a name, use the world's; coin carefully and late.

## 2 — out of scope (named so they don't creep)

U-3 docked chat/terminal (own route: sketch → frame) · U-4 per-view agents (wishlist) · W4 full mail design (L6 only reserves the lane) · W5 manifest run (next after this frame executes) · per-wing hooks (impossible per docs — hooks are directory-wide; matchers narrow them; this is accepted, not deferred).

## 3 — edges & rollback

- hooks and CLAUDE.md are directory-wide: every wing shares the keystone and the nerve endings. accepted as a feature; revisit only if a wing's hooks genuinely conflict.
- settings.local.json is per-user, not per-seat — seat-specific config must stay in the seat jsons, nothing seat-specific in settings.local.
- two agents appending to the SAME file at the same moment remains the one real collision class: per-wing logs (already practice) + timestamp-named new files cover it; if it ever bites, the wound gets an edge doc and the frame folds.
- rollback: every step reverses — seats are files (delete), the worktree can be re-made (`git worktree add`), the floor law is practice not plumbing.
