---
name: ieee-754-binary-format
type: object
object-type: standard
essence: the bit layout that encodes a real number as sign · biased exponent · significand, with an implicit leading 1
field: [field.ieee-754-floating-point]
status: established
state: settled
attribution: IEEE 754-1985, drafted under William Kahan; revised 754-2008, 754-2019
formalized: true
source: [source.ieee-754-1985, source.kahan-1989, source.goldberg-1991]
depends-on: []
used-by: [object.ieee-754-rounding-modes, object.machine-epsilon, object.ieee-754-special-values, object.catastrophic-cancellation]
---

**statement (plain)** — a floating-point number is stored in three fields: one sign bit, a block of exponent bits, and a block of fraction (significand/mantissa) bits. The exponent is held in "biased" form (a fixed offset is added so it can be stored unsigned), and for normal numbers a leading 1 is *implied* rather than stored, buying one extra bit of precision.

**statement (precise)** — a normal binary value is `(−1)^s × (1.m) × 2^(e−bias)`, where `s` is the sign bit, `m` is the stored fraction, `e` is the stored (biased) exponent, and the leading `1.` is the hidden bit. Standard interchange formats: **binary32** ("single") = 1 sign + 8 exponent + 23 fraction bits, bias **127**; **binary64** ("double") = 1 sign + 11 exponent + 52 fraction bits, bias **1023**. The all-zeros and all-ones exponent fields are reserved for zero/subnormals and infinity/NaN respectively (see [[object.ieee-754-special-values]]). **[confirmed]**

**basis** — codified in *IEEE Standard for Binary Floating-Point Arithmetic*, IEEE 754-1985 [[source.ieee-754-1985]], and surveyed for working programmers in Goldberg's "What Every Computer Scientist Should Know About Floating-Point Arithmetic" [[source.goldberg-1991]].

**lineage** — the modern standard grew from William Kahan's work (1989 Turing Award) and the [[field.ieee-754-floating-point]] effort of the early 1980s; precursor binary floating point reaches back to Konrad Zuse's Z3 (1941) [[source.kahan-1989]]. Revised as 754-2008 and 754-2019, which kept this format and added decimal formats and more interchange widths. **[confirmed]**

**sources** — [[source.ieee-754-1985]] (the standard), [[source.goldberg-1991]] (door survey), [[source.kahan-1989]] (origin/attribution). Cross-checked against Wikipedia "IEEE 754". **[confirmed]**
