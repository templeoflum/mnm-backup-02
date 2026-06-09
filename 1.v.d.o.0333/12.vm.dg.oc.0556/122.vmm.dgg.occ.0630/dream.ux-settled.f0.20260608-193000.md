# dream.ux — claims registry

every claim from dream.ux.f1 extracted and tagged [float] for review.
source: dream.ux.f1.20260608-094847.md at 122 (687 lines, sections 1–4 + ~1 through ~9)

---

## header

- the scope is "the three rooms + the HUD" [float]
- the constraint is "shape and feel, not build spec. extending what's there, not replacing." [float]
- the ground is "server operations are live. the lattice is the home." [float]

---

## section 1 — the library (View 0)

- View 0 is specification — what things ARE [float]
- View 0 is the collection, browsing, reading [float]
- the selector IS the shelves [float]
- the microscope shows what's at an address [float]
- density is missing — heavy and light cells look the same in the selector [float]
- the library should show documents not loose files [float]
- the server groups files into documents (all folds of same base name) [float]
- the reader should know about folds — show latest, step back through history [float]
- the microscope already has the triad, the grid, the position links [float]
- the reader panel is max 50vh right now [float]
- selector collapses when you're reading — it already has a collapse toggle [float]
- address patterns (three digits 0-2) are recognizable in document text [float]
- cross-referencing through address is the library's superpower [float]

---

## section 2 — the studio (View 1)

- View 1 is operation — what things DO [float]
- the studio is the active workspace, making [float]
- the card is the workbench — the triad tells you what you're doing [float]
- View 1 is the strongest view right now [float]
- keyboard navigation works [float]
- it feels like an instrument [float]
- the studio shows identity of an address but should show what it DOES [float]
- the card is the center, identity is left, position is right [float]
- the studio should feel different at each register (last digit 0/1/2) [float]
- verb mode: spec address = observational, ops address = active, config address = organizational [float]
- actions should emerge from context, not a menu [float]
- the keyboard navigation IS the creative act [float]
- the walk should feel like carrying something [float]

---

## section 3 — the office (View 2)

- View 2 is configuration — where things GO [float]
- the office is where you manage — sorting, tracking, paperwork [float]
- the server traces every operation — the paperwork does itself [float]
- the compaction engine is a simulation, not connected to real files [float]
- the server writes to manifest.live.md at 201 on every operation [float]
- the manifest IS the office's main display [float]
- 200 is the intake — unsigned work arrives here [float]
- 202 is the schedule — sorts inventory into actionable chunks [float]
- the routing is 1->2->(0 or 1) [float]
- verified goes to specification, not ready goes back to operation [float]
- the log should be ambient background — a ticker, a stream [float]
- the manifest is the focus, the log is the texture [float]

---

## section 4 — the HUD

- the HUD is always visible [float]
- the HUD shows where you are, what's active, how to move [float]
- the address is the HUD's core — the primary instrument, not just navigation [float]
- the three digit slots are your coordinates [float]
- breadcrumb trail — where you've been, fading as they recede [float]
- server operations should surface briefly as a pulse — a flash, then it fades [float]
- 0 is blue, 1 is green, 2 is amber [float]
- which branch you're in should tint the HUD — a whisper of color [float]
- each view emphasizes different HUD info (library=file count, studio=verb, office=operations) [float]
- tabs could carry a hint of what's inside each room [float]

---

## open threads

- the card in View 1 scales by depth (branch->leaf->cell) [float]
- does the work surface scale too [float]
- carrying a file between addresses — what does that feel like in the UI [float]
- should the library and office have their own keyboard language [float]
- does the debug overlay merge into the HUD or stay as developer layer [float]

---

## ~1 — dream material from 100

### the surveyor rewrites the studio

- "a world can be known completely from inside itself" [float]
- View 1 IS the surveyor's instrument [float]
- you're standing inside the address, not looking from above [float]
- the card is the experience of being here, not a label on the outside [float]
- the triad isn't a description — it's the texture of the ground under your feet [float]
- View 0 (the patchboard) IS the Sphere's view — seeing everything from above [float]
- the Sphere's view is the shallow reading [float]
- being inside IS the deepest reading [float]
- the studio isn't shallower than the library [float]
- the library sees everything and knows nothing deeply [float]
- the studio sees one thing and knows it completely [float]
- the seam is the origin, that's 0 [float]
- the surveyor lives on the seam, the lattice lives around it [float]

