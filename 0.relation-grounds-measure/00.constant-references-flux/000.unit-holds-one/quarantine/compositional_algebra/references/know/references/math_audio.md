# Math Audio Language Reference

**Formal:**
```
MathAudio : Identity × MathVocabularySignal → MathAudioOutput
MathAudio = ⋃ {primitive_i : i ∈ Primitives}
```
A functor reading Identity and MathVocabulary from the spline; output is a rendering of named math primitives at named density. Eighteen sonic primitives form the closed inductive type of math content.

**Informal:** The Math Audio layer renders mathematical primitives as sonic content. Math primitives are the *content* being encoded — a work composed in this framework is *about* the mathematical structures named in its spline's math vocabulary, expressed sonically through the primitives below. This reference specifies eighteen sonic primitives.

Math Audio mirrors Math Visual where the primitives have natural sonic analogs, drops function space (no clear sonic analog), and adds beat/interference (sonic-specific). The primitive names mostly match across modalities to keep the work's math vocabulary consistent.

Math Audio is a primitive-level reference. Each primitive is atomic. Variation lives in *how* it's rendered, which is supplied by Audio Aesthetic.

Math Audio composes first as the temporal substrate; Math Visual composes second within it. Both render the same underlying mathematical content in their respective modalities. The work's math is one vocabulary expressed in two modalities; the primitives in this reference correspond to primitives in Math Visual Reference. Cross-modal pointers appear per primitive below.

### Identity and Trajectory (a note on math layers specifically)

Math Audio and Math Visual occupy a special position in the framework's Identity/Trajectory split. Where other layers have an Identity that's authored at the realization level (preset choices, atomic specs), math is **already the source** — it's what drives Trajectory in every other layer.

For math layers:
- **Identity** = which primitives are at home in a given movement, and the structural relations between them. Authored in the spline's Math vocabulary signal.
- **Trajectory** = how primitive density and emphasis develop across movements. Coordinated with the felt-quality function `f_n`.

Math content (Identity) and felt-quality function (Trajectory) together are "the math of a movement." Both drive every downstream layer's Trajectory.

---

## Math Audio Layer Inputs

The Math Audio layer reads:

- **From spline:**
  - Identity signal (universal context)
  - Math vocabulary signal (audio primitives at home, density)

Math Audio is upstream of Audio Aesthetic. It establishes the primitives as content; Audio Aesthetic then renders that content in its sonic vocabulary.

The same primitive renders differently in modal × bowed × ambient than in equal temperament × homophonic × mono, but the underlying mathematical content is invariant. The rendering vocabulary documented per primitive below is illustrative — actual rendering is determined by the chosen Audio Aesthetic reading Math Audio's output.

---

## The Primitive Function

```
Primitive: [name]

Inputs:
  From spline: Identity (including Shape), Math vocabulary signal

Per-primitive definition (framework-level, work-agnostic):
  Mathematical content
  Sonic convention (tuning, timing, spatial behavior)
  Rendering notes (illustrative — actual rendering supplied by Audio Aesthetic)
  Anti-drift specification (passed to Audio Aesthetic)

Per-primitive work usage (specified by each work that uses this primitive):
  Which movements the primitive appears in
  What Identity language the primitive carries within this work
  Density profile across the work's movements
```

The framework provides the primitive's abstract definition (mathematical content, sonic convention, rendering hints, anti-drift). The work provides how *its* spline uses the primitive (which movements, what Identity language it carries in this work, how density profile applies).

### How to Add a New Primitive (framework-level)

1. Name the primitive.
2. Define mathematical content (what it formally is).
3. Specify sonic convention (how it sounds canonically).
4. Specify rendering notes across aesthetic options.
5. Specify anti-drift requirements.

The framework's primitive entry is purely abstract. Work-specific usage (which movements, Identity response, movement affinities) lives in the work's documentation, not in the framework's primitive entry.

---

## The Eighteen Primitives

### 1. Sonic vector

*Visual counterpart: Math Visual §1 (vector)*

- **Mathematical content:** a single sonic event with direction (pitch contour, spatial movement) and magnitude (amplitude, duration)
- **Sonic convention:** discrete note or gesture with defined start, pitch trajectory, and stop

