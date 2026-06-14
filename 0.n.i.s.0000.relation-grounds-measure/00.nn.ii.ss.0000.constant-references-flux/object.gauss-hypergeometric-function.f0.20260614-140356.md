---
name: gauss-hypergeometric-function
type: object
object-type: definition
essence: ₂F₁(a,b;c;z) = Σ (a)ₙ(b)ₙ/(c)ₙ · zⁿ/n! — the series whose ratio of consecutive terms is rational, the master special function
field: [field.special-functions-series-acceleration, field.complex-analysis]
status: established
state: float
attribution: series known to Euler/Pfaff; codified by C. F. Gauss (1812, publ. 1813)
formalized: true
source: [source.gauss-1813, source.dlmf, source.abramowitz-stegun-1964]
depends-on: [object.gamma-function]
used-by: []
---

**statement (plain)** — the hypergeometric function is the sum of a power series in z whose successive terms have a fixed rational ratio depending on three parameters a, b, c. Tuning those parameters recovers a huge range of functions — the logarithm, arctangent, Legendre, Jacobi, Chebyshev polynomials, elliptic integrals, and more — so it serves as a single "master" special function. It also solves the most general second-order linear ODE with three regular singular points.

**statement (formal)** — for |z| < 1 (DLMF §15.2),
₂F₁(a,b;c;z) = Σ_{n=0}^∞ [(a)ₙ (b)ₙ / (c)ₙ] · zⁿ/n! = 1 + (ab/c)z + [a(a+1)b(b+1)/(c(c+1)·2!)]z² + …,
where (x)ₙ = x(x+1)…(x+n−1) is the Pochhammer symbol (rising factorial), c ∉ {0,−1,−2,…}. On |z|=1 it converges absolutely iff Re(c−a−b) > 0. It continues analytically to ℂ ∖ [1,∞). It is a solution of the hypergeometric ODE z(1−z)w″ + [c − (a+b+1)z]w′ − ab·w = 0. The regularized form 𝐅(a,b;c;z) = Σ (a)ₙ(b)ₙ/[Γ(c+n) n!] zⁿ is entire in a, b, c. Gauss's summation theorem: ₂F₁(a,b;c;1) = Γ(c)Γ(c−a−b)/[Γ(c−a)Γ(c−b)] for Re(c−a−b) > 0. **[confirmed]**

**lineage** — special cases of the series go back to Euler and J. F. Pfaff. The systematic theory — convergence, the fifteen contiguous relations, the continued-fraction expansion of a ratio of two such series, and the value at z=1 — is [[Carl Friedrich Gauss]], "Disquisitiones generales circa seriem infinitam …," presented to the Göttingen Royal Society in 1812 and printed 1813; Gauss introduced the notation F(a,b,c,x). [[source.gauss-1813]] Often cited "Gauss 1812." **[confirmed]**

**sources** — definition & properties: DLMF §15.1–15.4 [[source.dlmf]]; A&S ch. 15 [[source.abramowitz-stegun-1964]]; founding memoir [[source.gauss-1813]]. **[confirmed]**
