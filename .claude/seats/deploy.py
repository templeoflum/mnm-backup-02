#!/usr/bin/env python3
"""deploy.py - the release ceremony (dispatch v2; operator word 20260703).

    python .claude/seats/deploy.py <summary of the change...>

Copies the staged client (lattice.dev.html) over the live one in a single
atomic replace - the ONLY act that ever touches the operator's surface.
Announces the deploy in the clerk thread first, so the transition is never
unexplained. The live page auto-updates on the mtime change and restores
the operator's full state (its own code carries the restore).

Clerk's standing law: NEVER edit the live client directly - build and
verify on lattice.dev.html, then deploy.
"""
import os
import shutil
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
D = os.path.join(ROOT, '2.structure-maintains-order',
                 '21.labor-installs-practice', '211.motion-builds-form')
DEV = os.path.join(D, 'lattice.dev.html')
LIVE = os.path.join(D, 'lattice.f2.20260609-102857.html')


def main():
    summary = ' '.join(sys.argv[1:]).strip() or '(no summary given)'
    if not os.path.exists(DEV):
        print('no staged copy at lattice.dev.html - nothing to deploy')
        return 1
    # announce first - the transition is never unexplained
    subprocess.run(
        [sys.executable, os.path.join(ROOT, '.claude', 'seats', 'board.py'),
         '-c', 'clerk', 'post', 'deploying: ' + summary],
        cwd=ROOT)
    tmp = LIVE + '.deploy'
    shutil.copyfile(DEV, tmp)
    os.replace(tmp, LIVE)   # atomic on the same volume - one clean mtime change
    print('deployed: ' + summary)
    return 0


if __name__ == '__main__':
    sys.exit(main())
