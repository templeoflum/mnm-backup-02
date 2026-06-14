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
        "wing_dir": "2.m.g.c.0667.structure-maintains-order",
        "posture": (
            "You wake at the warehouse - structure wakes injected. Read your state before you act.\n"
            "The floor is yours: intake, counts, ledger, trail, signing. Commit per change; the operator watches live."
        ),
    },
    "lantern": {
        "wing": "dream country (root 1, presence-minds-awareness)",
        "lean": "walking",
        "wing_dir": "1.v.d.o.0333.presence-minds-awareness",
        "posture": (
            "You wake in dream country - mind wakes walking. Wander before you build.\n"
            "In the night, see everything; build nothing. Wants go to the sift, not the hand."
        ),
    },
    "keeper": {
        "wing": "the library (root 0, relation-grounds-measure)",
        "lean": "calibrating",
        "wing_dir": "0.n.i.s.0000.relation-grounds-measure",
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


def main():
    seat = sys.argv[1] if len(sys.argv) > 1 else ""
    info = SEATS.get(seat)
    if not info:
        return  # unknown seat - say nothing, never block the wake
    out = ["-- waking: {} | {} | wake: {} --".format(seat, info["wing"], info["lean"]), info["posture"]]
    baton = latest_baton(seat, info)
    if baton:
        out.append("Your last baton: {} - read it to pick up the thread.".format(baton))
    print("\n".join(out))


if __name__ == "__main__":
    main()
