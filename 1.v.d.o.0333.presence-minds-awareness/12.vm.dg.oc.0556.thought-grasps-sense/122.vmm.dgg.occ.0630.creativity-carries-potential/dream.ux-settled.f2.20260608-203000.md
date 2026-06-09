# dream.ux — settled questions (answered from code)

folded from f1 (27 questions). answers based on reading lattice.f1 HTML and server.py — what's actually built, not what was dreamed.

---

## the three views

1. **what does View 0 do?**
View 0 is a two-pane layout: sidebar (file list with document grouping, fold badges, expandable fold history) + editor/reader (rendered markdown, textarea edit, save via /write). Actions: create (+), edit, save, cancel, fold, delete, close. Structural info CSS exists but is NOT rendered — no triad, no position links, no register badges in View 0. The structural info was already moved out. View 0 is purely content: browse files, read them, edit them.
**answer: View 0 is the file editor. content only. structural info is already gone.** [settled]

2. **what does View 1 do?**
View 1 has: left column (full address notation, structural breakdown grid with depth/role/mode/register/ratio, register badges at cell depth, position links from/to/peers, file count), center column (card with triad noun·verb·modifier, scales by depth 1→2→3), right column (rings, minimap, ratio line). Lower panel: verb grid (27 cells with triads) + sierpinski triangle. No file content, no file list — just a count. View 1 shows the structure from every angle. The verb grid exists but is acknowledged as cluttered.
**answer: View 1 is the structure viewer. all structural info lives here. no file content. the instrument set is: card, identity panel, rings, minimap, ratio line, verb grid, sierpinski. verb grid needs work but the role is clear.** [settled]

3. **what does View 2 do?**
View 2 is three columns: files (intake at 200 + current address), destination grid (27 cells with file counts from /scan, select destination), manifest trail (from /manifest endpoint, last 40 entries) + log. One action: move (select file → select destination → move button). No fold management, no scheduling, no health monitoring, no auditing. It routes files between addresses and shows the manifest trail.
**answer: View 2 is routing + inventory. pick a file, pick a destination, move. manifest trail shows recent operations. that's it right now. fold management, scheduling, health monitoring are not built and not needed yet.** [settled]

