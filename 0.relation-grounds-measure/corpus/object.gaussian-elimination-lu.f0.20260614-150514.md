---
name: gaussian-elimination-lu
type: object
object-type: algorithm
essence: solve Ax = b by eliminating below each pivot — equivalently factor A = LU, then forward/back-substitute, in O(n³)
field: [field.numerical-analysis, field.linear-algebra]
status: established
attribution: method ancient (Nine Chapters, c.179 AD) & Newton (1669–70); Gauss gave the systematic notation (early 19th c.); Turing (1948) cast it as the LU factorization
formalized: true
state: settled
source: [source.trefethen-bau-1997, source.turing-1948]
depends-on: [object.vector-space, object.rank-nullity-theorem]
used-by: []
aliases: ["object.gaussian-elimination-lu"]
---

**statement (plain)** — to solve a system of linear equations, systematically subtract multiples of one equation from the others to knock out variables one at a time until the system is triangular, then solve from the bottom up. The same elimination secretly writes the matrix as a lower-triangular times an upper-triangular matrix (A = LU), which is what you reuse to solve quickly for many right-hand sides.

**statement (formal)** — for A ∈ ℝ^{n×n}, Gaussian elimination reduces A to upper-triangular U by elementary row operations (subtract multiplier ℓ_{ik} = a_{ik}/a_{kk} times pivot row k from row i). The recorded multipliers form unit-lower-triangular L, giving the factorization
A = LU (with row interchanges, PA = LU).
One then solves Ax = b via Ly = Pb (forward substitution) and Ux = y (back substitution). Cost ≈ (2/3)n³ flops for the factorization, O(n²) per solve. **[confirmed]**

**method/derivation** — each elimination step is left-multiplication by a unit-lower-triangular elementary matrix; their product's inverse is L. **Partial pivoting** (swap in the largest-magnitude available pivot, the P in PA = LU) is needed for numerical stability — without it small pivots amplify rounding error. Backward error analysis (Wilkinson) shows GE with partial pivoting is backward stable in practice, governed by the growth factor and the matrix's [[object.condition-number]].

**lineage** — the elimination procedure appears (without proof) in the Chinese *Nine Chapters on the Mathematical Art* (c. 179 AD); Newton wrote it up for European algebra texts (1669–70, → *Arithmetica Universalis*, 1707). Gauss (early 19th c.) contributed the symmetric-elimination notation used by hand computers for least-squares normal equations; the name "Gaussian elimination" only standardized in the 1950s. Alan Turing recast the algorithm as the matrix factorization A = LU in his 1948 paper [[source.turing-1948]]. **[confirmed]**

**sources** — [[source.trefethen-bau-1997]] (door, Lectures 20–22); [[source.turing-1948]] (LU formulation); corroborated by Wikipedia/MacTutor history and Higham [[source.higham-2002]] for the stability/growth-factor analysis. **[confirmed]**
