# Review — session — f2 — 260607-055754

Sources: log.session.f2.260606-124256.md (entries 0300–0372), dream.keyboard.f0.260607.md (at 122), frame.intake.f1.260606-144500.md (at 210), lattice.f0.260606-122128.html (live instrument at 200), manifest.session.20260605.md (at 201). Reviews what happened in the f2 log segment, what the dream run revealed about how the branches interleave, what was built, and what the flow teaches about the lattice itself.

---

## What this phase was

Log f2 spans entries 0300–0372. It divides into two distinct modes:

| segment | entries | mode | branch character |
|---------|---------|------|------------------|
| research grounding | 0300–0350 | branch 2 discipline | every step logged, verified, routed, gated |
| dream run | 0352–0372 | branch 1 dreaming | rapid iteration, streams crossing, building and theorizing simultaneously |

The transition happened at a snag. Frame intake chunk 2 (interface work) hit slice 2.2 — "define key bindings for V0 selector." The frame had three words in parentheses: arrows navigate, enter select, space fold. That was a trail marker, not a spec. We read it as a build order and started building immediately. That was the misstep that launched the dream.

---

## The branch 2 segment (0300–0350)

Clean branch 2 operation. Every file found, sorted, logged, verified:

- **0300–0306:** session fold, closing review, schedule fold, research routing observation
- **0308–0316:** frame intake built, research routing charted, frame settled
- **0318–0342:** twelve research compilations surveyed — each read, reflected on, digit-path traced. the survey itself was the first test of the research routing flow (200 → branch 2 → branch 1 guides)
- **0344:** witnessed the survey whole, then folded the frame. five threads surfaced from holding it all at once
- **0346–0348:** extraction (46 verified, 30 applied, 6 speculative) and cross-reference complete
- **0350:** the lattice is a non-linear context window — the insight that emerged from the research phase

This segment produced three major documents at 111 (survey, extract, crossref), completed frame intake chunk 0 (all three slices), and settled source policy F1.

**Character of the work:** methodical, gated, every decision had a digit trace and a triad trail. branch 2 at its most disciplined. the process was tight enough that when the transition to building happened, the contrast was stark.

---

## The transition (0352)

Frame intake chunk 2 started. State persistence (2.0) went clean — wired saveState() calls, verified, logged. Dynamic FILES (2.1) went clean — replaced static object, wired into renders, logged. Then 2.2: keyboard nav for V0.

The frame said "arrows navigate, enter select, space fold." We built tree-walk navigation — v0Focus, v0VisibleNodes, pre-order traversal, arrow keys. File browser logic applied to a lattice. Wrong metaphor entirely. The user's first question was: "what keyboard controls do you actually want?" — the question we should have started with.

**The misstep (0358):** treated the frame's trail marker as a build order. skipped three steps — walk the jobsite, dream, reconfigure. jumped from frame to code. the frame is a projection from theory; when the slice touches the interface, it can't see the layout, the nooks, the actual UX. it needs the walk to become actionable.

This was the gate that opened branch 1. We stopped building and started dreaming.

---

## The dream run (0358–0372)

### What happened

Seven streams ran simultaneously, crossing, colliding, some abandoned, some converging:

1. **modifier theory** — ctrl=noun, shift=verb, alt=mod. 3x3x3 mapped to modifier x value x depth. structurally perfect, ergonomically wrong.

2. **V0 vs V1 philosophy** — V0 is the library, it jumps. V1 walks. arrows belong to V1. V0 gets no arrows. this distinction survived the whole dream.

3. **redundancy discovery** — bare digits always set the last digit, which makes one modifier redundant at every depth. three modifiers minus bare's coverage leaves two. the system collapses gracefully at shallower depths — same pattern as the lattice itself (0 and 000 both exist at the origin).

4. **shift debugging** — shift+0 produces ) not 0. three rounds of blind code fixes. the problem was browser cache, not code. this was the trigger for building the eyes.

5. **building the eyes** — debug overlay, playwright, hot reload. stopped trying to fix the keyboard and built the ability to see first. the eyes serve everything that comes after. sight before subject.

6. **ergonomics killing theory** — hands hit keyboard. right hand on numpad, left hand free. ctrl and shift are pinky reaches, clunky. alt and space are where the thumb lives. the whole theoretical mapping died on contact with the body. the keyboard has geography and the geography doesn't care about your abstraction.

7. **the forming shape** — alt=digit 0, space=digit 1 (needs chord implementation), bare=last, backspace=shallow. not settled. needs hands on it more.

### What the dream produced (built artifacts)

| artifact | location | status |
|----------|----------|--------|
| addr bar shared across all views | lattice.html | working — the keystone of the interface |
| body flex column layout | lattice.html | working — views use flex:1 |
| hotkey system (alt/shift/bare/space) | lattice.html | partial — current code doesn't match latest design direction |
| parseDigitKey (e.code + numpad) | lattice.html | working — handles Digit*, Numpad*, e.key fallback |
| debug overlay | lattice.html | working — collapsible, state panel, key log, error catch, eval |
| hot reload | lattice.html | broken — Last-Modified polling doesn't trigger reload |
| eyes.js (playwright harness) | project root | working — headless tests, screenshots to 100 |
| eyes-test.js | project root | working — shift/numpad test suite |
| eyes-numpad-diag.js | project root | working — raw key event diagnostic |
| 9 screenshots | 100 | captured — init, debug, bare, ctrl, shift, alt, space, numpad |
| dream.keyboard.f0.260607.md | 122 | written — full stream-of-thought trace |

