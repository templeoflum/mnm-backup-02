# sketch — spline-curve — f1 — 20260607-160000

review. proposed changes to the curve construction.

---

## what should stay
- the hermite construction. verified, clean, produces correct polynomials for arbitrary order.
- the three modes. they span the full spectrum from independent to fully dependent. no mode is redundant.
- periodic enforcement. the loop is fundamental to the instrument (playback cycles).
- the gaussian solver. small matrices, works fine.
- polyEval (Horner), polyDeriv (symbolic). standard, correct.

## what should change

### naming (per vocab sketch)
- `mode === 'spline'` → `mode === 'independent'`. the mode IS independence. the word "spline" is too generic — all three modes produce splines in some sense.
- `mode === 'global'` → `mode === 'single'`. one polynomial, no joins. "single" vs "independent" vs "coupled" — a clear spectrum.
- `knots[]` → `joins[]`. per vocab sketch. what the user drags are joins — the meeting points where continuity is tested.
- `nseg` → `segments` or keep `nseg`. leaning toward keep — it's internal, brief, unambiguous in context.
- `kv(i)` → `joinValue(i)`. clearer. `kv` is cryptic.

### the tension spectrum
the three modes + tension slider form a spectrum:

```
independent ←——— tension=1 ——— coupled ——— tension=0 ———→ single
fully local                    blended                     fully global
```

conceptually the mode selector and tension slider are one control. but they work differently: independent and single have no tension parameter. only coupled uses tension. this is already correct in the code — tension scrub hides/shows based on mode.

**decision needed**: should independent mode actually be coupled-with-tension=1? mechanically it's close but not identical: independent uses order-matching at both ends (arbitrary continuity), while coupled always builds cubics (C1, with C2 from the global solve). at C1 they produce the same result. at C0 or C2+ they diverge. so they're NOT the same engine with different tension. keep them separate.

### randShape()
currently generates semi-random joins: `0.5 + 0.36*sin(i*1.7+0.6) * (0.6+0.4*random())`. produces a wave-like shape with variation. fine for demo purposes. no change needed.

### numerical stability at high order
at order 10+ (polynomial degree 21+), the hermite system becomes ill-conditioned. the gaussian solver may produce noisy coefficients. the current code caps order at 12. practically, nobody needs C12 continuity — it's there for exploration, and the noise is part of the lesson (too much smoothness = instability).

**decision needed**: cap order at a lower value, or keep 12 and let the user discover the instability? leaning toward keep — the instability IS instructive, and the instrument is about exploring continuity, not producing production splines.

## what stays as-is
- the rebuild flow (targetG → localTargets → hermitePoly per segment)
- the coupled solver (tridiagonal periodic system)
- the global builder (Vandermonde interpolation)
- the evaluation functions (fAt, derivAt, derivAtSeg with chain rule)
- the factorial function

## summary
the curve engine is solid. main changes: naming (spline→independent, global→single, knots→joins, kv→joinValue). the mechanism doesn't need redesign. the tension spectrum is already correctly represented.

---
