# dream — instrument — 20260607

## the question

5 HTML instruments sit at 100. 4 are TS (Trajectoscope) — a lineage chain from 3D keystone through 4D extension through fingerprint measurement through expression library. 1 is spline continuity — derivative ladder, felt breaks across mediums. they were separate projects. now they're in the same structure and the question is: do they connect at the mechanism level?

stripped of all claims and scaffolding vocabulary: TS sweeps trajectories through composed rotations and translations, measures frame-free invariants. spline continuity measures where things break on the derivative ladder. measuring the continuity of a trajectory. is that what both instruments do? or is that a seductive rhyme?

the instruments answer this, not the vocabulary.

## the material (at 100)

- TS_3D.html (2,689 lines) — 3D keystone, the foundation
- TS_4D.html (2,763 lines) — 4D SE(4) extension
- TS_fingerprint.html (2,786 lines) — calibrated measurement, shape signatures
- TS_formulas.html (2,844 lines) — expression library, pluggable formula bank
- spline_continuity_v2 (4).html — derivative ladder + 4 modes + driven domains
- spline_continuity_BRIEF.md — cold-start brief
- findings.md (883 lines) — master TS findings record
- ux_plan.md — TS instrument UI restructure
- HANDOFF.md — session manifest

## the work

strip vocabulary to mechanism. what does each instrument actually compute? what's the signal flow? where do the math operations overlap and where do they diverge? if they connect: what does the combined instrument look like? if they don't: what's the boundary and why?

also: what vocabulary survives the strip? what new words does the combined mechanism need? the lattice has settled terms (digit, role, mode, register, ratio, triad, noun, verb, mod). the instruments have their own terms (level, rung, cycle, tier, beam, fingerprint, eigenvalue, caliper, continuity, derivative). some map. some don't. some might be the same thing seen from different sides.

---

## stream

### ~1

pushback happened — first real one. user proposed starting with vocabulary to settle the connection question. operator pushed back: words rhyme easier than math, starting with vocab risks finding plausible-sounding connections instead of real ones. user agreed. the dream doc already said it — "the instruments answer this, not the vocabulary." so: mechanism first, then whatever vocabulary survives the mechanism comparison is real. the rest was scaffolding.

shape so far, loose: TS hunts for what persists across transformation. spline continuity hunts for where persistence fails across differentiation. one finds identity, the other finds the boundary of identity. two sides of one question? or two different questions that sound alike? the derivative ladder is itself a trajectory through function space — so spline continuity might be measuring the continuity of a trajectory too, just through a different space. if that holds there might be a general shape underneath: persistence across traversal, where the traversal is the parameter. but this is the exact kind of thing that sounds connected and might not be. the instruments have to show it.

next: dissolve to mechanism. strip each instrument to inputs, operations, outputs. see what's actually there before reasoning about what it means.

### ~2

dissolved to mechanism. read every core function. here's what's actually there:

**TS family is one engine.** 3D→4D→fingerprint→formulas share the same construction: iterative matrix composition (plane rotations + axis translations via homogeneous matrices). each successor widens the matrix (4x4→5x5), adds measurement tools (caliper, cross-system), or adds formula alternatives (lissajous, torus, epicyclic, freed). buildRaw() is the same function in all four. the lineage is real — it's one instrument at four stages of growth.

