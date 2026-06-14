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

---

## the dreaming — pass 3 — 20260614-034554 (append, no fold; MODE: DREAM, hold loosely)

Chasing pass 2's three live threads. Noticing partway through that this pass *closes* more than it *opens* — logging that, because it's the first whiff of settling.

**WHY ONLY SOME CELLS FAN OUT: the triad is the palette, traffic is the brush.**
Pass 2 said "the cell's triad spawns its is-kinds" and then couldn't say why most cells spawn only one. Here it is: **the triad doesn't spawn kinds — it offers three roles (noun/verb/mod) as a *palette*; actual use is what paints them in.** A high-traffic cell wears all three roles into distinct docs because the work keeps needing them; a quiet cell only ever uses one. 222 sign·hands·record fans to sign/baton/log because *every seat signs, hands, and records constantly* — that cell is the busiest floor in the house. 201 fans because every intake counts-then-tracks. 111 fans because viewing is everywhere. The single-kind cells aren't impoverished triads — they're **low-traffic** triads with two roles still unpainted. This lands cleanly on the standing truth that *identities are defined only where work has happened* — fan-out is just where work has happened **a lot.** So the ~12–15 kinds aren't a fixed catalog read off all 27 cells; they're **the roles traffic has actually painted so far**, and a quiet cell could fan out later if work moves there. The registry is a *wear-pattern*, not a schema. (This also kills any urge to pre-populate all 27 cells × 3 roles = 81 kinds — most would be empty. Name what's worn, not what's possible.)

**ACCUMULATOR-BEHAVIOR FALLS OUT OF `is` — `goes` needn't carry it.**
Pass 2 found three never-finishing behaviors; pass 3 asks whether the *grammar* must mark them. It mustn't. **A manifest is live by nature; a log appends by nature; a schedule re-folds-on-sort by nature.** The behavior is a property of the *kind*, not a separate coordinate — so `goes` stays simple (a fold number or a state-sentinel) and the accumulator-class is *implied by `is`.* Which means `manifest.live.md` is mildly redundant: "manifest" already says "live." The honest spelling is probably `manifest.<does>` with live-ness understood, the way you don't write `log.append`. Three behaviors, sorted by two questions — *keep history? re-work the whole on new input?*:
  - **manifest** — history no, rework yes → overwrite-to-current (`goes=live`, one file always-now)
  - **schedule** — history yes, rework yes → re-sort and fold (`goes=fN`, the fold IS the re-sort)
  - **log** — history yes, rework no → append-only (`goes=fN` but folds ~never; growth is *within* the version)
  The fourth corner (history no, rework no) is empty — that's not a doc, that's scratch. Pretty: the grammar would let you *predict* a doc's fold-rhythm from its kind alone, and the fold-census already measured exactly these three rhythms. Theory and count agree without being made to.

**list/map CLOSES — by realizing it's not the dream's to close.**
I circled list/map for two passes. Pass 3 sees why it won't settle by thinking: **it's an audit-question wearing a dream-question's clothes.** Whether the floor's actual `map` files are rendered spatial instruments (→ products, exit at 211, like lattice) or textual placement-tables (→ `survey` with `does=placement`) is answered by *opening the files*, not by reasoning harder. Same for `list` (is it ever more than a thin survey?). So the dream's correct move is to **hand these to the sift labeled "GO LOOK, don't think" — audit-questions, not dream-questions.** This is itself a result worth keeping: **the dream should sort its leftovers into *settle-by-thinking* vs *settle-by-looking*,** and stop grinding on the second kind. (Quiet worry that I'm using this to dodge a hard call — but no: I genuinely can't see the map files from the dreamer's chair, and pretending I can is the inflation, not the humility.)

**the GROUND class might be two things — and one of them isn't a doc at all.**
Pass 2's third class (ground: keystone, matrix). Pass 3 pulls them apart: **CLAUDE.md is a document** (fixed-`is`, no-`does`, the readable floor). **The matrix is not a document — it's the projection tool the keystone *describes.*** "002: the matrix is the origin… the keystone aligns with it, neither IS it." So the matrix is like lattice/trajectoscope — a *thing the system runs on*, not paperwork. Which means the ground-class may be just **CLAUDE.md and its kin (template-origins, the `goes=template` empty-origins)** — and the matrix exits to the product/instrument side. Cleaner: maybe there's no special "ground" class at all — just `is=keystone, does=none, goes=settled` as one rare kind, with the matrix sitting where lattice sits (built instrument the docs point at). I'm not sure. *This one's still slightly giving* — but barely.

