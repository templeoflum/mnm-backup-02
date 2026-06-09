# sketch — spline-routing — f1 — 20260607-160000

review. proposed changes to the routing system.

---

## what should stay
- the derivative→channel mapping. this is the instrument's thesis. no change to the concept.
- 13 channels covering transform, appearance, gates, sound. each tests a different perceptual dimension. every channel pulls its weight.
- the source picker (d:N). simple, effective interaction — scrub to choose which derivative feeds a channel.
- unipolar/bipolar toggle. the distinction is meaningful: bipolar makes sign visible (rotation direction), unipolar fills the range (size, opacity).
- the normalization approach: max-abs for signed (zero-preserving), range for unsigned. correct, grounded.
- gates as discrete events. the continuous-vs-discrete distinction is real — the continuous channels show the derivative's value, the gates fire on crossings. complementary.
- the voice (three oscillators, shared fundamental). audio IS a channel. routing to sound is part of the thesis — you hear the break.

## what should change

### naming (per vocab sketch)
- `drivers{}` → `sources{}`. per vocab: "source" not "driver." source:f'' means the channel reads the second derivative.
- `updateDomains()` → `updateChannels()`. per vocab: "channel" not "domain."
- all DOM classes and IDs that say "domain" → "channel" (`.dom` → `.ch`, `#dBall` → something clearer, etc.)
- "fused voice" → just "voice" in UI labels. drop "fused."
- `dpick` class → `source-pick` or similar. "dpick" is cryptic.

### channel monitor redesign
the current monitors are each custom-built (ball box, size box, rotation box, etc.). each has its own DOM structure and update logic in `updateDomains()`. this is ~100 lines of very specific DOM manipulation.

**proposal**: standardize the monitors. each channel type could use a shared widget pattern:
- **signal bar**: the generic meter (fill bar + numeric readout). already prototyped as `.gbtrack`/`.gbfill`.
- **specialty display**: the rich display (ball, color swatch, rotation bar, etc.) in addition to the signal bar.

the signal bar is the universal view — every channel shows its value as a bar. the specialty display is the perceptual view — how the value looks/sounds/feels in that specific channel.

**decision needed**: is this worth it? the current custom monitors are charming and each makes the derivative's effect visceral (you SEE the ball jump, you SEE the color change). standardizing might lose that. leaning toward keep the specialty displays, but add a universal signal bar as an option.

### the "hot" indicator
currently a picker turns red when its source order is above the continuity level (i.e., it's reading a broken derivative). this is the instrument's key feedback: this channel is showing you a break.

**proposal**: extend the "hot" concept to the channel monitor itself, not just the picker. when a channel is driven by a broken order, the entire monitor gets a subtle red border or glow. makes the break visible at the channel level, not just the picker level.

### channel grouping
current groups: transform, appearance, gate, sound. displayed with small label dividers.

**proposal**: make groups collapsible (same pattern as TS overlay groups). each group can be collapsed to show just the group label + a summary (e.g., "3 channels, 1 hot").

**decision needed**: worth the complexity? leaning toward keep flat — 13 channels in 4 groups is manageable without collapsing. the spline instrument's right column is simpler than TS's info panel.

## what stays as-is
- computeRanges() algorithm
- chan() and chanSigned() normalization
- gate logic (knot gate, peak gate, zero-cross)
- audio graph (three oscillators, filter, gains)
- waveform trace

## summary
routing is the instrument's distinctive feature — what TS doesn't have. main changes: naming (drivers→sources, domains→channels, fused→voice), optional "hot" extension to channel monitors. the mechanism and channel set don't change.

---
