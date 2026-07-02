# corpus.index — the grounding database registry — f5 — 20260616-072711

**The registry of ground's grounding database.** One line per record: `handle · essence`. Filter by the `type` prefix (`field.` / `source.` / `object.`). Loads for navigation; records are pulled on demand. Schema: `template.corpus-records.f9`, at `docs/` (f7 20260702: frontmatter handle-refs became quoted wikilinks; f8 same day: the f7 `aliases:` convention retired + reverted — it resolved nothing in foreign readers; f9 same day: **the unit's interior restructured** — records in `records/`, library at `library/{texts,raw}`, papers at `docs/`, indexes at the root front desk; pointers trued in place, not index folds).

**State:** `state` is a **frontmatter dial** — `float → settled` (two states; `verified` retired as an overclaim — schema `template.corpus-records.f4+`) — advanced by editing the record; **nothing moves on a state change.** All records live in **`0/corpus/`** — a single `.unit` database (see fold note); the schema / sort-notes / dock docs sit in the `000` cell.

**Fold f4 → f5 (20260616):** **region #3 — coordination / cognition / channel / foundations / ML — extracted to ground records (+33 fields, +135 objects, +176 sources → 1429).** Routed into the three existing canons by the operator's *split-by-field* call (no 4th canon): **measuring +5 · structure +11 · mind +17**. The coordination·systems cluster split by best fit — `theory-of-constraints` & `high-reliability-orgs-safety-engineering` filed **structure** (operations/safety-engineering, not psyche); `stigmergy` & `general-systems-theory` kept **mind** (stigmergy sits among `distributed-cognition-extended-mind` — coordination as external memory; general-systems sits with its cybernetics kin). These 33 fields + 135 objects + 176 sources are **`state: float`** — the settle gate has not yet run over them. Deferred drift-fixes applied: schema pointer f3→f6; live-state prose trued to two-state. The verify-pass log below is **retained verbatim as historical record** — it narrates the verify season in that season's retired `verified` vocabulary; not rewritten (rewriting would falsify the trail). Counts trued against disk.

**Fold f3 → f4 (20260615):** region #2 *esoteric* extracted (+5 fields, +12 sources, +8 objects → 1085): kabbalah, western-esotericism, hermeticism, alchemy, mystery-religions, with the two boundary objects (hermetic-drift, simulacra) under semiotics. `doctrinal` carries the tradition-tenets.

**Fold f2 → f3 (20260615):** slice-12 *myth & meaning* extracted (+7 fields, +18 sources, +6 objects → 1060); **inline per-record `state` dropped** from the listings (it drifted and duplicated the dial — the record's frontmatter is the single source of truth); counts re-trued.

**Fold f1 → f2 (20260615):** **the sort dissolved — the corpus is now one `.unit` database** (see below). Counts re-trued against the records: 1029 (78 field · 585 source · 366 object). Full reasoning: `note.corpus-sort.f3` (000 cell).

**Fold f0 → f1 (20260615):** slices removed (processing order, never structure); fields regrouped by **canon** only; the sort rule recorded.

This index folds only on completion cleanup or a discussed format change; otherwise appended.

---

## the home: one `.unit` database (the sort, retired)

**The corpus is the library, not system-structure.** It is reference the wings *draw from*, reached through this catalog — not scattered into the shape of whoever reads it. So it lives as **one tracked unit**: `0/corpus/`, declared with a `.unit` marker (`frame.unit-marker`, 210). The lattice treats the folder as one thing; below it is the database's own business — git its machine-log, this index its catalog. *(f9 truing, 20260702: the unit's interior is three semantic floors — `records/` the catalog · `library/` the material (`texts/` shelves + `raw/` mine) · `docs/` the office — indexes at the root; records reached by handle as ever.)*

**The lattice scatter is retired.** f1 recorded a rule placing each record at an address (field → branch, source → reference-leaf, object → cell). Walked, it had **no signal** at the per-record pin (`kind:` ≠ role; essence ≠ cell) — forced judgment over 790 records, the friction was the structure declining the imposition. The elegant part *survives as metadata*: the type axis — **field = spec · source = ops · object = config** — is queryable on every record and is exactly how this index groups. We kept the structure as a property; dropped only the folders that carried no load.

**How records are reached:** by handle through this index (filter on `type`/`canon`/`field`), never by walking folders. State stays a frontmatter dial; the unit holds records at any maturity side by side.

---

## field records — by canon (160)

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
- `field.category-theory` · structure via objects & arrows — functors, natural transformations, universal constructions- `field.fractal-geometry-self-similarity` · the geometry of roughness — self-similar sets, non-integer dimension- `field.queueing-theory` · the mathematics of waiting lines — congestion, delay, throughput under contended service- `field.fluid-dynamics-hydrodynamic-stability` · viscous flow and the onset of turbulence- `field.ontic-structural-realism` · relations / structure as ontologically fundamental
### mind canon (41)

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
- `field.explore-exploit-cognitive-search` · balancing known vs uncertain options in search & sequential decision- `field.creativity-research` · how novel, useful ideas are generated, evaluated, measured- `field.naturalistic-decision-making` · how experts decide under time pressure, stakes, uncertainty- `field.nonverbal-perception-thin-slicing` · rapid accurate judgment from minimal nonverbal cues- `field.perceptual-learning` · lasting changes in perception from experience & practice- `field.contemplative-science` · the empirical study of meditation & contemplative practice- `field.interoception` · perception of the body's internal physiological state- `field.distributed-cognition-extended-mind` · cognition spread across brain, body, tools, environment- `field.dissociation-mediumship-psychology` · split awareness, automatism, the will-experience- `field.anthropology-of-trance-possession` · the cross-cultural study of trance & spirit possession- `field.altered-states-neuroscience` · how reversible departures from waking awareness map onto brain function- `field.glossolalia-studies` · speaking in tongues as a describable human behavior, meaning bracketed- `field.choice-architecture-behavioral-economics` · shaping decisions through how options are presented- `field.philosophy-of-craft` · making, skill, craft knowledge — techne, poiesis, the maker's judgment- `field.recursive-grammar-fractal-linguistics` · recursion & self-similar structure in natural language- `field.stigmergy` · coordination through traces in a shared medium — the medium directs further action- `field.general-systems-theory` · the general theory of open systems — principles shared across disciplines

