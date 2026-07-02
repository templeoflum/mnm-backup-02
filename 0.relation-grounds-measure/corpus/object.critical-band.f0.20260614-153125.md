---
name: critical-band
type: object
object-type: concept
essence: the band of frequencies within which sounds interact in one auditory filter — the ear's frequency-resolution unit
field: ["[[field.psychoacoustics]]", "[[field.harmonic-fourier-analysis]]"]
status: established
state: settled
attribution: introduced Harvey Fletcher (1933, refined 1940); critical-band scale (Bark) Eberhard Zwicker (1961); modern ERB form Glasberg & Moore (1990)
formalized: true
source: ["[[source.fletcher-munson-1933]]", "[[source.fletcher-1940]]", "[[source.zwicker-1961]]", "[[source.glasberg-moore-1990]]", "[[source.fastl-zwicker]]"]
depends-on: []
used-by: ["[[object.auditory-masking]]"]
aliases: ["object.critical-band"]
---

**statement (plain)** — the ear does not hear every frequency separately; it sums what falls inside a band of neighbouring frequencies and treats that band as one channel. A pure tone is masked only by noise lying inside its own band — noise outside it, however loud, barely affects audibility. The width of that band (the **critical bandwidth**) is the ear's frequency-resolution unit: roughly constant (~100 Hz) below 500 Hz, then widening to about a fifth of the centre frequency above that.

**statement** — for a tone masked by broadband noise, only noise components within a band centred on the tone contribute to its masking; energy outside the **critical bandwidth** does not raise the tone's threshold. Twenty-four contiguous critical bands span the audible range, formalized as the **Bark scale** (1 Bark = one critical bandwidth; scale 1–24); the modern auditory-filter quantification is the **equivalent rectangular bandwidth (ERB)**. **[confirmed]**

**basis** — Fletcher's masking experiments: as the bandwidth of a noise masker around a tone widens, the tone's masked threshold rises only until the noise reaches the critical bandwidth, then plateaus — the operational signature of the band. Corroborated by loudness summation (loudness grows faster once a complex spans more than one band) and pitch and consonance data. The band is realized physically by the tuning of the cochlear (basilar-membrane) [[object.place-vs-temporal-theory-of-pitch|place]] mechanism. The numeric bandwidth values are empirical and method-dependent (Bark vs ERB differ). **[confirmed]**

**lineage** — concept introduced by Harvey Fletcher, broached in the 1933 loudness paper [[source.fletcher-munson-1933]] and developed in "Auditory Patterns" (1940) [[source.fletcher-1940]]. Eberhard Zwicker and colleagues (Germany, 1950s–60s) refined and standardized it, Zwicker proposing the **Bark scale** in 1961 [[source.zwicker-1961]]. The contemporary [[object.auditory-masking|notched-noise]] ERB formulation is Glasberg & Moore (1990) [[source.glasberg-moore-1990]]. Underpins audio compression (perceptual coding allocates bits per critical band). **[confirmed]**

**sources** — [[source.fletcher-munson-1933]], [[source.fletcher-1940]], [[source.zwicker-1961]], [[source.glasberg-moore-1990]], [[source.fastl-zwicker]]; Wikipedia "Critical band," "Bark scale."
