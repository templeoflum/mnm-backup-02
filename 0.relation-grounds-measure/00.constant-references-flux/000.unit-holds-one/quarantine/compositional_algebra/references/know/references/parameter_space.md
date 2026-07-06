# Parameter Space Reference

**Formal:**
```
S = ℝ                                  (felt intensity, single scalar, unbounded)
f_n : [0, 1] → S                        (movement n's felt-quality function over local time)
f_n continuous for all n
Given a movement's spec, f_n is fully determined
```

**Informal:** This reference grounds the framework's felt-quality language in real math. Every movement parameterizes through a defined felt-quality space; the parameterization is by local movement time; the resulting function is continuous and determined by the movement's spec. Shape's three sub-fields (Approach × Within × Departure) become characterizations of this function at start, interior, and end. Continuity grades at transitions become relations between adjacent movements' functions at the join.

This reference represents framework Stages S1 and S2 completed (see [formalization_roadmap.md](../formalization_roadmap.md)). Polynomial commitment (S3) and authoring convention (S4) remain ahead.

---

## What S1 commits to

### The parameter space S

The framework commits: felt-quality at any moment of any movement is a value in space `S = ℝ`.

- **Single scalar.** S is one-dimensional. We track a single axis of felt-quality, called **felt intensity**.
- **Unbounded.** S has no ceiling or floor. Felt intensity can take any real value.
- **Real-valued.** Felt intensity is a continuous quantity, not categorical.

### Why felt intensity, why scalar

Shape's existing vocabulary (Approach × Within × Departure with options Held, Gradual rise, Steep rise, Gradual fall, Steep fall, Level) describes slope and curvature — the language of one quantity changing over time. The quantity Shape implicitly tracks is the **gathered/held/released** character of the movement, which we name *felt intensity*.

A single scalar is the smallest honest commitment that matches Shape's existing vocabulary. Richer parameter spaces (vectors of intensity × pacing × density, etc.) may become useful at later stages; until they do, scalar is sufficient and grounded.

### What "felt intensity" actually refers to

Felt intensity is the **gathered/held/released character** of the movement at a given moment. Higher values correspond to felt gathering, weight, pressure, presence. Lower values correspond to felt release, dispersal, dissolution, absence. The zero point is arbitrary — what matters is the relative motion through S, not absolute position.

Felt intensity is not energy, loudness, brightness, density, or any other operational quantity. Those are surface-layer concerns. Felt intensity is the structural felt-quality the spline tracks, which surface layers render through their own modality-specific means.

A movement whose Shape is `Held · Rising · Steep rise` is a movement whose f(t) starts flat (low slope near t=0), rises across the interior, and ends with steep upward slope (high slope near t=1). The numeric values of f are not specified; what's specified is the *behavior* — flat, then rising, then steep.

### Unbounded vs bounded — why unbounded

A bounded space (e.g., [0, 1]) would impose ceilings on felt intensity. Movements approaching the ceiling would either get stuck or require nonlinear normalization. Neither is desirable. Unbounded keeps the math clean and matches the intuition that intensity can always go higher or lower; what matters in composition is relative motion, not absolute position.

If later stages need normalization (e.g., for rendering or comparison across works), normalization can be applied as a post-processing operation. S itself stays unbounded.

---

## What S2 commits to

### Movements as continuous functions

Each movement `n` has a felt-quality function:

```
f_n : [0, 1] → S
```

Where:
- The domain `[0, 1]` is **local movement time**. `t = 0` is the movement's start; `t = 1` is the movement's end.
- The codomain is the parameter space S (felt intensity ∈ ℝ).
- `f_n` is **continuous** on `[0, 1]`.

### Local time, not elapsed time

`t` is a parameter, not a wall-clock duration. The framework does not model how long a movement *takes*; it models how a movement's felt intensity *moves through its own duration*.

If a movement's authored duration is 4 minutes or 4 seconds, `f_n(0.5)` refers to the felt intensity at the midpoint of either duration. The shape of the curve is preserved; only the rate of traversal differs.

This means: changing how long a movement plays (e.g., in performance) does not change its `f_n`. Only the rate at which `t` advances changes. The framework's felt-quality math is duration-immune.

### Continuity (not yet differentiability)

S2 commits only to continuity: `f_n` is a continuous function on `[0, 1]`. It does not commit to differentiability.

Differentiability becomes available at Stage S3 when movements are committed to polynomial form (polynomials are infinitely differentiable). At S2, we can speak about values of `f_n` at any `t` but should not yet rely on derivatives.

The framework's current Shape vocabulary uses slope-language (Rising, Falling, Steep rise) as if derivatives exist. At S2, this is read as gestural characterization of how `f_n` *behaves* near a point, not as a claim about formal derivatives. At S3, slope-language becomes literal.

### Determinism

Given a movement's spec (its Identity including Shape, its content layer assignments, its position in the spline), `f_n` is fully determined. Two operators producing the same movement spec should produce the same `f_n`.

This is aspirational at S2 — the framework does not yet provide the convention by which Shape determines `f_n` numerically. Determinism becomes operational at S4 (authoring convention) when Shape's sub-fields explicitly specify polynomial constraints.

At S2, determinism is the *commitment* that `f_n` is a function of the spec, not of the operator's interpretation. Two operators may currently produce different `f_n` from the same spec because the convention is incomplete; this is a known gap that S4 closes.

---

## How Shape relates to `f_n`

Shape currently has three sub-fields. With S1+S2, these become characterizations of `f_n`:

### Approach

Approach characterizes `f_n` near `t = 0` — both the starting value `f_n(0)` and the direction of change as the movement begins.