### What wasn't logged during the dream

The dream ran hot — building and theorizing simultaneously. Multiple ideas formed, collapsed, reformed without logging. The shift debugging alone was three rounds of undiagnosed fixes before the real insight ("we need eyes") surfaced. The modifier mapping changed shape four or five times between log entries. Streams got interrupted, some abandoned without record.

The dream log at 122 was written after the fact to recover the trace. It's reconstruction, not real-time recording. That's the threshold: too much logging kills flow, too little loses the trace.

---

## What the flow teaches about the branches

This is the most revealing part. The session demonstrated the branch interleave in action:

### Branch 2 (configuration) mode

Every single decision logged and verified. Everything knew where it came from, where it went, had documentation, reasoning, choices, sorting, planning. Research routing charted. Frame positioned. Files tracked through manifest. Three-point updates at every step. The process was tight, methodical, gated.

**What branch 2 does well:** receives, sorts, verifies, routes. it's the gate. nothing gets through without a signature. the paper trail is complete. you can reconstruct any decision from the log.

**What branch 2 can't do:** dream. when the work hit a snag that needed creative reconfiguration (what should the keyboard actually do?), branch 2 had no mechanism. the frame said "arrows navigate" and branch 2 would have built arrows. the misstep WAS branch 2 trying to do branch 1's job.

### Branch 1 (operation) mode

Rapid iteration. Multiple streams simultaneously. Building and testing and theorizing at once. Ideas forming, colliding, dying on contact with reality. The theoretical mapping dying when hands hit keyboard. Three debug tools built because we couldn't see.

**What branch 1 does well:** dreams, experiments, discovers. it's the playground, the workshop, the place where theory contacts reality and gets reshaped by it. the keyboard design could only emerge from hands on keys, not from frame slices.

**What branch 1 can't do:** keep the paper trail. the dream ran without logging. streams got lost. ideas died without record. when compaction was imminent, we recognized the danger — everything found in branch 1 would be lost if it wasn't brought back to branch 2 for proper storage.

### The interleave

The flow went: branch 2 (research, framing, sorting) → snag at the transition to building → branch 1 (dreaming, building, testing) → recognition that branch 2 was needed again (logging, preserving) → back to branch 2 (dream log, session entries, this review).

That's the routing pattern: 1→2→(0 or 1). Branch 1 generates. Branch 2 sorts and gates. Branch 0 receives what's settled. The branches aren't sequential phases — they're concurrent modes that swap dominance based on what the work needs.

**Key observation:** we used plenty of branch 1 faculties during the branch 2 segment (insight, pattern recognition, connecting research to structure) but didn't recognize it because branch 2's discipline was dominant. It was only when branch 2's discipline broke (the misstep) that branch 1 became the dominant mode. The branches are always all active — it's which one leads that changes.

---

## What the dream teaches about addresses

The dream itself traced addresses conceptually, revealing what kinds of operations and storage live where:

| address | what happened there | what it tells us |
|---------|--------------------|--------------------|
| 100 | screenshots landed — the eyes | sight, testing, verification. what you need to see. |
| 112 | workbench — where code gets built | craft, hands on the material. the doing. |
| 122 | dream log — where thinking gets captured | logic describes state. the whiteboard. erasable. |
| 200 | lattice.html lives here — the instrument being built | intake, receiving. what arrives and gets worked on. |
| 210 | frame positioned the work, then the work outgrew it | frames project from theory. they can't see the jobsite. |
| 222 | session log — every C/O/D captured | the permanent record. what persists across folds. |

The dream also surfaced the routing insight: dream in branch 1, test at 100, sort at branch 2, install at branch 0 when solid. We collapsed this route — went from dream straight to install (editing the live lattice.html directly instead of a sketch copy). The misstep pattern is collapsing the routing, skipping the intermediate steps.

---

## Error accounting

| # | error | entry | category |
|---|-------|-------|----------|
| 1 | built from frame without walking jobsite | 0356/0358 | routing collapse |
| 2 | three blind fixes for a caching problem | 0366 | building without seeing |
| 3 | frame 2.2 marked DONE prematurely | f1 line 47 | status lie — keyboard mapping still floating |
| 4 | edited live lattice instead of sketch copy | 0362+ | routing collapse |
| 5 | dream ran without logging | 0368/0370 | threshold crossed — too little paper trail |
| 6 | hot reload built but never verified | 0372 | building without testing |

**Pattern:** errors 1 and 4 are the same misstep — collapsing the routing. the frame marker wasn't a build order (error 1), and the live file wasn't a sketch surface (error 4). both are the same impatience: skipping the intermediate steps to get to the result faster.

