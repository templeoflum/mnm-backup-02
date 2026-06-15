---
name: epsilon-delta-limit
type: object
object-type: definition
essence: the rigorous definition of a limit — f(x) can be forced within ε of L by keeping x within δ of p
field: [field.real-analysis-limits]
status: established
state: settled
attribution: precursors Bolzano (1817) and Cauchy (1821, Cours d'analyse); modern (ε, δ) form by Weierstrass (c. 1861, Berlin lectures)
formalized: true
source: [source.weierstrass-1861, source.cauchy-1821, source.bolzano-1817, source.rudin-1953]
depends-on: []
used-by: [object.intermediate-value-theorem, object.finite-difference-method]
---

**statement (plain)** — to say "f(x) approaches L as x approaches p" is given an exact meaning: no matter how small a target band ε you draw around L, there is a closeness δ around p such that whenever x is within δ of p (but not equal to p), f(x) lands inside the ε band around L. The challenge–response between ε and δ replaces vague talk of "getting close."

**statement (formal)** — lim_{x→p} f(x) = L iff
(∀ ε > 0)(∃ δ > 0)(∀ x) [ 0 < |x − p| < δ ⟹ |f(x) − L| < ε ].
Continuity of f at p is the special case L = f(p). **[confirmed]**

**status** — a definition (not a theorem); foundational. It is the precise replacement for Cauchy's infinitesimal/limit language and Newton–Leibniz "fluxions/infinitesimals."

**lineage** — B. Bolzano (1817) introduced the basics of the ε–δ technique, but his work was unknown in his lifetime [[source.bolzano-1817]]. A.-L. Cauchy (1821, *Cours d'analyse*) defined limits and continuity rigorously but in verbal/infinitesimal terms, not explicit ε–δ notation [[source.cauchy-1821]]. K. Weierstrass (c. 1861, Berlin lectures) first gave the (ε, δ) definition "in the form usually written today," with the lim notation [[source.weierstrass-1861]]. Standard codification in Rudin [[source.rudin-1953]]. **[confirmed]**

**reference** — [[source.rudin-1953]] (limits of functions, ch. 4); historical attribution **[confirmed as attribution]** for the 1861 Weierstrass date (transmitted via lecture notes, not a Weierstrass publication).
