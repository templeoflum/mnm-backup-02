# Spline Reference

The score of *Calibration*. Three movements, fixed in order. Each movement is a function with typed signals: Identity (including Shape) → Math vocabulary → Character → Object → Motif → Visual → Audio → Voice → Beat-authoring. Sound is the temporal substrate; visual is the spatial moment within it; voice speaks from within both. Beats are knots within each movement; the function f passes through every beat-knot with authored continuity at each beat-join. Movement-boundary continuity is authored as the outbound continuity of each movement's last beat. Reference docs read these signals and supply how each option fulfills them.

---

## The Identity signal includes Shape

Identity carries the movement's structural function, felt weight, what arrives, what departs, invariants, flexibility, and Shape. Shape specifies the movement's curvature: how it approaches its knot, how it evolves within itself, how it departs toward the next transition.

See the framework's Shape vocabulary specification. Six Approach options × seven Within options × six Departure options. (Shape vocabulary previously lived in another work's spline reference; framework-level abstraction is now pending — flagged as a finding for the next sweep.)

**Note on Shape's current state:** With framework Stages S1 and S2 completed (see [parameter_space.md](../../../know/references/parameter_space.md)), Shape now characterizes a continuous felt-quality function `f: [0, 1] → ℝ` per movement. Approach characterizes f near t=0; Within characterizes f over the interior; Departure characterizes f near t=1. Continuity grades describe how adjacent movements' functions relate at the join.

Shape's category labels (Held, Rising, Steep rise, etc.) remain the authoring vocabulary. They are characterizations of f's behavior at the relevant regions, not arbitrary labels. At Stages S3 and S4 (polynomial commitment and authoring convention; see [formalization_roadmap.md](../../../know/formalization_roadmap.md)), Shape will become an operational specification that determines f numerically. Until then, multiple f are consistent with the same Shape; continuity grades remain qualitative characterizations rather than derived equations.

---

## Beat-authoring

Each movement is composed of a sequence of beats. A beat is a knot in the spline; the function f passes through each beat-knot's authored felt-quality contribution. Continuity grade at each beat-join specifies the regularity of f across that join. Beats compose into movements; movements compose into the work — the same continuity-graded knot-and-function machinery operates at both scales.

**Per-movement signals** (Identity, Math vocabulary, Character, Object, Motif, Visual, Audio, Voice, Transition) hold at the movement level for this version of Calibration. They are not authored per-beat. Future versions of Calibration may modulate per-modality signals at beat granularity; for now, the spline authors per-beat *felt-quality contribution* and *continuity grade at the beat-join* only.

The last beat of each movement does not author an outbound continuity grade in the beat-list — its outbound grade is the movement-boundary grade authored in that movement's Transition signal. Movement-boundary joins and beat-internal joins are the same kind of object (a knot in the spline with an authored continuity grade); movement-boundaries are grouping conventions over the beat sequence.

---

## 1. Crossing

### Identity

- **Structural function:** establishes the forward act; the figure begins to move toward the window
- **Felt weight:** gathered, forward, focused
- **What arrives:** the Figure, the room, the goal (the Window, distant)
- **What departs:** nothing — this is the start
- **Invariants:** the Figure is moving; the Window is visible but not yet reached; the room is the space between
- **Flexibility:** specific Figure (any age, any appearance); specific room (any interior); specific window (any style)
- **Shape:** Approach=Held · Within=Rising · Departure=Steep rise — the movement opens in stasis (the Figure begins to move), rises across its duration as the crossing builds momentum, accelerates into the arrival

### Math vocabulary signal

- **Visual primitives at home:** line segment with endpoint (the path), threshold (the window-as-boundary glimpsed at the end of the path)
- **Audio primitives at home:** none yet — sound exists as room tone, footfall
- **Density:** minimal

### Character signal

- **The Figure:** crossing the room; their attention is forward, on the window

### Object signal

- **The Window:** present as goal; visible at the far side of the room; not yet reached

### Motif signal

- **Approach-and-Arrive** (foregrounded, in its *approach* phase) — forward motion, anticipation of stillness to come

### Visual signal

- **Characteristic gesture:** the Figure walking, body oriented forward
- **Opening image:** the Figure beginning to move; the room established with the Window visible
- **Closing image:** the Figure near the Window, about to arrive
- **Required affordances:** forward orientation, lightness, anticipation
- **Forbidden affordances:** stasis (the movement is *crossing*, not arriving); compression; weight

