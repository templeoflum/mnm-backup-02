---
name: screw-motion
type: object
object-type: definition
essence: a rotation about an axis combined with a translation along that same axis — the general form of a rigid-body displacement (a “twist” in SE(3))
field: ["[[field.screw-theory]]"]
status: established
state: settled
attribution: Mozzi (1763); Chasles (1830); Ball (1900)
formalized: true
source: ["[[source.mozzi-1763]]", "[[source.ball-1900]]"]
depends-on: []
used-by: ["[[object.chasles-theorem]]", "[[object.product-of-exponentials-formula]]"]
---

**statement (plain)** — think of turning a screw: it rotates about an axis and advances along that same axis at once. Any rigid motion in space is of this form — a screw. The axis is the screw axis; the ratio of advance per turn is the pitch.

**statement (formal)** — a screw motion is an element of SE(3) = ℝ³ ⋊ SO(3) that is a rotation by θ about a line ℓ composed with a translation d along ℓ; pitch = d/θ. Its infinitesimal generator (a twist) lies in the Lie algebra 𝔰𝔢(3). **[confirmed]**

**basis** — the primitive of screw theory (Ball 1900); the object Chasles' theorem asserts every displacement to be, and the one-parameter subgroups whose product gives forward kinematics (Brockett).
