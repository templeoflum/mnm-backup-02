---
name: free-energy-principle
type: object
object-type: principle
essence: self-organizing systems persist by minimizing variational free energy — an upper bound on surprise; perception and action are two ways to minimize it
field: ["[[field.predictive-processing]]"]
status: established
state: float
attribution: K. Friston (2006, 2010); antecedents Helmholtz (unconscious inference), Rao & Ballard (1999)
formalized: true
source: ["[[source.friston-2010]]"]
depends-on: []
used-by: ["[[object.active-inference]]"]
---

**statement (plain)** — anything that stays itself over time — a cell, an animal — must keep its states within viable bounds, i.e. avoid surprising itself. The free-energy principle says such systems act as if minimizing a quantity (free energy) that upper-bounds surprise: they carry a model of their world and keep model and world in register.

**statement (formal)** — variational free energy F is an upper bound on surprise (negative log model-evidence) of sensory states; minimizing F approximates Bayesian inference. Minimization proceeds two ways: perception/learning (update the model toward the world) and action (change sensory input toward the model's predictions). "Embodied generative models" — the organism's phenotype entails a probabilistic model of how sensory states are generated. **[confirmed]**

**basis** — Friston (2010, *Nat. Rev. Neurosci.*), building on Friston-Kilner-Harrison (2006). A unifying, ambitious, and contested framework; `established` as a research program's core principle, not a proven theorem. [[source.friston-2010]]
