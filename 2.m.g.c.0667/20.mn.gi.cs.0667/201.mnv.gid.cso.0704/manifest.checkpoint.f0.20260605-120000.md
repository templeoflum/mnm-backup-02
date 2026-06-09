# Session Manifest — 2026-06-05

## Built

1. **View 0 selector** — foldable tree replacing 3x3 grids
   - Branch groups with full colored borders containing leaves and cells within (containment)
   - Branch label centered above leaves, branchbar as full click target for selection
   - Fold arrows as boxed buttons, stopPropagation separating select from toggle
   - Persistent fold state — children remember when parent collapses (resolution, not traversal)
   - Ctrl+click for full expand/collapse at branch and selector level
   - Two label modes: digits / verb
   - Cell groups outlined by leaf digit color (lineage)
2. **View 0 microscope** — detail panel below selector showing address, structural breakdown, editable triad, position links, register badges
3. **Refresh button** — tab bar, location.reload(), no server needed
4. **State persistence** — sessionStorage preserves activeView, currentAddr, v0Open, v0Collapsed, v0Label across refresh
5. **Code comment at line 604** — still references triad as option, inaccurate

## Settled

- Hard gate: nothing built until settled on both ends (120-122)
- Register-derived names: spec of spec, ops of ops, etc.
- Selector as name
- Digits + verb label modes only in selector
- Ctrl+click for full expand/collapse
- Containment, not hierarchy — mutual, not top-down
- Preservation sort order: 0 → 1 → 2 (planned, not built)

## Floating

- Branch view framing: 0 where are we / 1 what am I doing / 2 where are we going
- Branch-as-mode vision: 0 laboratory/data/ground / 1 sketches/chaos/flow / 2 planning/auditing/carrying forward
- Each view constraining actions to its mode
- "Maintenance" as branch 2 name — too narrow for the framing
- Preservation sort order implementation (settled direction, not yet in code)
- Practical tooling: chat in interface, code editor, file browser, schema/contracts per node, audit/plan/research structures, protocols per address, math/science grounding, data hygiene
- Sub-views per view — each view has three views inside it (not mapped to specific leaves yet, keep light):
  - View 0: file browsing as text, seeing what's where, reading contents, ground-level inventory
  - View 1: the seeing layer, load and render HTML toys/sketches/instruments, visual workspace
  - View 2: strict forms, schema templates, fill-in structures that keep work on track
  - Note: current keystone at 200/210 is stale — settle that before mapping sub-views to leaves

## Structural insights (clear, not yet encoded)

- Digits are lenses: 0 looks until it holds still, 1 won't hold still, 2 notices origin and destination
- The matrix is a verb conjugation, not a grid
- The ratio is the engine — arrival would stop movement
- Fold/unfold is resolution adjustment
- The system breathes — ground inhales, destination exhales, mind is the breathing
- Containment runs both ways — 0 is defined by 000 as much as the reverse

## Existing territory (at 111)

- `lattice.html` — active workbench, modified this session
- `lattice_full.html` — source lattice, triads mapped from here
- `lattice_deep.html` — deep variant
- `lattice_checkpoint_known_good.html` — prior checkpoint
- `sketch_archive_compaction.html`, `sketch_compaction_id.html`, `sketch_compaction_sim.html` — compaction sketches
- `spline_continuity_v2 (4).html`, `spline_continuity_BRIEF.md` — spline work
- `TS_3D.html`, `TS_4D.html`, `TS_fingerprint.html`, `TS_formulas.html`, `TS_BRIEF.md` — ternary timestamp explorations
- `FINDINGS_ternary_TS.md`, `findings.md` — findings
- `RESEARCH_actionable.md`, `RESEARCH_OPERATION_mind_not_map.md` — research docs
- `SKETCH_data_refinery.md`, `SKETCH_deep_address.md` — sketches
- `observations.txt` — observations
- `toy_catalog.md` — toy catalog
- `ux_plan.md` — ux plan
- `DISCIPLINE.md`, `STATE.md`, `HANDOFF.md` — process docs
- **None sorted to other addresses.**

