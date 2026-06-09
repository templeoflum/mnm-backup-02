# Audit -- session -- f0 -- 260607-071500

Auditor: blind walk, no assumptions carried forward.
Scope: entire project. Every directory, every file, every declaration checked against reality.
Method: walked the filesystem first, built own picture, then compared to every manifest entry, frame status, log claim, and keystone declaration.

---

## 1. Filesystem inventory

### Root level

| File/Dir | Type |
|----------|------|
| `.claude/` | tooling |
| `.git/` | version control (master branch, main declared) |
| `0.n.i.s.0000/` | branch 0 -- ENTIRELY EMPTY, full 3x3x3 tree of empty dirs |
| `1.v.d.o.0333/` | branch 1 -- 14 files across 4 cells |
| `2.m.g.c.0667/` | branch 2 -- 57 files across 7 addresses |
| `CLAUDE.md` | keystone |
| `eyes.js` | playwright harness |
| `eyes-numpad-diag.js` | diagnostic script |
| `eyes-test.js` | test script |
| `lattice.bat` | launch script |
| `MATRIX` | reference card |
| `node_modules/` | npm deps |
| `nul` | 0-byte artifact |
| `package.json` | npm config |
| `package-lock.json` | npm lockfile |

### Branch 0 (`0.n.i.s.0000`)

Full 3x3x3 directory tree present. Zero files at any address. Every cell, leaf, and branch is an empty directory.

### Branch 1 (`1.v.d.o.0333`)

| Address | Files |
|---------|-------|
| 100 | 1: `parked.f0.260607.md` |
| 101 | 0 |
| 102 | 0 |
| 110 | 9: screenshot PNGs (`eyes.*.png`) |
| 111 | 3: survey, extract, crossref research docs |
| 112 | 0 |
| 120 | 0 |
| 121 | 0 |
| 122 | 1: `dream.keyboard.f0.260607.md` |

### Branch 2 (`2.m.g.c.0667`)

| Address | Files |
|---------|-------|
| 200 | 39: lattice HTML, archive zip, 12 research compilations, 6 legacy HTML tools, 6 legacy docs, 5 TS files, 3 research docs, 3 sketch files, 2 process docs, 1 parable, 1 observations.txt |
| 201 | 2: manifest + checkpoint |
| 202 | 3: schedule f0, f1, f2 |
| 210 | 5: frame.core f0-f2, frame.intake f0-f1 |
| 211 | 0 |
| 212 | 0 |
| 220 | 0 |
| 221 | 5: audit f0 + p1-p4 (+ this file) |
| 222 | 3: log f0, f1, f2 |
| leaf 22 | 3: review f0, f1, f2 |

---

## 2. Manifest discrepancies

### Registered but wrong location or stale

1. Archive zip listed under 020 header in manifest file ledger but physically at 200.
2. File ledger entry for lattice.html at 112 still shows "delivered" -- 112 is empty.
3. File ledger entry for lattice.html at leaf 20 still shows "received" -- leaf 20 is empty.
4. File ledger entry for CLAUDE.sketch.md at leaf 20 still shows "received" -- leaf 20 is empty.
5. 111 section header says "27 files" -- 111 has 3 files. Never updated after clearing and re-populating.

### On disk but unregistered

6. `eyes.js` at project root -- unregistered.
7. `eyes-test.js` at project root -- unregistered.
8. `eyes-numpad-diag.js` at project root -- unregistered.
9. 9 screenshot PNGs at 110 -- unregistered.
10. `parked.f0.260607.md` at 100 -- unregistered.
11. `dream.keyboard.f0.260607.md` at 122 -- unregistered.
12. `survey.research.f0.260606-133820.md` at 111 -- in intake/outflow but missing from file ledger.
13. `extract.research.f0.260606-145200.md` at 111 -- in intake/outflow but missing from file ledger.
14. `crossref.research.f0.260606-150300.md` at 111 -- in intake/outflow but missing from file ledger.
15. `review.session.f2.260607-055754.md` at leaf 22 -- not in intake/outflow ledger.
16. `lattice.f0.260606-122128.html` at 200 -- not listed in file ledger under 200 section.
17. `lattice.bat` at project root -- completely unregistered, unmentioned in any document.
18. `package.json` at project root -- completely unregistered.
19. `package-lock.json` at project root -- completely unregistered.
20. `node_modules/` directory -- completely unregistered.

---

## 3. Status claim verification

### DONE claims without full evidence

21. Frame intake 2.3 debug/testing claimed DONE while acknowledging hot reload is broken within the same claim.

### SETTLED claims with insufficient duration

22. Every [settled] item in CLAUDE.md has one session of duration evidence. The system's own discipline (121) says "confidence from duration, not first agreement."
23. Checkpoint system (211, 39-slot ternary tree) claimed [settled] -- no implementation, no enforcement, zero evidence of ceiling ever hit.
24. Routing 1->2->(0 or 1) claimed [settled] -- no mechanical enforcement, purely observational.
25. "V0 jumps, V1 walks" claimed [settled] in frame intake f1 -- one session old, no second-angle verification.

