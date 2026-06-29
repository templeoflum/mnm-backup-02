---
name: hurwitz-approximation-theorem
type: object
object-type: theorem
essence: every irrational is approximable to within 1/(√5·q²) infinitely often, and √5 is the best possible constant
field: [field.diophantine-approximation]
status: proven
state: settled
attribution: A. Hurwitz (1891), via continued fractions; golden ratio is the extremal case
formalized: true
source: [source.hurwitz-1891, source.cassels-1957, source.khinchin-cf]
depends-on: [object.dirichlet-approximation-theorem]
used-by: []
---

**statement (plain)** — Dirichlet guarantees approximations good to within 1/q²; Hurwitz sharpens the constant. Every irrational number has infinitely many rational approximations p/q good to within 1/(√5·q²) — and √5 is the largest constant for which this stays true for *all* irrationals. Push the constant any higher and the golden ratio breaks it: it is the hardest number to approximate.

**statement (formal)** — for every irrational α there are infinitely many coprime integers p, q (q > 0) with
|α − p/q| < 1/(√5·q²).
The constant √5 is best possible: for any A > √5, the inequality |α − p/q| < 1/(A·q²) has only finitely many solutions when α = φ = (1+√5)/2 (and for any number equivalent to φ). **[confirmed]**

**proof** — via simple continued fractions. Of every three consecutive convergents p_k/q_k of the continued-fraction expansion of α, at least one satisfies |α − p/q| < 1/(√5·q²); since there are infinitely many convergents the inequality holds infinitely often. Optimality follows from the convergents of φ = [1;1,1,1,…], whose denominators are Fibonacci numbers and for which q²·|α − p/q| → 1/√5. Full treatment in [[source.cassels-1957]] and [[source.khinchin-cf]]. **[confirmed]**

**place in the field** — the sharp form of the Dirichlet floor for *every* irrational: [[object.dirichlet-approximation-theorem]] gives exponent 2 with constant 1, Hurwitz fixes the optimal constant 1/√5. (The next step, the Markov/Lagrange spectrum, replaces √5 with √8 = 2√2 once numbers equivalent to φ are excluded, then a discrete sequence below 3 — beyond this keystone record.)

**source** — A. Hurwitz, "Ueber die angenäherte Darstellung der Irrationalzahlen durch rationale Brüche," *Math. Ann.* 39(2) (1891), 279–284 [[source.hurwitz-1891]]; statement, √5 optimality, and golden-ratio extremality confirmed against Wikipedia ("Hurwitz's theorem (number theory)"), Khinchin's *Continued Fractions* [[source.khinchin-cf]], and Cassels [[source.cassels-1957]]. (Distinct from the unrelated [[source.hurwitz-1897]].) **[confirmed]**
