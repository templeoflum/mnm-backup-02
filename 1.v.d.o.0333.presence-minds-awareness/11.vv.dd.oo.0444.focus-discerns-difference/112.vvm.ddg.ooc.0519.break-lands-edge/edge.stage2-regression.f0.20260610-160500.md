# Edge — stage2-regression — f0 — 20260610-160500

Deviation registered at the ts-sort (chunk O, frame.ts-sort.f0 step 0.5). Named so a broken thing can't masquerade as a working thing just because it got a nice address.

## The deviation

The Stage-2 fold-in — lenses spliced into TS — is **REGRESSED**, per HANDOFF_REPORT (now at 201): freeze + checkboxes dead, not root-caused. The handoff's own pointer: start with the browser console.

## The parts, where they landed

| file | now at | state |
|------|--------|-------|
| kernel.js | 211 | node-verified, signed — the math is not the problem |
| lensblock.js | 211 | math verified in isolation, wiring regressed, unsigned |
| spliced_block.js | 211 | the block as spliced into TS, kept for diffing, unsigned |
| test_lensblock.js, test_spliced.js, runtest.js, runtest2.js | 221 | the harnesses that bracket the regression — runtest limited by node mock, not a browser |

## What this edge is not

Not scheduled work. Root-causing wants a browser session against live TS, which lives outside this lattice (Stage-1 fixes landed in live TS, not in this package). When that work is framed, this edge is its starting point.
