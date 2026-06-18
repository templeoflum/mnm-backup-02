# frame — workbench dev-loop — f0 — persist · control · read

address: 210 (layout·positions·work) · mode: builder window · status: **FRAMED — talked out, pinned, not built** · scope: `kit` (211/kit) · revises the param gestures of [[frame.smartparam.f0]] · sibling of [[frame.kit.f7]]

The working loop around the bench: the floor survives reload, the heart starts/stops clean, the param's menus split by what they touch, and the scope shows where the grain sits. Four chunks, independent — each lands on its own.

## the agreement

### A — persistence (autosave, single slot)
The floor clears on every reload today. → **Autosave only.** State serializes on every change, rehydrates on load. You see edits land live and the floor persists. **No named saves / preset loading yet** — that's a later chunk, deliberately set down.

### B — heart: play / stop split
Pause becomes **two buttons**: **Play** and **Stop**.
- **Play / Pause** — holds the odometer where it is (existing pause behaviour).
- **Stop** — zeroes `heartTurns` (full reset to origin).

Three states (playing · paused · stopped), two buttons after the split.

### C — param: menus split by zone, value by gesture
The single depth-menu (ratio·offset·min·max on the name) splits into **two menus, picked by side of the right-drag**. Right-click never overlaps because **the two actions live in two different zones** — no timing threshold needed.

**Name zone** — right-click-drag opens a menu; the side picks which:
- **right side → ANIMATION**: ratio · **multiplier** · offset
- **left side → PROPERTIES**: min · max · **default**

**Value zone**:
- **left-drag = XY pad** — **X → value**, **Y → grain** (lower Y = finer grain). At Y=1 the modifier tiers `Ctrl` / `Ctrl+Shift` / `Alt+Shift` push **coarser → moves faster**.
- **right-click → reset to default** (the `default` set in the Properties menu).
- **double-click → type an exact value** in the field.

**New pieces introduced:** `multiplier` (animation), `default` (properties + the reset target).

### D — scope channel 2 = grain readout
Scope **channel 2 displays the param's Y (grain) value** — a plain readout of where the grain is sitting as you drag. Not output routing; the signal stays [0,1] as before.

## anatomy

```
┌──────────────────────────────┐
│  NAME           (drive btn)  │  right-drag LEFT → Properties (min·max·default)
│                              │  right-drag RIGHT → Animation (ratio·mult·offset)
├──────────────────────────────┤
│  ▸ VALUE  ◀  0.500  ▶         │  left-drag = XY (x:value · y:grain)
└──────────────────────────────┘  right-click → reset · double-click → type

   heart:  [▶ Play] [■ Stop]        scope ch2:  ⎍⎍ grain readout
```

## build sequence (chunk × slice × rung)

four independent chunks — order is convenience, not dependency.

**A — autosave**
1. serialize workbench state (parts + their settings) to localStorage on change.
2. rehydrate on load; empty/missing → clean default floor.
3. verify: place parts → reload → floor intact.

**B — heart play/stop**
1. split the pause control into Play and Stop buttons.
2. Stop → zero `heartTurns`; Play/Pause → hold odometer.
3. verify headless: stop resets phase to 0; pause holds.

**C — param menus + value gestures**
1. split name right-drag into side-aware: left→Properties, right→Animation.
2. add **multiplier** to Animation; add **default** to Properties.
3. value zone: right-click → reset-to-default; double-click → type-in-field.
4. confirm Y→grain + modifier tiers still read right after the reorg.
5. verify headless where testable (menu contents, reset, type); **feel is the operator's** (drag, grain ramp).

**D — scope ch2 grain readout**
1. route the param's current Y (grain) value to scope channel 2 as a readout trace.
2. verify: drag Y → ch2 tracks.

each rung committed; correctness checks added to `dev/verify.mjs` where headless can see them.

## deferred / open (named)

- **named saves / preset loading** — chunk A is autosave only; named snapshots are a later want.
- **types** (continuous / stepped / cyclic) — still its own layer, deferred (carried from f0).
- **the unification** — smart param + heart params as one class. This frame moves *toward* it (params gaining multiplier/default/menus, scope reading param state) but does **not** do it; the unification is its own talk-out + frame.

## laws (carried)

all affordances live · stable footprint, value by fill+colour · right-button/right-click separated from left by **zone**, no timing · driven by the one heart, by ratio · autosave is silent, no save-button ceremony · buildless, no deps ([[buildless-unit-default]]) · direct manipulation, not code ([[operator-builds-by-hand]]) · vocab-neutral, no tooltips · correctness in the rig, **feel is the operator's** ([[log.smartparam-bugbatch]]) · settle before build, a hedge is not a halt ([[log.scope-overbuild]]) · hold provisionally ([[hold-positions-provisionally]]).
