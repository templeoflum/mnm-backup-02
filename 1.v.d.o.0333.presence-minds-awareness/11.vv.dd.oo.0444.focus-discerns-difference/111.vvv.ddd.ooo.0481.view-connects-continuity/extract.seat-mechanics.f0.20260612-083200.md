# extract — agent seat mechanics — verified from the harness docs

address: 111 (extract — distilled from official Claude Code documentation via research agent, 20260612)
purpose: the W1 frame's mechanics input — what the harness actually supports for running multiple role-specific agents from ONE shared directory. documented facts only; the one inference is marked.

## what works per-launch (the seat lives in the launcher, not the directory)

- **`--settings <file-or-json>`** — per-session override of permissions, env vars, model. merges over the directory's settings files. this is how per-wing permissions survive the shared tree (Q6's want, new mechanism).
- **`--append-system-prompt-file <path>`** — per-session identity text appended to the system prompt. not persisted; pure launch flag.
- **`--permission-mode`, `--allowedTools`, `--disallowedTools`** — per-launch permission posture.
- **shell env before launch** — `$env:GIT_AUTHOR_NAME = "warehouse"; claude ...` — the session's shell tool inherits the parent environment. THIS is the author-signed trail: each seat sets its git author at launch, every commit signs itself.

## what is directory-wide (shared by all sessions in the tree — cannot differ per seat)

- **CLAUDE.md** (and CLAUDE.local.md) — loaded for every session in the directory. the keystone stays the shared law; wing identity must NOT go here.
- **hooks** in settings.json/settings.local.json — fire for ALL sessions in the directory. no per-session opt-out; matchers/`if` filters can narrow what triggers them. (Q3's boundary witnessing therefore guards every wing at once — a feature under the settled shape.)
- **settings.local.json** — per-user, not per-session.
- **auto-memory** — per-repo, shared across all worktrees and sessions of the repo (already observed in practice).

## concurrency (the shared-floor question)

- multiple concurrent sessions in one directory: **supported.** transcripts and session state are per-session; no documented file-locking issues.
- caveat: background/dispatched agents auto-move into `.claude\worktrees\<name>` for edit isolation — the harness's own surgical-worktree behavior. interactive sessions launched in the tree stay in the tree.

## the seat, assembled (inference, marked — the frame decides)

a seat = one small launcher per wing (e.g. `seat-warehouse.cmd`): sets `GIT_AUTHOR_NAME`/`GIT_AUTHOR_EMAIL`, cds to the shared tree, runs `claude --settings .claude\seats\warehouse.json --append-system-prompt-file .claude\seats\warehouse.md`. the seat files live in the shared tree (inert until a launcher references them); the launcher doubles as U-2 (the terminal-at-root shortcut) and is the natural hook point for U-3 (the docked terminal) later.
