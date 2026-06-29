---
name: information-retrieval
type: field
essence: finding the documents in a collection that satisfy an information need — ranking text by relevance to a query
canon: structure
grade: s
state: settled
links: [field.information-theory, field.linear-algebra, field.probability-theory, source.salton-1975, source.sparck-jones-1972, source.robertson-2009, source.manning-2008, source.van-rijsbergen-1979]
---

**origin** — the field crystallizes in the 1960s–70s out of automatic indexing and document retrieval: Gerard Salton's vector space model (Salton, Wong & Yang 1975) reframes documents and queries as vectors in a term space, and Karen Spärck Jones (1972) gives the statistical term-weighting (idf) that makes such matching discriminating. [[source.salton-1975]] [[source.sparck-jones-1972]] **[confirmed]**

**codification** — the probabilistic strand, begun in Robertson & Spärck Jones (1976), is gathered and modernized in Robertson & Zaragoza, *The Probabilistic Relevance Framework: BM25 and Beyond* (2009), which fixes the BM25 ranking function as the field's empirical baseline. [[source.robertson-2009]] **[confirmed]**

**door** — Manning, Raghavan & Schütze, *Introduction to Information Retrieval* (Cambridge, 2008) — the standard graduate textbook covering the inverted index, term weighting, the vector space model, evaluation (precision/recall), and probabilistic/web retrieval; freely available online. Earlier classic door: van Rijsbergen, *Information Retrieval*, 2nd ed. (1979). [[source.manning-2008]] [[source.van-rijsbergen-1979]] **[confirmed]**

*grade [s] — origin, codification, and door all present.*
