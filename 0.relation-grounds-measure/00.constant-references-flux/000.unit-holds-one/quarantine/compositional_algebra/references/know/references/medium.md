# Medium Reference

**Formal:**
```
Medium : Identity × VisualSignal × AudioSurface → MediumOutput
Medium = Substrate × MarkMaking × SurfaceBehavior × EdgeQuality × ColorBehavior
```
A functor reading Identity and VisualSignal from the spline plus AudioSurface from upstream; product type with five sum-typed sub-functions.

**Informal:** The Medium layer defines the *material the work is made of* — distinct from visual world (the register of imagery). Composed of five sub-functions: **substrate**, **mark-making**, **surface behavior**, **edge quality**, **color behavior**. Each is its own constructable layer.

### Identity and Trajectory

The medium, like every layer, has two parts:

- **Identity** — what the medium *is* materially. The five sub-functions and their chosen options (paper substrate, brush mark-making, etc.) define identity. Chosen at the realization level; holds across all movements within a realization unless explicitly varied.
- **Trajectory** — how the medium *behaves across movements*. The arc of how material density, mark density, or color behavior develops over the work, derived from the felt-quality function `f_n` and from the math at home in each movement.

The medium reads the audio surface as upstream context: sound is the temporal substrate, so material choices for the visual surface compose in relation to the sonic ground (a quiet drone substrate suggests different material weight than a compressed mechanical substrate).

---

## Medium Layer Inputs

The Medium layer is composed by reading the spline's Visual signal, all upstream content layer outputs, and the audio surface output.

- **From spline:** Identity signal (including Shape: Approach × Within × Departure); Visual signal (required affordances, gesture, opening/closing image)
- **From content layers:** Math Visual output; Character output; Object output; Motif output
- **From audio surface:** Audio Aesthetic output (the temporal substrate the visual material is made within)
- **Mutual with:** Visual World Reference (within visual domain)

Medium is the material specification of how the visual surface is produced. It composes from its five sub-functions and reads all upstream content + audio surface to determine what it must render.

## How the Five Sub-Functions Compose

A medium for any movement is the product of one option from each sub-function:

```
Medium = Substrate × Mark-making × Surface behavior × Edge quality × Color behavior
```

Sub-functions interact — a substrate choice constrains mark-making options, a mark-making choice influences edge quality — but no sub-function is downstream of another within the medium layer.

Named medium bundles (ink+wash, watercolor, oil, 3D render, mixed media) are presets — common combinations across these sub-functions. The preset catalog appears at the end of this reference.

---

## Sub-function 1: Substrate

### The Substrate Function

```
Substrate: [name]

Inputs:
  From spline: Identity (including Shape), Visual signal

Per-substrate definition:
  Physical character
  Visibility behavior (how much the substrate shows through marks)
  Tooth / texture

Per-substrate response:
  Affordances delivered / resisted

Per-substrate work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output:
  Anti-drift specification
```

### How to Construct a New Substrate (framework-level)

1. Name the substrate.
2. Define physical character, visibility behavior, tooth.
3. List affordances delivered/resisted.
4. Specify anti-drift requirements.

The framework's substrate entry is purely abstract. Work-specific usage (Identity language carried in the work, movement affinities) lives in the work's documentation.

### Implementations

#### Paper

- **Physical character:** absorbent, fibrous, tactile
- **Visibility:** shows through marks, contributes to image
- **Tooth:** variable — cold-press, hot-press, rough

**Affordances delivered:** atmospheric presence, openness, paper-light as highlight
**Affordances resisted:** weight, geometric precision (paper softens hard edges)

**Anti-drift:** "paper with visible tooth," specify type (cold-press, hot-press, kraft, vellum)

#### Canvas

- **Physical character:** woven, structural, accepting layered paint
- **Visibility:** weave shows through thin layers, hidden by impasto
- **Tooth:** medium to coarse, depending on weave

**Affordances delivered:** gravity, depth, painterly history
**Affordances resisted:** lightness, atmospheric transparency

**Anti-drift:** "canvas with visible weave," specify weight ("fine linen," "coarse cotton duck")

#### Panel

- **Physical character:** rigid, smooth, gessoed; allows fine detail
- **Visibility:** hidden by gesso ground, surface controlled
- **Tooth:** minimal — designed for precision

