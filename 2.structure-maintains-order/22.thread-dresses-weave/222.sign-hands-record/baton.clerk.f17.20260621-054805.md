# baton — clerk — f17

closed: 20260621-054805 · gait: [hold] (maintenance session done; **next session is DEV** — resumes on the operator pointing at the ratio node's "feels off", then the embed on his greenlight) · folds from [[baton.clerk.f16]]

## what landed this session (a full maintenance pass — all committed)

- **Working-process review** (`22 — review.working-process.f0`) + **tracks map** (`202 — schedule.tracks.f0`; added grammar / coherence-engine / OS-migration tracks).
- **Rig reckoning** (`kit/docs/audit.kit-rig.f0`) — all 33 checks classified; the rig reframed as a **regression net, NOT a verifier / proceed-gate**; de-confidenced the naming (README + `verify.mjs` header). New memory: [[checks-are-a-net-not-a-gate]].
- **Kit reorg CLOSED** — standard project layout: `.unit`+`index.html`+`README` at root, `src/` (22 modules), `dev/` (rig+shots), `docs/` (paperwork). This is the **template future projects inherit**. (`kit/docs/frame.reorg.f0`, DONE.)
- **Lattice fixes** (`211/lattice.f2`) — folds + auto-refresh now work INSIDE units (browse used flat files; units are invisible to /scan, so a scoped poll was added).
- **Server** (`server.py`) — `HTTPServer` → `ThreadingHTTPServer` (the "unreachable while running" + slowness). **NEEDS A SERVER RESTART to take effect.**
- **Shots → `.live` model** (`kit/dev/verify.mjs`) — live working shot overwrites each run (gitignored); `node dev/verify.mjs --bless [name]` crystallizes a frozen reference (committed). **Prototype of the unified fold mechanic** for the keystone rework.
- README rewritten (kit = control library + clock + signal workbench).

## state (live threads — 3, healthy)

- **DEV (the resume) — the ratio module.** Carries from f16 UNCHANGED (maintenance didn't touch it): module is built; **"something feels off" still undiagnosed** (operator to point); **the EMBED is designed, not built, GATED** (replace each smart param's animation menu with the full ratio module, flip sides, drive = module φ). Home `211/kit/src`.
- **KIT INFRA — reorg done · `.live` shots in · server threaded.** `--bless` crystallizes shot references; server restart pending. `.live` is the keystone-rework fold prototype.
- **KEYSTONE REWORK carries the unified fold mechanic** (parked, fresh-start): latest fold = live/mutable (`.live`), earlier = frozen references; folding = crystallize. Keystone 212 "don't overwrite" is outdated → this replaces it. Touches server+client fold-detection regex + a migration. The `.live` shots are the working instance.

## next pull (ONE)

**Back to DEV: the ratio module.** Operator points at what "feels off" on the ratio node → diagnose + adjust together → THEN the embed on his greenlight (do NOT start the embed before that). Read `kit/docs/frame.ratio-system.f1` (STALE — commits carry true state) + `kit/docs/frame.heartdrive.f0` + this baton.

## snags

- **server restart needed** for the ThreadingHTTPServer fix (running instance still single-threaded).
- **the "feels off"** (from f16) — undiagnosed; needs the operator to point. Don't guess-fix.
- **frame.ratio-system.f1 STALE** — says ratio∈[0,1), no config menus/inert/input-selector; fold f1→f2 when the embed lands. Now at `kit/docs/`.
- **shot `.live` watch-item** — animated shots (heart/scope) drift-report most runs (phase, not real change); `DRIFT_REPORT` (0.5%) may want tuning; informational only, never fails.
- LF→CRLF git warnings on every kit commit (cosmetic).
- **pre-existing uncommitted, NOT mine (untouched):** `201/manifest.live.md`, `222/log.session.f13+f14+f15`, branch-0 `quarantine/` + `mythic library/`.

## wants-word

- what specifically **feels off** on the ratio node (the dev resume hinges on it).
- the **embed** layout when we get there.
- shot references: whether to `--bless` current baselines / tune `DRIFT_REPORT` (minor).
- parked, when picked up: **interaction logger** (`kit/docs/pin.interaction-logger.f0`), **per-project manifest** + **coherence-engine** (tracks map).

## carry

- **The `.live` fold model is the session's biggest carry** — it IS the keystone-rework fold mechanic, proven on shots. Generalizes to iterated docs (frames/schedules/audits), NOT write-once records (logs/batons).
- Rig = the regression net (`node dev/verify.mjs` from `211/kit`, 33 checks; self-serves port 8917, kill stale first). **The proceed-gate is operator feel + real use, never green.**
- Operator is the persistence — no operator baton; his mid-flight folds into wants-word.
- **Resume:** read this baton → back to dev → operator points at the ratio "feels off" → diagnose → embed on greenlight.
