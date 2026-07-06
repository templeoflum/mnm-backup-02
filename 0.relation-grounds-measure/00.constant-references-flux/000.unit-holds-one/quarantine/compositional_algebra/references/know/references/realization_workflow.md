# Realization Workflow Reference

**Formal:** The twelve-pass workflow (Pass 0 dependencies check + Passes 1–10 composition + Pass 11 freeze and tracking) is functorial composition under a fixed normalization order. Each pass is a function from upstream outputs to its own output; the full realization is the composition of all twelve passes.
```
Realization = Freeze ∘ Presentation ∘ Script ∘ VoiceFill ∘ Outline ∘ Substitution ∘ TripletAssembly ∘ Voice ∘ Surface ∘ Content ∘ SignalPull ∘ DepsCheck
```
Horizontal discipline (one pass complete across all movements before the next pass begins) is the default normalization order; it preserves arc-coherence across the spline.

**Informal:** The operating manual for constructing a realization. The framework's other references are declarative — they say what exists, what each layer is composed of, what flows where. This reference is procedural — it says what you do, in what order, with what discipline, producing what at each stage.

Read this before constructing a realization. Refer back to it during construction. The discipline it specifies is what prevents drift across long constructions.

**Visual companion:** `framework/diagrams/workflow_signal_flow.html` — a one-page visual map of all twelve passes, color-coded by role (preparation, cross-modal application, voice fill, assembly). Open in any browser.

### What the workflow produces, in terms of Identity and Trajectory

Each pass produces layer outputs that combine Identity (from the realization spec and spline) with Trajectory (from the math). The workflow's job is to walk through these compositions in dependency order so that:

- **Math** (Pass 2) establishes the Trajectory source — felt-quality function f_n and mathematical content per movement
- **Content layers** (Pass 2) bring their Identities (the Figure, the Window, the motif) and apply their Trajectories (derived from math)
- **Surface layers** (Pass 3) bring their Identities (audio aesthetic, medium, visual world) and apply their Trajectories (also derived from math)
- **Voice** (Pass 4) brings its Identity (register × stance × positioning × configuration × affect) and applies its Trajectory
- **Pass 5** assembles cold-start triplet prompts (image, audio, narrative) under the four-block template per modality (Identity-block / Scene / Length / Avoid) — generic placeholders, no work-specific Figure / Window / room yet, no beats yet
- **Pass 6** substitutes work-specific identities into all three prompts (the Figure becomes a specific person; the Window becomes a specific object; identity consistency auditable across modalities)
- **Pass 7** applies Trajectory: reads beats from the spline's beat-authoring (per-beat for narrative; movement-level for image and audio in this cut), produces outlined beat sequences with per-beat voice direction and continuity grades (one response, all three modalities, all movements together)
- **Pass 8** voice-fills the narrative beat-by-beat — one short voiced passage per outlined beat (one response per movement)
- **Pass 9** assembles a readable script — walks the beat sequence, inserts opening cues and transition cues from Pass 7's outline material, renders continuity-grade-shaped breaks at beat-joins. Minimum viable for this cut; per-preset typography conventions deferred.
- **Pass 10** renders the presentation
- **Pass 11** freezes the generation

Math is upstream of all layer Trajectories. The realization spec is upstream of all layer Identities. The workflow composes the two streams.

### The cross-modal architecture

Passes 6 (substitution) and 7 (outline) operate cross-modally: they take all three Pass 5 prompts (image, audio, narrative) and apply substitution / outline to all three in single responses. This is structurally important. The work has one Figure, one Window, one room; the same Figure appears in image, audio, and narrative; the same Trajectory at M1 produces image's foregrounded moment, audio's sonic arc, and narrative's beats. Doing these cross-modally in single responses makes identity and trajectory consistency auditable across modalities, not just within each modality.

Pass 8 (voice fill) is narrative-only. The image and audio prompts after Pass 7 are complete; their register comes from medium / visual world / audio aesthetic Identity declared at Pass 5, and substitution + outline have committed all content. There is no equivalent "voice-of-the-image-prompt" pass needed. Whether this asymmetry should remain or whether image / audio benefit from a surface-polish equivalent is a design question worth watching as more realizations are constructed.

---

## The Two Disciplines

Two construction disciplines are possible. Both produce a realization. They produce different qualities of result.

### Vertical (per-movement deep dive)

Pick one movement. Compose everything for it: pull signals, compose content, compose surface, compose voice, assemble triplet, draft narrative, generate script. Move to next movement. Repeat.

**Strengths:**
- A single movement comes fully alive before attention moves on
- Easier to hold in working memory — one movement at a time
- Fast for short works or single-movement realizations

**Weaknesses:**
- The whole arc is never visible at once during construction
- Each new movement requires re-establishing context — what came before, what's coming after, what motifs need to thread through
- Drift accumulates: by the time you reach movement VII, the choices you made at movement I have been re-interpreted several times
- Continuity work happens reactively at each join, not structurally across the whole

### Horizontal (pass-by-pass across all movements)

Run one stage at a time across all movements before moving to the next stage. Pull all signals first. Compose all content next. Compose all surface next. Compose all voice next. Assemble all triplet prompts next. Substitute identities across all three modalities next. Apply outlines across all three modalities next. Voice-fill narrative per movement. Generate all scripts last.

**Strengths:**
- The whole arc is visible at each stage
- Each stage benefits from seeing how it plays out across the whole work
- Continuity is structural (built into each pass) rather than reactive (caught at joins)
- Drift is minimal — each stage's commitments hold across all movements before any next-stage work begins
- The realization holds together as one work rather than seven independent movements stitched into a sequence

