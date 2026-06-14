---
name: fechners-law
type: object
object-type: law
essence: sensation grows as the logarithm of stimulus intensity — S = k·ln(I/I₀)
field: [field.psychophysics]
status: empirical
state: float
attribution: G. T. Fechner (1860), Elemente der Psychophysik; derived by integrating Weber's law
formalized: true
source: [source.fechner-1860, source.weber-1834, source.gescheider-1997]
depends-on: [object.webers-law]
used-by: []
---

**statement (plain)** — the felt intensity of a sensation grows with the *logarithm* of the physical stimulus, not in step with it. Equal multiplicative steps in the stimulus (×2, ×4, ×8 …) feel like equal additive steps in sensation. So sensation rises fast at first and then ever more slowly as the stimulus gets stronger.

**statement (formula)** — for stimulus intensity I above the absolute threshold I₀,

S = k · ln(I / I₀),

where S is sensation magnitude and k a modality-dependent constant. **[confirmed]**

**basis / empirical support & limits** — Fechner *derived* it from [[object.webers-law]] plus the assumption that every just-noticeable difference is a subjectively *equal* increment of sensation. Taking dS proportional to the relative change, dS = k · (dI / I), and integrating from the threshold I₀ gives the logarithmic relation. It approximates data over a wide middle range but inherits Weber's-law breakdowns at **low intensities (near/below absolute threshold)** and often **high intensities**, and was later challenged as a general law by Stevens' direct-scaling data (see [[object.stevens-power-law]]). **[confirmed]**

**lineage** — Gustav Theodor Fechner, *Elemente der Psychophysik* (Leipzig, 1860) [[source.fechner-1860]]; the founding text that coined "psychophysics." Fechner reported conceiving the core idea on the morning of 22 October 1850. Built directly on [[object.webers-law]] [[source.weber-1834]]. The pair is often called the **Weber–Fechner law**. **[confirmed]**

**door** — [[source.gescheider-1997]]; Fechner's *Elemente* is public-domain on archive.org.

**sources** — [[source.fechner-1860]], [[source.weber-1834]], [[source.gescheider-1997]]; Wikipedia "Weber–Fechner law"; Oxford Reference "Fechner's law."
