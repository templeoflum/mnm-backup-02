---
name: erlang-c-formula
type: object
object-type: method
essence: The probability that an arriving customer must wait in an M/M/c queue; basis of server/trunk dimensioning.
field: ["[[field.queueing-theory]]"]
status: established
state: settled
attribution: A. K. Erlang (1917)
formalized: 1917
source: ["[[source.erlang-1917]]", "[[source.gross-harris]]"]
depends-on: ["[[object.mm1-queue]]"]
used-by: []
---

# object.erlang-c-formula

**Statement (plain):** The Erlang C formula gives the probability that a customer arriving to a multi-server queue (Poisson arrivals, exponential service, c identical servers, infinite waiting room — an M/M/c system) finds all servers busy and must wait. It is the standard tool for sizing telephone trunk groups and staffing call centres for a target delay. [confirmed]

**Statement (formal):** With offered load a = λ/μ and c servers (traffic intensity ρ = a/c), the delay probability is

C(c, a) = [ a^c / (c! (1 - ρ)) ] / [ Σ_{k=0}^{c-1} a^k/k! + a^c / (c! (1 - ρ)) ].

Given this waiting probability, the mean waiting time in queue follows as W_q = C(c, a) / (cμ - λ). The companion Erlang B (loss) formula applies to the no-queue, blocked-calls-cleared case. [confirmed via [[source.erlang-1917]]]

**Basis:** Derived by Erlang (1917) from the equilibrium (birth-death) equations of the M/M/c queue, extending the single-server M/M/1 analysis to c servers with a shared queue. [confirmed via [[source.erlang-1917]]] Support: textbook-standard and validated in a century of teletraffic practice; presented as a core result in the field's reference texts. Limit: assumes Poisson arrivals, exponential service, statistical equilibrium, and infinite patience (no abandonment) — call-centre work routinely corrects for abandonment and non-exponential service. [confirmed via [[source.gross-harris]]]