4. **do the three views overlap?**
In the current build: View 0 has NO structural info (CSS dead, JS doesn't render it). View 1 has NO file content (just a count number). View 2 has a file list but only for selection — you can't read or edit files there. The overlap is minimal and practical: View 2 needs to show filenames so you can pick one to move. That's not the same as View 0's reader/editor.
**answer: the separation is already clean in the build. View 2's file list is for selection, not reading — that's not real overlap.** [settled]

5. **are views lenses or rooms?**
In the code: switching views changes which div is `display:flex` vs `display:none`. The address persists across switches (`currentAddr` is global). Nothing resets when you switch. No confirmation dialogs, no transitions. The tray, selector, address bar, and HUD persist across all views. They're lenses. The tab bar is frictionless — click and you're there.
**answer: lenses. the code already implements this. address persists, no reset, no friction.** [settled]

---

## the fold system

6. **where does fold management live?**
The fold button is in View 0's editor bar (line 1489: `onclick="v0FoldDoc()"`). The console also has `fold` command. View 2 has no fold UI at all — just move. View 0 also shows fold badges and expandable fold history in the sidebar. Fold management is fully in View 0.
**answer: View 0. that's where the fold button is, that's where fold history is visible, that's where it should stay.** [settled]

7. **is there a fold ceiling?**
No. The server's `op_fold()` (lines 187-218) just parses the fold number, increments it, copies content. No ceiling check. You can fold to f99 if you want. The ceiling was dreamed in ~8 but never built.
**answer: not built. the concept (bounded depth, forced cleanup) may be worth building later, but right now folds are unbounded. whether to add a ceiling is a separate decision.** [float]

8. **is the fold system the ternary applied to time?**
The server fold operation is mechanical: copy content, bump number, new timestamp. There's no structural relationship between fold depth and the ternary. f0/f1/f2 don't map to branch/leaf/cell in any way the code enforces. The analogy is poetic, not structural.
**answer: no. the fold system is simple versioning. the ternary-applied-to-time claim is a nice idea but not backed by anything in the code or the practice.** [settled]

9. **does every file fold?**
The server's fold operation parses `name.fN.YYYYMMDD-HHMMSS.ext`. If a file doesn't match that pattern, it can't be folded. HTML files in the lattice DO follow this pattern (lattice.f0, lattice.f1) so they fold. Files without fold numbers in their names (like the research PDFs at 220, or the eyes scripts at root) can't fold through the server.
**answer: every file that follows the naming convention folds. files without fold numbers in their names don't. "universal" means universal among properly named documents, not literally every file on disk.** [settled]

10. **where do you see fold history?**
View 0 sidebar shows fold badges (e.g., "f1") and expandable fold history (click badge → see all versions with timestamps, click to load any version). This is already functional. View 2 shows nothing about folds. The console `list` command shows all files including all folds.
**answer: View 0 sidebar. it already shows fold badges and expandable history. that's sufficient. View 2 doesn't need fold management — it does routing.** [settled]

---

## the structure

11. **field or tree?**
The selector renders a tree: branches expand to leaves, leaves expand to cells. The address bar has depth (+/-) which is tree thinking. The minimap draws three trees. BUT: the address system is flat — `211` is three coordinates, not a path through hierarchy. `go('211')` is direct addressing, not tree traversal. Keyboard nav uses both: arrows walk the tree, bare digits set coordinates.
**answer: the address system is a flat coordinate field. the UI navigates it as a tree because trees are practical for display. both are true — field underneath, tree on top. the field-vs-tree question doesn't need resolving because they're not in conflict.** [settled]

12. **is 3 a frame or a limit?**
The code hardcodes 3 everywhere: `for (let b = 0; b < 3; b++)`, `CARD_SHAPE` has entries for depth 1/2/3, the address bar allows 1-3 digits. The folder structure on disk has exactly branch/leaf/cell. Nothing in the code supports depth 4+.
**answer: 3 is the actual structure as built. whether it's "truly" bounded or a viewport is a philosophical question that doesn't affect the code. the build is 3 deep. expanding would require significant changes to server, client, and filesystem.** [settled]

13. **inside or outside?**
View 0 sees all files at any address — wide visibility, shallow (you see content, not structure). View 1 sees one address deeply — its identity, connections, position, the full structural breakdown. The surveyor claim maps to the code: View 1 gives you deeper understanding of where you ARE, View 0 gives you wider access to what's THERE. Both are useful for different things.
**answer: both views exist and serve different purposes. "inside is deeper" describes View 1 accurately — it shows more about the address's nature. "outside is more practical" describes View 0 accurately — it lets you browse and edit. the code doesn't pick a side.** [settled]

---

## the HUD

14. **what is the HUD's job?**
The HUD contains: title, three view tabs, triad display (noun·verb·modifier), refresh button, console button, address bar (3 digit slots with depth +/-), tray (6 pin slots), status pulse. The selector is also HUD-level (always visible, has shortcuts). No breadcrumb trail. No branch color tinting. No room-aware emphasis — the HUD is identical regardless of which view is active.
**answer: the HUD is navigation + context. tabs switch views, address bar sets position, triad shows identity, tray holds references, pulse shows operations. it doesn't adapt to the current view. whether it should is a separate question.** [settled]

15. **does the HUD hold two readings?**
The address bar shows `211` (digits). The triad shows `builds` or `motion · builds · form` (verbs). Both are always visible. The selector shows address digits AND branch/leaf/cell names. The verb grid in View 1 shows both digits and verbs for all 27 cells.
**answer: yes. digits and verbs are both always visible in the HUD. the address bar is digits, the triad is verbs. this is already built.** [settled]

---

## the manifest and tracking

16. **what is the manifest?**
manifest.live.md at 201 is an append-only markdown table. The server's `trace()` function appends one row per mutation (move, fold, create, write, delete). The `/manifest` endpoint reads the last 50 entries. The file only knows about operations that went through the server. It doesn't know what existed before the server was built. It's not a reconciled inventory — it's a transaction log.
**answer: the manifest is a transaction log, not an inventory. it records what the server did, not what exists. a real inventory would need a full filesystem scan reconciled against the log. that's a separate system to plan and build.** [settled]

17. **is the routing 1->2->(0 or 1) real?**
Nothing in the code enforces routing. `op_move()` accepts any `from` and `to` address. You can move a file from 000 to 222 without going through branch 1. The server doesn't check or suggest routes.
**answer: the routing is a discipline, not a mechanism. the code allows any movement. whether the UI should suggest or enforce routes is a design decision — right now it doesn't.** [settled]

---

## the instruments

18. **is the selector settled?**
The selector is a collapsible tree showing all 27 cells organized by branch/leaf, with file counts per address, shortcut buttons (0/1/2, 00/11/22, 000/111/222, 100/200), collapse toggle. It's global (visible in all views). It works.
**answer: the selector works and is practical. it's a tree, not a terrain map. the terrain-map idea from ~1 was never built and the tree works fine. the selector is settled as a tree.** [settled]

19. **does the verb map exist?**
The verb grid exists in View 1's lower panel (lines 1962-1987). It renders all 27 cells in a 3×3×3 grid, each showing colored digits + verb + noun. All cells are clickable (navigation). The user said it's cluttered and doesn't help visualize much. The sierpinski triangle sits next to it and was called "signal."
**answer: the verb grid is built but doesn't work well visually. it's a flat grid of 27 items — not a map showing flow or relationship. whether to fix it, replace it, or remove it is a View 1 rethink question.** [float]

20. **what instruments does View 1 actually need?**
What's built: card (scales by depth), identity panel (full address, structural grid, register badges, position links), rings (3 concentric SVG), minimap (3-tree), ratio line (arc), verb grid (27 cells), sierpinski triangle. The user said: verb grid is noise, sierpinski is signal. The identity panel, card, rings, minimap, and ratio line were not criticized.
**answer: the working set is card + identity panel + rings + minimap + ratio line + sierpinski. the verb grid needs rethinking or removal. anything beyond this is dream material to be evaluated when View 1 gets focused attention.** [float]

---

## document types and context engineering

21. **are document types context frames?**
In practice: dream docs at 122 signal exploration, frames at 210 signal structured build, logs at 222 signal recording, reviews at 22 signal reflection. The naming convention encodes type and scope. A fresh AI session reads `dream.ux.f1` and knows it's in exploration mode at 122. This IS how the system works — it's an observation, not an aspiration.
**answer: yes. this is how the system already functions. document types carry context through their naming, their address, and their shape. this is observable fact, not dream.** [settled]

22. **should the server stamp templates?**
The server's `op_create()` takes optional content but stamps nothing — it writes whatever you pass (default: empty string). Templates would mean: `create dream ux 122` auto-fills address identity, scope, constraint, ground. This would save time and enforce consistency.
**answer: not built. would be useful. the pattern is clear from existing documents (dream docs have headers, frames have chunk structure, logs have entry format). this is a real feature to build when priorities allow.** [float]

23. **is the lattice a context engine?**
The system works by: (1) documents carry context via type/scope/address/fold naming, (2) the fold system preserves history so you can see where things came from, (3) the address system gives every document a structural position, (4) the manifest traces operations. A fresh session reads the relevant documents and knows its shape. This is context engineering. Whether "context engine" is the right name depends on what you want to emphasize.
**answer: the lattice functions as a context engine. the documents carry their own context. the addressing gives structural meaning. the folds preserve history. this is what it does, regardless of what you call it.** [settled]

---

## edge grades and gates

24. **are there real gates in the UI?**
No gates in the code. `op_move()` accepts any from/to. No confirmation dialogs on any operation except the browser's default (none added). Delete doesn't even confirm. Fold doesn't confirm. Move doesn't confirm. Everything is one click.
**answer: no gates built. everything is frictionless. whether some operations (especially delete, or moves to branch 0) should have confirmation is a UX question — the dream's three-grade system (hard/soft/none) is not implemented.** [float]

---

## the tray and console

25. **is the tray settled?**
6 slots, ctrl+click to pin from file lists (View 0 + View 2), ctrl+click on slot to unpin, clear-all button, click to open (md/txt → popup reader with edit, html/images → new tab), sessionStorage persistence. The popup reader has full edit/save capability via /write.
**answer: the tray works. the mechanism is clean (ctrl+click pin/unpin). the popup reader with edit is useful. whether 6 slots is right or whether it needs more features settles through use.** [settled]

26. **is the console settled?**
Commands: list, read, move, fold, create, log, go, eval, clear, help. No command history (no up-arrow). Unknown commands fall back to eval. Input placeholder shows available commands.
**answer: the console works. the command set covers all server operations. no history is a missing convenience. whether the console needs to grow depends on whether people actually use it — if the GUI covers the same actions, the console is a power-user tool and doesn't need much more.** [settled]

---

## naming

27. **are the view names settled?**
In the HTML: `0 library`, `1 observatory`, `2 warehouse`. These match what the views actually do: library browses and edits content, observatory observes structure, warehouse routes files between addresses.
**answer: the names match the functions. library = content. observatory = structure. warehouse = routing. these read right.** [settled]
