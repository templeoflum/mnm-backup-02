# know/

The framework's **Layer 2**: what the project knows holds. Specifications, references, disciplines, vocabulary — the settled understanding the work is built on.

Where `see/` provides postures for looking and `do/` produces artifacts, `know/` is the substrate of facts and rules both layers rest on. Changes here ripple through the project, which is why the [audit-after-change discipline](disciplines/audit_after_change.md) and [versioning discipline](disciplines/versioning_and_tracking.md) live alongside what they govern.

See [`../see/ARCHITECTURE.md`](../see/ARCHITECTURE.md) for the see/know/do model in full.

---

## What lives here

**Top-level pillars** (singular things, not categories):

- **[VERSION](VERSION)** — framework version (`YYYYMMDD-HHMMSS`, second precision)
- **[glossary.md](glossary.md)** — canonical vocabulary register
- **[formalization_roadmap.md](formalization_roadmap.md)** — staged path for earning formal claims (Spline stages S1–S5; Algebra stages A1–A4)

**Sub-categories** (each has its own README + atomic items):

- **[disciplines/](disciplines/)** — operator-agnostic process disciplines (12 currently)
- **[references/](references/)** — work-agnostic specifications: layer references, workflow, prompt construction, generation tracking, dependencies, parameter space
- **[diagrams/](diagrams/)** — visual specifications (HTML, dark/light mode, self-contained)
- **operator_profiles/** (future) — operator-specific working style; built when the operator-profile system goes live

---

## How to add to know/

The atomic principle applies: each sub-category has a `README.md` explaining what belongs and the format of items, plus the items themselves. To add to a sub-category, follow its README's "how to add" section.

To add a *new* sub-category at this level, the bar is higher: there must be a coherent kind of "thing the framework knows holds" that doesn't fit any existing sub-category, and it must produce more than one item over time. Singleton kinds stay as top-level pillars (like `glossary.md` and `formalization_roadmap.md`).

---

## Versioning

Any change here that affects what consumers see — a reference's signature, a discipline's content, a workflow pass description, a vocabulary entry, a new sub-category — bumps `VERSION`. See [`disciplines/versioning_and_tracking.md`](disciplines/versioning_and_tracking.md).

Internal restructuring that doesn't affect consumers (renaming for clarity within an already-stable signature, formatting changes) may not require a bump. When in doubt, bump.
