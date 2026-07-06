---
name: rfc793-1981
type: source
essence: RFC 793, the Transmission Control Protocol specification — defines TCP's sliding-window flow control (the receive window)
kind: standard
author: Jon Postel (ed.); DARPA / Information Sciences Institute
year: 1981
venue: IETF Request for Comments 793 (September 1981)
state: settled
links: ["[[object.tcp-flow-control]]", "[[field.flow-control]]"]
---

Jon Postel (ed.), "Transmission Control Protocol," IETF RFC 793, September 1981.

Contains — the foundational TCP specification. Defines the sliding-window mechanism and the **receive window** the receiver advertises in every segment, the basis of TCP flow control: the sender's unacknowledged data may not exceed the window the receiver currently offers, and a window of zero halts transmission. (Obsoleted by RFC 9293 in 2022, which consolidates errata; 793 remains the classic origin.)

Access — open at ietf.org/rfc/rfc793; public standard. **[confirmed as attribution]**
