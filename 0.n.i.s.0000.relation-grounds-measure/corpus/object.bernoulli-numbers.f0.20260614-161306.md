---
name: bernoulli-numbers
type: object
object-type: definition
essence: a sequence of rational numbers Bₙ that governs sums of powers, the Euler–Maclaurin formula, and even zeta values
field: [field.special-functions-series-acceleration]
status: established
state: settled
attribution: Jacob Bernoulli (*Ars Conjectandi*, Part II, 1713, posthumous); independently Seki Takakazu (1712, posthumous); the generating-function definition and the name due to Euler (1730s)
formalized: true
source: [source.bernoulli-1713, source.seki-1712]
depends-on: []
used-by: [object.euler-maclaurin-formula]
---

**statement (plain)** — the Bernoulli numbers are a single fixed sequence of rational numbers B₀, B₁, B₂, … that keeps reappearing across analysis and number theory. Jacob Bernoulli found them as the universal constants that give one uniform formula for the sum of the m-th powers 1ᵐ + 2ᵐ + … + (n−1)ᵐ for every exponent m at once. The same numbers then turn up as the correction terms in the Euler–Maclaurin summation formula and in the exact values of the zeta function at even integers. The first few are B₀ = 1, B₁ = −1/2, B₂ = 1/6, B₄ = −1/30, B₆ = 1/42, with every odd-index number past B₁ equal to zero.

**statement (formula)** — defined by the exponential generating function
t / (eᵗ − 1) = Σ_{n=0}^{∞} Bₙ · tⁿ / n!  (|t| < 2π),
which fixes the convention B₁ = −1/2. (A common alternative convention takes B₁ = +1/2, using t/(1−e⁻ᵗ); the two agree on all other terms.) Equivalently, the sums of powers (Faulhaber's formula):
Σ_{k=0}^{n−1} kᵐ = (1/(m+1)) Σ_{j=0}^{m} C(m+1, j) Bⱼ n^{m+1−j}. **[confirmed]**

**status** — established (a defined sequence / standard object, not a theorem to be open or proven).

**basis** — the generating-function definition is the modern standard; Bernoulli's original route was the power-sum (Faulhaber) identity, where the Bₙ are exactly the constants making the formula uniform in m. Key consequences: the even zeta values ζ(2n) = (−1)ⁿ⁺¹ B₂ₙ (2π)²ⁿ / (2 (2n)!), and the Euler–Maclaurin remainder terms (hence the dependence in [[object.euler-maclaurin-formula]]). **[confirmed]**

**lineage** — Jacob Bernoulli stated the unifying sequence in *Ars Conjectandi* (Part II, published posthumously 1713) [[source.bernoulli-1713]]; Seki Takakazu had the numbers independently, published a year earlier (1712, posthumous), though not as a single-sequence formula [[source.seki-1712]]. Euler later gave the exponential generating function and the name "Bernoulli numbers" (1730s). Carried as a Bernoulli/Seki co-origin with Euler's codification, not flattened. **[confirmed]**

**sources** — Wikipedia, "Bernoulli number"; P. Luschny, "The Bernoulli Manifesto" (luschny.de); MacTutor (St Andrews).
