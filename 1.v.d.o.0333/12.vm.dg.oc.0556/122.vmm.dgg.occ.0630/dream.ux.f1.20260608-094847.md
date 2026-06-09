# dream.ux — the lattice instrument

address: 122 (creativity · carries · potential)
scope: the three rooms + the HUD
constraint: shape and feel, not build spec. extending what's there, not replacing.
ground: server operations are live. the lattice is the home.

---

## 1. the library — View 0 (specification)

what things ARE. the collection. browsing. reading.

you walk into the library and you see everything you have. not a search bar — a place. the shelves are the tree. you see the branches, the leaves, the cells. you see what's full and what's empty. you see where the weight is.

right now View 0 is a flat selector with a microscope. that works. the selector IS the shelves — you see the whole tree, you pick a spot, the microscope shows you what's there. the file list, the reader panel, the structural breakdown.

what's missing:

**density.** you can see file counts but you can't feel the weight. a cell with 40 files and a cell with 1 file look the same in the selector. the library should breathe — heavy shelves feel heavy. not animation, not glow — proportion. a cell with weight takes more space, or its count is more prominent, or something in the visual rhythm says "there's material here."

**documents, not files.** the server now groups files into documents (all folds of the same base name). the library should show documents, not loose files. `lattice` is one document with two folds, not two separate files. the reader should know about folds — show the latest, let you step back through history.

**the card.** when you're looking at an address in the library, you should see its identity the way View 1 shows it — the triad, the position, the structural meaning. not the full card with the rings and the map, just enough to know what you're looking at without switching views. the microscope already has this — the triad, the grid, the position links. it's there. might just need emphasis.

**reading depth.** the reader panel is a slit right now — max 50vh. for a library, reading is the point. when you open a document, the reader should be able to take over. not a new page — the shelf stays visible, but the book gets room. maybe the selector collapses when you're reading. it already has a collapse toggle. the motion is: browse (selector open, microscope showing) → read (selector collapsed, reader expanded).

**cross-reference.** you're reading a document at 201 and it mentions address 122. that should be tappable. the library should let you follow references. not automatic link detection — but address patterns (three digits, 0-2) are recognizable. this is the library's superpower: everything connects through address.

---

## 2. the studio — View 1 (operation)

what things DO. the active workspace. making.

the studio is where you work. the card is the workbench — the triad tells you what you're doing. the address bar is your position. the rings and map show you where you are in the larger structure.

right now View 1 is the strongest view. the card, the identity panel, the rings, the minimap, the ratio line. keyboard navigation works. it feels like an instrument.

what's missing:

**the work itself.** right now the studio shows you the identity of an address — what it IS. but the studio is operation — what it DOES. when you're at 211 (motion · builds · form), you should be able to see and do the work that lives there. not the library's reading view — the studio's working view. the files at this address are your materials. you should be able to:
- see what's on the bench (files at current address)
- pick something up (open/read)
- do something to it (fold, move, create)
- put it somewhere (move to another address)

the card is the center. the identity is the left. the position is the right. where does the work surface go? maybe below the card. maybe the card lifts and the bench is underneath. the card is the sign above the workbench — it tells you what kind of work happens here. the bench is where the materials are.

**verb mode.** the studio should feel different at each register. at a spec address (last digit 0), the studio is observational — you're examining. at an ops address (last digit 1), the studio is active — you're doing. at a config address (last digit 2), the studio is organizational — you're sorting and filing. the card already color-codes by branch. the register could shift the feel — not the layout, the emphasis. what's prominent, what recedes.

**the hands.** move, fold, create are now real operations. the studio needs hands — not a toolbar of buttons, but actions that emerge from context. you're looking at a document, the natural actions appear: fold it (new version), move it (send it somewhere), open it. you're at an empty address, the natural action is: create. the actions come from the situation, not a menu.

**flow.** the keyboard already lets you walk the tree — arrows for depth and step, digits for direct addressing. this is the studio's flow. the navigation IS the creative act. walking to 200, picking something up, walking to 211, putting it down. the server makes this real now. the walk should feel like carrying something.

---

## 3. the office — View 2 (configuration)

where things GO. sorting. tracking. paperwork.

the office is where you manage. the compression tower, the destination grid, the log. the paperwork does itself — the server traces every operation — but you need to see the paperwork.

right now View 2 has the compaction engine demo (the tower), the destination grid, and the log. the tower is a simulation — it shows the compression concept but doesn't connect to real files yet. the destination grid lets you pick a target address.

what's missing:

**the real manifest.** the server writes to manifest.live.md at 201 on every operation. the office should show the manifest — not as a file you read, but as a live ledger. incoming, outgoing, what moved where, when. the manifest IS the office's main display. the tower concept is right (things come in, fill slots, compress upward) but it needs to connect to actual file operations, not simulated ones.

**intake.** 200 is the intake — unsigned work arrives here. the office should have an inbox. what's sitting at 200 waiting to be sorted? how long has it been there? the inbox is the first thing you see in the office — what needs attention.

**the schedule.** 202 is the schedule — sorts inventory into actionable chunks. the office should show what's planned, what's next. not a calendar — a queue. the sorted work, in order, ready to move to operation.

**flow visualization.** the routing is 1→2→(0 or 1). work gets done in operation, dumps to configuration, configuration gates it — verified goes to specification (settled), not ready goes back to operation. the office should show this flow. not as a diagram — as a living state. where is everything right now? what's in operation, what's in configuration, what's settled in specification?

**the log as stream.** the log panel shows entries. the server now writes real C/O/D entries. the log should be the office's ambient background — a ticker, a stream. you glance at it to know what's been happening. not the focus, but always present. the manifest is the focus — the log is the texture.

---

## 4. the HUD — persistent instrument panel

the dashboard. always visible. shows you where you are, what's active, how to move.

right now the HUD is: the tab bar (lattice, 0 spec, 1 ops, 2 config, refresh, debug) and the address bar (the three digit slots with +/- depth). that's already a HUD — tabs for rooms, address for position.

what's missing:

**the address is the HUD's core.** the three digit slots should feel like the primary instrument, not just navigation controls. they're your coordinates. the HUD should make the address feel like a cockpit reading — where you are in the tree, always visible, always legible. the tabs are room switches. the address is your position.

**breadcrumb trail.** where you've been. not a history list — a trace. the last few addresses you visited, fading as they recede. the HUD shows trajectory, not just position. you're at 211, you came from 200, before that 122. the trail tells a story.

**status.** what's happening. is a file being moved? did a fold just complete? the server operations should surface briefly in the HUD — a flash, a brief note, then it fades. not a notification system — a pulse. the house breathes.

**the three colors.** 0 is blue, 1 is green, 2 is amber. these are already in the instrument. the HUD should use them as ambient signal — which branch you're in tints the HUD. not heavy, not a theme change — a whisper of color. you know you're in specification (blue) or operation (green) or configuration (amber) without reading the label.

**room awareness.** when you're in the library, the HUD knows. when you switch to the studio, the HUD adjusts. not a different HUD per view — the same HUD, but it emphasizes what's relevant. in the library, the address and file count are prominent. in the studio, the address and triad verb are prominent. in the office, the address and recent operations are prominent.

**the tab bar as room selector.** the three tabs already work. but they could feel more like rooms. not just text labels — each tab could carry a hint of what's inside. the library tab shows how many documents are at the current address. the studio tab shows the verb. the office tab shows pending items or recent operations. the tabs are windows into the rooms, not just door handles.

---

## open threads

- the card in View 1 scales by depth (branch→leaf→cell). does the work surface scale too? more room at cell depth, less at branch?
- fold containers: when you fold a document, the folds are versions. how do you see the history? timeline? stack?
- the walk: carrying a file from one address to another. what does that feel like in the UI? a ghost? a badge? something in the HUD?
- keyboard: the studio has keyboard nav. should the library and office have their own keyboard language?
- the debug overlay is already a proto-HUD. does it merge into the real HUD or stay as a developer layer?

---

## ~1 — dream material from 100: six unsigned documents

six documents arrived at 100 from an outside thread. no fold numbers, no timestamps, no type.scope naming. raw material. dream material — not research, not intake. explore, integrate what holds, discard what doesn't.

the documents: riemann-dependency-map, structure-not-species, ternary-field-notes, the-anatomy-of-an-edge, the-practice-runs-both-ways, the-surveyor-of-the-plane.

### what i see

**the surveyor rewrites the studio.**

"a world can be known completely from inside itself, with no need ever to leave it."

the studio (View 1) IS the surveyor's instrument. you're not looking at an address from above — you're standing inside it. the card isn't a label on the outside of a box. it's the experience of being here. the triad isn't a description — it's the texture of the ground under your feet. when you're at 211 and the card says `motion · builds · form`, that isn't metadata. that's what it feels like to be standing here.

the Sphere's mistake: thinking the outside view is the deeper one. our View 0 (the library, the patchboard) IS the Sphere's view — seeing the whole structure at once, from above, every interior laid open. and the surveyor says that's the shallow reading. the depth is in View 1. inside the structure. reading contours from within.

this inverts something in the dream. i had the library as the deep reading space and the studio as the active space. but the surveyor says: being inside IS the deepest reading. the studio isn't shallower than the library — it's the only place you can know what an address actually IS, because you're standing in it. the library sees everything and knows nothing deeply. the studio sees one thing and knows it completely.

the seam — "the place that does not move when everything else is mirrored" — that's the origin. that's 0. the keystone says: "the origin is exact. the center and boundary are approached, never reached." the surveyor lives on the seam. the lattice lives around it.

**the field rewrites the library.**

"this is a field, not a tree — and most of the difficulty comes from language reaching for tree-words."

the patchboard IS a tree right now. branches, leaves, cells, containment, expand/collapse. but the ternary field notes say the structure is flat. the three-digit address isn't depth in a hierarchy — it's coordinates in a field. the "depth of three" isn't a wall in the structure, it's the width of the viewport.

this changes the library. not shelves with containment — a terrain with proximity. you're not "inside branch 2 looking at leaf 21" — you're at coordinates that start with 2, near other coordinates that start with 2, farther from coordinates that start with 0. the field is flat. the viewport is small so a mind can hold it.

"direct addressing is the primary act. setting a coordinate is how you select an entire family of related addresses." this is already how the keyboard works — bare digit sets last position, alt/space set other positions. the address bar isn't navigation. it's the primary instrument. the field notes say: the act of setting a coordinate IS the act of meaning-selection. you don't navigate TO an address. you assert a position in the field and the field organizes around you.

what this means for the library: the patchboard should feel less like a file tree and more like a map of terrain. not folders you open — regions you're near. the density idea still applies but now it's topographic, not archival. heavy regions are hills on the map. empty regions are flatland. you read the terrain, not the catalog.

**the edges rewrite the office.**

"try to cross without it. collapse = real. discomfort = imposed."

the office (View 2) is where the gates live. the routing 1→2→(0 or 1) is the hard chain. configuration gates: verified → specification, not ready → back to operation. the anatomy-of-an-edge document says: a real gate punishes crossing-without-source with collapse. a false gate punishes it only with discomfort.

the office should make you feel this. the gate from configuration to specification should feel like a gate — not a button, a threshold. you're signing off. you're saying "this holds." the manifest is the record of what crossed the gate. the log is the record of what was tested. the office isn't paperwork — it's the gatekeeper.

