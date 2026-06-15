---
name: landau-notation
type: object
object-type: definition
essence: big-O and little-o — the order symbols that make "asymptotic to" precise
field: [field.asymptotic-analysis, field.analytic-number-theory]
status: established
state: verified
attribution: O introduced by P. Bachmann (1894); o introduced by E. Landau (1909); jointly "Bachmann–Landau notation"
formalized: true
source: [source.bachmann-1894, source.landau-1909, source.de-bruijn-1958]
depends-on: []
used-by: [object.asymptotic-expansion, object.watsons-lemma, object.dijkstra-shortest-path-algorithm, object.dynamic-programming, object.master-theorem, object.np-completeness-cook-levin-theorem, object.p-vs-np]
---

**statement (plain)** — a compact language for comparing growth rates. "f is big-O of g" means f grows no faster than g, up to a constant factor; "f is little-o of g" means f becomes negligible compared with g in the limit. These symbols are the grammar in which every asymptotic statement is written.

**statement (formal)** — for the limit x → ∞ with g(x) > 0 eventually:
  f(x) = O(g(x))  iff  ∃ M > 0, x₀ : |f(x)| ≤ M·g(x) for all x ≥ x₀  (equivalently limsup |f/g| < ∞);
  f(x) = o(g(x))  iff  lim_{x→∞} f(x)/g(x) = 0  (∀ε>0 ∃x₀ : |f(x)| ≤ ε·g(x), x ≥ x₀).
At a finite point a, the same with "for all x in a neighbourhood of a" / "as x → a." Related symbols: Ω, Θ, ∼, ≍. **[confirmed]**

**proof / status** — definitions; "proven" marks the standard calculus of these symbols (transitivity, sum/product rules, O·o = o) as established. **[confirmed]**

**lineage** — the **O** symbol was introduced by Paul Bachmann in 1894, *Die analytische Zahlentheorie* (vol. 2 of his *Zahlentheorie*); O stands for *Ordnung* [[source.bachmann-1894]]. Edmund Landau adopted O and **introduced the little-o** symbol in his 1909 *Handbuch der Lehre von der Verteilung der Primzahlen* [[source.landau-1909]] — hence "Landau symbols" / Bachmann–Landau notation. Knuth later popularized O in computer science and reintroduced Ω and Θ. **[confirmed]**

**door** — [[source.de-bruijn-1958]] §1; any analytic number theory text (cf. [[object.prime-number-theorem]]).
