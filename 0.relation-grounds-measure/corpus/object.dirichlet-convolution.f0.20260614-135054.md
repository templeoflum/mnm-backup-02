---
name: dirichlet-convolution
type: object
object-type: definition
essence: (f∗g)(n)=Σ_{d|n} f(d)g(n/d) — the multiplication that makes arithmetic functions a commutative ring
field: ["[[field.multiplicative-number-theory]]", "[[field.analytic-number-theory]]"]
status: established
state: settled
attribution: P. G. L. Dirichlet (divisor-sum operation); ring structure standard (E. T. Bell, Cashwell–Everett)
formalized: true
source: ["[[source.apostol-1976]]", "[[source.hardy-wright-1938]]"]
depends-on: ["[[object.multiplicative-function]]"]
used-by: ["[[object.mobius-inversion]]"]
aliases: ["object.dirichlet-convolution"]
---

**statement (plain)** — the Dirichlet convolution of two arithmetic functions f and g is a new arithmetic function: to evaluate it at n, run over every way of writing n as a product of two positive factors d·(n/d), multiply f of one factor by g of the other, and add up. Under ordinary (pointwise) addition and this convolution as multiplication, the arithmetic functions form a commutative ring with identity — the Dirichlet ring.

**statement (formal)** — for arithmetic functions f, g : ℤ⁺ → ℂ,
(f ∗ g)(n) = Σ_{d∣n} f(d) g(n/d) = Σ_{ab = n} f(a) g(b).
∗ is commutative, associative, and distributes over pointwise addition. The identity element is ε(n) = [n = 1]: f ∗ ε = f. An arithmetic function f has a Dirichlet inverse f⁻¹ (with f ∗ f⁻¹ = ε) **iff** f(1) ≠ 0; the units of the ring are exactly the f with f(1) ≠ 0. **[confirmed]**

**key facts** — the convolution of two [[object.multiplicative-function]]s is again multiplicative (so the multiplicative functions form a subgroup of the units). The Dirichlet inverse of the constant function 1 is the [[object.mobius-function]]: 1 ∗ μ = ε. This is the algebraic heart of [[object.mobius-inversion]]. On Dirichlet series, convolution corresponds to multiplication: (Σ f(n)n⁻ˢ)(Σ g(n)n⁻ˢ) = Σ (f∗g)(n) n⁻ˢ — the link to the [[object.euler-product]] and the [[object.dirichlet-l-function]]. **[confirmed]**

**lineage** — the divisor-sum operation is classical (Dirichlet); the recognition that arithmetic functions form a commutative ring (an integral domain, in fact a UFD) under ∗ is due to E. T. Bell and to Cashwell & Everett (1959). Carried as a definition with that structural note. **[confirmed for the operation; candidate for exact ring-theory attribution]**

**sources** — T. M. Apostol, *Introduction to Analytic Number Theory*, §2.6–2.8 [[source.apostol-1976]]; Hardy & Wright ch. XVII [[source.hardy-wright-1938]]; cross-confirmed by Wikipedia "Dirichlet convolution" and OEIS Wiki. **[confirmed]**
