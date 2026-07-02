---
name: ieee-754-rounding-modes
type: object
object-type: convention
essence: the rules for choosing a representable value when the exact result falls between two — default round-to-nearest, ties to even
field: ["[[field.ieee-754-floating-point]]"]
status: established
state: settled
attribution: IEEE 754-1985 (round-to-nearest-even default); roundTiesToAway added in 754-2008
formalized: true
source: ["[[source.ieee-754-1985]]", "[[source.goldberg-1991]]", "[[source.kahan-1989]]"]
depends-on: ["[[object.ieee-754-binary-format]]"]
used-by: ["[[object.machine-epsilon]]"]
aliases: ["object.ieee-754-rounding-modes"]
---

**statement (plain)** — when an arithmetic result cannot be represented exactly, the standard says how to pick the nearest representable number. The default is "round to nearest, ties to even": go to the closest value, and if the true result sits exactly halfway, pick the one whose last bit is 0 (even). This avoids the upward drift that "round half up" introduces. Three directed modes (toward zero, toward +∞, toward −∞) round always in one direction.

**statement (precise)** — IEEE 754 specifies five rounding-direction attributes: **roundTiesToEven** (default for binary), **roundTiesToAway** (ties round to the larger magnitude; added in 754-2008), **roundTowardPositive** (toward +∞, ceiling), **roundTowardNegative** (toward −∞, floor), and **roundTowardZero** (truncation). Operations behave *as if* computed to infinite precision then rounded once ("correct rounding"); the basic operations +, −, ×, ÷ and √ are required to be correctly rounded. **[confirmed]**

**basis** — round-to-nearest-even is the default in IEEE 754-1985 [[source.ieee-754-1985]]; Goldberg explains why the even tie-break removes statistical bias and how correct rounding underpins error bounds [[source.goldberg-1991]].

**lineage** — also called "banker's rounding." The roundTiesToAway mode was introduced with the 2008 revision (chiefly for decimal). The correct-rounding requirement is the foundation that makes [[object.machine-epsilon]] a tight relative-error bound. **[confirmed]**

**sources** — [[source.ieee-754-1985]], [[source.goldberg-1991]], [[source.kahan-1989]]. Cross-checked against Wikipedia "IEEE 754". **[confirmed]**
