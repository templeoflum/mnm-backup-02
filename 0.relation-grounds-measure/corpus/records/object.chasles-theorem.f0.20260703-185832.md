---
name: chasles-theorem
type: object
object-type: theorem
essence: every rigid-body displacement in 3D is a screw motion — a rotation about an axis plus a translation along that same axis
field: ["[[field.screw-theory]]"]
status: proven
state: settled
attribution: M. Chasles (1830); precursor G. Mozzi (1763)
formalized: true
source: ["[[source.chasles-1830]]", "[[source.mozzi-1763]]"]
depends-on: ["[[object.eulers-rotation-theorem]]", "[[object.screw-motion]]"]
used-by: []
---

**statement (plain)** — Euler handled motions with a fixed point (pure rotation); Chasles handles all of them. Any way you move a rigid body from one pose to another in space is achievable as a single screw: one rotation about an axis together with a slide along that axis. General motion is screw motion.

**statement (formal)** — every element of SE(3) is a screw motion: a rotation about a unique screw axis composed with a translation parallel to it (the case of zero rotation gives a pure translation; zero pitch gives a pure rotation). **[candidate, partially confirmed]** — theorem certain; the 1830 primary citation is not verified (see [[source.chasles-1830]]).

**basis** — the affine companion of Euler's rotation theorem; equivalently a corollary of the affine Cartan–Dieudonné bound. Precursor: Mozzi's instantaneous screw axis (1763).
