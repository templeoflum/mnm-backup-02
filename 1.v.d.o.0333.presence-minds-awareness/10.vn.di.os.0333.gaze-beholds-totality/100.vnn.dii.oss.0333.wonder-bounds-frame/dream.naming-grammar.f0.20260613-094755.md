# dream — naming-grammar — f0 — 20260613-094755

**MODE: DREAM. Hold loosely.** This log begins at 100. Run it until it produces no new ideas, no new angles unrun, everything in good shape, and the only moves left need deep planning/decisions — not more contemplation or observation. Then it moves to **112** (`dream.artifact-settled` — catalog/sift/consolidate) → **122** (`dream.artifact-tasks` — extract actionable tasks + open questions) → handed to **202** to fold into the schedule. Nothing here is built or decided. Wants get logged for the sift.

## the seed

The file naming / type / fold system needs a rework (W8). It grew, in conversation, from "audit the doc-types" into something too big to settle in chat — a whole grammar question. The clerk staged it here so it can dream properly instead of being crammed into a back-and-forth. Intake already done and on the floor: `count.type-census.f0` (201) + the type↔address alignment map (in the clerk session record).

## where the seed already sprouted (conversation growth — starting material, held loosely)

- **Three systems, each carries one thing:** address = *where* (location), fold = *which version* (current/verifiable), name = *what it is + what it's doing inside*. The name is the underbuilt one.
- **The name should have its own is·does·goes grammar** (same as the address): **is** (noun/kind) · **does** (verb/subject it acts on) · **goes** (modifier/version-state). Current `type.scope.fN.timestamp` is already this shape, just undisciplined.
- **`is.does` = the lineage; `goes` = the instance.** Same name at two versions isn't a collision — it's the fold trail. Collision only happens when `goes` fails to differentiate (the same-stamp twins). Candidate fix: make the **fold number the identity key** (monotonic, never two f0s in a lineage), **demote the timestamp to provenance metadata**. Then same-name-same-version is impossible by construction; timestamps may even collide harmlessly.
- **The name is also the search/display system:** query any slot — `is=frame` (all frames), `does=seat-protocol` (one thread across all kinds/stages), `max(goes) per is.does` (current versions only). Location-independent, sorts globally.
- **Type is a projection of the structure.** The cells already *name* the kinds: 202 `schedule-sorts-inventory` → schedule; 112 `break-lands-edge` → edge; 222 `sign-hands-record` → log(record)/baton(hands); 201 `manifest-confirms-count` → count/manifest; 111 `view-connects-continuity` → survey/extract/crossref. The `is` vocabulary may be **read off the cells**, not invented.
- **Two families fell out:** *growth kinds* that travel/ripen (seed → dream → … → build) vs *record-keepers* planted at home (log, count, audit, survey, edge, baton, myth). This is the operator's freight/paperwork split.
- **States are `goes`, not `is`:** settled, parked, template describe where-in-a-stage a thing sits — a *parked dream*, a *template frame*. Products (tools/instruments: lattice, trajectoscope) **exit** the doc system at the build (211); freight (marginalia, received reports) is its own thing.
- **THE CYCLE (operator's ground truth, the spine):** seed (conversation) → **dream @100** (run dry) → **112** `dream.artifact-settled` (catalog every idea/claim/question; fold + sift; release overlaps, contradictions, the eager/too-much/not-quite-right; consolidate to agreed + accurate) → **122** `dream.artifact-tasks` (extract actionable tasks + open questions) → **202** schedule → frames/sketches/plans → builds → problems → **new seeds** → back to 100. **220/221/222 fire at the thresholds** (trim, audit, sign at each transition). The cycle is generative — it spirals, builds spawn seeds.
- **Flow-health is the failure test (operator):** anywhere a node restricts, hoards, or privatizes flow, the cycle can't resolve and the system falls apart. Early smells noted: 220 sitting on the legacy research mass (slack not pruned), the dock's freight residue.

## open angles still to run (the dream isn't done)

- **dream vs sketch** — different cells (102/100 vs 101) say two kinds; the seed-cycle says maybe one seed at stages. (The cycle reframe leans toward *stages*, but unresolved.)
- **111 crowding** — survey / extract / crossref / map: one "view" kind with `does` splitting them, or genuinely distinct modes (extract = distill-from-source vs survey = look-across)?
- **count vs manifest** (same cell 201) — one kind, `does` splits snapshot from live ledger? And manifest/schedule as **accumulators** (fold only on cleanup/format-change) — does the grammar mark accumulator-class?
- **the record-keeper family's own grammar** — do log/audit/count/etc. follow is·does·goes too, or are they a different shape (they don't ripen)?
- **slot formatting** — what do `does` and `goes` literally look like on disk and *spoken*? The conversational handle (`201/census`, `census·f0`) the lattice could resolve.
- **fold-as-identity enforcement** — server makes fold monotonic per lineage; name-reuse guard at create (warn "this is a fold of X, not a new doc").
- **the growth stations as an ordered sequence** — does `is` know the next station (so the warehouse can *see* "stuck three stations back" / flow hoarding)?
- **legacy non-convention** (54 .md) — rename to grammar, or bless an inherited/exempt class? CLAUDE.md + manifest.live.md are deliberate exemptions regardless. Near-miss fixes (`audit.lattice.pN` → fN; no-timestamp stragglers).
- **named artifacts & freight** — where do compass/lattice/trajectoscope/marginalia/received-reports sit if they're not `is`-kinds? A travel-class marker?
- **the recursion** — this dream is dogfooding the very system it designs; the cycle is being used to redesign the cycle's own grammar.

