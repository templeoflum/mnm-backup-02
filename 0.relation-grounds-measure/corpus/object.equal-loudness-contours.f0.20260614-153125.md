---
name: equal-loudness-contours
type: object
object-type: empirical
essence: curves of sound-pressure level vs frequency that sound equally loud — the ear's frequency-dependent sensitivity
field: ["[[field.psychoacoustics]]"]
status: empirical
state: settled
attribution: Fletcher & Munson (1933); Robinson & Dadson (1956); standardized as ISO 226 (1987/2003/2023)
formalized: true
source: ["[[source.fletcher-munson-1933]]", "[[source.robinson-dadson-1956]]", "[[source.iso-226]]", "[[source.fastl-zwicker]]"]
depends-on: []
used-by: []
aliases: ["object.equal-loudness-contours"]
---

**statement (plain)** — the ear is not equally sensitive to all frequencies. To sound *as loud* as a 1 kHz tone, a low or very high tone must be physically louder; the ear is most sensitive around 2–5 kHz. Plotting, for a fixed perceived loudness, the physical level needed at each frequency gives a U-shaped curve. A family of such curves — one per loudness level — are the equal-loudness contours. They flatten as overall level rises, which is why bass and treble seem to fade when you turn music down. Loudness is read in **phons**: a contour's phon value equals the dB SPL of the equally loud 1 kHz tone.

**statement** — an equal-loudness contour is the locus of sound-pressure levels across frequency yielding constant perceived loudness for pure steady tones, for normal-hearing young listeners. The **phon** is defined so that N phon equals the level in dB SPL of an equally loud 1 kHz pure tone (at 1 kHz, phon = dB SPL by convention). The standardized contours are **ISO 226**. **[confirmed]**

**basis** — direct loudness-matching experiments: a 1 kHz reference is adjusted against test tones until equally loud (Fletcher & Munson 1933, headphones; Robinson & Dadson 1956). The curves are statistical averages over listeners, not a law; successive determinations disagree by 10–15 dB at low frequencies, and the ISO 226:2003 revision found Fletcher–Munson 1933 in better low-frequency agreement with pooled modern data than Robinson–Dadson 1956. Hence: empirical, method- and population-dependent. **[confirmed]**

**lineage** — first determined by Harvey Fletcher & Wilden Munson, *JASA* (1933) [[source.fletcher-munson-1933]] (the popular name "Fletcher–Munson curves," now a subset of the generic term). Re-determined by D. W. Robinson & R. S. Dadson (1956) [[source.robinson-dadson-1956]], the basis of ISO 226:1987; revised in ISO 226:2003 and again in 2023 [[source.iso-226]]. Distinct from but kin to the [[object.psychometric-function|threshold]] curves of psychophysics; rests on the same loudness measurement tradition as [[field.psychoacoustics]]. **[confirmed]**

**sources** — [[source.fletcher-munson-1933]], [[source.robinson-dadson-1956]], [[source.iso-226]], [[source.fastl-zwicker]]; Wikipedia "Equal-loudness contour."
