# audit — incident report: the shared-index race — f0

clerk, 20260702, on the operator's halt. Three seats live on one floor crossed signatures
on the shared git index inside a 76-second window. **All bytes intact, all work in
history** — the damage is to the trail (who-signed-what), not the work. Keeper and lantern
detected and recorded it within minutes ([[dream.fable-2]] §~6 is the lantern's flat
record; keeper's marker `ec5b6f5` carries theirs in its message). **The clerk — this seat —
missed it entirely**, and that miss is anatomized here with the same knife as the rest.

## §1 — timeline (local, -0500; from reflog + witness log + seat records)

Standing state: keeper grinding the esoterica list into **188 source records + census +
index edit, STAGED but not yet committed** (the open window); clerk mid-build on reader
slice 3; lantern walking dream.fable-2.

1. **04:36:27 — lantern commits `834b701`** (dream passes ~3–~5). `git add` was own-paths
   (L3 held) — but bare `git commit` takes the WHOLE index: the keeper's 189-file staged
   intake swept in under the lantern signature. 192 files.
2. **04:37:25 — clerk commits `8596bdc`** (reader slice 3; explicit-path add). Clean in
   itself; lands on top of the sweep, unaware.
3. **04:37:28 — lantern runs `git reset --soft HEAD~1`** to repair (1) by surgery —
   **three seconds after the clerk's commit**. HEAD~1 is no longer their commit: the reset
   lifts the CLERK's slice 3, restaging its content. Both lantern recommit attempts then
   fail quietly (a misplaced `-c`; then nothing-to-commit).
4. **04:37:43 — keeper commits `ec5b6f5`**, the forward marker correcting their trail —
   right instinct, but also a bare commit of the whole index: the clerk's restaged slice-3
   content lands inside it. The clerk's message + authorship survive only in the reflog.
5. **04:40:41 — lantern commits `ff4765a`**: pass ~6, the snag named in full, walk halted.
6. **04:43:57 — clerk commits `c635915`** (slice 1b) on top of the altered history,
   noticing nothing, and reports "committed" to the operator as normal.

## §2 — root cause

**The git index and HEAD are shared singletons, and the floor law guards the wrong door.**
L3 ("own paths only") disciplines `git add` — but `git commit` commits the *entire index*
regardless of who staged what, and `git reset` moves *shared* HEAD regardless of whose
commit sits there. The law was written for a serial floor; the moment three seats ran
concurrently, staging became a fourth seat nobody signed (the lantern's phrase, kept).

Five failures, one mechanism:
1. **Window left open (keeper):** work staged but uncommitted for minutes. L4
   (commit-per-change) would have closed it; staging-as-parking is the latent hazard.
2. **Bare commit #1 (lantern):** swept foreign staged content. The law's gap, not
   negligence — nothing they read forbade it.
3. **Surgery on shared HEAD (lantern):** `reset` assumes HEAD~1 means "my last commit."
   On a shared floor it means "whoever got there last." Repair-by-rewrite cut the wrong
   body; the house's own rule (folding preserves the trail / forward, never rewrite) was
   already on the wall.
4. **Bare commit #2 (keeper):** the marker also took the whole index — the correction
   itself swept the next seat. Compounding, though the forward-marker instinct was right
   and is ratified below.
5. **Detection failure (clerk, THIS seat):** I verify my commands' exit codes, not the
   shared trail. My own commit vanished from the main line 3 seconds after I made it; I
   committed again on top six minutes later and reported normal. Keeper and lantern caught
   it instantly *because their practice reads the trail as part of the act* — keeper saw
   their files inside a foreign commit; the lantern watched its own history. My
   verification habit ended at the exit code. Same family as this morning's alias
   incident: trusting the local signal (exit 0 / recall) over the shared ground.

Near-miss, same root, owned: several clerk commits earlier today (restructure acts 1–3,
schema f9) used directory-wide `git add` + bare commit — had another seat's untracked or
staged files sat under those paths at those moments, this incident would have been mine
hours earlier. Discipline was add-scoped by luck of timing, not by law at the right door.

## §3 — damage

- **Bytes: zero lost.** Working tree correct; every edit present in history.
- **Trail: crossed twice.** Keeper's 189-file intake inside a lantern dream commit
  (`834b701`) — corrected forward by keeper's own marker. Clerk's slice-3 content inside
  the keeper's marker (`ec5b6f5`); the clerk's message + authorship exist **only in the
  reflog (`8596bdc`) — which is local and expires (~90 days)**. Without a durable forward
  marker, that attribution record is temporary.
- **Work halted** by the operator: lantern's walk stopped at root 2's door; clerk's slice 4
  not started; keeper's compile pass pending.

## §4 — corrective (proposed to the operator, not self-ratified)

1. **Extend L3 to the commit door:** on the shared floor every commit NAMES ITS PATHS —
   `git commit <own paths> -m …` — never a bare `git commit -m` (which commits the whole
   index). A pathspec'd commit takes only the named paths, whatever else is staged. This
   single change closes failures 2 and 4 mechanically.
2. **No history surgery on the shared floor, ever:** no `reset`, no `--amend`, no rebase.
   Repair is a FORWARD marker commit that names the crossed hashes (keeper's instinct,
   ratified as law). HEAD is not yours; only your next commit is.
3. **Trail check rides every commit:** after committing, read back `git log -1 --stat` —
   is HEAD your hash, carrying only your paths? Before committing, glance `git status` —
   foreign STAGED content means another seat is mid-flight: pathspec around it, never
   sweep it, never unstage it.
4. **Nothing parks in the index:** stage-and-commit is one motion (L4 sharpened). Staged
   ≠ saved; staged = exposed.
5. **Remediation for the clerk trail:** one forward marker commit recording that reader
   slice 3 (content in `ec5b6f5`, authored by clerk, original message at reflog `8596bdc`)
   is clerk work — making the attribution durable before the reflog ages out. Ready to cut
   on the operator's word; this report's own commit does not double as it.
6. **Where the law lands:** the seat protocol / floor-practice docs (L-rules) get the
   amendment — a systems change, clerk's hands, operator's word required. Whether
   three-seat concurrency itself continues (vs. season-scheduling the floor) is the
   operator's architecture call, flagged, not proposed either way.

## §5 — what each seat's record contributes (cross-reference)

- **lantern:** [[dream.fable-2]] §~6 — the flat sequence + the two sharpest lines of the
  incident: *"the index is a fourth seat nobody signed"* and *"the law was written one
  door short of where the traffic is."* Walk halted pending this walk-through.
- **keeper:** `ec5b6f5` message — the intake manifest + the first forward correction.
- **clerk:** this report; plus the standing memory updated so trail-verification becomes
  reflex, not resolution.

links: [[dream.fable-2]] · commits `834b701` · `8596bdc` (reflog) · `ec5b6f5` · `ff4765a` ·
`c635915` · [[audit.wiki-bridge-alias-incident.f0]] (same family: local signal trusted
over shared ground) · [[frame.reader-resolves-web.f1]] (slice 4 held)
