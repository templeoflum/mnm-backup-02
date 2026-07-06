# Versioning and tracking discipline

**The rule:** every meaningful framework change bumps `know/VERSION` at second precision. Every generation has a durable ID. Every work declares its framework dependencies.

**Why:** without versioning, "works at framework version X" becomes ambiguous, and breaking changes silently strand existing works. Without generation tracking, the lineage of an artifact is lost — there is no way to reproduce, compare, or audit. Without dependency declarations, Pass 0 cannot verify compatibility before composition begins.

**How it shows up:**
- `know/VERSION` contains a single timestamp `YYYYMMDD-HHMMSS`. Bumped on every change to reference signatures, workflow, vocabulary, or project structure. See [`../references/generation_tracking.md`](../references/generation_tracking.md).
- Generation IDs: `{work}.{realization}.{operator}.{YYYYMMDD-HHMMSS}[.{edit-suffix}]`. Each generation file under `do/works/{work}/realizations/generations/` uses this as its filename.
- Each work has a `dependencies.md` naming its minimum required framework version, the references it consumes, and any score-local extensions. Pass 0 verifies the active framework meets the declared minimum. See [`../references/dependencies.md`](../references/dependencies.md).

**Anti-pattern:** making framework changes without bumping VERSION; producing generations without recorded operator or timestamp; running a work without checking its dependency declaration against the active framework.

**Dev-log incident:** "Framework version stamp precision corrected" — versioning was being done at day precision; corrected to second precision so multiple meaningful changes within a day could be distinguished.

---

## Related

- [Audit-after-change](audit_after_change.md) — VERSION bump is part of every audit-after-change pass
- [Session-ending discipline](session_ending.md) — session-end protocol includes VERSION bump as step 7

## See also

- [`../references/generation_tracking.md`](../references/generation_tracking.md) — operational detail for IDs and lifecycle
- [`../references/dependencies.md`](../references/dependencies.md) — operational detail for work dependency declarations
- [`../VERSION`](../VERSION) — the single source of truth
