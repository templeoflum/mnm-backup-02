# template — the corpus records — f10 — 20260703-162336

**The schema spec for ground's grounding database.** Defines the record types, their fields, and the conventions, with one full exemplar of each.

**Fold f9 → f10 (operator settled, 20260703): the `field` type gains a naming rule** — born of the field census (`audit.field-census.f1`, `docs/`), which found the corpus had accreted invented field-names (compound mashups, subtopic-suffixes, techniques/systems dressed as fields). **A field is a documented area of study, named as it names itself** — not a cluster, technique, standard, or system dressed as one; a compound mashup or a subtopic-suffixed name is the tell of invention, but **narrowness is not** (a narrow real research-area is a field). Homeless material routes into the nearest real field or holds as objects; a field is never invented to shelve it. Applied to the `field` type-row, the field-record section, and the settled list below. (Keystone carries a one-line pointer.)

**Fold f8 → f9 (operator settled, 20260702): the unit's interior restructured — three semantic floors, max 3 folders per level, ≤3 depths** (extending the 20260615 unit-structure note). **`records/`** — the catalog, all record files (a card catalog, not a library); **`library/`** — the material: `texts/` the shelves (actual source texts, vetted in by collection; **contents gitignored, the tracked record is `library.index` at the root** — operator's git rule: source texts don't enter repo history) + `raw/` the mine (feedstock, moved from the old root `raw/`); **`docs/`** — the office: this schema lineage + the corpus papers, **migrated from the `000` cell (superseding the "schema/dock docs sit in `000`" placement)**. The unit root is the front desk: `corpus.index` · `raw.index` · `library.index` (+ the reader window when built — `frame.reader-resolves-web`, now at `docs/`). **Records unchanged in content and handle; reached by handle through the index, as ever.** New records land in `records/`.

**Fold f7 → f8 (operator settled, 20260702):** **the `aliases:` convention is retired, same day it entered** — piloted against reality it did nothing: Obsidian does not resolve raw `[[handle]]` wikilinks through aliases (confirmed by operator test after full reindex; incident + RCA at `audit.wiki-bridge-alias-incident.f0`, 221). All 2001 alias lines reverted by exact-inverse script; frontmatter is f7-minus-aliases. **The quoted-wikilink ref convention (f7 part 1) STANDS** — it serves any wikilink-aware reader, including the house's own reader unit (`frame.reader-resolves-web`, 210), which resolves `[[handle]]` → newest fold natively. Handle-resolution is no longer sought from foreign readers; record filenames keep `type.scope.fN.timestamp.md`, inviolate.

**Fold f6 → f7 (operator settled, 20260702):** two frontmatter conventions change, both born of the wiki-bridge (Obsidian-as-reader over the corpus, `frame.wiki-bridge` at 210). **(1) Handle-ref fields become quoted wikilinks** — `depends-on: ["[[object.foo]]"]`, superseding the bare-handle rule (f1, 20260614) — so the dependency web (`links` / `field` / `source` / `depends-on` / `used-by`) is graphable by any wikilink-aware reader; the handle inside the brackets is unchanged, and a parser strips `"[[ ]]"` trivially (consumer check 20260702: no code parses these fields). **(2) Every record carries `aliases: ["<type>.<scope>"]`** — the handle as alias, newest fold only — so `[[handle]]` links resolve to the record file despite the `.fN.timestamp` basename. Both applied corpus-wide by deterministic script (2001 aliases; 6259 refs quoted across 1931 files).

**Fold f5 → f6 (operator settled, 20260616):** the **`object-type` vocabulary gains `model` · `metric` · `data-structure`** — ratified out of the region #3 ML·data extraction, where the information-retrieval objects needed them (`model` for the vector space model, `metric` for precision/recall, `data-structure` for the inverted index). Per the open-list rule (f2), the truest word joins the vocabulary on use; all three pair with `status: established`. (`data-structure` is the lone hyphenated compound in the list — kept as-is for clarity, the operator's call.)

**Fold f4 → f5 (operator settled, 20260615):** the **`status` vocabulary gains `doctrinal`** — for object claims that are *tenets of a tradition* (mystical, esoteric, mythic): attested in the tradition and citeable, its truth **bracketed** — documented as *held*, never asserted. Rationale: to be faithful to the picture of the psyche, the corpus must represent lineages of thought (myth, esoterica, the via negativa) — but as study, not endorsement. The honesty lives in `status`, never in an editorial "stance" line: only the scholarly and citeable goes in, plain, so it sits among the corpus. `doctrinal` is distinct from `proven` (math), `established`/`empirical` (laws/methods), and `open` (conjecture). First used by the slice-12 *myth & meaning* objects.

