---
name: kendall-notation
type: object
object-type: convention
essence: The A/B/c shorthand classifying a queue by interarrival distribution, service distribution, and server count.
field: [field.queueing-theory]
status: established
state: settled
attribution: David G. Kendall (1953); later extended by Lee and others
formalized: 1953
source: [source.kendall-1953, source.gross-harris]
depends-on: []
used-by: [object.mm1-queue]
aliases: ["object.kendall-notation"]
---

# object.kendall-notation

**Statement (plain):** Kendall's notation names a queueing model with a compact code. In its basic three-factor form A/B/c, the first symbol gives the interarrival-time distribution, the second the service-time distribution, and the third the number of parallel servers. [confirmed]

**Statement (formal):** A/B/c, commonly extended to A/B/c/K/N/D, where K is the system capacity, N the calling-population size, and D the queue discipline. Standard symbols for A and B include M (Markovian / exponential, i.e. Poisson arrivals), D (deterministic), E_k (Erlang-k), and G or GI (general / general-independent). Thus M/M/1 denotes Poisson arrivals, exponential service, one server. [confirmed via [[source.kendall-1953]]]

**Basis:** The three-factor A/B/c form originates with Kendall (1953); the extension to capacity, population, and discipline fields is later convention, now standard in textbooks and software. It is a naming convention, not a derived result — its standing rests on universal adoption across the literature. Support: ubiquitous use in primary and reference works. Limit: the exact set and ordering of the extended fields (especially discipline) varies slightly between authors. [confirmed via [[source.gross-harris]]]
