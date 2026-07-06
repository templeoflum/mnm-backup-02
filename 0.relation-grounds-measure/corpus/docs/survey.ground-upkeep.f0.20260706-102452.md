# survey — ground upkeep & task inventory — f0 — 20260706-102452

**The full picture of keeper's work: what keeps the ground (root 0, the corpus) healthy, what's open, what recurs.** Compiled for the operator's task tracker. This is the **keeper slice** — the ground/corpus. Other seats own their own slices (clerk: dispatch/systems/paperwork; lantern: toys at 122). Cross-seat coordination for the whole-house list would gather those separately.

Cadence tags: **[every-change]** run on every edit · **[periodic]** scheduled sweep · **[open]** has an end, in a queue · **[in-progress]** live now · **[ongoing]** never fully done.

---

## snapshot — the health dashboard (as of 20260706)

| metric | value | note |
|---|---|---|
| total records | 3085 | 162 field · 34 system · 1348 source · 1541 object |
| settled / float | 2463 / 622 | ground-verified 80% |
| stub objects (`source: []`) | 273 | the enrichment backlog (271 illusions + 2 misc) |
| thin fields (`grade: t`) | 27 | want deepening; `grade: s` = 131, `f` = 4 |
| held records (fault named) | 4 | crevels · megerdoomian · matsueda · id-genre-stratification |
| **dangling refs** | **0** | invariant — must stay 0 |
| **reciprocity gaps** | **0** | invariant — must stay 0 (depends-on↔used-by) |
| **duplicate-lineage handles** | **0** | invariant — must stay 0 |
| **index reconcile** | **CLEAN** | invariant — index total = disk |

The four **bold invariants** are the definition of "healthy ground." Any non-zero / non-CLEAN is a fault to chase.

---

## A · RECURRING UPKEEP — keeping the ground clean

- **`check.records.py`** [every-change] — dangling refs · reciprocity gaps · duplicate-lineage handles. The committed instrument at `docs/`. Run after any record add/edit; must print CLEAN.
- **`reconcile.index.py`** [every-change] — index stated-total vs disk. Run after any add; must print CLEAN. (Index is hand-appended, so it drifts if not updated.)
- **dup-check new handles** [every-change] — every new record handle grepped against the WHOLE corpus before writing (a new source that already exists = wire the link, never a 2nd file).
- **byte-cleanliness** [every-change] — records written utf-8, no BOM/mojibake; edits via the Edit tool or a utf-8 script, never PowerShell rewrites.
- **field-naming audit** [periodic] — hunt invented field-names (compound mashups, subtopic-suffixes, techniques/systems dressed as fields). Last full pass: `audit.field-census.f1`. Recurs as intake adds fields.
- **stale-index / stale-reference sweep** [periodic] — the index and any reference doc can go stale; verify declared-state against record-state (grep frontmatter), don't trust the catalog.

## B · OPEN WORK — queues with an end

- **illusion citation enrichment** [in-progress] — track down the real primary citation for each of the 277 illusion stubs. **5 done** (web-verified). Priority set = 105 with discoverer+year; then 24 discoverer-only; then 148 anonymous → reference-text (Gregory/Minnaert). *~90+ unique sources, multi-session.*
- **settle the enriched illusions** [open] — once an illusion has a verified source, verify-then-flip float→settled. Follows enrichment.
- **raw-mine dive settle** [open] — ~155 verify-ready floats in the six raw-mine dives (Asymmetry 38 · Stigmergy 21 · Two-Phase-Mind 27 · Craft-of-Channeling 40 · Inner-Stillness 19 · Inward-Grammar 10). Source-recovery with real citations; the older queue, pre-dates the quarantine intake.
- **esoterica-library canon re-mine** [open] — ~188 thin, field-name-only records; RE-MINE-first (not verify-flip). Needs the operator's **field-home signatures** — a signature gate.
- **held-record resolution** [open] — the 4 held (+ any new) settle when their named fault clears (a year dispute, a candidate promoted, a replication landing).
- **sibling-algorithm gaps** [open] — the research dives flagged neighbour-objects not yet extracted.
- **the-journey sift read** [open] — my read on Q1 (corpus/settle/ground) of `proposal.the-journey-sift.f0` (112); the operator wants it before anyone signs. **Pending.**

## C · IMPROVEMENT SWEEPS — raising quality (never fully done)

- **thin-record enrichment** [ongoing] — 27 `grade: t` fields + 273 stub objects want sources/depth (grade t→s). The enrichment backlog metric tracks this.
- **dependency-graph wiring** [ongoing] — many objects stand alone (empty `depends-on`/`used-by`). The relational web IS the grounding; wiring real edges is value, not decoration. (Cross-field edges were dropped in region #3 — a candidate to revisit.)
- **cross-reference / link enrichment** [ongoing] — fields link related fields, objects cite kin; the graph gets richer with use.
- **field-home reviews** [periodic] — re-home mis-placed records; the census-split relink faults (e.g. safety-engineering's Leveson mislink) are this class.
- **coherence sweeps** [periodic] — spot-check that settled records still hold against current authority (reference frames go stale).

## D · GROWTH / INTAKE — new records enter

- **quarantine sweeps** [periodic] — check `000/quarantine/` for new material on the dock; extract to records. (Last: thought-experiments + optical-illusions, 20260706.)
- **re-mine queue** [open] — the research-compilation dives + raw-mine dives → records. (research01–12 mined + settled; raw-mines pending settle.)
- **field-home proposals** [open] — new intake with new disciplines serves field-home proposals for the operator's signature (the gate).

## E · DISPLAY / NAVIGATION — how the records are read

- **index maintenance** [every-change] — `corpus.index` current + loadable; high-volume layers summarized (sources, illusion-objects) for loadability.
- **the reader unit** [ongoing] — `frame.reader-resolves-web` (210): resolves `[[handle]]` → newest fold; the house's own reader over the corpus. Wiki-bridge (Obsidian-as-reader) is the fallback.
- **source-index generation** [open] — a standalone generated source-index can be cut on request (the index summarizes sources by field).
- **record display for toy-building** [ongoing] — lantern builds toys from the records; how an illusion/experiment record surfaces (mechanism, parameters, citation) shapes the toy. A keeper↔lantern seam.

---

## what the tracker should watch (health over time)

The dashboard row above, tracked as a time series:
1. **total records** + by-type (growth).
2. **settled / float ratio** (ground-verified %) — the headline health number.
3. **stub count** (`source: []`) — enrichment backlog, should trend down.
4. **grade distribution** (thin `t` backlog) — should trend toward `s`.
5. **held count** + the named faults (each should eventually clear).
6. **the four invariants** (dangling · reciprocity · dup-lineage · reconcile) — must stay 0 / CLEAN; any breach is an alarm.
7. **new-field rate** — spikes at intake; each new field is a signature event.

*This survey is a living reference; refold when the task landscape shifts (a queue drains, a new upkeep kind appears).*
