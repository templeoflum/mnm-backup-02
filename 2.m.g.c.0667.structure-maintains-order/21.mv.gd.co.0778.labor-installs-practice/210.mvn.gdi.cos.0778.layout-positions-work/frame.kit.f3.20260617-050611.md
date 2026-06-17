# frame — kit (the UI library) — f3 — the vocab + the toolbox

address: 210 (layout·positions·work) · mode: builder window · status: **TOOLBOX BUILT — one specimen per element** · scope: `kit` (211/kit) · folds from [[frame.kit.f2]]

f2 chased the *feel* of one control (the scrub) and built a tuning bench. The operator stepped back further: before tuning feel, **know the elements at all** — build the vocabulary of UI from first principles, one demonstrating toy each, so the toolbox is something you can see and handle. The feel-bench is set aside (not deleted); this is the ground under it.

## the carve (settled with operator)

**A UI is the surface where a human and a system trade state.** Every element is one of four kinds:

| kind | what it does | the atoms |
|------|--------------|-----------|
| **CONTROL** | human → system (change state) | by *shape of value*: trigger · toggle · selector · scalar · pad · field |
| **DISPLAY** | system → human (show state) | label · readout · meter · canvas |
| **LAYOUT** | the space they live in | container · row · stack · grid · group · disclosure |
| **BINDING** | the wire (no look, only behavior) | one value → many views; the seed of a "parameter" |

The generative axis for CONTROL is **the shape of the value produced** — same job (let a human set state), differing only in the state's shape. That is why each maps to one atomic toy:

- **trigger** = a moment · **toggle** = a bit · **selector** = one-of-N · **scalar** = a number · **pad** = two numbers · **field** = free symbols.

## the toolbox (built, 211/kit — one file each, our formula)

`button` `toggle` `selector` `scrub`(scalar, from f1) `pad` `field` · `readout`(=label when static) `meter` + canvas demo · `layout`(container/row/stack/grid/group) `disclosure` · `binding`. Each: self-contained (injects its own CSS), copy-out portable, no deps, no tooltips, vocab-neutral, `tsc --strict` clean. The gallery (`main.js`) shows all four kinds as labeled specimens; the BINDING section wires one value live to readout + meter + canvas.

## what this gives us

The **toolbox is now visible and handle-able** — the operator can see what UI is made of, in working pieces, not a list. Two things fall out:
- **BINDING is the bridge** back to the parked engine: `createBinding` (one value, many views) is a proto-parameter; when the loop engine resumes, a parameter is a binding with phase/ratio behind it.
- the **scalar/scrub feel work (f2)** slots back in later as the depth pass on *one* atom, once the breadth is known.

## open / next (operator drives)

- **handle the specimens** — see what's missing, misnamed, or wrong in the carve now that it's real.
- **feel pass** — pick the atoms that need the f2-style live feel-tuning (scalar first).
- **compose** — once the vocab is owned, build a real control panel from the atoms (the point of a toolbox).
- the loop engine (`phase.js`) resumes via BINDING when feel + composition settle.

## laws (carried)

first principles before feel · one atom = one job ([[one-atom-one-job]]) · the shape of the value is the control axis · buildless, no deps, self-contained ([[buildless-unit-default]]) · vocab-neutral, no tooltips · a question halts ([[questions-halt]]) · hold the carve provisionally — it's the operator's to recut ([[hold-positions-provisionally]]).
