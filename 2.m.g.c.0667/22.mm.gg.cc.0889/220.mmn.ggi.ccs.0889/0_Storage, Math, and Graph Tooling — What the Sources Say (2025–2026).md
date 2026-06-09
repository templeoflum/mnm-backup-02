# GROUND Landscape Compilation (Dive 0): Storage, Math, and Graph Tooling — What the Sources Say (2025–2026)

## TL;DR
- This is a factual landscape compilation of 20 tools across storage/persistence, math tooling, and graph/structure tools; for each I report what it is, its maturity/version as of 2025–2026, documented capabilities, and how those capabilities bear on the context (ternary-addressed flat-file tree of 27–39 nodes, markdown + HTML docs, a 5×5 SE(4) homogeneous-matrix math layer, no DB, no build pipeline).
- The single most important factual finding: **no tool surveyed documents SE(4) / 5×5 homogeneous matrices / higher-dimensional special Euclidean groups.** Math tools document SE(3)/SO(3)/SO(n) and general n-dimensional matrix algebra, but SE(4) is not a documented, named construct anywhere; SymPy, SageMath, Julia's LieGroups.jl and generic SE(n) notation are the closest, since they support arbitrary-dimension symbolic/abstract matrix algebra into which 5×5 matrices can be placed.
- One major maturity change to flag: **Kuzu (embedded graph database) was archived on GitHub on October 10, 2025 and Apple agreed on Oct. 9, 2025 to acquire all shares and hire select employees of Kuzu** — it is effectively abandoned as an open project, though prior releases (0.11.x) remain usable.

## Key Findings
- **Storage:** SQLite (3.51.x, late 2025) and DuckDB (1.5.0, March 2026) are both stable, embedded, support recursive CTEs for tree traversal, and accept arbitrary TEXT primary keys — directly relevant to ternary string addresses. Neo4j (CalVer 2025.x) is a server-first native graph DB. Kuzu is abandoned. The four canonical tree-in-SQL patterns (adjacency list, materialized path, nested set, closure table) are stable, unversioned design patterns; materialized path maps most naturally to dotted ternary addresses.
- **Math:** SymPy (1.14, Apr 2025), SageMath (10.8, Dec 2025), Mathematica/Wolfram (14.x), Julia (Rotations.jl/Manifolds.jl/LieGroups.jl), NumPy/SciPy, JAX/Numba, and GeoGebra/Desmos. SciPy's Rotation is explicitly 3D only. Julia's LieGroups.jl documents SE(n) generically. SE(4) specifically is undocumented across all.
- **Graph/structure:** NetworkX (3.6.x), igraph (0.11.x / C core 1.0.0), Graphviz (dot), Gephi (GUI), Cytoscape (desktop) vs Cytoscape.js (web), and Mermaid (v11.x). For a 27–39 node ternary tree embedded in markdown/HTML, Mermaid, Graphviz, and Cytoscape.js are the web-embeddable options; Mermaid renders natively in markdown.

---

## SECTION 0.0 — Storage & Persistence

### 1. SQLite
**(1) What it is.** SQLite is a self-contained, serverless, zero-configuration, transactional SQL database engine implemented as a C library that stores an entire database (tables, indexes, content) in a single cross-platform file. It is embedded directly into the host application rather than running as a separate process.

**(2) Maturity.** Stable and actively maintained — among the most widely deployed database engines in existence. Latest releases in the 3.5x series: version 3.50.0 was the 25th-anniversary release (2025-05-29); 3.51.0 released 2025-11-04; patch release 3.51.1 released 2025-11-28. (Note: version 3.52.0 was withdrawn because some new features were not backward compatible; it was replaced by patch 3.51.3 and later re-released as 3.53.0.) The SQLite release-history page was last updated 2026-03-20.

**(3) Key characteristics.**
- Single-file, serverless, embedded, ACID-compliant, public-domain.
- Supports recursive common table expressions (`WITH RECURSIVE`) since version 3.8.3 (2014).
- Flexible/dynamic typing; supports `TEXT` primary keys and `WITHOUT ROWID` tables.
- JSON support (`json`/`jsonb` functions); FTS5 full-text search; build dependencies reduced to just a C compiler and make as of recent releases.

**(4) Capability match.** Recursive CTEs allow traversal of adjacency-list trees (parent_id references). A `TEXT` column can serve as a primary key, so a ternary address like `"211.mvv.gdd.coo.0815"` can be used directly as a key. For a tree of 27–39 nodes, performance is effectively instantaneous — far below any scale where SQLite query planning matters. Supports the hybrid file+DB pattern: store markdown/HTML content as files on disk and keep addresses, metadata, and parent/child links as rows (with paths or foreign keys) in a SQLite metadata store.

**(5) Sources.**
- Release History Of SQLite — https://sqlite.org/changes.html
- Recent SQLite News — https://sqlite.org/news.html
- SQLite Release 3.51.0 — https://sqlite.org/releaselog/3_51_0.html
- History Of SQLite Releases (chronology) — https://sqlite.org/chronology.html

### 2. DuckDB
**(1) What it is.** DuckDB is an in-process (embedded), serverless analytical SQL database management system — frequently described as "the SQLite for analytics." It runs columnar-vectorized OLAP queries inside the host process and natively reads Parquet, CSV, JSON, and Arrow.

**(2) Maturity.** Stable and very actively developed. DuckDB reached 1.0 in 2024; the 1.4.x line is the current Long-Term Support (LTS) series (1.4.0 LTS, 1.4.3 LTS announced 2025-12-09). Version 1.5.0 ("Variegata") was released 2026-03-09 as the current (non-LTS) release. Starting with 1.4, every other DuckDB version is an LTS release supported for one year.

**(3) Key characteristics.**
- In-process/embedded, columnar storage, vectorized execution; optimized for analytical (OLAP) workloads.
- Documents `WITH RECURSIVE` CTEs; the official docs state recursive CTEs can be used to traverse trees and arbitrary graphs (with cycle detection). DuckDB's docs state verbatim "WITH RECURSIVE can be used to traverse trees" and "The WITH RECURSIVE clause can be used to express graph traversal on arbitrary graphs." The 1.5 line also documents `USING KEY` recursive CTEs.
- Native multi-format ingestion (Parquet/CSV/JSON/Arrow); 1.4 added AES-256 encryption, MERGE statements, Iceberg writes.
- 1.5.0 added a VARIANT type, a built-in GEOMETRY type, an opt-in PEG parser, and a reworked CLI.

