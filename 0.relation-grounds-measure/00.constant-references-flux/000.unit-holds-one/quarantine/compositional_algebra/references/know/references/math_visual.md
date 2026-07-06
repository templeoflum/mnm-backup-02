# Math Visual Language Reference

**Formal:**
```
MathVisual : Identity × MathVocabularySignal → MathVisualOutput
MathVisual = ⋃ {primitive_i : i ∈ Primitives}
```
A functor reading Identity and MathVocabulary from the spline; output is a rendering of named math primitives at named density. Eighteen primitives form the closed inductive type of math content.

**Informal:** The Math Visual layer renders mathematical primitives as visual content. Math primitives are the *content* being encoded — a work composed in this framework is *about* the mathematical structures named in its spline's math vocabulary, expressed visually through the primitives below. This reference specifies eighteen primitives and their visual idioms.

Math Visual is a primitive-level reference, not a sub-functioned layer. Each primitive is atomic — a vector is a vector. Variation lives in *how* it's rendered, which is supplied by Medium and Visual World.

Math Audio composes first as the temporal substrate; Math Visual composes second within it. Both render the same underlying mathematical content in their respective modalities. The work's math is one vocabulary expressed in two modalities; the primitives in this reference correspond to primitives in Math Audio Reference. Cross-modal pointers appear per primitive below.

### Identity and Trajectory (a note on math layers specifically)

Math Visual and Math Audio occupy a special position in the framework's Identity/Trajectory split. Where other layers have an Identity that's authored at the realization level (preset choices, atomic specs), math is **already the source** — it's what drives Trajectory in every other layer. The math layers are the bridge between mathematical content (which lives in the spline) and the sensory renderings of that content (which live in surface layers).

For math layers:
- **Identity** = which primitives are at home in a given movement, and the structural relations between them. Authored in the spline's Math vocabulary signal.
- **Trajectory** = how primitive density and emphasis develop across movements. Coordinated with the felt-quality function `f_n`.

Math content (Identity) and felt-quality function (Trajectory) together are "the math of a movement." Both drive every downstream layer's Trajectory.

---

## Math Visual Layer Inputs

The Math Visual layer reads:

- **From spline:**
  - Identity signal (universal context)
  - Math vocabulary signal (visual primitives at home, density)

Math Visual is upstream of the surface layers (Medium, Visual World). It establishes the primitives as content; surface layers then render that content in their own vocabulary.

The same primitive renders differently in oil × Mythic than in 3D render × chrome-glitch, but the underlying mathematical content is invariant. The rendering vocabulary documented per primitive below is illustrative — actual rendering is determined by the chosen Medium and Visual World reading Math Visual's output.

---

## The Primitive Function

```
Primitive: [name]

Inputs:
  From spline: Identity (including Shape), Math vocabulary signal

Per-primitive definition (framework-level, work-agnostic):
  Mathematical content
  Canonical convention (color, geometry, label)
  Rendering notes (illustrative — actual rendering supplied by Medium and Visual World)
  Anti-drift specification (passed to surface layers)

Per-primitive work usage (specified by each work that uses this primitive):
  Which movements the primitive appears in
  What Identity language the primitive carries within this work
  Density profile across the work's movements
```

The framework provides the primitive's abstract definition (mathematical content, canonical convention, rendering hints, anti-drift). The work provides how *its* spline uses the primitive (which movements, what Identity language it carries in this work, how density profile applies).

### How to Add a New Primitive (framework-level)

1. Name the primitive.
2. Define mathematical content (what it formally is).
3. Specify canonical convention (color coding, geometry, labels — the textbook idiom).
4. Specify rendering across mediums and worlds (general principles, not exhaustive combinations).
5. Specify anti-drift requirements.

The framework's primitive entry is purely abstract. Work-specific usage (which movements, Identity response, movement affinities) lives in the work's documentation, not in the framework's primitive entry.

---

## The Eighteen Primitives

### 1. Vector

*Sonic counterpart: Math Audio §1 (sonic vector)*

- **Mathematical content:** ordered tuple representing direction and magnitude; an arrow from a base point
- **Canonical convention:** arrow with arrowhead; color-coded if axis-aligned (red x, green y, blue z)

**Rendering:**
- Handmade mediums: inked or brushed arrow with hand-drawn arrowhead
- 3D render: glowing color-coded line with precise arrowhead
- Mythic: gilded line or sun-ray with archetypal weight
- Geometric world: canonical textbook arrow
- Star-flesh: light-ray from body extending into dark
- Chrome-glitch: laser-thin beam with chromatic aberration at edges