**Fold f3 → f4 (operator settled, 20260615):** the **maturity dial collapses to two states — `float → settled`.** `verified` is retired: it claimed an arrival the keystone says doesn't exist (the center & boundary are approached, never reached), while `settled` — holds-so-far, confidence from duration, subject to correction — is the honest ceiling, matching the keystone's own `[float]`/`[settled]`. The old `settled → verified` pass (a careful check naming an authoritative source) is **not lost**: it folds into the `float → settled` keys as the second key, and the internal-coherence-vs-external-corroboration distinction it marked rides the *how-checked* axis (`source:` / `attribution:` / `[confirmed]`), not a maturity rung. **Also resolved since f3:** the *resting-place* question this schema kept calling open — settled ground now rests in **`0/corpus/`, one `.unit` database** (the library); the lattice-scatter was retired. Read every "where verified ground rests is open / verified does not auto-land" line below as **superseded** by this fold.

**Fold f2 → f3 (operator settled, 20260614):** the **`state` dial is decoupled from the folder address.** Promotion is `float → settled → verified` written in the record's frontmatter — **nothing moves.** The earlier "the cell a file sits in *is* its state / moving the file is promoting the record" rule is **superseded**: flipping the dial does not relocate the file, and verified records do **not** auto-land on root 0. *Where* verified ground ultimately lives (root 0, elsewhere, or staying distributed) is a deliberate later question, not a side effect of the dial. Rationale: dumping 1015 records onto 0 because a dial flipped is exactly the fast/false fill the keystone warns against — the address is earned separately from the maturity. The **verification keys** were also settled this session (see "how a record matures").

**Fold f1 → f2 (operator ratified, 20260614):** the **`object-type` vocabulary is extended** beyond pure mathematics. The Measuring canon's empirical/methodological fields (psychophysics, metrology, falsificationism, open science, auditing, …) need object-types the math list doesn't carry. Proven across 41 fields / 203 objects before ratifying.

**Fold f0 → f1 (20260614):** one registry with type filters · records named `type.scope.fN.timestamp.md` · linked by the `type.scope` handle · referenced by handle (folder = address, no numeric id) · proof as a sub-field.

---

## what this database is

Ground (root 0) is the **grounding / reference database** the context engine draws from while we build, learn, and research. It holds the technical substance: source texts, papers, theories, hypotheses, conjectures, proofs, theorems, definitions, laws, principles, methods — and the map of the fields they live in.

It is **relational** — that is root 0's nature (relation · grounds · measure). The links between records (a theorem depends on a lemma, a field draws on a source) *are* the grounding. The dependency graph is the point, not decoration.

## three record types

| type | holds | answers |
|------|-------|---------|
| **field** | a documented area of study (a domain of lineage) | "where does this field come from, how do I enter it?" |
| **source** | a paper / text / book | "what document says this, where do I get it?" |
| **object** | a theorem / law / definition / conjecture / principle / method / … (see object-type vocabulary) | "what is the actual claim, is it established, what does it rest on?" |

## conventions (all types)

