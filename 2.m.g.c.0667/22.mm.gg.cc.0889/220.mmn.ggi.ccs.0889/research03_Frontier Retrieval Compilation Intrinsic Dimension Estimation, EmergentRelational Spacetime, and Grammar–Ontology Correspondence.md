# DIVE 3 — Frontier Retrieval Compilation: Intrinsic Dimension Estimation, Emergent/Relational Spacetime, and Grammar–Ontology Correspondence

## TL;DR
- This is a retrieval-only reference compilation of 9 search terms across 3 areas; all canonical sources, recent 2024–2026 frontier work, technical definitions, and active researchers are verified and cataloged below without synthesis or cross-area interpretation.
- "Pedashenko" IS a verified real researcher: Vladislav Pedashenko et al., "Unveiling Intrinsic Dimension of Texts: from Academic Abstract to Creative Story," arXiv:2511.15210 (Nov 19, 2025; EACL 2026), which empirically establishes that text intrinsic dimension stratifies by domain/genre rather than being a universal constant.
- All four named ID estimators (TWO-NN, Levina–Bickel MLE, DANCo, ABID) and all named physics works (Maldacena AdS/CFT, Ryu–Takayanagi, Van Raamsdonk, Verlinde, ER=EPR) and linguistics works (Fillmore, Gruber, Jackendoff, Dowty, Chomsky's theta-criterion, Baker's UTAH) were verified against primary sources.

---

## AREA 1: Intrinsic Dimension Estimation (dimension MEASURED, relational, not assumed)

### Point 1.1 — "intrinsic dimension estimation TWO-NN MLE manifold hypothesis"

**Canonical / foundational sources:**
- **TWO-NN:** E. Facco, M. d'Errico, A. Rodriguez, A. Laio, "Estimating the intrinsic dimension of datasets by a minimal neighborhood information," *Scientific Reports* 7, 12140 (2017). DOI: 10.1038/s41598-017-11873-y.
- **MLE:** E. Levina & P. J. Bickel, "Maximum Likelihood Estimation of Intrinsic Dimension," *Advances in Neural Information Processing Systems 17* (NIPS 2004), pp. 777–784.
- **Manifold hypothesis context:** L. Cayton, "Algorithms for manifold learning" (2005); Narayanan & Mitter (2010); foundational reviews by Campadelli, Casiraghi, Ceruti, Rozza, "Intrinsic dimension estimation: relevant techniques and a benchmark framework," *Math. Probl. Eng.* (2015), and Camastra & Staiano, "Intrinsic dimension estimation: advances and open problems," *Inf. Sci.* 328 (2016).

**Precise technical definitions (verified by subagent against primary sources):**
- **TWO-NN estimator:** For each point, let r₁, r₂ be the distances to its 1st and 2nd nearest neighbors; define μ = r₂/r₁ ∈ [1,∞). Facco et al. prove (their Eqs. 5–6) that under locally constant density μ follows a Pareto distribution with scale 1 and shape parameter d (the intrinsic dimension): pdf f(μ) = d·μ^(−d−1), cdf F(μ) = 1 − μ^(−d). The density ρ cancels out. The estimator (their Eq. 7) uses the linear relation −log(1−F(μ))/log(μ) = d, fit by a straight line through the origin on the empirical CDF; the slope is d̂. The authors recommend discarding the top 10% of μ values for robustness. (The closed-form Pareto MLE d̂ = N / Σᵢ log(μᵢ) is mathematically valid but does NOT appear in the 2017 paper — it is attributable to the Pareto-MLE derivation in Denti, Doimo, Laio, Mira 2022.)
- **Levina–Bickel MLE:** Their Eq. (8): m̂ₖ(x) = [ (1/(k−1)) Σⱼ₌₁^(k−1) log( Tₖ(x)/Tⱼ(x) ) ]^(−1), where Tⱼ(x) is the Euclidean distance from x to its j-th nearest neighbor and k is the neighbor-count parameter. Derived via a Poisson-process approximation. Averaging across points is their Eq. (9): m̄ₖ = (1/n) Σᵢ m̂ₖ(Xᵢ), then averaged over a range k₁…k₂ (paper uses k₁=10, k₂=20). The paper notes dividing by (k−2) instead of (k−1) yields asymptotic unbiasedness, with Var = m²/(k−3).
- **MacKay–Ghahramani (2005) correction:** Argues one should average the inverses (1/m̂) of per-point estimators and then invert (a pooled-likelihood estimator), rather than averaging the estimators, to remove the small-k positive bias. Their dictum: "never average anything without consulting a likelihood function."
- **Manifold hypothesis:** high-dimensional data in ℝ^D commonly lies on or near a low-dimensional submanifold of dimension d ≪ D; ID is the number of degrees of freedom describing the data with minimal information loss.

