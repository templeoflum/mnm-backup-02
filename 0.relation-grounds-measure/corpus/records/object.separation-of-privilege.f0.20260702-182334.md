---
name: separation-of-privilege
type: object
object-type: principle
essence: require two independent keys to authorize a protected action, so no single person or single failure can trigger it
field: ["[[field.high-reliability-orgs-safety-engineering]]"]
status: established
state: float
attribution: Saltzer & Schroeder (1975), one of the eight security design principles
formalized: false
source: ["[[source.saltzer-schroeder-1975]]"]
depends-on: []
used-by: ["[[object.two-person-rule]]"]
---

**statement (plain)** — do not let one key open the lock. A protection mechanism that demands two separate, independently held conditions to grant access is more robust than one satisfied by a single condition: no one actor, and no single mistake or compromise, is enough. It raises the cost of both error and abuse, because two independent things must go wrong or collude.

**statement (principle)** — Saltzer & Schroeder (1975): "Where feasible, a protection mechanism that requires two keys to unlock it is more robust and flexible than one that allows access to the presenter of only a single key… no single accident, deception, or breach of trust is sufficient to compromise the protected information." The organizational instance is the two-person rule [[object.two-person-rule]].

**basis** — one of the eight design principles of [[source.saltzer-schroeder-1975]]. *Support* — dual-control in banking, split-knowledge key management, the nuclear two-person concept. *Limits* — adds cost and can slow legitimate action; it protects the *authorization* step, not everything downstream. **[confirmed]**

**sources** — [[source.saltzer-schroeder-1975]] (original codification). **[confirmed]**