## Existing territory (elsewhere)

- `020/source-archived-intact.111.20260605.044206.zip` — one preservation archive
- `MATRIX` at root — convenience duplicate, outside structure
- `nul` at root — directory listing artifact, outside structure
- All other cells — empty folders

## Stale references

- `200` state: settled/floating lists not updated for this session
- `210` sort order: keystone says 1 → 0 → 2, settled decision is 0 → 1 → 2
- `021`, `022` — empty, structure operation and maintenance undefined
- Compaction engine in lattice.html still uses old sort order

## Pattern observations

- Build order mirrors itself: ground first, destination, mind emerges between
- Encoding mindset in work > documentation about work
- Things float until they sit true through use
- Meaning constructed in exchange, not by either party
- The structure should carry the conversation forward, not memory

## Audit catches

### Conceptual wobbles

1. **Sort order disagreement across patterns.** Build pattern: 0→2→1. Settled preservation: 0→1→2. Original shift register: 1→0→2. Three different orderings for the same structure. Self-similarity says one pattern should appear everywhere.

2. **Tree language saturates the code.** CSS classes: `branch`, `leaf`, `cell`, `v0-sel-leaves`, `v0-sel-leafwrap`, `v0-sel-branchbar`, `v0-sel-cellrow`. Depth labels: "branch / leaf / cell". View 1 minimap: `.w-tree`. Fold arrows: ▶/▼ from file-tree conventions. The vocabulary says hierarchy. The structure says containment.

3. **Microscope position panel uses parent/children/siblings.** Lines 859-883. "Parent" implies authority. If containment is mutual, "contains" and "contained by" would be more accurate than parent/child.

4. **Editable triads in definition view.** Lines 852-856, 902-908. `contenteditable="true"` in View 0. Mutation from the view meant for looking until things hold still. Drift from earlier builds.

5. **View 2 destination grid has no containment structure.** Lines 1222-1234. Flat 3x3 grids per branch. No leaf grouping, no colored lineage. The selector shows containment, the destination grid doesn't. Same structure rendered with two contradictory visual models.

6. **Ring SVG center dot changes color by branch.** Line 1069. The center is the origin — exact, fixed. But the dot recolors based on current address. The origin doesn't change.

7. **Ratio line labels 0 and 1 as symmetric endpoints.** Line 1148. But 0 IS reachable (address 000 = ratio 0.0000). 1 is never reached. The display treats them the same when they aren't.

### Technical gaps

8. **Compaction engine hardcoded to old sort order.** Line 664: `slots[2]=slots[0]; slots[0]=slots[1]; slots[1]=item` — 1→0→2 shift. Settled decision: 0→1→2. Not yet changed.

9. **State persistence incomplete.** Only saves V0 state + view/address. Compaction engine, archive destination, log, cell content all lost on refresh.

10. **`go()` doesn't save state.** Line 700. Minimap clicks change address without persisting. Refresh after minimap nav loses position.

11. **`v0Label` comment says triad.** Line 604. Triad was removed. Comment is stale.

12. **Keyboard nav is View 1 only.** Lines 1155-1162. No keyboard controls in View 0 selector.

13. **Default start: View 1 at address '11'.** Lines 598-599, HTML line 465. System opens in practice at ops of ops. If ground comes first, should it open at 0?

14. **MATRIX and nul at root.** Outside the address structure. Loose objects with no position.

## Audit Pass 3 — Full corpus catches

### Legacy vocabulary in source files

15. **`POLES` variable name.** lattice_full.html:204, lattice_checkpoint_known_good.html:204, lattice_deep.html:265. Stale internal name from earlier framing. Current vocabulary: BRANCHES.