**Affordances delivered:** gravity, geometric precision, sacred-painting tradition
**Affordances resisted:** atmospheric openness, organic accident

**Anti-drift:** "gessoed wood panel," specify period if relevant ("fifteenth-century gessoed poplar")

#### Screen

- **Physical character:** no physical surface; pixels
- **Visibility:** none — the substrate is invisible
- **Tooth:** N/A

**Affordances delivered:** chromatic excess, geometric precision, synesthesia
**Affordances resisted:** handmade aesthetic, atmospheric warmth

**Anti-drift:** specify render engine ("Octane," "Unreal Engine," "Blender Cycles")

#### Layered surface

- **Physical character:** discontinuous — multiple substrates joined or layered
- **Visibility:** competing — different substrates show in different regions
- **Tooth:** varied within single image

**Affordances delivered:** plurality through competing surfaces, documentation aesthetic
**Affordances resisted:** singular closing

**Anti-drift:** "layered substrate, multiple surfaces joined, visible registration"

---

## Sub-function 2: Mark-making

### The Mark-making Function

```
Mark-making: [name]

Inputs:
  From spline: Identity (including Shape), Visual signal

Per-mark-making definition:
  Tool
  Stroke character
  Variability behavior

Per-mark-making response:
  Affordances delivered / resisted

Per-mark-making work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output:
  Anti-drift specification
```

### Implementations

#### Dip pen / reed pen

- **Tool:** dipped, variable line weight from pressure
- **Stroke:** crisp, directional, variable
- **Variability:** ink load decreases over stroke

**Affordances delivered:** clarity, precision, variable line weight, honesty
**Affordances resisted:** atmospheric softness, color saturation

**Anti-drift:** "dip pen with variable line weight, ink load fading across stroke"

#### Brush / loaded

- **Tool:** brush carrying pigment or ink
- **Stroke:** broad to fine; can soften
- **Variability:** load, pressure, water content all variable

**Affordances delivered:** atmosphere, openness, wash continuity
**Affordances resisted:** hard geometric precision

**Anti-drift:** specify brush type and load ("loaded brush, wet-on-wet," "dry brush")

#### Palette knife / impasto

- **Tool:** knife or trowel; thick paint
- **Stroke:** sculptural, directional, dimensional
- **Variability:** thickness, drag, scrape

**Affordances delivered:** weight, sculptural depth, materiality
**Affordances resisted:** transparency, fine detail

**Anti-drift:** "palette knife with impasto, visible directional strokes, sculptural texture"

#### Digital shader / render

- **Tool:** material assigned to geometry; no physical mark
- **Stroke:** none — surfaces defined parametrically
- **Variability:** parametric, controllable

**Affordances delivered:** precision, chromatic excess, synesthesia
**Affordances resisted:** handmade trace

**Anti-drift:** specify shader type ("PBR materials," "ray-traced glass," "subsurface scattering")

#### Collage assembly

- **Tool:** cutting, tearing, pasting, scanning
- **Stroke:** edge as cut; composition through placement
- **Variability:** seam, registration, source variety

**Affordances delivered:** plurality, documentation aesthetic, competing logics
**Affordances resisted:** singular closing

**Anti-drift:** "collage with visible seams, registration shifts, tape marks"

#### Pencil / graphite

- **Tool:** graphite, charcoal, conté; held lightly or pressed firmly
- **Stroke:** soft, erasable, variable from feathered grey to dense black; hatched and cross-hatched easily
- **Variability:** pressure controls weight; tooth of substrate controls grain; revisable through erasure and overdraw

**Affordances delivered:** working-document feel, revisability, soft variable weight, observational specificity
**Affordances resisted:** finished polish, opaque saturation, dramatic chromatic claim

**Anti-drift:** "graphite pencil with variable pressure, soft hatched marks, visible working-sketch quality, erasable"

---

## Sub-function 3: Surface behavior

### The Surface Behavior Function

```
Surface behavior: [name]

Inputs:
  From spline: Identity (including Shape), Visual signal

Per-surface-behavior definition:
  How marks interact with substrate
  Drying / setting behavior
  Layering behavior

Per-surface-behavior response:
  Affordances delivered / resisted

Per-surface-behavior work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output:
  Anti-drift specification
```

### Implementations

#### Absorbent / bleeding

