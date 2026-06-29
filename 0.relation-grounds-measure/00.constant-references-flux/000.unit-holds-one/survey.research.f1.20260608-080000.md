# Survey — research — f1 — 20260608-080000 [float]

Fold from f0 (survey.research.f0.260606-133820.md). f0 covered 12 grounding compilations + 3 existing research docs — structural, philosophical, cognitive foundations. This fold adds 3 new research dive results — tooling landscape, what exists for building with. The two rounds ask different questions: f0 asked "what IS the lattice, structurally?" f1 asks "what do we BUILD it with?"

Source: research operation f1 (three-dive search manifest). Dive 0 = ground (storage/math/graph). Dive 1 = operate (viz/frontend/compute/agents). Dive 2 = configure (embeddings/curation/multimodal).

---

## Dive 0 — Storage, Math, and Graph Tooling (20 targets)

**What's in it:** Three sections. Storage/persistence (SQLite, DuckDB, Neo4j, Kuzu, tree-in-SQL patterns). Math tooling (SymPy, SageMath, Mathematica, Julia ecosystem, NumPy/SciPy, JAX/Numba, GeoGebra/Desmos). Graph/structure (NetworkX, igraph, Graphviz, Gephi, Cytoscape/Cytoscape.js, Mermaid).

**What stands out:**

The SE(4) gap. No tool documents SE(4) / 5×5 homogeneous matrices / higher-dimensional special Euclidean groups as named constructs. Every math tool surveyed covers SE(3)/SO(3)/SO(n) and general matrix algebra, but SE(4) specifically doesn't appear in any documentation. Julia's LieGroups.jl (generic SE(n)) is closest — it supports arbitrary-dimension symbolic/abstract groups where you'd place a 5×5. SymPy and SageMath handle arbitrary-dimension matrix algebra generically. The implication: the trace toy's 5×5 SE(4) matrix is rolling its own mathematical vocabulary. No library will give you `SE4()` — you define your own 5×5 and use generic matrix tools.

This connects to f0's finding from compilation 02 (Wajnryb — two generators suffice for full mapping class groups) and the actionable doc's lead #4 (Chasles, Cartan-Dieudonné). The operation set IS grounded in established mathematics, but no tool packages it.

SQLite + materialized-path as natural fit. SQLite 3.51.x (late 2025) — single-file, serverless, embedded, ACID. Supports recursive CTEs for tree traversal. TEXT primary keys. A ternary address like "211.mvv.gdd.coo.0815" works directly as a key. For 27-39 nodes, performance is instantaneous. The materialized-path pattern (of the four canonical tree-in-SQL patterns: adjacency list, materialized path, nested set, closure table) maps most naturally to dotted ternary addresses — the path IS the address. This is the persistence layer when the lattice needs to survive beyond localStorage.

DuckDB is over-provisioned (analytical/columnar, designed for large data scans). Neo4j is heavyweight (JVM server). Kuzu is dead — Apple acquired it October 2025, repo archived, effectively abandoned as open project.

Mermaid for markdown tree rendering. v11.x, renders natively in markdown (no build step), supports tree/graph diagrams. For documentation, dream logs, and any markdown-based visualization of the ternary tree. Cytoscape.js for interactive web graph visualization. Graphviz for static diagrams. For the lattice instrument itself these are supplementary — the instrument already renders its own trees — but Mermaid could improve documentation quality.

NetworkX 3.6.x and igraph 0.11.x are Python graph libraries — relevant if the lattice ever needs server-side graph algorithms (shortest path, centrality, community detection on the address tree). Overkill for 27-39 nodes but worth knowing they exist.

**Where it informs:**

| finding | address | why |
|---------|---------|-----|
| SE(4) undocumented across all tools | 101, 211 | toy sketch and build are rolling own math vocabulary |
| SQLite + materialized-path | 200, 201 | persistence layer for ternary addresses |
| Kuzu abandoned (Apple acquisition) | 200 | remove from consideration |
| Mermaid for markdown rendering | 111, 122 | documentation and dream logs |
| DuckDB over-provisioned | 200 | not needed at this scale |
| four tree-in-SQL patterns | 020 | materialized path maps to ternary address |

---

## Dive 1 — Visualization/Frontend, Computation Environments, Automation/Agent Integration (25 targets)

**What's in it:** Three sections. Viz/frontend (D3.js, Observable Plot, Vega-Lite, Plotly, Bokeh, Altair, Three.js, Canvas 2D API, Mermaid). Compute environments (Jupyter/JupyterLab, Marimo, Google Colab, MATLAB, PyMC, pandas/ggplot2). Automation/agent (MCP spec, SKILL.md, MATLAB agentic toolkit, Simulink agentic toolkit, LangChain/LangGraph).

**What stands out:**

Canvas 2D API confirmed as architecturally sound. The lattice instrument already uses it — single HTML, zero dependencies. The dive confirms there's no simpler stack for what we're building. No library to import, no build step, direct pixel-level control. The dream.ux confirmed this approach: the instrument IS the interface.

