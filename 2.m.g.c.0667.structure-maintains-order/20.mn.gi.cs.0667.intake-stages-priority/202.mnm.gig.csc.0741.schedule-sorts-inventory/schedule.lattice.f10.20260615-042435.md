# Schedule — lattice — f10 — 20260615-042435 — THE MASTER INDEX, SEASON-CLOSE CLEANUP

**Completion-cleanup fold (operator word, 20260615).** The workspace & tooling season closed (build-spine done through W3, verified in `audit.season-review.f0` at 221). This fold cleans the done season out of the living layer — the blow-by-blow append log and the current-season table live on in **f9** as trail (don't overwrite; the detail is preserved there). f10 carries the standing inventory forward and foregrounds the **season sequence ahead** so the next season opens on a clean board.

## the operating rule (operator word, 20260612 — stands)

**The schedule is the schedule — it accumulates.** New work is APPENDED in place. Rearranging is REORGANIZING in place. Neither folds. A fold is earned only by **(1) completion cleanup** — done work cleaned out of the living layer (this fold), or **(2) format change** — the shape deliberately redrawn, discussed first.

---

## THE SEASON JUST CLOSED — workspace & tooling

Signed order **W7 → W5 → W2 → Q2/Q3 → W4 → W3** — done, every claim verified against committed code in `audit.season-review.f0`. What it delivered:

- **W7 seat protocol** — close-out ritual, baton/hand-off, switch signals; `template.baton.f0` at 200; lived in all three seats.
- **W5 the floor** — full-floor scan + manifest rebuild (fresh baseline), H13 scan-coverage fix, dock dispositioned (R7), `nul` hunted and killed, riemann twins kept-with-note, clutter trimmed. Books true at season-close.
- **W2 small cuts** — C7 (UTC log pane), 0418 (reader clears), C4 (ratio [0,1) asymmetry), fetch-failure banner, U-1 (open-folder /reveal), universal-fold-on-intake, C3 (kept branch-colored), lattice.bat duplicate-guard. All play-confirmed.
- **Q2/Q3** — presence-line statusline + boundary-witnessing PostToolUse hook (`statusline.py`, `witness.py`).
- **W4 comms** — universal memo board at 222 (server sole writer), lattice memos panel, memo→file deep-link.
- **W3 config/harness** — Q6 per-seat bodies (keeper/lantern/clerk), Q9 SessionStart wakes (`wake.py`), Q1 orientation template, U-5 statusline HUD. **Q4/Q5/H14/Q7/Q8 deferred** (see the tooling/UI season below).

**Verified-present but NOT proven-live:** the W3 harness (bodies, wakes, witness, statusline) binds only on a seat's launcher relaunch. **Keeper running live reports the hooks are not firing** — so present-and-wired ≠ working. This is now an **active bug** (see transition-fix candidates), not a closed item.

---

## THE SEASON SEQUENCE AHEAD (operator roadmap — timelines LOOSE, next season may move them)

```
TRANSITION (now) ─→ BUILD season ─→ the REWORK ─→ TOOLING/UI/BUG-FIX season ─→ build-again OR process-old-unfiled
   cleanup both         TS rebuild      system cleanup +      the deferred set lands         operator's call
   branches             (tsr unpause)   naming + keystone     (Q/U debt, W9 client)
```

- **TRANSITION (this period)** — clean and wrap **mind (root 1)** + **warehouse (root 2)** for the next season. Ground (root 0) stays out — settling. Audit: `audit.season-review.f0` (221). Mind surveyed clean (one staged thread: `dream.naming-grammar`, mind's own). Warehouse cleanup: this fold + transition-fix candidates below.
- **BUILD season (next)** — **the TS rebuild.** The tsr chain unpauses (T1 study op opens it); K1 rebuild TS with current ground + toys, K2 spline continuity. After this season TS is in a state the system can be cleaned around.
- **The REWORK (after build)** — clean up the whole system + refresh the **file-naming** + freshen the **keystone**. Fed by: the keystone drift register (`audit.season-review.f0` §III, 7 entries), the naming dream (`dream.naming-grammar`, mind's thread), W8's file/type/fold refactor, the doc-type registry (server 12 / keystone 17 / practice ~24). The naming system is **rebuilt fresh here** — which is why naming/keystone fixes defer to this point, not now.
- **TOOLING/UI/BUG-FIX season (after the rework)** — where the **deferred set lands**: Q4 whisper · Q5 ask-gates · H14 fold-ceiling UI · Q7/Q8 polish · U-3 docked chat · U-4 per-view binding · U-7 inbox · U-8 signing desk · **W9 full client UI/UX rebuild** + the UX-debt ledger (B4/B5/B6/B7/B10-drag-to-pin restore, View-1 rethink, per-address feel, document scroller, compaction readout, dead-code sweep, renderV2Files dedup, subfolder-freight display).
- **THEN** — back to build, or start processing old material not yet in the system. Operator's call.

**Carry forward through the whole arc (meta):** only **(a) the rebuilt TS** and **(b) properly-formatted research**.

---

## TRANSITION-FIX CANDIDATES (this period — small, fixable now)

1. **Witness/wake hook reliability — ACTIVE BUG.** Keeper reports the W3 hooks don't fire live, though `witness.py`/`wake.py` read correct and are wired in the seat JSONs. Diagnose why the PostToolUse/SessionStart hooks don't run under the launcher `--settings` binding. Couples with **witness-hardening** (atomic append / retry) — the standing snag (the witness silent-miss fired 3× across the season; clerk reconcile held the books). If we're in the hooks anyway, harden the append. **Operator: "we could probably fix that."**
2. **Tests to land — TO DISCUSS.** `witness.py` and universal-fold (96e6eef) carry "unit-tested" in their commit messages but no test artifact is in the repo (session-local, never committed). Same pattern the systems-sweep caught (bench shim session-local). Decide: write/commit durable tests, or drop the claim. **Discussion pending (operator next).**

---

## STANDING / PARALLEL (not gated by the season sequence)

- **Ground's verify season (keeper, root 0)** — runs parallel. Promote corpus records `float→settled→verified` on a field-unit basis; first landing spot is the operator's to name; owed global `used-by` reciprocity pass over ~360 objects. Not this branch's work; tracked so the books know it's live (corpus count moves while it runs).
- **Books reconcile** — a hard manifest reconcile is owed once ground stops adding files. Was true at season-close; the witness hook is meant to keep it live going forward (pending fix #1).
- **The parked lattice seat board** — STAYS PARKED (operator word). Future purpose: it becomes the **launcher** once there's a full roster of seats. Kept in `server.py` (`op_seats` + `/seats`) + client; needs a server restart to function.

---

## STANDING INVENTORY — chunks (compressed; full pre-close detail in f9)

**Done & verified:** O (TS handoff sort) · P (hygiene) · W1 (shared floor) · W5 (the floor) · W2 (small cuts) · W4 (comms core) · W7 (seat protocol) · H1–H7, H13 · B1–B3, B9 · C2/C3/C4/C7 · R1/R6/R7/R8 · Q1/Q2/Q3/Q6/Q9 · U-1/U-2/U-5/U-6.

**Open, phased ahead:**
- **A** settle floating ground — A4 (sort order) · A5 (view-as-mode) still float; A7 keystone "done" but drifts (→ rework).
- **B** ungated fixes — B4 (persistence re-scope) · B5 (selector focus-nav) · B6 (dead code: CompactionEngine, v0Open, orphaned CSS, server DOC_TYPES, renderV2Files dedup) · B7 (minimap) · B8 (partial) · B10 drag-to-pin restore → all the **tooling/UI season** (W9 client).
- **C** gated fixes — C1 (moot unless engine revived) · C5 (blocked by A5) · C6 (tree vocab in CSS) → rework/tooling.
- **G** file distribution — G1/G2 (220 pile, 31 files unsorted; preservation risk: "permutation pairs" lives only in observations.txt — extract before any 220 touch) · G3 (root clutter) → rework neighborhood.
- **H** tooling — H8–H11 parked · H12 (feature inventory = R5) · H14 (fold-ceiling UI) → tooling/UI season.
- **K** carry-forward — **K1 rebuild TS = the next BUILD season** · K2 spline · K3 process-doc rebuilds.
- **Q** harness — Q4/Q5/Q7/Q8 → tooling/UI season.
- **R** practice — R3 (smallness line, carrying) · R4 (task-list format — this fold is an exhibit) · R5 (feature inventory) · R9 (pre-convention renames, joint) → W6/rework.
- **U** jots — U-3/U-4/U-7/U-8 → tooling/UI season.
- **W8** file/type/fold refactor — clerk's share done-as-handoff (census + naming questions surfaced); the **refactor itself → the rework**.
- **tsr** chain — PAUSED behind T1; **unpauses as the next build season.**

**Rests:** L (three-branch concurrency — real test as seats run fluidly) · M (ground truth library — ground builds the corpus instead) · N (instrument workshop — with TS) · I (research ingestion — ground's corpus supersedes).

---

## Watch-items (standing)

fold-discipline per-type triggers (accumulator class settled: schedule/manifest-kin fold only on completion-cleanup [this fold] or format-change; other types float) · doc-type registry three-way drift (→ rework) · floor-guideline L1–L6 duration watch (candidate to rise into keystone at the rework — survived the season) · **NEW: "unit-tested" claims with no committed test artifact** (witness, universal-fold — pattern, tie to transition-fix #2) · **NEW: hooks present-but-not-firing** (transition-fix #1) · warehouse-scope strain (clerk is the whole of branch 2; inspector is a real future seat deferred to the fresh-start, not stood up before then).

## Standing corrections of record

- **Three branches = the lattice roots 0/1/2.** The git checkout is the whole system. Identities tie to addresses, defined where work has happened.
- **No law language.** Indefinite float / guideline stage until one COMPLETE cycle runs (100 → 0). Root 0 is still empty — that cycle has never closed.
- **Clerk is the whole of branch 2 right now** (intake, counts, ledger, trail, audit, signing). Builder (21x) and inspector (22x) are real future seats, seated in their own seasons — inspector deferred to the fresh-start, not before.

---

*Append below this line. Reorganize in place. Next fold: completion cleanup or discussed format change only.*
