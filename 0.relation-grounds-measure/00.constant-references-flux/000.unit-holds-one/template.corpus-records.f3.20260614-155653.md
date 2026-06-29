# template — the corpus records — f3 — 20260614-155653

**The schema spec for ground's grounding database.** Defines the record types, their fields, and the conventions, with one full exemplar of each.

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
| **field** | a domain of lineage | "where does this field come from, how do I enter it?" |
| **source** | a paper / text / book | "what document says this, where do I get it?" |
| **object** | a theorem / law / definition / conjecture / principle / method / … (see object-type vocabulary) | "what is the actual claim, is it established, what does it rest on?" |

## conventions (all types)

- **one record = one file.** Markdown, frontmatter for machine-readable fields, body for prose.
- **filename: `type.scope.fN.timestamp.md`** — the house convention. `type` ∈ {field, source, object}; `scope` is the kebab-case slug; `fN` the fold; timestamp UTC.
- **the handle is `type.scope`** — the stable identity. Reference any record by `[[type.scope]]`, e.g. `[[object.prime-number-theorem]]`, `[[field.analytic-number-theory]]`. The handle drops `fN.timestamp` (versioning) so a link always resolves to the *current* fold. The type prefix disambiguates and tells the engine what it points at without opening it.
- **frontmatter `name` stays the bare slug**; the handle composes `{type}.{name}`. `type` is its own field.
- **`state` is a frontmatter dial, NOT the folder address.** *(f3 — superseding f2.)* A record's maturity lives in its `state:` field and advances `float → settled → verified` by editing that field. Promotion **does not move the file**. The records currently sit at the `00` leaf and stay there for now; the schema/registry/dock docs sit in the `000` cell. *Where* verified records ultimately come to rest is an open, deliberate question — earned separately, never a side effect of the dial. Subject (field/canon) is carried in frontmatter and `[[links]]`, navigated through the registry — never through the folder tree.
- **two independent dials:**
  - **`state`** = maturity of the *record* — `float → settled → verified`. The gate. A frontmatter value; advancing it is an edit, not a move.
  - **`status`** (objects only) = state of the *claim itself* — `open / proven / disproven / partial` for mathematics; **`established` / `empirical`** for laws, methods, frameworks, and conventions that are not proven theorems. A conjecture can be a `verified` record of an `open` problem; an empirical law can be a `verified` record of an `empirical` regularity. Don't conflate the two dials.
- **confidence** on every sourced claim: `[confirmed]` (≥2 independent authoritative sources) · `[confirmed as attribution]` (citation detail, primary not opened) · `[candidate, partially confirmed]` · `[candidate, unconfirmed]`. Contested foundings stay as **lineages**, not flattened.
- **the registry** — a single `corpus.index`, one line per record. Filter by the `type` prefix. The index loads for navigation; records are pulled on demand. (Like `MEMORY.md`.) For high-volume layers (sources, objects) the registry may summarize per-field with counts rather than inline every record, to stay loadable.

---

## the `object-type` vocabulary (extended, f2)

The kind of thing an object record holds. Pick the truest one.

