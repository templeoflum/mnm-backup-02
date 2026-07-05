---
name: ryu-takayanagi-formula
type: object
object-type: principle
essence: S_A = Area(γ_A)/4G — the entanglement entropy of a boundary region equals the area of the bulk minimal surface anchored to it
field: ["[[field.quantum-gravity]]"]
status: established
state: settled
attribution: S. Ryu & T. Takayanagi (2006)
formalized: true
source: ["[[source.ryu-takayanagi-2006]]"]
depends-on: ["[[object.ads-cft-correspondence]]"]
used-by: ["[[object.spacetime-from-entanglement]]"]
---

**statement (plain)** — take a region of the boundary theory and ask how entangled it is with the rest. The answer is an *area*: find the smallest surface in the gravitational interior that hangs from the region's edge, and its area (in Planck units, over 4G) is the entanglement entropy. Quantum information is measured by geometry.

**statement (formal)** — S_A = Area(γ_A)/(4G), with γ_A the codimension-2 minimal (extremal) surface in the AdS bulk with ∂γ_A = ∂A, homologous to A; G the bulk Newton constant. Verbatim (PRL 96, 181602): entanglement entropy in (d+1)-dimensional CFTs "can be obtained from the area of d dimensional minimal surfaces in AdS_{d+2}, analogous to the Bekenstein-Hawking formula for black hole entropy." **[confirmed]**

**basis** — `established` as the standard prescription of holographic entanglement entropy *within* AdS/CFT — conditional on the duality it lives in ([[object.ads-cft-correspondence]], itself `open`). The quantitative engine of the spacetime-from-entanglement program.
