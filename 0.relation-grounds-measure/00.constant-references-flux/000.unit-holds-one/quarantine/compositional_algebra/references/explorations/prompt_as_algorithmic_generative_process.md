# Exploration — Prompt as Algorithmic Generative Process

**Status:** exploration, not incorporated
**Relates to:** Pass 8, L2 verification, prompt construction
**Origin:** external session, migrated from `dumps/observation note dump 20260527.223154.txt`

---

## Premise

Treat prompt generation not as "text brought to a generator" but as an algorithmic generative process, agnostic to where it executes. The prompt is a deterministic construction assembled from the framework's components; what consumes it (in-context Claude, external LLM, a future tool) is incidental.

## What this sharpens

The Pass 8 reframing established "assemble the prompt, run it." This goes one step further: the *assembly* is the real artifact and is fully specified independent of the runner. The prompt is the output of a deterministic algorithm over Pass 5/6/7 components — not prose authored toward a particular model.

Consequence: the generator becomes swappable. The same assembled prompt runs against any generator. This is exactly what L2 verification requires — hand the identical prompt to an isolated external generator and compare. If the prompt is generator-specific prose, L2 is ill-defined; if the prompt is an algorithmic construction, L2 is just "run the construction elsewhere."

## Why it is principled, not just reframing

It draws a clean line between two things currently blurred: the **specification** (deterministic, framework-owned, auditable) and the **execution** (non-deterministic, generator-owned, swappable). The framework's responsibility ends at the specification. This matches the [convergence-operations exploration](operations_defined_by_convergence.md): the specification is the well-defined object; execution produces representatives that converge (or don't) to a class.

## Discipline required

The assembly algorithm must be **fully determined by its inputs** — same Pass 5/6/7 state produces the same prompt every time. No authorial discretion injected at assembly. If assembling a prompt requires a judgment call, that judgment belongs upstream (in the components) or must be formalized as part of the algorithm.

## Standing

Actionable as a clarifying reframe; partially deliverable through prompt-construction reference revisions. Full delivery (swappable-generator L2 verification) depends on the atomic-units machinery from [Micro-Docs](micro_docs_with_reference_ids.md) being in place.

## Why this fits

The Pass 8 correction was already moving in this direction — distinguishing "construct the prompt" from "execute the prompt." This exploration names that distinction more precisely and shows it connects to L2 verification directly.

## Relationship to other threads

- Depends on [Micro-Docs with Reference IDs](micro_docs_with_reference_ids.md) — the prompt assembles from referenced atomic units rather than copied prose.
- Feeds L2 verification — see [`../../../see/CRITIQUE.md`](../../../see/CRITIQUE.md) entry "L1 verification supports L2 confidence — but L2 has never been run."
- Consistent with [Operations Defined by Convergence](operations_defined_by_convergence.md) — specification vs execution split is the same shape at different scales.
- Touches [`../../../know/references/prompt_construction.md`](../../../know/references/prompt_construction.md) — the four-block template is already a step toward algorithmic assembly.
