# dream.ux — settled, corrected, floating

folded from f2 (27 questions answered from code). user reviewed f2, corrected 2 answers, confirmed 20 settled. this fold is the final reduction: what landed, what didn't, what's next.

---

## settled (20)

these read right from every angle. grounded in code, confirmed by review.

1. **View 0 is the file editor.** content only. structural info already removed from rendering. two-pane: sidebar (file list, fold badges, fold history) + editor/reader. actions: create, edit, save, cancel, fold, delete, close.

2. **View 1 is the structure viewer.** no file content, just a count. instruments: card (scales by depth), identity panel, rings, minimap, ratio line, sierpinski. verb grid exists but needs rethinking.

3. **View 2 is routing + inventory.** three columns: files (intake + current), destination grid (27 cells with counts), manifest trail + log. one action: select file → select destination → move.

4. **view separation is already clean.** View 0 has no structural info. View 1 has no file content. View 2's file list is for selection, not reading. minimal practical overlap.

5. **views are lenses, not rooms.** address persists across switches. nothing resets. no friction. the code already implements this.

6. **fold management lives in View 0.** fold button in editor bar, fold badges and history in sidebar. View 2 does routing, not fold management.

7. **the fold system is simple versioning.** copy content, bump number, new timestamp. the ternary-applied-to-time claim (f0=branch, f1=leaf, f2=cell) is poetic, not structural. the code enforces nothing like that.

8. **fold history is in View 0 sidebar.** badges and expandable history, already functional. sufficient.

9. **the address system is a flat coordinate field navigated as a tree.** `go('211')` is direct addressing. the selector renders a tree because trees are practical for display. both true, not in conflict.

10. **3 is the actual structure as built.** hardcoded everywhere. expanding would require significant changes. whether it's philosophically bounded or a viewport doesn't affect the code.

11. **inside (View 1) is deeper, outside (View 0) is wider.** View 1 shows more about where you ARE. View 0 gives wider access to what's THERE. the code doesn't pick a side, both serve different purposes.

12. **the HUD is navigation + context.** tabs, address bar, triad, tray, pulse. doesn't adapt to current view.

13. **the HUD holds two readings.** address bar = digits, triad = verbs. both always visible. already built.

14. **routing is a discipline, not a mechanism.** op_move() accepts any from/to. no enforcement. whether to add routing suggestions is a design decision.

15. **the selector is settled as a tree.** collapsible, global, file counts, shortcuts. works. the terrain-map idea was never built and isn't needed.

16. **document types are context frames.** naming carries context (type, scope, address, fold). a fresh session reads the name and knows its shape. observable fact, not aspiration.

17. **the lattice functions as a context engine.** documents carry context via naming. addressing gives structural meaning. folds preserve history. this is what it does.

18. **the tray works.** 6 slots, ctrl+click pin/unpin, popup reader with edit, sessionStorage. mechanism is clean.

19. **the console works.** list, read, move, fold, create, log, go, eval, clear, help. no history (missing convenience). power-user tool.

20. **view names match functions.** 0 library = content. 1 observatory = structure. 2 warehouse = routing.

---

## corrected (2)

these were marked settled in f2 but the user disagreed. moved to tasks.

**Q9 — universal folding.** f2 said: only files with naming convention fold. **correction:** every file should fold. even dumped files start at f0 on first fold. the server needs to handle files without fold numbers — folding them creates the f0 version with proper naming. this needs implementation, not just a convention change.

**Q16 — manifest identity.** f2 said: manifest is a transaction log, settled. **correction:** not settled. the manifest might be trying to do several jobs — transaction log, inventory, contract ledger. what it wants to be needs focused discussion before it can settle. the current stub (manifest.live.md) is scaffolding, not the system.

---

## floating → tasks (5)

these are open questions that resolve through building, not discussion. each maps to a task.

**Q7 — fold ceiling.** not built. proposed limit: 39+0 (the 3+9+27 checkpoint tree + origin). bounded depth forces cleanup. → task: implement fold ceiling.

**Q19 — verb map.** built but doesn't work visually. flat grid of 27 items, not a map showing flow. → task: View 1 rethink (verb grid is the main instrument to reconsider).

**Q20 — View 1 instrument set.** working set: card + identity panel + rings + minimap + ratio line + sierpinski. verb grid needs rethinking or removal. → task: View 1 rethink.

**Q22 — template stamping.** not built. server creates empty files. type-aware templates would save time and enforce consistency. any generated file gets f0.timestamp. → task: template stamping on create.

**Q24 — gates.** nothing enforced in code. everything is frictionless one-click. the three-grade system (hard/soft/none) is not implemented. only real gate so far is file movement. → task: work out gates through use.
