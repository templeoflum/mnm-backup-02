---
name: best-uniform-approximation
type: object
object-type: definition
essence: the minimax problem — the element of a subspace minimizing the worst-case (uniform-norm) error to a target function
field: [field.approximation-theory]
status: proven
state: float
attribution: P. L. Chebyshev (1854/1859) posed it; existence/uniqueness theory standard (Borel 1905, Haar 1918)
formalized: true
source: [source.chebyshev-1854, source.chebyshev-1859, source.borel-1905, source.trefethen-atap, source.cheney-approx]
depends-on: []
used-by: [object.chebyshev-equioscillation-theorem]
---

**statement (plain)** — given a function f and a family of "simpler" functions (say polynomials of degree ≤ n), the best uniform — or minimax — approximation is the member of that family whose largest error to f, measured over the whole interval, is as small as possible. It is "best in the worst case." This is the central optimization problem of classical approximation theory, distinct from least-squares (L²) approximation.

**statement (formal)** — let X = (C[a,b], ‖·‖∞) and V ⊆ X a finite-dimensional subspace. A **best uniform approximation** to f ∈ X from V is p* ∈ V with ‖f − p*‖∞ = inf_{p∈V} ‖f − p‖∞ = E_V(f). Existence: for any finite-dimensional V a best approximation exists (the infimum is attained). Uniqueness: if V is a Haar (Chebyshev) system — every nonzero v ∈ V has at most dim V − 1 zeros — the best approximation is unique. The polynomials of degree ≤ n form such a system. **[confirmed]**

**status** — proven (existence/uniqueness are theorems; the object is the defining problem).

**proof (existence)** — the map p ↦ ‖f − p‖∞ is continuous and coercive on the finite-dimensional V, so it attains its infimum on a closed bounded set (compactness in finite dimensions). **Uniqueness** under the Haar condition follows from the equioscillation characterization (see [[object.chebyshev-equioscillation-theorem]]). The Haar-system framing is due to A. Haar (1918). Full treatment in [[source.cheney-approx]] and [[source.trefethen-atap]]. **[confirmed]**

**lineage** — the problem originates with P. L. Chebyshev (1854 linkage memoir [[source.chebyshev-1854]], systematic 1859 [[source.chebyshev-1859]]); the rigorous existence/uniqueness/equioscillation theory is associated with É. Borel (1905) [[source.borel-1905]] and A. Haar (1918, the Haar condition). **[confirmed]**

**sources** — [[source.chebyshev-1854]], [[source.chebyshev-1859]], [[source.borel-1905]], cross-checked against the Encyclopedia of Mathematics and standard approximation-theory lecture notes (e.g. Cambridge DAMTP). **[confirmed]**
