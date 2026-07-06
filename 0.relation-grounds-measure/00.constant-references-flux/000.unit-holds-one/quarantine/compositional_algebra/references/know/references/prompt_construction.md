# Prompt Construction Reference

**Formal:**
```
PromptConstruction : VoiceOutput × SurfaceOutputs × MathOutputs × ContentLayerOutputs × Identity → Triplet
Triplet = ImagePrompt × AudioPrompt × NarrativePrompt
```
A functor reading all upstream layer outputs and producing a typed triplet of cold-start prompts. The triplet provides form (Identity-block + Scene + Length + Avoid) per modality; work-specific identity and trajectory are applied downstream at Pass 6 (substitution) and Pass 7 (outline) before any prompt leaves the framework.

**Informal:** How to assemble a triplet (image, audio, narrative) for any movement. The spline emits signals; reference docs read them in dependency order; prompt construction combines outputs into cold-start prompts with Avoid constraints inline.

---

## Dependency Graph

```
SPLINE (hub)
   ↓ emits typed signals per movement
   ↓
Identity signal ──────────────────→ universal input for all layers
   ↓
Content layers:
   Math vocabulary → Math Audio (temporal primitives first) → Math Visual (spatial primitives within)
   Character signal → Character Reference
   Object signal → Object Reference
   Motif signal → Motif Reference
   (Character/Object/Motif compose in parallel with each other; Math Audio precedes Math Visual)
   ↓
Surface layers (audio first as temporal substrate, then visual within it):
   Audio surface: Audio Aesthetic (reads Audio signal + Math Audio + characters + objects + motifs)
   ↓
   Visual surface: Medium ↔ Visual World (reads Visual signal + Math Visual + characters + objects + motifs + audio surface output)
   ↓
Voice (reads sonic substrate, then spatial moment, plus all content)
   ↓
Prompt Construction (assembles triplet: image prompt + audio prompt + narrative prompt)
   ↓
Three generators consume the prompts:
   Image prompt → external image generator → image (or remains as deliverable spec)
   Audio prompt → external audio generator → audio (or remains as deliverable spec)
   Narrative prompt → Pass 6 substitution → Pass 7 outline → Pass 8 voice fill → narrative prose
   ↓
Transition Reference informs Pass 6 substitution and Pass 7 outline (cross-modal continuity, woven into all three prompts before any leaves the framework)
   ↓
Script assembly (integrates narrative + image cues + audio cues + transition timing)
```

Math precedes surface within each domain because math is the content being encoded. Audio precedes visual because sound is the temporal substrate within which the spatial moment occurs. Voice comes last in the composition phase because it speaks from within the sonic substrate and the spatial moment, both of which must exist first. Then Prompt Construction assembles the three prompts that drive the generators. Only the narrative generator runs inside the framework's flow; image and audio generators are external.

---

## Workflow

```
1. CHOOSE per-movement spec
   Each layer composed from sub-functions, or chosen as a preset bundle:
   — Audio Aesthetic: tonality × texture × timbre × rhythm × pacing × spatialization × phrasing (composes first as temporal substrate)
   — Medium: substrate × mark-making × surface behavior × edge quality × color behavior (composes within audio substrate)
   — Visual World: palette × light × line × figure × atmosphere (composes within audio substrate)
   — Voice: register × stance × positioning × configuration × affect (composes last)
   — Math primitive density (from spline)

2. PULL signals from spline for that movement
   — Identity
   — Math vocabulary signal
   — Character signal
   — Object signal
   — Motif signal
   — Visual signal
   — Audio signal
   — Voice signal
   — Transition notes

3. COMPOSE content layers
   — Math Audio renders the sonic primitives at home for this movement (temporal substrate, composes first)
   — Math Visual renders the visual primitives at home for this movement (spatial moment within the substrate, composes second)
   — Character Reference renders the characters per movement (parallel)
   — Object Reference renders the objects per movement (parallel)
   — Motif Reference renders the motifs per movement (parallel)

4. COMPOSE surface layers
   Audio surface (composes first as temporal substrate):
     — Audio Aesthetic reads Audio signal + Identity + Math Audio + characters + objects + motifs
   Visual surface (composes second, reads audio surface):
     — Medium reads Visual signal + Identity + Math Visual + characters + objects + motifs + audio surface output
     — Visual World reads Visual signal + Identity + Math Visual + characters + objects + motifs + audio surface output
     — Medium and Visual World are mutual with each other

5. COMPOSE Voice last
   — Reads Identity + Voice signal + Math Vocabulary + all content outputs + audio surface + visual surface
   — Voice has five sub-functions: Register × Stance × Positioning × Configuration × Affect
   — Voice speaks from within the sonic substrate and the spatial moment within it
   — Confirm cross-axis interactions (see Voice Reference)
   — In multi-voice configurations, each voice is fully specified independently

6. ASSEMBLE triplet
   — Connection Notes (drawn from spline invariants + spec flexibility)
   — Image prompt (per-movement scene content + anti-drift constraints inline)
   — Audio prompt (per-movement scene content + anti-drift constraints inline)
   — Narrative prompt (per-movement scene content + anti-drift constraints inline)
   — All prompts cold-start; work-specific identity and continuity material routes to Pass 6 (substitution) and Pass 7 (outline) for all three modalities
```

