# incident report — compose loss — f1 (recurrence, sharpened)

Folds from f0 (same date). The operator reported a second loss during the
V4 build storm, then corrected it live: **the draft HAD persisted — the
pane selection reset on reload, so the text sat under a different pane,
invisible.** F1 (persistence) held; the loss was of *sight*, not bytes.
And the sharper complaint underneath: every reload blanks the whole surface
and flashes it back — "and it's reloading a lot — really way too much."

## §1 — what f0 missed

1. **Selection is state too.** Drafts were keyed per channel, but dSelected
   reset to pane 0 on every reload — a draft typed to clerk's pane came
   back hidden behind keeper's. Persisting the text without the pointer to
   it only half-protects the operator.
2. **The reload itself is the harm**, not just what it drops. During a
   build, clerk saves many times (V4 was ~10 edits); each save force-reloaded
   the tab; each reload blanked-and-flashed everything. F2's "batch + announce"
   was honored in word ("reloads once") and broken in fact — the Edit tool
   saves per call; a multi-edit batch IS a reload storm under hot-reload.
3. Chicken-and-egg: fixes to the reload behavior only take effect AFTER the
   next reload picks them up — the storm outruns its own cure by one cycle.

## §2 — fixes (landed with this fold)

- **F4 — selection persists**: dSelected survives reloads; the draft comes
  back in the pane it was typed to.
- **F5 — the reload is an OFFER, never an act**: auto-reload retired
  entirely. When a new build lands, the HUD reload button glows green and
  waits; the operator takes it when ready. No surface ever yanks itself
  again. (Supersedes f0's F3 deferral — the second occurrence overturned it.)
- **F6 — steady state is visually silent**: seat cards repaint only when
  their content actually changes (signature-guarded, age bucketed to the
  minute), matching the chat panes' existing guard. Quiet-dark applies to
  MOTION, not just color.

## §3 — the standing lesson

An interface the operator lives in may never move under his hands: not his
text, not his selection, not his scroll, not the whole page. Every refresh
is either content-change-driven or operator-initiated. This is now a
dispatch design law (frame V4); violations are incident-class, not polish.
