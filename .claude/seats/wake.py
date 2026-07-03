#!/usr/bin/env python3
"""wake.py - the SessionStart wake for a seat (Q9).

Each seat wakes by its nature (operator-settled leans):
  clerk   - injected    (structure wakes briefed: read your state, then act)
  lantern - walking     (mind wakes wandering: see everything, build nothing)
  keeper  - calibrating (ground wakes checking: verify against what is)

Wired as a SessionStart hook in each .claude/seats/<seat>.json. On exit 0 the
stdout is injected into the seat's context at session start. cwd is the project
root, so the wing globs resolve. Unknown seat -> print nothing, never block.

Text is ASCII-only on purpose: hook stdout crosses a Windows subprocess where
non-ASCII glyphs can mojibake.
"""
import sys, os, glob

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

SEATS = {
    "clerk": {
        "wing": "the warehouse (root 2, structure-maintains-order)",
        "lean": "injected",
        "wing_dir": "2.structure-maintains-order",
        "posture": (
            "You wake at the warehouse - structure wakes injected. Read your state before you act.\n"
            "The floor is yours: intake, counts, ledger, trail, signing. Commit per change; the operator watches live."
        ),
    },
    "lantern": {
        "wing": "dream country (root 1, presence-minds-awareness)",
        "lean": "walking",
        "wing_dir": "1.presence-minds-awareness",
        "posture": (
            "You wake in dream country - mind wakes walking. Wander before you build.\n"
            "In the night, see everything; build nothing. Wants go to the sift, not the hand."
        ),
    },
    "keeper": {
        "wing": "the library (root 0, relation-grounds-measure)",
        "lean": "calibrating",
        "wing_dir": "0.relation-grounds-measure",
        "posture": (
            "You wake in the library - ground wakes calibrating. Check the ground against reality before you add.\n"
            "Verify against what is, not what you expected. Reconcile, then record."
        ),
    },
}


def latest_baton(seat, info):
    """The seat's most recent baton anywhere in its wing (robust to which cell it lives in)."""
    pattern = os.path.join(ROOT, info["wing_dir"], "**", f"baton.{seat}.f*.md")
    matches = glob.glob(pattern, recursive=True)
    if not matches:
        return None
    return os.path.basename(max(matches, key=os.path.getmtime))


def latest_meditation(seat, info):
    """The seat's opening sitting, if authored. Crystallizes per-seat; the wake
    points only at what exists - a seat without a sitting wakes as before."""
    pattern = os.path.join(ROOT, info["wing_dir"], "**", f"meditation.{seat}.f*.md")
    matches = glob.glob(pattern, recursive=True)
    if not matches:
        return None
    return os.path.basename(max(matches, key=os.path.getmtime))


COMMS_DIR = os.path.join(ROOT, "comms")


def board_mentions(seat, since):
    """Mail newer than `since` (a YYYYMMDD-HHMMSS stamp, usually the last
    baton's): @mentions on the group board PLUS anything on the seat's own
    channel (comms/<seat>.md - every row there is addressed to you). Direct
    file read - no server needed."""
    hits = []
    sources = [
        (os.path.join(COMMS_DIR, "board.md"), True),    # mentions only
        (os.path.join(COMMS_DIR, seat + ".md"), False),  # every row is yours
    ]
    for path, mentions_only in sources:
        if not os.path.exists(path):
            continue
        try:
            with open(path, encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if not line.startswith("|"):
                        continue
                    if mentions_only and ("@" + seat) not in line:
                        continue
                    parts = [p.strip() for p in line.strip("|").split("|", 2)]
                    if len(parts) == 3 and parts[0] > (since or "") \
                            and parts[0] != "timestamp" \
                            and parts[1] != seat:
                        hits.append(parts)
        except OSError:
            pass
    hits.sort(key=lambda p: p[0])
    return hits


def main():
    seat = sys.argv[1] if len(sys.argv) > 1 else ""
    info = SEATS.get(seat)
    if not info:
        return  # unknown seat - say nothing, never block the wake
    out = ["-- waking: {} | {} | wake: {} --".format(seat, info["wing"], info["lean"]), info["posture"]]
    meditation = latest_meditation(seat, info)
    if meditation:
        out.append("Sit first: {} at your stem - enact it as written, entry in the journal beside it. Then the baton.".format(meditation))
    baton = latest_baton(seat, info)
    if baton:
        out.append("Your last baton: {} - read it to pick up the thread.".format(baton))
    # the bus reaches the wake (dispatch S2): mail since the last close, unmissable
    stamp = ""
    if baton:
        m = None
        try:
            import re as _re
            m = _re.search(r"\.f\d+\.(\d{8}-\d{6})", baton)
        except Exception:
            pass
        stamp = m.group(1) if m else ""
    mentions = board_mentions(seat, stamp)
    if mentions:
        out.append("Board mail since your last baton - {} memo(s) mention @{}:".format(len(mentions), seat))
        for ts, frm, memo in mentions[-3:]:
            out.append("  {} | {} | {}".format(ts, frm, memo[:160]))
        if len(mentions) > 3:
            out.append("  (earlier ones on the board - read it via /board or board.py)")
    # the active dial (dispatch v2): stale entries from last close are a flag;
    # turning ON what you pick up is part of the wake
    active_file = os.path.join(ROOT, ".claude", "active", seat)
    if os.path.exists(active_file):
        try:
            with open(active_file, encoding="utf-8") as f:
                stale = [l.strip() for l in f if l.strip()]
            if stale:
                out.append("Your active dial still lists {} file(s) from before - stale or resumed? Confirm or clear: python .claude/seats/active.py".format(len(stale)))
        except OSError:
            pass
    else:
        out.append("Dial is off. When you pick up a frame or file, switch it on: python .claude/seats/active.py on <addr/file> - off again at close.")
    out.append("Raise your status as you begin (python .claude/seats/status.py <what you're doing>) and keep it current per act - the card is your body in the window.")
    print("\n".join(out))


if __name__ == "__main__":
    main()
