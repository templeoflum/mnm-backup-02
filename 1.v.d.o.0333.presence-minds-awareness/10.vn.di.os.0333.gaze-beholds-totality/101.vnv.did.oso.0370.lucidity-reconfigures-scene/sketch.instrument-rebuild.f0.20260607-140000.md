# sketch — instrument-rebuild — f0 — 20260607-140000

vocab sketch for the collapsed TS instrument. 4 stages → 1 instrument. everything here is floating. playing with words, seeing what sticks.

---

## what it actually does (mechanism, no vocab)

1. **construct**: compose rotations and translations iteratively into a matrix. apply the matrix to a seed point. advance phases at cascading rates. the output is a trajectory — a point moving through space over time.

2. **measure**: sample the trajectory as a point cloud. compute invariants: principal axes (PCA eigenvalues), center of mass, inner/outer radius, closure, symmetry, feature angles, net rotation. these don't change when you change the frame of reference.

3. **compare**: measure the same distance between features in multiple coordinate systems (cartesian, polar, logpolar, spherical). the invariant distance is the anchor. the difference between rulers is the distortion.

4. **project**: collapse from higher to lower dimensions for viewing. 4D→3D (ortho or perspective from w). 3D→2D (standard camera).

5. **vary**: swap the trajectory formula. the measurement spine stays the same. different formulas (lissajous, torus, epicyclic, freed, staged) are different inputs to the same measurement.

---

## current vocabulary (as found in the code)

### construction words

| word | what it means | notes |
|------|--------------|-------|
| level | how many rotations active | interchangeable with "rung" in code — pick one |
| rung | same as level | variable name in code, UI says "level" |
| cycle | a pair of rotations + one translation | cycle = floor(level/2) |
| seed | starting point [D,0,0] | the thing being transformed |
| D / radius | seed's distance from origin | the base scale |
| k / kHole | self-scaling constant | hole = (k-1)/(k+1), k=2 → hole = 1/3 |
| displacement | outward translation at cycle boundary | d = k·(k+1)^(C-1)·D |
| self-scale | proportional-hole mode | displacement ∝ current figure radius |
| ratio | geometric cascade factor | rate(level) = (1/ratio)^level |
| phase | accumulated angle per rotation | ph[k] advances at rateFor(k) |
| plane schedule | which rotation plane at each step | SCHED: XY,YZ,XZ,... |
| beam | a trajectory instance | beam 1, beam 2 — two independent runs |
| normalize | compress to unit region | divide by rmax, recenter on COM |

### measurement words

| word | what it means | notes |
|------|--------------|-------|
| PCA | principal component analysis | eigenvalues = shape (prolate/oblate/isotropic) |
| COM | center of mass | the centroid of the point cloud |
| closure | does the trajectory return? | low = closed curve, high = space-filling |
| fingerprint | full state snapshot | all measurements at one configuration |
| caliper | distance between features | snaps to real 3D features only |
| cross-system | same measurement in all rulers | the convergence measure |
| invariant | the ruler-independent anchor | true 3D distance, divided by outer radius |
| ellipsoid | PCA-derived shape | period-2 alternation across levels |

### 4D words

| word | what it means | notes |
|------|--------------|-------|
| SE(4) | 4D rigid transformation group | extends 4×4 to 5×5 matrix |
| w-spin | rotation mixing spatial axis with w | the 4D viewing rotation |
| ortho-w / persp-w | 4D→3D projection modes | drop w or perspective from w |

### formula bank words

| word | what it means | notes |
|------|--------------|-------|
| staged | the iterative SE(3)/SE(4) construction | the core, the keystone |
| lissajous | sin per axis | simplest parametric trajectory |
| torus | two circles | major + minor radius |
| epicyclic | circles on circles | nested, halving radius |
| freed | all axes/planes at once | sweeps volume, 3D native |

### rendering words (probably not structural)

| word | what it means | structural? |
|------|--------------|-------------|
| tier | opacity range per layer | no — visual only |
| growth | grow-in animation | no — UI timing |
| beam | trajectory instance | maybe — "beam" comes from optics, is that the right frame? |

---

## what feels redundant or misnamed

- **level vs rung**: two words, one concept. "level" is clearer. "rung" connects to the derivative ladder in spline continuity — which is now a separate instrument, so the crossover may confuse.
- **beam**: why "beam"? a trajectory is not a beam of light. it's a path through transformation space. maybe "trace" or "thread" or just "trajectory." but "beam" has momentum — it's been used for a while.
- **tier**: this is rendering plumbing, not a structural concept. doesn't need to be in the vocabulary.
- **growth**: UI animation. not structural.
- **fingerprint**: strong word but is it accurate? a fingerprint identifies. this snapshot characterizes. is characterization the same as identification? the FINDINGS doc suggests the correspondence between lattice structure and TS is real but partial — lattice addresses radial structure but provably can't address rotational structure. so the "fingerprint" might not be a full identity. but it's the best available invariant description.

## what might be missing

- a word for the **construction rule itself** — the recipe that says "rotate, rotate, translate, repeat." SCHED encodes it but there's no name for the concept.
- a word for the **rate cascade** — the geometric series of frequencies. it's described as "ratio" but ratio is the parameter, not the structure. the cascade itself — each level spinning at 1/ratio of the previous — needs a name or doesn't.
- a word for the **self-similar scaling** — the proportional-hole property. k controls it but the phenomenon (constant hole fraction across cycles) is unnamed.
- a word for the **measurement spine** — the fact that all formulas feed the same measurement apparatus. the spine is the invariant infrastructure. PCA + caliper + cross-system + fingerprint is one system. does it need a name?

---

## the name

Trajectoscope. TS. is it still right?

- "trajecto-" = trajectory. that's accurate. the core object IS a trajectory.
- "-scope" = to look at / measure. also accurate. measurement is half the instrument.
- the name doesn't capture the CONSTRUCTION though — the iterative composition of rotations and translations. it names the viewing, not the building.
- alternative framing: the instrument builds AND measures. construction + scope. the trajectory is what comes out of the construction and goes into the scope.

floating: maybe the name is fine. maybe it changes. not settling this here.

---

## the collapse

4 stages → 1. what does the single instrument have?

- the full SE(4) construction (from TS_4D) — subsumes 3D
- the caliper + cross-system measurement (from TS_fingerprint)
- the formula bank (from TS_formulas)
- the core visualization (from TS_3D, carried forward in all)

nothing gets SHED. each stage only added. the collapse is about organization, not removal. one HTML file instead of four, with all capabilities accessible.

the challenge: TS_formulas is ~2,845 lines. the collapsed instrument will be larger. needs clean internal organization — sections, not a wall of code.

---
