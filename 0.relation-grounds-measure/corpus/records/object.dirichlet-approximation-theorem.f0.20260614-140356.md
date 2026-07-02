---
name: dirichlet-approximation-theorem
type: object
object-type: theorem
essence: every irrational has infinitely many rational approximations p/q good to within 1/q² — the pigeonhole floor of the field
field: ["[[field.diophantine-approximation]]"]
status: proven
state: settled
attribution: P. G. L. Dirichlet (1842), by the pigeonhole principle (Schubfachprinzip)
formalized: true
source: ["[[source.dirichlet-1842]]", "[[source.cassels-1957]]"]
depends-on: []
used-by: ["[[object.hurwitz-approximation-theorem]]", "[[object.liouville-approximation-theorem]]", "[[object.roth-theorem]]"]
---

**statement (plain)** — every real number can be approximated by fractions p/q to within 1/q² of itself, and for an irrational number this happens for infinitely many different fractions. Pick how fine you want the denominators to go and there is always a fraction that lands surprisingly close.

**statement (formal)** — for any real α and any integer N ≥ 1, there exist integers p, q with 1 ≤ q ≤ N such that
|qα − p| ≤ 1/(N+1) < 1/N, equivalently |α − p/q| < 1/(qN).
Corollary: if α is irrational, then |α − p/q| < 1/q² holds for infinitely many coprime pairs (p, q). Hence every irrational has irrationality exponent ≥ 2. **[confirmed]**

**proof** — pigeonhole principle. Partition [0,1) into N subintervals of length 1/N and consider the N+1 fractional parts {0·α}, {α}, {2α}, …, {Nα}; two of them, say {iα} and {jα} with i < j, fall in the same subinterval, so |(j−i)α − (m_j − m_i)| < 1/N. Set q = j−i (1 ≤ q ≤ N) and p = m_j − m_i. For an irrational α the bound 1/q² is met infinitely often because the approximations cannot stabilize. Dirichlet himself used (and named, in German) this principle. Full treatment in [[source.cassels-1957]]. **[confirmed]**

**place in the field** — this is the floor: it shows good approximation is *always* available (exponent ≥ 2 for every irrational). The deeper results push from the other side — how good approximation can be forced to stop. [[object.hurwitz-approximation-theorem]] sharpens the constant; [[object.liouville-approximation-theorem]] and [[object.roth-theorem]] bound the exponent from above for algebraic numbers.

**source** — Dirichlet, "Verallgemeinerung eines Satzes aus der Lehre von den Kettenbrüchen …," *Bericht über die Verhandlungen der Königl. Preuss. Akademie der Wissenschaften* (1842) [[source.dirichlet-1842]]; statement, corollary and pigeonhole proof confirmed against Wikipedia ("Dirichlet's approximation theorem"), HandWiki, and Cassels [[source.cassels-1957]]. **[confirmed]**
