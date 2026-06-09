# sketch — spline-ui — f1 — 20260607-160000

review. proposed changes to the UI.

---

## what should stay
- mode selector as segmented buttons. clear, immediate. three distinct strategies visible at a glance.
- scrub controls for order, segments, tension, speed. the drag-to-change pattern works.
- derivative source pickers (d:N) inline in channel monitors. direct, no extra panels.
- the "hot" indicator on pickers. the key feedback loop: you're reading a broken derivative.
- visualization toggles (detail, combs, influence, prediction). orthogonal controls.
- the text panel. the educational content is part of the instrument's value. it changes with mode and order, explaining what the user is seeing.
- play/pause + random shape buttons.

## what should change

### naming in UI text (per vocab sketch)
- mode buttons: "local spline" → "independent", "global polynomial" → "single polynomial"
- "coupled spline" → "coupled" (with tension slider)
- "drag any join" (already says "join" in some hints, "knot" in others — standardize to "join")
- "medium" in page title → "channels". title becomes: "Continuity across channels" or similar.
- "fused voice" label → "voice"
- "domain" anywhere → "channel"

### mode selector labels
current: "local spline" / "coupled spline" / "global polynomial"
proposed: "independent" / "coupled" / "single"

shorter, clearer, matches the vocab sketch. the mode names describe the construction strategy, not the math type.

### tension visibility
currently the tension scrub shows/hides with a display toggle. works fine. no change needed beyond the mode name update.

### text panel content
the educational text is mode-specific and detailed (~100 words per mode). it explains:
- what continuity means at this order
- what's broken and where
- the cross-medium point (same break in every channel)
- the Runge phenomenon (global mode)
- the coupling spectrum (coupled mode)

**proposal**: keep the content, update the vocabulary (knot→join, medium→channel, etc.). also: the text currently references "eleven mediums" — update to "thirteen channels" (the count and the word).

**decision needed**: should the text be external (loaded from a file) or inline? leaning toward inline — it's ~30 lines total across three modes, not worth externalizing. and it needs to reference dynamic values (order number, segment count).

### layout
the two-column responsive layout works well. left column (ladder) fills the visual focus. right column (channels + text) is the readout/explanation.

**decision needed**: any layout changes? leaning toward no — the layout serves the instrument well. the ladder dominates, the channels are secondary but always visible.

## what stays as-is
- scrub widget code (initScrub pattern)
- refreshPickers() logic
- resize handler
- keyboard/mouse interaction model

## summary
the UI is mostly carry-forward with naming updates. mode labels change (local→independent, global→single), vocabulary standardizes to the settled terms. the educational text content updates but stays inline. no structural UI changes.

---
