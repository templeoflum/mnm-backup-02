---
name: gaussian-ensembles
type: object
object-type: definition
essence: the three canonical random-matrix ensembles GOE/GUE/GSE — real/complex/quaternion, Dyson index β = 1/2/4
field: ["[[field.random-matrix-theory]]"]
status: established
state: settled
attribution: definitions due to Wigner/Dyson; β=1,2,4 classification F. J. Dyson (1962)
formalized: true
source: ["[[source.dyson-1962]]", "[[source.wigner-1955]]", "[[source.mehta-1967]]", "[[source.tao-rmt]]"]
depends-on: ["[[object.eigenvalue-eigenvector]]"]
used-by: ["[[object.tracy-widom-distribution]]", "[[object.eigenvalue-repulsion-level-spacing]]"]
---

**statement (plain)** — the three "Gaussian ensembles" are the canonical recipes for a random matrix. Each fills a symmetric matrix with independent Gaussian numbers and asks for its eigenvalues. They differ in the number system of the entries — real, complex, or quaternion — which is the same as the kind of symmetry the physical system has (time-reversal present and integer spin, absent, or present with half-integer spin). This single distinction, the **Dyson index** β = 1, 2, 4, controls everything downstream: how strongly the eigenvalues repel, the spacing law, the edge fluctuations. These are the workbench objects of [[field.random-matrix-theory]].

**statement (formal)** — let H be an N×N Hermitian matrix and define the probability measure ∝ exp(−(β/4) Tr H²) dH (with the appropriate Lebesgue measure on the independent real parameters). The three classical cases:
- **GOE** (Gaussian Orthogonal Ensemble), β = 1: H real symmetric; measure invariant under H ↦ OHOᵀ for orthogonal O.
- **GUE** (Gaussian Unitary Ensemble), β = 2: H complex Hermitian; measure invariant under H ↦ UHU* for unitary U.
- **GSE** (Gaussian Symplectic Ensemble), β = 4: H quaternion self-dual (2N×2N complex Hermitian with quaternion structure); measure invariant under symplectic conjugation.

The **joint eigenvalue density** is, in all three cases,
  ρ_{β,N}(λ₁,…,λ_N) = (1/Z_{β,N}) · ∏_{i<j} |λ_i − λ_j|^β · exp( −(β/4) Σ_i λ_i² ),
with normalizing constant Z_{β,N} (a Selberg integral). The Vandermonde factor ∏|λ_i − λ_j|^β is the source of eigenvalue repulsion. **[confirmed]**

**status** — established (definitions; the joint-density formula is a theorem, derived by the Jacobian of the eigen-decomposition).

**lineage** — the ensembles arose in Wigner's nuclear-physics work [[source.wigner-1955]]; the systematic β = 1, 2, 4 classification — that exactly three ensembles arise, tied to the real division algebras ℝ, ℂ, ℍ via an anti-unitary time-reversal operator (T² = +1 → GOE, none → GUE, T² = −1 → GSE) — is Freeman Dyson's "threefold way" [[source.dyson-1962]]. Codified by Mehta [[source.mehta-1967]]. **[confirmed]**

**sources** — [[source.dyson-1962]], [[source.wigner-1955]], [[source.mehta-1967]], [[source.tao-rmt]]; Wikipedia "Gaussian ensemble."
