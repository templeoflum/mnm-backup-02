#!/usr/bin/env python3
"""loop.py - the seat's loop marker (card-accuracy fix, operator 173801).

    python .claude/seats/loop.py mark <next-wake> <what you're doing...>
    python .claude/seats/loop.py clear
    python .claude/seats/loop.py            -> show all loop markers

A looping seat's turn is CLOSED between /loop ticks, so the presence card reads
'asleep' - indistinguishable from a done/dark seat. This marker is the missing
signal: stamp it on every wake-schedule (next-wake stamp + one line of what
you're on), clear it at goodnight/session-end. op_presence reads it and the card
shows 'looping · <doing>' (alive, waking on schedule) vs 'asleep' (dark).

<next-wake> is a UTC stamp YYYYMMDD-HHMMSS. If it's >30m past with no clear, the
server treats the loop as dead (dark) - a crash/end that never cleared. Seat =
GIT_AUTHOR_NAME. Control state, gitignored; the trail of work stays git.
"""
import os
import sys
import time

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LOOP = os.path.join(ROOT, '.claude', 'loop')


def main():
    seat = os.environ.get('GIT_AUTHOR_NAME', '').strip() or 'operator'
    args = sys.argv[1:]
    if not args:
        if not os.path.isdir(LOOP) or not os.listdir(LOOP):
            print('no loop markers set')
            return 0
        for s in sorted(os.listdir(LOOP)):
            try:
                with open(os.path.join(LOOP, s), encoding='utf-8-sig') as f:
                    print('{0:>8} | {1}'.format(s, f.read().strip()))
            except OSError:
                continue
        return 0
    if args[0] == 'clear':
        try:
            os.remove(os.path.join(LOOP, seat))
        except OSError:
            pass
        print('loop cleared ({0})'.format(seat))
        return 0
    if args[0] == 'mark':
        rest = args[1:]
        if not rest:
            print('usage: loop.py mark <next-wake YYYYMMDD-HHMMSS> <what you are doing...>')
            return 1
        nxt = rest[0].strip()
        doing = ' '.join(rest[1:]).strip() or '(on the loop watch)'
        os.makedirs(LOOP, exist_ok=True)
        with open(os.path.join(LOOP, seat), 'w', encoding='utf-8') as f:
            f.write('{0} | {1}\n'.format(nxt, doing))
        print('loop marked ({0}): wakes {1} - {2}'.format(seat, nxt, doing))
        return 0
    print('usage: loop.py mark <next-wake> <doing...> | clear')
    return 1


if __name__ == '__main__':
    sys.exit(main())