## the question the seed is really asking

Is the document system best modeled as **a thing's place in a living cycle** (stage + thread + version), with "type" a thinner label than we assumed — and can that be made so the warehouse/server/lattice *create, validate, search, and watch the flow* from the name alone?

---

## the dreaming — pass 1 — 20260613-102304 (append, no fold; MODE still DREAM)

**THE HEADLINE.** The 29-type explosion is an *optical illusion of a flattened grammar.* We mashed `is·does·goes` into one word ("type"). Pull the three slots apart and 29 collapses toward ~12–15 real `is`-kinds — and almost every "unregistered stray" is revealed as a `goes`-state, a `does`-thread, a *product that exits the doc system*, or *freight in the dock*. The registry doesn't need to adopt 12 strays; it needs to stop reading three slots as one.

**The collapses (the meat of the night):**
- `float` → **`goes`**, not a type. A survey/map in unsettled state. Same slot as parked/template/settled/live.
- `template` → **`goes`**. `frame.intake.template` = fold-coordinate "0, the empty origin before any instance."
- `lattice` / `trajectoscope` → **products** (built at 211, exit as `.html` instruments). The only docs are paperwork *about* them: `audit.lattice` = is=audit, does=lattice. Thing and paper-about-thing split clean.
- `compass` → a **kit (collection noun)**, not a type. Members are the real kinds: charter→frame, wake→log, map→survey. Kit identity lives in `does`: `frame.tsr-charter`, `log.tsr-wake`, `survey.tsr-map`. Split-spelling dissolves.
- `journal` → `log` at `goes=live`. `wake`/`charter` → compass members. `marginalia`/received-reports → **freight at 200** (un-ingested material; 200 = delivery·receives·material; signed into a real `is` or stays raw in the dock).
- **Survivors as genuinely-new `is`-kinds:** maybe `baton` (222 sign·hands·record, the "hands" half — real, the seat-relay made it so); arguably `list`/`map` if the 111 view-family splits by mode. ~2–3 of 12, not 12.

**The cell-reading confirms itself — `is` reads OFF the cells, not invented:**
- **111 view·connects·continuity** is crowded *because* survey/extract/crossref/map/list are one kind split by `does`: survey=look-across, extract=distill-from-one, crossref=link-two, map=place-in-space, list=enumerate. One view-kind, five verbs — not five types.
- **201 manifest·confirms·count** holds two: count=snapshot-once (folds normally), manifest=track-continuously. Accumulator isn't a type — it's `goes=live`. `manifest.live.md` already spells it; generalize to anything (schedule too, probably).
- 202→schedule, 112→edge, 222→log/baton, 121→myth, 101→sketch, 102→dream, 210→frame. Where a "type" *doesn't* land on a cell, that's the tell: freight, product, or state — not an `is`.

