---
name: mm1-queue
type: object
object-type: model
essence: The single-server queue with Poisson arrivals and exponential service; the canonical solvable queueing model.
field: [field.queueing-theory]
status: established
state: settled
attribution: classical; a special case of the birth-death process, standard since the mid-20th century
formalized: 1953
source: [source.kendall-1953, source.gross-harris]
depends-on: [object.kendall-notation]
used-by: [object.erlang-c-formula]
aliases: ["object.mm1-queue"]
---

# object.mm1-queue

**Statement (plain):** The M/M/1 queue is a single-server system in which customers arrive according to a Poisson process (exponential interarrival times) and require exponentially distributed service times, served first-come-first-served from an unbounded waiting room. It is the simplest non-trivial queue with a closed-form steady state and serves as the reference model for the field. [confirmed]

**Statement (formal):** Let λ be the arrival rate, μ the service rate, and ρ = λ/μ the traffic intensity. The number in system is a birth-death continuous-time Markov chain with constant birth rate λ and death rate μ. When ρ < 1 the stationary distribution is geometric, P(N = n) = (1 - ρ)ρ^n. The mean number in system is L = ρ/(1 - ρ); applying Little's law gives mean sojourn time W = L/λ = 1/(μ - λ). The system is stable (a stationary distribution exists) if and only if ρ < 1. [confirmed via [[source.gross-harris]]]

**Basis:** The model is the c = 1 instance of the M/M/c family under Kendall's notation. [confirmed via [[source.kendall-1953]]] Its solution follows from the standard birth-death balance equations, and the geometric stationary law and stability threshold ρ < 1 are textbook results. Support: derivable in closed form and matched in simulation. Limit: the Markovian (memoryless) arrival and service assumptions are an idealization; real arrival and service processes are often non-exponential, motivating M/G/1 and G/G/1 generalizations. [confirmed via [[source.gross-harris]]]
