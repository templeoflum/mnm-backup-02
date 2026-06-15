#!/usr/bin/env python3
"""Regression test for witness-hardening (20260615): concurrent cross-PROCESS
appends to the ledger never drop or tear a row — the silent-miss is closed.

Windows 'a' mode is seek-then-write (not atomic); before server._locked_append,
parallel witness processes clobbered each other (keeper's object wave lost 5
rows, caught only by the clerk reconcile). This spawns real subprocesses — not
threads (the GIL would hide the bug) — each appending a burst, then verifies all
rows are present and none are interleaved/torn.

Lives with server.py. Run: python test_locked_append.py
"""
import sys
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent

# each worker appends M rows of the form: | row | <tag> | <i> |
WORKER = (
    "import sys, server;"
    "p, tag, n = sys.argv[1], sys.argv[2], int(sys.argv[3]);"
    "[server._locked_append(p, f'| row | {tag} | {i} |\\n', header='HEAD\\n') "
    "for i in range(n)]"
)


def main():
    K, M = 8, 40                      # 8 processes × 40 = 320 racing appends
    with tempfile.TemporaryDirectory() as td:
        p = str(Path(td) / 'ledger.md')
        procs = [
            subprocess.Popen([sys.executable, '-c', WORKER, p, f't{k}', str(M)],
                             cwd=str(ROOT))
            for k in range(K)
        ]
        codes = [pr.wait() for pr in procs]
        text = Path(p).read_text(encoding='utf-8')

    rows = [l for l in text.splitlines() if l.startswith('| row |')]
    want = {(f't{k}', i) for k in range(K) for i in range(M)}
    got = set()
    malformed = 0
    for l in rows:
        parts = [x.strip() for x in l.strip('|').split('|')]
        if len(parts) != 3 or parts[0] != 'row':
            malformed += 1
            continue
        try:
            got.add((parts[1], int(parts[2])))
        except ValueError:
            malformed += 1

    missing = want - got
    ok = (len(rows) == K * M and got == want and malformed == 0
          and all(c == 0 for c in codes))

    print(f"rows={len(rows)} expected={K*M}  unique={len(got)}  "
          f"malformed={malformed}  exit_codes={codes}")
    if missing:
        print(f"  MISSING {len(missing)}: {sorted(missing)[:8]} ...")
    print(("PASS" if ok else "FAIL")
          + f": {K} processes × {M} rows — all landed intact, no clobber")
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
