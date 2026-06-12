# RESEARCH OPERATION — System Sweep

*Addressed on the lattice's own structure: every position is a 0/1/2 choice (is/does/goes), three deep. The root is the operation itself. Addresses are the lattice's ternary addresses used as a planning instrument: 0.0.0 = ground of ground, 1.1.1 = do of do, 2.2.2 = document of document.*

*Status: proposed. Walked from a full system scan (all 27 cells inventoried, 140+ files catalogued, gaps mapped). Not yet settled.*

-----

## The bet (what the whole operation tests)

The lattice-addressed system can serve as the **full working environment** for a human-AI collaboration — specification, operation, and configuration — not just a concept map. The bet is that its gaps are identifiable, its weaknesses are structural (fixable by research), and the right tools exist to close them without abandoning the addressing model. If the addressing holds under real tooling pressure (database, frontend, automation, computation), the system graduates from prototype to infrastructure. If it doesn't, we learn where the model breaks and what replaces it.

-----

## Current state (from full scan, 2026-06-07)

### What exists

| Branch | Files | Addresses filled | Status |
|--------|-------|-----------------|--------|
| 0 specification | 0 | 0 of 9 | **EMPTY** |
| 1 operation | 65 | 5 of 9 | active, productive |
| 2 configuration | 75 | 7 of 9 | active, strained |
| root | 14 | — | tooling + spec |
| **total** | **154** | **12 of 27** | **44% occupancy** |

### What works

- Fold mechanics (f0→f1→f2→f3→f4 at 222, clean boundaries)
- Frame→build→verify cycle (tsnew-trace built, screenshotted, fixed, verified at 211)
- Audit process (55 findings from blind walk at 221)
- Research synthesis (ternary↔TS bridge proven at 111)
- TS instruments frozen and verified (3D, 4D, fingerprint at 100)
- Discipline protocol (120-122, see/build/hold)
- Log format (lattice trail, C/O/D types at 222)
- Document routing (manifest→201, schedule→202, frame→210, audit→221, log→222)

### What doesn't

- Branch 0 unpopulated — nothing has settled enough to move there yet (not a gap, just early)
- 200 intake holds 39 files — overcrowded, distribution blocked
- Manifest drift — 55 audit findings unresolved, file counts stale, locations wrong
- Keystone declares 5 document types, system uses 11+ (survey, extract, crossref, dream, parked, float, review, count undeclared)
- Checkpoint ceiling (39-slot) designed but never enforced
- Decision gates at 102 half-open (31 settled, format incomplete)
- 52 sketches at 101 unaudited (signal vs noise unknown)
- No database — everything is flat files
- No build pipeline — manual HTTP server, manual playwright
- No version control commits — git initialized but empty
- Addresses 110, 112, 120, 121, 212, 220 undefined and empty

-----

## THE OPERATION (27-cell address space; filled where the work is)