16. **Existence/Cognition/Trajectory as branch names.** lattice_full.html:205-207, lattice_checkpoint_known_good.html:205-207, lattice_deep.html:266-268,336,355,433. Superseded. Current: 0=definition, 1=practice, 2=maintenance.

17. **measured/contemplative/constructive as register names.** lattice_checkpoint_known_good.html:124-126 (explicit in HTML), sketch_archive_compaction.html:241. Superseded. Current: spec/ops/config.

18. **ground/mind/making as CSS classes.** lattice_full.html:53,57-59,66; lattice_deep.html:52,56-58,65; lattice_checkpoint_known_good.html:53,57-59,66. CSS branch identifiers using old names. "mind" and "making" are legacy.

19. **`--is/--does/--goes` as CSS variable names.** lattice_full.html:29, lattice_deep.html:29, lattice_checkpoint_known_good.html:29. Mode-based color naming. Current lattice.html uses value-based `--b0/--b1/--b2`.

20. **`REL={I:'is',D:'does',G:'goes'}` letter-mode map.** lattice_full.html:176, lattice_deep.html:237, lattice_checkpoint_known_good.html:176. Single-letter I/D/G notation.

21. **I/D/G letter notation throughout documents.** FINDINGS_ternary_TS.md (III, DDD, GGG throughout), RESEARCH_OPERATION_mind_not_map.md (III, DDD, GGG + dot notation 0.0.0), SKETCH_data_refinery.md (GGG reference), HANDOFF.md (DDD, GGG, DI references). Current keystone uses numeric 0/1/2 with lowercase n/v/m, i/d/g, s/o/c.

22. **ground/do/goes as branch labels in sketches.** sketch_compaction_sim.html:937, sketch_archive_compaction.html:241,406. "do" and "goes" are mode-row values, not branch names. Current branch names: definition/practice/maintenance.

### Framing and positioning issues

23. **HANDOFF.md would orient a new session incorrectly.** Uses Existence/Cognition/Trajectory (line 64), measured/contemplative/constructive (line 60), I/D/G notation, and defines "keystone" differently (TS anchor block, line 14) from current usage (the addressing system). The doc is largely stale.

24. **STATE.md describes a superseded state.** "the triaxis: form/function/application" (line 17), "the navigable sketchpad" (line 18). Neither term is current. The state doc doesn't describe the current state.

25. **DISCIPLINE.md uses "seeing/building/holding" categories.** Lines 4, 9, 14. Maps conceptually to 0/1/2 but uses different vocabulary than the keystone. "Propose, don't crown" (line 15) maps to the hard gate at 120-122 but is stated differently. Whether this is drift or intentional alternate framing is ambiguous.

26. **toy_catalog.md uses "Track" organization.** Lines 39, 83. "TRACK: Mathematical Foundations", "TRACK: Algebra of Operations" — an independent organizational scheme unrelated to the addressing system. The catalog sits at 111 but doesn't use keystone addresses.

27. **FINDINGS_ternary_TS.md — valid content, legacy notation.** The ternary-addressing findings are rigorous and self-aware (every claim tagged confirmed/provable-impossible/open). The I/D/G notation was current when written. Content worth preserving; notation is legacy.

28. **RESEARCH_OPERATION uses dot notation and I/D/G alongside digits.** Planning document using lattice addresses as instrument. Legacy notation, content still potentially useful.

29. **SKETCH_data_refinery.md uses "ground/do/document" as branch labels.** Line 32: "0-ward / do=1-ward / document=2-ward". "document" differs from current "maintenance"/"where are we going". Dream-stage sketch.

30. **Everything at 111 — positioning question.** TS project files (TS_3D, TS_4D, TS_fingerprint, TS_formulas, TS_BRIEF), spline project files, research docs, sketches, process docs, the parable — all at 111 (method operating). 28 files at one address, zero files at 26 other cell addresses. The structure has a node that's bursting and 26 that are empty.

