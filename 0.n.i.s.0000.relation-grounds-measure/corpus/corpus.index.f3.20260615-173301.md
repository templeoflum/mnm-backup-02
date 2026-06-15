# corpus.index — the grounding database registry — f3 — 20260615-173301

**The registry of ground's grounding database.** One line per record: `handle · essence · state`. Filter by the `type` prefix (`field.` / `source.` / `object.`). Loads for navigation; records are pulled on demand. Schema: `template.corpus-records.f3`.

**State (f4):** `state` is a **frontmatter dial** — `float → settled` (two states; `verified` retired as an overclaim — schema `template.corpus-records.f4`) — advanced by editing the record; **nothing moves on a state change.** All records now live in **`0/corpus/`** — a single `.unit` database (see fold note); the schema / sort-notes / dock docs sit in the `000` cell.

**Fold f0 → f1 (20260615):** slices removed (they were processing order, never structure — operator settled); fields regrouped by **canon** only; complex-analysis unit marked `settled`; the sort rule recorded. Counts trued: **1023** (77 field · 580 source · 366 object), **24 settled**, root 0 empty.

**Fold f2 → f3 (20260615):** slice-12 *myth & meaning* extracted to ground records (+7 fields, +18 sources, +6 objects → **1060**); **inline per-record `state` dropped** from the listings (it drifted and duplicated the dial — the record's frontmatter is the single source of truth); counts re-trued.

**Fold f1 → f2 (20260615):** **the sort dissolved — the corpus is now one `.unit` database** (see below). The lattice-scatter rule f1 recorded is *retired*: it had no signal at the per-record pin and the corpus is the *library*, not system-structure. Counts re-trued against the records: **1029** (78 field · 585 source · 366 object). 7 mis-typed `object` records fixed (`5157990`). Full reasoning: `note.corpus-sort.f3` (000 cell).

This index folds only on completion cleanup or a discussed format change; otherwise appended.

---

## the home: one `.unit` database (the sort, retired)

**The corpus is the library, not system-structure.** It is reference the wings *draw from*, reached through this catalog — not scattered into the shape of whoever reads it. So it lives as **one tracked unit**: `0/corpus/`, declared with a `.unit` marker (`frame.unit-marker`, 210). The lattice treats the folder as one thing; below it is the database's own business — git its machine-log, this index its catalog.

**The lattice scatter is retired.** f1 recorded a rule placing each record at an address (field → branch, source → reference-leaf, object → cell). Walked, it had **no signal** at the per-record pin (`kind:` ≠ role; essence ≠ cell) — forced judgment over 790 records, the friction was the structure declining the imposition. The elegant part *survives as metadata*: the type axis below — **field = spec · source = ops · object = config** — is queryable on every record and is exactly how this index groups. We kept the structure as a property; we dropped only the folders that carried no load. The *existence-branch-vs-mode* hinge dissolved with the scatter.

**How records are reached:** by handle through this index (filter on `type`/`canon`/`field`), never by walking folders. State stays a frontmatter dial; the unit holds records at any maturity side by side.

---

## field records — by canon (85)

### measuring canon (43)

- `field.analytic-number-theory` · integers via analysis (limits, complex fns, L-functions)
- `field.multiplicative-number-theory` · primes via Euler products & Dirichlet series
- `field.diophantine-approximation` · how well reals are approximated by rationals
- `field.continued-fractions` · the canonical expansion behind best rational approximations
- `field.sieve-methods` · counting primes/almost-primes by inclusion–exclusion refinements
- `field.prime-gap-statistics` · the distribution of spacings between consecutive primes
- `field.elementary-number-theory` · integers, divisibility, congruences from first principles
- `field.complex-analysis` · functions of a complex variable; the engine under analytic NT
- `field.special-functions-series-acceleration` · gamma/Bessel/etc. and summation methods
- `field.asymptotic-analysis` · the behaviour of functions in a limit
- `field.harmonic-fourier-analysis` · decomposition into frequencies
- `field.real-analysis-limits` · the rigorous foundation of limits, continuity, the reals
- `field.measure-theory` · measure, the Lebesgue integral, the foundation under probability & point processes
- `field.approximation-theory` · best approximation of functions by simpler ones
- `field.group-theory` · symmetry and its algebraic structure
- `field.lie-theory` · continuous symmetry; transformation groups & Lie algebras
- `field.geometric-algebra` · Grassmann/Clifford algebra unifying geometry & algebra
- `field.linear-algebra` · vector spaces and linear maps
- `field.projective-geometry` · geometry of incidence and points at infinity
- `field.differential-geometry` · curvature and the geometry of smooth manifolds
- `field.point-set-topology` · continuity and space via open sets
- `field.order-lattice-theory` · partial orders, lattices, and their structure
- `field.dynamical-systems` · how systems evolve in time; phase space & chaos
- `field.ergodic-theory-equidistribution` · long-run averages and equidistribution
- `field.graph-theory` · networks of vertices and edges
- `field.coordinate-systems-erlangen-program` · geometry as a transformation group + invariants
- `field.functional-analysis` · linear algebra & analysis on infinite-dimensional spaces
- `field.random-matrix-theory` · spectra of random matrices
- `field.point-process-statistics` · random scatterings of points in space/time
- `field.probability-theory` · the mathematics of chance
- `field.mathematical-statistics` · inference from data; estimation & likelihood
- `field.extreme-value-theory` · the statistics of maxima and rare events
- `field.monte-carlo-methods` · computation by random sampling
- `field.information-theory` · entropy, channel capacity, the bit
- `field.metrology` · the science of measurement & units
- `field.representational-measurement-theory` · what it means to assign numbers to things
- `field.experimental-design` · randomization, replication, blocking
- `field.preregistration-open-science` · committing methods before data; open practice
- `field.error-statistical-philosophy` · inference as severe testing
- `field.popperian-falsificationism` · demarcation by falsifiability
- `field.psychophysics` · the quantitative link between stimulus and sensation
- `field.exploratory-data-analysis` · looking at data before modeling it
- `field.auditing-tradition` · sampling and verification of records

### mind canon (18)

- `field.constructionism-microworlds` · learning by making; microworlds
- `field.prepared-environment-pedagogy` · auto-education in a prepared environment
- `field.scaffolding-zpd` · the zone of proximal development & tutoring support
- `field.tacit-knowledge` · what we know but cannot fully tell
- `field.deliberate-practice-apprenticeship` · expertise through structured practice
- `field.ethology-horsemanship-lineage` · animal-behavior science + the craft of feel
- `field.operant-conditioning` · behavior shaped by reinforcement
- `field.cybernetics-control-theory` · feedback and control in animal and machine
- `field.second-order-cybernetics` · the observer included in the system
- `field.ai-alignment-praxis` · steering AI systems toward intended ends
- `field.phenomenological-method` · description of lived experience
- `field.structuralism` · language & culture as systems of differences
- `field.semiotics` · the study of signs and signification
- `field.argument-structure` · the roles a predicate assigns its arguments
- `field.narratology-story-morphology` · the formal grammar of story
- `field.comparative-mythology-oral-tradition` · myth & oral narrative as transmissible structure
- `field.apophatic-traditions` · knowing by negation, the via negativa
- `field.interactive-fiction-ludology` · the structure of playable narrative

*(Slice-12 myth & meaning — extracted to ground records 20260615, closing the mind-canon gap. Supersedes the earlier note that held this material out of the corpus: per the operator's 'ground all domains' call, lineages of thought are documented as records — `status` carries how each claim is held, e.g. `doctrinal` for the via negativa.)*

### structure canon (24)

- `field.numerical-analysis` · computing with continuous mathematics & error
- `field.ieee-754-floating-point` · the standard for binary floating-point arithmetic
- `field.numerical-optimization` · finding minima; gradient & simplex
- `field.validated-interval-arithmetic` · rigorous bounds via intervals
- `field.digital-signal-processing` · sampling, filtering, the FFT
- `field.detection-estimation-theory` · extracting signals from noise
- `field.computability-theory` · what can be computed at all
- `field.algorithms` · methods of computation, analyzed
- `field.event-sourcing-append-only-architecture` · state as an append-only log of events
- `field.version-control-theory` · tracking change across versions
- `field.archival-science` · ordering and describing records (respect des fonds)
- `field.faceted-classification` · classification by independent facets (PMEST)
- `field.zettelkasten-knowledge-organization` · the slip-box of linked notes
- `field.numeration-systems` · positional notation and zero
- `field.literate-programming` · code woven with its explanation
- `field.software-testing-n-version` · testing and redundant implementations
- `field.reproducibility-engineering` · making computational results reproducible
- `field.addressing-namespace-design` · naming, numbering, and resolving addresses
- `field.data-visualization` · showing quantitative information visually
- `field.explorable-explanations` · interactive, playable explanation
- `field.human-computer-interaction` · augmenting human intellect at the interface
- `field.graphics-sampling-artifacts` · aliasing and stochastic sampling in rendering
- `field.psychoacoustics` · how we perceive sound
- `field.generative-live-visual-art` · art made by autonomous / coded process

---

## source records — 603 (summary)

Source layer is summarized, not inlined (a 580-line dump would cost the index its loadability). Reached via each `field.*` / `object.*` record's links, or directly by handle (`source.<author-year>`). Each carries `kind`, author, year, venue, verbatim citation, access notes, confidence tag. Zero duplicate slugs across all 580 (verified across 8 waves of parallel agents).

**Settled (16)** — the complex-analysis unit: cauchy-1825 · cauchy-1826 · cauchy-1831 · cauchy-1844 · dalembert-1752 · euler-1777 · riemann-1851 · goursat-1900 · liouville-1847 · laurent-1843 · weierstrass-1841 · gauss-1799 · argand-1814 · ahlfors-1953 · whittaker-watson-1902 · needham-vca. The remaining 569 float (incl. 5 created with field.measure-theory).

*A standalone generated source-index can be cut on request.*

---

## object records — by field (372)

*Keystone objects per field, web-searched and verified against ≥2 authoritative sources, entered float. Detail + dependency graph live in each object record.*

**measuring canon (42 fields, 204 objects)**
- **analytic-number-theory (5):** riemann-zeta-function · euler-product · prime-number-theorem · riemann-hypothesis · dirichlet-theorem-arithmetic-progressions
- **multiplicative-number-theory (6):** multiplicative-function · mobius-function · mobius-inversion · dirichlet-convolution · dirichlet-l-function · mertens-theorems
- **complex-analysis (7 — ✦ all settled):** cauchy-riemann-equations · cauchy-integral-theorem · cauchy-integral-formula · residue-theorem · liouville-theorem · laurent-series · fundamental-theorem-of-algebra
- **real-analysis-limits (5):** completeness-axiom · epsilon-delta-limit · bolzano-weierstrass-theorem · intermediate-value-theorem · heine-borel-theorem
- **diophantine-approximation (4):** dirichlet-approximation-theorem · liouville-approximation-theorem · roth-theorem · hurwitz-approximation-theorem
- **continued-fractions (4):** continued-fraction-expansion · convergents-best-approximation · lagrange-continued-fraction-theorem · gauss-kuzmin-theorem
- **sieve-methods (4):** sieve-of-eratosthenes · brun-theorem · selberg-sieve · large-sieve-inequality
- **prime-gap-statistics (4):** bertrands-postulate · twin-prime-conjecture · cramers-conjecture · bounded-gaps-theorem
- **elementary-number-theory (7):** euclid-theorem-infinitude-of-primes · fundamental-theorem-of-arithmetic · euclidean-algorithm · fermat-little-theorem · euler-theorem-totient · quadratic-reciprocity · chinese-remainder-theorem
- **special-functions-series-acceleration (6):** gamma-function · euler-maclaurin-formula · stirling-approximation · basel-problem · gauss-hypergeometric-function · bernoulli-numbers
- **asymptotic-analysis (5):** asymptotic-expansion · landau-notation · laplaces-method · method-of-steepest-descent · watsons-lemma
- **harmonic-fourier-analysis (5):** fourier-series · fourier-transform · parseval-plancherel-theorem · convolution-theorem · poisson-summation-formula
- **approximation-theory (5):** weierstrass-approximation-theorem · stone-weierstrass-theorem · chebyshev-equioscillation-theorem · chebyshev-polynomials · best-uniform-approximation
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
- **functional-analysis:** *(field added in verify pass; keystone objects pending — deepen-beyond-keystones item)*
- **random-matrix-theory (5):** wigner-semicircle-law · marchenko-pastur-law · tracy-widom-distribution · gaussian-ensembles · eigenvalue-repulsion-level-spacing
- **point-process-statistics (4):** poisson-point-process · campbells-theorem · palm-distribution · palm-khinchine-theorem
- **probability-theory (6):** kolmogorov-axioms · law-of-large-numbers · central-limit-theorem · bayes-theorem · conditional-expectation · martingale
- **mathematical-statistics (5):** maximum-likelihood-estimation · cramer-rao-bound · fisher-neyman-factorization-theorem · rao-blackwell-theorem · neyman-pearson-lemma
- **extreme-value-theory (5):** fisher-tippett-gnedenko-theorem · generalized-extreme-value-distribution · pickands-balkema-de-haan-theorem · generalized-pareto-distribution · max-stable-distribution
- **monte-carlo-methods (5):** monte-carlo-integration · markov-chain-monte-carlo · metropolis-hastings-algorithm · gibbs-sampler · importance-sampling
- **information-theory (5):** shannon-entropy · source-coding-theorem · noisy-channel-coding-theorem · mutual-information · kullback-leibler-divergence
- **metrology (5):** si-base-units · si-defining-constants · kilogram-planck-definition · measurement-uncertainty-gum · metrological-traceability
- **representational-measurement-theory (4):** stevens-levels-of-measurement · representation-theorem-measurement · uniqueness-theorem-measurement · additive-conjoint-measurement
- **experimental-design (6):** randomization · replication-and-blocking · factorial-design · randomized-controlled-trial · analysis-of-variance · latin-square
- **preregistration-open-science (6):** preregistration · registered-report · file-drawer-problem · researcher-degrees-of-freedom · replication-crisis · top-guidelines
- **error-statistical-philosophy (3):** severity-principle · error-probabilities-as-inference · critique-of-probabilism-and-behaviorism
- **popperian-falsificationism (4):** falsifiability-demarcation · verification-falsification-asymmetry · conjecture-and-refutation · verisimilitude
- **psychophysics (5):** webers-law · fechners-law · stevens-power-law · signal-detection-theory · psychometric-function
- **exploratory-data-analysis (4):** exploratory-data-analysis · box-plot · stem-and-leaf-display · resistant-summary
- **auditing-tradition (5):** audit-risk-model · materiality · professional-skepticism · audit-sampling · attribute-vs-variables-sampling

**mind canon (18 fields, 57 objects)**
- **constructionism-microworlds (4):** constructionism · microworld · objects-to-think-with · hard-fun-low-floor-high-ceiling
- **prepared-environment-pedagogy (5):** prepared-environment · sensitive-periods · absorbent-mind · auto-education · normalization
- **scaffolding-zpd (4):** zone-of-proximal-development · instructional-scaffolding · more-knowledgeable-other · contingent-support-fading
- **tacit-knowledge (4):** tacit-knowing · focal-vs-subsidiary-awareness · indwelling · tacit-explicit-distinction
- **deliberate-practice-apprenticeship (4):** deliberate-practice · ten-thousand-hour-rule · cognitive-apprenticeship · expert-performance
- **ethology-horsemanship-lineage (4):** tinbergens-four-questions · fixed-action-pattern · imprinting · pressure-and-release
- **operant-conditioning (5):** law-of-effect · reinforcement-and-punishment · schedules-of-reinforcement · shaping-successive-approximation · operant-paradigm
- **cybernetics-control-theory (5):** feedback-loop · homeostasis · law-of-requisite-variety · closed-loop-control-system · black-box
- **second-order-cybernetics (4):** observer-included-in-the-system · cybernetics-of-observing-systems · autopoiesis · eigenform-eigenbehavior
- **ai-alignment-praxis (7):** alignment-problem · orthogonality-thesis · instrumental-convergence · reward-hacking · corrigibility · rlhf · scalable-oversight
- **phenomenological-method (5):** intentionality · epoche-phenomenological-reduction · eidetic-reduction · natural-attitude · lifeworld
- **structuralism (1):** the-linguistic-sign
- **semiotics (1):** triadic-sign
- **argument-structure (1):** thematic-roles
- **comparative-mythology-oral-tradition (1):** oral-formulaic-composition
- **apophatic-traditions (2):** via-negativa · sunyata

**structure canon (24 fields, 110 objects)**
- **numerical-analysis (5):** newtons-method · gaussian-elimination-lu · condition-number · numerical-stability-backward-error · finite-difference-method
- **ieee-754-floating-point (5):** ieee-754-binary-format · ieee-754-rounding-modes · machine-epsilon · ieee-754-special-values · catastrophic-cancellation
- **numerical-optimization (5):** gradient-descent · newtons-method-optimization · simplex-method · kkt-conditions · convexity-and-lagrange-duality
- **validated-interval-arithmetic (4):** interval-arithmetic · fundamental-theorem-of-interval-arithmetic · dependency-problem · wrapping-effect
- **digital-signal-processing (5):** sampling-theorem · discrete-fourier-transform · fast-fourier-transform · z-transform · digital-filter
- **detection-estimation-theory (5):** likelihood-ratio-test · matched-filter · wiener-filter · kalman-filter · mmse-estimator
- **computability-theory (6):** turing-machine · church-turing-thesis · halting-problem · universal-turing-machine · rices-theorem · recursive-and-recursively-enumerable-sets
- **algorithms (5):** p-vs-np · np-completeness-cook-levin-theorem · master-theorem · dijkstra-shortest-path-algorithm · dynamic-programming
- **event-sourcing-append-only-architecture (4):** event-sourcing · append-only-event-log · cqrs · aggregate-eventual-consistency
- **version-control-theory (5):** commit-snapshot · commit-dag · three-way-merge · content-addressable-storage · distributed-version-control
- **archival-science (6):** provenance · original-order · fonds · appraisal · records-lifecycle · records-continuum
- **faceted-classification (4):** facet-analysis · pmest-fundamental-categories · colon-classification · analytico-synthetic-classification
- **zettelkasten-knowledge-organization (4):** zettelkasten-slip-box · atomic-note · fixed-branching-address · linking-emergent-structure
- **numeration-systems (4):** positional-notation · base-radix · zero-as-number · hindu-arabic-numeral-system
- **literate-programming (4):** literate-programming · web-tangle-weave · program-as-essay · computational-notebook
- **software-testing-n-version (5):** test-case-coverage-criteria · test-oracle · n-version-programming · failure-independence-critique · regression-testing
- **reproducibility-engineering (4):** reproducible-research · reproducibility-replicability-distinction · research-compendium · computational-environment-capture
- **addressing-namespace-design (4):** namespace · godel-numbering · hierarchical-naming-dns-resolution · uri-generic-syntax *(+ content-addressable-storage, shared with version-control-theory)*
- **data-visualization (4):** visual-variables · data-ink-ratio · graphical-perception-ranking · grammar-of-graphics
- **explorable-explanations (4):** explorable-explanation · reactive-document · active-reader · immediate-feedback
- **human-computer-interaction (5):** fitts-law · direct-manipulation · goms · augmentation-of-human-intellect · graphical-user-interface
- **graphics-sampling-artifacts (4):** aliasing-in-rendering · spatial-anti-aliasing · supersampling · stochastic-sampling
- **psychoacoustics (5):** critical-band · auditory-masking · equal-loudness-contours · missing-fundamental · place-vs-temporal-theory-of-pitch
- **generative-live-visual-art (4):** generative-art · process-as-artwork · live-coding · cellular-automaton-emergence

---

## state of the database

**1060 records** — 85 field · 603 source · 372 object — all in **`0/corpus/`**, one `.unit` database. **1060 settled · 0 float** (two-state model, f4: the verify season's 1027 `verified` collapsed to `settled` — the honest ceiling; only the 2 living-web sources were already settled). The verify-pass log below records that season in its own `verified` vocabulary — historical, left as-is. **The resting-place question is answered** — settled ground rests in the corpus unit at root `0` (the library), reached by this catalog; the lattice-scatter sort was retired (f2 fold). The dial gates confidence, not location.

*Inline per-record `state` removed from the listings (f3) — it drifted and duplicated the record dial. The record's frontmatter is the single source of truth; all 1060 records are `settled`, and a `float` record (new intake) is found by its frontmatter, not this catalog.*

**Graph integrity (wave 3, 20260615):** `used-by` ↔ `depends-on` reciprocity is now perfect across all 366 objects, zero dangling links, zero duplicate handles — confirmed by deterministic recompute. The dependency graph (root 0's grounding) is internally consistent; the gate's "links wired both ways" key is met corpus-wide.

## verify-pass log

- **wave 1 — cleanup (20260614, keeper):** gate mechanism settled (schema f3 — `state` decoupled from address; `used-by` = exact inverse of direct `depends-on`); bracket/topology drift fixed; dangling objects written; **Cauchy cluster (6) settled** — first through the gate.
- **wave 2 — complex-analysis field-unit (20260615, keeper):** first *complete* unit to `settled` — FTA settled (joining the 6 Cauchy), `field.complex-analysis` settled, all 16 unit sources cross-read and settled (needham-vca metadata filled, closing the one drift found). 24 records. `settled→verified` deferred per the season plan.
- **wave 3 — global reciprocity reconcile (20260615, keeper, ultracode-orchestrated):** the owed global `used-by`↔`depends-on` pass, run as a verified multi-agent workflow over a read-only mechanical audit. Audit found 5 dangling links · 63 missing inverses · 12 field-handles wrongly in `used-by` · 86 object↔object reciprocity extras. Resolved: 63 inverses added · 12 field-handles removed · 2 handle renames (`field.statistics`→`mathematical-statistics`, `field.ergodic-theory`→`ergodic-theory-equidistribution`) · 86 extras judged by per-field agents reading both records, defaulting to enforce-the-rule — **7 confirmed as real, load-bearing `depends-on` edges** (each adversarially refute-tested before acceptance; e.g. `euler-product`→`fundamental-theorem-of-arithmetic`, `riemann-zeta-function`→`gamma-function`, `commit-dag`→`content-addressable-storage`), the rest dropped as spurious `used-by`. `field.measure-theory` created to resolve 3 dangling depends-on (Borel→Lebesgue→Carathéodory→Kolmogorov lineage, +5 source records; keystone objects pending, like functional-analysis). Deterministic verifier: **reciprocity perfect, zero dangling, zero dupes, dial untouched** (no record's `state` moved — reconcile repairs the graph, it does not promote). 1023→1029 records.
- **wave 4 — gate proving run: real-analysis-limits (20260615, keeper, ultracode-orchestrated):** first automated run of the maturity gate (reconcile→settle→adversarial-verify), one field-unit, to prove the harness before scaling. All 13 records (field + 5 objects + 7 sources) passed the reconcile keys → `settled`; 12 survived an adversarial verify that **named an authoritative source** → `verified` (the first records at `verified`). **1 held:** `epsilon-delta-limit` (object-type `definition`) carries `status: proven` — the verify bar caught it and correctly declined to promote, holding it at `settled`. Surfaced a **corpus-wide schema drift**: the `status` value for `definition`/`axiom` objects is unsettled (`proven`/`established`/`standard`/`foundational`/`definition`/`defined`/`in-force` all in live use) — flagged for an operator vocabulary decision before the gate scales. Promotions verified against on-disk `state`, not the workflow's self-report.
- **wave 5 — definition `status` drift fix (20260615, keeper):** operator's call — *fix the clear errors, defer the full vocabulary.* 16 `object-type: definition` records wrongly marked `status: proven` corrected to `status: established` (a definition is stipulated, not proven; `proven` reserved for theorems). `completeness-axiom` (provable-as-construction) and `gaussian-curvature` (`definition+theorem`) left as defensible. This cleared the lone hold, promoting `epsilon-delta-limit` settled→**verified** (real-analysis-limits now 13/13). The residual scatter (`established`/`standard`/`foundational`/`definition`/`defined`/`in-force`) is the deferred vocabulary, left in place by operator's word. Witness hook left for clerk.
- **wave 6 — bedrock gate scale: 5 field-units (20260615, keeper, ultracode-orchestrated):** the analytic/number-theory spine + point-set-topology through the gate in one multi-unit workflow (88 agents): analytic-number-theory, multiplicative-number-theory, elementary-number-theory, point-set-topology, special-functions-series-acceleration. ~80 records settled then adversarially verified (each naming an authoritative source) → `verified`; **pure dial-flips, bodies untouched, graph integrity reconfirmed** (reciprocity perfect, zero dangling, by deterministic recompute). The adversarial pass caught **3 real attribution errors** the original research missed — `euler-flt-1736` (E54 pages 128–140→141–146, presented 1735→1736), `munkres-topology` (blank year/venue filled — Prentice Hall, 2000/1975), `basel-problem` (Mengoli posed 1644→**1650**, *Novae quadraturae arithmeticae*) — each confirmed against the Euler Archive / MacTutor and fixed before promotion; 1 record (`euler-1737`) re-verified after a stream timeout. Corpus then **93 verified · 24 settled · 912 float**. Bar confirmed by operator; cleared to scale to the full 76.
- **wave 7 — Level-2 gate scaled to the whole corpus (20260615, keeper, ultracode-orchestrated):** the remaining ~916 non-verified records gated in one workflow — **9 slices (canon × type) as PARALLEL lanes, chunks serial only within an oversized lane** (17 chunk-agents, ~1.49M tokens ≈ 1.6k/record, ~20 min). **Level-2 rigor (operator's call):** trust creation-time `[confirmed]`, inspect each, search only what reads OFF — **only 1 web search fired** across the run, so `verified` here means *inspected-sound + already double-sourced at creation*, not independently re-derived. Result: **908 float→verified** (incl. 9 from a stopped serial pre-run), **15 source records float→settled** (citation incomplete — empty venue/year or no `[confirmed]`; verify bar correctly unmet, held), **2 held at float** for genuine content errors the gate caught — `object.godel-numbering` (encoding typo: 5^x3 written 5^x5) and `source.kahn-harris-1951` (author Marshall should be T. E. Harris). **6 status-drift fixes** (algorithm/method/concept/definition marked `proven` → `established`; 5 real + turing-machine already correct). Verified against on-disk files: **1012 verified · 15 settled · 2 float**; graph integrity PASS (reciprocity perfect, zero dangling, zero dupes); every edit a `state:`/`status:` line only. The corpus is verified-complete but for the 17 held. **Cleanup (same session, operator's word):** the 2 content errors fixed — `object.godel-numbering` formula `5^x₅`→`5^x₃`, `source.kahn-harris-1951` author corrected to T. E. Harris and body re-led with the 1951 NBS paper — and 14 of the 15 thin citations completed against authoritative sources (publisher/journal/DOI/catalog) and verified; only `source.nist-sematech-eda` and `source.osf-io` (living web handbooks, no fixed publication date) held at settled, now carrying full attribution. **Corpus: 1027 verified · 2 settled · 0 float.** Only the `verified→` resting-place sort remains.
