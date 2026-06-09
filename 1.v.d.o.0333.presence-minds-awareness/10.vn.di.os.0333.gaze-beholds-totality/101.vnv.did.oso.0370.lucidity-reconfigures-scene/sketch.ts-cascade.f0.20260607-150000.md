# sketch — ts-cascade — f0 — 20260607-150000

the rate structure. how phases advance at each depth. baseline.

---

## what it is now

### the function
```
rateFor(k, B):
  ratio = RATIOS[rateRatioId].base   (or beam B's ratio)
  return (1/ratio)^k × layerMult(k)
```

each depth k rotates at a geometrically decaying rate. depth 0 is fastest. depth 1 is 1/ratio as fast. depth 2 is 1/ratio² as fast. and so on.

### the ratio library
a catalog of named ratio bases organized by family:
- **irrational**: φ, φ², √2, √3, π, e
- **just**: 2:3, 3:4, 3:5, 4:5, 5:8, 1:2
- **septimal**: 5:7, 6:7, 7:8, 7:9
- **undecimal**: 8:11, 9:11, 11:13
- **fibonacci**: 3:5, 5:8, 8:13, 13:21
- **lucas**: 4:7, 7:11, 11:18
- **powers**: 1:2, 1:3, 1:4, 3:8
- **metallic**: silver, bronze

default rate ratio: π. default displacement ratio: 1:2.

### per-depth overrides
`rateOverride[]` — array of 40 slots, null by default. when set, replaces the cascade formula at that depth. this is the "rate multiplier" knob per depth. it breaks uniformity — the form changes shape when one depth's rate differs from the cascade prediction.

### what it controls
- how fast each rotation advances → determines the FREQUENCY RELATIONSHIPS between depths
- irrational ratios → incommensurate frequencies → trajectory fills space, never closes
- rational ratios → commensurate frequencies → trajectory closes, finite period
- the cascade is what makes deeper depths "finer" — they contribute slower, smaller-scale structure

### verified behavior (from findings)
at depth 19, innermost rate is (1/π)^18 ≈ 6×10⁻¹⁰ of the outer rate. the correct viewing strategy at deep depths is low speed + enormous timebase. this is a direct consequence of the geometric cascade.

---