**Rendering notes:**
- Drone-based tonality: barely a vector; sustained without trajectory
- Just intonation: clear pitch trajectory anchored to fundamental
- Equal temperament: vector as conventional note
- Electronic timbre: vector with designed envelope
- Ambisonic spatialization: vector with spatial trajectory

**Anti-drift:** "single sonic event with defined direction (pitch contour or spatial movement) and magnitude"

### 2. Sonic basis

*Visual counterpart: Math Visual §2 (basis)*

- **Mathematical content:** a set of linearly independent sonic elements that span a sonic space; the minimal frame from which any sound can be expressed
- **Sonic convention:** three pitches establishing a tonal frame, or three voices at orthogonal positions, or three timbral primaries

**Rendering notes:**
- Just intonation: triad in integer ratios (3:2, 5:4, 5:6)
- Equal temperament: triad in twelve-tone system
- Polytonal: three voices each in own tonal system
- Distributed spatialization: three sound sources at defined spatial positions

**Anti-drift:** "three independent sonic elements establishing a frame; basis triad in chosen tonal system"

### 3. Sonic space

*Visual counterpart: Math Visual §3 (vector space)*

- **Mathematical content:** the structured set within which sonic events live; the algebraic structure containing sonic vectors
- **Sonic convention:** the tonal system, spatial field, or timbral palette that defines what events are possible

**Rendering notes:**
- Polytonal: multiple coexisting sonic spaces, none dominant
- Equal temperament: single locked sonic space
- Microtonal: sonic space exceeding equal temperament
- Stratified texture: spatially distributed sonic space

**Anti-drift:** "sonic space as the tonal/spatial/timbral structure containing events"

### 4. Sonic dimension

*Visual counterpart: Math Visual §4 (dimension)*

- **Mathematical content:** the cardinality of a sonic basis; the number of independent sonic parameters
- **Sonic convention:** count of independent axes — pitch, time, amplitude, spatial position, timbre — each as a dimension

**Rendering notes:**
- Monophonic texture: low dimensionality (pitch over time only)
- Polyphonic texture: dimension grows with voice count
- Ambisonic spatialization: full spatial dimensionality
- Hybrid timbre: dimensionality expanded through timbre as independent axis

**Anti-drift:** "sonic dimension as count of independent parameters (pitch, time, amplitude, space, timbre)"

### 5. Consonance (inner product)

*Visual counterpart: Math Visual §5 (inner product)*

- **Mathematical content:** a bilinear measure producing a scalar from two sonic vectors; defines harmonic relationship
- **Sonic convention:** simple integer ratios produce consonance; complex ratios produce dissonance; quantifiable by interval class

**Rendering notes:**
- Just intonation: pure consonance and clear beating dissonance
- Equal temperament: tempered consonance with subtle beating
- Microtonal: novel consonance/dissonance relationships
- Modal: consonance defined within mode

**Anti-drift:** "consonance/dissonance as measurable harmonic relationship between two pitches"

### 6. Orthogonality

*Visual counterpart: Math Visual §6 (orthogonality)*

- **Mathematical content:** inner product equals zero; sonic elements sharing no relationship
- **Sonic convention:** two voices sharing no frequency content; or two voices at maximally distinct spatial positions

**Rendering notes:**
- Polyphonic texture: orthogonal voices have no shared frequency content
- Stratified drones: voices at frequencies that don't interact
- Distributed spatialization: voices at maximally distinct positions

**Anti-drift:** "orthogonal sonic elements — no shared frequency content, or maximally distinct spatial positions"

### 7. Slerp / sonic interpolation

*Visual counterpart: Math Visual §7 (slerp)*

- **Mathematical content:** smooth interpolation along the natural path between two sonic states
- **Sonic convention:** glissando (pitch slerp), timbral morph (spectrum slerp), spatial trajectory (position slerp)

**Rendering notes:**
- Microtonal tonality: pitch slerp as continuous glissando
- Hybrid timbre: timbral morph as spectral interpolation
- Ambisonic spatialization: spatial slerp as continuous trajectory
- Through-composed phrasing: slerp embedded in continuous unfolding

