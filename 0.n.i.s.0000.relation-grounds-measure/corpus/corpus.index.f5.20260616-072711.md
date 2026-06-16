# corpus.index — the grounding database registry — f5 — 20260616-072711

**The registry of ground's grounding database.** One line per record: `handle · essence`. Filter by the `type` prefix (`field.` / `source.` / `object.`). Loads for navigation; records are pulled on demand. Schema: `template.corpus-records.f6`.

**State:** `state` is a **frontmatter dial** — `float → settled` (two states; `verified` retired as an overclaim — schema `template.corpus-records.f4+`) — advanced by editing the record; **nothing moves on a state change.** All records live in **`0/corpus/`** — a single `.unit` database (see fold note); the schema / sort-notes / dock docs sit in the `000` cell.

**Fold f4 → f5 (20260616):** **region #3 — coordination / cognition / channel / foundations / ML — extracted to ground records (+33 fields, +135 objects, +176 sources → 1429).** Routed into the three existing canons by the operator's *split-by-field* call (no 4th canon): **measuring +5 · structure +11 · mind +17**. The coordination·systems cluster split by best fit — `theory-of-constraints` & `high-reliability-orgs-safety-engineering` filed **structure** (operations/safety-engineering, not psyche); `stigmergy` & `general-systems-theory` kept **mind** (stigmergy sits among `distributed-cognition-extended-mind` — coordination as external memory; general-systems sits with its cybernetics kin). These 33 fields + 135 objects + 176 sources are **`state: float`** — the settle gate has not yet run over them. Deferred drift-fixes applied: schema pointer f3→f6; live-state prose trued to two-state. The verify-pass log below is **retained verbatim as historical record** — it narrates the verify season in that season's retired `verified` vocabulary; not rewritten (rewriting would falsify the trail). Counts trued against disk.

**Fold f3 → f4 (20260615):** region #2 *esoteric* extracted (+5 fields, +12 sources, +8 objects → 1085): kabbalah, western-esotericism, hermeticism, alchemy, mystery-religions, with the two boundary objects (hermetic-drift, simulacra) under semiotics. `doctrinal` carries the tradition-tenets.