- **Mark-substrate interaction:** marks soak into substrate; edges bloom
- **Drying:** pigment settles unpredictably; granulation
- **Layering:** transparent; underlayers show

**Affordances delivered:** atmosphere, bloom, lightness, organic accident
**Affordances resisted:** geometric precision, hard edges

**Anti-drift:** "absorbent surface, pigment blooming, granulation visible"

#### Opaque / layered

- **Mark-substrate interaction:** marks sit on surface; cover what's beneath
- **Drying:** slow; glazes possible
- **Layering:** opaque; underlayers covered (visible through glazing if intended)

**Affordances delivered:** depth through glazing, weight, painterly history
**Affordances resisted:** lightness, transparency

**Anti-drift:** specify "opaque layered paint with glazes" or "egg tempera with translucent layers"

#### Smooth / rendered

- **Mark-substrate interaction:** none physical; surface defined by simulation
- **Drying:** N/A
- **Layering:** parametric layering of materials

**Affordances delivered:** geometric precision, chromatic excess, clean release
**Affordances resisted:** organic accident, handmade trace

**Anti-drift:** "physically-based rendering, smooth simulated surface, no physical artifacts"

#### Discontinuous / mixed

- **Mark-substrate interaction:** varies within single image
- **Drying:** competing — different materials set differently
- **Layering:** unpredictable; materials retain own logic

**Affordances delivered:** plurality, documentation aesthetic, competing surface logics
**Affordances resisted:** unified atmosphere, singular closing

**Anti-drift:** "discontinuous surface, materials competing within image, hard edges beside soft bleeds"

#### Lightly textured

- **Mark-substrate interaction:** mark sits on substrate's tooth; surface character partially visible through mark
- **Drying:** dry-medium-friendly (pencil, charcoal, dry pastel); also accommodates light wash
- **Layering:** marks build by hatching and stippling; substrate grain shows through

**Affordances delivered:** notebook quality, observational scale, substrate visibility
**Affordances resisted:** opaque saturation, glossy finish, perfect smoothness

**Anti-drift:** "lightly textured paper surface visible through marks, no glossy finish, working-document scale"

---

## Sub-function 4: Edge quality

### The Edge Quality Function

```
Edge quality: [name]

Inputs:
  From spline: Identity, Visual signal, Math vocabulary (math primitives need defined edges)

Per-edge-quality definition:
  Edge sharpness
  Edge variability
  Edge-substrate relationship

Per-edge-quality response:
  Affordances delivered / resisted

Per-edge-quality work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output:
  Anti-drift specification
```

### Implementations

#### Hard inked

- **Sharpness:** crisp, defined
- **Variability:** consistent within stroke
- **Relationship:** edge sits on substrate, doesn't bleed

**Affordances delivered:** clarity, geometric precision, structural legibility
**Affordances resisted:** atmospheric softness

**Anti-drift:** "hard inked edges, defined contour, no bleed"

#### Soft bleed

- **Sharpness:** variable; edge dissolves into substrate
- **Variability:** unpredictable
- **Relationship:** edge merges with substrate

**Affordances delivered:** atmosphere, openness, organic accident
**Affordances resisted:** geometric precision

**Anti-drift:** "soft bleeding edges, edge dissolves into substrate, organic transition"

#### Sfumato / blended

- **Sharpness:** none — gradual transition
- **Variability:** controlled gradient
- **Relationship:** edge is a gradient, not a line

**Affordances delivered:** depth, painterly atmosphere, soft form
**Affordances resisted:** geometric clarity

**Anti-drift:** "sfumato blending, gradual transition, no defined edges"

#### Clean rendered

- **Sharpness:** anti-aliased, mathematically precise
- **Variability:** none — uniform within shader
- **Relationship:** edge is a parametric boundary

**Affordances delivered:** geometric precision, clean release
**Affordances resisted:** handmade variation

**Anti-drift:** "anti-aliased edges, mathematically precise, no painterly variation"

#### Mixed-within-image

- **Sharpness:** varies within single image
- **Variability:** intentional contrast between regions
- **Relationship:** some edges hard, others soft

**Affordances delivered:** competing edge logics, plurality
**Affordances resisted:** unified atmosphere

**Anti-drift:** "mixed edge quality within single image, hard against soft"

#### Hand-drawn / variable

- **Sharpness:** varies along single edge from pressure and tool wear
- **Variability:** human hand-tremor visible; lines start/end with characteristic taper
- **Relationship:** edge as the path of the hand, not a calculated boundary

