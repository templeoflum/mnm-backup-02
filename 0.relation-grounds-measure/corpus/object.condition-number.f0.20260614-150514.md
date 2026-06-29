---
name: condition-number
type: object
object-type: concept
essence: how much a problem amplifies input error into output error — κ(A) = ‖A‖‖A⁻¹‖ for a linear system; large κ means ill-conditioned
field: [field.numerical-analysis, field.linear-algebra]
status: established
attribution: idea in von Neumann & Goldstine (1947); term and κ = ‖A‖‖A⁻¹‖ coined by Turing (1948); generalized by Rice (1966)
formalized: true
state: settled
source: [source.turing-1948, source.vonneumann-goldstine-1947, source.higham-2002]
depends-on: [object.eigenvalue-eigenvector]
used-by: [object.numerical-stability-backward-error]
---

**statement (plain)** — the condition number measures how sensitive a problem's answer is to small changes in its data, independent of any algorithm. A well-conditioned problem barely moves when the input is nudged; an ill-conditioned one swings wildly, so even a perfect computation can give a wildly wrong answer if the input carries rounding error. It is a property of the problem, not the method.

**statement (formal)** — for solving the linear system Ax = b with A invertible, the (relative) condition number is
κ(A) = ‖A‖ · ‖A⁻¹‖.
In the 2-norm, κ₂(A) = σ_max(A)/σ_min(A) (ratio of largest to smallest singular value); for symmetric positive-definite A this is λ_max/λ_min. A relative perturbation of size ε in the data can change the solution by up to ≈ κ(A)·ε in relative terms. By convention κ ≥ 1; orthogonal matrices are best-conditioned (κ₂ = 1). **[confirmed]**

**method/derivation** — perturbing Ax = b to (A+δA)(x+δx) = b+δb and bounding gives ‖δx‖/‖x‖ ≲ κ(A)(‖δA‖/‖A‖ + ‖δb‖/‖b‖). Combined with backward error analysis this yields the working rule of numerical analysis: **forward error ≲ condition number × backward error** (popularized by Higham). The condition number thus separates the problem's inherent difficulty (κ) from the algorithm's quality (backward error / [[object.numerical-stability-backward-error]]).

**lineage** — the conditioning idea (ratio of largest to smallest eigenvalue for SPD matrices) is in von Neumann & Goldstine's 1947 monograph [[source.vonneumann-goldstine-1947]]; Alan Turing coined the **term "condition number"** and the form κ = ‖A‖‖A⁻¹‖ (with M- and N-condition variants) in 1948 [[source.turing-1948]]. Wilkinson's 1963 book credits Turing and notes "ill-conditioned" was already common usage. John Rice generalized "a theory of condition" to general problems in 1966. **[confirmed]**

**sources** — [[source.turing-1948]]; [[source.vonneumann-goldstine-1947]]; [[source.higham-2002]] (modern reference + history); corroborated by N. Higham's "Who Invented the Matrix Condition Number?" and Wikipedia. **[confirmed]**
