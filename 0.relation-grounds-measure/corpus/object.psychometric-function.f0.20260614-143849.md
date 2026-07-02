---
name: psychometric-function
type: object
object-type: definition
essence: the sigmoid relating response probability to stimulus magnitude — its location defines threshold (JND / absolute threshold)
field: [field.psychophysics]
status: established
state: settled
attribution: classical psychophysical methods, G. T. Fechner (1860); modern fitting practice — Wichmann & Hill (2001) and others
formalized: true
source: [source.fechner-1860, source.gescheider-1997]
depends-on: []
used-by: []
aliases: ["object.psychometric-function"]
---

**statement (plain)** — if you plot the chance of someone detecting (or correctly discriminating) a stimulus against how strong the stimulus is, you get an S-shaped curve: near zero at weak intensities, rising to near-certain at strong ones. Where that curve crosses a chosen probability defines the **threshold** — the dividing line between "below sense" and "sensed." The **absolute threshold** is the level detected half the time; the **difference threshold** (just-noticeable difference, JND) is the smallest change detected reliably.

**statement (formula)** — the psychometric function ψ gives response probability as a function of stimulus level x:

ψ(x; α, β, γ, λ) = γ + (1 − γ − λ) · F(x; α, β),

where F is a sigmoid (cumulative Gaussian, logistic, or Weibull), α is the threshold/location, β the slope, γ the guess rate (lower asymptote, e.g. 0.5 in 2AFC), and λ the lapse rate (upper-asymptote miss rate). Threshold is read off at a criterion probability — 50% for yes/no absolute threshold, commonly 75% (midway) in two-alternative forced choice. **[confirmed]**

**basis / empirical support & limits** — the unifying analytic object behind the classical methods (**method of constant stimuli**, method of limits, method of adjustment) and adaptive **staircase** procedures. Threshold is a *summary statistic of the curve*, not a fixed physiological wall; real procedures rarely yield the theoretical threshold exactly because of bias and finite sampling, and ignoring the lapse rate biases slope/threshold estimates. **[confirmed]**

**lineage** — the classical psychophysical methods and the threshold concept trace to G. T. Fechner, *Elemente der Psychophysik* (1860) [[source.fechner-1860]]. The modern sigmoid-fitting formulation with explicit guess and lapse parameters is associated with Wichmann & Hill, "The psychometric function" (*Perception & Psychophysics*, 2001) and related work. The threshold reading interacts with bias, which [[object.signal-detection-theory]] decomposes. **[confirmed]** *(Wichmann–Hill paper not opened directly; the parametric form is corroborated across two independent secondary sources.)*

**door** — [[source.gescheider-1997]]; Wikipedia "Psychometric function."

**sources** — [[source.fechner-1860]], [[source.gescheider-1997]]; Wikipedia "Psychometric function"; LibreTexts / course notes on psychophysical methods.
