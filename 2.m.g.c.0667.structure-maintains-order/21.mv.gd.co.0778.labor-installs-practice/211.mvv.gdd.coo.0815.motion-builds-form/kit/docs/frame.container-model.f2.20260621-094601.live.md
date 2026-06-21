# frame — container model — f2 — container · persists · arrangement  [forming]

Collapse the four container *types* into one configurable container whose arrangement is a persisted property. A container is a container; how it arranges is a setting.

## §1 — agreement · at a glance

- layout is a **property** of a container (set in the inspector, **persisted** across reload), not a part-type.
- the palette stops exposing stack/row/grid as separate parts.
- absorbs the pool grid→stack reset bug — persisting layout is the fix.
- **dropdown is a container layout, not a separate part** (settled — A). one `container` part, layout `{stack|row|grid|dropdown}`. a dropdown = a container that reveals (same shape as ratio's min/max/def menus, which fold in later). the **pool** is the lone exception: root container, `{stack|row|grid}` only.

## §2 — plan · slices & rungs

status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked

**slice 1 — model: layout as a property**  ○ todo
goal: arrangement is a saved field on the container, not its identity.
- ○ one `container` part with a `layout` prop `{stack|row|grid|dropdown}` (default `stack`); collapse the 4 part-types into it
- ○ `buildContainer` reads `layout` → stack / row / grid / dropdown rendering
- ○ pool keeps `{stack|row|grid}` (root container, no dropdown)

**slice 2 — inspector: set the layout**  ○ todo
goal: change a focused container's arrangement by hand.
- ○ layout selector on the focused container (reuse selector / binselector)
- ○ wire it to the container's `layout` prop

**slice 3 — persist: layout survives reload**  ○ todo
goal: a grid stays a grid across the hot-reload (the pool bug).
- ○ red-first rig check: set grid → reload → assert still grid (must fail first)
- ○ `layout` into save / restore
- ○ confirm the check goes green — that bug becomes the guard

## §3 — trace · DAG & status

```
slice 1 ─┬─→ slice 2
         └─→ slice 3   (rung-1 red-first, before rung-2)
```

- **status:** forming — framed, unbuilt; dropdown settled (A), slice 1 ready to build.
- **touches:** NODE_DEFS · buildContainer · inspector · persistence.
- **lineage:** folds [[frame.container-model.f1]] (correct format, degraded chunk×slice×rung — flat list; preserved) ← [[frame.container-model.f0]] (wrong format; preserved).
- mode: builder window · `.live` (mutable while building — tick rungs as we go; crystallize on close).
