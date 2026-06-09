# Findings — Ternary Addressing of the Lattice, and Its Correspondence with TS

*A working report. Each claim is marked **confirmed** (computed and verified), **provable-impossible** (ruled out by structure, not just unobserved), or **open** (well-defined but not yet run). No claim is crowned beyond what the calculation shows.*

---

## 0. The move that opened this

Assign the three roles ternary digits — **is/noun = 0 (I)**, **does/verb = 1 (D)**, **goes/mod = 2 (G)** — and prepend a decimal point. Every lattice address becomes a single **ternary fraction in [0, 1)**: DDD → .111₃ = 0.4815, GGG → .222₃ = 0.9630, III → .000₃ = 0.

The ordering is not arbitrary. 0 = noun is the deeper formal *what-is* (the ground you can build on but don't need first); 1 = verb is the on-ramp, the first *active* value — you can do before you formally understand; 2 = mod is the qualifier that relates outward. The number line encodes the epistemic order: ground → act → relation as low → middle → high.

This turned the lattice from abstract language into hard math: a position in the structure is now a number, and movements become arithmetic.

---

## 1. The movement algebra — **confirmed**

The lattice has three "swap a coordinate" movements plus depth. Each is an exact ternary digit-shift at its place value (base DDD):

| movement | what it changes | Δ on the number line | place value |
|---|---|---|---|
| **branch** switch | first digit | ±0.333333 | 1/3 |
| **leaf** switch | second digit | ±0.111111 | 1/9 |
| **cell** (sibling) step | third digit | ±0.037037 | 1/27 |
| **depth** (in/out) | adds/removes a digit | appends value·3⁻ⁿ / truncates | — |

The four navigation axes are **one operation — shift a ternary digit — at four scales (powers of 3), plus depth.** This is the self-similarity stated as arithmetic, exact to machine precision. The "same shape at every scale" is literally: the same digit-shift, scaled by 3ⁿ.

**Why three coordinates suffice for precision:** there are more ways to *move* (4 axes) than coordinates to *name* (3 digits), because in/out changes the address's *length* while the other three change *values* at fixed positions. Naming and moving are different jobs; the address only does the naming, so it stays minimal and locks one cell out of 39 unambiguously.

---

## 2. The interval and what it can reach — **confirmed**

Addresses live in **[0, 1) — half-open, closed at 0, open at 1** (topologically *neither* open nor closed). The reachability is asymmetric and falls out of the digit-ordering:

- **0 is reachable** — III = exactly 0.0 (finite address). The noun-ground / self-referential floor (unit·holds·one) sits at the **origin**. You can stand on it.
- **0.5 is never reached** — .111…₃ = ½ is the *limit* of the verb-spine (D → DD → DDD → … = 0.333 → 0.444 → 0.481 → … → 0.5). The center is approached forever, never landed.
- **1 is never reached** — .222…₃ approaches 1; even infinite G's only converge.

The system **balances itself through precision**, not through fluctuating values: you reach the center by adding ternary digits without limit, not by any node *being* 0.5. Depth does the work.

Structural reading (held as resonance with the project's prior commitments, not as proof): **the ground (what-is, 0) is the one thing you can fully stand on; the center (the witness-seat, 0.5) and the totality (the complete record, 1) are approached but never seized.** This is the project's long-held "no terminus / build toward but never grasp" — here forced by the geometry rather than chosen. **Load-bearing caveat:** the witness-at-center result is contingent on verb = 1 (the middle digit). A different ordering would not put the verb-limit at center. The ordering and the meaning confirm each other.

**The set underneath:** ternary digits subdividing by 3 at every place *is* the Cantor construction. The finite addresses (39 nodes) are the endpoints appearing at each construction stage; the infinite addresses (the witness-limit, the ceiling) are the limit points you only approach. The lattice's addressing scheme is **the ternary/Cantor addressing, truncated at finite depth**, with self-similarity, totally-disconnected ("clopen") structure, and unreachable limits all sitting underneath as you add precision. The Cantor set is what it *becomes* in the limit of infinite depth — which is the "more forms on the horizon as you go deeper" feeling, made precise.

**Working principle:** the system is infinite, but you work a fixed finite frame (three levels, ternary to three places) as a **ruler**. Depth is earned — once the current frame crystallizes through use, you add precision and go deeper. Hold the infinite as context, never as workspace.

---

## 3. Correspondence with TS — the central result

TS (the trajectory instrument) builds forms by sweeping cycles of **[rotate, rotate, translate]** with self-scaling displacement **d = k·(k+1)^(C−1)·D**. At k = 2 it grows **×3 per cycle** (verified against TS's own completion counts 240 → 720 → 2160 → 6480, exactly ×3). The correspondence with ternary addressing splits cleanly into two halves.

### 3a. Radial / scaling direction — **confirmed (Fork B: real, predictive)**

TS nesting and address resolution are **reciprocal ternary**: TS scales **outward ×3 per cycle** (3^(C−1) = 1, 3, 9, 27, …); the address resolves **inward ÷3 per digit** (3⁻ⁿ = 1/3, 1/9, 1/27, …). Same ternary scaling, opposite directions.

A minimal [rot, rot, translate] construction (k = 2) gives point-radius ratios converging on 3:

```
4.0 → 3.25 → 3.077 → 3.025 → 3.008 → 3.003 → 3.001 → 3.0
```

So **address depth ↔ which nested radial shell a point lives in**, predictively. This is the correspondence doing real work, not just describing: depth names the shell. It holds because **both are positional in the radial direction** — the address weights by place-value (3⁻ⁿ), TS weights by cycle-power ((k+1)^(C−1)) — and these agree.

### 3b. Angular / rotational direction — **provable-impossible (Fork A: they diverge, by structure)**

The angular components **cannot** correspond, and this is ruled out structurally, not merely unobserved:

- The **address-ratio is order-sensitive (positional)**: DG = 0.556 but GD = 0.778 — earlier slots weigh more (3⁻¹ > 3⁻²). Position in the string matters.
- TS's **accumulated rotation is order-blind (commutative)**: DG and GD sum to the same total angle, because rotation angles add and addition commutes.

A positional/weighted quantity can never equal a commutative/flat one. The angular test confirmed this — slot-sequence → angle matched the address-ratio×360° only at depth 1 (4/14 cases, all depth-1-dominated), and breaks the moment a second slot carries weight. **There is no angular map**, because the two directions have different algebra.

### 3c. The meta-finding — **confirmed, and a real lead for TS**

The correspondence boundary falls exactly along TS's own two operation-types:

> **TS's *translate* (positional, self-scaling) is the half the lattice addresses (Fork B). TS's *rotate* (commutative) is the half it provably cannot (Fork A). The rotate/translate split in TS *is* the matches / doesn't-match boundary of the correspondence.**

And the lattice and TS **divide along the same seam** the lattice already has internally — **magnitude vs. phase**: the address has a ratio-value (radial, positional) and a separate rotational reading (I = 0°, D = 120°, G = 240° — the wheel). TS splits radial-vs-angular the same way. Two ternary systems dividing along the identical seam is strong evidence of shared deep structure — *and* it locates precisely where they coincide and where they can't.

**Lead handed back to TS development (held as a lead, not a conclusion):** TS's radial/scaling structure has a clean coordinate system (the lattice); its rotational structure does not (it is commutative, phase-like, a different kind of thing). This suggests TS's two halves may want to be treated as *different kinds of object* rather than one uniform construction — the scaling half is addressable, the rotation half is not.

---

## 4. On "how many dimensions" — **confirmed it is scale-dependent**

The count was never fixable because the structure is self-similar, so it depends on what you measure — and TS folds the same way:

| how you count | lattice | TS | value |
|---|---|---|---|
| generative operations | one fold (IDG), recursive | one transformation, recursive | **1** |
| kinds of motion | cycle-a-value / change-length | rotation / translation | **2** |
| steps per level | three slots I/D/G | rot, rot, translate | **3** |
| degrees of freedom | one per slot + depth | one per cycle + level | **depth + 1** |

All four are true at once; the dimension you get depends on the scale you measure at — which is the self-similarity showing up *in the dimension-count itself* (the same reason a fractal has non-integer dimension). Both systems refuse a single number for the same reason.

---

## 5. Status ledger

| finding | status |
|---|---|
| Movement algebra = exact ternary digit-shifts (±1/3, ±1/9, ±1/27) | **confirmed** |
| Interval [0,1); 0 reachable, 0.5 and 1 only approached; balance-by-precision | **confirmed** |
| Underlying set = truncated ternary/Cantor addressing | **confirmed** (structural) |
| TS-nesting ↔ address-resolution = reciprocal ternary (×3 / ÷3) | **confirmed** (vs TS counts) |
| Radial: address depth ↔ TS shell, predictive | **confirmed** (→ 3.0) |
| Angular: address ↔ TS rotation | **provable-impossible** (positional ≠ commutative) |
| Boundary = TS's own translate/rotate split = magnitude/phase seam | **confirmed** |
| Witness-at-center contingent on verb = 1 | **noted dependency** |
| TS's two halves may be different kinds of object | **open lead** |
| What the commutative/phase half of TS corresponds to instead (if not the lattice) | **open** |

---

## 6. The honest one-paragraph version

Assigning the three roles ternary digits turns every lattice address into a number in [0,1), makes the four navigation movements exact arithmetic (digit-shifts at powers of 3), and reveals the addressing to be a truncated Cantor scheme that balances itself by precision rather than by fluctuating values — reaching the ground (0) but only ever approaching the center (½) and the totality (1). Against TS, the correspondence is **real and partial, with a clean boundary**: the lattice fully addresses TS's *radial/scaling* structure (depth ↔ nested shell, confirmed predictively to ×3) but **provably cannot** address its *angular/rotational* structure (the address is positional, rotation is commutative — different algebra). The boundary coincides exactly with TS's own translate-vs-rotate split and with the lattice's own magnitude-vs-phase seam, which is strong evidence the two are the same recursive ternary object seen as address and as motion — agreeing where both are positional, diverging where TS turns commutative.
