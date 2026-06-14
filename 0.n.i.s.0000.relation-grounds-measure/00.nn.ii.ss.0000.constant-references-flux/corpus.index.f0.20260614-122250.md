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

*Measuring canon · slice 01 — structure & motion (12)*

- `field.group-theory` · symmetry and its algebraic structure · float
- `field.lie-theory` · continuous symmetry; transformation groups & Lie algebras · float
- `field.geometric-algebra` · Grassmann/Clifford algebra unifying geometry & algebra · float
- `field.linear-algebra` · vector spaces and linear maps · float
- `field.projective-geometry` · geometry of incidence and points at infinity · float
- `field.differential-geometry` · curvature and the geometry of smooth manifolds · float
- `field.point-set-topology` · continuity and space via open sets · float
- `field.order-lattice-theory` · partial orders, lattices, and their structure · float
- `field.dynamical-systems` · how systems evolve in time; phase space & chaos · float
- `field.ergodic-theory-equidistribution` · long-run averages and equidistribution · float
- `field.graph-theory` · networks of vertices and edges · float
- `field.coordinate-systems-erlangen-program` · geometry as a transformation group + invariants · float

*Measuring canon · slice 02 — chance & method (16)*

- `field.random-matrix-theory` · spectra of random matrices · float
- `field.point-process-statistics` · random scatterings of points in space/time · float
- `field.probability-theory` · the mathematics of chance · float
- `field.mathematical-statistics` · inference from data; estimation & likelihood · float
- `field.extreme-value-theory` · the statistics of maxima and rare events · float
- `field.monte-carlo-methods` · computation by random sampling · float
- `field.information-theory` · entropy, channel capacity, the bit · float
- `field.metrology` · the science of measurement & units · float
- `field.representational-measurement-theory` · what it means to assign numbers to things · float
- `field.experimental-design` · randomization, replication, blocking · float
- `field.preregistration-open-science` · committing methods before data; open practice · float
- `field.error-statistical-philosophy` · inference as severe testing · float
- `field.popperian-falsificationism` · demarcation by falsifiability · float
- `field.psychophysics` · the quantitative link between stimulus and sensation · float
- `field.exploratory-data-analysis` · looking at data before modeling it · float
- `field.auditing-tradition` · sampling and verification of records · float

*Mind canon · slice 10 — learning & transmission (5)*

- `field.constructionism-microworlds` · learning by making; microworlds · float
- `field.prepared-environment-pedagogy` · auto-education in a prepared environment · float
- `field.scaffolding-zpd` · the zone of proximal development & tutoring support · float
- `field.tacit-knowledge` · what we know but cannot fully tell · float
- `field.deliberate-practice-apprenticeship` · expertise through structured practice · float

*Mind canon · slice 11 — training & feedback (6)*

- `field.ethology-horsemanship-lineage` · animal-behavior science + the craft of feel · float
- `field.operant-conditioning` · behavior shaped by reinforcement · float
- `field.cybernetics-control-theory` · feedback and control in animal and machine · float
- `field.second-order-cybernetics` · the observer included in the system · float
- `field.ai-alignment-praxis` · steering AI systems toward intended ends · float
- `field.phenomenological-method` · description of lived experience · float

*Structure canon · slice 20 — computation & number-craft (8)*

- `field.numerical-analysis` · computing with continuous mathematics & error · float
- `field.ieee-754-floating-point` · the standard for binary floating-point arithmetic · float
- `field.numerical-optimization` · finding minima; gradient & simplex · float
- `field.validated-interval-arithmetic` · rigorous bounds via intervals · float
- `field.digital-signal-processing` · sampling, filtering, the FFT · float
- `field.detection-estimation-theory` · extracting signals from noise · float
- `field.computability-theory` · what can be computed at all · float
- `field.algorithms` · methods of computation, analyzed · float

*Structure canon · slice 21 — record & organization (10)*

- `field.event-sourcing-append-only-architecture` · state as an append-only log of events · float
- `field.version-control-theory` · tracking change across versions · float
- `field.archival-science` · ordering and describing records (respect des fonds) · float
- `field.faceted-classification` · classification by independent facets (PMEST) · float
- `field.zettelkasten-knowledge-organization` · the slip-box of linked notes · float
- `field.numeration-systems` · positional notation and zero · float
- `field.literate-programming` · code woven with its explanation · float
- `field.software-testing-n-version` · testing and redundant implementations · float
- `field.reproducibility-engineering` · making computational results reproducible · float
- `field.addressing-namespace-design` · naming, numbering, and resolving addresses · float

*Structure canon · slice 22 — seeing & playing (6)*

- `field.data-visualization` · showing quantitative information visually · float
- `field.explorable-explanations` · interactive, playable explanation · float
- `field.human-computer-interaction` · augmenting human intellect at the interface · float
- `field.graphics-sampling-artifacts` · aliasing and stochastic sampling in rendering · float
- `field.psychoacoustics` · how we perceive sound · float
- `field.generative-live-visual-art` · art made by autonomous / coded process · float

*Held — Mind canon · slice 12 (myth & meaning, 7 rungs):* structuralism · semiotics · linguistics-argument-structure · narratology · comparative-mythology · apophatic-traditions · interactive-fiction. **Reassigned to mind (root 1) per the standing course-change — not converted as ground records.**

## source records

**Source layer — 434 source records (float).** 313 (field layer) + 7 (object pilot) + 16 (wave 1) + 46 (wave 2) + 52 (wave 3). The object layer grows the source set as it goes; agents Glob-check for existing source records before creating, so handles dedupe (verified: zero duplicate slugs across all waves, even under 12 parallel agents). Handle convention: `source.<author-year>` (door textbooks / websites use `source.<author-keyword>`). Each source carries `kind` (paper/book/standard/website/…), author, year, venue, the verbatim citation, access notes, and its confidence tag. Reached via each `field.*` record's `links` or directly by handle; addressed at the `00` leaf alongside the fields.

