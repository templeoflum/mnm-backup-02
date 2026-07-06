# Audio Aesthetic Reference

**Formal:**
```
AudioAesthetic : Identity × AudioSignal × MathVocabulary → AudioOutput
AudioAesthetic = Tonality × Texture × Timbre × Rhythm × Pacing × Spatialization × Phrasing
```
A functor reading Identity, AudioSignal, and MathVocabulary from the spline; product type with seven sum-typed sub-functions.

**Informal:** The Audio Aesthetic layer specifies how a movement sounds. Composed of seven sub-functions: **tonality**, **texture**, **timbre**, **rhythm**, **pacing**, **spatialization**, **phrasing**. Each is its own constructable layer.

### Identity and Trajectory

The audio aesthetic, like every layer, has two parts:

- **Identity** — what the audio *is* aesthetically. The seven sub-functions and their chosen options (drone-based vs additive tonality, breath-based vs synthetic timbre, etc.) define identity. Identity is chosen at the realization level via preset or atomic spec; it holds across all movements within a realization unless explicitly varied.
- **Trajectory** — how the audio *moves through the work*. The arc of intensity across movements, the development of texture, the changes in pacing from movement to movement. Trajectory is derived from the math — specifically from the felt-quality function `f_n: [0, 1] → ℝ` (see [parameter_space.md](parameter_space.md)) and the mathematical content at home in each movement.