**Fold f2 → f3 (20260615):** slice-12 *myth & meaning* extracted (+7 fields, +18 sources, +6 objects → 1060); **inline per-record `state` dropped** from the listings (it drifted and duplicated the dial — the record's frontmatter is the single source of truth); counts re-trued.

**Fold f1 → f2 (20260615):** **the sort dissolved — the corpus is now one `.unit` database** (see below). Counts re-trued against the records: 1029 (78 field · 585 source · 366 object). Full reasoning: `note.corpus-sort.f3` (000 cell).

**Fold f0 → f1 (20260615):** slices removed (processing order, never structure); fields regrouped by **canon** only; the sort rule recorded.

This index folds only on completion cleanup or a discussed format change; otherwise appended.

---

## the home: one `.unit` database (the sort, retired)

**The corpus is the library, not system-structure.** It is reference the wings *draw from*, reached through this catalog — not scattered into the shape of whoever reads it. So it lives as **one tracked unit**: `0/corpus/`, declared with a `.unit` marker (`frame.unit-marker`, 210). The lattice treats the folder as one thing; below it is the database's own business — git its machine-log, this index its catalog.

**The lattice scatter is retired.** f1 recorded a rule placing each record at an address (field → branch, source → reference-leaf, object → cell). Walked, it had **no signal** at the per-record pin (`kind:` ≠ role; essence ≠ cell) — forced judgment over 790 records, the friction was the structure declining the imposition. The elegant part *survives as metadata*: the type axis — **field = spec · source = ops · object = config** — is queryable on every record and is exactly how this index groups. We kept the structure as a property; dropped only the folders that carried no load.

**How records are reached:** by handle through this index (filter on `type`/`canon`/`field`), never by walking folders. State stays a frontmatter dial; the unit holds records at any maturity side by side.

---

## field records — by canon (123)

### measuring canon (48)

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
- `field.category-theory` · structure via objects & arrows — functors, natural transformations, universal constructions *(float — region #3)*
- `field.fractal-geometry-self-similarity` · the geometry of roughness — self-similar sets, non-integer dimension *(float — region #3)*
- `field.queueing-theory` · the mathematics of waiting lines — congestion, delay, throughput under contended service *(float — region #3)*
- `field.fluid-dynamics-hydrodynamic-stability` · viscous flow and the onset of turbulence *(float — region #3)*
- `field.ontic-structural-realism` · relations / structure as ontologically fundamental *(float — region #3)*

### mind canon (40)

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
- `field.kabbalah` · the Jewish esoteric tradition — letters, numbers, emanations as relational architecture
- `field.western-esotericism` · the academic study of Western esoteric currents (a shared form of thought)
- `field.hermeticism` · correspondence binding macrocosm & microcosm, 'as above, so below'
- `field.alchemy` · the magnum opus as a staged process toward the Stone
- `field.mystery-religions` · initiation into the incommunicable — things done, said, shown
- `field.explore-exploit-cognitive-search` · balancing known vs uncertain options in search & sequential decision *(float — region #3)*
- `field.creativity-research` · how novel, useful ideas are generated, evaluated, measured *(float — region #3)*
- `field.naturalistic-decision-making` · how experts decide under time pressure, stakes, uncertainty *(float — region #3)*
- `field.nonverbal-perception-thin-slicing` · rapid accurate judgment from minimal nonverbal cues *(float — region #3)*
- `field.perceptual-learning` · lasting changes in perception from experience & practice *(float — region #3)*
- `field.contemplative-science` · the empirical study of meditation & contemplative practice *(float — region #3)*
- `field.interoception` · perception of the body's internal physiological state *(float — region #3)*
- `field.distributed-cognition-extended-mind` · cognition spread across brain, body, tools, environment *(float — region #3)*
- `field.dissociation-mediumship-psychology` · split awareness, automatism, the will-experience *(float — region #3)*
- `field.anthropology-of-trance-possession` · the cross-cultural study of trance & spirit possession *(float — region #3)*
- `field.altered-states-neuroscience` · how reversible departures from waking awareness map onto brain function *(float — region #3)*
- `field.glossolalia-studies` · speaking in tongues as a describable human behavior, meaning bracketed *(float — region #3)*
- `field.choice-architecture-behavioral-economics` · shaping decisions through how options are presented *(float — region #3)*
- `field.philosophy-of-craft` · making, skill, craft knowledge — techne, poiesis, the maker's judgment *(float — region #3)*
- `field.recursive-grammar-fractal-linguistics` · recursion & self-similar structure in natural language *(float — region #3)*
- `field.stigmergy` · coordination through traces in a shared medium — the medium directs further action *(float — region #3)*
- `field.general-systems-theory` · the general theory of open systems — principles shared across disciplines *(float — region #3)*

### structure canon (35)

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
- `field.network-flow-theory` · flows in capacitated networks — max-flow/min-cut duality *(float — region #3)*
- `field.traffic-flow-theory` · vehicular traffic as a continuum — density, flow, speed *(float — region #3)*
- `field.theory-of-constraints` · output governed by a single bottleneck; improve by focusing on it *(float — region #3)*
- `field.high-reliability-orgs-safety-engineering` · how high-hazard systems fail, and how some stay safe *(float — region #3)*
- `field.representation-learning-embeddings` · learning dense distributed feature vectors from data *(float — region #3)*
- `field.retrieval-augmented-generation` · conditioning generation on retrieved documents + in-context learning *(float — region #3)*
- `field.information-retrieval` · ranking documents by relevance to a query *(float — region #3)*
- `field.intrinsic-dimension-manifold-learning` · recovering low-dimensional structure of high-dimensional data *(float — region #3)*
- `field.knowledge-dataset-distillation` · compressing a large model/dataset into a smaller surrogate *(float — region #3)*
- `field.mechanistic-interpretability-probing` · reverse-engineering network internals into features & circuits *(float — region #3)*
- `field.data-curation` · building, documenting, cleaning datasets so ML trains on quality data *(float — region #3)*

---

## source records — 791 (summary)

Source layer is summarized, not inlined (a full dump would cost the index its loadability). Reached via each `field.*` / `object.*` record's links, or directly by handle (`source.<author-year>`). Each carries `kind`, author, year, venue, verbatim citation, access notes, confidence tag. Zero duplicate slugs across the corpus (verified across the verify-season waves; region-#3 sources deduped against the corpus at intake).

**Settled (16)** — the complex-analysis unit: cauchy-1825 · cauchy-1826 · cauchy-1831 · cauchy-1844 · dalembert-1752 · euler-1777 · riemann-1851 · goursat-1900 · liouville-1847 · laurent-1843 · weierstrass-1841 · gauss-1799 · argand-1814 · ahlfors-1953 · whittaker-watson-1902 · needham-vca. The 599 verify-season sources are settled (the season's `verified` collapsed to `settled`); the **176 region-#3 sources are `float`**.

*A standalone generated source-index can be cut on request.*

---

## object records — by field (515)

*Keystone objects per field, web-searched and verified against ≥2 authoritative sources. Detail + dependency graph live in each object record. Subtotals: measuring 225 · mind 134 · structure 155 (+1 shared object, `content-addressable-storage`, counted once across addressing & version-control).*

**measuring canon (47 fields, 225 objects)**
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
- **category-theory (5 — float):** category-definition · functor-definition · natural-transformation · adjunction · yoneda-lemma
- **fractal-geometry-self-similarity (4 — float):** fractal · self-similarity · hausdorff-dimension · iterated-function-system
- **queueing-theory (4 — float):** littles-law · kendall-notation · mm1-queue · erlang-c-formula
- **fluid-dynamics-hydrodynamic-stability (4 — float):** navier-stokes-equations · reynolds-number · hydrodynamic-stability · orr-sommerfeld-equation
- **ontic-structural-realism (4 — float):** structural-realism · ontic-structural-realism · relations-without-relata · newman-objection

**mind canon (40 fields, 134 objects)**
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
- **semiotics (3):** triadic-sign · hermetic-drift · simulacra
- **argument-structure (1):** thematic-roles
- **comparative-mythology-oral-tradition (1):** oral-formulaic-composition
- **apophatic-traditions (2):** via-negativa · sunyata
- **kabbalah (2):** sefirot · tree-of-life
- **western-esotericism (1):** faivre-four-characteristics
- **hermeticism (1):** correspondence-doctrine
- **alchemy (1):** magnum-opus
- **mystery-religions (1):** mystery-initiation-structure
- **explore-exploit-cognitive-search (4 — float):** explore-exploit-tradeoff · multi-armed-bandit · gittins-index · marginal-value-theorem
- **creativity-research (5 — float):** divergent-thinking · remote-associates · incubation-effect · wallas-four-stage-model · dual-network-account-of-creative-cognition
- **naturalistic-decision-making (4 — float):** naturalistic-decision-making · recognition-primed-decision · expert-intuition · critical-decision-method
- **nonverbal-perception-thin-slicing (3 — float):** thin-slicing · nonverbal-sensitivity · facial-action-coding-system
- **perceptual-learning (4 — float):** perceptual-learning · differentiation-theory · perceptual-learning-module · specificity-of-perceptual-learning
- **contemplative-science (4 — float):** mindfulness · focused-attention-vs-open-monitoring · mindfulness-based-stress-reduction · neurophenomenology
- **interoception (5 — float):** interoception · felt-sense · interoceptive-accuracy · heartbeat-counting-task · interoceptive-predictive-coding
- **distributed-cognition-extended-mind (4 — float):** distributed-cognition · extended-mind-thesis · parity-principle · functional-system
- **dissociation-mediumship-psychology (5 — float):** dissociation · automatism · ideomotor-action · cold-control · cryptomnesia
- **anthropology-of-trance-possession (4 — float):** possession-trance-distinction · absorption-hypothesis · peripheral-possession-deprivation-thesis · glossolalia-trance-artifact
- **altered-states-neuroscience (3 — float):** altered-state-of-consciousness · transient-hypofrontality · default-mode-network-and-altered-states
- **glossolalia-studies (4 — float):** glossolalia · glossolalia-as-non-language · glossolalia-neuroimaging · glossolalia-as-altered-state-articulation
- **choice-architecture-behavioral-economics (5 — float):** nudge · choice-architecture · default-effect · libertarian-paternalism · prospect-theory
- **philosophy-of-craft (4 — float):** techne · poiesis-praxis-distinction · workmanship-of-risk · craftsmanship-do-well-for-own-sake
- **recursive-grammar-fractal-linguistics (4 — float):** recursion-in-language · generative-grammar · center-embedding · discrete-infinity
- **stigmergy (3 — float):** stigmergy · quantitative-vs-qualitative-stigmergy · ant-colony-optimization
- **general-systems-theory (4 — float):** general-systems-theory · open-system · equifinality · boulding-hierarchy

**structure canon (35 fields, 155 objects)**
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
- **network-flow-theory (4 — float):** max-flow-min-cut-theorem · ford-fulkerson-algorithm · edmonds-karp-algorithm · residual-network
- **traffic-flow-theory (4 — float):** fundamental-diagram-of-traffic · greenshields-model · lwr-model · kinematic-wave-traffic
- **theory-of-constraints (4 — float):** theory-of-constraints · five-focusing-steps · drum-buffer-rope · throughput-accounting
- **high-reliability-orgs-safety-engineering (4 — float):** high-reliability-organization · normal-accident-theory · swiss-cheese-model · defense-in-depth
- **representation-learning-embeddings (4 — float):** distributed-representation · word2vec-skip-gram · manifold-hypothesis · self-supervised-pretraining
- **retrieval-augmented-generation (4 — float):** retrieval-augmented-generation · dense-passage-retrieval · in-context-learning · realm-joint-retriever-pretraining
- **information-retrieval (5 — float):** tf-idf · bm25 · vector-space-model · inverted-index · precision-recall
- **intrinsic-dimension-manifold-learning (4 — float):** intrinsic-dimension · isomap · locally-linear-embedding · maximum-likelihood-intrinsic-dimension-estimator
- **knowledge-dataset-distillation (4 — float):** knowledge-distillation · soft-targets-temperature · dataset-distillation · model-compression
- **mechanistic-interpretability-probing (4 — float):** probing-classifier · superposition · circuits-feature · induction-heads
- **data-curation (4 — float):** data-curation · data-quality-principle · datasheets-for-datasets · training-data-deduplication

---

## state of the database

**1429 records** — 123 field · 791 source · 515 object — all in **`0/corpus/`**, one `.unit` database. **1085 settled · 344 float** (two-state model — the dial gates confidence, not location). The 344 float are **region #3** (coordination / cognition / channel / foundations / ML): 33 fields · 135 objects · 176 sources, extracted to ground records this fold. **The settle gate has not yet run over them** — they are catalogued here but not promoted; a float record is intake-grade until the verify pass names a source and flips the dial.

**Graph integrity:** `used-by` ↔ `depends-on` reciprocity was made perfect across the settled corpus (verify season, deterministic recompute — zero dangling, zero duplicate handles). Region-#3 records were graph-checked per batch at intake (reciprocity / dangling / dupes verified on disk, sources deduped vs corpus); the full-corpus recompute folds into the settle gate.

## verify-pass log *(historical — narrates the verify season in its retired `verified` vocabulary; the live model is two-state float/settled)*

- **wave 1 — cleanup (20260614, keeper):** gate mechanism settled (schema f3 — `state` decoupled from address; `used-by` = exact inverse of direct `depends-on`); bracket/topology drift fixed; dangling objects written; **Cauchy cluster (6) settled** — first through the gate.
- **wave 2 — complex-analysis field-unit (20260615, keeper):** first *complete* unit to `settled` — FTA settled (joining the 6 Cauchy), `field.complex-analysis` settled, all 16 unit sources cross-read and settled (needham-vca metadata filled, closing the one drift found). 24 records.
- **wave 3 — global reciprocity reconcile (20260615, keeper, ultracode-orchestrated):** the owed global `used-by`↔`depends-on` pass over a read-only mechanical audit. Audit found 5 dangling links · 63 missing inverses · 12 field-handles wrongly in `used-by` · 86 object↔object reciprocity extras. Resolved: 63 inverses added · 12 field-handles removed · 2 handle renames (`field.statistics`→`mathematical-statistics`, `field.ergodic-theory`→`ergodic-theory-equidistribution`) · 86 extras judged by per-field agents reading both records — **7 confirmed as real, load-bearing `depends-on` edges** (each adversarially refute-tested), the rest dropped. `field.measure-theory` created to resolve 3 dangling depends-on (Borel→Lebesgue→Carathéodory→Kolmogorov lineage, +5 source records). Reciprocity perfect, zero dangling, zero dupes, dial untouched. 1023→1029 records.
- **wave 4 — gate proving run: real-analysis-limits (20260615, keeper, ultracode-orchestrated):** first automated run of the maturity gate, one field-unit, to prove the harness. All 13 records passed reconcile → settled; 12 survived adversarial verify; 1 held (`epsilon-delta-limit`, since cleared). Surfaced the `definition`/`axiom` `status` vocabulary drift.
- **wave 5 — definition `status` drift fix (20260615, keeper):** 16 `definition` records wrongly `status: proven` corrected to `established` (a definition is stipulated, not proven). Cleared the lone hold. Residual `status` scatter deferred as a vocabulary call.
- **wave 6 — bedrock gate scale: 5 field-units (20260615, keeper, ultracode-orchestrated):** the analytic/number-theory spine + point-set-topology through the gate (88 agents). ~80 records settled then adversarially verified. The adversarial pass caught 3 real attribution errors the original research missed (`euler-flt-1736`, `munkres-topology`, `basel-problem`), each fixed before promotion.
- **wave 7 — Level-2 gate scaled to the whole corpus (20260615, keeper, ultracode-orchestrated):** the remaining ~916 records gated in one workflow — 9 slices (canon × type) as parallel lanes. Level-2 rigor (operator's call): trust creation-time `[confirmed]`, inspect each, search only what reads off — 1 web search fired. 908 promoted, 15 sources held at settled (thin citation, since completed), 2 held for content errors (`object.godel-numbering` 5^x₃ typo, `source.kahn-harris-1951` author) — both since fixed. Graph integrity PASS. The season closed at **1027 verified · 2 settled · 0 float**, which the two-state fold (f4) collapsed to **1085 settled** — the honest ceiling, `verified` retired as an overclaim.
