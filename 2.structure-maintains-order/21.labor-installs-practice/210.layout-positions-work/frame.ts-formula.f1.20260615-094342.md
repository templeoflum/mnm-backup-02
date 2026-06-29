# frame — TS-F (the formula) — f1

address: 210 (layout·positions·work) · mode: builder window · status: **SETTLED**, pending scaffold-location · scope: `ts-formula` (project `ts*`) · folds from [[frame.ts-formula.f0]]

**Redraft (operator word 20260615): the method in f0 was wrong.** f0 framed TS-F as monolithic extraction — locate `buildRaw` in the toy, port it faithfully, reproduce the toy's output. But the toy bakes in first-principles errors (its clock is **rate×time**; the clock should be a **period**), and a wholesale port carries those errors forward. F1's read proved it: TS_3D accumulates `ph[k]` by `rateFor` over time — the wrong clock, baked in. f1 reframes around **first principles**: build TS's atomic units in isolation, each built *right*, proven alone, then combined. f0 stands as trail.

## the subject

The one nD generative formula — built **from its atomic units**, not extracted whole. TS_3D/TS_4D are a **reference and a cautionary example**, not the source of truth.

## the stack (locked)

**TypeScript + WebGPU**, web/browser-hosted (lattice-talk + seat playability), bundled and lattice-served. The formula runs GPU-side: a WGSL compute shader emits the point-path in parallel; instanced render; the beam is a glow shader pass (TS-B).

## the method (the change from f0)

Build each **atomic unit in isolation**, from first principles, proven alone — *then* combine. Where the toy got a principle wrong, build it right; the toy is reference, never the thing to reproduce. **One solid first:** n=3 through the whole chain, then add the dial (nD).

## the atomic units (the slices — each built alone, proven, then combined)

| unit | what it is (first principles) | proven when |
|------|-------------------------------|-------------|
| **U0 clock** | a **PERIOD** — cyclic, bounded; **speed = the period's length**; phase = normalized position within it (0→1). **NOT rate×time.** | a clock runs as a true period; changing speed changes the period's length, phase stays normalized and bounded |
| **U1 rotation** | a point turning in a plane, driven by a clock | one clock drives a point through a clean circle |
| **U2 ratio** | clocks/rotations whose periods are ratioed — the ladder | ratioed clocks relate correctly (the cascade) |
| **U3 schedule** | which planes the rotations act in (the `SCHED`) | rotations land in the right planes in order |
| **U4 self-scaling** | the nautilus law: displacement `d = k·(k+1)^(cyc-1)·D`, holding the hole a constant proportion as it grows | the figure self-scales; the hole stays proportional |
| **U5 projection** | nD point → viewable, honestly | the point renders without lying about dimension |
| **C combine** | assemble the proven units into the formula | the combined formula makes the forms (circle → sphere → torus → …) at n=3 |

**setup (before U0):** scaffold the project — TS + WebGPU + Vite. **Open: where it lives** — leaning 211 (`motion·builds·form`), scoped `ts-formula`.

## the dial (after n=3 is solid)

Generalize the combined n=3 formula to nD: the matrix `(n+1)²`, `SCHED` → an n-dim plane list. TS_4D (n=4) validates the dial.

## out (still — keeps the crowding from creeping back)

beam/render → TS-B · interaction/dials/UI → TS-I · measurement · self-measure · signature · RH/zeta · other formula files → parked. Units are drawn only crudely enough to *prove* them; the good render is TS-B's.

## decisions (settled — two revised in this fold)

- **deliverable** → a WGSL compute kernel (the stack).
- ~~lift the math faithfully~~ → **build it right from first principles.** The toy is reference + cautionary example, not source-of-truth. (Reversed — the clock is the proof: faithful would mean carrying the rate×time error.)
- **one solid first** → n=3 through U0–C, then the dial.
- ~~oracle = reproduce the source exactly~~ → **the forms are the check** (circle/sphere/torus by type and size, built correct), not bug-for-bug reproduction of the toy. The toy is a learning reference; TS_4D checks the dial.

## laws (carried, light)

slow is the speed · **prove the unit in isolation before trusting it in the whole** · build the unit right before combining · errors STOP the work and are walked · direction-ambiguity surfaced, never silently resolved.
