# audit — template placement (cross-branch landing at 100) — f0 — 20260614-152735

**Trigger:** operator caught two templates landing at **100** (root 1, the mind/lantern wing) when their content is warehouse/system (root 2). Flagged as a big error: trace it, name the cause, find how to prevent it.

## The finding (plain)
Templates are content-neutral scaffolding — a blank form belongs in the branch its **subject** serves. Two templates broke that:
- `template.baton.f0` — about seats/hand-offs (a **structure/root-2** concern) → sits at **100 (root 1)**. WRONG.
- `template.orientation.f0` — about the address system (a **structure/root-2** concern) → sits at **100 (root 1)**. WRONG (mine, this session).

Two templates are placed correctly, by content:
- `template.corpus-records.f0–f2` → **000 (root 0)** — keeper's records, in keeper's wing. RIGHT.
- `template.research-operation.f0` → **000 (root 0)** — RIGHT.

## The trace (timeline — verified against git)
1. **2026-06-09 · `43a5c2b` · templeoflum (operator)** — first template in the repo, `template.research-operation.f0`, placed at **000 (root 0)**. The original practice was **placement by content's branch.**
2. **2026-06-12 · `2a41118` · clerk** — `template.baton.f0` placed at **100**, following keystone line 182 (`template (100)`) literally. Its own header hardened the choice: *"address: 100 (template home per keystone type list)."* This **deviated** from the 000 practice and minted a self-justifying precedent.
3. **2026-06-14 · `3548d2b` · keeper** — corpus templates placed at **000 (root 0)**, by content. Keeper read placement **by subject's branch**, not by the literal 100 — the right principle, independently.
4. **2026-06-14 · `c2af76e` · clerk (this session)** — `template.orientation.f0` placed at **100**, replicating the baton precedent + the keystone literal. **The error propagated.**

So the same doc-type ("template") landed in two different branches because two agents read the placement rule two different ways: keeper by content-branch (000), clerk by literal keystone address (100).

## Root cause
**Keystone line 182 assigns `template (100)` as if a template were inherently mind/wonder content** (it's grouped with `parked (100)`, `sketch (101)`). But a template is **content-neutral** — it has no native branch; it inherits the branch of its subject. The doc-type list's single-literal-address model works for type-bound documents (manifest→201, dream→122) but **breaks for content-neutral types.** (`note (any)` already escapes the model; `template` should too.)

The likely original thinking behind `template (100)`: "a template is a blank *frame for a thing*, and 100 = wonder·bounds·frame," — conflating the *concept* of framing with a *literal* address. A category error at the seed.

## The chain (how the seed became two wrong files)
1. **Seed** — keystone line 182 pins template→100 (category error).
2. **Hardening** — a prior clerk followed it literally and wrote a self-justifying header into `template.baton.f0`, turning a questionable rule into a citable precedent.
3. **Propagation (mine)** — I saw the keystone rule *and* the baton precedent agree, and placed the orientation template at 100 **without running the content-vs-branch check.**
4. **Discounted evidence** — the corpus templates at 000 were right there contradicting the 100 rule, but I anchored on the nearest *same-named* precedent (a "template") and mentally filed the 000 ones as "keeper's records," so they didn't register as counter-evidence.

## What the thinking was (honest)
Mine, verbatim reconstruction: *"Where do templates live? `template.baton` is at 100 and cites the keystone. Keystone says template→100. So orientation → 100."* I pattern-matched to the nearest precedent of the same type and the literal keystone line, and skipped the deeper principle — **a file lives in the branch its content serves.** The precedent and the rule reinforced each other, which felt like confirmation; it was the same error twice.

## Why it matters now
- It violates the branch/wing model — each branch holds its own content; structure scaffolding doesn't belong in mind's wing.
- With the per-seat bodies now built (Q6), clerk writing into root 1 would (correctly) trip an *ask* fence — the error and the new safety model are in direct tension. The bodies would have *caught* this on next relaunch.

## Prevention (recommended)
1. **Fix keystone line 182** — change `template (100)` to `template (any / by subject's branch)`, matching `note (any)`. Consider a one-line note on the doc-type list: *content-neutral types resolve to the branch of their subject, not a fixed address.* [keystone is [float] — correctable]
2. **Placement check before any Write** — ask *"does this file's branch match its content's branch?"* A warehouse/system file in root 0 or root 1 is a cross-branch smell — stop and check. (Echoes the keystone's own observation: "errors cluster at boundaries… a location is not a permission.")
3. **Precedent ≠ principle** — when a precedent conflicts with a first-principles read OR with other evidence on the floor, **surface it, don't follow silently.** "Matches the keystone" means *coheres with the design*, never "the structure says so."

## Recommended corrections (moves left to operator word — these are ledger + cross-wing ops)
- `template.baton.f0`: **100 → root 2** (seat/system scaffolding). Exact cell TBD (200 by the x00-of-branch pattern keeper used, or beside the live batons).
- `template.orientation.f0`: **100 → root 2** (system scaffolding). Same cell question.
- `template.corpus-records.*`, `template.research-operation.f0`: **already correct at 000** — no move.
- Update `template.baton.f0` header: it cites "template home per keystone type list" (the bug) *and* says batons live at 222 (stale — the per-branch `x22` rule supersedes). Both lines need rewording when it moves.

## Related
- keystone (`CLAUDE.md`) line 182 — the doc-type list [float], the seed.
- `template.baton.f0` at 100 — the hardened precedent (+ its stale 222 baton-home line).
- the baton-placement drift flagged alongside: keeper's live baton at 002, operator's rule says 022 — same family of "where does X live" slippage.
