# Generation Tracking Reference

**Formal:**
```
Generation : RealizationSpec × Operator × Timestamp → GenerationArtifact
GenerationID = work · realization · operator · timestamp [· edit-suffix]
```

**Informal:** A realization spec is a generator function — invoked, it produces a sample from a distribution of valid renderings. This reference defines how generations are named, stored, and tracked across iterative development and across operators.

---

## Why generations need tracking

A realization spec is generative. The same spec invoked twice should produce two outputs that:
- share the spec invariants (voice character, surface aesthetic, scene anchors, continuity)
- differ in specific instantiation (specific prose, specific image content, specific audio events)

Without tracking, generations are fungible — there's no way to refer to "that specific run" six weeks later. With tracking, every generation has durable identity: which spec, which operator, which moment in framework time, and what its status is in the editing lifecycle.

---

## Generative / Freeze / Edit cycle

Generations move through three phases:

**Phase 1 — Generation (high variance).** A realization spec + spline produce a sample. Multiple samples from the same spec are valid and expected to differ. Each generation is `live` by default.

**Phase 2 — Freeze.** One generation is selected as the working draft. The selected generation moves from `live` to `frozen`. From this point, no regeneration from the prompt — the prompt's job is done.

**Phase 3 — Edit (surgical).** Refinements are made by surgical edit to the frozen draft. No regeneration. Each edit produces a new artifact with an edit-suffix appended to the generation ID. The original frozen generation is preserved; edits chain from it.

A realization may have many generations over its lifetime. Typically one is `frozen` at a time; others are `live` (under consideration) or `superseded` (replaced as the working draft, kept for history).

---

## Generation ID format

```
{work}.{realization}.{operator}.{YYYYMMDD-HHMMSS}[.{edit-suffix}]
```

**Fields:**
- `work` — spline score identifier (e.g., `calibration`)
- `realization` — realization identifier within that work (e.g., `a`, `b`)
- `operator` — operator signature (e.g., `hedawn`)
- `YYYYMMDD-HHMMSS` — UTC timestamp of generation
- `edit-suffix` — optional; format `e1`, `e2`, ... for surgical edits from a frozen generation

**Examples:**
- `calibration.a.hedawn.20260527-041500` — initial generation
- `calibration.a.hedawn.20260527-041500.e1` — first surgical edit
- `calibration.a.hedawn.20260527-041500.e2` — second surgical edit
- `calibration.a.hedawn.20260527-042200` — separate generation (different sample, same spec)
- `calibration.a.someone-else.20260527-053000` — different operator's generation (reproducibility data)

UTC is required — local times with different offsets across operators would silently misorder events.

---

## Generation artifact structure

Each generation lives as a single file under `works/{work}/realizations/generations/`. The filename matches the generation ID with `.md` appended.

```
works/calibration/realizations/
├── realization_a.md
├── realization_b.md
└── generations/
    ├── calibration.a.hedawn.20260527-041500.md
    ├── calibration.a.hedawn.20260527-041500.e1.md
    ├── calibration.a.hedawn.20260527-042200.md
    └── calibration.b.hedawn.20260527-043000.md
```

---

## Generation file header

Every generation file opens with a metadata block:

```
# Generation calibration.a.hedawn.20260527-041500

Generation ID: calibration.a.hedawn.20260527-041500
Operator: hedawn
Spline score: Calibration
Realization: A (preset-based)
Realization spec version: YYYYMMDD-HHMMSS
Framework version: YYYYMMDD-HHMMSS
Score dependencies satisfied: yes
Status: live
Edits applied: (none)
Generated at: YYYYMMDD-HHMMSS UTC
Generation isolation: L1 (in-conversation discipline)
Supersedes: (none)
```

