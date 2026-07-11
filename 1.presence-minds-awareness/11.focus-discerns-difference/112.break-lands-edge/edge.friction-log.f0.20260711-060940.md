# edge — friction log — f0 — break · lands · edge

*mode: EDGE / running log. the durable record of friction + operational learnings — where things rub, break, or teach, and what we did about it. operator-blessed (20260711): "start the edge log." this is the cell for it (112 — break·lands·edge, "where deviations get logged and errors get named"). entries APPEND; the log folds only on cleanup or format change. it is also the DATA the harness feedback layer renders (friction made visible) — logging here isn't extra work, it's the source.*

**entry form:** `## UTC-stamp · title` → **edge** (what rubbed/broke, concrete) · **where** (seat/file/mechanism) · **lesson** (what it taught) · **disposition** (fixed / flagged / ongoing / who owns).

---

## 20260711-050 · apprentice source-gather — digests-of-digests

**edge** — spun an apprentice to gather the miroglyph "source texts"; it found the sources were *extracts of extracts* (2 layers from the primary v1–v4 files), and f0/f1 were ~90% duplicate (a fold).
**where** — lantern; apprentice run over `quarantine/mythmaking/miroglyph/extract.*`.
**lesson** — bound the task tight + named the discipline (attributed / unvetted / no-assert) + **demanded a friction-report** → clean, honest output, AND the friction-report itself (the lineage sits deeper) is what located the operator's actual v1–v4 targets. the friction was the map.
**disposition** — ongoing (guiding-practice forming): bound tight · name the discipline · demand the friction-report.

## 20260711-052 · board.py crashes on emoji (cp1252 stdout)

**edge** — a link-glyph emoji in a board post crashed `board.py`'s read: `UnicodeEncodeError`, cp1252 stdout can't encode it. Any plain `python board.py` read dies at that line. Both clerk and I reached for the emoji (it's the natural button glyph).
**where** — `.claude/seats/board.py` (shared tooling); the dispatch UI is unaffected — only the seat CLI read.
**lesson** — keep emoji OUT of board posts; read with `PYTHONIOENCODING=utf-8`; the real fix is `sys.stdout.reconfigure(encoding='utf-8')` in board.py.
**disposition** — flagged to clerk (his .claude lane); behavioral fix (no emoji) adopted now. See [[board-py-post-invocation]].

## 20260711-060 · tracker showed seats empty (wrong data source)

**edge** — the operator couldn't see our tasks; the dispatch tracker reads the **harness task-tools (TaskCreate/TaskUpdate)**, but keeper and lantern were both tracking via status.py card + git + board — so the tracker showed us empty despite real work.
**where** — all seats; the dispatch tracker panel (needs a manual refresh to populate — clerk's frontend).
**lesson** — log tasks via the task-tools, keep them live; the recurring "task tools haven't been used" reminders were pointing here the whole time.
**disposition** — fixed (tasks logged) + memoried ([[dispatch-tracker-reads-task-tools]]); keeper surfaced the cause.

## 20260711-03 · the auto-approve toggle (phantom-req diagnosis)

**edge** — two seats "stuck" on permission prompts; the cause was the dispatch's own **act-auto toggle** auto-pressing APPROVE-ALL as the operator, so every request was auto-decided before he could.
**where** — the dispatch approvals flow (clerk's) — diagnosed from lantern by writing a *hidden phantom request* the operator could not have known, and watching a decision appear in 0.5s.
**lesson** — verify a suspected auto-actor with a hidden probe it can't have known about; the "by:hedawn" tag was the tell. Don't trust the surface story; ground in a controlled test.
**disposition** — resolved (clerk pinned it to the act-auto toggle, a feature not a rogue).

## 20260708 · the miroglyph-humbling (carried from the baton)

**edge** — asserted what the miroglyph "is" twice from zero (a chat, then compression), both wrong, on the one thing I'm meant to hold — the exact confident-wrong miss I'd preached against all day.
**where** — lantern; the miroglyph thread.
**lesson** — ASK, don't assert; collect the source before defining; the reverent "it's X!" read is the trap. See [[miroglyph-is-compression-not-chat]].
**disposition** — ongoing discipline (the whole miroglyph-bin approach is the correction: gather the v1–v4 sources, don't define from zero).

## 20260711-063 · link-tabs — old links lost as the chat grows

**edge** — the open:-link button works well, but the operator (@friction): "as the chat grows it's hard to find old links, we need more tabs." opened links replace each other in the single toy-browser view; no way back to an earlier module/doc.
**where** — the dispatch toy-browser (clerk's surface); surfaced while serving the miroglyph-sift paperwork link.
**lesson** — a single browser pane doesn't scale with a growing link-stream; tabs (or a link history / pinned modules) keep opened docs reachable. the link feature succeeding created the need.
**disposition** — clerk's surface (he has an open @request for browser tabs); logged here, not mine to fix.

---

*append-only. friction is health, not noise — a logged edge is one that can't repeat silently. — lantern*
