# Development Log — Compositional Algebra

A chronological record of the development from initial functional-analysis study to the finished framework. Reconstructed from session transcripts; structural events and decisions only.

> **Note on historical paths.** Entries before Session N+5 (the see/know/do reorganization) reference paths from the pre-reorganization structure: `framework/`, `works/`, `projects/`, and project-root posture documents at the root. These paths no longer exist as such — `framework/` became `know/`, `works/` became `do/works/`, `projects/` became `do/projects/`, and posture documents moved to `see/`. The path references are preserved in entries to maintain historical accuracy; they describe what was true at the time of each entry. See `see/ARCHITECTURE.md` for the current see/know/do structure.

---

## Session 1 — 2026-05-25 / 2026-05-26 (early)
**Transcript:** `2026-05-26-01-20-31-spatium-composition-kit.txt`

### Mathematical foundation

Started from a Banach space hierarchy diagram. User had intuitive familiarity but no formal vocabulary. Built up from sets through topological, Hausdorff, normal, metric, complete metric, normed, Banach, inner-product, Hilbert spaces. Each layer defined by what it can measure.

Recurring user pattern: stop and demand depth at any point that was glossed (the bubble in Hausdorff separation, the mechanics of completion, the integral for function length, why squaring is the operation). Pace driven by user's stated comprehension.

### Recognition

User dumped an earlier corpus of intuitive structural sketches — toroidal fractals, spherical-hex networks, rotational dimensions. Reframed: user wasn't inventing new mathematical objects but lacking vocabulary for objects already heavily developed in other rooms (functional analysis, gauge theory, topology). Shift from "building something new" to "acquiring vocabulary for what was already seen."

### The essay — first pass

User commissioned an essay titled "What is space?" with rules: no first-person experience claims, no claims about reader cognition, no AI tropes. Drafted section by section.

Key revisions:
- Cut a section about the brain not being a computer (off-thesis)
- Rejected "perception isn't measurement" framing — real cut was lossy compression
- Caught that the (3,4)→length=5 example needed Pythagorean grounding before functions could be approached as vectors

### The spline emerges

Mid-essay, user asked what restructuring would speak truest to the material. First explicit use of "spline" — borrowed from a video on the continuity of splines and from animation/design vocabulary. Defined as: piecewise-smooth structure with explicit continuity grades between segments. The essay was rebuilt around a 7-beat spline.

### Three configs

After the spline-restructured essay, user requested three audience configurations from a single source:
- Config A: deeply technical, no hand-holding
- Config B: somewhat technical, artist/visual thinker
- Config C: zero math comprehension, no terminology

Each config produced from the same spline.

### Research passes

Two research artifacts commissioned to ground the essay against existing literature:
1. Etymology and cultural history of "space"
2. Phenomenology, physics, contemplative practice literature review (Bergson, Husserl, Cassirer, Bohr, Wheeler, Rovelli, Barad, Yogācāra, Gauḍapāda)

Discovery: user's intuitions had been tracking an existing cross-disciplinary conversation. Research integrated into a revised spline with added beats for etymology and contemplative-practice grounding. Final spline settled at 7 movements after adversarial audit.

---

## Session 2 — 2026-05-26 (mid-morning)
**Transcript:** `2026-05-26-05-00-18-spatium-kit-buildout.txt`

### Two more registers

After AI-trope audit and adversarial rewrite of the technical essay, user introduced configuration space as a missing concept (prompted by external video about Hilbert spaces).

Two additional registers beyond the three configs:
- **Mythic register** — required first defining the grammar (parallel construction, threshold language, archaic-but-clear syntax)
- **Fairytale** — child protagonist named Reach; same thesis carried by narrative rather than argument

Recognition that the same source material could be performed across many registers, each accurate within its domain.

### The kit hypothesis

After the fairytale, user named the realization: the work isn't a single essay but a *composition* in the classical sense — a score that can be performed across many mediums. The thing being built needed to be modular: a kit.

Naming candidates surveyed: SPATIUM, REACH, the rod-and-the-reach. SPATIUM selected. Working framing: "spatium: composition in seven movements."

### First kit architecture

Drafted initial kit components:
- Spline (the score)
- Voice (register × stance, with positioning added mid-session as the third axis: audience/who-is-being-addressed)
- Medium (substrate, mark-making, etc.)
- Visual World (aesthetic family)
- Audio Aesthetic
- Realization specs

Visual worlds initially included: geometric/diagrammatic, Renaissance/painterly, mythic/symbolic, chrome-glitch, naturalistic illustration, plus others tested via image generation. User pushed back on math-visualization needing its own family — resolved into geometric subset rather than separate world.

