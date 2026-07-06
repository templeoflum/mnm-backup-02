# Explorations

Apparatus that processes **internal framework thinking** into structured drafts before commitment. Sibling of [study/](../study/) (which processes external knowledge) and [workbench/](../workbench/) (operator-facing tool). The three projects together are *apparatus that supports the framework*.

An exploration is a worked-through proposal — more developed than an idea, less committed than a roadmap entry, not yet in a discipline or reference. Status: *not yet incorporated.*

---

## Why explorations have their own home

Six exploration notes generated in an external session surfaced the gap: the work was too developed to be an idea, too proposal-shaped to be an observation, not yet a critique or roadmap entry. None of the existing handoff postures held it well. Explorations is its own kind of artifact.

The discipline-discovery pattern: a posture was needed because the work itself demanded it. See [`../../../see/handoff/OBSERVATIONS.md`](../../../see/handoff/OBSERVATIONS.md).

---

## The pipeline

```
   raw exploration material           (operator drops; not tracked)
          ↓                            dumps/{filename}
          ↓
   structured exploration              (one .md file per exploration)
          ↓                            {topic-slug}.md
          ↓
   incorporation decision              (operator + AI together)
          ├──→ discipline section in ../../know/disciplines/{name}.md
          ├──→ reference update / new reference in ../../know/references/
          ├──→ CRITIQUE entry in ../../see/CRITIQUE.md (gap named)
          ├──→ CHARTER addition in ../../see/CHARTER.md (commitment named)
          ├──→ ROADMAP entry in ../../see/ROADMAP.md (work queued)
          └──→ rejected / superseded (entry removed; lineage trail kept)
```

The exploration `.md` files are tracked in git. The `dumps/` directory is gitignored (binary or raw text intake stays local).

---

## What's here

- **`dumps/`** — raw exploration intake. Drop external session outputs, voice memos, sketch-text. Not git-tracked.
- **`{topic-slug}.md`** — structured exploration drafts. One file per exploration.

Each structured exploration carries fields:

- **Status** — `exploration, not incorporated` / `exploration, partially incorporated` / `superseded by {entry}` / `rejected (see lineage trail)`
- **Relates to** — which framework areas the exploration touches
- **Supersedes** (if applicable) — prior framing this exploration replaces
- **Premise** — the proposal in 1–3 paragraphs
- **Structure required** — what the framework would need to deliver
- **What the structure yields** — what falls out for free if delivered
- **Foundational constraint** — what must be true for the proposal to hold
- **Discipline required** — operational constraints on adopting it
- **Standing** — directional / actionable / blocked
- **Why this fits** — test against the framework's existing problems
- **Relationship to other threads** — cross-references to other explorations and to framework concepts

---

## How to add an exploration

1. Drop raw material in `dumps/` (or paste into a new file directly).
2. Create `{topic-slug}.md` (descriptive slug; lowercase with underscores).
3. Fill the fields above; honest about Status (`not incorporated` if not yet).
4. Add to the index below if not already there.
5. If the exploration matures to a decision, propagate to its incorporation destination and update Status.

---

## Active explorations

Six explorations migrated from the initial external-session dump (2026-05-27):

- **[operations_defined_by_convergence.md](operations_defined_by_convergence.md)** — operations as Cauchy-convergence classes under a felt-metric; sharpens A1–A4. Status: directional; gated by felt-metric.
- **[shared_knot_structure.md](shared_knot_structure.md)** — replaces a rejected carrier/modulation framing; the spline is a bundle of co-articulated tracks over a shared partition. Status: **architecturally important**; candidate for adoption into the spline reference.
- **[micro_docs_with_reference_ids.md](micro_docs_with_reference_ids.md)** — atomize references into ID-bearing units; precomputed propagation. Status: major shift; first step (disciplines split) already happened.
- **[prompt_as_algorithmic_generative_process.md](prompt_as_algorithmic_generative_process.md)** — prompt assembly as deterministic algorithm; specification vs execution split; enables L2. Status: actionable as reframe; full delivery depends on micro-docs.
- **[scale_invariance_as_design_philosophy.md](scale_invariance_as_design_philosophy.md)** — same compositional algebra holds across all scales; tiers are knot densities. Status: **candidate for CHARTER addition**.
- **[entity_creators.md](entity_creators.md)** — per-entity authoring surfaces in the workbench (Layer 4). Status: gated by Workbench Friction 3 (file tracking — designs, entities, generations); intersects with the new F2 (network as visible, traceable, editable system).

---

## Relationship to study/

Study processes external sources (Genette, Stanislavski, Bringhurst, Asparśa Yoga, etc.) into structured dives that feed framework vocabulary. Explorations processes the operator's own thinking into structured drafts that feed framework structure.

Both are intake → process → tracked-derivative pipelines. Both feed the framework. They are siblings under [`../`](../) by deliberate symmetry.
