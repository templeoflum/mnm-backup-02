---
name: cosine-similarity
type: object
object-type: metric
essence: the similarity of two vectors measured by the cosine of the angle between them — magnitude-invariant, so document length does not distort the comparison
field: [field.information-retrieval]
status: established
state: settled
attribution: G. Salton's vector space model (Salton, Wong & Yang 1975); standard in IR thereafter
formalized: true
source: [source.salton-1975, source.manning-2008]
depends-on: [object.vector-space-model]
used-by: []
---

**statement (plain)** — to compare two things each represented as a vector of numbers (e.g. two documents as vectors of term weights), measure the *angle* between them rather than the distance. Two vectors pointing the same way are maximally similar (cosine 1); orthogonal vectors share nothing (cosine 0); opposite vectors score −1. Because it uses only direction, not length, a short document and a long document about the same topic still score as similar — the property that made it the default similarity in the vector space model.

**statement (formula)** — for vectors **a**, **b**, cos(θ) = (**a** · **b**) / (‖**a**‖ ‖**b**‖) = Σᵢ aᵢbᵢ / (√Σᵢ aᵢ² · √Σᵢ bᵢ²). For non-negative term-weight vectors the value lies in [0, 1]. Equivalent to the dot product of the L2-normalized vectors. **[confirmed]**

**basis** — introduced as the similarity measure of the vector space model for automatic indexing [[source.salton-1975]] [confirmed]; the standard account, including length-normalization and its role in ranked retrieval, is in Manning, Raghavan & Schütze [[source.manning-2008]] [confirmed]. **Limits:** cosine ignores vector magnitude by construction, so it cannot distinguish frequency intensity where that matters; it treats dimensions as orthogonal (no term-correlation), and on raw counts it is dominated by frequent terms unless weighting (tf-idf) is applied first. A similarity measure, not a metric in the strict sense (1 − cos is not a true distance). **[confirmed]**
