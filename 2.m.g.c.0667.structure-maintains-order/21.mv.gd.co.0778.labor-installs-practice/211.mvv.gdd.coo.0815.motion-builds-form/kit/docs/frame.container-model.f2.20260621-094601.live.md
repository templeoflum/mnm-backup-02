# frame — container model — f2 — contain · arrange · persist  [forming]

Collapse the four container *types* into one configurable container whose arrangement is a persisted property. A container is a container; how it arranges is a setting.

## §1 — agreement · at a glance

- layout is a **property** of a container (set in the inspector, **persisted** across reload), not a part-type.
- the palette stops exposing stack/row/grid as separate parts.
- absorbs the pool grid→stack reset bug — persisting layout is the fix.
- **OPEN — dropdown: part or arrangement?** A: one part, layout `{stack|row|grid|dropdown}`. B (lean): `container` `{stack|row|grid}` + a distinct `dropdown` (adds collapse + title). blocks slice 1.

## §2 — plan · slices & rungs

status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked

**slice 1 — model: layout as a property**  ⊘ blocked (dropdown decision)
goal: arrangement is a saved field on the container, not its identity.
- ○ add `layout` prop to the container NODE_DEF(s); default `stack`
- ○ `buildContainer` reads `layout` → stack / row / grid arrangement
- ○ collapse stack/row/grid part-types (shape per the dropdown decision)

**slice 2 — inspector: set the layout**  ○ todo
goal: change a focused container's arrangement by hand.
- ○ layout selector on the focused container (reuse selector / binselector)
- ○ wire it to the container's `layout` prop

**slice 3 — persist: layout survives reload**  ○ todo
goal: a grid stays a grid across the hot-reload (the pool bug).
- ○ red-first rig check: set grid → reload → assert still grid (must fail first)
- ○ `layout` into save / restore
- ○ confirm the check goes green — that bug becomes the guard

## §3 — trace · DAG & deep notes

```
[dropdown decision] ─→ slice 1 ─┬─→ slice 2
                                └─→ slice 3   (rung-1 red-first, before rung-2)
```

- **status:** forming — framed, unbuilt; blocked on the dropdown decision (§1).
- **touches:** NODE_DEFS · buildContainer · inspector · persistence.
- **lineage:** folds [[frame.container-model.f1]] (correct format, degraded chunk×slice×rung — flat list; preserved) ← [[frame.container-model.f0]] (wrong format; preserved).
- mode: builder window · `.live` (mutable while building — tick rungs as we go; crystallize on close).
