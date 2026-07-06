# Session-starting discipline

**The rule:** every session opens by reading current state from files before substantive action. Orientation comes from `see/handoff/STATE.md`, `see/handoff/QUEUE.md`, and the related handoff files — not from conversation memory of a previous session.

**Why:** a session resuming has either no context (fresh Claude instance after compaction; a new operator picking up the project) or stale context (operator's last session was different work, prior conversation has drifted, file state has changed since the conversation was held). Reading files lands the conversation on accurate current state. Skipping this leads to working from outdated assumptions or, worse, AI inferences about what state should be.

This is the inverse of the [session-ending discipline](session_ending.md). Session-ending transfers conversation-state to file-state (writing). Session-starting transfers file-state to conversation-state (reading). **Files are canonical between sessions; conversation is provisional.** The conversation is never the source of truth across a session boundary.

**How it shows up:**

The operational checklist lives in [`../../see/handoff/README.md`](../../see/handoff/README.md#at-session-start). Summary:

1. **`see/handoff/STATE.md`** — current framework state, last session's work, where the next session was supposed to pick up.
2. **`see/handoff/QUEUE.md`** — pending work, in priority order.
3. **`see/handoff/OPEN_QUESTIONS.md`** — uncertainties not yet resolved that might shape current work.
4. **`see/handoff/OBSERVATIONS.md`** — patterns being watched that might matter for current work.
5. **`see/handoff/IDEAS.md`** — speculation in case current work surfaces a related idea.
6. **AI orientation chain** (when an AI collaborator is involved) — `CLAUDE.md` first, then the read-first chain it points to.
7. **Validator run** — `python do/projects/workbench/tools/validate.py`. Verifies the previous session-end was clean; surfaces drift if any landed between sessions.
8. **Git status** — `git status` to confirm working tree is clean and the previous session-end commit is the tip. Uncommitted changes mean the previous session didn't close cleanly; resolve before substantive work.
9. **Confirm operator intent** — QUEUE.md says what was queued last session; the operator may want today's work to be different. Confirm before substantive action rather than picking arbitrarily from the queue.

**What counts as a session boundary** (when this discipline triggers):
- A fresh Claude instance (compaction, new conversation)
- A new operator picking up the project
- Operator explicitly signals resume ("picking back up", "new session", "let's resume")
- A long enough gap that conversation context can no longer be trusted

Mid-conversation continuity (no boundary crossed) does not require re-reading; the protocol is for crossings.

**Anti-pattern:** acting on assumptions about state without reading STATE; resuming prior session's threads as if they continued in conversation memory; treating an answered question as proof-of-current-state when it might just be lucky-context; making changes based on memory of "what we were doing last time" without checking what files say is current.

**Dev-log incident:** Session N+4 — operator returned, asked about prior session's work (where the session-ending discipline lived) without state being read first; the answer happened to be correct because conversation-context proximity made the prior work memorable, but a fresh Claude session would have had to actually open the files. The discipline gets formalized to make the read-first step explicit rather than incident-dependent.

---

## Related

- [Session-ending discipline](session_ending.md) — the inverse (writes files; this reads files)
- [Honesty discipline](honesty.md) — "files canonical, conversation provisional" is honesty about epistemic boundaries

## See also

- [`../../see/handoff/README.md`](../../see/handoff/README.md#at-session-start) — the operational checklist
- [`../../CLAUDE.md`](../../CLAUDE.md) — AI orientation entry-point that includes the read-first chain
