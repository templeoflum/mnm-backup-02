# baton — clerk — f8

closed: 20260615-182537 · gait: [work] (U0 done; next unit opens after a one-line U1/U2 confirm) · folds from [[baton.clerk.f7]]

## state (live threads — 3, healthy)

- **U0 the clock — SETTLED + polished + proven.** The clock IS the **unit circle**: phase 0→1 = one CCW trip from 3 o'clock, a point cycling forever; `phase` is a ratio (part/whole of one clock) and the angle (×360°). Built right from first principles (period, not rate×time). `clock.ts` (pure, rate-agnostic) + `clock.proof.ts` **6/6** (incl. on-unit-circle). Polished render: swept arc (phase as filled ratio), quarter ticks, point+hand, live `phase·angle·cycle` readout, **log speed slider capped at 10 kHz**. Lives at **`211/ts`** (a `.unit` project). **Run it through the lattice (one server, :8000):** `…/ts/dist/index.html` — no second server. Record: [[log.ts-formula.f0]].
- **Scope settled: timebase = BEAM, not formula; phase vs ratio pinned.** Absolute Hz / sampling / aliasing is the beam's job (clock is rate-agnostic). The GHz stroboscope + float64-wall exploration was educational but ruled over-engineering — removed. **phase = intra-clock ratio · ratio = inter-clock (U2)** — reserve "ratio" for U2.
- **Side-build: the unit-marker folder-typing system — BUILT (needs a server restart to show live).** Two orthogonal axes: `.unit` (ledger-OUT, browser-IN) vs `.stem`/`.leaf`/`.cell` (ledger-IN, browser-OUT/hidden). Built→inverted→reworked (S1–S5, R1–R4); 39 markers seeded + auto-create. **`.unit` witness exclusion is LIVE** (hook runs fresh — this session's ts edits raised zero churn). The **browser changes need a lattice server restart + tab reload** (running server :8000 is old code). Spec: [[frame.unit-marker.f1]] (BUILT). Keystone seed/stem/branch vocabulary folded (CLAUDE.md); memory [[keystone-cold-dry]] carved.

## next pull (ONE)

**Open the next formula unit — U2 ratio (a second clock ratioed to the first), the first build of "everything projects from the clock."** Guide: [[frame.ts-formula.f1]] + [[log.ts-formula.f0]]. Mode: builder window (210→211). **First, one-line confirm (see wants-word):** the clock absorbed the turning, so is U1 rotation subsumed, or still wanted before U2?

## snags

- **Server restart pending** — the unit-marker browser changes (op_list shape, digit-folder hiding, project-browsable) + the folder-browse work only show after the operator restarts the lattice server (:8000) + reloads the tab. Ledger side is already live.
- **Folder-browse flicker** — the lattice re-renders project folders as you browse them (freshness sweep churning a folder it shouldn't). Rough edge, not investigated. The direct `dist/index.html` URL sidesteps it.
- **S1 root-boundary permission hook — still unbuilt** (carried from f7); interim `acceptEdits` covers file edits.
- **S2 log.session auto-register gap** — new session logs still hand-registered; the witness wrote to `log.session.f11` all session. Booked → rework.

## wants-word

- **U1 vs U2 ordering** — the clock now IS the turning circle, so U1 rotation may be subsumed and U2 ratio is genuinely next. Confirm before building.
- **Clock slider cap** — used **10 kHz** (your number); offered to drop to ~30–60 Hz if the top still feels like dead aliasing. Your call.
- **Pin phase/ratio one-liner in the frame?** — offered, not done.
- **Project-opener** (a launch button on the `📦 ts` unit node → serves `dist/index.html`) — the deferred nicer way to open the clock from the lattice; build when running-the-toy matters more.

## meta-arc (operator, carry)

Road unchanged: **TS build (formula→beam→interaction) → rework (cleanup + naming + keystone) → tooling/UI → build-or-process**, then freeze → deep-analyze → fresh templates → carry forward only (a) rebuilt TS + (b) properly-formatted research. New ground this session: the **unit-marker folder-typing system** (infrastructure) and the **seed/stem/branch keystone vocabulary** (settled). Inspector (22x) deferred to the fresh-start; **clerk holds all of branch 2**, build/inspect as modes. **No operator baton — he is the persistence; his mid-flight folds into THIS seat's state/wants-word.**

Template: [[template.baton.f0]] at 100. The keystone (CLAUDE.md) is the shared ground; this file is only the seat's carry.
