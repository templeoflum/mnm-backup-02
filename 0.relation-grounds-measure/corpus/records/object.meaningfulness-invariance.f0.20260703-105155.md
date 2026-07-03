---
name: meaningfulness-invariance
type: object
object-type: principle
essence: a quantitative statement is meaningful iff its truth value is invariant under the admissible transformations of the scales it involves
field: ["[[field.representational-measurement-theory]]"]
status: established
state: float
attribution: S. S. Stevens (informal, 1946); formalized by Louis Narens & R. Duncan Luce
formalized: true
source: ["[[source.narens-1981]]"]
depends-on: []
used-by: []
---

**statement (plain)** — Whether an assertion about measured quantities *says something* depends on the scale type. "Object A is twice as heavy as B" is meaningful on a ratio scale (mass) because it stays true under any allowed rescaling (grams to pounds), but "today is twice as hot as yesterday" is meaningless on the interval Celsius/Fahrenheit scale because the ratio changes when you switch units. The general principle: a statement is **meaningful** iff its truth value is invariant under the group of admissible transformations of the scales involved.

**basis** — each scale type is fixed by its admissible-transformation group (ratio: x ↦ ax; interval: x ↦ ax+b; ordinal: monotone; nominal: bijections), and meaningfulness is invariance under that group [[source.narens-1981]] **[confirmed]**. The bridge from [[object.stevens-levels-of-measurement]] and [[object.uniqueness-theorem-measurement]] to which statistics and statements are licensed on a given scale; the measurement analogue of structural invariance ([[object.structural-properties]]).
