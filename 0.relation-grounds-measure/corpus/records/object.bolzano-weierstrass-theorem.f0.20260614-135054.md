---
name: bolzano-weierstrass-theorem
type: object
object-type: theorem
essence: every bounded sequence of real numbers has a convergent subsequence
field: ["[[field.real-analysis]]"]
status: proven
state: settled
attribution: proved by Bolzano (1817) as a lemma in his IVT proof; reproved and made central by Weierstrass (c. 1860s)
formalized: true
source: ["[[source.bolzano-1817]]", "[[source.weierstrass-1861]]", "[[source.rudin-1953]]"]
depends-on: ["[[object.completeness-axiom]]"]
used-by: ["[[object.heine-borel-theorem]]"]
---

**statement (plain)** — if you have an infinite list of real numbers that all stay within some fixed range (bounded), then you can always pick out an infinite sub-list from it that homes in on a single value. Boundedness alone forces a convergent thread.

**statement (formal)** — every bounded sequence (xₙ) in ℝ (more generally in ℝⁿ) has a convergent subsequence (x_{n_k}). Equivalently: a subset of ℝⁿ is sequentially compact iff it is closed and bounded. **[confirmed]**

**status** — proven; an essential theorem of analysis.

**proof** — standard proof by repeated bisection (nested intervals): halve the bounding interval, keep a half containing infinitely many terms, repeat; the nested closed intervals shrink to a point by [[object.completeness-axiom]], and a subsequence converges to it. Full proof in [[source.rudin-1953]] (Theorem 3.6 / 2.42 territory). **[confirmed]**

**lineage** — B. Bolzano (1817) first proved the result, as a **lemma inside his proof of the intermediate value theorem**, not flagged as significant in its own right [[source.bolzano-1817]]. Some fifty years later K. Weierstrass identified it as significant and proved it again in his lectures, after which it became central [[source.weierstrass-1861]]. **[confirmed]**

**door** — Rudin ch. 3 (sequences); Abbott, *Understanding Analysis* (sequential compactness). [[source.rudin-1953]]
