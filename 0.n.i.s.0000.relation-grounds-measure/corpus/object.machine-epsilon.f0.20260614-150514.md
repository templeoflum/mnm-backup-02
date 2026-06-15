---
name: machine-epsilon
type: object
object-type: definition
essence: the gap between 1 and the next representable float — the grain size of relative precision
field: [field.ieee-754-floating-point, field.numerical-analysis]
status: established
state: settled
attribution: numerical-analysis convention; both definitions standard (machine epsilon vs unit roundoff)
formalized: true
source: [source.goldberg-1991, source.ieee-754-1985]
depends-on: [object.ieee-754-binary-format, object.ieee-754-rounding-modes]
used-by: [object.catastrophic-cancellation]
---

**statement (plain)** — machine epsilon measures how finely a floating-point system can distinguish numbers near 1. In the common definition it is the distance from 1 to the very next representable number — the smallest bump you can add to 1 and still see a change. It tells you roughly how many significant digits you have.

**statement (precise)** — for a base-`b` format with `p` significand digits there are two standard quantities:
- **machine epsilon** (mainstream): `ε = b^(1−p)` — the spacing between 1 and the next float. binary32: `2^−23 ≈ 1.19×10⁻⁷`; binary64: `2^−52 ≈ 2.22×10⁻¹⁶`.
- **unit roundoff** `u` (formal): `u = (1/2)·b^(1−p)`, i.e. half that spacing. Under correctly-rounded round-to-nearest, `u` bounds the relative rounding error of any single operation: `fl(x∘y) = (x∘y)(1+δ)` with `|δ| ≤ u`. binary32: `2^−24 ≈ 5.96×10⁻⁸`; binary64: `2^−53 ≈ 1.11×10⁻¹⁶`.

The two differ by a factor of two; usage varies by community (language constants use machine epsilon, numerical analysts use `u`). **[confirmed]**

**basis** — the relative-error bound `|δ| ≤ u` follows directly from correct rounding ([[object.ieee-754-rounding-modes]]) on the [[object.ieee-754-binary-format]] significand; this is the central tool of forward/backward error analysis in [[field.numerical-analysis]], as laid out in Goldberg's survey [[source.goldberg-1991]].

**lineage** — the half-ulp roundoff bound is the working form used throughout numerical linear algebra (e.g. LAPACK, Higham's *Accuracy and Stability of Numerical Algorithms*). The factor-of-two ambiguity between "machine epsilon" and "unit roundoff" is long-standing and a common source of confusion. **[confirmed]**

**sources** — [[source.goldberg-1991]], [[source.ieee-754-1985]]. Cross-checked against Wikipedia "Machine epsilon". **[confirmed]**
