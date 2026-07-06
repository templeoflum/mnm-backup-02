# References

Work-agnostic specifications for the framework's layers, workflow, prompt construction, generation tracking, dependencies, and parameter space. The framework's "reference manuals."

A reference defines a vocabulary (sub-functions and their options, presets, primitives) and how it composes (what signals it reads from upstream, what it produces, how its outputs are consumed). Realizations and works *use* references; references stand independent of any specific work.

---

## The layer references

Layer references define the framework's compositional layers. They are read in *dependency order* — math layers first, then content, then surface, then voice — because each downstream layer reads upstream signals.

| Reference | Reads | Produces |
|---|---|---|
| [math_visual.md](math_visual.md) | spline math vocabulary signal | how each math primitive renders visually |
| [math_audio.md](math_audio.md) | spline math vocabulary signal | how each math primitive renders sonically |
| [voice.md](voice.md) | spline voice signal | voice configuration; per-realization voice translation |
| [audio_aesthetic.md](audio_aesthetic.md) | spline audio signal; math audio | audio surface — temporal substrate |
| [medium.md](medium.md) | spline visual signal; math visual | visual medium — material and mark-making |
| [visual_world.md](visual_world.md) | spline visual signal; math visual; medium | visual world — palette × light × line × figure × atmosphere |
| [script.md](script.md) | narration + outline | performable script text under preset |
| [presentation.md](presentation.md) | script text | visual artifact under preset |

---

## The workflow and infrastructure references

| Reference | What it covers |
|---|---|
| [realization_workflow.md](realization_workflow.md) | the 12-pass workflow (Pass 0 through Pass 11); the master process of constructing a realization |
| [prompt_construction.md](prompt_construction.md) | assembling layer outputs into cold-start prompts; the four-block template; translation discipline at the boundary |
| [parameter_space.md](parameter_space.md) | S = ℝ; f_n: [0,1] → S; the framework's first earned mathematical commitment (S1 + S2) |
| [generation_tracking.md](generation_tracking.md) | generation IDs (`{work}.{realization}.{operator}.{timestamp}[.{edit}]`); the live/frozen/superseded lifecycle |
| [dependencies.md](dependencies.md) | how works declare framework dependencies; Pass 0 verification |

---

## How to add a reference

A new reference earns a file when:

1. It defines a vocabulary the framework needs but doesn't have.
2. It composes with the existing references — what it reads from, what it produces, what reads from it.
3. The vocabulary is work-agnostic — it serves any work that wants to use it.

The shape of a reference document varies by what it specifies. Layer references typically have: sub-functions + options + presets + cross-axis interactions. Workflow/infrastructure references describe their process. All references should be readable independently — internal cross-references are fine, but a reference shouldn't depend on understanding another reference first.

See [`../disciplines/define_before_reference.md`](../disciplines/define_before_reference.md) for the discipline that requires vocabulary exist in its defining reference before any consumer references it.

---

## What's not in references

- **Disciplines** — process rules, not content specifications. See [`../disciplines/`](../disciplines/).
- **Diagrams** — visual companions to references. See [`../diagrams/`](../diagrams/).
- **Glossary** — vocabulary register; sits at `know/glossary.md` as a top-level pillar.
- **Formalization roadmap** — earning paths for formal claims; sits at `know/formalization_roadmap.md`.
- **Work-specific references** — character/object/motif references for a specific work; those live under `do/works/{work}/`.
