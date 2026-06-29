# Count — ts-handoff — f0 — 20260609-160000

Intake count for the TS_measurement_handoff package received at 200.

---

## Source

Single directory: `200/TS_measurement_handoff/`
Origin: external session handoff (measurement suite build + FLT/modularity research)
Status: **unsigned** — received, not endorsed. contents enumerated below.

---

## Root documents (5)

| file | type | notes |
|------|------|-------|
| HANDOFF_REPORT.md | handoff report | primary delivery doc — state of play, verified/failed/designed items, file manifest |
| research-report.md | research report | prior capstone — full ~25-toy catalog, verified kernel appendix, verification protocol |
| rf-lens-roadmap.md | roadmap | RF/EE lens build plan and skip-list |
| myth.the-crease.f0.20260609-120000.md | myth | "The Crease" — RH as parable (the cloth, the fold, the center) |
| The Riemann Pursuit — A Dependency Map.md | dependency map | learning graph for RH — complex analysis → zeta → explicit formula, with parallel branches |

## Toys — standalone HTML instruments (30)

### New this session (2, verified)
| file | honesty tag | what it measures |
|------|-------------|-----------------|
| signal-lens.html | OBSERVATION | windowed-FFT spectrum of z(t)=axis1+i*axis2, integer-lattice overlay, exact amplitudes by projection |
| symmetry-probe.html | OBSERVATION | point-cloud symmetry — mirrors, inversion, rotational orders C2-C6, chamfer score self-calibrated to noise floor |

### Teaching suite — RH from first principles (9)
plane-transformer.html, analytic-continuation.html, argument-principle.html, functional-equation.html, explicit-formula.html, zero-statistics.html, hilbert-polya.html, zeros-from-primes.html, prime-orchestra.html

### Euler product (1)
euler-product.html

### Measurement suite (3)
critical-instrument.html, zeta-derived.html, noise-floor.html

### RF/EE lens (6)
rf-1-splane.html, rf-2-filter-bank.html, rf-3-bode.html, rf-4-nyquist.html, rf-5-matched-filter.html, rf-6-hyperuniformity-dial.html

### Plain-language RH (5)
rh-balance.html, rh-flatness.html, rh-flatness-3d.html, rh-mirror.html, rh-spacing.html

### Comparison/invariant (4)
the-fold.html, dual-textures.html, inv-1-winding.html, inv-2-crossratio.html

## Integration — Stage-2 fold-in code (3)

| file | notes |
|------|-------|
| kernel.js | shared pure-math kernel, node-verified |
| lensblock.js | lens code intended for TS fold-in (math verified, wiring regressed) |
| spliced_block.js | block as spliced into TS (for diffing) |

## Verification harnesses (8)

| file | language | what it tests |
|------|----------|---------------|
| verify_toys.py | Python | headless ground truth (torus spectrum, sphere symmetry) |
| verify_toyA2.py | Python | headless ground truth (second set) |
| test_kernel.js | JS/Node | node-verifies kernel.js |
| test_lensblock.js | JS/Node | integration math check — lensblock in isolation |
| test_spliced.js | JS/Node | integration math check — spliced block as extracted from TS |
| validate.js | JS/Node | build validator (parse, IDs, storage, embedded math) |
| runtest.js | JS/Node | regression-diagnosis harness (limited by node mock — not a browser) |
| runtest2.js | JS/Node | regression-diagnosis harness v2 |

---

## Totals

| category | count |
|----------|-------|
| root documents | 5 |
| toys (HTML) | 30 |
| integration (JS) | 3 |
| verification (JS+Python) | 8 |
| **total files** | **46** |

---

## State flags from HANDOFF_REPORT

| item | status |
|------|--------|
| signal-lens.html | verified standalone |
| symmetry-probe.html | verified standalone |
| Stage-1 TS fixes (fingerprint->signature, tolerance) | landed in live TS (not in this package) |
| Stage-2 fold-in (lenses into TS) | **REGRESSED** — freeze + checkboxes dead, not root-caused. start with browser console. |
| Two-specimen comparator (#3) | designed, not built |
| True-4D signature (#4) | designed, not built |
| FLT/modularity insight | delivered — "same" = same zero-spectrum, spectral identity |

---

## Current state of 200

- 200: 46 files in `TS_measurement_handoff/` subdirectory (unsigned)
- Previous state: empty (per count.research-sort.f0)