*esoteric / Bin-1 cluster — mythic-library intake (appended 20260616, settled):*
- `field.enneagram` · nine interconnected personality types on the enneagon, grouped into three centers
- `field.chakras` · the seven principal subtle-body energy centers along the suṣumnā channel
- `field.iching-trigrams` · the eight trigrams (bāguà), three-line figures, building blocks of the I Ching
- `field.iching-hexagrams` · the 64 hexagrams (Yìjīng), each a pair of trigrams — the divinatory figures
- `field.wu-xing` · the Five Phases (wood, fire, earth, metal, water) and their generative/control cycles
- `field.classical-elements` · the Western four roots (fire, air, water, earth) plus Aristotle's aether
- `field.western-astrology` · the tropical zodiac — twelve signs and the classical planets
- `field.vedic-astrology` · Jyotiṣa — the sidereal zodiac of twelve rāśi and the 27 nakṣatras
- `field.chinese-zodiac` · the twelve-animal cycle (shēngxiào) of the Chinese calendar
- `field.elder-futhark` · the oldest runic alphabet — 24 runes in three ættir, Germanic letter-symbols
- `field.ogham` · the early medieval Irish alphabet — 20 primary letters (feda) in four aicmí
- `field.mayan-tzolkin` · the Maya 260-day sacred count — twenty day-signs cycling with thirteen numbers
- `field.aztec-tonalpohualli` · the Aztec 260-day count — twenty day-signs cycling with thirteen numbers
- `field.tarot` · the 78-card system — 22 Major Arcana + 56 Minor Arcana in four suits

*psychology / typology — Bin-1 cluster, mythic-library intake (appended 20260617, settled):*
- `field.big-five` · five factor-analytic personality dimensions (OCEAN) — `empirical`
- `field.holland-riasec` · six vocational-personality types on a hexagon — `empirical`
- `field.mbti` · sixteen types from four dichotomies, after Jung
- `field.socionics` · sixteen information-metabolism types (post-Jungian, post-Soviet)
- `field.disc` · four behavioral styles, after Marston
- `field.keirsey-temperaments` · four temperaments regrouping the sixteen types
- `field.spiral-dynamics` · colour-coded value-system developmental stages (after Graves)
- `field.jungian-archetypes` · Jung's core archetypes (5 structural + 7 figural)
- `field.pearson-archetypes` · Pearson's twelve archetypes of personal development
- `field.myss-archetypes` · Myss's four universal survival archetypes
- `field.kwml` · the four mature-masculine archetypes (Moore & Gillette)
- `field.bolen-goddesses` · seven Greek goddesses as women's archetypes
- `field.bolen-gods` · eight Greek gods as men's archetypes
- `field.triple-goddess` · Maiden-Mother-Crone (modern Goddess religion)
- `field.brand-archetypes` · the twelve brand archetypes (Mark & Pearson)
- `field.propp-morphology` · Propp's seven spheres of action — `established`
- `field.vogler-archetypes` · eight storytelling character archetypes (after Campbell)
- `field.seven-basic-plots` · Booker's seven plot patterns
- `field.angelic-hierarchy` · the nine choirs in three triads (Pseudo-Dionysius)
- `field.commedia-dellarte` · the stock characters of Italian improvised theatre — `established`
- `field.synaptic-plasticity` · use-dependent strengthening/weakening of synapses; learning and developmental pruning

### structure canon (37)

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
- `field.network-flow-theory` · flows in capacitated networks — max-flow/min-cut duality- `field.traffic-flow-theory` · vehicular traffic as a continuum — density, flow, speed- `field.theory-of-constraints` · output governed by a single bottleneck; improve by focusing on it- `field.high-reliability-orgs-safety-engineering` · how high-hazard systems fail, and how some stay safe- `field.representation-learning-embeddings` · learning dense distributed feature vectors from data- `field.retrieval-augmented-generation` · conditioning generation on retrieved documents + in-context learning- `field.information-retrieval` · ranking documents by relevance to a query- `field.intrinsic-dimension-manifold-learning` · recovering low-dimensional structure of high-dimensional data- `field.knowledge-dataset-distillation` · compressing a large model/dataset into a smaller surrogate- `field.mechanistic-interpretability-probing` · reverse-engineering network internals into features & circuits- `field.data-curation` · building, documenting, cleaning datasets so ML trains on quality data
- `field.toyota-production-system` · eliminating waste + building quality in via just-in-time flow and jidoka
- `field.distributed-systems-flow-control` · keeping a fast producer from swamping a slow consumer or shared channel — flow control, backpressure, congestion control
---

## source records — 1061 (summary)

