---
name: multiplicative-function
type: object
object-type: definition
essence: an arithmetic function with f(1)=1 and f(mn)=f(m)f(n) whenever m, n are coprime — built from its values on prime powers
field: ["[[field.multiplicative-number-theory]]", "[[field.analytic-number-theory]]"]
status: established
state: settled
attribution: classical (Euler, Gauss, Dirichlet); standard formulation in Apostol
formalized: true
source: ["[[source.apostol-1976]]", "[[source.hardy-wright-1938]]"]
depends-on: ["[[object.fundamental-theorem-of-arithmetic]]"]
used-by: ["[[object.mobius-function]]", "[[object.dirichlet-convolution]]", "[[object.dirichlet-l-function]]", "[[object.mobius-inversion]]"]
aliases: ["object.multiplicative-function"]
---

**statement (plain)** — an arithmetic function (a function defined on the positive integers) is *multiplicative* if it is not identically zero and its value on a product of two coprime numbers is the product of its values. Such a function is completely determined by what it does on prime powers, because every integer factors uniquely into prime powers. If the product rule holds for *all* pairs (not just coprime ones), the function is *completely* (or *totally*) multiplicative.

**statement (formal)** — let f : ℤ⁺ → ℂ be an arithmetic function, f not identically 0. f is **multiplicative** iff f(mn) = f(m)f(n) for all m, n with gcd(m, n) = 1 (this forces f(1) = 1). It is **completely multiplicative** iff f(mn) = f(m)f(n) for *all* m, n ≥ 1. If f is multiplicative and n = ∏ pᵢ^{aᵢ}, then f(n) = ∏ f(pᵢ^{aᵢ}). **[confirmed]**

**examples** — multiplicative: the [[object.mobius-function]] μ, Euler's totient φ, the divisor functions σ_k, the unit ε(n)=[n=1], the constant 1. completely multiplicative: 1, the identity n ↦ n^s, and Dirichlet characters χ (the engine of the [[object.dirichlet-l-function]]). **[confirmed]**

**why keystone** — multiplicativity is what lets an arithmetic function factor across primes, which is exactly what turns a Dirichlet series into an [[object.euler-product]]. It is the structural backbone of the whole field. The multiplicative functions are closed under [[object.dirichlet-convolution]].

**sources** — T. M. Apostol, *Introduction to Analytic Number Theory*, ch. 2 [[source.apostol-1976]]; Hardy & Wright, *An Introduction to the Theory of Numbers*, ch. XVI [[source.hardy-wright-1938]]; cross-confirmed by Encyclopedia of Mathematics ("Multiplicative arithmetic function"). **[confirmed]**
