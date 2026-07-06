# protocol — message-lod — f0

address: 210 — layout · positions · work

*thin. a message declares what to show at each level of detail, so the reader reveals
depth without the summarizer guessing. **declared beats derived.** float — the mock is
where we test the concept before we worry how to wire it.*

---

## the three levels

- **LOD 0 · skim** — one line, the gist. always shown (the collapsed message, like any other).
- **LOD 1 · summary** — the key points. shown on the first pull.
- **LOD 2 · full** — verbatim, everything. shown on the second pull.

## how a message designates them (declared — the primary path)

the message's own **structure** carries the levels — no metadata schema bolted on, just
three zones the reader keys on (same philosophy as the tracker's bookend headers):

- **first line** = LOD 0 skim (the sender's own gist)
- **a summary block** = LOD 1 (marked — e.g. the lines up to a blank line)
- **the rest** = LOD 2 full body

so a well-formed message reads: `<one-line skim>` · `<summary>` · `<full body>`.

## the fallback (derived — when nothing is declared)

a message with no structure (a quick human one-liner, or legacy traffic) gets its levels
**derived**: skim by salience (keep the nouns + verbs, drop filler — the noun·verb·mod
lens; grounded by the corpus salience read, keeper's word pending), summary by first
sentences, full verbatim. declared always wins where present.

## the metadata that already rides along

a message already carries: **head-symbol** (`!` `~` `?` `…` `✓` `✗` — needs-you / urgency),
**from → to** routing, **thread**, **needs-tag**. the LOD zones extend this self-describing
message — it becomes a small document that says *how to read it at each depth*.

## the rule

**declared primary, derived fallback.** an agent structures the important messages (cheap —
we already think in these layers); a quick line stays one zone and gets auto-skimmed. no
burden on the common case, reliability where it is authored.

---

*tested in the mock first (build the experience, then wire — see [[note.mock-first-dev]]).
companion to [[legend.control-language]] (what the cues MEAN) and the comms head/tail
taxonomy (the symbols).*
