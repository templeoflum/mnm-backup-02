---
name: evans-2003
type: source
essence: Evans' "Domain-Driven Design" (2003) — names the Aggregate, aggregate root, and consistency boundary
kind: book
author: Eric Evans
year: 2003
venue: Addison-Wesley, *Domain-Driven Design: Tackling Complexity in the Heart of Software*
state: settled
links: [field.event-sourcing-append-only-architecture]
---

Eric Evans, *Domain-Driven Design: Tackling Complexity in the Heart of Software*, Addison-Wesley (2003).

Citation — names the **Aggregate** pattern: a cluster of entities and value objects treated as a single unit for data changes, with one entity chosen as the **aggregate root** (the only object external references may point to) and a **consistency boundary** within which invariants are enforced.

Role — door/codification for the aggregate keystone; the transaction-per-aggregate refinement comes later via Vernon 2013.

Access — book (paid).

**[confirmed]**