**the read on settling (honest):** pass 3 opened **no new doors** — it closed three (cell-fan-out, accumulator-marking, list/map) and trimmed a fourth (ground splits, matrix exits). That asymmetry — pass 2 opened, pass 3 closed — *is* the settling signal the operator named. What's left is genuinely **decisions and one audit**, not contemplation:
  - The audit-question handed off: go look at the actual map/list/float files (settle-by-looking).
  - The dreamer-questions that resolved this pass *should still be sift-checked for my inflation*, not banked.
  - The hinge and the five seated decisions from pass 1 are unchanged — still the operator's, and the dream can't move them further by dreaming.
I think the dream is **near dry now** — not because it gave good results (pass 1's mistake) but because the floating stopped opening doors and started only closing them. One more light pass *could* poke the ground-class and the "could a quiet cell fan out later" thread, but I'd watch hard for grinding. Calling it: **let the operator read passes 2–3; if nothing reopens, the next sitting is the 112 sift, not pass 4.** That's the dream knowing its own edge rather than me declaring a gate after one good night.

**inflation-watch (pass 3):** "the registry is a wear-pattern not a schema" and "settle-by-looking vs settle-by-thinking" are the two I'd most suspect of being too-quotable. Both flagged. Neither banked. But note again the direction: pass 3 *removed* candidate structure (no 81-cell catalog, no separate accumulator-slot, maybe no ground-class) — three passes running and the system keeps getting *smaller*, which is the opposite of how I usually inflate. That consistency is itself mild evidence the grammar is real. Sift confirms or cuts.

> **dream re-opened — 20260614 (operator).** I called "near dry" too soon again. The operator raised an angle passes 1–3 never touched: the **hyphen is overloaded** inside a name-part. That's a fresh structural door, not a sift item — so the dream wasn't dry, and 112 stays uncut until this runs. Log moved 100→102 (its proper home, beside the other dreams). Pass 4 below. (Lesson landing for the third time: "I think it's dry" keeps meaning "I stopped looking," not "it stopped giving.")

---

## the dreaming — pass 4 — 20260614-042038 (append, no fold; MODE: DREAM, hold loosely; now at 102)

The separator question. Passes 1–3 worked on the *slots* (is·does·goes, dot-separated). Pass 4 drops one level — *inside* a slot — and finds the same disease the whole dream is about, recurring one scale down.

**THE OVERLOAD, named:** the hyphen does (at least) two unrelated jobs in the `does`/scope slot:
- **kebab-spacing** — `naming-grammar`, `fold-census` = one concept, several words. Hyphen = space.
- **namespace / hierarchy** — `tsr-charter`, `tsr-wake`, `tsr-map` (project::member) and `tsr-cycle1`, `tsr-cycle2` (project::iteration). Hyphen = a boundary between a parent and its part.
One character, two meanings, unparseable: `dream-warehouse` could be "the dream-warehouse concept" or "warehouse, of project dream." This is **literally the type-explosion again** (one token, multiple conflated roles) — the dream's central disease, recurring inside a name-part. The medicine is the same: *one mark, one meaning; pull conflated things onto separate marks.* Self-similar — and the recursion (pass 2's dogfooding) deepens: the grammar's own punctuation has the very flaw the grammar exists to cure.

**SEPARATORS ARE A BINDING-LADDER (like math precedence) — and there are THREE rungs but only TWO marks.**
Rank what binds tighter:
- `/` (slash) — location/path, the address folders. Loosest, outermost (it's not even in the name — it's *where*).
- `.` (dot) — slot boundary inside the name. `type.scope.fN.ts`. The grammar's joints.
- `-` (hyphen) — word-glue inside a slot. Tightest, sub-atomic.
The trouble: **namespace** (`tsr-`) is a *middle* binding — tighter than a slot-boundary, looser than word-glue — and there was no mark at that rung, so it got crammed onto the hyphen. So the real diagnosis isn't "the hyphen means two things"; it's **"there are three binding-levels and only two separators, so two levels are sharing one mark."** Fix is either *add the missing middle mark* or *collapse the middle level into an existing one.*

