# Cross-reference — research — f1 — 20260608-090000 [float]

Fold from f0 (crossref.research.f0.260606-150300.md). f0 cross-referenced 3 existing research docs against 12 grounding compilations. This fold cross-references the 3 new tooling dives against everything: the 12 compilations, the 3 existing docs, and each other. What overlaps, what extends, what contradicts.

---

## A — Dive 0 (storage/math/graph) vs f0 compilations

### SQLite + materialized-path vs compilation 11 (data curation pipeline)

- OVERLAPS: compilation 11 covered RAPTOR's recursive tree of summaries. SQLite + materialized-path provides the storage implementation for exactly that kind of hierarchical document store.
- EXTENDS: compilation 11 described the structure (hierarchical retrieval). Dive 0 provides the tool (SQLite recursive CTEs on materialized paths). The conceptual and the concrete now connect.

### SE(4) gap vs compilation 02 (minimal ops to rich structure)

- OVERLAPS: compilation 02 covered Wajnryb (two generators suffice) and the mathematical grounding of transformation groups. Dive 0 confirmed no tool packages SE(4) specifically.
- EXTENDS: compilation 02 said the operation set is grounded in real mathematics. Dive 0 says the implementation must be DIY — Julia LieGroups.jl (generic SE(n)) or raw matrix algebra. The gap between theory (grounded) and tooling (absent) is now documented on both sides.
- CONNECTS to actionable doc lead #4 (Chasles, Cartan-Dieudonné). The math is established. The tooling isn't.

### Graph rendering vs compilation 07 (relational architecture)

- OVERLAPS: compilation 07 described ilanot as "maps, mandalas, and memory palaces" — traversable visual structures. Dive 0 provides the rendering tools (Mermaid, Cytoscape.js, Graphviz).
- NO CONTRADICTION. The tools are neutral carriers — they render whatever structure you give them.

---

## B — Dive 1 (viz/compute/agents) vs f0 compilations

### Canvas 2D API vs compilation 06 (craft knowledge)

- OVERLAPS: compilation 06 described Batra et al.'s seven craft-grammar patterns and the importance of tools as extensions of practice. Canvas 2D API is the tool the lattice instrument practices with.
- EXTENDS: compilation 06 was about the THEORY of craft tools. Dive 1 confirms the SPECIFIC tool is architecturally right — zero-dep, direct control, no framework mediation between practitioner and canvas.

### MCP vs compilation 04 (extended mind)

- OVERLAPS: compilation 04 described cognitive uploading (the external environment performs novel cognitive functions). MCP is the protocol that would enable this — the lattice offloads computation to external engines (MATLAB, Julia) via a standardized interface.
- EXTENDS: compilation 04 said the lattice IS cognitive niche construction. MCP provides the MECHANISM — a documented, standardized protocol for the niche to request computation from external tools. The uploading isn't metaphorical; it's literally implemented as JSON-RPC calls.

### D3 d3-hierarchy vs compilation 05 (recursive grammar)

- OVERLAPS: compilation 05 covered X-bar (head→intermediate→maximal, uniform across categories). D3's `d3.stratify()` builds hierarchies from tabular data using the same containment principle.
- EXTENDS: compilation 05 described the structural schema. D3 provides the rendering algorithm. The X-bar schema and the tree-layout algorithm operate on the same structure.

### MATLAB agentic toolkit vs the whole f0 corpus

- NEW. No f0 compilation discussed real-time connection to computation engines. The closest was compilation 10's experimental methodology (embedding separability, ablation testing) — MATLAB could execute those experiments. But the toolkit itself (agent-callable MATLAB via MCP) has no f0 precedent.
- SIGNIFICANCE: this is the bridge between the lattice (organizational/navigational) and real computation (SE(4) algebra, statistical testing, signal processing). f0 established WHAT needs computing. Dive 1 established HOW to connect to a computation engine.

---

## C — Dive 2 (embeddings/curation/multimodal) vs f0 compilations

### sentence-transformers + ChromaDB vs compilation 11 (data curation pipeline)

- OVERLAPS: compilation 11 covered Dense X Retrieval (propositions as retrieval unit) and RAPTOR (hierarchical summarization for retrieval). Dive 2 provides the tools that implement both — sentence-transformers for embedding propositions, ChromaDB for storing and querying them with metadata.
- EXTENDS: compilation 11 said log entries are propositions. Dive 2 says: embed them, store them with address metadata, query by semantic similarity + structural position simultaneously. The conceptual finding and the tool now connect.

### LIMA strengthened vs compilation 11

- OVERLAPS: compilation 11 already cited LIMA's Superficial Alignment Hypothesis. Dive 2 confirms with successors (LIMO Jan 2025, MIG 2024, MM-LIMA).
- EXTENDS: the thesis is no longer a single-paper finding. Multiple independent replications across different domains. The lattice's curation function (survey → extract → crossref) is validated by a growing body of evidence, not just one result.

### Clustering vs compilation 10 (feasibility checks)

- OVERLAPS: compilation 10 provided the methodology for testing text separability by address (embedding metrics, silhouette/DBI, Hopkins statistic). Dive 2 provides the tools (scikit-learn HDBSCAN, sentence-transformers embeddings).
- EXTENDS: compilation 10 designed the experiment. Dive 2 provides the implementation stack. Together they form a complete executable experiment: embed documents with sentence-transformers → cluster with HDBSCAN → measure silhouette against address labels → compare natural clusters to ternary structure.

### Dataset distillation vs compilation 12 (distillation/handoff)

