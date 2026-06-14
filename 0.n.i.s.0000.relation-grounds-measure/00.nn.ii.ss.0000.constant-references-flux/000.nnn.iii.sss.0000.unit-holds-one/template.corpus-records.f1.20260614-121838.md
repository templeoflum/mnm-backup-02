# template — the corpus records — f1 — 20260614-121838

**The schema spec for ground's grounding database.** Defines the record types, their fields, and the conventions, with one full exemplar of each.

**Fold f0 → f1 (operator settled all four open questions, 20260614):** one registry with type filters · records named by the house convention `type.scope.fN.timestamp.md` · linked by the `type.scope` handle · referenced by handle (folder = address, no separate numeric id) · object-type list confirmed · proof as a sub-field. The schema is **settled** at the design level; it proves out through use.

Builds on what the corpus already grew (the compiled-cards format) and the pattern the house already runs (the `memory/` system: one unit per file, frontmatter, an index, `[[links]]`).

---

## what this database is

Ground (root 0) is the **grounding / reference database** the context engine draws from while we build, learn, and research. It holds the technical substance: source texts, papers, theories, hypotheses, conjectures, proofs, theorems, definitions — and the map of the fields they live in.

It is **relational** — that is root 0's nature (relation · grounds · measure). The links between records (a theorem depends on a lemma, a field draws on a source) *are* the grounding. The dependency graph is the point, not decoration.

## three record types

| type | holds | answers |
|------|-------|---------|
| **field** | a domain of lineage | "where does this field come from, how do I enter it?" |
| **source** | a paper / text / book | "what document says this, where do I get it?" |
| **object** | a theorem / proof / conjecture / hypothesis / definition / lemma / corollary / axiom | "what is the actual claim, is it proven, what does it rest on?" |

## conventions (all types)

- **one record = one file.** Markdown, frontmatter for machine-readable fields, body for prose.
- **filename: `type.scope.fN.timestamp.md`** — the house convention. `type` ∈ {field, source, object}; `scope` is the kebab-case slug; `fN` the fold; timestamp UTC. Examples: `field.analytic-number-theory.f0.20260614-120000.md`, `source.shannon-1949.f0.….md`, `object.sampling-theorem.f0.….md`.
- **the handle is `type.scope`** — the stable identity. Reference any record by `[[type.scope]]`, e.g. `[[object.sampling-theorem]]`, `[[field.analytic-number-theory]]`. The handle drops `fN.timestamp` (those are versioning) so a link always resolves to the *current* fold. The type prefix disambiguates (a field and an object may share a slug) and tells the engine what it points at without opening it.
- **frontmatter `name` stays the bare slug** (`name: sampling-theorem`); the handle composes `{type}.{name}`. No redundancy — `type` is its own field.
- **the cell (folder address) reflects `state`, not subject, and *is* the address.** A record lives in `00` / `01` / `02` by its *record maturity* and migrates cells as it matures. No separate numeric id — the folder + handle locate it. Subject (field/canon/math/grammar) is carried in frontmatter and `[[links]]`, navigated through the registry — never through the folder tree.
- **two independent dials:**
  - **`state`** = maturity of the *record* — `float → settled → verified`. The gate. `verified` earns root `0`. Maps to cells: raw `00` → calibrating `01` → measured `02` → verified `0`.
  - **`status`** (objects only) = state of the *mathematics* — `open / proven / disproven / partial`. A conjecture can be a `verified` record of an `open` problem. Don't conflate them.
- **confidence** on every sourced claim, carried from the dive grades: `[confirmed]` · `[confirmed as attribution]` · `[candidate, partially confirmed]` · `[candidate, unconfirmed]`. Contested foundings stay as **lineages**, not flattened to one name.
- **the registry** — a single `corpus.index` (the descendant of the compiled-cards doc), one line per record: `handle · essence · state`. Filter by the `type` prefix. The index loads for navigation; records are pulled on demand. (Like `MEMORY.md`.)

---

## 1 · field record

The lineage map. One per domain. (extends the existing compiled-card.)

**frontmatter** — `name` · `type: field` · `essence` · `canon` (and slice) · `grade` (`s`/`t`/`f`) · `state` · `links`.

**body** — `origin` · `codification` · `door`, each a sourced line with a confidence tag and a `[[source.…]]` link; `lineage` when multi-claimant.

### exemplar — `field.analytic-number-theory.f0.<timestamp>.md`

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

**origin** — P. G. L. Dirichlet, theorem on primes in arithmetic progressions (1837),
introducing Dirichlet characters & L-functions; called "father of analytic number
theory." [[source.dirichlet-1837]] **[confirmed]**

**codification** — B. Riemann, "Über die Anzahl der Primzahlen unter einer gegebenen
Größe," *Monatsber. Berliner Akad.* (1859) — the complex-analytic ζ(s).
[[source.riemann-1859]] **[confirmed]**

