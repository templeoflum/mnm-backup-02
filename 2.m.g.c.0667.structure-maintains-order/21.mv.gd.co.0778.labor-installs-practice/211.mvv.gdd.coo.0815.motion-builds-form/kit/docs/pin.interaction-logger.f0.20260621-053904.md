# pin — interaction logger — f0

home: `kit/docs` (co-located) · status: **PARKED** (operator: "too much thought for right now") · banks the scope so pickup is fast

## what
Log the operator's interaction with the kit — how he plays with / tests params — to learn his working style from behaviour, not narration. The empirical companion to [[review.working-process.f0]] (and the symmetric half of the trail: git/batons log the clerk's actions, this logs his).

## the one real fork — persistence (the reason it was pinned)
The kit is browser-side, so the log needs to land somewhere readable.
- **POST → file (recommended):** a tiny `/klog` route on the server appends raw JSON lines to `kit/dev/interaction.log` (gitignored, raw data like the `.live` shots). Only option that lands data the agent can actually read. Couples kit→server but dev-only + degrades gracefully (no server → no log, kit still runs). Wrinkle: hardcode the kit log path in the route for the prototype.
- *localStorage:* no server, but trapped in-browser (you'd have to export it) — weak for the goal.

## event set (start dumb, broad — refine from the data)
mode switch · part drop · select/focus · value commit (+value) · control drag (+delta) · readout/scope retarget — each a raw `{t, event, target, value?}` line. **No analysis, no viewer.** Read the raw log after a session, see what's telling, then narrow. Let the log earn the schema (same discipline as the per-project manifest + the fold system — don't systematize on n=1).

## touch (when built)
`/klog` route in `server.py` (~8 lines) + a `logger.js` in the kit + light wiring at the existing select/drop/mode/commit points + gitignore the log.

## scope note
This is the **kit prototype**. The **lattice-wide** interaction logger (every view) is a next-cycle generalization — the kit one proves the pattern first. See [[schedule.tracks.f0]].