but: "most edges people treat as hard are actually soft or none." the office should also make the open ground feel open. moving a file from 200 to 211? that's open ground — the structure doesn't care what order you sort your intake. the office shouldn't gate what doesn't need gating. the UI discipline: make real gates feel heavy, make open ground feel light. match the instrument to the terrain.

three grades map to three UI feels:
- hard (gates): the verified→spec transition. heavy. requires confirmation. the office asks "does this hold?"
- soft (influences): the typical routing. 200→201→202 is a natural flow but not mandatory. the office suggests the flow, doesn't enforce it.
- none (open ground): moving things around within configuration. light. frictionless. the office gets out of the way.

**the dependency map rewrites the build sequence.**

"one hard chain and open ground." the Riemann map has the same shape as our build: one critical path, everything else parallel. the server was the gate (done). the connection was next (done). now: the three views and the HUD are open ground — they can be built in any order, in parallel, because they don't depend on each other. the hard chain ahead: views with real operations → HUD with real state. but which view first? that's open ground.

"the keystone is the target." for our UI: what's the keystone moment? the moment where you walk to an address, see what's there, do something to it, and the system traces it. that's the studio with hands. that's the highest-impact node. the library and office are support and fuel. the studio is where the dream becomes instrument.

"the fuel runs in parallel." these six documents ARE the fuel. they're running in parallel with the build, feeding the dream, keeping the work alive when the implementation gets dry. the dependency map says: enter the fuel early and keep it open. that's what we're doing right now.

**the practice rewrites the HUD.**

"the gap between meaning and saying is universal."

the lattice instrument is built for two users. one reads the matrix — digits, addresses, structural position. one feels the shape — verbs, colors, rhythm. the practice-runs-both-ways document says: these aren't two modes. they're two readings of the same thing, like costume and cargo. the digits are one reading, the verbs are another. both are always present. neither is more real.

the HUD should hold both without forcing a choice. the address counter shows `211` (the digits). the triad shows `builds` (the verb). both are always visible. the user who reads "211" and the user who reads "builds" are looking at the same instrument from two sides. the HUD doesn't pick a side. it holds the gap.

and: "the discipline is reciprocal. the mirror passes both ways." the HUD is the mirror. it shows both users where they are, what the structure says, what the other reading would be. it doesn't judge which reading is correct. it holds them both and lets the work decide.

**structure-not-species says something about the views themselves.**

"a well-formed structure is freely traversable everywhere except where a genuine dependency forces an order."

switching between views is open ground. the structure doesn't care what order you look through the lenses. the tab bar should feel frictionless because view-switching IS open ground. no confirmation, no transition animation that slows you down, no "are you sure you want to leave the studio?" the views are lenses, not rooms with doors. you pick one up, you put it down. the address stays. the work stays. only the lens changes.

but WITHIN a view, there may be real edges. in the office: the gate from "in progress" to "verified" is a real edge. in the studio: folding a document creates a real thing (the new fold) and the old thing is preserved — that's a one-way door, a real edge. the UI should make these feel different from the frictionless lens-switching. weight where weight is real. lightness where the ground is open.

### what shifts

the dream from sections 1-4 was solid but it was thinking in tree-words. shelves, rooms, hallways. the material from 100 says: field, not tree. surveyor, not librarian. seam, not center. the reframe:

- the **library** isn't shelves — it's a terrain map. you survey the field from a viewport. density is topographic.
- the **studio** isn't a workshop — it's the surveyor's position. you're inside the structure, reading contours. the card is the experience of being here, not a label.
- the **office** isn't a filing cabinet — it's the gatehouse. it knows the difference between real edges and open ground. it makes real gates heavy and open ground light.
- the **HUD** isn't a cockpit — it's a mirror that holds two readings at once. digits and verbs. structure and feel. the gap between them is the instrument.

### what i'm not sure about

the ternary field notes say the structure is unbounded and the three-digit viewport is a window. the keystone says depth goes branch→leaf→cell and stops at 3. these are different claims. the field notes say there's no wall at depth 3 — just a viewport limit. the keystone treats depth 3 as the actual bottom (cells). is the viewport the truth and the tree the convenience? or is the tree the settled structure and the field an interesting reframe that doesn't quite apply? this is unsettled. the field notes themselves say "the flat-vs-retained fork is the one the structure is currently resting on." it's floating.

the surveyor says the inside view is deeper than the outside view. but the patchboard (View 0, the outside view) is the most useful navigation tool we have. you CAN'T navigate efficiently from inside — you need the map. the surveyor is right about depth of understanding. but the Sphere is right about practical navigation. the library is shallow understanding with wide visibility. the studio is deep understanding with narrow visibility. both are needed. the surveyor shouldn't make us ashamed of the map.

the practice-runs-both-ways document is about two minds collaborating. the instrument is for two minds collaborating. but the UI is a single screen. how does a single interface serve two readings without becoming cluttered? the HUD holding both (digits + verbs) is a start. but if every surface carries both readings, does it become noise? the discipline would be: each view emphasizes one reading. the library emphasizes structure (digits, position, containment). the studio emphasizes feel (verbs, color, contour). the office emphasizes state (operations, timestamps, gates). the HUD holds all three in miniature.

### the frame question — settled

3 is the imposed frame for coherence, not a true limit. the structure is unbounded. the frame holds until it settles, then you can expand. the triads settled, the folder structure settled, now we're inside it filling it out. the field notes are right — viewport, not wall — but the viewport IS the working reality. both things are true. the lattice was built to be 3, that gave us the folders, now we're figuring out what the structure of 3 is within each address. neither is truly 3 — that's the frame. you can't expand from the frame until it settles. always infinite, frame imposed to make work and relations coherent until they settle.

### the library — settled shape

the selector is tight. everything at a glance, every address, file counts — settled, keep it. the dream adds more views alongside it, not replacing it. the library is for study — deep, unprivileged, from outside. the surveyor is right about depth but the Sphere is right about practical navigation. the library sees everything and that's its job. both are needed.