---

## Triplet Structure

```
Triplet — Movement N
  Spec: [one-line summary of all axes chosen]

  Connection Notes
    — shared anchors across the triplet (math primitives, scene elements)
    — what can vary across realizations (from spline flexibility)
    — spline-invariant (from spline invariants)

  Image prompt (cold-start, self-contained; anti-drift constraints inline)
  Audio prompt (cold-start, self-contained; anti-drift constraints inline)
  Narrative prompt (cold-start, self-contained; anti-drift constraints inline)
```

Continuity material does not appear in the triplet. Work-specific continuity is woven into all three prompts at Pass 6 (substitution) and Pass 7 (outline), cross-modally and in single responses across all movements.

---

## Core Principles

- **Cold-start prompts.** Each prompt must be self-contained — no external context required to generate from it. Prompts may not reference prior movements ("continuous with previous," "carrying from movement N") or other prompts ("[unchanged]", "as above") — generators have no memory across calls.
- **Translation discipline at the prompt boundary.** Framework-internal vocabulary does not appear in prompts. Generators have no access to motif names, primitive names, layer-internal abstractions, sub-function names, or any other framework reference vocabulary. All framework abstractions translate to concrete sensory/structural specification at the prompt boundary. Framework concepts must not appear as visible field labels (no "Math primitives at home:", no "Structural action:", no "Felt quality:" as labeled fields) — the concepts still drive the prompt's content, but they appear translated to scene language.
  - Wrong: "Approach-and-Arrive motif in its arrive phase"
  - Right: "Held quality, observation rather than action, the figure at a threshold without yet acting on it"
  - Wrong: "Render the threshold primitive at low density"
  - Right: "The window frame foregrounded, the boundary between interior and exterior felt as boundary"
  - Wrong: "Voice carries Stricken affect"
  - Right: "The speaker bears the cost of what they've observed; voice maintains technical specificity under the weight of recognition"
  - Wrong: "Everyman × Realist × Intimate × Solo × Composed"
  - Right: "First-person intimate present-tense narration. Single voice throughout. The speaker reports what is actually seen without metaphor reach, without past-tense reflection, without symbolic framing. Self-possessed; voice carries no emotional push or rise. The reader is addressed as if the speaker is writing in a journal or speaking to someone close."
  - Wrong: "Movement form: Felt quality: gathered and forward; Math density: minimal; Math primitives at home: the path, the boundary"
  - Right: "The speaker is mid-room in a modest interior, walking unhurried toward the far side where a boundary is visible. The body is collected and forward. Sparse physical detail — the floor, the body's motion, the boundary at the far side; nothing more."