**door** — T. M. Apostol, *Introduction to Analytic Number Theory* (Springer, 1976);
Davenport's notes circulate free. [[source.apostol-1976]]
```

---

## 2 · source record

The document itself. Bibliographic. One per paper / book / set of notes.

**frontmatter** — `name` · `type: source` · `essence` · `kind` (paper/book/monograph/notes/preprint) · `author` · `year` · `venue` · `state` · `links`.

**body** — full citation, what it contains, access notes, attribution confidence.

### exemplar — `source.shannon-1949.f0.<timestamp>.md`

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

Full citation — C. E. Shannon, "Communication in the Presence of Noise,"
*Proc. IRE* 37(1) (Jan 1949), 10–21.

Contains the sampling theorem as **Theorem 1**: explicit statement + proof; credits
the "Nyquist interval." This is the formal-statement source — distinct from Shannon's
*1948* "A Mathematical Theory of Communication," which founds information theory and is
**not** the sampling-theorem source (the exact error loose citations make).

Access — widely reprinted; *Proc. IEEE* republished it (1998). **[confirmed]**
```

---

## 3 · object record

The substance. One per theorem / proof / conjecture / hypothesis / definition / lemma / corollary / axiom.

**frontmatter** — `name` · `type: object` · `object-type` · `essence` · `field` (`[[links]]`) · `status` (open/proven/disproven/partial) · `state` (float/settled/verified) · `attribution` · `formalized` · `source` · `depends-on` · `used-by`.

**body** — `statement` (plain + formal) · `proof` (text / sketch / reference; multiple allowed; promote to its own object record only when one grows big or independent enough) · `lineage`.

### exemplar — `object.sampling-theorem.f0.<timestamp>.md`

```markdown
---
name: sampling-theorem
type: object
object-type: theorem
essence: a bandlimited signal is fully determined by samples taken at ≥ twice its bandwidth
field: [field.signal-processing, field.harmonic-analysis]
status: proven
state: float
attribution: C. E. Shannon (1949); Whittaker–Kotelnikov–Shannon lineage
formalized: false
source: [source.shannon-1949, source.nyquist-1928]
depends-on: [object.fourier-transform, object.bandlimited-signal, object.nyquist-interval]
used-by: [object.nyquist-rate, object.reconstruction-formula, field.digital-signal-processing]
---

**statement (plain)** — if a signal contains no frequencies higher than B hertz, it is
completely determined by its values at a series of points spaced 1/(2B) seconds apart;
the signal can be exactly reconstructed from those samples.

**statement (formal)** — for f ∈ L² bandlimited to [−B, B], f(t) = Σₙ f(n/2B) · sinc(2Bt − n).

**proof** — Shannon 1949, Theorem 1 (Fourier-series argument on the bandlimited
spectrum). Full proof in [[source.shannon-1949]]. **[confirmed]**

**precursor** — H. Nyquist (1928) showed ~2B independent samples per bandwidth B, but did
not treat sampling/reconstruction of continuous signals as such. [[source.nyquist-1928]]
**[confirmed]**

**lineage (WKS)** — genuinely multi-claimant: E. T. Whittaker 1915 (cardinal series);
V. A. Kotelnikov 1933 (independent, communications framing); J. M. Whittaker 1935;
Küpfmüller 1928; Raabe 1939; Someya 1949; Gabor 1946. Scholarly name
**Whittaker–Kotelnikov–Shannon**. Per Meijering, exactly how/when Nyquist's name
attached "remains obscure." Carried as lineage, not flattened. **[confirmed]**
```

---

## how a record matures (the gate)

1. **`00` raw** — captured from a source, statement recorded, not yet checked. `state: float`.
2. **`01` calibrate** — sources resolved, cross-checked against reality (not against expectation), corrections closed, links wired. `state: settled`.
3. **`02` measured** — verified faithful; for objects, proof checked (and ideally `formalized`). `state: verified`.
4. **`0` the shelf** — earns root 0: the grounding the context engine cites with confidence.

The cell a file sits in *is* its `state`. Moving the file is promoting the record.

---

## settled (operator word, 20260614)

1. **One registry**, `corpus.index`, type-prefix filters.
2. **Reference by `type.scope` handle**; the cell folder is the address; no separate numeric id.
3. **`object-type` list** — theorem / conjecture / hypothesis / definition / lemma / corollary / axiom.
4. **Proof = sub-field** of the object; promoted to its own record only when it grows big/independent.

---

*f1 — schema settled at design level. FLOAT until it proves out through use. Nothing in the corpus converted. Next: build the `corpus.index` registry and begin converting — the field + source layers from the existing corpus, the object layer by continuing the research into the source texts.*
