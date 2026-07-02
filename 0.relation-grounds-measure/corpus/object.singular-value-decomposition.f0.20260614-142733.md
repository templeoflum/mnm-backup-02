---
name: singular-value-decomposition
type: object
object-type: theorem
essence: any matrix factors as A = UΣVᵀ — rotation, nonnegative scaling, rotation; the universal diagonalization
field: ["[[field.linear-algebra]]"]
status: proven
state: settled
attribution: Beltrami (1873) & Jordan (1874) independently; rectangular/general + low-rank approximation Eckart & Young (1936)
formalized: true
source: ["[[source.beltrami-1873]]", "[[source.eckart-young-1936]]", "[[source.strang-linear-algebra]]", "[[source.axler-linear-algebra]]"]
depends-on: ["[[object.spectral-theorem]]", "[[object.eigenvalue-eigenvector]]", "[[object.vector-space]]"]
used-by: []
aliases: ["object.singular-value-decomposition"]
---

**statement (plain)** — every matrix, even a non-square one, can be broken into three simple steps: a rotation (or reflection), then a stretch along perpendicular axes by non-negative amounts, then another rotation. The stretch factors are the singular values — they measure how much the matrix amplifies in each principal direction. Unlike eigenvalue diagonalization, this works for ANY matrix, which is why the SVD is the workhorse of numerical linear algebra and data analysis.

**statement (formal)** — for any A ∈ ℝ^{m×n} (or ℂ^{m×n}) there exist orthogonal (unitary) matrices U ∈ ℝ^{m×m}, V ∈ ℝ^{n×n} and a diagonal Σ ∈ ℝ^{m×n} with entries σ₁ ≥ σ₂ ≥ ⋯ ≥ σ_p ≥ 0 (p = min(m,n)) such that
A = U Σ Vᵀ  (A = U Σ V* in the complex case).
The σᵢ are the singular values (square roots of the eigenvalues of AᵀA); columns of U, V are the left and right singular vectors. **[confirmed]**

**status** — proven.

**proof (reference)** — apply the [[object.spectral-theorem]] to the symmetric positive-semidefinite matrix AᵀA: its eigenvalues are σᵢ², its orthonormal eigenvectors form V; set σᵢ = √(eigenvalue) and uᵢ = A vᵢ / σᵢ for σᵢ > 0, extend to an orthonormal U. See Strang [[source.strang-linear-algebra]]; Higham, "What Is the Singular Value Decomposition?" **[confirmed]**

**Eckart–Young theorem** — the truncated SVD A_k = Σ_{i=1}^{k} σᵢ uᵢ vᵢᵀ is the best rank-k approximation to A in both the spectral 2-norm (error σ_{k+1}) and the Frobenius norm (error (Σ_{i>k} σᵢ²)^{1/2}) [[source.eckart-young-1936]]. **[confirmed]**

**lineage (independent rediscovery)** — the SVD was found independently by E. [[Beltrami]] (1873, "Sulle funzioni bilineari") [[source.beltrami-1873]] and C. [[Jordan]] (1874) for bilinear forms; J. J. [[Sylvester]] reached it again for real square matrices (1889); the first treatment of rectangular and complex matrices, with the low-rank approximation theorem, is C. [[Eckart]] & G. [[Young]] (1936) [[source.eckart-young-1936]]. Documented in G. W. Stewart, "On the early history of the singular value decomposition," *SIAM Review* 35 (1993). **[confirmed]** (Beltrami/Eckart–Young originals not opened — **[confirmed as attribution]**).

**door** — Strang, *Introduction to Linear Algebra*, ch. 7 (SVD) [[source.strang-linear-algebra]]; Axler, *Linear Algebra Done Right*, ch. 7 [[source.axler-linear-algebra]].

**sources** — [[source.beltrami-1873]], [[source.eckart-young-1936]], [[source.strang-linear-algebra]], [[source.axler-linear-algebra]]; Wikipedia "Singular value decomposition," Stewart (*SIAM Review* 1993), and Higham, "What Is the Singular Value Decomposition?" (statement + attribution + Eckart–Young, two-source confirmed).
