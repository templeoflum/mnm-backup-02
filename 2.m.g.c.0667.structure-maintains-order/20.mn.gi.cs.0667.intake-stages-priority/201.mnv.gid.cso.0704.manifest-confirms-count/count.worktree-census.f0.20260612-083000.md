# count — worktree census and collapse — W1 executed up to the frame

address: 201 (count — the books on the checkout sprawl, and the collapse record)
taken: 20260612, operator word: W1 shape settled, route authorized up to the frame.

## the census (before — six checkouts, seven branches)

| checkout | branch | tip | unique commits | floor |
|---|---|---|---|---|
| `mind not map` (main tree) | 1-mind | 35fb096 | 0 | untracked root clutter only (the known T12 pile) |
| `.claude\worktrees\0-ground` | worktree-0-ground | b2437dd | 0 | clean |
| `.claude\worktrees\1-mind` | worktree-1-mind | 2aae8f3 | 0 | clean |
| `.claude\worktrees\2-warehouse` | worktree-2-warehouse | 35fb096 | 0 | clean (this seat) |
| `mind not map--0` (stray clone) | 0-ground | 55ecfdd | 0 | clean |
| `mind not map--2` (stray clone) | 2-build | 55ecfdd | 0 | clean |
| (no checkout) | master | 55ecfdd | 0 | — |

census verdict: the entire history is ONE LINE. zero unique commits on any branch; every tip an ancestor of 35fb096. no uncommitted treasure on any floor. the flagged loose cable (sketch.comms.f0, schedule f7) was already committed at ffe19ba and lives at 210 — resolved, nothing was loose. why six existed: three eras stacked — the harness's session-isolation worktrees, the fable-era per-wing clone experiment (the strays), and the original tree. nobody designed six; six accumulated.

## the collapse (acts, in order)

1. `master` renamed `main` — the canonical branch gets the canonical name. (master was parked at 55ecfdd, june 9.)
2. `main` advanced to the tip (35fb096) before any checkout switched — the operator's lattice never showed a stale state.
3. main tree switched `1-mind` → `main` — zero file changes (same commit).
4. four checkouts retired via `git worktree remove` (refuses dirty floors — extra guard on top of the census): both strays, 0-ground, 1-mind.
5. five merged branch names deleted via `git branch -d` (refuses unmerged — same guard): 0-ground, 2-build, 1-mind, worktree-0-ground, worktree-1-mind. commits all remain in main's history; only the labels died.

## the books (after — two checkouts, two branches)

| checkout | branch | role |
|---|---|---|
| `mind not map` (main tree) | main | THE shared floor — canonical, the operator's lattice reads it, all future work lands here |
| `.claude\worktrees\2-warehouse` | worktree-2-warehouse | this session's seat — the last plank; retires when the warehouse next launches from the shared tree |

note for the frame: the harness auto-creates `.claude\worktrees\` entries for background/isolated sessions — that is the surgical-isolation tool working as intended under the settled shape, not sprawl returning. sprawl = a worktree that persists past its surgery.

reversibility: every act above is recoverable from main's history (the deleted labels pointed at commits main contains; the removed checkouts had clean floors). nothing existed only in a retired checkout.
