---
name: master-theorem
type: object
object-type: theorem
essence: a cookbook for divide-and-conquer running times — solves T(n)=aT(n/b)+f(n) by comparing f(n) to n^(log_b a)
field: ["[[field.algorithms]]", "[[field.asymptotic-analysis]]"]
status: proven
state: settled
attribution: Bentley, Haken & Saxe (1980); named "master theorem" and popularized by CLRS
formalized: true
source: ["[[source.bentley-haken-saxe-1980]]", "[[source.clrs]]"]
depends-on: ["[[object.landau-notation]]"]
used-by: []
---

**statement (plain)** — a recipe for the running time of divide-and-conquer algorithms. If an algorithm splits a problem of size n into *a* subproblems each of size n/b and does f(n) extra work to split and combine, the total cost depends on a tug-of-war between the recursion (measured by n^(log_b a)) and the per-level work f(n). Whichever wins sets the answer; if they tie, you pay an extra log n factor.

**statement (formal)** — for constants a ≥ 1, b > 1 and an asymptotically positive f, let T(n) = a·T(n/b) + f(n) (with n/b read as ⌊n/b⌋ or ⌈n/b⌉). Set c* = log_b a. Then:
  1. if f(n) = O(n^(c*−ε)) for some ε > 0, then T(n) = Θ(n^(c*));
  2. if f(n) = Θ(n^(c*)), then T(n) = Θ(n^(c*) · log n);
  3. if f(n) = Ω(n^(c*+ε)) for some ε > 0 **and** the regularity condition a·f(n/b) ≤ k·f(n) holds for some k < 1 and all large n, then T(n) = Θ(f(n)). **[confirmed]**

**status** — proven. (Some recurrences fall in none of the three cases — e.g. f(n) = n^(c*) log n — where the master theorem does not apply; the Akra–Bazzi method generalizes it.)

**proof / method** — expand the recursion tree: level i has a^i nodes each costing f(n/b^i), over log_b n levels, with n^(c*) leaves. Summing the per-level costs gives a geometric series whose dominant term is determined by comparing f(n) with n^(c*); the three cases correspond to the series being bottom-heavy (leaves dominate, case 1), balanced (case 2), or top-heavy (root dominates, case 3, where the regularity condition guarantees geometric decay). **[confirmed]**

**lineage** — the general method was introduced by Jon L. Bentley, Dorothea Haken (née Blostein), and James B. Saxe, "A General Method for Solving Divide-and-Conquer Recurrences," *ACM SIGACT News* 12(3) (1980) [[source.bentley-haken-saxe-1980]]. The label "master theorem" and its now-standard three-case form were popularized by [[source.clrs]] (*Introduction to Algorithms*). **[confirmed]**

**door** — [[source.clrs]] ch. 4; [[source.erickson-algorithms]] (recurrences).

**sources** — [[source.bentley-haken-saxe-1980]], [[source.clrs]]; Wikipedia "Master theorem (analysis of algorithms)".
