# Session-ending discipline

**The rule:** every session closes through the same protocol — the live state is reflected back into handoff files, the chronological record gets a session entry, the framework version is bumped if meaningful changes landed, the validator is run, the commit is made. No session ends with state only in conversation memory.

**Why:** sessions are the project's unit of work. State carried only in conversation memory evaporates when the conversation closes. The next session has to re-derive what was current — painfully, with drift. The session-ending protocol forces a deliberate transfer from conversation-state to file-state, so the next session opens to a project that knows where it is.

This is the file-state counterpart to the [audit-after-change discipline](audit_after_change.md). Audit-after-change applies on every meaningful change *within* a session; session-ending applies once at the *boundary* of a session.

**How it shows up:**

The operational checklist lives in [`../../see/handoff/README.md`](../../see/handoff/README.md#at-session-end). Summary:

1. **`see/handoff/STATE.md`** — overwrite with current state. Framework version, active work, current pass map, what was done this session, where the next session picks up.
2. **`see/handoff/QUEUE.md`** — prune completed items; add new items surfaced this session; re-order as priority shifts. Items can be marked `done — untested` when implementation landed but operator hasn't verified.
3. **`see/handoff/OPEN_QUESTIONS.md`** — remove resolved questions (resolution becomes a DEV_LOG entry); add new questions surfaced.
4. **`see/handoff/OBSERVATIONS.md`** — append any patterns noticed that aren't yet ready to be promoted.
5. **`see/handoff/IDEAS.md`** — add new speculation; remove ideas that were decided on.
6. **[`../../see/DEV_LOG.md`](../../see/DEV_LOG.md)** — append a session entry covering what changed and why. Style: match existing session entries (Context / Conceptual development / Changes made / Version bump / Verification status).
7. **`know/VERSION`** — bump if meaningful changes landed (reference signatures, workflow, vocabulary, new framework references, new posture documents, project structure changes).
8. **Validator** — `python do/projects/workbench/tools/validate.py`. Verify framework invariants hold (dead links, VERSION format, generation IDs, glossary inventory).
9. **Git commit** — honest message, no marketing speak, Co-Authored-By footer if AI collaborated. Commit boundaries match logical work units; this final session-end commit captures the protocol's own output.

**Verification status discipline (sub-rule):** when a feature is implemented but the operator has not verified it works, the QUEUE entry is marked `done — untested` and the relevant project/feature doc declares the verification gap. Untested-but-implemented is a third state distinct from done and pending; treating it as done is dishonest.

**Anti-pattern:** ending a session with "I'll capture this next time"; committing without a DEV_LOG entry; declaring features done before operator verification; leaving the framework in a state where the next session has to read conversation history to understand what's current.

**Dev-log incident:** Session N+4 (2026-05-27) — operator noticed the protocol was being done implicitly each session (STATE updates, DEV_LOG entries, commits) and asked to formalize it. This discipline is the result. The first formal execution of the protocol was the session-end of the session in which the protocol was defined.

---

## Related

- [Session-starting discipline](session_starting.md) — the inverse (reads files to conversation; this writes conversation to files)
- [Audit-after-change](audit_after_change.md) — the within-session counterpart
- [Versioning and tracking](versioning_and_tracking.md) — the VERSION-bump step
- [Anti-sycophancy](anti_sycophancy.md) — the *honest accounting* sub-discipline applied to claims of "done"

## See also

- [`../../see/handoff/README.md`](../../see/handoff/README.md#at-session-end) — the operational checklist
- [`../../do/projects/workbench/tools/validate.py`](../../do/projects/workbench/tools/validate.py) — the validator run as part of every close