- **mathematics (provable):** `theorem` · `lemma` · `corollary` · `conjecture` · `hypothesis` · `definition` · `axiom`
- **empirical / methodological / formal (not theorems):** `law` (an empirical regularity, e.g. Weber's law) · `principle` (a governing rule, e.g. randomization) · `method` / `algorithm` (a procedure, e.g. Metropolis–Hastings) · `design` (e.g. the Latin square) · `concept` (e.g. the file-drawer problem) · `criterion` (e.g. falsifiability) · `framework` (e.g. the TOP guidelines) · `format` / `convention` (e.g. the registered report, the SI base units)

The list is open: when a field needs a kind not here, use the truest word and it joins the vocabulary. `status` pairs with it — `proven` for math results, `established`/`empirical` for the rest, `open` for conjectures.

---

## 1 · field record

The lineage map. One per domain. (extends the existing compiled-card.)

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
links: [field.multiplicative-number-theory, field.complex-analysis, source.riemann-1859, source.apostol-1976]
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
links: [object.sampling-theorem, field.signal-processing]
---

C. E. Shannon, "Communication in the Presence of Noise," *Proc. IRE* 37(1) (Jan 1949), 10–21.
Contains the sampling theorem as Theorem 1 — distinct from Shannon's *1948* information-theory paper. **[confirmed]**
```

---

## 3 · object record

The substance. One per object (see the object-type vocabulary above).

**frontmatter** — `name` · `type: object` · `object-type` (from the vocabulary) · `essence` · `field` (`[links]`) · `status` (open/proven/disproven/partial · established/empirical) · `state` (float/settled/verified) · `attribution` · `formalized` · `source` · `depends-on` · `used-by`.
*Frontmatter list fields use single-bracket YAML with **bare** handles — `depends-on: [object.foo, object.bar]`, NOT `[[double brackets]]`. The `[[wikilink]]` form is for body prose only.*

*`used-by` is the **exact inverse of direct `depends-on`**, **object handles only** — if X lists Y in `depends-on`, Y lists X in `used-by`, and nothing else. Transitive users are not listed (they reach through the chain); field membership lives in `field:`, never in `used-by`. An object used by nothing carries `used-by: []`. (settled 20260614.)*

**body** — `statement` (plain + formal/formula) · `proof` / `derivation` / `basis` (text / sketch / reference; multiple allowed; promote a proof to its own object record only when it grows big or independent) · `lineage` when contested.

### exemplar — `object.prime-number-theorem` (the canonical exemplar; see the live record)

```markdown
---
name: prime-number-theorem
type: object
object-type: theorem
essence: the primes thin out like 1/ln x — π(x) is asymptotic to x/ln x
field: [field.analytic-number-theory]
status: proven
state: float
attribution: conjectured Gauss (1792–93) & Legendre (1797–98); proved Hadamard and de la Vallée Poussin (1896)
formalized: true
source: [source.hadamard-1896, source.de-la-vallee-poussin-1896, source.riemann-1859]
depends-on: [object.riemann-zeta-function, field.complex-analysis]
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

The `state` dial advances in frontmatter. **No file moves** *(f3 — superseding the old cell-movement rule)*. The keys, settled 20260614:

1. **`float`** — captured from a source, recorded, cross-checked, but not yet run through the gate. The whole database currently sits here.
2. **`float → settled`** — the reconcile keys: every `[[source]]` link resolves to a real source record; the claim cross-read against the source (against reality, not against what we expected — keystone 221); known drift on the record closed; links wired both directions (`depends-on` ↔ `used-by`).
3. **`settled → verified`** — **one careful pass that names the authoritative source it checked against** (auditable later; a contested record may be escalated to a second independent pass, but that is the exception, not the rule). The bar differs by object-type:
   - **theorems / lemmas / corollaries:** statement checked against an authoritative statement; proof / derivation present and sound-by-reference; the `formalized` flag honest.
   - **empirical laws / methods / frameworks / conventions:** `basis` checked — the empirical support **and its limits** recorded; `status: empirical` not dressed as `proven`.
   - **fields / sources:** lineage faithful; contested foundings carried as lineage, not flattened.
4. **`verified`** — the record is faithful and the engine can cite it with confidence. Verified records do **not** auto-relocate; where verified ground comes to rest is a separate, deliberate decision.

---

## settled

1. **One registry**, `corpus.index`, type-prefix filters (summarize per-field for high-volume layers).
2. **Reference by `type.scope` handle**; the folder is the address; no separate numeric id.
3. **`object-type` vocabulary** — the extended, open list above (math + empirical/methodological), `status` pairing accordingly. *(f2, ratified 20260614.)*
4. **Proof = sub-field** of the object; promoted to its own record only when it grows big/independent.
5. **Frontmatter lists** are single-bracket, bare handles; `[[wikilinks]]` in body prose only.
6. **`state` is a frontmatter dial, decoupled from the folder address** — promotion is an edit, not a move; verified records do not auto-land on root 0; the resting place is earned separately. *(f3, settled 20260614.)*
7. **Verification keys** — `float→settled` reconcile keys + `settled→verified` one careful pass naming its source, by object-type. *(f3, settled 20260614.)*
8. **`used-by` = exact inverse of direct `depends-on`, object handles only** — no transitive users, no field handles; empty is `[]`. *(f3, settled 20260614.)*

---

*f3 — the `state` dial decoupled from the folder address; verification keys settled (one careful pass that names its source). Field layer (76), source layer (575), object layer (364) = 1015 records, all float at the `00` leaf. The gate now promotes records in place via frontmatter; where verified ground rests is a later, deliberate question.*
