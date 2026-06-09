# sketch — instrument-rebuild — f1 — 20260607-140000

working copy. f0 has the raw inventory. this fold makes changes — tries new words, drops what's aspirational, names what's unnamed. everything still floating.

---

## what it actually does (unchanged from f0)

1. **construct**: compose rotations and translations iteratively into a matrix. apply to a seed point. advance phases at cascading rates. output: a trajectory through space.
2. **measure**: sample the trajectory as a point cloud. compute invariants that don't change when you change the reference frame.
3. **compare**: measure the same distance in multiple coordinate systems. the invariant is the anchor. the spread between rulers is the distortion.
4. **project**: collapse dimensions for viewing. 4D→3D. 3D→2D.
5. **vary**: swap the trajectory formula. the measurement stays the same.

---

## proposed vocabulary

### construction

| current | proposed | why |
|---------|----------|-----|
| level / rung | **depth** | "level" is generic. "rung" bleeds into spline continuity (now separate). "depth" says what it is — each rotation wraps around the previous ones. depth 3 contains depth 2 contains depth 1. it's containment, same word the lattice uses for branch/leaf/cell. one word, both systems. |
| cycle | **cycle** (keep) | a pair of rotations + one translation. clear, accurate, not aspirational. cycle = floor(depth/2). |
| seed | **seed** (keep) | the starting point. the thing being transformed. nothing better. |
| D / radius | **radius** (drop D) | the seed's distance from origin. D is a variable name, not vocabulary. "radius" is the concept. |
| beam | **trace** | nod to oscilloscope origins (the path drawn on the screen). more honest — it's a rendered path, not a beam of light. trace 1, trace 2. the word also works as a verb: "trace the trajectory." |
| k / kHole | **k** (keep, it's a parameter not a word) | the proportional-hole constant. k=2 → hole is 1/3 of the whole. the parameter IS k. no name needed beyond that. |
| displacement | **displacement** (keep) | outward translation at cycle boundary. accurate. |
| self-scale | **proportional** | "self-scale" describes the mechanism. "proportional" describes what it achieves: the hole stays a constant proportion at every cycle. proportional mode on/off. |
| ratio | **ratio** (keep, but clarify) | the cascade base. rate at depth d = (1/ratio)^d. the word is fine. what it labels is the base of the geometric series, not "a ratio" in general. |
| phase | **phase** (keep) | accumulated angle. standard term, correct usage. |
| plane schedule | **schedule** (keep) | which rotation plane at each step. already named correctly. |
| normalize | **compress** | "normalize" is overloaded (statistics, audio, database). what this actually does: compress the form into a unit region by dividing by outer radius and recentering. "compress" is what happens. |

### measurement

| current | proposed | why |
|---------|----------|-----|
| PCA | **principal axes** | PCA is an acronym. what you GET from it is the principal axes and their magnitudes. the axes tell you the shape. say what it gives you, not what algorithm you ran. |
| COM | **center** | center of mass of the point cloud. just "center." |
| closure | **closure** (keep) | does the trajectory return to its start? clear, accurate, verified concept. |
| fingerprint | **signature** | "fingerprint" implies unique identification — not verified. "signature" characterizes without claiming uniqueness. the principal axes + closure + symmetry form a shape signature. a signature CAN repeat (two different configurations might share one). a fingerprint supposedly can't. we don't know that these can't, so don't claim it. |
| caliper | **caliper** (keep) | distance measurement between features. already grounded — it's literally what a caliper does. snaps to real features, measures distance. |
| cross-system | **cross-system** (keep) | same measurement in all rulers at once. descriptive, accurate. |
| invariant | **invariant** (keep) | the ruler-independent quantity. standard mathematical term, correctly used. |
| ellipsoid | **shape** | the PCA-derived shape description (prolate/oblate/isotropic). "ellipsoid" is one way to visualize it. "shape" is what it IS. |

### 4D

| current | proposed | why |
|---------|----------|-----|
| SE(4) | keep for technical reference | but don't use as vocabulary — it's a group name, not a word |
| w-spin | **w-turn** | "spin" implies physical spin. this is a viewing rotation mixing a spatial axis with the 4th dimension. "turn" is simpler, more honest. you turn the form in 4D to see its structure. |
| ortho-w / persp-w | keep | clear enough — orthographic or perspective projection from the w axis |

### formula bank

| current | proposed | why |
|---------|----------|-----|
| staged | **composed** | this is the core iterative construction — rotations and translations COMPOSED into a matrix product. "staged" sounds like a theatrical term. "composed" is what the math does. |
| lissajous, torus, epicyclic | keep | standard mathematical names. already grounded. |
| freed | **simultaneous** | "freed" is aspirational — freed from what? what it DOES is apply all rotations at once instead of in sequence. "simultaneous" says that. |

### dropped (not structural)

| word | verdict |
|------|---------|
| tier | rendering plumbing. drop from vocabulary. stays in code as implementation detail. |
| growth | UI animation timing. drop from vocabulary. |
| rung | merged into "depth." gone. |
| level | merged into "depth." gone. |
| beam | replaced by "trace." |

---

## naming the unnamed

four concepts that exist in the mechanism but have no name:

### 1. the construction rule

the recipe: rotate in a plane, rotate in another plane, translate outward, repeat. each step wraps around the accumulated figure. the schedule says which planes. the cascade says how fast. the proportion says how far to translate.

what to call it? it's an **iteration**. each step iterates on the whole. the construction iterates. but "iteration" is generic. what makes THIS iteration unique?

what's unique: it composes rigid transformations (rotations + translations) in a specific scheduled sequence, with geometric rate decay across depths. no other construction does exactly this.

proposed: **the composition**. the instrument's composition is its construction rule — how it composes transformations. "compose" already appears in the code comments ("composed rotations"). the composition produces the trajectory. the trajectory feeds the measurement.

feels right? it's grounded in the math (function composition, matrix composition). it's not aspirational. you can verify it — open buildRaw(), watch it compose.

### 2. the rate cascade

each depth's phase advances at (1/ratio)^depth of the base speed. deeper = slower. the ratio between successive depths is constant. it's a geometric series of frequencies.

proposed: **the cascade**. already used informally in code comments ("rate cascade"). make it official. the cascade has a base (the ratio). the cascade sets the frequency at each depth. verified behavior: at depth 19, innermost rate is (1/π)^18 ≈ 6×10⁻¹⁰ of outer rate.

### 3. the proportional scaling

d = k·(k+1)^(C-1)·radius. the hole stays a constant fraction (k-1)/(k+1) at every cycle. verified self-similar to depth 19, cycle 9. the form is the same shape at every scale.

proposed: **the proportion**. k IS the proportion. the proportion holds across cycles. "proportional mode" (on/off). the proportion is verifiable: measure hole fraction at any cycle, it's (k-1)/(k+1).

this doesn't need a fancy name. it's a proportion. k sets it. it holds.

### 4. the measurement apparatus

PCA (→principal axes), caliper, cross-system, signature, closure — all feed from whatever trajectory the construction produces. swap the formula, the measurement stays. it's the invariant infrastructure.

proposed: **the scope**. this is literally the "-scope" in Trajectoscope. the scope is the measurement side. the composition builds, the scope measures. the scope includes: principal axes, center, closure, shape, caliper, cross-system, signature.

if the whole instrument is the Trajectoscope, then:
- **composition** = the "trajecto-" part (builds trajectories)
- **scope** = the "-scope" part (measures them)
- **trace** = what you see (the rendered path)
- **signature** = what you read (the measurements)

that's... clean. the name already encodes the two halves.

---

## summary of changes from f0

**renamed:** level/rung → depth, beam → trace, fingerprint → signature, self-scale → proportional, normalize → compress, PCA → principal axes, COM → center, ellipsoid → shape, staged → composed, freed → simultaneous, w-spin → w-turn

**dropped:** tier, growth, rung, level (as separate words)

**kept:** cycle, seed, radius, k, displacement, ratio, phase, schedule, closure, caliper, cross-system, invariant, lissajous, torus, epicyclic, ortho-w, persp-w

**named the unnamed:** the composition (construction rule), the cascade (rate structure), the proportion (self-similar scaling), the scope (measurement apparatus)

**instrument structure:** composition + scope = Trajectoscope. the name already said it.

---