```
[ root ] — can the lattice-addressed system become real infrastructure?

0 · GROUND — what IS the system, what must hold before building on it
  0.0  addressing under pressure  — does the model hold when real tools push on it?
     0.0.0  test: ternary address as database key — does it query naturally or fight SQL?
     0.0.1  test: address as route — does it map to URL paths, API endpoints, MCP tool targets?
     0.0.2  record: where addressing holds, where it bends, where it breaks
  0.1  storage architecture       — how should the lattice persist beyond flat files?
     0.1.0  survey: SQLite vs DuckDB vs graph (Neo4j/Kuzu) for ternary tree
     0.1.1  test: materialized path vs closure table vs adjacency list for address containment
     0.1.2  record: storage recommendation — what fits the model, what fights it
  0.2  math foundations           — is the ternary↔TS bridge complete?
     0.2.0  audit the bridge: radial confirmed, angular provably impossible — what remains?
     0.2.1  test: does the Cantor-set structure (ternary subdivision) give us anything computable?
     0.2.2  record: math foundation status — what's proven, what's open, what's dead

1 · DO — what tools and methods to investigate and test
  1.0  instruments & visualization — what renders the lattice and its contents?
     1.0.0  survey: D3.js vs Observable Plot vs Vega-Lite vs Plotly for lattice nav
     1.0.1  survey: canvas toys (current approach) vs WebGL vs Three.js for TS instruments
     1.0.2  test: can the lattice UI (200/lattice.f0) scale to full system nav?
  1.1  computation environment    — what does the math and ML work?
     1.1.0  survey: NumPy/SciPy/SymPy for TS matrix work + spline continuity
     1.1.1  survey: notebooks (Jupyter vs Marimo vs Quarto) for reproducible analysis
     1.1.2  survey: embedding models + vector stores (FAISS/Chroma) for corpus placement
  1.2  automation & integration   — what connects the pieces?
     1.2.0  survey: MCP server setup for Claude Code integration (SKILL.md, lattice-aware tools)
     1.2.1  test: playwright/eyes.js expansion — can automated verification cover all toys?
     1.2.2  survey: MATLAB/Simulink agentic toolkit — does it connect to TS math?

2 · DOCUMENT — measure, compare, decide, plan forward
  2.0  mind-not-map experiment    — the corpus distillation bet (carried from prior operation)
     2.0.0  lock conditions: embedding separation, reasoning-vs-memorization probe
     2.0.1  run: small sorted set vs flat control on held-out probe
     2.0.2  record: does structure beat flat? the bet lives or dies here
  2.1  system health              — close the audit gap
     2.1.0  triage: 55 audit findings — which are structural, which are cosmetic?
     2.1.1  fix: manifest accuracy (file counts, locations, document type declarations)
     2.1.2  fix: 200 intake distribution — route files to proper addresses
  2.2  scale & preservation       — what happens as the system grows?
     2.2.0  test: checkpoint ceiling (39-slot ternary tree) — does it force useful cleanup?
     2.2.1  test: fold compression — what survives folding, what's lost?
     2.2.2  plan: the next layer — if the system works, what scales it?
```

-----

## Research targets mapped to addresses

The raw target list sorted by where it lands in the operation:

### 0.1 — storage architecture
- **SQLite** — single-file relational, widely supported, good for structured metadata
- **DuckDB** — columnar analytics, excellent for queries over structured data, embeds like SQLite
- **Neo4j / Kuzu** — graph databases, natural fit for containment/adjacency but may be overkill
- **basic SQL** — the query language itself, needed regardless of engine
- **materialized path** — store address as string path, query with LIKE prefix (simple, fast reads)
- **closure table** — store all ancestor-descendant pairs, fast subtree queries (more storage)
- **adjacency list** — store parent pointer only, simplest but slow for deep queries
- **ORM** — object-relational mapping, may fight the ternary address model
- **ERD vocabulary** — entities/attributes/cardinality for formalizing the lattice schema

### 1.0 — instruments & visualization
- **D3.js** — low-level, maximum control, steep learning curve, proven at scale
- **Observable Plot** — D3-derived, higher-level, good for exploratory vis
- **Vega-Lite** — declarative grammar, fast prototyping, limited interactivity
- **Plotly** — interactive charts, Python+JS, good for dashboards
- **Bokeh** — Python-native interactive vis, server-side rendering option
- **Altair** — Python declarative vis (wraps Vega-Lite), clean API
- **Manim** — mathematical animation (3Blue1Brown), could visualize TS composition
- **ParaView / VTK** — scientific visualization, 3D volume rendering, may be too heavy
- **GeoGebra / Desmos** — interactive math tools, good for exploration not production
- **Mermaid / GraphViz DOT** — diagram generation, good for structure docs not live nav

### 1.1 — computation environment
- **NumPy** — matrix operations, essential for SE(4) work
- **SciPy** — optimization, integration, signal processing
- **SymPy** — symbolic math, could verify TS algebraic claims
- **SageMath** — comprehensive math system, group theory support (SE(3)/SE(4))
- **Mathematica / Wolfram** — powerful but proprietary, best symbolic engine
- **Julia** — fast numeric computing, good for TS simulation at scale
- **R / tidyverse** — statistical analysis, good for experiment results
- **pandas / Polars** — dataframe operations for structured data processing
- **Jupyter / Marimo / Quarto** — notebook environments for reproducible analysis
- **JAX / Numba** — GPU acceleration / JIT compilation for heavy computation
- **LaTeX / TikZ / PGFPlots** — publication-quality math typesetting
- **KaTeX / MathJax** — web math rendering (for lattice UI)
- **statsmodels / PyMC / Stan** — statistical modeling, Bayesian inference