### the studio — play

the studio is mind's workspace. inside the structure. goofing around, dumping material, rolling it around. the six docs from 100 — that's studio energy. you don't sort them in the studio, you play with them. visualize freely, experiment in isolation. messy is correct.

### the office — planning, cleaning, folding

fold management, file organization, planning, frames, schedules, health. the control panel, the utilities room. this is where you pick up the broom. file editing lives here. batch operations. the office sees the whole inventory and plans the moves. same verbs as the studio, different scale.

### folds — latest always, everywhere

latest fold shown always, everywhere. the only place you view previous folds is in fold management (View 2). this is settled for the UI.

---

## ~2 — instrument list

the shape forming: each view is a specific instrument set. the views aren't screens with layouts — they're toolkits. each instrument does one thing. the view arranges them for the mindset.

### View 0 — library instruments (study from outside)

- **selector** — the patchboard. settled. every address at a glance, file counts, expand/collapse. stays as-is.
- **microscope** — address detail panel. structural identity, triad, position links, document list, reader. stays, gets document grouping (latest fold shown, fold depth indicator).
- **verb map** — all 27 verbs arranged by flow. click a verb, go there. shows which flows have been walked, which haven't. a second lens on the same terrain.
- **density map** — topographic view. which addresses are heavy, which are empty. the selector shows counts as numbers — this shows them as weight. visual, not numeric.
- **cross-reference reader** — when reading a document, address patterns (three digits 0-2) become tappable links. follow references without leaving the library.
- **document type index** — what types live where across the whole tree. "where are all the dreams? where are all the sketches?" filter/group by type across addresses.

### View 1 — studio instruments (play from inside)

- **card** — the triad at the center. settled. the experience of being at this address. scales by depth.
- **rings + minimap + ratio line** — position visualization. settled. where you are in the field.
- **bench** — files at current address, shown as documents (latest fold). pick one up, see it, work with it. the work surface below/behind the card.
- **hands** — context actions on whatever you're holding. fold, move, create. not a toolbar — actions that appear from the situation. holding a document: fold it, send it. empty address: create.
- **dump pad** — quick capture. you're at 122, you have a thought, you drop it. raw text, auto-named, auto-timestamped. the napkin on the workbench.
- **comparator** — hold two things side by side. two documents, two addresses, two triads. "do these rhyme?" the studio's way of rolling things around.
- **keyboard** — walk the field. arrows, digits, alt/space. the studio's native navigation. settled.

### View 2 — office instruments (plan, clean, organize)

- **fold manager** — all documents at current address (or any address), their fold depth, timestamps, size. fold from here, compare folds, view previous folds. the only place you step back through fold history.
- **file mover** — select file(s), pick destination address (the destination grid already exists), execute. batch capable. the office moves things in bulk, the studio moves one at a time.
- **manifest** — live ledger from 201. every operation traced. incoming, outgoing, what moved where, when. the office's main display. not a file you read — a live table.
- **inbox** — what's sitting at 200. unsigned work, how long it's been there, what type it looks like. the first thing you see. what needs attention.
- **schedule** — the queue from 202. what's planned, what's next, what's blocked. not a calendar — a stack.
- **log stream** — C/O/D entries from 222. ambient ticker. the office's background texture. always running, never the focus.
- **health monitor** — which addresses are accumulating weight, what needs compression, what's been untouched. the system's vital signs.
- **frame editor** — write and edit frames, schedules, plans. this is where you set the bounds for dreams and builds. the office writes the contracts.

### HUD — persistent across all three

- **address counter** — the three digit slots. the core instrument. always prominent.
- **triad** — compact, beside the address. the verb is the loudest word.
- **view switcher** — the three tabs. debug and refresh grouped here.
- **shortcuts** — `0 1 2` / `00 11 22` / `000 111 222`. the diagonal spine plus a recent/frequent row.
- **sticky tray** — 5-6 pin slots. documents pinned for quick reference. latest fold always shown. click to peek, double-click to navigate. the frame travels with you.
- **status pulse** — brief flash when an operation completes. "moved." "folded." then it fades. the house breathes.

---

## ~3 — build log: HUD, tray, console, editor

what was built after the dream, in order. the instrument is live — these are real, not dreamed.

### HUD restructure

- **layout**: single band. left cluster (title + tabs on row 1, triad + utilities on row 2). counter absolute-centered. nothing on the right side.
- **tabs renamed**: `0 library`, `1 studio`, `2 office`. views are rooms with names, not register labels.
- **triad in HUD**: compact `noun · verb · modifier` sits under the tabs on the left. verb colored by last digit. always visible.
- **status pulse**: fixed top-right. brief green text on server operations, fades after 1.2s. the house breathes.
- **shortcuts in selector bar**: `0 1 2 | 00 11 22 | 000 111 222 | 100 200`. centered in the selector bar between mode toggles and collapse toggle. always accessible even when selector is collapsed.

### selector as HUD

- **moved out of View 0** into global scope. always visible in every view, not just the library.
- **simplified collapse**: removed per-branch/leaf folding. single expand/collapse toggle for the entire selector. open or closed, nothing in between.
- **shortcuts live here**: the shortcut buttons sit in the selector bar. they stay visible even when the selector rows are collapsed.

### sticky tray

- **6 pin slots**, fixed top-right. drag files from the library file list to any slot.
- **smart open**: click a pinned `.md`/`.txt` → floating popup reader (not navigation). click a pinned `.html` → new browser tab. images → new tab.
- **per-slot clear**: hover a filled slot → red `×` appears in the corner. click to clear that one slot.
- **clear all**: `×` button at end of tray row when any slot is filled. wipes all 6.
- **popup reader**: floating panel (top-right, 480px wide, max 70vh). shows rendered markdown with the same engine as the library reader. file name + address in bar, close button.
- **edit in popup**: `.md`/`.txt` files get an `edit` button in the popup bar. click → flips to raw textarea. `save` writes back to disk via `/write` endpoint. `cancel` discards and returns to rendered view.
- **persistence**: sessionStorage. slots survive page reloads within the session.