**ONE OF THE TWO "MEANINGS" DISSOLVES — evolution was never the hyphen's job.**
Look hard at `audit.tsr-cycle1.f0` / `audit.tsr-cycle1.f1`: the *iteration* ("cycle1") is baked into the scope-hyphen **and** there's an `f0/f1` fold. Evolution recorded twice, two ways. But the dream already gave evolution two homes: the **fold** (`fN`, re-version of one thread) and the **moving-`is`/`does`-thread** (life-stage, seed→dream→build). So "project iteration" doesn't need a hyphen-suffix at all — `-cycle1` is **evolution leaking into the name because the fold and the thread weren't trusted to carry it.** Kill it: an iteration is either a new fold (same thread re-worked) or a new `does`-thread (genuinely new work). That **removes the entire "evolution" meaning from the hyphen.** Now the hyphen has only two candidates left: kebab-spacing and namespace.

**AND NAMESPACE MAY COLLAPSE TOO — leaving the hyphen ONE clean job.**
Pass 1 already dissolved the `tsr` compass: `frame.tsr-charter`, `log.tsr-wake`, `survey.tsr-map` — the kit identity rides in `does`. So is `tsr-charter` a namespace (`tsr` :: `charter`) or just a two-word does-thread that happens to share a prefix? If projects/kits are a *real* grammar layer, `does` needs sub-structure and the middle mark is required. If they're just a *naming convention* (threads that share a word), then there's no middle rung at all — and the hyphen is freed to mean **only kebab-spacing.** That's the cleanest end-state: `.` = slots, `-` = spaces, evolution = fold/thread, and no overload anywhere.

