# Glossary

Terms used across the Compositional Algebra framework. Organized alphabetically with brief definitions and cross-references to relevant references.

---

## Compositional Algebra Glossary

**Formal types in the framework:**

- **Layer** — A functor from spline-state (and any required upstream layer outputs) to layer-output. Eleven layers across content, surface, and voice/script/presentation: Math Visual, Math Audio, Character, Object, Motif (content); Audio Aesthetic, Medium, Visual World (surface); Voice, Script, Presentation.
- **Sub-function** — A product-type field within a layer's product type. Each sub-function has options forming a sum type.
- **Option** — A sum-type constructor for a sub-function (a single concrete choice).
- **Layer preset (Tier 2)** — A named inhabitant of a layer's product type — a specific tuple of option choices across the layer's sub-functions.
- **Realization spec (Tier 3)** — A dependent product across all six layer types — one inhabitant per layer, possibly with refinement-type constraints from locks.
- **Locked parameter** — A refinement-type constraint declaring a specific sub-function choice constitutive of a preset's identity. Overrides remain possible but explicitly leave the refinement.
- **Spline score** — A typed source term; piecewise function over movement-knots with typed signals emitted per movement.
- **Continuity grade** — A propositional equality required at a transition join between movements; derived from Shape sub-field of Identity (departure tangent of movement N vs approach tangent of movement N+1).
- **Eight-pass workflow** — A fixed normalization order for the functorial composition that produces a realization from a spline score.

---

## A

**Absorbent (surface behavior)** — Substrate property where marks soak into the material; produces bleed, bloom, granulation. See *Medium Reference*.

**Academic (positioning)** — Voice positioning assuming specialist background. Licenses full technical lexicon. See *Voice Reference*.

**Affect (voice sub-function)** — The speaker's felt state at the moment of speaking, independent of register, stance, positioning, and configuration. Carries the emotional coloration through which the other four sub-functions operate. Eleven options: Composed (default), Curious, Tender, Grieving, Yearning, Stricken, Afraid, Disoriented, Numb, Angry, Exalted. See *Voice Reference*.

**Affordances** — What a layer or sub-function naturally delivers or resists. Each option in each layer specifies affordances delivered and affordances resisted. See all surface and voice references.

**Ambient (light)** — Light source: diffuse, no defined point, soft omnidirectional. See *Visual World Reference*.

**Ambient (spatialization)** — Sound placed in modeled acoustic space; subtle, room-defined movement. See *Audio Aesthetic Reference*.

**Ambisonic** — Full-sphere immersive spatial audio format. See *Audio Aesthetic Reference*.

**Anchor elements (motif sub-function)** — The parts of a motif's pattern that must be present for it to register as that motif. See *Motif Reference*.

**Anti-drift** — Specifications that prevent generation engines (image, audio, text) from drifting away from intended spec. Front-loaded vocabulary, period markers, convention preservation. Documented per option across all layers. See *Prompt Construction Reference*.

**Arc (character sub-function)** — What a character carries through the work; what changes; what is preserved across movements. See *Character Reference*.

**Arhythmic** — Rhythm option: events sparse and unscheduled, no implied pulse. See *Audio Aesthetic Reference*.

**Artist (register)** — Voice register: sensory, particular, image-led; foregrounds the made thing. See *Voice Reference*.

**Artistic peers (positioning)** — Voice positioning assuming shared aesthetic vocabulary; licenses allusion and ellipsis. See *Voice Reference*.

**Asymmetrical (phrasing)** — Audio phrasing: uneven phrase lengths, unpredictable shape. See *Audio Aesthetic Reference*.

**Atmosphere (visual world sub-function)** — The mood register, temporal feel, emotional weight of a visual world. Eight implementations. See *Visual World Reference*.

**Audio Aesthetic** — Surface layer rendering sonic content. Composed of seven sub-functions: tonality, texture, timbre, rhythm, pacing, spatialization, phrasing. See *Audio Aesthetic Reference*.

**Audio signal** — Spline output specifying audio requirements per movement (tonality character, texture, rhythm, dynamic, spatial, opening/closing sound). Consumed by Audio Aesthetic. See *Spline Reference*.

**AV script (script preset)** — Script preset for Chrome-Glitch Audiovisual realization: named headers, bracketed action, parallel cue columns for AUDIO/VISUAL/VOICE, duration-marked silences, parallel modality coordination. See *Script Reference*.

**Axes (cross-axis interactions)** — In Voice Reference, the formal axes of register, stance, and positioning, and how they interact (productively, frictionally, or breaking). See *Voice Reference*.

## B

**Basis** — Math primitive: a set of linearly independent vectors that span a vector space; the minimal frame from which any vector can be expressed. See *Math Visual Reference*, *Math Audio Reference*.

**Beat / interference** — Math audio primitive (sonic-specific): two close-but-distinct frequencies create periodic amplitude variation at the difference frequency. See *Math Audio Reference*.

**Bodily (vocabulary domain)** — Vocabulary domain of mythic voice register; foregrounds position, gesture, threshold. See *Voice Reference*.

**Body, the** — Spline invariant present in every movement. Reaches at I, watches at II, holds many at III, contained at IV, radiates at V, settles at VI, walks on at VII. See *Spline Reference*.

**Bowed (timbre)** — Audio timbre: bowed strings, glass harmonica; sustained acoustic with controllable attack. See *Audio Aesthetic Reference*.

**Bracketed action (stage direction style)** — Script sub-function option: stage directions in square brackets, inline or blocked; typical for technical and AV scripts. See *Script Reference*.

**Brush (mark-making)** — Medium mark-making: brush carrying pigment or ink; broad to fine; variable load and water content. See *Medium Reference*.

## C

**Call and response (configuration)** — Voice configuration: structured antiphonal exchange. One voice leads, another answers. Strong at VI. See *Voice Reference*.

**Call-and-Response (sonic motif)** — Canonical sonic motif: one voice calls, another responds; response is briefer. Foregrounded at VI; released into silence at VII. See *Motif Reference*.

**Canvas (substrate)** — Medium substrate: woven, structural, accepting layered paint. See *Medium Reference*.

**Caretaker (register)** — Voice register: relational, attentive, gentle; foregrounds the other. See *Voice Reference*.

**Carried meaning (motif/object sub-function)** — What a motif or object embodies beyond its material/pattern form. See *Motif Reference*, *Object Reference*.

**Cathedral (canonical object)** — The architectural structure that closes around the figure at IV, opens at V, and remains standing at VII. Preserved, not destroyed. See *Object Reference*.

**Charter** — Project-level posture document: refusal. Lists the gates the work has decided about itself — what it commits not to be (no shipping, no product, no users-as-target, no invented operator state, etc.) and the affirmations beneath those refusals. Companion to *Critique* (gap between promise and delivery) and *Lineage* (intellectual ancestry). See *CHARTER.md* at project root.

**Compositional Algebra** — The framework for constructing structured works through spline scores and modular interpretive layers. Names the algebra of composition: spline scores are inputs, layer references provide vocabularies, realizations are full compositional treatments, and the tier system (parameters × layer presets × realization specs) is the structured space over which composition happens. Two primary activities within Compositional Algebra: spline scoring (authoring a spline score) and realization construction (constructing a realization of an existing spline score). See *Compositional Algebra* (framework entry-point doc).