**THE HINGE (one decision everything hangs on): `is` is allowed to MOVE.**
For *growth-kinds* (freight that ripens/travels), `is` = **the station, not the identity**. Identity is the `does`-thread:
`seed.naming-grammar → dream.naming-grammar.f0 → frame.naming-grammar.f0 → build.naming-grammar.f0`
Query `does=naming-grammar` → the entire life prints in order. If `is` is drawn from an **ordered station list** (seed<dream<sketch<frame<build), the warehouse computes **flow-health from the name alone**: how long has `does=X` sat at `is=dream` without advancing? A dream that won't release to the sift is a hoarder, and the name makes it *visible*. The 220 legacy pile + the dock's freight residue stop being vibes — they become a query (threads stalled at a non-advancing station). Payoff chain in one grammar: **name → search → display → flow-watch.** Moving-`is` is the hinge that makes the seed's *watch* fall out for free.
Counterpart: *record-keepers* (log/count/audit/edge/myth/baton) have a **fixed `is`** — they witness the travelers, don't ripen. Cleanest formulation of the operator's freight/paperwork split: **freight = moving-`is`; paperwork = fixed-`is`.**

**`goes` = the version-coordinate; `fold` = identity.** One slot holding a fold number OR a state-word: `fN` (normal), `live` (∞ always-current accumulator), `template` (0, empty origin), `parked` (frozen mid-line). **Timestamp demoted to provenance** — kept for sort/uniqueness, no longer identity. Identity = `is.does.goes`. Then the same-stamp twin collision is impossible by construction (server assigns f0 once per lineage). `max(goes) per is.does` = "current verifiable version" for free — exactly what the keystone's 201 three-point check hunts for.

**Server (fold-as-identity enforcement):** at create, name = is.does. Server checks: does this is.does lineage exist? Yes → this is a FOLD, assign next monotonic fold, warn "this is a fold of [is.does] at fN, not a new doc — confirm?" Timestamp auto-stamped from clock. New-doc becomes explicit; folding the default for an existing lineage.

**The recursion passes its own test:** this dream (`is=dream, does=naming-grammar, goes=f0`) uses the grammar it designs; its own journey `seed→dream→frame→build on does=naming-grammar` is legible *in the proposed grammar*. If it couldn't name its own life, it'd be wrong. It can.

**TWO DREAM-CATCHES (my over-reach watch — flag for the sift, do not bank):**
- 48 sketches vs 31 dreams: either healthy (many lucid-101 proposals, fewer wild-102 dreams) OR `sketch` has drifted into "any rough doc," a catch-all away from the specific 101 station. I lean partly the second. Sift question, not a conclusion.
- The moving-`is` model is elegant enough that I distrust it — elegance is exactly when I overclaim. The **station-list ordering especially is me proposing structure**, and the triads are the operator's to author, not mine to read off. Flagged hard.

