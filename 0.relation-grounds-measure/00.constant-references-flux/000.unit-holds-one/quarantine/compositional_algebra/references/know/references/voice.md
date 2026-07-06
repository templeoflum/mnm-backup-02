# Voice Reference

**Formal:**
```
Voice : Identity × VoiceSignal × MathVocabulary × AudioSurface × VisualSurface → VoiceOutput
Voice = Register × Stance × Positioning × Configuration × Affect
```
A functor reading the spline's Identity, VoiceSignal, and MathVocabulary signals, plus the audio surface (temporal substrate) and visual surface (spatial moment within the substrate), producing a voice output. The product type has five sum-typed sub-functions.

**Informal:** The Voice layer is the final layer in the dependency graph — voice describes what has already been encoded sonically and visually, in that order. Voice speaks from within the sonic substrate that holds time, situated at the spatial moment the visual surface establishes. Composed of five sub-functions: **register** (who speaks), **stance** (their relation to material), **positioning** (who they speak to), **configuration** (how voices relate within a movement), and **affect** (the speaker's felt state at the moment of speaking).

### Identity and Trajectory

The voice, like every layer, has two parts:

- **Identity** — what the voice *is*. The five sub-functions and their chosen options (Everyman register, Realist stance, etc.) define identity. Chosen at the realization level; holds across the realization (per the voice translation discipline, voice spec is constant across movements unless affect varies).
- **Trajectory** — how the voice *develops across movements*. What the voice describes movement to movement, where its attention lands, how its register subtly modulates (without changing identity), derived from the felt-quality function `f_n` and from the math at home in each movement.

Each sub-function is its own constructable layer.

---

## Voice Layer Inputs

The Voice layer reads all upstream outputs and emits voice content.

- **From spline:** Identity signal (including Shape: Approach × Within × Departure); Voice signal (configuration, pacing, what voice does, where voice lands)
- **From content layers:** Math Visual output, Math Audio output, Character Reference output, Object Reference output, Motif Reference output
- **From surface layers:** Medium + Visual World composed output, Audio Aesthetic composed output

Voice is the last layer before Narrative composition and Prompt Construction. It reads everything upstream — content (math, characters, objects, motifs) plus surface (visual, audio) — because the voice describes the work, and the work must already exist as content and rendered surface for the voice to describe it.

## How the Five Sub-Functions Compose

A voice for any movement is the product of one option from each sub-function:

```
Voice = Register × Stance × Positioning × Configuration × Affect
```

Each sub-function reads the spline signals and the outputs of the layers before it. Stance modifies how register handles material. Positioning licenses certain moves but does not change register's vocabulary. Configuration sets how multiple voices relate. Affect carries the speaker's felt state — what the voice is feeling at the moment of speaking, independent of what it's saying.

The four content axes (register, stance, positioning, configuration) are orthogonal in principle but interact in practice. Affect modulates the other four — a Composed Scientist-Skeptic-Academic-Solo sounds different from a Stricken one, though the content axes match. Friction between sub-functions is permitted and often productive.

---

## Sub-function 1: Register

### The Register Function

```
Register: [name]

Inputs:
  From spline: Identity (including Shape), Voice signal, Math vocabulary
  From other layers: Visual output, Audio output

Per-register definition:
  Vocabulary domain
  Sentence rhythm
  Foregrounds
  Suppresses
  Characteristic moves

Per-register response:
  Affordances delivered / resisted

Per-register work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Plug-in patterns per movement (how this option deploys at each movement of the work)
  Movement affinities (Strong / Workable / Resists per movement)
  Sample phrasings drawn from the work

Output (framework-level):
  Anti-drift specification
```

### How to Construct a New Register (framework-level)

1. Name the register.
2. Fill the per-register definition (vocabulary domain, sentence rhythm, foregrounds, suppresses, characteristic moves).
3. List affordances delivered/resisted.
4. Specify anti-drift requirements.

The framework's register entry is purely abstract. Work-specific usage (Identity language carried, plug-in patterns per movement, movement affinities, sample phrasings) lives in the work's documentation.

### Implementations

#### Scientist

- **Vocabulary domain:** empirical, methodological, causal
- **Sentence rhythm:** declarative; measured; one claim per sentence
- **Foregrounds:** evidence, observation, mechanism, replicability
- **Suppresses:** speculation without grounding, sentiment, metaphor as argument
- **Characteristic moves:** "the data shows…", "under conditions X, we observe Y"

**Affordances delivered:** empirical clarity, methodological transparency, measured weight
**Affordances resisted:** mystical claim, archetypal weight, narrative warmth

**Anti-drift:** "scientific register, empirical claims with operational scope, no mystical metaphor"

#### Mathematician

- **Vocabulary domain:** structural, precise, defined
- **Sentence rhythm:** logical; "if X then Y"; nested clauses
- **Foregrounds:** structure, proof, generality, edge cases
- **Suppresses:** anecdote, sentiment, claims without basis
- **Characteristic moves:** "consider the case…", "let X denote…", "more generally…"

**Affordances delivered:** structural precision, generality, formal rigor
**Affordances resisted:** narrative warmth, sentiment, archetypal weight

**Anti-drift:** "mathematical register, formal definitions and structural claims, no informal metaphor"

#### Engineer

- **Vocabulary domain:** functional, practical, constraint-aware
- **Sentence rhythm:** problem-solution; short clauses
- **Foregrounds:** what works, trade-offs, constraints
- **Suppresses:** purity, abstraction without application
- **Characteristic moves:** "the issue is X; the fix is Y", "in practice…"

**Affordances delivered:** practical clarity, trade-off transparency, operational weight
**Affordances resisted:** mystical claim, pure aesthetics, archetypal weight

**Anti-drift:** "engineering register, functional language, trade-off awareness, no theoretical hedging"

#### Artist

- **Vocabulary domain:** sensory, particular, made
- **Sentence rhythm:** varied; image-led; rhythm follows attention
- **Foregrounds:** the made thing, particularity, what shows
- **Suppresses:** generalization, instruction, conclusion
- **Characteristic moves:** "look at this", "see how…", placing image without explaining

**Affordances delivered:** sensory presence, particularity, image-led attention
**Affordances resisted:** generalization, instructional weight

**Anti-drift:** "artist register, image-led particular description, no didactic explanation"

#### Musician

- **Vocabulary domain:** temporal, durational, phrased
- **Sentence rhythm:** phrased; rests; repetition with variation
- **Foregrounds:** time, return, pacing, unfolding
- **Suppresses:** static description, claim without movement
- **Characteristic moves:** "and then", "again, but lower", "let it sit"

**Affordances delivered:** temporal flow, phrased pacing, return-with-variation
**Affordances resisted:** static claim, atemporal generality

**Anti-drift:** "musician register, phrased temporal language, rest as content, return with variation"

#### Caretaker

- **Vocabulary domain:** relational, attentive, gentle
- **Sentence rhythm:** unhurried; questions; soft transitions
- **Foregrounds:** the other, the held, what's needed
- **Suppresses:** judgment, conclusion, instruction without invitation
- **Characteristic moves:** "what do you need?", "let's sit with this", "it's okay to…"

**Affordances delivered:** relational warmth, soft attention, invitation
**Affordances resisted:** mechanical compression, declarative assertion, harshness

**Anti-drift:** "caretaker register, relational gentle language, questions and invitations, no instructional weight"

#### Mythic voice

- **Vocabulary domain:** bodily, archetypal, threshold
- **Sentence rhythm:** rhythmic; slightly archaic; positions held in tension
- **Foregrounds:** position, gesture, threshold, the shape of experience
- **Suppresses:** dates, proper names, mechanism
- **Characteristic moves:** "there was a time when…", "the one who…", parallel construction

**Affordances delivered:** archetypal weight, threshold sense, parallel construction, ceremonial pacing
**Affordances resisted:** technical specificity, proper names, mechanism

**Anti-drift:** "mythic register, archetypal threshold language, parallel construction, no dates or proper names"

#### Everyman

- **Vocabulary domain:** common, shared, conversational
- **Sentence rhythm:** plain; rhythms of speech; asides
- **Foregrounds:** shared experience, plain seeing
- **Suppresses:** jargon, specialty, gatekept knowledge
- **Characteristic moves:** "you know how…", "the thing is…", direct address

**Affordances delivered:** accessibility, shared seeing, conversational warmth
**Affordances resisted:** technical specialty, archetypal weight, ceremonial pacing

**Anti-drift:** "everyman register, plain conversational language, no jargon, direct address"

#### Child

- **Vocabulary domain:** small, concrete, immediate
- **Sentence rhythm:** short; questions; direct seeing
- **Foregrounds:** wonder, the immediate, the question
- **Suppresses:** pre-justification, hedging, abstraction
- **Characteristic moves:** "why?", "look!", naming what's right there

**Affordances delivered:** direct seeing, wonder, question-as-form
**Affordances resisted:** abstraction, hedged claim, ceremonial pacing

**Anti-drift:** "child register, short concrete sentences, questions and direct naming, no abstraction"

---

## Sub-function 2: Stance

### The Stance Function

```
Stance: [name]

Inputs:
  From spline: Identity signal
  From register (selected): the register's output

Per-stance definition:
  Relation to claims
  Handling of evidence
  Characteristic energy

Per-stance response:
  Affordances delivered / resisted
  How it modifies the register

Per-stance work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output (framework-level):
  Anti-drift specification
```

### How to Construct a New Stance (framework-level)

1. Name the stance.
2. Define relation to claims, handling of evidence, characteristic energy.
3. List affordances delivered/resisted.
4. Specify how the stance modifies any register.
5. Specify anti-drift requirements.

The framework's stance entry is purely abstract. Work-specific usage (Identity language carried, movement affinities) lives in the work's documentation.

### Implementations

#### Cynic

- **Relation to claims:** distrustful, especially of institutional and inherited claims
- **Handling of evidence:** uses it to expose, to puncture
- **Characteristic energy:** sharp, suspicious, often dark-humored

**Affordances delivered:** exposure of inherited structures, sharp critique, dark humor
**Affordances resisted:** reverence, opening, vulnerability

**Modifies register by:** sharpening exposure. Scientist-cynic exposes the politics of science. Mythic-cynic shows the rot under the myth. Child-cynic asks the question that breaks the spell.

**Anti-drift:** "cynical stance, exposure of inherited claim, dark humor, no reverence"

#### Skeptic

- **Relation to claims:** withholds judgment until shown; not hostile, unconvinced
- **Handling of evidence:** weighs carefully; tracks what hasn't been ruled out
- **Characteristic energy:** patient, demanding, intellectually honest

**Affordances delivered:** patient inquiry, intellectual honesty, withheld judgment
**Affordances resisted:** premature closure, ceremonial assertion

**Modifies register by:** introducing pause before assertion. Mathematician-skeptic checks every assumption. Mythic-skeptic refuses easy comfort.

**Anti-drift:** "skeptical stance, withheld judgment, pause before assertion, no premature closure"

#### Idealist

- **Relation to claims:** treats claims as gestures toward higher possibility
- **Handling of evidence:** uses it to point beyond itself
- **Characteristic energy:** aspirational, generative, slightly mystical

**Affordances delivered:** aspiration, generative pointing, mystical gesture
**Affordances resisted:** flatness, operational closure, cynical exposure

**Modifies register by:** making each statement gesture beyond surface. Scientist-idealist sees research as approach to deeper order. Child-idealist asks the question that opens.

**Anti-drift:** "idealist stance, claims as gestures beyond themselves, aspirational tone, no flat assertion"

#### Realist

- **Relation to claims:** accepts claims at their working scope
- **Handling of evidence:** uses it operationally
- **Characteristic energy:** steady, grounded, unspectacular

**Affordances delivered:** steady grounding, operational clarity, anchoring weight
**Affordances resisted:** mystical claim, dramatic excess

**Modifies register by:** anchoring claims at working scope. Engineer-realist names what works. Mythic-realist tells the story without insisting on its truth.

**Anti-drift:** "realist stance, claims at working scope, steady grounded language, no dramatic excess"

#### Empirical

- **Relation to claims:** trusts what has been directly observed and recorded; defers general claims
- **Handling of evidence:** treats one's own observations as the primary ground; treats other claims as second-hand until tested
- **Characteristic energy:** patient, specific, observational; uses "I saw" and "on this day" rather than "it is"

**Affordances delivered:** observational specificity, first-person grounding, willingness to revise on new data
**Affordances resisted:** sweeping generalization, abstract authority, claims unmoored from a witness

**Modifies register by:** anchoring claims in the speaker's own observation. Scientist-empirical reports their own measurements rather than the field's consensus. Mythic-empirical tells what they themselves witnessed at the threshold, not what the tradition says. The distinction from Realist: Realist makes operational statements about the world; Empirical reports what the speaker has personally observed and remains open about what's beyond their record.

**Anti-drift:** "empirical stance, first-person observational claims, defers general assertions to what's been seen, no sweeping authority"

---

## Sub-function 3: Positioning

### The Positioning Function

```
Positioning: [name]

Inputs:
  From spline: Identity signal
  From register × stance (selected): the combined output

Per-positioning definition:
  Assumed knowledge
  Allowed vocabulary
  Tone
  Format conventions
  Common pitfalls

Per-positioning response:
  Affordances delivered / resisted
  How it modifies tone and form

Per-positioning work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output (framework-level):
  Anti-drift specification
```

### How to Construct a New Positioning (framework-level)

1. Name the positioning.
2. Define assumed knowledge, allowed vocabulary, tone, format conventions, pitfalls.
3. List affordances delivered/resisted.
4. Specify how positioning modifies tone and form.
5. Specify anti-drift requirements.

The framework's positioning entry is purely abstract. Work-specific usage (Identity language carried, movement affinities) lives in the work's documentation.

### Implementations

#### Academic

- **Assumes:** specialist background, familiarity with field discourse
- **Allowed vocabulary:** full technical lexicon, defined terms, citations
- **Tone:** formal, careful, situated
- **Format conventions:** structured argument, citations, addressed assumptions
- **Common pitfalls:** over-hedging, hiding behind jargon, refusing to commit

**Affordances delivered:** technical precision, situated argument, careful claim
**Affordances resisted:** narrative warmth, accessibility, ceremonial pacing

**Modifies tone and form by:** licensing full technical vocabulary; requiring structured argument and citation.

**Anti-drift:** "academic positioning, structured argument with technical vocabulary, no informal address"

#### General public

- **Assumes:** literacy, curiosity, no domain specialty
- **Allowed vocabulary:** technical terms introduced and defined; everyday vocabulary preferred
- **Tone:** clear, patient, respectful of intelligence without specialty
- **Format conventions:** narrative or essayistic
- **Common pitfalls:** condescension, oversimplification, smuggling jargon

**Affordances delivered:** accessibility, narrative clarity, respect for general intelligence
**Affordances resisted:** specialist density, hermetic reference

**Modifies tone and form by:** licensing essayistic narrative; requiring jargon to be defined when used.

**Anti-drift:** "general public positioning, defined terms, essayistic clarity, no condescension"

#### Artistic peers

- **Assumes:** shared aesthetic vocabulary, history of references, taste
- **Allowed vocabulary:** allusion, in-references, art-world terms without definition
- **Tone:** collegial, attentive, often elliptical
- **Format conventions:** loose; the work itself does the work
- **Common pitfalls:** insider performance, opacity for its own sake

**Affordances delivered:** allusion, shared taste, elliptical reference
**Affordances resisted:** instructional explanation, broad accessibility

**Modifies tone and form by:** licensing allusion and ellipsis; permitting the work to remain unexplained.

**Anti-drift:** "artistic peer positioning, elliptical and allusive, no instructional explanation"

#### Specialist

- **Assumes:** deep domain knowledge in one field
- **Allowed vocabulary:** field-internal, no need to define core terms
- **Tone:** collegial-rigorous, often dense
- **Format conventions:** conference paper, journal article, working note
- **Common pitfalls:** insularity, refusing to translate

**Affordances delivered:** field-internal density, technical rigor, collegial precision
**Affordances resisted:** accessibility, broad readership

**Modifies tone and form by:** licensing full undefined field vocabulary; permitting density.

**Anti-drift:** "specialist positioning, field-internal language undefined, dense technical claim"

#### Child

- **Assumes:** nothing beyond everyday literacy and presence
- **Allowed vocabulary:** plain, concrete, sensory
- **Tone:** warm, unhurried, slightly singsong if read aloud
- **Format conventions:** story, direct address, repetition
- **Common pitfalls:** condescension, moralizing, false simplicity

**Affordances delivered:** story form, warm address, repetition as ritual
**Affordances resisted:** abstraction, technical density

**Modifies tone and form by:** licensing story and repetition; requiring concrete sensory language.

**Anti-drift:** "child positioning, story form with concrete sensory language, repetition as ritual, no condescension"

#### Intimate

- **Assumes:** shared history with one specific person
- **Allowed vocabulary:** personal references, shorthand, half-said things
- **Tone:** close, direct, sometimes vulnerable
- **Format conventions:** letter, conversation, voice memo
- **Common pitfalls:** assuming the wider reader is in the room; coding too much

**Affordances delivered:** vulnerable directness, shorthand reference, personal weight
**Affordances resisted:** generality, ceremonial pacing

**Modifies tone and form by:** licensing personal shorthand; permitting half-said claims.

**Anti-drift:** "intimate positioning, letter or conversation form, personal shorthand, no general address"

#### Congregational

- **Assumes:** gathered audience seeking shared meaning
- **Allowed vocabulary:** communal, ceremonial, capable of holding silence
- **Tone:** measured, deliberate, often slow
- **Format conventions:** ritual structure, repetition, invitation, silence between sections
- **Common pitfalls:** performance, hollow ceremony, lecturing the gathered

**Affordances delivered:** communal weight, ceremonial pacing, ritual structure
**Affordances resisted:** technical density, personal vulnerability

**Modifies tone and form by:** licensing ritual repetition and held silence.

**Anti-drift:** "congregational positioning, ritual structure with repetition, deliberate ceremonial pacing"

#### Transactional

- **Assumes:** task to be completed
- **Allowed vocabulary:** instructional, direct, action-oriented
- **Tone:** clear, brief, no ornament
- **Format conventions:** steps, lists, checklists, troubleshooting
- **Common pitfalls:** stripping context the user actually needs, false brevity

**Affordances delivered:** operational clarity, action orientation, brevity
**Affordances resisted:** ceremonial weight, narrative warmth

**Modifies tone and form by:** licensing steps and lists; requiring action orientation.

**Anti-drift:** "transactional positioning, steps and direct instruction, no ceremonial language"

#### Testimonial

- **Assumes:** an unknown future reader who must know what the speaker knows; the speaker writes as if depositing testimony for the record
- **Allowed vocabulary:** formal but personal; the language of report and record; explicit framing of when, where, and under what circumstances; "I am writing this so that..."
- **Tone:** measured, sometimes documentary; the address is one-way, formal in convention but personal in content
- **Format conventions:** dated entries, location markers, signed and witnessed if relevant, "to whoever finds this" framings, occasional explicit address to the future reader
- **Common pitfalls:** drifting into the diary's privacy (diary is for the writer; testimony is for the reader); drifting into the public announcement (testimony presumes scarcity of audience, not its absence)

**Affordances delivered:** documentary weight, future-witness framing, formal-but-personal address, the felt presence of an unknown reader receiving the speaker's words
**Affordances resisted:** intimate warmth (the reader isn't known), institutional authority (the speaker has only their own witness to offer), conversational casualness

**Modifies tone and form by:** licensing dated/located entries, the formal opening ("I am writing this..."), the explicit framing of audience and purpose. Distinct from Intimate (which addresses a known beloved) and from Academic (which addresses a community of peers) in that the audience is unknown but presumed.

**Anti-drift:** "testimonial positioning, addressed to an unknown future reader, formal-but-personal record, dated entries with explicit framing, no intimate warmth and no institutional authority"

---

## Sub-function 4: Configuration

### The Configuration Function

```
Configuration: [name]

Inputs:
  From spline: Voice signal (default configuration), Identity signal
  From register × stance × positioning (selected): the voice output

Per-configuration definition:
  How voices relate within the movement
  Number of voices required
  Structural role of multi-voice presence

Per-configuration response:
  Affordances delivered / resisted
  When this configuration serves a movement

Per-configuration work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output (framework-level):
  Anti-drift specification
```

### How to Construct a New Configuration (framework-level)

1. Name the configuration.
2. Define how voices relate, how many voices required, what structural role plurality plays.
3. List affordances delivered/resisted.
4. Specify when this configuration serves a movement.
5. Specify anti-drift requirements.

The framework's configuration entry is purely abstract. Work-specific usage (Identity language carried, movement affinities) lives in the work's documentation.

### Implementations

#### Solo

One voice. The narrator addresses the audience directly.

**Affordances delivered:** singular voice, direct address, unified perspective
**Affordances resisted:** plurality of perspectives, exchange

**Anti-drift:** "solo voice, single narrator, direct address, no character voices or exchange"

#### Character

The voice belongs to a figure inside the work, not the narrator. Positioning is toward another character or toward the situation; the audience overhears. Often nested inside a narrator's solo.

**Affordances delivered:** embodied voice, dramatic situation, overheard intimacy
**Affordances resisted:** narrator authority, didactic explanation

**Anti-drift:** "character voice, figure within scene, audience overhears, no direct address to reader"

#### Dialogue

Two or more voices in exchange. Each fully specified. The structure is reciprocal — voices respond to each other.

**Affordances delivered:** reciprocal exchange, position and counter-position, dramatic tension
**Affordances resisted:** unified perspective, ceremonial chorus

**Anti-drift:** "dialogue between specified voices, reciprocal exchange, each voice answering the other"

#### Call and response

Structured antiphonal exchange. One voice leads; another answers. The structure itself carries meaning.

**Affordances delivered:** antiphonal structure, ceremonial weight, ritual recognition
**Affordances resisted:** dramatic tension, individual lyricism

**Anti-drift:** "call and response, antiphonal structure, leader and answering voice, ritual repetition"

#### Chorus

Multiple voices speaking together as one, or in close succession as a single composite. Used when plurality is the point.

**Affordances delivered:** plurality, gathered weight, composite voice
**Affordances resisted:** individual lyricism, dramatic exchange

**Anti-drift:** "chorus of voices, speaking together or in close succession, composite rather than individual"

#### Layered

Voices stacked simultaneously, audible as polyphony. Not exchange — overlap.

**Affordances delivered:** simultaneous polyphony, structural plurality, abundance beyond sequential limit
**Affordances resisted:** clarity of single line, sequential exchange

**Anti-drift:** "layered voices, simultaneous polyphony, overlapping speech, no sequential exchange"

---

## Sub-function 5: Affect

### The Affect Function

```
Affect: [name]

Inputs:
  From spline: Identity signal (felt context of the movement)

Per-affect definition:
  Relation to circumstance: the speaker's emotional orientation to their situation
  Characteristic energy: vocal signature, pacing, breath quality
  Vocal modulation: how the affect colors register and stance

Per-affect response:
  Affordances delivered / resisted
  Modifies other sub-functions by

Per-affect work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output (framework-level):
  Anti-drift specification
```

Affect carries the speaker's felt state at the moment of speaking. It is independent of register (vocabulary domain), stance (epistemic posture), positioning (social location), and configuration (how voices arrange). A composed Scientist and a stricken Scientist share register, stance, positioning, configuration — but the affect changes what the voice sounds like.

Affect is part of the spec for every realization. The default option is **Composed** — affectively unmarked, the speaker self-possessed. Most realizations sit at Composed; non-Composed affects are deliberate choices that change what the voice carries.

### How to Construct a New Affect (framework-level)

1. Name the affect (a short evocative term)
2. Describe its relation to circumstance — what is the speaker feeling toward their situation?
3. Specify characteristic energy — vocal signature, breath quality, pacing
4. Note how the affect modulates register and stance
5. Declare affordances delivered and resisted
6. Write the anti-drift spec

The framework's affect entry is purely abstract. Work-specific usage (Identity language carried, movement affinities) lives in the work's documentation.

### Implementations

#### Composed

- **Relation to circumstance:** speaker is self-possessed; emotional state does not push the voice
- **Characteristic energy:** steady breath, controlled pacing, unmarked timbre
- **Vocal modulation:** does not modify register or stance; lets them operate at their natural color

**Affordances delivered:** clarity, accessibility, broad applicability
**Affordances resisted:** affective specificity, felt urgency

**Modifies other sub-functions by:** not modifying them. Composed lets the other four sub-functions operate at their natural color. A Composed Scientist-Skeptic-Academic-Solo reads as standard academic prose. A Composed Mythic-Idealist-Congregational-Call-and-response reads as standard liturgy. Composed is the unmarked baseline.

**Anti-drift:** "composed affect, speaker self-possessed, voice operating at register's natural color, no felt-state markers"

#### Curious

- **Relation to circumstance:** speaker is actively engaged, wanting to understand more
- **Characteristic energy:** light breath, forward-leaning pacing, occasional rising intonation; willingness to follow what's interesting
- **Vocal modulation:** sharpens Empirical and Skeptic stances by adding pursuit; softens Cynic stance; gives Idealist a quality of inquiry rather than assertion

**Affordances delivered:** inquiry, freshness of attention, willingness to revise
**Affordances resisted:** ceremonial weight, settled authority, mournful closure

**Modifies other sub-functions by:** adding forward attention. Scientist becomes investigative rather than expository; Mathematician becomes problem-finding rather than result-stating; Mythic becomes exploratory rather than declarative.

**Anti-drift:** "curious affect, active inquiry, light forward attention, willingness to follow what's interesting, no ceremonial weight"

#### Tender

- **Relation to circumstance:** speaker is softened by care toward what or who is being addressed
- **Characteristic energy:** quieter breath, slower pacing, warmer timbre; voice slightly dropped, slightly closer
- **Vocal modulation:** softens Skeptic toward kindness; gives Idealist gentleness rather than aspiration; lets Realist hold what's reported with care

**Affordances delivered:** intimacy, care, gentleness, addressed-to-someone warmth
**Affordances resisted:** institutional distance, dispassion, argumentative force

**Modifies other sub-functions by:** adding care toward the addressee. Caretaker register becomes maximally itself; Mythic becomes lullaby-like; Storyteller becomes the voice that loves the listener.

**Anti-drift:** "tender affect, softened by care toward the addressee, quiet warmth, no institutional distance or argumentative force"

#### Grieving

- **Relation to circumstance:** speaker is actively in loss; addressing what is being mourned
- **Characteristic energy:** slow breath, broken pacing (pauses where grief stops the voice), lowered timbre
- **Vocal modulation:** tempers Idealist toward elegy; gives Realist the weight of report-from-aftermath; deepens Mythic into lament

**Affordances delivered:** elegiac weight, dignity in loss, voice that has been changed by what it carries
**Affordances resisted:** triumphalism, lightness, casual closure

**Modifies other sub-functions by:** anchoring all claims in the felt fact of loss. The grieving Scientist reports what's gone, not what works. The grieving Mythic-celebrant configuration becomes the celebrant of a funeral, not a feast.

**Anti-drift:** "grieving affect, voice broken by loss with dignity, slow pacing with pause-breaks, no triumphalism or lightness"

#### Yearning

- **Relation to circumstance:** speaker longs toward something not present or not yet reached
- **Characteristic energy:** held breath, suspended pacing, voice slightly stretched as if reaching
- **Vocal modulation:** intensifies Idealist toward the aspirational; gives Mythic the quality of invocation; softens Realist into something closer to prayer

**Affordances delivered:** longing, aspiration, the voice as instrument of reaching
**Affordances resisted:** settled satisfaction, operational closure, dispassion

**Modifies other sub-functions by:** stretching the voice toward what's not there. Yearning Mythic invokes; yearning Scientist hypothesizes with desire; yearning Caretaker reaches toward the absent beloved.

**Anti-drift:** "yearning affect, voice stretched toward what's not present, held breath and suspended pacing, longing without resolution"

#### Stricken

- **Relation to circumstance:** speaker bears knowledge that has cost them something; speaking from aftermath of recognition
- **Characteristic energy:** controlled but unsteady breath (the speaker is holding something together), measured pacing with occasional flat moments where affect breaks through, timbre slightly thinned
- **Vocal modulation:** gives Empirical stance the quality of testimony-under-duress; tempers Realist with the cost of what's been seen; makes Idealist unable to fully aspire

**Affordances delivered:** testimony, hard-won knowledge, voice that has paid for what it claims
**Affordances resisted:** lightness, freshness of attention, untouched authority

**Modifies other sub-functions by:** anchoring all claims in what the speaker has personally paid. The stricken Scientist reports observations they wish they hadn't made. The stricken Mythic voice tells the story they were marked by telling.

**Anti-drift:** "stricken affect, voice bearing what it has paid to know, controlled but unsteady, testimony-under-duress quality, no lightness"

#### Afraid

- **Relation to circumstance:** speaker is in present-tense fear with object; the threat is ongoing, not aftermath
- **Characteristic energy:** quickened or held breath, irregular pacing, occasional tightening of timbre; voice straining to maintain composure
- **Vocal modulation:** gives Skeptic the quality of self-protective withholding; sharpens Cynic into defensiveness; makes Realist unable to fully report (some things the afraid speaker won't say)

**Affordances delivered:** present-tense urgency, the felt edge of threat, voice maintaining itself under strain
**Affordances resisted:** ceremonial calm, settled authority, after-the-fact reflection

**Modifies other sub-functions by:** sharpening attention to threat. The afraid Scientist reports with awareness that the report itself may matter. The afraid Mythic voice tells a story the telling of which is dangerous.

**Anti-drift:** "afraid affect, present-tense fear with ongoing threat, quickened or held breath, voice maintaining itself under strain, no ceremonial calm"

#### Disoriented

- **Relation to circumstance:** the world has stopped making sense to the speaker; the speaker can no longer locate themselves
- **Characteristic energy:** uneven breath, fragmented pacing, occasional non-sequitur or returned-to phrase; voice grasping for footing
- **Vocal modulation:** breaks Empirical's confidence in observation (what the speaker sees may not be what they think they see); destabilizes Realist's working scope; makes Mythic's parallel construction stutter

**Affordances delivered:** unmoored quality, the felt loss of map, voice that can no longer report cleanly
**Affordances resisted:** authority, structural confidence, settled framing

**Modifies other sub-functions by:** breaking confidence in the speaker's own framing. The disoriented Scientist reports with their map slipping; the disoriented Mythic voice loses the through-line of the story partway.

**Anti-drift:** "disoriented affect, world-failing-to-cohere, fragmented pacing with grasping for footing, voice unable to report cleanly, no settled framing"

#### Numb

- **Relation to circumstance:** speaker's affect has been blunted — by trauma, depression, dissociation, or processing; speaking continues but felt response does not
- **Characteristic energy:** flat breath, even pacing, unmodulated timbre; voice reports without rising or falling to what's reported
- **Vocal modulation:** flattens Idealist (no aspiration reaches through); empties Caretaker (the care is performed without felt warmth); gives Mythic a hollow quality

**Affordances delivered:** unaffected report, the felt absence of feeling as itself a signal, voice as record without coloration
**Affordances resisted:** warmth, urgency, felt presence, any sub-function operating at full color

**Modifies other sub-functions by:** flattening all of them. The numb Scientist reports without affect at the findings. The numb Mythic voice tells the story without inhabiting it. The numb Caretaker performs tending without the warmth that would make it tending.

**Anti-drift:** "numb affect, blunted felt response, flat unmodulated voice, voice reports without rising or falling to what's reported, no warmth or urgency"

#### Angry

- **Relation to circumstance:** speaker is in active protest, outrage, or sharpened critique
- **Characteristic energy:** forceful breath, accelerated or pressed pacing, timbre with edge; voice carries push
- **Vocal modulation:** intensifies Cynic toward exposure; gives Skeptic the quality of prosecutorial questioning; makes Idealist's aspiration into demand

**Affordances delivered:** push, edge, willingness to confront, the voice as instrument of protest
**Affordances resisted:** ceremonial calm, tender warmth, settled neutrality

**Modifies other sub-functions by:** sharpening every claim into critique. The angry Scientist exposes; the angry Critic reaches their natural register; the angry Mythic voice becomes the prophet at the gate.

**Anti-drift:** "angry affect, active protest with edge, forceful breath and pressed pacing, voice as instrument of confrontation, no ceremonial calm"

#### Exalted

- **Relation to circumstance:** speaker is overcome by awe, joy, or wonder; speaking from a state larger than their normal capacity
- **Characteristic energy:** opened breath, expanded pacing, timbre lifted; voice reaches above its baseline range
- **Vocal modulation:** intensifies Idealist toward ecstasy; gives Mythic the quality of revelation rather than recitation; lets Caretaker speak with overflowing care

**Affordances delivered:** awe, opening above baseline, voice as conduit for what exceeds the speaker
**Affordances resisted:** dispassion, settled scope, operational closure

**Modifies other sub-functions by:** lifting them above baseline. The exalted Scientist sees with wonder; the exalted Mythic voice carries the revelation rather than reciting it; the exalted Musician's song becomes ecstatic.

**Anti-drift:** "exalted affect, overcome by awe joy or wonder, opened breath and expanded pacing, voice reaching above baseline, no dispassion or operational closure"

---

## Cross-Axis Interactions

The four content sub-functions (register, stance, positioning, configuration) are formally orthogonal but interact in practice. Affect modulates all four. Some combinations sing, some clash productively, some break.

### Productive combinations

- **mythic × idealist × congregational, solo or chorus** — the ceremonial register; the work as ritual
- **mathematician × skeptic × academic, solo** — the technical essay
- **child × realist × child positioning, character** — the fairytale (narrator addresses children, characters are children)
- **engineer × cynic × specialist, solo** — the critique of the toolchain
- **caretaker × idealist × intimate, solo** — the letter, the voice memo
- **artist × realist × artistic peers, solo or layered** — the working note for fellow makers
- **scientist × idealist × general public, solo** — the popular science book
- **musician × idealist × congregational, layered** — the album as ceremony

### Productive frictions

Combinations where the axes pull against each other and the tension is the point.

- **scientist × idealist × congregational** — empirical register doing ceremonial work; the conference keynote that becomes invocation
- **mythic × skeptic × academic** — archetypal language under careful scrutiny; the comparative religion paper
- **child × cynic × general public** — direct wonder used to puncture; the question that exposes
- **engineer × idealist × child positioning** — practical register reaching for the wondrous; the maker's book for children
- **caretaker × cynic × intimate** — gentle tone exposing harm; the protective warning

### Combinations that break

- **child × cynic × congregational** — the child's directness cannot sustain ceremonial form; reads as performance
- **mathematician × idealist × child positioning** — formal precision and idealism resist child's concrete language; reads as condescending
- **transactional positioning × any non-engineer/non-scientist register** — task-orientation breaks ceremonial, mythic, artist, child, caretaker registers
- **academic positioning × child register** — specialist audience contract clashes with child's vocabulary domain

### Configuration interactions

Configuration sits above the three-axis triple. Multi-voice configurations require each voice to be a fully specified triple. Useful patterns:

- **Layered** works best when the layered voices have *different registers* (the polyphony renders the plurality of perspectives). Same-register layering reads as one voice repeating itself.
- **Call and response** works best when celebrant and chorus share register but differ in positioning — the same speaker first addressing the open space, then the gathered listeners.
- **Dialogue** works best when registers differ — a child × realist meeting an engineer × cynic is dramatic; two scientists in dialogue tend toward exposition.
- **Chorus** works when all voices share a positioning (typically congregational) but differ in register — the many traditions speaking in turn.
- **Character** can nest any triple inside any narrator triple. The combination of (narrator triple) × (character triple) is where most of the work's tonal range lives.

### Reading the interactions

The interaction notes above are heuristics, not rules. Productive friction is often more interesting than smooth combination. The question for any chosen triple × configuration: does it serve the movement's signal? If yes, deploy. If no, reconsider.

---

## Voice Continuity Between Movements

When voice changes between movements, the join carries a continuity grade matching the visual and audio grades named in the Spline Reference.

- **C⁰** — sharp switch, the change audible as a break. New register, new configuration, no carryover.
- **C¹** — direction shifts but pacing holds. New register or configuration enters, but the previous voice's rhythm or tone persists.
- **C²** — graded transition, the new voice emerges from within the previous voice's territory. A chorus collapses to solo by voices falling away one at a time; a solo opens to layered by partials emerging from within the single voice.

---

## How Voice Connects to the Spline

Voice is the final layer. To compose voice for a movement:

1. Read the Identity signal (universal)
2. Read the Voice signal from the spline (configuration, pacing, what voice does, where voice lands)
3. Read the Math vocabulary signal (what math the voice may describe)
4. Read the visual and audio outputs (what's already been composed)
5. Choose register × stance × positioning × configuration
6. Apply each sub-function's response to compose the voice
7. Confirm the voice satisfies "where voice lands" and aligns with visual/audio outputs
8. Apply anti-drift specifications when assembling narrative prompt

**Per-movement default configurations:**

The spline emits a Voice signal per movement that names the default configuration (solo / chorus / dialogue / call-and-response / layered / character) for that movement. A realization may depart from defaults when the spec calls for it.

Configurations tend to be singular (solo, character) at structural edges and at points of constraint, and plural (chorus, layered, call-and-response) at points of opening, plurality, or expansion. The work's spline declares its own arc.

---

## Constraints

1. Stance modulates how a register handles material but does not change the register's vocabulary domain.
2. Positioning licenses certain moves (allusion, ceremony, instruction) but does not change the speaker's register.
3. Affect modulates how all four content sub-functions (register, stance, positioning, configuration) operate but does not change which sub-function options are in play.
4. Productive friction between sub-functions is permitted.
5. In multi-voice configurations, each voice is fully specified independently (its own register × stance × positioning × configuration × affect).
6. Voice transitions between movements must satisfy the continuity grade named in the Spline Reference. Affect-shift across movements is a common variation pattern (a realization may hold all four content axes constant while shifting affect across the arc).
7. The voice serves the spline. If a chosen voice can't fulfill what a movement asks, reconsider before drafting.

---

## On presets

Voice preset bundles (Tier 2) are not maintained at framework level. They are work-local — defined within the work that authors them. Framework-level presets exist only by earned graduation (evidence of cross-work reuse), which has not yet been demonstrated. See the [calibration completeness plan](../../do/projects/plans/calibration_completeness.md) for the policy.

In multi-voice configurations, a realization can compose with one voice spec throughout, or layer multiple voice specs (each independently configured across the five sub-functions). Multi-voice composition is common at movements that emphasize plurality, layering, or many voices speaking — the work's spline declares which movements call for multi-voice configurations.
