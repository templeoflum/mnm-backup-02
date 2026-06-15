---
name: auditory-masking
type: object
object-type: concept
essence: one sound raising the audibility threshold of another — in frequency (simultaneous) or time (temporal)
field: [field.psychoacoustics]
status: established
state: settled
attribution: first quantitative pure-tone study Wegel & Lane (1924); tied to the critical band by Fletcher (1940)
formalized: true
source: [source.wegel-lane-1924, source.fletcher-1940, source.fastl-zwicker]
depends-on: [object.critical-band]
used-by: []
---

**statement (plain)** — a louder or well-placed sound (the masker) can make another sound (the target) inaudible by raising the level at which the target can just be heard. It works two ways: in **frequency** — a masker hides targets at nearby frequencies, especially ones above it (low tones mask high more than high mask low); and in **time** — a masker hides targets just after it (forward masking, ~100 ms) and even just before it (backward masking, ~20 ms).

**statement** — masking is the elevation of the **masked threshold** of a target sound caused by a masker, measured as the difference between masked and quiet (unmasked) thresholds. **Simultaneous (spectral/frequency) masking** acts when masker and target overlap in time, governed by the [[object.critical-band]]: only masker energy within the target's critical band is effective, with asymmetric **upward spread of masking**. **Temporal (non-simultaneous) masking** acts across time: **forward masking** (post-masking) and **backward masking** (pre-masking). **[confirmed]**

**basis** — Wegel & Lane (1924) gave the first systematic pure-tone masking data and documented the upward spread of masking, relating it to inner-ear dynamics. The bandwidth structure of simultaneous masking is the defining experiment behind the critical band (Fletcher). Forward/backward masking time constants and the masker-level dependence are robust across the literature. Quantities are empirical and depend on stimulus and procedure. **[confirmed]**

**lineage** — first quantitative measurement R. L. Wegel & C. E. Lane, *Phys. Rev.* (1924) [[source.wegel-lane-1924]]; bound to the [[object.critical-band]] by Harvey Fletcher's masking-band work (1933/1940) [[source.fletcher-1940]]. The principle is the engineering basis of perceptual audio coding (MP3, AAC): bits are not spent on masked components. Modern treatment in [[source.fastl-zwicker]]. **[confirmed]**

**sources** — [[source.wegel-lane-1924]], [[source.fletcher-1940]], [[source.fastl-zwicker]]; Wikipedia "Auditory masking."
