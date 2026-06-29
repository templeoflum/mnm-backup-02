# survey — the eyes rig — f0 — the playwright family, surveyed for disposition

address: 111 (view·connects·continuity)
cut: 20260612, the W5 look-over, operator's order: "let's look over the playwright eyes — are you still using it?" Drafted by the clerk; disposition is the operator's.

## the short answer

**No — nobody has run eyes.js since the keyboard dream (~06-07/08). It is dead as written. But it is not an orphan — it is the ANCESTOR of the rigs we use constantly,** and its original job (a lattice-aimed playwright rig) is exactly what the W5 play batch needs next.

## the family, three instruments

| rig | where | aim | status |
|-----|-------|-----|--------|
| **eyes.js** (+ eyes-test.js, eyes-numpad-diag.js) | tree root | THE LATTICE via localhost:8000 — state reads, debug log, keyboard tests, screenshots to 110 | **DEAD** — every pointer stale (below). Last real use: the keyboard dream, 06-07. |
| **bench.js** | 221 | toys one-shot via file:// — load, set, click, eval, inventory, shot | **ALIVE** — 153 bench.* shots at 110; header says it plainly: "Pattern inherited from eyes.js (main tree)" |
| **play.js** | 221 | toys in session via file:// — step scripts, recipes, canvas shots | **ALIVE** — ~100 play.* shots at 110, last used in the tsr play 06-11 |

**Load-bearing fact:** bench.js and play.js require playwright by ABSOLUTE PATH into the root `node_modules` (`require('C:/.../mind not map/node_modules/playwright')`). So **node_modules and package.json are not eyes-clutter — they are the live rigs' engine.** Any eyes disposition that touches them breaks the bench.

## what's stale in eyes.js, precisely

1. `LATTICE_URL` → `http://localhost:8000/2.m.g.c.0667/20.mn.gi.cs.0667/200.../lattice.f0.260606-122128.html` — pre-rename short dir names, the f0 client, at 200. The live client is lattice.f2 at 211 under full triad names. 404 on contact.
2. `SCREENSHOT_DIR` → pre-rename short dir names for 110. Writes would fail.
3. `getState()` reads `v0Open` (vestigial since f2 — saved, never toggled) and `_filePending` — partially stale state surface.
4. The built-in diagnostic tests ctrl/shift/alt digit chords — f2's keyboard scheme moved on (left-alt/space/right-alt per the keyboard dream's own later landing); the two companion test files are entirely that obsolete scheme.
5. Naming: `eyes.<label>.<YYMMDD-HHMMSS>.png` — two-digit year, pre-convention.

Total repair cost if revived: ~15 lines (two paths, the state fields, swap the diagnostic for the current scheme). The harness skeleton (run/screenshot/console-capture/pageerror-capture) is sound — it's the same skeleton bench and play inherited and have proven ~250 shots over.

## why this matters right now

The **W5 play batch** is queued: B1 click-confirm, H1–H7 browser behavior, the health-pane look at the rebuilt books, 0418 reader-clear. Those are LATTICE checks — bench/play can't do them (they open toys via file://, no server, no lattice globals). A repaired eyes is the natural tool: the play batch becomes scripted, repeatable, and its shots land at 110 like all the others.

## dispositions on the table (operator's call)

- **A — RE-AIM (clerk's lean):** repair eyes.js (~15 lines) into the lattice rig; retire the two obsolete keyboard-test companions (preserve-then-delete, the trim pattern); run the W5 play batch with it. The family becomes deliberate: bench = toy one-shot · play = toy session · eyes = the lattice. At W8, consider moving eyes to 221 beside its children (root is a stray address for it; W8 owns moves).
- **B — RETIRE:** preserve-then-delete all three eyes files; keep node_modules/package.json for bench/play; the play batch gets done by hand in the browser instead.
- **C — REST:** leave as-is; the books now register it honestly at root; it costs nothing but the stray-at-root reading.

## flags

- package.json/package-lock.json at root: legitimate residents while the engine lives at root — W8 may want engine + rigs co-located (e.g. all at 221) but that's a move, fenced to W8.
- The play batch needs the server up with the NEW scan code — lattice.bat restart pending on the operator's side either way.
