# note — mock-first-dev — f0

address: 210 — layout · positions · work

*a development style the operator named in passing (20260706). float — hangs here until
we have run it enough to formalize it (or drop it).*

---

**build the experience first, wire it after.** build a fake surface that *pretends* to do
the thing — no real backend — and use it to discover what you actually want the thing to
do by pretending it already does it. once the experience is formed right, THEN wire it up.
you avoid sinking time into technical plumbing for behaviour that is probably going to
change anyway.

**why it works:** the build discloses the decisions — the words, the edge cases, the feel —
that you cannot reason out in advance. pretending-it-works surfaces *"what's in the way of
making it work,"* which is a smaller, clearer problem than guessing the whole stack up
front. [[build-discloses-dont-reason-from-afar]]

**where we are:** the dispatch mock IS this — a static / mock surface tuned by hand (cards,
paperwork, chat, LOD, the message-lod protocol) before any wiring to the server. the wiring
follows the settled experience, not the other way around.

---

*named casually, kept deliberately — the operator wanted it noted somewhere it would hang.*
