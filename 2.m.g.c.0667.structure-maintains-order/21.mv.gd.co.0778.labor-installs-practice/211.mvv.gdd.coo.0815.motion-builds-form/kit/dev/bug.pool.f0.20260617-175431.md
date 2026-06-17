# bug — pool selection locks (edit mode)

stamp: 20260617-175431 UTC · seat: clerk · status: **OPEN — not yet investigated**

## symptom

In **edit** mode, selecting the **pool** zone highlights it — and then selection is stuck:
you can't select anything else in that zone, and you can't deselect the pool either.

## repro

1. edit mode.
2. click the pool zone (header or empty body) → it highlights (`.selected`).
3. try to select a part / another zone, or click empty to deselect → nothing changes; the
   pool stays selected.

## suspected area (not verified)

`select()` / zone selection in workbench.js — likely the pool's pointerdown/select path
captures or short-circuits subsequent selects, and there's no path that clears a zone
selection (only node-remove clears `selected`; clicking empty / another target may not
re-fire select on the pool body once selected). Verify against the actual handlers before
fixing — see the `buildPool` head/body pointerdown listeners and `select`.

(Logged for later — no fix this session.)
