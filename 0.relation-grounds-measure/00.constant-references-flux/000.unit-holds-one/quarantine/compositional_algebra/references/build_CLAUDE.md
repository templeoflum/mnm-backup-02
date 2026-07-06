# Compositional Algebra — fresh build

Rebuilt from first principles **2026-06-01**. The entire prior codebase is archived read-only in [`_reference/`](_reference/). The old build structure — sprawling docs that never got faithfully used — is what we're leaving behind. **Recall from `_reference/` deliberately, one thing at a time. Do not bulk-import.**

## What this environment is

The **compositional interface**: standardizing the prompt/narrative primitives (Character, Voice, Object, Movement, Beat, Script, …) as pure mechanical *form*, driven by a **fixed/given spline**. Spline math is a separate project worked elsewhere; **no real generation happens here.** (Memory: `env-scope`.)

## How we build

Read [`discipline.md`](discipline.md) first — toy-based, dependency-first, checkpoint → advance, read-only investigation, anti-rats-nest.

Live state is in [`state/`](state/):
- [`pipeline.md`](state/pipeline.md) — dependency-chain position; current checkpoint + active toy + the chart.
- [`findings.md`](state/findings.md) — what read-only investigation surfaced (append-only).
- [`integration.md`](state/integration.md) — how stabilized toys fold together.
- [`research.md`](state/research.md) — surveyed-but-not-picked-up paths; the parking lot.

Toys live in [`toys/`](toys/) as `CA_<thing>.html` — one toy, one thing.

## Posture

Operating postures live in memory: `not_a_product`, `anti_overengineering`, `verified_flow`, `env_scope`, `vision_over_specifics`. Framework constraints (e.g. translation discipline — no framework vocabulary in generator-facing output) get recalled from `_reference/` deliberately as the build reaches them.

When a change touches form, vocabulary, or the pipeline contract — pause and confirm scope rather than acting on inferred intent.