D3.js d3-hierarchy for computed tree layouts. `d3-hierarchy` module implements tree, cluster, treemap, pack layouts. `d3.stratify()` builds hierarchies from tabular data — directly maps to the flat-file ternary structure. If the patchboard or verb map ever needs computed layout positions (force-directed, radial, dendrogram), D3 provides the algorithms without requiring a full framework switch. Individual modules are importable without the full D3 bundle.

Three.js r184 for 3D. The trace toy already uses raw WebGL math for its 3D rendering. Three.js would simplify future 3D toys (scope, projection, caliper) with scene management, camera controls, lighting, materials. Monthly release cadence. The tsnew-trace toy's orbit camera and trail rendering would be simpler with Three.js, but the current raw approach works and avoids the dependency.

MCP (Model Context Protocol) spec 2025-11-25. JSON-RPC 2.0, client-server, stdio + Streamable HTTP transports. Defines tools, resources, prompts. This is the protocol for making the lattice talk to external agents and computation engines. The chain: lattice (interface) → MCP (protocol) → MATLAB/Julia/Python (computation) → results back. Relevant when the lattice becomes a development server.

MATLAB agentic toolkit (April 2026) and Simulink agentic toolkit (April 2026). Both verified to exist under those exact names on the official matlab/ GitHub org. These make MATLAB callable by agents via MCP — real computation (matrix algebra, signal processing, control systems) accessible through the agent protocol. This is the path for real math with real tools: the lattice manages the work, MCP connects to MATLAB, MATLAB does the SE(4) computation.

SKILL.md format. Open standard for agent skills — YAML frontmatter + markdown body. Progressive disclosure (3 levels). Adopted across multiple agent frameworks. Relevant if the lattice ever exposes its operations as agent-callable skills.

Marimo as reactive Jupyter alternative. Python notebooks where cells are pure functions that auto-update. Interesting for computation environments but not directly relevant to the lattice instrument.

Pandas 3.0 and ggplot2 4.0 (S7) shipped recently. PyMC 6.0 for probabilistic modeling. These are computation-side tools — relevant when doing real data work through the MATLAB/Julia/Python pipeline, not for the lattice instrument itself.

**Where it informs:**

| finding | address | why |
|---------|---------|-----|
| Canvas 2D API = right stack | 112, 211 | confirms instrument architecture |
| D3 d3-hierarchy for layouts | 101, lattice | computed tree positions if needed |
| Three.js r184 for 3D | 101, 211 | future toy simplification |
| MCP spec 2025-11-25 | 112, 200 | agent protocol for lattice-as-server |
| MATLAB agentic toolkit | 101, 211 | real computation via agent protocol |
| SKILL.md format | 112 | exposing lattice operations as skills |
| Marimo reactive notebooks | 100 | parked — computation environment |

---

## Dive 2 — Embeddings/Vector Stores, Dataset Curation, Frontier Multimodal (21 targets)

**What's in it:** Three sections. Embeddings/vector stores (sentence-transformers, FAISS, ChromaDB, comparison). Dataset curation/distillation (scikit-learn, clustering algorithms, dataset distillation research, LIMA thesis and successors). Frontier multimodal (JavisDiT, unified single-tower architectures, ControlNet lineage, deployed products — parked).

**What stands out:**

The embeddings pipeline is production-ready for small corpora. sentence-transformers 5.5.1 (stable, 15,000+ pretrained models). FAISS 1.13.2 (Flat index instant for <1000 docs). ChromaDB 1.5.x (Rust-core rewrite, "SQLite for embeddings," native metadata where-clause filtering). The minimum viable pipeline: embed with sentence-transformers → store in ChromaDB → query with metadata filters. For a sub-1000-document corpus this is straightforward.

ChromaDB's metadata filtering maps directly to ternary addresses. `where` filter with operators ($eq, $ne, $gt, $gte, $lt, $lte, $in, $nin), logical $and/$or, array $contains/$not_contains. You could store document embeddings with ternary address metadata and query "all documents at branch 1" or "all documents where depth = cell" alongside semantic similarity. This connects to f0's compilation 11 (Dense X propositions as retrieval unit) — log entries are propositions, embeddings make them semantically searchable.

ChromaDB parallels SQLite finding from Dive 0. Both are embedded, single-file-ish, production-grade for small data. SQLite for structured address/metadata, ChromaDB for semantic similarity. They could coexist: SQLite as the address/metadata backbone, ChromaDB as the semantic search layer.

LIMA "less is more" thesis confirmed and extended. 1,000 curated examples beat 52k. Successors (LIMO Jan 2025 — 817 examples outperform 100k on math reasoning; MIG 2024 — general instruction following; MM-LIMA — multimodal). This directly validates the lattice's curation function. f0's compilation 11 already mapped this (LIMA superficial alignment hypothesis = the lattice is format alignment). The dive adds: the successors STRENGTHEN the thesis, it's not a one-paper finding.

Dataset distillation is research-grade, not production. Methods (gradient matching, distribution matching, kernel ridge regression, attention matching) are primarily benchmarked on image classification (CIFAR-10, ImageNet), not text. The "Freudian learning" paper (April 2025) extends to LLMs but is still research. For the lattice's sub-1000-doc scale, simple curation (survey → extract → crossref) is the right approach — distillation algorithms are designed for datasets orders of magnitude larger.

