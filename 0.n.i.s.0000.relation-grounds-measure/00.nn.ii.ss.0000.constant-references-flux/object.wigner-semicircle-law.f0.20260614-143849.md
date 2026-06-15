---
name: wigner-semicircle-law
type: object
object-type: law
essence: the eigenvalues of a large random symmetric matrix fill a semicircle — density ∝ √(4−x²) on [−2,2]
field: [field.random-matrix-theory]
status: established
state: verified
attribution: E. P. Wigner (1955 special case; 1958 general real symmetric)
formalized: true
source: [source.wigner-1955, source.wigner-1958, source.mehta-1967, source.tao-rmt, source.anderson-guionnet-zeitouni]
depends-on: [object.eigenvalue-eigenvector, field.probability-theory]
used-by: [object.tracy-widom-distribution]
---

**statement (plain)** — take a large symmetric matrix whose entries are independent random numbers (mean 0, fixed variance), and scale it by 1/√n. Its eigenvalues do not scatter arbitrarily: their histogram fills out a semicircle on the interval [−2, 2], densest in the middle and tapering to zero at the two edges. The shape does not depend on the fine details of the entry distribution — only on the variance. This universality is the founding fact of [[field.random-matrix-theory]].

**statement (formal)** — let M_n be an n×n real symmetric (or complex Hermitian) **Wigner matrix**: entries independent (up to symmetry), mean 0, off-diagonal variance σ². Set A_n = M_n / √n. Then, almost surely, the empirical spectral distribution of A_n converges weakly as n → ∞ to the **semicircle law** with density
  ρ(x) = (1 / 2πσ²) · √(4σ² − x²),  for |x| ≤ 2σ,  and 0 otherwise.
For σ = 1 this is ρ(x) = (1/2π)√(4 − x²) on [−2, 2]. **[confirmed]**

**status** — established (limit theorem; "law" in the RMT sense — a universal limiting distribution).

**proof (reference)** — two standard routes. (1) **Method of moments**: the 2k-th moment of the semicircle law is the Catalan number C_k, and E[(1/n)Tr A_n^{2k}] → C_k by counting non-crossing pair partitions (planar diagrams); odd moments vanish. (2) **Stieltjes transform**: the resolvent trace m_n(z) = (1/n)Tr(A_n − z)⁻¹ satisfies, in the limit, the self-consistent equation m(z) = 1/(−z − σ²m(z)), whose solution is the Stieltjes transform of the semicircle. See [[source.tao-rmt]], [[source.anderson-guionnet-zeitouni]], [[source.mehta-1967]]. **[confirmed]**

**lineage** — first proved by E. P. Wigner for a special "bordered" class (1955) [[source.wigner-1955]], then for general real symmetric ensembles of high dimension (1958) [[source.wigner-1958]]. Originally motivated by the statistics of energy levels of heavy atomic nuclei. **[confirmed]**

**sources** — [[source.wigner-1955]], [[source.wigner-1958]], [[source.mehta-1967]], [[source.tao-rmt]], [[source.anderson-guionnet-zeitouni]]; Wolfram MathWorld "Wigner's Semicircle Law"; Wikipedia "Wigner semicircle distribution."
