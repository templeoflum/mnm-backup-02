# Exploration — Micro-Docs with Reference IDs

**Status:** exploration, not incorporated
**Relates to:** workbench concept, context efficiency, validation layer
**Origin:** external session, migrated from `dumps/observation note dump 20260527.223154.txt`

---

## Premise

Split instruction documents into atomic units, each with a stable reference ID. Common tasks reference only the ID-paths they need rather than loading whole documents. Propagation facts — which docs to update on a change, how signals flow to which passes, which disciplines apply where — are precomputed and stored as explicit references rather than re-derived each session.

## Why it has value

Two distinct gains:

**Context efficiency.** Loading a 500-line reference to use one section wastes the scarce resource. Atomic units with IDs let a task pull exactly its relevant instructions. As the framework grows past what fits in context, this becomes necessary, not optional.

**Precomputed propagation = the validation layer.** "When you change X, update Y and Z," "this signal propagates to these passes," "this discipline applies here" — these are the machine-witnessable invariants from the workbench thread, in another form. Computing them once and storing them as references means they don't have to be remembered or re-derived. Memory drifts; stored references don't.

## Discipline required

**IDs must be stable across edits.** If an ID changes when its content is edited, every reference to it breaks silently. IDs are identity, not location — an edit to a unit's content keeps its ID; only deletion retires it. This is the same discipline as the generation-tracking lineage system.

**Atomicity must be real.** A unit is one instruction or one fact, not a section that still needs parsing. If a reference pulls a unit and the consumer still has to hunt within it, the split was too coarse.

## Standing

Major architectural shift. Not actionable today; needs design (how IDs are assigned, where the propagation graph lives, what the migration path looks like). Initial mover for this is the disciplines split this session — each discipline is now its own atomic file under `../../know/disciplines/`, providing a first proof-of-concept for the atomic principle at the discipline scale. References would be the next target.

## Open design questions

- **ID scheme** — filename (path = ID), frontmatter (file has stable ID, can be moved), section-anchor based, or some combination?
- **Propagation storage** — separate index file, frontmatter in each unit listing what consumes it, external graph?
- **Granularity** — at which level does atomization stop? One discipline per file (done); one sub-function per file (premature); somewhere in between?
- **Migration path** — big bang (atomize all at once) vs incremental (atomize new content; existing remains monolithic; gradual conversion).

## Why this fits

The framework's existing structure already gestures at this. Generation tracking has stable IDs (identity not location). Glossary terms are atomic. The 12 disciplines are now one-per-file. The atomic principle is being applied recursively at every level of the see/know/do structure. Extending the same principle to reference content is the natural continuation.

## Relationship to other threads

- This is the substrate the workbench's validation layer runs on (see [`../workbench/frictions.md`](../workbench/frictions.md) Friction 4, formerly F5 before the 2026-05-28 reframe).
- It is the form the framework's references want to take once they exceed single-context size (already getting close: `realization_workflow.md` is 53KB, `voice.md` is 50KB).
- It makes [Prompt as Algorithmic Generative Process](prompt_as_algorithmic_generative_process.md) tractable — the prompt assembles from referenced atomic units rather than copied prose.
- The disciplines split this session is a partial proof — each discipline is now its own file in `../../know/disciplines/`.
