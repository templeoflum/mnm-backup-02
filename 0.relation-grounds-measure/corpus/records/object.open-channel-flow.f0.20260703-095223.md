---
name: open-channel-flow
type: object
object-type: concept
essence: free-surface flow in a channel, governed by gravity and boundary resistance; the literal hydraulic ancestor of "channeling"
field: ["[[field.fluid-dynamics-hydrodynamic-stability]]"]
status: established
state: float
attribution: Chézy (1770s) and Manning (1889) resistance formulas; codified in Chow (1959)
formalized: true
source: ["[[source.chow-1959]]"]
depends-on: []
used-by: []
---

**statement (plain)** — Open-channel flow is flow with a free surface — rivers, canals, flumes — driven by gravity down a slope and resisted by the channel's bed and banks. The channel geometry (slope, cross-section, roughness) *is* the resistance landscape: bank and bed shape where and how fast the water goes. Designing that geometry to route a flow is the original engineering sense of "channeling."

**resistance laws** — uniform-flow velocity is set by resistance formulas: Chézy's V = C·√(R·S) (1770s) and Manning's V = (1/n)·R^(2/3)·S^(1/2) (1889), with R the hydraulic radius, S the slope, and n the roughness coefficient [[source.chow-1959]] **[confirmed]**. The flow regime — subcritical, critical, or supercritical — is set by the Froude number Fr = V/√(g·D); transitions between regimes produce hydraulic jumps.

**relevance** — SHAPE in its most literal form: banks, beds, weirs, and sluices as removed degrees of freedom that make the intended path the path of least resistance.
