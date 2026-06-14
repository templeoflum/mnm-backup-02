---
name: riemann-hypothesis
type: object
object-type: conjecture
essence: every nontrivial zero of ζ(s) lies on the critical line Re(s) = 1/2 — open since 1859
field: [field.analytic-number-theory]
status: open
state: float
attribution: B. Riemann (1859)
formalized: false
source: [source.riemann-1859, source.clay-rh]
depends-on: [object.riemann-zeta-function]
used-by: []
---

**statement (plain)** — all the "non-obvious" zeros of the Riemann zeta function lie exactly on a single vertical line — the points where the real part equals 1/2. If true, it pins down the deviation of the primes from their average distribution (the [[object.prime-number-theorem]]) as tightly as possible.

**statement (formal)** — every nontrivial zero ρ of [[object.riemann-zeta-function]] ζ(s) — i.e. every zero in the critical strip 0 < Re(s) < 1 — satisfies Re(ρ) = 1/2. **[confirmed]** (as the statement)

**status** — **OPEN.** One of the most important unsolved problems in mathematics. Verified numerically for many billions of zeros; no proof or disproof.

**provenance** — stated by B. Riemann in "Über die Anzahl der Primzahlen unter einer gegebenen Größe" (1859) [[source.riemann-1859]]. It is **Hilbert's 8th problem** (1900) and a **Clay Mathematics Institute Millennium Prize Problem** (2000), carrying a US $1,000,000 prize; official statement by E. Bombieri [[source.clay-rh]]. **[confirmed]**

**consequences** — a true RH sharpens the error term in the prime number theorem to π(x) = Li(x) + O(√x ln x); a vast web of results are proved "conditional on RH."
