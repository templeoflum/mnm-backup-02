# Define before reference (bottom-up construction)

**The rule:** vocabulary at any tier must exist in its defining reference before any consumer references it. Sub-function options before presets; presets before realization specs; primitives before content layers that use them.

**Why:** referencing vocabulary that doesn't exist creates phantom claims — the framework appears to have content it does not have. When the consumer is later read, the missing definition has to be reverse-engineered (often badly) or invented (often worse). Bottom-up construction keeps the framework's claims auditable: every cited preset, primitive, or option can be opened and read.

**How it shows up:**
- A new visual world preset gets defined in [`../references/visual_world.md`](../references/visual_world.md) *before* a realization spec references it.
- A new motif option goes into the work's `motif_reference.md` *before* it appears in a movement's content composition.
- A new continuity grade extension is added to the framework *before* a spline declares it at a movement join.
- Realization spec audits check that every reference resolves to a defined entity.

**Anti-pattern:** writing a realization spec that uses a preset name that has never been defined; citing a sub-function option in a prompt that the layer reference doesn't list; declaring C³ continuity at a join when the framework only specifies C⁰–C².

**Dev-log incident:** Session 7's "Catalog audit and rebuild" — realizations were claiming sub-function options that didn't exist; the discipline was re-asserted by requiring Tier 1 additions before Tier 3 use.

---

## Related

- [Vocabulary discipline](vocabulary.md) — manages the coherent stack into which new definitions land
- [Honesty discipline](honesty.md) — the larger principle (don't claim what hasn't been delivered)
- [Audit-after-change](audit_after_change.md) — when a definition lands, the audit checks consumers

## See also

- [`../glossary.md`](../glossary.md) — the canonical vocabulary register
