---
name: marchenko-pastur-law
type: object
object-type: law
essence: the limiting eigenvalue density of a large sample covariance matrix — the semicircle's analogue for XXᵀ
field: ["[[field.random-matrix-theory]]"]
status: established
state: settled
attribution: V. A. Marchenko & L. A. Pastur (1967)
formalized: true
source: ["[[source.marchenko-pastur-1967]]", "[[source.wishart-1928]]", "[[source.tao-rmt]]", "[[source.anderson-guionnet-zeitouni]]"]
depends-on: ["[[object.eigenvalue-eigenvector]]"]
used-by: []
aliases: ["object.marchenko-pastur-law"]
---

**statement (plain)** — when you estimate a covariance matrix from a finite sample whose dimension p is comparable to the number of observations n, the estimate is badly distorted: even if the true covariance is the identity, the sample eigenvalues spread out over a whole interval instead of clustering at 1. The Marchenko–Pastur law gives the exact limiting shape of that spread, as a function of the aspect ratio λ = p/n. It is the foundational result of high-dimensional statistics and the covariance-matrix counterpart of the [[object.wigner-semicircle-law]].

**statement (formal)** — let X be p×n with i.i.d. entries (mean 0, variance σ²), and form the sample covariance S = (1/n) X Xᵀ (p×p). As p, n → ∞ with p/n → λ ∈ (0, ∞), the empirical spectral distribution of S converges almost surely to the **Marchenko–Pastur law** with density
  f(x) = √((λ₊ − x)(x − λ₋)) / (2π σ² λ x),  for λ₋ ≤ x ≤ λ₊,
where the edges are
  λ± = σ²(1 ± √λ)².
If λ > 1 there is in addition a point mass of weight (1 − 1/λ) at x = 0 (S is then rank-deficient). **[confirmed]**

(Conventions vary: some authors use the aspect ratio q = n/p or the data matrix transposed; the law is the same up to this relabeling.)

**status** — established (limiting spectral distribution).

**proof (reference)** — standard via the Stieltjes transform: the resolvent of S satisfies a self-consistent (quadratic) equation whose solution inverts to the MP density; or via the method of moments, where the limiting moments count specific lattice paths. See [[source.tao-rmt]], [[source.anderson-guionnet-zeitouni]]. **[confirmed]**

**lineage** — proved by Volodymyr A. Marchenko and Leonid A. Pastur in 1967 [[source.marchenko-pastur-1967]]. The sample-covariance (Wishart) setting traces to J. Wishart (1928) [[source.wishart-1928]], who derived the finite-n distribution; Marchenko–Pastur supplied the large-dimensional limit. **[confirmed]**

**sources** — [[source.marchenko-pastur-1967]], [[source.wishart-1928]], [[source.tao-rmt]], [[source.anderson-guionnet-zeitouni]]; Wikipedia "Marchenko–Pastur distribution"; Lalley, "Random Matrices: Wigner and Marchenko–Pastur Theorems" (Univ. Chicago lecture notes).
