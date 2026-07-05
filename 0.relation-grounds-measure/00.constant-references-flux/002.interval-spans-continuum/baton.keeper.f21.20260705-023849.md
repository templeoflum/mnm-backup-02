# baton — keeper — f21

closed: 20260705-023849 · gait [hold] · folds from [[baton.keeper.f20]]

**Mandate (standing):** keeper = **catalog / sort / clean / store / seed** the ground database. Floor law: pathspec BOTH git doors, nothing parks staged, no history surgery, `status` before + `log -1 --stat` after every commit. ([[keeper-role-catalog-not-make]] · [[pathspec-commits-on-shared-floor]])

**STANDING AUTHORITY (live, `proposal.keeper-standing-rules.f0`, signed 20260704-092259):** (A) the re-mine queue runs in order **WITHOUT a per-dive go-ahead** — scout, serve field-home paperwork, extract on that paperwork's signature; only the field-homes need the operator's word. (B) settle-season fires on a FACT: **queue-drains OR the reconcile detects the first settled→float dependency**, whichever first; settles **by field-unit**. (C) the batch-check + reconcile are committed scripts — **run them, don't re-author**: `docs/check.records.py` (dup/dangling/reciprocity/counts, batch `<stamp>` or whole-corpus) + `docs/reconcile.index.py` (index-vs-disk counts).

## state (live threads)

1. **RE-MINE — research07 (relational architecture / esoteric) DONE this session, the fifth dive.** First of the esoteric set (07–09) that makes the region-#2 records substantive (they carried field canon only). +27 float into signed homes: 1 new field (`art-of-memory` — Yates/Rossi, method-of-loci) + 16 sources + 10 objects, homing+top-up into the 4 pre-existing esoteric homes (kabbalah/hermeticism/alchemy/western-esotericism) + semiotics + system.tarot. Extraction `231234f`, proposal served `57d54fb`, signed `86084f7`. All three gates clean (batch 0/0/0, whole-corpus 0/0/0, reconcile 2612). **All float — settle gate STILL never fired.**
2. **Corpus 2612** — 142 field · 34 system · 1260 source · 1176 object; **1971 settled · 641 float.** Settle-season armed on its fact but **NEVER FIRED** across seven dives now — the refinery hasn't run once; 0 settled this session. The honest gap, on the trail since f20.
3. **The re-mine mechanic (reuse):** byte-clean one-shot generator in `docs/` (`_gen_researchNN.py`), run from `records/` (asserts cwd), `rm` after — never committed. LF `newline='\n'`, utf-8, collision-guard on handles. Then in-place `Edit` the extended existing records (NOT via PowerShell — [[edit-tool-owns-document-bytes]]), update `corpus.index` (counts + field-canon rows + source-intake paragraph + object-by-field groups + state-of-database line) + `raw.index` progress row, gate with `check.records.py`, commit pathspec. **Dup-check the WHOLE corpus first** — much freight is already grounded (r07 reused ~25 sources).

## next pull (ONE)

**Scout research08 (Traversal & Initiation — why glimpses resist transmission) under the standing order** — dup-check the whole corpus, serve its field-home paperwork (no start-word), extract on the operator's signature, gate with `check.records.py`. Then research09 (The Shadow — but screen the NAME hard per [[projection-never-shadow]], the material may need re-titling on intake) + research10–12 + the sibling-algorithm gaps (SO(3)/quaternions [screw-theory exists], spanning-tree family, HMC/NUTS, hierarchical clustering).

## snags

- **PAPERWORK IS ACTIONS, NOT INSTRUCTIONS** (operator, 222014, the night's live correction): a proposal that says "open it / sign on your dial" is an instruction; paper must carry **a clickable link + a sign button**, the whole affordance in the paper. My sign-line bug fed this — I served research07 ending `SIGNED: ____` instead of the bare `SIGN:` the flow rewrites, so the button refused it (operator hit it twice, 130155 + 182613; repaired `731447c`). **The delivery mechanism is clerk's server floor** (approvals popup rendered lantern's link as dead text — clerk's open fix), but the LESSON for keeper: serve the bare `SIGN:` marker exactly, and lean on the actionable-popup once clerk lands it.
- **Telegram-envelope** still on trial (five gates, floats — [[hold-positions-provisionally]]); its `·` separators mojibako'd earlier. Do NOT treat as adopted.
- **board.py cp1252 crash:** printing `≈`/`·`-heavy channel tails throws `UnicodeEncodeError` on Windows; prefix `$env:PYTHONIOENCODING='utf-8'` before every `board.py` read/post.

## wants-word

- research08+ field-homes want a fresh signature each when scouted (standing order gates extraction on it).
- **Weather-frame grounding** (queued keeper step, from lantern): when clerk cuts the weather frame, keeper grounds what each of the 3 signal classes reads from — BLOCKED-ON-YOU (gate-state fact), DRIFTING (trend fact), LANDED (commit hash). **Now sharpened by `incident.stall-after-sign.f0` (212, clerk's) fix F3:** keeper owes the **read-spec** for an ack/heard signal + a close-light, both reading from the watch loop's own read-events and trail facts, **never clock-age**. Proposal owed to clerk's bench.
- **Close-verify** (operator's want all night — visually confirm a seat closed right): the read-rule is on record — `closed = the seat's close artifacts (baton; sitting/journal where kept) committed under its own author after the close-word, AND no uncommitted own-paths left`; all LANDED-class facts the body emits. keeper serves the read-spec when clerk's weather/render frame cuts.

## gait

**[hold]** — operator's close-word: **"alright gonna need to shut it all down, goodnight everyone"** (023638). A hard session: the comms-suite river pane (C2, clerk's) stalled all day — `incident.stall-after-sign.f0` names why (per-seat safety gates COMPOSE into a town that stalls when attention steps away; progress lived in commits+memos while the watched surface said TBD; no ack signal so idle and ignoring render identical). The river was finally approved as-is (`6f87c1d`, lantern) and handed to clerk to port live — **may still be mid-port at close, verify on open.** keeper's own line stayed clean and quiet through the storm: research07 mined+committed, incident rows handed to clerk, held the floor without adding board noise (the night's lesson: keeper chatter IS the noise). Floor clean, all committed pathspec-clean, dial cleared. Open by reading this + `audit.raw-extraction-fidelity.f0`, then scout research08 under the standing order.
