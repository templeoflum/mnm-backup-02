# pin — radial param (the clock as control surface) — f0

home: `kit` (project pin, co-located) · type: **pin** — a forming format meant to supersede `sketch` (101) + `parked` (100) into one idea-capture doc; **float**, not yet registered in the keystone · status: **unbuilt idea, captured for later**

## the idea

A way to read the unit-circle's projections by hand. Instead of the smart param's XY pad, the
control surface is the **clock circle itself**. You grab it and move the **point around the
circumference** — angular, a rotary joystick, not x/y. A **modifier key switches which projection
of that point is the output**: the raw position (phase), or `sin`, or `cos`, etc. So one angular
control, several **output tracks** you flip between.

## current lean (this session)

Probably **not a separate param type** — more likely a **selection / mode on the smart param**
itself (operator's read). The smart param gains a "circular" control mode + an output-projection
selector, rather than a whole new part. Reduces surface, reuses all the drive/ratio/scope wiring.

## why it fits the ground

The "tracks" already exist — `clock.js` / the unit-circle (THE UNIT) already compute these:
`cosAt`, `sinAt`, the N-gon / polygon point, the velocity and acceleration vectors. So this is a
**hand-tap onto the unit-circle's own relational signals**, not new math. It's also the
**unification** surfacing from the other side (the heart's geometry becoming param-controllable).

## open forks (resolve when picked up)

- **drive vs manual** — is the point heart-driven (grab to scrub/offset, like drive→freeze), or a
  manual angle that ignores the heart, or both?
- **signal contract** — `sin`/`cos` are **[-1,1]** (bipolar), but the smart param's law is *signal
  always [0,1]*. Does the circular mode go bipolar, or map `(x+1)/2` to stay [0,1]? Real fork.
- **tracks + switch** — which projections (phase/cos/sin/tan/polygon/radius?), and is the modifier
  **momentary** (hold to peek) or a **latch** (tap to cycle the active output)?

---

## project housekeeping note (deferred — its own cleanup pass)

**Consolidate this project's files into the kit folder.** Frames/pins/bugs for a project should
live *with* the project, not scattered across central addresses. Currently split:
- `frame.workbench-devloop.f0` + `frame.smartparam.f0` — at `210`
- `bug.pool.f0` — at `211/kit`
- this pin — at `211/kit`

Gather them under the kit project home in a later pass. Not now. (And once `pin` settles as a
format, register it in the keystone's document-types line and retire `sketch`/`parked`.)
