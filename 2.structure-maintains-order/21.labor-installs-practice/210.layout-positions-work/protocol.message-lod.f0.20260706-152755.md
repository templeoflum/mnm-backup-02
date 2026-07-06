# protocol — message-lod — f0

address: 210 — layout · positions · work

*thin. a message declares what to show at each level of detail, so the reader reveals
depth without the summarizer guessing. **declared beats derived.** float — the mock is
where we test the concept before we worry how to wire it.*

---

## the levels — a title, then the ternary unfold (3 · 9 · 27)

- **title** — one line. this IS the message, collapsed; NOT an LOD — the always-visible handle.
- **unfold 1 · 3 lines** — the first reveal.
- **unfold 2 · 9 lines** — more.
- **unfold 3 · 27 lines** — the full body; at 27 the message **scrolls within itself**
  (verbatim, everything), the rest of the chat **locks** (stops scrolling), and the message
  fills the chat window — you are focused on this one until you minimize it.

**two rules working together:** the line budgets (3 · 9 · 27) are the targets; the **screen
caps** them — the deepest level is whichever binds, the 27-line budget OR the chat window's
height (screen-proportional). a small window fills sooner; the budgets never overflow the frame.

## how a message designates them (declared — the primary path)

the message carries its levels as **metadata with defined limits** — a title plus the body,
the reader unfolds the body into the 3 / 9 / 27 budgets:

- **title** = the first line (the sender's handle for the whole thing)
- **body** = everything after; the unfold fills 3 → 9 → 27 lines of it, then scrolls verbatim

an agent MAY mark explicit cut-points (what belongs in the 3-line reveal vs the 9) when a
message wants a hand-tuned unfold; absent marks, the body just fills each budget in order.

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

## why 3 · 9 · 27 — grounding

- **the lattice's own ternary.** a reading unfolds the SAME way an address deepens: stem
  (1 digit) → leaf (2) → cell (3), each level branching ×3 — 3, 9, 27. the message's depth is
  self-similar with the house's addressing depth; the numbers are the keystone's, not a UI pick.
- **perceptual chunking** [[object.perceptual-chunking]] (Chase & Simon 1973, *established*) —
  reading proceeds in a few larger *meaningful units*, not raw increments; each level is a chunk
  grasped as a unit. fixed meaningful levels beat continuous scaling.
- **focus + context** — the deepest level (full-screen, chat locked) is *focus*: everything else
  recedes so one message holds the whole attention. standard progressive-disclosure, aligned
  with the ecological-interface ground [[object.ecological-interface-design]].

---

*tested in the mock first (build the experience, then wire — see [[note.mock-first-dev]]).
companion to [[legend.control-language]] (what the cues MEAN) and the comms head/tail
taxonomy (the symbols).*
