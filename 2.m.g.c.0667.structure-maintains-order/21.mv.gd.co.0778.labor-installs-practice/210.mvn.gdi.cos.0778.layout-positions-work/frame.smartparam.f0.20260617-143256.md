# frame — smart param — f0 — one control, every affordance live, driven by the heart

address: 210 (layout·positions·work) · mode: builder window · status: **AGREED — ready to build** · scope: `kit` (211/kit) · sibling of [[frame.kit.f7]]

A single parameter control that carries every affordance at once (no morph-by-type).
Settled across discussion; types deferred. Built to TUNE against the scope + heart.

## the agreement

**Model.** One control = one continuous numeric value (types — continuous / stepped /
cyclic — are a known later layer, **deferred**). **All affordances always live.** Stable
footprint: the control never resizes with its value; value reads from fill + colour.

**Anatomy — two zones + a popover.**

```
┌──────────────────────────────┐
│  NAME           (drive btn)  │   click → toggle DRIVE
├──────────────────────────────┤
│  ▸ VALUE  ◀  0.500  ▶         │   left-drag XY · right-drag = depth menu
└──────────────────────────────┘
        right-drag ↓ pulls open:
          1 drive toggle
          2 period
          3 min / max
```

**Value zone**
- **left click-drag → XY**: x sets the **value**, y sets the **saturation** of the value's colour
- **right click-drag down → the dropdown, by depth** (how far you drag = how many levels): 1 drive · 2 period · 3 min/max
- **left click** (no move) → type an exact value
- **double-click** → reset to default
- **◀ ▶ steppers** → step by the grid

**Name zone** — labeled rectangle, depresses with colour feedback
- **click → toggle DRIVE** (on/off). (Same drive as dropdown level 1, surfaced twice.)

**Button separation is the whole trick:** left button owns the value, right button owns
the depth menu — no two gestures share a button on a zone.

## heart connection (the ratio-wiring)

- **drive on** → the param is driven off the master clock: `period = heart.period × ratio`.
- period set in the dropdown (level 2). ratio is the lock to the one heartbeat.
- **drive off → freeze-in-place** (value stops where the heart left it, becomes the manual
  value). *[assumption — operator to override if snap-back was meant]*

## build sequence (chunk × slice × rung)

one new unit `smartparam.js` (the control), wired into the workbench as a part.

1. **shell** — the two-zone rectangle, stable footprint, value text + fill. Drops as a part.
2. **value, left-drag** — reuse the pointer-lock drag (from scrub.js); x → value. click→type,
   double-click→reset, steppers. (the value zone, fully, minus colour.)
3. **saturation, left-drag y** — y → saturation of the value colour; live while dragging.
4. **name zone → drive toggle** — click toggles drive; depress + colour feedback.
5. **right-drag depth menu** — right-button drag down reveals 1→2→3 by distance: drive ·
   period · min/max. closes on release or settles open (tbd in build).
6. **heart wire** — drive on → `period = heart.period × ratio`; freeze on drive-off.
   connects to the heart already mounted in the workbench.

each rung commits; tune against the scope (2-ch) + heart between rungs.

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