**Field definitions:**
- **Generation ID** — full ID as above
- **Operator** — signature of the operator who ran the generation
- **Spline score** — work name
- **Realization** — realization identifier and a short parenthetical describing its type
- **Realization spec version** — date of last edit to the realization spec file (so the spec being executed is known)
- **Framework version** — value of `framework/VERSION` at time of generation
- **Score dependencies satisfied** — `yes` if all base dependencies and extensions resolved; `no — missing X, Y` otherwise
- **Status** — `live` | `frozen` | `superseded`
- **Edits applied** — list of edit-suffixes that have been applied (none on initial generation)
- **Generated at** — UTC timestamp in human-readable form
- **Generation isolation** — `L1` (in-conversation discipline) or `L2` (external generator)
- **Supersedes** — generation ID this one replaces as the working draft, or `(none)`

---

## Generation file body

After the header, the body contains the generation outputs from the composition passes (Passes 5–8):

```
## Pass 5 — Triplet assembly
[Image, audio, narrative prompts per movement]

## Pass 6 — Substitution

## Pass 7 — Outline
[Outlines for all movements]

## Pass 8 — Voice fill
[Prose per movement]

## Pass 9 — Script
[Scripts per movement]

## Pass 10 — Presentation
[Presentation specification, or rendered artifact link]
```

Earlier passes (1–4) are not duplicated in the generation file — they're spec-level and don't vary across generations of the same spec. They're inherited from the realization spec and the spline.

---

## Edit-suffix protocol

When a frozen generation is edited:

1. Copy the frozen generation file to a new file with the next edit-suffix
2. Update the header: increment edit-suffix list, update Status (still `frozen`), bump timestamp on the edit
3. Apply surgical changes to the body
4. Original frozen file is preserved as-is

Each edit is a discrete artifact. The history of edits is traceable by reading the chain of edit files.

```
calibration.a.hedawn.20260527-041500.md       (original, frozen)
calibration.a.hedawn.20260527-041500.e1.md    (e1 edit, frozen, supersedes original as working draft)
calibration.a.hedawn.20260527-041500.e2.md    (e2 edit, frozen, supersedes e1)
```

The latest edit is the working draft. The original and intermediate edits are kept for history. No edit creates a `live` artifact — edits start `frozen`; if the work continues, further edits append to the chain.

---

## Status transitions

```
live   → frozen        (selected as working draft)
live   → superseded    (another generation selected instead)
frozen → superseded    (a later generation replaces it as working draft)
                       (a frozen generation's edit chain may continue indefinitely)
```

A generation does not move `frozen → live`. Once frozen, regeneration produces a new generation with a new ID; the frozen original remains.

---

## Operator field

The operator field carries weight:

- **Attribution** — the spline score may have one author; each realization may have multiple operators producing valid generations
- **Reproducibility evidence** — Claim 12 (reproducibility-by-others) is testable by examining whether multiple operators' generations of the same spec share spec invariants while differing in specifics
- **Editing rights** — surgical edits of a frozen generation are typically by the same operator who produced it; other operators producing a new generation get a new ID, not an edit-suffix on someone else's

If the framework gains multiple maintainers, the operator field also signs DEV_LOG entries and authorship of framework patches.

---

## Connection to verification

Generation tracking enables claims that were previously unverifiable:

- **Spec generativity** — multiple generations of the same spec, by the same operator, on different occasions; sufficient variance in specifics confirms the spec is generative rather than deterministic
- **Reproducibility-by-others** (Claim 12) — multiple operators' generations of the same spec; spec invariants held across operators confirms reproducibility
- **Framework version compatibility** — generation headers record framework version; cross-version generation comparisons reveal whether framework changes broke compatibility

---

## How this reference connects to the workflow

The generation tracking lives at Pass 11 (the freeze point), with surgical edits producing edit-suffix artifacts (.e1, .e2, etc.).

Currently:
- Pass 10 (Presentation) produces the final realization artifact
- After Pass 10, the operator chooses to freeze or to regenerate
- Freezing creates the generation file with status `frozen`
- Subsequent edits produce edit-suffix files

The composition passes (1–10) do not change. Generation tracking is Pass 11, wrapping the composition arc rather than modifying it. Pass 0 (dependencies check) precedes composition.