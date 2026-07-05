---
name: eulers-rotation-theorem
type: object
object-type: theorem
essence: any displacement of a rigid body with one point fixed is a single rotation about an axis through that point (the Euler axis)
field: ["[[field.screw-theory]]"]
status: proven
state: settled
attribution: L. Euler (1775/1776)
formalized: true
source: ["[[source.euler-1776]]"]
depends-on: []
used-by: ["[[object.chasles-theorem]]"]
---

**statement (plain)** — spin and tilt a ball however you like while keeping its center fixed; the net effect is always just one rotation about some single axis. There is no genuinely two-axis fixed-point motion — it always collapses to one.

**statement (formal)** — any R ∈ SO(3) (RᵀR = I, det R = +1) other than the identity has +1 as an eigenvalue; the corresponding eigenvector is the rotation (Euler) axis, and the motion is a rotation about it by the Euler angle. **[confirmed]**

**proof** — det(R − I) = 0 follows from det R = 1 and orthogonality, so +1 is an eigenvalue; its eigenspace is the fixed axis. Foundational to SO(3) and the parameterization of rotations.