**Weaknesses:**
- More responses overall — each pass takes time
- Working memory must hold the whole arc, not just one movement
- A single movement doesn't come alive until many passes in

### When to use which

**Horizontal is the default for any complete realization.** The whole-arc coherence is worth the additional time. Drift is the most expensive thing in construction; horizontal minimizes it structurally.

**Vertical is acceptable for:** single-movement realizations, exploratory construction (when the realization itself is being figured out, not yet committed), and demonstration sketches.

For any work with multiple movements where realization-level coherence across the full work matters, use horizontal.

---

## The Workflow Passes

The full production flow. Each pass completes across all movements before the next pass begins. Pass 0 establishes compatibility; Passes 1–10 are the composition arc; Pass 11 wraps with generation tracking.

### Pass 0 — Dependencies check

**What it does:** Verify that the framework instance loading this score can satisfy the score's declared dependencies. If any dependency is missing, the pass fails and the workflow does not proceed.

**Consumes:** `works/{work}/dependencies.md`, `framework/VERSION`, framework reference files, score extensions (if any)

**Produces:** A check result — `SATISFIED` or `FAILED with specific list of missing items`. The result is recorded in the generation header that Pass 11 will eventually produce.

**Format:** A short report listing each dependency declared and its resolution status.

**Discipline:**
- The check is mechanical. Either every declared dependency resolves or it doesn't.
- No silent success; no "I'll figure it out."
- If FAILED, the workflow halts. Either the framework instance is updated to satisfy the dependencies, or the score's dependencies are updated to match what the framework actually provides.
- See `framework/dependencies_reference.md` for the full check protocol.

### Pass 1 — Signal pull

**What it does:** Extract all spline signals for all movements. Assemble them so the whole picture is visible at once.

**Consumes:** Spline Reference, Transition Reference

**Produces:** A complete map of what each movement requires. Identity (including Shape), Math vocabulary, Character signal, Object signal, Motif signal, Audio signal, Visual signal, Voice signal, Transition notes — for all movements.

**Format:** Can be a compact table, list, or per-movement summary block. The output is reference material for the rest of the workflow, not a deliverable.

**Discipline:** Pull all signals from the spline as written. Do not interpret yet — interpretation happens in later passes. The signal pull is mechanical.

**Visual companion:** `framework/diagrams/spline_signal_anatomy.html` — shows what each movement emits (eight typed signals) and which downstream pass consumes each. Useful before writing or reading a spline.

### Pass 2 — Content composition

**What it does:** Run all five content references per movement, across all movements. Math content composes in audio-then-visual order; character/object/motif compose in parallel.

**Consumes:** Pass 1 signal pull; Math Audio Reference, Math Visual Reference, Character Reference, Object Reference, Motif Reference

**Produces:** Complete content specifications per movement — which math primitives at what density (audio primitives first, then visual primitives), which characters in what state, which objects in what condition, which motifs at what intensity. All five content layers populated for all movements.

**Format:** Per-movement content blocks. Math content shown audio-first, then visual; character/object/motif shown in parallel.

**Discipline:**
- **Math Audio composes before Math Visual.** Sonic primitives establish the temporal substrate of the content; visual primitives are the spatial moments within it. The two are not peers — audio is upstream.
- **Character/object/motif compose in parallel.** These five content layers (Math Audio, Math Visual, Character, Object, Motif) ordered as: Math Audio → Math Visual → (Character + Object + Motif in parallel).

### Pass 3 — Surface composition

**What it does:** Compose the audio surface (Audio Aesthetic) and visual surface (Medium + Visual World) for all movements. Audio composes first as the temporal substrate; visual composes second, reading the audio surface output as context for the spatial moment within the substrate.

**Consumes:** Pass 1 signals (Audio, then Visual); Pass 2 content outputs; Audio Aesthetic Reference, then Medium Reference and Visual World Reference; the realization's spec.

**Produces:** Complete surface specifications per movement. Per movement: what the audio rendering is (audio aesthetic sub-functions), then what the visual rendering is (medium × visual world).

**Format:** Per-movement surface blocks. Audio surface specified first; visual surface specified second.

**Discipline:**
- **Audio first.** Sound is the temporal substrate. Audio composes before visual because sound is developmentally and structurally prior (utero hearing precedes sight; omnidirectional sonic field precedes directional visual field; sound is the medium of time-flow within which spatial moments occur).
- **Visual reads audio.** Visual surface reads the audio surface output. The visual is the spatial moment situated within the sonic substrate, not a peer running in parallel.
- **Realization sets defaults.** Per-movement variation only where the spline requires it.

### Pass 4 — Voice composition

**What it does:** Compose the voice spec per movement across all movements.

**Consumes:** Pass 1 signals (Voice); Pass 2 content outputs; Pass 3 surface outputs (audio first, then visual); Voice Reference; the realization's voice base spec.

**Produces:** Complete voice specifications per movement. Per movement: register × stance × positioning × configuration × affect. Includes cross-axis interactions if relevant.

**Format:** Per-movement voice blocks.

**Discipline:** Voice reads everything upstream — speaks from within the sonic substrate and the spatial moment. Confirm cross-axis interactions per movement.

### Pass 5 — Triplet assembly

**What it does:** Use Prompt Construction Reference to assemble three cold-start prompts per movement — image prompt, audio prompt, narrative prompt — for all movements. Each prompt declares *form* only: layer Identity-block (rewritten fresh per movement, with any modulations folded in), Scene (the general physical/sensible/sonic situation of the movement), Length, Avoid. Work-specific identities (the specific Figure, the specific Window, the specific room) are not yet committed; they enter at Pass 6 substitution. Beats are not authored at this pass; they enter at Pass 7.

