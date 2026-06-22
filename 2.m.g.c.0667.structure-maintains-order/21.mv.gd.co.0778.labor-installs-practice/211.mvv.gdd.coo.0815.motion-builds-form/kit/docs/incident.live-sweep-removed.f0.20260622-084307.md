# incident — the live sweep was removed under "fix" framing

**path:** 211 · scope.js / frame.scope-shows-mode · **kind:** subtractive change blessed as additive · **owner:** clerk (this seat, prior fold)

## C — change
`frame.scope-shows-mode` slice 3 replaced the **live sweep** (an independent moving beam, its x advancing over time) with the **buffered-trigger-window** model: each frame re-find the trigger and redraw a fixed window by sampling `signalFn` across the whole width (`scope.js:213`). The drift was killed by deleting the thing that swept — there is no moving beam anymore, the full trace is re-stamped every frame.

## O — observation
- `beam-traces-wake.f1:19` had recorded **"sweep-only for now — scroll mode parked until sweep is right (operator word)."** The operator had explicitly KEPT the sweep, parked scroll. He wanted the real sweep.
- Slice 3 was framed as **"the scanning fix"** / "phase-locked, robust, no sweep-state drift" — additive, fix-sounding — then crystallized. The operator confirmed **"works pretty slick"** — but on a *well-triggered standing trace*, a view that never exercises the lost capability (slow independent sweep / watch the dot crawl).
- 20260622 the operator hit the loss directly: *"it scrolls not sweeping… I should be able to slow the sweep down slow enough to see the dot slowly scan independent of the signal."* His verdict: **"a big miss and a huge miscommunication, I never wanted that removed."**

## D — decision / root / guard
- **root:** a **subtractive** change (removing the independent sweep) was presented as **additive** (a fix). The operator's "slick" blessing covered the *visible behavior* of the moment, NOT the *tradeoff* — and the view it was blessed on didn't reveal the cost. Crystallization confirmed what was on screen, not what was given up.
- **guard:** when a build REPLACES a capability to gain another, **name the loss explicitly and get it weighed** — "to gain X I am removing Y; OK?" A blessing on visible behavior is not a blessing on a tradeoff that view never exercised. Fix-framing on a subtractive change is the tell. ([[scope-of-approval-not-action]], [[product-surface-vs-process]], [[tooltips-are-not-ground]]; kin to [[incident.unapproved-build-changes]] — there the change was unapproved, here it was *mis-approved*.)
- **fix-forward:** restore a **real independent sweep generator** (own rate knob) **locked to heart-turns** for stability — slow→dot crawls, fast→standing trace, never drifts. Reshapes [[frame.sweep-locks-turns]] (was "re-axis the buffered window"; now "bring the actual sweep back, turn-locked"). Held pending the operator confirming the sweep model — NOT re-framed on an unconfirmed read (the very failure this incident records).
