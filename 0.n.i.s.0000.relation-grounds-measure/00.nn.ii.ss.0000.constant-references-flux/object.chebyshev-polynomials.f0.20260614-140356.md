---
name: chebyshev-polynomials
type: object
object-type: definition
essence: the polynomials T_n(x) = cos(n·arccos x); the monic 2^(1−n)T_n deviates least from zero in the uniform norm on [−1,1]
field: [field.approximation-theory]
status: established
state: verified
attribution: P. L. Chebyshev (1854); name and modern theory standard
formalized: true
source: [source.chebyshev-1854, source.trefethen-atap, source.cheney-approx]
depends-on: [object.chebyshev-equioscillation-theorem]
used-by: []
---

**statement (plain)** — the Chebyshev polynomials of the first kind are defined by Tₙ(cos θ) = cos(nθ); on [−1,1] they oscillate between −1 and +1, hitting those extremes n+1 times. Their key extremal property: among all monic polynomials of degree n, the scaled Chebyshev polynomial is the one that stays smallest (in worst-case absolute value) on [−1,1]. They are the "least-deviating-from-zero" polynomials and the building blocks of practical polynomial approximation.

**statement (formal)** — define Tₙ(x) = cos(n·arccos x) for x ∈ [−1,1], equivalently by T₀ = 1, T₁ = x, T_{n+1}(x) = 2x·Tₙ(x) − T_{n−1}(x). Then Tₙ has leading coefficient 2^{n−1} (n ≥ 1), and the **monic** polynomial 2^{1−n}Tₙ uniquely minimizes ‖·‖∞ on [−1,1] among monic degree-n polynomials, with minimal norm 2^{1−n}. Its error from zero equioscillates at the n+1 points cos(kπ/n), k = 0,…,n. **[confirmed]**

**status** — proven (the minimal-deviation property is a theorem; the object itself is a definition).

**proof (extremal property)** — direct consequence of the equioscillation criterion: 2^{1−n}Tₙ equioscillates between ±2^{1−n} at n+1 points, which characterizes the best uniform approximation of xⁿ by lower-degree polynomials; hence it is the unique monic minimizer. See [[object.chebyshev-equioscillation-theorem]]. Full treatment in [[source.trefethen-atap]] and [[source.cheney-approx]]. **[confirmed]**

**lineage** — introduced by P. L. Chebyshev in his 1854 study of linkages and the least-deviation problem [[source.chebyshev-1854]]; extended to the complex plane by G. Faber. The recurrence, trigonometric form, and minimal-sup-norm property are standard. **[confirmed]**

**sources** — [[source.chebyshev-1854]], [[source.trefethen-atap]], [[source.cheney-approx]], cross-checked against Wolfram MathWorld ("Chebyshev Polynomial of the First Kind") and Wikipedia ("Chebyshev polynomials"). **[confirmed]**