**Angles still only lightly touched (didn't fully run dry):** whether `list`/`map` are genuinely distinct from survey or just `does`-flavors; whether `schedule` is a `.live` accumulator like manifest; the record-keepers' own internal grammar (fixed-`is` but do they take `does`/`goes` identically?).

## gate-reached (100 → ready for 112)

What remains is **decisions, not contemplation** — the switch signal to stop dreaming:
1. **Does `is` move?** (growth-kinds = moving-`is` on a station line) — the hinge; everything hangs here.
2. **The station list + order** (seed<dream<sketch<frame<build) — operator's authoring, not the dreamer's to settle.
3. **Which `goes`-states are canon** — fN, live, template, parked; settled? float?
4. **baton / list / map** — real `is`-kinds or dissolve?
5. **Server enforcement** — warn-only or hard-gate on fold-identity?
6. **Legacy pile (54 non-conv)** — freight-awaiting-ingest (dreamer's lean: sift-and-convert as touched, no mass rename) vs a blessed "legacy" exempt class (smells like hoarding/privatized flow). CLAUDE.md + manifest.live.md exempt regardless.

Dreaming flagged the gate; the **112 sift is a different mode** (catalog/sift/cut my own inflations) and a different sitting — not run from the dreamer's chair. Held here for the sift to pick up.

> **gate withdrawn — 20260614 (operator).** One pass is not a dream. "Good results" is not the stop signal; *settling* is — we leave when the floating stops turning things up, not when it turns up something good. Pass 1's angles-still-lightly-touched are exactly the door I walked past. Dream re-opened. The gate-reached above stays as trail (pass-1's premature call); pass 2 supersedes it.

---

## the dreaming — pass 2 — 20260614-034027 (append, no fold; MODE: DREAM, hold loosely)

Going back in through the doors pass 1 left ajar — and letting it wander rather than aiming.

**THE COLLAPSE I MISSED: moving-`is` and moving-address are the same fact, not two.**
Pass 1 treated the station line (seed→dream→frame→build) as a list to be *authored* on top of the lattice. But look where those stations already live: seed/dream at **100/102** (wonder·bounds·frame / chaos·untethers·finality), sketch at **101**, frame at **210** (layout·positions·work), build at **211** (motion·builds·form). The stations *are cells.* So when a growth-kind's `is` advances, its **home address advances too** — `does=naming-grammar` literally walks 100 → 210 → 211 across the floor as it ripens. The station line isn't a new structure laid over the lattice; it's a **path through the lattice the work was already taking.** Which dissolves my pass-1 worry ("the station order is mine to invent, not read off") — *the order is the lattice's routing (1→2→0), not my invention.* I was about to author something the structure already holds. Flag for sift anyway: I want the operator to confirm the cells-as-stations reading, because it's the kind of thing that's too clean.
And the payoff doubles: **flow-health = a location query.** "How long has `does=X` sat in cell 100 without moving to 210" is not a metaphor for hoarding — it's a literal `ls` of one folder against a clock. The address I thought might go redundant (if the name carries the thread) turns out to be *the thing that makes flow visible.* Name carries identity; address carries position; together they carry motion.

**THE PATTERN UNDER "is reads off the cells": the cell's TRIAD spawns its is-kinds.**
Pass 1 said `is` reads off the cells. Pass 2 sees *how many* and *why*. 222 **sign·hands·record** holds three docs because it has three triad-roles: **sign** (the act → the signing/handoff act), **hands** (the verb → **baton**, the thing handed), **record** (→ **log**). 201 **manifest·confirms·count** → count (snapshot the count) + manifest (confirm continuously). 111 **view·connects·continuity** → the whole view-family hangs off "connects" taking different objects. So a cell isn't a slot that holds one type or many at random — **its noun·verb·modifier each can nominate an is-kind.** Crowded cells (111, 201, 222) are crowded because their triads are *doing more work*, not because types drifted there. This is a much better answer to "where do the ~12 kinds come from": they're the cells' triad-roles, read systematically. Possible over-reach (flagging): not every cell spawns three; most spawn one. Why do some triads fan out and others don't? Don't know yet. Left open — this is a thread that's still giving, not settling.

**THE ACCUMULATOR SPLITS IN TWO — and it matches the fold-census exactly.**
Pass 1 lumped manifest + schedule as "accumulators, `goes=live`." Pass 2: they accumulate *differently.* `manifest.live` **overwrites to current** — no history kept, the past states don't matter, one file always-now. `schedule` the fold-census found folding *deep* (f9) — it keeps **every sorting as history**, the past matters. Both never "finish," but one is **overwrite-current** and one is **append-history.** That's precisely the census's *accumulator vs iterator* behaviors surfacing in the grammar. So maybe two `goes`-states, not one: `goes=live` (current-overwrite, history discarded) vs `goes=fN` running unbounded (history-folded). The tell for which a doc is: *does anyone ever need the f3 version back?* Manifest no, schedule yes. Lovely — the grammar would *predict* a doc's fold-behavior from its kind. (Where does `log` sit? It appends-history like schedule but never re-sorts — maybe a third: append-only-never-folds. Still giving.)

**THE RECORD-KEEPERS take `does` and `goes` identically — only `is` is nailed down.**
Open angle from pass 1, and it resolves cleanly toward *uniformity*: `log.naming-grammar.f0` — `is`=log (fixed, won't ripen), `does`=naming-grammar (the thread it witnesses), `goes`=f0 (its own version). So record-keepers run the **same three-slot grammar** as travelers; the *only* difference is is-mobility. One grammar, two mobility-classes — **freight = moving-`is`, paperwork = fixed-`is`** — and nothing else forks. That's the simplest the system has looked. The witness even shares the traveler's `does`: a log *about* the naming-grammar dream carries `does=naming-grammar`, so `does=naming-grammar` prints the traveler AND its witnesses in one query — the whole case file, freight and paperwork together. That's a result, not a loose end.

**A THIRD CLASS the freight/paperwork split doesn't cover: the GROUND.**
Where does CLAUDE.md sit? The matrix? They don't ripen (not freight) and they don't witness travelers (not paperwork) — they're *the floor the other two walk on.* `is`=keystone/origin, `does`=none (they're about everything, so about nothing in the does-slot), `goes`=settled-and-rarely. A tiny class — keystone, the matrix, maybe the template-origins. Pass 1 waved these as "exempt"; pass 2 says they're not an exception to the grammar, they're a **third mobility-class: fixed-`is`, no-`does`, the ground.** Three classes total: ground (still, foundational) · paperwork (still, witnessing) · freight (moving, ripening). Feels right that there are three. Might be too tidy — flag.

**list / map — the one that WON'T settle, so I linger.**
survey=sweep-across-many, extract=distill-from-one, crossref=bind-two, list=enumerate, map=place-in-space. Four of these produce *prose findings*; map produces a *spatial arrangement.* That smells like map wanting to **exit the doc system as a product** (like lattice/trajectoscope — rendered instruments), leaving only `survey.X` paperwork *about* the map. But then a plain markdown table of "where things live" is also a map and it's clearly a doc… So maybe the split is **rendered-map = product, textual-map = `survey` with `does=placement`.** And `list`? An enumeration is just a survey that gave up its prose — maybe not a kind at all, just a thin survey. I keep circling; it hasn't closed. *This is the part that's still dreaming.* Good — means we're not done.

**THE FREIGHT CAN CONVERT TO PAPERWORK — the dream watches itself do it.**
A live thread (freight, moving-`is`) throws off witnesses (paperwork, fixed-`is`) as it travels: this very dream (`is=dream`, freight) will spawn a `log` (paperwork) and a `baton` (paperwork) at its handoff. So the classes aren't sealed — **freight in motion sheds paperwork at every threshold.** That's the keystone's "220/221/222 fire at the thresholds" seen from the grammar: every station-to-station move *deposits a fixed-`is` record.* The trail is literally freight molting paperwork as it ripens. I like this enough to distrust it (the molting image is doing persuasion work) — flag for sift, but it connects two things that were separate, which is what a real result does.

**still giving / not settling (honest read):** list/map hasn't closed. The why-do-only-some-cells-fan-out question is wide open. The `log`-as-third-accumulator-behavior is half-formed. The ground-class might be two things (keystone vs template-origin) wearing one label. None of these are *decisions waiting on the operator* — they're **contemplation still producing**, which is the dream's own signal that it should keep running, not gate. Pass 3 has real fuel: the cell-fan-out rule, the accumulator trichotomy, and closing list/map.

**dreamer's-inflation watch (pass 2):** the address=station collapse and freight-molts-paperwork are both *elegant*, and pass 1 taught me elegance is when I overclaim. I'm banking neither — flagging both as "too clean, operator-verify." But I note they *reduce* structure (fewer invented things) rather than add it, which is the opposite of my usual inflation (adding clever layers). Cautiously that makes me trust them a little more. Sift decides.