### Technical legacy in sketch files

31. **sketch_archive_compaction.html uses old sort order.** 1→0→2 shift register. Same as the MATRIX file's `shift: 1 → 0 → 2`. Settled preservation order is 0→1→2 (with nuance: no canonical path, verb on-ramp most accessible, 012 most grammatically stable).

32. **sketch_compaction_sim.html:338 — old shift encoding.** `// shift: 0->2, 1->0, new->1` — the 1→0→2 shift register operation.

33. **sketch_compaction_id.html — "triad" used for compaction ID, not noun·verb·mod.** The triad chain in compaction (fold history) is a different concept from the lattice's noun·verb·mod triad. Two concepts sharing one term.

34. **TS KEYSTONE comment block in source lattice files.** lattice_full.html:2-19, lattice_deep.html:2-19, lattice_checkpoint_known_good.html:2-19. A TS project preamble sitting inside lattice files, mixing project contexts.

35. **Color values shifted between source and current.** Source files: `--is:#62b6f0; --does:#62f0b0; --goes:#f0a862`. Current lattice.html: `--b0:#4488cc; --b1:#44cc66; --b2:#cc8844`. Same hue families, different hex values. Not broken — but the source data was built under slightly different colors.

### What worked (from the corpus)

36. **observations.txt** — Clean. Pure math, precise, no legacy drift, no overclaiming. A model for what findings entries should look like.

37. **FINDINGS_ternary_TS.md** — Rigorous discipline. Every claim tagged. Status ledger at bottom. The epistemic care is strong even where notation is legacy.

38. **findings.md (TS)** — Extensive, self-correcting. Every overclaim caught and labeled within the document. The audit passes (drift-ironing) within it show the discipline working.

39. **TS_BRIEF.md** — Clean cold-start document. Self-aware about overselling risk. The brief format worked well as a door.

40. **the_two_who_built.md** — Stands alone. No structural claims to verify. A parable, not a specification.

### Sort order nuance (user-noted)

The system was built back and forth — there is no one canonical path. The verb on-ramp (1→0→2) is the most accessible, not necessarily the true path. Preservation is about logging and safekeeping ordered by time, so there is a case for 012 — and its address IS 012, the most grammatically stable. The three orderings (build 0→2→1, settled 0→1→2, shift register 1→0→2) may each be correct in their own context rather than contradicting each other.

## Audit Pass 4 — Post-dream fresh-eye probe

### Reframes

41. **The triads already say what the dream said.** Branch triads: `relation · grounds · measure` (0), `presence · minds · awareness` (1), `structure · maintains · order` (2). These are closer to the floating branch framing (ground/workshop/protocol) than the branch names (definition/practice/maintenance) are. The branch names and the branch triads tell two different stories about the same structure. The triads may be the truer reading.

42. **View 1 literally rotates, View 2 literally translates.** View 1 shows the same address through rings, card, minimap, ratio line — multiple visual representations, turning the same thing over. View 2's compaction engine takes items, displaces them through the shift register, moves them upward. The TS rotation/translation correspondence isn't just a metaphor — the views ARE the operations.

43. **Default start (View 1 / address '11') may be correct, not a catch.** You start in the workshop. Not at the ground (things go there after testing), not at the protocols (you need material first). Catch 13 reconsidered — starting at ops-of-ops is starting where work happens.

44. **"Held when grasped" has a boundary at the origin.** The frame describes process — things in flux that may or may not stabilize. But at 000, `unit · holds · one` is not conditional. The origin is exact. The "held when grasped" frame describes the path toward 0, not the state of 0 itself.

45. **"Parent/children/siblings" isn't just hierarchical — it's directional.** Even "contains/contained by" implies direction. What actually changes between 11 and 111 is resolution. "Resolves to" (finer) and "resolves from" (broader) describe the operation without implying authority or spatial direction.