- **one record = one file.** Markdown, frontmatter for machine-readable fields, body for prose.
- **filename: `type.scope.fN.timestamp.md`** — the house convention. `type` ∈ {field, source, object}; `scope` is the kebab-case slug; `fN` the fold; timestamp UTC.
- **the handle is `type.scope`** — the stable identity. Reference any record by `[[type.scope]]`, e.g. `[[object.prime-number-theorem]]`, `[[field.analytic-number-theory]]`. The handle drops `fN.timestamp` (versioning) so a link always resolves to the *current* fold. The type prefix disambiguates and tells the engine what it points at without opening it.
- **frontmatter `name` stays the bare slug**; the handle composes `{type}.{name}`. `type` is its own field.
- **`state` is a frontmatter dial, NOT the folder address.** *(f3 — superseding f2.)* A record's maturity lives in its `state:` field and advances `float → settled` by editing that field. Promotion **does not move the file**. All records live in **`0/corpus/records/`** *(f9; the unit's catalog floor)*, one `.unit` database; the schema and corpus papers sit in **`0/corpus/docs/`** *(f9 — superseding the `000`-cell placement)*. Where ground comes to rest is **settled** — the corpus unit (the library) — never a side effect of the dial. Subject (field/canon) is carried in frontmatter and `[[links]]`, navigated through the registry — never through the folder tree.
- **two independent dials:**
  - **`state`** = maturity of the *record* — `float → settled`. The gate. A frontmatter value; advancing it is an edit, not a move.
  - **`status`** (objects only) = state of the *claim itself* — `open / proven / disproven / partial` for mathematics; **`established` / `empirical`** for laws, methods, frameworks, and conventions that are not proven theorems; **`doctrinal`** for tenets of a tradition (mystical, esoteric, mythic) — attested and citeable, truth bracketed, documented as held not asserted. A conjecture can be a `settled` record of an `open` problem; an empirical law can be a `settled` record of an `empirical` regularity; the via negativa can be a `settled` record of a `doctrinal` tenet. Don't conflate the two dials — a faithful record (`state: settled`) of an unproven or unprovable claim (`status: open`/`doctrinal`) is exactly right.
- **confidence** on every sourced claim: `[confirmed]` (≥2 independent authoritative sources) · `[confirmed as attribution]` (citation detail, primary not opened) · `[candidate, partially confirmed]` · `[candidate, unconfirmed]`. Contested foundings stay as **lineages**, not flattened.
- **the registry** — a single `corpus.index`, one line per record. Filter by the `type` prefix. The index loads for navigation; records are pulled on demand. (Like `MEMORY.md`.) For high-volume layers (sources, objects) the registry may summarize per-field with counts rather than inline every record, to stay loadable.

---

## the `object-type` vocabulary (extended, f2)

The kind of thing an object record holds. Pick the truest one.

