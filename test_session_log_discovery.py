#!/usr/bin/env python3
"""Regression: session-log discovery must ignore .lock mutexes.

The bug (found live 20260615): _locked_append names its mutex
`<logname>.md.lock`, which shares the `log.session.<date>` prefix the
discovery glob in _session_log_file matched on. Under concurrency a transient
lock would be picked as "the latest session log" via sorted(...)[-1] (.md.lock
sorts after .md), so op_log appended real log lines INTO the lock file, then a
`.lock.lock` formed, cascading — and content was destroyed when _locked_append
unlinked the lock. test_locked_append never caught it: it appends to a fixed
path and never exercises _session_log_file's discovery.

Lives WITH the code it tests (server.py at repo root). Run standalone:

    python test_session_log_discovery.py    # exits 0 all-pass, 1 on any failure
"""
import sys
import tempfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import server


def case(desc, got, want):
    ok = got == want
    print(("PASS" if ok else "FAIL") + f": {desc}  (got={got!r} want={want!r})")
    return ok


def main():
    R = []
    today = server.utc_now().strftime("%Y%m%d")
    real = f"log.session.f0.{today}-120000.md"

    # 1 — a real log plus its lock mutexes present → discovery returns the .md
    with tempfile.TemporaryDirectory() as td:
        d = Path(td)
        (d / real).write_text("x", encoding="utf-8")
        (d / (real + ".lock")).write_text("stray line\n", encoding="utf-8")
        (d / (real + ".lock.lock")).write_text("stray\nlines\n", encoding="utf-8")
        got = server._session_log_file(d).name
        R.append(case("real .md + .lock + .lock.lock -> picks the .md", got, real))

    # 2 — ONLY lock files present (no real .md yet) → a fresh .md name, never a lock
    with tempfile.TemporaryDirectory() as td:
        d = Path(td)
        (d / (real + ".lock")).write_text("stray\n", encoding="utf-8")
        got = server._session_log_file(d).name
        R.append(case("only locks present -> fresh name ends .md",
                      got.startswith("log.session.") and got.endswith(".md")
                      and ".lock" not in got, True))

    # 3 — two real logs + a lock on the later one → returns the latest .md, not the lock
    with tempfile.TemporaryDirectory() as td:
        d = Path(td)
        early = f"log.session.f0.{today}-080000.md"
        late = f"log.session.f1.{today}-160000.md"
        for n in (early, late):
            (d / n).write_text("x", encoding="utf-8")
        (d / (late + ".lock")).write_text("stray\n", encoding="utf-8")
        got = server._session_log_file(d).name
        R.append(case("two .md + lock on latest -> latest .md", got, late))

    n, p = len(R), sum(R)
    print(f"\n{p}/{n} passed")
    sys.exit(0 if p == n else 1)


if __name__ == "__main__":
    main()