46. **NW word generator mirrors triad grammar.** Line 626: archive names generated as `noun-verb-mod` ("source-staged-intact"). Archives named by the same grammar they're stored in. Self-similarity in the naming, undesigned.

47. **The LABELS dictionary and T triads are two coexisting naming systems.** LABELS (lines 521-535): structural names from register ("spec of spec", "ops of ops"). T (lines 538-577): semantic names from lattice_full.html ("unit · holds · one", "view · connects · continuity"). Both present in the code, unreconciledathe structural name says what it IS positionally, the triad says what it DOES semantically. Two lenses on the same address.

### Reassessments

48. **Catch 1 (sort order disagreement) softened further.** Each ordering may be the same operation weighted differently by context. Build order (0→2→1) = how the ground produced the structure. Shift register (1→0→2) = how new material flows through the system. Preservation (0→1→2) = how time orders things for safekeeping. Three faces, not three contradictions.

49. **Catch 30 (everything at 111) reframed.** If branch 1 IS the workshop, then everything accumulating at 111 isn't a distribution failure — it's the system working. Raw material accumulates where work happens. The empty cells aren't failures to fill — they're evidence that nothing has been through the full cycle yet. The structure is young.

50. **Catch 4 (editable triads in View 0) gains weight.** If branch 0 is where things rest and stabilize, contenteditable in the definition view is editing in the resting place. Disrupting the ground. The drift reading from catch 4 is confirmed by the dream — this doesn't belong in View 0.

## Session digit path

### Address trace

| phase | address | triad | what happened |
|-------|---------|-------|---------------|
| build | 111 | view · connects · continuity | built the selector, iterated through feedback |
| inventory | 200 | delivery · receives · material | received material from build phase |
| manifest | 201 | manifest · confirms · count | wrote the manifest, confirmed counts |
| audit 1 | 221 | trace · audits · path | traced the path, found catches |
| update | 201 | manifest · confirms · count | folded catches into manifest |
| audit 2 | 221 | trace · audits · path | deeper probe, conceptual audit |
| update | 201 | manifest · confirms · count | updated manifest |
| dream 1 | 10x | (principles leaf) | floated branch framing, reflected |
| audit 3 | 221 | trace · audits · path | full corpus audit |
| update | 201 | manifest · confirms · count | compiled all catches |
| dream 2 | 10x | (principles leaf) | "held when grasped", rotation/translation |
| audit 4 | 221 | trace · audits · path | fresh-eye post-dream probe |
| update | 201 | manifest · confirms · count | final manifest update |

### Cognitive operation trace

| step | addr | triad | operation |
|------|------|-------|-----------|
| build | 211 | motion · builds · form | wrote code |
| build | 110 | attention · watches · knot | user found knot |
| build | 012 | adjustment · corrects · range | correction scoped |
| build | 211→110→012 | (loop ×10) | build cycle, always on ops leaf |
| gate | 121→211 | reason→motion | skipped settle, violation |
| catch | 110 | attention · watches · knot | user caught it |
| reinforce | 122 | creativity · carries · potential | carry, don't build yet |
| dream | 100 | wonder · bounds · frame | "what does selector tell us?" |
| dream | 001 | ratio · reciprocates · scale | containment both ways |
| dream | 021 | rate · cycles · stream | "the system breathes" |
| dream | 000 | unit · holds · one | matrix as verb conjugation |
| inventory | 200 | delivery · receives · material | received build output |
| inventory | 202 | schedule · sorts · inventory | sorted into categories |
| inventory | 201 | manifest · confirms · count | wrote manifest |
| audit | 221 | trace · audits · path | traced code path |
| audit | 212 | coherence · adapts · snag | found snags |
| audit | 011 | comparison · analyzes · deviation | measured deviation |
| audit | 201 | manifest · confirms · count | folded catches in |
| audit | 221→212→011→201 | (loop ×3) | three passes, each deeper |
| dream | 100 | wonder · bounds · frame | branch framing |
| dream | 001 | ratio · reciprocates · scale | "held when grasped" |
| dream | 101 | lucidity · reconfigures · scene | rotation/translation wobble |
| dream | 102 | chaos · untethers · finality | let both readings float |
| audit | 011 | comparison · analyzes · deviation | triads say what dream said |
| audit | 101 | lucidity · reconfigures · scene | reconfigured catch 13 |
| audit | 000 | unit · holds · one | origin holds unconditionally |
| trace | 022 | point · plots · graph | plotting this path |

