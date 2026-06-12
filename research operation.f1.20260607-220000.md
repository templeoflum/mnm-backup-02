# RESEARCH OPERATION — System Sweep

*Three dives. Each dive is a search-and-retrieval brief. Find the leading research for each target, cite sources, report what's applicable. No reasoning, no recommendations, no decisions — those happen elsewhere. This document is navigation.*

*Status: proposed.*

-----

## System

A ternary-addressed file tree (27 cells, 3×3×3) used for human-AI collaboration. Addresses look like `211.mvv.gdd.coo.0815`. Documents are markdown and standalone HTML instruments. The math layer uses 5×5 SE(4) homogeneous matrices (rotation planes + displacement translations in 4-space, projected to 3D canvas). Currently flat files only — no database, no build pipeline, no CI.

-----

## DIVE 0 — GROUND

*Search the foundational landscape. Storage, persistence, addressing patterns, math tooling.*

### 0.0 — Storage & persistence

**Targets:**
- SQLite
- DuckDB
- Neo4j
- Kuzu (embedded graph database)
- Tree-in-SQL patterns: materialized path, closure table, adjacency list, nested set
- ORM (when it helps vs fights non-standard schemas)
- ERD vocabulary (entities, attributes, cardinality)

**For each target find:** What it is. Current version and maturity. How it handles tree-structured data. How it handles custom address formats as keys. Performance characteristics for small trees (< 1000 nodes). Hybrid file+database patterns (files hold content, DB holds metadata). Source links.

### 0.1 — Math tooling

**Targets:**
- SymPy (symbolic math, Python)
- SageMath (group theory, SE(3)/SE(4) support)
- Mathematica / Wolfram Language
- Julia (numeric computing)
- NumPy / SciPy
- JAX / Numba (GPU/JIT)
- GeoGebra / Desmos (interactive exploration)

**For each target find:** What it is. How it handles matrix group algebra (specifically SE(3), SE(4), rotation groups). Symbolic vs numeric capabilities. Interop with Python/JS. Current state of documentation. Source links.

### 0.2 — Graph & structure tools

**Targets:**
- NetworkX
- igraph
- Graphviz / DOT
- Gephi
- Cytoscape
- Mermaid

**For each target find:** What it is. How it renders trees (specifically ternary trees, 39 nodes). Interactive vs static. Web-embeddable or not. Algorithmic capabilities for small structured graphs. Source links.

**Deliverable:** Landscape report for dive 0 targets. For each: what it is, how mature, key characteristics, source links. No ranking, no recommendations.

-----

## DIVE 1 — OPERATION

*Search the tools landscape. Visualization, computation environments, notebooks, automation.*

### 1.0 — Visualization & frontend

**Targets:**
- D3.js
- Observable Plot
- Vega-Lite
- Plotly
- Bokeh
- Altair
- Three.js / WebGL
- Canvas 2D API
- Manim
- ParaView / VTK
- KaTeX / MathJax

**For each target find:** What it is. Tree/hierarchy rendering capabilities. Real-time animation support (point traces, orbits). Canvas embedding and iframe interop. Touch/mobile support. Bundle size and dependencies. Current maintenance status. Source links.

### 1.1 — Computation environments

**Targets:**
- Jupyter
- Marimo
- Quarto
- R / tidyverse
- pandas / Polars
- statsmodels / PyMC / Stan
- LaTeX / TikZ / PGFPlots
- scikit-image / OpenCV

**For each target find:** What it is. JS↔Python bridge capabilities. Inline visualization support. Reproducibility features. Export formats. Current state in 2026 (especially Marimo vs Jupyter). Source links.

### 1.2 — Automation & agent integration

**Targets:**
- MCP (Model Context Protocol) — server architecture, custom tool definition
- SKILL.md format for Claude Code
- MATLAB Agentic Toolkit
- MATLAB MCP Core Server
- Simulink Agentic Toolkit
- Playwright (current state, test orchestration patterns)

**For each target find:** What it is. Current documentation and stability. How custom tools/servers are defined. What a minimal server implementation looks like. CI/CD patterns for markdown+HTML projects. Source links.

**Deliverable:** Landscape report for dive 1 targets. For each: what it is, how mature, key characteristics, source links. No ranking, no recommendations.

-----

## DIVE 2 — CONFIGURATION

*Search the experiment and scaling landscape. Embeddings, distillation, corpus curation, multimodal frontier.*

### 2.0 — Embeddings & vector stores

**Targets:**
- sentence-transformers (text embedding models)
- FAISS
- Chroma
- cosine similarity / k-nearest-neighbor
- RAG (retrieval-augmented generation) architectures

**For each target find:** What it is. Current leading models and their characteristics. Metadata filtering capabilities. Minimum viable pipeline (embed → store → query). Performance at small scale (< 1000 documents). Source links.

### 2.1 — Dataset curation & distillation

**Targets:**
- scikit-learn (clustering, classification)
- k-means / hierarchical clustering
- dataset distillation
- knowledge distillation
- memorization-vs-generalization probes
- LIMA and successors (small curated training sets)

**For each target find:** What it is. Current research on small-set curation (what's happened since LIMA). What transfers in distillation, what doesn't. How to test reasoning vs retrieval (probe design). Source links.

### 2.2 — Frontier (parked)

**Targets:**
- Joint audio-video diffusion / MMDiT
- Unified single-tower multimodal architectures
- Structured composition/control layers over generative models

**For each target find:** What it is. Current state in 2026 — demo vs deployed. Leading papers and implementations. Whether structured control layers show measurable improvement. Source links.

**Deliverable:** Landscape report for dive 2 targets. For each: what it is, how mature, key characteristics, source links. No ranking, no recommendations.

-----

## Deliverable format (all dives)

For each target:

```
### [target name]
**What it is:** [one paragraph]
**Maturity:** [stable / active / experimental / abandoned]
**Key characteristics:** [bullet list]
**Applicable to our system because:** [one sentence — how it relates to ternary-addressed file trees, SE(4) instruments, or human-AI collaboration]
**Sources:**
- [title](url)
- [title](url)
```

-----

*Proposed. Yours to walk and settle.*