**(4) Capability match.** Like SQLite, DuckDB supports recursive CTEs for tree traversal and accepts arbitrary text keys. It differs from SQLite by being analytical/columnar rather than row-oriented OLTP — optimized for scans/aggregations over large data, not high-frequency small writes. For a 27–39 node tree it is heavily over-provisioned; its advantages (columnar scan speed, Parquet/Arrow ingestion) are irrelevant at that scale, though its direct querying of files on disk could suit a file+metadata hybrid.

**(5) Sources.**
- Announcing DuckDB 1.5.0 — https://duckdb.org/2026/03/09/announcing-duckdb-150
- Announcing DuckDB 1.4.3 LTS — https://duckdb.org/2025/12/09/announcing-duckdb-143
- DuckDB | endoflife.date — https://endoflife.date/duckdb
- WITH Clause (recursive CTE docs) — https://duckdb.org/docs/stable/sql/query_syntax/with
- Releases · duckdb/duckdb — https://github.com/duckdb/duckdb/releases

### 3. Neo4j
**(1) What it is.** Neo4j is a native graph database that stores data as nodes and relationships (a labeled property graph) and queries it with the Cypher query language. It is primarily a server-based DBMS (Community and Enterprise editions).

**(2) Maturity.** Stable, mature, commercially dominant — Neo4j's own May 7, 2025 press release states it "is used by 84% of Fortune 100 companies and 58% of the Fortune 500, including Adobe, BT Group, Novo Nordisk, and UBS." In 2025 Neo4j switched to calendar versioning (YYYY.MM), beginning with 2025.01; releases are roughly monthly, with LTS checkpoints every ~18–24 months (5.26 was the prior LTS).

**(3) Key characteristics.**
- Native labeled-property-graph storage; ACID transactions; Cypher query language.
- As of 2025.06, Cypher is decoupled from the server and versioned independently: Cypher 5 (frozen) and Cypher 25 (evolving). From 2026.02 the distributed config defaults to Cypher 25.
- Editions: Community (single-instance) and Enterprise (clustering, RBAC, backup); a browser-based Neo4j Browser is bundled.
- Embedded use: Neo4j can run embedded in a JVM application (the embedded Java API exists), but the product is overwhelmingly documented and operated as a server.

**(4) Capability match.** Trees are a trivial special case of a property graph: nodes plus `PARENT_OF`/`CHILD_OF` relationships, with Cypher handling variable-length path traversal natively. A ternary string address fits as a node property (and can be indexed/uniqueness-constrained). For 27–39 nodes the data is microscopic relative to Neo4j's design point (it targets very large graphs); running a JVM server for a few dozen nodes is heavyweight. Hybrid file+metadata: content stays in files, node metadata + address keys live in Neo4j.

**(5) Sources.**
- Select Cypher version — https://neo4j.com/docs/cypher-manual/current/queries/select-version/
- Cypher Versioning (blog) — https://neo4j.com/blog/developer/cypher-versioning/
- Introduction - Operations Manual — https://neo4j.com/docs/operations-manual/current/introduction/
- Introduction - Upgrade and Migration Guide (CalVer) — https://neo4j.com/docs/upgrade-migration-guide/current/
- Neo4j Launches Industry's First Graph Analytics Offering (PR, May 7 2025) — prnewswire.com

### 4. Kuzu (kuzudb)
**(1) What it is.** Kuzu was an embedded (in-process, serverless) property-graph database implementing the Cypher query language, using columnar storage and vectorized execution — frequently called "the DuckDB of graph databases." It supported full-text search, vector indices, and WebAssembly bindings for in-browser use.

**(2) Maturity.** **Abandoned / archived.** The GitHub repository was archived on October 10, 2025 with the note "Kuzu is working on something new! We will no longer be actively supporting KuzuDB." The last PyPI release (kuzu 0.11.3) was released Oct 10, 2025; the last functional/feature release was 0.11.0 (July 2025), which moved to a single-file format. Per the EU Digital Markets Act filing reported by AppleInsider (Feb 11, 2026) and BetaKit, "On Oct. 9, 2025, Apple struck an agreement to buy all shares and hire select employees of Kuzu." Kuzu "was founded in Ontario in 2023 and had approximately ten employees at the time of the acquisition" (AppleInsider); it began as a research project led by Prof. Semih Salihoğlu of the University of Waterloo's Cheriton School of Computer Science. Community forks have appeared (e.g., "bighorn" by Kineviz, and a "Ladybug"/LadybugDB effort).

**(3) Key characteristics.**
- Embedded, in-process, serverless; columnar storage + vectorized processing; worst-case-optimal join algorithms (Waterloo research lineage).
- Property graph model + Cypher; native multi-format ingestion (Parquet/Arrow/CSV/JSON); WASM (in-browser) bindings.
- Documented concern: the on-disk storage format was never stabilized — users had to export/re-import data across releases. Moved to a single `data.kz` file in v0.11.0.

**(4) Capability match.** As an embedded Cypher graph database it could store trees and traverse them with Cypher, with WASM enabling in-browser/web embedding, and string addresses fitting as node properties. **However, project status (archived/abandoned) is a documented fact that bears directly on any adoption decision** — no new releases are expected. Reported here as a status fact, not a recommendation.

**(5) Sources.**
- GitHub - kuzudb/kuzu — https://github.com/kuzudb/kuzu
- kuzu · PyPI — https://pypi.org/project/kuzu/
- KuzuDB graph database abandoned (The Register, 2025-10-14) — https://www.theregister.com/2025/10/14/kuzudb_abandoned/
- Why has Apple bought a database company? (AppleInsider, Feb 11 2026) — https://appleinsider.com/articles/26/02/11/faster-more-flexible-databases-could-be-coming-to-filemaker-or-iwork
- Kuzu's Legacy and the New Wave of Embedded Graph Databases (gdotv) — https://gdotv.com/blog/kuzu-legacy-embedded-graph-database-landscape/

