#!/usr/bin/env python3
"""Tests for universal folding on intake — server._intake_fold_name (operator
word 20260614: one f0 per name, no fold-crossing, auto-fold on intake).

Lives WITH the code it tests (server.py at repo root) — tests are equipment,
they live next to their machinery, not in the audit register. Run standalone:

    python test_intake_fold.py        # exits 0 all-pass, 1 on any failure
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


def touch(d, name):
    (d / name).write_text("x", encoding="utf-8")


def main():
    R = []

    with tempfile.TemporaryDirectory() as td:           # 1
        r = server._intake_fold_name("foo.md", Path(td))
        R.append(case("unnumbered arrival -> first fold f0",
                      r.startswith("foo.f0.") and r.endswith(".md"), True))

    with tempfile.TemporaryDirectory() as td:           # 2
        r = server._intake_fold_name("rec.f3.20260601-120000.md", Path(td))
        R.append(case("already-canonical, no clash -> kept verbatim",
                      r, "rec.f3.20260601-120000.md"))

    with tempfile.TemporaryDirectory() as td:           # 3
        d = Path(td)
        touch(d, "bar.f0.20260601-120000.md")
        r = server._intake_fold_name("bar.md", d)
        R.append(case("second-f0 clash -> bumped to f1 (never two f0s)",
                      r.startswith("bar.f1."), True))

    with tempfile.TemporaryDirectory() as td:           # 4
        d = Path(td)
        touch(d, "baz.f2.20260601-120000.md")
        r = server._intake_fold_name("baz.md", d)
        R.append(case("higher fold present -> next fold (f3)",
                      r.startswith("baz.f3."), True))

    with tempfile.TemporaryDirectory() as td:           # 5
        r = server._intake_fold_name("qux", Path(td))
        R.append(case("no extension -> f0, no trailing dot",
                      r.startswith("qux.f0.") and not r.endswith("."), True))

    n, p = len(R), sum(R)
    print(f"\n{p}/{n} passed")
    sys.exit(0 if p == n else 1)


if __name__ == "__main__":
    main()