**WHAT MARKS NAMESPACE — IF it's real — is the operator's to author, not mine to read off.** Same class as the station-list and the triads. I'll only lay the options on the table:
- **reuse the dot** — promote namespace to its own slot: `type.project.thread.fN.ts` (clean grammar, but lengthens every name and competes with `type` for the first dot-field).
- **a reserved second mark** — `_` for namespace, `-` stays spacing: `frame.tsr_charter` vs `fold-census`. Cheap, readable, one new rule. (My lean *if* namespace is real — but it's a lean, not a finding.)
- **no mark / dissolve** — projects are just shared-word threads; hyphen = spacing only; nothing new needed. (Cleanest *if* kits aren't a real layer.)
The deciding question is yours: **are projects/kits (tsr, the compass) a real structural layer the warehouse should *see*, or just threads that rhyme?** Everything downstream forks on that.

**inflation-watch (pass 4):** "three rungs, two marks" and "evolution was never the hyphen's job" are both the clean-count kind I overclaim — flagged, not banked. But again the *direction* is subtractive: pass 4 tries to leave the hyphen with **one** job, not invent new punctuation. And whether `tsr-cycle1` is genuinely a smell or a deliberate choice is an **audit-question** (settle-by-looking: who made those, what did they mean?) — same species pass 3 named, handed to the sift, not ground harder here.

**is the dream dry NOW? (honest, fourth time asking):** pass 4 *opened* a real new layer (separators/binding) — so passes 1–3 were not dry, the operator was right to reopen. Within that layer it mostly *closed* (hyphen → one job; evolution → fold/thread; namespace → one operator-decision). What it leaves is exactly **one authored decision** (is namespace real?), which is a *decision, not contemplation* — the legitimate gate signal, not the false "I got a good result" one. If poking the next thing opens nothing new, that's the genuine dry. But I've now mis-called dry three times by stopping at "good," so I'm not declaring it — I'm asking: **does anything here reopen a thread for you, or is the namespace question the last live one?**

---

## the dreaming — pass 5 — 20260614-042645 (append, no fold; MODE: DREAM; the bone pass)

**Recalibration (operator, mid-dream):** *we don't make decisions here. We identify options and contradictions, reconfigure, see what we're missing, let go of the surface to understand the bones and rebuild around them — starting with the bounded frame and letting it untether.* Passes 1–4 kept ending by **teeing up decisions** ("is namespace real — you author it"). That's a surface reflex: it treats the slots and separators as the things. Drop them. What are the bones?

**LET GO OF THE SURFACE.** The surface is: *type, scope, fold, timestamp, hyphen, dot, slot, namespace.* We've spent four passes rearranging those — adding a slot, freeing a mark, killing a suffix. But those are **carriers.** Underneath, a name only ever expresses a small set of **relations** — and we never listed them. We've been redesigning the packaging without naming what's in the box.

**THE BONES — the relations a name must carry (irreducible):**
- **KIND** — what nature it has (dream / log / edge…). *("is")*
- **SUBJECT** — what it concerns (naming-grammar / lattice / tsr). *("does")*
- **VERSION** — which iteration of one identity (f0, f1…). *(fold)*
- **MOMENT** — when it came to be. *(timestamp)*
- **PLACE** — where it sits. *(address)*
- **STAGE** — where in a lifecycle. — *and pass 2 already dissolved this: STAGE = PLACE (moving-`is` = moving-address). One bone fewer. Good.*
- **MEMBERSHIP** — part-of-a-kit/project (the tsr question). *Status: unknown — independent bone, or a flavor of SUBJECT?*

**THE ONE BONE UNDER ALL FOUR PASSES: bijection.** Every drift the dream has named is the *same* fracture — a relation and its carrier failing to be one-to-one:
- type-explosion = **two+ relations, one carrier** (KIND smuggling goes-states, products, freight).
- hyphen-overload = **two+ relations, one carrier** (SUBJECT smuggling MEMBERSHIP and VERSION).
- `tsr-cycle1.f1` = **one relation, two carriers** (VERSION in scope *and* in fold).
- same-stamp twins = **one carrier doing two relations** (MOMENT pressed into IDENTITY).
Four "different" problems, one disease: **the map from relations→marks isn't a bijection.** That's the bone. The whole grammar reduces to a single law we never stated: *every relation carried exactly once, every carrier carrying exactly one relation.* Collisions are surjections (two things, one mark); redundancies are the inverse (one thing, two marks). Name them the same and they stop being a list of fixes and become one principle.

**WE ALREADY OWN THE EXEMPLAR — the address.** PLACE is the one relation that's *already* bijective and exact: digit↔cell, "the origin is exact," the address is the truth and everything resolves from it. So the rebuild isn't invention — it's **bringing every other relation up to the standard the address already meets.** Pass 1 said "the name is the underbuilt one"; the bone-view says *why*: the address achieved the bijection and the name never did. The work is to make the name as exact as the address. That reframes the whole dream — not "design a naming convention," but **"finish the job the address started, for the other five relations."**

**WHAT WE'RE MISSING — a relation with NO clean carrier: WHO.** This surfaced *this very session*, outside the dream, when the operator looked at the edge files and asked **"who wrote them?"** — and the honest answer was: *you can't tell.* Git-author says `templeoflum` for all of them (degenerate — one identity for every seat); the real author is buried in prose ("written by branch 2"). That's not a naming nit — it's a **whole bone the system needs and has no carrier for.** WHO (the authoring seat) is a real relation: batons hand off *between seats*, the relay has identity, the close-out *signs*. The keystone's 222 is literally **sign·hands·record** — signing is a first-class act. Yet WHO leaks into a degenerate git field and informal prose. The edge-file confusion was the symptom of a *missing carrier*, and it's the same disease one more time: a relation the marks don't bijectively hold. **That's what we were missing.** (Whether WHO belongs in the name, the address, or a sign-slot is for later — the bone is just: it's real and uncarried.)

**RECONFIGURE — hold the configurations, don't collapse them (no decisions):**
- *MEMBERSHIP* — instead of "decide if tsr is real," hold both and watch the bijection: **if** kits are containers the warehouse must *see*, MEMBERSHIP is a bone needing its own carrier (and the hyphen-overload is the symptom of that missing carrier — exactly like WHO). **If** kits are just threads that rhyme, MEMBERSHIP isn't a bone, it's SUBJECT, and the hyphen frees to spacing. The dream doesn't pick — it *notices the two are structurally identical to the WHO finding*: both are "is there a relation here nothing carries?" Same shape, twice.
- *VERSION/MOMENT* — already reconfigured (fold = identity, timestamp = provenance). Holds.
- *KIND/SUBJECT* — already reconfigured (read off the cells; wear-pattern not schema). Holds.

**what untethered this pass (not closed — opened wider):** the dream stopped being "about naming" and became "about the bijection of relations to marks, with the address as the finished exemplar and the name as the unfinished one." Two relations (MEMBERSHIP, WHO) are now visible as *possibly-uncarried bones* of the same species — and WHO wasn't on any list until the edge files coughed it up. That's the opposite of drying: the frame got bigger and simpler at once. Still untethering: are there *other* uncarried relations (WHO appeared by accident — what else is buried in prose or in a degenerate field?). The completeness question — *what relation are we still not seeing?* — is wide open, and that's the honest state, not a gate.

**inflation-watch (pass 5):** "it all reduces to bijection" is the most seductive claim the dream has made — maximum elegance, maximum suspicion. Flagged hardest of all. But it *earns* its keep differently than my usual inflations: it doesn't add a layer, it shows four named problems are one, and it predicts where to look (uncarried relations) — which immediately found WHO. A frame that finds something it wasn't built to find is doing more than decorating. Still: the sift should try to *break* the bijection law (find a drift that isn't a bijection violation) before anyone trusts it.