**Cauchy sequence** — Math primitive: sequence whose terms become arbitrarily close to each other; in a complete space, converges to a limit. Strong at VI. See *Math Visual Reference*, *Math Audio Reference*.

**Celebrant (canonical character)** — The work's continuous narrative voice; realization-keyed register. Speaks across all movements; configuration shifts (solo at edges, with chorus at gathering, layered at exceeding). See *Character Reference*.

**Cellular (phrasing)** — Audio phrasing: short cells (motifs) with repetition and variation. See *Audio Aesthetic Reference*.

**Character (configuration)** — Voice configuration: the voice belongs to a figure inside the work, not the narrator. Audience overhears. Often nested inside a narrator's solo. See *Voice Reference*.

**Character Reference** — Content-layer reference. Reads spline's character signal per movement; specifies agents with continuity across the work. Sibling of Object Reference and Motif Reference. See *Character Reference*.

**Character signal** — Spline output specifying which characters appear in each movement, in what role, with what state. Consumed by Character Reference. See *Spline Reference*.

**Child (positioning)** — Voice positioning: assumes everyday literacy and presence; licenses story form, direct address, repetition. See *Voice Reference*.

**Child (register)** — Voice register: small, concrete, immediate; foregrounds wonder and direct question. See *Voice Reference*.

**Chorus (canonical character)** — The work's gathered plural voice. Appears as parallel naming (III), layered voices (V), and call-and-response (VI). Refuses hierarchy. See *Character Reference*.

**Chorus (configuration)** — Voice configuration: multiple voices speaking together as one or in close succession as a composite. Strong at III, VI. See *Voice Reference*.

**Chrome-glitch (visual world preset)** — Visual world preset: chromatic excess prismatic palette × specular prismatic light × smooth rendered line × liquid metal chrome body × synesthetic futurist atmosphere. See *Visual World Reference*.

**Classical contour (line)** — Visual world line: consistent, deliberate weight; careful and considered. See *Visual World Reference*.

**Classical idealized (figure)** — Visual world figure: human, idealized proportions, hieratic posture. See *Visual World Reference*.

**Collage assembly (mark-making)** — Medium mark-making: cutting, tearing, pasting, scanning; edge as cut. See *Medium Reference*.

**Color and ground (presentation sub-function)** — How text sits visually: ground color, text color, accent color, ornament. See *Presentation Reference*.

**Color behavior (medium sub-function)** — How color works in a medium: palette range, saturation behavior, light interaction. Five implementations. See *Medium Reference*.

**Compositional behavior (presentation sub-function)** — How the document is composed as a whole: movement weighting, transition rendering, through-line visibility, frame honoring, apparatus visibility. See *Presentation Reference*.

**Configuration (voice sub-function)** — How voices relate within a movement: solo, character, dialogue, call-and-response, chorus, layered. See *Voice Reference*.

**Configuration space** — Math primitive: the space of all possible configurations of a system; for n independent parameters, n-dimensional. Strong at V. See *Math Visual Reference*, *Math Audio Reference*.

**Congregational (positioning)** — Voice positioning assuming gathered audience seeking shared meaning; licenses ritual structure and held silence. See *Voice Reference*.

**Connection Notes** — In a triplet, the section specifying shared anchors across the triplet, what can vary, and what's spline-invariant. See *Prompt Construction Reference*.

**Consonance (inner product)** — Math audio primitive: harmonic relationship between two sounds, quantifiable by integer ratios. See *Math Audio Reference*. Parallel to Inner product in *Math Visual Reference*.

**Continuity grade** — Specification of how smooth a transition is between movements. C⁰, C¹, C². See *Spline Reference*.

**Critique** — Project-level posture document: self-criticism. Working record of gaps between what the framework promises and what it delivers. Each entry: claim, delivery, gap, what would close it, status. Distinct from *Survey* (description), *Open Questions* (uncertainty), *Frictions* (operational resistance). Companion to *Charter* and *Lineage*. See *CRITIQUE.md* at project root.

**Cross-axis interactions** — How voice sub-functions interact: productive combinations, productive frictions, combinations that break. See *Voice Reference*.

**Cue blocks (sensory mark integration)** — Script sub-function option: sensory marks gathered into blocks at scene transitions; works for clean staging boundaries. See *Script Reference*.

**Cue column (sensory mark integration)** — Script sub-function option: sensory marks in parallel column to voice text; works for full production scripts. See *Script Reference*.

**Cued ensemble (modality coordination)** — Script sub-function option: sensory cues called by a central conductor reading the master script; works for live ensemble performance. See *Script Reference*.

**Cyber baroque (visual world preset)** — Visual world preset: royal ornate palette × theatrical chiaroscuro × ornate baroque line × sacred with mechanical figure × ornate decay atmosphere. See *Visual World Reference*.

**Cynic (stance)** — Voice stance: distrustful of institutional claims; uses evidence to expose. Strong at IV. See *Voice Reference*.

**C² continuity** — Continuity grade: curvature match (second derivative continuous). The previous state continues into the new while the new is becoming the present. See *Spline Reference*.

**C¹ continuity** — Continuity grade: direction match (first derivative continuous). Pacing holds across the join while content shifts. See *Spline Reference*.

**C⁰ continuity** — Continuity grade: position match only. Movement-to-movement join felt as a sharp break. See *Spline Reference*.

## D

**Density (math primitive)** — Spline signal specifying how many primitives appear and how foreground they are: minimal, low, medium, high. See *Math Visual Reference*, *Math Audio Reference*.

