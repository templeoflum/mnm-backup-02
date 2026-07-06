# Exploration — Entity Creators

**Status:** exploration, not incorporated
**Relates to:** workbench Layer 4 (composition layer), authoring surfaces
**Origin:** external session, migrated from `dumps/observation note dump 20260527.223154.txt`

---

## Premise

Dedicated authoring instruments per entity type: character creator, object creator, motif creator, medium creator, world creator, voice creator, beat creator, movement creator. Each shaped to the structure of the entity it authors, rather than a single generic editor for everything.

## Where it belongs

This is the workbench's composition layer (Layer 4) named per-entity. It is tooling, not theory, and depends on the workbench existing first. Workbench V1 (`navigator.html`) addresses Friction 1 (seeing-everything-at-once). Under the reframed friction set (2026-05-28), entity creators are gated by **Friction 3 (file tracking — designs, entities, generations)** and naturally couple with **Friction 2 (network as visible, traceable, editable system)**. The previously-referenced "Friction 2 (visualizing the spline)" is now deferred and not a prerequisite.

## The useful insight

Each entity type has its own structure and wants an authoring surface that reflects it. A voice is an atomic configuration (Register × Stance × Positioning × Configuration × Affect) — its creator is a configurator over those axes with the locked/modulatable parameters visible. A beat is a knot with felt-quality contribution, physical anchor, voice direction, continuity grade — its creator is the spline-graph interaction from the workbench thread. A character/object/motif is an identity committed once and referenced across movements — its creator manages that identity and its per-movement states.

A generic editor flattens these into undifferentiated text. Per-entity creators let the operator work with each entity in its natural shape — which is the same principle as "what wants to be visual" from the workbench thread, applied to authoring rather than viewing.

## Discipline required

Creators must write to the same canonical files the rest of the framework reads. A creator is a structured surface over the markdown, not a parallel store. The file remains authoritative; the creator is one way to edit it (CLI editing remains valid).

## Standing

Workbench V1 verified 2026-05-27. Under the reframed friction set (2026-05-28), not actionable until **Friction 3 (file tracking)** is in design — that's the underlying iterate/store/recall surface entity creators sit on top of. This exploration is here to preserve the insight that authoring surfaces should be entity-shaped, not generic — so when the workbench composition layer is built, the design starts from per-entity structure rather than a generic editor.

## Why this fits

The framework already has entity-specific structure in its references (Voice Reference has its sub-functions, Character Reference has identity + per-movement state, etc.). Authoring against that structure with entity-shaped surfaces respects what the framework already knows about each entity. A generic editor would flatten the structure precisely where the framework has worked to preserve it.

## Relationship to other threads

- Squarely inside the workbench. Should not be built before the workbench's foundation (navigable framework, spline graph, validation).
- Touches [`../workbench/architecture.md`](../workbench/architecture.md) — the "what wants to be visual" section already lists splines, presets, signal flow; entity creators extend that thinking to authoring.
- Touches [`../../../know/references/`](../../../know/references/) — each entity's structure is defined by a layer reference; the creator is shaped by that reference.
- Listed here so the per-entity insight is not lost as workbench work proceeds frictioin-by-friction.
