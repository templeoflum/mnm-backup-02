# Script Reference

**Formal:**
```
Script : NarrativeOutput × ImagePrompts × AudioPrompts × TransitionContinuity × Identity → ScriptOutput
Script = RegisterClassification × VoiceCue × StageDirection × SensoryMarks × Timing × ModalityCoordination
```
A functor reading all upstream outputs (narrative, image prompts, audio prompts, transition continuity, Identity) and producing a performable script document; product type with six sum-typed sub-functions.

**Informal:** The Script is the final assembly layer. It reads all upstream outputs — narrative, image, audio, transition continuity — and produces a single performable document with voice, sensory, and timing cues integrated. Where the narrative is what someone *reads*, the script is what someone *performs from*.

Every realization can be scripted. The form of the script depends on the realization — a Sacred Ritual script reads as liturgy, a Technical Essay script reads as lecture, a Children's Book script reads as read-aloud. The Script Reference specifies the function and the realization-keyed staging conventions.

---

## The Script Function

```
Script: [movement N, realization R]

Inputs:
  From upstream layers:
    — Narrative output (the voice's content as readable text)
    — Image prompt (visual cues to be staged)
    — Audio prompt (sonic cues to be staged)
    — Voice spec (register × stance × positioning × configuration)
    — Character Reference output (voice attribution, gesture cues per character)
    — Object Reference output (stage direction subjects, production specifications)
    — Motif Reference output (recurring patterns to stage consistently)
    — Spline transition notes (timing at joins)

Per-script definition (composed from six sub-functions):
  Register classification — how narrative prose is partitioned into voiced and stage registers
  Voice cue style — how speaker is named and marked
  Stage direction style — how non-spoken action is rendered
  Sensory mark integration — how audio/visual cues sit with voice
  Timing notation — how silences, beats, breaths are specified
  Modality coordination — how visual, audio, voice cues are aligned

Per-script response:
  Staging conventions appropriate to the realization
  Pacing marks
  Performance affordances (what the performer needs to know)

Output:
  A performable document — voice content integrated with all sensory and timing scaffolding
```

### Construction guide

To compose a script for a movement:

1. Read narrative output (the voice content)
2. Read image prompt (extract visual cues to stage)
3. Read audio prompt (extract sonic cues to stage)
4. Read voice spec (determine voice cue style)
5. Read transition notes (determine timing at opening and close)
6. **Classify the narrative prose** into voiced register and stage register (apply Register classification sub-function)
7. Apply realization-keyed staging conventions (preset or custom) to render each register appropriately
8. Integrate: voice cues + stage directions + sensory marks + timing into a single document
9. Verify: the performer can produce the work from the script alone; verify that no third-person description of the performer is attributed to the performer as voiced speech

---

## Sub-Functions

### 1. Register classification

How narrative prose is partitioned into two registers before being staged. This is the universal first step of script generation. Every realization needs it; what varies is how each script preset's other sub-functions render the two registers, not the classification itself.

**The two registers:**

- **Voiced register:** prose that the performer utters to the audience. Marked by direct address, first-person plural ("we"), second-person ("you"), vocative phrasings, invocations, declarations, calls, recognitions, statements addressed to the gathering, questions to the audience.

- **Stage register:** prose that describes the work in third person. Marked by descriptions of what the performer does, what other voices do, what objects do, what the sound does, what visually happens. Meta-commentary about the work's state ("the chorus quieted," "the figure crossed the room and stopped," "the layered voices fall away one by one").

**The classification rule:**

> If the prose is what the performer says aloud to the audience, it is voiced register.
> If the prose describes the work in third person — naming what happens, what voices do, what objects do, what changes — it is stage register.

**Per-passage application:**

Read each prose passage as a unit (typically a paragraph; sometimes a single sentence). Ask:
- *Could this be said aloud, in voice, to the gathered audience without sounding strange?*
- *Is the speaker describing themselves or others in third person?*

The first question identifies voiced register. The second question, if answered yes, identifies stage register.

**Mixed passages:**

