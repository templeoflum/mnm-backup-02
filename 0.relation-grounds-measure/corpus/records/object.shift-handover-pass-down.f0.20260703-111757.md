---
name: shift-handover-pass-down
type: object
object-type: practice
essence: the structured transfer of an operation's live state and understanding from an outgoing to an incoming shift, so the picture survives the boundary
field: ["[[field.high-reliability-organizations]]"]
status: established
state: float
attribution: Patterson et al. (2004, cross-domain); SBAR format Haig et al. (2006)
formalized: false
source: ["[[source.patterson-2004]]", "[[source.haig-2006]]"]
depends-on: []
used-by: []
---

**statement (plain)** — A shift handover (pass-down, turnover, handoff, sign-out) is the moment an operation changes hands and its live state must cross the boundary without loss. In high-consequence settings this is deliberately engineered, not casual: Patterson et al. found robust handovers use strategies like face-to-face verbal update *with interactive questioning*, read-back, a continuously-updated written log, overlapping shifts, and *delaying* the transfer while the process is unstable. Structured formats such as SBAR fix what gets said so a shared mental model is rebuilt on the far side.

**relevance** — the failure point the practice guards is loss of situation awareness across the seam ([[object.situation-awareness]]): the incoming operator must inherit not just the raw data but the *comprehension* and *projection*. The cross-domain evidence (mission control, nuclear, rail & ambulance dispatch, medicine) makes it the scholarly ground for any close-out / baton discipline — the record must carry live threads, the next pull, and the unstable spots, and invite the interactive question [[source.patterson-2004]] [[source.haig-2006]] **[confirmed]**.
