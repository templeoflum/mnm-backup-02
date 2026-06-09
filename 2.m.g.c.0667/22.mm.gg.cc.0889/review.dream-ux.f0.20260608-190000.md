# Review — dream-ux — f0 — 20260608-190000

Sources: dream.ux.f0.20260608-070000.md (at 122, 347 lines), dream.ux.f1.20260608-094847.md (at 122, 687 lines, sections 1–4 + ~1 through ~9), lattice.f1.20260608-090411.html (at 211, live instrument), server.py (root, live server), frame.core.f2.20260606-100946.md (at 210), frame.ts-rebuild.f1.20260607-100000.md (at 210), review.session.f0–f2 (at 22), review.intake-close.f0 (at 22), log.session.f5.20260608-090755.md (at 222). Reviews the entire arc of the UX dream — from the first ungrounded vision through nine revisions to the grounded instrument we have now. Traces what survived, what dissolved, what shifted, and what the dream itself teaches about how ideas become structure.

---

## What the dream was

dream.ux began on 2026-06-08 as two documents at 122: f0 (the raw vision) and f1 (the working fold, extended nine times across the day). The dream's stated constraint: "shape and feel, not build spec. extending what's there, not replacing." It was the first document to take the lattice instrument as its subject — not the ternary structure, not the research, not the build process, but the tool itself.

The dream ran in parallel with building. This is important. It wasn't a plan that preceded execution. It was a vision that co-evolved with the instrument, rewriting itself each time the build revealed something the dream hadn't anticipated. By the end, the dream had rewritten its own premises three times and dissolved its own centerpiece.

---

## The arc

The dream moved through five distinct phases. Each phase rewrote something the previous phase had assumed.

### Phase 1 — the rooms (f0, sections ~1 through ~13)

The original dream built from metaphor. Three views are three rooms in a home:

- **the library** (View 0) — quiet, you look things up
- **the studio** (View 1) — messy, you make things
- **the office** (View 2) — filing cabinets, you manage

The hallway (dashboard/HUD) connects them. You walk between rooms. The rooms have character. The metaphor was warm and intuitive.

f0 dreamed big. Thirteen sections laid out: three views as mindsets not screens (~1), per-address contracts (~2), dashboard as cockpit (~3), file operations as first-class actions (~4), verb map as navigation layer (~5), document type awareness (~6), views revisited with all features (~7), verb map for real with all 27 verbs and flow arrows (~8), folds as containers (~9), dashboard tray with 5–6 pin slots (~10), deeper views corrected (~11), fluid navigation walkthrough (~12), and the room metaphors crystallized (~13).

**What this phase got right:** the three views map to the matrix. 0 = specification = what things ARE. 1 = operation = what things DO. 2 = configuration = where things GO. This held through every revision. The dashboard/HUD as persistent across views held. File operations as the pressing need held. The tray concept held.

**What this phase got wrong:** almost everything specific. The rooms metaphor was evocative but imprecise. The verb map as a 27-node force-directed network was never built. The per-address contracts (different UI feel at each address) never materialized. The depth zoom feature was abandoned. The fold containers were described in loving detail but never became View 2's center.

**Character of the work:** ungrounded by design. f0 opens with "this dream is about what the lattice instrument becomes. ungrounded. no building." It was doing its job: generating material. The problem wasn't that it dreamed too big — it was that the dream didn't know yet what the instrument actually was.

### Phase 2 — the rewrite (f1, ~1)

Six documents arrived at 100 from outside the lattice. Unsigned, undated, raw. The dream read them and they rewrote everything:

- **the surveyor** said: the inside view is deeper than the outside view. View 1 isn't shallower than the library — it's the only place you can know what an address actually IS, because you're standing in it.
- **the field notes** said: this is a field, not a tree. The patchboard IS a tree right now, but the structure is flat. The address isn't depth in a hierarchy — it's coordinates in a field.
- **the edge anatomy** said: real gates punish crossing with collapse, not discomfort. The office should make real gates heavy and open ground light.
- **the dependency map** said: one hard chain and open ground. The server was the gate. After the server, views are parallel.
- **the practice** said: the instrument is for two readings — digits and verbs. The HUD should hold both without forcing a choice.
- **the structure doc** said: switching between views is open ground. No confirmation dialogs, no transition animations. Lenses, not rooms with doors.