**Anti-drift:** "vector with arrowhead, color-coded if axis-aligned" — engines drift to generic arrow without mathematical convention

### 2. Basis

*Sonic counterpart: Math Audio §2 (sonic basis)*

- **Mathematical content:** a set of linearly independent vectors that span a vector space; the minimal frame from which any vector can be expressed
- **Canonical convention:** two or three orthogonal arrows meeting at origin; color-coded (red, green, blue for ℝ³); unit length

**Rendering:**
- Handmade mediums: three inked or brushed rods at a corner, labeled
- 3D render: three glowing color-coded axes meeting at origin
- Mythic: three gilded rods or sun-rays meeting; sacred treatment
- Geometric world: canonical textbook basis with origin marked
- Cyber baroque: three gilded measuring rods inscribed with scripts, meeting in ornate vault

**Anti-drift:** "basis vectors meeting at origin, color-coded (red, green, blue), unit length, labeled"

### 3. Vector space

*Sonic counterpart: Math Audio §3 (sonic space)*

- **Mathematical content:** a set closed under vector addition and scalar multiplication; the algebraic structure containing vectors
- **Canonical convention:** grid or coordinate frame; sometimes shown as the space *in which* vectors live

**Rendering:**
- Handmade mediums: ruled grid on paper, ink lines
- 3D render: glowing wireframe in space
- Mythic: cathedral floor as gridded marble; frescoed cloud
- Geometric world: precise coordinate plane with axis labels
- Mixed media: drafting-paper grid with bleed crossing it

**Anti-drift:** "coordinate grid as vector space, axes labeled, structure as ground"

### 4. Dimension

*Sonic counterpart: Math Audio §4 (sonic dimension)*

- **Mathematical content:** the cardinality of a basis; the number of independent directions
- **Canonical convention:** numeric label (1D, 2D, 3D, n-D); sometimes a count of axes shown

**Rendering:**
- Handmade mediums: labeled axes, count visible
- 3D render: glowing axis count with labels
- Geometric world: explicit n-D notation; sometimes parallel coordinates for n > 3
- Mythic: rare — dimension as architectural property (three columns for ℝ³)
- Surreal: dimensions rendered as impossible — a fourth axis floating between three

**Anti-drift:** "dimension count labeled (3D, n-D), basis cardinality explicit"

### 5. Inner product

*Sonic counterpart: Math Audio §5 (consonance)*

- **Mathematical content:** a bilinear form producing a scalar from two vectors; defines length and angle
- **Canonical convention:** ⟨v, w⟩ notation; sometimes shown as projection of one vector onto another

**Rendering:**
- Handmade mediums: dashed line showing projection of one vector onto another; angle marked
- 3D render: precise projection with computed value displayed
- Geometric world: canonical projection diagram with formula
- Mythic: gold thread connecting two sacred forms
- Star-flesh: light rays meeting; the angle between as intimate measure

**Anti-drift:** "inner product as projection diagram, angle between vectors, scalar value shown"

### 6. Orthogonality

*Sonic counterpart: Math Audio §6 (orthogonality)*

- **Mathematical content:** inner product equals zero; vectors perpendicular
- **Canonical convention:** right-angle indicator (small square) at the meeting point

**Rendering:**
- Handmade mediums: right-angle marker in ink
- 3D render: right-angle indicator in 3D
- Geometric world: canonical perpendicular convention
- Mythic: gilded cross or right-angle altar element
- Mixed media: right angles asserted across multiple materials

**Anti-drift:** "orthogonality marked with right-angle indicator, perpendicular convention explicit"

### 7. Slerp (spherical linear interpolation)

*Sonic counterpart: Math Audio §7 (slerp / sonic interpolation)*

- **Mathematical content:** interpolation along the great circle of a sphere; the natural rotation between two orientations
- **Canonical convention:** two orientations on a sphere connected by an arc; checkerboard or marked sphere for visibility

**Rendering:**
- 3D render: checkerboard sphere with two handle objects at start and end orientations, arc on sphere
- Handmade mediums: difficult — typically rendered through sequence of frames
- Geometric world: canonical mathematical animation aesthetic
- Chrome-glitch: chrome sphere with prismatic arc of orientations

**Anti-drift:** "checkerboard sphere with separated handle objects, arc on sphere surface between orientations"

### 8. Manifold