---

## 4. Fold comparison

### frame.core f0 vs f1 vs f2

Coherent. f0 baseline preserved. Content compressed honestly -- settled items shrink, evidence moves to log. f2 adds execution log not present in earlier folds (additive, not destructive).

### schedule f0 vs f1 vs f2

Coherent. f1 is additive over f0 (new slices for discoveries). f2 marks completions honestly. Each fold documents its changes.

### log f0 vs f1 vs f2

26. f1 is not a true fold of f0 -- it is a format migration (prose to lattice trail) plus continuation. Both preserved, which is correct, but the relationship is a rewrite not a compression.

f2 is a clean fold from f1. Boundary at 0298/0300 is clean.

---

## 5. Naming convention violations

Declared convention (CLAUDE.md 222): `type.scope.fN.YYMMDD-HHMMSS.md`
Manifest "Settled" section says: `type.scope.fN.YYYYMMDD.md`

27. **Manifest and CLAUDE.md disagree on date format** -- YYYYMMDD vs YYMMDD-HHMMSS.

### Files using old YYYYMMDD format (no HHMMSS)

28. `schedule.lattice.f0.20260605.md`
29. `schedule.lattice.f1.20260605.md`
30. `manifest.session.20260605.md`
31. `manifest.session.20260605.checkpoint.md` -- also adds undeclared ".checkpoint" suffix.
32. `audit.lattice.f0.20260605.md`
33. `log.session.f0.20260605.md`
34. `log.session.f1.20260605.md`

### Audit passes use undeclared "pN" instead of "fN"

35. `audit.lattice.p1.20260605.md` through `p4` -- "pN" not in naming convention.

### Schedule f2 inconsistent with f0/f1 of same type

36. `schedule.lattice.f2.260606.md` -- YYMMDD but no HHMMSS. f0/f1 use YYYYMMDD.

### Undeclared document types

37. `survey.research.f0.260606-133820.md` -- "survey" not in declared types.
38. `extract.research.f0.260606-145200.md` -- "extract" not in declared types.
39. `crossref.research.f0.260606-150300.md` -- "crossref" not in declared types.
40. `dream.keyboard.f0.260607.md` -- "dream" not in declared types, missing HHMMSS.
41. `parked.f0.260607.md` -- "parked" not in declared types, missing HHMMSS.

### Other

42. `source-archived-intact.111.20260605.044206.zip` uses YYYYMMDD instead of YYMMDD.
43. `MATRIX` -- no naming convention compliance.
44. `nul` -- 0-byte Windows artifact, should not exist.

---

## 6. Address placement

### Misplaced

45. Archive zip at 200 should be at 020 (preservation) per manifest header, or manifest should reflect 200.
46. `eyes.js`, `eyes-test.js`, `eyes-numpad-diag.js` at project root should be addressed (112 workbench or 110 watches).

### Unaddressed

47. `lattice.bat` at project root -- completely unaddressed.
48. `package.json`, `package-lock.json`, `node_modules/` -- tooling infrastructure invisible to lattice.
49. `nul` -- artifact, should not exist.
50. `MATRIX` -- contains outdated branch names ("def/prac/maint"), acknowledged as needing positioning but still present in stale form.

---

## 7. Internal consistency

### T object conflicts

51. T object at 112: code says `break . lands . edge`. All documents reference `craft . lands . practice` or `craft . lands . tool`. Three conflicting triads for one address. Verb "lands" is consistent, noun and mod diverge.

### Heading mismatch

52. `review.session.f0.260606-114303.md` internal title says `# Thread -- session -- f0`. Document was renamed to "review" per log 0286 but internal heading never updated.

### Roots not in code

53. CLAUDE.md section 001 declares roots `being/operator/origin` etc. These do not appear in the lattice T object or any coded data structure.

### Document type expansion undeclared

54. CLAUDE.md 222 declares five document types: manifest, schedule, frame, audit, log. The system has created at least six additional types (review, survey, extract, crossref, dream, parked) -- none declared in the keystone.

### Branch 0 entirely empty

55. Branch 0 (specification) has zero files at any address. The keystone says branch 0 is "the origin -- exact" and holds ground truth, yet no ground truth has been placed there. All specification content lives in root CLAUDE.md or branch 2 documents.

---

## Log continuity

Entry numbering: f0 and f1 use non-sequential even numbering with gaps at phase boundaries. Entry 0125 is odd, breaks the even pattern. f2 increments consistently by 2. Fold boundary f1->f2 (0298 to 0300) is clean. No missing entries, no duplicates.

---

## Cross-reference failures

All cross-references verified except:
- Manifest 020 references a file physically at 200 (finding #1/45).
- Review f0 heading says "Thread" but type is "review" (finding #52).

---

55 discrepancies. Zero fixed. Zero prioritized. Report only.