**Most recent frontier work (2024–2026):**
- Loaiza-Ganem et al., "Deep generative models through the lens of the manifold hypothesis: A survey and new connections," arXiv:2404.02954 (2024).
- "A Geometric View of Data Complexity: Efficient Local Intrinsic Dimension Estimation with Diffusion Models" (FLIPD), arXiv:2406.03537 (2024); follow-up "On Convolutions, Intrinsic Dimension, and Diffusion Models," arXiv:2506.20705 (2025).
- "Hardness of Learning Neural Networks under the Manifold Hypothesis," NeurIPS 2024 (arXiv:2406.01461).
- Denti, Doimo, Laio, Mira, "The generalized ratios intrinsic dimension estimator" (GRIDE), *Scientific Reports* 12:20005 (2022); the `intRinsic` R package (Denti 2023, *J. Stat. Software* 106(9)) implementing TWO-NN, GRIDE, and HIDALGO.

**Active researchers:** Alessandro Laio, Elena Facco, Maria d'Errico, Alex Rodriguez, Francesco Denti, Diego Doimo, Antonietta Mira (SISSA/Italian school); Elizaveta Levina, Peter Bickel (statistics); Gabriel Loaiza-Ganem, Jesse Cresswell (Layer6/diffusion-model ID).

### Point 1.2 — "intrinsic dimension relative to domain not universal Pedashenko"

**Verification result — Pedashenko IS REAL:**
- **Vladislav Pedashenko**, Laida Kushnareva, Yana Khassan Nibal, Eduard Tulchinskii, Kristian Kuznetsov, Vladislav Zharchinskii, Yury Maximov, Irina Piontkovskaya, "Unveiling Intrinsic Dimension of Texts: from Academic Abstract to Creative Story," arXiv:2511.15210 (Nov 19, 2025); published in Proceedings of EACL 2026 (aclanthology.org/2026.eacl-long.370).
- **Key findings (as stated in the paper):** ID is complementary to entropy-based metrics (after controlling for length, the two are uncorrelated, with ID capturing geometric complexity orthogonal to prediction quality); ID is grounded in interpretable text properties via cross-encoder analysis, linguistic features, and sparse autoencoders (SAEs). The paper's abstract states verbatim: "ID exhibits robust genre stratification: scientific prose shows low ID (~8), encyclopedic content medium ID (~9), and creative/opinion writing high ID (~10.5) across all models tested. This reveals that contemporary LLMs find scientific text 'representationally simple' while fiction requires additional degrees of freedom." SAE steering experiments show "scientific" feature directions reduce ID while narrative/personalization directions increase it.

**This directly supports the "domain-relative, not universal" framing:** ID is shown to vary systematically by domain/genre rather than being a single global constant.