- OVERLAPS: compilation 12 covered Hinton's dark knowledge, fidelity-vs-generalization paradox, dataset vs model distillation.
- REALITY CHECK from dive 2: dataset distillation methods are benchmarked on image classification, not text. The SCALE doesn't match — distillation algorithms optimize over datasets of 50k-1M+ examples. For <1000 documents, manual curation (what we're doing) is the right approach. The fold IS the distillation, and it works at our scale without algorithmic machinery.
- NO CONTRADICTION. Compilation 12's insights about fidelity vs generalization still apply conceptually. The algorithmic tools just aren't needed at our scale.

---

## D — Dives vs each other

### Dive 0 (SQLite) + Dive 2 (ChromaDB) = dual persistence

- The two dives independently point to the same architecture: SQLite for structured address/metadata storage, ChromaDB for semantic embedding storage. They can coexist — SQLite as the backbone (addresses, parent/child, metadata, fold history), ChromaDB as the semantic layer (embedded document content, similarity search). Two databases, two purposes, no conflict.

### Dive 0 (SE(4) gap) + Dive 1 (MATLAB agentic toolkit) = computation path

- Dive 0 documented the problem (no SE(4) tooling). Dive 1 documented the solution path (MATLAB via MCP). Together: the lattice doesn't need to solve SE(4) internally — it connects to a computation engine that can. The instrument manages the work; MATLAB does the math.

### Dive 1 (Canvas 2D / Three.js) + Dive 0 (Mermaid / Cytoscape.js) = rendering layers

- Two levels of rendering: Canvas 2D for the lattice instrument itself (interactive, real-time), Mermaid/Graphviz for documentation (static diagrams in markdown). Three.js and Cytoscape.js are middle options if interactive visualization needs exceed Canvas 2D but don't require the full instrument UI.

---

## E — Dives vs existing research docs at 200

### Dive 0 vs RESEARCH_OPERATION_mind_not_map.md

- The operation doc's Branch 0 GROUND proposed feasibility checks (text separability, reasoning tests, fair baselines). Dive 0 provides SQLite as the storage for running those experiments. Dive 2 provides the embedding tools. Together with compilation 10's methodology, the operation doc's experiment is now fully equipped tooling-wise.
- The operation doc's vocabulary (I/D/G) is outdated but the experiment design is EXECUTABLE with current tools.

### Dive 2 vs RESEARCH_actionable.md

- The actionable doc's push 001 lead #1 (run ID estimators on TS forms) → dive 2's scikit-learn provides the clustering/estimation tools. EXTENDS.
- The actionable doc's "one genuinely novel thing" (bridge between X-bar and fractal measurement) → none of the dives touch this. STILL UNIQUE.

### Dive 1 vs observations.txt

- No connection. The permutation-pairs finding is pure mathematics. Tooling dives don't address it. STILL UNIQUE.

---

## Summary

### Overlaps confirmed
- f0 compilations + f1 dives form a complete picture: WHAT the lattice is (structural grounding) + WHAT it's built with (tooling landscape)
- LIMA thesis now confirmed across both rounds (compilation 11 + dive 2 successors)
- Dense X propositions (compilation 11) now have implementation tools (dive 2 sentence-transformers + ChromaDB)
- Experimental methodology (compilation 10) now has implementation tools (dive 2 scikit-learn + sentence-transformers)

### Extensions (dives add beyond compilations)
- SQLite + materialized-path as concrete persistence (no f0 precedent for specific tools)
- MCP as the mechanism for cognitive uploading (compilation 04 was conceptual, dive 1 is protocol)
- MATLAB as agent-callable computation engine (entirely new)
- ChromaDB as semantic search layer with address-aware metadata filtering (entirely new)
- Canvas 2D API confirmed as architecturally right (no f0 compilation evaluated rendering tools)

### Contradictions
- **One reality check:** dataset distillation (compilation 12 conceptual) vs dive 2 (research-grade, wrong scale for <1000 docs). Not a contradiction — the concept holds, the tools don't apply at our scale.

### Still unique to existing docs (not covered by any dive or compilation)
- Integral-invariant / curvature signatures (actionable lead #3)
- Wolff's Metaphysics of Quantities
- Permutation pairs summing to 26/27
- The bridge between X-bar and fractal measurement (the "one genuinely novel thing")

### Research naming problem

Two naming conventions coexist:
- Round 1: `research01` through `research12` — numbered sequentially, topic in filename
- Round 2: `0_`, `1_`, `2_` prefix — branch-numbered, long descriptive titles

Neither convention is great. The round 1 names give no structural information. The round 2 names are unwieldy. A standardized convention would use the document naming pattern: `type.scope.fN.timestamp.md`. Research compilations could be: `dive.ground-storage.f0.20260608.md` or similar. This needs a decision before more research lands.

### Actionable vs parked vs further-research

**Actionable now (lattice building):**
1. Canvas 2D instrument architecture — confirmed, already in use
2. SQLite persistence — when needed, the path is clear
3. Mermaid for documentation diagrams — low-effort, high-value
4. View 0 patchboard redesign — approved plan exists, no new deps needed
5. Verb map — verbs settled, D3 available if computed layout needed

**Parked (real but not now):**
1. MCP integration — needs the lattice to become a server first
2. MATLAB computation — needs MCP integration first
3. ChromaDB semantic search — needs enough documents to be worth searching
4. Three.js for 3D toys — needs next toy to be built first
5. Embedding experiment — interesting methodology, not urgent

**Further research needed:**
1. SE(4) vocabulary / wrapper around generic SE(n) tools
2. Research naming convention standardization
3. The "one genuinely novel thing" — X-bar ↔ fractal measurement bridge
4. Integral-invariant / curvature signatures
5. Permutation pairs — formal verification and interpretation
