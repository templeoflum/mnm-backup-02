---
name: locally-linear-embedding
type: object
object-type: algorithm
essence: nonlinear dimensionality reduction that preserves each point's local linear reconstruction weights and solves a sparse eigenproblem for the global embedding
field: [field.intrinsic-dimension-manifold-learning]
status: established
state: float
attribution: Roweis & Saul (2000)
formalized: true
source: [source.roweis-2000, source.lee-2007]
depends-on: [object.manifold-hypothesis]
used-by: []
---

**statement (plain)** — LLE assumes each data point and its neighbors sit on a roughly flat patch of the manifold, so each point can be rebuilt as a weighted blend of its neighbors. It learns those blending weights (which describe the local shape and don't care about position, rotation, or scale), then finds low-dimensional coordinates in which each point is rebuilt by the *same* weights. Stitching all the local patches together this way yields a single global low-dimensional layout — found by solving one eigenvalue problem, with no iterative tuning or local minima.

**statement (formal/formula)** — (1) for each x_i, choose k neighbors and find weights W minimizing Σ_i ‖ x_i − Σ_j W_ij x_j ‖², subject to Σ_j W_ij = 1 (closed-form, local least squares); (2) fix W and find embedding coordinates Y minimizing Φ(Y) = Σ_i ‖ y_i − Σ_j W_ij y_j ‖² = trace(Y M Yᵀ) with M = (I − W)ᵀ(I − W), under normalization constraints; the solution is the bottom non-trivial eigenvectors of the sparse matrix M.

**basis** — Roweis & Saul (2000) introduce LLE, prove the embedding reduces to a sparse eigenproblem, and demonstrate it on face and digit manifolds, recovering interpretable global coordinates. [[source.roweis-2000]] Lee & Verleysen (2007) present LLE as a canonical topology/neighborhood-preserving manifold-learning method alongside Isomap and Laplacian eigenmaps. [[source.lee-2007]] **[confirmed]**

**limits** — results depend strongly on the neighbor count k and can be unstable for small k or noisy data; the standard formulation assumes a single connected, well-sampled manifold; regularization is needed when neighbors outnumber the ambient dimension; like other spectral methods it gives an embedding but no explicit out-of-sample mapping. [[source.lee-2007]]

**sources** — [[source.roweis-2000]] · [[source.lee-2007]]