In a single audio output per movement, the audio aesthetic combines: Identity (the audio's character, constant across the realization) with Trajectory (what the audio does this movement, derived from f_n and from which math primitives are at home).

---

## Audio Aesthetic Layer Inputs

The Audio Aesthetic layer is composed by reading the spline's Audio signal and all upstream content layer outputs.

- **From spline:** Identity signal (including Shape: Approach × Within × Departure); Audio signal (tonality character, texture, rhythm, dynamic, spatial, opening/closing sound)
- **From content layers:** Math Audio output (the sonic primitives to render); Character Reference output (characters to render sonically when they speak or have signatures); Object Reference output (objects with sonic signatures); Motif Reference output (sonic motifs to instantiate)

Audio Aesthetic is the sonic surface specification. It composes from its seven sub-functions and reads all upstream content to determine what it must render.

## How the Seven Sub-Functions Compose

An audio aesthetic for any movement is the product of one option from each sub-function:

```
Audio Aesthetic = Tonality × Texture × Timbre × Rhythm × Pacing × Spatialization × Phrasing
```

Each sub-function reads the spline signals. Sub-functions interact — a tonality choice constrains timbre options, a rhythm choice constrains pacing — but no sub-function is downstream of another within the audio aesthetic.

---

## Sub-function 1: Tonality

### The Tonality Function

```
Tonality: [name]

Inputs:
  From spline: Identity (including Shape), Audio signal (tonality character), Math vocabulary
  From Math Audio (mutual)

Per-tonality definition:
  Pitch system
  Reference frequencies / tuning
  Harmonic behavior
  Resolution behavior

Per-tonality response:
  Affordances delivered / resisted

Per-tonality work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Math primitive rendering (sonic) — how this tonality renders specific math primitives within the work
  Movement affinities (Strong / Workable / Resists per movement)

Output:
  Anti-drift specification (what to name to prevent generic drift)
```

### How to Construct a New Tonality (framework-level)

1. Name the tonality.
2. Fill the per-tonality definition.
3. List affordances delivered/resisted.
4. Specify anti-drift requirements.

The framework's tonality entry is purely abstract. Work-specific usage (Identity language carried, math primitive rendering in this work, movement affinities) lives in the work's documentation.

### Implementations

#### Drone-based / unfixed

- **Pitch system:** open, no defined center; microtonal or just-intonation continuum
- **Reference:** no fixed root; sustained partials
- **Harmonic behavior:** held, slowly shifting; no functional progression
- **Resolution behavior:** none — resolution is foreign to this system

**Affordances delivered:** openness, atmospheric presence, continuity across movements
**Affordances resisted:** compression, defined tonal events

**Anti-drift:** specify "drone, no defined tonal center, microtonal or just-intonation continuum" — avoid "ambient" alone

#### Just intonation

- **Pitch system:** intervals as integer frequency ratios (3:2, 5:4, etc.)
- **Reference:** anchored fundamental; harmonics aligned exactly
- **Harmonic behavior:** consonant intervals lock; dissonance audible as beating
- **Resolution behavior:** tension and release through harmonic series alignment

**Affordances delivered:** harmonic clarity, reverent precision, plurality through co-existing roots
**Affordances resisted:** modulation across distant keys, chromatic excess

**Anti-drift:** specify "just intonation, integer frequency ratios, no equal-temperament" — avoid "tuning" alone

#### Equal temperament

- **Pitch system:** twelve equal divisions of the octave; logarithmic spacing
- **Reference:** anchored to A=440 (or other) via convention
- **Harmonic behavior:** all intervals slightly compromised; modulation possible to any key
- **Resolution behavior:** functional harmony; tension and release through standard progressions

**Affordances delivered:** compression, harmonic narrowing, conventional resolution, geometric precision
**Affordances resisted:** atmospheric openness, plurality of tonal systems

**Anti-drift:** specify "equal temperament, twelve-tone, functional harmony" — engines drift to generic pop/film harmony

#### Modal

- **Pitch system:** scale based on a mode (Dorian, Phrygian, Lydian, Mixolydian, etc.); fixed intervallic structure with rotated center
- **Reference:** modal center, not tonic in functional sense
- **Harmonic behavior:** static; no functional resolution; color defined by mode's signature intervals
- **Resolution behavior:** return to center, not resolution of tension

**Affordances delivered:** quiet gathering, reverence, harmonic stability without compression
**Affordances resisted:** dramatic tension, functional climax

**Anti-drift:** specify the specific mode ("Dorian," "Phrygian"); avoid "modal" alone — engines drift to vague exotic

#### Microtonal

- **Pitch system:** divisions finer than equal temperament — quarter tones, 19-EDO, 31-EDO, just intonation extended
- **Reference:** non-standard fundamentals
- **Harmonic behavior:** unfamiliar intervals; resists Western functional analysis
- **Resolution behavior:** novel — depends on the specific microtonal system

**Affordances delivered:** expansion past equal temperament, plurality of tonal systems, return to openness
**Affordances resisted:** conventional resolution, accessibility

**Anti-drift:** specify the system ("31-EDO," "quarter-tone," "extended just intonation"); avoid "microtonal" alone

#### Polytonal / multi-system

- **Pitch system:** multiple tonal systems coexisting without hierarchy
- **Reference:** each voice has its own fundamental
- **Harmonic behavior:** independent across voices; no shared resolution
- **Resolution behavior:** none, or per-voice

**Affordances delivered:** plurality, parallel settlements, refusal of hierarchy
**Affordances resisted:** singular resolution, compression

**Anti-drift:** specify the systems explicitly ("just intonation against equal temperament, plus modal voice")

---

## Sub-function 2: Texture

### The Texture Function

```
Texture: [name]

Inputs:
  From spline: Identity, Audio signal (texture)

Per-texture definition:
  Voice count
  Voice relationships
  Density behavior

Per-texture response:
  Affordances delivered / resisted

Per-texture work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output:
  Anti-drift specification
```

### Implementations

#### Monophonic / single voice

- **Voice count:** one
- **Voice relationships:** none (single line or single drone)
- **Density behavior:** sparse, undivided attention

**Anti-drift:** "single voice, no accompaniment, sustained or unaccompanied line"

#### Drone + figure

- **Voice count:** two functional layers (sustained ground + foreground)
- **Voice relationships:** figure moves against held ground
- **Density behavior:** ground constant, figure variable

**Anti-drift:** "sustained drone with single foreground voice"

#### Polyphonic / independent voices

- **Voice count:** multiple
- **Voice relationships:** independent — each voice with its own line
- **Density behavior:** layered, each voice equally present

**Anti-drift:** "polyphonic, independent voices, no voice subordinated"

#### Homophonic / unified mass

- **Voice count:** multiple, moving together
- **Voice relationships:** parallel — same rhythm, blocked harmony
- **Density behavior:** compressed mass

**Anti-drift:** "homophonic block harmony, voices moving in lockstep"

#### Heterophonic

- **Voice count:** multiple, same line with variation
- **Voice relationships:** simultaneous variations on a single melodic shape
- **Density behavior:** organic, slightly fluctuating

**Anti-drift:** "heterophonic, multiple voices on same line with simultaneous variation"

#### Stratified / layered drones

- **Voice count:** multiple sustained voices at different pitches
- **Voice relationships:** stacked, each voice held; harmony emerges from stack
- **Density behavior:** thick, slowly evolving

**Anti-drift:** "stratified drones, stacked sustained voices, no rhythmic activity"

---

## Sub-function 3: Timbre

### The Timbre Function

```
Timbre: [name]

Inputs:
  From spline: Identity, Audio signal

Per-timbre definition:
  Source character
  Spectral profile
  Attack / decay behavior

Per-timbre response:
  Affordances delivered / resisted

Per-timbre work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output:
  Anti-drift specification
```

### Implementations

#### Acoustic / breath-based

- **Source:** voice, wind instruments, sustained acoustic sources
- **Spectral profile:** rich harmonic series, organic micro-variation
- **Attack/decay:** soft attack, natural decay

**Anti-drift:** "acoustic, breath-based, voice or sustained wind instruments"

#### Acoustic / struck

- **Source:** percussion, plucked strings, bells
- **Spectral profile:** inharmonic partials, defined attack
- **Attack/decay:** sharp attack, defined decay

**Anti-drift:** specify instrument family ("bell," "struck wood," "plucked string"); avoid "percussion" alone

#### Acoustic / bowed

- **Source:** bowed strings, glass harmonica
- **Spectral profile:** sustained harmonic series, controllable
- **Attack/decay:** variable attack, sustained body

**Anti-drift:** specify instrument ("bowed cello," "bowed bass," "glass harmonica")

#### Acoustic / plucked

- **Source:** plucked strings — guitar, harp, lute, dulcimer, banjo, hammered dulcimer, autoharp
- **Spectral profile:** bright transient at attack, harmonic series decays over body
- **Attack/decay:** crisp attack, ringing decay; can sustain through repeated plucking or arpeggiation

**Anti-drift:** specify instrument ("fingerpicked guitar," "harp," "hammered dulcimer," "lute"); honor the plucked attack rather than smoothing it into sustained drone

#### Electronic / synthesized

- **Source:** oscillators, modular synthesis, FM, subtractive
- **Spectral profile:** designed; can mimic or exceed acoustic
- **Attack/decay:** fully controllable, often unnatural

**Anti-drift:** specify synthesis type ("modular synthesis," "FM synthesis," "analog oscillator") — avoid "synth" alone

#### Hybrid / processed acoustic

- **Source:** acoustic instruments processed digitally
- **Spectral profile:** acoustic body with electronic envelope or spectral shift
- **Attack/decay:** acoustic origin, electronic shaping

**Anti-drift:** specify processing ("granular processing," "spectral freeze," "convolution reverb on acoustic source")

#### Field recording / environmental

- **Source:** recorded acoustic environments
- **Spectral profile:** complex, layered, contextual
- **Attack/decay:** natural, contextual

**Anti-drift:** specify environment ("forest at dawn," "room tone," "wind through grass")

---

## Sub-function 4: Rhythm

### The Rhythm Function

```
Rhythm: [name]

Inputs:
  From spline: Identity, Audio signal (rhythm)

Per-rhythm definition:
  Pulse character
  Metric structure
  Subdivision behavior

Per-rhythm response:
  Affordances delivered / resisted

Per-rhythm work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output:
  Anti-drift specification
```

### Implementations

#### Unmetered / breath-driven

- **Pulse:** none; events arrive when they arrive
- **Metric structure:** absent
- **Subdivision:** N/A

**Anti-drift:** "no pulse, breath-driven, events when they arrive"

#### Single pulse / metronomic

- **Pulse:** steady, defined
- **Metric structure:** simple meter
- **Subdivision:** clean, regular

**Anti-drift:** "metronomic pulse, regular subdivision, no rhythmic variation"

#### Polyrhythm

- **Pulse:** multiple simultaneous pulses at different rates
- **Metric structure:** several meters coexisting
- **Subdivision:** complex, cross-rhythmic

**Anti-drift:** specify ratios ("3 against 4," "5 against 7"); avoid "polyrhythm" alone

#### Pulse with drone

- **Pulse:** defined, against sustained ground
- **Metric structure:** simple meter for figure, no meter for ground
- **Subdivision:** clear

**Anti-drift:** "single pulse against sustained drone, rhythmic figure with non-metric ground"

#### Arhythmic / event-based

- **Pulse:** absent or hidden
- **Metric structure:** none
- **Subdivision:** N/A; events sparse and unscheduled

**Anti-drift:** "arhythmic, sparse events, no implied pulse"

---

## Sub-function 5: Pacing

### The Pacing Function

```
Pacing: [name]

Inputs:
  From spline: Identity, Audio signal (rhythm + opening/closing sound)

Per-pacing definition:
  Event density per minute
  Temporal arc
  Build behavior

Per-pacing response:
  Affordances delivered / resisted

Per-pacing work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output:
  Anti-drift specification
```

### Implementations

#### Stillness / suspended

- **Event density:** very low (events per minute or less)
- **Temporal arc:** flat — sustained without movement
- **Build:** none

**Anti-drift:** "sustained, no temporal arc, events sparse"

#### Slow unfolding

- **Event density:** low to moderate
- **Temporal arc:** gradual development
- **Build:** patient, audible only across long spans

**Anti-drift:** "slow unfolding, gradual development across the movement"

#### Measured / processional

- **Event density:** moderate, regular
- **Temporal arc:** steady, deliberate
- **Build:** linear, controlled

**Anti-drift:** "processional, measured, deliberate forward motion"

#### Compression / tightening

- **Event density:** increasing
- **Temporal arc:** narrowing — events crowding closer
- **Build:** toward density, not climax

**Anti-drift:** "compressing, tightening, increasing density"

#### Expansion / opening

- **Event density:** decreasing or spreading
- **Temporal arc:** widening — events scattering further
- **Build:** toward openness

**Anti-drift:** "expanding, opening, spreading across spatial and temporal field"

---

## Sub-function 6: Spatialization

### The Spatialization Function

```
Spatialization: [name]

Inputs:
  From spline: Identity, Audio signal (spatial)

Per-spatialization definition:
  Channel format
  Position behavior
  Movement behavior

Per-spatialization response:
  Affordances delivered / resisted

Per-spatialization work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output:
  Anti-drift specification
```

### Implementations

#### Mono / undifferentiated

- **Channel format:** single channel
- **Position behavior:** centered, no spatial cue
- **Movement:** none

**Anti-drift:** "mono, single channel, no spatial differentiation"

#### Stereo / wide

- **Channel format:** two channels
- **Position behavior:** left-right placement
- **Movement:** linear panning possible

**Anti-drift:** "stereo, wide field, defined left-right placement"

#### Ambient / room-defined

- **Channel format:** stereo with strong reverb, or surround
- **Position behavior:** sources placed in modeled acoustic space
- **Movement:** subtle, ambient

**Anti-drift:** specify the room ("cathedral reverb," "forest ambience," "small room")

#### Distributed / multi-point

- **Channel format:** surround, multichannel
- **Position behavior:** sources placed at multiple defined points around listener
- **Movement:** between defined positions

**Anti-drift:** specify channel layout ("5.1 surround," "8-channel ambisonic")

#### Ambisonic / immersive

- **Channel format:** full ambisonic or binaural
- **Position behavior:** any position on sphere
- **Movement:** continuous, three-dimensional

**Anti-drift:** "ambisonic, full-sphere immersion, continuous spatial movement"

---

## Sub-function 7: Phrasing

### The Phrasing Function

```
Phrasing: [name]

Inputs:
  From spline: Identity, Audio signal, Voice signal (pacing, where voice lands — phrasing aligns with voice)

Per-phrasing definition:
  Phrase length
  Phrase shape
  Phrase relationship behavior

Per-phrasing response:
  Affordances delivered / resisted

Per-phrasing work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output:
  Anti-drift specification
```

### Implementations

#### Open / unphrased

- **Phrase length:** undefined or very long
- **Phrase shape:** sustained, no arc
- **Relationship:** no phrase structure

**Anti-drift:** "unphrased, sustained, no arc"

#### Symmetrical / balanced

- **Phrase length:** regular (4-bar, 8-bar equivalents)
- **Phrase shape:** balanced antecedent-consequent
- **Relationship:** call-and-answer

**Anti-drift:** "symmetrical phrases, balanced antecedent and consequent"

#### Asymmetrical / irregular

- **Phrase length:** uneven
- **Phrase shape:** unpredictable
- **Relationship:** non-balanced

**Anti-drift:** "asymmetrical phrases, uneven lengths, non-balanced"

#### Cellular / motif-based

- **Phrase length:** short cells (motifs)
- **Phrase shape:** repeated with variation
- **Relationship:** accumulation, transformation

**Anti-drift:** "motif-based, short cells, repetition with variation"

#### Through-composed

- **Phrase length:** continuous, no repetition
- **Phrase shape:** ongoing development
- **Relationship:** linear unfolding

**Anti-drift:** "through-composed, no repetition, continuous development"

#### Strophic / verse-refrain

- **Phrase length:** symmetrical verse units, optionally with returning refrain
- **Phrase shape:** repeated melodic shape with new text per verse; refrain repeats both melody and text
- **Relationship:** song-form — the same shape carries different content; meaning accumulates across verses

**Anti-drift:** "strophic verse-refrain form, repeated melodic shape across verses, returning refrain, song-form symmetry"

---

## How Audio Aesthetic Connects to the Spline

The spline emits Identity and Audio signals per movement. Math Audio emits rendered sonic primitives upstream. The Audio Aesthetic layer reads all of these and renders the audio surface.

To compose audio aesthetic for a movement:
1. Read the Identity signal (universal context)
2. Read the Audio signal (tonality character, texture, rhythm, dynamic, spatial, opening/closing sound)
3. Read Math Audio output (which primitives appear and at what density)
4. Choose one option from each sub-function (tonality, texture, timbre, rhythm, pacing, spatialization, phrasing)
5. Confirm choices align — sub-functions interact
6. Render the math primitives in this aesthetic's sonic vocabulary
7. Apply anti-drift specifications when assembling the audio prompt

### Audio aesthetic changes between movements

Sub-function choices can change between movements. Each shift contributes to the felt continuity grade of the join. The spline's transition notes name the required continuity grade.

- **Same choices across the join:** continuity easy at any grade
- **Single sub-function shift (tonality changes, others hold):** typically C¹ — direction changes but pacing holds
- **Multiple sub-function shifts:** approaches C⁰ unless deliberately bridged
- **For C² (graded transition):** the new sonic state must emerge from within the previous — shared element (drone, primitive, phrase shape) bridges the join

---

## On presets

Audio aesthetic preset bundles (Tier 2) are not maintained at framework level. They are work-local — defined within the work that authors them. Framework-level presets exist only by earned graduation (evidence of cross-work reuse), which has not yet been demonstrated. See the [calibration completeness plan](../../do/projects/plans/calibration_completeness.md) for the policy.
