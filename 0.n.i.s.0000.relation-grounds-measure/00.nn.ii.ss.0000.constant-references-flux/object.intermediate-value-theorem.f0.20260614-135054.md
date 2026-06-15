---
name: intermediate-value-theorem
type: object
object-type: theorem
essence: a continuous function on [a,b] takes every value between f(a) and f(b)
field: [field.real-analysis-limits]
status: proven
state: verified
attribution: first rigorous proof by Bolzano (1817); independent modern proof by Cauchy (1821); precursors Stevin, Lagrange, Arbogast
formalized: true
source: [source.bolzano-1817, source.cauchy-1821, source.rudin-1953]
depends-on: [object.completeness-axiom, object.epsilon-delta-limit]
used-by: []
---

**statement (plain)** — if a function is continuous across a closed interval [a, b] and you name any value s lying between the two endpoint heights f(a) and f(b), then somewhere inside the interval the function actually hits s. A continuous curve can't get from one height to another without passing through every height in between.

**statement (formal)** — let f be continuous on [a, b] and let s be any number with f(a) < s < f(b) (or f(b) < s < f(a)). Then there exists c ∈ (a, b) with f(c) = s. Equivalently, the continuous image of an interval is an interval. **[confirmed]**

**status** — proven.

**proof** — depends essentially on the [[object.completeness-axiom]]: the set {x ∈ [a,b] : f(x) ≤ s} is nonempty and bounded above, so it has a supremum c; continuity ([[object.epsilon-delta-limit]]) forces f(c) = s. (The theorem fails over ℚ, exactly because ℚ is not complete.) Full proof in [[source.rudin-1953]] (Theorem 4.23). **[confirmed]**

**lineage** — B. Bolzano (1817) gave the first rigorous proof (his paper's title result), formulated for two continuous functions crossing [[source.bolzano-1817]]. A.-L. Cauchy (1821, *Cours d'analyse*) gave the modern formulation and an independent proof [[source.cauchy-1821]]. Precursors: Simon Stevin (intermediate-value property for polynomials, via decimal bisection), Lagrange, and Arbogast — but they assumed rather than proved it. Often still called **"Bolzano's theorem."** **[confirmed]**

**door** — Rudin ch. 4 (continuity); Abbott, *Understanding Analysis*. [[source.rudin-1953]]