**Development discipline** — Operator-agnostic discipline under which the framework is developed: honesty (earned vs gestural), root-cause patches, define-before-reference, vocabulary maintenance, translation at boundaries, audit-after-change, versioning/tracking, two-level verification, anti-sycophancy. Each section grounded in a dev-log incident. Companion to the formalization roadmap (which earns formal claims of the framework's content). See *Development Discipline*.

**Dialogue (configuration)** — Voice configuration: two or more voices in reciprocal exchange. Strong at II. See *Voice Reference*.

**Digital shader (mark-making)** — Medium mark-making: material assigned to geometry; surfaces defined parametrically. See *Medium Reference*.

**Dimension** — Math primitive: cardinality of a basis; the number of independent directions. Strong at IV, V. See *Math Visual Reference*, *Math Audio Reference*.

**Dip pen (mark-making)** — Medium mark-making: dipped pen with variable line weight from pressure. See *Medium Reference*.

**Direct seeing** — Mode of attention foregrounded by child register; concrete, immediate, without hedging. See *Voice Reference*.

**Discontinuous (surface behavior)** — Medium surface: varied within single image, materials competing or cohabiting. See *Medium Reference*.

**Dislocated isolated (figure)** — Visual world figure: rendered realistically but presented without context; vast empty ground. See *Visual World Reference*.

**Distributed (spatialization)** — Audio spatial: sources placed at multiple defined points around listener. See *Audio Aesthetic Reference*.

**Drone + figure (texture)** — Audio texture: sustained ground plus foreground voice. See *Audio Aesthetic Reference*.

**Drone-based (tonality)** — Audio tonality: open, no defined tonal center; microtonal or just-intonation continuum. See *Audio Aesthetic Reference*.

**Duration-marked silence (timing notation)** — Script sub-function option: silences with explicit time count; works for precise productions and recorded works. See *Script Reference*.

## E

**Earth and gold (palette)** — Visual world palette: ochre, umber, sienna, ultramarine, gold leaf. See *Visual World Reference*.

**Edge quality (medium sub-function)** — How edges work: hard inked, soft bleed, sfumato, clean rendered, mixed-within-image. See *Medium Reference*.

**Engineer (register)** — Voice register: functional, practical, constraint-aware; foregrounds what works and trade-offs. See *Voice Reference*.

**Equal temperament** — Audio tonality: twelve equal divisions of the octave; logarithmic spacing; functional harmony. The cage's tonality. See *Audio Aesthetic Reference*.

**Everyman (register)** — Voice register: common, shared, conversational; foregrounds plain seeing. See *Voice Reference*.

**Expansion (pacing)** — Audio pacing: event density decreasing or spreading; widening arc. Strong at V, VII. See *Audio Aesthetic Reference*.

---

## F

**Felt weight** — Spline Identity signal element: the emotional and bodily quality of a movement (open, weighted, abundant, etc.). See *Spline Reference*.

**Field, the** — The unmeasured space prior to coordinate imposition. Opens at I; overlaid at II; pluralized at III; compressed at IV; released at V; held at VI; met directly at VII. See *Spline Reference*.

**Figure (visual world sub-function)** — How the body or main subject is rendered: classical idealized, stylized narrative, absent/schematic, dislocated isolated, liquid metal/chrome, sacred with mechanical, body as field, collective/crowd. See *Visual World Reference*.

**Five Voices, The (canonical character)** — V's layered configuration: celebrant + mythic-scientist + mythic-mathematician + mythic-artist + mythic-child. Enters in succession; falls away one by one at V → VI transition. See *Character Reference*.

**Flat / absent (light)** — Visual world light: no defined source; structure carries the image. See *Visual World Reference*.

**Flexibility** — Spline Identity signal element: what varies by realization within a movement. See *Spline Reference*.

**Forbidden affordances** — In a layer's spline signal, what would break the movement if delivered. See *Spline Reference*.

**Foreground / background** — In math primitives, how prominently a primitive appears in a movement. See *Math Visual Reference*, *Math Audio Reference*.

**Form (object sub-function)** — Object's physical structure, components, geometry. See *Object Reference*.

**Format wrapping (presentation sub-function)** — The technical container the presentation lives in: HTML, PDF, print artifact; screen behavior; print behavior; interactivity. See *Presentation Reference*.

**Fourier (decomposition)** — Math primitive: representation of a function or signal as a sum of sinusoidal basis functions. Strong at V. See *Math Visual Reference*, *Math Audio Reference*.

**Fractal dimension** — Math primitive: non-integer dimension generalizing integer-valued notion; recursive self-similarity. Strong at V. See *Math Visual Reference*, *Math Audio Reference*.

**Function signature** — Pattern this framework uses for layer specifications: declared inputs, definition fields, response fields, output. See all references.

**Function space** — Math visual primitive: a vector space whose elements are functions. No clear sonic analog. Strong at V. See *Math Visual Reference*.

## G

**General public (positioning)** — Voice positioning assuming literacy, curiosity, no domain specialty; allows technical terms when defined. See *Voice Reference*.

**Generator (framework-integrated vs external)** — The triplet's three outputs (image, audio, narrative) all undergo substitution (Pass 6) and outline (Pass 7) inside the framework. The narrative generator runs *inside* the framework's flow at Pass 8 (voice fill). Image and audio generators are *external and optional* — their substituted-and-outlined prompts at end of Pass 7 serve the script directly as descriptive content; external generation produces rendered artifacts only as a downstream step. See *Realization Workflow Reference*, *Prompt Construction Reference*.

**Gentle narrative (atmosphere)** — Visual world atmosphere: warm, intimate, unfolding present, approachable. See *Visual World Reference*.

**Geometric (visual world preset)** — Visual world preset: restricted technical palette × flat light × precise technical line × absent/schematic figure × clear instructional atmosphere. See *Visual World Reference*.

**Graph / network** — Math primitive: vertices connected by edges; non-metric structure of connection. Strong at III. See *Math Visual Reference*, *Math Audio Reference*.

**Graphic woodcut (line)** — Visual world line: bold, high-contrast, carved hard edges. See *Visual World Reference*.

## H

**Hard inked (edge quality)** — Medium edge: crisp, defined; doesn't bleed. See *Medium Reference*.

**HDR / prismatic (color behavior)** — Medium color: beyond standard gamut; chromatic aberration possible; specular peaks. See *Medium Reference*.

**Heterophonic (texture)** — Audio texture: multiple voices on same line with simultaneous variation. Strong at VI. See *Audio Aesthetic Reference*.

**Hieratic** — Composition convention in Mythic visual world: figures arranged with sacred formality. See *Visual World Reference*.

**High contrast political (palette)** — Visual world palette: desaturated with single saturated accent; black, white, red, occasional gold. See *Visual World Reference*.

**Hilbert space** — Math primitive: complete inner product space; natural setting for quantum mechanics and many function spaces. Strong at V. See *Math Visual Reference*, *Math Audio Reference*.

**Homophonic (texture)** — Audio texture: multiple voices moving together; parallel rhythm, blocked harmony. Strong at IV. See *Audio Aesthetic Reference*.

**Hybrid (timbre)** — Audio timbre: acoustic instruments processed digitally. See *Audio Aesthetic Reference*.

## I

**External generator** — A generator whose execution runs outside the framework's flow. Image and audio prompts from Pass 5 are handed to external generators (image tools, audio tools, illustrators, musicians) that produce the finished artifacts downstream of the framework's work. See *Realization Workflow Reference*.

**Idealist (stance)** — Voice stance: treats claims as gestures toward higher possibility; aspirational. Strong at V, VII. See *Voice Reference*.

**Identity (layer concept)** — What a layer *is* in a given work. Authored or chosen at the realization level (preset, atomic spec) or specified at the work level (character, object, motif definitions). Identity persists across the work as the same identity; it's what differs between two realizations of the same spline. The complement of Trajectory. See *SURVEY.md*, *parameter_space_reference.md*. Visual: `know/diagrams/layer_architecture_map.html`.

**Identity signal** — Spline output, universal context for all layers per movement. Includes structural function, felt weight, what arrives, what departs, invariants, flexibility. (Note: the spline's "Identity signal" predates the Identity/Trajectory split; it contains both Identity-flavored constraints and Trajectory-flavored characterizations. Cleanup pending.) See *Spline Reference*.

**Framework-integrated generator** — A generator whose execution is integrated into the framework's pass flow. Currently only the narrative generator is framework-integrated (Pass 8 voice fill, against the Pass 7 outline). If the framework gains an image or audio generator in the future, it would run as a new pass parallel to Pass 8. See *Realization Workflow Reference*.

**Ink+wash (medium preset)** — Medium preset: paper × dip pen + brush × absorbent/bleeding × hard inked + soft bleed × monochrome. See *Medium Reference*.

**Inline cues (sensory mark integration)** — Script sub-function option: audio/visual marks woven into voice text or stage directions; works for tightly coordinated multimodal performance. See *Script Reference*.

**Inner product** — Math primitive: bilinear form producing scalar from two vectors; defines length and angle. See *Math Visual Reference*. Parallel to Consonance in *Math Audio Reference*.

**Inscription (canonical object)** — The distance formula inscribed in gold leaf around the cathedral's vault at IV. The cathedral's law; the formula treated as liturgy. Preserved at V, VI, VII. See *Object Reference*.

**Integrated lyric (modality coordination)** — Script sub-function option: modalities folded into a single flowing text where staging is implicit in language; works for literary scripts. See *Script Reference*.

**Integrated narrative cues (sensory mark integration)** — Script sub-function option: sensory information embedded in stage directions, not separately marked; works for literary scripts. See *Script Reference*.

**Intimate (positioning)** — Voice positioning assuming shared history with one person; licenses personal shorthand. See *Voice Reference*.

**Intimate sacred (atmosphere)** — Visual world atmosphere: quiet, reverent, body-centered. See *Visual World Reference*.

**Invariants** — Spline Identity signal element: what every realization must preserve in a movement. See *Spline Reference*.

**"It Was True at Its Scale" (verbal motif)** — Canonical verbal motif: phrase affirming a settlement, formula, or framing is correct within its operational scope. Foregrounded at III (each settlement); echoes at IV, V, VI. See *Motif Reference*.

**Italic blocked (stage direction style)** — Script sub-function option: stage directions on their own lines, italicized, separate from voice text; typical for formal and liturgical scripts. See *Script Reference*.

**Italic inline action (voice cue style)** — Script sub-function option: voice entry or shift rendered as italicized stage direction; works for solo voices and narrative-driven scripts. See *Script Reference*.

## J

**Just intonation** — Audio tonality: intervals as integer frequency ratios (3:2, 5:4); harmonics align exactly. See *Audio Aesthetic Reference*.

---

## L

**Layer preset (Tier 2)** — A named bundle of sub-function options within a single layer. Convenience shorthand; reusable across realizations. Each layer reference has its own preset bundles section. Example: the *Mythic* visual world preset bundles palette × light × line × figure × atmosphere choices. See individual layer references. Visual: `know/diagrams/three_tier_composition.html`.

**Locked parameter** — A sub-function choice within a Tier 2 layer preset declared constitutive of the preset's identity. A realization can override a locked parameter, but doing so means leaving the preset's identity — the composition becomes a sibling rather than the preset proper. The realization spec must explicitly acknowledge the override. Locks are soft, not hard; they exist to make the distinction between negotiable and constitutive parameters visible. See individual layer references and *framework/dependencies_reference.md*.

**Layered (configuration)** — Voice configuration: voices stacked simultaneously, audible as polyphony. Strong at V. See *Voice Reference*.

**Layered surface (substrate)** — Medium substrate: discontinuous, multiple substrates joined. See *Medium Reference*.

**Lecture script (script preset)** — Script preset for technical lecture realizations: italic inline voice action, bracketed action for slides/diagrams, cue blocks, named beats, sequential modality. See *Script Reference*.

**Light (visual world sub-function)** — Source character, direction, quality of light in a visual world. Eight implementations. See *Visual World Reference*.

**Line (visual world sub-function)** — Weight behavior, character, authority of line in a visual world. Eight implementations. See *Visual World Reference*.

**Lineage** — Project-level posture document: ancestry. Auditable record of intellectual debt — where each piece of the framework came from (spline math, type theory, narrative theory, operator's prior work). Each entry: what is borrowed, from where, what the source means, what the framework does with it, what's not borrowed, lineage status. Companion to *Charter* and *Critique*. See *LINEAGE.md* at project root.

**Liquid metal / chrome body (figure)** — Visual world figure: anatomically clean reflective body; body as medium for light. See *Visual World Reference*.

**Liturgical script (script preset)** — Script preset for Sacred Ritual realization: named headers (CELEBRANT, CHORUS), italic blocked stage directions, cue blocks at transitions, named beats, cued ensemble modality. See *Script Reference*.

## M

**Manifold** — Math primitive: a space that locally resembles Euclidean space but globally may be curved or have nontrivial topology. Strong at III, V. See *Math Visual Reference*, *Math Audio Reference*.

**Margin cue (voice cue style)** — Script sub-function option: voice named in margin column parallel to spoken text; works for print scripts and multi-voice layered configurations. See *Script Reference*.

**Mark-making (medium sub-function)** — How marks are made on substrate: dip pen, brush, palette knife, digital shader, collage assembly. Five implementations. See *Medium Reference*.

**Material identity (object sub-function)** — What an object is as a thing. Composed of: form, scale, material substance, sensory mode. See *Object Reference*.

**Math Audio (layer)** — Renders sonic primitives. Upstream of Audio Aesthetic. Eighteen primitives. See *Math Audio Reference*.

**Math Visual (layer)** — Renders visual primitives. Upstream of Medium and Visual World. Eighteen primitives. See *Math Visual Reference*.

**Math vocabulary signal** — Spline output specifying which primitives appear at what density per movement. Feeds Math Visual and Math Audio. See *Spline Reference*.

**Mathematician (register)** — Voice register: structural, precise, defined; foregrounds structure and generality. See *Voice Reference*.

**Measured / processional (pacing)** — Audio pacing: moderate regular density, steady deliberate arc. See *Audio Aesthetic Reference*.

**Medium (layer)** — Visual surface layer specifying material of the work. Composed of five sub-functions: substrate, mark-making, surface behavior, edge quality, color behavior. Mutual with Visual World. Reads Math Visual output. See *Medium Reference*.

**Metronomic (rhythm)** — Audio rhythm: steady defined pulse, simple meter, regular subdivision. Strong at IV. See *Audio Aesthetic Reference*.

**Microtonal (tonality)** — Audio tonality: divisions finer than equal temperament. Strong at V. See *Audio Aesthetic Reference*.

**Mixed media (medium preset)** — Medium preset: layered surface × collage + brush + dip pen × discontinuous × mixed-within-image × multi-material color. See *Medium Reference*.

**Modal (tonality)** — Audio tonality: scale based on a mode (Dorian, Phrygian, Lydian); static, returns to center. Strong at VI, VII. See *Audio Aesthetic Reference*.

**Modality coordination (script sub-function)** — How visual, audio, and voice cues are aligned across a movement. Four implementations: sequential, parallel, cued ensemble, integrated lyric. See *Script Reference*.

**Monochrome (color behavior)** — Medium color: single color or grayscale. See *Medium Reference*.

**Monophonic (texture)** — Audio texture: single voice or single drone. Strong at I, VII. See *Audio Aesthetic Reference*.

**Motif** — A recurring pattern that persists across movements. Distinct from objects (which are particular things) and characters (which are agents). Medium-agnostic at the level of pattern; medium-specific in instantiation. See *Motif Reference*.

**Motif Reference** — Content-layer reference. Reads spline's motif signal per movement; specifies recurring patterns across the work. Sibling of Character Reference and Object Reference. See *Motif Reference*.

**Motif signal** — Spline output specifying which motifs are invoked in each movement, at what intensity, in what context. Consumed by Motif Reference. See *Spline Reference*.

**Movement affinities** — Per-option declaration of which movements an option naturally serves (Strong), which work with deliberate handling (Workable), and which fight against the option (Resists). Used across all references.

**Multi-material (color behavior)** — Medium color: multiple color logics within single image; each material retains own behavior. See *Medium Reference*.

**Musician (register)** — Voice register: temporal, durational, phrased; foregrounds time and return. See *Voice Reference*.

**Mutual (within domain)** — Cross-layer relationship: layers that inform and are informed by each other within their shared domain. Medium ↔ Visual World within visual surface. See *Spline Reference*.

**Mythic voice (register)** — Voice register: bodily, archetypal, threshold-aware; parallel construction, slightly archaic. See *Voice Reference*.

**Mythic (visual world preset)** — Visual world preset: earth and gold palette × painted-from-within light × classical contour × classical idealized figure × sacred hieratic atmosphere. See *Visual World Reference*.

## N

**Named beat (timing notation)** — Script sub-function option: silences and pauses marked as labeled beats (silence, held silence, long beat); default timing notation. See *Script Reference*.

**Named header (voice cue style)** — Script sub-function option: voice identified in labeled cue line above their text (CELEBRANT:, CHORUS:); typical for liturgical and formal performance. See *Script Reference*.

**Narrative generation (Passes 6-8)** — The framework's only in-flow generator pipeline. Consumes the narrative prompt from Pass 5 and produces drafted narrative prose through three stages: substitution (Pass 6, cross-modal), outline (Pass 7, cross-modal), voice fill (Pass 8, narrative-only). Image and audio prompts pass through 6 and 7 alongside narrative, but stop there (or proceed to external generation as optional downstream). See *Realization Workflow Reference*.

**Narrative warmth** — Affordance delivered by storybook visual world and watercolor medium; resists weight and compression. See *Visual World Reference*, *Medium Reference*.

**Naturalistic muted (palette)** — Visual world palette: full natural spectrum but desaturated; uncanny in its restraint. See *Visual World Reference*.

**No visible line (line)** — Visual world line: form defined by color and edge; painted realism. See *Visual World Reference*.

**"Nothing Was Counted" (verbal motif)** — Canonical verbal motif: phrase naming the pre-measurement condition as positive presence (not lack). Appears at I and VII. See *Motif Reference*.

## O

**Object** — A particular perceivable thing with material continuity across movements. Distinct from motifs (recurring patterns) and math primitives (abstract content). The rod is an object; the basis it instantiates is a math primitive; the laying-down gesture is a motif. See *Object Reference*.

**Object Reference** — Content-layer reference. Reads spline's object signal per movement; specifies material things with continuity. Sibling of Character Reference and Motif Reference. See *Object Reference*.

**Object signal** — Spline output specifying which objects are present in each movement, in what state, with what function. Consumed by Object Reference. See *Spline Reference*.

**Oil / painted (medium preset)** — Medium preset: canvas or panel × brush + palette knife × opaque layered × sfumato or hard inked × opaque saturated. See *Medium Reference*.

**Opaque layered (surface behavior)** — Medium surface: marks sit on surface; cover underlayers; slow drying; glazes possible. See *Medium Reference*.

**Opaque saturated (color behavior)** — Medium color: full saturation; opaque; light modeled into form. See *Medium Reference*.

**Open / unphrased (phrasing)** — Audio phrasing: phrase length undefined or very long; sustained, no arc. See *Audio Aesthetic Reference*.

**Ornate baroque (line)** — Visual world line: variable weight, decoratively elaborated; ceremonial. See *Visual World Reference*.

**Ornate decay (atmosphere)** — Visual world atmosphere: theatrical, spectacle-as-cage; beauty made cage. See *Visual World Reference*.

**Orthogonality** — Math primitive: inner product equals zero; vectors perpendicular; sonic elements sharing no relationship. Strong at II, VI. See *Math Visual Reference*, *Math Audio Reference*.

## P

**Pacing (audio sub-function)** — Event density, temporal arc, build behavior. Five implementations: stillness, slow unfolding, measured, compression, expansion. See *Audio Aesthetic Reference*.

**Painted realism (line)** — Visual world line: no visible contour; form defined by color and edge. See *Visual World Reference*.

**Painted-from-within (light)** — Visual world light: within forms; figures glow; no external source. See *Visual World Reference*.

**Palette (visual world sub-function)** — Hue range, saturation, tonal range, signature colors. Eight implementations. See *Visual World Reference*.

**Palette knife (mark-making)** — Medium mark-making: knife or trowel with thick paint; sculptural directional strokes. See *Medium Reference*.

**Panel (substrate)** — Medium substrate: rigid, smooth, gessoed; allows fine detail. See *Medium Reference*.

**Paper (substrate)** — Medium substrate: absorbent, fibrous, tactile; shows through marks. See *Medium Reference*.

**Parallel (modality coordination)** — Script sub-function option: modalities rendered as parallel columns or strands; works for complex production scripts and AV realizations. See *Script Reference*.

**Parenthetical inline (stage direction style)** — Script sub-function option: stage directions in parentheses within text flow; works for narrative-leaning scripts. See *Script Reference*.

**Pattern shape (motif sub-function)** — The medium-agnostic description of what a motif's recurring pattern is, before being instantiated. See *Motif Reference*.

**Pattern type (motif sub-function)** — The kind of pattern a motif is: gestural, verbal, compositional, sonic, or conceptual hybrid. See *Motif Reference*.

**Per-movement invocation (motif sub-function)** — Specification of where a motif appears, at what intensity, in what context per movement. See *Motif Reference*.

**Per-movement state (character/object sub-function)** — Specification of a character or object's condition in each movement they appear. See *Character Reference*, *Object Reference*.

**Phrasing (audio sub-function)** — Phrase length, shape, relationship behavior. Five implementations: open/unphrased, symmetrical, asymmetrical, cellular, through-composed. See *Audio Aesthetic Reference*.

**Plug-in pattern by movement** — Per-register specification in Voice Reference of how each register fulfills the spline's "what voice does" at each movement. See *Voice Reference*.

**Polyphonic (texture)** — Audio texture: multiple independent voices; layered, none subordinated. Strong at III, V. See *Audio Aesthetic Reference*.

**Polyptych (canonical object)** — The multi-panel painting structure. Five panels at III; expanded around the cathedral at V; backgrounded at VI and VII. Panels equal in scale and reverence; no panel foregrounded. See *Object Reference*.

**Polyptych-Around-Center (compositional motif)** — Canonical compositional motif: multiple panels arranged around central position; honors all panels equally. Foregrounded at III and V. See *Motif Reference*.

**Polyrhythm (rhythm)** — Audio rhythm: multiple simultaneous pulses at different rates. Strong at III, V. See *Audio Aesthetic Reference*.

**Polytonal / multi-system (tonality)** — Audio tonality: multiple tonal systems coexisting without hierarchy. Strong at III. See *Audio Aesthetic Reference*.

**Positioning (voice sub-function)** — Voice's audience contract: academic, general public, artistic peers, specialist, child, intimate, congregational, transactional. See *Voice Reference*.

**Precise technical (line)** — Visual world line: mathematically uniform weight; drafted, deliberate. See *Visual World Reference*.

**Presentation** — The typographical surface of a realization. The last assembly step. Reads script + apparatus + realization spec; produces a single readable document. Distinct from script (performable form) and from image/audio (sensory surfaces). See *Presentation Reference*.

**Presentation Reference** — Assembly-layer reference downstream of Script. Composes from five sub-functions (typography, color and ground, spatial rhythm, compositional behavior, format wrapping) and provides eight realization-keyed presets. See *Presentation Reference*.

**Preset bundle** — Common combination across sub-functions, documented as named shorthand. Same concept as Tier 2 layer preset. Preset bundles are work-local — defined within the work that authors them. The framework holds only the construction direction for sub-functions; specific bundles graduate to framework level only on demonstrated cross-work reuse.

**Productive friction** — Cross-axis voice interaction where the axes pull against each other and the tension is the point. See *Voice Reference*.

**Projection** — Math primitive: linear map taking a vector to its component along a subspace; orthogonal projection drops perpendicular. Strong at II, IV. See *Math Visual Reference*, *Math Audio Reference*.

**Projects** — Sub-directory of `do/` for *meta-projects* — apparatus built to support the framework, distinct from `know/` (the framework's specifications) and `do/works/` (spline scores composed under the framework). Each project has its own README and internal structure. Current projects: `study/` (knowledge-base apparatus, deferred until framework stabilization), `workbench/` (operator-facing tool/surface, gated by friction-pain), and `explorations/` (internal thinking intake). See *do/projects/README.md*.

**Prompt Construction** — Assembly layer that combines all layer outputs into a triplet of cold-start prompts (image, audio, narrative). Each prompt is structured as a four-block template (Identity-block / Scene / Length / Avoid); Identity-block is named per modality (Voice / Medium and visual world / Sonic identity). The triplet provides form only at Pass 5; substitution (Pass 6) and outline (Pass 7) apply work-specific identity and trajectory cross-modally before any prompt leaves the framework. See *Prompt Construction Reference*.

## Q

---

## R

**Read-aloud script (script preset)** — Script preset for Children's Book realization: named header for character voices + italic action for narrator, parenthetical inline with gesture cues (show picture, turn page), named beats, sequential modality with page-turn structure. See *Script Reference*.

**Reading script (script preset)** — Script preset for Critique realization: italic inline voice action with tone marks, italic blocked stage directions, cue blocks, named beats, sequential modality. See *Script Reference*.

**Realism (medium / visual world)** — Across the framework, "painted realism" refers to a specific visual world line treatment (form by color and edge, no contour). See *Visual World Reference*.

**Realist (stance)** — Voice stance: accepts claims at their working scope; operational. See *Voice Reference*.

**Realization** — A complete spec across the six layers (voice, medium, visual world, audio aesthetic, script, presentation) for a spline score. Constructed by choosing presets or atomic configurations per layer. The same spline score can be constructed into many realizations. Lives in `works/{work}/realizations/`.

**Realization construction** — The activity of producing a realization from a spline score. Reads the spline's signals, chooses layer presets (or atomic configurations) at each layer, handles overrides and locks, produces the complete cross-layer bundle that is the realization spec. One of the two primary activities within Compositional Algebra; the other is spline scoring. See *Realization Workflow Reference*.

**Realization spec (Tier 3)** — A complete top-level bundle across all six layers (Voice, Medium, Visual World, Audio Aesthetic, Script, Presentation). Each realization picks a Tier 2 preset (or atomic Tier 1 configuration) per layer. Realization specs live in `do/works/{work}/realizations/`. Visual: `know/diagrams/three_tier_composition.html`.

**Recurrence behavior (motif sub-function)** — How a motif returns and varies across movements. Composed of: movements of invocation, variation per movement, intensity per movement, phase relationships. See *Motif Reference*.

**Register (voice sub-function)** — Who is speaking: scientist, mathematician, engineer, artist, musician, caretaker, mythic voice, everyman, child. See *Voice Reference*.

**Register classification (script sub-function)** — Universal first step of script generation. Partitions narrative prose into voiced register (performer-spoken) and stage register (work-narration in third person), then routes each to its appropriate downstream sub-function. See *Script Reference*.

**Resistance (visual world preset)** — Visual world preset: high contrast political × stark journalistic × graphic woodcut × collective/crowd × witnessed weight. See *Visual World Reference*.

**Rhythm (audio sub-function)** — Pulse character, metric structure, subdivision. Five implementations. See *Audio Aesthetic Reference*.

**Roadmap** — Project-level posture document: forward-planning. Where the project is heading at horizons longer than QUEUE (immediate pending) and broader scope than the formalization roadmap (formal claims only). Entries are Active / Near-term / Medium-term / Long-term / Conditional. Companion to *Charter*, *Critique*, *Lineage*, *Survey*. Distinct from `know/formalization_roadmap.md` (which is scoped to formal claims). See *ROADMAP.md* at project root.

**Rod, The** — The measuring tool, the first mark, the unit. Arrives at II, set down at VII. Useful throughout; never destroyed. See *Spline Reference*.

**Royal ornate (palette)** — Visual world palette: royal blue, gold, blood red, decaying ivory. See *Visual World Reference*.

## S

**Sacred / hieratic (atmosphere)** — Visual world atmosphere: reverent, timeless, dignified weight. See *Visual World Reference*.

**Sacred with mechanical (figure)** — Visual world figure: sacred body with mechanical or surveillance elements fused in. See *Visual World Reference*.

**Scientist (register)** — Voice register: empirical, methodological, causal; foregrounds evidence and mechanism. See *Voice Reference*.

**Score-aligned bars (timing notation)** — Script sub-function option: silences and beats marked as bars or rests aligned with audio score; works for scripts that exist alongside notated audio. See *Script Reference*.

**Screen (substrate)** — Medium substrate: no physical surface; pixels; screen-native. See *Medium Reference*.

**Script** — The final assembly layer below voice. Reads narrative, image prompt, audio prompt, and transition notes; integrates them with realization-keyed staging conventions into a single performable document. Downstream of the triplet. See *Script Reference*.

**Script preset** — A bundled choice across the six script sub-functions, defined in Script Reference. Reusable across realizations. See *Script Reference*.

**Sensory mark integration (script sub-function)** — How audio and visual cues are positioned alongside voice content. Four implementations: inline cues, cue column, cue blocks, integrated narrative cues. See *Script Reference*.

**Sequential (modality coordination)** — Script sub-function option: modalities introduced one at a time with voice as primary; works for reading-leaning scripts and voice-centered performances. See *Script Reference*.

**Sfumato (edge quality)** — Medium edge: no sharpness; gradual transition; edge as gradient. See *Medium Reference*.

**Signal (spline)** — Typed output from spline per movement (Identity including Shape, Math vocabulary, Audio, Visual, Voice, Transition notes). Consumed by reference docs in dependency order. See *Spline Reference*.

**Skeptic (stance)** — Voice stance: withholds judgment until shown; patient and demanding. Strong at III, VI. See *Voice Reference*.

**Slerp (spherical linear interpolation)** — Math primitive: smooth interpolation along a great circle; natural rotation between orientations. Strong at V. See *Math Visual Reference*, *Math Audio Reference*.

**Slow unfolding (pacing)** — Audio pacing: low-to-moderate density, gradual development. Strong at I, V, VI. See *Audio Aesthetic Reference*.

**Smooth rendered (line / surface)** — Visual world line and medium surface: anti-aliased, mathematically smooth; no painterly variation. See *Visual World Reference*, *Medium Reference*.

**Soft / stippled (line)** — Visual world line: broken into points or hatching; atmospheric, granular. See *Visual World Reference*.

**Soft bleed (edge quality)** — Medium edge: variable sharpness; edge dissolves into substrate. See *Medium Reference*.

**Solo (configuration)** — Voice configuration: one voice; narrator addresses audience directly. Strong at I, II, IV, VII. See *Voice Reference*.

**Sonic basis** — Math audio primitive: three independent sonic elements establishing a frame. Strong at II. See *Math Audio Reference*. Parallel to Basis in *Math Visual Reference*.

**Sonic manifold** — Math audio primitive: tuning system or spatial space with local consistency but global non-flatness. See *Math Audio Reference*. Parallel to Manifold in *Math Visual Reference*.

**Sonic space** — Math audio primitive: structured set within which sonic events live. See *Math Audio Reference*. Parallel to Vector space in *Math Visual Reference*.

**Sonic vector** — Math audio primitive: single sonic event with direction (pitch contour, spatial movement) and magnitude. See *Math Audio Reference*. Parallel to Vector in *Math Visual Reference*.

**Spatial rhythm (presentation sub-function)** — How text breathes typographically: paragraph spacing, silence treatment, cue block treatment, section breaks, section openings. See *Presentation Reference*.

**Spatialization (audio sub-function)** — Channel format, position behavior, movement behavior. Five implementations: mono, stereo, ambient, distributed, ambisonic. See *Audio Aesthetic Reference*.

**Specialist (positioning)** — Voice positioning assuming deep domain knowledge; licenses field-internal undefined vocabulary. See *Voice Reference*.

**Specular / prismatic (light)** — Visual world light: physical light simulation; specular highlights; prismatic refraction. See *Visual World Reference*.

**Spline** — Mathematically: piecewise function with specified continuity grades between segments. In a work's score: a sequence of movements as control points with explicit continuity grades between them. See *Spline Reference*, *parameter_space_reference.md*.

**Spline / continuity (math primitive)** — Math primitive treating the work itself as a spline; explicit continuity grades at joins. See *Math Visual Reference*, *Math Audio Reference*.

**Spline-invariant** — Elements that every realization must preserve at a given movement. Pulled from spline Identity signal invariants. See *Spline Reference*.

**Spline score** — The artifact produced by spline scoring. The structured authorship that defines a work: the spline document (movements as control points with typed signals) plus the content layers that travel with it (characters, objects, motifs specific to this work). The same spline score can be constructed into many realizations. See *Spline Reference*.

**Spline scoring** — The activity of authoring a spline score. Distinct from realization construction (which composes a performance of an existing spline score); spline scoring authors the score itself. One of the two primary activities within Compositional Algebra. See *Spline Reference*.

**Stage direction style (script sub-function)** — How non-spoken action — gestures, movement, sensory shifts — is rendered. Four implementations: parenthetical inline, italic blocked, bracketed action, capitalized cue. See *Script Reference*.

**Stage register (script)** — Prose that describes the work in third person: what the performer does, what other voices do, what objects do, what the sound does, what visually happens. Identified by Register classification sub-function; consumed by Stage direction style and Sensory mark integration. See *Script Reference*.

**Stance (voice sub-function)** — Voice's relation to material: cynic, skeptic, idealist, realist. See *Voice Reference*.

**Star-flesh (visual world preset)** — Visual world preset: body and starlight palette × low ambient with sources × soft/stippled line × body as field × intimate sacred. See *Visual World Reference*.

**Stark journalistic (light)** — Visual world light: harsh single direction; hard shadows; no softening. See *Visual World Reference*.

**Stillness / suspended (pacing)** — Audio pacing: very low event density; flat sustained arc. Strong at I, VI, VII. See *Audio Aesthetic Reference*.

**Stratified / layered drones (texture)** — Audio texture: multiple sustained voices at different pitches; thick, slowly evolving. See *Audio Aesthetic Reference*.

**Stylized narrative (figure)** — Visual world figure: stylized with gentle distortion; small figures in wider landscapes. See *Visual World Reference*.

**Sub-function** — Independently constructable parameter within a layer. Mediums have five, visual worlds have five, audio aesthetics have seven, voices have four. See all layer references.

**Substrate (medium sub-function)** — Physical character, visibility, tooth. Five implementations: paper, canvas, panel, screen, layered surface. See *Medium Reference*.

**Surface behavior (medium sub-function)** — How marks interact with substrate: absorbent/bleeding, opaque/layered, smooth/rendered, discontinuous/mixed. See *Medium Reference*.

**Surreal (visual world preset)** — Visual world preset: naturalistic muted palette × even with shadow light × painted realism line × dislocated isolated figure × dream-displaced atmosphere. See *Visual World Reference*.

**Symbolic weight (object/motif sub-function)** — What an object or motif means within the work; the meanings it carries; its symbolic relationships and invariants. See *Object Reference*, *Motif Reference*.

**Symmetrical (phrasing)** — Audio phrasing: regular phrase lengths; balanced antecedent-consequent. See *Audio Aesthetic Reference*.

**Synesthetic futurist (atmosphere)** — Visual world atmosphere: post-human, sensorially charged; present-future temporal feel. See *Visual World Reference*.

## T

**Telling script (script preset)** — Script preset for narrative realizations: italic action for narrator + named header for character voices, parenthetical inline staging, integrated narrative sensory cues, named beats, integrated lyric modality. See *Script Reference*.

**Texture (audio sub-function)** — Voice count, voice relationships, density behavior. Six implementations: monophonic, drone+figure, polyphonic, homophonic, heterophonic, stratified drones. See *Audio Aesthetic Reference*.

**Theatrical chiaroscuro (light)** — Visual world light: dramatic directional light; hard contrast; deep shadows. See *Visual World Reference*.

**Three-at-a-Corner (compositional motif)** — Canonical compositional motif: three elements meeting at a single point, extending in three independent directions. Foregrounded at II (the basis) and IV (the cathedral's architectural columns); echoed at VII. See *Motif Reference*.

**Through-composed (phrasing)** — Audio phrasing: continuous, no repetition; ongoing development. See *Audio Aesthetic Reference*.

**Tier 1 — Parameters (atomic)** — The lowest configuration tier. Each layer is composed of sub-functions, each with options. Atomic configuration specifies one option per sub-function. Fully expressive but verbose. See individual layer references. Visual: `know/diagrams/three_tier_composition.html`.

**Timbre (audio sub-function)** — Source character, spectral profile, attack/decay. Six implementations: acoustic breath-based, acoustic struck, acoustic bowed, electronic synthesized, hybrid processed, field recording. See *Audio Aesthetic Reference*.

**Timing notation (script sub-function)** — How silences, beats, breaths, and durations are specified. Four implementations: named beat, duration-marked silence, breath marks, score-aligned bars. See *Script Reference*.

**Tonality (audio sub-function)** — Pitch system, reference, harmonic behavior, resolution. Six implementations: drone-based, just intonation, equal temperament, modal, microtonal, polytonal. See *Audio Aesthetic Reference*.

**Topology** — Math primitive: properties preserved under continuous deformation; structure of nearness without metric. Strong at VI. See *Math Visual Reference*, *Math Audio Reference*.

**Trajectory (layer concept)** — How a layer *moves through the work*. Derived from the math (spline's mathematical content + felt-quality function `f_n`). The character's arc of action; the object's role across movements; the motif's phase emphasis; the audio's intensity arc; the visual's development; the voice's attention arc. Trajectory is what's shared between two realizations of the same spline. The complement of Identity. See *SURVEY.md*, *parameter_space_reference.md*. Visual: `know/diagrams/layer_architecture_map.html`.

**Transactional (positioning)** — Voice positioning assuming task to be completed; licenses steps and direct instruction. See *Voice Reference*.

**Transformation state (object sub-function)** — How an object changes (or doesn't) across the movements it appears in. Composed of: movements of appearance, state per movement, transformation arc, what is conserved. See *Object Reference*.

**Transition notes** — Spline output per movement specifying continuity grade and what must connect at the join to the next movement. See *Spline Reference*.

**Translucent layered (color behavior)** — Medium color: transparent; saturation built up through layering; light through layers. See *Medium Reference*.

**Triplet** — The three cold-start prompts per movement (image prompt, audio prompt, narrative prompt) produced by Prompt Construction. Symmetric in structure (four-block template adapted per modality). All three undergo substitution (Pass 6) and outline (Pass 7) cross-modally; only narrative continues to voice fill (Pass 8). Image and audio prompts after Pass 7 serve the script as descriptive content; external generation of rendered artifacts is optional downstream. See *Prompt Construction Reference*.

**Typography (presentation sub-function)** — How text is rendered as form: serif/sans family, weight behavior, case treatment, leading. See *Presentation Reference*.

## U

**Unmetered (rhythm)** — Audio rhythm: no pulse; events when they arrive; breath-driven. Strong at I, VI, VII. See *Audio Aesthetic Reference*.

---

## V

**Validator** — Minimum-viable command-line tool at `do/projects/workbench/tools/validate.py` that witnesses framework invariants (dead links, VERSION format, generation ID convention, glossary inventory) without enforcing. Smallest version of *Workbench Friction 4* (validation as ambient state; renumbered from F5 in the 2026-05-28 reframe); partially closes the translation-discipline *Critique* entry mechanically. Reports findings; never modifies files; exit code always 0. See `do/projects/workbench/tools/README.md`.

**Vector** — Math primitive: ordered tuple representing direction and magnitude; arrow from a base point. See *Math Visual Reference*, *Math Audio Reference*.

**Vector space** — Math primitive: set closed under vector addition and scalar multiplication; algebraic structure containing vectors. Strong at III, IV, V. See *Math Visual Reference*. Parallel to Sonic space in *Math Audio Reference*.

**Visual identity (character sub-function)** — How a character appears across visual renderings. Composed of: figure type, posture-set, identifying marks, costume/dress. See *Character Reference*.

**Visual signal** — Spline output specifying visual requirements per movement (gesture, opening/closing image, required/forbidden affordances). Consumed by Medium and Visual World. See *Spline Reference*.

**Visual World (layer)** — Visual surface layer specifying register of imagery. Composed of five sub-functions: palette, light, line, figure, atmosphere. Mutual with Medium. Reads Math Visual output. See *Visual World Reference*.

**Voice (layer)** — Final composition layer in dependency graph. Composed of five sub-functions: register, stance, positioning, configuration, affect. Reads all upstream outputs (audio surface first as temporal substrate, then visual surface as spatial moment). See *Voice Reference*.

**Voice cue style (script sub-function)** — How a speaker is named and marked when entering, shifting, or leaving. Four implementations: named header, italic inline action, margin cue, mixed. See *Script Reference*.

**Voice identity (character sub-function)** — How a character sounds when they speak. Composed of: register × stance × positioning, speech frequency, voice continuity, sonic signature. See *Character Reference*.

**Voice signal** — Spline output specifying voice requirements per movement (configuration, pacing, what voice does, where voice lands). Consumed by Voice. See *Spline Reference*.

**Voice-memo / read-aloud script (script preset)** — Script preset for Personal Letter realization: light italic inline action, minimal parenthetical staging, integrated narrative sensory cues, breath marks, integrated lyric modality. See *Script Reference*.

**Voiced register (script)** — Prose that the performer utters to the audience: direct address, first-person plural, second-person, vocative, invocations, declarations, calls, recognitions. Identified by Register classification sub-function; consumed by Voice cue style. See *Script Reference*.

## W

**Asparśa Yoga** — Philosophical frame from Gauḍapāda's Kārikā meaning "yoga of non-contact"; informs the work's stance toward measurement. Truth approached through removal of distortion rather than imposition of frame. See *Provenance Notes*.

**Cold-start prompt** — A prompt self-contained enough that any generation engine can produce work from it without external context. See *Prompt Construction Reference*.

**Compression arc** — How compression sits across the spline: tightens through II–III, peaks at IV, releases through V, settles through VI, opens at VII. See *Spline Reference*.

**Polish** — In a prompt, the section carrying continuity callouts, anti-drift specifications, and production source-of-truth. Separate from the prompt itself. See *Prompt Construction Reference*.

**Warm earth muted (palette)** — Visual world palette: warm earth, muted blue, paper cream; low to moderate saturation. See *Visual World Reference*.

**"We Knew This Before We Had Words for It" (verbal motif)** — Canonical verbal motif: phrase asserting that recognition precedes vocabulary; bodily knowledge precedes conceptual knowledge. Foregrounded at V and VI. See *Motif Reference*.

**Witnessed weight (atmosphere)** — Visual world atmosphere: political, urgent without melodrama; gathered seriousness. See *Visual World Reference*.

**Witnesses' Postures (canonical object)** — The arrangement of figures in postures of recognition at VI. Sparse, reverent. Preserved at VII. See *Object Reference*.

**Witnesses, The (canonical character)** — The sparse gathered presences at VI in postures of recognition. Silent; remain at VII as the figure walks on. Honored equally; no witness foregrounded. See *Character Reference*.
