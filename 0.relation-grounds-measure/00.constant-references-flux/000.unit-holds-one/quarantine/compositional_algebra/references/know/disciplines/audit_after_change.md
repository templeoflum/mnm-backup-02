# Audit-after-change discipline

**The rule:** when a change lands somewhere in the framework, audit the rest of the framework for what's affected — both downstream references and conceptual neighbors.

**Why:** the framework is a graph of cross-references, not a flat list of files. A change to a layer reference may affect the prompt construction reference, the workflow reference, multiple work-level files, the glossary, and the diagrams. Without an audit, the framework drifts into inconsistency; the change works locally but the global picture becomes incoherent.

**How it shows up:**
- Every dev-log patch entry lists *Affected files* — not just where the change was made, but everywhere it had to be reflected.
- Cross-references in updated documents are checked: a renamed concept is renamed everywhere; a new section gets pointers added from anywhere that previously pointed at the absent content.
- Diagrams are updated when the structures they depict change.
- The glossary is updated when vocabulary changes.

**Anti-pattern:** patching a layer reference and leaving stale references to the old version in the workflow doc, the prompt construction doc, and the glossary. Adding a new pass without updating the workflow diagram.

**Dev-log incident:** multiple "Framework / work-content separation: chunk N" entries explicitly chunk the work and include framework-wide audit passes. The chunked structure exists *because* audit-after-change is the discipline.

---

## Related

- [Session-ending discipline](session_ending.md) — session-end is the *boundary* version of audit-after-change (applies once at end of session vs every meaningful change within)
- [Root-cause patches](root_cause_patches.md) — root patches trigger audits; surface patches don't surface the propagation work

## See also

- [`../../do/projects/workbench/tools/validate.py`](../../do/projects/workbench/tools/validate.py) — mechanical witness of cross-reference consistency
- [`../../see/DEV_LOG.md`](../../see/DEV_LOG.md) — every entry's *Affected files* section is this discipline in action