### 5. Tree-in-SQL patterns
**(1) What it is.** A family of four canonical relational-modeling patterns for representing hierarchical/tree data in SQL tables. **These are stable design patterns, not versioned software** — they have no version numbers and do not change. They are documented in the literature, notably Bill Karwin's *SQL Antipatterns* (the "Naive Trees" chapter) and Joe Celko's *Trees and Hierarchies in SQL for Smarties* (which popularized the nested-set model).

**(2) Maturity.** Stable, long-established patterns (decades old). Not software; not versioned.

**(3) Key characteristics (the four patterns and tradeoffs as the literature describes them).**
- **Adjacency list:** each row stores a `parent_id` pointing to its parent. Simplest model; cheap inserts/moves/deletes; finding a subtree/ancestry traditionally required recursion (now handled by recursive CTEs). Best for reading/modifying small slices of the tree. Karwin notes recursive queries are needed for deep traversal.
- **Materialized path (a.k.a. path enumeration / lineage column):** each node stores the full path of ancestor identifiers as a string (e.g., `/1/4/9/`, like a UNIX filename). Fast reads via string prefix matching (`LIKE '/1/4/%'`); simple; flexible updates. Downsides: path-length limits, string parsing, and integrity not enforced by the DB.
- **Nested set (a.k.a. modified preorder tree traversal):** each node stores left/right boundary numbers assigned by a tree walk; descendants are those whose bounds fall between a node's bounds. Efficient subtree/ancestor reads without recursion; but inserts/moves are expensive because many boundary values must be renumbered. First described in depth by Celko.
- **Closure table (a.k.a. bridge table):** a separate table stores every ancestor→descendant pair (often with depth). Optimal ancestor/descendant/level queries and referential integrity; cost is storage growth and write overhead (adding/moving nodes requires inserting/copying many path rows). Subtree moves are nontrivial in both closure tables and nested sets.

**(4) Capability match.** Directly addresses tree-structured data in any SQL store (SQLite/DuckDB). For dotted ternary addresses like `"211.mvv.gdd.coo.0815"`, the **materialized-path** model is the natural fit — the address *is itself* effectively a materialized path, so prefix queries find subtrees. For a tiny tree (27–39 nodes) all four patterns are trivially performant; the choice is about query ergonomics and write patterns, not performance. Custom string addresses serve as keys most directly under materialized path/adjacency list.

**(5) Sources.**
- Storing Hierarchical Data in Relational Databases with SQL — https://adamdjellouli.com/articles/databases_notes/03_sql/09_hierarchical_data
- Mastering SQL Trees (Adjacency/Nested Sets/Closure) — https://teddysmith.io/sql-trees/
- Moving Subtrees in Closure Table Hierarchies (Karwin Q&A, Percona) — https://www.percona.com/blog/moving-subtrees-in-closure-table/
- Options for Storing Hierarchical Data (overview referencing Celko) — http://jhjguxin.github.io/blog/2012/04/13/what-are-the-options-for-storing-hierarchical-fen-ceng-data-in-a-relational-database/
- Nested Intervals Tree Encoding with Continued Fractions (Tropashko, arXiv, references Celko) — https://arxiv.org/pdf/cs/0402051

### 6. ORM (Object-Relational Mapping)
**(1) What it is.** An ORM is a technique/library that maps database tables and rows to programming-language classes and objects, so developers manipulate persistent data as objects rather than writing raw SQL. SQLAlchemy is the canonical Python example, offering both "declarative" mapping (class attributes define the schema) and "imperative"/"classical" mapping (a separately constructed `Table` is mapped to a plain class via `registry.map_imperatively()`).

**(2) Maturity.** Stable, mature category. SQLAlchemy is at the 2.x generation (2.0 with type-hinting overhaul; 2.1 in documentation), with both mapping styles unified internally since 1.4.

**(3) Key characteristics / documented discussion of when ORMs help vs. fight custom schemas.**
- SQLAlchemy documents two mapping styles: **declarative** (recommended, schema defined on the class) and **imperative** (a `Table`/`FromClause` mapped to an unmodified class).
- The SQLAlchemy maintainer (community discussions) states the imperative style was retained specifically because many users prefer it; it shines when the domain classes are independent of persistence (Domain-Driven Design) or when mapping to a pre-existing database the developer doesn't control.
- Documented critique from the community: with an existing/non-standard database whose schema doesn't match domain objects, the declarative style can force "hundreds of DTOs and factories," whereas imperative mapping (or SQLAlchemy Core) handles odd schemas more directly. SQLAlchemy also documents mapping classes to reflected tables, joins, and subqueries; `automap` auto-generates classes from a schema but is described as best for zero-config querying, not for cases where "you want things to look a certain way."

**(4) Capability match.** An ORM can model tree node entities and their relationships (self-referential `parent_id` for adjacency lists) and can use a custom string address as the mapped primary key. The documented tension is relevant to a non-standard/custom schema (ternary string addresses, hybrid file+DB): the literature indicates imperative mapping or Core is the documented path when the schema deviates from ORM conventions, rather than fighting declarative defaults.

