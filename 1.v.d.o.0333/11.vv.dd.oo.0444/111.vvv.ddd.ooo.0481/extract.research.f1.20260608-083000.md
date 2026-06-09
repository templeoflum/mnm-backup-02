# Extract — research — f1 — 20260608-083000 [float]

Fold from f0 (extract.research.f0.260606-145200.md). f0 extracted findings from 12 grounding compilations. This fold extracts findings from 3 tooling dive results. Same tagging:

- **[verified]** — documented, version-confirmed, production-grade. The tool/capability is established.
- **[applied]** — the tool is verified but the mapping to our use case is our interpretation.
- **[speculative]** — the connection is suggestive but the tool hasn't been tested in our context.

---

## 020 — what the structure is (persistence/representation)

**[verified]** SQLite 3.51.x supports TEXT primary keys, recursive CTEs for tree traversal, single-file embedded ACID storage. The materialized-path pattern maps dotted ternary addresses directly as keys. (SQLite docs, release history 2025-2026) [dive 0]

**[verified]** Four canonical tree-in-SQL patterns exist: adjacency list, materialized path, nested set, closure table. All are stable, unversioned design patterns. (Standard database literature) [dive 0]

**[verified]** ChromaDB 1.5.x provides native metadata filtering ($eq, $ne, $gt, $lt, $in, $nin, $and/$or, $contains, $regex) on stored embeddings. Described as "SQLite for embeddings." (ChromaDB docs, Rust-core rewrite 2025) [dive 2]

**[applied]** SQLite + materialized-path is the natural persistence layer for the ternary address tree. A key like "211.mvv.gdd.coo.0815" works directly. For 27-39 nodes, performance is instantaneous — far below scale thresholds. SQLite is established; the fit to our specific address scheme is ours. [dive 0]

**[applied]** ChromaDB metadata filtering maps directly to ternary address queries — "all documents at branch 1" or "depth = cell" alongside semantic similarity. ChromaDB is production; the address-mapping is ours. [dive 2]

---

## 101 — sketches / blueprints (SE(4) math gap)

**[verified]** No tool surveyed documents SE(4) / 5×5 homogeneous matrices as a named construct. SymPy, SageMath, Mathematica, Julia LieGroups.jl, NumPy/SciPy, JAX — all support arbitrary-dimension matrix algebra but none name SE(4). (Survey of 13 math tools, 2025-2026 versions) [dive 0]

**[verified]** Julia's LieGroups.jl documents SE(n) generically — closest to SE(4) support. SymPy provides arbitrary-dimension symbolic matrix algebra. SciPy's Rotation is explicitly 3D only. (Tool documentation) [dive 0]

**[verified]** MATLAB agentic toolkit released April 13, 2026. Simulink agentic toolkit released April 17, 2026. Both on official matlab/ GitHub org. MATLAB callable by agents via MCP. (GitHub releases, verified) [dive 1]

**[applied]** The trace toy's 5×5 SE(4) matrix is rolling its own mathematical vocabulary. Future toys (scope, formulas, projection) that need symbolic SE(4) work will need either a custom wrapper around generic SE(n) tools or continued raw matrix math. The gap is documented; the implication for our build path is ours. [dive 0]

**[applied]** MATLAB via MCP = the path for real computation. Lattice manages work, MCP connects to MATLAB, MATLAB does SE(4) algebra. The tools exist; the integration design is ours. [dive 1]

---

## 111 — connects (research tools)

**[verified]** sentence-transformers 5.5.1 (Production/Stable). 15,000+ pretrained models on HuggingFace. `all-MiniLM-L6-v2` produces 384-dim vectors, cited as the fast/free small-scale default. Provides `similarity()` and `semantic_search()` for small-corpus retrieval without external database. (PyPI, sbert.net docs) [dive 2]

**[verified]** FAISS 1.13.2 with Flat index is exact brute-force search, recommended by FAISS's own guidelines for <50k vectors. For sub-1000-doc corpus, search is instant. (FAISS wiki, paper) [dive 2]

**[verified]** LIMA Superficial Alignment Hypothesis confirmed and strengthened by successors: LIMO (Jan 2025, 817 examples outperform 100k on math reasoning), MIG (2024, general instruction), MM-LIMA (multimodal). Quality over quantity is not a one-paper finding. (Multiple published papers, 2023-2026) [dive 2]

**[verified]** scikit-learn 1.8.0 stable. HDBSCAN discovers natural groupings without pre-specifying cluster count. (scikit-learn docs) [dive 2]

