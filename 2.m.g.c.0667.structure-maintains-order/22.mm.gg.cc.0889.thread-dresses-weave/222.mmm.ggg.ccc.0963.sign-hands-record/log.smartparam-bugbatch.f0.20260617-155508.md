# log — incident — smart param bug batch

stamp: 20260617-155508 UTC · seat: clerk · type: log (222 sign·hands·record) · status: **RESOLVED — fixes in `648d547`, continuity verified**

## C — change

The smart param was built across 6 rungs (commits `4f339ba`…`e978ad6`) and the heart's
time scrub was brought back earlier (f11). On live use, a batch of defects surfaced. This
log analyses them; no fixes applied — held for discussion.

## O — observation (each defect + root cause)

**1. Pointer-lock "Press Esc to show your cursor" banner.** Mine. The value drag (and the
old scrub.js drag) use the **Pointer Lock API** to hide the cursor + free movement past the
screen edge. The Esc banner is browser chrome with **no API to suppress** — it is the
inherent cost of pointer lock. I chose pointer lock for the unbounded-motion feel and never
flagged the banner as its price.

**2. Tooltips / writing on the walls.** Mine (and partly carried). Instructional prose on
the surface: the toolbar mode hint ("arrange — pick a zone…" / "live — touch a param…"),
inspector hints ("nothing selected · pick a zone"), the scope-properties hint. Drift against
a settled law — surface carries product/value text only ([[product-surface-vs-process]],
[[tooltips-are-not-ground]]). No HTML `title=` tooltips exist; the offenders are hint text.

**3. Value range runs 1 → −6.75.** Mine. The depth-menu **min/max scrubs are unbounded**
(createScrub defaults to ±Infinity). Dragging `min` sent it to −6.75; the value's clamp
then uses that min, so the value range became [−6.75, 1]. Carelessness — reused the scrub
without bounding it.

**4. Right-click context menu opens during the depth drag.** Mine. `contextmenu`
preventDefault is bound **only to the name zone**. The right-drag captures on the name but
the contextmenu event fires at the element actually under the pointer (often off the name,
into the menu/value area) → not prevented. Scope of the guard was too narrow.

**5. min/max cut off in the depth menu.** Mine. The menu is the control's width (128px);
two scrubs side-by-side in the min/max row don't fit and clip. Operator's call: **stack
them — make it depth 4** (ratio · offset · min · max, one per level).

**6. Driven param JUMPS while the heart stays smooth.** Mine — and a verification gap. The
heart keeps a **turns odometer** (accumulates `dTurns` incrementally; never recomputes from
absolute time), so changing its speed is smooth. My rung-6 wire instead computes the param
phase as `phaseAt(n.clk, t)` with `t = now()` (absolute) and `n.clk.period` reassigned each
frame to `heartPeriod × ratio`. `fract(t/period)` is **discontinuous when period changes** —
so every heart-speed change makes the param jump. The two clocks don't share the odometer.
*The verification missed this:* my headless test changed speed then counted **wraps**
(confirmed period tracks the heart) but never checked **continuity across the change** — I
verified the feature's presence, not its quality. [[log.scope-overbuild]] kin: verify the
thing actually behaves, including smoothness, not just that the wire exists.

**7. Clock scrub doesn't behave like the original.** Mine. Two differences:
- *cycle count.* Original: `turns = Math.floor(turns) + scrubValue` — keeps the accumulated
  whole cycles, seeks only the fraction. Mine (`setScrub`): `turns = p − phase0` — **zeroes
  the cycle count**, so distance/cycle readouts reset and post-scrub playback restarts from
  cycle ~0.
- *control kind.* Original scrub was a direct **0..1 range slider** (jump the thumb to a
  position). I rebuilt it as the kit **scrub chip** (relative drag + pointer lock), so it
  accumulates rather than jumping-to-position, and it inherits the Esc banner (#1).

## where we went wrong (meta)

- **Verification proved presence, not quality.** The heart wire passed a wrap-count test and
  a scope screenshot, both of which a *jumpy* implementation also passes. Continuity was
  never asserted. The screenshots verified "it's wired," not "it's right."
- **Defaults carried defects.** Reusing createScrub for menu rows imported its unbounded
  range (#3) and its pointer-lock drag + banner (#1, #7) without re-deciding whether those
  fit the new context.
- **Law drift.** Hint prose crept back onto the surface (#2) against a settled rule.
- **Honest apportionment:** most of this is mine (rungs 5–6 + the scrub rebuild). The heart's
  odometer design is sound and inherited; the mismatch is my param wire not matching it.

## D — decision

**No fixes yet.** Held for discussion. Open questions to settle first:
- pointer lock vs `cursor:none`+capture — keep unbounded motion (with banner) or drop it for
  a clean surface? (affects #1, #7-control-kind)
- the heart wire: drive params off the **heart's turns odometer** (shared smooth clock) —
  agree the approach before rebuilding (#6)?
- min/max: depth-4 stack confirmed; what **bounds** do min/max and ratio get (#3, #5)?
- the clock scrub: match the original (keep cycle count, range-slider feel) or keep the chip?

trail: 211 built → 221 live use surfaces defects → 222 recorded, held. landing:
the green wrap-count hid a jump; quality wasn't in the test.

## resolution (`648d547`)

All seven fixed per the agreed approach. Pointer lock dropped everywhere (cursor:none +
capture) — no banner. Heart wire rebuilt off the shared odometer (`heartTurns`); signal is
now always [0,1] with min/max as output metadata. Depth-4 stacked menu; contextmenu
suppressed; clock scrub matches the original; hint prose stripped. **This time the
verification asserted continuity** — sampled the driven value frame-by-frame across a
2 Hz→5 Hz change: 0 jumps, 192 smooth steps + 12 legit wraps, value stayed 0.030→1.000.
The lesson held: test the quality, not just the wire.