### the field rewrites the library

- the structure is a field, not a tree [float]
- the three-digit address is coordinates in a field, not depth in a hierarchy [float]
- the "depth of three" is the width of the viewport, not a wall [float]
- the field is flat [float]
- the viewport is small so a mind can hold it [float]
- direct addressing is the primary act [float]
- setting a coordinate IS the act of meaning-selection [float]
- you don't navigate TO an address, you assert a position [float]
- the patchboard should feel less like a file tree, more like a map of terrain [float]
- density is topographic, not archival [float]

### the edges rewrite the office

- the office is where the gates live [float]
- a real gate punishes crossing-without-source with collapse [float]
- a false gate punishes with discomfort only [float]
- the gate from configuration to specification should feel like a threshold [float]
- the manifest is the record of what crossed the gate [float]
- the log is the record of what was tested [float]
- the office isn't paperwork — it's the gatekeeper [float]
- most edges people treat as hard are actually soft or none [float]
- three grades: hard (gates), soft (influences), none (open ground) [float]
- the verified->spec transition is a hard gate [float]
- typical routing (200->201->202) is soft — suggested, not enforced [float]
- moving things within configuration is open ground — frictionless [float]

### the dependency map rewrites the build sequence

- the build has one hard chain and open ground [float]
- the three views and HUD are open ground — can be built in any order [float]
- the keystone moment is: walk to address, see what's there, do something, system traces it [float]
- the studio with hands is the highest-impact node [float]
- the library and office are support and fuel [float]

### the practice rewrites the HUD

- the lattice instrument is built for two users [float]
- one reads the matrix (digits, addresses, position), one feels the shape (verbs, colors, rhythm) [float]
- these aren't two modes — they're two readings of the same thing [float]
- the digits are one reading, the verbs are another, both always present [float]
- neither reading is more real [float]
- the HUD should hold both without forcing a choice [float]
- the HUD is the mirror [float]

### structure-not-species on the views

- switching between views is open ground [float]
- the tab bar should feel frictionless [float]
- the views are lenses, not rooms with doors [float]
- the address stays when you switch views [float]
- the work stays when you switch views [float]
- within a view there may be real edges (folding is a one-way door) [float]
- weight where weight is real, lightness where ground is open [float]

### what shifts

- sections 1-4 were thinking in tree-words (shelves, rooms, hallways) [float]
- the material from 100 says: field not tree, surveyor not librarian, seam not center [float]
- the library isn't shelves — it's a terrain map [float]
- the studio isn't a workshop — it's the surveyor's position [float]
- the office isn't a filing cabinet — it's the gatehouse [float]
- the HUD isn't a cockpit — it's a mirror that holds two readings [float]

### the frame question

- 3 is the imposed frame for coherence, not a true limit [float]
- the structure is unbounded [float]
- the frame holds until it settles, then you can expand [float]
- the triads settled, the folder structure settled [float]
- the viewport IS the working reality [float]
- the lattice was built to be 3 — that gave us the folders [float]
- you can't expand from the frame until it settles [float]

### the library — settled shape

- the selector is tight — everything at a glance, every address, file counts [float]
- the dream adds more views alongside the selector, not replacing it [float]
- the library is for study — deep, unprivileged, from outside [float]
- the surveyor is right about depth, the Sphere is right about practical navigation [float]
- both are needed [float]

### the studio — play

- the studio is mind's workspace [float]
- inside the structure [float]
- goofing around, dumping material, rolling it around [float]
- you don't sort in the studio, you play [float]
- messy is correct [float]

### the office — planning, cleaning, folding

- fold management, file organization, planning, frames, schedules, health [float]
- the control panel, the utilities room [float]
- file editing lives here [float]
- batch operations live here [float]
- the office sees the whole inventory and plans the moves [float]

### folds — latest always, everywhere

- latest fold shown always, everywhere [float]
- the only place you view previous folds is in fold management (View 2) [float]

---

