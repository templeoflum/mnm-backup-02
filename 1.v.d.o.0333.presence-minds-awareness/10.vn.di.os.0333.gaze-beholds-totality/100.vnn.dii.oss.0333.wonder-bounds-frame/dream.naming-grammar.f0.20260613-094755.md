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