- **Identity-block rewritten fresh per movement.** No `[unchanged]` shorthand, no reference to other prompts. Each per-movement prompt populates the Identity-block with its own content. Where the realization spec declares atoms as locked, the content is the same across movements (and that's fine — it's still rewritten, not referenced). Where atoms are declared modulatable, per-movement modulation values are folded in verbatim.
- **Avoid constraints are inline, not a separate stage.** Material constraints, vocabulary restrictions, convention preservation, period markers — all appear inside the prompt's Avoid block as concrete prose. There is no separate polish stage.
- **Per-movement form only at Pass 5.** Work-specific identity (the specific Figure, the specific Window, the specific room) and trajectory (beats, foregrounded moments, sonic arc) route to Pass 6 (substitution) and Pass 7 (outline) for all three modalities. Beats do not enter Pass 5 Scene blocks.
- **Connection Notes orients the reader.** Read before any prompt.
- **Three outputs cohere as one movement.** Same math primitives at the same density (translated to scene material), same scene anchors, same continuity position; different modalities.
- **Math content drives surface.** The math primitives the movement uses determine what surface layers must render (translated to scene material at the prompt boundary).
- **Voice composes last.** Voice describes what's been encoded — it depends on math and surface outputs being defined first.
- **Cold-start prompt sufficiency requires external verification.** A prompt that produces good output in-conversation may be insufficient as a true cold-start — the authoring context may be silently filling gaps. In-conversation generation tests structural prompt assembly and visible vocabulary leaks (Level 1 verification). Cold-start sufficiency, translation discipline robustness, and reproducibility require external generator isolation (Level 2 verification). See `works/calibration/verification.md` for the two-level discipline.

---

## Prompt Template Structure

Each Pass 5 prompt has four structural blocks. The blocks separate concerns so the prompt is auditable: a reviewer can check whether each commitment is present and consistent. Pass 5 produces *form*; work-specific identity and trajectory are applied downstream at Passes 6 and 7.

The four blocks (block names vary per modality but the structural role is uniform):

1. **Identity-block** — what this layer *is* in this realization at this movement. Named per modality: **Voice** for narrative, **Medium and visual world** for image, **Sonic identity** for audio. The Identity-block is rewritten fresh in each per-movement prompt: where the realization spec declares an atom as locked, the value is constant across movements; where an atom is declared modulatable, the per-movement value (with any modulation folded in) appears verbatim. No `[unchanged]` notation, ever. The Identity-block is sourced from the realization spec's atomic configuration + the spline's per-movement modulation directives (if any).

2. **Scene** — the general physical/sensible/sonic situation of the movement, in prose. Who, where, doing what, with what felt quality. Math primitives translated to scene material (the path → the floor; the boundary → the far wall feature). Felt weight woven in as physical language, not as a labeled field. The modality's specific craft direction for this movement folded in as prose (what the voice describes, what the image foregrounds, what the audio establishes). Sourced from the spline's per-movement signals (Identity, Math vocabulary, Visual / Audio / Voice — modality-specific). Beats do not enter Scene at this pass; beats are Pass 7. Scene uses generic placeholders ("the figure", "the boundary", "the path") — specific work content enters at Pass 6.

3. **Length** — explicit length constraint. Narrative uses prose-length cue ("one short paragraph", "3–5 sentences"). Image uses dimension or aspect cue. Audio uses duration cue. Length shapes generator behavior and must be present.

4. **Avoid** — negative constraints in generator-facing prose, not labeled categories. Two kinds, listed together as concrete prose: Identity-preserving (what would break the chosen voice / medium / sonic identity) and form-preserving (what would break the chosen felt quality or structural action).

**Translation discipline at the block boundary.** No framework vocabulary appears in the prompt as visible labels. Math primitives, Felt weight, Math density, Structural action, Trajectory, Shape — these do not appear as field labels. The concepts they name still drive the prompt (they determine what Scene says), but they appear *translated to scene language*. "Math density: minimal" becomes "sparse physical detail — the floor, the body's motion, the boundary at the far side; nothing more." "Math primitives at home: line segment, threshold" becomes "the floor underfoot; the boundary at the far side."

The Identity-block answers: who is speaking, what kind of image, what kind of audio — *for this movement*. The Scene answers: what kind of moment is this movement. Length answers: how much. Avoid answers: what would break either commitment.