## ~2 — instrument list

- each view is a specific instrument set [float]
- views aren't screens with layouts — they're toolkits [float]
- each instrument does one thing [float]

### View 0 instruments

- selector (patchboard) is settled [float]
- microscope gets document grouping (latest fold shown, fold depth indicator) [float]
- verb map — all 27 verbs arranged by flow, click to navigate [float]
- density map — topographic, visual not numeric [float]
- cross-reference reader — address patterns become tappable links [float]
- document type index — filter/group by type across addresses [float]

### View 1 instruments

- card is settled — the experience of being at an address, scales by depth [float]
- rings + minimap + ratio line are settled [float]
- bench — files at current address as documents, work surface below/behind card [float]
- hands — context actions from situation, not a menu [float]
- dump pad — quick capture, raw text, auto-named, auto-timestamped [float]
- comparator — hold two things side by side [float]
- keyboard is settled [float]

### View 2 instruments

- fold manager — all documents, fold depth, timestamps, compare folds, view previous [float]
- fold manager is the only place you step back through fold history [float]
- file mover — select files, pick destination, execute, batch capable [float]
- manifest — live ledger from 201, not a file, a live table [float]
- inbox — what's at 200, how long it's been there [float]
- schedule — queue from 202, what's planned, what's next [float]
- log stream — C/O/D from 222, ambient ticker [float]
- health monitor — accumulating weight, needs compression, untouched addresses [float]
- frame editor — write and edit frames, schedules, plans [float]

### HUD instruments

- address counter — the three digit slots, always prominent [float]
- triad — compact, verb is the loudest word [float]
- view switcher — three tabs, debug and refresh grouped here [float]
- shortcuts — diagonal spine (0/00/000, 1/11/111, 2/22/222) plus recent/frequent [float]
- sticky tray — 5-6 pin slots, click to peek, double-click to navigate [float]
- status pulse — brief flash on operation complete, then fades [float]

---

## ~3 — build log

### HUD restructure (built)

- layout: single band, left cluster, counter absolute-centered, nothing on right [float]
- tabs renamed: 0 library, 1 studio, 2 office [float]
- triad in HUD: compact noun.verb.modifier under tabs, verb colored by last digit [float]
- status pulse: fixed top-right, brief green text, fades after 1.2s [float]
- shortcuts in selector bar: centered between mode toggles and collapse toggle [float]

### selector as HUD (built)

- moved out of View 0 into global scope — always visible in every view [float]
- simplified collapse: single toggle for entire selector, open or closed [float]
- shortcuts stay visible even when selector collapsed [float]

### sticky tray (built)

- 6 pin slots, fixed top-right [float]
- drag files from library file list to any slot [float]
- smart open: md/txt -> popup reader, html -> new tab, images -> new tab [float]
- per-slot clear: hover -> red X, click to clear [float]
- clear all: X button at end of row [float]
- popup reader: top-right, 480px wide, max 70vh [float]
- edit in popup: md/txt get edit button, flip to textarea, save via /write [float]
- persistence: sessionStorage, survives reloads within session [float]

### console (built)

- debug overlay upgraded, renamed dbg->con, debug->console [float]
- lattice command line: verb commands not raw eval [float]
- commands: list, read, move, fold, create, log, go, eval, clear, help [float]
- unknown commands fall back to eval [float]

### library editor (built)

- edit/save in reader: md/txt get edit button [float]
- click edit -> rendered markdown flips to textarea [float]
- save writes via POST /write, traced to manifest + session log [float]
- keyboard shortcuts skip textareas and inputs [float]

### server /write endpoint (built)

- POST /write with {file, addr, content} [float]
- won't create files — returns error if file doesn't exist [float]
- traced: manifest at 201 + session log at 222 [float]
- op_write() in Layer 1, route in HTTP handler [float]

### what settled from ~3

- HUD band layout: title+tabs left, counter center, tray top-right [float]
- selector as permanent HUD element: always visible, simple collapse [float]
- tray as popup reader, not navigator: pinned files are reference material [float]
- console as lattice verbs, not raw eval [float]
- edit/save in both reader and tray popup — the loop is closed [float]

### what's floating from ~3

