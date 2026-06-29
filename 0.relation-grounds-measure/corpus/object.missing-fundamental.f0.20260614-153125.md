---
name: missing-fundamental
type: object
object-type: concept
essence: the pitch of a complex tone heard at f0 even when no energy sits at f0 — pitch from periodicity, not spectrum
field: [field.psychoacoustics, field.harmonic-fourier-analysis]
status: established
state: settled
attribution: observed Seebeck (1840s); residue theory J. F. Schouten (1938/1940); central-processing demo Licklider (1954)
formalized: false
source: [source.seebeck-1841, source.schouten-1940, source.helmholtz-1863, source.fastl-zwicker]
depends-on: [object.place-vs-temporal-theory-of-pitch]
used-by: []
---

**statement (plain)** — play only the upper harmonics of a note — say 200, 300, 400 Hz — leaving out the 100 Hz fundamental, and you still hear the pitch of 100 Hz. The ear extracts the pitch from the *repetition rate* shared by the harmonics, not from any single tone present. This is why a small phone speaker that cannot reproduce a male voice's ~150 Hz fundamental still conveys its pitch — the brain reconstructs it from the overtones. Also called the **pitch of the residue** or **virtual pitch**.

**statement** — for a harmonic complex with partials at integer multiples nf0, the perceived pitch corresponds to the fundamental f0 (the greatest common divisor / repetition period) even when the f0 spectral component is absent or below threshold. Pitch is thus a percept of waveform **periodicity**, not reducible to the presence of a spectral fundamental — direct evidence against a pure spectral/place account and a central plank of the [[object.place-vs-temporal-theory-of-pitch|temporal theory of pitch]]. **[confirmed]**

**basis** — Seebeck's siren-disk experiments (1840s) showed periodic pulse trains yield a pitch at the repetition frequency though little energy lies there; Schouten (1938/1940) reproduced and named the **residue**, arguing the pitch maps to the unresolved upper harmonics' periodicity; Licklider (1954) showed the effect survives low-frequency masking noise, so it is **central** (neural), not cochlear distortion producing a real f0. Effect is robust and qualitative; not a quantitative law (formalized: false). **[confirmed]**

**lineage** — first systematic observation August Seebeck, *Annalen der Physik* (1840s) [[source.seebeck-1841]], igniting the Seebeck–Ohm dispute over whether the ear is a Fourier analyzer (Ohm's acoustic law, defended by Helmholtz [[source.helmholtz-1863]], said it was). Residue theory J. F. Schouten (1938/1940) [[source.schouten-1940]]; central locus shown by J. C. R. Licklider (1954). Directly entails that [[object.place-vs-temporal-theory-of-pitch|place coding alone]] cannot account for pitch. **[confirmed]**

**sources** — [[source.seebeck-1841]], [[source.schouten-1940]], [[source.helmholtz-1863]], [[source.fastl-zwicker]]; Wikipedia "Missing fundamental."