### Audio signal

- **Tonality:** open, no defined center; if pitched, low drone
- **Texture:** sparse; footfall + room tone
- **Rhythm:** measured, the cadence of walking
- **Dynamic:** quiet, room-level
- **Spatial:** room-scale, slightly forward-focused
- **Opening sound:** footfall beginning, room tone established
- **Closing sound:** footfall slowing as arrival nears

### Voice signal

- **Default register/stance/positioning/configuration/affect:** any voice option may apply; the spline does not commit
- **Required:** voice reads the forward motion; what the speaker says (or doesn't) honors the *moving toward* quality

### Beat-authoring

The movement is composed of three beats. Each beat is a knot in the spline; the function f passes through each beat-knot's authored felt-quality contribution. Continuity grade at each beat-join specifies the regularity of f across that join. The outbound continuity from the last beat is the join into the next movement.

- **Beat 1:** *Held.* The figure begins to move; the floor underfoot, the body situated mid-room. f opens in stasis. Continuity to Beat 2: **C²** (unfold; the crossing arc is one continuous motion).
- **Beat 2:** *Rising.* The window noticed across the room; the crossing builds. f rises. Continuity to Beat 3: **C²** (unfold).
- **Beat 3:** *Steep rise toward arrival.* The footfall slowing as the window nears; the crossing approaches its end. f accelerates toward the movement-boundary. Continuity to next movement (Movement 2, At the Window): **C¹** (direction-match-only).

---

## 2. At the Window

### Identity

- **Structural function:** holds the arrival; the Figure stands at the window
- **Felt weight:** held, suspended, gathered-at-the-edge
- **What arrives:** the held state; the Window foregrounded; the view through the glass
- **What departs:** forward motion (the crossing is complete)
- **Invariants:** the Figure is at the window; the Figure is held (not moving); the window has not yet opened
- **Flexibility:** the Figure's posture; what the Figure sees through the window; how long the held state lasts
- **Shape:** Approach=Gradual rise · Within=Steady · Departure=Gradual fall — the movement receives the crossing's energy at gentler magnitude (the arrival settles rather than collides), holds steady at the window, begins to release as the gesture of opening forms

### Math vocabulary signal

- **Visual primitives at home:** threshold (the window-as-boundary, now foregrounded); aperture (the window as openable, anticipated)
- **Audio primitives at home:** sustained tone (the held quality); silence between breaths
- **Density:** minimal-to-low

### Character signal

- **The Figure:** at the window; held; attention through the glass

### Object signal

- **The Window:** foregrounded; the central object of this movement; not yet opened — its potential is the point

### Motif signal

- **Approach-and-Arrive** (foregrounded, in its *arrive* phase) — held arrival, the stillness after motion

### Visual signal

- **Characteristic gesture:** the Figure standing at the window, body still
- **Opening image:** the Figure arriving at the window; the crossing complete
- **Closing image:** the Figure at the window, hand beginning to reach for the latch
- **Required affordances:** stillness, weight, threshold-quality, the felt presence of the boundary
- **Forbidden affordances:** motion (movement 2's identity is held); avoidance of the window

### Audio signal

- **Tonality:** sustained; if pitched, a held note or quiet drone
- **Texture:** thin, sustained
- **Rhythm:** unmetered, breath-driven; the heartbeat of stillness
- **Dynamic:** quiet, intimate
- **Spatial:** close, focused at the window
- **Opening sound:** footfall ceasing; held silence with breath
- **Closing sound:** the first sound of the latch, faintly

### Voice signal

- **Default:** any voice option may apply
- **Required:** voice reads the held quality; the speaker is at a threshold

### Beat-authoring

The movement is composed of three beats.

- **Beat 1:** *Gradual rise to held value.* The arrival registered; footfall stopped; body at the sill. f arrives at the held value. Continuity to Beat 2: **C²** (unfold; the held state is one continuous arc).
- **Beat 2:** *Steady.* The window seen close — wood frame, swollen sill, brass latch with verdigris held in attention. f sustains. Continuity to Beat 3: **C²** (unfold).
- **Beat 3:** *Gradual fall toward release.* The hand beginning to rise; the held state beginning to release. f begins descent toward the movement-boundary. Continuity to next movement (Movement 3, Opening): **C²** (direction-and-magnitude match).

---

## 3. Opening

### Identity

- **Structural function:** the release; the window opens; what was held becomes open
- **Felt weight:** released, exhale, opened
- **What arrives:** the opening; the air from outside; the change of state
- **What departs:** the held state; the boundary as boundary
- **Invariants:** the window opens; the Figure participates in the opening (their hand on the latch); the air changes
- **Flexibility:** specific gesture of opening; what comes through the open window; how the movement ends
- **Shape:** Approach=Gradual fall · Within=Falling · Departure=Held — the movement receives the held state's release at matching gentle magnitude, falls across its duration as the opening completes and the air enters, holds at stasis as the work ends

### Math vocabulary signal

- **Visual primitives at home:** aperture (the window as now-open); transition (the air crossing the threshold); release
- **Audio primitives at home:** held tone giving way to air-sound; release of pressure
- **Density:** minimal

### Character signal

- **The Figure:** at the open window; their hand on the latch, the gesture complete

### Object signal

- **The Window:** open; the central act has completed

### Motif signal

- **Approach-and-Arrive** (foregrounded, in its *release-after-arrival* phase) — the stillness opens, the gathered state releases

### Visual signal

- **Characteristic gesture:** the latch turning, the window opening, the air entering
- **Opening image:** the latch beginning to turn
- **Closing image:** the open window; the Figure receiving the outside
- **Required affordances:** release, opening, the felt presence of what comes through
- **Forbidden affordances:** new motion forward (the work releases here, does not continue); compression

### Audio signal

- **Tonality:** sustained drone releasing into ambient outside sound
- **Texture:** the held tone joined by air-sound; texture opens
- **Rhythm:** unmetered; the cadence of breath returning
- **Dynamic:** quiet, the dynamic of release
- **Spatial:** opening — from close at the window to wider, as the outside enters
- **Opening sound:** the latch
- **Closing sound:** the air; held silence with the outside present

### Voice signal

- **Default:** any voice option may apply
- **Required:** voice reads the release; the speaker's voice opens with the window

### Beat-authoring

The movement is composed of three beats.

- **Beat 1:** *Gradual fall continuing from M2.* The hand on the latch — contact made; the cool of the brass, the verdigris under fingers. f continues its descent from the movement-boundary. Continuity to Beat 2: **C²** (unfold; the release is one continuous arc).
- **Beat 2:** *Falling.* The latch turning; the swollen sill yielding; the window opening. f falls through the release. Continuity to Beat 3: **C²** (unfold).
- **Beat 3:** *Held.* The outside air entering; the exhale; the work resting in the open state. f comes to rest. This is the final beat — the work ends in this open state; no outbound continuity.

---

## Cross-Movement Notes

**Through-line:** the Figure moves from forward motion (1) to held arrival (2) to opened release (3). The Window functions as goal, threshold, and aperture across the three movements.

**Math primitive arc:** line segment (path) → threshold (boundary) → aperture (opening). Each movement foregrounds one primitive transformation.

**Felt weight arc:** gathered-forward → held-suspended → released-exhale. A complete breath in three movements.

**Beat structure:** three beats per movement, nine beats total. Beat-internal joins are all C² (each movement is one continuous arc internally — the Approach, Within, and Departure of each movement's Shape are expressed across its three beats). Movement-boundary joins carry the work's authored continuity grades.

**Continuity test:**
- 1→2 (C¹): the magnitude mismatch (steep→gradual) creates a felt "the Figure overshoots and settles" quality. Verifies that direction-only-match produces shift-rather-than-unfold. At the beat level: M1's Beat 3 (steep rise toward arrival) joins M2's Beat 1 (gradual rise to held value) at C¹ — tangent direction matches across the join but magnitude breaks.
- 2→3 (C²): full match (gradual→gradual) produces unfold; the opening emerges from the held state rather than arriving as new event. Verifies that direction-and-magnitude match produces the felt continuous-becoming. At the beat level: M2's Beat 3 (gradual fall toward release) joins M3's Beat 1 (gradual fall continuing from M2) at C² — both tangent direction and magnitude match across the join.

---

## How Other Layers Connect to the Spline

The framework's layer references (medium, visual world, audio aesthetic, voice, script, presentation) read the per-movement signals above and supply how each option fulfills them. See [know/references/](../../../know/references/) for the layer vocabularies.
