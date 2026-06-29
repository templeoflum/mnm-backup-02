# note — os-migration — f0 — sign·hands·record

Starting point for moving the warehouse from this Windows machine to a MacBook.
Cut ~20260619 (operator switching in ~a month). Survey only — nothing was changed.

## what transfers clean

- **All content** — markdown + browser-run JS/HTML (lattice, miroglyph, kit, sketches). Text is text; HTML/JS runs the same in a Mac browser. `git clone` / copy the folder and the whole corpus is intact.
- **node_modules** is gitignored — just `npm install` again on the Mac. (also a nested `ts/node_modules` under 211.)
- **Paths** — APFS is case-insensitive like NTFS; handles spaces / dots / the long address names; path-length limit is *more* generous than Windows' 260-char cap, so the deep nesting relaxes rather than strains.

## what breaks — all of it is the Windows tooling shell, not the content

1. **Seat + lattice launchers (hard break)** — `seat-clerk.cmd`, `seat-keeper.cmd`, `seat-lantern.cmd`, `lattice.bat` are Windows batch, won't run on macOS. They carry hardcoded `C:\Users\User\Documents\0000000\mind not map` paths, and `lattice.bat` uses Windows-only `netstat` / `findstr` / `choice` / `start`.
   - Fix: rewrite each as `.sh`/`.command` — `export GIT_AUTHOR_NAME=clerk` etc., `cd` to new path, same `claude --settings … --append-system-prompt-file …` line. Mechanical.

2. **SessionStart / witness hooks (hard break — subtle)** — `.claude/seats/clerk.json` (and keeper/lantern) hardcode `python "C:/Users/User/Documents/0000000/mind not map/.claude/seats/wake.py" clerk`. That absolute path won't exist on the Mac, so wake/witness silently fail. Also they invoke `python`, but macOS ships `python3` with no bare `python` — so even `statusline.py` (clean relative path) breaks until that's resolved.
   - Fix: update the path prefix to `/Users/<you>/…` in the three seat JSONs, and `python`→`python3` everywhere. The `.py` files themselves (`wake.py`, `witness.py`, `statusline.py`, `server.py`) run as-is once invoked right.

3. **Line endings (cosmetic, pre-empt it)** — `core.autocrlf=true`, no `.gitattributes`. Working tree is likely CRLF; Mac defaults to LF → a one-time wall of whitespace diffs. Insurance: add `.gitattributes` with `* text=auto eol=lf` and commit *before* the move so the policy travels with the repo.

4. **Claude Code memory + history (separate from the repo — easy to miss)** — auto-memory and session history live under `~/.claude/projects/C--Users-User-Documents-0000000-mind-not-map/`, a folder name derived from the absolute path. On the Mac the new path mints a *new* project identity — the 40+ memory files and the baton history do NOT follow automatically.
   - Fix: after first launch on the Mac, copy the old `memory/` contents into the new project's `memory/` folder (path ≈ `~/.claude/projects/-Users-<you>-…-mind-not-map/memory/`). Without this the seat wakes amnesiac.

## sequence when we do it

- before the move: add + commit `.gitattributes` (travels with repo).
- on the Mac: clone/copy → `npm install` → rewrite the 4 launchers → fix the 3 seat JSON paths + `python3` → copy memory dir → launch a seat and confirm wake hook fires.
- need the Mac username + chosen repo path before the launcher / hook edits (can't write the absolute paths until then).

## cost

Nothing in the content breaks. The work is: 4 batch files → shell scripts, 3 hardcoded paths, `python`→`python3`, one memory-dir copy, one `.gitattributes`. ~an hour, all mechanical.
