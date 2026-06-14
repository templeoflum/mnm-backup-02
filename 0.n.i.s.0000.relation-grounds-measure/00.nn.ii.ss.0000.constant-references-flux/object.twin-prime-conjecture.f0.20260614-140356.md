---
name: twin-prime-conjecture
type: object
object-type: conjecture
essence: there are infinitely many prime pairs differing by 2 (the smallest possible gap)
field: [field.prime-gap-statistics, field.analytic-number-theory]
status: open
state: float
attribution: general form (gap 2k) Alphonse de Polignac (1849); quantitative form Hardy–Littlewood (1923)
formalized: false
source: [source.polignac-1849, source.hardy-littlewood-1923, source.brun-1919, source.maynard-2015]
depends-on: []
used-by: [object.bounded-gaps-theorem]
---

**statement (plain)** — there are infinitely many pairs of primes that are exactly 2 apart (like 11 & 13, 17 & 19, 29 & 31). The prime gap of size 2 — the smallest gap possible above the pair (2,3) — occurs forever.

**statement (formal)** — there exist infinitely many primes p such that p + 2 is also prime. I.e. liminf_{n→∞} (p_{n+1} − p_n) = 2. **[confirmed as statement]**

**status** — **open.** Unproven and undisproven.

**quantitative form (first Hardy–Littlewood conjecture, 1923)** — if π₂(x) counts twin-prime pairs below x, then π₂(x) ∼ 2C₂ · x/(ln x)², where the twin-prime constant 2C₂ = 2∏_{p>2}(1 − 1/(p−1)²) ≈ 1.3203 [[source.hardy-littlewood-1923]]. This is itself open but matches numerics extremely well. **[confirmed]**

**lineage** — the general statement (for every even gap 2k, infinitely many such prime pairs — Polignac's conjecture, with twin primes the case 2k=2) is A. de Polignac's, 1849 [[source.polignac-1849]]; the gap-2 special case is often called "the twin prime conjecture" without a single named originator. The asymptotic density is Hardy & Littlewood's, 1923. **[confirmed as attribution]**

**partial results** — V. Brun (1919) proved the sum of reciprocals of twin primes converges (Brun's constant B₂ ≈ 1.902), showing twin primes are sparse but NOT settling infinitude [[source.brun-1919]]. The bounded-gaps theorem [[object.bounded-gaps-theorem]] (Zhang 2013; Maynard–Tao 2014; Polymath8) proves liminf (p_{n+1} − p_n) ≤ 246 — infinitely many prime pairs within a finite bound — the closest unconditional approach, but 246 ≠ 2. Under the Elliott–Halberstam conjecture, Maynard's method gives ≤ 12 [[source.maynard-2015]]. **[confirmed]**

**door** — Polymath8 papers (open, arXiv); Soundararajan's survey on small gaps between primes.