*Sonic counterpart: Math Audio §8 (sonic manifold)*

- **Mathematical content:** a space that locally resembles Euclidean space but globally may be curved or have nontrivial topology
- **Canonical convention:** curved surface with intrinsic coordinates (u, v); gridlines following the curvature

**Rendering:**
- Handmade mediums: ink wash defining curvature, gridlines drawn on top following surface
- 3D render: rendered curved surface with deforming wireframe
- Mythic: painted drapery, gridlines following fabric folds
- Surreal: cloth deforming in impossible ways
- Mixed media: torn paper layers as deformation

**Anti-drift:** "manifold as curved surface with intrinsic coordinates, gridlines following curvature"

### 9. Function space

*Sonic counterpart: none — function space has no clear sonic analog*

- **Mathematical content:** a vector space whose elements are functions; addition and scaling defined pointwise
- **Canonical convention:** function shown as a point in abstract space; thumbnail of the function's graph next to its point

**Rendering:**
- Handmade mediums: small graph or curve drawn next to a point label
- 3D render: floating function graphs as objects in abstract space
- Geometric world: canonical function-space convention
- Mythic: rare — functions as illuminated manuscript pages
- Mixed media: collaged function plots placed as points

**Anti-drift:** "function shown as a point with thumbnail of its graph; function space as abstract space of functions"

### 10. Fourier (decomposition)

*Sonic counterpart: Math Audio §9 (Fourier)*

- **Mathematical content:** representation of a function as a sum (or integral) of sinusoidal basis functions
- **Canonical convention:** original signal shown as sum of sine waves at different frequencies; spectrum plot

**Rendering:**
- Handmade mediums: stacked sine waves drawn in ink; spectrum as histogram
- 3D render: animated frequency components separating from signal
- Geometric world: canonical Fourier diagram (signal = sum of sines)
- Chrome-glitch: prismatic separation of frequencies as light spectrum
- Mythic: rare — color spectrum from white light through prism

**Anti-drift:** "Fourier decomposition as stacked sinusoids or spectrum; signal = sum of frequencies"

### 11. Fractal dimension

*Sonic counterpart: Math Audio §10 (fractal — temporal/spectral)*

- **Mathematical content:** generalization of integer dimension to non-integer values; Hausdorff or box-counting dimension
- **Canonical convention:** recursive zoom showing self-similarity; non-integer dimension value labeled

**Rendering:**
- Handmade mediums: nested panels at progressive scales, drawn or printed
- 3D render: real-time recursive zoom with exact self-similarity
- Mythic: polyptych nested at progressive scales
- Geometric world: canonical fractal with dimension value labeled
- Mixed media: collaged panels at multiple scales

**Anti-drift:** "fractal with recursive self-similarity at progressive scales, non-integer dimension value labeled"

### 12. Configuration space

*Sonic counterpart: Math Audio §11 (configuration space)*

- **Mathematical content:** the space of all possible configurations of a system; for a system with n independent parameters, configuration space is n-dimensional
- **Canonical convention:** physical system on one side, single point in abstract configuration space on the other

**Rendering:**
- Handmade mediums: split composition — linked joints on left, single point on right
- 3D render: animated mapping from physical system to abstract point
- Geometric world: canonical configuration-space diagram
- Surreal: physical system and its abstract point shown as uncanny correspondence
- Mixed media: drawn system on one panel, abstract point on another

**Anti-drift:** "configuration space with physical system mapped to single abstract point; split composition"

### 13. Hilbert space

*Sonic counterpart: Math Audio §12 (Hilbert space)*

- **Mathematical content:** complete inner product space; the natural setting for quantum mechanics and many function spaces
- **Canonical convention:** Bloch sphere with state vector for finite-dimensional; abstract sphere with arrow for infinite-dimensional

**Rendering:**
- Handmade mediums: drawn sphere with state vector
- 3D render: rendered sphere with floating state vector
- Mythic: celestial sphere with gilded arrow
- Geometric world: canonical Bloch sphere
- Chrome-glitch: chrome sphere with prismatic state vector

**Anti-drift:** "Hilbert space as Bloch sphere with state vector; abstract sphere with arrow"

### 14. Projection

*Sonic counterpart: Math Audio §13 (projection)*

- **Mathematical content:** linear map taking a vector to its component along a subspace; orthogonal projection drops perpendicular
- **Canonical convention:** point with dashed lines dropping perpendicular to each axis, coordinate values labeled

