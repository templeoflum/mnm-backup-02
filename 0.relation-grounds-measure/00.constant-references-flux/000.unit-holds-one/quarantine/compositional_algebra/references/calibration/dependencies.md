# Calibration — Framework Dependencies

## Framework version

Minimum required: 20260527-190000
Last tested against: 20260527-150000

---

## Base framework references used

### framework/medium_reference.md
Presets used: Watercolor
Atomic sub-functions used in Realization B: Substrate, Mark-making, Surface behavior, Edge quality, Color behavior (all five — Realization B uses atomic spec, not preset)
Specific options used:
- Substrate: Paper
- Mark-making: Pencil/graphite, Brush
- Surface behavior: Lightly textured, Absorbent (bleed/bloom)
- Edge quality: Hand-drawn/variable, Soft variable
- Color behavior: Monochrome, Translucent layered

### framework/visual_world_reference.md
Presets used: Storybook
Atomic sub-functions used in Realization B: Palette, Light, Line, Figure, Atmosphere (all five — Realization B uses atomic spec, not preset)
Specific options used:
- Palette: Warm earth muted, Naturalistic muted
- Light: Ambient illustrative, Pall/wrong daylight
- Line: Expressive loose, Painted realism / no visible line
- Figure: Stylized narrative, Dislocated isolated
- Atmosphere: Gentle narrative, Quiet dread

### framework/audio_aesthetic_reference.md
Presets used: Quiet voice
Atomic sub-functions used in Realization B: all seven (Realization B uses atomic spec, not preset)
Specific options used:
- Tonality: Drone-based/unfixed
- Texture: Drone + figure
- Timbre: Acoustic/breath-based
- Rhythm: Arhythmic/event-based
- Pacing: Slow unfolding, Stillness/suspended
- Spatialization: Stereo wide
- Phrasing: Open, Open/unphrased

### framework/voice_reference.md
Presets used: Intimate first-person (Register: Everyman, Stance: Realist, Positioning: Intimate locked, Configuration: Solo locked, Affect: Composed)
Atomic combinations used: Scientist × Empirical × Testimonial × Solo × Stricken (Realization B — does not compose to any existing Voice preset)
Sub-functions used: all five (register, stance, positioning, configuration, affect)
Specific options used:
- Register: Everyman, Scientist
- Stance: Realist, Empirical
- Positioning: Intimate, Testimonial
- Configuration: Solo
- Affect: Composed, Stricken

### framework/math_visual_reference.md
Primitives used: line segment with endpoint, threshold, aperture, transition

### framework/math_audio_reference.md
Primitives used: line segment with endpoint (as cadence trajectory), threshold (as sustained-tone-at-boundary), aperture (as held-potential / tonal release), transition (as crossfade)

### framework/realization_workflow_reference.md
Applies fully.

### framework/prompt_construction_reference.md
Applies fully, including:
- Translation discipline at the prompt boundary
- Voice translation as constant per realization
- Anti-drift constraints inline
- Cold-start prompts

### framework/generation_tracking_reference.md
Applies fully — Calibration generations follow the ID convention and use the freeze/edit cycle.

### framework/dependencies_reference.md
Applies fully — this file is the implementation.

### framework/parameter_space_reference.md
Applies fully — Calibration's spline references felt-quality functions implicitly through Shape; the parameter space reference grounds Shape and continuity grades in real math (Stages S1+S2 completed).

### framework/formalization_roadmap.md
Applies as the path forward — Calibration is the harness against which framework stages are tested.

---

## Cross-work realization adoptions

(none)

Calibration's Realization B was originally inspired by a realization from a prior work (since removed from the codebase), but Calibration's Realization B is authored as a Calibration-local spec, not a copy. The vocabulary it uses is base framework vocabulary, not an adoption of the prior work's realization spec. No cross-work copy has occurred.

---

## Score-local extensions

(none)

Calibration uses only base framework vocabulary. This is by design: Calibration is the framework's iteration harness, so vocabulary discovered during Calibration construction is added to framework base directly (per the Framework iteration policy for calibration in dependencies_reference.md), never to local extensions.

---

## Compatibility notes

- **Requires Shape sub-field of Identity** (Approach × Within × Departure). Introduced in framework 2026-05-26. Calibration's spline references Shape per movement; the framework's Identity signal must support it.
- **Requires audio-first surface composition.** Introduced in framework 2026-05-26. Calibration's Pass 3 expects audio surface to compose first as temporal substrate, visual surface to compose second within it.
- **Requires polish stage elimination and Pass 6 substitution (cross-modal).** Introduced in framework 2026-05-27. Calibration expects anti-drift constraints inline in Pass 5 prompts and identity continuity material routed to Pass 6 (substitution) and Pass 7 (outline), applied cross-modally across image, audio, and narrative prompts.
- **Requires Voice translation discipline.** Introduced in framework 2026-05-27. Calibration's realization specs include Voice translation fields and expect the framework's prompt construction to apply them as constant per-realization opening blocks.
- **Requires Affect sub-function in Voice.** Voice composes from five sub-functions, not four. Affect option set required: at minimum Composed and Stricken (used by Realizations A and B respectively).
- **Requires L1/L2 verification discipline.** Calibration's verification.md uses the two-level verification framework introduced in framework 2026-05-27.
- **Requires parameter space and continuous-function form.** Introduced in framework 20260527-055000 (Stages S1+S2). Shape characterizes a continuous felt-quality function `f: [0, 1] → ℝ` per movement; continuity grades characterize how adjacent f relate at joins. Calibration's Shape declarations are read against this formalization.