**Error 3 is significant:** frame intake f1 marks 2.2 as DONE with the tree-walk description (arrows, enter, space, v0Focus). that code was thrown away and replaced. the keyboard mapping is still floating. the frame lied about completion because it was updated after the first build, not after the design settled.

---

## What settled this phase

| item | source | confidence |
|------|--------|------------|
| addr bar shared across all views | built + tested | settled — keystone of interface, feels right immediately |
| V0 jumps, V1 walks — clean separation | dream | settled — hasn't needed correction |
| debug overlay as always-available instrument | built + tested | settled — the eyes serve everything |
| playwright harness for programmatic testing | built + tested | settled — screenshots to 100, naming convention works |
| sight before subject (build eyes before building what you look at) | observed | settled — 100 before 112 |
| the body redefines the design, not the logic | experienced | settled — geography doesn't care about abstraction |

## What's still floating

| item | state | what's needed |
|------|-------|---------------|
| keyboard mapping (alt=d0, space=d1, bare=last, backspace=shallow) | forming | hands on keyboard more, space-as-modifier chord implementation |
| space as held-state modifier | unbuilt | keydown/keyup tracking, chord detection |
| right-alt as dedicated setter | unexplored | interrupted stream |
| hot reload | broken | diagnosis with the eyes we built |
| numpad on real hardware | unverified | user test with debug overlay open |
| frame intake 2.2 actual status | falsely marked DONE | needs honest status — floating, not done |
| dream routing (sketch in branch 1, test at 100, sort at 2, install at 0) | observed | hasn't been practiced yet |
| compaction readout visibility | idea only | where does it live? addr bar? debug? always visible? |

---

## Files produced this phase

| file | address | type |
|------|---------|------|
| dream.keyboard.f0.260607.md | 122 | dream log — stream of thought trace |
| eyes.js | project root | playwright harness |
| eyes-test.js | project root | test script |
| eyes-numpad-diag.js | project root | diagnostic script |
| 9 screenshot PNGs | 100 | test captures |
| lattice.f0.260606-122128.html (modified) | 200 | instrument — addr bar, hotkeys, debug, hot reload added |
| log.session.f2.260606-124256.md (extended) | 222 | entries 0300–0372 |
| review.session.f2.260607-055754.md | 22 | THIS FILE |

**Manifest gap:** the manifest at 201 hasn't been updated with the new files from this phase. The dream log at 122, the eyes scripts, the screenshots at 100, and this review are all unregistered. Three-point update needed.

---

## What this phase teaches

### The branches are concurrent, not sequential

All three branches are always active. What changes is which one leads. Branch 2 led the research phase (disciplined, gated, traced). Branch 1 led the dream phase (rapid, creative, stream-crossing). Branch 0 was present throughout (the ground that everything references, the settled items that don't need re-examination). The interleave is the method.

### The threshold exists on both sides

Too much branch 2 discipline kills branch 1 flow. Too much branch 1 flow loses the branch 2 trace. The dream needed to run hot to discover what it discovered — the keyboard mapping couldn't have emerged from methodical frame execution. But the dream also needed to be captured before it dissipated. The right rhythm: dream until something forms, then pause and log, then dream again or build.

### Contact with reality reshapes theory

The keyboard mapping changed when hands hit keys. The debugging approach changed when we couldn't see what the browser received. The navigation philosophy changed when we realized V0 is a library, not a path. Every theoretical construct that contacted reality got reshaped by it. This is branch 1's function: to be the place where theory meets the material.

### The routing matters

Dream → sketch → test → log → sort → install. We collapsed dream → install and paid for it (editing the live file, marking incomplete work as DONE, losing stream traces). The routing isn't bureaucracy — it's the mechanism that lets each branch do its job. Branch 1 needs freedom to experiment without breaking things. Branch 2 needs clean handoffs to sort and verify. Branch 0 needs only settled material. The routing serves all three.

---

## Carry-forward

1. **Fix frame intake f1** — mark 2.2 honestly. the tree-walk description is stale. status should be [float], not DONE. the keyboard mapping is still forming.
2. **Update manifest** — register dream log, eyes scripts, screenshots, this review.
3. **Diagnose hot reload** — use the eyes we built. likely: python http.server doesn't send consistent Last-Modified headers.
4. **Build space-as-modifier** — keydown/keyup held-state tracking for space+digit chords. this is the next keyboard build step when design settles.
5. **Test numpad on real hardware** — user opens debug overlay, presses numpad keys, reads what the browser receives.
6. **Practice the routing** — next keyboard iteration should sketch on a copy, test at 100, sort findings at branch 2, install at 200 only when settled.
7. **Compaction readout** — decide where it lives, build it. the need is real — this compaction was felt before it was seen.

---

## Closing

37 log entries in this f2 segment. Two distinct modes of operation. The branch 2 segment was the tightest, most disciplined work yet — twelve research compilations surveyed, extracted, cross-referenced, every step traced. The branch 1 segment was the most creative — a keyboard design emerged from hands on keys that no amount of frame-following could have produced. The transition between them was a misstep that became a discovery: the branches interleave, they don't sequence. The dream taught us what branch 1 is for. The logging taught us what branch 2 is for. The ground taught us what branch 0 is for. Now we know how they flow.