### 1.2 — automation & integration
- **MCP server setup in Claude Code** — lattice-aware tool access
- **SKILL.md format** — defining reusable skills for Claude Code
- **MATLAB Agentic Toolkit** — MATLAB↔AI agent bridge
- **MATLAB MCP Core Server** — MATLAB as MCP tool server
- **Simulink Agentic Toolkit** — Simulink model access from agents

### 2.0 — mind-not-map experiment
- **embedding models (sentence-transformers)** — text→vector for placement
- **vector store (FAISS, Chroma)** — similarity search over embeddings
- **scikit-learn** — clustering, classification for sorting
- **cosine similarity / nearest-neighbor** — the placement mechanism
- **clustering (k-means, hierarchical)** — automatic grouping before human sign-off
- **dataset distillation / knowledge distillation** — the compression step
- **memorization-vs-generalization probe** — the test that validates the bet
- **retrieval-augmented setup** — reasoning through the folded set

### 1.0 (far star, gated behind 2.0)
- **joint audio-video diffusion / MMDiT** — multimodal synthesis, parked at 2.2.2
- **scikit-image / OpenCV** — image processing, may connect to visual instruments
- **NetworkX / igraph** — graph algorithms on the lattice structure itself
- **Graphviz / Gephi / Cytoscape** — graph visualization at scale

-----

## Findings from the scan (organized by concern)

### A. Branch 0 — unpopulated, not missing (0.0)

Branch 0 (specification) has no files yet. This is not a structural problem — nothing has settled deeply enough through practice to earn a place at the origin. Branch 0 populates through work arriving there, not through research or declaration. The keystone (CLAUDE.md) is the tool that helps build the structure; it is not itself a resident of the structure. It may eventually need a place in the lattice, but what that looks like will come from practice, not from investigation.

**Not a research question.** The 0.0 cell in this operation has been reassigned to test whether the addressing model holds under tooling pressure (database keys, URL routes, API endpoints) — a real unknown that practice alone won't answer.

### B. The storage problem (0.1)