The three prompts are symmetric in structure. They differ in which modality they specify (image surface, audio surface, narrative voice) but share the same four-block template.

**Consumes:** Passes 1–4 outputs; Prompt Construction Reference

**Produces:** For each movement, three cold-start prompts:
- Image prompt (Medium and visual world Identity-block; Scene per spline visual signal; Length; Avoid)
- Audio prompt (Sonic identity Identity-block; Scene per spline audio signal; Length; Avoid)
- Narrative prompt (Voice Identity-block; Scene per spline voice signal; Length; Avoid)

Plus Connection Notes per triplet.

**Format:** Per-movement triplet specifications, three prompts each. Each prompt self-contained — no shorthand, no `[unchanged]` notation, no reference to other prompts.

**Discipline:**
- Cold-start prompts only. Every prompt must be self-contained. No "continuous with previous" framing. No `[unchanged]` or "as above" shorthand.
- **Use the canonical templates from Prompt Construction Reference.** Each prompt has four explicit blocks: Identity-block (named per modality: Voice / Medium and visual world / Sonic identity, sourced from realization spec with per-movement modulations folded in), Scene (varies per movement, sourced from spline signals — felt weight translated to physical language, math primitives translated to scene material, modality's craft direction folded in as prose), Length (explicit constraint), Avoid (Identity-preserving + form-preserving constraints as prose). Deviation from the templates must be deliberate.
- **No work-specific identities yet.** Placeholders are generic: "the figure," "the boundary," "the path," "the space." The work's specific Figure, Window, room are committed at Pass 6 substitution, not here. Scene names what kind of moment is happening; substitution names which specific things.
- **No beats yet.** Beats are Pass 7 (outline) — they read from the spline's beat-authoring section and apply to all three modalities together.
- **Translation discipline at the prompt boundary.** No framework vocabulary appears in prompts as visible labels (no "Math primitives at home:", no "Structural action:", no "Felt quality:"). The concepts drive the prompt's Scene content; they appear translated to scene language as prose.
- Avoid constraints inline in each prompt at the Avoid block.
- Connection Notes carry the shared anchors and spline invariants.
- The three prompts are structurally symmetric. Image, audio, narrative all use the canonical four-block template adapted to their modality.

### Pass 6 — Substitution

**What it does:** Take the three Pass 5 cold-start prompts (image, audio, narrative) and substitute work-specific identities into all three. The Figure becomes a specific person with specific attributes; the Window becomes a specific object with specific material details; the room becomes a specific setting. Substitutions are made once and applied across all three modalities and all movements.

**Consumes:** Pass 5 triplet prompts (image, audio, narrative); the work's content layer references (character, object, motif); transition reference for cross-movement bridging anchors

**Produces:** Three substituted prompts per movement — one image prompt, one audio prompt, one narrative prompt — with generic placeholders ("the Figure," "the Window," "the path") replaced by work-specific descriptions. Identity consistency auditable across all three modalities (the brass latch appears in the image, audio, and narrative prompts the same way) and across all movements (same Figure throughout).

**Format:** One response, all three prompts visible together for all movements. Identity commitments made in this pass hold across the whole realization.

**Discipline:**
- Substitute work-specific identities into all three prompts in the same response. The Figure committed at this pass is the same Figure in the image prompt, the audio prompt, and the narrative prompt.
- Identity consistency across modalities is the load-bearing job. A reader of the script will read all three prompts adjacent to each other; identity drift between modalities is immediately visible.
- Identity consistency across movements: the Figure, Window, room committed at this pass hold for M1, M2, M3.
- Source material is the work's content layer references (character, object, motif). The realization spec may further constrain identity choices.
- Substitution does not change form. The Pass 5 prompt's structure (Identity-block / Scene / Length / Avoid for each modality) is preserved; only the placeholders within Scene get committed to specifics.

### Pass 7 — Outline

**What it does:** Take the three substituted prompts from Pass 6 and apply Trajectory. Trajectory enters at this pass: it includes beats (read from the spline's beat-authoring), continuity grades at beat-joins, sensory cues at structural transitions, voice directions per beat, and per-modality renderings of the trajectory (beats for narrative, foregrounded moments for image, sonic arc for audio). One response covering all three modalities and all movements together.

**Consumes:** Pass 6 substituted prompts; spline's beat-authoring (sequence of beats per movement with felt-quality contribution and continuity grade at each beat-join); transition reference (bridging anchors, continuity polish requirements, anti-drift at joins); spline's per-movement signals (visual, audio, voice — for rendering trajectory across modalities)

**Produces:** Three outlined prompts per movement, each with the beat sequence and per-modality rendering of trajectory. Narrative outlines have beats with voice directions per beat. Image outlines have a foregrounded moment (or moments — one per beat if the spline's beat-authoring supports per-beat rendering for this realization). Audio outlines have a sonic arc with events at beat-positions. All three modalities at each movement reflect the same underlying beat sequence and trajectory.

**Format:** One response, all outlines visible together. Trajectory coherence verifiable across modalities and across movements. Beat sequence per movement reads from the spline; this pass renders the beats across modalities, not authors them.

**Output structure per movement** (the shape Pass 8 will consume):

```
Movement N outline

Narrative outline
  For each beat in spline's beat-authoring for this movement:
    - Beat N.b: [beat reference from spline]
        Felt-quality contribution: [from spline]
        Physical anchor (substituted): [from spline beat-authoring, with Pass 6 substitutions
            applied — generic "the boundary" → work-specific "the wood-framed sash window with
            brass latch"]
        Voice direction: [per-beat direction for the writer — what the voice does at this beat;
            modulates within the movement's overall voice's-job]
        Continuity to next beat: [from spline — C⁰/C¹/C², with sensory cue at the join
            describing what's heard/seen/felt across the gap]

Image outline
  Foregrounded moment(s) for the movement: [drawn from movement's Visual signal +
      spline's per-movement Identity; rendered as a single foregrounded moment for this cut,
      since per-beat per-modality modulation is deferred. The moment describes the scene's
      composition at the structurally-defining instant of the movement]
  Composition direction: [where the eye lands first, what's in foreground/middle/background]

Audio outline
  Sonic arc for the movement: [drawn from movement's Audio signal — opening sound, mid behavior,
      closing sound, rendered as a temporal arc across the movement's duration]
  Events at beat-positions: [if any sonic events fall at beat-joins — e.g., footfall ceasing at
      M1→M2 join, latch sound entering at M2's last beat — these are noted with their
      beat-position]

Transition out (only if not the last movement)
  Continuity grade: [authored in spline's beat-authoring as outbound continuity from last beat]
  Bridging anchors: [from transition_reference.md for this join]
  Continuity polish requirements: [from transition_reference.md]
  Anti-drift constraints: [from transition_reference.md]
```

**Discipline:**
- Outline all three modalities and all movements together. Trajectory is one thing per movement; image's foregrounded moment, audio's sonic arc, and narrative's beats are three views of the same trajectory.
- **Read beats from the spline's beat-authoring section.** This pass does not author beats; the spline does. Beat count, beat felt-quality contributions, and continuity grades at beat-joins are all already authored upstream.
- **Narrative outline is the per-beat-structured modality.** Each beat from the spline becomes an outlined beat with voice direction. For this cut, image and audio outlines render at the movement level (not per-beat) — per-beat per-modality modulation is deferred until a future realization needs it.
- Motif phasing threads concretely across movements (approach in M1, arrival in M2, release in M3) — as material in each modality's outline, not as named references.
- Continuity grade material woven in at joins: what the modality does at the join (the silence between beats; the visual focus shift; the sonic transition) reflects the authored continuity grade at that join. C⁰ joins allow direction-pivots; C¹ joins preserve direction with magnitude break; C² joins flow smoothly.
- Math primitives rendered concretely onto the substituted identities (the path becomes the bare wood floor between the speaker and the window; the boundary glimpsed becomes the visible window-frame at the far wall).
- Outlines name what each modality will produce, not what it produces yet. For narrative: beats with voice directions; not the prose. For image: the foregrounded moment(s); not the rendered image. For audio: the sonic arc with events at beat-positions; not the rendered audio.

**Verification at Pass 7:**
- Does the narrative outline have one outlined beat per spline beat for each movement (Calibration: 3 outlined beats per movement, 9 total)?
- Does each outlined beat include felt-quality contribution, substituted physical anchor, voice direction, and continuity to next beat?
- Are all spline continuity grades preserved (beat-internal and movement-boundary)?
- Are the image and audio outlines movement-level (not over-elaborated to per-beat for this cut)?
- Are bridging anchors from transition_reference.md present at each movement-join's Transition out section?

### Pass 8 — Narration (prompt assembly + execution)

**What it does:** Assemble the final generator-facing prompt from Passes 5, 6, and 7. Run the prompt. Produce the voiced narration as the generator's output.

This is not a per-beat authoring pass. The construction was finished at Pass 7. Pass 8's job is small but real: compose the Pass 5 Identity-block + Pass 6 substituted Scene + Pass 7 beat sequence with per-beat direction and continuity grades into a single coherent generator-facing prompt, hand that prompt to a generator, and produce the narration as a coherent generated output. The narration is shaped by the beats — it hits the beat positions and reflects the continuity grades — but it is generated as a coherent whole, not authored beat-by-beat by hand.

**Consumes:**
- Pass 5 narrative prompt (Voice Identity-block, Length, Avoid)
- Pass 6 substituted Scene material (work-specific identities committed)
- Pass 7 narrative outline (beat sequence with per-beat felt-quality contribution, physical anchor, voice direction; continuity grades at beat-joins and movement-boundaries)

**Produces:** Per movement, the voiced narration — the voice's full rendering of the movement, in the voice's register, with the beat structure and continuity grades carried in the prose itself.

**Two steps:**

1. **Prompt assembly.** Compose Pass 5's Voice block + Length + Avoid with Pass 6's substituted Scene and Pass 7's beat-by-beat direction into one prose-shaped prompt. The assembled prompt instructs the generator to narrate the scene in the voice, walking through the beats in order, with the per-beat direction shaping how the voice handles each beat, and the continuity grades shaping how the voice carries the prose across beat-joins and movement-boundaries. The assembled prompt is generator-facing English — no framework vocabulary as visible labels.

2. **Prompt execution.** Hand the assembled prompt to a generator (in-context Claude in the dev-iteration case; external LLM in the Level 2 verification case). The generator produces the narration as one output covering the movement. The output reflects the voice spec (register, stance, positioning, configuration, affect), the substituted Scene (work-specific identities present), the beat structure (the narration hits the beats in order with the right direction at each), and the continuity grades (the prose carries the right felt-shape across beat-joins and movement-boundaries).

**Format:** One prompt assembled and run per movement. Each response is the movement's full narration as the generator's output. (Image and audio do not have a Pass 8 — their Pass 7 outline material at movement level is the final form they take.)

**The voice carries the work.** The voice is the narrator. The voice tells the work — describes what's there, what's seen, what's felt, what's noticed — in the voice's register and stance, across the beats. Length per beat follows from what the voice's register requires to render that moment, not from a budget. Identity material from Pass 6 is *available* to the voice; the voice brings it forward as attention lands on it, not as a checklist to enumerate.

**Continuity grades are carried by the voice's narration, not delegated.** When the spline authors C¹ at a movement-join, the prompt directs the generator to carry the redirect in the voice itself — the body's relationship to the work shifts in the prose. When the spline authors C² at a movement-join, the prompt directs continuous flow — the voice's narration continues across the join uninterrupted. The script (Pass 9) and the presentation (Pass 10) will mark the structural moments, but the felt continuity-grade work is done by the voice at Pass 8.

**Discipline:**

- **Pass 8 is execution, not authoring.** The prompt assembled from Passes 5, 6, 7 is what gets run. Output is the generator's response. Do not pre-author beat-shaped fragments and call that "Pass 8 output." Do not second-guess what the prompt would produce by manually constructing each beat. The prompt either produces good narration or the prompt was bad; the fix is at the prompt-assembly step, not at the output step.

- **The assembled prompt must read as generator-facing English instruction.** No labeled-field structure. No framework vocabulary visible. The voice direction per beat from Pass 7 enters the prompt as prose instruction to the generator about what the voice does at each beat. The continuity grades enter as prose instruction about how the voice handles the joins.

- **Identity material is available, not prescriptive.** The substituted identities from Pass 6 (Figure, Window, room) are in the prompt as the scene's content. The voice brings them forward in narration as the voice's attention lands on them — not as a list to be enumerated in every beat. The voice's stance (e.g., Composed Realist for Calibration) determines what attention falls on.

- **In-conversation generator discipline.** When narration runs inline in the same conversation as authoring (the common dev-iteration case), the generator has access to authoring context that an isolated generator would not have. To approximate isolation: explicitly state what's being used as input (the assembled prompt) and disregard prior runs, prior outputs, and framework reference documents. Full verification of cold-start prompt sufficiency requires external generator isolation (see Calibration verification.md, Level 1 vs Level 2 verification).

- **Compression-induced vagueness is a prompt failure.** If the narration comes back with phrases like "the morning is on the glass" — where compression has lost the literal referent ("the morning light is on the glass") — the assembled prompt was over-compressing the voice direction. The voice spec for a Composed Realist Intimate narrator says "no metaphor reach," which is not the same as "under-specified." The prompt should direct the voice to literal observation, not to terse compression.

**Verification at Pass 8:**

- Is the assembled prompt generator-facing English (no framework vocabulary as labels)?
- Does the generator's output narrate the work in the voice — actually render the movement in the voice's register?
- Does the narration hit the beats in order with the right direction at each?
- Are continuity grades audible in the voice's narration across beat-joins and movement-boundaries — does the voice itself carry the felt shape, not the cue blocks (Pass 9) downstream?
- Is the prose free of compression-induced vagueness?
- Is the prose in voiced register throughout (no third-person stage material — that's Pass 9's job)?

### Why image and audio don't get a voice-fill equivalent

Voice fill exists because the narrative is prose in a specific voice character. The voice's register, stance, positioning, configuration, and affect produce particular sentence rhythms, vocabulary choices, and structural moves that can only be applied by writing the prose.

Image and audio prompts at the end of Pass 7 are descriptive paragraphs. Their register comes from the medium specification, visual world specification (image), and audio aesthetic specification (audio) — declared at Pass 5 as part of Identity. Their content is fully committed by substitution (Pass 6) and outline (Pass 7). There is no equivalent "voice-of-the-image-prompt" pass needed; the image and audio prompts are complete after Pass 7.

This asymmetry is deliberate. It may turn out that image and audio prompts benefit from a surface-polish pass that does for them what voice fill does for narrative. As more realizations are constructed, this design question will be tested. For now: narrative gets voice fill; image and audio don't.

### Pass 9 — Script

**What it does:** Produce the script as a performable text document. Take the Pass 8 narration and the Pass 7 outline material; structure them under the script preset's conventions; produce a text document that someone could perform from. The script integrates voiced register (the narration from Pass 8) with stage register (sensory cues, transition marks, voice attributions where the configuration calls for them, timing notation) into a coherent performable text.

Pass 9 produces text, not visual rendering. Typography, color, leading, spatial weight, and document format are Pass 10's job. Pass 9's output is the script *as text* — with all script-form structure (register classification, voice attribution, stage direction style, sensory cue blocks, timing notation) present *as text*. Pass 10 takes that text and renders it as the visual artifact a reader receives.

**Consumes:**
- Pass 8 narration per movement (voiced register, in the voice, beat structure carried in the prose)
- Pass 7 narrative outline (beat structure, per-beat voice direction, continuity grades — for verification that the Pass 8 output reflects the structure)
- Pass 7 image outline per movement (for sensory cue material)
- Pass 7 audio outline per movement (for sensory cue material)
- Pass 7 transition material per movement-join (bridging anchors, continuity polish, anti-drift constraints)
- The realization's script preset (the script-form conventions for this work; e.g., Notebook entry, Liturgical, Performance script)

**Produces:** Per movement, a script section as text — performable from the text alone. Plus a final cue marking the work's end-state.

**Script-form structure (per Script Reference's six sub-functions):**

1. **Register classification** — partition the narration into voiced register (what the voice says, in the voice's register) and stage register (what the work narrates as happening; third-person scene description, sensory cues, timing notation). For Calibration's Pass 8 output: the narration is entirely voiced register; stage register material is added at Pass 9 from Pass 7's outline material.

2. **Voice attribution** — how speakers are named or marked. Single-voice configurations (Solo, Calibration's case) require no per-beat attribution. Multi-voice configurations (Duet, Chorus, Polyphonic) require named voices per chunk; the Script preset specifies the attribution density and style.

3. **Stage direction style** — how non-spoken action is rendered as text. May be italicized, bracketed, marginalized, or set off by some other textual convention; the choice is the script preset's.

4. **Sensory mark integration** — how the image and audio material from Pass 7 appears in the script flow as cue blocks. The script preset specifies whether sensory cues appear inline, as block paragraphs, as marginal annotations, or as some other arrangement.

5. **Timing notation** — how silences and breath are notated *as text*. May be `(silence)` markers, em-dashes, paragraph breaks, explicit duration markers, or other text-level conventions. The script preset specifies the vocabulary; the continuity grades from Pass 7 determine which weight applies where.

6. **Modality coordination** — how the three modalities (voice, image, audio) align in the textual flow. The script preset determines whether the modalities are sequential, parallel, embedded, or some other arrangement.

**The script preset (or atomic spec) determines the script-form conventions for this work.** A script preset bundles the six sub-functions for one script-form (e.g., dated-entry diary form; call-and-response liturgical form; column-aligned production form). The preset is work-local — defined in the work's directory, not at framework level. Pass 9 reads the realization's script preset (or atomic sub-function spec) and applies its conventions to compose the script.

**Cues are not identity dumps.** The cue blocks Pass 9 produces — opening sensory cues, transition cues, closing cues — are short. They mark structural moments using minimum sensory anchor. They do not re-state Figure / Window / room / medium / sonic identity material; that material is committed by the realization spec and present in the reader's frame. The voice (Pass 8) has carried the rendering work; the cues mark structural positions and provide light sensory framing for transitions. Length budget: opening cue 1–2 sentences; transition cue 1 sentence; closing cue 1 sentence.

**Compositional behavior is Pass 10's job.** Movement weighting, transition rendering at the visual level, through-line visibility, frame honoring (visual mirror between opening and closing movements) — these are presentation concerns. Pass 9 establishes the script's textual structure; Pass 10 renders it visually.

**Output structure (illustrative, using calibration's chosen script form):**

```
[Work title — text-only header]

[Per-movement section:
  Movement header (text-level: number + title)

  Opening cue (stage register, short — establishes the immediate sensory frame)

  The Pass 8 voiced narration, with paragraph breaks at beat-joins. Beat-internal C²
  joins render as paragraph breaks. C¹ joins between beats would render as em-dash or
  parenthetical break. C⁰ joins between beats would render as an explicit silence marker
  in the text (e.g., `(silence — long)`).

  Transition cue at movement-join (stage register, short — marks the join's shape;
  the voice has carried the felt work in the narration crossing the join)
]

[Closing cue at the work's end (stage register, short — marks the work's end-state)]
```

The script preset specifies the exact text-level conventions for the work-form (does the script use named-voice headers? does it use dated entries? does it use drop caps in text form? does it use marginal annotations? what silence vocabulary?).

**Discipline:**

- **Pass 9 produces text, not visual rendering.** No typography decisions. No color decisions. No leading or spatial-rhythm decisions. Italics, brackets, em-dashes, parentheses — those are textual conventions that the script preset specifies as part of the script-form. But Pass 10 controls what those textual conventions look like visually (italic in EB Garamond at 18pt cream-on-dark-brown vs. italic in Times at 11pt black-on-white).

- **Pass 9 does not re-author the narration.** The Pass 8 narration is the script's voiced register. Pass 9 may classify it into voiced vs. stage register chunks (for narrations that have stage register woven in, which Calibration's Pass 8 does not — Calibration's voice is purely first-person), but Pass 9 does not rewrite voiced register prose.

- **Cues are short structural marks.** Opening 1–2 sentences. Transition 1 sentence. Closing 1 sentence. The cue should never carry load the voice has already carried. The voice has rendered the moment; the cue marks only that a structural moment is here.

- **The script preset is load-bearing.** Pass 9 cannot produce a script without consulting the realization's script preset. The preset's six sub-function conventions are what give the script its specific work-form. A Notebook entry script and a Liturgical script structure their text differently *as text*; the preset is what determines which conventions apply.

- **Modality coordination follows from the chosen script form.** For a dated-entry script form (as calibration uses): voice is the primary content, with image and audio cues integrated as light sensory anchors at structural positions. For a call-and-response liturgical form: voice and sensory cues alternate antiphonally. The script form (preset or atomic spec) specifies the arrangement.

**Verification at Pass 9:**

- Is the script performable from the text alone? Could someone read the script and know how to deliver the work?
- Are voiced register and stage register cleanly separated as text?
- Are cues short structural marks (within length budget) rather than identity dumps?
- Are timing notations and silence weights appropriate to the script preset's vocabulary?
- Does the script reflect the script preset's specific conventions for this work-form?
- Are continuity grades from Pass 7 reflected in the text's structural treatment of beat-joins (paragraph break for C²; em-dash/parenthetical for C¹; explicit silence marker for C⁰)?
- Are typography, color, and visual rendering decisions absent? (Those are Pass 10.)

### Pass 10 — Presentation

**What it does:** Compose the Presentation layer for the realization, then assemble the final readable document.

**Consumes:** Presentation Reference; realization spec (medium preset, visual world preset, voice base, audio aesthetic, script preset, presentation preset); spline (felt weight, math density, identity invariants per movement); script (per movement, from Pass 9)

**Produces:** A single presentation document — HTML, PDF, or print artifact — that holds the realization as a unified work for a reader.

**Format:** Two modes the Presentation Reference supports:
- **Review format (Option A):** per-movement sections with all four output tracks visible together (image prompt, audio prompt, narrative prose, script). Used during composition for review and iteration. Apparatus visibility is full; typography is functional rather than expressive.
- **Final format (Option C):** the script as the integrated whole, with image prompts embedded at visual cue moments and audio prompts inline as cue blocks. Typography composed from the realization's presentation preset. This is the deliverable form.

**Discipline:**
- Review format first, for iteration. Final format only after the realization is settled.
- The presentation preset is read from the realization. Per-movement variation only where the spline requires.
- The presentation is the surface a reader receives — typographical coherence is the work's final surface.

### Pass 11 — Freeze and tracking

**What it does:** Wraps the eleven composition passes with generation tracking. After Pass 10 produces the realization artifact, the operator decides to freeze the generation (creating a tracked artifact) or to regenerate (producing a new sample from the spec).

**Consumes:** All of Passes 1–10 outputs; Generation Tracking Reference; the operator's decision (freeze vs regenerate)

**Produces:** A generation artifact file named per the ID convention `{work}.{realization}.{operator}.{YYYYMMDD-HHMMSS}` under `works/{work}/realizations/generations/`. The file contains the metadata header (with status `live` initially, transitioning to `frozen` on selection) and the bodies of Passes 5–10.

**Format:** Single markdown file per the Generation Tracking Reference's specification.

**Discipline:**
- Run the dependencies check first. If dependencies aren't satisfied, the generation header records this and the generation is not eligible to freeze.
- The freeze decision is deliberate. A `live` generation can be regenerated; a `frozen` generation cannot — only surgically edited.
- Surgical edits to a frozen generation produce edit-suffix artifacts (`.e1`, `.e2`, ...). No regeneration from prompts after freeze.
- Multiple `live` generations may coexist while the operator evaluates. Only one is `frozen` at a time as the working draft; others become `superseded` when surpassed.
- Generation tracking is per-realization. The same realization can have many generations across operators and across time.

---

## External Generation (Optional Downstream)

The script (Pass 9) is a complete, readable artifact. A reader receives the picture from the image prompt's descriptive text and the sound from the audio prompt's descriptive text. The script does not require image or audio artifacts to be rendered.

When rendered image and audio artifacts are wanted, they are produced downstream:

- **External image generation:** the image prompts from Pass 7 (substituted + outlined) are handed to an image generator (or illustrator, designer). The generator produces an image artifact that can replace or supplement the image prompt's text in the presentation.
- **External audio generation:** the audio prompts from Pass 7 are handed to an audio generator (or musician, sound designer). The artifact replaces or supplements the audio prompt's text.

External generation is optional and downstream of Pass 9. The framework's composition completes at Pass 11 regardless of whether external generators are run. A presentation with image-prompt-text and audio-prompt-text as descriptive cues is a valid final form; so is a presentation with rendered image and audio artifacts embedded.

## Per-Beat Exploration (Deferred / Post-Freeze)

After a generation is frozen, the Pass 7 outline's beats may be used to author additional per-beat image and audio prompts — variant prompts focused on individual moments within a movement rather than one prompt per movement.

The use case: testing specific sounds and visuals for individual beats. Example: in M1 (Crossing), beat 2 is "window named and located." A per-beat image prompt might focus on the close-up of the brass latch with verdigris; a different per-beat prompt might focus on the wider view of the figure at mid-room with the window visible at the far wall.

Per-beat prompts inherit Identity from Pass 6 (same Figure, Window, room) and form from Pass 5 (same medium, world, audio aesthetic). They author additional Trajectory at finer beat-granularity than the per-movement outlines.

This is deferred / nice-to-have functionality. The main workflow (Passes 0–11) does not require per-beat exploration. When authored, per-beat prompts become additional script content at the appropriate beat position.

---

## What Gets Generated vs What Stays as Specification

Every Pass 5 triplet output is a **cold-start prompt** — the kind of prompt you hand to a generator to produce a finished artifact. Image prompt → image generator → image. Audio prompt → audio generator → audio. Narrative prompt → narrative generator → narrative. The three are symmetric in structure.

The asymmetry is **which generators are integrated into the framework's flow vs which are external.**

**Framework-integrated generator (runs as Pass 6):**
- Narrative — generated by Pass 8 (voice fill) against the Pass 7 outline. The framework produces drafted prose because the narrative generator is integrated.

**External generators (run downstream of the framework, not in any pass):**
- Image — the image prompt is produced inside the framework through Pass 5 (form) + Pass 6 (substitution) + Pass 7 (outline). The substituted-and-outlined image prompt serves the script directly as descriptive content. Optionally, the prompt is handed to an image generation tool (or illustrator/designer) for a rendered artifact downstream.
- Audio — the audio prompt is produced inside the framework through Pass 5 (form) + Pass 6 (substitution) + Pass 7 (outline). The substituted-and-outlined audio prompt serves the script directly as descriptive content. Optionally, the prompt is handed to an audio composition tool (or musician/sound designer) for a rendered artifact downstream.

**Assembly outputs (Pass 9-10, produced inside the framework from upstream outputs):**
- Script — text, integrated during Pass 9 from drafted narrative + image prompts + audio prompts + transition timing. Image and audio prompts integrate as descriptive script content, not as generator handoffs.
- Presentation — text/HTML, assembled during Pass 10 from script + apparatus + realization preset

The script integrates all four triplet outputs by reference. Where an image appears in the script, the script names the image prompt (the full spec) as the visual cue. Where audio enters, the script names the audio prompt as the sonic cue. The narrative is rendered inline as drafted prose. The staging is rendered as stage direction.

When image and audio are later generated by their external generators, the rendered artifacts slot into the script's cue positions without altering the script's structure.

If the framework gains image or audio generators integrated into its own flow in the future, those generators would run as new passes parallel to Pass 8 (voice fill) — taking the Pass 7 outlined prompts and producing rendered artifacts. The substitution + outline architecture (Passes 6, 7) already operates symmetrically across all three modalities; only the final fill/render step is currently narrative-only.

---

## Review Checkpoints

Major points where review naturally happens before propagating commitments forward.

### Checkpoint 1 — After Pass 1 (Signal pull)

Question: does the spline's per-movement signal picture look right? Are all 9 signals populated for all 7 movements? Are there any signals where the spline's content seems thin or incomplete?

If something is off, fix it in the spline before continuing. The spline is the source of truth.

### Checkpoint 2 — After Pass 2 (Content composition)

Question: are characters, objects, motifs populating per movement as expected? Are there content gaps where a movement should have a motif or character active but doesn't? Are continuity invariants being honored (characters that persist across movements remain the same; objects with declared continuity preserve their material identity; motifs unfold their phases as specified)?

If something is off, adjust content composition before moving to surface.

### Checkpoint 3 — After Pass 7 (Outline)

Question: do the cold-start prompts hold the realization? Could each prompt produce the correct movement output without external context? Are anti-drift constraints inline at the right blocks? Are framework-internal vocabulary references absent from the prompts (no motif names, primitive names, layer abstractions)?

If prompts are drifting (referencing previous movements, leaking framework vocabulary, etc.), fix before drafting narrative.

### Checkpoint 4 — After Pass 8 (Voice fill)

Question: does the prose work? Does the voice hold across movements? Are motifs threading correctly? Are continuity invariants present in the actual text? Does the closing of VII echo the opening of I?

If the narrative is uneven, revise specific movements before generating scripts.

### Checkpoint 5 — Before Pass 10 (Presentation)

Question: which presentation format — review or final? Has the realization settled enough to commit to final format?

If still iterating, use review format. If settled, use final.

---

## Estimated Effort

Rough scale for a full realization across N movements:

- Pass 1 (Signals): 1 response
- Pass 2 (Content): 2–3 responses
- Pass 3 (Surface): 2–3 responses  
- Pass 4 (Voice): 1–2 responses
- Pass 5 (Triplets): 3 responses (image prompts; audio prompts; narrative prompts) — form only
- Pass 6 (Substitution): 1 response (all three prompts substituted across all movements)
- Pass 7 (Outline): 1 response (all three prompts outlined across all movements)
- Pass 8 (Voice fill): N responses (one per movement)
- Pass 9 (Scripts): N responses (one per movement, or 2–3 if grouped)
- Pass 10 (Presentation): 1 response

Total: roughly 24–29 responses for a complete rigorous realization. Less if some passes can be condensed. More if revisions happen at checkpoints.

This is what rigor costs. The vertical alternative (per-movement deep dives) takes fewer responses but produces more drift.

---

## Adapting the Workflow

The ten-pass flow is the default. It can be adapted:

**For exploratory composition** (the realization is still being figured out): start with Pass 1 and pause. Discuss what the realization should be. Run Pass 2 to see if the content specifications surface anything that suggests a different realization choice. Iterate at Checkpoint 2.

**For revisions** (a realization exists and needs adjustment): identify which pass the change affects. Re-run from that pass forward. Don't re-run upstream passes unless the change is structural.

**For multi-realization works** (different movements use different realizations): run Pass 1 once. Run Passes 2–4 per movement using each movement's chosen realization. Run Passes 5–10 normally with explicit attention to transition continuity across realization shifts.

**For partial realizations** (only some movements): run all passes for the chosen movements. Note explicitly that the realization is partial. The script and presentation should mark which movements are not present.

---

## How This Reference Connects to the Framework

This is the **operating manual** for the framework. It does not specify new layers or new content. It specifies how the existing layers and content are sequenced and integrated to produce a realization.

**References used by this workflow (in order of consumption):**
- Pass 1: Spline Reference, Transition Reference
- Pass 2: Math Visual Reference, Math Audio Reference, Character Reference, Object Reference, Motif Reference
- Pass 3: Medium Reference, Visual World Reference, Audio Aesthetic Reference
- Pass 4: Voice Reference
- Pass 5: Prompt Construction Reference, Transition Reference
- Pass 6: Character Reference, Object Reference, Motif Reference (substitution sources)
- Pass 7: Transition Reference, Spline Reference (outline / trajectory sources)
- Pass 8: (uses Pass 7 narrative outline + voice translation directly)
- Pass 9: Script Reference
- Pass 10: Presentation Reference (composes from realization spec + spline + all upstream outputs)

**References that inform realization choices throughout:**
- The work's `realizations/` directory (which realization spec to use as starting point; existing realizations to draw from)
- Glossary (terminology)
- The work's provenance notes (lineage, context)

The workflow is the operating discipline. A work is what the workflow produces when applied to a particular spline score.
