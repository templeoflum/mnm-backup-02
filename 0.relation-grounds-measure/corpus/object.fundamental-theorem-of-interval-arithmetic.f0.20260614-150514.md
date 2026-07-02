---
name: fundamental-theorem-of-interval-arithmetic
type: object
object-type: theorem
essence: the inclusion property — an inclusion-isotonic interval extension of f encloses the true range of f over the input interval
field: ["[[field.validated-interval-arithmetic]]"]
status: proven
state: settled
attribution: proved by Ramon E. Moore (1966); named "Fundamental Theorem of Interval Arithmetic" by Hansen and Rall
formalized: true
source: ["[[source.moore-1966]]"]
depends-on: ["[[object.interval-arithmetic]]"]
used-by: []
---

**statement (plain)** — if you take a real expression and evaluate it in interval arithmetic, the interval you get back is guaranteed to contain the true range of the real expression over the input interval. This is the inclusion property: the computed interval encloses the exact result, so the answer is never wrongly excluded. It is the reason interval computation can give mathematically rigorous bounds (and computer-assisted proofs).

**statement (formal)** — let F be an inclusion-isotonic interval extension of a real function f. Inclusion isotonicity means X ⊆ Y ⟹ F(X) ⊆ F(Y); an interval extension means F([x]) = f(x) on degenerate (point) intervals. Then for every interval X in the domain,
{ f(x) : x ∈ X } ⊆ F(X),
i.e. F(X) contains the range of f over X. In particular the natural interval extension (replace each variable and operation by its interval counterpart) is inclusion isotonic, so it always yields a valid enclosure. **[confirmed]**

**status** — proven.

**basis** — proved by R. E. Moore in *Interval Analysis* (1966) [[source.moore-1966]]. The result was independently named "The Fundamental Theorem of Interval Arithmetic" by Hansen and by Rall. It rests directly on the definition of [[object.interval-arithmetic]] (the set-image operations are inclusion isotonic by construction). **[confirmed as attribution]** for the Hansen/Rall naming; the theorem statement itself **[confirmed]**.

**lineage** — Moore (1966); later generalized (e.g. by Walster and Hansen) to interval functions that need not be inclusion-isotonic interval extensions. Field: [[field.validated-interval-arithmetic]].

**sources** — Moore (1966) [[source.moore-1966]]; [Wikipedia: Interval arithmetic](https://en.wikipedia.org/wiki/Interval_arithmetic); Hickey, Ju & van Emden, "Interval arithmetic: from principles to implementation," *JACM* 48(5), 2001. **[confirmed]**
