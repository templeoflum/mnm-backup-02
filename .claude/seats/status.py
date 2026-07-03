#!/usr/bin/env python3
"""status.py - the seat's live status line (dispatch v2 V4).

    python .claude/seats/status.py <words...>   -> set this seat's status
    python .claude/seats/status.py              -> show all seats' statuses
    python .claude/seats/status.py clear        -> clear this seat's line

One line, self-reported, updated per act ("watching the board" / "building
the doc popup" / "sitting"). The dispatch card shows it with its age and
dims it honestly when stale - the line only ever claims what the seat last
SAID, never fakes liveness. Seat = GIT_AUTHOR_NAME. Control state,
gitignored; the trail of work stays git.
"""
import os
import sys
import time

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
STATUS = os.path.join(ROOT, '.claude', 'status')


def main():
    seat = os.environ.get('GIT_AUTHOR_NAME', '').strip() or 'operator'
    args = sys.argv[1:]
    if not args:
        if not os.path.isdir(STATUS) or not os.listdir(STATUS):
            print('no status lines set')
            return 0
        now = time.time()
        for s in sorted(os.listdir(STATUS)):
            p = os.path.join(STATUS, s)
            try:
                with open(p, encoding='utf-8-sig') as f:
                    text = f.read().strip()
                age = int(now - os.path.getmtime(p))
                print('{0:>8} | {1:>5}s ago | {2}'.format(s, age, text))
            except OSError:
                continue
        return 0
    if args[0] == 'clear':
        try:
            os.remove(os.path.join(STATUS, seat))
        except OSError:
            pass
        print('status cleared ({0})'.format(seat))
        return 0
    text = ' '.join(args).strip()
    os.makedirs(STATUS, exist_ok=True)
    with open(os.path.join(STATUS, seat), 'w', encoding='utf-8') as f:
        f.write(text + '\n')
    print('status ({0}): {1}'.format(seat, text))
    return 0


if __name__ == '__main__':
    sys.exit(main())