**Affordances delivered:** hand-presence, variable observational line, working-document honesty
**Affordances resisted:** calculated precision, machine cleanness, mathematical claim

**Anti-drift:** "hand-drawn variable edges, tapered line starts and ends, tremor visible, no machine cleanness"

---

## Sub-function 5: Color behavior

### The Color Behavior Function

```
Color behavior: [name]

Inputs:
  From spline: Identity, Visual signal (forbidden affordances may exclude chromatic options)

Per-color-behavior definition:
  Palette range
  Saturation behavior
  Light interaction

Per-color-behavior response:
  Affordances delivered / resisted

Per-color-behavior work usage (specified by each work that uses this option):
  Which Identity language the option carries within this work
  Movement affinities (Strong / Workable / Resists per movement)

Output:
  Anti-drift specification
```

### Implementations

#### Monochrome

- **Range:** single color or grayscale
- **Saturation:** absent or single-hued
- **Light:** through value only

**Affordances delivered:** restraint, clarity, compositional discipline
**Affordances resisted:** chromatic excess, warmth

**Anti-drift:** "monochrome" — specify the hue ("black ink," "sepia," "burnt umber")

#### Translucent layered

- **Range:** any palette, transparent
- **Saturation:** built up through layering; light from substrate beneath
- **Light:** glow from beneath via paper or glaze

**Affordances delivered:** atmosphere, light from within, layered depth
**Affordances resisted:** opaque saturation, hard contrast

**Anti-drift:** "translucent layered color, light through layers, glow from substrate"

#### Opaque saturated

- **Range:** any palette, opaque
- **Saturation:** full; layers cover what's beneath
- **Light:** modeled into form; glazes possible for inner glow

**Affordances delivered:** depth, weight, painterly saturation
**Affordances resisted:** lightness, atmospheric softness

**Anti-drift:** "opaque saturated paint, layered with glazes, light modeled into form"

#### HDR / prismatic

- **Range:** beyond standard gamut; chromatic aberration possible
- **Saturation:** specular highlights, accurate reflections
- **Light:** physically simulated; prismatic refraction at edges

**Affordances delivered:** chromatic excess, synesthesia, abundance beyond restraint
**Affordances resisted:** restraint, handmade warmth

**Anti-drift:** "HDR color, chromatic aberration, prismatic refraction"

#### Multi-material / discontinuous

- **Range:** multiple color logics within single image
- **Saturation:** varies — each material retains own behavior
- **Light:** discontinuous; sources visible per material

**Affordances delivered:** competing color logics, documentation aesthetic
**Affordances resisted:** unified palette

**Anti-drift:** "multi-material color, each retaining own logic within single image"

---

## On presets

Medium preset bundles (Tier 2) are not maintained at framework level. They are work-local — defined within the work that authors them. Framework-level presets exist only by earned graduation (evidence of cross-work reuse), which has not yet been demonstrated. See the [calibration completeness plan](../../do/projects/plans/calibration_completeness.md) for the policy.

---

## How Medium Connects to the Spline

The spline emits Identity and Visual signals per movement. Math Visual emits rendered primitives upstream. Medium reads all of these and renders the visual surface, mutual with Visual World.

To compose medium for a movement:
1. Read the Identity signal
2. Read the Visual signal (gesture, opening/closing image, required/forbidden affordances)
3. Read Math Visual output (which primitives appear and at what density)
4. Choose one option from each sub-function (substrate, mark-making, surface behavior, edge quality, color behavior)
5. Or choose a preset bundle as starting point and customize sub-functions
6. Confirm choices align — sub-functions interact
7. Coordinate with Visual World (mutual surface layer)
8. Render the math primitives in this medium's material vocabulary
9. Apply anti-drift specifications when assembling image prompt

### Medium changes between movements

Sub-function choices can change between movements. Each shift contributes to the felt continuity grade of the join. The spline's transition notes name the required continuity grade.

- **Same choices across the join:** continuity easy at any grade
- **Single sub-function shift:** typically C¹ — direction changes but pacing holds
- **Multiple sub-function shifts:** approaches C⁰ unless deliberately bridged
- **For C² (graded transition):** the new state must emerge from within the previous — shared element (palette, primitive, voice rhythm) bridges the join
