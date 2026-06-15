---
name: zorn-lemma
type: object
object-type: theorem
essence: if every chain in a poset has an upper bound, the poset has a maximal element — equivalent to the axiom of choice
field: [field.order-lattice-theory]
status: proven
state: settled
attribution: Kuratowski (1922) and, independently, Max Zorn (1935); name due to Tukey (1940)
formalized: true
source: [source.kuratowski-1922, source.zorn-1935]
depends-on: [object.partial-order]
used-by: []
---

**statement (plain)** — if you have a partly ordered collection in which every fully ordered sub-chain has some upper bound sitting above it, then the whole collection must contain at least one "maximal" element — one with nothing strictly above it. It is the standard tool for building maximal objects (bases of vector spaces, maximal ideals) without explicit construction.

**statement (formal)** — let (P, ≤) be a non-empty partially ordered set in which every chain (totally ordered subset) has an upper bound in P. Then P contains at least one maximal element m (an element such that m ≤ x implies m = x). **[confirmed]**

**status** — proven; within Zermelo–Fraenkel set theory it is logically equivalent to the axiom of choice and to the well-ordering theorem (any one yields the other two).

**lineage (independent discovery)** — Kazimierz Kuratowski proved a version in 1922 ("Une méthode d'élimination des nombres transfinis…," *Fund. Math.* 3), applicable to sets ordered by inclusion and closed under unions of well-ordered chains [[source.kuratowski-1922]]. Max Zorn independently gave essentially the same principle for arbitrary chains in 1935 and proposed it as a set-theoretic axiom [[source.zorn-1935]]. The name "Zorn's lemma" is due to John Tukey (*Convergence and Uniformity in Topology*, 1940); the form "Kuratowski–Zorn lemma" remains common in Poland and Russia. **[confirmed]**

**proof** — derivable from the axiom of choice (via well-ordering or transfinite recursion); conversely the axiom of choice follows from it. See [[axiom of choice]].

**sources** — [[source.kuratowski-1922]]; [[source.zorn-1935]]; corroborated by the Wikipedia *Zorn's lemma* article and standard set-theory references for the statement, equivalence, and naming. **[confirmed]**
