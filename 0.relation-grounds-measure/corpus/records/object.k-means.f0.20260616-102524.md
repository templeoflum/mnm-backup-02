---
name: k-means
type: object
object-type: algorithm
essence: partition points into k clusters by alternately assigning each point to its nearest centroid and recomputing centroids — local minimization of within-cluster variance
field: ["[[field.information-retrieval]]"]
status: established
state: settled
attribution: name coined by J. B. MacQueen (1967); the standard iterative algorithm is Lloyd's (Bell Labs 1957, published 1982); Steinhaus (1956) related
formalized: true
source: ["[[source.macqueen-1967]]", "[[source.lloyd-1982]]"]
depends-on: []
used-by: []
---

**statement (plain)** — to sort a pile of points into k groups with no labels given: pick k starting centres, then repeat two steps — (1) assign every point to the nearest centre, (2) move each centre to the mean of the points assigned to it — until nothing changes. The result is k clusters each represented by its centroid. It is the workhorse of unsupervised clustering and vector quantization, used in IR to group or index documents and to build visual/word vocabularies.

**statement (formal)** — minimize the within-cluster sum of squares J = Σⱼ Σ_{x∈Cⱼ} ‖x − μⱼ‖² over a partition {C₁…C_k} with centroids μⱼ = mean(Cⱼ). Lloyd's algorithm is coordinate descent on J: the assignment step fixes centroids and minimizes over assignments, the update step fixes assignments and minimizes over centroids; J is non-increasing each step, so it converges to a **local** minimum. The exact problem is NP-hard in general. **[confirmed]**

**basis** — MacQueen named the procedure "k-means" and gave the sequential version [[source.macqueen-1967]] [confirmed]; the standard batch ("Lloyd's") algorithm and its least-squares-quantization derivation are Lloyd's, circulated at Bell Labs in 1957 and published in 1982 [[source.lloyd-1982]] [confirmed]. **Limits:** converges only to a local optimum, so the result depends on initialization (k-means++ seeding mitigates this); k must be chosen in advance; it assumes roughly spherical, equal-size clusters and is distorted by outliers and non-convex shapes. **[confirmed]**
