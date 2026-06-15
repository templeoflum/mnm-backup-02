---
name: poincare-bendixson-theorem
type: object
object-type: theorem
essence: in the plane there is no room for chaos — a bounded trajectory must settle to a fixed point or a closed loop
field: [field.dynamical-systems]
status: proven
state: verified
attribution: formulated by H. Poincaré (1880s, without complete proof); rigorously proved by I. Bendixson (1901)
formalized: true
source: [source.poincare-1890, source.bendixson-1901, source.strogatz-nonlinear, source.hirsch-smale-devaney]
depends-on: [object.dynamical-system, field.point-set-topology]
used-by: []
---

**statement (plain)** — for a smooth flow in the plane, a trajectory that stays in a bounded region and does not run into an equilibrium has only one option for its long-term fate: it spirals onto a closed loop (a periodic orbit). The plane is too cramped for the wandering, never-repeating behavior that chaos requires — that needs at least three dimensions of continuous-time room.

**statement (formal)** — let ϕ be a C¹ flow on an open subset of ℝ² (or the cylinder or the 2-sphere). If the forward orbit of a point is contained in a compact set and its ω-limit set contains only finitely many fixed points, then that ω-limit set is one of:
1. a single fixed point,
2. a periodic orbit, or
3. a finite union of fixed points together with homoclinic and heteroclinic orbits connecting them.
In particular, a nonempty compact ω-limit set containing no fixed point is a periodic orbit. **[confirmed]**

**status** — proven.

**lineage (contested attribution)** — [[Henri Poincaré]] formulated the planar limit-set result in his memoirs *Sur les courbes définies par une équation différentielle* (1881–1886) but did not give a complete proof. The full rigorous proof is due to [[Ivar Bendixson]], "Sur les courbes définies par des équations différentielles," *Acta Math.* 24 (1901), pp. 1–88 [[source.bendixson-1901]]. Hence the joint name. A. J. Schwartz (1963) extended the classification of minimal sets to general compact connected 2-manifolds. **[confirmed as attribution]** — the 1901 venue/pages are opened; Poincaré's original memoirs are cited via secondary surveys, not the primary text. The general celestial-mechanics origin sits in [[source.poincare-1890]].

**sources** — Wikipedia "Poincaré–Bendixson theorem"; Ciesielski, "The Poincaré–Bendixson Theorem: from Poincaré to the XXIst century," *Cent. Eur. J. Math.* (de Gruyter/Springer, 2012); Strogatz, *Nonlinear Dynamics and Chaos*, §7.3 (door).
