# audit — raw extraction fidelity — f0 — 20260702-162617

**Scope:** every file in `library/raw/` checked at CONTENT level against `records/` — did each document's own freight become records, or only its field names? Ordered by lantern (dream.fable-2 caught one confirmed miss; operator made it top priority). Method: one reader per file, exhaustive inventory of theses · concepts · sources, each item Grep-checked against all 2188 records (word-boundary regex, false-positives screened by reading the hit line), classified LANDED / PARTIAL / MISSED.

---

## the finding

**The extraction was field-name-driven, not content-driven — confirmed across all 18 substantive documents.** The region-#2/#3 build ran one web-research agent per *locked field name*; each agent researched its field from the web and **never mined the source document**. Result: each field's textbook canon landed (foundational sources + headline objects), while every document's **own theses, cross-domain syntheses, and specific/frontier sources fell out.** The overlap that exists is *canon-convergence* — a field agent researching "stigmergy" independently finds Grassé/Heylighen, the same names the dive cites — not evidence any document was read. Proof it's convergence, not mining: the records repeatedly cite sources their source document never mentions (the HRO cluster cites Roberts 1990 + Leveson 2009, absent from the Asymmetry dive; the esoterica source-stubs cite the Sledge library list, not research07–09), and cite *different works by the same author* than the document uses (hills-2015 vs the doc's hills-2012; cohen-2007 vs aston-jones-2005).

**The confirmed miss (Asymmetry dive) is not an outlier — it is the mildest honest reading of the whole set.** That dive is fields-only: its entire freight (stop-asymmetry thesis, andon/jidoka, backpressure/TCP flow-control, fail-safe interlocks, two-person-rule, the reversible-regime inversion, the solo-creative transfer) has zero records.

**Consequence for maturity:** the ~344 region-#3 records + the region-#2 esoteric records sit at `state: float` carrying **field canon only**. They are not wrong — they are *thin*: the mine's actual argument-freight was never extracted. The register's `PROCESSED` stamp meant "a field was derived and its canon extracted," never "the document's content was mined." (Corrected in `raw.index`, this pass.)

**The register's "region #2 esoteric — extracted from research07–09 — DONE & settled" does NOT hold at content level.** Only research09's Target 3A (Eco / hermetic drift → `object.hermetic-drift` + `source.eco-1990`) was genuinely content-mined. research07 = field-canon + a library-list catalog provably sourced from the Sledge ESOTERICA list, not the dive. research08 = fields-only. research09 Targets 3B (gematria/notarikon/temurah; the McKay Bible-Code scope distinction) + 3C (Weber routinization, Peirce living/dead sign, Ricoeur, Turner, Couliano) = wholly absent.

---

## per-file verdict

`fields-only` = only field canon landed (coincidental); `partial` = fields-only PLUS one genuinely-mined pocket; `mined` = document actually extracted; `build-ref` = tooling, correctly out-of-scope.

### the six dives (argument-shaped — highest re-mine value)

| file | verdict | wholly-unrepresented freight (the re-mine target) |
|---|---|---|
| Asymmetry of Safe Systems | fields-only | stop-asymmetry thesis · backpressure/TCP flow-control/Reactive-Streams · andon/jidoka/TPS · fail-safe defaults/interlocks/two-person-rule/sync-barrier · reversible-regime inversion (two-way doors) · solo-creative transfer. Sources: Saltzer-Schroeder, Sagan, Weick collective-mind + Mann Gulch, La Porte-Consolini, Bezos, Blair, Toyoda, Shingo |
| Stigmergy (cable-pull line) | partial (stigmergy field canon only) | sematectonic-vs-marker as the cable-line's own case · reinforce+decay cross-domain identity (ants/slime-mold/synaptic-pruning) · environmental-memory thesis · Christensen human-stigmergy "trinity" · congestion-ceiling/scaling-limit · kanban/FLOSS/Wikipedia. Sources: Wilson, Marsh-Onof, Reid/Nakagaki (slime mold), Christensen, Howison-Crowston |
| Two-Phase Mind | fields-only | the explore-then-reinforce synthesis · protect-the-explore-phase · pull-not-push · §4 synaptic reinforce-by-use (Hebbian/STDP/microglia) · §5 premature-convergence/fixation (functional-fixedness, Einstellung, design-fixation, Bilalić chess). ~27 sources missed |
| Craft of Channeling (reading list) | fields-only | SHAPE/STEER/HOLD/BREAKDOWN scheme · min-cut=constraint=rudder identity · coherence-ceiling through-line · 7-stage curriculum · Sugiyama phantom-jam (centerpiece). Whole TIER-4 self/behavior (Lewin, Carver-Scheier, Gollwitzer, Wood, Clear, Duhigg, Beer VSM) + applied-fluids half absent |
| Inner Stillness (perceptual instrument) | partial (6 field canons only) | the trained-perceptual-instrument synthesis · §V demystification (Barnum/Forer, cold reading, Clever Hans) · §VII meditation→reading-others RCTs · Shinzen/Krishnamurti/samatha ops · Wizards deception-detection. Sources: MacLean, van Vugt-Slagter, Jha, Goleman-Davidson, Farb, Kemeny, Mascaro |
| Grammar of Inward Channeling | partial (science/anthro canon only) | the cross-domain "grammar" + seven invariants + instability-as-invariant thesis · the entire creative/literary half (Rilke, Yeats, Coleridge, Blake, Breton/surrealism, daimon, flow) · Peres 2012 mediumship SPECT (its keystone empirical) · Jung active imagination · Luhrmann porosity |

