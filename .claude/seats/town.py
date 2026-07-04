#!/usr/bin/env python3
"""town.py - one motion opens the town, its mirror closes it
(proposal.town-open-close.f0 at 210, signed 20260704-120629).

    python .claude/seats/town.py open         -> wait for the server, then
                                                 launch every seat whose
                                                 console isn't already up,
                                                 staggered ~15s apart
    python .claude/seats/town.py close        -> post the closing word to
                                                 every seat's thread; each
                                                 seat runs its own close as
                                                 it reads the word
    python .claude/seats/town.py close --dry  -> print the words, post nothing

The closing word is a PROMPT - a seat mid-act finishes, then closes; the
cord (halt.py) stays the only hard stop. The server stays up after close.
Open is wired into lattice.bat; close is the CLI twin of the dispatch
button. Output tees to .claude/status/town.log (control state, gitignored).
"""
import json
import os
import subprocess
import sys
import time
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SERVER = 'http://localhost:8000'
SEATS = ('keeper', 'lantern', 'clerk')  # ground first, then the wings
STAGGER = 15

CLOSING_WORD = (
    "TOWN CLOSE - the operator's closing word, posted by the town-close "
    "hand he pressed: finish the act in your hands, then run your seat's "
    "close as protocol writes it - floor clean under your own paths, baton "
    "cut, closing sitting and entry where your seat keeps one, then dark. "
    "This word is a prompt, never a kill; the cord stays the hard stop. "
    "The server stays up - your page keeps working."
)


def _log(msg):
    print(msg)
    try:
        d = os.path.join(ROOT, '.claude', 'status')
        os.makedirs(d, exist_ok=True)
        with open(os.path.join(d, 'town.log'), 'a', encoding='utf-8') as f:
            f.write('{0} {1}\n'.format(time.strftime('%Y%m%d-%H%M%S'), msg))
    except OSError:
        pass


def _http(path, payload=None, timeout=10):
    req = urllib.request.Request(
        SERVER + path,
        data=json.dumps(payload).encode('utf-8') if payload is not None else None,
        headers={'Content-Type': 'application/json'} if payload is not None else {},
    )
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read().decode('utf-8'))


def _server_up():
    try:
        _http('/channels', timeout=2)
        return True
    except Exception:
        return False


def _awake():
    """Seats whose console lives: a cmd.exe hosting seat-<seat>.cmd stays
    the claude process's parent for the seat's whole life, so its command
    line in the process table IS the awake-marker - ground truth, no
    clock-age guessing. Unknown (query failed) reads as nobody-awake and
    open stays willing; the double-console is visible and his to close."""
    try:
        r = subprocess.run(
            ['powershell', '-NoProfile', '-Command',
             "Get-CimInstance Win32_Process -Filter \"name='cmd.exe'\""
             " | ForEach-Object { $_.CommandLine }"],
            capture_output=True, text=True, timeout=30)
        lines = r.stdout or ''
    except Exception:
        lines = ''
    return {s for s in SEATS if ('seat-' + s + '.cmd') in lines}


def town_open():
    _log('town open: waiting for the server on :8000...')
    for _ in range(30):
        if _server_up():
            break
        time.sleep(2)
    else:
        _log('town open: server never answered - start the lattice first')
        return 1
    awake = _awake()
    launched = 0
    for seat in SEATS:
        if seat in awake:
            _log('town open: {0} console already up - not launching a second'.format(seat))
            continue
        if launched:
            time.sleep(STAGGER)
        try:
            result = _http('/launch', {'seat': seat})
            _log('town open: {0} -> {1}'.format(seat, json.dumps(result)))
            launched += 1
        except Exception as e:
            _log('town open: {0} launch FAILED - {1}'.format(seat, e))
    _log('town open: done ({0} launched, {1} already up)'.format(
        launched, len(awake)))
    return 0


def town_close(dry=False):
    code = 0
    for seat in SEATS:
        body = '@{0} {1}'.format(seat, CLOSING_WORD)
        if dry:
            _log('[dry] -> comms/{0}.md: {1}'.format(seat, body))
            continue
        try:
            _http('/post', {'channel': seat, 'handle': 'town', 'body': body})
            _log('town close: word posted to {0}'.format(seat))
        except Exception as e:
            _log('town close: post to {0} FAILED - {1}'.format(seat, e))
            code = 1
    if not dry:
        _log('town close: all words out - seats close as they read; '
             'the server stays up')
    return code


def main():
    args = sys.argv[1:]
    if args and args[0] == 'open':
        return town_open()
    if args and args[0] == 'close':
        return town_close(dry='--dry' in args[1:])
    print(__doc__)
    return 1


if __name__ == '__main__':
    sys.exit(main())