**What shifted:** the library isn't shelves — it's a terrain map. The studio isn't a workshop — it's the surveyor's position. The office isn't a filing cabinet — it's the gatehouse. The HUD isn't a cockpit — it's a mirror that holds two readings at once.

**What this phase reveals about dreaming:** the six documents from 100 didn't add features. They changed the ground the dream stood on. Every specific feature from Phase 1 looked different through the new lens. The dream needed to be rewritten not because it was wrong, but because the ground had changed under it. This is the pattern the dream itself would repeat four more times.

### Phase 3 — the build (f1, ~2 through ~3)

With the rewrite absorbed, the dream crystallized into instrument lists (~2) and then the actual building happened (~3).

**What was built (real, working, in the live instrument):**

| instrument | view | what it does |
|------------|------|--------------|
| HUD band | global | title + tabs (row 1), triad + utilities (row 2), counter centered |
| selector as HUD | global | patchboard moved out of View 0, always visible, simple collapse |
| sticky tray | global | 6 pin slots, popup reader, edit-in-popup, sessionStorage |
| console | global | lattice verb commands (list, read, move, fold, create, log, go, eval) |
| library editor | View 0 | edit/save in the reader via POST /write |
| /write endpoint | server | write content to existing file, traced to manifest + log |

**What was dreamed but not built:**

| instrument | view | status |
|------------|------|--------|
| verb map | View 0/1 | dreamed in f0 ~5, ~8; instruments listed in f1 ~2; never built |
| density map | View 0 | dreamed in f1 ~2; never built |
| cross-reference reader | View 0 | dreamed in f1 ~2; never built |
| document type index | View 0 | dreamed in f1 ~2; never built |
| bench (work surface) | View 1 | dreamed in f1 ~2; never built |
| hands (context actions) | View 1 | dreamed in f1 ~2; partially built as buttons in View 0 |
| dump pad | View 1 | dreamed in f1 ~2; never built |
| comparator | View 1 | dreamed in f1 ~2; never built |
| fold manager | View 2 | dreamed in f0, f1 ~2, ~7, ~8; dissolved in ~9 |
| health monitor | View 2 | dreamed in f1 ~2; never built |
| frame editor | View 2 | dreamed in f1 ~2; never built |
| inbox | View 2 | dreamed in f1 ~2; partially built as intake section in warehouse |
| schedule viewer | View 2 | dreamed in f1 ~2; never built |
| breadcrumb trail | HUD | dreamed in f1 section 4; never built |
| status pulse | HUD | dreamed in f1 ~2; built as brief green flash, working |

The ratio of dreamed-to-built is roughly 4:1. The dream generated more than it could absorb. This isn't failure — it's the function of a dream document. The 4 that weren't built aren't lost. They're in the document. They can be picked up later. But the gap is real and worth noticing: the dream runs ahead of the build, and the build selects from the dream based on what's pressing, not what's pretty.

**What the build taught the dream:** the tray, the console, and the editor were the highest-impact builds. Not because they were the most dreamed-about (the verb map got far more dream-space), but because they removed the most friction. The tray lets you hold context while navigating. The console lets you operate without leaving the instrument. The editor closes the read-write loop. These were need-driven, not vision-driven.

### Phase 4 — the refinements (f1, ~4 through ~8)

Five sections of progressive sharpening:

**~4 (the view reframe):** the rooms metaphor died quietly. The three views became:
- View 0 — the editor. All text, all the time. Content of files.
- View 1 — the visualizer. The structure itself. Not files, addresses.
- View 2 — the office. Lifecycle of files as objects.

The reframe was clean: content / structure / lifecycle. Three non-overlapping concerns. The structural breakdown (role, mode, register, triad, position links) was pulled out of View 0 and assigned to View 1. View 0 became a text editor with a file list. This was a sharper cut than anything in the original dream.

**~5 (document types):** recognized that the naming convention (`type.scope.fN.timestamp.ext`) already carries structure. Templates, metadata, auto-generation — all dreamed, none built. The pattern is real but the implementation is deferred.

**~6 (context engineering as memory):** the deepest section in the entire dream. Two sides of one realization:
- Human side: the document types aren't just files — they're context frames. A dream doc signals exploration mode. A frame signals build mode. The type IS the context.
- AI side: the documents carry the context that memory would normally carry. A session that starts with "read the dream at 122 and the frame at 210" already knows its own shape. The precision of naming, address, fold number, type — all of it does the work that memory would do, but explicitly, portably, verifiably.