### research01–12 (compilation-shaped — freight is the bibliography)

| file | verdict | wholly-unrepresented freight |
|---|---|---|
| 01 Grounding (structure/measurement) | fields-only | all of Area 2 math-structuralism (ETCS/Lawvere, ante-rem, Benacerraf, identity-of-indiscernibles) — no home field exists · philosophy-of-metrology critical layer (coordination problem, epistemic iteration, circularity). ~90 named works, ~7 landed |
| 02 MECHANICS (minimal ops→structure) | partial (fractals/IFS only) | mapping-class-groups/Dehn-twists · rigid-motion/screw-theory/Chasles · generating-sets/word-problem · computational-anatomy/LDDMM · canonicalization/equivariant-ML (2021–26) · Kendall shape-space · log-spiral · scale-space/SIFT |
| 03 Frontier (ID / spacetime / grammar-ontology) | partial (Areas 1&3 scaffold) | ID-stratifies-by-genre thesis · 4 ID estimators beyond MLE (TwoNN/DANCo/ABID/LID) · ALL of Area 2 emergent-spacetime (AdS/CFT, Ryu-Takayanagi, ER=EPR, Fisher-metric) · Area-3 post-1993 (Dowty, theta-criterion, UTAH, FrameNet, PropBank) |
| 04 Mind/Memory/External-Hold | fields-only | three-waves taxonomy · glue-and-trust · exogram/engram · extended-active-inference/niche-construction (Friston, Constant, Sterelny) · reconstructive-memory (Bartlett, Schacter, reconsolidation) · 2025–26 AI-memory (Titans, episodic-memory) |
| 05 Self-Similar/Recursive Grammar | fields-only | statistical self-similarity of language (Alabdulmohsin, Hurst H≈.70) · fractal-linguistics/light-verbs (Megerdoomian) · DMN-recursion (Fischmeister) · compositionality/Frege/Montague/categorial-grammar · RINS. Field-record name matches ("fractal-linguistics") but holds zero fractal content |
| 06 Making/Craft/Tacit-Knowledge | fields-only | nature-as-craftsman/four-causes (3A.3) · Dreyfus 5-stage skill model + chess-chunking · entire 3C craft-grammar/(De)composing-Craft/situated-action (Suchman) · Merleau-Ponty embodiment · the doc's own verification-flags |
| 07 Relational Architecture (esoteric) | partial (field canon + wrong catalog) | 231-gates combinatorics · Busi divine-writing · pathworking/Tarot-letter/Kircher-Reuchlin divergence · art-of-memory (Camillo, Lull, Bruno mnemonics, Eco) · multiplicatio/recursive-opus critique · Newman-Principe article corpus (incl. the decisive 1996 Decknamen) |
| 08 Traversal & Initiation | fields-only | glimpses-resist-transmission synthesis · Eleusinian philology (arrheton/aporrheton, pathein/mathein, myesis/telete/epopteia, kykeon) · reason/faith/gnosis typology · ALL of philosophy-of-language target (private-language, beetle, Kripke/quus) · Eliade + critiques |
| 09 The Shadow (unconstrained relation) | partial (3A Eco genuinely mined) | 3B gematria/notarikon/temurah + McKay-refutes-ELS-not-gematria scope point + Boccaccini-fabrication caveat · 3C why-systems-go-dead (Weber routinization, Peirce living/dead sign, Ricoeur, Turner, Couliano morphodynamics) |
| 10 Feasibility/Experimental-Design | fields-only | embeddings/SBERT/SimCSE/anisotropy · cluster-validity metrics (silhouette, Davies-Bouldin, Calinski-Harabasz, ARI, V-measure) · dim-reduction distortions (t-SNE/UMAP) · contamination detection (Min-K%, temporal holdout) · GSM-Symbolic · RAPTOR/GraphRAG/RAGAS/ARES ablation |
| 11 Data-Curation Pipeline | fields-only | less-is-more (LIMA/AlpaGasus) · Superficial-Alignment-Hypothesis · data-pruning-beats-power-law (Sorscher, GraNd, EL2N, DSIR, DEITA, IFD) · prompt-compression (LLMLingua, Gist, ICAE) · MemGPT/Generative-Agents · spatial-temporal indexing (Z-order, Hilbert, H3, SAX, Gorilla) · GraphRAG/ToG/RoG · CoT/ToT/GoT |
| 12 Comparison/Distillation/Handoff | fields-only | honest-comparison stats (thresholdout, reusable-holdout, Recht not-overfitting, Demšar/McNemar/Wilcoxon-Friedman-Nemenyi, power) · LLM-KD frontier (GKD, MiniLLM, Stanton fidelity-gap, DMP-vs-Zhang) · scaling-laws-as-escalation-gate (Kaplan, Chinchilla) · provenance tooling (DVC/MLflow/W&B/FAIR) · Model-Cards/Data-Statements/Nutrition-Label |