**Rendering:**
- Handmade mediums: dashed inked lines dropping from point to axes
- 3D render: precise dashed lines with coordinate values
- Mythic: gilded threads dropping from sacred point to base
- Geometric world: canonical textbook projection diagram
- Cyber baroque: shafts of theatrical light projecting from gilded vault

**Anti-drift:** "projection with dashed perpendicular lines, coordinate values labeled, orthogonal drop"

### 15. Topology

*Sonic counterpart: Math Audio §14 (topology)*

- **Mathematical content:** properties preserved under continuous deformation (without tearing or gluing); the structure of nearness without metric
- **Canonical convention:** surface with genus (handles, holes) labeled; deformation sequence preserving topology

**Rendering:**
- Handmade mediums: surfaces drawn in sequence showing same genus through deformation
- 3D render: animated continuous deformation with invariant labeled
- Mythic: same shape recognized across traditions
- Geometric world: canonical topology diagram (torus, sphere, surfaces with holes)
- Surreal: object deforming impossibly while remaining "itself"

**Anti-drift:** "topological invariant preserved across continuous deformation; genus labeled"

### 16. Spline / continuity

*Sonic counterpart: Math Audio §15 (spline / continuity)*

- **Mathematical content:** piecewise function joining segments with specified continuity (C⁰ position match, C¹ direction match, C² curvature match)
- **Canonical convention:** curve with marked join points, continuity grade labeled at each join

**Rendering:**
- Handmade mediums: curve with marked join points, continuity grade in ink
- 3D render: rendered curve with marked control points and continuity grades
- Geometric world: canonical spline diagram
- Mixed media: continuity across material boundaries with explicit grade
- The work itself: rendered through the spec of transitions between movements

**Anti-drift:** "spline with control points and explicit continuity grades (C⁰, C¹, C²) at joins"

### 17. Cauchy (sequence and convergence)

*Sonic counterpart: Math Audio §16 (Cauchy)*

- **Mathematical content:** sequence whose terms become arbitrarily close to each other; in a complete space, converges to a limit
- **Canonical convention:** spiral of points approaching a marked limit; arrows indicating the sequence

**Rendering:**
- Handmade mediums: drawn sequence of points spiraling inward
- 3D render: animated sequence approaching limit
- Mythic: pilgrims approaching shared center
- Geometric world: canonical Cauchy spiral
- Star-flesh: scattered points converging toward held light

**Anti-drift:** "Cauchy sequence as spiral converging toward marked limit; terms approaching but distinct"

### 18. Graph / network

*Sonic counterpart: Math Audio §17 (graph / network)*

- **Mathematical content:** vertices connected by edges; non-metric structure of connection; arbitrary topology
- **Canonical convention:** labeled nodes connected by lines or arrows; sometimes weighted edges

**Rendering:**
- Handmade mediums: inked nodes with connecting lines, labels in pen
- 3D render: glowing nodes connected by edges in space
- Mythic: sacred figures connected by gold threads
- Geometric world: canonical graph diagram with vertex and edge labels
- Mixed media: collaged nodes connected by drawn lines crossing materials
- Resistance: social network as power structure

**Anti-drift:** "graph with labeled nodes and edges; connection without coordinate"

---

## Density

The spline emits a density signal per movement (minimal, low, medium, high). Density governs how many primitives appear and how foreground they are.

- **Minimal:** one or two primitives present, often as memory or trace
- **Low:** two to three primitives, clearly placed but not dominant
- **Medium:** several primitives in parallel, none dominant
- **High:** multiple primitives dominant, asserting themselves as content

The same primitive can appear at different densities across movements. Density is a per-movement property; the spline declares it.

---

## How Math Visual Connects to the Spline

The spline emits Identity and Math vocabulary signals per movement. Math Visual is upstream of surface layers — it establishes the primitives that Medium and Visual World will render.

To render math visual content for a movement:
1. Read the Identity signal
2. Read the Math vocabulary signal (visual primitives at home, density)
3. For each primitive at home, establish the mathematical content and canonical convention
4. Apply density: how many primitives, how foreground
5. Pass primitive content and anti-drift specs downstream to Medium and Visual World
6. Surface layers render the primitives in their own vocabulary

### Primitive carry across movements

Some primitives appear across multiple movements at different densities. The spline's transition notes name what must be carried forward across each transition (the work declares per-primitive carry patterns; the framework provides the mechanism).

When a primitive carries across a join, its rendering may shift with medium/world but its mathematical content stays constant.
