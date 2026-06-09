# Audit — lattice — p2 — 2026-06-05

Pass 2: Technical gaps. Deeper probe after first conceptual audit.

## Catches

### 8. Compaction engine hardcoded to old sort order

Line 664: `slots[2]=slots[0]; slots[0]=slots[1]; slots[1]=item` — 1→0→2 shift. Settled decision: 0→1→2. Not yet changed.

### 9. State persistence incomplete

Only saves V0 state + view/address. Compaction engine, archive destination, log, cell content all lost on refresh.

### 10. `go()` doesn't save state

Line 700. Minimap clicks change address without persisting. Refresh after minimap nav loses position.

### 11. `v0Label` comment says triad

Line 604. Triad was removed. Comment is stale.

### 12. Keyboard nav is View 1 only

Lines 1155-1162. No keyboard controls in View 0 selector.

### 13. Default start: View 1 at address '11'

Lines 598-599, HTML line 465. System opens in practice at ops of ops. If ground comes first, should it open at 0?

*Reassessed in pass 4 (catch 43): starting at ops-of-ops may be correct — you start where work happens.*

### 14. MATRIX and nul at root

Outside the address structure. Loose objects with no position.