### tooling docs (build-reference — correctly out-of-scope)

| file | verdict | note |
|---|---|---|
| 0_ Storage/Math/Graph | build-ref | groundable math objects it cites (Lie theory, homogeneous coords, exp map) already grounded by math-field agents. Sibling gaps that belong to group-theory/graph-theory fields, not this doc: SO(3)/SE(3), quaternions, Euler angles; spanning-tree/Prim/Kruskal, Prüfer, Reingold–Tilford |
| 1_ Operation Layer | build-ref | Grammar-of-Graphics + MCMC family already landed via other dives. Sibling gap: HMC/NUTS/ADVI (algorithm-grade, missing member of the settled Monte-Carlo cluster) |
| 2_ Embeddings/Vector-Stores (Parked) | build-ref | cosine/kNN/k-means + distillation/RAG/BM25 already landed via field agents. Sibling gaps (genuine classical methods, not tool-internal): hierarchical/agglomerative clustering (twin of k-means), LIMA less-is-more line |

### not feedstock

- `research-report.md` — MISFILED. This is a house *output* (the Trajectoscope/Riemann cross-system comparison atlas), not incoming research. Nothing was ever meant to be extracted from it. Flag for the operator: move out of `library/raw/`.

---

## the re-mine backlog (what this audit hands forward)

The mine is intact — no bytes lost, the documents are all on disk. What's needed is a **second extraction pass that reads the documents**, not the field names. Priority by freight density + argument-shape:

1. **The six dives first** — they are argument-shaped and closest to the house's own method (coordination/cognition/channel/safety); their theses are the highest-value uncaptured content. Asymmetry, Stigmergy, Two-Phase-Mind carry the most that is both missed and load-bearing.
2. **research07–09 esoteric** — re-mine to make the "region #2 settled" claim true; 3B (gematria/combinatorics) and 3C (why-systems-go-dead) are wholly absent and directly relevant to the corpus's own semiotic-drift concerns.
3. **research01–06 + 10–12** — compilation freight; extract the specific theses + the frontier/specialist sources the field-canon pass skipped. research01's Area 2 (math structuralism) has NO home field — needs one created or the material re-homed.
4. **Sibling algorithm gaps** (from tooling + math docs) — route to their proper fields, not the tooling docs: SO(3)/SE(3)/quaternions/Euler-angles, spanning-tree family, Prüfer, Reingold–Tilford, HMC/NUTS, hierarchical clustering.

**Discipline for the re-mine (this pass's lesson):** extraction reads the SOURCE, then checks the web for corroboration — never the reverse. A field agent that only researches a name reproduces a textbook; it does not mine a document. Verify each new extraction against the document's actual sections, not against the field's expected canon.

---

## register + incident

- **`raw.index` stamp corrected this pass** — `PROCESSED` was an overclaim (meant "field-derived," read as "content-mined"). Retitled with the true two-state distinction: **fields-derived** vs **content-mined**. The dives + research01–12 are fields-derived, NOT content-mined (except research09-3A).
- **Incident report** — the operator wants the house write-up of (1) the extraction-fidelity mechanism failure and (2) the overclaiming stamp. Per the branch-2 division (clerk owns systems/paperwork/incidents), this audit is the ground-side evidence; the incident RCA is handed to clerk to cut. Brief for clerk: the two failures share one root — **a process that certified derived-a-field as mined-a-document**, and a stamp vocabulary that had no word for the difference. Both are now named; the incident should capture the RCA + the guardrail (extraction reads source-first).
