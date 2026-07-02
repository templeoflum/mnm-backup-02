---
name: cauchy-riemann-equations
type: object
object-type: definition
essence: the pair of PDEs a function's real and imaginary parts must satisfy to be holomorphic
field: ["[[field.complex-analysis]]", "[[field.harmonic-fourier-analysis]]"]
status: established
state: settled
attribution: appeared in d'Alembert (1752) & Euler (1777) in hydrodynamics; made the criterion of function theory by Cauchy (1814–) and Riemann (1851)
formalized: true
source: ["[[source.cauchy-1825]]", "[[source.riemann-1851]]", "[[source.dalembert-1752]]", "[[source.euler-1777]]", "[[source.ahlfors-1953]]"]
depends-on: []
used-by: ["[[object.cauchy-integral-theorem]]"]
aliases: ["object.cauchy-riemann-equations"]
---

**statement (plain)** — write a complex function as f(z) = u(x,y) + i·v(x,y), splitting it into its real part u and imaginary part v. For f to be complex-differentiable (holomorphic), the way u changes must lock together with the way v changes: the rate of u in the x-direction must equal the rate of v in the y-direction, and the rate of u in the y-direction must be the negative of the rate of v in the x-direction. Real differentiability is not enough; these two equations are the extra constraint that makes a function "complex-smooth."

**statement (formal)** — for f = u + iv with u, v real-valued on an open set, the Cauchy–Riemann equations are
∂u/∂x = ∂v/∂y and ∂u/∂y = −∂v/∂x.
If f is complex-differentiable at a point, u and v necessarily satisfy them there. Conversely, if u and v are real-differentiable and satisfy the equations on a domain, f is holomorphic; the Looman–Menchoff theorem sharpens the converse to: f continuous on a domain with the CR equations holding at every point ⇒ f holomorphic. **[confirmed]**

**status** — established (a definition/criterion, not a theorem to be open/proven).

**consequence** — u and v are each harmonic (∂²u/∂x² + ∂²u/∂y² = 0); this is the bridge to harmonic / potential theory. **[confirmed]**

**lineage** — the equations first appear in J. d'Alembert's *Essai d'une nouvelle théorie de la résistance des fluides* (1752) and in L. Euler's work (paper to the Petersburg Academy, 1777), both in hydrodynamics, not as an analyticity criterion. A.-L. Cauchy used them to build function theory from his 1814 memoir onward [[source.cauchy-1825]]; B. Riemann's 1851 dissertation made them foundational to the geometric theory of functions [[source.riemann-1851]]. Named for Cauchy and Riemann because they first treated the system as a mathematical object founding a theory, though d'Alembert and Euler discovered the relations earlier. Carried as lineage, not flattened. **[confirmed]**

**sources** — Encyclopedia of Mathematics, "Cauchy–Riemann equations"; Wikipedia, "Cauchy–Riemann equations"; arXiv:2311.16649 (Piña-Aguirre & Farfán Márquez, historical review); Ahlfors, *Complex Analysis* [[source.ahlfors-1953]].
