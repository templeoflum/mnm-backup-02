---
name: stevens-levels-of-measurement
type: object
object-type: framework
essence: four scale types — nominal, ordinal, interval, ratio — each fixed by the transformations that leave its empirical content unchanged
field: [field.representational-measurement-theory, field.psychophysics, field.mathematical-statistics]
status: established
state: settled
attribution: S. S. Stevens (1946)
formalized: true
source: [source.stevens-1946, source.sep-measurement]
depends-on: []
used-by: []
aliases: ["object.stevens-levels-of-measurement"]
---

**statement (plain)** — measurement comes in four kinds, ranked by how much structure the numbers carry. *Nominal* numbers are just labels (jersey numbers). *Ordinal* numbers rank but don't space (race places: 1st, 2nd, 3rd). *Interval* numbers have meaningful differences but no true zero (Celsius — 20° is not "twice" 10°). *Ratio* numbers have a true zero, so ratios mean something (length, mass, kelvin). Each kind is defined by what you're allowed to do to the numbers without changing what they tell you.

**statement (formal)** — a scale's type is the family of admissible transformations under which empirical relations are preserved:
- nominal — any one-to-one (bijective) relabeling (the permutation group);
- ordinal — any strictly monotone increasing transformation (the isotonic group);
- interval — positive affine x ↦ ax + b, a > 0 (the affine group);
- ratio — similarity x ↦ ax, a > 0 (the similarity group).
(A further *absolute* scale admits only the identity.) Permissible statistics rise with scale: mode (nominal); + median (ordinal); + arithmetic mean (interval); + geometric/harmonic mean and ratios (ratio). **[confirmed]**

**status** — established (standard taxonomy across statistics and the behavioral sciences); contested in detail (see lineage).

**basis** — the classification is not arbitrary: each scale type corresponds to the group of transformations preserving the [[object.representation-theorem-measurement]]'s homomorphism, made precise by the [[object.uniqueness-theorem-measurement]]. Stevens framed it operationally; later work (Hölder 1901 axioms; Krantz–Luce–Suppes–Tversky 1971; Narens, Alper, Luce) supplied the representation/uniqueness rigor. **[confirmed]**

**lineage** — introduced by S. S. Stevens, "On the Theory of Scales of Measurement," *Science* 103, no. 2684 (1946):677–680 [[source.stevens-1946]]. The axiomatic root for quantity is Hölder (1901) [[source.holder-1901]]. The taxonomy is widely used but criticized — e.g. for treating the four types as exhaustive and for over-restricting which statistics are "permissible" (Velleman & Wilkinson and others); carried as a known dispute. **[confirmed]**

**sources** — [[source.stevens-1946]]; SEP, "Measurement in Science" [[source.sep-measurement]]; cross-checked against Wikipedia, "Level of measurement."