**(5) Sources.**
- ORM Mapped Class Overview (mapping styles) — https://docs.sqlalchemy.org/en/20/orm/mapping_styles.html
- Imperative vs Declarative mapping in DDD (Discussion #9180) — https://github.com/sqlalchemy/sqlalchemy/discussions/9180
- "Too many ways to define ORM mapping" (Discussion #9320) — https://github.com/sqlalchemy/sqlalchemy/discussions/9320
- Table Configuration with Declarative (reflected tables/automap) — https://docs.sqlalchemy.org/en/14/orm/declarative_tables.html

### 7. ERD (Entity-Relationship Diagram) vocabulary
**(1) What it is.** ERD vocabulary is the standardized set of terms and notations for modeling data structure: entities, attributes, relationships, cardinality, and the widely used crow's-foot notation. It is a modeling vocabulary/convention, not software.

**(2) Maturity.** Stable, decades-old conventions. Crow's-foot notation originated in a 1976 paper by Gordon Everest (also called Information Engineering notation). Not versioned.

**(3) Key characteristics / precise definitions.**
- **Entity:** a thing about which data is stored (e.g., Customer, Order); drawn as a rectangle. In crow's-foot notation, attributes are listed inside the rectangle (not as separate ovals — that is Chen notation).
- **Attribute:** a property/column of an entity, listed inside the entity box; keys flagged PK (primary key), FK (foreign key), CPK (composite primary key).
- **Relationship:** a connection between entities, drawn as a line between rectangles; the end symbols encode cardinality and optionality.
- **Cardinality (maximum):** the maximum number of instances of one entity associated with an instance of another — a single bar `|` means "one"; the three-pronged "crow's foot" means "many." The symbol closest to the entity indicates maximum cardinality.
- **Optionality / minimum cardinality (modality):** an open circle `○` means zero is allowed (optional); a bar `|` means at least one (mandatory). The symbol farther from the entity indicates the minimum.
- **Crow's-foot notation:** entities as rectangles, relationship lines with paired end symbols (inner = minimum/optionality, outer = maximum/cardinality), reading each end independently (e.g., `|—○<` = "one to zero-or-many"). Many-to-many relationships are modeled with an associative/junction entity rather than a direct line.

**(4) Capability match.** ERD vocabulary is the standard way to *describe* the schema of a tree/hierarchical store: a self-referential one-to-many relationship (one parent node to many child nodes) with the address as a key attribute models a ternary tree. It is documentation/notation, not a runtime capability; it bears on the context as the means to specify entities (nodes), attributes (address, metadata), and the parent-child relationship with cardinality.

**(5) Sources.**
- Crow's Foot Notation Guide — https://www.relationaldbdesign.com/database-design/module7/crows-foot-notation.php
- Crow's Foot ERD: Entities, Attributes, and Keys — https://www.relationaldbdesign.com/database-design/module7/entity-attribute-relationship.php
- ERD alternatives and variations (Everest 1976 origin) — https://runestone.academy/ns/books/published/practical_db/PART2_DATA_MODELING/04-other-notations/other-notations.html
- ER Diagram Symbols and Notation (Lucidchart) — https://www.lucidchart.com/blog/er-diagram-symbols-and-notation
- Crow's foot notation in ERDs (Gleek) — https://www.gleek.io/blog/crows-foot-notation

---

## SECTION 0.1 — Math Tooling

> **Critical SE(4) finding (applies to every tool in this section):** No tool surveyed documents SE(4), 5×5 homogeneous matrices, or higher-dimensional special Euclidean groups as named/explicit constructs. Documentation universally covers SE(3)/SO(3) (4×4 homogeneous, 3×3 rotation) and, in some cases, general SO(n)/SE(n) or arbitrary-dimension matrix algebra. The 5×5 SE(4) layer would have to be built on general matrix primitives (SymPy, SageMath, Mathematica, Julia, NumPy) rather than invoked from a documented SE(4) API.

### 1. SymPy
**(1) What it is.** SymPy is a pure-Python library for symbolic mathematics (a computer algebra system, CAS), including symbolic matrix algebra.

**(2) Maturity.** Stable, active. Latest release **1.14.0, released April 27, 2025** (1.13.x was 2024). Requires Python ≥3.9.

**(3) Key characteristics.**
- Symbolic matrices (`Matrix`), symbolic `exp`/`MatrixExp`, determinants, eigenvalues; arbitrary-dimension matrices.
- Has a `liealgebras` module (classical Lie algebras), though it locks the basis for performance (third-party `liesym` extends this with a Rust backend).
- No built-in special-Euclidean-group (SE(n)) class in core. Third-party helpers exist: `SymE3` provides SE(3) exponential-map-at-zero helpers for SymPy; the ROS "sophus" project implements SE(3) (4×4) symbolically using SymPy.

**(4) Capability match.** SymPy can represent and symbolically manipulate matrices of any dimension, including 5×5 homogeneous matrices, and compute matrix products, exponentials, and inverses symbolically — so an SE(4) layer can be *constructed* in SymPy from general matrix primitives. **SE(4) itself is not a documented construct;** documented/third-party Lie-group support targets SE(3). Interop: pure Python; integrates with NumPy/SciPy (lambdify) and the broader Python stack.

**(5) Sources.**
- sympy · PyPI (1.14.0, Apr 27 2025) — https://pypi.org/project/sympy/
- List of active deprecations — SymPy 1.14.0 docs — https://docs.sympy.org/latest/explanation/active-deprecations.html
- SymE3: SE(3) exponential map helper for SymPy — https://github.com/mp3guy/SymE3
- sophus se3.py (SymPy-based SE(3)) — http://docs.ros.org/en/noetic/api/sophus/html/se3_8py_source.html
- liesym (Lie algebras using SymPy) — https://github.com/npapapietro/liesym

### 2. SageMath
**(1) What it is.** SageMath is a comprehensive open-source mathematics system that integrates many packages (including SymPy, GAP, PARI) under a unified Python interface; it has extensive group-theory functionality.

**(2) Maturity.** Stable, active. Reference documentation versioned at **10.8 (The Sage Development Team, dated Dec 23, 2025)**.

**(3) Key characteristics.**
- Extensive group theory: the Groups reference manual documents, among others, `groups.affine.Euclidean` (Euclidean group) and a Lie Groups section (`groups.lie.*`, e.g., `groups.lie.Nilpotent`).
- Strong Lie-theory/root-system machinery (Weyl groups, Cartan types, `WeylCharacterRing`, reducible types like "A1xA1").
- General matrix algebra over arbitrary rings/fields.

**(4) Capability match.** Sage documents a Euclidean group construction (`groups.affine.Euclidean`) and Lie group entries, plus general matrix algebra, so it can represent affine/Euclidean transforms and arbitrary-dimension matrices. **A specifically named SE(4) / 5×5 homogeneous special-Euclidean construct is not documented;** what is documented is general Euclidean/affine group support and Lie-theory tooling into which such matrices can be expressed. Interop: Python-based.

**(5) Sources.**
- Groups (Release 10.8, Dec 23 2025) — https://doc.sagemath.org/pdf/en/reference/groups/groups.pdf
- Lie basics thematic tutorial — https://github.com/sagemath/sage/blob/develop/src/doc/en/thematic_tutorials/lie/lie_basics.rst

### 3. Mathematica / Wolfram Language
**(1) What it is.** Mathematica (the Wolfram Language) is a proprietary computational system spanning symbolic and numeric mathematics, including matrix algebra and geometric transformations.

**(2) Maturity.** Stable, commercial, active. `RotationMatrix` and `EulerMatrix` documentation pages were "Updated in 2024 (14.0)," and the "Summary of New Features in 14.0" documents matrix-constructor changes — placing the current generation at version 14.x. (A specific current point release beyond 14.0 was not verified in the sources gathered — flagged.)

**(3) Key characteristics.**
- `RotationMatrix` produces 2D and 3D rotation matrices and, for the general case, "an orthogonal matrix of determinant 1, that in n dimensions can be considered an element of the group SO(n)" — explicit general SO(n) framing.
- `RotationMatrix[{u,v}]` rotates one vector to another "in any dimension."
- `EulerMatrix`, `RollPitchYawMatrix`, `RotationTransform`, `GeometricTransformation`, `ReflectionMatrix`, `ScalingMatrix`; `MatrixExp` for matrix exponentials; `TargetStructure` option (14.0) for structured (e.g., orthogonal) matrices.

**(4) Capability match.** Documents general SO(n) rotation matrices "in any dimension" and full symbolic+numeric matrix algebra (including `MatrixExp`), so 5×5 homogeneous matrices and an SE(4)-style construction are expressible from general primitives and general n-dimensional rotation support. **SE(4) as a named special-Euclidean group is not a documented function;** the documentation explicitly names SO(n) generality and homogeneous/affine transforms. Interop: Wolfram Language; can call out to / be called from external languages but is its own ecosystem.

**(5) Sources.**
- RotationMatrix — Wolfram Language Documentation — https://reference.wolfram.com/language/ref/RotationMatrix.html
- EulerMatrix — Wolfram Language Documentation — https://reference.wolfram.com/language/ref/EulerMatrix.html
- Summary of New and Improved Features in 14.0 — https://reference.wolfram.com/language/guide/SummaryOfNewFeaturesIn140.html

### 4. Julia (Rotations.jl / Manifolds.jl / LieGroups.jl)
**(1) What it is.** Julia is a high-performance language for numeric/scientific computing; the relevant packages are Rotations.jl (rotation representations), Manifolds.jl (Riemannian manifolds incl. group manifolds), and the dedicated LieGroups.jl (Lie groups, part of JuliaManifolds).

**(2) Maturity.** Active ecosystem. LieGroups.jl docs were generated with Documenter.jl 1.16.1 on Nov 27, 2025 (Julia 1.11.7), indicating current maintenance. Manifolds.jl is actively maintained; TransformUtils.jl (an older Lie/quaternion package) notes SO(3) complete and "SE(3) mostly complete" but is being consolidated into JuliaManifolds.

**(3) Key characteristics.**
- **LieGroups.jl** documents the `SpecialEuclideanGroup` and uses generic **SE(n)** notation: it defines the group action for `g = (R, t) ∈ SE(n)` and describes elements as `(n+1)×(n+1)` matrices in homogeneous coordinates. It documents `SpecialOrthogonal`/`SO(n)` as well.
- **Manifolds.jl** documents `SpecialEuclidean(2)`, `SpecialEuclidean(3)`, the `Rotations` manifold (SO(n) of n×n orthogonal det-1 matrices), and group actions.
- **Rotations.jl** supports rotation type conversions; **TransformUtils.jl** includes SO(3)/SE(3) exp/log maps and Jacobians.

**(4) Capability match.** **This is the closest any surveyed tool comes to SE(4):** LieGroups.jl documents SE(n) *generically* (with `(n+1)×(n+1)` homogeneous matrices and SO(n)), so SE(4) — a 5×5 homogeneous representation — falls within the documented general SE(n)/SO(n) framework, even though SE(4) is not specifically called out with worked examples (documented examples use SE(2)/SE(3)). Interop: native Julia; high-performance numeric. Whether SE(4) is fully exercised/tested vs. SE(2)/SE(3) cannot be verified from the docs reviewed — flagged.

**(5) Sources.**
- Special Euclidean group · LieGroups.jl (SE(n), (n+1)×(n+1)) — https://juliamanifolds.github.io/LieGroups.jl/stable/groups/special_euclidean_group/
- Rotations · Manifolds.jl (SO(n)) — https://docs.juliahub.com/Manifolds/H884l/0.3.11/manifolds/rotations.html
- Group manifold · Manifolds.jl — https://juliamanifolds.github.io/Manifolds.jl/v0.5/manifolds/group.html
- Using Manifolds.jl · Caesar.jl (SpecialEuclidean(2)/(3)) — https://juliarobotics.org/Caesar.jl/latest/concepts/using_manifolds/
- TransformUtils.jl — https://github.com/dehann/TransformUtils.jl

### 5. NumPy / SciPy
**(1) What it is.** NumPy is the foundational Python n-dimensional array/matrix library; SciPy builds scientific routines on top, including `scipy.spatial.transform.Rotation` for 3D rotations.

**(2) Maturity.** Stable, foundational, active. SciPy documentation reviewed at v1.17.0 (current manual). `Rotation` has existed since SciPy 1.2.0; `as_matrix` since 1.4.0.

**(3) Key characteristics.**
- NumPy: general n-dimensional arrays, `numpy.linalg` (solve, inv, eig, norm, etc.); arbitrary-dimension matrix algebra.
- SciPy `scipy.spatial.transform.Rotation`: **explicitly "Rotation in 3 dimensions"** — initializes from quaternions, rotation matrices (3×3 orthogonal, det +1), rotation vectors, Modified Rodrigues Parameters, Euler angles, Davenport angles; supports composition, inversion, application to vectors, and stacks of rotations.
- SciPy also documents rigid transforms (rotation + translation) in `scipy.spatial.transform` (i.e., SE(3)-style rigid transforms in 3D).

**(4) Capability match.** SciPy's `Rotation`/transform module is **explicitly 3D only** (SO(3)/SE(3)) — it does not generalize to SE(4)/4D rotations. NumPy, however, provides general n-dimensional matrix algebra, so 5×5 homogeneous SE(4) matrices can be implemented as plain NumPy arrays with `@` matrix multiplication and `numpy.linalg` — but with no special-Euclidean semantics provided. **SE(4) is not documented;** SciPy documents 3D rotations specifically. Interop: core of the Python scientific stack.

**(5) Sources.**
- Rotation — SciPy v1.17.0 Manual (3 dimensions) — https://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.transform.Rotation.html
- Spatial Transformations (scipy.spatial.transform) — https://docs.scipy.org/doc/scipy/reference/spatial.transform.html
- Rotation.as_matrix (3×3, det +1) — https://docs.scipy.org/doc/scipy-1.12.0/reference/generated/scipy.spatial.transform.Rotation.as_matrix.html

### 6. JAX / Numba
**(1) What it is.** JAX is a Google library for accelerator-oriented (GPU/TPU) array computation with autodiff and JIT (XLA); Numba is an LLVM-based JIT compiler that accelerates a subset of Python/NumPy code.

**(2) Maturity.** Both stable and active. JAX current version **0.10.0 (released April 16, 2026)** (jaxlib 0.10.1). Numba latest **0.65.1 (April 24, 2026)** (0.65.0 Apr 1, 2026; 0.64.0 Feb 2026 added NumPy 2.4 support; 0.63.0 added Python 3.14 and free-threading support).

**(3) Key characteristics.**
- JAX documents `jax.numpy.linalg` and `jax.scipy.linalg` as NumPy/SciPy-style linear algebra over general arrays and batched (stacks of) matrices (solve, inv, eig/eigh, qr, norm, etc.); 0.10.0 added matrix constructors (Hadamard, circulant, dft, companion, etc.). JAX also mirrors SciPy's `Rotation` via `jax.scipy.spatial.transform.Rotation` — again **3D rotations only**.
- Numba documents JIT compilation of Python/NumPy array and matrix operations to machine code via LLVM; recent releases track NumPy 2.4 and Python 3.14 / free-threading.

**(4) Capability match.** Both provide general n-dimensional/NumPy-style matrix algebra that could host 5×5 SE(4) matrices as plain arrays, with JIT/GPU acceleration. **Neither documents any SE(3)/SE(4)/Lie-group functionality in core** (JAX's only rotation helper is the 3D `Rotation` mirror of SciPy; Numba has no Lie-group features). SE(4) is not documented. Interop: JAX is Python/NumPy-compatible (XLA backends); Numba accelerates Python/NumPy in place.

**(5) Sources.**
- jax.scipy.spatial.transform.Rotation (3D) — https://docs.jax.dev/en/latest/_autosummary/jax.scipy.spatial.transform.Rotation.html
- Releases · jax-ml/jax (0.10.0, Apr 16 2026) — https://github.com/jax-ml/jax/releases
- jax.numpy.linalg.solve (batched linear systems) — https://docs.jax.dev/en/latest/_autosummary/jax.numpy.linalg.solve.html
- numba · PyPI (0.65.1, Apr 24 2026) — https://pypi.org/project/numba/
- Numba 0.63.0 release notes — https://numba.readthedocs.io/en/latest/release/0.63.0-notes.html

### 7. GeoGebra / Desmos
**(1) What it is.** GeoGebra and Desmos are interactive, web-based math exploration tools (graphing/geometry). GeoGebra documents matrices and transformations; Desmos provides matrix algebra in a separate Matrix Calculator tool.

**(2) Maturity.** Both are stable, continuously-updated web software. GeoGebra has no single prominent version number (continuously updated suite). Desmos's public API is at v1.12 (3D Calculator API v1.13), with new stable API versions released annually in April.

**(3) Key characteristics.**
- **GeoGebra:** documents real matrices as lists of lists (e.g., `{{1,2,3},{4,5,6},{7,8,9}}` is a 3×3 matrix); supports matrix multiplication, `Determinant`, `ReducedRowEchelonForm`, and `ApplyMatrix[Matrix, Object]` for affine transforms. Documents homogeneous coordinates *specifically for the 2D affine case*: "(x, y, 1) for a point and (x, y, 0) for a vector" with 3×3 matrices. Web-embeddable via iframe (Share → Embed) and via the Math Apps Embedding / JavaScript Apps API.
- **Desmos:** the **graphing calculator does NOT have first-class matrix support**; matrix algebra (multiplication, rref, solving systems) lives in a separate **Matrix Calculator** tool. Embeddable via the Desmos API (`Desmos.GraphingCalculator(elt)`, etc.); the Matrix tool is available to Desmos API partners.

**(4) Capability match.** Both are interactive and web-embeddable (GeoGebra via iframe/Apps API; Desmos via its API). On matrix-group algebra: GeoGebra documents matrices and **only 2D affine transforms via 3×3 homogeneous coordinates** — no higher-dimensional or SE(n) support. Desmos offers only basic matrix operations in its Matrix Calculator, with the graphing calculator lacking first-class matrices. **Neither documents SE(3)/SE(4), 5×5 homogeneous matrices, or higher-dimensional special Euclidean groups.** Their relevance to the context is as web/canvas-embeddable interactive surfaces, not as an SE(4) algebra engine.

**(5) Sources.**
- Matrices — GeoGebra Manual — https://wiki.geogebra.org/en/Matrices
- Material Embedding (Iframe) — GeoGebra — https://wiki.geogebra.org/en/Reference:Material_Embedding_(Iframe)
- Desmos Matrix Calculator (Help Center) — https://help.desmos.com/hc/en-us/articles/4404851938445-Matrix-Calculator
- Desmos API — https://www.desmos.com/api

---

## SECTION 0.2 — Graph & Structure Tools

### 1. NetworkX
**(1) What it is.** NetworkX is a pure-Python library for the creation, manipulation, and study of graphs/networks, with extensive algorithms and basic drawing/layout.

**(2) Maturity.** Stable, active. Current documentation at **3.6.1** (reference pages dated Dec 8, 2025); 3.5 and 3.6 release notes are recent.

**(3) Key characteristics.**
- Dedicated tree module: recognition (`is_tree`, `is_forest`, `is_arborescence`), operations (`join_trees`), coding (nested tuples, Prüfer sequences), and min/max spanning trees/branchings (Edmonds, Kruskal, Prim).
- Layouts (spring/force, etc.); a new draw API (3.5); save layouts on graphs.
- Trees stored as ordinary NetworkX graphs (no enforced tree type).

**(4) Capability match.** Rich algorithmic support for trees, including a small ternary tree of 27–39 nodes (encoding/decoding, traversal, layout). Rendering is via Matplotlib (static images); it is **not itself web-embeddable/interactive** — output would be exported as an image or the graph handed to a web library. Node labels can be arbitrary strings (ternary addresses). Interop: Python; pairs with Matplotlib/Graphviz/Cytoscape.js for visualization.

**(5) Sources.**
- Tree — NetworkX 3.6.1 documentation — https://networkx.org/documentation/stable/reference/algorithms/tree.html
- Reference — NetworkX 3.6.1 — https://networkx.org/documentation/stable/reference/index.html
- Releases · networkx/networkx (3.5, 3.6) — https://github.com/networkx/networkx/releases

### 2. igraph
**(1) What it is.** igraph is a fast graph-analysis library implemented in C with interfaces for Python (python-igraph), R, and Mathematica.

**(2) Maturity.** Stable, active. python-igraph in the 0.11.x series (0.11.8 added Python 3.13 support); C core updated to 1.0.0 in a recent python-igraph release (which auto-aligns most layouts and was the last to support Python 3.9, EOL end of Oct 2025). C core 0.10.x bugfix line also active.

**(3) Key characteristics.**
- High-performance C core; constructs trees from a "parent" vector (added in C/igraph 0.10.3); tree/lattice generators; broad graph algorithms.
- Layouts (including tree/Reingold-Tilford-style and others); plotting via Cairo/Matplotlib.
- Can stream a graph to Gephi via the Gephi Graph Streaming API (`GephiGraphStreamer`).

**(4) Capability match.** Handles tree construction and analysis efficiently; for 27–39 nodes performance is trivial. Provides layouts and static plotting (Cairo/Matplotlib); like NetworkX it is **not inherently web-embeddable** (it can export GraphML/GML/GEXF for web tools, or stream to Gephi). String addresses fit as vertex attributes (`name`). Interop: C/Python/R/Mathematica.

**(5) Sources.**
- igraph – the network analysis package (news/versions) — https://igraph.org/news.html
- Releases · igraph/python-igraph — https://github.com/igraph/python-igraph/releases
- GephiGraphStreamer — https://python.igraph.org/en/0.10.8/api/igraph.remote.gephi.GephiGraphStreamer.html

### 3. Graphviz / DOT
**(1) What it is.** Graphviz is open-source graph-visualization software using the declarative DOT language; the `dot` layout engine specializes in hierarchical/directed (tree-like) layouts.

**(2) Maturity.** Stable, long-established, active. The Python `graphviz` wrapper is at 0.21 (docs); the core Graphviz tool is versioned separately (the command docs reference `dot -V` output; the exact current core version was not verified in the sources gathered — flagged).

**(3) Key characteristics.**
- DOT declarative language (`digraph { a -> b }`); multiple layout engines: `dot` (hierarchical/tree), `neato`/`fdp`/`sfdp` (force/spring), `twopi` (radial), `circo` (circular), `patchwork`/`osage` (treemap/array).
- Wide output formats: SVG, PNG, PDF, PS, JSON, GIF, JPEG, plus image-map formats (`cmapx`, `imap`) for web clickable maps; **SVG is directly embeddable in HTML**.
- Clusters/subgraphs; rich node/edge attributes; HTML-like labels.

**(4) Capability match.** The `dot` engine is purpose-built for hierarchical/tree rendering — ideal for a 27–39 node ternary tree, producing clean top-down layouts. Output is fundamentally **declarative/static**, but SVG output (optionally with client-side image maps) embeds in web pages/HTML; it is not interactive by itself. Ternary addresses work as node IDs/labels. Interop: CLI + many language bindings; QuickChart and others offer a hosted DOT-to-image API.

**(5) Sources.**
- Output Formats | Graphviz — https://graphviz.org/docs/outputs/
- DOT Language | Graphviz — https://graphviz.org/doc/info/lang.html
- dot | Man Page (layout engines) — https://www.mankier.com/1/dot
- User Guide — graphviz 0.21 (Python wrapper) — https://graphviz.readthedocs.io/en/stable/manual.html

### 4. Gephi
**(1) What it is.** Gephi is an interactive desktop GUI application for graph/network visualization and exploration (Java-based).

**(2) Maturity.** Stable, established open-source desktop tool (actively but slowly maintained). A specific current version number was not verified in the sources gathered — flagged.

**(3) Key characteristics.**
- Interactive desktop visualization (layouts, filtering, community detection, metrics).
- Reads/writes standard formats including GEXF (its native XML format), GraphML, GML, CSV.
- Has a Graph Streaming plugin/API (JSON-based) that external tools (igraph, R via rgexf) can stream into; GEXF can be rendered on the web via the gexf-js JavaScript library.

**(4) Capability match.** Designed for interactive *desktop* exploration of networks; well beyond what a 27–39 node tree requires. It is **not itself a web-embeddable library** — web display requires exporting (e.g., GEXF → gexf-js / sigma.js) or using third-party web viewers. Useful as an authoring/exploration GUI rather than an embedded renderer.

**(5) Sources.**
- igraph→Gephi streaming (GephiConnection) — https://igraph.org/python/versions/0.10.1/api/igraph.remote.gephi.GephiConnection.html
- Build, Import, and Export GEXF Graph Files • rgexf (Gephi GEXF, gexf-js/sigmajs) — https://gvegayon.github.io/rgexf/

### 5. Cytoscape / Cytoscape.js
**(1) What it is.** Two independent packages sharing concepts: **Cytoscape** is a Java desktop application for large-scale network analysis/visualization (bioinformatics origin); **Cytoscape.js** is a JavaScript library for interactive network visualization in the browser.

**(2) Maturity.** Both stable and active. Cytoscape desktop is in the 3.10.x series (3.10.x user manual; 2.x desupported since 2016). Cytoscape.js is an actively developed MIT-licensed JS library (created at the University of Toronto; published in Oxford Bioinformatics 2016/2023).

**(3) Key characteristics.**
- **Cytoscape (desktop):** Java app for large-scale analysis; reads SIF, GraphML, XGMML, GML, BioPAX, etc.; can export a session as a Cytoscape.js web app and read/write Cytoscape.js JSON.
- **Cytoscape.js (web):** pure-JS, no plugins; runs on desktop and mobile browsers; built-in gestures (pinch-zoom, pan, box-select); graph-theory algorithms; can run headlessly in Node.js; data exchanged as JSON; requires ES5+/canvas.
- Cytoscape.js is explicitly "a building block for web applications," **not** a complete application.

**(4) Capability match.** **Cytoscape.js is the web-embeddable member** — it embeds directly into a webpage/canvas/iframe and is interactive, suitable for an interactive 27–39 node ternary tree (with layout extensions); node data (incl. string addresses) is carried as JSON. The desktop Cytoscape is an analysis/authoring GUI, not for embedding (though it can export to Cytoscape.js). Interop: Cytoscape.js integrates into JS/HTML apps and Node.js.

**(5) Sources.**
- Cytoscape.js (official) — https://js.cytoscape.org/
- Cytoscape.js and Cytoscape — Cytoscape User Manual 3.10.x — https://manual.cytoscape.org/en/stable/Cytoscape.js_and_Cytoscape.html
- What is Cytoscape? — https://cytoscape.org/what_is_cytoscape.html

### 6. Mermaid
**(1) What it is.** Mermaid is a JavaScript-based, Markdown-inspired text-to-diagram tool: you write a simple text definition in a fenced code block and it renders a diagram (flowcharts, trees, sequence, class, ER, mind maps, and more) as SVG in the browser.

**(2) Maturity.** Stable, very widely adopted, active. Current major line **v11.x**; it is among the most popular text-to-diagram tools — Snyk reports mermaid "has been starred 88,125 times" and "receives a total of 6,679,280 downloads a week" on npm (the mermaid-js GitHub org lists ~88,497 stars). Maintained by Knut Sveidqvist and the Mermaid community.

**(3) Key characteristics.**
- Markdown-friendly: many platforms (GitHub, GitLab) render fenced ```mermaid blocks; GitHub renders them by injecting a sandboxed iframe.
- Diagram types relevant to trees/hierarchy: `flowchart`/`graph` (TD/LR directions, subgraphs, 30+ node shapes), `mindmap` (radial tree), plus a dedicated Tree/Treemap type in the live editor; also class, ER, state, Gantt, etc.
- Renders client-side to SVG; alternate `elk` renderer for larger/complex diagrams (since 9.4); sandboxed-iframe security level for untrusted input. Live editor exports SVG/PNG.

**(4) Capability match.** **The most natural fit for rendering a small ternary tree inside markdown + standalone HTML**: a 27–39 node tree is well within Mermaid's comfortable range (the guide suggests subgraphs once a flowchart exceeds ~10–15 nodes for readability), written as a `flowchart TD` or `mindmap`. It renders inline in markdown and in HTML (via mermaid.js), and is iframe-friendly (GitHub uses an iframe). Node labels carry arbitrary text such as ternary addresses. It is text/declarative; interactivity is limited compared to Cytoscape.js, but it requires no build pipeline — directly matching the "markdown + standalone HTML, no build pipeline" context.

**(5) Sources.**
- Mermaid | Diagramming and charting tool — https://mermaid.js.org/
- Flowcharts Syntax | Mermaid — https://mermaid.ai/open-source/syntax/flowchart.html
- Include diagrams in your Markdown files with Mermaid (GitHub Blog, iframe rendering) — https://github.blog/developer-skills/github/include-diagrams-markdown-files-mermaid/
- GitHub - mermaid-js/mermaid — https://github.com/mermaid-js/mermaid
- mermaid npm package stats (Snyk Advisor) — https://security.snyk.io/package/npm/mermaid

---

## Recommendations (next factual checks for the reader)
This is a compilation, not a recommendation exercise; the items below are gaps to verify, not endorsements.
- **Confirm exact current version numbers** that could not be fully pinned here: Gephi's current release; the core Graphviz version (`dot -V`) as distinct from the Python `graphviz` 0.21 wrapper; the current Mathematica point release beyond 14.0; and Mermaid's exact latest v11.x patch. Threshold to revisit: if a tool's last release predates ~2024, re-check maintenance status.
- **Treat SE(4) as unsupported-by-default everywhere.** If a documented SE(4)/5×5 special-Euclidean construct is required, the closest documented general frameworks are Julia's LieGroups.jl (generic SE(n)/SO(n) with (n+1)×(n+1) homogeneous matrices), SymPy/SageMath/Mathematica (general symbolic n-dimensional matrices), and NumPy (general numeric arrays) — in all cases the SE(4) layer is *built*, not invoked from a named API. Re-evaluate if any library publishes explicit SE(n>3) examples/tests.
- **For the specific context** (ternary-addressed flat-file tree of 27–39 nodes; markdown + HTML; no DB, no build pipeline): the documented facts indicate the lightest-weight matches are SQLite (embedded metadata store with TEXT keys + recursive CTEs), the materialized-path tree pattern (mirrors dotted ternary addresses), and Mermaid (in-markdown tree rendering, no build step); Cytoscape.js/Graphviz-SVG are the documented options if interactive or richer static web rendering is needed.

## Caveats
- **SE(4) is undocumented across all surveyed tools.** Every "capability match" for SE(4) reflects *general* matrix/SE(n) machinery into which 5×5 matrices can be placed, not a named SE(4) feature. Where only SE(3)/SO(3) is documented (SciPy, JAX rotation helper, GeoGebra's 2D affine), this is stated explicitly.
- **Kuzu status:** archived/abandoned (Oct 2025); Apple agreed on Oct. 9, 2025 to acquire all shares and hire select employees. Included for completeness as the task requested, with status flagged. Forks (bighorn, Ladybug) are nascent and unverified for maturity.
- **Version verification gaps (flagged):** Gephi current version, the standalone Graphviz core version, and the current Mathematica point release (placed at 14.x from documentation "Updated in 2024 (14.0)" labels rather than a confirmed latest point release) were not verified in the gathered sources. GeoGebra has no single suite version number.
- **Source quality:** Version/maturity and capability claims are anchored to official docs/repos (sqlite.org, duckdb.org, neo4j.com, github.com, sympy.org, sagemath.org, wolfram.com, scipy.org, jax.dev, numba docs, networkx.org, igraph.org, graphviz.org, cytoscape.org, mermaid.js.org) plus reputable secondary reporting (The Register, AppleInsider, BetaKit) for the Kuzu abandonment/acquisition and Neo4j's own press release for the Fortune-100 adoption figure. The Kuzu acquisition rests on an EU DMA filing as reported secondhand; treat the acquisition specifics as reported-not-primary.
- This compilation deliberately does not rank or recommend tools beyond mapping documented capabilities to the stated context, per the task's search-and-compile scope.