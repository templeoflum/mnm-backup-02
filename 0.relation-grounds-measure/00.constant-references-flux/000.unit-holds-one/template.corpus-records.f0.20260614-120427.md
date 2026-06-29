# template — the corpus records — f0 — 20260614-120427

**The schema spec for ground's grounding database.** Defines the record types, their fields, and the conventions, with one full exemplar of each. A proposal — FLOAT until operator word. Nothing in the live corpus is converted on the strength of this.

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
| **object** | a theorem / proof / conjecture / hypothesis / definition / lemma / axiom | "what is the actual claim, is it proven, what does it rest on?" |

## conventions (all types)

- **one record = one file.** Markdown, frontmatter for machine-readable fields, body for prose.
- **`name` is the stable handle.** kebab-case slug. Reference any record from anywhere by `[[name]]`. The name never changes; it is the identity.
- **the cell (folder address) reflects `state`, not subject.** A record lives in `00` / `01` / `02` by its *record maturity* (the function axis), and migrates cells as it matures. Subject (field/canon/math/grammar) is carried in frontmatter and `[[links]]`, navigated through the registry — never through the folder tree.
- **two independent dials:**
  - **`state`** = maturity of the *record* — `float → settled → verified`. This is the gate. `verified` earns root `0` (the verified shelf). Maps to the cells: raw `00` → calibrating `01` → measured `02` → verified `0`.
  - **`status`** (objects only) = state of the *mathematics* — `open / proven / disproven / partial`. A conjecture can be a `verified` record of an `open` problem. Don't conflate them.
- **confidence** on every sourced claim, carried from the dive grades: `[confirmed]` · `[confirmed as attribution]` · `[candidate, partially confirmed]` · `[candidate, unconfirmed]`. Contested foundings stay as **lineages**, not flattened to one name.
- **the registry** (`corpus.index`, the descendant of the compiled-cards doc) lists every record — name · type · essence · state — one line each, like `MEMORY.md`. The index is loaded for navigation; the records are pulled on demand.

---

## 1 · field record

The lineage map. One per domain. (extends the existing compiled-card.)

**frontmatter**
- `name` · `type: field` · `essence` (one line)
- `canon` — measuring / mind / structure / … (and the slice it sits in)
- `grade` — `s` (origin+codification+door) · `t` (origin+door) · `f` (one orientation note)
- `state` — float / settled / verified
- `links` — related fields + the door source(s)

**body** — `origin` · `codification` · `door`, each a sourced line with a confidence tag and an `[[source-link]]`; `lineage` when multi-claimant.

### exemplar — `analytic-number-theory.md`

```markdown
---
name: analytic-number-theory
type: field
essence: the study of integers through the tools of analysis — limits, complex functions, L-functions
canon: measuring / slice-00 the patient's mathematics
grade: s
state: float
links: [multiplicative-number-theory, complex-analysis, riemann-1859, apostol-1976]
---

**origin** — P. G. L. Dirichlet, theorem on primes in arithmetic progressions (1837),
introducing Dirichlet characters & L-functions; called "father of analytic number
theory." [[dirichlet-1837]] **[confirmed]**

**codification** — B. Riemann, "Über die Anzahl der Primzahlen unter einer gegebenen
Größe," *Monatsber. Berliner Akad.* (1859) — the complex-analytic ζ(s).
[[riemann-1859]] **[confirmed]**

**door** — T. M. Apostol, *Introduction to Analytic Number Theory* (Springer, 1976);
Davenport's notes circulate free. [[apostol-1976]]
```

---

## 2 · source record

The document itself. Bibliographic. One per paper / book / set of notes.

**frontmatter**
- `name` · `type: source` · `essence`
- `kind` — paper / book / monograph / notes / preprint
- `author` · `year` · `venue`
- `state` · `links` (what it grounds)

**body** — full citation, what it contains, access notes, attribution confidence.

### exemplar — `shannon-1949.md`

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
links: [sampling-theorem, signal-processing]
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

The substance. One per theorem / proof / conjecture / hypothesis / definition / lemma / axiom.

**frontmatter**
- `name` · `type: object` · `object-type` (theorem / conjecture / …) · `essence`
- `field` — `[[links]]` to its field card(s)
- `status` — open / proven / disproven / partial  *(the mathematics)*
- `state` — float / settled / verified  *(the record)*
- `attribution` · `formalized` (proof-assistant checked? which?)
- `source` — `[[links]]` · `depends-on` — `[[links]]` · `used-by` — `[[links]]`

**body** — `statement` (plain + formal) · `proof` (text / sketch / reference; multiple allowed) · `lineage`.

### exemplar — `sampling-theorem.md`

```markdown
---
name: sampling-theorem
type: object
object-type: theorem
essence: a bandlimited signal is fully determined by samples taken at ≥ twice its bandwidth
field: [signal-processing, harmonic-analysis]
status: proven
state: float
attribution: C. E. Shannon (1949); Whittaker–Kotelnikov–Shannon lineage
formalized: false
source: [shannon-1949, nyquist-1928]
depends-on: [fourier-transform, bandlimited-signal, nyquist-interval]
used-by: [nyquist-rate, reconstruction-formula, digital-signal-processing]
---

**statement (plain)** — if a signal contains no frequencies higher than B hertz, it is
completely determined by its values at a series of points spaced 1/(2B) seconds apart;
the signal can be exactly reconstructed from those samples.

**statement (formal)** — for f ∈ L² bandlimited to [−B, B], f(t) = Σₙ f(n/2B) · sinc(2Bt − n).

**proof** — Shannon 1949, Theorem 1 (Fourier-series argument on the bandlimited
spectrum). Full proof in [[shannon-1949]]. **[confirmed]**

**precursor** — H. Nyquist (1928) showed ~2B independent samples per bandwidth B, but did
not treat sampling/reconstruction of continuous signals as such. [[nyquist-1928]]
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

## open for operator word

1. **One registry or three?** A single `corpus.index` (all types, like `MEMORY.md`), or one index per type (fields / sources / objects)? I lean **one** — simpler to load, the `type` field filters.
2. **Address depth.** Records referenced by `name` (stable). Do we *also* give each a numeric cell address (e.g. `020.…`), or is the cell-folder + name enough? I lean **folder + name is enough**; the numeric address is the folder.
3. **`object-type` granularity** — is the list right (theorem/conjecture/hypothesis/definition/lemma/corollary/axiom)? Add/cut?
4. **proof as sub-field vs own record** — I made `proof` a field of the object (multiple allowed). Alternative: proofs as their own object-type linked to the theorem. I lean **sub-field** unless a proof gets big/independent enough to deserve its own record.

---

*f0 — the record schema + three full exemplars. FLOAT. Nothing in the corpus converted. Next: operator settles the schema (and the four open questions); then we build the registry and start converting/continuing — the field + source layers from the existing corpus, the object layer by continuing the research into the source texts.*