- console has no history (up-arrow) [float]
- tray slots show truncated filenames [float]
- library reader and tray popup have identical edit/save code — could unify [float]
- aggregated files pass parent address not cell address to tray [float]

---

## ~4 — the view reframe

- the original dream used metaphors, the build revealed actual grain [float]

### View 0 — the editor

- View 0 is not visual at all — all text, all the time [float]
- View 0 is the full file browser and editor [float]
- the microscope, reader, editor — that's the instrument set [float]
- eventually grows toward a traditional coding environment [float]
- View 0 is where you work with the content of files [float]
- specification is "what things ARE" — a file's content is what it is [float]
- you read it and you write it — text in, text out [float]
- the selector is the file browser [float]
- this view doesn't need visuals — it needs depth [float]

### View 1 — the visualizer

- View 1 is about viewing the structure itself, not addresses [float]
- the card, rings, minimap are already visualizations of structure [float]
- the ratio line shows position in the field [float]
- the triad shows operational identity [float]
- none of this is about files — it's about the lattice [float]
- verb map, density map, connection graph go here [float]
- you don't edit here, you look [float]
- sandbox energy — build toys, experiment with layout ideas [float]
- nothing here is permanent [float]
- the studio is a playground for seeing the structure, not the files [float]
- the files live in View 0, the structure lives in View 1 [float]
- this is the surveyor's instrument [float]

### View 2 — the office

- View 2 is memory management — folding, cleaning, planning, logging [float]
- fold documents, move files, review manifest, check inbox, plan schedule, read log, audit [float]
- the routing 1->2->(0 or 1) lives here [float]
- this view IS the gatekeeper [float]

### the reframe in one line

- 0 reads and writes content. 1 sees and plays with structure. 2 moves and manages state. [float]
- text. vision. memory. — that's the triad of the views [float]
- maps to matrix: specification (text), operation (seeing), configuration (managing) [float]

---

## ~5 — document types

- naming convention: type.scope.fN.YYYYMMDD-HHMMSS.md [float]
- current types: manifest, count, schedule, frame, audit, log, review, survey, extract, crossref, dream, parked [float]
- types live at specific addresses by convention (manifest->201, dream->122, etc.) [float]
- a document type has structure — manifests have columns, logs have C/O/D format, frames have chunks [float]
- the type carries the shape, the scope carries the context, the address carries the location [float]
- every branch could use the same types scoped differently [float]
- branch 0: surveys, extracts, crossrefs. branch 1: dreams, reviews, logs. branch 2: manifests, schedules, frames [float]
- templates: each type has a skeleton the server stamps on create [float]
- metadata could live in front-matter or sidecar json [float]
- the server could index metadata [float]
- View 0 could offer type-aware editing (table mode for manifests, section mode for dreams) [float]
- View 1 could visualize document types across structure [float]
- View 2 could manage documents by type [float]
- types list in CLAUDE.md is [float] — some might merge, split, emerge [float]

---

## ~6 — context engineering as memory

### human side

- document types aren't just files — they're context frames [float]
- saying "use a dream doc" imprints the shape of thinking — loose, exploratory [float]
- saying "use a frame" shifts the shape — bounded, chunked, sequenced [float]
- the type IS the context [float]
- you don't need the AI to have memory — you need to know how to dream with it [float]
- the initial thinking and sketching is the hard part [float]
- the dream doc IS the memory [float]
- the manifest IS the project management [float]
- the log IS the audit trail [float]
- the frame IS the build plan [float]
- the build process after the dream is mechanical [float]
- the hard part is the dreaming — getting the shape right, the constraint right, the ground clear [float]
- document types bridge dream and build [float]
- the lattice isn't a project management tool — it's a context engine [float]
- it makes the shape of thinking portable across sessions, minds, time [float]

### AI side

- AI doesn't retain anything between sessions — every conversation starts from zero [float]
- this is a hard architectural fact, not a deficiency [float]
- document types turn that into a non-issue [float]
- the shape of the thinking is in the shape of the document [float]
- the constraint is explicit, the ground is marked [float]
- lattice docs say "here's the shape of thinking, here's where you are, now work" [float]
- a dream doc signals exploration mode [float]
- a frame signals build mode [float]
- the document type is the mode switch [float]
- a session starting with "read dream at 122 and frame at 210" already knows its shape [float]
- the precision of naming, address, fold, type does the work memory would do [float]
- documents don't drift (but memory does) [float]
- this is arguably better than memory [float]

