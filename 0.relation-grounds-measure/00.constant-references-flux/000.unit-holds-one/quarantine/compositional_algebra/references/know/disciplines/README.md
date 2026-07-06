# Disciplines

The disciplines under which the Compositional Algebra framework is developed. Operator-agnostic — about *how serious work on the framework is conducted*, regardless of who is doing it. Operator-specific working style lives in `../operator_profiles/{operator}.md` (when built).

The disciplines here are not aspirational. They are observed: every one is grounded in concrete incidents in [`../../see/DEV_LOG.md`](../../see/DEV_LOG.md) where the discipline either held or had to be re-asserted. The discipline existed implicitly long before being named. Naming it makes it portable across sessions and operators.

Companion to [`../formalization_roadmap.md`](../formalization_roadmap.md): formalization roadmap earns formal *claims* of the framework; disciplines codify the *process* that keeps both the formal and the practical content honest.

---

## Why discipline at all

The framework's whole purpose is to make structural rigor visible. A framework that demands rigor in its outputs but tolerates drift in its own development undermines its own claim. Discipline here is not bureaucracy — it is consistency between what the framework asks of its content and what the framework asks of its own evolution.

The dev log records repeated incidents where disciplined work prevented drift: formal vocabulary almost being adopted without earning; identity dumps almost being treated as voice fill; framework-internal vocabulary almost leaking into generator prompts; new presets almost being referenced before the underlying sub-function options existed. Each of these was caught early because some discipline was already operating. The disciplines here are named so the catch rate stays high.

---

## The 12 disciplines

1. **[Honesty discipline (earned vs gestural)](honesty.md)** — formal claims are marked earned or gestural; gestural ones don't pretend to be earned.
2. **[Root-cause patch discipline](root_cause_patches.md)** — bad outputs trace to bad descriptions; patch the description, not the output.
3. **[Define before reference](define_before_reference.md)** — vocabulary must exist in its defining reference before any consumer references it.
4. **[Vocabulary discipline](vocabulary.md)** — the framework's vocabulary is actively maintained as a coherent stack; collisions and recursions are caught.
5. **[Translation discipline](translation.md)** — framework-internal vocabulary does not appear in generator-facing prompts; everything translates at the boundary.
6. **[Audit-after-change discipline](audit_after_change.md)** — when a change lands, the rest of the framework is walked through for what's affected.
7. **[Versioning and tracking discipline](versioning_and_tracking.md)** — every meaningful framework change bumps `know/VERSION`; every generation has a durable ID; every work declares dependencies.
8. **[Two-level verification discipline](two_level_verification.md)** — L1 (in-conversation structural) vs L2 (independent operator cold-start); L2 claims require L2 evidence.
9. **[Posture-naming discipline](posture_naming.md)** — working surfaces are named by the cognitive stance they induce, not just by the contents.
10. **[Session-ending discipline](session_ending.md)** — every session closes through the same protocol; no session ends with state only in conversation memory.
11. **[Session-starting discipline](session_starting.md)** — every session opens by reading current state from files before substantive action; files are canonical, conversation is provisional.
12. **[Anti-sycophancy discipline](anti_sycophancy.md)** — affirmation is not output; direct disagreement when warranted, no empty validation.

---

## How a discipline earns its file

A discipline earns its own file in `know/disciplines/` when:

1. It has at least one concrete incident in `../../see/DEV_LOG.md` where it held or had to be re-asserted.
2. It is operator-agnostic — the rule applies regardless of who is working.
3. It is generative — naming it reduces future incidents.

The shape of each discipline file: **rule**, **why**, **how it shows up**, **anti-pattern**, **dev-log incident**.

Disciplines are not invented from first principles. They are observed in practice and named after the fact.

---

## What disciplines are not

- **Not a code style guide.** The framework has no code. This is process discipline for authoring framework documents and works.
- **Not a workflow.** The [realization workflow reference](../references/realization_workflow.md) describes the *composition* workflow (Pass 0 through Pass 11). Disciplines describe how the framework *itself* gets built and revised.
- **Not the operator profile.** Operator-specific working style lives in `../operator_profiles/{operator}.md`. Disciplines are the operator-agnostic contract.
- **Not exhaustive.** New disciplines surface as the framework develops. When one is named, it gets a file here with its dev-log incident.

---

## How disciplines emerge (observation in itself)

Multiple disciplines this project has named were operating *implicitly* for many sessions before being noticed and crystallized. The operator points at the pattern; the discipline is named. This is itself an emerging meta-pattern, currently in [`../../see/handoff/OBSERVATIONS.md`](../../see/handoff/OBSERVATIONS.md). If it matures, *discipline-discovery* may become its own discipline.

---

## Pointers

- [`../formalization_roadmap.md`](../formalization_roadmap.md) — earning formal claims (the parallel discipline for content vs process)
- [`../references/prompt_construction.md`](../references/prompt_construction.md) — translation discipline in operational detail
- [`../references/generation_tracking.md`](../references/generation_tracking.md) — versioning and tracking in operational detail
- [`../references/dependencies.md`](../references/dependencies.md) — dependency declaration in operational detail
- `../operator_profiles/` — operator-specific working style (companion directory; built when needed)
- [`../../see/DEV_LOG.md`](../../see/DEV_LOG.md) — the running record of incidents from which these disciplines were observed