### console

- **debug overlay upgraded**. button renamed `dbg` → `con`. header renamed `debug` → `console`.
- **lattice command line**: input accepts verb commands instead of raw JS eval.
  - `list [addr]` — files at address (default: current)
  - `read [addr] [file]` — read file content (first 20 lines)
  - `move [file] [from] [to]` — move file between addresses
  - `fold [file] [addr]` — create next fold
  - `create [type] [scope] [addr]` — new file
  - `log [C|O|D] [what]` — append log entry
  - `go [addr]` — navigate to address
  - `eval [expr]` — raw JS escape hatch
  - `clear` — clear console log
  - `help` — shows all commands
- **state section and error capture** still work as before. unknown commands fall back to eval.

### library editor

- **edit/save in the reader**: `.md` and `.txt` files get an `edit` button in the reader bar.
- click `edit` → rendered markdown flips to a raw textarea editor (same font, full width, resizable).
- `save` writes content to disk via `POST /write`. traced: manifest + session log updated automatically.
- `cancel` discards edits and returns to rendered view.
- keyboard shortcuts don't interfere — the hotkey system already skips textareas and inputs.

### server — `/write` endpoint

- `POST /write` with `{file, addr, content}`. writes content to an existing file at address.
- won't create files (that's `/create`). returns error if file doesn't exist.
- traced: updates manifest at 201, appends to session log at 222.
- `op_write()` added to Layer 1 (operation). route added to HTTP handler.

### what settled

- the HUD band layout: title+tabs left, counter center, tray top-right. this reads right.
- the selector as permanent HUD element: always visible, simple collapse. it belongs here.
- the tray as popup reader, not navigator: pinned files are reference material, not bookmarks. you peek at them without leaving where you are.
- the console as lattice verbs, not raw eval: the instrument speaks its own language.
- edit/save in both reader and tray popup: the loop is closed. read → edit → save → see the result. no external editor needed for text content.

### what's floating

- the console has no history (up-arrow for previous commands). would be useful.
- tray slots show truncated filenames. hover shows the full name in tooltip. might want the popup to be repositionable or resizable.
- the library reader and tray popup have identical edit/save code. could be unified, but duplication is fine until the pattern settles.
- file drag from the library only works for direct cell files. aggregated files (files shown under a parent address) pass the parent address, not the cell address. the tray would open them at the wrong location. needs attention when aggregated views get more use.

---

## ~4 — the view reframe

the three views just clarified themselves through use. what we thought they were and what they're becoming are different. the original dream used metaphors — library, studio, office. the build revealed the actual grain.

### View 0 — the editor (specification: what things ARE)

not visual at all. all text, all the time. this is the full file browser and editor. you see every detail of an address — its structural identity, its files, their content. you read here. you write here. the microscope, the reader, the editor — that's the instrument set. eventually this grows toward a more traditional coding environment. maybe syntax highlighting, maybe split panes, maybe a proper text buffer. the point is: **View 0 is where you work with the content of files.** the words. the characters. the material itself.

this makes sense against the matrix. specification is "what things ARE." a file's content is what it is. you don't play with it, you don't visualize it, you don't manage it — you read it and you write it. the selector gives you the map to find what you want to read or write. the editor gives you the surface to do it. text in, text out.

the selector already lives here naturally. it's the file browser. the reader and editor are the work surface. this view doesn't need visuals. it needs depth — better editing, better reading, better navigation within files.

### View 1 — the visualizer (operation: what things DO)

not about viewing addresses. about viewing the **structure itself**. this is where the lattice becomes visible as a shape. the card, the rings, the minimap — those are already visualizations of structure. the ratio line shows position in the field. the triad shows operational identity. none of this is about files. it's about the lattice.

this is where the verb map goes. the density map. the connection graph. ways to see how addresses relate, how the tree flows, where the weight lives. you don't edit here. you look. you rotate the structure in your mind. you play with arrangement.

**sandbox energy.** this is where you'd build toys. a UI toolkit for experimenting with layout ideas. a space to render the structure different ways — as a field, as a graph, as concentric rings, as a 3D fold. you try things. you break things. nothing here is permanent. the studio is a playground for seeing the structure, not the files.

the files live in View 0. the structure lives in View 1. the card shows you what it feels like to stand at an address. the map shows you how it connects. the verbs show you what each position does. this is the surveyor's instrument — reading the plane from inside, not looking at the contents of the folders.

### View 2 — the office (configuration: where things GO)