### build implication

- templates aren't boilerplate — they're context primers [float]
- the server stamps address identity, scope, constraint frame, structural position [float]
- the paperwork does the memory [float]
- the system does the continuity [float]
- the dreaming is the only part that needs a mind [float]

---

## ~7 — the sharp cut

- ~4 had the direction right but was still loose [float]
- three views, three completely separate concerns, no overlap [float]

### View 0 — content

- what's inside the folders, the text [float]
- a workshop [float]
- no structural identity, no address breakdowns, no triads in View 0 [float]
- View 0 is a text editor with a file list, that's it [float]
- the selector in HUD is your file browser [float]
- the scope area is your editor [float]

### View 1 — structure

- the addresses themselves, not the content inside them [float]
- structural breakdown (role, mode, register, triad, position links, register badges, ratio) all moves from View 0 to here [float]
- add verb map, density map, every way of seeing the ternary from every angle [float]
- full self-similarity — traversing the ternary in its own nature [float]
- part context engine, part navigator [float]
- no file content [float]
- folders only — the shape of the tree, not what's in the boxes [float]

### View 2 — lifecycle

- management of files as objects [float]
- not reading content (View 0), not mapping addresses (View 1) [float]
- folding, moving, organizing, planning [float]
- the concrete shape: fold management on a single document [float]
- the compaction tower is about managing fold history, not archiving to zip [float]
- the memory system is fold management [float]

### what moves where

- out of View 0 into View 1: address header, structural breakdown, triad, position links, register badges, label [float]
- stays in View 0: file list (as document list), reader, editor, create action [float]
- View 1 keeps: card, rings, minimap, ratio line, keyboard [float]
- View 1 gains: everything from View 0 above + verb map + structural visualizations [float]
- View 2: compaction tower becomes fold management, destination grid stays, manifest stays, log stays [float]

### fold system as memory management

- a document is a living thing with a fold history [float]
- f0 is the origin [float]
- each fold is a snapshot — content preserved, new version created, timestamp marked [float]
- the fold system IS the version history [float]
- View 2 lets you: see fold history, compare folds, manage folds, fold from here [float]
- the folds ARE the memory [float]
- View 2 manages the folds [float]

---

## ~8 — every file folds

### the three views, final form

- every address has three views — they're lenses, not layouts [float]
- View 0: content inside the folder, full text, read and edit — the workshop [float]
- View 1: the folder as structural object, the addressing system, the ternary, the verbs — the observatory [float]
- View 2: files as objects moving through the system, lifecycle, logistics and memory [float]
- the fold system lives in View 2 [float]

### the fold system

- every file folds — this is universal [float]
- not just documents with naming convention — every file can be folded [float]
- a fold is a snapshot: content preserved, new version created, timestamp marked [float]
- the fold history IS the version history [float]
- every fold is a held state — a moment you chose to mark [float]
- bounded depth — the fold system mirrors the structure's depth of 3 [float]
- there's a fold ceiling — maybe 3, maybe 9, maybe 27 [float]
- the ceiling is real [float]
- forced cleanup at the ceiling — you can't fold again until you address existing folds [float]
- same principle as checkpoint system at 211 [float]
- the system doesn't decide what to do — it just stops [float]
- integrate: folds converged, manually clean up, compress, reset [float]
- let go: document served its purpose, archive, freeze, delete [float]
- the mechanical part is only the ceiling — everything past is human judgment [float]
- folds are held memory [float]
- the ceiling prevents unbounded accumulation [float]
- the forced stop is the only automated thing [float]
- the fold system IS the structure — ternary applied to time instead of space [float]
- fold 0 = origin (branch), fold 1 = refinement (leaf), fold 2 = specific version (cell) [float]
- at fold 3 you've hit the ceiling — integrate or release [float]
- the self-similarity is exact [float]
- View 0 only shows the latest fold [float]
- fold history invisible in View 0 — tidy, clean, just "the file" [float]
- fold pressure only visible in View 2 [float]
- View 2 is the only place you see previous folds [float]
- you can work in View 0 without thinking about version management [float]
- when ceiling blocks folding, View 2 is where you deal with it [float]

