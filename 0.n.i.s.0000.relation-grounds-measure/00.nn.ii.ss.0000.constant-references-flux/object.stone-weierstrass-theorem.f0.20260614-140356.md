---
name: stone-weierstrass-theorem
type: object
object-type: theorem
essence: a subalgebra of C(X) that separates points and contains the constants is uniformly dense — the abstract Weierstrass theorem
field: [field.approximation-theory, field.functional-analysis, field.general-topology]
status: proven
state: float
attribution: M. H. Stone (1937; simplified 1948)
formalized: true
source: [source.stone-1937, source.stone-1948, source.cheney-approx]
depends-on: [object.weierstrass-approximation-theorem]
used-by: []
---

**statement (plain)** — replace the interval by any compact space and replace "polynomials" by any collection of continuous functions that (a) is closed under addition and multiplication, (b) contains the constants, and (c) can tell any two points apart. Then that collection is dense: every continuous function is a uniform limit of its members. The classical Weierstrass theorem is the case X = [a,b] with the polynomials, which separate points and contain the constants.

**statement (formal)** — let X be a compact Hausdorff space and A ⊆ C(X, ℝ) a subalgebra that contains a nonzero constant function. Then A is dense in (C(X, ℝ), ‖·‖∞) **if and only if** A separates the points of X (for x ≠ y there is g ∈ A with g(x) ≠ g(y)). Complex version: for A ⊆ C(X, ℂ) a *-subalgebra (closed under complex conjugation) that contains the constants and separates points, A is dense in C(X, ℂ). **[confirmed]**

**status** — proven.

**proof** — Stone's argument runs through the lattice form: the uniform closure of such a subalgebra is a lattice (closed under pointwise max and min — using that |g| is a uniform limit of polynomials in g², itself a consequence of the classical Weierstrass theorem), and a point-separating lattice containing constants is dense via a local interpolation argument. Full proof in [[source.stone-1948]]; original general form in [[source.stone-1937]]. **[confirmed]**

**lineage** — M. H. Stone, "Applications of the Theory of Boolean Rings to General Topology," *Trans. Amer. Math. Soc.* **41**(3) (1937), 375–481 [[source.stone-1937]]; simplified and re-expounded in "The Generalized Weierstrass Approximation Theorem," *Mathematics Magazine* **21** (1948), 167–184 & 237–254 [[source.stone-1948]]. Generalizes [[object.weierstrass-approximation-theorem]]. **[confirmed]**

**door** — Cheney, *Introduction to Approximation Theory* [[source.cheney-approx]].

**sources** — [[source.stone-1937]], [[source.stone-1948]], cross-checked against the Encyclopedia of Mathematics and Wikipedia statements and citations. **[confirmed]**
