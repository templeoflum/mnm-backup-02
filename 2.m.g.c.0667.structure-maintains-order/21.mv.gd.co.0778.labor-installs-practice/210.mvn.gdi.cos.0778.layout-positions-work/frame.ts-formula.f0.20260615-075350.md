# frame — TS-F (the formula) — f0

address: 210 (layout·positions·work) · mode: builder window · status: **SETTLED** 20260615 (operator opened F1) · scope: `ts-formula` (project `ts*`)
for: the TS build season, chunk TS-F (`schedule.lattice.f12`). Frames before it builds (210).

## the subject

The one **nD generative formula**, isolated and standing on its own. The pure math that turns parameters into the point-path — a point · stacked ratioed rotations · nautilus self-scaling · **depth as a parameter**. TS_3D and TS_4D are this same formula at n=3 and n=4; the work is to get *the formula* out clean, dimension as a dial.

## the stack (locked, operator word 20260615)

**TypeScript + WebGPU**, web/browser-hosted (keeps lattice-talk + seat playability), real project bundled and lattice-served. The formula runs **GPU-side**: a **WGSL compute shader** generates the point-path in parallel; points render instanced; the beam is a glow/bloom shader pass (TS-B's). This is what makes TS-F's deliverable a **compute kernel**, not a JS function — the old CPU/Canvas path is the wall the toy hit at high cpf/speed.

## out of this chunk (explicit — so the crowding can't creep back)

- the **beam / render** → TS-B
- **interaction / dials / UI** → TS-I
- **measurement · self-measure · signature** → parked (reference shelf)
- **RH / zeta** → parked
- the other formula files (`TS_formulas`, fingerprint, ternary, spline) → parked
- tooling-stack / single-file-ship questions → beam-era, not now

TS-F is the formula alone. Drawn only crudely enough to confirm it lives — the *good* drawing is TS-B's.

## the shape (slices × rungs)

| slice | the work | done when |
|-------|----------|-----------|
| **F1 — read where it lives** | read TS_3D + TS_4D (JS); find the generative math amid the crowding; mark what IS the formula vs scaffolding (measurement/beam/UI). Extract the *math*, not the implementation | the core math is located in both, the crowding named |
| **F2 — port to a compute kernel** | write the generative math as a **WGSL compute shader**: seed → stacked ratioed rotations (the schedule) → nautilus self-scaling → emit the path into a GPU buffer. The math extracts from the JS; the form is GPU-new | the kernel runs and emits a point buffer (crude draw OK to confirm) |
| **F3 — make dimension the dial** | unify n=3 and n=4 as one nD kernel; depth/dimension a uniform/parameter, not two codepaths | one kernel, dimension a dial |
| **F4 — verify it reproduces** | same inputs → same point-path as the source (the GPU output matches TS_3D/TS_4D — the only honest oracle) | a check confirms the kernel's points match the originals |

**deliverable:** a **WGSL compute kernel** that emits the nD point-path into a GPU buffer from its parameters — the path TS-B will draw and TS-I will let you play.

**gate:** operator reviews the isolated core before TS-B hangs off it.

## decisions (all settled 20260615)

- **deliverable form** → a WGSL compute kernel (the locked stack).
- **extract vs rewrite** → lift the math faithfully from the JS; the GPU form is new. F2 ports the math, doesn't "improve" it mid-port.
- **nD now vs one-then-generalize** → **one solid first.** Get n=3 (TS_3D) solid through F1–F4, *then* F3 adds the dial (generalize to nD; TS_4D/n=4 validates it). So F1/F2 read and port TS_3D first.
- **the F4 oracle** → **yes** — the existing TS_3D output is the reference (same dials → same path). TS_4D is the n=4 check when the dial goes in.

## the laws this chunk works under (carried, light)

slow is the speed · errors STOP the work and are walked · frame before build · the formula is read before it is rewritten · direction-ambiguity surfaced, never silently resolved.
