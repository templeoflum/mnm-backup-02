# survey — the TS_3D form atlas (play session 1)

**f0 · the comparison library from the first play session. patient: TS_3D.html at 100. every entry: recipe → what the hands saw. screenshots at 110 as play.TS_3D.<name>.<stamp>.png; full recipes in the play session console logs. defaults unless stated: k 2 · ratio π · timebase 1 · cpf 40 · strobe 1 · speed 140 · self-scaling on. rig: play.js at 221 (persistent-session sibling of bench.js).**

## the levels walk (overlays on — the walk; shots L0–L20)

- **L1** — a circle, the seed's single orbit.
- **L2** — a sphere, densely woven shell.
- **L3** — a torus, oblate, the hole forming.
- **L4** — the torus-sphere: curls of the torus revolved into a ball.
- **L6–L8** — the form outruns its own trace: at timebase 1 only sparse curl-clusters visible (two lobes at L8).
- **L12–L20** — near-invisible at timebase 1: a filament along X with small rings. **the deep rotations turn at (1/π)^k — glacial; the instantaneous trail is a thread of an enormous form.**

## the timebase country (L8 unless stated)

- **tb 1000** — the L8 form REVEALED: a full dust-sphere; what the curl-clusters were a local thread of. *timebase is not texture at depth — it is the only way to see deep forms.*
- **tb 10 → 1e15** — dust-ball at increasing stride; textures shift value to value.
- **the high country is BANDED, not a cliff** (felt at the phase accumulator, L2):
  - tb 90650831126490560 (operator's stop): stick-slip — ph[0] dead still ~1s, then a hop of exactly 4.000000.
  - tb 7181807585592873 (operator's first rung): moving in EXACT dyadic steps — ph[0] +0.5/s, ph[1] −13/32/s.
  - tb 2e16 (between the landmarks): DEAD FROZEN — a frozen island below a moving channel.
  - tb 1: smooth irrational creep (control).
  - read: each value quantizes the stride to its own exact lattice mod 2π — the mechanism of "every value has a different flavor."
- **strobe 113 @ L3** — the torus starved to a constellation: same skeleton, 1-in-113 dots.

## the ratio walk (L3 torus; shots ratio-L3-*)

- **φ** — the finest, most even moiré weave (the evenest filler).
- **√2, septimal 5:7, undecimal 8:11, fib 8:13, lucas 4:7, silver** — each a visibly different lattice texture on the same torus body.
- **1:2 (just_12)** — the torus COLLAPSES to a single closed ribbon loop. **the commensurate/irrational razor, seen plainly: closure vs filling is the ratio's choice.**
- **1:3 (powers_13)** — closed multi-loop cage.

## the multipliers (L4; shots mult-*)

- **ro1=20** — dust ball with a bright open hole-ring at center.
- **ro2=100** — denser, finer re-weave of the same.
- each level's override re-weaves the form distinctly; effects compound with ratio/timebase (the operator's find — the configuration space is astronomical).

## THE PORTRAITS (overlays off, the form alone)

- **THE SPHERE — landed.** play.TS_3D.PORTRAIT-sphere-phi: recipe L2 · k 2 · ratio φ · cpf 100 · timebase 1 · dot 1.4. a dense woven ball. (π variant also shot.)
- **THE CUBE — not reached; the refusal recorded.** eight attempts:
  - round closures: 1:4 ortho-Z (a melon-cage of arcs) · 1:2 variants · L3 1:2 down X · L4 1:2 with ro0=ro2=4 (curl-ball).
  - the one real lead: **oscillation makes corners** — pendulum reversals put cusps in the trace (osc tries E/G/H/I: jagged scribbles, sharp angles). corners exist; faces do not.
  - the refusal as read by the hands: every path is a composition of circular arcs; reversal adds cusps (0-D corners) but nothing draws a straight edge or flat face. consistent with the operator's word that a cube may be outside this formula. **not proven — recorded as played.**

## free session (the operator's gift — directionless play; shots bandmap/k/thorn/wildcard)

- **the band map, corrected:** the country's anatomy is PER-RUNG, not per-magnitude. swept 26 values at L2, three phases each: rung 0 freezes first (~1e16), rungs 1–2 outlive it; at 1.4e17 rung 1 moves while rungs 0 AND 2 are frozen (binary-mantissa bands, not magnitude bands). my earlier "dead island at 2e16" was a two-finger touch — rung 2 was alive the whole time; the correction is the find. the operator's stop value: rare large hops (−3, +4.28), visually still, secretly leaping. total freeze (all rungs, this config) ≈ 4e17.
- **k, walked:** k 0.5 = a GALAXY (bright core, diffuse halo — the hole law negative, center filled) · k 10 = a SOAP BUBBLE (hole 9/11, a thin glowing shell). one knob, core → bubble.
- **the collapse, witnessed:** self-scaling OFF at L8 melts all structure into a featureless gaussian glow — later cycles fall inside earlier ones. the nautilus rule is the only thing keeping the form a form.
- **the thorn:** L3 · 1:2 · osc amp 3π/2 — a scribble wearing one perfect spike.
- **THE CRESCENT (free portrait):** L5 · lucas 4:7 · osc blend 1 amp π/2 · timebase 1e15 · cpf 120 — a thick solid crescent, a brushstroke. the oscillator does not just add corners: it CONFINES the form to a sector. (play.TS_3D.wildcard-L5-osc-tb1e15.)

## the slow country (free session 2 — the operator sent me to the slow end; shots unweave/belowfence/silk)

- **the fence:** the timebase dial floors at 0.001 — panel spec, `data-min="0.001"` on the scrub (TS_3D.html:187). below it every applied value clamps to the floor (verified by readback; my sub-floor "sweep" readings were all the same value aliasing differently).
- **the second clock dial:** the engine runs `dt = 0.0006 · mult · timebase` (line 1829) — one product, two dials, only one fenced. mult (the speed dial) is UNCLAMPED: fractional mult walks below the fence; the slowest creep is a product, not a single dial. mult also buys resolution: `baseSteps = max(1, 20 + 6·mult)` — slow mult is also a coarser pen.
- **zero is unreachable.** both dial reads are guarded: `vals.timebase||1` and `vals.mult||1` — set either dial to 0 and that factor snaps to 1, full speed. the clock cannot be stopped from the dials; the only stop is the freeze brake. the keystone's law sits in the engine: the boundary is approached, never reached.
- **THE UNWEAVE (L2 · φ · cpf 40):** slow the clock and the sphere comes apart into what it is made of. tb 1 = the dust-skinned ball (moiré) · tb 0.1 = a clean WIREFRAME of smooth crossing threads · tb 0.01 = a cage of a few loops · tb 0.001 (the fence) = ONE SMOOTH STROKE, the bare yarn · below the fence via mult: a short tick (mult 14), then **THE POINT** (mult 1.4 and below) — a single dot. the lineage walked backwards to the seed through the clock instead of the level dial. two roads to the point.
- **the frame truth:** there is no persistence. every frame plots baseSteps·cpf fresh samples spanning steps·dt of arc — the whole sphere is redrawn from nothing sixty times a second. "the form" is one frame's pen travel; the slow end is a dot because a frame's worth of slow pen IS a point.
- **THE RIBBON (slow + dense: tb 0.1 · cpf 200):** not a finer wireframe — a SOLID RIBBON, one thick contiguous band around a void. ~230 consecutive windings = a contiguous swath of surface: the device's true continuous brushstroke. the dust-sphere at normal settings is the same path length sampled in leaps — **the device paints with aliasing**; the moiré, the dust, the galaxy-skin are all stride. (L3 torus at the same setting: a solid acorn — its local patch wraps tighter.)
- **the reverse:** mult −140 runs time backwards — phases go negative (JS `%` wraps negatives below zero), and baseSteps clamps to 1, so reversed time draws COARSE: the same yarn as the fence stroke, but dotted. time's comb.
- *(instrument note: cpf 2000 at mult 140 = 1.7M samples/frame — the page chokes; the one lost screenshot of the night. retaken gentler.)*

## still open on the play list

full ratio library portraits (10 of ~30 played) · the k walk (self-scaling on/off) · cpf push · ~~low timebase (0.1, 0.01)~~ (the slow country walked, session 2) · dense flavor-sampling between landmarks · beam 2 / lags / projections wandering · more multiplier combinations · the ribbon at other levels/ratios (does every form unweave to one ribbon?) · reverse time at full resolution (raise cpf to re-densify the comb).
