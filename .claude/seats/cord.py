#!/usr/bin/env python3
"""The cord, from the command line (dispatch S1 slice 1.2).

    python .claude/seats/cord.py                     -> state
    python .claude/seats/cord.py pull [scope] [reason ...]
    python .claude/seats/cord.py clear [scope]

scope: 'all' (default) or a seat name. Imports server.py directly, so the
cord works with the HTTP server down — the flag and the ledger row still
land. The lattice UI and POST /halt are the same op through the other door.

The pull is signed: `by` comes from GIT_AUTHOR_NAME, so a seat self-stopping
(dispatch S1 slice 1.3 — jidoka) signs its own stop; the operator's shell has
no seat author and signs as operator. Seats may PULL only — op_halt refuses a
clear signed by a seat; the operator clears.
"""
import os
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT))


def main():
    import server
    by = os.environ.get('GIT_AUTHOR_NAME', '').strip() or 'operator'
    args = sys.argv[1:]
    if not args:
        state = server.op_halt_state()
        if state['halted']:
            for f in state['flags']:
                print('HALTED ({0}): {1}'.format(f['scope'], f['reason']))
        else:
            print('armed - no halt stands')
        return 0
    action = args[0]
    scope = args[1] if len(args) > 1 else 'all'
    reason = ' '.join(args[2:])
    result = server.op_halt(action, scope, reason, by=by)
    if 'error' in result:
        print('error: ' + result['error'])
        return 1
    if 'halted' in result:
        print('HALT pulled ({0}): {1}'.format(result['halted'], result['reason']))
    else:
        print('cleared ({0})'.format(result['cleared']) +
              ('' if result['stood'] else ' - no flag stood'))
    return 0


if __name__ == '__main__':
    sys.exit(main())
