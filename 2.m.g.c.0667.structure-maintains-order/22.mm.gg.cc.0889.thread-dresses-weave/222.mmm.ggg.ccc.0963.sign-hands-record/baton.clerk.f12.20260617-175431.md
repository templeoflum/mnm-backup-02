# baton — clerk — f12

closed: 20260617-175431 · gait: [hold] (operator closing out for the night) · folds from [[baton.clerk.f11]]

## state (live threads — 3, healthy)

- **THE SMART PARAM — built, fixed, tunable. At 211/kit; frame.smartparam.f0 at 210.** One control, every affordance live, signal always **[0,1]** (min/max = output metadata only). NAME zone: click→DRIVE (green), right-drag-down→DEPTH MENU (ratio·offset·min·max, 4 stacked levels). VALUE zone: left-drag x→value, y→**precision** (down=finer to default; Ctrl/Shift/Alt=coarser), **saturation = the precision readout** (finer→grey). Driven off the heart's **shared turns odometer** (`fract(heartTurns/ratio + offset)`) — smooth across speed changes (verified, 0 jumps). Restyled to the heart-scrub look. **FEEL knobs exposed** in the properties panel (pad size · fine ramp · ramp px · sat base · sat span · debug pad). Pointer-lock dropped everywhere → `cursor:none` (no Esc banner).
- **THE VERIFY RIG — `kit/dev/verify.mjs`, persistent.** Serves the kit, drives headless Chrome (`channel:'chrome'`), runs named checks (**steppers · feel · smoothDrive**), screenshots to `dev/shots/` (gitignored). Run: `node dev/verify.mjs [check]`. **CORRECTNESS lives here; FEEL is the operator's** (cursor-hide, drag feel, debug overlay are headless-blind). Add a check → a regression test.
- **THE KIT instrument (oscilloscope house) — established.** pool · center scope (1/2-ch stacked, selectable, properties) · heart (master clock, 3×2 stacked scrubs, WebGPU unit-circle). Smart param drops as the `param` part. Buildless, no deps, no tooltips, clean walls.

## next pull (ONE)

**Frame the UNIFICATION: smart param + heart params = ONE class** (operator: "make them the same thing"). Talk it out first → write the frame → build. The heart's controls become params whose output drives the clock. This is where **FM-self** + the **spline-continuity toy as the heart's speed-modulation curve** plug in (as mod sources, post-unification). Do NOT build before the talk-out.

## snags

- **bug.pool** (just logged at `211 — kit/dev/bug.pool.f0`) — in edit mode, selecting the pool locks selection (can't select else / can't deselect). OPEN, not investigated.
- heart scrub value `0.50 Hz` slightly clips to `0.50 H` in the tight column — widen heart zone a hair if wanted.
- `.sp-debug` overlay element leaks on node delete (minor; debug-only).
- LF→CRLF git warnings on every kit commit (cosmetic).

## wants-word

- **dial the feel live** (pad size / fine ramp / ramp px / sat base+span) — operator tunes; report how it reads. Confirm my **"pad size" = px-to-cross-range** read is what he meant by "working size."
- the **unification** design (the talk-out before framing).
- **scope-reads-heart-params**: resolved as "make it a SETTING, not a reasoned choice" — pending the unification (a param property).
- review the **pin** mechanism + agreement-as-frame ([[pin.formal-agreement-contract]]).

## carry

Session lesson (hard-won, twice): **verify QUALITY not just presence** — the wrap-count test a jumpy impl also passed; continuity had to be asserted explicitly ([[log.scope-overbuild]], [[log.smartparam-bugbatch]]). And the deeper one the operator named: **feel can't be reasoned out between us — expose it as a knob he turns.** That's why the FEEL panel exists. Operator is the persistence — no operator baton; his mid-flight (dial-feel, unification) folded into wants-word above. Keystone (CLAUDE.md) is the shared ground; this file is only the seat. Resume: read **frame.smartparam.f0 + this baton**, run `node dev/verify.mjs`.
