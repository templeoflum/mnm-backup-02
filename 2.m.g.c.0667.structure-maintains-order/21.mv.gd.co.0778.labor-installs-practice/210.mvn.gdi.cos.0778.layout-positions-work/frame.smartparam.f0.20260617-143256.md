# frame — smart param — f0 — one control, every affordance live, driven by the heart

address: 210 (layout·positions·work) · mode: builder window · status: **BUILT — all 6 rungs in, verified headless; tuning + polish left** · scope: `kit` (211/kit) · sibling of [[frame.kit.f7]]

A single parameter control that carries every affordance at once (no morph-by-type).
Settled across discussion; types deferred. Built to TUNE against the scope + heart.

## the agreement

**Model.** One control = one **[0,1] signal** (the value is ALWAYS normalized — that's what
the heart drives and what stays smooth). **min/max are OUTPUT metadata**, never the signal:
a consumer maps [0,1]→[min,max] downstream; exposed because output ranges are guessed wrong.
`out` stays [0,1]; the scope reads the signal. Types (continuous / stepped / cyclic) are a
known later layer, **deferred**. **All affordances always live.** Stable footprint: value
reads from fill + colour, never size.

**Anatomy — two zones + a popover.**

```
┌──────────────────────────────┐
│  NAME           (drive btn)  │   click → toggle DRIVE · right-drag = depth menu
├──────────────────────────────┤
│  ▸ VALUE  ◀  0.500  ▶         │   left-drag XY 
└──────────────────────────────┘
        right-drag ↓ pulls open:
          1 period
          2 offset
          3 min / max
```

**Value zone**
- **left click-drag → XY**: x sets the **value**, y sets the **saturation** of the value's colour
- **left click** (no move) → type an exact value
- **double-click** → reset to default
- **◀ ▶ steppers** → step by the grid

**Name zone** — labeled rectangle, depresses with colour feedback
- **click → toggle DRIVE** (on/off). (Drive lives only here — not in the dropdown.)
- **right click-drag down → the dropdown, by depth** (how far you drag = how many levels): 1 period · 2 offset · 3 min/max

**Button separation is the whole trick:** left button owns the value, right button owns
the depth menu — no two gestures share a button on a zone.

## heart connection (the ratio-wiring)

- **drive on** → the param reads phase off the heart's **shared turns odometer** (smooth
  across speed changes): `phase = fract(heartTurns / ratio + offset)`.
- depth-4 menu: **ratio** L1 · **offset** L2 · **min** L3 · **max** L4 (min/max = output meta).
- **drive off → freeze-in-place** (value stops where the heart left it, becomes the manual
  value).

## build sequence (chunk × slice × rung)

one new unit `smartparam.js` (the control), wired into the workbench as a part.

1. **shell** ✓ — the two-zone rectangle, stable footprint, value text + fill. Drops as a part.
2. **value, left-drag** ✓ — pointer-lock drag on the VALUE zone; x → value. steppers in.
   (click→type, double-click→reset still owed.)
3. **saturation, left-drag y** ✓ — y → saturation of the value colour; live while dragging.
4. **name zone → drive toggle** ✓ — name click toggles drive (green); synced to the
   inspector clock toggle; the loop animates the value.
5. **name right-drag depth menu** ✓ — right-button drag DOWN reveals 1→2→3 by distance:
   ratio · offset · min/max (reused scrub rows). Latches open; click-outside closes.
6. **heart wire** ✓ — driven `period = heartPeriod() × ratio` each frame; drive-off
   leaves the value frozen in place (manual drag resumes from there).

each rung committed + verified headless (Playwright screenshots). owed: **click→type**
and **double-click→reset** on the value zone; depth-menu width at 128px is cramped;
the inspector clock section is now vestigial for the smart param (drive lives on the name).

## deferred / open (named)

- **types** — continuous / stepped / cyclic. its own discussion; not in f0.
- **the grand unification** — whether this control eventually absorbs the separate parts.
  not decided; f0 is one new part alongside the others.
- **dropdown persistence** — does the depth menu latch open or spring closed? decide in rung 5.
- **right-drag vs scope/heart ranges** — saturation + value both ride the param's [min,max].

## laws (carried)

all affordances live · stable footprint, value by fill+colour · button separates the two
drags · the cursor disappears on grab (pointer lock) · driven by the one heart, by ratio ·
buildless, no deps ([[buildless-unit-default]]) · direct manipulation, not code
([[operator-builds-by-hand]]) · vocab-neutral, no tooltips · name rough edges, hold
provisionally ([[hold-positions-provisionally]]) · a hedge is not a halt — settle before
build ([[log.scope-overbuild]]).
