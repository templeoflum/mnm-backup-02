---
name: uniqueness-theorem-measurement
type: object
object-type: theorem
essence: how far a measurement scale is pinned down — the family of admissible transformations between representations, which fixes the scale type and what is meaningful
field: [field.representational-measurement-theory]
status: proven
state: float
attribution: framework Krantz–Luce–Suppes–Tversky (1971); scale-type/meaningfulness via Stevens (1946), Narens, Luce
formalized: true
source: [source.krantz-luce-suppes-tversky-1971, source.sep-measurement, source.stevens-1946]
depends-on: [object.representation-theorem-measurement]
used-by: [object.stevens-levels-of-measurement]
---

**statement (plain)** — once you know you *can* map things to numbers (the representation theorem), the uniqueness theorem says *how much freedom* remains in the choice of numbers. If two different number-assignments both faithfully represent the same structure, they must be related by a specific kind of transformation — and that allowed family is exactly what names the scale type (ratio, interval, …). A claim about the numbers is *meaningful* only if it stays true under every admissible transformation.

**statement (formal)** — given representations φ and φ′ of the same empirical structure 𝔄, the *uniqueness theorem* characterizes the admissible transformations h with φ′ = h ∘ φ. The structure of that group fixes the scale type:
- ratio scale — h(x) = ax, a > 0 (similarity);
- interval scale — h(x) = ax + b, a > 0 (positive affine);
- ordinal scale — h any strictly increasing function;
- nominal scale — h any bijection.
A statement/relation is *meaningful* iff its truth value is invariant under all admissible transformations of the scale(s) involved. **[confirmed]**

**status** — proven (paired with each representation theorem; e.g. extensive measurement → ratio scale, additive conjoint → interval scales with common unit).

**basis** — "scale types are individuated by the families of transformations they can undergo without loss of empirical information" (cf. Stevens; SEP). Meaningfulness is the operational payoff: it tells you which numerical assertions reflect genuine empirical facts versus artifacts of an arbitrary scale choice. Refined by Narens and Luce (homogeneity/uniqueness of automorphism groups; the Alper–Narens classification of scale types). **[confirmed]**

**lineage** — uniqueness is the second of the paired results in Krantz–Luce–Suppes–Tversky, *Foundations of Measurement*, vol. I (1971) [[source.krantz-luce-suppes-tversky-1971]]; the transformation-group view of scale type and meaningfulness originates with Stevens (1946) [[source.stevens-1946]] and is formalized by Luce, Narens, Alper (vol. III, 1990). **[confirmed]**

**sources** — KLST 1971 [[source.krantz-luce-suppes-tversky-1971]]; SEP, "Measurement in Science" [[source.sep-measurement]]; Stevens (1946) [[source.stevens-1946]].
