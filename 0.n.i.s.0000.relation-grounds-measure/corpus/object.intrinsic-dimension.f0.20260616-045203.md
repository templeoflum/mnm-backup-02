---
name: intrinsic-dimension
type: object
object-type: concept
essence: the number of degrees of freedom (latent coordinates) needed to describe data that live in a high-dimensional ambient space but vary along far fewer directions
field: [field.intrinsic-dimension-manifold-learning]
status: established
state: settled
attribution: long-standing notion in pattern recognition; made operational for manifold-supported data by the manifold-learning and intrinsic-dimension-estimation literature (Tenenbaum 2000; Levina & Bickel 2004)
formalized: true
source: [source.levina-2004, source.lee-2007, source.tenenbaum-2000]
depends-on: [object.manifold-hypothesis]
used-by: [object.maximum-likelihood-intrinsic-dimension-estimator]
---

**statement (plain)** — even though a dataset sits in D-dimensional space, the data may actually move along only d directions (d ≪ D) — those d directions are its intrinsic dimension. A sheet of paper crumpled in 3-D is intrinsically 2-D; a video of a rotating object whose only change is the rotation angle is intrinsically 1-D. Estimating d is the first question of manifold learning: it says how many coordinates an embedding needs, and how compressible the data are.

**statement (formal/formula)** — if data are sampled from (or near) a d-dimensional manifold M ⊂ ℝ^D, the intrinsic dimension is dim(M) = d. The Levina–Bickel maximum-likelihood estimator estimates d locally from the distances T_j(x) to a point's nearest neighbors: m̂_k(x) = [ (1/(k−1)) Σ_{j=1}^{k−1} log( T_k(x) / T_j(x) ) ]^{−1}, averaged over points (and over a range of k) to give a global estimate.

**basis** — Levina & Bickel (2004) define and estimate intrinsic dimension via maximum likelihood on nearest-neighbor distances, validating on simulated manifolds and real data. [[source.levina-2004]] Tenenbaum, de Silva & Langford (2000) use the residual-variance-vs-embedding-dimension curve as an intrinsic-dimension diagnostic for Isomap. [[source.tenenbaum-2000]] Lee & Verleysen (2007) treat intrinsic-dimension estimation as a foundational step of nonlinear dimensionality reduction and survey the estimators. [[source.lee-2007]] **[confirmed]**

**limits** — intrinsic dimension is *estimated*, not given: estimates are sensitive to noise, sampling density, curvature, and the chosen neighborhood size k; real data are rarely exactly manifold-supported, so d is an approximation (often non-integer in practice). Different estimators (correlation dimension, MLE, PCA-based) can disagree. The concept presumes the manifold hypothesis holds for the data. [[object.manifold-hypothesis]]

**sources** — [[source.levina-2004]] · [[source.lee-2007]] · [[source.tenenbaum-2000]]