**Anti-drift:** "smooth interpolation between two sonic states — glissando, timbral morph, or spatial trajectory"

### 8. Sonic manifold

*Visual counterpart: Math Visual §8 (manifold)*

- **Mathematical content:** a sonic space that locally resembles a simple space but globally may be curved or nontrivial
- **Sonic convention:** tuning system that is consistent locally but cannot be globally embedded in equal temperament (just intonation extends as a manifold); or a spatial sound field with curvature

**Rendering notes:**
- Just intonation: pitch manifold locally consistent, globally non-equal-tempered
- Microtonal: manifold rendered as continuous tuning space
- Modal: each mode as a local chart on a manifold of modes

**Anti-drift:** "sonic manifold — tuning or spatial space with local consistency but global non-flatness"

### 9. Fourier

*Visual counterpart: Math Visual §10 (Fourier)*

- **Mathematical content:** representation of a signal as a sum of sinusoidal components at different frequencies
- **Sonic convention:** sound IS Fourier; every sound can be decomposed into its frequency components; this primitive foregrounds that decomposition

**Rendering notes:**
- Stratified drones: explicit Fourier — sustained partials at harmonic ratios
- Electronic timbre: additive synthesis as explicit Fourier reconstruction
- Spectral processing: spectral freeze foregrounding frequency content
- Acoustic breath-based: implicit Fourier in harmonic series of voice

**Anti-drift:** "Fourier decomposition as explicit sustained partials at harmonic ratios; signal as sum of frequencies"

### 10. Fractal (temporal / spectral)

*Visual counterpart: Math Visual §11 (fractal dimension)*

- **Mathematical content:** self-similar structure at multiple scales; non-integer fractal dimension
- **Sonic convention:** rhythmic fractal (same pattern at different time scales) or spectral fractal (same spectrum at different frequency scales)

**Rendering notes:**
- Polyrhythm: nested temporal scales with self-similar patterns
- Granular processing: spectral fractals through grain accumulation
- Stratified drones: harmonic series as fractal spectrum

**Anti-drift:** "fractal in time or spectrum — self-similar pattern at multiple scales, non-integer dimension"

### 11. Configuration space

*Visual counterpart: Math Visual §12 (configuration space)*

- **Mathematical content:** the space of all possible configurations of a sonic system
- **Sonic convention:** for an n-voice system with each voice as one degree of freedom, the configuration is a point in n-dimensional space

**Rendering notes:**
- Polyphonic texture: each voice as independent degree of freedom
- Distributed spatialization: each spatial source as degree of freedom
- Layered voice configuration: each voice as independent point in configuration

**Anti-drift:** "configuration space — each voice or parameter as independent degree of freedom"

### 12. Hilbert space

*Visual counterpart: Math Visual §13 (Hilbert space)*

- **Mathematical content:** complete inner product space; infinite-dimensional generalization
- **Sonic convention:** the sonic space of all possible signals; quantum-style superposition of sonic states

**Rendering notes:**
- Stratified drones: continuum of partials as Hilbert basis
- Spectral processing: superposition of spectral states
- Ambisonic: full spherical sonic field

**Anti-drift:** "Hilbert space — infinite-dimensional sonic space, superposition of states"

### 13. Projection

*Visual counterpart: Math Visual §14 (projection)*

- **Mathematical content:** linear map taking a sonic vector to its component along a sonic subspace
- **Sonic convention:** a sound reduced to one parameter (only its pitch, or only its rhythm, or only its loudness)

**Rendering notes:**
- Equal temperament: pitch projection onto twelve-tone grid
- Metronomic rhythm: temporal projection onto pulse grid
- Compressed dynamics: amplitude projection to single level

**Anti-drift:** "projection of sound onto a single parameter axis — pitch only, rhythm only, amplitude only"

### 14. Topology

*Visual counterpart: Math Visual §15 (topology)*

- **Mathematical content:** properties preserved under continuous deformation; connection-without-metric
- **Sonic convention:** sequence membership preserved across re-tunings; melodic shape preserved across timbres; spatial connectivity preserved across transforms

