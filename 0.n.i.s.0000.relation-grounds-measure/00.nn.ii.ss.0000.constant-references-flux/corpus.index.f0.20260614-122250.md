# corpus.index — the grounding database registry — f0 — 20260614-122250

**The registry of ground's grounding database.** One line per record: `handle · essence · state`. Filter by the `type` prefix (`field.` / `source.` / `object.`). Loads for navigation; records are pulled on demand. Schema: `template.corpus-records.f1`.

**Where records live:** the cell folder *is* the record's `state` — `00` raw/float · `01` calibrating/settled · `02` measured/verified · root `0` the verified shelf. The original raw source-material dock stays at `000`; the maturing records live at the leaf level (`00/` for now). Records migrate cells as they earn promotion. **Root 0 stays empty until verified — fast fill is false fill.**

This index is appended to as records are created; it folds only on completion cleanup or a discussed format change.

---

## field records

*Measuring canon · slice 00 — the patient's mathematics (13)*

- `field.analytic-number-theory` · integers via analysis (limits, complex fns, L-functions) · float
- `field.multiplicative-number-theory` · primes via Euler products & Dirichlet series · float
- `field.diophantine-approximation` · how well reals are approximated by rationals · float
- `field.continued-fractions` · the canonical expansion behind best rational approximations · float
- `field.sieve-methods` · counting primes/almost-primes by inclusion–exclusion refinements · float
- `field.prime-gap-statistics` · the distribution of spacings between consecutive primes · float
- `field.elementary-number-theory` · integers, divisibility, congruences from first principles · float
- `field.complex-analysis` · functions of a complex variable; the engine under analytic NT · float
- `field.special-functions-series-acceleration` · gamma/Bessel/etc. and summation methods · float
- `field.asymptotic-analysis` · the behaviour of functions in a limit · float
- `field.harmonic-fourier-analysis` · decomposition into frequencies · float
- `field.real-analysis-limits` · the rigorous foundation of limits, continuity, the reals · float
- `field.approximation-theory` · best approximation of functions by simpler ones · float

## source records

*(next pass — `[[source.*]]` links in the field records dangle until written)*

## object records

*(the research layer — theorems/proofs/conjectures, built by continuing into the source texts)*

---

*f0 — registry stood up; slice 00 of the measuring canon converted to field records (float). Next: the remaining measuring-canon slices, then mind + structure canons; then the source layer; then objects.*
