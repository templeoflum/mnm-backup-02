---
name: knn
type: object
object-type: algorithm
essence: classify or retrieve a query by its k nearest stored examples — a nonparametric, training-free method that defers all work to query time
field: [field.information-retrieval]
status: established
state: settled
attribution: T. M. Cover & P. E. Hart (1967); roots in Fix & Hodges (1951)
formalized: true
source: [source.cover-hart-1967, source.manning-2008]
depends-on: []
used-by: []
aliases: ["object.knn"]
---

**statement (plain)** — to judge or retrieve for a new item, find the *k* most similar stored examples (by some distance or similarity measure) and decide from them: for classification, take the majority label among the k neighbours; for retrieval, return them; for regression, average their values. There is no training phase — the "model" is the stored data itself, so all computation happens at query time. The single parameter k trades off noise (small k, sensitive to outliers) against blur (large k, washes out local structure).

**statement (formal)** — given a labelled set {(xᵢ, yᵢ)} and a query x, let N_k(x) be the k points minimizing a distance d(x, xᵢ); the 1-NN rule predicts the label of the single nearest point, the k-NN rule the plurality label over N_k(x). Cover & Hart proved that as the sample size → ∞, the 1-NN error rate R is bounded by R* ≤ R ≤ R*(2 − R*·M/(M−1)) where R* is the Bayes-optimal error and M the number of classes — so asymptotic NN error is at most twice Bayes error. **[confirmed]**

**basis** — the asymptotic risk bound was established by Cover & Hart [[source.cover-hart-1967]] [confirmed], formalizing the nearest-neighbour idea introduced by Fix & Hodges (1951); the retrieval/classification treatment in IR is standard in Manning, Raghavan & Schütze [[source.manning-2008]] [confirmed]. **Limits:** query-time cost grows with the stored set (mitigated by indexing structures and approximate nearest-neighbour search); accuracy degrades in high dimensions (the curse of dimensionality flattens distances) and is sensitive to the chosen metric and feature scaling. **[confirmed]**
