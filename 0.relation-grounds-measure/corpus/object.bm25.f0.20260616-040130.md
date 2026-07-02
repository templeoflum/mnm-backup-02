---
name: bm25
type: object
object-type: method
essence: a probabilistic ranking function scoring a document by query-term weights that saturate with term frequency and normalize for document length — the standard lexical retrieval baseline
field: [field.information-retrieval]
status: established
state: settled
attribution: developed in the Okapi system (Robertson, Walker et al., early 1990s) out of the Robertson–Spärck Jones probabilistic relevance model; consolidated by Robertson & Zaragoza (2009)
formalized: true
source: [source.robertson-2009, source.manning-2008]
depends-on: [object.tf-idf, object.inverted-index]
used-by: []
aliases: ["object.bm25"]
---

**statement (plain)** — BM25 ("Best Match 25") scores a document against a query by adding up, over the query terms, a weight for each. Each weight rises with how often the term appears in the document but with diminishing returns (a tenth occurrence adds far less than the second), discounts terms common across the collection (an idf factor), and corrects for document length so that long documents aren't unfairly favored just for containing more words. It is the standard "bag-of-words" ranking function and a strong baseline that neural retrievers are measured against.

**statement (formal/formula)** — for query q and document d with length |d| and average document length avgdl:

score(d, q) = Σ_{t ∈ q} IDF(t) · ( f(t,d) · (k₁ + 1) ) / ( f(t,d) + k₁ · (1 − b + b · |d|/avgdl) )

where f(t,d) is the term frequency, IDF(t) is the Robertson–Spärck Jones idf (commonly log[(N − df_t + 0.5)/(df_t + 0.5)]), and k₁ (frequency saturation, typically ~1.2–2.0) and b (length normalization, typically ~0.75) are free parameters. BM25F extends it to weighted document fields. **[confirmed]**

**basis** — BM25 is derived as an approximation within the Probabilistic Relevance Framework, but its specific functional form and the saturation/length terms are empirical engineering choices, justified by retrieval performance (notably in the TREC evaluations via the Okapi system) rather than proved optimal; k₁ and b are tuned. Its limits: it is lexical (no semantics/synonymy), bag-of-words (no term order), and parameter-sensitive. Robertson & Zaragoza (2009) give the framework and derivation; Manning, Raghavan & Schütze (2008, Ch. 11) present it as the standard probabilistic ranking function. **[confirmed]**