Work-specific identities (the specific Figure, the specific Window, the specific room) and trajectory (specific beats, specific foregrounded moments, specific sonic arc) are not in Pass 5 prompts. They enter at Pass 6 (substitution) and Pass 7 (outline) downstream.

**Visual companion:** `framework/diagrams/layer_architecture_map.html` — shows each layer's Identity / Trajectory split with examples. Useful for finding where any specific property lives in the framework.

---

## Canonical Templates

The templates below are the framework's standard form. Each Pass 5 prompt has four blocks: an **Identity-block** (named per modality), a **Scene** block, a **Length** block, and an **Avoid** block.

The prompt must read as generator-facing English instruction throughout. Framework vocabulary (Felt weight, Math density, Math primitives, Structural action, Trajectory, Shape) does not appear as labeled fields. Instead, framework concepts are *translated* to scene language: a movement's Felt weight becomes the physical/sensible quality of the scene; math primitives become concrete sensory anchors in the scene; the modality's craft direction is woven into the Scene block as prose.

**Per-movement Identity rewriting:** The Identity-block is rewritten fresh in each per-movement prompt. Where the realization spec declares an atom as locked (constant across movements), the Identity-block reflects the locked value verbatim. Where an atom is declared modulatable per-movement, the Identity-block reflects the per-movement value with any modulation folded in. No `[unchanged]` notation, ever — each prompt is self-contained.

**Pass 5 produces form only.** Work-specific identity (the specific Figure, the specific Window) is committed at Pass 6 (substitution). Trajectory (beats, foregrounded moments, sonic arc) is applied at Pass 7 (outline). Pass 5 Scene uses generic placeholders ("the figure", "the boundary glimpsed at the far side", "the floor underfoot") — concrete enough to read as scene material, but not committed to specific work content.

### Narrative prompt template (Pass 5)

```
**Narrative prompt — Movement N:**

Voice:
[Full per-movement voice characterization, written as generator-facing instruction. Reads
as direction to a writer, not a labeled data structure. Names tense, person, perspective,
what the speaker reports and how, relation to addressee, configuration, and affect — all
folded in as prose. Per-movement modulations applied verbatim where declared.

Example: "Write in first person, present tense. Single voice throughout. The speaker
reports what they actually see and feel — no metaphor reach, no symbolic framing, no
past-tense reflection. Self-possessed; composed, voice carries no emotional rise. The
reader is addressed as if the speaker is writing in a journal or speaking to someone close."]

Scene:
[The general physical situation of the movement, in prose. Who, where, doing what, with
what felt quality. Math primitives translated to scene material (the path becomes "the
floor between speaker and the far side of the room"; the boundary becomes "the far wall
where a sash window is visible"). Felt weight woven in as physical language (gathered
and forward becomes "the body collected, moving with purpose, unhurried"). The voice's
specific craft for this movement folded in as direction ("describe the crossing as it
unfolds; end with the cadence slowing as the boundary nears"). Density expressed in
language, not labeled ("sparse physical detail — the floor, the body's motion, the
boundary at the far side" rather than "Math density: minimal").

Generic placeholders only at this pass — "the figure", "the boundary", "the path" —
specific work commitments enter at Pass 6.]

Length: [explicit prose length, e.g. "one short paragraph" or "3–5 sentences"]

Avoid:
[Negative constraints in generator-facing prose, not labeled categories. Combines
Identity-preserving constraints (what would break the voice — "no archaic vocabulary",
"no metaphor reach", "no past-tense reflection") with form-preserving constraints (what
would break the felt quality — "no climactic language about the crossing", "no pausing
mid-crossing — keep moving until the boundary"). Listed as concrete prose, not as
labeled fields.]
```

### Image prompt template (Pass 5)

