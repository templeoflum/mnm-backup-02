# audit — tsr cycle 1 — f1 · THE CLAIMS ON TRIAL
**f1 of the lineage (f0 stands as a named island: a count + journey recap mislabeled an audit — miss M13). this fold is the audit: every claim the record makes, tested against reality, verdict per claim. method stated beside each verdict so any hand can re-run it.**

## the claims and their verdicts

**C1 — "the kit f0s took no marks the entire op."**
method: `git diff 4e9ff10 HEAD` per file (birth commit vs now, byte comparison — not sizes).
verdict: **VERIFIED** — all four (charter, log, map, wake f0) byte-identical to birth.

**C2 — "everything merged; the operator sees the work live."**
method: `git rev-parse HEAD` in the worktree vs in the main tree.
verdict: **VERIFIED** — both at 78f3932 at trial time.

**C3 — "the ground (TS_formulas.html) is unmarked."**
method: git log for the file since the op opened (06:00) + working-tree status.
verdict: **VERIFIED** — zero commits touched it during the op; working tree clean.

**C4 — "the frame islands (f0/f1, 0607) are kept, untouched."**
method: git log for both files since the op opened.
verdict: **VERIFIED** — zero commits.

**C5 — "specimens registered at 110 for every clutch."**
method: enumerate; check existence and nonzero size.
verdict: **VERIFIED** — 24 files (trajectoscope + TS_formulas), zero empty.

**C6 — "every artifact fold carries a load-pair determinism certificate" (recorded: f0 f1388d86 · f2 81f37b61 · f3 d3cadf75 · f4/f5/f6 1e2b025b).**
method: fresh bench load per fold, t60 read, compared to the recorded value — a THIRD independent load for each (the recorded pair came from earlier sessions).
verdict: **VERIFIED on the four folds tried** — f0 → f1388d86 ✓ · f2 → 81f37b61 ✓ · f3 → d3cadf75 ✓ · f6 → 1e2b025b ✓. f1, f4, f5 not re-run this trial (f6 contains f4/f5's lineage and matches their recorded value); declared, not assumed verified.

**C7 — "the kernel seats are earned" (kernel, lensblock, spliced all PASS).**
method: all three node harnesses re-run this trial.
verdict: **VERIFIED** — KERNEL VERIFICATION: PASS (matches verify_toys.py) · LENSBLOCK INTEGRATION: PASS · spliced harness: PASS (reads spliced_block.js per its line 1; prints the builders' mislabeled banner).
trial note, carved honestly: the first attempt at this trial swallowed test_kernel's failure with a suppressed stderr and nearly reported silence as success — the require-vs-cwd seam, re-met. the shimmed re-run produced the verdict above. an audit that suppresses stderr is not an audit.

**C8 — "the logged numbers are the artifacts' numbers" (spot trial).**
method: the grid identity re-derived independently: ln(1.5000/0.5380) = 1.0254 against the log's recorded pair (displayed 1.0253, recomputed 1.0254 — display rounding).
verdict: **VERIFIED on the spot tried**; the full ledger of logged numbers not exhaustively re-derived — declared.

**C9 — "the misses are repaired, none open."**
method: each miss's repair checked against its artifact: M8 → f1's clean surface (the fold exists, C6 ran on it) · M9 → the carved clause (log) and the lawful reading retained · M10 → per-change commits (C2 + the commit log's grain from 10:15 on) · M11 → the lens resolution line (present in f5/f6 page text, re-read at C6's f6 trial) · M12 → frame f4 (exists, reviewed) + this cycle's closure · M13 → this document.
verdict: **VERIFIED** — every carve has its repair artifact in place.

**C10 — "11/11 self-audit on the deviated instrument" (the experiment's headline).**
method: the f6 trial load (C6) re-confirmed the audit face present; the 11/11 run's two screenshots exist at 110 (C5) and the second shows all checks green.
verdict: **VERIFIED as recorded** — not re-clicked this trial; the evidence chain (artifact + specimens + log) is intact and consistent.

## what this audit does not certify (the refusal)
claims not tried: the f1/f4/f5 certificates individually · the exhaustive number ledger · the bench-op record (outside this audit's scope — cycle 1 of tsr only). a verified claim is verified FOR THIS TRIAL, on this machine, at 78f3932 — the certificates breathe with the platform, and a future hand re-runs, never trusts.

## tally
10 claims tried · 10 verified (2 with declared partial coverage) · 0 failed · 1 trial-method error caught and corrected inside the audit itself (C7's suppressed stderr). the record holds.
