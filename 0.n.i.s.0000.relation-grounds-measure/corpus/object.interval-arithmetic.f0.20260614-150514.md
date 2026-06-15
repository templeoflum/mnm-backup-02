---
name: interval-arithmetic
type: object
object-type: definition
essence: arithmetic on intervals — each operation returns an interval enclosing every result of the real operation on members of the operands
field: [field.validated-interval-arithmetic, field.numerical-analysis]
status: established
state: settled
attribution: modern form Ramon E. Moore (1966); independent precursors Teruo Sunaga (1958) and Mieczysław Warmus (1956)
formalized: true
source: [source.moore-1966, source.sunaga-1958, source.warmus-1956]
depends-on: []
used-by: [object.fundamental-theorem-of-interval-arithmetic, object.dependency-problem, object.wrapping-effect]
---

**statement (plain)** — instead of computing with single numbers, you compute with closed bounded ranges. An interval [a, b] stands for every real number from a to b. Each arithmetic operation on intervals is defined so the result is an interval that contains every value you could get by doing that operation on a number from the first interval and a number from the second. This is how a computation carries rigorous bounds rather than a single (possibly rounded) point value.

**statement (formal)** — for a binary real operation ⋆ ∈ {+, −, ×, ÷} and intervals [x₁, x₂], [y₁, y₂],
[x₁, x₂] ⋆ [y₁, y₂] = { x ⋆ y : x ∈ [x₁, x₂], y ∈ [y₁, y₂] }.
Because the basic operations are monotone in their arguments, this set is itself an interval and reduces to endpoint formulas:
- addition: [x₁ + y₁, x₂ + y₂]
- subtraction: [x₁ − y₂, x₂ − y₁]
- multiplication: [min(x₁y₁, x₁y₂, x₂y₁, x₂y₂), max(...)]
- division: [x₁, x₂] · [1/y₂, 1/y₁], provided 0 ∉ [y₁, y₂].
In rigorous (validated) implementations endpoints are rounded outward (lower bound rounded down, upper bound rounded up) so the enclosure stays valid in floating point. **[confirmed]**

**basis** — established definition. The set-image definition and endpoint formulas are standard across the foundational and reference literature.

**lineage** — the modern theory and its computational form are due to R. E. Moore, *Interval Analysis* (Prentice-Hall, 1966); Moore conceived the idea in spring 1958 [[source.moore-1966]]. Independent precursors: T. Sunaga, "Theory of an interval algebra and its application to numerical analysis" (1958) [[source.sunaga-1958]], and M. Warmus, "Calculus of approximations" (1956) [[source.warmus-1956]]. The field belongs to [[field.validated-interval-arithmetic]] and underlies [[field.numerical-analysis]].

**sources** — Moore (1966); Sunaga (1958); Warmus (1956); [[https://en.wikipedia.org/wiki/Interval_arithmetic|Wikipedia: Interval arithmetic]]. **[confirmed]**
