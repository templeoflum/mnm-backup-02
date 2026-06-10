# Count — duplicates — f0 — 20260610-044417

Duplicate canonicalization count for frame.hygiene slice P2. Every pair SHA256-compared before disposition. Pass authorized whole by operator (log.fable.f0, second pass D entry); dispositions decided by branch 2 under the conservative rule: identical → trim the non-working copy, divergent → annotate only, delete nothing.

## Comparison results

All 12 pairs **byte-identical** (SHA256 match). No divergent pairs exist — the annotate-only path was never needed.

| file | addresses | hash | canonical | disposition |
|------|-----------|------|-----------|-------------|
| findings.md | 100 · 220 | identical | 100 | trim 220 copy |
| HANDOFF.md | 100 · 220 | identical | 100 | trim 220 copy |
| TS_3D.html | 100 · 220 | identical | 100 | trim 220 copy |
| TS_4D.html | 100 · 220 | identical | 100 | trim 220 copy |
| TS_fingerprint.html | 100 · 220 | identical | 100 | trim 220 copy |
| TS_formulas.html | 100 · 220 | identical | 100 | trim 220 copy |
| ux_plan.md | 100 · 220 | identical | 100 | trim 220 copy |
| spline_continuity_BRIEF.md | 100 · 220 | identical | 100 | trim 220 copy |
| spline_continuity_v2 (4).html | 100 · 220 | identical | 100 | trim 220 copy |
| FINDINGS_ternary_TS.md | 111 · 220 | identical | 111 | trim 220 copy |
| TS_BRIEF.md | 111 · 220 | identical | 111 | trim 220 copy |
| tsnew-trace.html | 110 · 211 | identical | 211 | trim 110 copy |

## Canonical reasoning

- 100 and 111 hold the working copies — branch 1's active TS material. 220 is trim·cleans·slack; identical copies sitting in the accumulation pile are exactly the slack 220's triad says to trim. Trimming serves G1 (the 220 pile shrinks by 11).
- tsnew-trace.html: 211 is the build home (motion·builds·form) where the artifact was made. The 110 copy was a study copy, byte-identical, adds nothing the address can't recover by reading 211.
- All deletions are git-recoverable — every trimmed file is committed history.

## Ledger treatment

Each trim gets two rows: a delete row (the event) followed by a note row re-placing the canonical (so the ledger's last word on every surviving file points where it actually lives — a bare delete would pop the file from last-known-location tracking entirely).

## Totals

| | count |
|---|---|
| pairs compared | 12 |
| identical | 12 |
| divergent | 0 |
| files trimmed | 12 (11 at 220, 1 at 110) |
| files annotated-only | 0 |
