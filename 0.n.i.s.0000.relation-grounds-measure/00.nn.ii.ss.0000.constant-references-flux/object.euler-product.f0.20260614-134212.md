---
name: euler-product
type: object
object-type: theorem
essence: the identity ζ(s) = ∏ₚ (1−p⁻ˢ)⁻¹ — the analytic bridge between the integers and the primes
field: [field.analytic-number-theory, field.multiplicative-number-theory]
status: proven
state: float
attribution: L. Euler (1737)
formalized: true
source: [source.euler-1737]
depends-on: [object.fundamental-theorem-of-arithmetic]
used-by: [object.riemann-zeta-function, object.dirichlet-theorem-arithmetic-progressions, object.dirichlet-l-function, object.mertens-theorems]
---

**statement (plain)** — the infinite sum of 1/nˢ over all positive integers equals the infinite product, over all primes p, of 1/(1 − p⁻ˢ). Because every integer factors uniquely into primes, summing over integers is the same as multiplying over primes — this identity *is* the fundamental theorem of arithmetic written analytically.

**statement (formal)** — for Re(s) > 1,
Σ_{n=1}^∞ n^{−s} = ∏_{p prime} (1 − p^{−s})^{−1}.
The product converges absolutely in the same half-plane. **[confirmed]**

**proof** — expand each factor as a geometric series (1 − p^{−s})^{−1} = Σ_{k≥0} p^{−ks}; multiplying over all primes and using unique factorization recovers each n^{−s} exactly once. Full proof: [[source.euler-1737]]; standard texts (Apostol [[source.apostol-1976]]). **[confirmed]**

**significance** — the first link between the distribution of primes and analysis; the seed of the [[object.riemann-zeta-function]] and of analytic number theory itself. A corollary (Euler) is that Σ 1/p diverges.

**source** — L. Euler, "Variae observationes circa series infinitas" (1737; pub. *Commentarii academiae scientiarum Petropolitanae* 9, 1744) [[source.euler-1737]]. **[confirmed]**