If a single passage contains both registers (e.g., a celebrant's speech that drifts into self-description), split the passage at the register boundary. The voiced sentences go to voice cue style sub-function; the stage sentences go to stage direction style sub-function. Mixed passages indicate either (a) the narrative needs revision upstream, or (b) the realization deliberately blurs the two and the script preset should render that blurring explicitly.

**What each register feeds into:**

- *Voiced register* → consumed by Voice cue style and (where the realization uses multiple voices) Voice attribution
- *Stage register* → consumed by Stage direction style and Sensory mark integration

**Implementations:**

- **Default classification:** apply the rule above to every passage; route to other sub-functions accordingly. Works for most realizations.

- **Single-register override:** some realizations have only one register active (Voice Memo: all voiced; pure narration script: all stage). The classifier confirms which mode is active and routes everything accordingly. Works for single-voice realizations where no staging exists.

- **Marked-source override:** if upstream Pass 8 has marked passages explicitly (e.g., quoted text = voiced, unquoted = stage), the classifier honors the marks. Works when narrative generation has been disambiguated upstream.

### 2. Voice cue style

How the speaker is named and marked when they enter, shift, or leave.

**Implementations:**

- **Named header:** the voice is identified in a labeled cue line above their text
  - "CELEBRANT:" / "CHORUS:" / "FIRST VOICE:"
  - Works for: liturgical scripts, formal performance, multi-voice configurations
  - Resists: intimate or solo modes (the explicit label breaks intimacy)

- **Italic inline action:** the voice's entry or shift is rendered as italicized stage direction
  - *(the celebrant enters, alone)*
  - Works for: solo voices, narrative-driven scripts, screen-based realizations
  - Resists: rapid call-and-response (the action italics slow the alternation)

- **Margin cue:** the voice is named in a margin column, parallel to the spoken text
  - CELEBRANT | The body opened.
  - Works for: print scripts, multi-voice layered configurations, scripts read alongside scores
  - Resists: simple flow reading

- **Mixed:** named header for major voice changes, italic action for minor shifts
  - Most flexible; default for complex realizations

### 3. Stage direction style

How non-spoken action — gestures, movement, sensory shifts — is rendered.

**Implementations:**

- **Parenthetical inline:** stage directions in parentheses within the text flow
  - The figure (bends down) sets the object on the ground.
  - Works for: narrative-leaning scripts, scripts read for pleasure
  - Resists: complex staging (too cluttered)

- **Italic blocked:** stage directions on their own lines, italicized, separate from voice text
  - *The figure bends down. The object is placed on the ground.*
  - CELEBRANT: The object remained.
  - Works for: formal scripts, liturgical scripts, scripts requiring clear separation of action and word
  - Resists: rapid integration (the line breaks slow the read)

- **Bracketed action:** stage directions in square brackets, can be inline or blocked
  - [Figure bends down. Rod placed on ground. Held beat.]
  - Works for: technical scripts, lecture scripts, AV scripts where action is also a cue to operators
  - Resists: lyrical staging

- **Capitalized cue:** action rendered in caps, sparingly used for major events
  - FIGURE BENDS. ROD IS PLACED. HELD.
  - Works for: dramatic moments only — overuse cheapens

### 4. Sensory mark integration

How audio and visual cues are positioned alongside voice content.

**Implementations:**

- **Inline cues:** audio/visual marks woven into the voice text or stage directions
  - *(the drone enters; the light shifts on the wall)* CELEBRANT: The figure stood still.
  - Works for: tightly coordinated multimodal performance
  - Resists: long sustained scenes (the inline marks crowd the line)

- **Cue column:** sensory marks in a parallel column to voice text (left or right margin)
  - AUDIO: drone enters | CELEBRANT: The figure stood still.
  - VISUAL: light shifts on the wall |
  - Works for: full production scripts with multiple operators
  - Resists: solo performer reading the script

- **Cue blocks:** sensory marks gathered into blocks at scene transitions
  - [AUDIO: drone enters, sustained] [VISUAL: light shifts on the wall]
  - CELEBRANT: The figure stood still.
  - Works for: clean staging boundaries; cinematic structure
  - Resists: continuous-cue scenes

- **Integrated narrative cues:** sensory information embedded in stage directions, not separately marked
  - *The drone is heard. The light shifts on the wall. The celebrant continues.*
  - Works for: literary scripts, reader-friendly scripts
  - Resists: production use (operators need cues marked)

### 5. Timing notation

How silences, beats, breaths, and durations are specified.

**Implementations:**

- **Named beat:** silences and pauses marked as labeled beats
  - (silence)
  - (held silence)
  - (long beat)
  - Works for: most scripts; standard
  - Default

- **Duration-marked silence:** silences with explicit time
  - (silence — five seconds)
  - (held silence — count to ten)
  - Works for: precise productions, recorded works
  - Resists: organic performance (the timing becomes mechanical)

- **Breath marks:** small caesuras marked with breath glyphs
  - The door opened. ⏑ The light entered. ⏑ Nothing was said.
  - Works for: chant, recited verse, breath-driven delivery
  - Resists: prose flow

- **Score-aligned bars:** silences and beats marked as bars or rests aligned with audio score
  - || 𝄽 || CELEBRANT: The figure waited...
  - Works for: scripts that exist alongside a notated audio score
  - Resists: scripts without parallel audio notation

### 6. Modality coordination

How visual, audio, and voice cues are aligned across the movement.

**Implementations:**

- **Sequential:** modalities introduced one at a time, with voice as primary
  - Voice carries the work; visual and audio cues appear at named moments
  - Works for: reading-leaning scripts, voice-centered performances
  - Resists: synesthetic or audiovisual realizations

- **Parallel:** modalities coordinated as parallel tracks across the script
  - Voice, audio, visual rendered as parallel columns or strands
  - Works for: complex production scripts, AV realizations
  - Resists: single-performer readings

- **Cued ensemble:** sensory cues called by a central conductor or performer who reads the master script
  - Stage directions specify exact moments of audio entry, visual change, voice shift
  - Works for: live ensemble performance
  - Resists: solo realizations

- **Integrated lyric:** modalities folded into a single flowing text where staging is implicit in language
  - "The drone arrives. The light passes through. The figure walks." reads as both narrative and cue
  - Works for: literary scripts, scripts published as readable works
  - Resists: production-tight performances

---

## On presets

Script preset bundles (Tier 2) are not maintained at framework level. They are work-local — defined within the work that authors them. Framework-level presets exist only by earned graduation (evidence of cross-work reuse), which has not yet been demonstrated. See the [calibration completeness plan](../../do/projects/plans/calibration_completeness.md) for the policy.

## What the Script Adds

A narrative read alone has voice and content but not staging. The reader extracts the work through prose.

A script makes staging explicit:

- **Voice attribution** — who speaks, when they enter, when they shift
- **Stage direction** — what the performer does, where they stand, where the audience attends
- **Sensory marks** — when sounds enter or leave, when visual cues appear, when the lighting changes
- **Timing notation** — how long the silence holds, where the breath falls, how the beat moves
- **Modality coordination** — how voice, audio, visual relate moment by moment

The script does not invent. It surfaces what was already implicit in the upstream layers. The narrative had voice content. The audio prompt had sonic cues. The image prompt had visual cues. The character reference specified voice attribution and gesture. The object reference specified stage direction subjects. The motif reference specified recurring patterns. The transition reference had timing at joins. The script integrates these into a document a performer can produce the work from.

---

## How Script Connects to the Kit

The Script Reference is the final assembly layer downstream of all others.

```
SPLINE
  ↓ emits signals per movement
  ↓
[Content layers compose in parallel: Math Visual + Math Audio + Characters + Objects + Motifs]
  ↓
[Surface layers: Medium, Visual World, Audio Aesthetic compose, reading content outputs]
  ↓
[Voice composes, reading all upstream]
  ↓
[Prompt Construction assembles triplet: image prompt + audio prompt + narrative prompt]
  ↓
[Narrative generated: Pass 6 substitution → Pass 7 outline → Pass 8 voice fill. Image and audio prompts have also undergone Pass 6/7 and serve the script as descriptive content.]
  ↓
[Image and audio prompts handed to external generators or remain as deliverable specs]
  ↓
SCRIPT: integrates narrative + image cues + audio cues + character cues + object cues
        + motif patterns + transition timing into a single performable document
        using realization-keyed staging conventions
  ↓
[PRESENTATION composes typography + color + rhythm + composition from
 realization preset and produces final readable document]
```

The Script is the work's most concrete output. It is what the performer or director uses. It is what the production runs from. It is the score of scores — the document that makes everything else operable.

A triplet without a script is a composition specification. A triplet with a script is a performable work.
