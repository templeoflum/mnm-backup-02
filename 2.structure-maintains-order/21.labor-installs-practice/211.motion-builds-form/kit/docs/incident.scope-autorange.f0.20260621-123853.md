# incident — scope auto-range broke the scope — f0

status: **FIXED FORWARD — awaiting operator feel-test** (NOT reverted; the broken commit stays in history as the record). The whole-buffer auto-range is gone; replaced with per-node natural ranges that LERP on focus (smooth transition, no snap, no wobble, no stale pollution). · offending commit: the "scope: always-live auto-range" change · sibling of [[incident.scrub-dead-drag.f0]] (both: a green rig over a broken behaviour, fixed forward)

## what broke

The scope no longer works right. After the always-live auto-range change, the trace doesn't read correctly in real use. The rig passed (34/34) — so this is a **green-≠-correct** failure: the checks confirmed the trace *fills the lane*, not that it's *stable or correct*.

## root cause (technical)

The change auto-ranges every frame by fitting `min/max` to the **entire visible buffer** (`scope.js` loop), lerping toward that window's `[lo,hi]`. Four failure modes fall out:

1. **The range never settles.** For any non-constant signal the window's `lo/hi` move every frame, so `min/max` chase them every frame — the whole trace re-normalises continuously and wobbles. (A constant signal converges; nothing else does.)
2. **Stale history pollutes the scale.** The buffer keeps ~527 samples (intended — "keep the history"), but the auto-range fits *old + new*. After a focus switch the range is dominated by the previous signal until it scrolls off (~9s at 60fps). The operator asked to range to "whatever's flowing **now**" — fitting the whole window ranges to now **+ stale**, the opposite.
3. **Small signals amplified.** A barely-moving signal auto-fits to full height, so tiny variation looks like wild swings — the absolute reference is lost.
4. **2-channel shares one range.** If ch A and ch B differ in scale, the shared fit squishes one.

## why it shipped (process root cause)

A **feel/behaviour change was treated as done on a green rig.** I built it, the rig went green (it only screenshots trace *spread* in a single frame — which auto-range trivially satisfies), I committed and moved to the next task — **without an operator feel-test.** The rig is a regression net, never a proceed-gate ([[checks-are-a-net-not-a-gate]]); a display/feel change is **operator-gated by eye**, and I skipped that gate. Same family as [[incident.scrub-dead-drag.f0]] (green rig over a broken interaction).

## proposed fix (NOT applied — operator's call)

**Immediate (unbreak):** revert the auto-range commit — restore the prior per-node range so the scope works again. Then re-approach (b) deliberately.

**Then, a stable version of "always-live auto-range":**
- **Range to a SHORT recent window, not the whole buffer** — "what's flowing now," so stale pre-switch history can't dominate the scale.
- **Expand-fast, shrink-slow (envelope + decay)** — the range jumps out to fit a new extreme instantly but contracts slowly, so it settles and stays stable instead of wobbling.
- **Per-channel range in 2-channel mode** — A and B each fit their own lane.
- *(Alternative if "track the flow" proves inherently jumpy: keep per-node natural ranges but LERP the transition on focus — stable absolute scale, smooth switch, no history-swap jump. This was option (a)+smoothing; revisit if (b) can't be made calm.)*

**And a real guard:** before re-doing it, add a rig check that measures scope **stability** (range/trace not moving across N frames for a steady signal) — the current checks only measure spread, which is why this slipped.

## landing

Auto-ranging to the live window every frame is unstable by construction; "auto-range to what's flowing now" needs a recent-window envelope with asymmetric decay, not a whole-buffer fit. The deeper miss is mine: I let a green rig stand in for the operator's eye on a feel change. Halted; awaiting the word on the fix direction.
