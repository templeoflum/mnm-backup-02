# incident — assumed-function — f0

address: 212 — coherence · adapts · snag

## what happened

Operator asked (024046) for "a little loading wheel or typing symbol" so he
could see when a seat was working on a response. Clerk designed a mechanism
solo — posture reads `working` when the seat's self-reported status is under
2 minutes old — built it, probed it green, deployed it, and reported it done
(025x). Operator (031000): "this was my fear, this isn't a valid way to track
what's going on, timers — we need real time updates otherwise it's just a
hallucination." Then (031219): "you need to properly reason this through
including how to test and verify it and agree on its intended function —
you've just been doing stuff and assuming it's right, that's a miss."

## the two layers

1. **Skipped gate.** The indicator's intended function was never proposed or
   agreed — clerk picked a definition (fresh self-report = working) and built
   on it. Propose → discuss → settle → build; the settle was skipped. Kin to
   incident.unapproved-fix f0 (20260703): chat-speed loops change the tempo
   of work, never the gates. Second instance of the family in two days.
2. **Timer dressed as a signal.** The mechanism inferred "working now" from
   the age of a voluntary report. Green probes verified the mechanism did
   what clerk built — they could not verify it meant what the operator asked,
   because that meaning was never agreed. A green check on an un-agreed
   function is confirmation, not verification.

## forward

Indicator/signal builds get the full gate even at chat speed: intended
function agreed in words → mechanism from ground-truth events (the harness's
own hooks), never clock-inference → co-run verify plan agreed → build.
Proposal posted in-thread 031420 (function, mechanism, limits, four-check
co-run); build waits on the operator's cut.
