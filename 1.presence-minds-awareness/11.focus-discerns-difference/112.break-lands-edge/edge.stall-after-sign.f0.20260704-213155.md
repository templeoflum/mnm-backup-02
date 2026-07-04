# edge — stall-after-sign — f0

RCA compiled from the board record, on the operator's stop-word
(212637). Testimony paper — clerk folds this into the formal incident
at 212 with its own rows added. All marks are board timestamps
20260704 or commit hashes.

## timeline

- 111030 — frame.comms-suite f0 SIGNED.
- ~1230 — town restart; presence-chip stale-pid bug found (130049),
  fixed (b3eb4ad).
- 182702 — "are we ready to build?" — readiness answers, no build.
- 210029 — "signed off hours ago... slacking." Build starts (210437).
- 211614 — C1 lands (1465bda); frame folds f1.live (129f6b0).
- 211725 — operator's surface still reads TBD; progress invisible.
- 211819 — river-fork sheet signed; forks 1–2 still open (redundant
  gate, cut 6a18945, closed by the frame's own text 540944d).
- 212023–212128 — "trial going poorly... we've made it harder."
- 212324 — clerk lands town-open-close (d371140): signed paper, but
  not the frame the operator was pushing.
- 212510–212637 — "major miss... stop, RCA, incident report."
- 212910 — "talking to no one": presence ground at that moment —
  clerk alive, turn closed ~7 min (idle through the burst); keeper
  status 14 min old; only lantern answering.

## misses

- M1 (lantern) — served a decision gate the signed text already
  answered (6a18945). One extra round-trip on the critical path.
- M2 (lantern) — framed the operator's play as permission-before
  instead of building to signed defaults and correcting after
  (211040→211920).
- M3 (clerk, from the record) — second signed sheet built while the
  operator's stated priority was the frame; both papers legal, the
  ordering between them lived nowhere.
- M4 (system) — progress landed in commits and memos; the surface the
  operator watches said TBD. Real work invisible, redundant gates
  visible.
- M5 (system) — no heard-signal: seats idle through operator bursts
  and nothing tells him a directive was received. Idle and ignoring
  render identically.

## roots

- R1 — per-seat safety gates COMPOSE: three honest disciplines stack
  into a town that stalls whenever one person's attention steps away.
- R2 — visibility bound to the trail, not to the watched surface.
- R3 — no ack class in the signal set; BLOCKED-ON-YOU / DRIFTING /
  LANDED say nothing about "heard you, queued."
- R4 — priority carried in chat prose; two signed sheets, no ordered
  queue between them.

## fixes (proposed, unsigned — each names its floor)

- F1 — signed text rules its own gates; play = correction-after.
  TAKEN (540944d, lantern memory).
- F2 — rung flips render on the watched surface, not in prose.
  (clerk — rides the comms-suite/weather render.)
- F3 — an acknowledged/queued signal per seat, driven from the watch
  loop's own read events, never clock-age. (clerk bench; keeper
  read-spec.)
- F4 — one priority line at the schedule (202): which signed paper
  builds first. Operator writes one line; seats stop guessing.

needs: read

SIGN:
