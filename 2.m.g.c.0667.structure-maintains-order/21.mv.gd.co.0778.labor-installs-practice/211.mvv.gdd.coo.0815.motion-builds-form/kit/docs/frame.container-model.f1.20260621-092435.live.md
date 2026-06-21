# frame — container model — f1 — contain · arrange · persist

home: `kit` (211/kit, co-located) · mode: builder window · status: **FRAMED — unbuilt; one decision open (the dropdown question)** · folds [[frame.container-model.f0]] (wrong format, preserved as the record) · `.live` — forming, not settled · absorbs the pool grid→stack persistence bug

Collapse the four container *types* into a configurable container whose arrangement is a persisted property. A container is a container; how it arranges is a setting.

## the agreement (at a glance)

- layout is a **property** of a container (set in the inspector, **persisted** across reload), not a part-type.
- the palette stops exposing stack/row/grid as separate parts.
- **open — dropdown: part or arrangement?** A: one part, layout `{stack|row|grid|dropdown}`. B (lean): `container` `{stack|row|grid}` + a distinct `dropdown` (adds collapse + title). operator's call.
- absorbs the pool grid→stack reset bug — persisting layout is the fix.
- touches: NODE_DEFS · buildContainer · inspector · persistence.

## build (chunk × slice × rung)

1. **model** — add `layout` prop; collapse the part-types (per the decision); buildContainer reads it.
2. **inspector** — layout selector on the focused container.
3. **persist** — layout into save/restore; a red-first rig check (grid → reload → still grid) before the fix.
