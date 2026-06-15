---
name: vogels-2009
type: source
essence: Vogels' "Eventually Consistent" — the working definition of eventual consistency
kind: article
author: Werner Vogels
year: 2009
venue: Communications of the ACM 52(1), Jan 2009 (orig. All Things Distributed blog Dec 2007; ACM Queue 6(6), Dec 2008)
state: settled
links: [field.event-sourcing-append-only-architecture]
---

Werner Vogels, "Eventually Consistent," *Communications of the ACM* 52(1):40–44 (January 2009).

Publication history — first posted on Vogels' *All Things Distributed* blog (Dec 2007), revised for *ACM Queue* 6(6) (Dec 2008), then *CACM* 52(1) (Jan 2009). [confirmed for blog→ACM Queue via allthingsdistributed.com; CACM placement per secondary catalogues]

Citation — definition: "the storage system guarantees that if no new updates are made to the object, eventually (after the inconsistency window closes) all accesses will return the last updated value."

Role — door for the eventual-consistency strand; Vogels (Amazon CTO) popularized the term in distributed-systems practice, building on Brewer's CAP (2000) and the BASE framing.

Access — CACM (paywall); blog version free.

**[confirmed]** *(year carried as 2009 = CACM; the same text exists 2007/2008 — venue is the variable, not the content.)*