Image generation iterations confirmed: aesthetic prompts drifted toward photorealism without explicit medium specification. Established the medium/world distinction (medium = how it's made, world = what it depicts).

---

## Session 3 — 2026-05-26 (mid-day)
**Transcript:** `2026-05-26-09-47-28-spatium-kit-buildout.txt`

### Function-signal architecture

User pushed for self-similar structure across all kit references. Established the **function-signal pattern**: each layer is defined as a function with declared inputs (signals consumed) and outputs (signals emitted). Cross-layer dependencies become explicit. Movements act as inputs/outputs in the same shape as layers.

Decisions during this session:
- **Voice goes last** in the composition order — it reads visual and audio surfaces, so those must exist first
- **Math precedes surface** — math primitives are content; surfaces render content
- **Signal flow becomes a dependency graph** — each layer reads what it depends on, every layer reads from the spline
- **Spline-invariants per layer per movement** — what every realization must preserve
- Identity signal universal to all layers; movement-affinities per layer

Reference docs built in this pattern: spline, medium, voice, audio aesthetic, visual world, math visual, math audio, prompt construction, realization catalog. Each got a "function definition + how-to-construct-a-new-X" structure.

Sub-functions formalized:
- **Audio**: tonality × texture × timbre × rhythm × pacing × spatialization × phrasing (7)
- **Medium**: substrate × mark-making × surface × edge × color (5)
- **Visual World**: palette × light × line × figure × atmosphere (5)
- **Voice**: register × stance × positioning × configuration (4 at this stage)

User caught that sub-functions had to be the constructable units — composition happens at sub-function granularity, presets are bundles.

### Math primitive review

Added graph/network to math primitives. Discussed basis as a primitive. Math vocabulary signal reordered to precede surface signals in the dependency graph.

---

## Session 4 — 2026-05-26 (afternoon)
**Transcript:** `2026-05-26-11-53-57-spatium-dimensio-kit-buildout.txt`

### First full kit audit

Cross-document coherence audit: all references checked for drift against the function-signal pattern. Continuity-grade vocabulary extended from just C¹/C² to a more complete set after user flagged the grade vocabulary as thin.

### Realization catalog — first 8

Eight realizations drafted as a starter set: Technical Essay, Fairytale, Sacred Ritual, Chrome-Glitch Audiovisual, Critique, Personal Letter, Lecture, Children's Book.

User caught a category error: realizations were initially being specified per-movement-of-each-realization, which conflated the catalog (realization specs) with deployment (which spec runs on which movement). Realization specs are single triplet patterns; deployment is which spec runs at each movement.

### Sacred Ritual full pass

First end-to-end realization construction. All 7 movements run through:
- Image prompt triplets generated
- Two-stage narrative drafting (outline pass then voice-fill pass — added after user pointed out that single-pass drafting back-and-forthed)
- User caught that image prompts had drifted from cold-start to assuming carry-over — patched the prompt-construction discipline to require cold-start prompts at the prompt-construction stage, with polish-stage carry-over as a separate concern

### Naming shift

Mid-session, user proposed renaming the piece from SPATIUM to **Spatium Dimensio** — the field and the measure of the field as a compound name reflecting the thesis. Full sweep update across all docs.

### Script as separate layer

User pushed back on narrative-as-final-output. A narrative reads as one thing; performance requires staging — entry cues, transitions, voice attribution, stage direction. Script established as a downstream layer that integrates narrative + cues + transitions. Established that scripting is a universal capability — a technical essay can still be performed, so script applies even to non-performance realizations.

---

## Session 5 — 2026-05-26 (evening)
**Transcript:** `2026-05-26-21-30-19-spatium-dimensio-sacred-ritual-buildout.txt`

### Spline signals expanded

User caught that the spline was sending 5 signals when every layer needed a signal — i.e., the spline needed to emit a typed signal *to* every consuming layer. Signal vocabulary expanded so every downstream layer has a corresponding spline output.

### Realization workflow formalized

The construction process itself was documented as its own reference (not previously formalized).

Eight passes:
1. Signal pull (read all spline signals per movement)
2. Content composition (math visual + math audio + characters + objects + motifs — composes in parallel)
3. Surface composition (medium + visual world + audio aesthetic)
4. Voice composition
5. Triplet assembly (image prompt + audio prompt + narrative prompt)
6. Narrative generation (in-flow, two stages: outline 6a, voice fill 6b)
7. Script generation
8. Presentation assembly

**Horizontal discipline** (one pass per stage across all 7 movements before moving to next pass) established as default; vertical discipline (one movement complete before next) flagged as acceptable for short or exploratory work.

### Presentation as a layer

Up to this point, presentation (typography, layout, format-wrap) had been ad-hoc. User asked whether the work itself should inform presentation. Presentation Reference added as Pass 8, with its own sub-functions: typography × color and ground × spatial rhythm × compositional behavior × format wrapping.

---

## Session 6 — 2026-05-26 (late evening)
**Transcript:** `2026-05-26-22-14-03-spatium-kit-tier-refactor.txt`

### Sacred Ritual HTML

Final assembly of Sacred Ritual into single HTML presentation. Mobile dark-mode override required after user flagged that the device was overriding intended styling.

User caught that Movements VI and VII had script content that should have appeared in narrative — i.e., the script generation was inventing material that should have been generated upstream and merely staged at the script stage. Root cause: ambiguity about where narrative ends and script begins. Patched the workflow to require all narrative material from Pass 6; Pass 7 only stages.

### Cue source-locality

User caught that transitions and starting cues were repeating across movements with minor word variation rather than being genuinely different. Identified the problem as a sourcing discipline issue, not a boundary-rules issue: cues should source from the upstream material locally relevant to their position, not be generated as a separate category.

Established **cue source-locality** as a script-generation discipline: transition cues source from Transition Reference; opening cues source from the movement's own surface and voice composition; mid-movement cues from whatever sensory shift is happening at that position.

### Six new realizations

Six additional realization specs added, expanding catalog from 8 to 14: drafted to test variety and stress the kit.

### Tier system — first formalization

User caught that the preset structure was disjointed: some things were called "presets" at layer level, others at realization level, and the relationships between them weren't named.

Formal tier system established:
- **Tier 1** — Parameters (atomic sub-function options)
- **Tier 2** — Layer presets (named bundles within a single layer)
- **Tier 3** — Realization specs (complete cross-layer bundles)

Naming discipline: layer presets get layer-rooted descriptive names (the *Mythic* visual world preset, the *Liturgical* script preset), not realization-coupled names ("Sacred Ritual visual world" → wrong). Catalog points realizations at presets; presets do not reference back.

Medium-versus-world split clarified: painting is medium-level (how it's made), mythic is world-level (what it depicts). User caught that "mythic painting" and "oil painting" conflated these.

Full back-patch of layer references to reflect the tier system.

---

## Session 7 — 2026-05-27 (current session)
**Transcript:** `2026-05-27-00-53-00-compositional-algebra-framework.txt`

### Catalog audit and rebuild

User caught that newly-drafted realizations (Newsroom Long-Read, Museum Wall Text, Hacker Manifesto) used invented vocabulary — referenced sub-function options that didn't exist in the layer references ("Empirical stance" being one example: the realization invented it without first adding it to Voice Reference).

Diagnosis: **bottom-up construction discipline violated**. The catalog should pull from defined Tier 1 options; new realizations that need new vocabulary must extend Tier 1 first, then compose up through Tier 2.

Three invented-vocabulary catalog entries demolished. Three rebuilt bottom-up: Field Notebook, Bedtime Lullaby, Funeral Rite. New Tier 1 options added explicitly (Empirical stance, Pencil/graphite mark-making, Lightly textured surface, Hand-drawn/variable edges, Acoustic/plucked timbre, Strophic phrasing, Earth-and-black palette).

### Reflection

User invited reflection on the kit so far from the LLM's vantage point. Discussion of what's distinctive about the framework's score-and-performance separation.

### Cosmic horror realization → Affect sub-function

User identified a gap: cosmic horror and existential thriller realizations. Initial attempt to specify these revealed an actual missing sub-function — the existing four Voice sub-functions (register × stance × positioning × configuration) couldn't carry "stricken," "disoriented," "afraid."

User's intervention: don't add a single stance to cover this; ask whether emotional state needs its own sub-function. Result: **Affect** added as the fifth Voice sub-function with 11 options (Composed default + Curious, Tender, Grieving, Yearning, Stricken, Afraid, Disoriented, Numb, Angry, Exalted). Voice formula updated to Register × Stance × Positioning × Configuration × Affect.

### Lock concept

During the affect work, the question came up: how does the *Polemical critic* preset signal that Angry is constitutive (not Composed-with-Angry-as-option)? User proposed: **lock parameters from override**.

**Locked parameter** added to the tier system: a Tier 2 preset can declare specific sub-function choices as constitutive of its identity. Overrides remain possible but explicitly leave the preset's identity. Soft lock with strong convention.

### Voice preset rebuild

While back-patching voice presets to include Affect and locks, latent issues surfaced:
- **Polemical critic** referenced a "Critic" register that didn't exist; rebuilt with Engineer register (preserving the prosecutorial intent) and Cynic stance + Angry affect (locked)
- **Intimate first-person** referenced a "self" register that didn't exist; rebuilt with Everyman or Realist
- All 6 voice presets rebuilt with explicit locks + affect

### Catalog back-patch for Affect

All 11 (then 13) catalog entries updated with explicit Affect specifications. Funeral Rite cleanly differentiated from Sacred Ritual as Affect=Grieving override on the same Mythic celebrant preset (vs Sacred Ritual's Affect=Composed). Chrome-Glitch Audiovisual properly specified as Affect=Numb (its flatness previously uncaptured).

### Cosmic Horror and Existential Thriller — built bottom-up

With Affect and lock concept in place, the originally-blocked realizations were built. New Tier 1 options added explicitly first:
- Voice — Positioning: **Testimonial**
- Visual World — Palette: **Off-natural / sickly**
- Visual World — Light: **Pall / wrong daylight**
- Visual World — Atmosphere: **Cosmic indifference**, **Quiet dread**

New Tier 2 presets:
- **Testimonial script** preset
- **Recovered document** presentation preset

Two realizations composed as siblings: Cosmic Horror (Stricken affect, Cosmic indifference, Ambisonic spatialization) and Existential Thriller (Disoriented affect, Quiet dread, Stereo wide). Sharing Ink+wash medium, Testimonial script, Recovered document presentation; differing in atomic Visual World + Audio + Voice register.

Catalog now at 13 realizations.

### Framework generalization

User raised: the kit's modularity means a test spline could iterate faster on signal flow, prompt construction, voice accuracy, presentation. Beyond that — the framework should be formalized as a storytelling system for any spline, with works opened to public reinterpretation.

Three options surfaced and discussed:
- Option 1: Test spline as internal harness (framework stays Spatium-named)
- Option 2: Kit with multiple works, framework-and-works separation
- Option 3: Framework as primary, named independently, Spatium as one work within it

Option 3 selected based on user's stated goal of opening works to public reinterpretation.

### Naming arc

Multiple naming candidates considered and discarded:
- Splinework (focused too narrowly on spline as substrate)
- Splinework as activity vs splinework as artifact (slipperiness)
- Spline scoring (good for the activity of authoring a spline, less good as framework name)
- Algebraic Composition (closer)
- **Compositional Algebra** (selected)

Reasoning: the framework is a structured space (algebra) over compositional choices. Tier system is the algebra's structure. Sibling-realization patterns are nearby points in the realization space. Locks are constraints on the algebra. "Compositional Algebra" names what is actually being built.

### Vocabulary discipline

Recursive-prose problem identified: "Compositional Algebra" + "composing a realization" creates root-collision in prose. User proposed **constructing a realization** as the activity verb.

Final vocabulary stack:
- **Compositional Algebra** — the framework / discipline
- **Spline scoring** — the activity of authoring a spline score
- **Spline score** — what spline scoring produces
- **Realization construction** — the activity of constructing a realization from a spline score
- **Realization** — what realization construction produces

"Compose" preserved where it correctly names what *layers* do internally (composing a voice, composing a visual surface).

### Restructure

Directory layout reorganized:
- `compositional_algebra/README.md` — framework entry-point
- `compositional_algebra/framework/` — 12 work-agnostic docs (layer references, workflow, catalog, glossary)
- `compositional_algebra/works/spatium_dimensio/` — 6 Spatium-specific docs (spline, transitions, characters, objects, motifs, provenance) + work-specific README

New framework README written from scratch, introducing the framework independent of Spatium. Spatium README rewritten to be work-specific, pointing to the framework rather than duplicating it.

Glossary updated: entries added for Compositional Algebra, Spline scoring, Spline score, Realization construction; outdated entries (Realization, Script preset) patched.

---

## Pending

- Test/calibration spline (3-movement work under `compositional_algebra/works/[name]/`) to validate the framework's generality and serve as fast-iteration development harness
- Resolve Shape-vs-declared-continuity-grade conflict in Spatium Dimensio (see Open Findings)

---

## Open Findings (historical — see handoff/OPEN_QUESTIONS.md for live state)

> Live open questions now live in [`handoff/OPEN_QUESTIONS.md`](handoff/OPEN_QUESTIONS.md). The entries below remain here as the historical record of when each finding was first surfaced and the reasoning around it at that time. When an open question closes, the resolution lands as a new DEV_LOG entry (in the chronological session log above this section).

### Image and audio prompts lack a voice-fill equivalent (12-pass asymmetry)

After the 12-pass workflow restructure (version `20260527-130000`), substitution (Pass 6) and outline (Pass 7) apply cross-modally to all three Pass 5 prompts (image, audio, narrative). Voice fill (Pass 8), however, is narrative-only.

**The asymmetry:** Narrative goes through four progressive refinements before generation: form (Pass 5) → identity (Pass 6) → trajectory (Pass 7) → voice fill (Pass 8, the actual prose). Image and audio go through three: form (Pass 5) → identity (Pass 6) → trajectory (Pass 7). After Pass 7 the image and audio prompts are descriptive paragraphs ready to serve the script or to be handed to external generators.

**Why this might be right:** Image and audio prompts at the end of Pass 7 are fully committed in content. Their register (how the description reads) comes from medium + visual world + audio aesthetic Identity declared at Pass 5. There may be no equivalent "writing pass" needed because the prompts are descriptive specifications, not voiced prose.

**Why this might be wrong:** Substitution + outline produce structurally complete prompts but may not produce ones that read with the same kind of intentional surface as narrative prose written under a voice spec. The image prompt's *language* — its sentence rhythm, vocabulary register, the way it draws attention through a scene — might benefit from a surface-polish pass that does for image/audio prompts what voice fill does for narrative.

**Resolution path:** Run multiple cross-modal verification realizations under the 12-pass workflow. Compare the read quality of image and audio prompts after Pass 7 against the read quality of narrative after Pass 8. If the image/audio prompts feel structurally complete but read flatly, that's a signal that a surface-polish pass is wanted. If they read well as-is, the asymmetry stands.

**Status:** open; deferred until more 12-pass tracked generations are available for comparison.

### Workflow signal flow diagram saved to framework

After the 12-pass workflow restructure, operator (hedawn) asked for the workflow signal flow diagram to be saved as a file rather than only existing in conversation. The visual map of the 12-pass flow is a useful orientation document and worth shipping with the framework.

**Patch:**

- Created `framework/diagrams/` directory
- Added `framework/diagrams/workflow_signal_flow.html` — standalone HTML file with inline SVG, supports light and dark mode via `prefers-color-scheme`. ~18KB, single file, no external dependencies. Open in any browser.
- Added `framework/diagrams/README.md` explaining what lives in this directory
- Cross-referenced the diagram from `framework/realization_workflow_reference.md` (as "visual companion" near the top), `README.md` (in the directory tree), and `SURVEY.md` (in the navigation order — added as step 2, between orientation and reading the prose workflow reference)

**Why standalone HTML rather than an image or markdown:**
- SVG-in-HTML supports dark mode via CSS variables, matching how the rest of the framework's diagrams should look in both modes
- No external dependencies — opens in any browser, including offline
- Editable: text inside the SVG is real text, not rasterized; the diagram can be updated by editing the file
- Renders consistently across machines, unlike screenshots

**Pattern for future diagrams:** the `framework/diagrams/` directory is the home for visual companion documents. When architecture changes warrant a new diagram (or a regeneration of an existing one), add it here. Diagrams are companions to the prose references, not replacements — the prose is authoritative.

**Version bumped to `20260527-134500`.**

### Two more diagrams added: spline signal anatomy and three-tier composition

Operator (hedawn) asked what other diagrams would be helpful. After ranking candidates, picked two:

**`framework/diagrams/spline_signal_anatomy.html`** — Shows what one movement emits: eight typed signals (Identity, Math vocabulary, Visual, Audio, Voice, Character, Object, Motif), each labeled with content and downstream consumer. Color-coded by role: purple for framework-wide drivers (felt quality, math content), teal for surface / voice form signals consumed at Pass 5, blue for work-specific content signals consumed at Passes 6 and 7. Layout uses a central hub (the movement) with eight surrounding signal boxes arranged in a grid above and below — avoids the cycle-ring layout problem since these aren't a cycle.

**`framework/diagrams/three_tier_composition.html`** — Shows how a realization spec (Tier 3) decomposes into six layer presets (Tier 2), each of which decomposes into atomic sub-function choices (Tier 1). Worked example uses Calibration's Realization A so the abstract tier concept is concrete. Voice preset's expansion to its five sub-function atomic choices is shown explicitly; the other five layer presets are shown at Tier 2. Includes notes on locked vs overrideable parameters and on the atomic composition path (Realization B's approach).

**Cross-references added:**
- Spline signal anatomy referenced from `framework/realization_workflow_reference.md` Pass 1 (Signal pull)
- Three-tier composition referenced from `framework/glossary.md` Tier 1, Tier 2, and Tier 3 entries
- Both added to `framework/diagrams/README.md` file listing
- Both added to top-level `README.md` directory tree
- Both added to `SURVEY.md` navigation (now grouped under a single diagrams entry listing all three)

**Diagrams considered but deferred** (listed in `framework/diagrams/README.md` for future reference):
- Continuity grades C⁰ / C¹ / C² visualization — would help S2 → S3 formalization, but defer until that stage is being earned
- Cross-modal substitution worked example (three columns × two rows) — would benefit from more 12-pass tracked generations to draw from
- Generation lifecycle state machine — defer until the lifecycle is more fully exercised across realizations

**Version bumped to `20260527-142000`.**

### Two more diagrams added: layer architecture map and continuity grades

Operator clarified they wanted all of the original three diagram candidates plus the three-tier stack — the prior add was the three-tier stack and spline signal anatomy; this round adds layer architecture map and continuity grades.

**`framework/diagrams/layer_architecture_map.html`** — The framework's nine layers in dependency order (math → content → surface → voice), each split into Identity (authored, constant per realization) and Trajectory (math-driven, varies per movement). Examples from Calibration's Realization A. Two-column grid: Identity on the left, Trajectory on the right, one row per layer. Color-coded by layer category (math = purple, content = blue, surface = teal, voice = coral). Answers the recurring question "where does property X live?" — to find any property, ask: is it authored once or does it vary per movement?

**`framework/diagrams/continuity_grades.html`** — Three side-by-side panels showing the felt-quality function f_n plotted across a movement join under each continuity grade (C⁰, C¹, C²). The C⁰ panel shows a V-corner (value matches, tangent breaks). The C¹ panel shows tangent-matching with curvature-mismatch (an S-bend). The C² panel shows a single smooth curve passing through unchanged. Annotations explain the math (function continuous; function and derivative continuous; function, first, and second derivative continuous) and the felt experience (a turn; a register shift; an unfolding). This is the most genuinely-illustrative diagram in the set — it makes the math-to-felt correspondence visible. Useful for spline authoring at joins and for understanding the S2 → S3 formalization stage.

**Cross-references added:**
- Layer architecture map referenced from `framework/prompt_construction_reference.md` (after the Identity/Movement form/Length/Anti-drift block explanation) and from `framework/glossary.md` Identity and Trajectory entries
- Continuity grades referenced from `framework/parameter_space_reference.md` (in the "How continuity grades relate to f_n" section)
- Both added to `framework/diagrams/README.md` file listing
- Both added to top-level `README.md` directory tree
- Both added to `SURVEY.md` diagrams sub-list

**Total diagrams now: five.** workflow_signal_flow, layer_architecture_map, spline_signal_anatomy, three_tier_composition, continuity_grades.

**Diagrams still deferred:**
- Cross-modal substitution worked example — would benefit from more 12-pass tracked generations to draw from
- Generation lifecycle state machine — until the lifecycle is more fully exercised across realizations

**Version bumped to `20260527-150000`.**

### Math primitive gap (Calibration uses primitives not in framework's eighteen)

Surfaced during the post-housekeeping Realization A verification run (`calibration.a.hedawn.20260527-103000`). Calibration's `spline_reference.md` uses these math primitives in its per-movement signals:

- Visual primitives: "line segment with endpoint" (the path), "threshold" (the window-as-boundary), "aperture" (the window as openable), "transition" (the air crossing the threshold), "release"
- Audio primitives: "sustained tone", "silence between breaths", "release of pressure"

None of these are in the framework's eighteen named math primitives (Vector, Basis, Vector space, Dimension, Inner product, Orthogonality, Slerp, Manifold, Function space, Fourier, Fractal dimension, Configuration space, Hilbert space, Projection, Topology, Spline/continuity, Cauchy, Graph/network).

This is **pre-existing**, not introduced by the housekeeping pass — Calibration was authored with these primitives before they had a documented framework home. They are being used as authoritative work-vocabulary; the spline's per-movement signals are coherent and the realizations construct from them.

**Resolution options:**

1. **Extend the framework's primitive vocabulary** to include line segment, threshold, aperture, transition, sustained tone, silence-as-event, release-of-pressure. These are mathematically meaningful (line segments are basic geometry; thresholds and apertures are topological boundary concepts; transitions are state-change events; sustained tone and silence are temporal-acoustic primitives; release-of-pressure is a thermodynamic-acoustic primitive). Each would need a framework entry in `math_visual_reference.md` or `math_audio_reference.md` with consistent treatment (mathematical content, modal counterpart, framework affordances, anti-drift).

2. **Document them as score-local extensions** in Calibration's dependencies. The framework gains a documented pattern for score-local primitives that doesn't try to promote them into framework-level. Calibration declares "this work extends the framework's primitive vocabulary with the following work-specific primitives:" and lists them.

3. **Hybrid:** promote the mathematically-general primitives (line segment, threshold, aperture, transition) into the framework; leave the more specifically-acoustic ones (silence between breaths, release of pressure) as score-local.

**Status:** deferred decision. Worth resolving before Stage S3 (polynomial commitment) or A1 (operations named), since both formalization stages will benefit from a stable primitive list.

### Shape derivation conflicts with Spatium's declared continuity grades

After adding Shape as a sub-field of Identity (Approach × Within × Departure), an audit of Spatium Dimensio's seven movements against its six declared continuity grades surfaced a conflict:

| Join | Departure(N) → Approach(N+1) | Declared | Shape-derived |
|---|---|---|---|
| I→II | Gradual rise → Gradual rise | C¹ | C² |
| II→III | Steep rise → Steep rise | C² | C² ✓ |
| III→IV | Level → Level | C¹ | C² |
| IV→V | Steep fall → Steep fall | C² | C² ✓ |
| V→VI | Gradual fall → Gradual fall | C¹ | C² |
| VI→VII | Gradual fall → Gradual fall | C² | C² ✓ |

Three joins (I→II, III→IV, V→VI) declared C¹ resolve to C² under the proposed Shape rules. The C¹/C² alternation was a deliberate structural pattern in Spatium (C¹ at "new arrives," C² at "what's there unfolds"), suggesting either Shape's continuity-grade rules need refinement, or Spatium's Shape specs need tangent-magnitude asymmetry to produce C¹.

**Status:** Spatium-specific Shapes left as drafted; resolution deferred until the framework's continuity-grade rules stabilize via test-spline calibration.

### Continuity grades capped at C² (open extension point)

The framework currently supports C⁰, C¹, C² continuity grades. Higher-order grades (C³+) are mathematically valid but require extending Shape with a fourth sub-function (tangent-of-tangent) to verify them honestly. Deliberately deferred until a spline score needs the distinction. See `transition_reference.md` Note on higher-order continuity.

### Prompt construction leaked framework-internal vocabulary into generator prompts

Surfaced during Calibration construction of Realization A. Two related drift patterns:

1. **Meta-vocabulary leak.** Narrative prompts contained references to layer-internal patterns (e.g., "Approach-and-Arrive motif in its arrive phase"). Generators have no access to motif references; named motifs and their phases are framework-internal abstractions that must translate to concrete sensory/structural specification at the prompt boundary.

2. **Cold-start violation.** M2 and M3 narrative prompts referenced prior movements ("continuous with previous movement"). Prompts must cold-start — generators have no memory across calls. Carry-over framing belongs in polish, not in prompt construction.

**Root cause:** Pass 5 (Triplet assembly) was copying framework reference vocabulary verbatim into prompts rather than translating to generator-accessible material.

**Patch:** Prompt Construction Reference updated with explicit translation discipline (see `framework/prompt_construction_reference.md` anti-drift section). Framework vocabulary translates to sensory specification at the prompt boundary. Cold-start required for all prompts.

### Polish stage eliminated; substitution made explicit at Pass 6a

Surfaced after the prompt vocabulary patch. Polish was nominally part of the workflow but functionally underused — Calibration ran both realizations without invoking it; anti-drift constraints were being applied implicitly inside prompts rather than as a separate stage.

**Root cause:** Polish carried two distinct jobs (anti-drift constraints + cross-movement continuity) that needed different mechanisms across modalities. Bundling them under one label obscured that they belonged in different places.

**Patch:**
- **Anti-drift** is now inline in prompts at the appropriate block (no separate polish stage). Material constraints, vocabulary restrictions, convention preservation, period markers all appear inside the prompt where they're needed.
- **Continuity material** routes by modality: narrative continuity → Pass 6a (substitution), where work-specific identities and cross-movement consistency get woven into the outline. Image/audio continuity → framework-external production stages (reference images, shared tonality specs, human-in-the-loop polish) — the framework specifies what continuity should hold; the production stage enforces it through modality-specific mechanisms.
- **Pass 6a renamed** from "outline" to "substitution and outline" — substitution is now load-bearing: this is where character/object/motif references are read for continuity material and woven into the outline before voice fill in Pass 6b.

This also clarifies the routing of content layers: they contribute per-movement scene material to Pass 5 prompts (cold-start) AND continuity material to Pass 6a for narrative (work-specific identity across movements). Same content references; two different extractions for two different passes.

### Audio established as temporal substrate; visual reframed as spatial moment within it

Previous framework treated audio and visual surface layers as parallel peers at Pass 3. Audit surfaced that this didn't reflect either developmental order (utero hearing precedes sight), evolutionary order (vibration-sensing precedes vision), phenomenological order (sound is omnidirectional substrate; vision is directional selection within it), or the actual practice of *Spatium Dimensio* (drone as ground throughout; visual elements emerge from sonic ground rather than vice versa).

**Patch:** Audio surface composes first; visual surface composes second, reading the audio surface output as upstream context. Voice continues to compose last, now explicitly speaking "from within the sonic substrate and the spatial moment within it."

**Affected files:**
- `framework/realization_workflow_reference.md` — Pass 2 (Math Audio before Math Visual) and Pass 3 (audio surface before visual surface) reordered
- `framework/voice_reference.md` — formal signature reordered: `AudioSurface × VisualSurface` (was `VisualSurface × AudioSurface`)
- `framework/visual_world_reference.md` — formal signature now includes `× AudioSurface`; layer inputs declare audio surface as upstream
- `framework/medium_reference.md` — same
- `framework/prompt_construction_reference.md` — dependency graph reordered; workflow steps 1, 3, 4 updated
- `compositional_algebra/README.md` — signal-flow diagram reordered
- `works/spatium_dimensio/spline_reference.md` — signal-ordering line updated: Audio → Visual → Voice (was Visual → Audio → Voice)
- `works/calibration/spline_reference.md` — same

**Rationale:** Sound's primacy is structural, not metaphorical. The framework now reflects what Spatium has been doing in practice and what cross-traditional wisdom about sound consistently holds. Light is faster; sound is older. The framework's signal flow now respects the older.

### Voice translation discipline added

Surfaced during Calibration construction. Narrative prompts were inconsistent across movements in how voice was specified — sometimes prose-style ("Everyman register, Realist stance"), sometimes compact notation ("Everyman × Realist × Intimate × Solo × Composed"), sometimes with parenthetical overrides. Three different formats for the same voice. Additionally, the sub-function names themselves are framework-internal vocabulary that generators cannot read.

**Root cause:** No formalized rule for how the Voice spec (framework-internal: Register × Stance × Positioning × Configuration × Affect) translates to the narrative prompt (generator-facing: must use translation discipline).

**Patch:**
- Voice spec translates once per realization into a generator-facing description block
- Translation block is constant across movements (voice spec holds constant by default; per-movement variation is the exception)
- Translation block is the opening of every narrative prompt for that realization
- Per-movement scene material appends after the constant translation
- Realization specs gain a "Voice translation" field containing the generator-facing translation
- Wrong/right examples in Prompt Construction Reference updated to include voice spec translation example

**Affected files:**
- `framework/prompt_construction_reference.md` — new Voice Translation section; narrative prompt block order updated; wrong/right list extended
- `works/calibration/realizations/realization_a.md` — Voice translation field added
- `works/calibration/realizations/realization_b.md` — Voice translation field added

### Editorial commentary in surface composition cut

Surfaced during Calibration construction. Surface composition output contained justifying commentary ("the atmosphere reads as gentle because the audio substrate is gentle"; "both renderings agree with each other; the spline asked for both qualities"). These statements are self-narration about composition rather than composition itself — wasted processing and false implication of causal relationships between layers that are merely both responding to the same spline.

**Discipline going forward:** State the spec. No justification for why layers cohere. No commentary on layer agreement. The spec is the spec.

Not a structural patch (no doc changes required) — documented here as a working principle for future composition runs.

### Framework-wide audit after audio-precedence patch

After the audio-as-temporal-substrate change touched signatures across three layers and reordered two passes, a full-framework audit was performed to find orphan references — places that hadn't been updated to match the new structure.

**Findings discovered and patched (~30 patches across ~15 files):**

1. **Audio-precedence orphans** — signal lists in catalog, workflow Pass 1, glossary, Spatium README, Spatium spline reference closing section; visual-first informal patterns in calibration README, framework README signal list, math reference "parallel" claims
2. **Polish residue** — Spatium transition reference (3 spots), Calibration verification claim 2
3. **Pass 6a substitution routing** — calibration character/object/motif references missing Pass 6a routing as a connected layer
4. **Shape consistency** — no layer reference mentioned Shape in Identity input declarations despite Identity now including Shape; patched across all 6 layer references (sub-function template inputs also updated)
5. **Voice five-sub-functions** — catalog, cross-axis section, glossary, Spatium spline reference (7 occurrences of "four sub-functions" → "five sub-functions"); content layer refs left at "four sub-functions" since those refer to character/object/motif sub-function counts (different from Voice)
6. **verification.md sanity** — Claim 2 and Claim 8 updated to verify audio-precedence and Math Audio → Math Visual ordering

The audit found roughly twice as many orphan references as the audio-precedence patches themselves had created. This is the cost of structural changes; subsequent structural changes should expect similar audit overhead.

### READMEs updated to reflect current framework state

After the audit, all three READMEs and the DEV_LOG were updated to reflect the framework's current state:

- **Framework README** — vocabulary section expanded (Shape, Voice translation, Substitution, Translation discipline); Status section rewritten to enumerate current active-development additions (Shape, audio-first surface composition, polish elimination, Pass 6a substitution, translation discipline, Voice translation)
- **Spatium Dimensio README** — added Current Status section noting Spatium is on hold while framework iterates through Calibration; flagged the Spatium Shape/continuity-grade open finding
- **Calibration README** — framework-feature exercise list expanded from 5 items to 9 items (added: audio-first surface composition, Pass 6a substitution, Voice translation discipline, translation discipline at prompt boundary); Realizations section now notes both have Voice translation fields applied
- **DEV_LOG** — this entry and the audit entry above

### Spatium Dimensio quarantined during Calibration iteration

**Decision:** While the framework is iterating through Calibration, Spatium-specific files (`works/spatium_dimensio/*`) are not updated to track ongoing framework changes. Only the framework itself and Calibration are kept current.

**Rationale:** Framework changes during Calibration touch signatures, vocabulary, and signal-flow patterns. Back-applying each change to Spatium as we go duplicates work and risks compounding inconsistencies — the Spatium docs would need re-revisiting after each subsequent change. Better to finish framework calibration, then do a single coherent back-application to Spatium that integrates all learnings at once.

**Scope of quarantine:** Spatium README, spline reference, transition reference, character/object/motif references, provenance notes — all left as currently written. They may contain references to old workflow patterns, old vocabulary, or old layer signatures. This is expected and accepted during quarantine.

**Out of scope (still gets updated):** the framework itself (`framework/*`), the framework README, the DEV_LOG, Calibration (`works/calibration/*`).

**Exit condition:** Calibration verification passes against the stabilized framework; framework declared stable; single coordinated patch-pass applied to Spatium that brings it up to date with all accumulated learnings.

**Known orphans in Spatium during quarantine:** the open finding about Spatium's declared continuity grades vs Shape-derived grades (3 joins conflict); any other inconsistencies surfaced by framework changes since this quarantine note.

### Generator-isolation requirement for verification

**Surfaced during Realization A's third in-conversation run.** User flagged that successive runs of Realization A were producing nearly identical prose despite cold-start prompts. Root cause: when narrative generation runs inline in the same conversation as prompt authoring, the generator has access to authoring context (prior outputs, framework references, prior runs) that an actual cold-start generator would not. The prompt may be deeply insufficient and the generated prose may still look correct because it was drawn from authoring context, not from the prompt.

This is a structural verification problem, not a craft problem. It means:

- The framework's claims about cold-start prompt sufficiency cannot be verified from within the authoring conversation
- Translation discipline cannot be tested when the conversation that authored the prompt also generates from it — the framework vocabulary still lives in the authoring context
- Reproducibility-by-others is a primary framework claim that has not actually been tested
- In-conversation runs verify *structural* properties of prompts (vocabulary present in text, block order, signal flow) but cannot verify *sufficiency* properties (whether the prompt contains what a cold-start generator would need)

**Patch (hybrid approach):**

Two-level verification discipline established:

- **Level 1 (in-conversation, fast iteration):** Generator runs inline with explicit isolation discipline — declare what's used, explicitly disregard prior runs and authoring references. Catches structural drift, vocabulary leaks visible in prompt text, signal-flow violations. Suitable for dev iteration.
- **Level 2 (external generator, milestone verification):** Cold-start prompt handed to a separate conversation, separate model instance, or another operator with no access to authoring context. Required for prompt sufficiency, reproducibility, translation discipline robustness, voice translation quality. Reserved for milestone verification once Level 1 is clean.

**Affected files:**
- `works/calibration/verification.md` — verification discipline section added at top; each claim tagged with L1 / L2 / L1+L2; three new claims added (Claim 10 cold-start sufficiency, Claim 11 translation discipline at boundary, Claim 12 reproducibility-by-others); overall pass/fail split into L1 and L2 thresholds
- `framework/realization_workflow_reference.md` — Pass 6b discipline updated with in-conversation generator note
- `framework/prompt_construction_reference.md` — Core Principles extended with cold-start sufficiency requires external verification note

**Implication for dev workflow:** Calibration runs going forward apply Level 1 discipline explicitly — declaring what's being used as input, explicitly disregarding prior runs. Level 2 verification deferred to a later milestone stage where external generators (separate conversations, other model instances, other operators) test the framework's claims about reproducibility and prompt sufficiency. The framework remains in active iteration; full verification waits for stabilization.

### Generative/freeze/edit cycle formalized; generation tracking added

**Surfaced during in-conversation Realization A comparison runs.** Multiple runs of the same realization spec were producing nearly identical prose. Two issues converged:

1. **Context drift** (already logged under generator-isolation): the authoring conversation was supplying gap-filling content the prompts hadn't.
2. **Missing model of generative cycles:** the framework treated each "run" as a complete artifact rather than as a sample from a generative distribution. Without a model of generation-as-sample-from-distribution, there was no way to distinguish "this is generation 1, generation 2 should look different" from "this is the realization, period."

**Patch:**

A realization spec is a generator function. The same spec invoked multiple times produces multiple samples that share invariants (voice character, surface, scene anchors, continuity) but differ in specific instantiation (specific prose, specific image content, specific audio events). The framework now formalizes three phases:

- **Phase 1 — Generation (high variance):** invoke the spec; produce a sample; status `live`
- **Phase 2 — Freeze:** select a generation as working draft; status transitions to `frozen`; no further regeneration from the prompt
- **Phase 3 — Edit (surgical):** refinements via surgical edit to the frozen draft; each edit produces an edit-suffix artifact; original frozen file preserved

Generation identity is durable through naming: `{work}.{realization}.{operator}.{YYYYMMDD-HHMMSS}[.{edit-suffix}]`. UTC timestamps. Operator signature included so multi-operator reproducibility (Claim 12) becomes trackable.

**Affected files (new):**
- `framework/generation_tracking_reference.md` — full reference: ID format, header block, status transitions, edit-suffix protocol, connection to verification
- `works/calibration/realizations/generations/calibration.a.hedawn.20260527-041500.md` — Realization A run promoted to formal generation
- `works/calibration/realizations/generations/calibration.b.hedawn.20260527-043000.md` — Realization B run promoted to formal generation

**Affected files (modified):**
- `framework/realization_workflow_reference.md` — Pass 9 (freeze and tracking) added after Pass 8; workflow renamed from "eight passes" to ten (Pass 0 + 1–8 + 9)
- `compositional_algebra/README.md` — vocabulary section includes generation tracking; Status section updated

**Operator signature:** the framework's primary maintainer signs as `hedawn`. Other operators contribute generations with their own signatures.

### Dependencies declaration and compatibility check added

**Surfaced during generation tracking discussion.** With generations tracked, framework version became a meaningful field — but the framework had no explicit version, and scores had no explicit declaration of what they needed from the framework.

The deeper problem: a score may reference vocabulary that doesn't exist in the loading framework instance. Without a declaration of dependencies, the failure mode is silent and confusing ("this preset doesn't render") rather than loud and specific ("Watercolor preset not found in framework v2026-05-15; introduced in v2026-05-20").

**Patch:**

Each work declares dependencies in `works/{work}/dependencies.md`:
- Minimum framework version required
- Base framework references used, with specific presets/sub-functions/options
- Score-local extensions (if any, in `works/{work}/extensions/`)
- Compatibility notes (framework features required)

A framework instance loading a score runs **Pass 0 — Dependencies check** before composition begins. The check is mechanical: either every declared dependency resolves, or the check fails with a specific list of missing items. The result is recorded in the generation header.

Framework gets a single source of truth for version: `framework/VERSION` containing a date string (`2026-05-27`). Bumped on meaningful changes (reference signatures, workflow, vocabulary). Not bumped for typos or doc reformatting.

**Extension promotion path:** score-local extensions can be promoted to framework base when they prove generally useful. Promotion is deliberate (not accidental). Framework iteration policy for Calibration specifically: vocabulary discovered during Calibration construction goes to framework base directly, not to extensions — Calibration is the iteration harness, by definition. Other works follow the standard local-extension-then-promote path. Score popularity / cross-work usage triggers the promotion consideration.

**Affected files (new):**
- `framework/VERSION` — single-line date file (currently `2026-05-27`)
- `framework/dependencies_reference.md` — full reference: format, check protocol, extension authoring, promotion path
- `works/calibration/dependencies.md` — Calibration's declaration

**Affected files (modified):**
- `framework/realization_workflow_reference.md` — Pass 0 added before Pass 1
- `compositional_algebra/README.md` — vocabulary section includes dependencies and framework version

**Spatium during quarantine:** Spatium's `dependencies.md` not authored yet. It would require an audit of what Spatium uses, and the quarantine principle says we defer Spatium audits until framework stabilizes. Spatium's dependencies will be authored as part of the single coordinated update when Spatium is un-quarantined.

### Framework version stamp precision corrected

Initial implementation of `framework/VERSION` used date-only format (`2026-05-27`). User flagged this was insufficient: with iteration pace currently at multiple meaningful framework changes per day, date-only versioning collapses distinct framework states into the same string.

**Patch:** Framework version now uses `YYYYMMDD-HHMMSS` format (UTC, second precision), matching the generation ID timestamp convention exactly. Convention consistency across version strings and generation timestamps means a single parsing/sorting discipline applies to both.

Format: `20260527-044500`. Bumped on every meaningful framework change.

**Affected files:**
- `framework/VERSION` — content updated to second-precision format
- `framework/dependencies_reference.md` — template format and semantic versioning note updated
- `framework/generation_tracking_reference.md` — example header in reference updated
- `works/calibration/dependencies.md` — Minimum required and Last tested against fields updated
- `works/calibration/README.md` — prose reference to framework version updated
- `compositional_algebra/README.md` — prose reference to framework version updated
- `works/calibration/realizations/generations/calibration.a.hedawn.20260527-041500.md` — Framework version, Realization spec version, Generated at fields updated
- `works/calibration/realizations/generations/calibration.b.hedawn.20260527-043000.md` — same

### Voice translation shorthand violation caught and patched

**Surfaced during in-conversation Realization A second generation.** Operator (hedawn) caught that the narrative prompts in stored generation files contained the shorthand `[voice translation, as above]` for M2 and M3, with only M1 having the full voice translation populated. This was a translation-discipline violation: each cold-start prompt must be self-contained, and an "as above" reference assumes the generator can see other prompts — which it cannot.

**Root cause:** Convenience drift during generation file authoring. The voice translation is constant across movements within a realization, and "as above" felt like reasonable shorthand for human readability. But cold-start prompts are not authored for human readability — they're authored for isolated generator consumption. The shorthand pattern silently broke cold-start sufficiency.

**Patch:**

- **Existing generation files repaired.** Both `calibration.a.hedawn.20260527-041500.md` and `calibration.b.hedawn.20260527-043000.md` had all narrative prompts populated with the full voice translation text. Six prompts touched.
- **Discipline added to Prompt Construction Reference.** New explicit principle: "Full population required — no shorthand. Each narrative prompt must contain the complete voice translation text inline." Shorthand patterns called out specifically: "as above," "see M1's voice translation," any other gesture toward content elsewhere in the document.
- **Wrong/right pair added** to the Core Principles list:
    - Wrong: `[voice translation, as above]` in any prompt after the first
    - Right: full voice translation text populated verbatim in every narrative prompt
- **Verification Claim 11 (Translation discipline) extended** with explicit scan for shorthand references — "as above," "see M1," "[voice translation, as above]," cross-movement carry-over framing. L1 check now includes these patterns. L2 check includes "if the generator asks 'what voice translation are you referring to,' the prompt violates cold-start sufficiency."

**Framework version bumped** to `20260527-050500` to reflect the prompt construction discipline change.

**Affected files:**
- `framework/VERSION` — bumped
- `framework/prompt_construction_reference.md` — Voice Translation section extended; wrong/right list extended
- `works/calibration/verification.md` — Claim 11 extended with shorthand scan
- `works/calibration/realizations/generations/calibration.a.hedawn.20260527-041500.md` — three narrative prompts repaired
- `works/calibration/realizations/generations/calibration.b.hedawn.20260527-043000.md` — three narrative prompts repaired

**Generalization:** any prompt-level discipline that relies on the prompt being self-contained must be enforced against shorthand. This is the same shape as the original cold-start violation (carry-over framing across movements), just applied to within-document references. Future discipline patches should consider whether shorthand patterns could erode the discipline; if so, name them explicitly.

### Same-spec generativity tested across both realizations (L1)

Four tracked generations now exist: two of Realization A, two of Realization B. The four were produced to test Claim 3 (same spec yields multiple valid realizations) and to verify that the generative/freeze/edit cycle works in practice.

**Generations:**
- `calibration.a.hedawn.20260527-041500` — A, run 1
- `calibration.a.hedawn.20260527-045500` — A, run 2
- `calibration.b.hedawn.20260527-043000` — B, run 1
- `calibration.b.hedawn.20260527-051000` — B, run 2

**Observations:**

Same-spec pairs (A vs A', B vs B') share invariants (voice character, surface aesthetic, scene anchors, continuity grades, Window continuity material, motif arc) and differ in specifics:
- A vs A': different room (bookshelves vs columns of light from higher windows); different latch detail framing ("where my fingers will go" vs "where fingers have pressed it over years"); different M3 release valence (smell-of-outside vs room-becoming-bigger-by-being-connected)
- B vs B': both land "daylight is wrong" but with different kinds of wrongness (color-temperature/clock vs geometric-angle/notebook); different room layouts; different affect-break mechanisms in M3 (suppressed-hope admission vs methodological-insistence admission)

Cross-realization at any generation shows the spec-level differentiation: A is intimate-domestic-Composed; B is technical-testimonial-Stricken-with-anomaly. Voice modulation across all five sub-functions verified across multiple generations, not just at single-sample comparison.

**L1 evidence supports:**
- Claim 3 (same spline yields multiple valid realizations) — at both spec-level and within-spec generation-level
- Claim 4 (voice modulation across five sub-functions) — verified at register, stance, positioning, affect across all four generations; configuration not varied (both realizations use Solo)
- Claim 6 (continuity grades constrain transition output) — C¹ and C² land consistently across all four generations, with realization-specific valence (A renders C² as release; B renders C² as persistence-through-opening)
- Claim 8 (content layers compose correctly and feed downstream) — Window continuity material (brass, tarnish, verdigris/green at contact points, swollen sill from disuse) present in all four generations
- Claim 11 (translation discipline at prompt boundary) — all four generations have full voice translation populated, no shorthand, no framework vocabulary leaks

**L1 limits unchanged:** previous generations are in context for every subsequent generation; variance may reflect operator steering rather than spec generativity. The four-generation pattern provides circumstantial evidence (the variance is consistent with spec-driven generation rather than mere paraphrase) but does not constitute proof. L2 testing (independent operator, no access to prior generations) remains required for conclusive verification of Claims 3, 10, 11 (L2 portion), and 12.

**Status:** all four generations are `live`. No freeze decisions made yet. The framework's generative/freeze/edit cycle is verified through the act of producing live samples; the freeze and edit phases will be exercised when a working draft is selected for refinement.

### Honesty pass: formalization roadmap added

**Surfaced during reflection.** Operator (hedawn) asked: where did we start, where are we now, is "Compositional Algebra" still accurate, are we actually using real spline math, where are we hand-waving?

**Honest assessment:** the framework's structural discipline is real and load-bearing. The formal-mathematical framing is, in many places, gestural — vocabulary borrowed from spline math, type theory, and algebra organizes thinking and motivates discipline but does not deliver the formal content the vocabulary implies. Specifically:

- "Algebra" — composition operations exist (preset composition, override application, locking, substitution, translation, realization construction) but have no formalized carrier, signatures, or laws. No proven associativity, idempotency, distributivity.
- "Spline" — piecewise segments joined at knots, but movements are authored as prose + Shape labels, not as polynomial functions. Continuity grades (C⁰/C¹/C²) are classification rules, not derivations from polynomial join conditions.
- "Functor" — layers are functions; no categories defined; no structure-preservation proofs.
- "Propositional equality" / "refinement type" / "dependently-typed signal-flow algebra" — all aspirational.

**Decision:** earn the math in staged increments. Names ("Compositional Algebra," "spline scoring") are preserved as evocative motivators; honesty is achieved by marking formal claims as aspirational and documenting the path to earning them.

**Patch:**

New file `framework/formalization_roadmap.md` lays out two parallel earning paths:

- **Spline stages (S1–S5):** S1 felt-quality parameter space definition; S2 movements as continuous functions of local time; S3 polynomial commitment (continuity grades become real derivable conditions); S4 authoring convention (Shape becomes operational polynomial-constraint interface); S5 basis representation (optional).
- **Algebra stages (A1–A4):** A1 operations explicitly named with signatures; A2 laws conjectured; A3 laws verified by argument or testing; A4 algebraic structure named.

Each stage is small enough to verify; each is useful by itself; later stages depend on earlier ones within each path. Spline and algebra paths are independent. The roadmap includes per-stage status (currently all "Not started"), cost-benefit analysis, choices that need to be made, and next intended step.

**Marking framework as gestural where appropriate:**

- Framework README's formal opener now marked as "(aspirational — see formalization roadmap)"; the gestural status of the formal vocabulary is acknowledged inline.
- Note added to framework README about how to read **Formal:** tags throughout the framework — as organizers and motivators, not as earned formal-mathematical content.
- Calibration spline reference's Shape section now notes that Shape is currently category-based and continuity grades are currently classification rules; references the formalization roadmap.

**Commitments made by the roadmap:**

- Honesty about current state in framework docs that make formal claims
- Documenting stage progress as it happens
- Not adding new formal-vocabulary gestures going forward (existing vocabulary is grandfathered; we don't extend it)

**Affected files:**
- `framework/formalization_roadmap.md` (new)
- `framework/VERSION` — bumped to `20260527-053000`
- `compositional_algebra/README.md` — formal opener marked aspirational; note about **Formal:** tags added; vocabulary and Status sections include formalization roadmap entries; current-version prose updated
- `works/calibration/spline_reference.md` — Shape section notes current category-based state and references roadmap
- `works/calibration/dependencies.md` — Minimum required and Last tested against updated

**Next intended step (per roadmap):** Stage S1 + S2 together. Low-cost; gives the framework first real mathematical content; doesn't commit to anything we'd regret. Choices to make: what's in parameter space S (scalar vs vector; open vs bounded); continuous vs continuously differentiable; how movement-local time relates to actual duration. Not undertaken today — documented as the next stage on the path.

### Stages S1 and S2 completed

**Approach:** Operator (hedawn) confirmed undertaking S1+S2 together. Discussion converged on choices:

- **S1 — parameter space:** S = ℝ (felt intensity, single scalar, unbounded). Matches Shape's existing slope-and-curvature vocabulary cleanly. Smallest honest commitment that grounds Shape; can be extended to a vector at later stages if a multi-axis Shape becomes useful.
- **S2 — continuous functions:** Each movement n has `f_n: [0, 1] → ℝ`, continuous. Parameterization is local movement time (t=0 movement start, t=1 movement end), not wall-clock duration. Determinism committed as principle (given the spec, f_n should be fully determined) — operational at S4.
- **Continuity only at S2** (not yet differentiability). Differentiability comes for free at S3 with polynomial commitment.

**External design heritage reviewed:** Operator surfaced a prior Parameter Motion Protocol (live-performance ratio-based parameter animation system). Analysis: their use of phase as derived parameter (rather than accumulated time) aligns with our S2 approach and reinforced the determinism principle. Their resolver model (multi-contributor weighted sums with conserved weight budget) and ratio-based cross-element composition language are potentially relevant at later stages (S4+) but premature for S1+S2. The Protocol is referenced in formalization_roadmap.md as design heritage; not embedded in the framework (to prevent vocabulary drift from a different problem domain).

**Patch:**

New file `framework/parameter_space_reference.md` — full reference. Formal signature: `S = ℝ; f_n: [0, 1] → S continuous`. Explains what S1 and S2 commit to; how Shape relates to f_n (with table for each sub-function); how continuity grades relate to f_n (with S2 reading and forward-pointer to S3 reading); explicit deferrals (polynomial form, mechanical verification, authoring convention, basis representation, multi-contributor composition); what the framework can now say honestly that it couldn't before.

Shape's three sub-fields now have explicit referents:
- Approach characterizes f_n near t=0 (starting value and direction of change)
- Within characterizes f_n over (0, 1) (interior trajectory)
- Departure characterizes f_n near t=1 (ending value and direction of change)

Continuity grades now have explicit referents:
- C⁰: f_n(1) and f_{n+1}(0) have any relation
- C¹: f_n(1) ≈ f_{n+1}(0) and matched direction at the join (S2 qualitative reading)
- C²: C¹ and matched magnitude at the join (S2 qualitative reading)

At S3, these become equations: C¹ becomes `f_n(1) = f_{n+1}(0) AND f'_n(1) = f'_{n+1}(0)`, etc.

**Affected files:**
- `framework/parameter_space_reference.md` (new)
- `framework/formalization_roadmap.md` — Stage tracker updated (S1 and S2 marked Completed with date); Next intended step updated to S3; Design heritage section added pointing at Parameter Motion Protocol as reference for later stages
- `framework/VERSION` — bumped to `20260527-055000`
- `compositional_algebra/README.md` — vocabulary entry added for parameter space; Status section notes S1+S2 completion; current-version reference updated
- `works/calibration/spline_reference.md` — Shape note updated to reflect S1+S2 completion (Shape characterizes a real continuous function, not just a category label)
- `works/calibration/dependencies.md` — added parameter_space_reference.md and formalization_roadmap.md to base references; added S1+S2 compatibility note; bumped minimum version

**What the framework can now say honestly:**
- "Shape is a characterization of a continuous function over felt intensity space" — the function exists; the characterization refers to it
- "A movement's felt-quality trajectory is parameterized by local movement time, not by elapsed duration" — duration-immunity is a real property
- "Continuity grades describe how adjacent movements' functions relate at the join" — the referents are now real mathematical objects, even where the relations remain qualitative
- "Two operators with the same spec should produce the same f_n" — aspirational at S2, becomes operational at S4

These are smaller claims than "the framework uses real spline math" but they are the honest first installment. Next earning step is S3 (polynomial commitment) whenever mechanical continuity verification becomes valuable enough to undertake.

### Survey document authored; Identity/Trajectory split formalized as central architecture

**Surfaced during reflection.** Operator (hedawn) reframed the framework's purpose: "what we're actually trying to do is make the beauty of higher dimensional math accessible across mediums and narrative design — math is actually first before audio even, and it's also why it's so incredibly important to get right; it is the signal that drives and connects everything."

This is the framework's purpose statement, not a feature. Math is the signal. Audio, visual, voice are renderings. Characters, objects, motifs are narrative entities whose *movement through the work* is coordinated with the math.

Discussion converged on a structural distinction: every layer has two parts.

- **Identity** — what the layer *is* (authored, chosen, persistent across the work)
- **Trajectory** — how the layer *moves through the work* (derived from math)

The split applies universally: content layers (character, object, motif), surface layers (audio, medium, visual world), and voice all have Identity and Trajectory. Math drives all Trajectories. Identity is the authored part.

This is the framework's central architectural distinction, and it's now formalized.

**Confirmations carried forward into patches:**
1. Math drives Trajectory of *everything* through the work (all six layers), not just content layers.
2. The math of a movement = mathematical content (which primitives at home, structural relations) + mathematical trajectory (felt-quality function f_n). Both are math; both drive everything downstream.
3. Characters/objects/motifs are not renderings of math (their identities are authored narrative). Their movement through the work is coordinated with the math.

**Patches:**

1. **`SURVEY.md` (new, at repo root)** — bird's-eye view of the framework. Leads with the purpose (making math perceivable). Introduces Identity/Trajectory as central architectural distinction. Documents what the framework can do, what it cannot do, where it's load-bearing, where it's gestural. Acts as the entry point for new readers.

2. **Framework README** — opening rewritten to lead with the purpose. Identity/Trajectory introduced in the "What it is" section. SURVEY.md flagged as the recommended first read. Vocabulary section gains Identity and Trajectory entries.

3. **Layer references patched with Identity/Trajectory note** at the top of each:
   - `framework/audio_aesthetic_reference.md` — Identity is sub-function choices; Trajectory is intensity arc across movements
   - `framework/medium_reference.md` — Identity is material choices; Trajectory is material development across movements
   - `framework/visual_world_reference.md` — Identity is register choices; Trajectory is imagery development across movements
   - `framework/voice_reference.md` — Identity is voice spec (five sub-functions); Trajectory is voice attention arc across movements
   - `framework/math_visual_reference.md` — Special: math layers are the bridge from spline math to sensory rendering. Identity = primitives at home + relations (from spline). Trajectory = primitive density/emphasis across movements (coordinated with f_n).
   - `framework/math_audio_reference.md` — Same shape as math visual.

4. **`framework/realization_workflow_reference.md`** — opening expanded with Identity/Trajectory framing of what each pass produces.

5. **`framework/glossary.md`** — new entries for Identity (layer concept) and Trajectory (layer concept). Identity signal entry updated to note it predates the split and contains both Identity-flavored and Trajectory-flavored material (cleanup pending — likely a follow-up patch).

6. **`framework/VERSION`** bumped to `20260527-061500`.

7. **`works/calibration/dependencies.md`** — minimum version updated.

**What this enables:**
- The framework can now talk honestly about *why* same-spec realizations cohere (shared Trajectory from shared math) while differing in specifics (different Identities).
- Future operations work (A1) can name operations involving Identity and Trajectory separately — e.g., "Identity composition" (preset bundling) is a different operation than "Trajectory derivation" (math → layer arc).
- S3 (polynomial commitment) gains more weight: it grounds the Trajectory of every layer, not just felt-quality alone.

**Pending follow-up:**
- The spline's "Identity signal" still bundles Identity-flavored constraints and Trajectory-flavored characterizations. A cleanup patch will eventually split these into a Trajectory signal (felt-quality, f_n, what's at home mathematically) and an Identity-constraint signal (what must be true of content). Deferred to keep this patch focused.

### Realization catalog dissolved; "pattern" category dropped; catalog entries moved to Spatium

**Surfaced during reflection.** Operator (hedawn) raised: shouldn't the realization catalog live in a work, not at the framework level? Initial discussion proposed distinguishing "patterns" (unbound bundles) from "realizations" (bound to a specific spline) and giving patterns their own home.

**Refined position:** there is no real structural distinction between a "pattern" and a "realization." Both are complete cross-layer bundles. The only difference is usage history — whether the bundle has been used to produce a tracked generation for a specific work. A bundle that hasn't been used is just a realization spec without generations; calling it a "pattern" introduces a category without a corresponding type difference.

**Driving principle (operator):** a work should be self-contained when distributed. If you receive a work, you receive everything it needs — including the realization specs it ships with, whether or not they've been constructed yet. No framework-level catalog of realizations; realizations live under the work that originated them.

**Cross-work behavior (operator):** copy semantics, not reference. If another work wants to use a realization from this work, the recipient copies the spec into their own realizations directory. No formal cross-work references. This keeps works fully self-contained.

**Patch:**

1. **`framework/realization_catalog.md` deleted.** The catalog's 13 entries (Technical Essay, Fairytale, Sacred Ritual, Chrome-Glitch Audiovisual, Critique, Personal Letter, Lecture, Children's Book, Field Notebook, Bedtime Lullaby, Funeral Rite, Cosmic Horror, Existential Thriller) moved to `works/spatium_dimensio/realizations/` as 13 individual realization spec files. Each is marked as Unverified (no generations) — they exist as complete cross-layer specs but have not been constructed through the workflow.

2. **Migration done during Spatium quarantine.** Relocation only, no content updates. Spatium remains quarantined for content/framework-state alignment.

3. **References updated across the framework:**
   - Six layer references (audio aesthetic, medium, presentation, script, visual world, voice) had stock language about "the realization catalog points realizations at presets" — reworded to drop the catalog reference
   - Glossary entries for specific realizations (Fairytale, Lecture, Personal Letter, Sacred Ritual, Technical Essay) — pointers updated from "See *Realization Catalog*" to `works/spatium_dimensio/realizations/{name}.md`
   - General Realization and Realization spec glossary entries updated to note that realizations live in `works/{work}/realizations/`
   - `framework/dependencies_reference.md` — removed catalog reference from the template; added new "Cross-work realization adoptions" section documenting copy-semantics provenance for any realizations copied from other works
   - `framework/realization_workflow_reference.md` — Pass 8 Consumes line updated; "References that inform realization choices" list updated to point at the work's realizations directory
   - `framework/presentation_reference.md` — references-this-layer-reads list updated
   - Spatium README, character/object/motif references — broken links to the deleted catalog file updated to point at `realizations/` directory
   - Calibration dependencies — catalog section removed; new "Cross-work realization adoptions" section added (current state: none — Calibration's Realization B is a Calibration-local spec, not an adoption of Spatium's Existential Thriller)
   - Framework README — directory tree updated to reflect current structure (catalog removed; realizations directories noted under each work)

4. **`framework/VERSION`** bumped to `20260527-073000`.

5. **Calibration dependencies** updated to new minimum.

**Categorization is now clean:**
- **Realization spec** (in `works/{work}/realizations/{name}.md`) — complete cross-layer Identity bundle for this work. May or may not have generations.
- **Generation** (in `works/{work}/realizations/generations/{id}.md`) — produced artifact from a realization spec.
- **No fourth category.** "Pattern" was a distinction without a difference.

**What this enables:**
- A work is self-contained when distributed. Everything to construct any of the work's realizations ships in the work's directory.
- Future works (Calibration's eventual third realization, future authored works) follow the same shape — their realizations live with them.
- Cross-work adoption is explicit when it happens (copy with provenance) rather than implicit (reference to a centralized catalog).

**Historical references preserved:**
- `works/spatium_dimensio/provenance_notes.md` and `DEV_LOG.md` retain lowercase "realization catalog" references as historical description of what was developed, not as pointers to current state.

### Framework / work-content separation: audit + chunk 1 (light cleanups)

**Surfaced during reflection.** Operator (hedawn) raised the principle that framework should contain *how to construct* and works should contain *what to populate*. Framework should be lean — signal flow, functional shapes, composition rules, workflow discipline. Specific instances (the rod, the cage, the body, the field, Spatium movements I–VII, Identity-response narratives) are work content and belong with the work.

**Audit performed.** Quantified Spatium-specific content leakage per framework reference:

| File | Movement refs | Spatium content refs | Identity-response sections |
|---|---|---|---|
| voice_reference.md | 64 | 43 | 94 |
| visual_world_reference.md | 0 | 10 | 109 |
| audio_aesthetic_reference.md | 0 | 22 | 95 |
| medium_reference.md | 0 | 7 | 70 |
| math_visual_reference.md | 0 | 13 | 39 |
| math_audio_reference.md | 0 | 8 | 39 |
| Other framework files | minimal | minimal | minimal |

The six heavy layer references are structurally Spatium-shaped — they contain "Identity response" sections per option describing how each option responds to Spatium's specific Identity vocabulary, "Math primitive rendering" examples in Spatium terms, and (for voice) per-Spatium-movement affinity tables. Lighter files have incidental Spatium mentions that can be cleaned surgically.

**Approach (operator confirmed):** Option A — full extraction — but chunked across responses. Don't fix Spatium-side; just relocate Spatium-specific content into a single receiving doc under Spatium during quarantine, and leave framework references in their reduced (pure-abstract) form.

**Chunk plan:**
- Chunk 1 (this entry): audit + receiving doc + light-file incidental cleanup
- Chunk 2 (next): math_visual_reference.md + math_audio_reference.md paired
- Chunk 3: medium_reference.md
- Chunk 4: audio_aesthetic_reference.md
- Chunk 5: visual_world_reference.md
- Chunk 6: voice_reference.md (biggest, by itself)
- Chunk 7: glossary.md cleanup + framework-wide final audit (including retiring the term "kit" everywhere it remains)

**Chunk 1 patch:**

1. **`works/spatium_dimensio/framework_vocabulary_usage.md`** — new receiving doc under Spatium. Single document with labeled sections per source-framework-file. Will be populated as chunks 2–7 extract content. Marked as quarantine holding area; not edited during quarantine.

2. **Light-file incidental cleanups (extraction not needed; Spatium-side preservation minimal):**
   - `dependencies_reference.md` — "This policy applies only to Calibration. Other works (Spatium Dimensio, future works)..." → generalized to "All other works (including the framework's currently-quarantined Spatium Dimensio, and any future authored works)..."
   - `presentation_reference.md` — "Sacred Ritual's IV — the cage" examples → abstracted to property-language (compression of weight, high primitive density, multi-voice configuration). Spatium-specific original preserved in receiving doc.
   - `realization_workflow_reference.md` — 4 spots:
     - "For *Spatium Dimensio* realizations of the full seven movements, use horizontal" → "For any work with multiple movements where realization-level coherence across the full work matters, use horizontal"
     - Checkpoint 2 example "the figure persists, the rod is preserved" → abstracted to "characters that persist across movements remain the same; objects with declared continuity preserve their material identity; motifs unfold their phases as specified"
     - "How This Reference Connects to the Kit" → "How This Reference Connects to the Framework" (also retiring "kit" terminology in this section)
     - "Companion to: *Spatium Dimensio* Kit (the overview document)" → removed (the framework has no specific companion work; SURVEY.md is the framework's own overview)
     - "The workflow is not the kit. The kit is what *Spatium Dimensio* is." → "The workflow is the operating discipline. A work is what the workflow produces when applied to a particular spline score."

3. **`framework/VERSION`** bumped to `20260527-074500`.

4. **Calibration dependencies** updated to new minimum.

**Open: "kit" terminology.** The term "kit" still appears in `script_reference.md`, `presentation_reference.md`, `realization_workflow_reference.md` (multiple), `prompt_construction_reference.md`, and `glossary.md` — historically interchangeable with "framework" but now ambiguous given the framework has a specific identity (Compositional Algebra). Decision deferred to chunk 7: retire "kit" entirely and replace with "framework," or repurpose "kit" to mean something specific (e.g., "the runtime context of the framework's operation"). Default proposal: retire entirely.

**Open: script_reference.md still has 4 Spatium-specific examples** (cathedral closed around the body; the rod on the ground; the body opened ⏑ the field met the body; what the body does). These are content carriers worth handling in their own chunk with proper Spatium-receiving-doc population, rather than incidentally now.

**Not yet started (chunks 2–7):** the heavy layer-reference refactors. These remove the embedded Spatium-shape from the framework's layer vocabulary and migrate it to the receiving doc as-is.

### Framework / work-content separation: chunk 2 (math_visual + math_audio)

**Scope:** Pure-abstract refactor of the two math layer references, paired because they're structurally parallel.

**Extraction approach.** Each primitive (18 visual + 18 audio = 36 total) had three Spatium-specific lines embedded:

- **Role in the work** bullet — Spatium movement deployment ("I (pre-coordinate, direction without magnitude); II (basis vectors arriving)")
- **Identity response** paragraph — felt-quality language tied to Spatium's Identity vocabulary ("carries curious, opening, transformed. Natively preserves direction and reach")
- **Movement affinities** line — Strong/Workable/Resists per Spatium movement I–VII

All three extracted to `works/spatium_dimensio/framework_vocabulary_usage.md` (the receiving doc created in chunk 1), labeled per-primitive within the doc's `math_visual_reference.md` and `math_audio_reference.md` sections.

Done via Python extraction script for surgical accuracy. 36 primitives × 3 lines = ~108 lines extracted across both files.

**Additional Spatium-specific content also extracted:**

- **Density section per file** — listed per-movement (I, II, III, IV, V, VI, VII) typical densities. Replaced with abstract density semantics. Spatium-side text preserved in receiving doc.
- **Primitive carry across movements section per file** — traced specific Spatium-side carry patterns ("Basis appears at II, persists into III..."; "Projection is established at II, dominates at IV..."; "The unmeasured line of I returns at VII"; "The drone of I returns at VI and VII"). Replaced with abstract guidance ("the work declares per-primitive carry patterns; the framework provides the mechanism"). Spatium-side specifics preserved in receiving doc.
- **The Primitive Function template** in each file listed "Role in the work," "Identity response," and "Movement affinities" as required per-primitive fields. Split into two: framework-level fields (mathematical content, canonical convention, rendering notes, anti-drift — abstract) and work-level fields (which movements, Identity language carried in the work, density profile — specified per work that uses the primitive). The "How to Add a New Primitive" guide reduced from 8 steps to 5, dropping the steps that defined work-specific properties.
- **The Informal opening** in each file used Spatium-specific examples ("the work is *about* the moves from vector to vector space to projection to the cage to the field that exceeds"). Rewritten to generic framework language ("a work composed in this framework is *about* the mathematical structures named in its spline's math vocabulary").

**Line count reduction:**
- `math_visual_reference.md`: 493 → 398 (~20% reduction)
- `math_audio_reference.md`: 468 → 373 (~20% reduction)

The framework's math references now contain only abstract content: per-primitive mathematical definition, canonical convention, rendering hints, anti-drift specifications. Framework-level instructions for adding new primitives. Abstract Density semantics. Abstract continuity across joins. No Spatium-specific examples; no movement affinity tables; no Identity response paragraphs.

**Flagged:** The Rendering sections in math primitives still reference visual-world preset names (Star-flesh, Chrome-glitch, Mythic, Geometric). These are framework presets currently defined in `visual_world_reference.md`. If chunk 5 decides those preset names are Spatium-specific (Star-flesh and Chrome-glitch likely are), the math primitive Rendering sections will need follow-up cleanup. Tracked for chunk 5.

**Affected files:**
- `framework/math_visual_reference.md` — substantial refactor, work-specific content extracted
- `framework/math_audio_reference.md` — substantial refactor, work-specific content extracted
- `works/spatium_dimensio/framework_vocabulary_usage.md` — math sections populated (was placeholder)
- `framework/VERSION` — bumped to `20260527-080000`
- `works/calibration/dependencies.md` — minimum updated
- `compositional_algebra/README.md` — current-version reference updated

**Next chunk (chunk 3):** `medium_reference.md` (77 Spatium-leakage hits).

### Framework / work-content separation: chunk 3 (medium_reference.md)

**Scope:** Pure-abstract refactor of `medium_reference.md`.

**Extraction approach.** Each implementation of each medium sub-function (27 implementations total across substrate, mark-making, surface behavior, edge quality, color behavior) had two Spatium-specific lines embedded:

- **Identity response** line — felt-quality language tied to Spatium's Identity vocabulary
- **Movement affinities** line — Strong/Workable/Resists per Spatium movement I–VII

Plus 5 preset bundles (Ink+wash, Watercolor, Oil/painted, 3D render, Mixed media) each had a Movement affinities line.

All extracted to `works/spatium_dimensio/framework_vocabulary_usage.md` medium section. Done via Python extraction script.

**Function template refactoring.** Each of the 5 sub-function function templates (Substrate Function, Mark-making Function, Surface Behavior Function, Edge Quality Function, Color Behavior Function) listed Identity response and Movement affinities as required per-option fields. Split into two blocks each: "Per-X response" now contains only framework-level affordances; new "Per-X work usage" block explicitly names work-side properties (Identity language carried, movement affinities).

**How-to-Construct guide.** The Substrate construction guide reduced from 6 steps to 4 steps; steps for defining Identity response and declaring movement affinities removed. Note added that work-specific usage lives in the work's documentation.

**Surgical fix.** One affordance line in the "HDR / prismatic" color behavior used Spatium language directly ("Affordances delivered: chromatic excess, synesthesia, the field exceeding"). Reworded to abstract language ("abundance beyond restraint"). Spatium phrasing preserved in receiving doc.

**Affordances retained as framework-level.** Affordances delivered/resisted describe what each option *makes possible* or *resists* in the abstract — they're framework-level vocabulary about the option's capacities, not work-specific application. Kept in place.

**Line count reduction:**
- `medium_reference.md`: 661 → 552 (~16% reduction; less than math's 20% because affordances are retained)

**Affected files:**
- `framework/medium_reference.md` — substantial refactor, work-specific content extracted
- `works/spatium_dimensio/framework_vocabulary_usage.md` — medium section populated (was placeholder)
- `framework/VERSION` — bumped to `20260527-082000`
- `works/calibration/dependencies.md` — minimum updated
- `compositional_algebra/README.md` — current-version reference updated

**Next chunk (chunk 4):** `audio_aesthetic_reference.md` (117 Spatium-leakage hits — largest yet).

### Framework / work-content separation: chunk 4 (audio_aesthetic_reference.md)

**Scope:** Pure-abstract refactor of `audio_aesthetic_reference.md`. Largest chunk so far.

**Extraction approach.** 40 implementations across 7 sub-functions (tonality, texture, timbre, rhythm, pacing, spatialization, phrasing). Each implementation had two or three Spatium-specific lines embedded:

- **Identity response** line — felt-quality language tied to Spatium's Identity vocabulary (all 40 implementations)
- **Math primitive rendering** line — sonic embodiment of Spatium math primitives (only Tonality sub-function's 6 implementations)
- **Movement affinities** line — Strong/Workable/Resists per Spatium movement I–VII (all 40 implementations)

All extracted to `works/spatium_dimensio/framework_vocabulary_usage.md` audio aesthetic section.

**Function template refactoring.** All 7 sub-function function templates split:
- Tonality: had Identity response, Affordances, Math primitive rendering, Movement affinities in the response block. Split: framework-level keeps Affordances; new work-usage block names Identity language carried, Math primitive rendering (work-side), and movement affinities.
- 6 others: had Identity response, Affordances, Movement affinities. Same split, just without Math primitive rendering.

**How-to-Construct guide.** Tonality construction guide reduced from 7 steps to 4 steps; steps for defining Identity response, specifying math primitive rendering, and declaring movement affinities removed.

**Surgical fix.** One affordance line in Microtonal tonality used Spatium language directly ("expansion past equal temperament, plurality of tonal systems, the field returning"). Reworded to "return to openness." Spatium phrasing preserved in receiving doc.

**Preset bundles untouched.** Audio aesthetic's 8 preset bundles (Sacred drone, Compressed cage, Stratified expansion, Folk modal, Quiet voice, Lecture register, Field-recorded, Silent) already use generic "any work needing X" language. No Movement affinity lines to extract. Preset names retained as framework vocabulary even when their imagery (Sacred drone, Compressed cage) traces back to Spatium — the names are now generic concepts; their imagery happens to have Spatium origin but they don't require Spatium to be meaningful.

**Line count reduction:**
- `audio_aesthetic_reference.md`: 848 → 688 (~19% reduction)

**Affected files:**
- `framework/audio_aesthetic_reference.md` — substantial refactor
- `works/spatium_dimensio/framework_vocabulary_usage.md` — audio aesthetic section populated
- `framework/VERSION` — bumped to `20260527-083500`
- `works/calibration/dependencies.md` — minimum updated
- `compositional_algebra/README.md` — current-version reference updated

**Next chunk (chunk 5):** `visual_world_reference.md` (119 hits).

### Framework / work-content separation: chunk 5 (visual_world_reference.md)

**Scope:** Pure-abstract refactor of `visual_world_reference.md`.

**Extraction approach.** 45 implementations across 5 sub-functions (palette, light, line, figure, atmosphere). Each implementation had Identity response + Movement affinities. Plus 8 preset bundles each had a Movement affinities line. All extracted to `works/spatium_dimensio/framework_vocabulary_usage.md`.

**Function template refactoring.** All 5 sub-function function templates split into framework-level (Affordances delivered/resisted) + work-usage blocks (Identity language carried, Movement affinities). Same pattern as chunks 3-4.

**Surgical fix on Figure function template.** The Figure function's Inputs block said "Identity (the body across all movements), Visual signal" — Spatium-specific. Reworded to "Identity (including the work's character continuity across movements), Visual signal".

**How-to-Construct guide.** Palette construction guide reduced from 6 steps to 4 steps.

**Two affordance lines reworded:**
- Chromatic excess / prismatic palette: "the field exceeding" → "abundance beyond restraint"
- Liquid metal / chrome body figure: "the field exceeding through body" → "abundance beyond restraint embodied"

**Cosmic indifference and Quiet dread atmospheres.** These two atmospheres had unusually detailed Movement affinities lines with explanatory parentheticals tying resistance to specific Spatium movement properties (e.g., Cosmic indifference resists "I, II (the opening reach and the rod's working scope both presume human meaning at center)"). Extracted whole to receiving doc.

**Preset bundles untouched (names retained).** Mythic, Storybook, Geometric, Surreal, Chrome-glitch, Cyber baroque, Star-flesh, Resistance — names retained as framework vocabulary. Some imagery traces to Spatium (Body and starlight palette, Body as field figure, Liquid metal / chrome body figure — all Spatium-flavored) but names function as generic framework concepts; their bodies are abstract.

**Note on Star-flesh and Chrome-glitch from chunk 2's flag:** Chunk 2 flagged that math primitive Rendering sections referenced Star-flesh and Chrome-glitch by name. These are confirmed framework preset bundles in `visual_world_reference.md`. The cross-references in math primitive Rendering sections are framework→framework references. No follow-up cleanup needed.

**Line count reduction:**
- `visual_world_reference.md`: 936 → 749 (~20% reduction)

**Affected files:**
- `framework/visual_world_reference.md` — substantial refactor
- `works/spatium_dimensio/framework_vocabulary_usage.md` — visual world section populated
- `framework/VERSION` — bumped to `20260527-085000`
- `works/calibration/dependencies.md` — minimum updated
- `compositional_algebra/README.md` — current-version reference updated

**Next chunk (chunk 6):** `voice_reference.md` (201 hits — by far the biggest, includes 64 movement references in addition to standard patterns).

### Framework / work-content separation: chunk 6 (voice_reference.md)

**Scope:** Pure-abstract refactor of `voice_reference.md` — largest single chunk.

**Extraction approach.** 39 implementations across 5 sub-functions (Register, Stance, Positioning, Configuration, Affect). Register implementations had the heaviest extraction: Identity response + Plug-in patterns by movement (multi-line per-movement bullet block) + Movement affinities + Sample phrasings (multi-line block). Other sub-functions had Identity response + Movement affinities.

Total ~150+ extractions across the 39 implementations. ~15K chars removed.

**Function template refactoring.** All 5 sub-function function templates split (framework-level keeps Affordances + sub-function-specific behaviors like "How it modifies the register"; work-usage block names Identity language carried + Plug-in patterns / Movement affinities / Sample phrasings).

**How-to-Construct guides.** All 5 reduced (steps for defining work-side properties removed).

**Surgical fixes:**
- Duplicate `### Mythic celebrant` heading (pre-existing typo) removed
- Cross-Axis Interactions: bullet 1 "*Spatium Dimensio* as ritual" → "the work as ritual"
- Cross-Axis Configuration: Call-and-response example "first the field, then the gathered" → "first the open space, then the gathered listeners"
- Layered configuration affordance "the field exceeding" → "abundance beyond sequential limit"
- The "Spline's voice configuration arc" table — Spatium's seven movements (I. The Reach through VII. Set Down the Rod) with default configurations — replaced with abstract paragraph. Table preserved in receiving doc.
- Three preset bundle descriptions had specific Spatium-realization name references (Funeral Rite, Field Notebook, Sacred Ritual). All generalized.

**Preset bundles untouched (names retained).** Mythic celebrant, Storyteller, Lecturer, Intimate first-person, Polemical critic, Processed AV narrator — names retained as framework vocabulary.

**Line count reduction:**
- `voice_reference.md`: 1202 → 924 (~23% reduction; largest reduction percentage)

**Affected files:**
- `framework/voice_reference.md` — substantial refactor (largest chunk yet)
- `works/spatium_dimensio/framework_vocabulary_usage.md` — voice section populated; now the most-populated source section in the receiving doc (66K chars total)
- `framework/VERSION` — bumped to `20260527-091500`
- `works/calibration/dependencies.md` — minimum updated
- `compositional_algebra/README.md` — current-version reference updated

**Chunks 2-6 cumulative result:** All 6 layer references now contain only framework-abstract content. Total line reduction across the layer references: math_visual (493→398), math_audio (468→373), medium (661→552), audio_aesthetic (848→688), visual_world (936→749), voice (1202→924). Each layer reference's vocabulary is now pure-abstract; Spatium-specific applications preserved in `works/spatium_dimensio/framework_vocabulary_usage.md`.

**Next chunk (chunk 7, final):** `glossary.md` cleanup + framework-wide final audit (including retiring the term "kit" everywhere it remains).

### Framework / work-content separation: chunk 7 (glossary + framework-wide audit)

**Scope:** Final cleanup. Glossary cleanup + retiring "kit" terminology + remaining `script_reference.md` Spatium examples + framework-wide final audit.

**Glossary cleanup.** Original glossary had 336 entries with 32 Spatium-content hits. Split into two categories:

- **21 pure-Spatium entries extracted whole** to receiving doc (these belonged in Spatium docs, not framework glossary): Bending-Down, Cage (Movement IV), Drone (canonical object), Drone-and-Figure, Figure (canonical character), Figure-at-Center, "The Field Gathers Us", Gathered recognition, Horizon, Laying-Down, Movement (the seven-section listing), Overlay, Quiet Recognitions, "Reach, The" (gestural motif), Reach (Movement I), Rod (Movement II), Rod-Maker, Set Down the Rod, Unmeasured field, Configuration arc (voice), "The score is the work".

- **11 framework-vocabulary entries generalized in place**: header rewrite (from "Spatium Dimensio kit" to "Compositional Algebra framework"); Basis (dropped "Arrives at Movement II"); Just intonation (dropped "The first tuning the body finds"); Layer preset, Locked parameter, Tier 1 (all dropped "Spatium Kit" references); Realization spec (dropped specific realization name examples); Script ("of *Spatium Dimensio*" → "below voice"); Spline + Spline score (Spatium-specific examples removed).

Glossary went from 743 lines to 701 lines.

**"Kit" terminology retired.** "Kit" was historically used in the framework as a synonym for "framework" — particularly in phrases like "in-kit generator," "the kit's flow," and "Spatium Kit." Replaced systematically across 5 framework files:
- "in-kit" → "framework-integrated" (as adjective)
- "**In-kit generator**" (glossary entry term) → "**Framework-integrated generator**"
- "Generator (in-kit vs external)" → "Generator (framework-integrated vs external)"
- "the kit's" → "the framework's"
- "inside/into the kit" → "inside/into the framework"
- "a kit of parts" (idiom in presentation_reference) → "a collection of parts"
- "the kit produces" / "the kit gains" → corresponding "the framework"
- Plus standalone "kit" → "framework" everywhere else

**`script_reference.md` 4 Spatium examples (deferred from chunk 1).** Replaced with abstract illustrative examples that demonstrate script-structure concepts without Spatium-specific content. Specifically:
- Line 75 "cathedral closed around the body" → "figure crossed the room and stopped"
- Line 138 "sets the rod on the ground" → "sets the object on the ground"
- Lines 164-181 "the cathedral... gold light reaches the columns" examples (4 implementations of sensory mark integration) → "light shifts on the wall" abstract examples
- Line 205 "The body opened. The field met the body. Nothing was counted." → "The door opened. The light entered. Nothing was said."
- Line 363 "what the body does, where the figure stands, where the gathering looks" → "what the performer does, where they stand, where the audience attends"

**Framework-wide final audit.** Confirmed: zero unintentional Spatium content leaks remain. Remaining matches in audit:
- voice_reference.md:309 — "the field's consensus" (academic-field sense, not Spatium content)
- generation_tracking_reference.md:117, 146 — "the body of a document" (generic)
- glossary.md:209 — Figure visual world sub-function options listing including "body as field" (framework option, not Spatium content)
- dependencies_reference.md:209 — legitimate framework documentation of Spatium's quarantine status
- math_visual / math_audio meta-references to "Identity response" and "movement affinities" — inside framework's note that work-side concepts live in work docs
- 10 instances of "Movement affinities (Strong / Workable / Resists per movement)" in function templates — inside work-usage blocks, naming the work-side concept

All legitimate. Framework is now pure-abstract.

**Cumulative results across chunks 1-7:**

| File | Lines before | Lines after | Reduction |
|---|---|---|---|
| voice_reference.md | 1202 | 924 | 23% |
| visual_world_reference.md | 936 | 749 | 20% |
| audio_aesthetic_reference.md | 848 | 688 | 19% |
| medium_reference.md | 661 | 552 | 16% |
| glossary.md | 743 | 701 | 6% |
| math_visual_reference.md | 493 | 398 | 19% |
| math_audio_reference.md | 468 | 373 | 20% |
| Other framework files | (minimal change) | (minimal change) | — |
| **Framework total** | ~7645 | 6677 | ~13% |

`works/spatium_dimensio/framework_vocabulary_usage.md`: 1227 lines, 72K chars. Single document holding all extracted Spatium-specific content from 11 framework source files. To be normalized and reintegrated when Spatium is un-quarantined.

**The framework is now lean and focused on signal flow, functional analysis, and construction — exactly the principle that motivated this housekeeping pass.** Layer references contain only abstract framework vocabulary; specific instances (Spatium's rod/cage/body/field, Spatium's Movement I–VII, Identity response narratives, Movement affinity tables) live with the work that originated them.

**Affected files (chunk 7):**
- `framework/glossary.md` — 21 entries extracted, 11 generalized, header rewritten
- `framework/script_reference.md` — 4 Spatium examples replaced with abstract
- `framework/script_reference.md`, `framework/presentation_reference.md`, `framework/realization_workflow_reference.md`, `framework/prompt_construction_reference.md`, `framework/glossary.md` — "kit" terminology retired throughout
- `works/spatium_dimensio/framework_vocabulary_usage.md` — glossary section populated; all 11 source sections now have content
- `framework/VERSION` — bumped to `20260527-093000`
- `works/calibration/dependencies.md` — minimum updated
- `compositional_algebra/README.md` — current-version reference updated

**Framework-as-pure-vocabulary is now achieved.** Next major direction available: continue earning the math (Stage S3 polynomial commitment) or start Stage A1 (operations explicitly named). The framework is now substantively in a state where those next stages can be undertaken cleanly.

### Canonical prompt templates: Identity/Trajectory blocks formalized

**Surfaced during testing.** Operator (hedawn) ran Realization A through the workflow after the housekeeping pass completed. The first attempt produced a Pass 5 prompt as loose descriptive prose, losing the structured per-block format the four tracked generations had used. Operator noted the regression: the working prompts had explicit voice declaration, scene declaration, length, and anti-drift as labeled blocks. Operator asked to formalize this.

Second question raised: where do Identity and Trajectory enter prompts? Math drives Trajectory across all six layers (framework's central claim) — prompts must communicate both Identity (what the layer is, constant per realization) and Trajectory (what the layer is doing at this movement, math-driven).

**Resolution.** The four-block prompt structure already existed in the working generations but wasn't explicitly documented. Identity and Trajectory were present but unlabeled. Formalized both:

- Each prompt has four explicit blocks: **Identity** (constant per realization) + **Trajectory** (per movement, math-driven) + **Length** (explicit constraint) + **Anti-drift** (Identity-preserving + Trajectory-preserving negative constraints).
- Block sourcing made explicit per prompt type (table showing which framework/work source each block draws from).
- Identity/Trajectory verification checklist for use before handing prompt to generator.

**Patches:**

1. **`framework/prompt_construction_reference.md` — major addition.**
   - New section "Prompt Template Structure" explaining the four-block model and what each block communicates
   - New section "Canonical Templates" with three explicit templates (narrative, image, audio) showing block format, content, and labeling
   - New section "Block Sourcing" with three tables (narrative, image, audio) mapping each block to its framework/work source
   - New section "Identity / Trajectory verification at prompt construction" with verification checklist before generator handoff
   - Legacy "Block Order per Output" section retained at end as quick-reference summary

2. **`framework/realization_workflow_reference.md` — Pass 5 discipline updated.**
   - References the canonical templates by name
   - Adds verification step before handing prompt to generator
   - Notes that the four-block structure is the framework's standard form

**Key formalization decisions:**

- **Length is now an explicit block** for narrative prompts (was used in working generations but undocumented). Image and audio also get explicit length cues (dimensions / duration) where appropriate.
- **Anti-drift is split conceptually** into Identity-preserving and Trajectory-preserving constraints. They're listed together in a single Anti-drift block but the framework now names both kinds so authors check for both.
- **Trajectory block is decomposed** into Scene + Felt quality + Math content. This is what makes Trajectory operational: rather than a single descriptive paragraph, the block has three explicit sub-fields each tracing to a different spline signal.

**Why this matters:** The four-block template lets a prompt be audited block-by-block before generation. Identity vs Trajectory becomes visible at prompt-construction time. Trajectory's three sub-fields make it operational: Scene tracks spline Visual/Voice/Identity signals; Felt quality tracks Identity's Felt weight (which is f_n's behavior); Math content tracks the Math vocabulary signal. Together they materialize what "math drives Trajectory" means at the prompt level.

**Affected files:**
- `framework/prompt_construction_reference.md` — major structural addition (~120 new lines)
- `framework/realization_workflow_reference.md` — Pass 5 discipline references the templates
- `framework/VERSION` — bumped to `20260527-100000`
- `works/calibration/dependencies.md` — minimum updated
- `compositional_algebra/README.md` — current-version reference updated

**Verified by:** Re-running M1 narrative prompt for Realization A under the new template. Result has labeled Identity / Trajectory / Length / Anti-drift blocks, matches the structure of the four tracked generations, and makes prompt commitments auditable. This was the verification test — the cleaned framework + new templates produce a prompt structurally equivalent to the working ones, with the Identity/Trajectory architecture now explicit rather than implicit.

### Post-housekeeping end-to-end verification run

**Tracked generation:** `calibration.a.hedawn.20260527-103000` (file: `works/calibration/realizations/generations/calibration.a.hedawn.20260527-103000.md`)

**What it verifies:** Realization A composes end-to-end through the cleaned framework and the new canonical prompt templates. Pass 5 produces three narrative prompts under the four-block template (Identity / Trajectory / Length / Anti-drift) with verifiable structural commitments. Pass 6a produces a single substitution outline weaving in work-specific Identities consistent across all three movements. Pass 6b produces three drafted movements honoring outline and voice spec.

**First attempt (failed):** the operator's verification request initially produced a workflow run that conflated Pass 5 with Pass 6 and used a loose descriptive prompt format rather than the four-block template. Operator caught both errors:
- "this wasn't a proper realization, there was no substitution, no voice fill, that all comes before scripting"
- "our narrative prompt construction format differed [...] now it declares the voice and tells the generator to write something which doesn't feel as precise"

**Resolution:**
- Workflow discipline: Pass 5 produces prompts only (does not generate narrative); Pass 6a substitutes work-specific identities across all movements together; Pass 6b voice-fills per movement against the outline.
- Prompt template: canonical four-block format (Identity / Trajectory / Length / Anti-drift) formalized in `framework/prompt_construction_reference.md` based on the format used in the four prior tracked generations.

**Second attempt (succeeded):** all three movements composed through Pass 5 → Pass 6a → Pass 6b. Verification checks pass at each stage. Continuity grades are audible in the text (M1→M2 reads as shift-felt redirect with footfall ceasing across the join; M2→M3 reads as unfold-felt continuity with hand-on-latch gesture continuous across the join).

**Two findings from the run:**

1. **Math primitive gap** — Calibration uses primitives not in the framework's eighteen. Logged as Open Finding. Pre-existing, not introduced by housekeeping.

2. **The Identity/Trajectory split is operational at the prompt level.** Identity content (voice translation, surface aesthetic spec) holds constant across movements; Trajectory content (scene, felt quality, math content rendered concretely) varies per movement following spline signals. This is what "math drives Trajectory across all six layers" means at the prompt-construction level. The canonical templates make this visible and auditable.

**Affected files:**
- `works/calibration/realizations/generations/calibration.a.hedawn.20260527-103000.md` — new tracked generation
- `DEV_LOG.md` — Open Findings + this entry

### Twelve-pass workflow restructure: cross-modal substitution and outline; script as complete artifact

**Surfaced during workflow architecture review.** Operator (hedawn) examined the post-housekeeping signal flow and identified two structural issues:

1. **The 6a/6b sub-pass naming was a fudge.** Substitution, outline, and voice fill are three distinct activities; treating them as sub-passes of "Pass 6" obscured what each does. Promote them to full passes.

2. **Image and audio asymmetry was wrong.** The previous workflow had narrative going through substitution + outline (Pass 6a) and voice fill (Pass 6b), while image and audio left the framework at Pass 5 with no substitution or outline. Result: when image prompts and narrative output described the same scene, they did so at vastly different resolution — narrative knew about the brass latch with verdigris; image only knew about "a boundary glimpsed." External generators received bare-form prompts and couldn't produce output matching the substituted narrative.

   Resolution: substitution and outline apply *cross-modally* to all three prompts (image, audio, narrative) in single responses covering all movements. The same Figure, the same Window with brass latch and verdigris, the same room — committed once at Pass 6 and applied across image, audio, and narrative. Identity consistency across modalities now auditable in one place.

3. **Script doesn't require external generation.** Operator's insight: substituted-and-outlined image and audio prompts are rich enough to serve the script directly as descriptive content. A reader experiences the picture from the image prompt's text and the sound from the audio prompt's text. External generation of rendered artifacts becomes optional and downstream, not required for script completion. Framework composition completes inside the framework without external generator calls.

**Resulting workflow (12 passes):**

- Pass 0 — dependency check
- Pass 1 — signal pull
- Pass 2 — content per movement
- Pass 3 — surfaces (audio first, then visual)
- Pass 4 — voice composition
- Pass 5 — triplet assembly (cold-start prompts; form only; generic placeholders)
- Pass 6 — substitution (cross-modal, all movements together; one response)
- Pass 7 — outline (cross-modal, all movements together; one response)
- Pass 8 — voice fill (narrative only; one response per movement)
- Pass 9 — script (integrates narrative + image prompt + audio prompt as descriptive content)
- Pass 10 — presentation
- Pass 11 — freeze and track

**Deferred / nice-to-have:** post-freeze per-beat exploration — variant image and audio prompts authored against Pass 7 outline's beats, at finer granularity than per-movement prompts. Not part of main workflow.

**Pass 5 prompt template revised.** Block 2 was "Trajectory" in the previous canonical templates; renamed to **Movement form** with five sub-fields (Felt quality, Math density, Math primitives at home, Voice's/Visual's/Audio's job, Structural action — all in generic terms). Trajectory enters at Pass 7 outline downstream, not at Pass 5. Block 2 carries the spline's per-movement form characterization; work-specific identities are committed at Pass 6, not here.

**Image and audio prompts now follow the same four-block template.** Identity (medium + visual world; or audio aesthetic) → Movement form → Length → Anti-drift. Symmetric across all three modalities.

**Patches across files:**

1. **`framework/realization_workflow_reference.md`** — major restructure:
   - Intro section rewritten to describe 12-pass functorial composition
   - Pass 5 description rewritten: cold-start, form only, generic placeholders, no work-specific commitments
   - Pass 6 (Substitution) — new pass dedicated to cross-modal identity commitment
   - Pass 7 (Outline) — new pass dedicated to cross-modal trajectory application
   - Pass 8 (Voice fill) — narrative-only; promoted from sub-pass 6b
   - Passes 9-11 renumbered (Script, Presentation, Freeze)
   - Added "External Generation (Optional Downstream)" section
   - Added "Per-Beat Exploration (Deferred / Post-Freeze)" section
   - Added "cross-modal architecture" section explaining the symmetric application of substitution and outline
   - Added explanation of why image/audio don't get a voice-fill equivalent

2. **`framework/prompt_construction_reference.md`** — major revision of canonical templates:
   - Block 2 renamed from "Trajectory" to "Movement form" with five sub-fields
   - Template format updated for all three modalities (narrative, image, audio)
   - Block Sourcing tables rewritten to show Pass 5 sources (form only)
   - New section "What enters at Pass 6 (substitution) and Pass 7 (outline)" explaining downstream commitments
   - "Identity / Trajectory verification" renamed to "Identity / Form verification at prompt construction (Pass 5)"

3. **`framework/generation_tracking_reference.md`** — pass numbering updated; Pass 6/7/8 sections split where they were merged as 6a/6b.

4. **`framework/glossary.md`** — Generator, Framework-integrated generator, Narrative generation, Prompt Construction, Triplet entries all updated for new 12-pass model.

5. **`framework/script_reference.md`, `framework/presentation_reference.md`, `framework/formalization_roadmap.md`** — pass references updated.

6. **`works/calibration/*`** — README, verification, character/object/motif refs, dependencies all updated.

7. **`works/spatium_dimensio/*`** — README, spline ref, transition ref, framework_vocabulary_usage updated.

8. **Existing 5 tracked generations** — pass-numbering note added to each, explaining the architectural intent is preserved across the rename; bodies left as originally authored under the 10-pass scheme.

**Affected files:** 11 framework files, 6 Calibration work files, 4 Spatium work files, 5 generation files. Roughly 30 files touched.

**Version bumped to `20260527-130000`.**

**Verification status:** Architectural integrity preserved across the rename. Cross-modal substitution and outline are now documented architecture but have not yet been exercised in a tracked generation. A new verification run under the 12-pass workflow should produce a tracked generation showing image, audio, and narrative prompts after Pass 7 — all three substituted and outlined — and demonstrate that the substituted-and-outlined image/audio prompts serve the script as descriptive content.

**Open Finding raised:** whether image and audio prompts benefit from a surface-polish equivalent of voice fill is a design question worth watching as more realizations are constructed. Currently asymmetric: narrative gets voice fill (Pass 8); image and audio don't. Resolution deferred until more cross-modal verification runs are available.

---

## Session N — Spline beat-authoring, Transition signal collapse, prompt template revision

**Context.** After a failed 12-pass end-to-end run of Realization A (saved as `calibration.a.hedawn.20260527-160000`), three failure modes were identified: Pass 5 prompt templates produced labeled checklists rather than generator-facing English; the Scene block had been dissolved into an abstract "Movement form" with five sub-labeled fields; the `[unchanged]` notation masked verbatim Identity-block repetition; Pass 9 produced one paragraph of narrative per movement, which the operator correctly identified as too thin compared to what a working script does (multiple beats per movement with sensory cues interleaved). Conversation traced these to one root cause: the recursive structure of the work hadn't been formalized — beats are knots in the spline at the same mathematical level as movement-boundaries, but the framework had been treating beats as a downstream concern rather than a spline-level authoring object.

**Conceptual development.** Through dialogue:
1. Beats and movements are both knots in a piecewise function. The work's felt-quality function lives in a Sobolev space (H²) over [0, T] where T is total beats, with continuity grades at every knot. Movements are groupings of beats; movement-boundaries are a subset of knots that typically carry higher-grade continuity.
2. The geometric analogy is closer to *interpolating splines* (Hermite, Catmull-Rom, natural cubic) than to non-interpolating B-splines: the function passes through every beat-knot, and continuity grades at knots specify the regularity of the join.
3. Felt-quality is best defined *relationally* rather than substantively — by how felt-qualities stand in relation to each other (continuity-grade-ability, modulation operations, equivalence classes) rather than by trying to coordinatize them numerically. This is analogous to defining real numbers via Cauchy sequence equivalence classes. The formalization roadmap's algebra path (A1-A4) becomes the more fruitful next direction than the polynomial commitment path (S3-S5).
4. Number of beats per movement is a structural commitment of the spline, not a downstream rendering choice — arbitrary beat counts at downstream passes would have nothing to populate them with. Beats belong in the spline.
5. Beats do not enter Pass 5 prompts. Prompts are a substrate (form only); beats are Pass 7 outline content. The four-block template at Pass 5 stays four blocks for all modalities.

**Changes made.**

1. **Calibration's spline gains beat-authoring per movement.** Three beats per movement, nine beats total. Each beat carries a Shape characterization label (in italics, extending the Approach × Within × Departure vocabulary to beat-granularity), a physical anchor (concrete scene material), and continuity grade at the join to the next beat. All beat-internal joins authored as C² (each movement is one continuous arc internally). Per-modality signals stay at movement level — per-beat per-modality modulation is acknowledged as eventually needed for long-format work but deferred.

2. **Transition signal block dropped from spline.** Movement-boundary continuity grades folded into each movement's last-beat "Continuity to next movement" line in the beat-authoring section. Previously authored fields (`To:`, `Grade:`, `Carry:`, `Shift:`) collapsed: `To:` becomes implicit in movement ordering; `Grade:` moves into beat-authoring; `Carry:` and `Shift:` were derivable from joint reading of adjacent movements' signals and are dropped from spline (still present as Cross-Movement Notes commentary). Spline now has uniform per-movement signal structure: Identity, Math vocabulary, Character, Object, Motif, Visual, Audio, Voice, Beat-authoring — no asymmetric Transition block.

3. **transition_reference.md pruned to non-derivable authoring.** Per-modality continuity content (Identity carry, Math primitive carry, Surface continuity, Voice continuity) dropped as re-derivable from comparing adjacent movements' spline signals. Retained: Bridging elements (specific sensory anchors that must hold consistent), Continuity polish requirements, Anti-drift constraints. File went from 149 lines to 72 lines.

4. **Canonical prompt templates revised.** Block 2 ("Movement form" with five sub-fields) replaced with a Scene block carrying prose. Block names per modality: Voice (narrative), Medium and visual world (image), Sonic identity (audio). Block 4 renamed from "Anti-drift" to "Avoid" so it reads as English instruction to the generator. Translation discipline enforced: no framework vocabulary as visible labels — Math primitives, Felt weight, Math density, Structural action, Trajectory, Shape do not appear as field labels. They still drive the prompt's content but appear translated to scene language as prose. `[unchanged]` notation explicitly forbidden — each prompt must be self-contained, with the Identity-block rewritten fresh per movement (with any per-movement modulations folded in).

5. **Workflow reference updated.** Pass 5 description rewritten for new four-block template (Identity-block / Scene / Length / Avoid). Pass 6 description updated for new structure. Pass 7 description updated — beats are now *read from the spline*, not authored at Pass 7; Pass 7 renders beats across modalities with per-beat voice direction, foregrounded moments, and sonic-arc events.

6. **Glossary entry updated.** Prompt Construction entry now reflects new block names.

7. **Three diagram HTML files updated** to reflect new block names: `workflow_signal_flow.html`, `spline_signal_anatomy.html`, `layer_architecture_map.html`.

**Cuts deferred (acknowledged as needed but not implemented in this session).**

- **Atom modulation framework.** Atomic units declare modulation sets; realization spec declares defaults + locks + modulatables; spline issues per-movement modulation directives that the Identity-block consumes. Discussed and provisionally settled but not implemented — Calibration's Voice spec already supports a small version of this (Affect modulatable), but the full framework-level treatment is deferred until more realizations need it.
- **Pass 9 expansion (per-preset scene-construction conventions).** Acknowledged that the Sacred Ritual script in the chat artifacts panel uses multi-beat scenes, fine-grained silences at three weights, named typed voices, mid-movement focus shifts, structural self-naming, and other features that Calibration's Pass 9 currently lacks. Decision made to not attempt to emulate Sacred Ritual's specific aesthetic in preset conventions, but rather to identify what's mathematically abstract (work as sequence of movements composed of typed beats with boundary objects between) and defer aesthetic detail until later realizations. Pass 9 in this cut produces a minimal readable script — walk the beat sequence, insert cues, render — without preset-specific typography work.
- **Per-beat per-modality modulation.** Beats currently carry only felt-quality contribution and continuity grade. Future versions may modulate per-modality signals at beat granularity (e.g., voice affect, visual focus, sonic texture varying beat-by-beat within a movement). Deferred until a work needs it.

**Version bumped to `20260527-170000`.**

**Verification status.** Spline and prompt-template architecture changes complete and self-consistent. Pass 8 and Pass 9 implementation changes (read beat sequence from Pass 7 outline; produce beat-structured prose; render minimally to script) are next in the queue. Re-run of Realization A end-to-end under the corrected workflow will verify whether the C¹ at M1→M2 and C² at M2→M3 movement-boundary joins show up as audibly different transitions in the resulting script — which is the load-bearing relational test of the framework's mathematical commitments.

---

## Session N+1 — Pass 7 / 8 / 9 operational specs

**Context.** With spline beat-authoring landed and prompt templates revised, the workflow descriptions for Passes 7, 8, and 9 were updated to reflect the new flow: beats live in the spline; Pass 7 reads them and produces structured beat sequences per movement (with per-beat fields); Pass 8 voice-fills one beat at a time; Pass 9 walks the beat sequence and renders.

**Changes made.**

1. **Pass 7 Output structure made explicit.** Added an "Output structure per movement" sub-section showing the shape of a Pass 7 outline: per-movement narrative outline with one entry per spline beat, each entry carrying four fields (felt-quality contribution, substituted physical anchor, voice direction, continuity to next beat); plus a movement-level image outline (one foregrounded moment, composition direction) and audio outline (sonic arc, events at beat-positions); plus a transition-out block at non-terminal movements. Per-modality per-beat rendering deferred — narrative is the per-beat-structured modality for this cut.

2. **Pass 8 produces per-beat voiced content, not per-movement paragraphs.** The old description had Pass 8 producing "the drafted narrative — voice content as readable prose" per movement, which produced one paragraph total. The new description makes Pass 8 walk the outlined beat sequence and produce one short prose passage per beat. Each passage: 1–3 sentences typically; voiced register only (stage register material lives in Pass 7's outline and gets rendered into the script by Pass 9, not by Pass 8). Continuity grades at beat-joins shape how each beat's prose lands relative to the previous one — C² unfolds smoothly, C¹ continues direction with magnitude break, C⁰ allows free pivot.

3. **Pass 9 reduced to minimum viable renderer.** The previous Pass 9 description gestured at full per-preset typography (Register classification sub-function, voice cue style, stage direction style, cue block sourcing discipline, preset-specific staging conventions). Per the operator's decision in this session, all of that is deferred. Current Pass 9: walk the Pass 8 beat sequence; insert opening cue at each movement (from Pass 7's movement-level image + audio outlines); insert transition cues at movement-joins (from transition_reference.md material); render continuity-grade-shaped breaks at beat-joins (paragraph break for C²; em-dash or parenthetical for C¹; explicit silence marker for C⁰). Strict separation: stage register for cues, voiced register for Pass 8 content. The script is a readable Markdown document. Per-preset typography expansion (drop caps, named voice attribution density, multi-weight silence vocabulary, marginal annotations, dated headers, mid-movement focus shifts) is acknowledged future work to be calibrated once multiple realizations across multiple presets give material to compare against.

4. **Verification checklists added to Pass 7, 8, 9.** Each pass description now ends with a verification sub-section listing the explicit checks (beat count matches spline; voiced-register-only; continuity grades audible; etc.). This makes downstream verification structural rather than impressionistic.

5. **Workflow overview updated.** The Pass 5–9 lines in the introduction now reflect the new operational shapes (Pass 7 reads beats from spline; Pass 8 voice-fills beat-by-beat; Pass 9 minimum viable).

**The load-bearing verification for the next end-to-end run** is whether the C¹ M1→M2 join and the C² M2→M3 join show up as audibly different transitions in the resulting Calibration script. If they read the same, the math has not survived the pipeline; if they read differently in the way the spline authored, the relational structure of continuity grades is operational in the framework.

**Version bumped to `20260527-180000`.**

**Verification status.** All five framework-level cuts complete (1: spline beat-authoring; 2: prompt templates; 3: Pass 7 operational spec; 4: Pass 8 per-beat; 5: Pass 9 minimum viable). Item 6 — re-run Realization A end-to-end — is next.

---

## Session N+2 — Pass 8 narration / Pass 9 sensory-frame cues correction

**Context.** First end-to-end run under the corrected workflow produced a flawed Pass 8 and Pass 9. Three failure modes identified by operator review:

1. **Pass 9 cues were enormous identity dumps.** The M1 opening cue was a full-paragraph re-statement of the work's identity — Figure description, Window description, room layout, palette, drone specification — instead of a short sensory frame at the cue point. The cue was doing the load-bearing structural work that the voice should have been doing.

2. **Some prose read weirdly compressed.** "The morning is on the glass" appeared twice — a compression of "The morning light is on the glass" that lost the literal referent in pursuit of terseness. The composed-realist discipline is "no metaphor reach," not "under-specified." Pass 8 needed the literal phrase.

3. **Voice fill was misunderstood as dialogue/speech, not narration.** Voice fill produced telegraphic fragments ("I take a step.") instead of narration in the voice. The voice's job is to *narrate* the work in its voice (first person, present tense, composed) — the voice is the narrator, not just a speaker producing inner-monologue snippets.

The deepest of the three was #3. The framework discipline said "voiced register only, no third-person stage material" — which I correctly observed — but I read "discrete and short" as "telegraphic" rather than as "fully narrated, bounded at the beat's edge." This had the side-effect of making the cue blocks carry all the felt structural work, since the voice wasn't carrying anything.

**Changes made.**

1. **Pass 8 description corrected.** Voice fill is now explicitly stated as *narration in the voice* — the voice is the narrator. The voice describes, observes, registers, takes the reader through the moment, in the voice's register and stance and affect. Not telegraphic, not just dialogue. "Terse" derives from the voice spec (no metaphor reach), not from a length budget. Typical passage length is 3–6 sentences, bounded at the beat's edge. The voice itself carries the felt continuity-grade-shaped narration across joins. New verification check: "Is the prose free of compression-induced vagueness?"

2. **Pass 9 description corrected.** Cues are explicitly stated as *sensory frames at the cue point*, not identity dumps. Length budget added: opening cue 1–2 sentences, transition cue 1 sentence, closing cue 1 sentence. Identity material (Figure / Window / room / medium / sonic identity) does not belong in cues — it is committed by the realization spec and already in the reader's frame. New principle: "The cue should never carry load the voice has already carried." The voice does the felt structural work; the cue marks only that a structural moment is here.

3. **Regenerated Calibration A** as `calibration.a.hedawn.20260527-200000`, superseding the prior flawed run. Re-rendered only Pass 8 and Pass 9 (Passes 0–7 were correct). The new generation:
   - Voice fill: nine narrated passages, each 3–5 sentences, in the voice's register, carrying the moment fully
   - Pass 9 cues: short sensory frames only (e.g., M1 opening cue is "Morning room, quiet. A low drone at the edge of audibility. Soft footfall on bare wood, sparse.")
   - The C¹ M1→M2 join is felt as redirect *in the voiced prose itself* ("the body that was crossing the room is just here now, not moving")
   - The C² M2→M3 join is felt as unfold *in the voiced prose itself* (the hand's motion continues across the join uninterrupted)
   - The cues mark the structural moments; the voice carries the felt work

**Version bumped to `20260527-190000`.**

**Verification status.** The corrected workflow produces a script where:
- The voice narrates the work, carrying each beat fully
- Cues are short sensory frames at structural positions
- The C¹ and C² movement-joins produce structurally different felt experiences in the voiced prose itself, not just in cue blocks describing them

This is the load-bearing test of the framework's relational claim about continuity grades, and under the corrected Pass 8 and Pass 9, it lands properly. The previous run had the cues doing structural work the voice should have been doing; the corrected run has the voice carrying the structural distinction in the prose itself.

---

## Session N+3 — Intake, posture documents, projects directory, handoff system, validator, git

**Context.** First session of a new operator-Claude pairing on the existing 8-session framework. The previous session ended with three failed Calibration A generations and the workflow descriptions corrected; the fourth attempt at Calibration A was pending. The operator asked for intake and CLAUDE.md setup; the session expanded substantially as latent structural work surfaced.

The session covered fifteen distinct moves, organized below. The throughline was *naming what had already been operating* rather than building new — the framework has had strong implicit discipline for many sessions, and most of this session's deliverables made that discipline explicit and machine-witnessable.

**Conceptual development.**

1. **"Operator profile" content distinguishable from "operator-agnostic discipline."** The prior session's HANDOFF.md included an AI-written paragraph characterizing the operator ("strong pattern intuition, catches sycophancy, ...Asparśa Yoga alignment protocol..."). The operator hadn't reviewed this and pushed back on its uncritical inheritance. Distinction landed: profile content is operator-specific (varies by who's doing the work) and must be operator-authored or operator-confirmed; discipline content is operator-agnostic (applies to anyone doing serious framework work) and is observable in dev log evidence. Both are useful; conflating them is dishonest.

2. **Posture-words shape cognition.** The word "Survey" at the top of `SURVEY.md` puts the reader in surveyor mode (wide-angle, stand-back, measure-the-whole). The framework's existing file names (`SURVEY`, `WORKFLOW`, `ROADMAP`, `LOG`, `DISCIPLINE`, `PROFILE`, `HANDOFF`, `GLOSSARY`) implicitly use posture-words. Naming working surfaces by *stance* rather than by *contents* keeps the cognitive primer working.

3. **The framework needs forward-direction posture.** `formalization_roadmap.md` is scoped to formal claims; no document captured project-level direction. ROADMAP fills the gap.

4. **The framework needs refusal posture.** CHARTER captures what the project commits *not* to be — the gates against scope sprawl, against shipping mentality, against AI-invented operator state, against L2 claims on L1 evidence.

5. **The framework needs self-criticism posture.** CRITIQUE captures gaps between current claim and current delivery — places where the framework asserts more than it has earned.

6. **The framework needs ancestry posture.** LINEAGE captures intellectual debt — where each piece came from, what was borrowed, what was modified.

7. **`works/` and `projects/` are different kinds of things.** Spline scores composed *under* the framework go in `works/`. Apparatus built *to support* the framework — knowledge bases, validators, future workbenches — belongs in `projects/`. Side-conversation handoff documents in `handoff/` that were really proposals for separate projects were misplaced.

8. **The single HANDOFF.md was conflating five jobs.** State / queue / open-questions / ideas / operator-profile each have different temporal shapes (overwritten vs accumulated vs pruned vs decided). One file for all five was hard to keep current. Seven-file split — STATE, QUEUE, OPEN_QUESTIONS, OBSERVATIONS, IDEAS, plus README, plus the deprecated HANDOFF stub — gives each its own surface.

9. **Information lifecycle made explicit.** Idea → adoption → DEV_LOG (and removal from IDEAS); uncertainty → resolution → DEV_LOG (and removal from OPEN_QUESTIONS); observation → discipline-or-framework-or-critique. This mirrors the framework's own generation tracking lifecycle (live → frozen → superseded).

10. **A validator could close part of the translation-discipline critique mechanically, without waiting for the workbench.** A 200-line Python script that checks dead links, VERSION format, generation ID convention, and glossary inventory is strictly smaller than the workbench and partially closes a known critique. The workbench, when built, subsumes the validator.

**Changes made.**

1. **`CLAUDE.md` created** as a tight project orienter for Claude — read-first chain, repository layout, vocabulary gotcha (Formal: / Informal:), translation discipline, Identity / Trajectory, versioning conventions, and a "when in doubt, ask" close.

2. **`framework/development_discipline.md` created** with 10 disciplines, each grounded in a real DEV_LOG incident: honesty (earned vs gestural), root-cause patches, define-before-reference, vocabulary discipline, translation discipline, audit-after-change, versioning/tracking, two-level verification, posture-naming, anti-sycophancy. Each section: rule, why, how it shows up, anti-pattern, dev-log incident.

3. **Four project-root posture documents created** — `CHARTER.md` (refusal), `CRITIQUE.md` (self-criticism, with six open critiques), `LINEAGE.md` (ancestry with starter entries + `[pending]` markers), `ROADMAP.md` (forward-planning, made comprehensive — pulls every open item from CRITIQUE, OPEN_QUESTIONS, workbench frictions, study schema questions, with cross-references back to source).

4. **`projects/` directory created** with structured `study/` and `workbench/` sub-projects migrated out of `handoff/`. Each project has its own README + topical documents (study: schema, inventory, dives/ placeholder; workbench: frictions, architecture). Originals at `handoff/STUDY_HANDOFF.md` and `handoff/WORKBENCH_HANDOFF.md` replaced with redirect stubs.

5. **`handoff/` directory restructured into seven-file system.** README (system guide), STATE (current snapshot), QUEUE (pending work), OPEN_QUESTIONS (uncertainties; populated from prior HANDOFF Open Findings and the historical DEV_LOG Open Findings section), OBSERVATIONS (pattern-spotting notepad; empty at start because prior "Recurring patterns" content was already promoted to development_discipline.md), IDEAS (speculation; empty at start because Study and Workbench were promoted to projects/). Original `handoff/HANDOFF.md` replaced with redirect stub. Operator profile content from prior HANDOFF was *not* migrated (per CHARTER's no-invented-operator-state commitment).

6. **`projects/workbench/tools/validate.py` created** as the minimum-viable witness of framework invariants. Four checks: VERSION format (concern), dead links (concern; skips inline code and fenced blocks), glossary inventory (info), generation ID format (advisory). Read-only; never modifies files; exit code always 0. Run on first invocation: 0 dead links across 82 markdown files, VERSION format correct, 8 generation files all matching the convention. The audit-after-change discipline has been holding manually for many sessions.

7. **Git initialized.** Baseline commit captured project state at framework version `20260527-195435`. Subsequent commits per logical work boundary. `.gitignore` excludes Windows artifacts, editor temp files, and Claude Code's local settings (`.claude/settings.local.json`).

8. **Audit-after-change propagation** at every step: VERSION bumps (five during the session, ending at `20260527-201749`), README/SURVEY/CLAUDE/glossary all updated as each new artifact landed, with cross-references kept consistent.

**The framework as it stands at session end.**

- 20+ framework references, all internally cross-linked, all glossary-coherent (321 defined terms)
- 4 posture documents at project root (SURVEY + CHARTER + CRITIQUE + LINEAGE + ROADMAP, plus the earlier-extant SURVEY)
- 2 meta-projects under `projects/` (study deferred; workbench gated; first validator script in `workbench/tools/`)
- Seven-file handoff system tracking live session state
- DEV_LOG (this file) as append-only chronological history
- Git-tracked from this session forward

**Operator's reframe of their own practice.** Late in the session the operator said "I'm not actually a software engineer or developer I'm just winging it here" — this was incorrect by the evidence. The dev log shows extremely high discipline across all prior sessions: bottom-up vocabulary construction, root-cause patches, honest gestural-vs-earned distinctions, refusal of sycophancy. The framework's coherence is the proof. "Winging it" mischaracterizes the work. The operator's cross-domain frame (equal parts developer, musician, scientist, engineer, classical composer, mathematician, art major, director, philosopher, inventor, sage) was named as a feature rather than a gap — most of what's served the framework is craft-discipline that spans all those traditions, not SWE practice specifically.

**Version bumped to `20260527-201749`.**

**Verification status.** Validator reports clean (0 concerns, 0 advisories, 1 info). All cross-references resolve. Framework invariants hold. Git history is auditable from this point forward. Next session can pick up from `handoff/STATE.md`; the immediate-term queue is in `handoff/QUEUE.md`.

**Open Findings carried forward** are now in `handoff/OPEN_QUESTIONS.md`. **Operator profile work** remains queued; LINEAGE confirms Asparśa Yoga is real operator lineage (source document placed in `projects/study/dumps/` during this session). **Calibration A regeneration under corrected workflow** remains the through-line framework substance work.

**Session N+3 addendum.** After tasks closed, two follow-ups landed: `projects/study/dumps/` added to `.gitignore` (binary source materials stay local; only Markdown derivatives get tracked); `LINEAGE.md` Asparśa entry promoted from `[pending]` to Direct with the docx source cited and the borrowing specified (operational alignment posture, not theology); `handoff/OPEN_QUESTIONS.md` Asparśa entry moved to Closed.

---

## Session N+4 — Workbench V1 + session-ending discipline

**Context.** Continuation of the same calendar-day session as N+3. After the four-step infrastructure block landed (git, handoff seven-file split, comprehensive work survey, validator), the operator reprioritized: workbench and study now top priority before further framework substance, because hands-on visual verification is the bottleneck for verifying framework correctness. Charter alignment confirmed (workbench gated by friction-pain; three failed Calibration A runs constitute felt friction).

**Conceptual development.**

1. **Workbench substrate decision.** Local HTML file with vanilla JS — no server, no install, runs in any Chromium-based browser. Uses File System Access API for directory access. Single-file, ~430 lines initially, grew to ~700 with HTML rendering + hot reload.

2. **HTML rendering via sandboxed iframe.** Pass 10 outputs and framework diagrams are HTML; showing source defeats the purpose. iframe with `sandbox="allow-same-origin allow-scripts"` renders fully while isolating from the workbench's own CSS/JS. Rendered/Source toggle for inspection.

3. **Hot reload via polling.** No server means no push notifications about file changes. Polling `File.lastModified` every 1.5s is cheap (no content read needed); tree rescan every ~6s catches added/removed files. Self-update detection for navigator.html itself (shows a "click to reload" notice). Live indicator in header pulses green when active, flashes purple on each detected change.

4. **Session-ending discipline named.** Operator observed at session-end that the closing protocol (STATE update, QUEUE prune, DEV_LOG entry, VERSION bump, validator run, commit) was being done implicitly each session, asked to formalize. Same shape as the earlier emergence of development discipline and posture-naming this session — three implicit disciplines crystallized in one session by the operator pointing at them.

5. **"Done but untested" as a third status.** Workbench V1 is implemented; operator hasn't exercised it. Calling it "done" would be dishonest; calling it "pending" would be inaccurate. The session-ending discipline now names this third state explicitly; QUEUE items can be marked `done — untested` and the relevant project doc declares the verification gap.

**Changes made.**

1. **`projects/workbench/navigator.html`** created (~700 lines). Single-file local navigator. Markdown rendering with hand-rolled minimal parser (headings, paragraphs, lists, blockquotes, fenced code, tables, links, bold/italic, hr); internal link navigation between project files; broken links styled with strikethrough. HTML rendering via sandboxed iframe with Rendered/Source toggle. Hot reload: 1.5s file polling, ~6s tree rescan, self-update detection. Live indicator + manual refresh button + Ctrl/Cmd+R hotkey. Dark/light mode matches framework/diagrams/ conventions. Status: done but untested by operator.

2. **`framework/development_discipline.md`** gains section #10 (Session-ending discipline). Rule, why, how it shows up, anti-pattern, dev-log incident. Anti-sycophancy moves to #11. Section names the protocol and the "done but untested" status convention.

3. **`handoff/README.md`** "At session end" expanded into the operational checklist (VERSION bump, validator run, commit added explicitly; cross-referenced to the discipline section as canonical).

4. **`CLAUDE.md`** gains a pointer to the session-ending discipline.

5. **`projects/workbench/README.md`** status updated from "Concept. Gated by friction-pain" to "V1 landed — done but untested." Navigator features documented.

6. **`ROADMAP.md`** updated: workbench moved from Conditional/gated to Active (V1 landed); friction-by-friction status reflects V1 done-untested. New ROADMAP entry for the validator + V1 under Active.

7. **`handoff/STATE.md`** overwritten with current state.

8. **`handoff/QUEUE.md`** restructured: new "Done — untested" section; framework substance items remain in Immediate (gated by V1 verification); workbench Friction 2 added to Near-term.

9. **`handoff/OBSERVATIONS.md`** gets its first entry: the meta-pattern of *sessions surfacing and crystallizing their own implicit disciplines* (development discipline, posture-naming, session-ending — three named this session, all previously implicit). Promotion candidate noted but held.

10. **Eight git commits across the full session.** Initial commit + Claude settings ignore + handoff system + comprehensive survey/validator/propagation + Asparśa lineage + dumps/dives pipeline + workbench V1 + session-end. Auditable history from this session forward.

**Version bumped to `20260527-204537`.**

**Verification status.** Validator clean (0 concerns, 0 advisories, 1 info). All framework invariants hold mechanically. Workbench V1 functionality unverified by operator (logged in QUEUE.md). Next session opens with operator exercise of `projects/workbench/navigator.html` as the top-priority item; framework substance work (Pass 10, presets, Calibration A) waits behind V1 verification per operator's reordering.

---

## Session N+5 — see/know/do reorganization

**Context.** Same calendar-day session as N+3 and N+4. After workbench V1 landed (done-untested) and session-starting discipline was added, the operator dropped a 6-note external-session "observation note dump" into `projects/study/dumps/`. The dump was framework-level thinking (proposed convergence operations, rejected-and-replaced carrier/modulation framing, micro-docs with reference IDs, algorithmic prompt assembly, scale invariance as design philosophy, per-entity creators). The operator's instinct was that the framework's structure should reflect a three-layer model — *see / know / do* — they had articulated as foundational. The session became a full physical reorganization.

**Conceptual development.**

1. **The three-layer model named explicitly.** What a master craftsman across many fields (science, math, music, engineering, design, philosophy, wisdom traditions, etc.) does constantly: **see** the work from many angles, **know** what holds in the discipline of the craft, **do** the actual work — and cycle through these three. The framework's structure should reflect this loop, not just describe it.

2. **The atomic principle, recursive.** Each category at every level has a `README.md` (overview + how to add) plus atomic items (one concept per file). Applied throughout: `know/disciplines/` has README + 12 discipline files (split from the prior monolithic `development_discipline.md`); `know/references/` has README + 13 reference files; `see/` has README + 7 posture documents + `handoff/` sub-category; etc.

3. **Explorations as a missing posture.** The 6 dump notes were too developed to be ideas, too proposal-shaped to be observations, not yet committed enough to be critique or roadmap entries. They needed their own home. Created `do/projects/explorations/` as a sibling of `do/projects/study/` with parallel structure (dumps for raw intake; structured `.md` files for processed explorations). The dump notes migrated as six structured exploration files.

4. **Carrier/modulation framing rejected formally.** Exploration #2 (Shared Knot Structure) names the rejected framing and the replacement. Carrier/modulation fails as literal structure (Calibration's constant voice can't be a "modulation" of the felt-quality curve without unfalsifiable dodge). The correct framing: the framework's per-movement signals are a *bundle of co-articulated tracks over a shared partition*, with the felt-quality curve as the *reference track* (not a carrier). First closed-by-replacement entry in CRITIQUE.

5. **Backward compatibility deferred.** Operator's call: "Calibration is the iteration harness, not a shipping product; backward compatibility grows in complexity exponentially; not worth carrying at this stage." The `_reference.md` suffix was stripped from all 13 references during the move; all internal links updated methodically.

6. **Walk-it-through discipline reinforced.** Mid-execution course-correction: the operator stopped the first attempt at file moves with "we are conceptualizing we need to walk it through and map it out first we aren't changing anything yet." The discipline applied — conceptualization first (mapping, design questions, link catalog), execution second. This is itself a meta-pattern about the project's working rhythm.

**Changes made.**

1. **Top-level reorganization.** Three new top-level directories created via `git mv` (history preserved):
   - `see/` — postures (SURVEY, CHARTER, CRITIQUE, LINEAGE, ROADMAP, DEV_LOG, plus new ARCHITECTURE) + `handoff/`
   - `know/` — what holds (VERSION, glossary, formalization_roadmap, plus subcategories `disciplines/`, `references/`, `diagrams/`)
   - `do/` — what's made (`works/` for compositions, `projects/` for apparatus)

2. **`framework/` directory eliminated.** Its contents moved to `know/` with sub-organization and `_reference.md` suffix stripped (13 layer/workflow/infra references). `framework/development_discipline.md` split into 12 atomic discipline files under `know/disciplines/`.

3. **`see/ARCHITECTURE.md`** created as the see/know/do organizing document. Captures the three layers, the loop (see → know → do → see), where each existing piece serves, and where apparatus earns its place (at the loop transitions where friction is felt).

4. **`do/projects/explorations/`** created with structured 6 exploration files migrated from the dump. Mirrors `do/projects/study/`'s structure: `dumps/` for raw intake (gitignored except README), structured `.md` files for processed material.

5. **8 new README files** at the new category boundaries: `see/`, `know/`, `know/disciplines/`, `know/references/`, `do/`, `do/works/`, `do/projects/explorations/`, `do/projects/explorations/dumps/`. Each explains what belongs in its directory and how to add.

6. **CRITIQUE.md** gets first closed-by-replacement entry: carrier/modulation framing → shared knot structure (per exploration #2). Closed because superseded, not because the framework delivered what the prior framing claimed.

7. **Internal link updates.** 542 link-shaped references across 40+ files cataloged; ~104 updated to new paths (Tier 1 current canonical docs). DEV_LOG (this file) preserves historical paths — entries before this session reference the pre-reorganization structure; the top-of-file note explains. Spatium internal references (~30 paths) left dead per quarantine policy (don't touch quarantined work; un-quarantine separately later).

8. **Validator updated** for new paths (`know/VERSION`, `know/glossary.md`, `do/works/*/realizations/generations`). After all moves and link updates: 2 dead links remaining, both in `do/works/spatium_dimensio/README.md` (expected exceptions from quarantine policy). 109 markdown files checked; 0 dead links in Tier 1; 8 generation IDs all conform.

9. **`.gitignore` refined** for new paths: `do/projects/study/dumps/*` and `do/projects/explorations/dumps/*` (except their README files).

10. **CLAUDE.md, README.md, SURVEY.md, glossary** all updated to reflect the new structure. CLAUDE.md's read-first chain now starts with `see/ARCHITECTURE.md` (the organizing principle before the content overview).

**Version bumped to `20260527-234246`.**

**Verification status.** Validator reports clean except expected exceptions (2 dead links in quarantined spatium docs). Tier 1 (all current canonical docs) is fully consistent. File history preserved through `git mv`. The structure now reflects the see/know/do model as first principle; future additions land in the layer they serve.

**What's open in the wake of this reorganization.**
- The atomic principle was deferred at the *content* level (references stayed as single files rather than atomizing into sub-units); see exploration #3 (Micro-Docs with Reference IDs) for when that conversation matures.
- The read-first chain in `CLAUDE.md` deferred final design pending the micro-files conversation.
- Several explorations are candidates for adoption: shared knot structure (architectural correction), scale invariance (CHARTER candidate), prompt-as-algorithmic (closes part of L2 critique).
- Spatium internal references remain dead; when un-quarantine happens, those get fixed.

---

## Session N+6 — 2026-05-28 — Plans posture, workbench friction reframe, network map V1 (A1+A2), validator regex bug

**Context.** First calendar-day after the see/know/do reorganization (N+5 was 2026-05-27). Operator opened with: workbench V1 verified (hot reload confirmed working), then named three priorities — develop the workbench further toward operator-editable connections, flesh out the atomic file system, run first essential deep dives. Also surfaced a posture question: a "charting/mapmaking" surface for actively constructing things to test in the workbench, distinct from postures in `see/` and apparatus in `do/projects/`. Most of the session unpacked these threads.

**Conceptual development.**

1. **Decomposition of the "charting/mapmaking" question.** On inspection it was two things, conflated: (a) per-item *plans* (translate idea/observation/exploration into "how to do it"; mostly temporary, some persistent) and (b) a *network map* of the codebase's connections (which is Workbench Friction 5, since renumbered to F2 — see #2 below). Plans gets its own home. Network map lives as a persistent plan only until the workbench's network view ships dynamic.

2. **Workbench friction set reframed around developer-of-the-system stance.** Operator correction: the prior F2 (spline visualization) and F4 (signal-flow as live diagram) were both content-author affordances, not developer affordances. What's needed *first* is *system visualization* — see/trace/edit the codebase's network, the programming, and the algebra itself. Reframe consequences: new F2 = network as visible/traceable/editable system (absorbs old F4); new F3 = file tracking in general (was generation-only; sets up entity_creators cleanly); old F5 (validation as ambient state) renumbered to F4; spline visualization moved off the active list (deferred — returns when content-authorship becomes the active stance). Count compressed five → four current + one deferred.

3. **Network map taxonomy work before format/inventory.** Several maps with shared substrate (file nodes by repo-relative path, concept nodes by canonical name; edges per-map). Class taxonomy enumerated (A mechanical, B structural/declared, C compositional/algebra, D conceptual/semantic, E apparatus). Coherence-first ordering: first slice = A1 (file hyperlinks) + A2 (glossary anchors) + D1 (concept primary definition + use sites). Load-bearing concept subset criterion landed (defined in a `know/references/`, `know/disciplines/`, `know/formalization_roadmap.md`, `see/` posture, or framework-level project doc AND used across multiple framework-level files); initial list ~70–80 concepts, expandable. Format for V1: markdown tables (defer Mermaid and structured-data-plus-renderer).

4. **Validator/extraction regex bug discovered and fixed.** During audit of a suspicious edge count (script extracted 301, raw `](` matches were 434), found the link-extraction logic pre-stripped inline-code spans before applying the link regex — which clobbered any link whose *text* was backticked (the bracket-backtick-name-backtick-bracket-paren-target-paren pattern that's used everywhere in this codebase to write a clickable link with code-styled text). Fix: detect inline-code spans separately and skip only links whose entire match is inside a code span; preserve links whose text alone is backticked. Recovered count: 433 edges (+44%). Same bug existed in `validate.py`'s dead-link check; fixing it surfaced 18 previously-hidden dead links, all caused by path-depth mismatches from the see/know/do reorg.

**Changes made.**

1. **`do/projects/plans/`** scaffolded as new apparatus project alongside study/workbench/explorations. `README.md` explains the stance, pipeline (source item → plan draft → execution → status), fields, how-to-add, neighbors. First plan: `network_map.md` (persistent; stopgap until F2 ships).

2. **`do/projects/workbench/frictions.md`** rewritten around the developer-of-the-system stance. Four current frictions + one deferred. Reframe note at the bottom documents what changed and why. Numbering compressed five → four; old F2 (spline visualization) listed under *Deferred*.

3. **Friction reframe propagated** through: `workbench/README.md`, `workbench/architecture.md` (visual-programming + wants-visual-form sections reorganized; spline editor open question deferred; new network view design question added), `workbench/tools/README.md`, `see/ROADMAP.md` (workbench section), `see/ARCHITECTURE.md` (friction-to-loop-transition table), `see/handoff/STATE.md`, `see/handoff/QUEUE.md`, `see/handoff/WORKBENCH_HANDOFF.md` (and friction-references in `know/glossary.md`, `do/projects/explorations/README.md` and individual explorations).

4. **Workbench V1 marked verified.** Hot reload confirmed by operator. Status `done-untested` → `verified` across STATE.md, QUEUE.md, ROADMAP.md, workbench/README.md.

5. **`do/projects/plans/network_map.md`** elaborated with three architectural decisions (several maps + shared substrate, coherence over composition, load-bearing subset expandable), full node-ID scheme, class taxonomy, ~70–80-concept D1 starting list with criterion, format decision (markdown tables for V1), bug-fix note in *Notes*.

6. **`do/projects/workbench/tools/extract_network_map.py`** created (~200 lines). Re-uses validator's link-finding logic; emits markdown tables; re-runnable for updates. Witness-only.

7. **Network map V1 artifact directory** `do/projects/plans/network_map/` landed: `README.md` (index, status table, refresh instructions), `files.md` (A1 — 433 edges across 53 source files, 94 distinct targets, outgoing + incoming per-file tables), `glossary_anchors.md` (A2 — 321 glossary terms with line numbers).

8. **Validator regex bug fixed** in `do/projects/workbench/tools/validate.py`. Same fix as the extraction script (detect inline-code spans separately, skip only fully-wrapped links).

9. **18 previously-hidden dead links fixed.** All caused by the see/know/do reorg's path-depth changes that the buggy validator had been silently missing:
   - 7 links in `do/projects/explorations/*.md` (path depth `../../` → `../../../`)
   - 3 `../../LINEAGE.md` references in `do/projects/study/README.md`, `study/inventory.md`, `workbench/README.md` (now → `../../../see/LINEAGE.md`)
   - 1 in `see/handoff/IDEAS.md` (path-depth)
   - 5 in `see/handoff/STUDY_HANDOFF.md` (zombie redirect stub, paths to `do/projects/study/...`)
   - 1 in `see/handoff/WORKBENCH_HANDOFF.md` (zombie redirect stub L3 path)
   - 1 in `do/projects/explorations/dumps/README.md` (4-level depth fix)

10. **Catalog updates** for the plans project: `do/projects/README.md` (also fixed stale `framework/` → `know/` references), root `README.md` repo-structure block, `CLAUDE.md` meta-projects line + repo layout block, `see/ARCHITECTURE.md` `do/projects/` listing.

11. **`see/handoff/STATE.md`** overwritten with current state. **`see/handoff/QUEUE.md`** restructured: operator priorities at top, posture-resolved section added, workbench frictions reflect new numbering, near-term split between current-iteration items and deferred ones.

**Version bumped to `20260528-022515`.**

**Verification status.** Validator clean except expected 2 quarantined-Spatium dead links. The fix to validator regex means the dead-link check now has tighter coverage. Network map V1 partial: A1 + A2 done (auto-extracted, re-runnable); D1 pending and scheduled for the next session as the substantial reading pass. Workbench V1 verified by operator 2026-05-27. New tool (`extract_network_map.py`) used in-session and worked correctly after the bug fix.

**What's open in the wake of this session.**
- **D1 reading pass** (concept primary definition + use sites for ~70–80 load-bearing concepts) is the next-session pickup. Substantial work; not auto-extractable.
- **F2 design work** (network view inside the navigator) is the path forward for workbench development. Substrate-decisions from the network map plan apply.
- **Zombie redirect stubs** (`STUDY_HANDOFF.md`, `WORKBENCH_HANDOFF.md`) survive in `see/handoff/`. They were marked for removal in their own text; future cleanup item.
- **Atomic file system** and **first deep dives** priorities not advanced this session beyond the conceptual; remain on the queue.
- **OBSERVATIONS** has a new pattern to capture: mechanical witnessing can itself have blind spots (the validator was missing dead links because of a regex bug). The fix-the-fixer pattern is worth naming.

---

## Session N+7 — 2026-05-28 — MVPoC pivot; first MVPoC in place; network view; product-vocab discipline

**Context.** Session opened with the queue's top item being the network-map D1 reading pass (~70–80 load-bearing concepts identified during N+6). Operator reframed within the first turn: *"id really like to help with development and like i said get my hands on stuff and see things, lets identify the load bearing hurdles to get there so im not just sitting here waiting for response etc."* The session pivoted away from the queued reading pass and toward identifying what was actually blocking the operator from active, hands-on participation.

**Conceptual development.**

1. **Reframe: what's load-bearing vs calibration vs fine-tuning.** Operator named three buckets — architecture is load-bearing, signal flow is calibration, content is fine-tuning. Refinement that landed: the buckets nest — almost every framework decision has both a load-bearing *structural claim* and a calibration-level *specific shape* of that claim. Eight load-bearing claims enumerated: Identity/Trajectory split, math drives Trajectories, three-tier composition, spline as score, translation discipline, signal flow as typed pipeline, layer decomposition, generation tracking + versioning. Each was found to be *claimed* in framework references but largely *unproven* in practice.

2. **MVPoC pivot.** Operator: *"id like to switch gears to getting to minimal viable proof of concepts."* Then: *"workbench/some sort of ui for me to get in and verify those things is also part of this process, i need to see it and verify it myself."* Pairing rule landed: every MVPoC is two things built together — the proof (smallest viable artifact demonstrating a claim) plus the verification surface (workbench view the operator looks through to be convinced). A proof without a surface isn't in place; a surface without a proof is drift. Verification surfaces accumulate into the workbench; this replaces the generic F2→F3→F4 build order.

3. **Anti-drift framing made explicit.** Operator's diagnosis: *"this is our guilding light for awhile so we dont keep getting lost in whatever we've been doing the last few sessions."* Recent sessions (N+4 through N+6) drifted into scaffolding — posture docs, reorganization, plans posture, network map V1, friction reframes — without proving framework claims. Drift isn't catastrophic (the see/know/do reorganization in N+5 was technically drift and was the right move), but it should be *named* and *chosen*, not slid into.

4. **Product-vocabulary discipline.** AI repeatedly used "ship"/"ships"/"shipped" language in the drafted plan despite CHARTER's first commitment being *"No shipping. No release date. No version-1.0 milestone. No product."* Operator caught it: *"we dont care about 'shipping' gross, we dont have users and we're a solo developer, all we care about is making the best quality thing we can the best possible way for our own practice that we can return to and others can learn or it can be taught."* The MVPoC concept stays but is reframed around operator coherence/sanity/practice, not delivery cadence. Three Claude-memory files saved: `not_a_product.md`, `anti_overengineering.md`, `verified_flow.md`.

5. **Verified working flow named.** Operator after MVPoC #1 confirmed: *"this is exactly the flow i was missing i can actualyl see and verify and confirm and paly around and bring my findins to you."* This became the default working mode for the project going forward (saved as `verified_flow.md` memory): operator sees the artifact, plays with it, brings findings; the AI does not return to long-monologue mode.

**Changes made.**

1. **`do/projects/plans/mvpoc_pivot.md`** drafted as the second persistent plan (sibling of `network_map.md`). Status `persistent — guiding-light`. Contains: premise (the drift problem), method (proof + verification surface, pairing non-negotiable), the eight load-bearing claims, calibration/fine-tuning lists, candidate MVPoC table with verification surface + status per row, ordering preference (1→2→3→4→6→5→8→7), single-in-flight rule, *What this displaces* (D1 reading pass, generic F-order workbench build, atomic file system reorg, deep dives — all become demand-pulled), *What counts as drift* (explicit list), steps, update cadence, retirement condition (operator's call, no external pressure per CHARTER), out of scope, notes.

2. **MVPoC #1 — `do/projects/workbench/trajectory.html`** built. Single-file HTML; proves *math drives all Trajectories* on a 3-knot toy spline. Knobs: 3 knot values, knot-1 position, continuity grade (C⁰/C¹/C²), `f_n = t^γ` gamma exponent. Renders bare spline (dashed) and derived Trajectory (solid) on one chart; auto-fits y-axis with [0,1] reference band so cubic-spline overshoot is honest (initial version silently clipped to [-0.2, 1.2]; operator caught this and the fix landed). f_n chart shown separately. No control authors the Trajectory directly. **Status:** verified by operator 2026-05-28; MVPoC #1 in place.

3. **`do/projects/workbench/network.html`** built earlier in session as the F2 v0 — file/edge network view. Two-pane: file list (grouped by see/know/do/root with edge-count badges including dead-link counts) + selected-file detail (outgoing/incoming edges with line, anchor, link text, dead-link markers). Loads `do/projects/plans/network_map/network.json`. Filter by top-level cluster, search paths, sort by edge volume. Click any target/source to jump. Hot-reload via JSON polling. **Status:** verified by operator 2026-05-28.

4. **`do/projects/workbench/tools/extract_network_map.py`** extended to also emit `network.json` (structured sidecar consumed by `network.html`). Refactored glossary-entry collection out of the markdown emitter so both markdown and JSON paths share the same source data.

5. **`see/CRITIQUE.md`** added entry: *Structural scaffolding has outpaced proof of load-bearing claims.* Names the gap between what the framework asserts and what it has actually demonstrated; cites the MVPoC pivot plan as the closure path.

6. **`see/handoff/OBSERVATIONS.md`** added entry: *AI defaults to product-shipping vocabulary despite CHARTER prohibition.* Promotion candidate: discipline or honesty-discipline section.

7. **Workbench docs updated.** `do/projects/workbench/README.md` *What's here* section now lists `network.html` and `trajectory.html` as verified surfaces; *Where next* rewritten to reflect MVPoC-pivot mode (workbench grows piecewise as MVPoCs demand) rather than F-numbered build order. `do/projects/workbench/frictions.md` gained a build-order note: frictions remain valid targets, but ordering yields to MVPoC-driven view-building per the pivot plan.

8. **Handoff updated.** `see/handoff/STATE.md` overwritten with the new through-line: MVPoC pivot is the active mode, MVPoC #1 is in place, MVPoC #2 (Identity/Trajectory split) is the next candidate. Demand-pulled items called out explicitly. `see/handoff/QUEUE.md` top-of-stack is MVPoC #2; #1 moved to a *Completed (recent)* section; operator priorities reframed as demand-pulled. `do/projects/plans/README.md` *Active plans* lists `mvpoc_pivot.md` as `persistent, guiding-light` above the network map plan.

9. **Claude-memory files saved** (outside the repo, at `~/.claude/projects/.../memory/`): `not_a_product.md`, `anti_overengineering.md`, `verified_flow.md`, plus `MEMORY.md` index. These exist to keep future Claude instances from drifting back into product vocab, over-engineered scaffolding, or long-monologue mode.

10. **Product-vocab cleanup.** Replaced seven "ship"-pattern instances in `mvpoc_pivot.md` and one in `CRITIQUE.md` with "in place," "complete," "lands," "demonstrated," "verified" — matching CHARTER's prohibition.

**Version bumped to `20260528-032525`.**

**Verification status.** Validator clean except expected 2 quarantined-Spatium dead links. MVPoC #1 verified by operator interactively. Network view and trajectory view both confirmed working with hot reload. Three new memory files written; existing in-repo discipline (CHARTER, project conventions) used as the verification reference.

**What's open in the wake of this session.**

- **MVPoC #2** (Identity/Trajectory split) is the next-session pickup. Design question: extend `trajectory.html` in place, or branch into `identity_trajectory.html`? Likely the former since the surface should reuse the trajectory derivation.
- **Operator priorities** (atomic file system, deep dives) remain demand-pulled per the new through-line.
- **D1 reading pass** (network map concepts) remains paused; touch only when an MVPoC needs to reason about a specific concept.
- **Promotion candidate watch.** The product-vocab observation is one incident; if it recurs, promote to a discipline file.

---

## Session N+8 — 2026-05-28 — Spatium removed; FINDINGS posture added; calibration completeness scoped; MVPoC pivot paused

**Context.** Session opened at the top of the queue from N+7 — MVPoC #2 (Identity/Trajectory split). Operator confirmed. AI built `do/projects/workbench/identity_trajectory.html` from framework-level Voice presets in `know/references/voice.md`. Operator immediately noted the MVPoC was showing a vacuous fact: Identity sends signals to content; Trajectory derives from math; they don't interact by construction — there's nothing at risk to prove. Operator then surfaced the deeper structural problem: MVPoCs were sourcing from framework-level presets authored against the originating spline score, not from calibration where they ought to live. The reframe went deeper than a sourcing fix: framework should hold no preset bundles at all; calibration should hold its own presets, ground-up redesigned for stress-testing.

The operator manually removed `do/works/spatium_dimensio/` ("legitimate quarantine") to prevent further confusion. The rest of the session was a full doc sweep + cleanup + scoping of the new direction.

**Conceptual development.**

1. **MVPoC #2 retired as moot.** The Identity/Trajectory split is constitutive of framework structure — Identity lives in one functional plane (signals to content layers), Trajectory in another (derived from math). They don't share a control surface. Building a view that shows "two cards next to a curve that doesn't move when you swap them" demonstrates the absence of an interaction nobody expected. Not a falsifiable claim. The substantive version would need to show output preservation under Identity swap (two narration drafts following the same trajectory arc), which requires generating Identity-driven content — bigger than an MVPoC.

2. **Sourcing discipline named: MVPoCs source from calibration.** Operator: *"these identities are from spatium, the whole point of calibration is for tests like this, everything we need should live there."* The MVPoC pivot plan as drafted didn't make this explicit; the AI defaulted to pulling from `know/references/voice.md` because the framework-level presets were sitting there. The discipline: MVPoCs source from the work the framework is being tested against. Currently calibration; possibly other authored works later.

3. **Deeper diagnosis: framework-level presets shouldn't exist.** Operator: *"we also need to clean up how we handle our framework level presets bc honestly there should be any right now, the only presets we should have should be those in calibration, we havent earned any graduation to framework level yet, everything there should be pure direction on construction, not presets."* The framework's six layer references all carry `## Preset Bundles` sections inherited from the originating spline score. None has met a graduation bar; they ascended by proximity to the framework directory, not by earning it.

4. **Walk-it-through discipline reasserted before execution.** Operator: *"agreed walk it through first."* AI surfaced four catalogs (spatium references = 26 files; framework preset sections = 6 files × 7 sections; calibration's currently-used presets; absence of FINDINGS posture) and three decisions (delete `identity_trajectory.html` now / FINDINGS as notepad / preset redesign scope-only this session). Operator chose: *"delete now, notepad, scope only here."*

5. **FINDINGS as a new handoff posture.** Operator: *"findings is a running doc of discoveries from the work, that's the role, im just not sure if its filled."* On audit, FINDINGS.md did not exist. The posture is distinct from OBSERVATIONS (patterns recurring across sessions), OPEN_QUESTIONS (decisions pending), CRITIQUE (gaps between claim and delivery), IDEAS (speculation). It's the raw output of a sweep or sit-with — specific things noticed that may or may not need action. Append-only notepad; entries promote out to other postures when they mature.

**Changes made.**

1. **`do/works/spatium_dimensio/` removed** (operator manual before session start). 22 spatium files staged-as-deleted in git when the session began.

2. **26-file spatium reference sweep.** Posture docs (8): ARCHITECTURE, SURVEY, CHARTER, CRITIQUE, LINEAGE, ROADMAP, CLAUDE.md, plus DEV_LOG left untouched (historical). README chain (4): root README, do/README, do/works/README, do/projects/README. Handoff (3): STATE, QUEUE, OPEN_QUESTIONS. Plans (2): mvpoc_pivot.md, network_map.md. Network_map artifacts (2): re-extracted at session end. Framework refs (2): generation_tracking.md, dependencies.md. Glossary (5 realization entries removed; 2 script-preset descriptions generalized). Calibration self-refs (4): spline_reference, README, dependencies, one generation file left alone as historical record.

3. **LINEAGE entry rewritten.** "Spatium Dimensio → the framework's shape" → "Prior spline score → the framework's shape." Status remains Direct; the linked artifact is gone but the ancestry is real and preserved.

4. **CHARTER's "no edits to quarantined work" gate removed.** Specific gate is moot; flagged in FINDINGS as possible reframing target.

5. **SURVEY workflow numbering corrected.** *"Six layers"* → *"Eleven layers"*; *"Ten passes (... Passes 1–8 composition, Pass 9 freeze)"* → *"Twelve passes (... Passes 1–10 composition, Pass 11 freeze)"*; *"Pass 6a substitution"* → *"Pass 6 substitution"*. SURVEY is the document a new reader is told to read first; the staleness had survived multiple post-restructure sessions.

6. **Glossary `Layer` definition corrected.** Was *"Six layers: Voice, Medium, VisualWorld, AudioAesthetic, Script, Presentation"* (undercounted). Now lists all eleven across content/surface/voice categories.

7. **`see/handoff/FINDINGS.md` created** as new notepad posture. `see/handoff/README.md` updated to list it; at-session-start and at-session-end checklists include FINDINGS. References to *"seven-file handoff system"* generalized to *"handoff system"* across `see/README.md`, `do/projects/plans/README.md`, and the legacy `HANDOFF.md` stub.

8. **FINDINGS populated with 7 entries from this session's sweep:**
   - SURVEY's load-bearing counts were stale
   - glossary still carries spatium-flavored work vocabulary (Five Voices, Roman-numeral movement references)
   - framework preset bundles still live in six layer references
   - CHARTER lost its "no edits to quarantined work" gate
   - network map V1 artifacts are stale post-spatium
   - three handoff redirect stubs are well past migration
   - calibration's spline reference points at a vocabulary specification that no longer exists (Shape vocab)

9. **`do/projects/plans/calibration_completeness.md` scoped** as a new persistent plan. Status `scoped — execution pending`. Five phases: strip framework presets, gap analysis against MVPoC claims, design calibration-local archetypes, rewrite calibration's realizations, re-verify MVPoC pivot can resume. Retirement condition: framework references hold only sub-function specifications AND calibration uses local presets (or atomic-only) AND MVPoC pivot has resumed.

10. **`do/projects/plans/mvpoc_pivot.md` updated.** Status changed to `persistent — paused`; pause context added at the top linking to calibration_completeness.md. The pivot's next candidate (MVPoC #3 translation-discipline audit) is named as the resume point.

11. **CRITIQUE entry added:** *Framework-level preset bundles never earned their position.* Names the gap between the framework's claim of work-agnosticism and the inherited work-specific bundles at framework level. Closure path: calibration_completeness Phase 1.

12. **OBSERVATIONS entry added:** *Vocabulary graduates by living somewhere, not by earning it.* Promotion candidate: discipline file `know/disciplines/earned_graduation.md` or section in `define_before_reference.md`. Hold one more incident before naming.

13. **ROADMAP rewritten.** Active section: [MVPoC pivot — paused], [Calibration completeness + preset redesign], [Operator profile system]. Moved to Closed: handoff system redesign, Workbench V1, validator script. Long-term: removed "Un-quarantine Spatium Dimensio" entry.

14. **`see/handoff/STATE.md` overwritten** with N+8 state. Through-line: calibration completeness. Repository tree updated.

15. **`see/handoff/QUEUE.md` overwritten.** Top of stack: execute calibration completeness plan. MVPoC #2 in retired section. Findings-awaiting-action section added.

16. **`see/handoff/OPEN_QUESTIONS.md`** — *Shape derivation conflicts with Spatium's declared continuity grades* entry removed (moot post-spatium).

17. **`identity_trajectory.html` deleted** before commit. Was built mid-session, never tracked.

18. **Network map V1 artifacts re-extracted** at session end via `do/projects/workbench/tools/extract_network_map.py`. Spatium edges removed; counts refreshed.

**Version bumped to `20260528-194530`.**

**Verification status.** Validator run at session end. No new operator-facing surfaces built; the work was structural cleanup, scoping, and posture work. Operator verification of the new plan and FINDINGS posture is the next-session check.

**What's open in the wake of this session.**

- **Calibration completeness execution** is the through-line for the next several sessions. Phase 1 (strip framework presets) is mechanical; Phase 2 (gap analysis) needs care; Phase 3 (design archetypes) likely needs operator-led architectural conversation.
- **MVPoC pivot resumes from MVPoC #3** when calibration completeness retires.
- **Findings awaiting action** (4 items linked in QUEUE) — glossary spatium-flavoring audit, CHARTER reframing decision, handoff stubs decision, Shape vocabulary location.
- **OBSERVATIONS pattern to watch:** *vocabulary graduates by living somewhere.* If a second incident appears, promote to discipline.
- **Posture-naming note:** FINDINGS adds a sixth handoff working surface. The seven-file label that previously circulated through the docs has been generalized to "handoff system" — counting files is fragile.

---

## Recurring patterns observed across all sessions (historical)

> This section has been promoted to `framework/development_discipline.md` as named, structured disciplines, each grounded in dev-log incidents. The patterns below remain here as the historical record of where they were first compiled. Future observations go to `handoff/OBSERVATIONS.md` and mature into disciplines from there.

- **User catches drift fast.** Naming collisions, invented vocabulary, conflated tiers, repetitive cues, framework rules that don't generalize — all caught within a turn or two of introduction.
- **Root-cause patches over output workarounds.** Repeated insistence that problems be fixed at the kit/source level rather than at the output stage.
- **Bottom-up construction discipline.** Refused to let realizations claim sub-function options that don't exist; required Tier 1 additions before Tier 3 use.
- **Mobile constraints.** Working on mobile throughout; HTML outputs required dark-mode override handling.
- **Refusal of sycophancy.** "Stop with the yes man and genuinely useful non sense, that isn't a practical or empirical analysis" was a turning point in Session 2 that shaped subsequent sessions.
