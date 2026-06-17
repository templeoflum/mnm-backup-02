---
name: numerical-stability-backward-error
type: object
object-type: concept
essence: a computed answer is good if it is the exact answer to a nearby problem — judge the algorithm by how much it perturbs the data, not the result
field: [field.numerical-analysis]
status: established
attribution: backward-error idea used by von Neumann and Turing; founded and popularized as systematic theory by Wilkinson (1963, 1965)
formalized: true
state: settled
source: [source.wilkinson-1963, source.wilkinson-1965, source.higham-2002]
depends-on: [object.condition-number]
used-by: []
---

**statement (plain)** — backward error analysis reframes the question "how wrong is my computed answer?" into "for what slightly-changed input would my computed answer be exactly right?" An algorithm is **backward stable** if the computed result is the exact answer to a problem only a tiny bit different from the one you posed. This is the deep move of numerical analysis: instead of tracking how rounding errors snowball forward, you push all the error back onto the input data, where the [[object.condition-number]] then tells you how much it matters.

**statement (formal)** — for a problem f and a computed result ŷ = fl(f(x)), the **backward error** is the smallest Δx with ŷ = f(x + Δx); the **forward error** is ‖ŷ − f(x)‖. An algorithm is backward stable if the backward error is of order the unit roundoff u (machine epsilon). The three are linked by
forward error ≲ condition number × backward error.
A backward-stable algorithm therefore gives accurate answers exactly when the problem is well-conditioned. **[confirmed]**

**method/derivation** — each floating-point operation satisfies fl(a ∘ b) = (a ∘ b)(1 + δ) with |δ| ≤ u. Accumulating these per-operation perturbations and refactoring them as perturbations of the original data yields a backward-error bound; e.g. Wilkinson showed the computed solution of a triangular system, or of Ax = b by Gaussian elimination with partial pivoting, is the exact solution of a slightly perturbed system (bound involving the growth factor and n·u).

**lineage** — backward error reasoning was used by von Neumann and by Turing in the late 1940s, but James H. Wilkinson **founded it as a systematic theory** and popularized it: *Rounding Errors in Algebraic Processes* (1963) [[source.wilkinson-1963]] and *The Algebraic Eigenvalue Problem* (1965) [[source.wilkinson-1965]] — carry in that order. Higham's *Accuracy and Stability of Numerical Algorithms* is the standard modern synthesis. **[confirmed / confirmed as attribution]**

**sources** — [[source.wilkinson-1963]]; [[source.wilkinson-1965]]; [[source.higham-2002]]; corroborated by Trefethen & Bau [[source.trefethen-bau-1997]] (Lectures 12–15 on conditioning and stability). **[confirmed]**
