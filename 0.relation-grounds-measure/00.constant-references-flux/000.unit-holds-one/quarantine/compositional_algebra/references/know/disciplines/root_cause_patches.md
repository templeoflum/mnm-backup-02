# Root-cause patch discipline

**The rule:** when an output is bad, fix the description that produced it, not the output. Patches are made at the source, not the surface.

**Why:** the framework is a generative system. Patching a single output leaves the upstream description intact, so the next generation reproduces the same failure. Patching the description fixes the failure for every future generation. Surface patches accumulate; root patches subtract.

**How it shows up:**
- Failed generations are diagnosed for the *upstream description* that produced the failure (the prompt template, the layer reference, the workflow pass description), and the patch is made there.
- Workflow passes are revised at their description, not by hand-correcting the artifacts they produce.
- When a preset produces consistently off output, the preset is revised — the output is regenerated, not patched.

**Anti-pattern:** editing a generated narrative to remove a leaked sub-function name, then leaving the prompt template unchanged so the next generation leaks again. Hand-fixing a continuity issue at the join rather than fixing the Shape spec that produced it.

**Dev-log incident:** the three failed Calibration A generations (Session N+2 and prior) traced back to a misunderstanding of Pass 8 as construction rather than execution. The patch was at the framework description of Pass 8, not at the failed outputs.

---

## Related

- [Audit-after-change](audit_after_change.md) — when the root patch lands, the audit propagates the change
- [Define before reference](define_before_reference.md) — root patches sometimes require defining vocabulary first

## See also

- [`../references/realization_workflow.md`](../references/realization_workflow.md) — the pass descriptions that are the root for generation failures
- [`../references/prompt_construction.md`](../references/prompt_construction.md) — the prompt templates that are the root for prompt failures