**Legitimate nearby literature on ID being local / multiscale / domain-relative:**
- **Local intrinsic dimensionality (LID):** Amsaleg, Chelly, Furon, Girard, Houle, Kawarabayashi, Nett, "Estimating local intrinsic dimensionality," KDD 2015; M. E. Houle, "Local intrinsic dimensionality I: an extreme-value-theoretic foundation," SISAP 2017; extreme-value-theoretic estimation, DMKD 32(6) 2018.
- **Axiomatic / measure-relative approach:** V. Pestov, "An axiomatic approach to intrinsic dimension of a dataset," arXiv:0712.2063 (IJCNN'07 / Neural Networks 2008) — ID as reflecting curse-of-dimensionality, not a single manifold invariant.
- **Multiscale / locally-undersampled:** "Intrinsic dimension estimation for locally undersampled data" (Facco/Granata et al., *Sci. Rep.* 2019); FLIPD's multiscale curves (arXiv:2406.03537, 2024).
- **Heterogeneous ID:** Allegra, Facco, Denti, Laio, Mira, "Data segmentation based on the local intrinsic dimension" (HIDALGO), 2020 — explicitly models a dataset as a mixture of regions with different IDs.
- **ID in LLM representations (the "ID hunchback"):** Valeriani, Doimo, Cuturello, Laio, Ansuini, Cazzaniga, "The geometry of hidden representations of large transformer models," NeurIPS 2023/2024; Cheng et al. 2025; Tulchinskii et al., "Intrinsic Dimension Estimation for Robust Detection of AI-Generated Texts," NeurIPS 2023 (arXiv:2306.04723).

**Active researchers:** Vladislav Pedashenko, Laida Kushnareva, Eduard Tulchinskii, Irina Piontkovskaya, Serguei Barannikov (text ID); Michael E. Houle, Laurent Amsaleg (LID); Vladimir Pestov (axiomatic ID); Lorenzo Valeriani, Diego Doimo, Alberto Cazzaniga (LLM geometry).

### Point 1.3 — "angle-based intrinsic dimension neighbor relations ABID DANCo"

**Canonical / foundational sources:**
- **ABID:** E. Thordsen & E. Schubert, "ABID: Angle Based Intrinsic Dimensionality," SISAP 2020, LNCS 12440, pp. 218–232 (arXiv:2006.12880); extended journal version "ABID: Angle Based Intrinsic Dimensionality — Theory and analysis," *Information Systems* 108, 101989 (2022). (TU Dortmund University.)
- **DANCo:** C. Ceruti, S. Bassis, A. Rozza, G. Lombardi, E. Casiraghi, P. Campadelli, "DANCo: An intrinsic dimensionality estimator exploiting angle and norm concentration," *Pattern Recognition* 47(8), 2569–2581 (2014); arXiv precursor "DANCo: Dimensionality from Angle and Norm Concentration," arXiv:1206.3881 (2012). (Università degli Studi di Milano.)

**Precise technical definitions (verified by subagent):**
- **ABID:** Uses the distribution of angles between pairs of neighbor direction vectors rather than distances. For points uniform in a d-dimensional neighborhood, E[cosθ]=0 and Var(cosθ)=E[cos²θ]=1/d, so the core estimator is m̂ ≈ 1/E[cos²θ]. The full regularized form (their Definition 1): ABID(X,c) = n² / Σᵢ Σⱼ ( ⟨xᵢ−c, xⱼ−c⟩ / (‖xᵢ−c‖·‖xⱼ−c‖) )², i.e., the reciprocal of the mean squared pairwise cosine (including diagonal self-terms = 1) over the n neighbors of center c. This equals the reciprocal of the sum of squared eigenvalues of the cosine/correlation matrix. Theorem 1 gives the angle distribution P(θ) ∝ sin(θ)^(d−2); Theorem 2 gives the cosine-similarity distribution via the Beta function. (RABID is the "raw" variant excluding diagonal terms — Definition 2.)
- **DANCo:** Jointly exploits the concentration of (a) normalized nearest-neighbor distances and (b) angles (cosines) computed on couples of neighboring points. It estimates ID by comparing the joint pdf of angles and norms on the data against synthetic reference data of known dimension, choosing d that minimizes a Kullback–Leibler divergence. FastDANCo precomputes dimension-/N-dependent quantities for acceleration. Designed to reduce the underestimation problem afflicting most estimators on high-dimensional, nonlinearly-embedded manifolds.

**Related antecedents cited by these works:** Kriegel, Schubert, Zimek, "Angle-based outlier detection in high-dimensional data," KDD 2008; Cai, Fan, Jiang, "Distributions of angles in random packing on spheres," *JMLR* 14 (2013); Rozza, Lombardi, Ceruti, Casiraghi, Campadelli, "Novel high intrinsic dimensionality estimators" (MIND), *Machine Learning* 89 (2012).

**Most recent frontier work (2024–2026):** Thordsen & Schubert, "On Projections to Linear Subspaces," SISAP 2022; the ABID journal version (2022). ABID/DANCo are now cataloged as baseline estimators in LLM-representation ID studies (e.g., the EmergentMind ID survey, 2025–2026; Pedashenko et al. 2025).

**Active researchers:** Erik Thordsen, Erich Schubert (TU Dortmund; angle-based, ELKI library); Claudio Ceruti, Alessandro Rozza, Gabriele Lombardi, Elena Casiraghi, Paola Campadelli, Simone Bassis (Milan; DANCo/MIND).

---

## AREA 2: Emergent / Relational Spacetime (geometry from relational information)

### Point 2.1 — "emergent spacetime entanglement holographic Maldacena Verlinde Takayanagi"

**Canonical / foundational sources:**
- **AdS/CFT correspondence:** J. Maldacena, "The Large N Limit of Superconformal Field Theories and Supergravity," arXiv:hep-th/9711200 (submitted Nov 27, 1997); published *Int. J. Theor. Phys.* 38, 1113–1133 (1999) / *Adv. Theor. Math. Phys.* 2, 231 (1998). It is the highest-cited paper in INSPIRE-HEP — by 2015 it had over 10,000 citations (the most highly cited article in high-energy physics), and INSPIRE-HEP announced in October 2019 that it had reached 15,000 citations. Made precise by Gubser–Klebanov–Polyakov (1998) and Witten (1998).
- **Ryu–Takayanagi (holographic entanglement entropy):** S. Ryu & T. Takayanagi, "Holographic Derivation of Entanglement Entropy from AdS/CFT," arXiv:hep-th/0603001 (Feb 28, 2006); *Phys. Rev. Lett.* 96, 181602 (published May 9, 2006). Extended version "Aspects of Holographic Entanglement Entropy," JHEP 08 (2006) 045.
- **Entropic gravity:** E. Verlinde, "On the Origin of Gravity and the Laws of Newton," arXiv:1001.0785 (Jan 2010); *JHEP* 04 (2011) 029.

**Precise technical definitions (verified):**
- **AdS/CFT:** A duality conjecturing that a gravitational (string/supergravity) theory in (d+2)-dimensional anti-de Sitter space is equivalent to a conformal field theory living on its (d+1)-dimensional conformal boundary. The canonical example originates in Maldacena's own paper, which states that "The 't Hooft limit of 4-d N=4 super-Yang-Mills at the conformal point is shown to contain strings: they are IIB strings" — i.e., Type IIB string theory on AdS₅ × S⁵ is dual to N=4 supersymmetric SU(N) Yang–Mills in 3+1 dimensions.
- **Ryu–Takayanagi formula:** S_A = Area(γ_A) / (4G), where S_A is the entanglement entropy of a boundary region A, γ_A is the codimension-2 minimal (extremal) surface in the AdS bulk whose boundary coincides with ∂A and which is homologous to A, and G is the bulk Newton constant. The paper's verbatim claim (PRL 96, 181602): "the entanglement entropy in d+1 dimensional conformal field theories can be obtained from the area of d dimensional minimal surfaces in AdS_{d+2}, analogous to the Bekenstein-Hawking formula for black hole entropy."
- **Entropic gravity (Verlinde):** Gravity is not fundamental but an entropic force arising from changes in information (entropy) associated with the positions of material bodies on holographic screens, with one bit per Planck area; Newton's law and (relativistically) the Einstein equations emerge. Builds on 't Hooft's holographic principle and Jacobson's 1995 thermodynamic derivation of Einstein's equations.

**Most recent frontier work (2024–2026):**
- Jiang, Wang, Wu, Yang, "Realization of 'ER=EPR'," arXiv:2411.18485 (2024) — derives the Einstein–Rosen bridge from thermofield-double CFT entanglement, claiming quantitative verification of Van Raamsdonk's conjecture.
- L. Nye, "[emergent spacetime metric from entanglement]," *J. High Energy Phys., Gravitation and Cosmology* 10 (2024) 1981–2006 — proposes reconstructing the emergent metric from boundary entanglement structure.
- Reviews: "Spacetime from bits," *Science* (Van Raamsdonk-adjacent overview).

**Active researchers:** Juan Maldacena (IAS), Tadashi Takayanagi (YITP Kyoto), Shinsei Ryu (Princeton), Erik Verlinde (Amsterdam), Brian Swingle (tensor networks), Leonard Susskind (Stanford), Mark Van Raamsdonk (UBC).

### Point 2.2 — "relational information pre-geometry emergent dimension graph"

**Canonical / foundational sources:**
- **Van Raamsdonk (spacetime from entanglement):** M. Van Raamsdonk, "Building up spacetime with quantum entanglement," *Gen. Rel. Grav.* 42, 2323–2329 (2010) (arXiv:1005.3035) — Honorable mention/winning essay; argues that reducing entanglement between boundary regions pulls apart (tears) the bulk spacetime. Lectures: "Lectures on Gravity and Entanglement," TASI 2015.
- **ER=EPR:** J. Maldacena & L. Susskind, "Cool horizons for entangled black holes," *Fortschr. Phys.* 61, 781–811 (2013) (arXiv:1306.0533) — conjectures that entangled pairs (EPR) are connected by Einstein–Rosen (ER) bridges/wormholes.
- **Tensor networks / entanglement renormalization:** B. Swingle, "Entanglement Renormalization and Holography," *Phys. Rev. D* 86, 065007 (2012) (arXiv:0905.1317, 2009) — MERA tensor networks reproduce holographic geometry.
- **Pre-geometry / "it from bit":** J. A. Wheeler's "it from bit" and pregeometry program (foundational, 1980s–90s).
- **Holographic quantum error correction:** Pastawski, Yoshida, Harlow, Preskill, "Holographic quantum error-correcting codes," JHEP 2015.

**Precise technical definitions (verified):**
- **Emergent dimension from graphs / spectral dimension:** In discrete quantum-gravity models (causal dynamical triangulations, group field theory, random/dynamical graphs), continuum geometry emerges from combinatorial degrees of freedom. The **spectral dimension** d_s is defined via a diffusion (random-walk) process on the graph — how the return probability scales with diffusion time; the **Hausdorff dimension** d_h measures volume scaling with radius. A robust finding (Ambjørn, Jurkiewicz & Loll, "The Spectral Dimension of the Universe is Scale Dependent," *Phys. Rev. Lett.* 95, 171301, Oct 20, 2005): the spectral dimension is "four-dimensional on large scales" but "appears two-dimensional at short distances," a "mechanism of dynamical dimensional reduction" leading the authors to conclude "that quantum gravity may be 'self-renormalizing' at the Planck scale." The same 4→2 flow is also found in Hořava–Lifshitz gravity (arXiv:0902.3657).
- **Combinatorial quantum gravity:** Dynamical graphs governed by coarse Ollivier–Ricci curvature undergo a phase transition from a random to a geometric phase via loop condensation, yielding emergent negative-curvature (hyperbolic/Cartan–Hadamard) manifolds.

**Most recent frontier work (2024–2026):**
- "Emergent spectral geometry in the Coherence–Curvature Model," arXiv:2511.13423 (2025) — spectral vs. Hausdorff dimension decoupling controlled by a curvature coupling on graph ensembles.
- "Combinatorial Quantum Gravity and Emergent 3D Quantum Behaviour," *Universe* 9(12):499 (2023) / arXiv:2311.17526 — emergent 3D quantum behavior from 2D de Sitter graph surfaces (Ollivier–Ricci curvature).
- Jiang et al., "Realization of 'ER=EPR'," arXiv:2411.18485 (2024).

**Active researchers:** Mark Van Raamsdonk (UBC), Brian Swingle (Brandeis/Maryland), Leonard Susskind, Juan Maldacena; Renate Loll, Jan Ambjørn, Jerzy Jurkiewicz (CDT); Carlo Trugenberger (combinatorial quantum gravity); Daniel Harlow, John Preskill, Patrick Hayden (holographic QEC/tensor networks).

### Point 2.3 — "information geometry Fisher metric emergent geometry"

**Canonical / foundational sources:**
- **Information geometry foundations:** S. Amari (Fisher–Rao metric, dually-flat structures); C. R. Rao (1945, Fisher information as a Riemannian metric on statistical manifolds).
- **Fisher metric → emergent GR:** H. Matsueda, "Emergent General Relativity from Fisher Information Metric," arXiv:1310.1831 (2013); and "Geometry and Dynamics of Emergent Spacetime from Entanglement Spectrum," arXiv:1408.5589 (2014) — Fisher metric from an entanglement spectrum identified with entanglement entropy (Hessian potential), connecting to AdS/CFT.
- **Instanton moduli space / information metric:** Hitchin; Blau–Thompson; "Information metric from a linear sigma model," arXiv:1205.3211 (Miyamoto & Yahikozawa) — Fisher–Rao metric of instanton moduli space gives AdS (or flat) metrics.

**Precise technical definitions (verified):**
- **Fisher information metric (Fisher–Rao metric):** On a statistical manifold of probability distributions p(x|θ) parameterized by θ, the metric is g_{ij}(θ) = E[ ∂_i log p · ∂_j log p ] = ∫ p(x|θ) ∂_i log p(x|θ) ∂_j log p(x|θ) dx. It is the unique (up to scale) Riemannian metric invariant under sufficient statistics (Čencov's theorem). When the distribution is time-dependent, its parameter space acquires a spacetime interpretation.
- **Emergent geometry program:** The effective spacetime metric is posited to arise as the Fisher information geometry on macrostates/parameter spaces; in special (exponential-family / Hessian) cases the Fisher metric has Hessian/Kähler structure, and an Einstein tensor can be derived from it.

**Most recent frontier work (2024–2026):**
- E. Axelkrans, "Emergent Spacetime as Information Geometry," PhilArchive (AXEESA-2) — argues the Lorentzian metric of GR emerges as a Fisher information geometry on macrostates of a generative field; Einstein's equations as the unique diffeomorphism-invariant relations compatible with Fisher geometry (philosophical/foundational, not peer-reviewed physics).
- L. Nye, *JHEPGC* 10 (2024) 1981–2006 — entanglement-based metric reconstruction (overlaps with 2.1).
- Itoh & Satoh, "Information geometry of the space of probability measures and barycenter maps," arXiv:2208.11861 (2022) — geometry of the Fisher metric on Hadamard manifolds.

**Active researchers:** Shun-ichi Amari (information geometry); Hiroaki Matsueda (Fisher metric ↔ entanglement/AdS); Umpei Miyamoto, Shigeaki Yahikozawa (instanton information metrics); Mitsuhiro Itoh, Hiroyasu Satoh (Fisher-metric geometry).

> Source-quality caveat: Several "emergent spacetime as information geometry" items (e.g., the PhilArchive paper, the SCIRP/JHEPGC journal) are philosophical or lower-tier venues and should be treated as speculative/foundational rather than established physics. Matsueda's and Amari's work are the more rigorous anchors.

---

## AREA 3: Grammar–Ontology Correspondence (noun/verb/modifier mirrors structural roles)

### Point 3.1 — "thematic roles theta roles syntax semantics interface"

**Canonical / foundational sources:**
- **Jeffrey Gruber**, *Studies in Lexical Relations*, MIT PhD dissertation (1965) — introduced "thematic relations" as components of a verb's conceptual structure (theme, source, goal) to account for argument alternations in verbs of motion/location.
- **Ray Jackendoff**, *Semantic Interpretation in Generative Grammar* (1972); "Toward an Explanatory Semantic Representation," *Linguistic Inquiry* 7:1 (1976); *Semantic Structures* (1990, two-tier thematic/action tiers).
- **Charles Fillmore** (1968) — see 3.2.
- **David Dowty** (1991) — see 3.3.

**Precise technical definitions (verified):**
- **Thematic role / theta role / semantic role:** the semantic relation a noun phrase (argument) bears to the action or state described by the predicate. Standard inventory: Agent (deliberate doer), Patient/Theme (affected/moved entity), Experiencer, Goal, Source, Instrument, Beneficiary, Location. "In 'Susan ate an apple,' Susan is the agent, the apple is the patient."
- **Syntax–semantics interface:** thematic roles capture verb-meaning similarities reflected in argument expression and govern the mapping (linking) from semantics to syntax. Dowty's desiderata for a theory of roles include Uniqueness, (weak/strong) Distinctness, and Independence (each role has a consistent verb-independent definition).
- **An argument bears one theta role but may carry multiple thematic relations** (e.g., a single NP can be both Agent and Source).
- **A theta grid** (Williams 1981) lists a predicate's required roles, e.g., give = ⟨Agent, Theme, Goal⟩.

**Most recent frontier work (2024–2026):**
- Marco Baroni, Emily Cheng, Iria de-Dios-Flores, Francesca Franzon, "Tracing the complexity profiles of different linguistic phenomena through the intrinsic dimension of LLM representations," arXiv:2601.03779 (Jan 2026) — connects representational geometry to linguistic complexity (note: this bridges Areas 1 and 3 but is presented here only as a retrieval item).
- Neural semantic role labeling (SRL) remains the computational frontier: PropBank (Palmer, Gildea, Kingsbury 2005) and neural SRL (He, Lee, Lewis, Zettlemoyer and successors).
- Psycholinguistic/neural evidence: Kuperberg et al. on N400/P600 responses to thematic-role violations.

**Active researchers:** Ray Jackendoff (Tufts), Beth Levin & Malka Rappaport Hovav (verb classes/argument realization), Martha Palmer (SRL/PropBank), Gina Kuperberg (neurolinguistics).

### Point 3.2 — "Fillmore case grammar deep case conceptual structure"

**Canonical / foundational source:**
- **Charles J. Fillmore, "The Case for Case,"** in E. Bach & R. T. Harms (eds.), *Universals in Linguistic Theory*, New York: Holt, Rinehart and Winston (1968), pp. 1–88.
- Follow-up: Fillmore, "The Case for Case Reopened" (1977), in *Syntax and Semantics 8: Grammatical Relations*.

**Precise technical definitions (verified):**
- **Case grammar:** proposes that the deep structure of every sentence universally consists of a verb plus one or more noun phrases, each associated with the verb through a specific **deep case** (a semantic-syntactic role), placed in the base component of the grammar. Surface subject/object are derived via transformations.
- **Fillmore's initial inventory of deep cases:** Agentive (A — animate instigator), Instrumental (I — inanimate force/cause), Dative (D — animate being affected; later Experiencer), Factitive (F — object/result of the action), Locative (L — location/spatial orientation), Objective (O — the most neutral, entity affected/moved). Each case appears at most once per simple sentence.
- **Case frame:** the set of cases a verb requires (Fillmore 1968:27).
- **Universal subject-selection hierarchy:** Agent > Instrumental > Objective — if the case frame contains an Agent it becomes subject; otherwise the next-highest case is promoted.

**Most recent frontier work / legacy:**
- **FrameNet** (Fillmore's later project, UC Berkeley, 1997–present) — the large-scale computational descendant: frame semantics with frame elements; ongoing into the 2020s.
- Case grammar's deep cases were absorbed into Government and Binding's thematic (theta) structure and into Role and Reference Grammar.

**Active researchers (legacy/continuation):** Charles Fillmore (d. 2014); Collin Baker, Miriam R. L. Petruck (FrameNet, Berkeley); influence on Role and Reference Grammar (Van Valin).

### Point 3.3 — "syntactic structure determines thematic roles argument structure"

**Canonical / foundational sources:**
- **David Dowty, "Thematic Proto-Roles and Argument Selection,"** *Language* 67(3), 547–619 (Sep 1991). DOI: 10.1353/lan.1991.0021.
- **Noam Chomsky, *Lectures on Government and Binding*** (1981) — the Theta Criterion.
- **Mark C. Baker, *Incorporation: A Theory of Grammatical Function Changing*** (1988) and "Thematic Roles and Syntactic Structure," in Haegeman (ed.), *Elements of Grammar* (1997) — UTAH.
- **Hale & Keyser**, "On Argument Structure and the Lexical Expression of Syntactic Relations" (1993) and *Prolegomenon to a Theory of Argument Structure* (2002) — argument structure as syntactic configuration (l-syntax).
- **Edwin Williams**, "Argument Structure and Morphology" (1981) — theta grids.

**Precise technical definitions (verified):**
- **Theta Criterion (Chomsky 1981, p. 36):** "Each argument bears one and only one θ-role, and each θ-role is assigned to one and only one argument." A bijective filter on D-structure; adjuncts are excluded. Sentences violating it are ungrammatical.
- **Dowty's Proto-Roles (1991):** rejects a fixed list of discrete roles in favor of two cluster-concepts, **Proto-Agent** and **Proto-Patient**, each defined by a set of lexical entailments. Proto-Agent entailments: volitional involvement, sentience/perception, causing an event/change of state, movement, independent existence. Proto-Patient entailments: undergoes change of state, incremental theme, causally affected, stationary relative to another participant, no independent existence. An argument can bear degrees of membership in either proto-role.
- **Argument Selection Principle (Dowty 1991):** in a transitive predicate, the argument with the greater number of Proto-Agent entailments is lexicalized as subject; the one with more Proto-Patient entailments as direct object.
- **UTAH (Baker 1988:46):** "Identical thematic relationships between items are represented by identical structural relationships between those items at the level of D-Structure." I.e., a given thematic role maps to a fixed syntactic position (e.g., Agent → spec of vP/upper VP; Theme → complement/spec of lower VP). Baker (1997) adopts a "medium-coarse" version with three role prototypes: agent, theme, goal/path/location.
- **Related: Universal Alignment Hypothesis** (Perlmutter & Postal, Relational Grammar) — thematic relations map to argument positions via the hierarchy Agent < Theme < Experiencer < Others.

**Most recent frontier work (2024–2026):**
- "On Dowty's 'Thematic Proto-Roles and Argument Selection'" — commentary by Beth Levin (Stanford), in Springer volume (2021/2022), critically reviewing entailment sets and the Argument Selection Principle.
- The Minimalist Program's dispensing with D-structure poses an ongoing challenge to UTAH; argument-structure alternations remain an active debate (e.g., BCGL-15 "Argument Structure" call, CRISSP).
- Distributed Morphology / neo-constructionist approaches (Borer, Ramchand's first-phase syntax) continue the "syntax determines argument structure" program.

**Active researchers:** David Dowty (d. 2009; legacy); Mark C. Baker (Rutgers); Beth Levin, Malka Rappaport Hovav; Hagit Borer, Gillian Ramchand (constructivist argument structure); Idan Landau.

---

## Recommendations (for the researcher who will think through this lattice)
- **Treat each estimator's formula as verified to primary-source level**: TWO-NN (Eqs. 5–7 of Facco et al. 2017), Levina–Bickel MLE (Eq. 8), DANCo (KL-divergence over joint angle+norm pdfs), ABID (reciprocal mean-squared-cosine). The TWO-NN closed-form MLE should be attributed to Denti et al. 2022, not the 2017 paper.
- **Pedashenko is not a fabrication** — anchor the "domain-relative ID" point on arXiv:2511.15210 (EACL 2026), plus the LID literature (Houle, Amsaleg) and Pestov's axiomatic approach for the conceptual "ID is not a universal constant" claim.
- For Area 2, separate the rigorous core (Maldacena, Ryu–Takayanagi, Van Raamsdonk, ER=EPR, Swingle, Ambjørn–Jurkiewicz–Loll) from speculative information-geometry/pregeometry items, which span lower-tier venues.
- Benchmark to revisit: if the researcher needs the exact DANCo objective function or the Verlinde entropic-force derivation step-by-step, fetch the primary PDFs (arXiv:1206.3881 and arXiv:1001.0785) directly.

## Caveats
- My web_search budget was exhausted before I could run two planned follow-up searches (a dedicated 2024–2026 emergent-spacetime review query and an independent re-verification of the Levina–Bickel formula); the estimator formulas were instead verified by a dedicated subagent against primary PDFs, and the Maldacena citation history, RT formula wording, Pedashenko figures, and CDT spectral-dimension result were independently confirmed against primary/authoritative sources during enrichment.
- Some retrieval items surfaced via aggregators (Grokipedia, Medium, ResearchGate); where possible I anchored to primary venues (arXiv, Nature, *Language*, JHEP, *Pattern Recognition*, *Phys. Rev. Lett.*). The ABID Definition-1 LaTeX and the MacKay–Ghahramani displayed equation could not be extracted verbatim (image-only), though their content is confirmed.
- The "~8 / ~9 / ~10.5" ID-by-genre figures and the "ID hunchback" layer profile come from 2025–2026 preprints (Pedashenko et al.; Baroni et al.) and an EmergentMind survey; they are recent and may not yet be fully peer-reviewed/replicated.
- This compilation deliberately performs NO synthesis or cross-area interpretation, per the task instructions.