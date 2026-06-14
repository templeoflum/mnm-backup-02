---
name: catastrophic-cancellation
type: object
object-type: concept
essence: subtracting two nearly-equal approximate numbers exposes and amplifies the rounding error already in them
field: [field.ieee-754-floating-point, field.numerical-analysis]
status: established
state: float
attribution: classical numerical-analysis concept; canonical treatment in Goldberg (1991)
formalized: true
source: [source.goldberg-1991, source.ieee-754-1985]
depends-on: [object.ieee-754-binary-format, object.machine-epsilon]
used-by: []
---

**statement (plain)** — when you subtract two numbers that are very close, the leading digits cancel and only the low, error-laden digits survive. The subtraction itself may be exact, but the rounding errors already present in the two inputs are suddenly the *whole* answer, so the relative error explodes. This is the main way naive formulas lose accuracy, and it can usually be avoided by algebraically rewriting the expression.

**statement (precise)** — given approximations `x̃ = x(1+δₓ)` and `ỹ = y(1+δᵧ)` with small `|δ|`, the relative error of `x̃ − ỹ` against `x − y` is `|x·δₓ − y·δᵧ| / |x − y|`, which grows without bound as `x → y`. The harm comes from pre-existing error in the operands, **not** from the subtraction — cancellation is catastrophic even when `x̃ − ỹ` is computed exactly. **Benign** cancellation, by contrast, is the subtraction of operands that carry no (or offsetting) error. Standard cure: reformulate (e.g. `(1−cos x)` → `2 sin²(x/2)`; the quadratic-formula root via `2c/(−b∓√(b²−4ac))`). **[confirmed]**

**basis** — the phenomenon is a direct consequence of finite significand precision ([[object.ieee-754-binary-format]], [[object.machine-epsilon]]); Goldberg's survey gives the canonical treatment and the catastrophic-vs-benign distinction [[source.goldberg-1991]].

**lineage** — also called **loss of significance**. Long predates IEEE 754 (a staple of mid-20th-century error analysis), but Goldberg's 1991 survey made the catastrophic/benign framing standard in computer science. The fused multiply-add and compensated-summation techniques (Kahan summation) are common mitigations. **[confirmed]**

**sources** — [[source.goldberg-1991]], [[source.ieee-754-1985]]. Cross-checked against Wikipedia "Catastrophic cancellation". **[confirmed]**
