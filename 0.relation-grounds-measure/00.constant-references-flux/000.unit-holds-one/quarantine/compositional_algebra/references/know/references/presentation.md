# Presentation Reference

**Formal:**
```
Presentation : ScriptOutput × ImagePrompts × AudioPrompts × NarrativeOutput × RealizationSpec → PresentationArtifact
Presentation = Typography × ColorAndGround × SpatialRhythm × CompositionalBehavior × FormatWrapping
```
A functor reading all upstream outputs and the realization spec; product type with five sum-typed sub-functions producing the final readable artifact.

**Informal:** The presentation is the typographical surface of the realization — the document a reader holds, sees, scrolls through. It is the last assembly step. It reads the script, the image prompts, the audio prompts, the narrative, and the realization spec, and renders them into a unified readable artifact.

Presentation is to typography what Script is to staging: it does not invent content. It surfaces what was already specified, in a form a reader can receive.

The previous improvisation of HTML for Sacred Ritual happened to read coherent because Sacred Ritual is coherent. Without formalization, that coherence is accidental. This reference makes presentation parameterized — every realization gets a presentation appropriate to it, by composition or preset, the same way every realization gets a medium, a visual world, an audio aesthetic, a voice configuration.

---

## What the Presentation Layer Is

Presentation reads upstream outputs and produces a single document — typically HTML, sometimes PDF or print — that holds the realization as a unified work for a reader.

```
Function:
  Inputs:
    From spline:
      — Per-movement felt weight (shapes visual weight of each movement section)
      — Per-movement math density (shapes typographical density)
      — Identity invariants (what must hold visually across all movements)
    From realization spec:
      — Medium preset (substrate, surface qualities — informs ground color, texture)
      — Visual World preset (palette, light, atmosphere — informs color, ornament)
      — Voice base (register, stance — informs typographical tone)
      — Audio aesthetic (pacing, phrasing — informs typographical rhythm)
      — Script preset (named conventions — informs how the script renders in document)
    From upstream layers:
      — Script (the integrated performable document per movement)
      — Image prompts (visual cues, optionally embedded as image placeholders or rendered images when available)
      — Audio prompts (sonic cues, embedded as cue blocks within the script flow)
      — Narrative (already inside the script as primary text)
      — Transition continuity (already encoded in transition cue blocks of the script)

  Sub-functions composed:
    Typography × Color and ground × Spatial rhythm × Compositional behavior × Format wrapping

  Output:
    A single document — HTML, PDF, or print artifact — that holds the realization for a reader.
```

The presentation is the only layer the reader directly receives. Everything else is upstream of it. A well-composed presentation is what makes the work approachable as a single thing rather than as a collection of parts.

---

## Sub-Functions

The presentation composes from five sub-functions. Each is a small, parameterized space of choices. Like other assembly references, sub-functions can be composed individually or via realization-keyed preset bundles.

### Typography

How text is rendered as form.

- **Serif family:** classical (Garamond, Caslon) / transitional (Baskerville) / modern (Bodoni) / slab (Rockwell) / display (Trajan) / humanist (Centaur, Jenson) / monospace (typewriter, terminal)
- **Sans family:** geometric (Futura) / humanist (Gill Sans) / grotesque (Helvetica) / neo-grotesque (Akzidenz) / display (custom)
- **Weight behavior:** uniform / varied for hierarchy / heavy for compression / light for openness
- **Case treatment:** mixed case / small caps for named voices / full caps for structural headers / italic for stage direction / mixed for register shifts
- **Leading:** tight (compressed, dense) / standard / generous (open, spacious) / variable (per movement felt weight)

### Color and ground

The visual field the text sits in.

- **Ground color:** white (clinical, modern) / cream (warm, aged, manuscript) / parchment (sacred, hand-made) / off-white (institutional) / dark (display, dramatic) / colored (chromatic, expressive)
- **Text color:** black / dark brown (warmth) / dark blue (cool clarity) / gold (sacred accent) / colored (per voice, per movement)
- **Accent color:** none / single accent (for stage directions, cue blocks, named voices) / multi-accent (per voice, per movement)
- **Ornament:** none / minimal (dividers, drop caps) / moderate (chapter ornaments, marginalia) / heavy (illuminated manuscript treatment)

### Spatial rhythm

How text breathes.

