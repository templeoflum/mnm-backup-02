# Visual World Reference

**Formal:**
```
VisualWorld : Identity × VisualSignal × AudioSurface → VisualWorldOutput
VisualWorld = Palette × Light × Line × Figure × Atmosphere
```
A functor reading Identity and VisualSignal from the spline plus AudioSurface from upstream; product type with five sum-typed sub-functions.

**Informal:** The Visual World layer defines the *register of imagery* — distinct from medium (the material it's made of). Composed of five sub-functions: **palette**, **light**, **line**, **figure**, **atmosphere**. Each is its own constructable layer.

### Identity and Trajectory

The visual world, like every layer, has two parts:

- **Identity** — what the visual world *is* aesthetically. The five sub-functions and their chosen options (warm earth muted palette, ambient illustrative light, etc.) define identity. Chosen at the realization level; holds across the realization.
- **Trajectory** — how imagery *develops across movements*. The arc of what the figure is doing, what the light is doing, how atmosphere shifts movement to movement, derived from the felt-quality function `f_n` and from the math at home in each movement.

The visual world reads the audio surface as upstream context: sound is the temporal substrate within which the spatial moment occurs, so the visual world composes the spatial moment in relation to the sonic ground that's already been established.

---

## Visual World Layer Inputs

The Visual World layer is composed by reading the spline's Visual signal, all upstream content layer outputs, and the audio surface output (which composes first as temporal substrate).

- **From spline:** Identity signal (including Shape: Approach × Within × Departure); Visual signal (required affordances, gesture, opening/closing image)
- **From content layers:** Math Visual output (the primitives to render); Character Reference output (characters to render); Object Reference output (objects to render); Motif Reference output (motifs to instantiate)
- **From audio surface:** Audio Aesthetic output (the temporal substrate within which this spatial moment occurs — tonality, pacing, atmosphere of sound that informs visual atmosphere)
- **Mutual with:** Medium Reference (within visual domain)

Visual World is the register specification of how imagery operates. It composes from its five sub-functions and reads all upstream content + audio surface to determine what it must render.

## How the Five Sub-Functions Compose

A visual world for any movement is the product of one option from each sub-function:

```
Visual World = Palette × Light × Line × Figure × Atmosphere
```

Sub-functions interact — a palette choice constrains light options, an atmosphere choice influences figure treatment — but no sub-function is downstream of another within the visual world layer.

Named world bundles (presets) compose these sub-functions into common configurations. Presets are work-local — defined within the work that authors them. See [`on presets`](#on-presets) at the end of this reference.

---

## Sub-function 1: Palette

### The Palette Function

```
Palette: [name]

Inputs:
  From spline: Identity (including Shape), Visual signal

Per-palette definition:
  Hue range
  Saturation behavior
  Tonal range
  Signature colors

Per-palette response:
  Affordances delivered / resisted

Per-palette work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output:
  Anti-drift specification
```

### How to Construct a New Palette (framework-level)

1. Name the palette.
2. Define hue range, saturation, tonal range, signature colors.
3. List affordances delivered/resisted.
4. Specify anti-drift requirements.

The framework's palette entry is purely abstract. Work-specific usage (Identity language carried, movement affinities) lives in the work's documentation.

### Implementations

#### Earth and gold

- **Hue range:** ochre, umber, sienna, ultramarine, gold leaf, lead white
- **Saturation:** muted but rich; saturated only in gold accents
- **Tonal range:** mid to dark; gold catches light
- **Signature colors:** gold leaf, deep blue, terracotta

**Affordances delivered:** reverence, weight, ceremonial presence
**Affordances resisted:** chromatic excess, casualness

**Anti-drift:** "earth tones with gold leaf, lead white highlights, deep ultramarine accents"

#### Warm earth muted

- **Hue range:** warm earth, muted blue, paper cream
- **Saturation:** low to moderate; soft
- **Tonal range:** light to mid
- **Signature colors:** cream paper-ground, soft umber, dusty blue

**Affordances delivered:** warmth, narrative comfort, openness
**Affordances resisted:** weight, geometric coldness

**Anti-drift:** "warm muted earth tones, cream paper ground, soft saturation"

#### Restricted technical

- **Hue range:** typically black on white, or color-coded (red, green, blue convention)
- **Saturation:** binary or full-saturated primaries
- **Tonal range:** binary or stepped
- **Signature colors:** convention-driven — red x-axis, green y-axis, blue z-axis

**Affordances delivered:** geometric precision, legibility, mathematical convention
**Affordances resisted:** atmosphere, sentiment

**Anti-drift:** "color-coded axes (red, green, blue), restricted palette, technical convention"

#### Naturalistic muted

- **Hue range:** full natural spectrum but desaturated
- **Saturation:** low; uncanny in its restraint
- **Tonal range:** mid; even lighting
- **Signature colors:** dusty sky, muted flesh, faded earth

**Affordances delivered:** conceptual dislocation, painterly realism, quiet uncanniness
**Affordances resisted:** warmth, dramatic chromatic excess

**Anti-drift:** "muted naturalistic palette, desaturated full spectrum, even tonal range"

#### Chromatic excess / prismatic

- **Hue range:** beyond standard gamut; chromatic aberration (cyan, magenta, yellow fringes)
- **Saturation:** specular peaks, prismatic refraction
- **Tonal range:** HDR — deep black to specular white
- **Signature colors:** chrome silver, prismatic accents, deep black

**Affordances delivered:** synesthesia, chromatic excess, abundance beyond restraint
**Affordances resisted:** restraint, warmth, handmade quality

**Anti-drift:** "chromatic aberration, prismatic refraction, deep black with specular highlights"

#### Royal ornate

- **Hue range:** royal blue, gold, blood red, decaying ivory
- **Saturation:** high in jewels and metal; muted in shadow
- **Tonal range:** dramatic — deep shadow against gilded light
- **Signature colors:** royal blue, gilt gold, blood red

**Affordances delivered:** weight, theatrical excess, spectacle critique
**Affordances resisted:** openness, lightness, quietness

**Anti-drift:** "royal blue and gold palette, blood red accents, dramatic gilded contrast"

#### Body and starlight

- **Hue range:** deep black, warm gold, body-tone
- **Saturation:** low — small saturated points against dark
- **Tonal range:** mostly dark; small bright accents
- **Signature colors:** body warmth, scattered gold, deep black

**Affordances delivered:** intimate sacred, reverence, sparse sacred presence
**Affordances resisted:** geometric precision, ornament

**Anti-drift:** "deep black with warm gold accents, scattered points of light, body-tone warmth"

#### High contrast political

- **Hue range:** desaturated then punched with one saturated color (often red)
- **Saturation:** binary — high contrast
- **Tonal range:** binary — black and white with single accent
- **Signature colors:** black, white, blood red, occasional gold

**Affordances delivered:** weight, political clarity, witness
**Affordances resisted:** sentimentality, ornament

**Anti-drift:** "high contrast desaturated palette with single saturated red accent"

#### Earth and black

- **Hue range:** umber, deep brown, slate, bone, restrained gold; bone-white or near-black ground rather than parchment cream
- **Saturation:** muted; gold present but restrained (deeper, less light-catching than Earth and gold)
- **Tonal range:** wide — bone whites against near-blacks; mid tones used sparingly
- **Signature colors:** slate, charcoal, bone, deep restrained gold, occasional dried-blood red

**Affordances delivered:** elegiac weight, witnessed loss, dignity in restraint
**Affordances resisted:** sentimentality, ornament, light-catching brightness, ceremonial cheer

**Anti-drift:** "earth tones tilted toward black and bone, restrained dark gold accents, dignified mourning palette, no light-catching brightness"

#### Off-natural / sickly

- **Hue range:** naturalistic base shifted slightly wrong — greens pushed toward jaundiced yellow-green, blues pushed toward cold grey-blue, ochres going toward sallow, whites tinged faintly green or grey
- **Saturation:** muted to mid; nothing quite saturated, nothing quite dead — sits at a wrongness threshold
- **Tonal range:** mid; flat without being dark; the world looks lit but not by anything reassuring
- **Signature colors:** jaundiced green, cold grey-blue, sallow ochre, dirty bone, occasional rust

**Affordances delivered:** subliminal wrongness, the naturalistic-gone-wrong quality, dread without gore
**Affordances resisted:** sacred warmth, decorative beauty, reassurance, dramatic horror gestures

**Anti-drift:** "off-natural palette, jaundiced greens and cold grey-blues, naturalistic colors shifted toward sallow wrongness, no dramatic horror saturation, no sacred warmth"

---

## Sub-function 2: Light

### The Light Function

```
Light: [name]

Inputs:
  From spline: Identity (including Shape), Visual signal

Per-light definition:
  Source character
  Direction behavior
  Quality (hard, soft, ambient)

Per-light response:
  Affordances delivered / resisted

Per-light work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output:
  Anti-drift specification
```

### Implementations

#### Painted-from-within

- **Source:** within forms; figures glow
- **Direction:** none consistent; sacred light has no physical source
- **Quality:** soft, modeling, even

**Affordances delivered:** reverence, weight without harshness, inner glow
**Affordances resisted:** photographic realism, dramatic contrast

**Anti-drift:** "painted-from-within light, no external source, soft modeling, inner glow"

#### Ambient illustrative

- **Source:** diffuse, no defined point
- **Direction:** soft, omnidirectional
- **Quality:** even, no hard shadows

**Affordances delivered:** atmospheric presence, narrative warmth
**Affordances resisted:** drama, geometric precision

**Anti-drift:** "ambient illustrative light, soft and diffuse, no defined source, no hard shadows"

#### Flat / absent

- **Source:** none; structure carries the image
- **Direction:** N/A
- **Quality:** even or absent

**Affordances delivered:** geometric clarity, mathematical legibility
**Affordances resisted:** atmosphere, depth

**Anti-drift:** "flat lighting, no defined source, structure as subject"

#### Even with shadow

- **Source:** undefined but consistent
- **Direction:** none apparent; yet shadows cast
- **Quality:** even, with strong shadows that have no clear cause

**Affordances delivered:** conceptual dislocation, quiet wrongness
**Affordances resisted:** warmth, dramatic narrative

**Anti-drift:** "even light with strong shadows, no obvious source, painterly realism"

#### Specular / prismatic

- **Source:** physical light simulation; surfaces reflect accurately
- **Direction:** controllable, often without apparent source
- **Quality:** specular highlights, prismatic refraction at edges

**Affordances delivered:** synesthesia, chromatic excess, clean release
**Affordances resisted:** handmade warmth

**Anti-drift:** "specular highlights, prismatic refraction, ray-traced reflections, no apparent source"

#### Theatrical chiaroscuro

- **Source:** dramatic, often from above or behind
- **Direction:** strong directional
- **Quality:** hard contrast, deep shadows, gilded highlights

**Affordances delivered:** drama, weight, ceremony
**Affordances resisted:** openness, quietness

**Anti-drift:** "dramatic chiaroscuro, strong directional light, deep shadows, gilded highlights"

#### Low ambient with sources

- **Source:** body or held object as small light
- **Direction:** localized, intimate
- **Quality:** warm, low, gentle

**Affordances delivered:** intimacy, reverence, contemplative presence
**Affordances resisted:** drama, geometric precision

**Anti-drift:** "low ambient warm light, body as light source, intimate scale"

#### Stark journalistic

- **Source:** harsh, single direction
- **Direction:** strong, often overhead or sidelit
- **Quality:** hard shadows, no softening

**Affordances delivered:** weight, political clarity, witness
**Affordances resisted:** atmosphere, warmth

**Anti-drift:** "stark journalistic light, harsh shadows, no softening, documentary directness"

#### Pall / wrong daylight

- **Source:** diffuse, sourceless or indistinctly natural; like overcast that doesn't quite explain itself
- **Direction:** flat, omnidirectional but somehow lacking; lights things without modeling them properly
- **Quality:** even but uncomforting; the world looks lit but the light doesn't reach into the depth the way it should; shadows are present but shallow

**Affordances delivered:** subliminal wrongness of illumination, "the camera that doesn't blink" quality, the felt presence of light without reassurance
**Affordances resisted:** sacred warmth, theatrical drama, narrative coziness, any sense that the light is on the speaker's side

**Anti-drift:** "pall daylight, sourceless diffuse light that doesn't model properly, evenly lit but uncomforting, world visible but not reassured, no theatrical shadow and no sacred warmth"

---

## Sub-function 3: Line

### The Line Function

```
Line: [name]

Inputs:
  From spline: Identity, Visual signal, Math vocabulary

Per-line definition:
  Weight behavior
  Character
  Authority (precise, expressive, absent)

Per-line response:
  Affordances delivered / resisted

Per-line work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output:
  Anti-drift specification
```

### Implementations

#### Classical contour

- **Weight:** consistent, deliberate
- **Character:** careful, considered
- **Authority:** confident, traditional

**Affordances delivered:** reverence, classical form, geometric structure
**Affordances resisted:** spontaneity, casualness

**Anti-drift:** "classical contour drawing, deliberate consistent line weight"

#### Expressive loose

- **Weight:** variable, gestural
- **Character:** slightly loose, character-driven
- **Authority:** confident but informal

**Affordances delivered:** narrative warmth, gentle distortion, character
**Affordances resisted:** technical precision

**Anti-drift:** "expressive loose linework, visible pen or pencil under wash, slightly gestural"

#### Precise technical

- **Weight:** mathematically uniform or convention-driven
- **Character:** drafted, deliberate
- **Authority:** technical, instructional

**Affordances delivered:** geometric precision, mathematical convention, clarity
**Affordances resisted:** atmosphere, sentiment

**Anti-drift:** "precise technical line, uniform weight or convention-driven variation"

#### Painted realism / no visible line

- **Weight:** absent; form defined by color and edge
- **Character:** painterly, no contour
- **Authority:** observational

**Affordances delivered:** painterly realism, conceptual dislocation
**Affordances resisted:** structural diagram, schematic clarity

**Anti-drift:** "no visible line, form defined by color and edge, painterly realism"

#### Smooth rendered

- **Weight:** none; edges anti-aliased
- **Character:** mathematically smooth
- **Authority:** parametric

**Affordances delivered:** geometric precision, synesthesia, clean release
**Affordances resisted:** handmade variation

**Anti-drift:** "smooth anti-aliased rendering, no visible line work"

#### Ornate baroque

- **Weight:** variable, decoratively elaborated
- **Character:** abundant, ornamental
- **Authority:** ceremonial

**Affordances delivered:** spectacle, weight, theatrical excess
**Affordances resisted:** restraint, modernity

**Anti-drift:** "ornate baroque line, abundant decorative elaboration, ceremonial detail"

#### Graphic woodcut

- **Weight:** bold, high-contrast
- **Character:** carved, hard
- **Authority:** political poster

**Affordances delivered:** weight, political clarity, graphic directness
**Affordances resisted:** atmosphere, subtlety

**Anti-drift:** "graphic woodcut line, bold high-contrast, carved hard edges"

#### Soft / stippled

- **Weight:** broken into points or hatching
- **Character:** atmospheric, granular
- **Authority:** observational

**Affordances delivered:** atmospheric presence, reverence, granular texture
**Affordances resisted:** sharp legibility

**Anti-drift:** "soft stippled line, painterly granular texture, photographic blur"

---

## Sub-function 4: Figure

### The Figure Function

```
Figure: [name]

Inputs:
  From spline: Identity (including the work's character continuity across movements), Visual signal

Per-figure definition:
  Form character
  Posture conventions
  Relationship to space

Per-figure response:
  Affordances delivered / resisted

Per-figure work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output:
  Anti-drift specification
```

### Implementations

#### Classical idealized

- **Form:** human, idealized proportions
- **Posture:** ceremonial, hieratic
- **Relationship to space:** centered, frontal or three-quarter, draped

**Affordances delivered:** reverence, ceremony, traditional weight
**Affordances resisted:** casualness, modernity

**Anti-drift:** "classical idealized figure, hieratic composition, draped robes"

#### Stylized narrative

- **Form:** stylized with gentle distortion, expressive
- **Posture:** narrative, character-driven
- **Relationship to space:** small figures in wider landscapes

**Affordances delivered:** narrative warmth, character, approachability
**Affordances resisted:** weight, ceremony

**Anti-drift:** "stylized expressive figure, gentle distortion, small in wider landscape"

#### Absent or schematic

- **Form:** none, or simple outline
- **Posture:** N/A
- **Relationship to space:** the geometry is the subject

**Affordances delivered:** structural clarity, mathematical convention
**Affordances resisted:** emotional weight, narrative

**Anti-drift:** "no figure, or schematic outline only, geometry as subject"

#### Dislocated isolated

- **Form:** rendered realistically but presented without context
- **Posture:** still, displaced
- **Relationship to space:** vast empty grounds; impossible juxtapositions

**Affordances delivered:** conceptual dislocation, philosophical weight, isolation
**Affordances resisted:** narrative warmth, collective presence

**Anti-drift:** "dislocated isolated figure, vast empty ground, impossible juxtaposition"

#### Liquid metal / chrome body

- **Form:** anatomically clean, reflective, light-bearing
- **Posture:** often back or three-quarter view; body as medium for light
- **Relationship to space:** prismatic floor; body reflecting field

**Affordances delivered:** synesthesia, post-human body, abundance beyond restraint embodied
**Affordances resisted:** warmth, vulnerability

**Anti-drift:** "liquid chrome body, anatomically clean, body as light-bearer"

#### Sacred with mechanical

- **Form:** sacred body with mechanical or surveillance elements fused in
- **Posture:** ceremonial
- **Relationship to space:** ornate architecture

**Affordances delivered:** spectacle critique, ornate decay, fused logics
**Affordances resisted:** openness, simplicity

**Anti-drift:** "sacred figure with mechanical elements fused in, ceremonial pose, ornate setting"

#### Body as field

- **Form:** body rendered as constellation; stars on flesh
- **Posture:** sacred — kneeling, offering, contemplating
- **Relationship to space:** dark ground; body as cosmos

**Affordances delivered:** intimate sacred, body as field, body as cosmos
**Affordances resisted:** geometric precision, ornament

**Anti-drift:** "body rendered as constellation field, dust of stars on flesh, sacred posture"

#### Collective / crowd

- **Form:** multiple bodies, witnessed together
- **Posture:** processions, gatherings, action
- **Relationship to space:** civic, public, exposed

**Affordances delivered:** collective gathering, plurality through bodies, political weight
**Affordances resisted:** intimate sacred, individual lyricism

**Anti-drift:** "collective bodies, procession or gathering, civic exposure"

---

## Sub-function 5: Atmosphere

### The Atmosphere Function

```
Atmosphere: [name]

Inputs:
  From spline: Identity (felt weight), Visual signal

Per-atmosphere definition:
  Mood register
  Temporal feel
  Emotional weight

Per-atmosphere response:
  Affordances delivered / resisted

Per-atmosphere work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output:
  Anti-drift specification
```

### Implementations

#### Sacred / hieratic

- **Mood:** reverent, timeless
- **Temporal feel:** suspended, eternal
- **Emotional weight:** dignified weight

**Anti-drift:** "sacred hieratic atmosphere, timeless, dignified weight"

#### Gentle narrative

- **Mood:** warm, intimate
- **Temporal feel:** unfolding, present
- **Emotional weight:** approachable, kind

**Anti-drift:** "gentle narrative atmosphere, warm and intimate, character-driven"

#### Clear instructional

- **Mood:** focused, contemplative
- **Temporal feel:** suspended
- **Emotional weight:** light, structure as subject

**Anti-drift:** "clear instructional atmosphere, structure as subject, no emotional weight"

#### Dream-displaced

- **Mood:** uncanny, quiet wrongness
- **Temporal feel:** suspended, slightly off
- **Emotional weight:** philosophical, contemplative strangeness

**Anti-drift:** "dream-displaced atmosphere, quiet wrongness, contemplative strangeness"

#### Synesthetic futurist

- **Mood:** post-human, charged
- **Temporal feel:** present-future
- **Emotional weight:** charged, sensorially saturated

**Anti-drift:** "synesthetic futurist atmosphere, post-human, sensorially charged"

#### Ornate decay

- **Mood:** theatrical, spectacle-as-cage
- **Temporal feel:** late, decadent
- **Emotional weight:** beauty made cage

**Anti-drift:** "ornate decay atmosphere, theatrical spectacle, beauty made cage"

#### Intimate sacred

- **Mood:** quiet, reverent, body-centered
- **Temporal feel:** still, contemplative
- **Emotional weight:** body as cosmos, soft sacred

**Anti-drift:** "intimate sacred atmosphere, body-centered, quiet reverent contemplation"

#### Witnessed weight

- **Mood:** political, urgent without melodrama
- **Temporal feel:** historical, immediate
- **Emotional weight:** witness, gathered seriousness

**Anti-drift:** "witnessed weight, political clarity, urgent without melodrama"

#### Cosmic indifference

- **Mood:** vast, ancient, unconcerned; the felt presence of scales that do not include the human as a unit of meaning
- **Temporal feel:** geologic or longer; the speaker's lifetime is incidental; deep time as the work's actual present
- **Emotional weight:** the horror of scale; the recognition that what is real does not have the speaker in mind, and never did

**Affordances delivered:** vast-scale dread, indifference of the real, the smallness of human reach
**Affordances resisted:** narrative warmth, sacred reassurance, human-scale meaning

**Anti-drift:** "cosmic indifference atmosphere, vast scales that do not include the human, deep time as present, the felt absence of any reassurance from what is real, no narrative warmth, no sacred consolation"

#### Quiet dread

- **Mood:** intimate, persistent, low-grade horror; the wrongness is small and continuous rather than vast
- **Temporal feel:** present-tense, immediate; the wrongness is now, in this room, in this body
- **Emotional weight:** the speaker's own mind becoming foreign to itself; the world looking the same while everything has changed

**Affordances delivered:** intimate horror, the wrongness in the familiar, dread that has no monster
**Affordances resisted:** vast-scale terror, gothic excess, anything that would relieve through dramatic gesture

**Anti-drift:** "quiet dread atmosphere, intimate persistent wrongness, present-tense small-scale horror, the speaker's mind becoming foreign to itself, no monster and no dramatic gesture, no relief through scale"

---

## On presets

Visual world preset bundles (Tier 2) are not maintained at framework level. They are work-local — defined within the work that authors them. Framework-level presets exist only by earned graduation (evidence of cross-work reuse), which has not yet been demonstrated. See the [calibration completeness plan](../../do/projects/plans/calibration_completeness.md) for the policy.

---

## How Visual World Connects to the Spline

The spline emits Identity and Visual signals per movement. Math Visual emits rendered primitives upstream. Visual World reads all of these and renders the imagery register, mutual with Medium.

To compose visual world for a movement:
1. Read the Identity signal
2. Read the Visual signal (gesture, opening/closing image, required/forbidden affordances)
3. Read Math Visual output (which primitives appear and at what density)
4. Choose one option from each sub-function (palette, light, line, figure, atmosphere)
5. Or choose a preset bundle as starting point and customize sub-functions
6. Confirm choices align — sub-functions interact
7. Coordinate with Medium (mutual surface layer)
8. Render the math primitives in this world's imagery vocabulary
9. Apply anti-drift specifications when assembling image prompt

### Visual world changes between movements

Sub-function choices can change between movements. Each shift contributes to the felt continuity grade of the join.

- **Same choices across the join:** continuity easy at any grade
- **Single sub-function shift:** typically C¹ — direction changes but pacing holds
- **Multiple sub-function shifts:** approaches C⁰ unless deliberately bridged
- **For C² (graded transition):** the new state must emerge from within the previous — shared element (palette, primitive, voice rhythm) bridges the join
