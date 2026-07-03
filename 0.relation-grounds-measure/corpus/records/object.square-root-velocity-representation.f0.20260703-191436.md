---
name: square-root-velocity-representation
type: object
object-type: method
essence: the SRV transform under which the elastic (reparameterization-invariant) metric on curves becomes the flat L² metric — making elastic shape analysis computable
field: ["[[field.statistical-shape-analysis]]"]
status: established
state: float
attribution: A. Srivastava, E. Klassen, S. Joshi, I. Jermyn (2011)
formalized: true
source: ["[[source.srivastava-2011]]"]
depends-on: []
used-by: []
---

**statement (plain)** — comparing curve shapes elastically means allowing them to be stretched and re-parameterized before matching. That elastic comparison is normally hard, but under the square-root-velocity representation it turns into ordinary L² distance on a sphere, with re-parameterization acting by simple isometries — so elastic shape distances become tractable.

**statement (formal)** — for a curve β, its SRV is q = β̇/√‖β̇‖; the elastic (Fisher–Rao-type) metric on curves pulls back to the L² metric on q, reparameterizations act by isometries, and the shape space is the quotient of the unit sphere in L² by rotation and reparameterization. **[confirmed]**

**basis** — Srivastava et al. (2011); door: Srivastava & Klassen, *Functional and Shape Data Analysis* (2016). Michor–Mumford curve-space theory underlies it.
