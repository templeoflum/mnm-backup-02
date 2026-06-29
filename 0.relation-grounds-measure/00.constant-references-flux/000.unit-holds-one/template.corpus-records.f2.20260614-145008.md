# template — the corpus records — f2 — 20260614-145008

**The schema spec for ground's grounding database.** Defines the record types, their fields, and the conventions, with one full exemplar of each.

**Fold f1 → f2 (operator ratified, 20260614):** the **`object-type` vocabulary is extended** beyond pure mathematics. The Measuring canon's empirical/methodological fields (psychophysics, metrology, falsificationism, open science, auditing, …) need object-types the math list doesn't carry. Proven across 41 fields / 203 objects before ratifying. Everything else carries forward from f1 unchanged.

**Fold f0 → f1 (20260614):** one registry with type filters · records named `type.scope.fN.timestamp.md` · linked by the `type.scope` handle · referenced by handle (folder = address, no numeric id) · proof as a sub-field.

Builds on what the corpus already grew (the compiled-cards format) and the pattern the house already runs (the `memory/` system: one unit per file, frontmatter, an index, `[[links]]`).

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
- **the cell (folder address) reflects `state`, not subject, and *is* the address.** A record lives in `00` / `01` / `02` by its *record maturity* and migrates cells as it matures. Subject (field/canon) is carried in frontmatter and `[[links]]`, navigated through the registry — never through the folder tree. *(Note in practice: records live at the `00` leaf; the schema/registry/dock docs live in the `000` cell. The leaf-vs-cell split reconciles at the verification pass.)*
- **two independent dials:**
  - **`state`** = maturity of the *record* — `float → settled → verified`. The gate. `verified` earns root `0`. Maps to cells: raw `00` → calibrating `01` → measured `02` → verified `0`.
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

1. **`00` raw** — captured from a source, recorded, not yet checked. `state: float`.
2. **`01` calibrate** — sources resolved, cross-checked against reality (not against expectation), corrections closed, links wired. `state: settled`.
3. **`02` measured** — verified faithful; for theorems, proof checked (and ideally `formalized`). `state: verified`.
4. **`0` the shelf** — earns root 0: the grounding the context engine cites with confidence.

The cell a file sits in *is* its `state`. Moving the file is promoting the record.

---

## settled

1. **One registry**, `corpus.index`, type-prefix filters (summarize per-field for high-volume layers).
2. **Reference by `type.scope` handle**; the cell folder is the address; no separate numeric id.
3. **`object-type` vocabulary** — the extended, open list above (math + empirical/methodological), `status` pairing accordingly. *(f2, ratified 20260614.)*
4. **Proof = sub-field** of the object; promoted to its own record only when it grows big/independent.
5. **Frontmatter lists** are single-bracket, bare handles; `[[wikilinks]]` in body prose only.

---

*f2 — object-type vocabulary ratified and extended (math + empirical). Field layer (76), source layer (487+), object layer in progress (Measuring canon complete: 203 objects). Records float at the `00` leaf; the verification gate promotes them toward root 0.*