```
**Image prompt — Movement N:**

Medium and visual world:
[Full per-movement medium and visual world characterization, written as generator-facing
instruction. Names substrate, mark-making, surface behavior, edge quality, color behavior
(medium); plus palette, light, line, figure-rendering, atmosphere (visual world). Folded
in as prose, not labeled. Per-movement modulations applied verbatim where declared.

Example: "Watercolor on paper. Soft variable edges from absorbent surface bleed.
Translucent layered color. Brush mark-making, expressive loose line. Warm earth muted
palette — ochres, soft umbers, a quiet light blue. Ambient illustrative light from one
direction. Stylized narrative figure — not realistic, not cartoon, somewhere between.
Gentle storybook atmosphere."]

Scene:
[The general spatial moment of the movement, in prose. Who, where, doing what, with what
visible details. Math primitives translated to visible scene elements. Felt weight rendered
as physical posture, light quality, and visual rhythm. Composition direction folded in as
prose ("the figure is past the midpoint of the room, body weight forward; the boundary
visible at the far wall; the eye lands first on the figure"). The image's foregrounded
moment expressed as direction ("render the moment of mid-crossing — one foot mid-step;
not the moment of arrival") without labeling it as such.

Generic placeholders only at this pass.]

Length: [aspect or dimensional cue: "portrait orientation", "wide aspect", "1024×1024"]

Avoid:
[Negative constraints as prose. Identity-preserving ("no photorealism, no high contrast,
no architectural precision, no decorative elements competing with the figure"). Form-
preserving ("no motion lines, no dynamic action indicators, no climactic poses"). Listed
as concrete prose.]
```

### Audio prompt template (Pass 5)

```
**Audio prompt — Movement N:**

Sonic identity:
[Full per-movement audio aesthetic characterization, written as generator-facing
instruction. Names tonality, texture, timbre, rhythm-base, pacing-base, spatialization,
phrasing. Folded in as prose. Per-movement modulations applied verbatim where declared.

Example: "Drone-based. Unfixed tonality — no key center. Low sustained drone at the
edge of audibility. Monophonic and sparse — never more than one or two sound sources
at once. Acoustic, breath-based timbre throughout — nothing synthetic. Unmetered rhythm,
breath-driven. Stereo intimate spatialization — close, as if heard from inside the
room. Open phrasing — no melodic figures, no repetition patterns."]

Scene:
[The general sonic moment of the movement, in prose. What sounds, when, how. Audio
primitives translated to specific sonic events ("the path" becomes "sparse footfall of
bare feet on bare wood, heel-to-toe, irregular, never on a beat"; "the boundary" stays
visible-only or becomes a faint anticipated sound at the close). Felt weight rendered
as sonic quality (gathered-and-forward becomes "sparse footfall under a held drone — no
buildup, no resolution; the substrate is morning-quiet"). The audio's specific job and
sonic arc folded in as direction ("opening: room tone establishes, drone enters at edge
of audibility, first footfall; middle: steady sparse footfall; closing: footfall slowing
as the boundary nears").

Generic placeholders only at this pass.]

Length: [duration cue: "approximately 30 seconds", "45–60 seconds"]

Avoid:
[Negative constraints as prose. Identity-preserving ("no beat, no melody, no harmony,
no synthesizer textures, no chord progression"). Form-preserving ("no event-density
beyond what's specified, no buildup or release dynamics — the dynamic stays quiet
throughout"). Listed as concrete prose.]
```

### Worked example: Calibration M1 narrative prompt (Pass 5, before substitution)

This is what a Pass 5 narrative prompt for Calibration's Realization A, Movement 1, looks like before Pass 6 substitution applies the specific Figure / Window / room:

```
**Narrative prompt — Movement 1:**

Voice:
Write in first person, present tense. Single voice throughout. The speaker reports what
they actually see and feel — no metaphor reach, no symbolic framing, no past-tense
reflection. Self-possessed; composed, voice carries no emotional rise. The reader is
addressed as if the speaker is writing in a journal or speaking to someone close.

Scene:
The speaker is mid-room in a modest interior, walking unhurried toward the far side
where a boundary is visible. The body is collected and forward; movement is purposeful
but not in a hurry. The boundary at the far side is visible to the speaker — a feature
of the far wall, glimpsed but not yet reached. The floor underfoot is sensible; the
boundary at the far side is the goal. Describe the crossing as it unfolds in present
tense, present-progressive verbs; end with the cadence slowing as the boundary nears.
Sparse physical detail — the floor, the body's motion, the boundary at the far side;
nothing more.

Length: one short paragraph, 4–6 sentences.

Avoid: no metaphor reach. No archaic vocabulary. No past-tense reflection. No symbolic
framing of the boundary (not "portal", not "threshold to the world" — it's just a
boundary at the far side). No climactic language about the crossing. Do not pause mid-
crossing; the speaker keeps moving until arrival is the next movement's job.
```

