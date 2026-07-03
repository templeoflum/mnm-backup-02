---
name: weierstrass-approximation-theorem
type: object
object-type: theorem
essence: every continuous function on a closed interval is a uniform limit of polynomials
field: ["[[field.approximation-theory]]", "[[field.real-analysis]]"]
status: proven
state: settled
attribution: K. Weierstrass (1885); constructive proof S. N. Bernstein (1912)
formalized: true
source: ["[[source.weierstrass-1885]]", "[[source.bernstein-1912]]", "[[source.trefethen-atap]]", "[[source.cheney-approx]]"]
depends-on: []
used-by: ["[[object.stone-weierstrass-theorem]]"]
---

**statement (plain)** — any continuous function on a closed, bounded interval can be approximated as closely as you like, everywhere at once, by a polynomial. Polynomials are dense among continuous functions in the uniform (max-error) sense. There is an analogous statement for periodic continuous functions and trigonometric polynomials.

**statement (formal)** — let f ∈ C[a,b]. For every ε > 0 there exists a polynomial p such that sup_{x∈[a,b]} |f(x) − p(x)| < ε. Equivalently, the polynomials are dense in (C[a,b], ‖·‖∞). The trigonometric version: every continuous 2π-periodic function is the uniform limit of trigonometric polynomials. **[confirmed]**

**status** — proven.

**proof** — Weierstrass's original 1885 proof approximates f by convolution with the Gaussian (heat) kernel and then truncates the kernel's power series to obtain a polynomial [[source.weierstrass-1885]]. A celebrated **constructive** proof was given by S. N. Bernstein in 1912 using the Bernstein polynomials Bₙ(f)(x) = Σₖ f(k/n)·C(n,k)·xᵏ(1−x)ⁿ⁻ᵏ on [0,1], with a probabilistic (law-of-large-numbers) argument [[source.bernstein-1912]]. Other standard proofs use Landau kernels, Fejér's theorem, or follow from [[object.stone-weierstrass-theorem]] as a special case. **[confirmed]**

**lineage** — the original source is K. Weierstrass, "Über die analytische Darstellbarkeit sogenannter willkürlicher Functionen einer reellen Veränderlichen," *Sitzungsberichte der Akademie zu Berlin* (1885), 633–639 and 789–805 (two parts) [[source.weierstrass-1885]]. This result, with Chebyshev's 1850s work, is an origin point of approximation theory. **[confirmed]**

**door** — Trefethen, *Approximation Theory and Approximation Practice* [[source.trefethen-atap]]; Cheney, *Introduction to Approximation Theory* [[source.cheney-approx]].

**sources** — [[source.weierstrass-1885]] (original, 1885), [[source.bernstein-1912]] (constructive proof), [[source.trefethen-atap]], [[source.cheney-approx]]. Bibliographic details cross-checked against the History of Approximation Theory archive and standard texts. **[confirmed]**
