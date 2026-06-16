# frame — ts-plane — f0

address: 210 (layout·positions·work) · mode: builder window · status: **ACTIVE FOCUS** · scope: `plane` unit (project `ts`, at 211/ts) · spine: [[frame.ts-formula.f3]] · siblings: [[frame.ts-unit-circle.f0]] · [[frame.ts-schedule.f0]]

One of the three things we stay on for a while, **slowly, meditatively — plane and only plane.** Built by exploring and observing the build; nothing rushed, no reaching ahead to the merge.

## the subject

**The plane is the unit's stage** — the space the unit's rotation lives in and moves through. Settled (operator, 20260616): it is *not* a standalone object; it exists only as the stage. A plane with no unit on it is the aesthetic version we reject. The test for anything in it: **does it faithfully represent the mathematics and turn it into a usable signal** — not "does it look like a plane."

## the axes (built, at 211/ts · plain JS + WGSL, buildless — see [[buildless-unit-default]])

- **κ — curvature continuum.** One dial: hyperbolic (κ<0) ← euclidean (0) → spherical (κ>0). Shown intrinsically (Theorema Egregium) in the geodesic grid — rings bunch (sphere) / spread (hyperbolic), one formula continuous through zero. No fake 3D bend.
- **chart.** cartesian / polar — relabels the same κ-curved space; gauge, not geometry.
- **algebra.** complex / dual / split-complex — the unit "circle" |z|²=1 + null set (zero-divisors). The +/0/− trichotomy on number (i²=−1 / ε²=0 / j²=+1) ↔ elliptic/parabolic/hyperbolic.
- **isometry — the unit's motion.** One free **amount** slider (t, 0=identity; for rotate, t IS the phase angle) drives the chosen **type**: rotate (elliptic) / horocycle (parabolic) / translate (hyperbolic), as SU(1,1) maps that **fix the unit circle**. Type is **bound to κ**: rotation is an isometry at every κ; horocycle/translate only at κ<0 (dimmed otherwise). The readout shows live **status** — `isometry` or `DISTORTION`. No sync toggle (reasoned out: type isn't a free parameter, only the amount is).

## settled principles (the bridge)

- **usable = bounded = isometry-preserving.** A map that unbinds the unit circle (fills the screen) leaves the usable set — there's no track to read a signal from. The unit-preserving maps are the **isometries**.
- **κ determines the isometry group.** Curvature and its symmetry group are one thing — that *is* the algebra↔geometry bridge, shown not asserted (dial κ negative and horocycle/translate unlock).
- **the unit circle is the invariant track** — the boundary held still while the interior moves; the visible proof of "isometry."

## equipment

`diag.render.js` (211/ts) — CPU port of the fragment shader; sweeps any param combo to PNG (gitignored). How we observe without the browser while the `:8000` restart is pending.

## open (plane-only — do not reach past these)

- **κ>0 richer motions.** Only the unit-preserving spherical motion (rotation, fixes the equator) is in. The sphere's other isometries (that move the equator) — deferred question.
- **"rotate spins the whole plane."** Correct for the stage-under-rotation, but the felt rotation (a point orbiting the circle) needs the unit's point ON the stage — that is the deferred **merge**, not a plane fix. Carried here, not chased.
- **live observation** of the slider in motion (rigid vs distorting) — needs the server restart.
- **incoming research** to ingest (operator, pending).

## out (deferred — named so they don't creep in)

the **merge** (unit's point riding the stage, phase driving the motion) — only after all three parts exist · **scheduling** → [[frame.ts-schedule.f0]] · measurement/signature → branch-0, parked.

## laws (carried, light)

faithful before pretty · prove/observe before trusting · a question halts — reason, don't justify ([[questions-halt]]) · let the build expose, don't declare ([[stay-lucid]]) · slow is the speed.