Everything is flat files in a directory tree. This works at 154 files. It will not work at 1,500. Problems already visible:
- Manifest tracks file state manually (staged/claimed/signed/delivered/received/archived/retired)
- File counts go stale between manifest updates
- No query capability ("show me all [float] items" requires grep)
- No referential integrity (a file can reference an address that doesn't exist)
- The 39-slot checkpoint ceiling can't be enforced without counting

**Research needed:** Whether a lightweight database (SQLite/DuckDB) can sit alongside the filesystem without fighting the addressing model. The database would track metadata (status, address, fold, timestamps) while files hold content. Materialized path is the natural SQL representation of ternary addresses.

### C. The frontend problem (1.0)

The lattice UI (lattice.f0 at 200) is a single HTML file with keyboard navigation. The TS instruments are separate HTML files. There's no connection between them — you can't navigate from the lattice to a toy, or from a toy back to its address.

**Research needed:** Whether the lattice UI should become a shell that hosts instruments, or whether instruments should remain standalone with lattice-aware metadata. D3.js or Observable Plot could render the tree as a navigable structure. The current canvas-based TS toys could embed as views.

### D. The tooling problem (1.2)

Build process is manual: start HTTP server, open browser, run eyes.js manually. No CI, no automated tests, no build step. Git has zero commits.

**Research needed:** Whether MCP server integration would let Claude Code interact with the lattice natively (read/write by address, query status, run instruments). Whether eyes.js can become a proper test suite that runs on commit.

### E. The experiment problem (2.0)

The original research operation (corpus distillation) is fully designed but zero steps executed. It requires: embedding models, vector stores, scikit-learn, a reasoning probe, a flat-vs-structured comparison. None of these are installed or tested.

**Research needed:** Whether the experiment is still the right bet given what we've learned about the lattice. The lattice has proven itself as a collaboration instrument (154 files, disciplined workflow, verified builds). The original bet was about making a small model reason. These may be different bets.

### F. The compliance problem (2.1)

55 audit findings unresolved. Manifest drift accumulating. Document types undeclared. Naming conventions inconsistent (YYYYMMDD vs YYMMDD-HHMMSS). Archive zip at wrong address. These are not fatal but they compound.

**Research needed:** Whether a manifest-update tool (script or MCP server) could automate compliance checks. Whether the keystone should be updated to reflect actual practice (11+ document types) or whether practice should be constrained to match the keystone.

-----

## Gates (real, not ceremonial)

- **0 gates 1 gates 2.** Ground before doing, doing before documenting.
- **0.0 and 0.1 run together:** The address-as-key question (0.0) and storage survey (0.1) inform each other — neither gates the other, they're concurrent lenses on the same problem.
- **0.1 gates 1.0:** Don't pick frontend tools until you know what the backend looks like.
- **1.1 gates 2.0:** Don't run the corpus experiment until you have a computation environment.
- **2.1 is independent:** System health can be fixed in parallel with everything else.
- **2.0 gates 2.2:** Don't plan scale until the core bet is tested.

**Recommended pull order:** 2.1 (unblocked, immediate value) → 0.1 (storage survey, informs all downstream) → 0.0 (addressing under tooling pressure, runs alongside 0.1) → 1.0 + 1.1 (parallel, both inform 1.2 and 2.0) → 2.0 (the experiment) → 2.2 (scale planning).

-----

## Priority ranking (by impact × effort)

| Priority | Address | Target | Why |
|----------|---------|--------|-----|
| 1 | 2.1 | system health fixes | unblocked, 55 known issues, compounds if deferred |
| 2 | 0.1 | storage survey | SQLite + materialized path; transforms querying capability |
| 3 | 0.0 | addressing under pressure | runs alongside 0.1 — does the address work as a key, route, target? |
| 4 | 1.2.0 | MCP server | lattice-aware Claude Code tools would change the workflow |
| 5 | 1.0.2 | lattice UI scaling | current UI is a prototype; needs to become the shell |
| 6 | 1.1.0 | NumPy/SciPy/SymPy | TS math needs a proper computation environment |
| 7 | 2.0 | mind-not-map experiment | the original bet, still valid, needs 1.1 first |
| 8 | 1.1.2 | embeddings + vectors | required for 2.0, significant setup |
| 9 | 0.2 | math foundations | bridge is proven; open questions are real but not urgent |
| 10 | 2.2 | scale planning | gated behind everything else |

-----

## Open seams (left open, not smoothed)

- **0.0 and branch 0:** Branch 0 populates through practice — things settle there when they earn it. Not a research question. The keystone is outside the structure (the tool, not a resident). The open question at 0.0 is whether the address format survives contact with real tooling: can `211.mvv.gdd.coo.0815` be a database key, a URL path, an API route? That's testable.

- **0.1 and the filesystem:** Adding a database doesn't mean abandoning files. The question is whether metadata lives in the database while content lives in files (hybrid), or whether the database becomes primary (migration). The hybrid approach preserves the walkable-filesystem property.

- **1.0 and current instruments:** The TS toys are standalone HTML. Making them lattice-aware means either: (a) the lattice UI embeds them, (b) they embed lattice navigation, or (c) a routing layer connects them. Option (c) is lightest but adds a dependency.

- **2.0 and the revised bet:** The original bet was about corpus distillation for a small model. The system has evolved into a collaboration instrument. These may converge (the lattice structures the training data) or diverge (the lattice is the product, not the training pipeline). The experiment should test the current bet, not the original one, if they've diverged.

-----

## The far star (parked, gated behind 2.0 and 2.2)

Joint audio-video synthesis (MMDiT). Real-time multimodal generation. The lattice as a composition/control layer over unified architectures. Still parked. Still gated. The near-term work (storage, tooling, the experiment) determines whether this path opens or closes.

-----

*Proposed. Yours to walk and settle.*