- **mathematics (provable):** `theorem` · `lemma` · `corollary` · `conjecture` · `hypothesis` · `definition` · `axiom`
- **empirical / methodological / formal (not theorems):** `law` (an empirical regularity, e.g. Weber's law) · `principle` (a governing rule, e.g. randomization) · `method` / `algorithm` (a procedure, e.g. Metropolis–Hastings) · `design` (e.g. the Latin square) · `concept` (e.g. the file-drawer problem) · `criterion` (e.g. falsifiability) · `framework` (e.g. the TOP guidelines) · `format` / `convention` (e.g. the registered report, the SI base units) · `model` (e.g. the vector space model) · `metric` (e.g. precision/recall) · `data-structure` (e.g. the inverted index)

The list is open: when a field needs a kind not here, use the truest word and it joins the vocabulary. `status` pairs with it — `proven` for math results, `established`/`empirical` for the rest, `open` for conjectures, `doctrinal` for tenets of a tradition (held, not asserted).

---

## 1 · field record

The lineage map. One per domain. (extends the existing compiled-card.)

**naming rule (f10).** A field is a **documented area of study, named as it names itself** — not a cluster, technique, standard, or system dressed as one. A compound mashup (`cybernetics-control-theory`) or a subtopic-suffixed name (`fluid-dynamics-hydrodynamic-stability`) is the tell of invention; **narrowness is not** — a narrow real research-area is a field (`habit-formation`, `perceptual-learning`). When material has no established-field home, route it into the nearest real field or hold it as objects — never invent a field to shelve it. (The symbolic/typological systems of the mythic-library intake — `tarot`, `mbti`, … — are the *objects of study*, not areas; whether they carry a distinct type is an open question, `audit.field-census.f1`.)

**frontmatter** — `name` · `type: field` · `essence` · `canon` (and slice) · `grade` (`s`/`t`/`f`) · `state` · `links`. (`pays`/`needs` for gauge tags; `family` for spine groupings, where present.)

**body** — `origin` · `codification` · `door`, each a sourced line with a confidence tag and a `[[source.…]]` link; `lineage` when multi-claimant.

### exemplar — `field.analytic-number-theory`

```markdown
---
name: analytic-number-theory
type: field
essence: the study of integers through the tools of analysis — limits, complex functions, L-functions
canon: measuring / slice-00 the patient's mathematics
grade: s
state: float
links: ["[[field.multiplicative-number-theory]]", "[[field.complex-analysis]]", "[[source.riemann-1859]]", "[[source.apostol-1976]]"]
---

**origin** — P. G. L. Dirichlet, theorem on primes in arithmetic progressions (1837) … [[source.dirichlet-1837]] **[confirmed]**

**codification** — B. Riemann, 1859 — the complex-analytic ζ(s). [[source.riemann-1859]] **[confirmed]**

**door** — T. M. Apostol, *Introduction to Analytic Number Theory* (Springer, 1976). [[source.apostol-1976]]
```

---

## 2 · source record

The document itself. Bibliographic. One per paper / book / set of notes.

**frontmatter** — `name` · `type: source` · `essence` · `kind` (paper/book/monograph/notes/preprint/standard/website/treaty/report/manuscript) · `author` · `year` · `venue` · `state` · `links`.

**body** — full citation, what it contains, access notes, attribution confidence.

### exemplar — `source.shannon-1949`

```markdown
---
name: shannon-1949
type: source
essence: Shannon's "Communication in the Presence of Noise" — states and proves the sampling theorem
kind: paper
author: C. E. Shannon
year: 1949
venue: Proceedings of the IRE 37(1), 10–21 (January 1949)
state: settled
links: ["[[object.sampling-theorem]]", "[[field.signal-processing]]"]
---

C. E. Shannon, "Communication in the Presence of Noise," *Proc. IRE* 37(1) (Jan 1949), 10–21.
Contains the sampling theorem as Theorem 1 — distinct from Shannon's *1948* information-theory paper. **[confirmed]**
```

---

## 3 · object record

The substance. One per object (see the object-type vocabulary above).

**frontmatter** — `name` · `type: object` · `object-type` (from the vocabulary) · `essence` · `field` (`[links]`) · `status` (open/proven/disproven/partial · established/empirical) · `state` (float/settled) · `attribution` · `formalized` · `source` · `depends-on` · `used-by`.
*Frontmatter list fields carry handles as **quoted wikilinks** — `depends-on: ["[[object.foo]]", "[[object.bar]]"]` *(f7, superseding f1's bare-handle rule)* — so the ref web is graphable. Body prose uses plain `[[wikilinks]]` as before.*

*`used-by` is the **exact inverse of direct `depends-on`**, **object handles only** — if X lists Y in `depends-on`, Y lists X in `used-by`, and nothing else. Transitive users are not listed (they reach through the chain); field membership lives in `field:`, never in `used-by`. An object used by nothing carries `used-by: []`. (settled 20260614.)*

**body** — `statement` (plain + formal/formula) · `proof` / `derivation` / `basis` (text / sketch / reference; multiple allowed; promote a proof to its own object record only when it grows big or independent) · `lineage` when contested.

### exemplar — `object.prime-number-theorem` (the canonical exemplar; see the live record)

```markdown
---
name: prime-number-theorem
type: object
object-type: theorem
essence: the primes thin out like 1/ln x — π(x) is asymptotic to x/ln x
field: ["[[field.analytic-number-theory]]"]
status: proven
state: float
attribution: conjectured Gauss (1792–93) & Legendre (1797–98); proved Hadamard and de la Vallée Poussin (1896)
formalized: true
source: ["[[source.hadamard-1896]]", "[[source.de-la-vallee-poussin-1896]]", "[[source.riemann-1859]]"]
depends-on: ["[[object.riemann-zeta-function]]", "[[field.complex-analysis]]"]
used-by: []
---

**statement (plain)** — the number of primes ≤ x grows like x / ln x …
**statement (formal)** — π(x) ∼ x / ln x, i.e. lim π(x) ln x / x = 1. **[confirmed]**
**proof** — first proved 1896 by complex analysis (ζ has no zeros on Re(s)=1) … **[confirmed]**
**lineage** — Gauss 1792–93 (recollection 1849) · Legendre 1797–98 · elementary proof Erdős/Selberg 1949.
```

For a non-math object, the body uses **statement (plain)** + **statement (formula)** (where one exists) + **basis** (empirical support and limits) instead of a proof — e.g. `object.webers-law` (object-type: law, status: empirical).

---

## how a record matures (the gate)

The `state` dial advances in frontmatter. **No file moves** *(superseding the old cell-movement rule)*. Two states, keys settled 20260614 / 20260615:

1. **`float`** — captured from a source, recorded, cross-checked, but not yet run through the gate. New intake enters here (incl. the `raw/` dives once converted to records).
2. **`float → settled`** — **two keys, both required:**
   - **reconcile:** every `[[source]]` link resolves to a real source record; the claim cross-read against the source (against reality, not against what we expected — keystone 221); known drift closed; links wired both directions (`depends-on` ↔ `used-by`).
   - **one careful pass that names the authoritative source it checked against** (auditable later; a contested record may be escalated to a second independent pass — the exception, not the rule). The bar differs by object-type:
     - **theorems / lemmas / corollaries:** statement checked against an authoritative statement; proof / derivation present and sound-by-reference; the `formalized` flag honest.
     - **empirical laws / methods / frameworks / conventions:** `basis` checked — the empirical support **and its limits** recorded; `status: empirical` not dressed as `proven`.
     - **fields / sources:** lineage faithful; contested foundings carried as lineage, not flattened.
3. **`settled`** — reconciled **and** checked against a named source; faithful, and the engine can cite it. This is the **ceiling** — *holds-so-far*, not final arrival (the keystone's boundary is approached, never reached); a settled record can still be corrected, which is why it isn't called "verified". The dial gates *confidence*, not *location* — settled ground rests in `0/corpus/` like everything else (the library unit), it does not relocate on promotion.

---

## settled

1. **One registry**, `corpus.index`, type-prefix filters (summarize per-field for high-volume layers).
2. **Reference by `type.scope` handle**; the folder is the address; no separate numeric id.
3. **`object-type` vocabulary** — the extended, open list above (math + empirical/methodological), `status` pairing accordingly. *(f2, ratified 20260614.)*
4. **Proof = sub-field** of the object; promoted to its own record only when it grows big/independent.
5. **Frontmatter handle-ref lists** are quoted wikilinks — `["[[object.foo]]"]` *(f7, superseding f1's bare-handle rule; the f7 `aliases:` convention retired at f8 — it resolved nothing)*. `[[wikilinks]]` in body prose as before.
6. **`state` is a frontmatter dial, decoupled from the folder address** — promotion is an edit, not a move. The resting place is **settled**: all records live in `0/corpus/records/`, one `.unit` database *(f3, settled 20260614; resting place settled f4, 20260615; catalog floor f9, 20260702)*.
7. **Maturity = two states, `float → settled`** — `verified` retired (`settled` is the honest ceiling). `float → settled` requires both the reconcile keys **and** one careful pass naming its authoritative source, by object-type. *(f4, settled 20260615; keys f3, 20260614.)*
8. **`used-by` = exact inverse of direct `depends-on`, object handles only** — no transitive users, no field handles; empty is `[]`. *(f3, settled 20260614.)*
9. **field = a documented area of study, named as it names itself** — not a cluster, technique, standard, or system dressed as one; compound-mashup and subtopic-suffix names are the tell of invention (narrowness is not). Homeless material routes to the nearest real field or holds as objects; a field is never invented to shelve it. *(f10, settled 20260703, field census.)*

---

*f10 — the `field` type gains a naming rule (a field is a documented area of study named as it names itself; compound/over-specified names are the invention tell, narrowness is not) — from the field census, `audit.field-census.f1`.* *f9 — the unit's interior restructured into three semantic floors (records/ · library/{texts,raw} · docs/), indexes at the front desk, texts-contents gitignored with `library.index` as the tracked shelf register, corpus papers migrated from `000`; records unchanged in content and handle. (f8 — the `aliases:` convention retired same-day: it did not resolve raw wikilinks (operator-tested; incident audit at 221); all 2001 lines reverted; quoted-wikilink refs stand, now serving the house's own reader (`frame.reader-resolves-web`).) (f7 — frontmatter handle-refs become quoted wikilinks and every record gains `aliases: ["<handle>"]`, making the ref web graphable by wikilink-aware readers (the wiki-bridge fold); applied corpus-wide by script, 20260702.) (f6 — `object-type` vocabulary gains `model` · `metric` · `data-structure`, ratified on use from the region-#3 ML·data extraction — the open-list rule at work.) (f5 — `status` gains `doctrinal` (tenets of a tradition, held not asserted), so the corpus can faithfully represent myth/esoterica/the unmeasurable as study, the honesty carried by `status` not editorial prose.) (f4 — the maturity dial collapses to two states, `float → settled`; `verified` retired as an overclaim, its source-naming check folded into the `float → settled` keys; all records live in `0/corpus/`, one `.unit` database. The gate promotes in place via frontmatter; confidence is gated, never location.)*
