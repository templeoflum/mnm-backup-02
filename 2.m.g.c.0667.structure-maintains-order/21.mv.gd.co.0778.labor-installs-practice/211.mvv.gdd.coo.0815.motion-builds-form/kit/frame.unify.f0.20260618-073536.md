# frame — unify: the heart's controls become smart params + the output layer

home: `kit` (project frame, co-located) · mode: builder window · status: **FRAMED — talked out; value-field removal flagged for confirm** · supersedes the deferred "unification" thread from [[baton.clerk.f12]] · sibling of [[frame.workbench-devloop.f0]] · [[frame.smartparam.f0]]

The heart's four controls become smart params. To do that the smart param grows the one piece it's
missing — an **output layer** — and we settle two value-concepts that were tangled.

## the two value layers (were conflated — they are independent)

- **RANGE LIMIT** (`min`/`max`) — confines the signal's accessible window *within* `[0,1]`. A limiter
  on travel; never leaves `[0,1]`. Currently **not wired** — `clamp()` hard-clamps to `[0,1]` and
  min/max are only stored. Wire it: `clamp` confines to `[min,max]`. Their control range is `[0,1]`.
- **OUTPUT MAPPING** (new) — maps the `[0,1]` signal onto a real-world range (Hz, ×, a count) so a
  *continuous* parameter reaches real values instead of running `[0,1]` forever. `outMin` / `outMax`
  + a **log** toggle (for decade ranges like Hz) + a **unit/format**. Drives BOTH the displayed digit
  and the emitted value; the signal underneath stays `[0,1]`.

These coexist on one param. The limiter lives in the param's quick-access dropdown; the output
mapping lives in the properties panel.

## the heart's controls become smart params

Replace the four heart scrubs with smart params, each via its output mapping:

| control  | mapping        | range        | unit | sink            |
|----------|----------------|--------------|------|-----------------|
| speed    | **log**        | 0.01–10000   | Hz   | `setFrequency`  |
| radix    | linear         | 2–16         | —    | `setRadixN`     |
| phase₀   | linear (ident) | 0–1          | —    | `setPhase0`     |
| playback | linear         | -3–3         | ×    | `setTimeScale`  |

Transport stays as-is: play/pause + stop buttons, and the seek scrub. The heart zone **relayouts**
to hold resizable smart params (see below) instead of the tight 3-column scrub grid.

## resizable param

Un-lock `.sparam{width:128px}` — the param flexes to its node like every other part (the node already
has a resize grip). No fixed width. (The self-stabilizing "pick an area + N parts, fill intelligently"
layout is a later exploration, not here.)

## mode reframe — move vs interact

- **"edit" becomes "move"** — its only job is rearranging parts (drag to reposition).
- **Properties are live in BOTH modes.** The panel **follows focus**: the param you're touching shows
  its properties, no separate gesture (same as the scope already follows focus). In move mode, the
  selected part does it.

## the param's properties panel (reworked)

`title · label · OUTPUT MAPPING (outMin · outMax · log · unit) · step · feel (pad size · fine ramp ·
ramp px) · sat (readout · base · span) · delete`

Changes from now:
- **Remove the clock section** (drive lives on the name; ratio/mult are in the Animation dropdown).
- **The panel's min/max become the OUTPUT MAPPING range** (not the limiter).
- **Remove the `value` field** — redundant with `default` + double-click-type; the param seeds from
  `default`. *(pending confirm.)*
- **Keep** step, feel, sat.
- **No repetition of the dropdowns** — the limiter (min/max) + default and the anim settings stay in
  the param's two right-drag dropdowns as quick access; they are NOT mirrored in the panel.

## build sequence (chunk × slice × rung)

1. **output layer** — smart param gains `outMin/outMax/log/unit`; display + emitted value run through
   it; signal stays `[0,1]`. The keystone piece; the heart params need it.
2. **wire the limiter** — `clamp` confines to `[min,max]`; the Properties-dropdown min/max scrubs
   range `[0,1]`.
3. **resizable** — drop the fixed width; flex to the node.
4. **panel rework** — remove clock section; min/max → output mapping; remove `value`; keep step/feel/
   sat; properties follow focus.
5. **mode reframe** — "edit" → "move"; properties live in interact via focus.
6. **heart → smart params** — replace the four scrubs with mapped smart params (table above); relayout
   the heart zone; keep transport.

## deferred / open (named)

- **drive on heart params** — a heart param that is itself driven = modulating the clock (the FM-self
  thread). Powerful; its own later layer.
- **the scrub-feel fix** — harder to articulate; revisit once params are unified.
- **self-stabilizing layout** — pick an area + N parts, fill intelligently. Later exploration.
- **`value` field removal** — recommended, pending operator confirm.

## laws (carried)

signal always `[0,1]` (the output mapping is a *view/emit* layer, not the signal) · limiter ≠ output
mapping, never conflate · feel is the operator's, correctness in the rig ([[log.smartparam-bugbatch]]) ·
settle before build ([[log.scope-overbuild]]) · hold provisionally ([[hold-positions-provisionally]]) ·
buildless, no deps ([[buildless-unit-default]]) · direct manipulation ([[operator-builds-by-hand]]).
