---
name: maximum-likelihood-intrinsic-dimension-estimator
type: object
object-type: method
essence: maximum-likelihood estimate of a dataset's intrinsic dimension from the distances to each point's nearest neighbors (Levina–Bickel MLE)
field: [field.intrinsic-dimension-manifold-learning]
status: established
state: float
attribution: Levina & Bickel (2004)
formalized: true
source: [source.levina-2004, source.lee-2007]
depends-on: [object.intrinsic-dimension, object.manifold-hypothesis]
used-by: []
---

**statement (plain)** — to measure how many degrees of freedom data really have, look at how fast neighbors accumulate as you grow a small ball around each point. In d dimensions the count of points inside a ball of radius r grows like r^d, so the spacing of a point's nearest neighbors encodes d. The Levina–Bickel method models those neighbor counts as a Poisson process and picks the d that makes the observed neighbor distances most likely — a maximum-likelihood estimate of intrinsic dimension, computed per point and averaged.

**statement (formal/formula)** — treating points within distance r of x as an inhomogeneous Poisson process with rate ∝ d·r^{d−1}, the per-point ML estimate from the first k neighbors is m̂_k(x) = [ (1/(k−1)) Σ_{j=1}^{k−1} log( T_k(x) / T_j(x) ) ]^{−1}, where T_j(x) is the distance from x to its j-th nearest neighbor. A global estimate averages m̂_k(x) over all points and (to stabilize) over a range of k.

**basis** — Levina & Bickel (2004) derive the estimator, analyze its bias and variance theoretically and by simulation, and show it outperforms the correlation-dimension and a nearest-neighbor estimator on simulated and real datasets. [[source.levina-2004]] Lee & Verleysen (2007) cover maximum-likelihood and other local intrinsic-dimension estimators within the standard nonlinear-dimensionality-reduction framework. [[source.lee-2007]] **[confirmed]**

**limits** — the estimate is biased (notably, the naive average of reciprocals vs. reciprocal of averages matters; a known positive bias led to later corrections such as MacKay–Ghahramani's averaging of inverses); it is sensitive to the neighborhood size k, to noise, to curvature, and to non-uniform sampling, and presumes locally manifold-like data. It produces a (often non-integer) point estimate, not a guaranteed integer dimension. [[source.levina-2004]] [[source.lee-2007]]

**sources** — [[source.levina-2004]] · [[source.lee-2007]]
