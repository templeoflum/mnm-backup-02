---
name: event-sourcing-append-only-architecture
type: field
essence: model state as an immutable, append-only log of events rather than mutable current values
canon: structure / slice-21 record & organization
grade: s
state: verified
links: [field.version-control-theory, field.reproducibility-engineering, source.fowler-2005, source.pacioli-1494]
---

**origin** (deep precursor) — double-entry bookkeeping's append-only ledger, Luca Pacioli, *Summa de arithmetica…* (1494); plus DB write-ahead logging / transaction logs (Gray et al.). [[source.pacioli-1494]] [[source.gray-transaction]] **[confirmed as attribution]**

**origin/codification** (naming) — Martin Fowler, "Event Sourcing," martinfowler.com (12 Dec 2005) — names pre-existing practice (Fowler labels it draft); Greg Young's CQRS/event-sourcing (c. 2010); Pat Helland, "Immutability Changes Everything," CIDR 2015. [[source.fowler-2005]] [[source.young-cqrs]] [[source.helland-2015]] **[confirmed]** *(honesty flag: origin is a naming act, not a seminal theorem.)*

**door** — Fowler's 2005 article (free); Vaughn Vernon, *Implementing Domain-Driven Design* (2013); Martin Kleppmann, *Designing Data-Intensive Applications* (2017). [[source.vernon-2013]] [[source.kleppmann-2017]]
