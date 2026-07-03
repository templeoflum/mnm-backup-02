#!/usr/bin/env python3
"""active.py - the active dial (dispatch v2; operator word 20260703).

Each seat declares which project files it is actively working - ON at wake
or when a frame is picked up, OFF at close. The dispatch window's "active"
pane source reads the dial, so the current frame is always the one on
screen, no hardcoded prefixes.

    python .claude/seats/active.py                     -> list all seats
    python .claude/seats/active.py on <addr/file> ...  -> add for this seat
    python .claude/seats/active.py off <addr/file> ... -> remove
    python .claude/seats/active.py clear               -> clear this seat

Seat = GIT_AUTHOR_NAME. Entries are addr/filename (e.g.
210/frame.window-hands-floor.f0.20260703-151758.md). Control state,
gitignored - the trail of WORK is git; this is only the pointer.
"""
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ACTIVE = os.path.join(ROOT, '.claude', 'active')


import re


def normalize(path):
    """Canonicalize a dial entry to digit-first addr/file form (keeper's
    field note 20260703: stem-named paths like 0.relation-grounds-measure/...
    silently fail every /read consumer). Leading address folders collapse to
    their deepest digits; the rest rides as the file path."""
    parts = [p for p in path.strip().replace('\\', '/').split('/') if p]
    digits = None
    i = 0
    for p in parts:
        m = re.match(r'^([012]{1,3})(?:\.|$)', p)
        if m:
            digits = m.group(1)
            i += 1
        else:
            break
    if digits is None:
        return '/'.join(parts)
    return digits + '/' + '/'.join(parts[i:])


def seat_file(seat):
    return os.path.join(ACTIVE, seat)


def read(seat):
    try:
        with open(seat_file(seat), encoding='utf-8-sig') as f:
            return [l.strip() for l in f if l.strip()]
    except OSError:
        return []


def write(seat, entries):
    os.makedirs(ACTIVE, exist_ok=True)
    if entries:
        with open(seat_file(seat), 'w', encoding='utf-8') as f:
            f.write('\n'.join(entries) + '\n')
    else:
        try:
            os.remove(seat_file(seat))
        except OSError:
            pass


def main():
    seat = os.environ.get('GIT_AUTHOR_NAME', '').strip() or 'operator'
    args = sys.argv[1:]
    if not args:
        if not os.path.isdir(ACTIVE) or not os.listdir(ACTIVE):
            print('no active files - every dial is off')
            return 0
        for s in sorted(os.listdir(ACTIVE)):
            for e in read(s):
                print('{0:>8} | {1}'.format(s, e))
        return 0
    cmd = args[0]
    if cmd == 'clear':
        write(seat, [])
        print('dial cleared ({0})'.format(seat))
        return 0
    entries = read(seat)
    targets = [normalize(a) for a in args[1:] if a.strip()]
    if cmd == 'on':
        for t in targets:
            if t not in entries:
                entries.append(t)
        write(seat, entries)
        print('ON ({0}): {1}'.format(seat, ' | '.join(targets) or '(nothing)'))
        return 0
    if cmd == 'off':
        entries = [e for e in entries if e not in targets]
        write(seat, entries)
        print('OFF ({0}): {1}'.format(seat, ' | '.join(targets) or '(nothing)'))
        return 0
    print('usage: active.py [on|off|clear] [addr/file ...]')
    return 1


if __name__ == '__main__':
    sys.exit(main())