**[applied]** Embedding all research documents and clustering by similarity would test whether ternary address organization reflects semantic reality. Methodology exists (f0 compilation 10 metrics + dive 2 tooling). Tools are established; the experiment design is ours. [dive 2]

**[applied]** LIMA thesis strengthens f0's mapping: the lattice is format alignment (doesn't change what the LLM knows, aligns HOW knowledge is formatted). 27 addressed cells > sprawling folders. Now confirmed by multiple successor papers, not just LIMA alone. [dive 2, f0 compilation 11]

---

## 112 — lands (instrument architecture)

**[verified]** Canvas 2D API is a zero-dependency browser API for 2D rendering. No library, no build step, direct pixel control. (Web standards) [dive 1]

**[verified]** MCP (Model Context Protocol) spec 2025-11-25. JSON-RPC 2.0, client-server architecture. Transports: stdio + Streamable HTTP. Defines tools, resources, prompts as first-class protocol elements. (MCP specification) [dive 1]

**[verified]** SKILL.md is an open standard for agent skills. YAML frontmatter + markdown body. Progressive disclosure (3 levels). Adopted across multiple agent frameworks. (Published standard) [dive 1]

**[applied]** Canvas 2D API is the right architecture for the lattice instrument — confirmed by survey of alternatives. Single HTML, zero-dep, already in use. No simpler stack exists for what we're building. The API is standard; the architectural judgment is ours. [dive 1]

**[applied]** MCP is the protocol when the lattice becomes a development server that agents can call. The spec is stable; the application to our instrument is ours. [dive 1]

---

## 200 — intake / receiving (tooling landscape)

**[verified]** Kuzu (embedded graph database) archived on GitHub October 10, 2025. Apple agreed to acquire all shares October 9, 2025. Effectively abandoned as open project. Community forks exist (bighorn, LadybugDB). (GitHub archive notice, AppleInsider, BetaKit) [dive 0]

**[verified]** DuckDB 1.5.0 (March 2026). Analytical/columnar, optimized for large data scans. Supports recursive CTEs. Over-provisioned for <100 node tree. (DuckDB docs) [dive 0]

**[verified]** Neo4j 2025.x (CalVer). Server-first native graph DB. JVM-based. For 27-39 nodes, heavyweight relative to need. (Neo4j docs) [dive 0]

**[verified]** Dataset distillation methods (gradient matching, distribution matching, kernel ridge regression) primarily benchmarked on image classification (CIFAR-10, ImageNet), not text corpora <1000 docs. (2023-2026 surveys) [dive 2]

**[verified]** Frontier multimodal (JavisDiT, ControlNet lineage, unified single-tower) is overwhelmingly research-demo. Deployed products (Sora 2, Veo 3.1) are closed black boxes. (Multiple sources, 2025-2026) [dive 2]

---

## 211 — checkpoint / builds (viz tools)

**[verified]** D3.js 7.x. `d3-hierarchy` module implements tree, cluster, treemap, pack layouts. `d3.stratify()` builds hierarchies from tabular (non-nested) data. Modular — individual modules importable without full bundle. (D3 docs, npm) [dive 1]

**[verified]** Three.js r184 (current). Scene management, cameras, meshes, materials, loaders, orbit controls. Monthly release cadence. Abstracts WebGL and increasingly WebGPU. (threejs.org, GitHub) [dive 1]

**[verified]** Plotly.js 3.x supports 3D scatter, animation frames, WebGL traces. plotly.py 6.x. JS↔Python: same library, figures are portable JSON. (GitHub, docs) [dive 1]

**[applied]** D3 d3-hierarchy could provide computed layout positions for the patchboard or verb map if hand-built DOM layout becomes insufficient. The module is established; the potential application is ours. [dive 1]

**[applied]** Three.js would simplify future 3D toys (scope, projection, caliper) vs the current raw WebGL math in tsnew-trace. The library is established; the simplification tradeoff is our assessment. [dive 1]

---

## Count

- **[verified]**: 23 findings from documented, version-confirmed, production-grade tools and specifications
- **[applied]**: 12 mappings where the tool is solid but the application to the lattice is our interpretation
- **[speculative]**: 0 — the tooling dives are factual landscape compilations, not structural analogies

Combined with f0:
- **[verified]**: 69 total (46 from f0 + 23 from f1)
- **[applied]**: 42 total (30 from f0 + 12 from f1)
- **[speculative]**: 6 total (all from f0 — the structural analogy territory)

The character of the two rounds is different. f0's extracts are largely [applied] — solid scholarship mapped to our structure by interpretation. f1's extracts are largely [verified] — documented tools with documented capabilities. f0 asks "does this map?" f1 asks "does this exist?" The tooling exists. The structural mappings are ours.