The block names read as English (`Voice:` not `Voice Identity (constant across this realization):`). The Scene block carries scene language with the movement's felt quality and the voice's craft folded into prose. Math primitives appear as scene content ("the floor underfoot", "the boundary at the far side") not as labeled framework vocabulary. The Avoid block reads as prose, not as labeled categories. Pass 6 will substitute "the boundary" → "the wood-framed sash window with brass latch and verdigris" and "the modest interior" → "the speaker's actual room" once the work-specific identities are committed.

---

## Block Sourcing

Where each block's content comes from. This makes prompt construction auditable: every block has a known source, and the reviewer can verify the prompt before it proceeds to Pass 6.

### Narrative prompt sourcing (Pass 5)

| Block | Source |
|---|---|
| Voice | Realization spec's voice translation, with any per-movement modulations applied from the spline. Rewritten fresh per movement. |
| Scene | Spline's per-movement Identity (Felt weight, Shape) + Math vocabulary (primitives, density) + Voice signal (voice's job) — all translated to scene language. Generic placeholders, no work-specific content. |
| Length | Realization spec or workflow convention (default: "one short paragraph, 4–6 sentences") |
| Avoid | Voice Reference's per-option anti-drift specs + Transition Reference's anti-drift at adjacent joins (for the first and last movements' edges) + form-preserving constraints derived from Scene's felt quality |

### Image prompt sourcing (Pass 5)

| Block | Source |
|---|---|
| Medium and visual world | Realization spec's medium preset + visual world preset, with any per-movement modulations applied. Rewritten fresh per movement. |
| Scene | Spline's per-movement Identity (Felt weight, Shape) + Math vocabulary (visual primitives, density) + Visual signal (visual's job, composition) — all translated to scene language. Generic placeholders. |
| Length | Realization spec or workflow convention (aspect or dimensions) |
| Avoid | Medium Reference + Visual World Reference (per-option anti-drift specs) + form-preserving constraints |

### Audio prompt sourcing (Pass 5)

| Block | Source |
|---|---|
| Sonic identity | Realization spec's audio preset, expanded across seven sub-functions, with any per-movement modulations applied. Rewritten fresh per movement. |
| Scene | Spline's per-movement Identity (Felt weight, Shape) + Math vocabulary (audio primitives, density) + Audio signal (audio's job, sonic arc shape at movement scale) — all translated to scene language. Generic placeholders. |
| Length | Realization spec or workflow convention (duration) |
| Avoid | Audio Aesthetic Reference (per-option anti-drift specs) + form-preserving constraints |

---

## What enters at Pass 6 (substitution) and Pass 7 (outline)

The Pass 5 prompts above are *form only*. Two further passes downstream add work-specific content before any prompt is complete:

**Pass 6 (substitution)** applies to all three prompts in one response across all movements. Substitution takes the generic placeholders in Scene ("the figure", "the boundary", "the path", "the space") and commits them to specific work content drawn from the work's content layer references (Character, Object, Motif). After Pass 6:
- "the figure" → "an adult ungendered person, bare feet on the wood floor, unhurried"
- "the boundary" → "a single sash window, wood frame, swollen sill, brass-hooked latch with verdigris, morning on the glass"
- "the path" → "the bare wood floor between speaker and far wall"

