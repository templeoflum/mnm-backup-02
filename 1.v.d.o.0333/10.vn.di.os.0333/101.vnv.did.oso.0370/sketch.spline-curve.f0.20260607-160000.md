# sketch — spline-curve — f0 — 20260607-160000

polynomial construction engine. baseline. what's actually there.

---

## what it does

takes an array of join values (user-draggable y-positions at evenly spaced t-positions) and builds piecewise polynomials that interpolate them, matching a specified number of derivatives at each join.

## the three modes

### independent (local spline)

`rebuild()` — lines 277–303.

periodic hermite interpolation. for each segment i:
- compute target derivatives at both endpoints using periodic finite differences: `targetG(i, d)` for d = 0..order.
- convert global derivatives to local (segment-space [0,1]): multiply by wseg^d (chain rule).
- call `hermitePoly(L, R, order)` to build a polynomial of degree 2×order+1 matching `order+1` derivatives at each end.
- result: `segPolys[i]` = array of polynomial coefficients.

at C0: degree-1 (linear), matches value only. at C1: degree-3 (cubic), matches value+slope. at C2: degree-5 (quintic). at C3: degree-7 (septic). polynomial degree grows as 2k+1.

periodic: `knots[nseg] = knots[0]`, finite differences wrap around using `periodicKnot(i)` and `kv(i)`.

### coupled

`buildCoupled()` — lines 343–361. `buildCoupledSegments()` — lines 308–318.

periodic natural cubic spline. solves a global linear system for slopes at all joins:
- tridiagonal+periodic matrix: D[i-1] + 4D[i] + D[i+1] = 3(y[i+1] - y[i-1])
- result: `coupledSlopes[]` = globally solved slopes in global units.

`blendedSlope(i)` — line 363: blends coupled slope toward local slope by `tension`. tension=0 is fully coupled, tension=1 is fully local.

`buildCoupledSegments()` builds cubic hermite segments matching value + blended slope at each end. always C1. the global solve makes it C2 at tension=0.

### single (global polynomial)

`buildGlobal()` — lines 324–334.

one polynomial of degree nseg through all nseg+1 join values. Vandermonde matrix, gaussian elimination. C-infinity (no joins → no breaks), but Runge oscillation: the polynomial overshoots wildly between control points, worse at higher degree.

## core utilities

| function | what it does |
|----------|-------------|
| `hermitePoly(L, R, m)` | builds polynomial of degree 2m+1 matching m+1 derivatives at t=0 (L) and t=1 (R) |
| `solve(A, b)` | gaussian elimination with partial pivoting |
| `polyEval(c, t)` | evaluate polynomial c at point t (Horner's method) |
| `polyDeriv(c)` | symbolic derivative of polynomial c (coefficient differentiation) |
| `fAt(t)` | evaluate the curve at global t ∈ [0,1]. dispatches on mode. |
| `derivAt(t, dn)` | evaluate dn-th derivative at global t. chain rule: local derivative × nseg^dn. |
| `derivAtSeg(i, lt, dn)` | evaluate dn-th derivative in segment i at local position lt ∈ [0,1] |
| `factorial(n)` | n! for hermite coefficient computation |
| `randShape()` | generate random join values |

## state

| variable | type | what |
|----------|------|------|
| `order` | int 0–12 | continuity level (C0..C12) |
| `nseg` | int 2–12 | number of segments |
| `mode` | string | 'spline' / 'coupled' / 'global' |
| `tension` | float 0–1 | coupled mode blend |
| `knots[]` | float[] | join values, length nseg+1 |
| `segPolys[]` | float[][] | per-segment polynomial coefficients |
| `globalPoly[]` | float[] | single polynomial coefficients (global mode) |
| `coupledSlopes[]` | float[] | globally solved slopes (coupled mode) |

---
