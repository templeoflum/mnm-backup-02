# frame — kit (the UI library) — f1 — the two halves

address: 210 (layout·positions·work) · mode: builder window · status: **FRAMED — doc walked, build path set; pre-build** · scope: `kit` (own project at 211, sibling to `ts/`) · folds from [[frame.kit.f0]]

f0 stood the project up and got corrected (project = folder + `.unit`, not TS's files). f1 takes in the operator's doc (`parameter loop system`, at the 200 dock) + the TS_formulas UI walk, and sets what we build.

## the subject

The **kit** is two halves that meet at one word — **the parameter**:

| half | what it is | source |
|------|------------|--------|
| **the engine** | what a parameter *is* and how it moves — master phase, ratio, resolver | the `parameter loop system` doc (draft, at 200 dock) |
| **the controls** | how a human *sees and drives* a parameter — scrub, stepper, toggle, button, disclosure | TS_formulas (`100/TS_formulas.html`), inspo |

The bridge is in both already: a **control is the engine's override contributor** — drag = manual grab (override weight→1), release = manual release (rejoins the animation, which ran at correct phase throughout — never "starts from zero"). Declarative `data-k` binding is how a control names the parameter it drives.

## the engine (from the doc — keep it vocab-neutral)

- **Layer 1 — phase math.** One master cycle `M ∈ [0,1)`, period `T`; every parameter derives `φ_i = (M·r_i + o_i) mod 1`. No parameter keeps its own clock → determinism, speed-change immunity, exact save/recall (serialize `M` + config). ~10 lines.
- **Layer 4 — resolver.** One resolver per parameter; output = weight-budgeted blend of contributors (base / animation / override / aux), `Σw = 1`. **Every operation is a weight transition** (onset, neutralize, grab/release, morph, hard cut). Smoothness is *structural*, not policed.
- **Layer 2 — pattern catalog.** Pure data: ratios tightest-sync→no-sync (LCM), pattern fns `(N) → [r₁…r_N]`.

**Vocab-neutral core (operator, settled).** The doc speaks *musically* (just intonation, septimal, DAW). The portable tool is the math — `phase · ratio · sync · resolver · contributor`. The musical catalog is **one swappable flavor pack**, not baked into the engine. This is the strip-the-personal / keep-the-tool rule applied to the core ([[place-files-by-content-branch]]-kin: the engine is vocab-free; flavors layer on).

## the controls (from TS_formulas)

- **scrub** — the workhorse: drag to change · ◂▸ step · click-to-type · `log` scaling · `snap` · min/max. Beats a raw `<input range>`.
- **selstep** — `<select>` flanked by ◂▸ steppers.
- **toggle**, **button** — the simple cases.
- **disclosure (LOD/tier)** — drag a section down to reveal deeper tiers; basics shown, advanced hidden until drilled. The answer to "many params, no overwhelm."
- **declarative binding** — `data-k`+data-attrs; one generic handler wires all. Controls *declared*, not hand-wired (the friction we set out to kill).

## settled this fold

- **engine vocab-neutral** — math in the core, musical names as a flavor pack (operator).
- **no tooltips** — TS_formulas leans on long `title` text; we drop it. "They always drift; settle the surface when we're not in R&D" (operator). Surface = bare controls + readouts ([[product-surface-vs-process]]).
- **reconciliation** — the "ratio cascade" stripped from `ts.js` last turn *is* the doc's per-parameter `ratio` against a master; the master phase θ added to `ts.js` *is* the doc's `M`. TS took step one already; retrofitting it onto the kit brings ratio back, correctly.

## the build path (smallest sufficient — the doc's layering is the gift)

1. **Layer 1** master + phase — tiny, pure, testable (the first atom).
2. **one scrub** control, bound to a parameter via `data-k`.
3. **prove the full loop end-to-end** with a *single* parameter (set ratio/offset → watch φ drive a value).
4. then grow the **control set** + the **resolver (Layer 4)**; the **pattern catalog (Layer 2)** enters as data.
Don't swallow all layers at once ([[one-atom-one-job]], [[buildless-unit-default]], [[discernment-over-speed]]).

## out / deferred

tooltips + final surface (post-R&D) · Layer 3 (value transforms) · Layer 5 (composition/groups) · host-binding contract · conformance tests · the musical flavor pack (after the neutral core proves out).

## laws (carried)

one atom = one job ([[one-atom-one-job]]) · buildless, no deps ([[buildless-unit-default]]) · smallest sufficient first ([[discernment-over-speed]]) · project = folder + `.unit` · vocab-neutral core · don't build on unsettled ground · a question halts ([[questions-halt]]).
