---
name: prime-number-theorem
type: object
object-type: theorem
essence: the primes thin out like 1/ln x — π(x) is asymptotic to x/ln x
field: [field.analytic-number-theory]
status: proven
state: float
attribution: conjectured Gauss (1792–93) & Legendre (1797–98); proved independently Hadamard and de la Vallée Poussin (1896)
formalized: true
source: [source.gauss-pnt-1849, source.legendre-1798, source.riemann-1859, source.hadamard-1896, source.de-la-vallee-poussin-1896, source.erdos-1949, source.selberg-1949, source.apostol-1976]
depends-on: [object.riemann-zeta-function, field.complex-analysis]
used-by: []
---

**statement (plain)** — the number of primes not exceeding x grows like x divided by the natural logarithm of x. So near a large number x, about 1 in every ln(x) integers is prime — primes thin out, slowly and predictably.

**statement (formal)** — let π(x) count the primes ≤ x. Then
π(x) ∼ x / ln x, i.e. lim_{x→∞} π(x) ln x / x = 1.
Equivalently and more accurately, π(x) ∼ Li(x) = ∫₂ˣ dt/ln t. **[confirmed]**

**status** — proven.

**lineage (conjecture)** — C. F. Gauss, by his own 1849 recollection, considered it "in 1792 or 1793" (age 15–16), via the density 1/ln x and the logarithmic integral; communicated in his 1849 letter to Encke [[source.gauss-pnt-1849]]. A.-M. Legendre conjectured the form x/(A ln x + B) in 1797–98 (*Essai sur la théorie des nombres*) [[source.legendre-1798]]. **[confirmed]**

**proof** — first proved **independently in 1896** by Jacques Hadamard [[source.hadamard-1896]] and Charles-Jean de la Vallée Poussin [[source.de-la-vallee-poussin-1896]], by complex analysis; the decisive step is that the [[object.riemann-zeta-function]] has **no zeros on the line Re(s) = 1**. The program was set up by Riemann's 1859 memoir [[source.riemann-1859]]. **[confirmed]**

**elementary proof** — a proof avoiding complex analysis was found in 1949 by Atle Selberg [[source.selberg-1949]] and Paul Erdős [[source.erdos-1949]] (built on Selberg's "fundamental formula"; marred by a priority dispute). "Elementary" means no complex analysis, not simple. **[confirmed]**

**door** — Apostol, *Introduction to Analytic Number Theory*, ch. 13 [[source.apostol-1976]].
