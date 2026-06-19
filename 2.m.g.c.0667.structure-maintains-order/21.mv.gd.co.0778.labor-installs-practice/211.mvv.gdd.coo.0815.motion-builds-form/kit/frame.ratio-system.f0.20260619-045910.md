# frame — ratio system — f0 — scale · sync · reverse

home: `kit` (211/kit, co-located) · mode: builder window · status: **MATH SETTLED IN CONCEPT — unbuilt** · derived live with the operator, not inherited · the doc at `200 — parameter loop system.f0` is untested aspiration; **only its ratio catalog (Layer 2) is trusted ground** — its phase math and Layer 4 are not.

A param derives its own rotation from the heart through two rate knobs + an offset. This frame is **stage one** only — the rate relationship. *Which* signal a param reads, and *how* it shapes it, are later layers (deferred below).

## the agreement (at a glance)

- the heart is one point rotating forever; its state is a monotonic turn count `H` that only grows — never wraps, never resets.
- a param's phase: `φ = fract( H · m · r + o )`.
- `r` = **ratio** ∈ [0, 1) — the fraction. free-continuous, library-bookmarked.
- `m` = **mult**, |m| ≥ 1 — the whole scale; **sign = direction** (− = reverse rotation).
- `o` = **offset** ∈ [0, 1) — a constant head-start, so two params on the same r·m sit out of phase.
- the two knobs are distinct by **domain**, not by direction: r can only ever take a fraction (< 1), m can only ever scale in whole terms (≥ 1). that *is* "ratio divides the cycle, mult increases it."

## the math

**The heart.** One point rotating forever around the center. Its state is an accumulated **turn count** `H` — a real that only grows (`H = 3.25` → three turns plus a quarter). Position is cyclic: `heartPhase = fract(H)`. `H` advances at `1/period`; play/pause/timescale change how fast it grows, nothing resets it. Two readings of one rotation: position *comes home* every turn (periodic tracks: sin, cos, the xy, radix, sec); accumulation *climbs forever* (monotonic tracks: turns, distance).

**The param.**

```
φ = fract( H · m · r + o )
```

`m · r` is the param's **cycles per heart-turn** (signed). It is the whole relationship:

- `r ∈ [0, 1)` — the fractional relationship, the polyrhythm flavor. At `m = 1`, **r is the catalog decimal directly** (2:3 → 0.667, 4:5 → 0.800, 1/φ → 0.618).
- `m` (|m| ≥ 1) — the register/scale on top: bump the whole relationship up in whole steps. `sign(m)`: + forward, − the point rotating backward through the same relationship.
- `o ∈ [0, 1)` — phase head-start.

**Convention (set by feel, one sign-flip to reverse):** larger `|m·r|` → faster (more param cycles per heart rotation). r toward 1 = faster, m up = faster. If it reads backward in the hand, the law becomes `fract(H · m / r ...)` or the knobs invert — a feel decision, not a structural one.

**Sync.** The relationship *comes home* (re-meets the heart) exactly when `m·r` is **rational**, and it re-meets at the LCM of the reduced fraction — that is the catalog's LCM column, "how often it comes home." Irrational `m·r` (e.g. `r = 1/φ`) never re-syncs — free-running forever.
- rational → locked polyrhythm.
- irrational / arbitrary detune → off-beat or totally free-running.
- **never *locked* to sync, but always a path home**: a rational `r` (or `m` back to a whole number) re-locks it.

**Determinism.** `φ` is a pure function of `(H, m, r, o)`. Same `H` → same `φ`, always. Serialize `H` + the knobs → exact recall. A speed change alters how fast `H` grows next, never the current `φ`.

## the library

Bookmarks live on the knobs by **magnitude** (this falls out of the domains — operator to confirm):

- **ratio (< 1)** gets the sub-1 catalog entries: the intervals and their reciprocals (2:3, 3:4, 4:5, 1/φ = 0.618, near-unison 0.9xx…). This is "the library for ratio" the operator named.
- **mult (≥ 1)** naturally gets the ≥ 1 entries: whole multiples (octaves 2, 4, 8), and the > 1 irrationals (φ = 1.618, √2, the metallic constants).

Catalog organization carries over unchanged: section number → relationship character; LCM → sync period; section 12 (irrationals) → the never-sync set.

## relation to the current code

The kit already computes `fract(turns · ratio · mult + offset)` (workbench loop) — so the **shape of our math is already right**. What this frame changes is the framing and the domains, not the formula:
- constrain `ratio` to [0, 1); `mult` to |m| ≥ 1 with a **sign** (the code has neither — both run 0.0625–16, no reverse).
- give `ratio` the library bookmarks (and `mult` the ≥ 1 ones).
- the unconstrained domains are exactly what made the two knobs feel redundant and the behavior murky.

(Note, neutral: because r < 1 and m ≥ 1, the same net rate is reachable by different paths — `m=2,r=0.5` and `m=4,r=0.25` both give 1.0. That is the intended two-grips design — r picks the relationship, m picks the register — not a fault.)

## build sequence (when picked up — concept gate not yet closed)

1. **constrain the knobs** — ratio [0,1), mult |≥1| + sign; default ratio 0.5-ish, mult 1.
2. **ratio library** — a bookmark selector on the ratio control (catalog shells → values), free-dial preserved underneath.
3. **mult bookmarks** — octaves + ≥1 constants on the mult control.
4. **rig** — assert φ for known (H, m, r, o); assert rational m·r re-syncs at the LCM, irrational does not; assert sign(m) reverses.

## deferred (named — not this math)

- **signal pickoff** — which heart track the param reads off its `φ` (phase / sin / cos / xy-p / distance / turns / radix-count / sec…). The ratio system sets the *rotation*; pickoff sets *what is read from it*.
- **derivation / loop mode** — how the param shapes the picked signal (wrap · ping-pong · bipolar · unipolar). The deferred loop discussion; needs its own pass.
- **magnitude-direction convention** — faster-when-larger (chosen here) vs the inverse; settle by feel on first play.
- **library-split-by-magnitude** — the r-gets-<1 / m-gets-≥1 split above is the clerk's read, not yet confirmed by the operator.

## laws (carried)

only the catalog is trusted from the `200` doc — its phase math and resolver are not · settle the concept, then derive the math to fit (never reverse-engineer intent from untrusted math) · direction is a label set last, by feel · feel is the operator's, correctness in the rig · settle before build ([[log.scope-overbuild]]) · buildless, no deps ([[buildless-unit-default]]) · direct manipulation ([[operator-builds-by-hand]]).