scikit-learn 1.8.0 stable. K-means, DBSCAN, HDBSCAN, spectral clustering — all relevant for clustering embedded documents by semantic similarity. HDBSCAN particularly good for discovering natural groupings without pre-specifying cluster count. Connects to the research sorting problem: embed all research documents, cluster them, see what natural groupings emerge vs the current address-based organization.

Frontier multimodal properly parked. JavisDiT (joint audio-video diffusion) is research-demo with measured synchronization metrics. ControlNet lineage shows measured improvements but is still structured-generation research. Deployed text-to-video products (Sora 2, Veo 3.1) are closed black boxes. None of this is relevant to current lattice work.

**Where it informs:**

| finding | address | why |
|---------|---------|-----|
| sentence-transformers + ChromaDB pipeline | 111, 200 | semantic search across documents |
| ChromaDB metadata filtering = ternary queries | 200, 201 | query by address structure + semantic similarity |
| LIMA thesis strengthened by successors | 111, 200 | curation > volume, confirmed repeatedly |
| dataset distillation research-grade | 100 | parked — scale mismatch |
| scikit-learn clustering for research sorting | 111 | natural grouping of embedded documents |
| frontier multimodal parked | 100 | no relevance to current work |

---

## Combined attribution map (f0 + f1)

f0 mapped grounding research to lattice structure (what the lattice IS). f1 maps tooling research to lattice building (what the lattice is BUILT WITH). Combined:

### Building tools — confirmed

| tool | what for | readiness | address |
|------|----------|-----------|---------|
| Canvas 2D API | lattice instrument rendering | production, zero-dep, already in use | 211 |
| SQLite + materialized-path | ternary address persistence | production, natural fit | 200, 201 |
| ChromaDB | semantic search layer | production, metadata filters map to addresses | 111, 200 |
| sentence-transformers | document embedding | production, 15k+ models | 111 |
| Mermaid | markdown tree/graph diagrams | production, no build step | 111, 122 |
| D3 d3-hierarchy | computed tree layouts | production, importable modules | 101, lattice |
| Three.js | 3D toy rendering | production, monthly releases | 101, 211 |
| MCP | agent protocol | spec stable (2025-11-25) | 112 |
| MATLAB agentic toolkit | real computation via agents | released April 2026 | 101, 211 |

### Building tools — parked

| tool | what for | why parked |
|------|----------|------------|
| DuckDB | analytical queries | over-provisioned for 27-39 nodes |
| Neo4j | graph database | heavyweight JVM server |
| Kuzu | embedded graph | abandoned (Apple acquisition) |
| Marimo | reactive notebooks | computation environment, not instrument |
| dataset distillation | synthetic data compression | research-grade, scale mismatch |
| frontier multimodal | audio/video generation | no relevance to current work |
| scikit-learn clustering | research sorting | interesting but not immediate |

### Grounding research — still live from f0

All 46 verified findings and 30 applied mappings from f0 extract carry forward. Key live connections:
- LIMA thesis (f0 compilation 11) now STRENGTHENED by dive 2 successors
- Dense X propositions (f0 compilation 11) now CONNECTABLE via sentence-transformers + ChromaDB
- RAPTOR ablation template (f0 compilation 10) still the methodology for testing "does structure help?"
- Extended mind / cognitive niche (f0 compilation 04) — the lattice IS the external cognitive system, confirmed by both rounds

### Open research questions

1. **SE(4) vocabulary** — no tool packages it. Do we build our own wrapper around SymPy/Julia generic SE(n)? Or stay with raw 5×5 matrix math? Needs decision before scope/formula toys.
2. **MCP integration path** — when does the lattice become a server? What operations does it expose? Needs design work at 101/112.
3. **Embedding experiment** — embed all documents, cluster by similarity, compare clusters to address organization. Would test whether the ternary structure reflects semantic reality. Methodology exists (compilation 10 + dive 2). Not urgent.
4. **Research naming convention** — two rounds with inconsistent naming (research01-12 vs 0_/1_/2_ prefix). Needs standardization.
5. **MATLAB computation path** — if the lattice connects to real math tools via MCP, what does the interface look like? What computation gets requested? SE(4) matrix algebra? Scaling analysis? This is the "real math with real data" question.

---

## Survey complete — 3 dive results surveyed, combined with f0 corpus

Total research surveyed across both folds:
- f0: 12 grounding compilations + 3 existing research docs (structural/philosophical/cognitive)
- f1: 3 tooling dive results (storage/math/graph, viz/compute/agents, embeddings/curation/multimodal)
- Combined: 18 source documents, 66 tools/methods/frameworks catalogued in dives

The two rounds complement: f0 grounds WHAT the lattice is, f1 grounds WHAT it's built with. Neither round contradicts the other. The tooling confirms the architecture is sound (Canvas 2D, zero-dep, single HTML) and the persistence path is clear (SQLite + ChromaDB when needed).
