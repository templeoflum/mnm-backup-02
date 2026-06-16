---
name: ant-colony-optimization
type: object
object-type: algorithm
essence: a metaheuristic in which simple agents build solutions and deposit decaying "pheromone" on solution components, biasing later agents — an engineered computational stigmergy
field: [field.stigmergy]
status: established
state: float
attribution: Marco Dorigo (1992); Dorigo, Maniezzo & Colorni (1996)
formalized: 1992
source: [source.dorigo-1992, source.dorigo-maniezzo-colorni-1996, source.bonabeau-dorigo-theraulaz-1999]
depends-on: [object.stigmergy]
used-by: []
---

**statement (plain).** Ant-colony optimization (ACO) is a population-based metaheuristic for combinatorial optimization. A colony of simple agents ("ants") each constructs a candidate solution by making probabilistic choices among solution components; the probability of choosing a component depends on an artificial **pheromone** value associated with it (reinforcing past good choices) and often a heuristic desirability. After construction, ants deposit pheromone in proportion to their solution's quality, and pheromone **evaporates** over time. The shared pheromone state is the modified environment through which independent agents coordinate — a direct computational realization of stigmergy. [confirmed]

**statement (formal).** In the original Ant System for the traveling salesman problem, ant *k* at city *i* moves to city *j* with probability proportional to (τ_ij)^α · (η_ij)^β over feasible *j*, where τ_ij is the pheromone on edge (i,j) and η_ij = 1/d_ij is the heuristic (inverse distance). Pheromone updates as τ_ij ← (1−ρ)·τ_ij + Σ_k Δτ_ij^k, with evaporation rate ρ ∈ (0,1] and deposit Δτ_ij^k = Q/L_k for ants using edge (i,j) (L_k the tour length, Q a constant). [confirmed]

**basis.** ACO was introduced in Dorigo's 1992 PhD thesis and given its standard archival statement in Dorigo, Maniezzo & Colorni (1996), where the Ant System was tested on the traveling salesman, quadratic assignment, and job-shop scheduling problems [[source.dorigo-1992]] [[source.dorigo-maniezzo-colorni-1996]]. Bonabeau, Dorigo & Theraulaz (1999) frame ACO explicitly as an engineering application of insect stigmergy and situate it among swarm-intelligence methods [[source.bonabeau-dorigo-theraulaz-1999]]. [confirmed]

**limits.** ACO is a heuristic with no general guarantee of optimality or fixed convergence rate; performance depends on tuning (α, β, ρ, colony size) and on a good problem-specific heuristic. The plain Ant System is now largely superseded by refinements (Ant Colony System, MAX–MIN Ant System) that better manage exploration/exploitation [[source.bonabeau-dorigo-theraulaz-1999]]. [confirmed]
