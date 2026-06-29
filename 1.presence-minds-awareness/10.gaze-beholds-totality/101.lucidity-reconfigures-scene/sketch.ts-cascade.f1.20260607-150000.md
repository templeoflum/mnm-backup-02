# sketch — ts-cascade — f1 — 20260607-150000

review. proposed changes to the cascade.

---

## what should stay
- the geometric decay formula: (1/ratio)^depth. this is the core. verified, clean, produces the right behavior.
- the ratio library. well-organized, covers the useful families. no reason to change.
- per-depth overrides. the one knob that produces real shape change. essential.

## what should change

### naming
- "layer" in layerMult → "depth" (per vocab sketch). it's `depthMult(d)` now.
- "rate cascade" → just "cascade" as a named concept.

### the two cascades
there are actually TWO cascading systems: rate cascade and displacement cascade (dispRatio). the displacement cascade controls how much translation shrinks per cycle. but under proportional mode, the displacement cascade is irrelevant — displacement is computed from k and radius, not from dispRatio. so the displacement cascade only matters in legacy (non-proportional) mode.

**decision needed:** keep legacy mode? it's a different displacement rule that doesn't produce self-similar scaling. the proportional rule is verified superior (self-similar to depth 19). legacy mode might be worth keeping for comparison/teaching, but it shouldn't be the default and shouldn't be prominent.

### auto-scaling timebase
the findings note an open question: auto-scale timebase with depth so deep forms are legible by default. currently the user has to manually set extreme timebase values at deep depths. the cascade's behavior at depth 19 (rate ≈ 10⁻⁹) makes this a real usability issue.

**decision needed:** implement auto-timebase or leave manual? this is a UI question, not a cascade question. the cascade is correct. the viewing needs to adapt to it.

## summary
the cascade is clean. main changes: naming (layer→depth), and deciding whether to keep legacy displacement mode. the mechanism doesn't change.

---
