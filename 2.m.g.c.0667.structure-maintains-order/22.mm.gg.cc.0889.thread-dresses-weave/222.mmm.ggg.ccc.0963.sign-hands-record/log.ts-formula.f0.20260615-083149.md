# log — ts-formula — f0

address: 222 (sign·hands·record) · scope: `ts-formula` (project `ts*`) · the formula chunk's record — logs, observations, reflections, kept with the project by scope, not in the global session stream.

bundled by scope: [[frame.ts-formula.f0]] (210, the shape) · [[schedule.lattice.f12]] (the build season). entry form: C (change) · O (observation) · D (decision), append-only.

---

**[20260615-0815] D — the build's center, settled.** Stack: TypeScript + WebGPU (WGSL compute runs the formula GPU-side, instanced render, glow shader), web/browser-hosted, lattice-served. Subject: the one nD formula (TS_3D/TS_4D are n=3/n=4 of it). Frame settled: deliverable = a WGSL compute kernel · lift the math faithfully (port, don't improve) · **one solid first** (n=3 / TS_3D through F1–F4, then F3 adds the dial to nD) · oracle = the source's own output.

**[20260615-0831] C — F1 opens: read where the formula lives.** Reading TS_3D (n=3 first) to find the generative core amid the crowding (measurement, beam, UI), mark what IS the formula vs scaffolding. Findings land below as they come.

**[20260615-0840] O — F1: the generative core LOCATED in TS_3D, and it's small (~130 lines).** TS_3D.html is 2689 lines; script 351–2687. The formula itself is `RATIO_LIB`/`SCHED`/`rateFor`/`buildRaw` — the rest is crowding.

THE CORE (what IS the formula):
- **ratio ladder** (551–575) — `RATIO_LIB` (φ/√2/π/just/septimal/…); `rateRatioId` (rate), `dispRatioId` (disp). The "ratio dial."
- **the schedule** (607) — `SCHED=[[0,1],[1,2],[0,2],[1,2],…]` = which plane (XY/YZ/XZ/…) each rotation turns in.
- **the rate cascade** (`rateFor`, 589–597) — rotation k's rate = `(1/ratio)^k × layerMult(k)`. The dream's θ_k = t/ρ^k.
- **the construction** (`buildRaw`, 617–682) — THE FORMULA. Seed at `[D,0,0,1]`; for each rotation k: at a cycle boundary translate by `d`, then plane-rotate by `R(plane, ph[k])`. **Self-scaling (nautilus)**: `d = k·(k+1)^(cyc-1)·D` (618–642) — keeps the hole a constant proportion. Whole cycle composed into ONE homogeneous **4×4 matrix M**; final point = `M · seed`. 1 rot→circle, 2→sphere, 3→torus, 4→torus-sphere, then cycles.
- `build()` (686) = buildRaw + optional normalize (the [0,1] bounded lens).
- inputs: D(radius) · rung(level=#rotations) · ratio · kHole · selfScale · SCHED · `ph[k]`(phases, from the clock) · growth/osc.

THE CROWDING (named, all OUT of TS-F):
- **measurement** → analyzeLocus, featureAngles, measureMeeting, eigSym3, rollPush/rollStat, `meas.*` (signature/self-measure — parked)
- **render/beam** → proj, rot, drawChain, drawSkeleton, drawAxes, drawScaleRing, drawBBox, resize, hardClear (→ TS-B)
- **grids** → all `grid*` (1004–1147) — measurement overlays (parked)
- **beam-2** → secondPoint, p2transform, beam2Phases, drawMeetLocus (→ TS-B/TS-I)
- **UI/controls/panels** → (→ TS-I)

KEY for F2: `buildRaw()` returns ONE point for the current phases. The **path** is that point's locus as the phases sweep — today the CPU steps phases and plots one point at a time (this is what chokes at high cpf). **The GPU port computes all N path-samples in parallel** — one compute-shader invocation per sample, each with its phase offset. That's the architecture flip, straight out of the formula's own shape. nD (F3): the 4×4 → (n+1)×(n+1), SCHED → n-dim plane list.

**F1 status: n=3 (TS_3D) core located + crowding named — done for the one-solid-first path. TS_4D's read deferred to F3 (the dial).** Next: F2 — port the n=3 core to a WGSL compute kernel.

**[20260615-0943] D — METHOD REFRAME (operator word): atomic units first, not monolithic extraction. Frame folded f0→f1.** The F1 read surfaced the reason: TS_3D's clock is **rate×time** (`ph[k]` accumulated by `rateFor`), but first principles say the clock is a **PERIOD** — cyclic, bounded, speed = the period's *length*, phase normalized (0→1). A wholesale port would carry the toy's error forward. So the method flips: **build TS's atomic units in isolation, each right from first principles, prove alone, then combine.** Units (operator-confirmed): U0 clock (period) · U1 rotation · U2 ratio · U3 schedule · U4 self-scaling · U5 projection · C combine. Two decisions reversed: *build-right-from-first-principles* (not faithful-port — the toy is reference + cautionary), and *the forms are the check* (not bug-for-bug reproduction). One-solid-first (n=3) and the WebGPU stack stand. Redraft: [[frame.ts-formula.f1]]; f0 trail. **Next: scaffold (TS+WebGPU+Vite, location open) → U0 the clock.**

**[20260615-0945] C — folder-visibility built first (the unblock).** A project folder is a tree, but the lattice client only showed a cell's direct files. Built `op_list` folders + subpath browse (guarded) + client folder navigation (commit 86b4828, test_folder_browse 6/6). Operator restarted + play-confirmed. Now the TS project at 211 is browsable.

**[20260615-1010] C — TS project SCAFFOLDED at `211/ts` (commit c9d347a).** TypeScript + WebGPU + Vite, minimal: package.json · tsconfig (strict, @webgpu/types) · vite.config (base './' → lattice-servable bundle) · index.html · src/main.ts (bare WebGPU bring-up: requestAdapter→device→configure→clear each frame). `npm install` + `npm run build` both pass — tsc strict typecheck clean, vite bundles to dist/. node_modules/dist gitignored. **Created via shell, not the Write tool, so project-internal source is NOT witnessed file-by-file into the manifest** (the project folder is the tracked unit) — policy flagged for the operator. WebGPU *runtime* confirms in-browser via `npm run dev`. **Next: U0 — the clock, built in src/ as a period, proven in isolation.**

**[20260615-1025] D — folder-as-tracked-unit confirmed; project-local ledger BOOKED (not now).** Operator confirmed the lattice tracks the project folder as a unit (not file-by-file). Folder-visibility auto-update fixed (sweep now detects folder-set changes; commit c37adc7). Operator floated a **project-local ledger / check-in-check-out inside the project folder**. Read: git is the project's ledger today (commit = check-in, full history) + this log is the curated record — enough for one seat, 7 files. The project-internal manifest+log (mirroring the lattice's own pattern) earns its keep at **(a) multi-seat concurrency** (check-out to avoid collisions) or **(b) a project-internal activity view distinct from git**. Booked for project growth / multi-seat; not built now.