**Rendering notes:**
- Heterophonic texture: same melodic shape with simultaneous variation
- Hybrid timbre: melody preserved across timbral transformations
- Modal: same intervallic structure across different modes

**Anti-drift:** "topological invariance — same sonic shape preserved across deformation (re-tuning, timbre shift, transposition)"

### 15. Spline / continuity

*Visual counterpart: Math Visual §16 (spline / continuity)*

- **Mathematical content:** piecewise function joining segments with specified continuity (C⁰ position, C¹ direction, C² curvature)
- **Sonic convention:** sonic transitions with explicit continuity grade — held drone (C¹ or C²), abrupt cut (C⁰), graded crossfade (C²)

**Rendering notes:**
- Through-composed phrasing: continuity embedded in form
- Slow unfolding pacing: C² continuity natural
- Compression pacing: C¹ continuity typical
- Stillness pacing: C⁰ continuity possible at edges

**Anti-drift:** "sonic spline with explicit continuity grade at joins (C⁰, C¹, C²)"

### 16. Cauchy

*Visual counterpart: Math Visual §17 (Cauchy)*

- **Mathematical content:** sequence whose terms become arbitrarily close; in a complete space, converges to a limit
- **Sonic convention:** sequence of sonic events spiraling toward a sustained tone or held silence; asymptotic approach

**Rendering notes:**
- Arhythmic / event-based rhythm: events spiraling closer in time
- Slow unfolding pacing: convergence audible across long span
- Drone-based tonality: events approaching sustained limit tone

**Anti-drift:** "Cauchy sequence — sonic events approaching but not reaching a sustained limit"

### 17. Graph / network

*Visual counterpart: Math Visual §18 (graph / network)*

- **Mathematical content:** vertices connected by edges; non-metric structure of connection
- **Sonic convention:** sonic graph of call-and-response patterns; network of voice connections without metric distance

**Rendering notes:**
- Polyphonic texture: voices as graph nodes, mutual influences as edges
- Call-and-response phrasing: explicit graph structure
- Distributed spatialization: spatial graph with edges between positions

**Anti-drift:** "sonic graph — voices as nodes, connections as edges, no metric distance"

### 18. Beat / interference

*Visual counterpart: none — beat is sonic-specific*

- **Mathematical content:** two close-but-distinct frequencies create periodic amplitude variation at the difference frequency; sonic-specific
- **Sonic convention:** two pitches a few hertz apart produce audible "beats" — slow throbbing amplitude

**Rendering notes:**
- Just intonation against equal temperament: beats are audible
- Microtonal: beats foregrounded as content
- Sustained acoustic texture: beats as natural artifact
- Stratified drones: beating between layers

**Anti-drift:** "audible beats — two close frequencies producing periodic amplitude variation at difference frequency"

---

## Density

The spline emits a density signal per movement (minimal, low, medium, high). Density governs how many primitives appear and how foreground they are.

- **Minimal:** one or two primitives present, often as memory or trace
- **Low:** two to three primitives, clearly placed but not dominant
- **Medium:** several primitives in parallel, none dominant
- **High:** multiple primitives dominant, asserting themselves as content

The same primitive can appear at different densities across movements. Density is a per-movement property; the spline declares it.

---

## How Math Audio Connects to the Spline

The spline emits Identity and Math vocabulary signals per movement. Math Audio is upstream of Audio Aesthetic — it establishes the sonic primitives that Audio Aesthetic will render.

To render math audio content for a movement:
1. Read the Identity signal
2. Read the Math vocabulary signal (audio primitives at home, density)
3. For each primitive at home, establish the mathematical content and sonic convention
4. Apply density: how many primitives, how foreground
5. Pass primitive content and anti-drift specs downstream to Audio Aesthetic
6. Audio Aesthetic renders the primitives in its sonic vocabulary

### Primitive carry across movements

Some primitives appear across multiple movements at different densities. The spline's transition notes name what must be carried forward across each transition (the work declares per-primitive carry patterns; the framework provides the mechanism).

When a primitive carries across a join, its rendering may shift with aesthetic choices but its mathematical content stays constant.