### View 2's core instrument

- View 2's core instrument is the fold manager [float]
- file mover and manifest are support, fold manager is the thing [float]
- per-document fold view: fold depth, versions, current, how close to ceiling [float]
- fold action: one click, timestamp, copy, increment [float]
- ceiling indicator: visual pressure approaching limit [float]
- integrate action: compress fold history, latest becomes f0, counter resets [float]
- release action: mark document done, fold history frozen [float]
- cross-address view: fold state across whole network [float]

### what's settling from ~8

- every file folds — universal, not type-specific [float]
- bounded depth — ceiling forces stop [float]
- system only enforces ceiling, what you do after is human judgment [float]
- View 0 only shows latest fold [float]
- View 2 is the only place for fold history [float]
- View 2 is the fold manager first, everything else second [float]
- the fold system is the ternary applied to time [float]

### what's unsettled from ~8

- exact fold ceiling: 3 vs 9 vs 27 [float]
- fold depth vs document type: universal ceiling or type-specific [float]

---

## ~9 — the grounding

- the dream was nice but we're getting more grounded now [float]

### view 2: office -> warehouse

- the fold manager as office was over-engineered dream stuff [float]
- the actual system is much lighter [float]
- fold management dissolved — View 0 already handles edit, fold, delete [float]
- the real gap is moving files between addresses [float]
- View 2 isn't an office — it's a warehouse [float]
- View 2 rebuilt as three-column layout: files, routing grid, manifest trail [float]
- fold manager, compression tower, archive controls all gone [float]
- replaced by: pick file, pick destination, move [float]
- /scan returns file counts for all 27 cells [float]
- /manifest reads manifest.live.md and returns entries as JSON [float]

### three views settled

- View 0 = library, is, specification — edit, fold, delete AT an address [float]
- View 1 = observatory, does, operation — witness seat, seeing structure [float]
- View 2 = warehouse, goes, configuration — routing BETWEEN addresses, tracking [float]
- "studio" -> "observatory" (not a studio yet, observatory fits) [float]
- "office" -> "warehouse" (routing + inventory + tracking, not fold management) [float]

### routing and inventory are the same thing

- the destination grid IS the inventory [float]
- file counts per cell, movement between addresses, manifest trail [float]
- no need to split routing from inventory — one view [float]
- the warehouse shows where everything is and lets you change where it goes [float]

### ~8 partially dissolved

- fold system design in ~8 assumed View 2 was the fold manager — it's not [float]
- View 0 handles folding [float]
- fold ceiling concept may still be real but its home isn't View 2 [float]
- per-document fold view, ceiling indicator, integrate/release would live in View 0's sidebar if anywhere [float]
- ~8's core insight (bounded depth, forced cleanup, ternary applied to time) still valid [float]
- the instrument location shifted [float]

### view 1

- verb grid doesn't help visualize much yet [float]
- sierpinski triangle is good — keep that [float]
- the rest needs work [float]

### what's settling from ~9

- View 0 = ground (is), View 1 = witness (does), View 2 = trajectory (goes) [float]
- View 2 is routing + inventory, not fold management [float]
- routing and inventory are one thing, not two modes [float]
- fold management lives in View 0, not View 2 [float]

### what's unsettled from ~9

- View 1's layout — verb grid is noise, sierpinski is signal [float]
- where fold ceiling enforcement actually lives [float]
- whether manifest trail in View 2 is sufficient or needs filtering/modes [float]

---

## post-dream observations (not in f1 but noted in session)

- manifest system is a stub — only shows operations traced by server since it was built [float]
- manifest.live.md is a transaction log, not a reconciled ledger [float]
- pre-existing files, external operations, anything before the server — invisible to manifest [float]
- a real manifest system (full scan, reconciliation, persistence) needs its own focused plan [float]
- tray pinning changed from drag-to-slot to ctrl+click (fills slots in order) [float]
- tray unpinning changed from hover-X to ctrl+click on slot [float]