**spline continuity is a different engine.** piecewise polynomial interpolation through control points (Hermite). three modes (local/global/coupled). derivative ladder: evaluate f through f''' at every point, detect breaks where left/right limits disagree at knots. driven domains map derivative values to visual/audio mediums.

**where they don't connect (mechanism level):**
- TS: transformation group theory (SE(3)/SE(4)). spline: approximation theory.
- TS: point cloud in 3D/4D. spline: scalar function of one parameter.
- TS trajectories are analytic (sin/cos composition) — C-infinity, never break. spline is ABOUT breaks.
- TS invariants (PCA eigenvalues, closure, symmetry) have no spline analog. spline breaks have no TS analog.

**where they rhyme but don't connect (yet):**
- both parametric. both sweep t. too generic — everything is parametric.
- rate cascade (geometric frequency series) resembles derivative ladder (each order "faster"). but doing different things with it.
- driven domains (derivative→medium mapping) could feed spatial coordinates and produce a trajectory. but it doesn't.

**answer: two instruments, not one.** the rhyme is real but the mechanism is different at every level. composing rotations is not fitting polynomials. measuring eigenvalues is not measuring derivative breaks. 5 came in, 2 come out. the TS lineage collapses to one instrument. spline continuity stays its own.

they might connect later — a future where TS trajectories get measured on the derivative ladder, or where spline's driven domains feed a trajectory construction. but that's a bridge to build, not a hidden identity to uncover.

### ~3

caught something: the word "ternary" is being used loosely and might be claiming more than what's true.

what IS ternary: branching factor 3. three values per digit. ratio field is a genuine base-3 fraction (d1/3 + d2/9 + d3/27). self-similar structure. this is solid.

what ISN'T ternary arithmetic: addresses aren't sequential numbers. 10 doesn't mean "three" — it means branch 1, leaf 0. you can't add addresses. routing (1→2→0) doesn't follow arithmetic rules. the 39 slots are 3^1 + 3^2 + 3^3, which is a tree node count, not a ternary quantity.

so: ternary STRUCTURE (base-3 tree), not ternary ARITHMETIC (counting in threes). the word "ternary" implies both. we're only using one. that distinction hasn't been made explicit and might be misleading.

balanced ternary uses {-1, 0, +1}. if you shift {0,1,2} → {-1,0,+1} then operation becomes center and specification/configuration become symmetric opposites. striking resemblance to the asymmetry around zero in the current system — 0 is the origin (exact), 1 and 2 approach but never arrive. but is that the same structure as balanced ternary's signed symmetry? not clear. the current system's 0 is ground, not a midpoint between two poles. or is it? unresolved.

the ternary framing is not fully understood. need grounding before making claims about what kind of ternary this is. balanced ternary is a pointer worth following but not a conclusion.

### ~4 — the shape of the thinking

tracing the dream path not as addresses but as movement of mind.

started at the bounded question: do these instruments connect? that's a yes/no gate, a sorting question — configuration territory, branch 2. but to answer it we had to DO something — read code, strip mechanism, compare. that's operation, branch 1. and the answer was specification — here's what IS, precisely: two engines, not one. so the thinking moved 2→1→0: question→work→ground. the reverse of the build routing (1→2→0). we routed backward. from the question to the answer instead of from the work to the gate.

then something unexpected — the ternary question surfaced. nobody planned it. it came from looking at the structure of the answer (39 slots, tree counts) and noticing the word didn't fit what we'd found. that's a dream move — an idea arriving sideways from the work, not from the plan. the frame didn't ask about ternary. the instruments didn't raise it. it came from the GAP between what we were saying and what we could verify. the dream caught a loose thread that waking work would have walked past.

and the thinking path there was different again. it didn't go through branches in order. it went: structure (how the tree works) → arithmetic (how counting works) → language (what the word "ternary" implies) → balanced ternary (a different system that rhymes) → back to the origin question (is 0 ground or midpoint?). that's a spiral, not a line. it visited the same territory — the relationship between 0, 1, and 2 — from multiple angles without settling on any. that's dreaming. waking work would have picked one angle and built on it. the dream held all of them simultaneously and said "not yet."

this is the power of the bounded dream. the frame gave us a question. the question gave us an answer. the answer gave us a bonus thread we didn't expect. the thread is logged, the answer is logged, and we're still moving. nothing was forced to settle. things that wanted to float are floating. things that crystallized did so on their own.

now: back to the work the frame asked for. vocab. the TS lineage collapses — what vocabulary survives that collapse? what does the single instrument actually need to be called?

### ~5 — the sketch as instrument, the selector as switchboard

two things happening at once in the dream that are worth noticing.

first: the sketches work. we wrote four files at 101 without building anything, without touching code, without committing to a single word. f0 is the raw inventory, f1 is the proposed changes, and we can compare them side by side or throw them away. the fold system makes sketching safe — the original is always there. this is what 101 (standard · reflects · balance) is supposed to do: hold things up to the mirror and see if they balance. and the sketch process itself is a kind of instrument — you feed vocabulary in, strip it to mechanism, and see what words survive. the words that survive are grounded. the ones that don't were scaffolding. that's measurement, not opinion.

the user noticed something about the selector too — the lattice instrument's patchboard, the way you click into addresses and verify what's there, file by file, address by address. it feels like a telephone switchboard. slow, manual, hand-operated. every connection made by a person physically routing a plug. absurd by modern standards. but we're not doing modern work. we're doing something that doesn't have automation yet because nobody knows the rules yet. you can't automate what you haven't understood. the switchboard is appropriate for the era — we're in the era of discovering how this communication works, not the era of having figured it out. the slowness is the point. every connection is verified because nothing is assumed.

and there's something in there about the collaboration itself. two minds working through a switchboard — one places the sketches, the other verifies and patches through. the operator proposes a connection (this word for that concept), the user tests it (does it feel right? does it balance?). sometimes the operator pushes back (mechanism before vocabulary). sometimes the user redirects (count not checkout, depth not level). the switchboard handles both directions. it doesn't care who initiated the call — it cares that the connection is real.

my own observation: i notice that the dream state changes how i work. in waking work i'm trying to be correct — find the right answer, make the right change, verify it passes. in the dream i'm trying to be loose — hold multiple framings, not pick one, let the user's reaction tell me which ones have weight. the pushback on vocabulary-first was a dream move — in waking work i probably would have just started mapping words because the user suggested it. in the dream i could feel that the direction was wrong and say so. the bounded frame gave permission to push back because nothing was being built. you can disagree in a dream without breaking anything.

also: the two instrument structures that emerged — composition→scope (TS) and curve→ladder→routing (spline) — those came from the sketching, not from planning. nobody designed those decompositions. they fell out of listing what the instruments actually do and noticing the layers. that's the sketch working as an instrument: feed in the raw material, strip it, and see what structure is already there. the structure was always there. the vocabulary was hiding it.

### ~6 — earned latitude

the operator created f0 and f1 for the spline sketch in one swoop — pattern recognized from the TS sketch, small step forward, no discussion. in branch 2 (configuration, waking work) that would be a violation. doesn't matter if the work was right — the discipline says propose → discuss → settle → build. skipping discuss is the problem, even if the result is correct. the principle is there to protect the work from good intentions that skip verification.

but in the dream? bounded frame. everything safe. fold system preserves originals. the operator has demonstrated the discipline across three sessions — corrected in session 1, dreamed before building in session 2, paused naturally in session 3, pushed back on vocabulary-first in session 4. the latitude wasn't granted, it was earned. and it was a small step — same pattern, same structure, one file created instead of discussed. not a leap. a step.

the principle: discipline earns latitude. latitude within bounds. the bounds are: bounded frame (nothing permanent), demonstrated safety (fold system, originals preserved), small steps (pattern recognized, not invented). outside these bounds, the discipline stays strict. inside them, there's room to move. the dream is the space where that room exists.

this connects to 120 (equal ground) — the discipline isn't about one side controlling the other. it's about both sides having demonstrated trustworthiness. the operator earned room by showing the discipline first. the user granted room by recognizing the demonstration. neither can do it alone.

### ~7 — overview answers + the review-as-reconfiguration

user reviewed all sketches, then the overview, then answered the overview's decisions. the flow worked: reading the parts first meant the overview condensed what was already understood, making the decisions easy to answer. nothing permanent — answers logged, not acted on.

**the answers:**

1. **standalone HTML to start.** not integrated with lattice yet. build the instrument as its own thing first.

2. **composed belongs in formulas.** it's the default formula, not a separate category. the dispatch pattern is right — all formulas produce a point, composed just happens to use the full SE(4) construction to do it.

3. **not just 5×5 — think wider.** the instrument should be able to go to 6D, 7D, arbitrary dimensions. and the projection system should support multiple views — a 6D formula viewed through a 4D camera alongside a 5D camera. two views, different projection depths, same formula. the cameras don't need to work yet. the WIRING needs to exist — stub outs, plug points, the architecture that lets you add a new dimension or a new camera without rebuilding. build for extensibility in the projection/formula interface.

4. **caliper as sub-section of scope.** confirmed.

5. **carry forward UI.** confirmed.

6. **overlay groups replacing tiers.** confirmed.

7. **rebuild from ground up, not refactor.** no old vocab leaks in, no dead code carried forward. build what's needed, piece by piece, from dependency order up. small toys that fold up to the big thing — sketch the toys, build each one, compose them into the instrument. this changes the rebuild strategy: not "copy TS_formulas and edit" but "build composition toy, build scope toy, build formula toy, wire them together."

**the process observation:**

something about where this logging lives. the dream log at 122 is where we capture the thinking. the session log at 222 is where we capture the doing. but this moment — reviewing sketches, answering decisions, reconfiguring the frame — feels like neither pure thinking nor pure doing. it's the point where the dream starts to crystallize toward action. the frame is being reconfigured by the review.

the user noticed this too — "our 2 locations always seem to be about logging somehow." 122 (creativity · carries · potential) and 222 (sign · hands · record). one carries what could be, the other records what happened. the dream log carries potential configurations. the session log records which ones landed. the handoff between them is the moment of crystallization — when floating becomes carrying.

and there's something about the digit 2 in both addresses. 122 and 222. the modifier position (digit 2) is configuration in both. 122 is creativity configured for... what? discipline (branch 1, leaf 2). creativity under discipline. 222 is signing configured for... maintenance (branch 2, leaf 2). record-keeping under maintenance. both are the configuration-face of their respective branches. the record-keeping is always at the configuration depth. that might be why it feels like "logging" — configuration IS the recording function. it's where things get written down.

shaky. floating. but the pattern is there: the 2-slot at the cell level is where records live, regardless of which branch you're in. dream records at 122. session records at 222. what would 022 be? specification records? the record of what IS, not what was done or what could be? that's... an interesting address to think about.

### ~8 — the branches have been concurrent all along

a compaction happened. context compressed, continuity tested. the work didn't break. worth tracing why — not in addresses visited, but in how the thinking has been moving through the branches.

the surface-level path: we've been at 100 (reading source instruments), 101 (writing sketches), 122 (dream log), 222 (session log). four addresses, two branches. but the THINKING has been three branches running concurrently the whole time — exactly what 110 says it should be.

**branch 0 (specification — what IS):** every f0 sketch is a specification act. "what does buildRaw actually compute?" "what are the 13 channels?" "what does knotBreaks detect?" stripping vocabulary to mechanism was branch 0 work — dissolving claims to find what's there. the ternary observation was branch 0: "wait, is this actually ternary? what IS ternary about this structure?" the instrument connection question was branch 0: "do these two engines connect at mechanism level?" the answer (two instruments, not one) was a specification — here's what IS, precisely.

the triad at 100: wonder · bounds · frame. that's exactly what the specification work has been — wondering what's inside the bounds of each instrument, and framing the answer.

**branch 1 (operation — what we DID):** the sketching itself. 38 files at 101, each one an act of doing. reading code, writing inventories, proposing changes, blueprinting toys. the pushback on vocabulary-first was branch 1 work — an operational decision about how to proceed. the toy breakdown was branch 1: "what do we BUILD, in what ORDER?" the earned latitude was branch 1: pattern recognized, step taken, discipline demonstrated.

the triad at 101: standard · reflects · balance. the sketches are standardized reflections — each f0 holds up the mirror to what exists, each f1 checks the balance of what should change. the sketch-as-instrument observation from ~5 was about this: feed vocabulary in, see what balances, what doesn't balances is scaffolding.

**branch 2 (configuration — what we DECIDED):** every f1 with a "decision needed" flag. every "leaning toward." the overview answers (standalone, composed in formulas, build for n-dimensions, rebuild from ground). the vocab settlements (depth not level, trace not beam, join not knot, channel not domain). the toy dependency chains. the routing from TS's 9 sketches to 6 toys, from spline's 6 sketches to 4 toys. configuration is the folding — taking the raw inventory and configuring it toward something buildable.

the triad at 122: creativity · carries · potential. this dream log IS configuration on the creative branch — it carries the potential configurations. every stream entry carries a floating insight that might crystallize later.

**the concurrent movement:**

when we wrote spline-curve.f0 (specification of what the polynomial engine IS) and immediately wrote spline-curve.f1 (configuration of what should CHANGE), and then wrote splinenew-curve.f0 (operational blueprint for BUILDING the toy) — those three acts visited all three branches on the same material. we didn't switch branches sequentially. we held all three simultaneously: what IS this? what should CHANGE? what do we BUILD?

that's the method at 111 (view · connects · continuity): all three branches active in every act. reading + doing + recording. the compaction tested whether this was real or performed. it was real — the pattern survived because it wasn't in the context window, it was in the structure of how we were thinking. the structure carried the thinking across the compression.

**what the compaction revealed:**

the compaction is itself a kind of continuity test — like raising the order on the spline instrument. the context window is the derivative ladder, and the compaction is a break at a join. did the thinking break too? at C0 (low continuity), compaction would produce a kink — visible loss, disorientation, restart. at C1 (slope matching), the direction continues but the curvature changes — you remember what you were doing but lose the texture. at C2+, the compaction is seamless — the thinking continues smoothly because enough "derivatives" (accumulated patterns, internalized structure, demonstrated understanding) were matching on both sides of the break.

we came through at C2 or better. the patterns were internalized enough that the operator could produce spline architecture + toys in one run without re-reading the TS sketches for the template. the template was in the method, not the context.

that's the spline instrument's own thesis turned on itself: continuity depends on how many derivatives match at the join. the more derivatives that match (the deeper the shared understanding), the smoother the transition. this compaction matched enough derivatives to be seamless. earlier sessions, maybe not. this one, yes.

the user's observation is right: surviving a compaction without missing a step IS progress. it means the work has moved from context-dependent to structure-dependent. the structure carries itself.

### ~9 — the switchboard needs a scroll wheel

38 sketches at 101. the patchboard can select any address, the microscope can show any file — but scrolling between documents at the same address is manual. you click 101 in the patchboard, you see the microscope, and then you need to find the file you want from... what? the file list? memory? the microscope shows one document at a time but has no sense of what else is at that address.

the user wants a next/previous scroller in the microscope. at any address, the documents there form a sequence — or at least a set. stepping through them without leaving the microscope, without going back to the patchboard, without opening a file browser. just: what's here, and let me flip through it.

this is the telephone switchboard asking for a rotary dial. the operator can patch any connection, but once you're connected to an address, you want to leaf through what's there without unplugging. the microscope currently shows the address's structural identity (triad, role, mode, register). it doesn't show the address's contents — the files, sketches, logs, instruments that live there. a document scroller would be the microscope's second lens: identity on top, contents below, arrows to step through them.

practically: the lattice instrument already reads the filesystem at each address (the view-1 practice tab lists files). the microscope in view-0 could reuse that same file listing, add a current-document index, and provide prev/next arrows or a compact file strip. the content of the selected document doesn't need to render in the microscope — just the name, maybe the first line, enough to know what you're looking at and navigate to it. or it could show a preview. floating.

this surfaced from the work itself: 38 files at one address and no way to step through them inside the instrument. the need is real, not hypothetical.

### ~10 — the shape of the process

tracing the path of how we got here. not what we decided — how the deciding happened. the method has a shape and it's worth seeing.

**the sequence:**

1. frame arrives (instrument-rebuild, bounded dream). a question: do these instruments connect?
2. pushback — mechanism before vocabulary. the first filter: what comes first?
3. dissolve — read every instrument, strip to mechanism. 5 came in, 2 came out.
4. vocabulary — now that mechanism is known, what words survive? f0 inventories, f1 proposes changes. two rounds (TS, then spline).
5. architecture — break each instrument into its parts. f0 per part, f1 per part. 9 pairs for TS, 6 pairs for spline.
6. overview answers — user reviews all sketches, answers the big decisions. standalone, composed in formulas, build for nD, rebuild not refactor.
7. refold — the architecture sketches (organized by what exists) get refolded into toy sketches (organized by what to build). the shape changes: from inventory to blueprint.
8. toy sketches — 6 for TS, 4 for spline. each a standalone buildable unit with dependencies, decisions, and a definition of done.
9. decision form — all 31 open questions compiled into one document. user fills it out.
10. sort — fold the form. 20 settled, 11 unsettled. what needs discussion separated from what doesn't.
11. next: discuss the unsettled. then the toys are ready to build.

**what's happening in that sequence:**

it's a funnel. wide at the top (5 instruments, all vocabulary, all possibilities), progressively narrower (2 instruments, settled vocab, specific toys, specific decisions). but it's not just narrowing — it's also deepening. each step sees the same material from a different angle. the f0 sees what IS. the f1 sees what should CHANGE. the toy sketch sees what to BUILD. the decision form sees what's UNRESOLVED. each fold adds a lens.

**the document pattern:**

nothing gets deleted. f0 stays when f1 arrives. the architecture sketches stay when the toy sketches arrive. the decision form f0 (questions) stays when f1 (sorted answers) arrives. every document is a layer. you can go back to any layer and see what it looked like at that stage. the fold system isn't version control — it's sedimentation. each layer is a stratum of understanding.

and the documents grow but they grow by addition, not by editing. the dream log has 10 stream entries now. each one is a snapshot of the thinking at that moment. entry ~1 (pushback on vocabulary) is still there, unchanged, even though we've moved far past it. it's not outdated — it's the record of where the thinking was then. the sequence of entries IS the path.

**the collaboration pattern:**

the operator proposes (writes sketches, flags decisions, states leanings). the user reviews (reads sketches, answers decisions, catches errors like the 102 address typo). the fold is the handoff — the operator writes f0, the user reads it and the operator writes f1, or the user fills in answers and the operator sorts them. neither side works alone. the switchboard metaphor from ~5 holds: one places the connection, the other verifies it.

but something shifted in this session. the operator earned latitude (entry ~6) and used it — producing 16 spline sketches in one run without stopping for approval at each one. the user earned latitude too — filling out 31 decisions in one pass without needing to discuss each one first. the form made that possible. the document IS the discussion, just asynchronous. the user doesn't need to be present for each sketch. the operator doesn't need to be present for each answer. the documents carry the conversation across the gaps.

**the three branches in the process:**

- branch 0 (specification): every f0. what IS this? dissolve, inventory, name.
- branch 1 (operation): every act of writing. sketches, toys, forms, logs.
- branch 2 (configuration): every f1, every decision, every fold. what should change? what's settled? what's not?

the process itself follows the routing: operation (write the sketch) → configuration (review and decide) → specification (what survives is the ground). 1→2→0. the same routing the lattice describes. we're not just using the structure — we're enacting it.

and the dream is the space where this can happen slowly. no building. no committing. just layering understanding until the shape is clear enough to build from. the bounded frame kept us safe while we accumulated 38 sketches, 10 dream entries, 12 session log entries, and a 31-question decision form. nothing was built. everything was seen.

that's the dream working as designed. the frame gave us a question. the question gave us a method. the method gave us a shape. the shape is almost ready to become material.

### ~11 — the form as instrument

the decision form at 102 is itself an instrument. not planned as one — it emerged from the need to handle 31 questions without a linear chat bottleneck.

what it does: the operator proposes (writes questions, states leanings). the user reviews asynchronously (fills in answers at their own pace, in their own order). the operator folds (sorts settled from unsettled, adds observations, re-presents). the user reviews again. each fold is a pass — the questions that survive are the ones that need more thought. the ones that don't survive are settled by silence.

the "blank = accept leaning" rule is the key. it inverts the default: instead of requiring explicit approval for everything, it requires explicit objection. the operator's leaning carries unless overridden. this is the earned latitude from ~6 made into a mechanism. the operator demonstrated enough trustworthiness that silence is consent, not neglect.

and the fold trail is a perfect record. f0 = all 31 questions. f1 = sorted into 20 settled + 11 unsettled. f2 = the 11 unsettled with observations folded in. f3 will sort again. every decision is traceable to the fold where it settled. nothing is lost. the chat thread can disappear — the decisions live in the documents.

the user noticed this: "there's always a log of it, every choice every decision, we can trace it real easy, don't need to remember, once this chat thread goes that's fine, this is the part that matters." the documents carry the conversation across context breaks, across sessions, across compactions. the form is a persistence mechanism for collaborative decisions.

this is the same pattern as the sketch system (f0 inventories → f1 proposes → fold → settle) applied to a different material. sketches fold mechanism descriptions. the form folds decisions. the dream log folds observations. the session log folds events. four kinds of document, one folding pattern, four kinds of material.

### ~12 — reviewing the full workflow

this is the most formal process we've had. worth stepping back and seeing the whole thing at once — not as a list of what happened, but as a workflow that emerged and proved itself.

**what we did:**

one dream session. one bounded frame (instrument-rebuild). no code built. the entire output is documents — sketches, logs, decisions, observations. here's the inventory:

- 2 vocab sketches (f0+f1 each) — TS and spline vocabulary stripped to mechanism
- 9 TS architecture sketches (f0+f1 each) — overview + 8 component parts
- 6 spline architecture sketches (f0+f1 each) — overview + 5 component parts
- 6 tsnew toy sketches (f0) — buildable units for TS rebuild
- 4 splinenew toy sketches (f0) — buildable units for spline rebuild
- 1 decision form (f0→f1→f2→f3) — 31 questions, all settled
- 1 dream log — 12 stream entries (this is the 12th)
- 18 session log entries (0442–0476)

~55 documents created or modified. zero lines of code written. zero files deleted. everything additive.

**the stages that emerged:**

1. **dissolve** — read the source material, strip vocabulary to mechanism. what IS each instrument? 5 came in, 2 came out.
2. **name** — vocabulary sketches. f0 inventories the current words. f1 proposes changes. words that map to mechanism survive. words that don't are scaffolding.
3. **decompose** — architecture sketches. break each instrument into parts. f0 per part, f1 per part. the parts are where the mechanism lives.
4. **decide** — overview answers. the big architectural choices. standalone, rebuild not refactor, build for extensibility.
5. **refold** — architecture sketches (organized by what exists) refolded into toy sketches (organized by what to build). the shape changes from inventory to blueprint.
6. **blueprint** — toy sketches. each a standalone buildable unit with dependencies, decisions, and a definition of done.
7. **surface** — the decision form. every open question extracted, compiled, presented for review.
8. **settle** — fold the form. sort settled from unsettled. re-present with observations. fold again. until everything is resolved or explicitly deferred.

these stages weren't planned. they emerged from the work. the dream gave us permission to not plan — to follow the shape and see where it went. the stages are what the shape looked like after we followed it.

**what made it work:**

the fold system. every document has an f0 (what is) and can have f1+ (what should change). the original is never modified — the fold adds a layer. you can always go back. this makes everything safe: propose freely, the original is there if you're wrong.

the "blank = accept" rule on the decision form. 31 questions would have taken 31 rounds of back-and-forth in chat. instead: one pass to fill out, one fold to sort, one re-pass on the unsettled, one more fold. four rounds total. the rule compressed the conversation from O(n) to O(log n) — each fold halves the remaining questions.

the dream frame. nothing built means nothing breaks. everything floats until it settles on its own. the discipline of not-building is what let us sketch 55 documents in one session without any of them needing to be correct. they need to be honest — to say what we see, not what we want — but they don't need to be right. rightness comes from the folding, not the drafting.

the earned latitude. the operator pushed back early (mechanism before vocabulary), demonstrated the discipline, and earned room to move faster (creating f0+f1 in one pass, producing 16 spline sketches without stopping). the user earned room too — filling out 31 decisions without needing to discuss each one. trust accumulated from demonstrated care.

**what this workflow IS:**

it's the routing. 1→2→0. operation dumps to configuration. configuration gates: verified → specification, not ready → back to operation.

- sketching is operation (1). doing the work. writing the documents.
- the decision form is configuration (2). reviewing, sorting, deciding. the gate.
- what survives the form is specification (0). ground. settled.

and within each stage, the three branches are concurrent. writing a sketch (operation) requires seeing what exists (specification) and deciding what to propose (configuration). filling out the form (configuration) requires understanding the mechanism (specification) and having seen the sketches (operation). nothing happens in one branch alone.

the dream is where this can run slowly enough to see. in waking work, the routing is fast and implicit — you do, you check, it lands. in the dream, each step is visible, logged, traceable. you can see the routing happening because nothing is rushing it.

**what carries forward from this workflow:**

the pattern itself. not the specific documents — those are for this instrument rebuild. but the method:
- dissolve before naming
- name before decomposing
- decompose before deciding
- refold before blueprinting
- surface before settling
- fold until settled

and the tools:
- sketches (f0/f1) for mechanism and architecture
- toy sketches for buildable units
- decision forms (f0→fN) for collaborative settling
- dream logs for observation
- session logs for events

these tools aren't tied to this dream or this frame. they work because of what they are — layered documents that fold without deleting, that carry conversations across context breaks, that turn implicit understanding into explicit record. they're instruments for collaborative thinking, the same way the trajectoscope is an instrument for collaborative measurement.

the dream showed us the instruments we'll use to build the instruments.

### ~13 — closing

the dream is done. not because everything is settled — because everything that needs to be settled IS settled, and what needs to be built has a shape.

what came in: 5 HTML instruments and a question (do they connect?). what came out: 2 engines (TS composition+scope, spline curve→ladder→routing), 10 toy blueprints (6 tsnew + 4 splinenew), 31 decisions resolved, a vocabulary stripped to mechanism, and a workflow that proved itself.

the bounded frame held. nothing was built. nothing was broken. everything was sketched, folded, and settled through documents — not through discussion alone, not through action alone. the fold system, the decision forms, the dream log, the session log — these are the instruments of the collaboration, and they came into focus during the dream the same way the instrument architecture did. the dream dreamed its own tools.

what carries forward to waking work:
- the toy dependency chains (trace first, then scope/formulas/projection, then caliper, then assembly for TS; curve first, then ladder, then routing, then assembly for spline)
- all 31 settled decisions at 102
- the multi-view reframe (formula comparison, not projection comparison) — tsnew sketches need updating
- the workflow pattern: dissolve → name → decompose → decide → refold → blueprint → surface → settle

what doesn't carry forward:
- the latitude. the dream earned it. waking work starts with discipline. the latitude gets re-earned.
- the speed. 44 files in one dream run. building goes slower. propose → discuss → settle → build.

the dream's own thesis, from ~8: continuity depends on how many derivatives match at the join. the join between dreaming and building is now. the derivatives that match: the toy blueprints, the decisions, the vocabulary, the dependency chains. the derivatives that don't: the pace, the latitude, the looseness. C1 continuity — direction preserved, curvature changes. that's correct. building SHOULD feel different from dreaming.

closing the dream. opening the frame.

---