| Approach option | Characterization of f_n near t=0 |
|---|---|
| Held | f_n is approximately constant near t=0 (slope near zero) |
| Level | same as Held; flat near t=0 |
| Gradual rise | f_n is increasing near t=0 with gentle slope |
| Steep rise | f_n is increasing near t=0 with steep slope |
| Gradual fall | f_n is decreasing near t=0 with gentle slope |
| Steep fall | f_n is decreasing near t=0 with steep slope |

### Within

Within characterizes `f_n` over the interior `(0, 1)` — the trajectory between the endpoints.

| Within option | Characterization of f_n over (0, 1) |
|---|---|
| Steady | f_n is approximately constant across the interior |
| Rising | f_n is generally increasing across the interior |
| Falling | f_n is generally decreasing across the interior |
| Rising then falling | f_n increases, reaches a peak, then decreases |
| Falling then rising | f_n decreases, reaches a trough, then increases |
| Oscillating | f_n alternates direction across the interior |
| Discontinuous | f_n has a structurally significant interior break (rare; flagged) |

### Departure

Departure characterizes `f_n` near `t = 1` — both the ending value `f_n(1)` and the direction of change as the movement ends.

| Departure option | Characterization of f_n near t=1 |
|---|---|
| Held | f_n is approximately constant near t=1 |
| Level | same as Held; flat near t=1 |
| Gradual rise | f_n is increasing near t=1 with gentle slope |
| Steep rise | f_n is increasing near t=1 with steep slope |
| Gradual fall | f_n is decreasing near t=1 with gentle slope |
| Steep fall | f_n is decreasing near t=1 with steep slope |

### The full Shape signature

A movement's Shape `Approach · Within · Departure` describes the qualitative shape of `f_n` across all three regions. For example:

- **`Held · Rising · Steep rise`** — f_n starts flat, generally rises across the interior, and ends with steep upward slope
- **`Gradual rise · Steady · Gradual fall`** — f_n starts rising gently, holds approximately steady across the interior, and ends falling gently
- **`Gradual fall · Falling · Held`** — f_n starts falling gently, generally falls across the interior, and ends flat (held release)

These are characterizations, not specifications. At S4, Shape's sub-fields will become polynomial constraints that *uniquely determine* f_n; until then, multiple f_n values are consistent with the same Shape.

---

## How continuity grades relate to `f_n`

Continuity grades describe how `f_n` (at t=1, the end of movement n) relates to `f_{n+1}` (at t=0, the start of movement n+1).

| Grade | Condition (S2 reading) | Condition (S3 reading, future) |
|---|---|---|
| C⁰ | f_n(1) and f_{n+1}(0) have any relation | Same: any values |
| C¹ | f_n(1) ≈ f_{n+1}(0) AND the trajectories have qualitatively matched direction at the join | f_n(1) = f_{n+1}(0) AND f'_n(1) = f'_{n+1}(0) |
| C² | C¹ AND the trajectories have qualitatively matched magnitude at the join | C¹ AND f''_n(1) = f''_{n+1}(0) |

**At S2**, continuity grades remain qualitative characterizations: matched direction means Departure direction and next Approach direction agree; matched magnitude means slope steepness is comparable. Verification is by author judgment.

**At S3**, continuity grades become equations. Verification becomes mechanical.

The framework's current Shape-derived continuity rules ("if Departure direction matches next Approach direction → C¹"; "if magnitude also matches → C²") are the S2-level approximation of the S3 condition. They are honest characterizations but not derivations.

**Visual companion:** `framework/diagrams/continuity_grades.html` — three panels showing f_n plotted across the join under each grade. Makes the math-to-felt correspondence visible.

---

## What S1 and S2 do not yet do

- **No polynomial form yet.** Movements are continuous but not yet polynomial. Continuity grades remain qualitative.
- **No mechanical continuity verification.** Continuity grades are still author-declared and checked by feel, not by computation.
- **No authoring convention beyond Shape categories.** Shape remains a category system; it doesn't yet specify f_n numerically.
- **No basis representation.** No B-splines, no Bézier, no machinery for transformation or interpolation.
- **No multi-contributor composition.** Each movement has one `f_n`. The framework does not currently model contributions from motifs, characters, etc. as additive components to `f_n`. (This may become useful at later stages; see formalization_roadmap.md.)

These are explicit deferrals to later stages, not gaps to patch now.

---

## What this lets the framework say honestly that it couldn't before

Before S1+S2, the framework could only say: "Shape describes the felt quality of the movement; continuity grades describe how movements join."

After S1+S2, the framework can say:

- **"Shape is a characterization of a continuous function over felt intensity space."** The function exists; the characterization refers to it.
- **"A movement's felt-quality trajectory is parameterized by local movement time, not by elapsed duration."** Duration-immunity is a real property.
- **"Continuity grades describe how adjacent movements' functions relate at the join."** Even if the relations remain qualitative until S3, the *referents* are now real mathematical objects.
- **"Two operators with the same spec should produce the same f_n."** Aspirational at S2, becomes operational at S4.

These are smaller claims than "the framework uses real spline math." They are the honest first installment toward earning that larger claim.

---

## Relation to the formalization roadmap

This reference represents the completion of Stages **S1 (parameter space)** and **S2 (continuous functions)** from [formalization_roadmap.md](../formalization_roadmap.md).

Next stages on the path:

- **S3 — Polynomial commitment.** Movements become polynomials of some chosen degree. Continuity grades become real derivable conditions.
- **S4 — Authoring convention.** Shape's sub-fields become specifications of polynomial constraints. Determinism becomes operational.
- **S5 — Basis representation.** Optional; only undertaken if transformation/interpolation tools become needed.

The algebra stages (A1–A4) are independent and can be undertaken in parallel with the spline stages.