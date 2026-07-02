---
name: monte-carlo-integration
type: object
object-type: method
essence: estimate an integral as the average of the integrand over random samples — error falls like 1/√N, independent of dimension
field: ["[[field.monte-carlo-methods]]"]
status: established
state: settled
attribution: Ulam (idea, 1946) with von Neumann at Los Alamos; named "Monte Carlo" by Metropolis; first published Metropolis & Ulam (1949)
formalized: true
source: ["[[source.metropolis-ulam-1949]]", "[[source.robert-casella]]", "[[source.mackay-itila]]"]
depends-on: []
used-by: ["[[object.importance-sampling]]", "[[object.markov-chain-monte-carlo]]"]
---

**statement (plain)** — to compute an integral (or expectation) you can't do by hand, draw many random points, evaluate the function at each, and average. As you draw more points the average closes in on the true value. The headline property: the typical error shrinks like 1 over the square root of the number of samples — and that rate does not get worse as the number of dimensions grows, which is why the method beats grid quadrature in high dimensions.

**statement (formal)** — to estimate I = ∫ f(x) p(x) dx = E_p[f(X)], draw X₁,…,X_N i.i.d. from p and form the estimator Î_N = (1/N) Σ_{i=1}^N f(X_i). Then E[Î_N] = I (unbiased), and by the **law of large numbers** Î_N → I almost surely. By the **central limit theorem**, √N (Î_N − I) → 𝒩(0, σ²) with σ² = Var_p(f(X)), so the standard error is σ/√N — an **O(N^{−1/2})** rate that is independent of the dimension of x. **[confirmed]**

**basis** — rests on the [[object.completeness-axiom]]-level limit theorems of probability: the strong law of large numbers (consistency) and the central limit theorem (the √N rate and the error's Gaussian shape). The variance σ²/N depends only on the integrand's variance and N, not on dimension — this dimension-independence is the method's defining advantage over deterministic quadrature, which suffers the curse of dimensionality. **[confirmed]**

**lineage** — the idea is Stanisław Ulam's (mid-1946, while convalescing and playing solitaire), developed with John von Neumann at Los Alamos for neutron-diffusion problems; Nicholas Metropolis suggested the name "Monte Carlo" after the Monaco casino where Ulam's uncle gambled. First open publication: Metropolis & Ulam, "The Monte Carlo Method," *JASA* 44 (1949):335–341. [[source.metropolis-ulam-1949]] **[confirmed]**

**sources** — [[source.metropolis-ulam-1949]]; door texts [[source.robert-casella]], [[source.mackay-itila]]; cross-checked against Wikipedia "Monte Carlo method" / "Monte Carlo integration." **[confirmed]**