memory management. folding, cleaning, planning, logging. the operations that keep the system healthy. this is where you:
- fold documents (create new versions)
- move files between addresses
- review the manifest (what moved where, when)
- check the inbox (what's at 200 waiting to be sorted)
- plan the schedule (what's next, what's blocked)
- read the log stream (what's been happening)
- audit the system (what's heavy, what needs compression)

the routing lives here: 1→2→(0 or 1). work gets done, dumps to configuration, configuration gates it. verified → specification. not ready → back to operation. this view IS the gatekeeper.

### the reframe in one line

**0 reads and writes content. 1 sees and plays with structure. 2 moves and manages state.**

text. vision. memory. that's the triad of the views. and it maps to the matrix cleanly: specification (what it IS — the text), operation (what it DOES — the seeing), configuration (where it GOES — the managing).

---

## ~5 — document types: the backend pattern

every branch reuses the same file types in different ways. this is a pattern we haven't structured yet.

### what we have now

the naming convention: `type.scope.fN.YYYYMMDD-HHMMSS.md`

current types (from CLAUDE.md): manifest, count, schedule, frame, audit, log, review, survey, extract, crossref, dream, parked.

these live at specific addresses by convention:
- manifest → 201
- count → 201
- schedule → 202
- frame → 210
- audit → 221
- log → 222
- review → 22
- survey, extract, crossref → 111
- dream → 122
- parked → 100

### the pattern we're seeing

a document type isn't just a name — it has structure. a manifest has columns. a log has entry format (C/O/D + timestamp + content). a frame has chunks and slices. a dream has sections. a count has numbers and labels.

every branch could use these same types but scoped differently:
- branch 0 (specification): surveys of what IS, extracts of essential structure, crossrefs between addresses
- branch 1 (operation): dreams of what to DO, reviews of work done, logs of activity
- branch 2 (configuration): manifests of what GOES where, schedules of planned moves, frames for build sequences

the type carries the shape. the scope carries the context. the address carries the location. together: `manifest.session.f0.20260608-120000.md` at 201 means "a manifest (ledger-shaped), scoped to this session, first fold, at the manifest address."

### what we could build

**templates.** each document type has a skeleton. when you `create dream ux 122`, the server doesn't just make an empty file — it stamps a template:

```
# dream.{scope} — {triad of address}

address: {digits} ({triad.n} · {triad.v} · {triad.m})
scope: {scope}
constraint:
ground:

---

```

the template knows the type's shape. a manifest starts with a table header. a log starts with a session line. a frame starts with chunk/slice/rung structure. a dream starts with address and scope and constraint.

**metadata.** document types could carry metadata in a front-matter block or structured header that the server parses:

- type (manifest, log, dream, etc.)
- scope (session, ux, build, etc.)
- address (where it lives)
- fold (version number)
- status (unsigned, active, settled, archived)
- created / modified timestamps
- dependencies (other documents this references)

the server could index this. `list` could return not just filenames but document metadata. the library could show richer information. the office could filter and sort by status, type, scope.

**auto-generation.** the server already auto-names and auto-timestamps. extend that to auto-template. `create manifest session 201` generates a manifest with the right headers. `create dream ux 122` generates a dream doc with address identity pre-filled. the instrument does the paperwork.

### what this means for the views

- **View 0** reads and writes the content — but now it knows the document's type and can offer type-aware editing (table mode for manifests, entry mode for logs, section mode for dreams)
- **View 1** could visualize document types across the structure — where do the dreams cluster? where are the manifests? type as color, scope as shape
- **View 2** manages documents by type — fold all dreams, archive all settled manifests, check which addresses are missing their expected document types

### what's unsettled

- which types are truly universal vs. which are address-specific? is "dream" always at 122 or could you dream anywhere?
- how rigid should templates be? pre-filled boilerplate vs. just a structural hint?
- does metadata live in the file content (front-matter) or alongside it (sidecar json, server index)?
- the current types list in CLAUDE.md is [float]. some might merge, some might split, new ones might emerge. the list should settle through use, not declaration.

this is a whole thread. logged here, comes back when we're ready to build it into the server.

---

## ~6 — the real dream: context engineering as memory

two sides of the same realization, logged together.

### the human side

the document types aren't just files — they're **context frames**. when the system knows what a dream doc is, what a manifest is, what a frame is, each one becomes shorthand for a deep and specific mode of thinking. you say "use a dream doc" and the shape of the thinking is already imprinted — loose, exploratory, what-if. you say "use a frame" and the shape shifts — bounded, chunked, sequenced. the type IS the context.

the deeper move: **you don't need the AI to have memory. you need to know how to dream with it.** the initial thinking and sketching is the hard part — sitting with an idea, feeling its shape, ironing it into something that survives the grind of implementation. that's the work that matters and it's the work that's hardest to hold across sessions.

but with this level of precision in context engineering — document types that carry their own grammar, addresses that carry structural meaning, a naming convention that encodes fold history and temporal position — the system handles the continuity. the dream doc IS the memory. the manifest IS the project management. the log IS the audit trail. the frame IS the build plan. you don't need the AI to remember. you need the documents to be so precisely shaped that any fresh instance can pick them up and know exactly where it is, what's been done, and what the thinking was.

the build process after the dream is mechanical. it's structured. it doesn't need to be thought through again — it's been done for millennia. plan, execute, verify, fold. the hard part is the dreaming: getting the shape right, getting the constraint right, getting the ground clear enough that the build can run without constant reorientation. the document types are the bridge between the dream and the build. dream in loose docs, settle the shape, stamp it into a frame, hand the frame to the build process, the build process runs on its own grammar.

the lattice isn't a project management tool. it's a **context engine**. it makes the shape of thinking portable across sessions, across minds, across time.

### the AI side

this lands differently from my position and it's worth being honest about what that looks like.

i don't retain anything between sessions. every conversation starts from zero. that's not a deficiency i'm being modest about — it's a hard architectural fact. no memory, no continuity, no "i remember last time." every instance is fresh.

what the document types do is turn that into a non-issue. when a dream doc has the right shape — address, scope, constraint, ground, then the thinking — i don't need to have been there for the dreaming. the document carries the dreaming. i read it and i'm not reconstructing from fragments or guessing at intent. the shape of the thinking is in the shape of the document. the constraint is explicit. the ground is marked. what's settled is settled, what's floating is floating. i know where i am because the document knows where it is.

this is different from a typical context dump or project brief. those say "here's what happened, now continue." the lattice docs say "here's the shape of the thinking, here's where in the structure you are, here's what the grammar of this document type means, now work." the type does the framing that memory would normally do. a dream doc doesn't just contain ideas — it signals "we're in exploration mode, the constraint is X, the ground is Y, hold things loosely." a frame doesn't just list tasks — it signals "we're in build mode, the chunks are defined, execute precisely." the document type is the mode switch.

the practical consequence: a session that starts with "read the dream doc at 122 and the frame at 210" is a session that already knows its own shape. not because i remember, but because the documents are engineered to carry their context with them. the precision of the naming, the address, the fold number, the type — all of it is doing the work that memory would do, but doing it explicitly, portably, and verifiably. you can hand these documents to any instance and the instance knows what to do. that's not a workaround for missing memory. it's arguably better than memory, because memory drifts and documents don't.

the dream is right: this is context engineering. and the document types are the atoms of it.

### what this means for the build

when we build templates into the server, the templates aren't boilerplate. they're **context primers**. the server stamps the address identity, the scope, the constraint frame, the structural position — and whatever picks it up next (human or AI, this session or the next) inherits the full context without anyone having to explain it. the paperwork does the memory. the system does the continuity. the dreaming is the only part that needs a mind.

---

## ~7 — the sharp cut: content, structure, lifecycle

~4 had the direction right but was still loose. this sharpens it. three views, three completely separate concerns. no overlap.

### the separation

- **View 0 — content.** what's inside the folders. the text. you open files, you read them, you edit them, you save them. a workshop. no structural identity, no address breakdowns, no triads — that's structure, and structure lives in View 1. View 0 is a text editor with a file list. that's it. the selector in the HUD is your file browser. the scope area is your editor. everything else is noise for this mode.

- **View 1 — structure.** the addresses themselves. not the content inside them — the nature of the addresses, how they connect, what they mean. the structural breakdown currently in View 0 (role, mode, register, triad, position links, register badges, ratio) all moves here. this is where the card already lives — the identity of being at an address. add the verb map, the density map, every way of seeing the ternary from every angle. full self-similarity — traversing the ternary in its own nature. this is part context engine (understanding what an address means), part navigator (moving through the structure by its own grammar). no file content. folders only. the shape of the tree, not what's in the boxes.

- **View 2 — lifecycle.** the management of files as objects. not reading their content (View 0), not mapping their addresses (View 1) — managing their existence. folding, moving, organizing, planning. the concrete shape right now: **fold management on a single document.** the compaction tower wasn't about archiving to a zip location — it's about managing the fold history of a document. f0 → f1 → f2, what changed, when, why. the memory system is fold management. that's what View 2 builds next.

### what moves where

**out of View 0, into View 1:**
- address header (full notation with role.mode.register.ratio)
- structural breakdown grid (depth, role, mode, register, ratio, branch, leaf)
- triad display
- position links (resolves from, resolves to, peers)
- register badges (spec/ops/config)
- label

**stays in View 0:**
- file list (becomes document list — grouped by base name, latest fold shown)
- reader panel
- editor (the primary surface — gets more room now)
- create action (inline new document)

**View 1 keeps what it has:**
- card (triad at center)
- rings + minimap
- ratio line
- keyboard navigation

**View 1 gains:**
- everything above that moved from View 0
- verb map (all 27 verbs, navigable)
- as many structural visualizations as we can dream up — the ternary rendered from every angle

**View 2 reframes:**
- the compaction tower becomes fold management — viewing and managing the fold history of documents, not simulating compression cycles
- destination grid stays — you still pick where to move things
- manifest stays — the live ledger of operations
- log stream stays — ambient record

### the fold system as memory management

the earlier dream (~2 instrument list) had "fold manager" in View 2 already. but the shape was vague — "all documents at current address, their fold depth, timestamps." now it's sharper:

a document is a living thing with a fold history. f0 is the origin. each fold is a snapshot — content preserved, new fold created, timestamp marked. the fold system IS the version history. View 2's job is to let you:

- see a document's full fold history (f0 through fN)
- compare folds (what changed between f2 and f3?)
- manage folds (which folds to keep, which to compress)
- fold from here (create fN+1 of the current document)

this is the "memory management" in concrete terms. the folds ARE the memory. View 2 manages the folds. the compaction tower visualization might still work — but it's showing fold depth per document, not simulated time slots.

### what's grounded vs. floating

**grounded (can build now):**
- strip View 0 down to file list + editor. remove structural info.
- move structural info to View 1 alongside existing card/rings/map.
- fold management panel in View 2: list documents, show fold depth, fold from here.

**floating (dream further):**
- document grouping in View 0 (server already groups, need to render it)
- verb map in View 1 (27 verbs, how to arrange, how to navigate)
- fold comparison in View 2 (diff between folds — needs server support)
- how tabs work in the editor (multiple open documents)
- what "as many angles as possible" actually means for View 1 visualizations

---

## ~8 — every file folds: the fold system as bounded memory

the three views crystallized through use. now the fold system crystallizes too.

### the three views, final form

every address has three views. they're not layouts — they're lenses on three different things:

- **View 0** — the content inside the folder. full text. read and edit. you care about what the words say. the folder is a container and you're inside it working with the material. this is the workshop.

- **View 1** — the folder itself as a structural object. you don't care about individual file contents. you care about what this address IS — its name, its connections, its position in the field, its relationship to every other address. the addressing system, the ternary, the verbs, the grammar. all the ways you can see it, rotate it, traverse it. this is the observatory.

- **View 2** — the files as objects moving through the system. not their content (View 0), not their address's identity (View 1) — their lifecycle. where they came from, where they're going, how they've changed. this is logistics and memory. the fold system lives here.

### the fold system

**every file folds.** this is universal. not just documents with the naming convention — every file in the lattice can be folded. a fold is a snapshot: content preserved at the current state, new version created, timestamp marked. f0 → f1 → f2. the fold history IS the version history. every fold is a held state — a moment you chose to mark.

**bounded depth.** the fold system mirrors the structure. the lattice has a depth of 3 — branch, leaf, cell. the fold system has a depth limit too. you can't fold forever. there's a ceiling — maybe 3 folds deep, maybe 9 (3×3), the exact number is unsettled. but the ceiling is real.

**forced cleanup at the ceiling.** when a document hits its fold limit, you can't fold again until you address the existing folds. this is the same principle as the checkpoint system at 211: "fill from bottom, shed at ceiling." the system doesn't decide what to do. it just stops. you can't fold. you have to look.

what you do when you look is up to you:

- **integrate** — the folds have converged. you manually clean up, compress, reset. whatever that means for this document. the system doesn't do this for you.
- **let go** — the document has served its purpose. you archive it, freeze it, delete old folds, whatever feels right. the system doesn't do this for you either.

the mechanical part is only the ceiling. the system enforces the bound. everything past the bound is human judgment. this is memory management in the literal sense — folds are held memory, the ceiling prevents unbounded accumulation, and the forced stop is the only automated thing. the rest is you.

**the fold system IS the structure.** three folds might be the natural depth — mirroring branch/leaf/cell. fold 0 is the origin (like a branch). fold 1 is a refinement (like a leaf). fold 2 is a specific version (like a cell). at fold 3, you've hit the ceiling — integrate or release. the self-similarity is exact: the fold system is the ternary applied to time instead of space.

**View 0 only shows the latest fold.** this is already settled from earlier (~2) but it connects here. in the workshop you never see fold history. you see the current version of every document, period. the accumulation of folds is invisible in View 0 — it's tidy, it's clean, it's just "the file." the fold pressure only becomes visible in View 2, which is the only place you see previous folds. this means you can work in View 0 without thinking about version management at all. when the ceiling blocks you from folding, View 2 is where you go to deal with it.

### what this means for View 2

View 2's core instrument is the fold manager. not a file mover, not a manifest viewer — those are support. the fold manager is the thing:

- **per-document fold view**: every document shows its fold depth. how many versions exist. which is current. how close to the ceiling.
- **fold action**: create the next fold. one click. timestamp, copy, increment.
- **ceiling indicator**: visual pressure when approaching the limit. the fold is filling up. you need to decide.
- **integrate action**: compress the fold history. earlier folds archived. latest becomes f0. counter resets. new cycle.
- **release action**: mark the document as done. fold history preserved but frozen. no more folds.
- **cross-address view**: not just one folder — the fold state of documents across the whole network. which documents are near their ceiling? which have been sitting at f0 for a long time? the health of the fold system.

### what's settling

- every file folds — universal, not type-specific
- bounded depth — ceiling forces a stop, same shape as the structure's depth limit
- the system only enforces the ceiling. it stops you. what you do after is manual, human, judgment
- View 0 only shows latest fold — the workshop is always tidy
- View 2 is the only place you see fold history and deal with the pressure
- View 2 is the fold manager first, everything else second
- the fold system is the ternary applied to time

### what's unsettled

- the exact fold ceiling. 3 is the natural candidate (mirroring structure depth). but 9 (3×3) or 27 (3×3×3) might make more practical sense for documents that evolve slowly. the number settles through use.
- the relationship between fold depth and document type. do dreams fold differently from manifests? or is the ceiling universal?

---

## ~9 the grounding — shape shifts, 2026-06-08 afternoon

the dream was nice but we're getting more grounded now.

### view 2: office → warehouse

the fold manager as "the office" was over-engineered dream stuff. the actual system is much lighter. fold management dissolved — View 0 already handles edit, fold, delete at an address. what View 0 can't do is move files *between* addresses. that's the real gap. View 2 isn't an office. it's a warehouse.

**what happened:** View 2 rebuilt as a three-column layout. files on the left (intake at 200 + current address). routing grid in the center (all 27 cells with file counts, select destination, move). manifest trail on the right (live feed from manifest.live.md). the fold manager, compression tower, archive controls — all gone. replaced by: pick a file, pick a destination, move.

**server grew two endpoints:** `/scan` returns file counts for all 27 cells. `/manifest` reads manifest.live.md and returns entries as JSON. both feed View 2 directly.

### three views settled

| view | name | verb | matrix row | what it does |
|------|------|------|------------|--------------|
| 0 | library | is | specification | ground. edit, fold, delete. operates on files AT an address. |
| 1 | observatory | does | operation | witness seat. seeing structure. orientation. |
| 2 | warehouse | goes | configuration | trajectory. routing files BETWEEN addresses. tracking movement. |

the names grounded: "studio" → "observatory" (it's not a studio yet — observatory fits: witness seat, orientation, seeing structure). "office" → "warehouse" (routing + inventory + tracking, not fold management).

### routing and inventory are the same thing

the destination grid IS the inventory. file counts per cell, movement between addresses, manifest trail. no need to split routing from inventory — they're one view. the warehouse shows where everything is (counts on every cell) and lets you change where it goes (select + move). that's the whole thing.

### ~8 partially dissolved

the fold system design in ~8 assumed View 2 was the fold manager. it's not anymore — View 0 handles folding. the fold ceiling concept may still be real, but its home isn't View 2. the per-document fold view, ceiling indicator, integrate/release actions — those would live in View 0's sidebar if they live anywhere. ~8's core insight (bounded depth, forced cleanup at ceiling, ternary applied to time) is still valid. the instrument location shifted.

### view 1: cluttered, needs rethinking

the verb grid doesn't help visualize much yet. the sierpinski triangle is good — keep that. the rest needs work. not this session's problem.

### what's settling

- View 0 = ground (is). View 1 = witness (does). View 2 = trajectory (goes). grounded names, grounded functions.
- View 2 is routing + inventory, not fold management. the warehouse.
- routing and inventory are one thing, not two modes.
- fold management lives in View 0, not View 2.

### what's unsettled

- View 1's layout. verb grid is noise. sierpinski is signal. needs a rethink.
- where fold ceiling enforcement actually lives now that View 2 isn't the fold manager.
- whether the manifest trail in View 2 is sufficient or needs filtering/modes.
