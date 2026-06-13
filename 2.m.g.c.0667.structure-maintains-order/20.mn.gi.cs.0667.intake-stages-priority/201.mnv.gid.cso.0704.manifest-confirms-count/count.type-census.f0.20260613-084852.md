# count — type census — f0 — 20260613-084852

W8 intake. Every file type in use on the floor, scanned against the two registries that claim to govern them. "Know where we are before we know where we want to go." This is the snapshot, not the plan — the back-and-forth works from here.

Scan: full floor walk, EXCLUDE = .git / node_modules / __pycache__ / .claude. **679 files total** — 247 convention docs (match `type.scope.fN.YYYYMMDD-HHMMSS.ext`), 432 non-convention.

## The three registries — they disagree

- **Server `DOC_TYPES` (12):** manifest, count, schedule, frame, audit, log, review, survey, extract, crossref, dream, parked.
- **Keystone list (17):** the 12 above + **sketch, template, note, edge, myth**.
- **Practice (29 distinct types in use).**

**Finding 1 — the server registry enforces nothing.** `DOC_TYPES` is defined at server.py:84 and **referenced nowhere else**. `op_create`/`op_fold` never check it. The 12-type list is decorative; practice has always been free. (Confirms B6.)

**Finding 2 — no dead registrations.** Every type in either registry is in active use on the floor. The drift is one-directional: practice has MORE than the registries, never less.

## Doc types in practice — 29, by count, with registry status

| count | type | server | keystone | status |
|------:|------|:---:|:---:|--------|
| 48 | **sketch** | — | ✓ | keystone-only — and the MOST-used type on the floor isn't server-known |
| 31 | dream | ✓ | ✓ | clean |
| 23 | frame | ✓ | ✓ | clean |
| 15 | log | ✓ | ✓ | clean |
| 12 | **compass** | — | — | UNREGISTERED (the tsr charter/log/map/wake quartet at `2`) |
| 12 | myth | — | ✓ | keystone-only |
| 10 | count | ✓ | ✓ | clean |
| 10 | schedule | ✓ | ✓ | clean |
| 9 | **marginalia** | — | — | UNREGISTERED (the 100 freight) |
| 8 | review | ✓ | ✓ | clean |
| 7 | audit | ✓ | ✓ | clean |
| 7 | **list** | — | — | UNREGISTERED (toys-dreamed etc.) |
| 7 | **trajectoscope** | — | — | UNREGISTERED (a build/instrument lineage) |
| 6 | **map** | — | — | UNREGISTERED (settled-and-floating etc.) |
| 6 | survey | ✓ | ✓ | clean |
| 5 | manifest | ✓ | ✓ | clean |
| 4 | **float** | — | — | UNREGISTERED |
| 3 | edge | — | ✓ | keystone-only |
| 3 | extract | ✓ | ✓ | clean |
| 3 | **lattice** | — | — | UNREGISTERED (the client HTML lineage) |
| 3 | note | — | ✓ | keystone-only |
| 2 | **baton** | — | — | UNREGISTERED (the seat relay — new this protocol) |
| 2 | crossref | ✓ | ✓ | clean |
| 2 | **essay** | — | — | UNREGISTERED |
| 2 | **journal** | — | — | UNREGISTERED |
| 2 | parked | ✓ | ✓ | clean |
| 2 | template | — | ✓ | keystone-only |
| 2 | **wake** | — | — | UNREGISTERED (compass-kin) |
| 1 | **charter** | — | — | UNREGISTERED (compass-kin) |

**The drift, summarized:**
- **12 clean** (both registries): manifest, count, schedule, frame, audit, log, review, survey, extract, crossref, dream, parked.
- **5 keystone-only** (in use, not server-known): sketch (48!), myth (12), edge (3), note (3), template (2).
- **12 unregistered** (in neither): compass, marginalia, list, trajectoscope, map, float, lattice, baton, essay, journal, wake, charter.

**Family note:** the compass kit is split across naming forms — `compass.tsr-charter/...` (type=compass, 12 at `2`) AND standalone `charter`/`wake`/`map`/`log` (the kit templates at 100). Same conceptual family, two type-spellings. A W8 decision.

## Non-convention .md docs — 54 (don't match the naming pattern at all)

- **Intentionally special (2):** `CLAUDE.md` (keystone), `manifest.live.md` (the accumulating ledger — never folded by design).
- **Legacy inherited at 220 (~25):** the research-operation pile — `research01–12` compilations, `RESEARCH_*`, `SKETCH_*`, ALLCAPS process docs (`HANDOFF`, `STATE`, `DISCIPLINE`), `0_/1_/2_` source-dumps, `toy_catalog`. The 220 "accumulate before organized" pile.
- **Raw-title essays/notes at 100/111/121 (~18):** riemann-dependency-map, the-anatomy-of-an-edge, structure-not-species, ternary-field-notes, the-practice-runs-both-ways, the-surveyor-of-the-plane, the_two_who_built, TS_BRIEF, rf-lens-roadmap, FINDINGS_*, research-report, the two received reports (Toyota/Duckworth), etc. — inherited names, pre-convention.
- **Placeholder-stamp templates at 100 (4):** the compass kit `charter/log/map/wake.f0.YYYYMMDD-HHMMSS.md` (literal placeholder, never stamped).
- **Near-miss convention (~5):** `audit.lattice.p1–p4` (use `.pN.` not `.fN.` — a legacy pass-numbering), `map.the-corpus.research-op.f2.md` (fN but no timestamp), `marginalia.draft.f0.20260611.md` (date but no HHMMSS).

## Extension census (all 679)

| count | ext | what |
|------:|-----|------|
| 288 | .md | documents (247 convention + 41 non-conv… wait: 54 non-conv .md, 234 conv) |
| 253 | .png | play/bench shots (mostly at 110) — product artifacts, not docs |
| 101 | .html | client (lattice.fN) + builds (build-NN, cell-NN) + TS visualizations + marginalia — product artifacts |
| 17 | .json | seat/settings configs |
| 11 | .js | eyes rig, runtest, kernel |
| 3 | .cmd | seat launchers |
| 3 | .py | server + helpers |
| 1 each | .bat .txt .zip | lattice.bat · observations.txt · one archive |

(.md split: of 288, 234 are convention docs and 54 are non-convention — the 247 "convention docs" figure includes .html/.png convention-named files too, e.g. marginalia.specimen.f0.ts.html.)

## What this snapshot says (for the back-and-forth)

The questions W8 opens, not yet answered:
1. **Registry source of truth** — should the server enforce `DOC_TYPES` (make it real), should the keystone list be the canon, or do the two merge into one list? Right now neither governs.
2. **Adopt or retire the 12 unregistered** — compass, marginalia, list, trajectoscope, map, float, lattice, baton, essay, journal, wake, charter. Each is either a legitimate type to register or a stray to fold into an existing one (e.g. essay/journal → note? map/list → ?).
3. **sketch is the elephant** — 48 uses, server-blind. Whatever the registry becomes, it has to account for the most common type.
4. **The compass family's split spelling** (compass.* vs charter/wake/map standalone) — one type or several?
5. **Non-convention legacy** — the 220 research pile + raw-title essays: rename to convention, or bless a "legacy/inherited" exemption? CLAUDE.md and manifest.live.md are deliberate exemptions either way.
6. **Near-miss fixes** — audit.lattice.pN → fN; the no-timestamp / no-HHMMSS stragglers.

Per-type fold triggers (the other half of W8's charge) ride on top of whatever type set we settle here — can't set per-type rules until the type set is fixed.
