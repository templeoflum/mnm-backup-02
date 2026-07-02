---
name: inverted-index
type: object
object-type: data-structure
essence: a map from each term to the list of documents (postings) that contain it — the core index that makes term-based retrieval fast
field: [field.information-retrieval]
status: established
state: settled
attribution: long-standing practice in IR systems; presented as the foundational data structure in standard IR texts (Manning, Raghavan & Schütze 2008; van Rijsbergen 1979)
formalized: true
source: [source.manning-2008, source.van-rijsbergen-1979]
depends-on: []
used-by: [object.bm25]
aliases: ["object.inverted-index"]
---

**statement (plain)** — instead of scanning every document for a query term, an inverted index stores, for each distinct term in the vocabulary (the "dictionary"), a list of the documents that contain it (the "postings list"). To answer a query you look up each term's postings and combine the lists — intersecting them for AND queries, merging for OR — so retrieval cost scales with the number of matching documents rather than the size of the whole collection. Postings can also carry term frequencies and positions to support ranking and phrase queries.

**statement (formal/formula)** — the index is a mapping I: term → postings, where each postings entry is (at minimum) a document id, optionally with the term frequency f(t,d) and a list of positions. Boolean retrieval is then list algebra over postings (intersection/union/complement); ranked retrieval accumulates term-weight contributions (e.g. tf-idf or BM25) over the documents found in the relevant postings lists. Construction is typically by sorting term–document pairs and grouping by term (blocked sort-based or single-pass in-memory indexing for large collections). **[confirmed]**

**basis** — the inverted index is a data structure, not a claim to be proved; its justification is operational — it is what makes term retrieval over large collections tractable and is universal in search engines. Limits/tradeoffs: index build and update cost, storage (mitigated by compression of dictionary and postings), and the need for skip pointers or other structures to speed list intersection. Presented as the foundational structure of IR systems in Manning, Raghavan & Schütze (2008, Ch. 1–4) and treated in van Rijsbergen (1979). **[confirmed]**
