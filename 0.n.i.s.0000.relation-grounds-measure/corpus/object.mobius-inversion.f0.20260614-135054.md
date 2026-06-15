---
name: mobius-inversion
type: object
object-type: theorem
essence: if g(n)=Σ_{d|n} f(d) then f(n)=Σ_{d|n} μ(d) g(n/d) — recover a function from its divisor sums
field: [field.multiplicative-number-theory, field.analytic-number-theory]
status: proven
state: verified
attribution: A. F. Möbius (1832)
formalized: true
source: [source.mobius-1832, source.apostol-1976, source.hardy-wright-1938]
depends-on: [object.mobius-function, object.dirichlet-convolution, object.multiplicative-function]
used-by: []
---

**statement (plain)** — suppose one arithmetic function g is built from another, f, by summing f over the divisors of each n. Then f can be recovered from g by the same kind of divisor sum, but weighted by the Möbius function. Möbius inversion is the "undo" button for divisor summation: it lets you invert g(n) = Σ_{d|n} f(d) back into f. It is the number-theoretic analogue of inclusion–exclusion.

**statement (formal)** — let f, g be arithmetic functions. Then
g(n) = Σ_{d∣n} f(d)  for all n  ⟺  f(n) = Σ_{d∣n} μ(d) g(n/d)  for all n,
where μ is the [[object.mobius-function]]. **[confirmed]**

**proof** — in the Dirichlet ring the hypothesis is g = f ∗ 1 (convolution with the constant function 1). Since 1 has Dirichlet inverse μ (because Σ_{d∣n} μ(d) = ε(n), i.e. 1 ∗ μ = ε), convolve both sides by μ:
g ∗ μ = (f ∗ 1) ∗ μ = f ∗ (1 ∗ μ) = f ∗ ε = f,
which written out is f(n) = Σ_{d∣n} μ(d) g(n/d). The converse follows the same way by convolving with 1. Full proof: [[object.dirichlet-convolution]] machinery; Apostol Thm 2.9. **[confirmed]**

**consequences** — gives φ(n) = Σ_{d∣n} μ(d)·(n/d) from n = Σ_{d∣n} φ(d); inverts the relation between the [[object.riemann-zeta-function]] and 1/ζ (the Dirichlet series of μ is 1/ζ(s)); underlies countless identities in the field. A general (poset / locally finite) version was developed by Rota in the 1960s, with the classical case being divisibility order on ℤ⁺.

**lineage** — A. F. Möbius (1832), "Über eine besondere Art von Umkehrung der Reihen" [[source.mobius-1832]]. **[confirmed as attribution]**

**sources** — Möbius (1832) [[source.mobius-1832]]; T. M. Apostol, §2.9 [[source.apostol-1976]]; Hardy & Wright ch. XVI–XVII [[source.hardy-wright-1938]]; cross-confirmed by Wikipedia "Möbius inversion formula." **[confirmed]**