This section stands apart from the rest of the dream. It's not about UI features. It's about what the lattice IS. The lattice isn't a project management tool — it's a context engine.

**~7 (the sharp cut):** formalized the separation. View 0 = content. View 1 = structure (the ternary from every angle). View 2 = lifecycle (fold management). No overlap. Moved structural display from View 0 to View 1. Established that the compaction tower is really fold management.

**~8 (fold system as bounded memory):** the most elaborate design in the dream. Every file folds. Bounded depth (maybe 3, maybe 9, maybe 27). Forced cleanup at the ceiling — the system stops, you decide. Integrate or let go. The fold system IS the ternary applied to time instead of space. View 2 is the fold manager: per-document fold view, ceiling indicator, integrate/release actions, cross-address view.

This was the dream's peak confidence about View 2. And it would be dissolved in the next section.

### Phase 5 — the grounding (~9)

"the dream was nice but we're getting more grounded now."

The fold manager as View 2's center was over-engineered dream stuff. The actual system is lighter. View 0 already handles edit, fold, delete at an address. The real gap is moving files between addresses. View 2 isn't an office or a fold manager. It's a warehouse.

**What was built:** View 2 rebuilt as a three-column layout. Files on the left, routing grid (all 27 cells with counts) in the center, manifest trail on the right. Pick a file, pick a destination, move. Server gained `/scan` and `/manifest` endpoints.