*Not inlined here — a 313-line dump would cost the index its loadability. The records are the source of truth; the field layer links into them. A standalone generated source-index can be cut on request.*

## object records

*The researched layer — keystone objects per field, web-searched and verified against ≥2 authoritative sources, entered float. Listed compactly: field (N) → object slugs. Detail + dependency graph live in each object record.*

**Measuring canon · slice 00 — the patient's mathematics — COMPLETE (13 fields, 65 objects)**
- **analytic-number-theory (5):** riemann-zeta-function · euler-product · prime-number-theorem · riemann-hypothesis · dirichlet-theorem-arithmetic-progressions
- **multiplicative-number-theory (6):** multiplicative-function · mobius-function · mobius-inversion · dirichlet-convolution · dirichlet-l-function · mertens-theorems
- **complex-analysis (6):** cauchy-riemann-equations · cauchy-integral-theorem · cauchy-integral-formula · residue-theorem · liouville-theorem · laurent-series
- **real-analysis-limits (5):** completeness-axiom · epsilon-delta-limit · bolzano-weierstrass-theorem · intermediate-value-theorem · heine-borel-theorem
- **diophantine-approximation (4):** dirichlet-approximation-theorem · liouville-approximation-theorem · roth-theorem · hurwitz-approximation-theorem
- **continued-fractions (4):** continued-fraction-expansion · convergents-best-approximation · lagrange-continued-fraction-theorem · gauss-kuzmin-theorem
- **sieve-methods (4):** sieve-of-eratosthenes · brun-theorem · selberg-sieve · large-sieve-inequality
- **prime-gap-statistics (4):** bertrands-postulate · twin-prime-conjecture · cramers-conjecture · bounded-gaps-theorem
- **elementary-number-theory (7):** euclid-theorem-infinitude-of-primes · fundamental-theorem-of-arithmetic · euclidean-algorithm · fermat-little-theorem · euler-theorem-totient · quadratic-reciprocity · chinese-remainder-theorem
- **special-functions-series-acceleration (5):** gamma-function · euler-maclaurin-formula · stirling-approximation · basel-problem · gauss-hypergeometric-function
- **asymptotic-analysis (5):** asymptotic-expansion · landau-notation · laplaces-method · method-of-steepest-descent · watsons-lemma
- **harmonic-fourier-analysis (5):** fourier-series · fourier-transform · parseval-plancherel-theorem · convolution-theorem · poisson-summation-formula
- **approximation-theory (5):** weierstrass-approximation-theorem · stone-weierstrass-theorem · chebyshev-equioscillation-theorem · chebyshev-polynomials · best-uniform-approximation

**Measuring canon · slice 01 — structure & motion — COMPLETE (12 fields, 61 objects)**
- **group-theory (6):** lagrange-theorem · cauchy-theorem · sylow-theorems · orbit-stabilizer-theorem · isomorphism-theorems · classification-of-finite-simple-groups
- **lie-theory (6):** lie-group · lie-algebra · exponential-map-lie · lie-group-lie-algebra-correspondence · baker-campbell-hausdorff-formula · semisimple-classification
- **geometric-algebra (5):** geometric-product · clifford-algebra · clifford-algebra-universal-property · multivector · rotor
- **linear-algebra (6):** vector-space · rank-nullity-theorem · eigenvalue-eigenvector · cayley-hamilton-theorem · spectral-theorem · singular-value-decomposition
- **projective-geometry (5):** projective-space · principle-of-duality · desargues-theorem · pappus-hexagon-theorem · cross-ratio
- **differential-geometry (5):** smooth-manifold · riemannian-metric · gaussian-curvature · geodesic · gauss-bonnet-theorem
- **point-set-topology (5):** topological-space · compactness · tychonoff-theorem · urysohn-lemma · connectedness
- **order-lattice-theory (5):** partial-order · lattice · zorn-lemma · knaster-tarski-theorem · birkhoff-representation-theorem
- **dynamical-systems (4):** dynamical-system · poincare-bendixson-theorem · lyapunov-stability · strange-attractor
- **ergodic-theory-equidistribution (5):** birkhoff-pointwise-ergodic-theorem · von-neumann-mean-ergodic-theorem · weyl-equidistribution-theorem · poincare-recurrence-theorem · ergodicity-and-mixing
- **graph-theory (5):** graph · euler-eulerian-circuit-theorem · four-color-theorem · kuratowski-theorem · menger-theorem
- **coordinate-systems-erlangen-program (4):** cartesian-coordinates · erlangen-program · klein-geometry-homogeneous-space · homogeneous-coordinates

*Measuring canon: slices 00 + 01 complete (25 fields, 126 objects). Remaining in canon: slice 02 — chance & method (16 fields). Then Mind, then Structure. Forward links still to write: object.bernoulli-numbers, object.fundamental-theorem-of-algebra. Verify-pass cleanup: doubled `[[` in a few complex-analysis `depends-on` fields; the heine-borel record tags `field.general-topology` (slug variant of point-set-topology) — reconcile.*

---

*f0 — field layer (**76**) + source layer (**434**) + object layer (**126**, Measuring canon slices 00 + 01 complete: 25 fields) — **636 records total**, all float, all at the `00` leaf. Object research op proven for fanned-out agents (web-search → verify ≥2 sources → record, sources grown & deduped). Pacing canon by canon: Measuring slice 02 (16 fields) next finishes the canon, then Mind, then Structure; then the verification gate (float → settled → verified, earning root 0).*
