---
name: ieee-754-special-values
type: object
object-type: standard
essence: the reserved encodings — signed zeros, signed infinities, NaN, and subnormals — that close the number line and the underflow gap
field: ["[[field.ieee-754-floating-point]]"]
status: established
state: settled
attribution: IEEE 754-1985 (gradual underflow / subnormals championed by William Kahan)
formalized: true
source: ["[[source.ieee-754-1985]]", "[[source.kahan-1989]]", "[[source.goldberg-1991]]"]
depends-on: ["[[object.ieee-754-binary-format]]"]
used-by: []
---

**statement (plain)** — beyond ordinary numbers, IEEE 754 reserves a few special bit patterns so that arithmetic never silently breaks. There are two signed zeros, two signed infinities (for overflow and division by a nonzero by zero), NaN ("not a number") for undefined results like 0/0, and subnormal numbers that fill the tiny gap between zero and the smallest normal number so underflow degrades gracefully instead of jumping straight to zero.

**statement (precise)** — special values are carved out of the [[object.ieee-754-binary-format]] by the extreme exponent fields:
- **signed zero** (`±0`): exponent all-zeros, fraction zero; `+0` and `−0` compare equal but differ in e.g. `1/x`.
- **subnormals / denormals**: exponent all-zeros, fraction nonzero; no hidden leading 1 (value `(−1)^s × 0.m × 2^(1−bias)`). They implement **gradual underflow**, keeping the spacing near zero uniform with the smallest normals.
- **signed infinity** (`±∞`): exponent all-ones, fraction zero.
- **NaN**: exponent all-ones, fraction nonzero; **quiet NaN** (propagates) and **signaling NaN** (raises invalid-operation), distinguished by the most-significant fraction bit. NaN compares unequal to everything, including itself. **[confirmed]**

**basis** — these encodings and their behaviour (gradual underflow, NaN propagation, signed infinity arithmetic) are mandated by IEEE 754-1985 [[source.ieee-754-1985]] and explained in Goldberg's survey [[source.goldberg-1991]].

**lineage** — gradual underflow via subnormals was a contested design decision championed by William Kahan during the standardization [[source.kahan-1989]]; it preserves the property that `x − y == 0` iff `x == y` near zero. Carried unchanged into 754-2008 and 754-2019. **[confirmed]**

**sources** — [[source.ieee-754-1985]], [[source.kahan-1989]], [[source.goldberg-1991]]. Cross-checked against Wikipedia "IEEE 754". **[confirmed]**
