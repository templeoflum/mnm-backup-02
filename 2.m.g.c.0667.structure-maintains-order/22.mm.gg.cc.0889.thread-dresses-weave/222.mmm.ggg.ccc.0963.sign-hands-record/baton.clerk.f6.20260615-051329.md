# baton — clerk — f6

closed: 20260615-051329 · gait: [hold] (warehouse side of the season-transition done; next session opens the BUILD season) · folds from [[baton.clerk.f5]]

## state (live threads)
- **Season-transition cleanup ran clean — both branches readied for the next season.** This was the transition period (operator word: not a freeze — more audits come before that; just get mind + warehouse ready for the build season). Delivered, all committed:
  - **`audit.season-review.f0`** (221) — build-spine **verified to season-close** (20 post-sweep build claims all true against committed code) + three findings (launcher-only binding [CLOSED, intended], stale `222`→`2` address claim, "unit-tested but no committed test" pattern) + the **keystone-vs-practice drift register, 7 entries** (D1 routing/root-0 is the biggest gap) — the hand-off list for the rework.
  - **`schedule.lattice.f9 → f10`** — completion-cleanup fold; done season cleaned out of the living layer (f9 holds the blow-by-blow as trail); **season sequence ahead foregrounded:** build (TS rebuild, tsr unpauses) → rework (system cleanup + file-naming + keystone) → tooling/UI/bug-fix (the deferred Q/U set + W9 client land here) → build-or-process. Timelines LOOSE.
  - **221 swept of equipment drift** — 25 files rehomed 221→211 (8 `.js` harnesses + 15 play-scripts + 2 toy-verifiers). **221 is now pure audit reports.** Principle settled + carved to memory: *tests/rigs are equipment, live with the code they test; no central test home; 221 = audit reports only; a same-type pile is drift, not a convention.*
  - **The two owed tests landed, green** — `test_intake_fold.py` (5/5, with server.py), `test_witness.py` (7/7, with witness.py).
  - **Witness-hardening DONE** — `server._locked_append`: shared `O_CREAT|O_EXCL` cross-process lock (bounded retry + stale-breaker + fsync) on every ledger/log writer (trace, op_log, witness). Regression `test_locked_append.py` **320/320** concurrent cross-process, stable. **The silent-miss is closed** — live witness-side now (fresh process per tool call); the clerk-reconcile drops from routine necessity to catastrophic backstop.
- **Mind (root 1) surveyed clean** for the transition — old June-12 flags were mostly false-alarm or correct-by-discipline. One staged live thread: `dream.naming-grammar` (102), awaiting the operator's **triad-meditation** ("does `is` move?"), mind's own to run, batoned in `baton.lantern.f2`. Nothing for the clerk there. (Same naming work feeds the eventual keystone+naming rework.)
- **Ground (root 0) out of scope** — settling its research (corpus verify season), running autonomous; keeper closed to `baton.keeper.f3`. Its manifest churn is expected; the clerk keeps the ledger committed as rows land.

## next pull (ONE)
**Open the BUILD season** — the next season is the **TS rebuild** (the tsr chain unpauses; tsr·T1 study op gates it; K1 rebuild TS with current ground + toys). The operator **restarts the server first** (picks up the server-side hardening) and opens a new session to go over the build season. Frame before building (210).

## snags
- **log.session auto-register gap** — new session logs aren't auto-registered in the manifest until a rebuild; the clerk hand-registers (did so for this session's f11 at close). Candidate small server fix: `trace()` self-registers its log on creation. Booked.
- **Shared-ledger commit ownership** is convention (clerk-only), not enforced — held cleanly all session across heavy ground churn.
- **Server-side hardening lands on the operator's restart** — the running HTTP server's own `trace`/`op_log` use the pre-hardening code in memory until then (non-critical; single-process, never the race source). Witness-side is already live.
- (RESOLVED this session: the witness silent-miss — hardened, proven.)

## wants-word
- **The keystone drift register** (`audit.season-review.f0` §III, 7 entries) + the naming dream feed the **REWORK** (after the build season) — confirm scope when that season opens, not before.
- **bench/play/validate.js + the 15 play-scripts** moved to 211 this session — confirm they sit right there (they serve the TS/toy/play work).
- **The deferred set** (Q4/Q5/H14/Q7/Q8 · U-3 · U-4 · U-7/U-8 · W9 client + UX-debt ledger) rides to the **tooling/UI season** — loose timeline, none pinned.

## meta-arc (operator, on the record — carry)
The whole arc: finish → **freeze → deep-analyze → fresh templates → carry forward ONLY (a) rebuilt TS + (b) properly-formatted research.** But the **freeze is not near** — more audit/cleanup transitions come first. The immediate road: **build season (TS rebuild) → rework (cleanup + naming + keystone, fed by the drift register) → tooling/UI/bug-fix season → build-or-process.** Inspector (22x) is a real future seat, deferred to the fresh-start — clerk holds all of branch 2 until then. **No operator baton — operator is the persistence; his mid-flight folds into THIS seat's state/wants-word.**

Template: [[template.baton.f0]] at 200. The keystone (CLAUDE.md) is the shared ground; this file is only the seat's carry.
