---
name: isomap
type: object
object-type: algorithm
essence: nonlinear dimensionality reduction that estimates geodesic distances on a neighborhood graph and embeds them with classical MDS
field: ["[[field.manifold-learning]]"]
status: established
state: settled
attribution: Tenenbaum, de Silva & Langford (2000)
formalized: true
source: ["[[source.tenenbaum-2000]]", "[[source.lee-2007]]"]
depends-on: ["[[object.manifold-hypothesis]]"]
used-by: []
---

**statement (plain)** — Isomap unrolls a curved manifold so that distance *along* the manifold is preserved, not straight-line distance through the ambient space. It builds a graph connecting each point to its nearest neighbors, measures distance between far-apart points as the shortest path through that graph (an estimate of geodesic distance), then lays the points out in a low-dimensional space so those graph distances are matched as closely as possible. On the "Swiss roll" it recovers the flat 2-D sheet that linear methods cannot.

**statement (formal/formula)** — (1) build a k-NN (or ε-ball) neighborhood graph on the data; (2) compute the matrix of shortest-path distances D_G (Dijkstra/Floyd) as geodesic-distance estimates; (3) apply classical multidimensional scaling to D_G — double-center to B = −½ J (D_G ∘ D_G) J, take the top-d eigenvectors/eigenvalues, and set the embedding Y = Λ_d^{1/2} V_d^T. The residual variance over candidate d estimates the intrinsic dimension.

**basis** — Tenenbaum, de Silva & Langford (2000) introduce the algorithm and demonstrate it on Swiss-roll, face-image, and handwritten-digit data, showing recovery of meaningful global coordinates and a convergence guarantee to the true geodesic structure under suitable sampling. [[source.tenenbaum-2000]] Lee & Verleysen (2007) present Isomap as a canonical distance-preserving manifold-learning method and analyze its place among alternatives. [[source.lee-2007]] **[confirmed]**

**limits** — Isomap assumes a single, well-sampled, convex (no holes) manifold; it is sensitive to the neighborhood size (too large "short-circuits" the graph across folds), degrades with noise and non-uniform sampling, struggles with non-convex or disconnected manifolds, and the all-pairs shortest-path + dense eigendecomposition is costly (landmark/approximate variants mitigate this). [[source.lee-2007]]

**sources** — [[source.tenenbaum-2000]] · [[source.lee-2007]]
