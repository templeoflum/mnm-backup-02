# sketch — ts-proportion — f1 — 20260607-150000

review. proposed changes.

---

## what should stay
- the proportional rule: d = k·(k+1)^(C-1)·D. verified, clean, self-similar. this is the keystone.
- k as the parameter. it IS the proportion. no renaming needed.
- dispMult slot (even though it returns 1.0). removing it is fine too — it's dead code.

## what should change

### legacy mode
**decision needed:** keep or drop?
- **keep**: legacy mode shows what happens WITHOUT self-similarity. pedagogically useful — you can see the form lose its proportionality as cycles increase. also: some configurations might be interesting in legacy mode.
- **drop**: legacy mode is superseded. the proportional rule is strictly better for the instrument's purpose (measuring invariants of self-similar forms). keeping dead paths adds complexity.
- **leaning**: keep but de-emphasize. proportional is default and primary. legacy is available as "fixed displacement" for comparison. label it honestly — it's the old rule, not an alternative of equal standing.

### naming
- `selfScale` → `proportional` (per vocab sketch). boolean: proportional mode on/off.
- `kHole` → just `k`. it's already called k everywhere. the variable name should match.
- the phenomenon: "the proportion." k sets the proportion. the proportion holds across cycles.

### dead code
- dispMult always returns 1.0. either remove the function or document why the slot exists.
- dispRatioId is only used in legacy mode. if legacy stays, it stays. if legacy drops, it drops.

## summary
the proportion is the most verified part of the instrument. verified to depth 19 with quantitative accuracy. minimal changes: naming (selfScale→proportional), deciding on legacy mode. the mechanism is settled.

---
