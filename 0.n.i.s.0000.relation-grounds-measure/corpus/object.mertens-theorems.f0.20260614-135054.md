---
name: mertens-theorems
type: object
object-type: theorem
essence: three 1874 estimates on prime density — Σ log p/p ~ log x, Σ 1/p = log log x + M, ∏(1−1/p)⁻¹ ~ e^γ log x
field: [field.multiplicative-number-theory, field.analytic-number-theory]
status: proven
state: settled
attribution: F. Mertens (1874)
formalized: true
source: [source.mertens-1874, source.hardy-wright-1938, source.apostol-1976]
depends-on: [object.euler-product]
used-by: []
---

**statement (plain)** — Mertens proved three precise statements about how primes are distributed, all by elementary real analysis and 22 years before the prime number theorem. The famous ones: the reciprocals of the primes up to x add to log log x plus a fixed constant (so Σ 1/p diverges, but extremely slowly); and the product over primes p ≤ x of (1 − 1/p)⁻¹ grows like e^γ·log x, where γ is the Euler–Mascheroni constant. These pin down the "size" of the primes far more sharply than just knowing there are infinitely many.

**statement (formal)** — for x ≥ 2, with p ranging over primes:

- **First theorem.** Σ_{p≤x} (log p)/p = log x + O(1); more precisely |Σ_{p≤x} (log p)/p − log x| < 2.
- **Second theorem.** Σ_{p≤x} 1/p = log log x + M + o(1), where M = 0.2614972128… is the **Meissel–Mertens constant**.
- **Third theorem.** ∏_{p≤x} (1 − 1/p) ∼ e^{−γ} / log x, equivalently ∏_{p≤x} (1 − 1/p)^{−1} ∼ e^{γ} log x, where γ = 0.5772156649… is the **Euler–Mascheroni constant** (so log x · ∏_{p≤x}(1 − 1/p) → e^{−γ} ≈ 0.5614594836). **[confirmed]**

**status** — proven (1874), by elementary methods (no complex analysis, no prime number theorem). The constant in the third theorem being e^{−γ} (rather than just some constant) is the delicate part; the PNT later gives the same asymptotics with better error terms.

**proof** — Mertens (1874) derives the first theorem from estimating Σ_{n≤x} Λ(n)/n via the factorial / Legendre formula, then the second by partial summation, and the third from the second by exponentiating Σ log(1 − 1/p). Full proof: [[source.mertens-1874]]; standard texts Hardy & Wright ch. XXII [[source.hardy-wright-1938]], Apostol §4.8–4.9 [[source.apostol-1976]]. **[confirmed]**

**relation** — the third theorem is the asymptotic of the [[object.euler-product]] factors over primes up to x; it sits underneath sieve theory.

**lineage** — F. Mertens (1874), "Ein Beitrag zur analytischen Zahlentheorie," Crelle 78, 46–62 [[source.mertens-1874]]. **[confirmed]**

**sources** — Mertens (1874) [[source.mertens-1874]]; Hardy & Wright ch. XXII [[source.hardy-wright-1938]]; Apostol §4.8–4.9 [[source.apostol-1976]]; cross-confirmed by Wikipedia "Mertens' theorems," De Gruyter/Crelle and EUDML primary listings. **[confirmed]**
