---
name: greenshields-model
type: object
object-type: model
essence: the simplest fundamental-diagram closure — a linear speed-density relation giving a parabolic flow-density curve
field: [field.traffic-flow-theory]
status: empirical
state: float
attribution: B. D. Greenshields (1935)
formalized: 1935
source: [source.greenshields-1935, source.treiber-kesting-2013]
depends-on: [object.fundamental-diagram-of-traffic]
used-by: []
---

# greenshields-model

**statement (plain).** The earliest and simplest fundamental-diagram model: mean speed decreases linearly with density, from the free-flow speed at zero density to zero at the jam density. Because flow is speed times density, this gives a parabolic (inverted-U) flow-density curve with a single capacity maximum at exactly half the jam density.

**statement (formal/formula).** Speed-density: v = v_f·(1 − k/k_j), where v_f is free-flow speed and k_j is jam density. Flow-density: q = k·v = v_f·k·(1 − k/k_j), a parabola in k. Capacity q_max = v_f·k_j/4 occurs at critical density k_c = k_j/2 and speed v = v_f/2.

**basis (empirical).** Fitted by Greenshields (1935) to photographically measured speed and density data, reporting an approximately linear speed-density relation [[source.greenshields-1935]] [confirmed]. *Support:* it remains the canonical first model of the fundamental diagram and a standard textbook reference case [[source.treiber-kesting-2013]] [confirmed]. *Limits:* the strict linearity and the k_c = k_j/2 prediction often disagree with observed diagrams; it does not capture the free-flow branch shape, capacity drop, or two-regime behavior, motivating Greenberg, Underwood, triangular, and other forms [[source.treiber-kesting-2013]] [confirmed].
