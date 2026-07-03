#!/usr/bin/env python3
"""goodnight.py - the close-side mirror of wake.py (dispatch S1 slice 1.4).

UserPromptSubmit hook, wired per seat beside wake.py. When the operator's
prompt is the closing word - goodnight / good night, in short form (a closing
word, not a long message that happens to mention one) - the close order is
injected so the seat runs it without the operator carrying the protocol
(frame.seat-protocol.f3 at 210: baton -> sit -> entry -> dark).

Quiet otherwise: no output, no injection. Points only at what exists - the
sit line appears only if the seat's meditation file actually carries a
closing sitting; a seat without one closes on the three checks alone.
ASCII-only stdout (hook output crosses a Windows subprocess).
"""
import sys, os, json, re, glob

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

WINGS = {
    "clerk": "2.structure-maintains-order",
    "lantern": "1.presence-minds-awareness",
    "keeper": "0.relation-grounds-measure",
}

# short prompt + whole-word goodnight = the closing word; a longer message
# mentioning goodnight is discussion, stay quiet
_MAX_LEN = 80


def is_goodnight(prompt):
    p = " ".join(str(prompt or "").split()).lower()
    if not p or len(p) > _MAX_LEN:
        return False
    return re.search(r"\bgood\s*night\b", p) is not None


def closing_sitting(seat):
    """The seat's latest meditation, IF it carries a closing sitting."""
    pattern = os.path.join(ROOT, WINGS[seat], "**", "meditation.%s.f*.md" % seat)
    matches = glob.glob(pattern, recursive=True)
    if not matches:
        return None
    latest = max(matches, key=os.path.getmtime)
    try:
        with open(latest, encoding="utf-8") as f:
            if "closing sitting" not in f.read().lower():
                return None
    except OSError:
        return None
    return os.path.basename(latest)


def main():
    seat = sys.argv[1] if len(sys.argv) > 1 else ""
    if seat not in WINGS:
        return  # unknown seat - say nothing, never block
    try:
        # bytes + utf-8-sig: eats any BOM regardless of the pipe's text layer
        # (PowerShell test pipes prepend one); slice to the first brace for
        # any other prefix noise. The hook feed itself is clean JSON.
        raw = sys.stdin.buffer.read().decode("utf-8-sig", "replace")
        i = raw.find("{")
        if i < 0:
            return
        data = json.loads(raw[i:])
    except Exception:
        return
    if not is_goodnight(data.get("prompt", "")):
        return
    out = [
        "-- closing: {} | the goodnight word | close order: baton -> sit -> entry -> dark --".format(seat),
        "Mechanics first: floor clean (own paths committed) - trail current - baton cut (baton.{}.fN at your home leaf's .2 cell, one screen).".format(seat),
    ]
    med = closing_sitting(seat)
    if med:
        out.append("Then sit: {} - the closing sitting, walked from the far page in; entry from residue, marked sleep, in the journal beside it. Then the seat goes dark.".format(med))
    else:
        out.append("Then the seat goes dark. (No closing sitting authored yet - the checks are the close.)")
    print("\n".join(out))


if __name__ == "__main__":
    main()
