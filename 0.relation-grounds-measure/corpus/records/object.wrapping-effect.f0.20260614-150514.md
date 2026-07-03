---
name: wrapping-effect
type: object
object-type: concept
essence: enclosing a non-box-shaped set in an axis-aligned interval box adds excess, which can compound and explode over iteration
field: ["[[field.interval-arithmetic]]"]
status: established
state: settled
attribution: standard concept in interval analysis; central to Moore's work on interval methods for ODEs (Moore 1966)
formalized: true
source: ["[[source.moore-1966]]"]
depends-on: ["[[object.interval-arithmetic]]"]
used-by: []
---

**statement (plain)** — an interval vector is an axis-aligned box. When the true solution set is not box-shaped (for example a tilted line or a rotated region), wrapping it in the smallest enclosing box pulls in extra points that were never solutions. Done once this is mild over-approximation; done repeatedly — as in step-by-step integration of a differential equation, where each step rewraps the previous box — the excess can compound and the bounds can grow (sometimes blow up exponentially) even when the true set stays small.

**statement (formal)** — let the solution set be S = { (p, p) : p ∈ [−1, 1] }, the diagonal segment from (−1, −1) to (1, 1). The tightest enclosing interval vector is the full square [−1, 1] × [−1, 1], whose area is positive while S has measure zero — the box "wraps" the set with excess. Under an operation such as rotation followed by re-enclosure in an axis-aligned box, the excess is re-introduced at every step; iterating can cause the enclosure to grow without the true set growing. **[confirmed]**

**basis** — established concept. The diagonal/box example and the iterated-blowup phenomenon are standard.

**lineage** — central to interval methods for initial value problems for ODEs from Moore onward (Moore, *Interval Analysis*, 1966) [[source.moore-1966]]; motivates non-box enclosures (parallelepiped/QR methods, zonotopes, Taylor models) and is studied alongside the [[object.dependency-problem]] as a source of overestimation. Rests on [[object.interval-arithmetic]]; field [[field.interval-arithmetic]].

**sources** — Moore (1966) [[source.moore-1966]]; [Wikipedia: Interval arithmetic](https://en.wikipedia.org/wiki/Interval_arithmetic) (wrapping effect); Neumaier, "The wrapping effect, ellipsoid arithmetic, stability and confidence regions." **[confirmed]**