Source layer is summarized, not inlined (a full dump would cost the index its loadability). Reached via each `field.*` / `object.*` record's links, or directly by handle (`source.<author-year>`). Each carries `kind`, author, year, venue, verbatim citation, access notes, confidence tag. Zero duplicate slugs across the corpus (verified across the verify-season waves; region-#3 sources deduped against the corpus at intake).

**All 796 settled.** The verify-season sources (the season's `verified` collapsed to `settled`), the 176 region-#3 sources (driven `float→settled` by the settle gate), and the 5 loose-end sources (`cover-hart-1967` · `macqueen-1967` · `lloyd-1982` · `bejan-1997` · `bejan-lorente-2008`, created settled). The complex-analysis unit was the first cluster settled (cauchy-1825…needham-vca).

**Intake 20260702 — the esoterica-library region (+188, all `state: float`):** the ESOTERICA library list (J. J. Sledge, April 2024; held at 000, ground as `source.esoterica-library-2024`) ground into one source record per entry — Western esotericism to ~1650: biblical & ANE backgrounds · gnosticism · hermeticism · classical/Neoplatonic/Hellenistic philosophy · astrology · alchemy · mysteries · ancient/medieval/renaissance/early-modern magic · Christian mysticism · heresy & inquisition · early & Safedian Kabbalah · witch-hunts · theosophy · Rosicrucianism · language tools. Deduped against the whole corpus at intake: 6 list entries already held (`hanegraaff-2012` · `idel-1988` · `scholem-kabbalah-1974` · `principe-2013` · `kirk-raven-schofield-1983` · `yates-1964`) were wired, not duplicated; edition records link their underlying works (`corpus-hermeticum` · `sefer-yetzirah` · `pseudo-dionysius-*`). Zero duplicate slugs re-verified across 1017. The settle gate has not run over these; the acquisition census at 000 (`census.esoterica-library`) tracks the compile pass toward the shelves.

**Intake 20260702 — Asymmetry-dive re-mine (+18, all `state: float`):** first document of the raw-mine re-mine (see `audit.raw-extraction-fidelity` · `incident.field-name-extraction`, `docs/`). Source-first extraction of the real, citable scholarship the dive surveys — safety engineering, HRO/org-science, TCP flow/congestion control, the Toyota Production System, decision-making — with the operator's own syntheses excluded as design-input. Sources: saltzer-schroeder-1975 · rochlin-1987 · ohno-1988 · liker-2004 · rfc793-1981 · jacobson-1988 · reactive-streams-2015 · kurose-ross · shingo-1986 · afi-91-104 · blair-2004 · jordan-1978 · weick-roberts-1993 · weick-1993-mann-gulch · la-porte-consolini-1991 · sagan-1993 · edmondson-1999 · bezos-2016. Deduped vs corpus (reused perrow-1984 · weick-sutcliffe-2001 · roberts-1990 · leveson-2009).

**Intake 20260702 — Stigmergy-dive re-mine (+13, all `state: float`):** second re-mine document. Real scholarship the dive surveys, extended onto the existing stigmergy cluster (Grassé/Heylighen/Dorigo reused, not duplicated): wilson-1975 · goss-1989 · reid-2012 · nakagaki-2000 · marsh-onof-2008 · christensen-2013 · bolici-howison-crowston-2016 · parunak-2006 · hunt-hauert-2019 · facchini-2024 · suchman-1987 · dorigo-gambardella-1997 · stutzle-hoos-2000. The operator's cable-line synthesis excluded as design-input.

**Intake 20260702 — Two-Phase Mind-dive re-mine (+13, all `state: float`):** third re-mine document. Fixation science, creativity-process models, explore/exploit neuromodulation, and synaptic plasticity (a new field): duncker-1945 · luchins-1942 · jansson-smith-1991 · bilalic-2008 · mccaffrey-2012 · nijstad-2010 · beaty-silvia-2012 · baird-2012 · campbell-1960 · aston-jones-cohen-2005 · hills-2012 · hebb-1949 · paolicelli-2011. Reused guilford/wallas/mednick/hills-2015/sio-ormerod. Operator's two-phase synthesis excluded.

*A standalone generated source-index can be cut on request.*

---

## object records — by field (1053)

*Keystone objects per field, web-searched and verified against ≥2 authoritative sources. Detail + dependency graph live in each object record. Subtotals: measuring 226 · mind 155 · structure 176 (+1 shared object, `content-addressable-storage`, counted once across addressing & version-control). The 4 loose-end objects (20260616) land here: `cosine-similarity` · `knn` · `k-means` under information-retrieval, `constructal-law` under fluid-dynamics.*

**measuring canon (47 fields, 226 objects)**
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
- **category-theory (5):** category-definition · functor-definition · natural-transformation · adjunction · yoneda-lemma
- **fractal-geometry-self-similarity (4):** fractal · self-similarity · hausdorff-dimension · iterated-function-system
- **queueing-theory (4):** littles-law · kendall-notation · mm1-queue · erlang-c-formula
- **fluid-dynamics-hydrodynamic-stability (5):** navier-stokes-equations · reynolds-number · hydrodynamic-stability · orr-sommerfeld-equation · constructal-law
- **ontic-structural-realism (4):** structural-realism · ontic-structural-realism · relations-without-relata · newman-objection

**mind canon (41 fields, 155 objects)**
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
- **explore-exploit-cognitive-search (6):** explore-exploit-tradeoff · multi-armed-bandit · gittins-index · marginal-value-theorem · adaptive-gain-theory · area-restricted-search
- **creativity-research (13):** divergent-thinking · remote-associates · incubation-effect · wallas-four-stage-model · dual-network-account-of-creative-cognition · functional-fixedness · einstellung-effect · design-fixation · generic-parts-technique · serial-order-effect · dual-pathway-model · blind-variation-selective-retention · mind-wandering
- **naturalistic-decision-making (4):** naturalistic-decision-making · recognition-primed-decision · expert-intuition · critical-decision-method
- **nonverbal-perception-thin-slicing (3):** thin-slicing · nonverbal-sensitivity · facial-action-coding-system
- **perceptual-learning (4):** perceptual-learning · differentiation-theory · perceptual-learning-module · specificity-of-perceptual-learning
- **contemplative-science (4):** mindfulness · focused-attention-vs-open-monitoring · mindfulness-based-stress-reduction · neurophenomenology
- **interoception (5):** interoception · felt-sense · interoceptive-accuracy · heartbeat-counting-task · interoceptive-predictive-coding
- **distributed-cognition-extended-mind (5):** distributed-cognition · extended-mind-thesis · parity-principle · functional-system · slime-mold-externalized-memory
- **dissociation-mediumship-psychology (5):** dissociation · automatism · ideomotor-action · cold-control · cryptomnesia
- **anthropology-of-trance-possession (4):** possession-trance-distinction · absorption-hypothesis · peripheral-possession-deprivation-thesis · glossolalia-trance-artifact
- **altered-states-neuroscience (3):** altered-state-of-consciousness · transient-hypofrontality · default-mode-network-and-altered-states
- **glossolalia-studies (4):** glossolalia · glossolalia-as-non-language · glossolalia-neuroimaging · glossolalia-as-altered-state-articulation
- **choice-architecture-behavioral-economics (6):** nudge · choice-architecture · default-effect · libertarian-paternalism · prospect-theory · two-way-door
- **philosophy-of-craft (4):** techne · poiesis-praxis-distinction · workmanship-of-risk · craftsmanship-do-well-for-own-sake
- **recursive-grammar-fractal-linguistics (4):** recursion-in-language · generative-grammar · center-embedding · discrete-infinity
- **stigmergy (9):** stigmergy · quantitative-vs-qualitative-stigmergy · ant-colony-optimization · sematectonic-vs-sign-based-stigmergy · double-bridge-experiment · stigmergy-as-external-memory · human-stigmergy · articulation-work · congestion-ceiling-of-stigmergy
- **general-systems-theory (4):** general-systems-theory · open-system · equifinality · boulding-hierarchy
- **synaptic-plasticity (3):** hebbian-plasticity · spike-timing-dependent-plasticity · synaptic-pruning

**structure canon (37 fields, 176 objects)**
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
- **network-flow-theory (4):** max-flow-min-cut-theorem · ford-fulkerson-algorithm · edmonds-karp-algorithm · residual-network
- **traffic-flow-theory (4):** fundamental-diagram-of-traffic · greenshields-model · lwr-model · kinematic-wave-traffic
- **theory-of-constraints (4):** theory-of-constraints · five-focusing-steps · drum-buffer-rope · throughput-accounting
- **high-reliability-orgs-safety-engineering (13):** high-reliability-organization · normal-accident-theory · swiss-cheese-model · defense-in-depth · deference-to-expertise · fail-safe-defaults · separation-of-privilege · two-person-rule · fail-safe-vs-fail-secure · deadman-switch · collective-mind · collapse-of-sensemaking · psychological-safety
- **representation-learning-embeddings (4):** distributed-representation · word2vec-skip-gram · manifold-hypothesis · self-supervised-pretraining
- **retrieval-augmented-generation (4):** retrieval-augmented-generation · dense-passage-retrieval · in-context-learning · realm-joint-retriever-pretraining
- **information-retrieval (8):** tf-idf · bm25 · vector-space-model · inverted-index · precision-recall · cosine-similarity · knn · k-means
- **intrinsic-dimension-manifold-learning (4):** intrinsic-dimension · isomap · locally-linear-embedding · maximum-likelihood-intrinsic-dimension-estimator
- **knowledge-dataset-distillation (4):** knowledge-distillation · soft-targets-temperature · dataset-distillation · model-compression
- **mechanistic-interpretability-probing (4):** probing-classifier · superposition · circuits-feature · induction-heads
- **data-curation (4):** data-curation · data-quality-principle · datasheets-for-datasets · training-data-deduplication
- **toyota-production-system (5):** jidoka · andon · poka-yoke · just-in-time · kanban
- **distributed-systems-flow-control (4):** tcp-flow-control · congestion-control · backpressure · synchronization-barrier

**mind canon — esoteric / Bin-1 cluster (14 fields, 333 objects, settled 20260616)**
*Systematic doctrinal member-sets — summarized by handle pattern, not inlined (loadability; same rule as the source layer). Each member is its own `object` record, `status: doctrinal`, found by `field.<system>` + handle. Object-type in brackets.*
- **enneagram (9):** [type] `enneagram-type-1` … `enneagram-type-9`
- **chakras (7):** [center] `muladhara` · `svadhisthana` · `manipura` · `anahata` · `vishuddha` · `ajna` · `sahasrara`
- **iching-trigrams (8):** [symbol] `trigram-qian` … `trigram-dui` (the eight bāguà)
- **iching-hexagrams (64):** [symbol] `hexagram-01-creative` … `hexagram-64-before-completion`
- **wu-xing (5):** [phase] `wuxing-wood` · `-fire` · `-earth` · `-metal` · `-water`
- **classical-elements (5):** [element] `element-fire` · `-air` · `-water` · `-earth` · `-aether`
- **western-astrology (22):** [planet/sign] `planet-sun` … `planet-pluto` (10) + `zodiac-aries` … `zodiac-pisces` (12)
- **vedic-astrology (39):** [nakshatra/sign] `rashi-mesha` … `rashi-vrishchika` (12) + `nakshatra-ashwini` … `nakshatra-anuradha` (27)
- **chinese-zodiac (12):** [sign] `cnzodiac-rat` … `cnzodiac-dog` (the twelve animals)
- **elder-futhark (24):** [symbol] `rune-fehu` … `rune-othala` (the 24 runes, three ættir)
- **ogham (20):** [symbol] `ogham-ailm` … `ogham-ur` (the 20 feda)
- **mayan-tzolkin (20):** [sign] `tzolkin-imix` … `tzolkin-ahau` (the twenty day-signs)
- **aztec-tonalpohualli (20):** [sign] `tonal-cipactli` … `tonal-xochitl` (the twenty day-signs)
- **tarot (78):** [card] `tarot-fool` … `tarot-world` (22 major) + `tarot-<suit>-<rank>` (56 minor, suits wands/cups/swords/pentacles)

**mind canon — psychology / typology Bin-1 cluster (20 fields, 162 objects, settled 20260617)**
*Member-sets summarized by handle pattern. `status` per system (NOT blanket): `empirical` = Big Five, Holland RIASEC; `established` = Propp, commedia; `doctrinal` = the rest. Object-type in brackets.*
- **big-five (5):** [factor] `bigfive-openness` · `-conscientiousness` · `-extraversion` · `-agreeableness` · `-neuroticism` — *empirical*
- **holland-riasec (6):** [type] `riasec-realistic` … `riasec-conventional` — *empirical*
- **mbti (16):** [type] `mbti-intj` … `mbti-esfp` (nicknames are 16Personalities branding, not MB canon)
- **socionics (16):** [type] `socionics-ile` … `socionics-sli` (pseudonyms: Don Quixote … Gabin)
- **disc (4):** [style] `disc-dominance` · `-influence` · `-steadiness` · `-conscientiousness`
- **keirsey-temperaments (4):** [temperament] `keirsey-guardian` · `-artisan` · `-idealist` · `-rational`
- **spiral-dynamics (8):** [stage] `spiral-beige` … `spiral-turquoise` (the colour vMemes)
- **jungian-archetypes (12):** [archetype] `jung-self` … `jung-crone` (5 structural + 7 figural; Crone flagged neopagan)
- **pearson-archetypes (12):** [archetype] `pearson-innocent` … `pearson-jester`
- **myss-archetypes (4):** [archetype] `myss-child` · `-victim` · `-prostitute` · `-saboteur`
- **kwml (4):** [archetype] `kwml-king` · `-warrior` · `-magician` · `-lover` (half-set shadows dropped per settlement)
- **bolen-goddesses (7):** [archetype] `bolen-artemis` … `bolen-aphrodite` (Greek goddesses as women's archetypes)
- **bolen-gods (8):** [archetype] `bolen-zeus` … `bolen-dionysus` (Greek gods as men's archetypes)
- **triple-goddess (3):** [archetype] `triplegoddess-maiden` · `-mother` · `-crone` (6 neopagan aspects dropped per settlement)
- **brand-archetypes (12):** [archetype] `brand-innocent` … `brand-creator` (same Jungian-12 lineage as Pearson)
- **propp-morphology (7):** [role] `propp-villain` … `propp-false-hero` (princess+father merged per settlement) — *established*; reuses `source.propp-1928`
- **vogler-archetypes (8):** [archetype] `vogler-hero` … `vogler-trickster`
- **seven-basic-plots (7):** [plot] `plot-overcoming-the-monster` … `plot-rebirth`
- **angelic-hierarchy (9):** [choir] `angel-seraphim` … `angel-angels` (three triads, Pseudo-Dionysius)
- **commedia-dellarte (10):** [stock-character] `commedia-arlecchino` … `commedia-pierrot` — *established*

---

## state of the database

**2274 records** — 160 field · 1061 source · 1053 object — all in **`0/corpus/`**, one `.unit` database. **1975 settled · 299 float** *(recount vs disk, 20260702 — superseding the stale "2000 settled · 0 float", which was frozen at f5 before the 20260702 work).* The float breaks down as: 188 esoterica-library intake + 25 region-2 esoteric records re-gated off a false settle (`incident.field-name-extraction`, `docs/`) + 86 raw-mine re-mine (Asymmetry 38 + Stigmergy 21 + Two-Phase Mind 27, above). At f5 the whole corpus rested at settled; the Bin-1 psychology/typology cluster (20 fields · 19 new sources · 162 objects) closed the last open work, completing the mythic-library Bin-1 rollout (esoteric + psychology/typology). The Bin-1 esoteric cluster (14 fields · 14 sources · 333 objects) settled before it. Region #3 came in at 33 field-units / 344 records, all through the settle gate (2 proving slices + 28-unit scale-up + the 3 repaired units). The two-state dial gates confidence, not location; a new intake enters `float` and is found by its frontmatter, not this catalog, until the gate reconciles its keys and the verify pass names a source.

**Graph integrity:** `used-by` ↔ `depends-on` reciprocity was made perfect across the settled corpus (verify season, deterministic recompute — zero dangling, zero duplicate handles). Region-#3 records were graph-checked per batch at intake (reciprocity / dangling / dupes verified on disk, sources deduped vs corpus); the full-corpus recompute folds into the settle gate. **Full-corpus reconcile (20260616, keeper) — clean: 0 dangling · 0 reciprocity gaps · 0 dupes across all 1799 records.**

**Cleanup pass (20260616, keeper) — two pre-existing drifts closed:**
1. **`canon` made uniform.** The f0→f1 "slices removed" was declared in the index but never executed on records — 104 field records still carried a vestigial `/ slice-NN <name>` suffix in `canon:` (the rest, region-#3, were already bare). Slice was load-bearing nowhere (the index groups by bare canon only; the gate keys on handles), so this was stale label, not structural damage. Suffix stripped from all 104 → `canon:` now carries only `measuring | mind | structure` (48 · 54 · 35). Slice survives only in fold-history narration, as the intake-order record it always was.
2. **Reciprocity gaps closed.** 58 `object → field` handles sat in object `depends-on` lists, violating the invariant (`depends-on` is object→object; fields are not DAG nodes — 0/137 carry `used-by` by design). All 58 removed from 54 objects: **22 redundant** with the object's own membership (lossless), **36 cross-field** "draws on" soft-signals (not valid DAG edges — recorded below, re-addable later as deliberate object→object edges if any prove load-bearing). The 36 cross-field drops (object → dropped field-handle): `aliasing-in-rendering`→harmonic-fourier-analysis · `campbells-theorem`→measure-theory · `clifford-algebra`→linear-algebra · `cramer-rao-bound`→probability-theory · `cybernetics-of-observing-systems`→cybernetics-control-theory · `dynamical-system`→point-set-topology · `fisher-neyman-factorization-theorem`→probability-theory · `gaussian-ensembles`→probability-theory,linear-algebra · `geometric-product`→linear-algebra · `kullback-leibler-divergence`→probability-theory · `likelihood-ratio-test`→probability-theory · `marchenko-pastur-law`→mathematical-statistics,probability-theory · `markov-chain-monte-carlo`→probability-theory · `maximum-likelihood-estimation`→probability-theory · `mmse-estimator`→probability-theory · `monte-carlo-integration`→probability-theory · `mutual-information`→probability-theory · `neyman-pearson-lemma`→probability-theory · `noisy-channel-coding-theorem`→probability-theory · `numerical-stability-backward-error`→ieee-754-floating-point · `observer-included-in-the-system`→cybernetics-control-theory · `palm-distribution`→measure-theory · `poincare-bendixson-theorem`→point-set-topology · `poisson-point-process`→probability-theory,measure-theory · `prime-number-theorem`→complex-analysis · `rao-blackwell-theorem`→probability-theory · `reproducible-research`→literate-programming · `research-compendium`→literate-programming · `shannon-entropy`→probability-theory · `source-coding-theorem`→probability-theory · `strange-attractor`→differential-geometry · `tracy-widom-distribution`→probability-theory · `wigner-semicircle-law`→probability-theory. Post-fix reconcile clean.

## settle-pass log *(region #3 `float → settled`, two-state)*

- **proving slice — category-theory (20260616, keeper):** first region-#3 field-unit through the settle gate, run inline to prove the gate on freshly-extracted float records before scaling. 10 records (field + 5 objects + 4 sources). **Reconcile:** reciprocity perfect within the unit (every `depends-on` had its inverse `used-by`); all 4 sources carry full verbatim citation + DOI/ISBN; `status` vocab sound (definitions→`established`, concepts→`established`, yoneda theorem→`proven`). **Verify:** attributions confirmed against authority — Eilenberg & Mac Lane 1945 (Trans. AMS 58(2):231–294) exact; Kan 1958 "Adjoint Functors" (Trans. AMS 87); Yoneda lemma lineage (Yoneda c.1954, named by Mac Lane) corroborated. The one anomaly — "MacLane"/"Mac Lane" spelling split between the 1945 and 1971 sources — resolved *in favor of the records*: the 1945 AMS paper prints "MacLANE", so each record is faithful to its own publication; no change. **All 10 float→settled**, bodies untouched (pure dial-flips). Corpus 1085→**1095 settled · 334 float**. Gate proven on region-#3 material; cleared to scale to the remaining 32 field-units.
- **proving slice #2 — mechanistic-interpretability-probing (20260616, keeper):** harder slice by operator's call — a *living, fast-moving ML field* (the field card flags its own provisional status), recent/grey-lit sourcing, to stress the gate where citation-drift risk is real before the full fan-out. 11 records (field + 4 objects + 6 sources). **Reconcile:** reciprocity perfect (circuits-feature used-by [superposition, induction-heads], both depend on it; probing-classifier standalone); status `empirical` across, sound for a contested field; citations complete (arXiv IDs, DOIs, transformer-circuits + arXiv mirrors). **Verify (real web-checks, not trust-the-`[confirmed]`):** all 4 arXiv-identified sources confirmed *exact* against arXiv — Alain & Bengio 1610.01644, Elhage *Toy Models of Superposition* 2209.10652, Olsson *In-context Learning and Induction Heads* 2209.11895, Bereska & Gavves 2404.14082 (TMLR); the two close Sep-2022 IDs correctly assigned (no transposition); full author lists + technical claims (phase change, six lines of evidence) matched. Distill DOIs (Zoom In 00024.001, Feature Visualization 00007) fit format, nothing read off. **Scholarly-&-citeable bar held** — Distill editorially reviewed, transformer-circuits.pub the canonical primary source. Confirmed the **verify discipline transfers to risky material**: objects assert findings *as reported* with limits bracketed (the empirical-contested analogue of `doctrinal`). All 11 float→settled. Corpus **1106 settled · 323 float**. Gate holds on the ML cluster; cleared to scale the remaining 30 field-units.
- **scale-up — 28 field-units (20260616, keeper, ultracode-orchestrated):** the full region-#3 settle gate run as one workflow (28 agents, 287 records, ~1.31M tokens, ~3.5 min), one agent per clean field-unit over **disjoint owned file sets** (computed deterministically — 0 collisions — so parallel dial-flips never race). Each agent: reconcile (within-unit reciprocity, citation completeness, status vocab) → **risk-tuned verify** (foundations trust-&-spot-check · ML hard web-check every arXiv ID/DOI · doctrinal verify *attribution not truth* + bracketing discipline · standard inspect-&-check-thin) → flip own passers float→settled, hold/report failures, report content errors WITHOUT fixing (central fixes byte-safe). **286 settled · 1 held · 1 content error.** The verify was real — every numeric-anchored citation web-checked (e.g. Ambady-Rosenthal 1992 r≈.39, the RAG arXiv IDs 2005.11401/2004.04906/2002.08909 confirmed non-transposed, Greenshields 1935 HRB v14); the `ontic-structural-realism` agent caught that PhilPapers' page range was wrong, not the record. Doctrinal units (dissociation, trance, altered-states, glossolalia) held the bracketing line. **1 content error fixed centrally:** `object.glossolalia-as-altered-state-articulation` — a contested empirical hypothesis (Goodman's altered-state account, body says "contested"/"not asserted as settled") was marked `status: established` → corrected to `empirical`, then settled. **3 units quarantined pre-launch** for handle drift (not failures — excluded from the run, held for a repair pass): `creativity-research`, `contemplative-science`, `naturalistic-decision-making`. Region #3: **308/344 records settled, 30/33 field-units. Corpus 1393 settled · 36 float.**
- **repair + gate — the 3 quarantined units (20260616, keeper):** the handle drift fixed by hand (ground = care over speed): 9 names space→kebab (to match their filenames/handles so references resolve), 2 dangling field-links dropped from `creativity-research` (`field.cognitive-psychology`/`field.psychometrics` — never in the corpus, operator's call), 15 link blocks (3 fields + 12 sources) block-style YAML→inline. Deterministic re-audit then clean (0 dangling · 0 space-names · 0 block-links · reciprocity intact); bodies byte-untouched. The 3 units then run through the **same gate workflow** (3 agents, 36 records): **36/36 settled, 0 held, 0 errors** — citations web-checked (Mednick 1962 PMID 14472013, Goyal 2014 JAMA Intern Med 174(3):357-368, the Klein DOIs). **Region #3 complete: 344/344 records, 33/33 field-units. Corpus 1429 settled · 0 float — the whole corpus at rest.** The snag-stop paid: auditing before the mass dial-flip kept 36 malformed records from being silently settled.
- **loose-end objects (20260616, keeper):** the 4 objects the region-#3 sift admitted but never extracted, written and settled by hand (web-verified at creation). Placement settled with the operator: `cosine-similarity` · `knn` · `k-means` → **information-retrieval** (the vector toolkit beside `vector-space-model`); `constructal-law` → **fluid-dynamics-hydrodynamic-stability** (anchored to its physical origin, the contested universality carried as Bejan's attribution, not asserted). 5 new sources (Cover-Hart 1967, MacQueen 1967, Lloyd 1982, Bejan 1997, Bejan-Lorente 2008), all web-confirmed. Reciprocity wired (`cosine-similarity` depends-on `vector-space-model`; the two reused sources gained the new objects); deterministic audit clean (0 dangling, 0 reciprocity gaps). The build-stack tooling (D3/FAISS/storage engines) stays **out** — build-reference, not corpus. **Corpus 1438 settled · 0 float.**

- **Bin-1 esoteric cluster (20260616, keeper):** the 14 grounded symbolic systems (mythic-library quarantine intake) through the settle gate — **361 records (14 field · 14 source · 333 object)**. **Reconcile (read-only, full corpus):** **0 dangling references** across all 1799 records; reciprocity clean within the cluster (`depends-on`/`used-by` empty by design for doctrinal member-sets). The audit surfaced 15 `used-by` reciprocity gaps but **every one is in an already-settled math/science field** (probability-theory, complex-analysis, …) — pre-existing drift, flagged as a snag, **not touched mid-gate** (no edits to settled ground during another cluster's gate). **Source named per system** (each field's `door`, one authoritative text): enneagram→Riso-Hudson 1999 · chakras→Woodroffe 1919 · I Ching (trigrams+hexagrams)→Wilhelm-Baynes 1950 · wu-xing→Needham SCC2 1956 · classical-elements→Kirk-Raven-Schofield 1983 · western-astrology→Ptolemy *Tetrabiblos* · elder-futhark→the rune poems · ogham→McManus 1991 · chinese-zodiac→Eberhard 1986 · vedic→*Bṛhat Parāśara Horā Śāstra* · tzolkin→Tedlock 1982 · tonalpohualli→Sahagún *Florentine Codex* · tarot→Waite 1911. **Verify = doctrinal discipline** (attribution-not-truth — members carry `status: doctrinal`, recorded as the tradition holds, never asserted; "primary not opened" noted per record where it applies). **All 361 float→settled** — pure frontmatter dial-flips by utf-8 python, bodies byte-untouched, LF preserved (verified: em-dashes intact, 1-line diff per record). **Corpus 1438→1799 settled · 0 float — the whole corpus at rest again.**

- **Bin-1 psychology/typology cluster (20260617, keeper):** the 20 grounded psychology/archetype/narrative systems through the settle gate — **201 records (20 field · 19 source · 162 object)**. **Reconcile (read-only, full corpus):** 0 dangling · 0 reciprocity gaps · **1 duplicate handle caught** — `source.propp-1928` already existed (20260615, narratology season); the freshly-authored duplicate was **deleted** and the 7 Propp role-objects + `field.propp-morphology` wired into the existing (richer) source's links. A global dup-check is now folded into the gate (the prior reconcile only checked dangling/reciprocity, not dups — the off-by-one between file-count and unique-handles surfaced it). **Verify = real web-checks (16/20 citations confirmed exact against the web, 0 errors):** Marston/Kegan Paul 1928 · Holland 3rd-ed PAR 1997 · Bolen Harper & Row 1984 · Vogler 3rd-ed MWP 2007 · Costa-McCrae NEO-PI-R/NEO-FFI PAR 1992 · Beck-Cowan Blackwell 1996 · Mark-Pearson McGraw-Hill 2001 · MBTI Manual 3rd-ed CPP 1998 · Propp Morphology 2nd-ed UT Press 1968 (trans. Scott) · Keirsey PUM II Prometheus Nemesis Del Mar 1998 · Myss Sacred Contracts Harmony 2001 · Pearson Awakening the Heroes Within HarperSF 1991 · Booker Seven Basic Plots Continuum 2004 · Jung CW9i Bollingen 1959 · Moore-Gillette KWML HarperSF 1990 · Rudlin Commedia Routledge 1994. The remaining 4 textbook-certain (Graves *White Goddess* Faber 1948, Bolen 1989, Pseudo-Dionysius c.500) or honestly hedged (socionics — no single English primary, metadata flagged). Member-sets cross-checked (Pearson's 12, Booker's 7 matched sources). **Honest per-system `status` (not blanket):** Big Five + Holland = `empirical`; Propp + commedia = `established`; the rest `doctrinal` (recorded-as-held, validity not asserted; bodies carry contestation notes). **6 ratified settlements applied at grounding:** triple-goddess→3 · KWML→4 · Jungian structural/figural split + Crone flag · Propp→7 (princess+father merged). All 201 float→settled (pure dial-flips, bodies byte-untouched). **Corpus 1799→2000 settled · 0 float — Bin-1 rollout complete.**

## verify-pass log *(historical — narrates the verify season in its retired `verified` vocabulary; the live model is two-state float/settled)*

- **wave 1 — cleanup (20260614, keeper):** gate mechanism settled (schema f3 — `state` decoupled from address; `used-by` = exact inverse of direct `depends-on`); bracket/topology drift fixed; dangling objects written; **Cauchy cluster (6) settled** — first through the gate.
- **wave 2 — complex-analysis field-unit (20260615, keeper):** first *complete* unit to `settled` — FTA settled (joining the 6 Cauchy), `field.complex-analysis` settled, all 16 unit sources cross-read and settled (needham-vca metadata filled, closing the one drift found). 24 records.
- **wave 3 — global reciprocity reconcile (20260615, keeper, ultracode-orchestrated):** the owed global `used-by`↔`depends-on` pass over a read-only mechanical audit. Audit found 5 dangling links · 63 missing inverses · 12 field-handles wrongly in `used-by` · 86 object↔object reciprocity extras. Resolved: 63 inverses added · 12 field-handles removed · 2 handle renames (`field.statistics`→`mathematical-statistics`, `field.ergodic-theory`→`ergodic-theory-equidistribution`) · 86 extras judged by per-field agents reading both records — **7 confirmed as real, load-bearing `depends-on` edges** (each adversarially refute-tested), the rest dropped. `field.measure-theory` created to resolve 3 dangling depends-on (Borel→Lebesgue→Carathéodory→Kolmogorov lineage, +5 source records). Reciprocity perfect, zero dangling, zero dupes, dial untouched. 1023→1029 records.
- **wave 4 — gate proving run: real-analysis-limits (20260615, keeper, ultracode-orchestrated):** first automated run of the maturity gate, one field-unit, to prove the harness. All 13 records passed reconcile → settled; 12 survived adversarial verify; 1 held (`epsilon-delta-limit`, since cleared). Surfaced the `definition`/`axiom` `status` vocabulary drift.
- **wave 5 — definition `status` drift fix (20260615, keeper):** 16 `definition` records wrongly `status: proven` corrected to `established` (a definition is stipulated, not proven). Cleared the lone hold. Residual `status` scatter deferred as a vocabulary call.
- **wave 6 — bedrock gate scale: 5 field-units (20260615, keeper, ultracode-orchestrated):** the analytic/number-theory spine + point-set-topology through the gate (88 agents). ~80 records settled then adversarially verified. The adversarial pass caught 3 real attribution errors the original research missed (`euler-flt-1736`, `munkres-topology`, `basel-problem`), each fixed before promotion.
- **wave 7 — Level-2 gate scaled to the whole corpus (20260615, keeper, ultracode-orchestrated):** the remaining ~916 records gated in one workflow — 9 slices (canon × type) as parallel lanes. Level-2 rigor (operator's call): trust creation-time `[confirmed]`, inspect each, search only what reads off — 1 web search fired. 908 promoted, 15 sources held at settled (thin citation, since completed), 2 held for content errors (`object.godel-numbering` 5^x₃ typo, `source.kahn-harris-1951` author) — both since fixed. Graph integrity PASS. The season closed at **1027 verified · 2 settled · 0 float**, which the two-state fold (f4) collapsed to **1085 settled** — the honest ceiling, `verified` retired as an overclaim.