### Digit mechanics observed

- **The 1 rotates through positions.** Building: 1 in all positions (111, immersed in verb). Dreaming: 1 in first position (10x, on the verb's branch). Auditing: 1 in last position (201/221, using verb as register). The verb travels through the session, changing WHERE it sits, not WHETHER it's present.

- **The audit loop is a leaf toggle.** 201 ↔ 221 shares first digit (2, maintenance) and last digit (1, ops). Only the middle toggles: state (0) vs preservation (2). Same branch, same register, different leaf. The oscillation is between which maintenance system we're operating.

- **111 → 200 is the only full context switch.** All three digits change. Every other transition changes one digit at most. The shift from building to inventorying is a complete reorientation — and it only happens once.

- **All operational cells share the last digit = 1.** 111, 201, 221. The verb column runs through the whole session. Even when branch and leaf change, the register stays ops. We are always *doing*.

- **The triads named the operations before we performed them.** `manifest · confirms · count` at 201 — we wrote a manifest that confirmed counts. `trace · audits · path` at 221 — we traced the path and audited it. `view · connects · continuity` at 111 — the process connected things and maintained continuity. The triads are descriptive, not prescriptive, but they described accurately.

- **Dreams jump branches (2→1→2), audits toggle leaves within branch 2 (20↔22).** The dream breaks the maintenance context to revisit the workshop — a branch switch. The audit stays in maintenance and oscillates between subsystems — a leaf toggle. Two different scales of movement.

### Correction: linearization flagged

The digit mechanics above describe the session path as if the system has a pipeline (1→2→0, workshop→protocol→ground). This is a linearization. The system does not have stages. All three branches are simultaneous — the separation is in interface and projection, not in the structure. What changes is the angle you're projecting through, not which stage you're in.

Key corrections:
- The schedule landing at 202 is not "passing through branch 2 on its way to branch 0." It belongs at branch 2 as an active sorting instrument. Period.
- Ground (branch 0) is not the end of a pipeline. It crystallizes things too solid for the other branches to hold in motion, AND it prunes/composts what they can't carry. Both operations. Both resting.
- Preservation location (020) is a placeholder — the shape of the system is there but hasn't been revisited. Not settled.
- The views are projection angles, not pages or stages. View 0 projects through the ground lens, View 1 through the workshop lens, View 2 through the protocol lens. Same system, three projections.
- Frames and schedules are tools imposed on a fluid system to make it manageable. The system underneath is always whole, always all three branches. The rhythm gives you something to follow, not a track you're locked to.
- There are no hard rules, no hierarchy, only containment. Different views have different paths, different on-ramps. The whole system is itself.

## Floating: Document addressing protocol

### Proposed naming convention (not settled)

`type.scope.fN.YYYYMMDD.md`

- **type**: manifest | schedule | frame | audit
- **scope**: project, chunk, or work area
- **fN**: fold number — how many sort cycles this document has been through
- **YYYYMMDD**: date

### Proposed lifecycle (not settled)

```
manifest (captures) → schedule (sorts, f0) → frame (focuses) → execute
                            ↑                        |
                            └── re-sort (f1,f2) ←── output + parked items
                            |
                            ↓ (diminishing returns)
                        preserve at 020
```

### Open questions (parked for research)

- **Ternary fold numbering?** Binary f0/f1/f2... is simple but not self-similar. Ternary fold tracking would be consistent with the system. What would base-3 fold depth look like? Does it compose with the preservation lens levels (S m H D M Y)?
- **Where does fold addressing apply?** Schedules and frames for sure. Preservation archives — tracking year/month/day fold depth. Manifests — if audits fold into them (currently they do, four passes into one manifest). Contracts and dependencies — do they track fold depth?
- **Scope naming convention.** Free-form string? Keystone address? Chunk name? Need to be human-readable AND machine-parseable for the gating system.
- **Audit as separate document or manifest section?** Currently audits live inside the manifest. If audits carry fold depth independently, they may need to split out.
- **Retirement criteria.** "Diminishing returns" is the principle. What does that look like mechanically? When does a schedule's fold count signal it's done?
- **12 research dives to ingest.** Grounding in real math/science/theory. This is its own chunk — getting verified external knowledge into the ground at branch 0. Feeds everything downstream.

### Planning framework (shape, not settled)

**Two-stage planning:**
1. **Free-running list** — exhaustive, unlimited. Audits and manifests feed it. All chunks, slices, rungs, parked items. No compression.
2. **Framed plan** — one chunk, three slices, three rungs each. Pulled from the free-running list. Ternary frame for navigability.

**Execution rules:**
- Rung extensions allowed (deeper into current work — small, easy, high-impact)
- New slices park to preliminary intake with: what, why parked, where it came from
- Parked items re-enter the free-running list for next sort cycle
- No new slices added to active frame — new commitment goes through full sort

**Sorting criteria (compete, don't resolve automatically):**
- Requirements (what depends on what)
- Impact (what enables the most downstream work)
- Priority (what matters most right now)
- Conflicts between criteria surfaced and walked, not automated

**Chunk inventory (free-running, audit-aligned):**

| chunk | status | gates | catches |
|-------|--------|-------|---------|
| A: Settle floating ground | active, walking slowly | none — root | 1,13,33,41,43,47,48 |
| B: Ungated code fixes | ready, paused (build gate) | none | 4,9,10,11,12,50 |
| C: Gated code fixes | blocked | A | 2,3,5,6,7,8,45 |
| D: Dependency/gating system | design stage | A (partial) | — |
| F: Source legacy + preservation | decision: preserve as record | A (for annotation) | 15-22,27-29,31-32,34,35 |
| G: File distribution + cleanup | blocked | A, D, preservation | 14,30,49 |
| H: Practical tooling | dream-stage | everything | — |
| I: Research ingestion | ready, uncharted (12 dives) | none — feeds A | — |
| J: Fold addressing system | parked for research | I | — |
| K: Carry-forward rebuilds | horizon | A, D, I, G | 23,24,25,26 |

*Chunk E dissolved — keystone updates folded into A (new A7/A8), process doc rebuilds into K, source preservation into F.*

**A slices (expanded):**

| slice | item | catches | status |
|-------|------|---------|--------|
| A1 | Branch framing — mode vision, naming | 41 | floating |
| A2 | Branch naming — definition/practice/maintenance vs triads | 41 | floating |
| A3 | Position vocabulary — resolves to/from | 3,45 | floating |
| A4 | Sort order resolution — three faces or one winner | 1,48 | floating with nuance |
| A5 | View-as-mode — constrain actions per view | 50 | floating |
| A6 | "Triad" dual usage — lattice vs compaction | 33 | floating |
| A7 | Update keystone CLAUDE.md — 200 state, 210 sort | — | gated by A4 |
| A8 | LABELS / T dual naming — design or drift | 47 | floating |

## Process notes

- Gate violation occurred once (naming changes built before settled), caught, reinforced
- Session modes: building → dreaming → inventorying → auditing → dreaming → auditing → tracing → planning
- Building paused until user confirms settled
- The loop spirals: each pass through build→dream→audit produces material the previous pass couldn't generate
