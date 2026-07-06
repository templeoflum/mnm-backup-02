# Posture-naming discipline

**The rule:** working surfaces are named by the cognitive stance they induce, not just by the contents they hold. A file name is a cognitive primer; choose the primer deliberately.

**Why:** the word at the top of a file shapes what gets produced inside it. `SURVEY` puts you in surveyor mode (wide-angle, stand-back, measure-the-whole). `DEV_LOG` puts you in log-keeper mode (chronological, accumulating, dated). `WORKFLOW` puts you in step-walker mode. `CHARTER` puts you in gate-keeper mode (refusal, boundary). `CRITIQUE` puts you in self-critic mode (gap-finding, honest accounting). Naming by stance keeps the cognitive primer working; naming by contents alone (`notes.md`, `stuff.md`, `misc.md`) abandons it.

**How it shows up:**
- The framework's existing files implicitly carry posture-words: Survey, Reference, Workflow, Roadmap, Log, Discipline, Profile, Handoff, Glossary.
- Project-root posture documents — SURVEY (orientation), CHARTER (refusal), CRITIQUE (self-criticism), LINEAGE (ancestry), ROADMAP (forward-planning), ARCHITECTURE (structural-organization) — each induce a distinct stance for looking at the project.
- New working surfaces are named by stance first; contents follow.
- When a posture-word doesn't exist for a stance worth inducing, a new one is named (and the resulting file inherits the stance's discipline).
- The see/know/do top-level reorganization is posture-naming at the directory level: each top-level directory induces its layer's stance.

**Anti-pattern:** files named `notes.md`, `thoughts.md`, `stuff.md`, `misc.md`. Files named only by topic (`auth.md`) when a stance-name would carry more meaning (`auth_design.md` adds *design* posture; `auth_audit.md` adds *audit* posture). Mixing postures in one file (a "design and notes and questions" file that does all three badly because no stance dominates).

**Dev-log incident:** the session of 2026-05-27 — the operator observed that the word "survey" puts you in a specific cognitive space and asked what else could be done deliberately. The recognition led to drafting CHARTER, LINEAGE, CRITIQUE as deliberate posture documents, and adding ROADMAP as forward-planning posture.

---

## Related

- [Vocabulary discipline](vocabulary.md) — names are vocabulary; the same coherence concerns apply
- [Define before reference](define_before_reference.md) — naming a posture before having files in it is a posture-side define-before-reference

## See also

- [`../../see/ARCHITECTURE.md`](../../see/ARCHITECTURE.md) — the see/know/do model that organizes the project's postures at the directory level
- [`../../see/handoff/README.md`](../../see/handoff/README.md) — every handoff file's distinct posture
