---
name: tf-idf
type: object
object-type: method
essence: weight a term in a document by its frequency there times the inverse of how many documents contain it — common terms count less, rare discriminating terms count more
field: [field.information-retrieval]
status: established
state: settled
attribution: term frequency × inverse document frequency; idf from Spärck Jones (1972); the combined tf-idf weighting standardized through Salton's SMART work
formalized: true
source: [source.sparck-jones-1972, source.salton-1975, source.manning-2008]
depends-on: []
used-by: [object.vector-space-model, object.bm25]
aliases: ["object.tf-idf"]
---

**statement (plain)** — a term matters in a document if it appears often there (term frequency) but is also rare across the whole collection (inverse document frequency). Multiplying the two gives a weight that is high for terms that are both prominent in a document and distinctive of it, and low for terms that are everywhere (like "the"). These weights populate the document vectors used for ranking.

**statement (formal/formula)** — for term t in document d over a collection of N documents:
- term frequency tf_{t,d} = count of t in d (often dampened, e.g. 1 + log tf);
- document frequency df_t = number of documents containing t;
- inverse document frequency idf_t = log(N / df_t);
- weight w_{t,d} = tf_{t,d} × idf_t.

A document's score for a query is the sum of these weights over the query terms (or the cosine of tf-idf vectors). **[confirmed]**

**basis** — idf is a statistical heuristic, not a derived law: Spärck Jones (1972) introduced collection-frequency weighting empirically, showing retrieval improvements, and later work connected idf to probabilistic and information-theoretic readings without making it canonical. tf-idf's standing is empirical — it works well, is cheap, and is the textbook default — but it ignores term dependence and saturates poorly with term frequency and document length, weaknesses that BM25 directly addresses. idf attributed to Spärck Jones (1972); the tf×idf combination standardized via Salton's vector space work; both codified in Manning, Raghavan & Schütze (2008, Ch. 6). **[confirmed]**