**What dissolved:**
- The fold manager (dreamed in f0, refined in ~2, ~7, ~8 — never built, now explicitly abandoned as View 2's core)
- The compression tower (present since f0 — replaced by routing grid)
- The office metaphor (three separate versions across f0, ~4, ~7 — replaced by warehouse)
- Per-document fold view, ceiling indicator, integrate/release actions (all from ~8 — dissolved or relocated)

**What the names became:**

| view | f0 name | ~4 name | ~9 name | current |
|------|---------|---------|---------|---------|
| 0 | library | editor | — | library |
| 1 | studio | visualizer | observatory | observatory |
| 2 | office | office | warehouse | warehouse |

The library name survived — it went from library to editor and back to library. View 1 went from studio to visualizer to observatory — each name getting more honest about what the view actually does (you observe, you don't make). View 2 went from office to office to warehouse — the function changed even when the name didn't.

---

## What the dream produced

### Survived intact

These features or concepts were dreamed and either built or settled without significant revision:

| item | dreamed in | current state |
|------|-----------|---------------|
| three views = three matrix rows (is/does/goes) | f0 ~1 | settled, never needed correction |
| selector/patchboard as primary navigation | f0 ~1, f1 §1 | built, working, promoted to HUD |
| card as identity of being at an address | f0 ~1, f1 §2 | built, working, View 1 center |
| HUD persistent across views | f0 ~3, f1 §4 | built, working |
| tray/pinboard for holding context | f0 ~3, ~10, f1 §4 | built, working, 6 slots |
| file operations need a server | f0 ~4 | built, server.py live |
| timestamps auto-generated | f0 ~4 | built, server handles |
| fold numbers auto-incremented | f0 ~4 | built, server handles |
| document grouping by base name | f0 ~9, f1 §1 | built, server groups |
| latest fold shown, fold trail collapsed | f0 ~9, f1 ~8 | built in View 0 |
| console speaks lattice verbs | f1 ~3 | built, working |
| edit/save in reader | f1 ~3 | built, working |
| the lattice is a context engine | f1 ~6 | insight, not a feature — but it shaped everything |

### Dissolved

These features were dreamed at length and then explicitly abandoned or superseded:

| item | dreamed in | dissolved in | why |
|------|-----------|-------------|-----|
| fold manager as View 2 center | f0 ~2, f1 ~2, ~7, ~8 | ~9 | View 0 handles folding. the gap was routing, not fold management |
| compression tower | f0, f1 ~2 | ~9 | replaced by routing grid |
| per-address contracts (different UI per address) | f0 ~2 | never built | the address character is real but the instrument doesn't enforce it |
| depth zoom (branch→leaf→cell changes the view) | f0 ~11 (corrected) | ~4 | the user corrected this during the dream itself |
| verb map as 27-node network | f0 ~5, ~8 | acknowledged as cluttered in ~9 | the verb grid was built but doesn't visualize effectively |
| studio metaphor | f0 ~13 | ~9 | not a studio yet — observatory is more honest |
| office metaphor | f0 ~13 | ~9 | three times designed, three times the function shifted |
| cross-address fold view | f1 ~8 | ~9 | the fold manager dissolved, so its instruments dissolved |

### Shifted

These survived but changed shape significantly:

| item | original shape | current shape |
|------|---------------|---------------|
| View 0 | library (survey from outside) | library (edit, fold, delete AT an address) |
| View 1 | studio (play from inside) | observatory (witness, see structure) |
| View 2 | office (paperwork, fold management) | warehouse (routing BETWEEN addresses, inventory) |
| file operations | primarily in View 2 (office manages) | split: View 0 handles local ops, View 2 handles routing |
| fold management | View 2's core instrument | View 0 feature (fold button in editor bar) |
| the HUD | cockpit reading | mirror holding two readings (digits + verbs) |
| the tray | bookmark bar | popup reader with edit capability |

---

## What the dream teaches

### Dreams dissolve their own premises

The most elaborate section of the dream (~8, fold system as bounded memory) was also the section that dissolved. It was the peak of confidence — "the fold system IS the structure, the ternary applied to time" — and then the build revealed that View 0 already handles folding and the real gap was file routing. The dream's highest moment of theoretical elegance was the thing the build didn't need.

This isn't a failure of the dream. ~8's insight (bounded depth, forced cleanup, ternary applied to time) is still valid. The insight survived; the instrument location didn't. The dream produced the idea. The build placed it.

### The build selects from the dream, not the other way around

The dream generated ~25 instruments across the three views and HUD. The build selected ~8 of them. The selection criterion wasn't "what's most interesting" or "what's most complete in the dream" — it was "what removes the most friction right now." The tray wasn't the most dreamed-about feature (that was the verb map). It was the most needed. Dream breadth is a resource for build precision.

### Metaphors help and then they hinder

The rooms metaphor (library, studio, office) organized the initial dream. You could imagine walking between rooms. It made the views intuitive. But it also imposed structure that didn't match the work. The studio implied making things — but View 1 is about seeing, not making. The office implied paperwork — but View 2's real job is routing. The metaphors were ladders that needed to be kicked away.

The final names (library, observatory, warehouse) are uglier and more honest. They describe what actually happens in each view, not what metaphorically should happen. The progression from evocative to honest is the progression from dreaming to grounding.

### The rewrite was the pivot

Section ~1 (the six documents from 100) was the most consequential moment in the dream. It didn't add features. It changed the lens. Before ~1: the library is shelves, the studio is a workshop, the office has filing cabinets. After ~1: the library is a terrain map, the studio is the surveyor's position, the office is the gatehouse. Everything that followed — the instrument list (~2), the build (~3), the reframes (~4, ~7), the fold system (~8), the grounding (~9) — was downstream of that lens change.

The lesson: a dream can be productive for a long time on its original premise. But one encounter with the right material can rewrite the premise entirely. The dream's f0 was 347 lines of careful thinking. ~1 in f1 changed more in 80 lines than f0 established in 347.

### Two folds was enough

f0 is the origin. f1 extended nine times. The two folds contain the entire history of the UX dream — from first vision through nine revisions to the current grounded state. The fold system's self-imposed ceiling (from ~8) would say: at f2, you should integrate or let go. And in fact, the dream may be approaching that. ~9 is a grounding. The vision has converged with the build. What remains unsettled (View 1 layout, fold ceiling enforcement, manifest filtering) are implementation questions, not dream questions. The dream may have done its job.

---

## Comparison: f0 lattice vs. f1 lattice

The instrument folded from lattice.f0 (1,783 lines, June 6) to lattice.f1 (2,700+ lines, June 8). Not all changes trace to the dream — some came from frames, reviews, and direct build decisions. But the dream shaped the direction.

| feature | f0 lattice | f1 lattice | dream source |
|---------|------------|------------|-------------|
| views | 3 views with distinct layouts | 3 views with grounded names + functions | f0 ~1, f1 ~4, ~7, ~9 |
| HUD | tab bar + address bar | HUD band (title+tabs, triad+utilities, counter centered) | f0 ~3, f1 §4 |
| selector | inside View 0 | global, always visible | f1 ~3 |
| tray | not present | 6-slot sticky tray with popup reader + edit | f0 ~10, f1 ~3 |
| console | debug overlay with eval | console with lattice verbs + eval fallback | f1 ~3 |
| editing | read-only | edit/save in reader and tray popup via /write | f1 ~3 |
| View 0 | tree + microscope + file list | tree + microscope + file list + editor + fold/create/delete | f1 §1, ~4 |
| View 1 | card + rings + minimap + ratio | card + rings + minimap + ratio + sierpinski + verb grid | f0 ~5, ~8 (partial) |
| View 2 | compression tower + destination grid | three-column warehouse (files, routing grid, manifest trail) | ~9 |
| server | python -m http.server (read-only) | server.py with list/read/move/fold/create/write/log/scan/manifest | f0 ~4, f1 ~3 |

The delta is substantial. The dream didn't cause all of it, but it oriented it. The features that landed (tray, console, editor, warehouse) all trace through the dream. The features that didn't land (verb map network, comparator, dump pad, health monitor) are parked in the dream for later.

---

## The shape of the work itself

The dream tracked through frames at 210 the way a beam tracks through lenses. frame.core.f2 positioned the initial work (settle vocabulary, align instrument, rebuild keystone). frame.intake closed a full cycle (research grounding → carry forward → interface). frame.ts-rebuild opened the next cycle (instrument rebuild, strip to mechanism). The frames were the build's grammar. The dream was the build's imagination.

The reviews at 22 (session.f0, f1, f2, intake-close) caught what the dream missed. review.session.f2 documented the misstep that launched the keyboard dream — "treated the frame's trail marker as a build order, skipped three steps." The reviews are branch 2 seeing what branch 1 did. The dream is branch 1 seeing what the instrument could be.

The interleave: dream at 122, frame at 210, build at 211, review at 22, log at 222. Each address does its verb. The dream carries. The frame positions. The build verifies. The review dresses. The log hands. The system works because each document type holds one mode of thinking. This is what ~6 was about — the document types are context frames. The dream doc itself IS the evidence.

---

## What's settled

- The three views are three matrix rows. 0 = specification (is, library), 1 = operation (does, observatory), 2 = configuration (goes, warehouse). This held through every revision and never needed correction.
- The HUD is persistent across views. The tray, console, selector, triad — they travel with you.
- The server is the operational layer. File operations flow through it. Every mutation traces to manifest + log.
- Document grouping (folds as one document, latest shown) is the right abstraction.
- The dream document type works. Nine sections, each rewriting what came before, converging toward the build. The constraint (shape and feel, not build spec) was the right constraint. The dream generated more than it built, and that's the function.

## What's floating

- View 1's layout. The dream generated extensive ideas (verb map, density map, sandbox, structure from every angle) but the build hasn't found the right instrument set yet. The sierpinski triangle works. The verb grid doesn't. This is the next dream, not this one.
- Fold ceiling enforcement. The ~8 insight (bounded depth, forced cleanup) is valid but homeless now that View 2 is the warehouse. Where does the ceiling live? View 0 sidebar? A system-wide check? Unsettled.
- Document templates. ~5 dreamed them in detail. The server could stamp context-aware templates on create. Not built. The pattern is ready.
- Per-address contracts. f0 ~2 described them beautifully — each address has a character, the instrument should reflect it. Still true. Still unbuilt. The server knows addresses; the UI doesn't change when you arrive at one.

## What's done

The dream has converged with the build. f0's big vision has been filtered through nine revisions, six external documents, a server build, three view redesigns, and contact with actual use. What's left is sharper, smaller, and grounded. The unsettled items are implementation questions, not dream questions. The dream did its work.

---

## Carry-forward

1. **View 1 rethink** — the next dream. What instruments make the ternary structure visible and navigable? The sierpinski works. The verb grid doesn't. Start from what View 1 actually does (witness, orient, see structure) and dream the instruments.
2. **Fold ceiling** — decide where it lives now that View 2 is the warehouse. View 0 sidebar? System-wide indicator? The concept is sound; the location is open.
3. **Document templates** — build into the server. When `create dream ux 122` runs, stamp the context: address identity, scope, constraint frame. The dream at ~5 and ~6 designed this.
4. **Per-address feel** — the character of each address is real (200 receives, 211 builds, 122 dreams). The instrument could surface this. Not UI-per-address, just: when you arrive, a hint of what kind of work happens here.
5. **Dream fold** — this dream is at f1 with nine sections. If the fold ceiling is 3, the next fold (f2) is the last before forced cleanup. Consider whether to fold or integrate.
