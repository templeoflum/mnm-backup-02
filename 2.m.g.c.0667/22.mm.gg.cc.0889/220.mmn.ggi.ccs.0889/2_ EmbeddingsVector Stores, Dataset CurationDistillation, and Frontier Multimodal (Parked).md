# DIVE 2 — CONFIGURATION: Embeddings/Vector Stores, Dataset Curation/Distillation, and Frontier Multimodal (Parked)

A landscape compilation by target, current as of June 8, 2026. This reports what sources SAY about each tool/method — version, maturity, documented capabilities — without ranking, evaluating, or recommending. Where a version cannot be verified, a capability is undocumented, or a claim is marketing-vs-measured, it is flagged explicitly.

## TL;DR
- **Section 2.0 (Embeddings & vector stores)** is fully mature and stable: sentence-transformers (5.5.1), FAISS (1.13.2 CPU / 1.14.x GPU), and ChromaDB (Rust-core 1.5.x) are all production-grade. ChromaDB provides native metadata `where`-clause filtering; FAISS provides only ID-predicate filtering; and a small corpus (<1000 docs) is, per FAISS's own guidelines, the trivially-handled "Flat" exact-search case for any of them.
- **Section 2.1 (Dataset curation & distillation)** is split: scikit-learn (1.8.0 stable) and the classic clustering algorithms are mature and well-documented; dataset distillation and knowledge distillation are active research areas (2023–2026 surveys) primarily benchmarked on images/large models, not <1000-doc text corpora; the LIMA "less is more" curated-set thesis has spawned active 2024–2026 successors (LIMO, MIG, MM-LIMA).
- **Section 2.2 (Frontier multimodal, PARKED)** is mostly research-demo with deployed exceptions: joint audio-video diffusion (JavisDiT; MMDiT lineage) is research-demo with MEASURED synchronization metrics; unified single-tower architectures are overwhelmingly research papers (with GPT-4o/Gemini as closed deployed exemplars); structured control (ControlNet lineage) shows MEASURED improvements in successor papers. Deployed text-to-video-with-audio products (Sora 2, Veo 3.1) exist but are closed black-box services that do not disclose architecture or AV-sync benchmarks.

---

# SECTION 2.0 — EMBEDDINGS & VECTOR STORES

## 2.0.1 — sentence-transformers (SBERT framework)

**What it is.** sentence-transformers (a.k.a. SBERT) is a Python framework for computing dense vector embeddings from text (and now images, audio, video) using transformer networks, plus calculating similarity scores with Cross-Encoder rerankers and generating sparse embeddings with Sparse Encoders. It provides a one-line `model.encode()` API and a `model.similarity()` API. Originally created in 2019 by Nils Reimers at the UKP Lab (TU Darmstadt) under Iryna Gurevych.

**Maturity.** Stable / actively developed. PyPI classifier is "5 - Production/Stable." Latest version **5.5.1, released May 20, 2026** (5.5.0 May 12, 2026; 5.0.0 July 1, 2025). Requires Python ≥3.10. Apache-2.0 license. As of October 2025, the project formally joined Hugging Face (maintainer Tom Aarsen), having previously been a UKP Lab project; it remains community-driven and open-source.

**Key characteristics (documented).**
- Per the official README, "A wide selection of over 15,000 pre-trained Sentence Transformers models are available for immediate use on 🤗 Hugging Face, including many of the state-of-the-art models from the Massive Text Embeddings Benchmark (MTEB) leaderboard." (The HF Hub `sentence-transformers` library filter shows ~20,500 models tagged for the library.)
- Three model families: Sentence Transformer (bi-encoder embeddings), Cross-Encoder (reranker), Sparse Encoder (SPLADE etc.).
- Supports multimodal embedding (text, image, audio, video) through a single API; quickstart shows `Qwen/Qwen3-VL-Embedding-2B` for image+text.
- Supports Matryoshka (truncatable) embeddings, binary/scalar quantization, static (CPU-friendly) embeddings, and ONNX/OpenVINO backends.
- Relationship to Hugging Face: models hosted on the HF Hub; `push_to_hub`; now maintained by HF.

