# incident — scrub dead-drag — f0

status: **OPEN — work halted by operator; cause found, fix not yet applied** · offending commit `cbb436f` (scrub pointer-lock) · sibling of [[incident.scope-focus-miss.f0]]

## what broke

Dragging a scrub no longer changes its value, and it never locks. Affects every scrub — the dials in the smart-param menus (ratio/mult/offset, min/max/default), the inspector (out min/max, period, feel, gap, field nums), and the ratio-system controls. Arrows, double-click-to-type, and right-click-reset still work (separate handlers).

## root cause (technical)

The drag rewrite changed the move listener from `el` **`pointermove`** to `document` **`mousemove`**, while keeping **`e.preventDefault()`** on `pointerdown`.

`preventDefault()` on a `pointerdown` suppresses that interaction's compatibility **mouse** events (`mousemove`/`mouseup`/`click`). Pointer events (`pointermove`) are not suppressed — which is why the original code worked. The rewrite moved the handler onto the suppressed event:

- drag → `mousemove` never fires → `adjust()` never runs → value never changes.
- `adjust()` is also where `preDist` accumulates toward the 3px lock threshold → threshold never reached → `requestPointerLock` never called → no lock.

So the single `preventDefault` kills the whole drag: no adjust, no lock. Matches the report exactly.

## why it shipped (process root cause)

1. **Event-type change without the platform rule** — swapped `pointermove`→`mousemove` without accounting for `preventDefault` suppressing compatibility mouse events. A web-platform gap applied directly to shared infra.
2. **Pattern lifted out of context** — copied the smart param's `document`-`mousemove` style. That works there because its drag is click-initiated / Pointer-Lock-driven (lock generates `mousemove`), not a `preventDefault`-ed `pointerdown`. The listener style was taken without the conditions that make it valid.
3. **Shipped unverified behind a green rig** — scrub is used in 13 places and **no rig check drags a scrub**. 30/30 green said nothing about the changed behavior. The gap was known and named in the handoff ("the drag-lock is the one thing the rig can't verify — feel is the operator's") and the change shipped anyway. Green on unrelated checks was treated as verification.

## the pattern

[[reproduce-the-real-repro]] was on file and ignored: never let a green rig that does not exercise your change stand in for verifying it. Verify against reality (keystone 221), not against the parts that happened to stay green. The miss was not subtle — it broke the scrub's core job (adjust the value) for every dial, not just the new lock feature.

## fix direction (NOT yet applied — halted)

- **Immediate restore:** revert `cbb436f` → the working pre-lock scrub returns. (That commit also stripped comments; the comment-strip is fine and trivially re-applied after.)
- **Real fix (later):** keep the move handler on `pointermove` (not `mousemove`), or drop the `preventDefault`, or feed the locked-pointer movement through `pointermove` too — to be settled when work resumes.
- **Coverage first:** add a rig check that drops a scrub, drags it, and asserts the value changes (and that lock engages) — land that check *before* re-attempting the lock, so the regression can't recur silently.
