# dream.ux — settled questions

folded from f0 (~280 raw claims). each question below resolves a cluster of overlapping assertions from dream.ux.f1. answer settles the cluster.

---

## the three views

1. **what does View 0 do?** the dream called it: library, editor, workshop, text surface, file browser, "what things ARE." ~9 landed on: edit, fold, delete AT an address. is View 0 purely content (read/write text) or does it also show structural identity (triad, position links, register badges)? ~7 said strip structural info out. the current build still has structural info in View 0. [float]

2. **what does View 1 do?** the dream called it: studio, visualizer, observatory, surveyor's instrument, sandbox, playground, "what things DO." ~9 landed on: witness seat, seeing structure. does View 1 show files at all? ~7 said no file content, folders only. the current build has the card + rings + minimap + sierpinski + verb grid. is that the right set or does it need a rethink? [float]

3. **what does View 2 do?** the dream called it: office, gatekeeper, lifecycle manager, fold manager, warehouse. it was rewritten three times. ~8 said fold manager is the core. ~9 dissolved that — warehouse, routing + inventory. is View 2 just routing (pick file, pick destination, move) or does it also do fold management, auditing, scheduling, health monitoring? [float]

4. **do the three views overlap?** ~7 said no overlap — content / structure / lifecycle, completely separate. the current build has overlap: View 0 has structural info, View 2 has a file list. is strict separation the goal, or is some overlap practical? [float]

5. **are views lenses or rooms?** ~1 said lenses — frictionless switching, address stays, work stays. sections 1-4 said rooms — library, studio, office. which is it? does it matter for the build? [float]

---

## the fold system

6. **where does fold management live?** ~8 said View 2. ~9 said View 0 (since View 0 already handles fold/delete). the fold button is currently in View 0's editor bar. is that settled? [float]

7. **is there a fold ceiling?** ~8 designed bounded depth (3 or 9 or 27) with forced cleanup. this was never built. is the ceiling real or dream material? if real, what's the number? [float]

8. **is the fold system the ternary applied to time?** ~8 claimed exact self-similarity: fold 0 = branch, fold 1 = leaf, fold 2 = cell. is this a real structural claim or a poetic analogy? [float]

9. **does every file fold?** ~8 said universal — not just named documents. is this true in practice? do HTML files fold? images? or is folding only for documents with the naming convention? [float]

10. **where do you see fold history?** ~2 and ~8 said only in View 2 (fold management). ~9 dissolved View 2's fold manager. View 0 shows fold badges and expanded fold history already. is that enough? [float]

---

## the structure

11. **field or tree?** ~1 said field — flat, coordinates, no hierarchy. the keystone says branch/leaf/cell — that's a tree. the patchboard IS a tree (expand/collapse). is the structure a field that we navigate with tree UI, or is the tree the actual structure? [float]

12. **is 3 a frame or a limit?** ~1 said viewport, not wall — the structure is unbounded, 3 is imposed. the keystone says depth goes branch/leaf/cell and stops. is 3 the actual structure or a working frame that could expand? [float]

13. **inside or outside?** the surveyor said being inside (View 1) is the deeper reading. the Sphere's view (View 0, seeing everything) is shallow. but the patchboard is the most useful navigation tool. is the inside view actually deeper, or is that a metaphor that doesn't affect the build? [float]

---

## the HUD

14. **what is the HUD's job?** the dream called it: cockpit, mirror, persistent panel, two-reading holder. is the HUD just navigation (tabs + address + tray) or does it carry ambient state (branch color tinting, breadcrumb trail, room-aware emphasis)? [float]

15. **does the HUD hold two readings?** ~1 said digits and verbs are two readings of the same thing, the HUD holds both. the triad is already in the HUD. is this settled, or does the HUD need to do more to serve both readings? [float]

---

## the manifest and tracking

16. **what is the manifest?** the dream called it: live ledger, main display, record of what crossed the gate, the office's focus. the reality: manifest.live.md is a transaction log the server writes on mutations. it doesn't know about pre-existing files. is the current stub sufficient for now, or does the manifest need to become a real reconciled inventory? [float]

17. **is the routing 1->2->(0 or 1) real?** the keystone says so. the dream references it repeatedly. in practice, files move wherever they need to go. is the routing a discipline (soft suggestion) or a hard gate the system should enforce? [float]

---

## the instruments

18. **is the selector settled?** ~2 said settled. ~3 moved it to global scope. it works. but ~1 said it should feel like a terrain map, not a file tree. is the current patchboard the final shape, or does it need to become something else? [float]

19. **does the verb map exist?** dreamed in sections 1, ~2, ~4, ~7. the verb grid was built in View 1. the user said it's cluttered and doesn't help. is the verb map a real instrument that needs a better form, or is it dream material that doesn't serve the build? [float]

20. **what instruments does View 1 actually need?** the dream listed: card, rings, minimap, ratio line, bench, hands, dump pad, comparator, keyboard, verb map, density map, connection graph, structural visualizations. the build has: card, rings, minimap, ratio line, sierpinski, verb grid, keyboard. the user said verb grid is noise, sierpinski is signal. what's the actual instrument set? [float]

---

## document types and context engineering

21. **are document types context frames?** ~6 claimed documents carry the context that memory would do — the type IS the mode switch. is this an observation about how the work already functions, or an aspiration for how it should work? [float]

22. **should the server stamp templates?** ~5 and ~6 dreamed type-aware templates on create. not built. is this a real next step or deferred dream material? [float]

23. **is the lattice a context engine?** ~6's biggest claim. "not a project management tool — a context engine." does this describe what the lattice IS, or what it could become? [float]

---

## edge grades and gates

24. **are there real gates in the UI?** ~1 described three grades: hard (verified->spec), soft (typical routing), none (open ground). nothing in the current build enforces any gate. is this a design principle that should be built, or a conceptual frame that informed the dream but doesn't need implementation? [float]

---

## the tray and console

25. **is the tray settled?** 6 slots, ctrl+click pin/unpin, popup reader with edit, sessionStorage. the dream said: reference material, not bookmarks. is the current tray the final shape? [float]

26. **is the console settled?** lattice verbs, eval fallback. no command history. is this the right interface or does it need to grow? [float]

---

## naming

27. **are the view names settled?** 0 library, 1 observatory, 2 warehouse. these shifted multiple times (studio->observatory, office->warehouse). are these the final names? [float]