**Current leading models available through it (date-stamped, NOT a definitive ranking).** Per MTEB-related coverage in 2025–2026, top open-weight families accessed via sentence-transformers / HF include **Qwen3-Embedding** (0.6B/4B/8B; the 8B ranked No. 1 on the MTEB multilingual leaderboard as of June 5, 2025 with score 70.58, Apache-2.0), **NVIDIA** embedding models (one released October 2025, fine-tuned from Llama-3.1-8B), the **Jina v5** family, and **Google Gemini Embedding** (gemini-embedding-001, proprietary/API, reported MTEB-leading on the March 10, 2025 multilingual leaderboard with Task Mean 68.32, Borda rank #1). NOTE: MTEB rankings are explicitly described as volatile by multiple sources; treat any "#1" claim as a dated snapshot, not a stable fact. Some 2026 figures appearing in secondary blogs (e.g., "Gemini Embedding 2," "Voyage 4," "Microsoft Harrier-OSS") are lower-confidence than the arXiv/GitHub primaries for Qwen3 and Gemini Embedding.

**Capability match.** Directly provides the **embed** step of an embed→store→query pipeline. `all-MiniLM-L6-v2` produces 384-dim vectors and is cited repeatedly as the fast/free small-scale default. Provides `similarity()` and `semantic_search()` utilities for small-corpus retrieval without any external database. Embeddings feed scikit-learn for clustering. For a <1000-document set this library alone can do embed + in-memory cosine search.

**Sources.**
- sentence-transformers · PyPI — https://pypi.org/project/sentence-transformers/
- SentenceTransformers Documentation — https://sbert.net/
- Releases · huggingface/sentence-transformers — https://github.com/UKPLab/sentence-transformers/releases
- Sentence Transformers Joins Hugging Face — https://earezki.com/ai-news/2025-10-22-sentence-transformers-is-joining-hugging-face/
- Qwen3-Embedding — https://github.com/QwenLM/Qwen3-Embedding ; https://qwenlm.github.io/blog/qwen3-embedding/
- Gemini Embedding paper — https://arxiv.org/pdf/2503.07891

## 2.0.2 — FAISS (Facebook AI Similarity Search)

**What it is.** FAISS is an open-source library (Meta FAIR) for efficient similarity search and clustering of dense vectors. It is a **library, not a database** — it exposes the index directly and does not manage storage, metadata, or CRUD as first-class features. Frequently described as "BLAS for similarity search."

**Maturity.** Stable / active. The faiss-cpu PyPI wheel is at **1.13.2 (uploaded Dec 24, 2025)**; conda/GPU packages reference **1.14.x** (faiss-gpu-cu12 1.14.1.post1 uploaded Mar 7, 2026; INSTALL.md references faiss 1.14.2). FAISS 1.10.0 (≈early 2025) integrated NVIDIA cuVS GPU algorithms (GpuIndexCagra). License: MIT.

**Key characteristics (documented).**
- 10+ index types: Flat (exact brute-force), IVF (inverted file, approximate, for very large sets), HNSW (graph, near-exact), PQ/OPQ (product quantization), and combinations.
- Index trade-offs (from independent benchmark tables): Flat = exact, slow linear scan, best for small datasets (<100k vectors) and experiments; HNSW = near-exact, logarithmic search, 100k–10M; IVF = approximate, sublinear, >10M.
- CPU and GPU. Classic GPU indices (GpuIndexFlat, GpuIndexIVFFlat, GpuIndexIVFPQ) plus NVIDIA cuVS CAGRA since 1.10. Meta-reported cuVS gains: IVF build up to 4.7× faster, search latency up to 8.1× lower; CAGRA vs CPU-HNSW build up to 12.3× faster.
- Supports sequential and arbitrary 63-bit integer IDs; save/load index to disk.

**Metadata filtering (documented, with caveats).** FAISS has only **basic** vector filtering: the user supplies an `IDSelector` predicate callback; if it returns false for a vector ID, the vector is ignored. The FAISS paper states that to filter by metadata, the callback must do an indirection to an external metadata table, which is **inefficient**; an alternative is packing enumerated metadata (country codes, dates, version numbers) into the unused bits of the 63-bit ID. So FAISS does NOT provide native rich metadata filtering — it is bolted on by the caller (or by a wrapper like LangChain's FAISS vectorstore, which stores metadata alongside and passes a `filter=` dict).

**Capability match.** Provides the **store + query** (ANN search) step. For a small corpus, FAISS's own "Guidelines to choose an index" wiki is explicit: "If you plan to perform only a few searches (say 1000-10000), the index building time will not be amortized by the search time. Then direct computation is the most efficient option. This is done via a 'Flat' index… The only index that can guarantee exact results is the IndexFlatL2 or IndexFlatIP." Practitioner write-ups concur that at the tens-of-chunks scale a Flat index is effectively instant (one RAG tutorial: "For the 20–30 chunks… that's instant," with a stated scaling rule of "Flat (< 50K, perfect accuracy), IVF (50K–1M), HNSW (> 1M)"). Native clustering (k-means) is also part of FAISS. Metadata filtering must be implemented by the user. Minimum viable pipeline: embed with sentence-transformers → `index.add()` → `index.search()`.

**Sources.**
- The Faiss Library (paper) — https://arxiv.org/abs/2401.08281 ; HTML https://arxiv.org/html/2401.08281v4
- Welcome to Faiss Documentation — https://faiss.ai/index.html
- Guidelines to choose an index (FAISS wiki) — https://github.com/facebookresearch/faiss/wiki
- faiss-cpu · PyPI — https://pypi.org/project/faiss-cpu/ ; faiss-gpu-cu12 — https://pypi.org/project/faiss-gpu-cu12/
- faiss/INSTALL.md — https://github.com/facebookresearch/faiss/blob/main/INSTALL.md
- Accelerating GPU indexes in Faiss with NVIDIA cuVS — https://engineering.fb.com/2025/05/08/data-infrastructure/accelerating-gpu-indexes-in-faiss-with-nvidia-cuvs/

## 2.0.3 — Chroma (ChromaDB)

**What it is.** ChromaDB is an open-source embedding/vector database that wraps a vector index inside a full database layer handling storage, metadata, CRUD, and persistence. Described as "SQLite for embeddings." Uses HNSW (via hnswlib historically) for the vector index; default embedding model `all-MiniLM-L6-v2`.

**Maturity.** Stable / active, with a major 2025 Rust-core rewrite. Python package versions in the 1.5.x range (release notes show Python 1.5.9 / CLI 1.4.4 / JS 3.4.5; the Python 1.5.7 build is dated 2026-04-08). The Rust rewrite removed built-in authentication and changed configuration. The performance gain is Chroma's own published claim: the v1.0 launch announcement states, "Today, we're excited to announce that local Chroma is 4× faster for common write and query workflows, thanks to a new core written in Rust." The documented mechanism is elimination of the Python GIL bottleneck — corroborated directionally by independent no-GIL/Rust benchmarks (GIL-bound Python showed ~1.0× on CPU-bound parallel work vs. ~3.9× for a no-GIL approach). Array-metadata filters (`$contains`/`$not_contains`) were added in Chroma 1.5.0; regex search (`$regex`/`$not_regex`) added in 2026.

**Key characteristics (documented).**
- Three client modes: in-memory ephemeral, persistent (local disk), HTTP (client-server); plus Chroma Cloud.
- Three-tier storage architecture (per vendor/secondary source): brute-force buffer → HNSW vector cache → disk (Apache Arrow/Parquet).
- Embedding-function integration: OpenAI, Google/Gemini, Cohere, Hugging Face, etc.; auto-embeds `query_texts` using the collection's embedding function.
- HNSW tuning: `hnsw:construction_ef` (default 100), `hnsw:M` (max neighbors).

**Metadata filtering (documented, native and rich).** ChromaDB supports a `where` filter dict with operators: `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `$nin`, logical `$and`/`$or` (nestable), array `$contains`/`$not_contains`, plus a separate `where_document` filter with `$contains`/`$not_contains` (and 2026 `$regex`). This is the key documented difference from FAISS — metadata filtering is first-class. Caveats (independent sources): filtering has measurable performance cost, and `where` filters only return embeddings where the key exists (a `$ne` filter will not return records lacking the key).

**Capability match.** Provides the complete **store + query + metadata-filter** half of the pipeline, and (via embedding functions) can also do the **embed** step. Well-suited to small/local use: `PersistentClient()` gives durable storage across restarts; an independent comparison frames ChromaDB as the right choice for a RAG system over internal documents where you need metadata filtering and persistence (vs. FAISS for raw speed at massive scale). For a <1000-doc, metadata-addressed tree (the ternary-address use case), ChromaDB's `where`-clause filtering maps directly onto structured metadata fields.

**Sources.**
- Metadata Filtering — Chroma Docs — https://docs.trychroma.com/docs/querying-collections/metadata-filtering
- Usage Guide — Chroma Docs — https://docs.trychroma.com/guides
- Migration (Rust rewrite) — Chroma Docs — https://docs.trychroma.com/docs/overview/migration
- Chroma 1.0.0 launch announcement — https://www.trychroma.com/
- Releases · chroma-core/chroma — https://github.com/chroma-core/chroma/releases
- Chroma Cookbook — https://cookbook.chromadb.dev/
- Chroma vs FAISS comparison — https://myengineeringpath.dev/tools/chroma-vs-faiss/

## 2.0.4 — Cosine similarity / k-nearest-neighbor (metrics & algorithms, not software)

**What it is.** These are the mathematical similarity metrics and the retrieval algorithm underlying embedding search, not software packages.

**Key characteristics (documented).**
- **Cosine similarity** measures the cosine of the angle between two vectors = dot product divided by the product of their magnitudes (L2 norms); range [−1, 1]; invariant to vector magnitude (measures orientation only). sentence-transformers' `similarity()` defaults to cosine for most models.
- **Dot product** = sum of elementwise products; sensitive to magnitude; equals cosine when vectors are L2-normalized. FAISS `IndexFlatIP` does inner-product search.
- **Euclidean (L2) distance** = straight-line distance; FAISS `IndexFlatL2`. On normalized vectors, L2 ranking and cosine ranking are monotonically equivalent.
- **kNN retrieval over embeddings:** embed query → compute the chosen similarity/distance against all stored vectors (exact/brute force) or an approximate subset (ANN: IVF/HNSW) → return the top-k highest-similarity (or lowest-distance) items. Brute-force exact kNN is O(N) per query; trivially fast for <1000 vectors.

**Maturity.** Settled, decades-old definitions; "maturity" is not applicable (foundational math). Implementations live in sentence-transformers, FAISS, scikit-learn, and NumPy.

**Capability match.** Defines the **query/ranking** semantics of any embed→store→query pipeline. For small corpora, exact cosine kNN over a NumPy/PyTorch matrix is sufficient (no index needed). The cosine-vs-dot-vs-Euclidean choice matters only relative to whether embeddings are normalized; documented guidance: cosine for orientation-based semantic similarity.

**Sources.**
- Sentence Transformer (cosine similarity) — https://www.geeksforgeeks.org/nlp/sentence-transformer/
- SentenceTransformers Documentation (similarity) — https://sbert.net/
- The Faiss Library — https://arxiv.org/html/2401.08281v4

## 2.0.5 — RAG (Retrieval-Augmented Generation) architectures

**What it is.** RAG is an architecture pattern that augments an LLM's generation with knowledge retrieved from an external store, to mitigate hallucination, outdated knowledge, and opaque reasoning. NOTE: this target overlaps prior methods work; kept landscape-level here.

**Maturity / current framing (2025–2026).** Active and dominant. The widely-cited Gao et al. survey (arXiv 2312.10997, "Retrieval-Augmented Generation for Large Language Models: A Survey") codified three paradigms:
- **Naive RAG** — linear "Retrieve-Read": index (chunk → embed → store) → retrieve top-k by similarity → generate. Simple, fast; limited retrieval precision, retrieves noisy/irrelevant chunks.
- **Advanced RAG** — adds pre-retrieval (query rewriting/expansion, fine-grained chunking, metadata-aware indexing) and post-retrieval (reranking, filtering) optimizations.
- **Modular RAG** — decomposes the pipeline into configurable, swappable modules (search, memory, routing); described as the increasingly dominant paradigm, supporting both pipelines and end-to-end learning.
- A 2025–2026 layer beyond this, **Agentic RAG**, frames retrieval as an LLM-driven control loop (the agent decides what to retrieve, evaluates results, takes corrective action); covered in dedicated surveys (e.g., arXiv 2501.09136).

**Key characteristics (documented).**
- Minimal pipeline: chunk → embed → store (vector DB) → retrieve → generate.
- Common RAG evaluation metrics: context relevance, answer faithfulness.
- Hybrid search (vector + BM25 keyword + reranking) is associated with the Advanced RAG stage.

**Capability match.** RAG is the end-to-end architecture into which 2.0.1–2.0.4 plug: sentence-transformers (embed), FAISS/Chroma (store+retrieve), cosine kNN (rank). For a <1000-document corpus, a Naive RAG ("chunk→embed→store→retrieve→generate") pipeline is the documented minimum viable configuration; metadata-aware indexing (an Advanced-RAG feature) maps onto ChromaDB where-clauses.

**Sources.**
- Retrieval-Augmented Generation for LLMs: A Survey — https://arxiv.org/abs/2312.10997
- Agentic RAG: A Survey — https://arxiv.org/html/2501.09136v4
- Naive/Advanced/Modular RAG (IBM) — https://www.ibm.com/think/topics/rag-techniques
- Reasoning RAG survey — https://arxiv.org/pdf/2506.10408

---

# SECTION 2.1 — DATASET CURATION & DISTILLATION

## 2.1.1 — scikit-learn

**What it is.** scikit-learn is the standard Python machine-learning library providing clustering, classification, regression, dimensionality reduction, model selection, and preprocessing.

**Maturity.** Stable / active. **scikit-learn 1.8.0 released December 2025** (1.7.2 Sept 2025; 1.7.0 June 2025). BSD license. FLAG: the documentation site currently renders a "1.9.0 documentation" label on several stable pages while 1.8.0 is the announced download — a minor version-label inconsistency between the docs build and the released package; treat 1.8.0 as the confirmed stable release.

**Key characteristics for clustering/classification (documented).**
- Clustering algorithms listed: k-Means, MiniBatchKMeans, HDBSCAN, hierarchical/agglomerative clustering, DBSCAN, and more.
- `KMeans` — minimizes within-cluster sum-of-squares (inertia); requires `n_clusters`; default init `k-means++`, `n_init='auto'` (since 1.4); Lloyd's/Elkan algorithms; OpenMP parallelism.
- `AgglomerativeClustering` — bottom-up hierarchical; linkage criteria `ward` (default), `complete`/`maximum`, `average`, `single`; supports `distance_threshold` and connectivity constraints; produces a dendrogram-able tree; quadratic time complexity (independent source: restrict to moderate sizes).
- Metrics: silhouette score and other cluster-validation metrics; grid search / cross-validation for model selection.

**Capability match.** Provides the **clustering** of a small structured embedding set (KMeans/Agglomerative over sentence-transformers vectors) and **classification**. Documented small-dataset behavior: AgglomerativeClustering is recommended where a dendrogram adds interpretability or for manual inspection of merges (well-suited to tens-to-hundreds of nodes); one tutorial source suggests KMeans for numeric datasets exceeding 1,000 observations, implying small sets are tractable but cluster-count selection matters more.

**Sources.**
- scikit-learn home / news — http://scikit-learn.org/
- 2.3. Clustering — https://scikit-learn.org/stable/modules/clustering.html
- KMeans — https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html
- AgglomerativeClustering — https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AgglomerativeClustering.html

## 2.1.2 — k-means / hierarchical clustering (algorithms, not software)

**What it is.** The two canonical unsupervised clustering algorithm families.

**Key characteristics (documented).**
- **k-means:** partitions N samples into K disjoint clusters minimizing within-cluster variance (inertia/SSE). Lloyd's algorithm: (1) initialize K centroids (k-means++ smart seeding); (2) assign each point to nearest centroid; (3) recompute centroids as cluster means; repeat until centroid movement < tolerance. Average complexity O(k·n·T). Requires K specified in advance; assumes isotropic (spherical, equal-variance) clusters; can fall into local minima (hence multiple `n_init` runs). Produces: K centroids + a hard label per point.
- **Hierarchical (agglomerative) clustering:** starts with each point as its own cluster and iteratively merges the closest pair per a linkage criterion (ward = minimize merged-cluster variance; single/complete/average = min/max/mean inter-set distance). Produces: a tree/dendrogram of nested clusters that can be cut at any level; does not require K in advance (can use a distance threshold). Quadratic time → moderate dataset sizes.
- **Small-dataset behavior:** hierarchical clustering's dendrogram is especially interpretable for small N; k-means is fast but its spherical/variance assumptions and need to pre-specify K are the main caveats.

**Maturity.** Foundational, settled algorithms; implementations mature in scikit-learn (and FAISS for k-means at scale).

**Capability match.** Directly supports **embedding/clustering of a small structured set** and **small-set curation** (grouping ~27–39 nodes by embedding proximity; dendrogram for inspecting a few-hundred-document tree).

**Sources.**
- 2.3. Clustering — https://scikit-learn.org/stable/modules/clustering.html
- KMeans — https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html
- AgglomerativeClustering — https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AgglomerativeClustering.html
- Clustering Algorithms in Scikit-Learn (tutorial) — https://moldstud.com/articles/p-master-clustering-algorithms-with-scikit-learn-an-interactive-tutorial

## 2.1.3 — Dataset distillation

**What it is.** Dataset distillation (DD), a.k.a. dataset condensation, compresses a large DATASET into a compact **synthetic** set such that a model trained on the small synthetic set achieves comparable generalization to one trained on the full data. Coined by Wang, Zhu, Torralba, Efros (arXiv 1811.10959, 2018). NOTE: overlaps prior work; kept landscape-level.

**Maturity / current state (2024–2026).** Active research area, **image-centric**. The survey "The Evolution of Dataset Distillation: Toward Scalable and Generalizable Solutions" (arXiv 2502.05673, 2025) reviews 2023–2025 advances and categorizes methodologies: **trajectory matching, gradient matching, distribution matching, scalable generative approaches, and decoupling/optimization mechanisms**, with emphasis on scaling to ImageNet-1K/21K. Named methods include DATM (trajectory matching with difficulty alignment, near-lossless on CIFAR-10/100), D⁴M (disentangled diffusion model), and minmax/neural-characteristic-function diffusion approaches (2024–2025). Emerging frontiers: vision-language DD, audio-visual DD, multi-modal DD via generative models (2024–2025 TMLR/NeurIPS).

**Key characteristics (documented).**
- Goal: tiny synthetic dataset, not selection of real examples (distinct from coreset/curation).
- Mainstream framework families: meta-learning, parameter/gradient matching, distribution matching, decoupled, and generative-model-based.
- Primarily benchmarked on image classification (MNIST→CIFAR→ImageNet), not text corpora.

**Capability match.** Bears on **distillation/probe design** and **small-set curation** conceptually, but documented maturity is in the image domain; there is no documented, mature DD tooling targeting a <1000-document markdown/HTML text tree. FLAG: capability for this specific text-tree use case is NOT documented.

**Sources.**
- The Evolution of Dataset Distillation (survey) — https://arxiv.org/pdf/2502.05673 ; HTML https://arxiv.org/html/2502.05673v3
- A Comprehensive Survey of Dataset Distillation (TPAMI) — https://dl.acm.org/doi/10.1109/TPAMI.2023.3322540
- Original: Dataset Distillation — https://arxiv.org/abs/1811.10959 (via survey refs)

## 2.1.4 — Knowledge distillation

**What it is.** Knowledge distillation (KD) compresses a large teacher MODEL's behavior into a smaller student model. Formalized by Hinton et al. (2015) via soft-output (logit) transfer; the student inherits the teacher's output structure. NOTE: overlaps prior work; landscape-level.

**Maturity / current state (2024–2026).** Active, central to the modern LLM pipeline. Surveys: "A Comprehensive Survey on Knowledge Distillation" (arXiv 2503.12067, 2025) and "Survey on Knowledge Distillation for Large Language Models" (arXiv 2407.01885; ACM TIST 2024, doi 10.1145/3699518). Taxonomy distinguishes:
- **Black-box KD** — only teacher outputs accessible (closed APIs like GPT-4); student fine-tuned on teacher-generated data; includes Chain-of-Thought, In-Context-Learning, and Instruction-Following distillation.
- **White-box KD** — teacher parameters/output distributions available (open models); logit and intermediate-feature/attention distillation.
- A concrete 2025 milestone: DeepSeek-R1 distilled a 671B MoE teacher into dense 1.5B–70B students preserving long chain-of-thought. A 2026 survey on **On-Policy Distillation** (arXiv 2604.00626) notes off-policy imitation reproduces surface style without underlying reasoning, motivating student-policy-sampled feedback.

**Key characteristics (documented).**
- Knowledge sources: logits, intermediate activations/features, attention, relational/instance similarities.
- Schemes: offline/online/self-distillation; supervised fine-tuning vs. divergence minimization.
- Noted failure mode (2025 sources): distilled LLMs amplify generalization limitations / superficial pattern memorization under distribution shift.

**Capability match.** Bears on **distillation/probe design**. KD is about model compression, not corpus curation; relevant to the use case only if a student model is being trained from a teacher over the small set. Documented capability is model→model, not corpus→corpus.

**Sources.**
- A Comprehensive Survey on Knowledge Distillation — https://arxiv.org/html/2503.12067v2
- Survey on KD for LLMs (ACM TIST) — https://dl.acm.org/doi/10.1145/3699518 ; arXiv https://arxiv.org/pdf/2407.01885
- A Survey of On-Policy Distillation for LLMs — https://arxiv.org/pdf/2604.00626
- Knowledge Distillation and Dataset Distillation of LLMs — https://arxiv.org/pdf/2504.14772

## 2.1.5 — Memorization-vs-generalization probes

**What it is.** A family of methods/benchmarks designed to test whether an LLM is genuinely reasoning vs. retrieving/memorizing training data. NOTE: overlaps prior work; landscape-level.

**Maturity / current state (2024–2026).** Active research, no single standard tool. Named probe families/approaches:
- **Counterfactual / perturbation tasks** — alter problem rules or surface (e.g., counterfactual math rules) to break memorized heuristics; "MatheMagic" (arXiv 2510.05962) auto-generates memorization-robust dynamic math benchmarks; hard perturbations of MATH show memorization as a bottleneck.
- **Logical-reasoning perturbation** — "On Memorization of LLMs in Logical Reasoning" (arXiv 2410.23123) tests solving trained problems vs. slightly perturbed variants.
- **Generalization-complexity quantification** — "Quantifying Generalization Complexity for LLMs" (arXiv 2410.01769).
- **Mechanistic / token-level probes** — "Diagnosing Memorization in Chain-of-Thought Reasoning, One Token at a Time" (arXiv 2508.02037); probe-based suppression of memorization signal via discriminative neurons.
- **Memorization taxonomy** — Recitation/Reconstruction/Recollection (Prashanth et al. 2024, Pythia/Pile).
- **MCQ answer-elimination** to isolate reasoning (Salido et al. 2025).
A recurring theme: benchmark contamination inflates apparent generalization; using definitely-unseen tests (AIME/IMO-style, or auto-generated counterfactual rules) is the recommended mitigation.

**Capability match.** Bears directly on **distillation/probe design** — these are the documented methods for designing probes that separate reasoning from memorization. They are research methods, not a packaged tool.

**Sources.**
- Memorization in LLMs (overview) — https://www.emergentmind.com/topics/memorization-in-llms
- On Memorization of LLMs in Logical Reasoning — https://arxiv.org/html/2410.23123v2
- Quantifying Generalization Complexity for LLMs — https://arxiv.org/pdf/2410.01769
- Diagnosing Memorization in CoT, One Token at a Time — https://arxiv.org/pdf/2508.02037
- MatheMagic — https://arxiv.org/pdf/2510.05962

## 2.1.6 — LIMA and successors

**What it is.** LIMA ("Less Is More for Alignment," Zhou et al., NeurIPS 2023, arXiv 2305.11206) fine-tuned a 65B LLaMa on only **1,000 carefully curated prompt-response pairs** with standard supervised loss — no RLHF/preference modeling — and showed strong instruction-following and generalization to unseen tasks. Its thesis: most knowledge is learned in pretraining; minimal high-quality alignment data suffices. (Reported human-study result: LIMA responses equivalent or preferred over GPT-4 in 43% of cases, 58% vs Bard, 65% vs DaVinci003.)

**Maturity / what's new since (2024–2026).** Active, influential line. Documented successors:
- **LIMO** ("Less Is More for Reasoning," Ye et al., arXiv 2502.03387, 2025) — extends the thesis to reasoning with small curated sets.
- **MIG** ("Automatic Data Selection for Instruction Tuning by Maximizing Information Gain in semantic space," arXiv 2504.13835, ACL Findings 2025) — automated curation via information gain over a label graph.
- **MM-LIMA** (Wei et al., 2025, IET) — extends less-is-more to multimodal alignment with quality-filtered small data.
- **TRIM** (token-wise attention-derived saliency for data-efficient instruction tuning, arXiv 2510.07118), **InstructDiff** (differential-entropy data selection, arXiv 2601.23006), "Not All Documents Are What You Need" (arXiv 2505.12250), Magpie (alignment-data synthesis), Entropy Law, and the "Long Is More for Alignment" baseline — all part of the 2024–2026 data-selection/curation wave.
- A JDMLR 2024 reproduction found LIMA-1k did not always beat alternatives (e.g., Alpaca-Refined-1k-longest, which scored higher with/without NEFTune), suggesting instruction length/detail, not just count, matters — FLAG this as a contested/nuanced result.

**Capability match.** Bears directly on **small-set curation** and **distillation/probe design** — LIMA and successors are the canonical evidence and methods for training/aligning on small carefully-curated sets (the <1000-example regime, which matches the use case's scale). Landscape-level; not methods-deep here.

**Sources.**
- LIMA: Less Is More for Alignment — https://openreview.net/forum?id=KBMOKmX2he ; https://arxiv.org/abs/2305.11206
- LIMO: Less Is More for Reasoning — arXiv 2502.03387 (via refs)
- MIG — https://arxiv.org/pdf/2504.13835
- MM-LIMA — https://ietresearch.onlinelibrary.wiley.com/doi/full/10.1049/aie2.70001
- JDMLR 2024 LIMA reproduction — https://openreview.net/pdf?id=X5l8bqk5K8

---

# SECTION 2.2 — FRONTIER (PARKED — LIGHTER SCAN)

This section is explicitly PARKED; a lighter forward-looking landscape scan. Demo-vs-deployed and measured-vs-asserted flagged per target.

## 2.2.1 — Joint audio-video diffusion / MMDiT

**What it is.** Two related threads: (a) **MMDiT** = the Multimodal Diffusion Transformer architecture introduced with Stable Diffusion 3, which processes text and image tokens jointly with bidirectional ("joint") attention inside the transformer (separate per-modality weights combined during attention), trained with a Rectified Flow objective; (b) **joint audio-video generation** = models that simultaneously synthesize synchronized audio + video.

**Current state (2026): DEMO vs DEPLOYED.**
- **MMDiT architecture** is DEPLOYED as the backbone of shipped image models: Stable Diffusion 3 / 3.5 (SD3.5 uses "MMDiT-X" with QK-normalization and dual-attention in early layers) and the FLUX family. The SD3 paper ("Scaling Rectified Flow Transformers for High-Resolution Image Synthesis," Stability AI) claims MMDiT outperforms UViT and DiT backbones on visual fidelity and text alignment over training — a MEASURED architecture comparison (GenEval, human-preference ELO).
- **Joint audio-video diffusion** is overwhelmingly RESEARCH-DEMO. Lineage: MM-Diffusion (arXiv 2212.09478, 2023, coupled U-Nets, ~10h datasets) → DiT-based successors: AV-DiT, JavisDiT, UniForm (unified single-tower), Ovi (twin backbone), AudioGen-Omni (MMDiT video+audio+text), MM-Sonate, UniVerse-1, and 2026 entries (Apollo, MoVA, SkyReels-V4).

**Leading example with MEASURED metrics — JavisDiT** (arXiv 2503.23377, "Joint Audio-Video Diffusion Transformer with Hierarchical Spatio-Temporal Prior Synchronization," ICLR 2026). DiT-based (not labeled MMDiT); audio and video share AV-DiT blocks with Multi-Modality Bidirectional Cross-Attention. Its **HiST-Sypo Estimator** (Hierarchical Spatial-Temporal Synchronized Prior) hierarchically extracts global coarse-grained + fine-grained spatio-temporal priors from the text prompt and injects them into different AV-DiT blocks to guide AV synchronization, trained via contrastive learning (610K MMTrail+TAVGBench triplets). **Measured results** (4s, 240P/24fps, 16kHz, on its own JavisBench of 10,140 videos across 16 metrics in 4 dimensions): FVD ≈ 203.2, FAD ≈ 6.9, TA-IB 0.151, CLIP 0.325; synchronization JavisScore = 0.154, reported to surpass cascaded SOTA FoleyCrafter and joint baselines; closed-set: FVD 94.2 on Landscape, FAD 9.6 on AIST++. The synchronization claim IS MEASURED — via the purpose-built JavisScore, itself validated against a 3,000-pair human-annotated JavisEval set (built because the authors argue the prior AV-Align metric "may struggle with complex scenarios"). Epistemic flag from the authors themselves: absolute JavisScore is low (~0.15) and "existing models — including ours — struggle with AV synchrony in complex scenarios," so it is "SOTA relative to baselines," not solved. Code public (Apache-2.0, github.com/JavisVerse/JavisDiT); research project, not a product.

**Deployed adjacent products (closed, black-box):** text-to-video-with-synchronized-audio is shipped commercially by **OpenAI Sora 2** (released Sept 30, 2025; API at DevDay Oct 6, 2025; consumer app shut down April 26, 2026, API callable until Sept 24, 2026) and **Google Veo 3 / Veo 3.1** (Veo 3 May 2025; Veo 3.1 the current flagship Oct 15–16, 2025; up to 8s clips, 1080p/4K, native audio; on Vertex AI, Gemini API, Flow). These are deployed but do not publish their architectures as MMDiT or expose measured joint-AV-sync benchmarks; product claims (e.g., physics realism) are largely asserted/qualitative in public materials. FLAG: cannot verify MMDiT lineage for these deployed products.

**Capability match.** Frontier/parked — not a fit for the small-text-corpus use case; relevant only as a forward landscape marker. No documented bearing on small-corpus retrieval or curation.

**Sources.**
- Stable Diffusion 3 Research Paper — https://stability.ai/news/stable-diffusion-3-research-paper
- JavisDiT — https://arxiv.org/abs/2503.23377 ; https://github.com/JavisVerse/JavisDiT
- MM-Diffusion — https://arxiv.org/abs/2212.09478
- AudioGen-Omni — https://arxiv.org/pdf/2508.00733
- Sora 2 — https://openai.com/index/sora-2/
- Veo 3.1 vs Sora 2 — https://www.digitalapplied.com/blog/ai-video-generation-omni-vs-sora-vs-veo-3

## 2.2.2 — Unified single-tower multimodal architectures

**What it is.** Single-model architectures that handle multiple modalities (and often both understanding and generation) within one stack — "any-to-any" or "unified multimodal models" (UMMs).

**Current state (2026): DEMO vs DEPLOYED.**
- **Research-demo dominant.** A large open-source research wave (2024–2025): Show-o ("one single transformer to unify understanding and generation"), Transfusion (next-token + diffusion in one model), Emu3 (next-token prediction), Janus / Janus-Pro (decoupled visual encoding), Chameleon, BAGEL (Mixture-of-Transformers), BLIP-3o, OmniGen2, Show-o2, VILA-U, NExT-GPT (any-to-any). Survey: "Unified Multimodal Understanding and Generation Models: Advances, Challenges, and Opportunities" (arXiv 2505.02567). Three documented architectural paradigms: AR (discrete tokens via VQ-VAE), AR+MAR (masked autoregressive, e.g., Harmon), AR+Diffusion (diffusion decoder conditioned on MLLM hidden states, e.g., OpenUni, BLIP-3o, BAGEL).
- **Deployed (production-scale, closed):** GPT-4o and Gemini 2.0 Flash are cited by the research literature as production demonstrations of the unified "any-to-any" paradigm with dialogue-based image generation/manipulation. Google's **Gemini Omni Flash** (announced Google I/O, May 19, 2026, per secondary reporting) is described as the first shipping member of an "any-input multimodal" Omni family (text/image/audio/video in, up to 10s video out).

**Key characteristics (documented).**
- Central design tension: jointly optimizing autoregressive (understanding) and diffusion (generation) objectives in a single stack causes documented training conflicts; later work decouples the two pathways at the cost of more compute.
- A claimed aspiration (partly asserted, partly measured in individual papers): understanding and generation mutually reinforce each other.

**Capability match.** Frontier/parked; no documented bearing on the small-corpus text use case. Forward landscape marker only.

**Sources.**
- Unified Multimodal U&G Models: Advances, Challenges, Opportunities — https://arxiv.org/html/2505.02567v6
- Awesome-Unified-Multimodal-Models — https://github.com/showlab/Awesome-Unified-Multimodal-Models
- LightFusion — https://arxiv.org/pdf/2510.22946
- UniFork — https://arxiv.org/pdf/2506.17202
- Gemini Omni Flash (secondary) — https://www.digitalapplied.com/blog/ai-video-generation-omni-vs-sora-vs-veo-3

## 2.2.3 — Structured composition / control layers over generative models

**What it is.** Control/conditioning layers added on top of pretrained generative (diffusion) models to impose structured/spatial control — the ControlNet lineage and successors.

**Current state (2026): DEMO vs DEPLOYED.** Deployed and widely used in practice (ControlNet is a standard plugin in Stable Diffusion tooling), with an active research-successor stream. Original **ControlNet** (Zhang et al., 2023) adds a trainable copy of the backbone's encoder blocks connected via **zero-initialized convolutions** ("zero convolutions") that inject conditioning (edges, depth, pose, scribbles, segmentation) without destabilizing the frozen pretrained model. ControlNet 1.1 released 2023.

**Measured-vs-asserted (the key flag).** Successor papers report MEASURED improvements:
- **ControlNet++** (arXiv 2404.07987) — adds pixel-level cycle-consistency optimization with a pretrained discriminative reward model; reports measured gains in control accuracy: **mIoU +11.1%, SSIM +13.4%, RMSE −7.6%** across conditioning types.
- **ControlNet-XS** (Zavadski et al., ECCV 2024) — redesigns control/generation communication bandwidth; claims state-of-the-art with as little as ~1% of base-model parameters and better FID than ControlNet, ~2× faster inference/training — a MEASURED (FID, parameter-count) improvement.
- Other successors: Uni-ControlNet (all-in-one control), DC-ControlNet (per-element), PG-ControlNet (physics-guided), LiLAC (lightweight 1×1-conv for audio), and a domain-specific 3D ControlNet for PET denoising (reported measured quantitative gains).

So for structured control, the literature provides MEASURED improvements (FID, mIoU, SSIM, RMSE, parameter count) rather than mere assertion — though benchmarks are task/condition-specific and the gains are reported by the proposing authors (not independently reproduced).

**Capability match.** Frontier/parked; no documented bearing on the small-corpus text use case. Conceptually a "structured control layer" analogy, but the documented capability is image-generation conditioning, not text retrieval/curation.

**Sources.**
- ControlNet (repo) — https://github.com/lllyasviel/ControlNet
- ControlNet++ — https://arxiv.org/html/2404.07987v1
- ControlNet-XS — https://vislearn.github.io/ControlNet-XS/
- Efficient Diffusion Models: A Survey (ControlNet section) — https://arxiv.org/pdf/2502.06805
- ControlNet Architecture (overview) — https://www.emergentmind.com/topics/controlnet-architecture

---

# RECOMMENDATIONS (compilation status, not tool selection)
Per the task framing this is a search-and-compile landscape, so "recommendations" here concern compilation completeness and confidence, not which tool to adopt:
- **Highest-confidence, version-verified targets:** sentence-transformers (5.5.1), FAISS (1.13.2 CPU / 1.14.x GPU), ChromaDB (1.5.x), scikit-learn (1.8.0). Versions and capabilities are confirmed from primary sources (PyPI/GitHub/official docs).
- **Verified-but-volatile:** MTEB model rankings — re-pull at time of use; treat any "#1" as a dated snapshot (Qwen3-Embedding-8B No.1 on June 5, 2025; Gemini Embedding No.1 on March 10, 2025).
- **Research-area targets (no single version):** dataset distillation, knowledge distillation, memorization probes, LIMA successors, and all of Section 2.2 — these are paper-tracked, not versioned tools; the named approaches above are the current landmarks.
- **Flagged gaps to close at time of use:** (1) no documented mature dataset-distillation tooling for a <1000-doc text tree; (2) scikit-learn docs site shows a 1.9.0 label vs 1.8.0 announced download; (3) Sora 2 / Veo 3 architectures are undisclosed (MMDiT lineage unverifiable for deployed AV products).

# CAVEATS
- This is a landscape compilation; no tool was ranked, evaluated, or recommended for the use case, per the task instructions.
- Version numbers are point-in-time (≤ June 8, 2026) and several (FAISS GPU 1.14.x, ChromaDB 1.5.x, scikit-learn 1.8.0/1.9.0 label) come from package registries/changelogs that update frequently.
- Frontier (2.2) figures rely partly on secondary/blog sources (especially for 2026 product timelines like Gemini Omni Flash and the Sora 2 shutdown date); these are flagged inline and are lower-confidence than arXiv/official-doc primaries.
- Benchmark numbers (JavisDiT, ControlNet++/-XS, MTEB scores) are author-reported on author-chosen benchmarks; "measured" means quantified in the source, not independently reproduced.
- ChromaDB's "4× faster" figure is the vendor's own published v1.0 claim (Rust core / GIL removal); the GIL-removal mechanism is corroborated directionally by independent no-GIL benchmarks but the specific 4× number is not independently verified here.
- Where a capability is not documented for the specific ternary-addressed <1000-document text-tree use case (notably dataset distillation and all of frontier multimodal), this is stated explicitly rather than inferred.