---
name: dependency-problem
type: object
object-type: concept
essence: interval arithmetic treats repeated occurrences of the same variable as independent, inflating the enclosure
field: ["[[field.interval-arithmetic]]"]
status: established
state: settled
attribution: standard concept in interval analysis (Moore 1966 and the foundational literature)
formalized: true
source: ["[[source.moore-1966]]"]
depends-on: ["[[object.interval-arithmetic]]"]
used-by: []
---

**statement (plain)** — interval arithmetic has no memory that two occurrences of the same variable are the same number. Each time a variable appears, its whole interval is used afresh, as if it were a new independent quantity. So correlations between repeated variables are lost and the computed interval comes out wider than the true range — still a valid enclosure (it always contains the answer), but pessimistic. Rewriting an expression so each variable appears only once removes the overestimation.

**statement (formal)** — for X = [1, 2], the real quantity x − x is 0 for every x ∈ X, but in interval arithmetic
X − X = [1 − 2, 2 − 1] = [−1, 1] ≠ [0, 0].
More generally, for an expression with repeated variables the natural interval extension F satisfies range(f, X) ⊆ F(X) (inclusion still holds) but the inclusion is typically strict. If a real function can be written so that each variable occurs exactly once, the natural extension is exact: F(X) = range(f, X). **[confirmed]**

**basis** — established concept. The x − x = [−1, 1] example and the single-occurrence remedy are standard in the foundational literature.

**lineage** — recognized from the origin of the field (Moore, *Interval Analysis*, 1966) [[source.moore-1966]] and motivates much later work (centered forms, Taylor models, affine arithmetic) aimed at controlling overestimation. Closely related to the [[object.wrapping-effect]]. Rests on [[object.interval-arithmetic]]; field [[field.interval-arithmetic]].

**sources** — Moore (1966) [[source.moore-1966]]; [Wikipedia: Interval arithmetic](https://en.wikipedia.org/wiki/Interval_arithmetic) (dependency problem). **[confirmed]**