Identity consistency across modalities is auditable at this pass (the same Figure appears in image, audio, and narrative; the same Window's brass latch with verdigris appears in all three).

**Pass 7 (outline)** applies to all three prompts in one response across all movements. Outline takes the substituted prompts and applies Trajectory: beats for narrative, foregrounded moments for image, sonic arc for audio. Continuity grade material is woven in at joins. Math primitives are rendered concretely onto the substituted identities.

After Pass 7, the three prompts are complete and rich. The narrative prompt proceeds to Pass 8 voice fill (the framework's only in-flow generator). The image and audio prompts are ready to serve the script directly as descriptive content (Pass 9), and may optionally be sent to external generators for rendered artifacts.

---

## Identity / Form verification at prompt construction (Pass 5)

Before proceeding from Pass 5 to Pass 6:

**Identity-block verification:**
- Does the Identity-block read as generator-facing English instruction, not as labeled data?
- Does the Identity-block contain the realization's actual layer Identity for this movement (not a paraphrase, not a summary)?
- If the realization spec declares per-movement modulations of any atoms, are those modulations folded into this movement's Identity-block?
- If the realization spec declares all atoms as locked, is the Identity-block content consistent across all movements of the realization?
- Is the Identity-block written fresh (no `[unchanged]` shorthand, no reference to other prompts)?

**Scene verification:**
- Does the Scene block reflect the spline's per-movement signals (Felt weight, math primitives, modality's job)?
- Is felt-quality language woven into the Scene as physical/sensible/sonic prose, not as a labeled field?
- Are math primitives translated to scene material (the path → the floor; the boundary → the far wall feature), not present as labeled framework vocabulary?
- Are placeholders generic ("the figure", "the boundary") — no work-specific commitments yet?
- Are beats absent from the Scene block? (Beats are Pass 7.)

**Length verification:**
- Is the length explicit (not "appropriate length")?

**Avoid verification:**
- Are Identity-preserving constraints present (what would break the voice / medium / sonic identity)?
- Are form-preserving constraints present (what would break the felt quality)?
- Are the constraints written as generator-facing prose, not as labeled categories?

**Translation discipline check (most important):**
- Does any framework vocabulary appear as a visible label in the prompt? (Math primitives, Math density, Felt weight, Structural action, Trajectory, Shape — these should not appear as field labels.)
- If yes: the prompt is not Pass 5-ready. Rewrite Scene with the concepts folded in as prose.

A Pass 5 prompt that passes verification is ready for Pass 6 substitution. A Pass 5 prompt that has work-specific identities prematurely committed should be cleaned before substitution begins; otherwise Pass 6's audit will be obscured.

---

## Block Order per Modality (quick reference)

The structured templates above are the canonical Pass 5 form. The bare block-order list below is a quick reference for what each Pass 5 prompt type contains; the templates show how to format each block.

**Narrative prompt (Pass 5):** Voice → Scene → Length → Avoid
**Image prompt (Pass 5):** Medium and visual world → Scene → Length → Avoid
**Audio prompt (Pass 5):** Sonic identity → Scene → Length → Avoid

The Identity-block name differs per modality but the structural role is uniform: it carries the layer's identity at this movement (including any per-movement modulations). The Scene block carries the per-movement physical/sensible/sonic situation with all framework vocabulary translated to scene language.

---

## Per-Movement vs Continuity Material

Content layers (character, object, motif references) carry two distinct kinds of material. They route to different passes:

**Per-movement scene material → Pass 5 prompts.** What the Figure is doing this movement, what state the Window is in, which motif phase is foregrounded. Generator-accessible sensory specification. No work-specific naming, no continuity references, no carry-forward language. Cold-start.

**Continuity material → Pass 6 (substitution) for all three modalities.** The Figure's consistent attributes across movements, the Window's brass latch and tarnish, the motif's recurring pattern. Work-specific identity. Substituted once at Pass 6, applied across image, audio, and narrative in single responses for identity consistency across modalities.

Image/audio continuity is framework-external: reference image passing, shared style tokens, shared tonality specs, human-in-the-loop polish, or whatever the production stage supports. The framework specifies what continuity *should* hold; the production stage enforces it through modality-specific mechanisms.

---

## Voice Translation

The Voice spec (Register × Stance × Positioning × Configuration × Affect) is framework-internal vocabulary. Generators cannot read it directly. The narrative prompt must contain a generator-facing translation of the voice spec.

**Translate the spec into generator-facing instruction.** The Voice block in each narrative prompt must read as direction to a writer, not as labeled framework vocabulary.

**Translation contents:**
- Tense, person, perspective (first-person, present-tense, etc.)
- What the speaker reports and how (registers translated to behavior: "the speaker reports what's actually seen without metaphor reach" rather than "Realist stance")
- Speaker's relation to the addressee (positioning translated to address behavior)
- Number and arrangement of voices (configuration translated to behavior)
- Felt state of the speaker (affect translated to vocal behavior, not named)

**Voice block is rewritten fresh per movement.** Where the realization spec declares all voice atoms as locked (no per-movement modulation), the Voice block content will be consistent across movements — but each per-movement prompt still populates the Voice block in full. No `[unchanged]`, no "as above", no reference to other prompts. The generator receives only this prompt; the text must be present.

**Per-movement modulation** is folded into the Voice block. When the realization spec declares an atom as modulatable and the spline issues a per-movement modulation directive (e.g., Affect modulating from Composed at M1 to Tender at M3), the Voice block for that movement reflects the modulated value verbatim. The translation discipline still applies: the modulated value appears as behavioral instruction, not as labeled framework vocabulary.

**Cold-start cost.** If the voice translation is long, that's the cost of cold-start. The text repeats in each per-movement prompt regardless. Cold-start cannot rely on reference.

---

## Cross-Movement Continuity Handling

When assembling a triplet, consult the **Transition Reference** for the join into and out of this movement. The Transition Reference (per-work, pruned to non-derivable authoring) specifies:

- Bridging elements (specific sensory anchors that must hold consistent across the join)
- Continuity polish requirements (what must be true of the rendering across the join)
- Anti-drift constraints (specific prohibitions on what must not happen at the join)

The per-modality continuity content (what carries vs. what shifts at each layer across the join) is *not* authored in Transition Reference — it is re-derivable from comparing the adjacent movements' per-modality signals in the spline. The workflow performs that derivation at Pass 6 (substitution) and Pass 7 (outline) when continuity-aware rendering is required.

The **continuity grade** for the join is authored in the spline's beat-authoring section: each movement's last beat declares its outbound continuity to the next movement. Beat-internal continuity grades and movement-boundary continuity grades are the same kind of object (a knot with an authored grade); movement-boundaries are grouping conventions over the beat sequence.

This information routes to:
- **Pass 6 (substitution)** for cross-modal identity continuity — the substitution pass weaves consistent work-specific identities (the Figure, the Window, the latch, etc.) into all three prompts in one response
- **Pass 7 (outline)** for trajectory continuity — beat sequences with continuity grades at beat-joins, sensory cues at structural transitions, voice direction per beat
- **Framework-external production** for image/audio continuity — production stages handle their own modality-specific continuity mechanisms

Transition information does *not* appear in Pass 5 prompts. Prompts cold-start; transition material is continuity material, routed downstream.

---

## Connection Notes Template

```
Shared anchors across the triplet:
  — [math primitive] = [visual rendering] = [sonic rendering] = [narrative description]
  — [scene element] across all three outputs

What can vary across realizations:
  — [pulled from spline's Identity flexibility + spec freedom across sub-functions]

Spline-invariant:
  — [pulled from spline's Identity invariants]
```

---

## How Prompt Construction Connects to the Spline

The spline supplies the structural answers; the reference docs supply the modal options; prompt construction is the assembly layer.

- **Identity signal** → Connection Notes (invariants → spline-invariant; flexibility → what can vary)
- **Math vocabulary signal** → Math Visual + Math Audio render primitives at named density; primitives appear in all three prompts
- **Visual signal** → image prompt scene; Medium and Visual World read this plus Math Visual output
- **Audio signal** → audio prompt structure; Audio Aesthetic reads this plus Math Audio output
- **Voice signal** → narrative prompt voice spec; voice reads math and surface outputs
- **Transition notes** → Pass 6 (substitution) and Pass 7 (outline) for cross-modal continuity in all three prompts

A triplet is a movement made executable.

## Downstream: the Script

Once the triplet is assembled (image prompt, audio prompt, narrative output), the **Script Reference** integrates these outputs along with the spline's transition timing into a single performable document. The script applies realization-keyed staging conventions to produce the work in its most concrete form — what a performer, director, or production runs from.

The triplet is the composition specification. The script is what makes it operable.