- **Paragraph spacing:** tight / standard / generous / variable per movement
- **Silence treatment:** rendered as `(silence)` inline / rendered as extra vertical space / rendered as horizontal rule / rendered as visual gap with no marker
- **Cue block treatment:** rendered as italic block, indented / rendered as bracketed block in different typeface / rendered as marginal note / rendered as visually distinct boxed region
- **Section breaks (between movements):** simple horizontal rule / ornamental divider / page break (in print) / scroll-spacer (in screen) / colored band
- **Section openings:** chapter-style display heading / running header / no marker beyond white space

### Compositional behavior

How the document is composed as a whole.

- **Movement weighting:** all movements visually equal / movements weighted by felt weight (heavier IV and V; lighter I and VII; etc.) / monospaced visual rhythm with only typographical variation
- **Transition rendering:** transitions visible as distinct sections (using cue block treatment) / transitions woven into flow with subtle markers / transitions absent from presentation (continuous flow)
- **Through-line visibility:** drone or persistent element marked typographically across movements (e.g., a thin line at edge of every page) / through-line invisible / through-line named in marginal notes
- **Frame honoring (I↔VII):** opening and closing movements visually mirror each other / no mirror / subtle echo (same opening glyph)
- **Apparatus visibility:** image prompts shown in full / shown collapsed/expandable / hidden by default with toggle / shown as placeholders only / shown as embedded images when available; audio prompts treated analogously

### Format wrapping

The technical container the presentation lives in.

- **Container:** HTML (single file, scrollable) / HTML (multi-page) / PDF (single document) / PDF (multi-document) / printed artifact (book, broadside, scroll)
- **Screen behavior:** responsive (adapts to screen) / fixed-width (preserves typographical composition) / horizontal scroll (panoramic) / vertical scroll (continuous)
- **Print behavior:** A4/Letter / book proportions / broadsheet / custom
- **Interactivity:** static / minimal (toggle for image prompts, audio cues) / moderate (audio playback when available) / rich (full multimedia)

---

## On presets

Presentation preset bundles (Tier 2) are not maintained at framework level. They are work-local — defined within the work that authors them. Framework-level presets exist only by earned graduation (evidence of cross-work reuse), which has not yet been demonstrated. See the [calibration completeness plan](../../do/projects/plans/calibration_completeness.md) for the policy.

---

## Per-movement variation

The realization preset is the default. Per-movement variation only where the spline requires it.

**Where variation is appropriate:**

- A movement's felt weight may warrant visual weight variation (compression of weight in a movement → tighter spacing, darker palette)
- A movement's math density may warrant denser typography (high primitive density → tighter paragraph spacing)
- A movement's voice configuration may warrant additional named-voice styling (multi-voice configuration → each voice gets its own subtle treatment within the named-voice convention)

**Where variation is inappropriate:**

- Per-movement font changes (breaks the work's typographical unity)
- Per-movement ground color changes (breaks visual continuity)
- Per-movement layout changes (breaks the polyptych structure)

The principle: the work is one work. Visual unity holds across movements. Variation is small, structural, and serves the spline. The presentation preset establishes the work's overall typographical identity; per-movement variation modulates within that identity.

---

## What the Presentation Adds

The presentation does not invent. It surfaces what was already specified in the upstream layers. The script had named voices. The voice spec had registers. The realization had medium and visual world commitments. The spline had felt weight and math density per movement. Each of these has typographical implications that the presentation makes visible.

The presentation produces a single readable document the reader can receive. Without the presentation, the framework produces specifications and a script — but the reader has no unified way to encounter the work. The presentation closes that gap.

---

## How This Reference Connects to the Kit

Presentation is an assembly layer, downstream of Script.

**Position in the framework:**

```
The Score
Content layers
Surface layers (medium, visual world, audio aesthetic)
Voice
Assembly:
  - Prompt Construction (assembles triplets)
  - Script (integrates triplets + voice + transition into performable form)
  - Presentation (integrates script + apparatus into readable document)   ← this reference
```

**References this layer reads:**
- Spline Reference (felt weight, math density, identity invariants per movement)
- Realization spec (medium preset, visual world preset, voice base, audio aesthetic, script preset, presentation preset)
- Script (the integrated performable document per movement)
- Image prompts (visual cues, optionally rendered)
- Audio prompts (sonic cues, optionally rendered)
- Voice Reference (named voices, register/stance shaping typographical tone)

**What this layer produces:**
- A single readable document (HTML, PDF, or print artifact) holding the realization as a unified work

The Realization Workflow Reference's Pass 10 (Presentation) reads this reference to compose the final deliverable.
