# sketch — ts-projection — f1 — 20260607-150000

review. proposed changes.

---

## what should stay
- project4to3 with both ortho and perspective modes. verified working.
- the perspective scaling (eye proportional to form radius). prevents explosion at deep depths.
- rot/proj for 3D→2D. standard, correct.
- w-spin auto-rotation. essential for seeing 4D structure.

## what should change

### naming (per vocab sketch)
- w-spin → **w-turn**. simpler, more honest. you're turning the form, not spinning it.

### consolidation
the 3D camera (rot, proj) is identical across all four source files. straightforward copy. no decisions needed.

project4to3 appears in TS_4D, TS_fingerprint, TS_formulas. identical in all three. one copy.

### view pivot
the center of rotation can be set to various features (origin, COM, point, etc.). this is an interaction concern — it changes what stays fixed when you rotate. keep it. it's more useful than it looks: pivoting on COM vs origin changes how you perceive the form's symmetry.

### projection and formulas
when using 3D-native formulas (lissajous, torus, etc.), the 4D projection stage is skipped. the dispatch should handle this — if the formula returns a 3D point, skip project4to3, go straight to rot/proj.

**decision needed:** should the 4D controls be hidden when using a 3D formula? probably yes. showing w-turn controls for a 3D trajectory is confusing. the UI should reflect what's available.

## summary
projection is the simplest part. mainly carry-forward with one rename (w-spin→w-turn) and one UI decision (hide 4D controls for 3D formulas).

---
