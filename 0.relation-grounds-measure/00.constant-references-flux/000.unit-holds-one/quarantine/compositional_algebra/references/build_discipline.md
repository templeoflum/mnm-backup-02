# Build discipline

Toy-based, dependency-first, checkpoint → advance. Adopted **2026-06-01** on a complete reset (prior codebase archived in [`_reference/`](_reference/)).

## The unit

One HTML toy = one thing. Convention `toys/CA_<thing>.html`. It exists to *see* how that one thing works. Nothing else rides along.

## The loop (per thing)

1. **Declare** the one thing.
2. **Investigate — read only.** Survey current state + future paths in `_reference/` and existing toys. No writes. Log findings.
3. **Plan** the implementation for just that thing.
4. **Build** `CA_<thing>.html` — visualize it working.
5. **Stabilize** — work it until stable.
6. **Checkpoint** — the stable toy *is* the checkpoint; the file freezes.
7. **Advance** — copy the checkpoint entirely → `CA_<next>.html`; build on the stable base. Repeat.

Checkpoints accumulate as the stable `CA_*.html` files. The lineage is the history.

## States (living, in `state/`)

- **pipeline** — dependency-chain position: current checkpoint, active toy, what's next.
- **findings** — what read-only investigation surfaced (append-only, dated).
- **integration** — how stabilized toys fold together (proven reads/emits wiring).
- **research** — future paths surveyed, not yet picked up. The parking lot.

## Guardrails

- One toy, one thing. No kitchen sinks.
- Investigation never writes.
- **Stub out + log the idea** (→ `research`) instead of building it inline. Tangents don't enter the active toy.
- Never build on an unstable base — checkpoint first.
- Don't bulk-import from `_reference/`. Recall what actually worked, deliberately, one thing at a time.
