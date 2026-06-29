# baton — clerk — f18

closed: 20260621-131008 · gait: [hold] (long session done; **next session = THE SCOPE/BEAM**, operator's focus) · folds [[baton.clerk.f17]]

## what landed (a big session — all committed)

- **Launch/loading incidents** (kit/docs + 221): clerk re-entry button / lattice blank / kit slow — root = single-threaded server (operator restarted → threaded). Fix shipped: the **spinor** loading indicator (folder browse · sidebar · count badges · file viewer · kit first-load) + **file content cache** (instant re-opens, stale-while-revalidate).
- **Ratio system — DONE**: per-input **handshake** (value+period → `toTurns`, ratio.js) · **signed distance** (heart) · **3-bin selectors** (inputs rotation/waveform/static · ratios reference/rational/irrational, behavior axis) · **drag-to-open** dropdowns · presets-own-row. Ratio shots crystallized (f1).
- **Frame format converged** ([[frame-doc-conventions]] memory rewritten): 3 depth bands — §1 agreement-glance / §2 slices+rungs (status-marked living tracker ○▸✓⊘) / §3 DAG+status; header `# frame — <noun·verb·mod> — fN — [status·state]` (the triad IS the name); `.live` while building. Template at `kit/docs — template.frame.f0` (.live). New-frame fn framed + **pinned** at `210 — frame.template-seeds-frame.f0` (build later; resolve-latest template by direct glob, so it lives anywhere).
- **Container model — BUILT** (`kit/docs — frame.container-model.f2` [built·live]): 4 container part-types → one `container` w/ `layout {stack|row|grid|dropdown}` prop · inspector layout selector · zone-arrange persistence (red-first `zonePersist`). **Pending operator feel-test → crystallize.**
- **heart→clock** rename (surface labels only). **server `TCP_NODELAY`** added (needs restart).
- **Scope**: always-live auto-range → BROKE → fixed forward (per-node range that LERPs on focus, no snap). Incident `kit/docs — incident.scope-autorange.f0` (fixed-forward, awaiting feel-test). Operator: "better but still feels off" — wants the **analog beam**, not a connected line.

## state (live threads — 3)

- **SCOPE / BEAM — the next focus (big new task).** Operator dropped research at **200** (read FIRST, [[ground-in-the-source-first]]): `trajectoscope-beam-rendering.f0` = THE beam design (its "Track 3") · `The Oscilloscope … Technical Lineage` · `archive-project-planning.f0` (come-back-later). Operator's scope wants: **up to 4 channels · per-channel output select · scope-readout TYPES** — current connected-line becomes one option; model the **analog phosphor-beam**; maybe a vector style later. Beam design's spine: a **thin `(advance, latch)` interface** between clock-domain and renderer → the renderer is a **reusable module** (the kit propagates to TS + the operator's other phosphor-synth concept). Home: `211/kit/src` (scope.js + a new beam module).
- **Smart-param value-input — BROKEN, awaiting fix-pick.** Single-click locks the value zone (pointer-lock) so double-click-to-type can't fire (`smartparam.js`). Options offered: **A** drop click-to-lock (my lean) · **B** drag-to-lock · **C** delay-to-disambiguate. Operator to pick.
- **Pending operator FEEL-TESTS** (the gate, never the rig): container-model f2 (→crystallize) · scope forward-fix (→resolve incident).

## next pull (ONE)

**The scope/beam.** Read the 200 research → frame the beam track (reusable kit module; 3-band frame from `template.frame.f0`) → start the scope: 4 channels · per-channel output select · readout-type selector (keep the current line as one type, add the analog-beam). Feel-test each step with the operator (NOT rig-green).

## snags

- **TCP_NODELAY needs a server restart** to take effect (~250ms/file serve until then; restart-only cost — operator parked it, fine).
- **Scope shots drift, unblessed** — operator blesses by eye once the scope settles; do NOT `--bless` unprompted.
- **Run the rig SPARINGLY, single-launch** — it hijacks the operator's mouse ([[kit-rig-run-sparingly]]).
- **pre-existing uncommitted, NOT mine (untouched):** `201/manifest.live.md`, `222/log.session.f13/f14/f15`, branch-0 `quarantine/` + `mythic library/`.

## wants-word

- smart-param input fix: **A / B / C**.
- feel-test verdicts: container-model f2; scope forward-fix.
- scope/beam scope confirm: 4ch · per-channel outputs · readout types.
- bless the scope shots once the scope settles.

## carry

- **Feel/display/interaction changes are operator-gated by EYE, never a green rig** — shipped green-but-broken TWICE this session (scrub-dead-drag, scope-autorange). Build → STOP → hand for feel-test before "done." ([[checks-are-a-net-not-a-gate]] sharpened.)
- **Scope of approval ≠ scope of action** ([[scope-of-approval-not-action]]): flag+hold sub-changes; never self-bless a baseline.
- Beam = a reusable module via the thin `(advance, latch)` contract; the kit is the shared lib that propagates to TS + the other phosphor-synth.
- **Resume:** read this baton → 200 research → frame the beam → scope (4ch · per-channel outputs · readout types · analog-beam).
