#!/usr/bin/env python3
"""Tests for the boundary-witnessing hook logic (Q3) — witness.addr_from_path
and witness.is_placed, the two pure units under the PostToolUse hook.

Lives WITH the code it tests (.claude/seats/witness.py) — the hook is machinery
outside the lattice, so its test lives with the machinery, not at a lattice
address. Run standalone:

    python test_witness.py            # exits 0 all-pass, 1 on any failure
"""
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
sys.path.insert(0, str(HERE))
sys.path.insert(0, str(ROOT))
import witness


def case(desc, got, want):
    ok = got == want
    print(("PASS" if ok else "FAIL") + f": {desc}  (got={got!r} want={want!r})")
    return ok


def at(*parts):
    """A path under ROOT built from real address dir-names (need not exist)."""
    return str(ROOT.joinpath(*parts))


A221 = ("2.m.g.c.0667.structure-maintains-order",
        "22.mm.gg.cc.0889.thread-dresses-weave",
        "221.mmv.ggd.cco.0926.trace-audits-path")


class StubServer:
    """Stands in for server.py — only _manifest_entries is exercised."""
    def __init__(self, entries):
        self._e = entries

    def _manifest_entries(self):
        return self._e


def main():
    R = []

    # addr_from_path: deepest lattice-address folder wins; non-lattice -> None
    R.append(case("nested lattice path -> deepest address (221)",
                  witness.addr_from_path(at(*A221, "fake.md")), "221"))
    R.append(case(".claude machinery path -> None (skipped)",
                  witness.addr_from_path(at(".claude", "seats", "witness.py")), None))
    R.append(case("root junk -> None",
                  witness.addr_from_path(at("README.md")), None))

    # is_placed: membership replayed from the manifest's running word
    placed = [{"file": "x.md", "op": "witness", "from": "-", "to": "221"}]
    R.append(case("to=addr -> placed",
                  witness.is_placed(StubServer(placed), "x.md", "221"), True))
    R.append(case("placed then moved away -> not placed",
                  witness.is_placed(StubServer(
                      placed + [{"file": "x.md", "op": "move", "from": "221", "to": "211"}]),
                      "x.md", "221"), False))
    R.append(case("placed then deleted -> not placed",
                  witness.is_placed(StubServer(
                      placed + [{"file": "x.md", "op": "delete", "from": "221", "to": "-"}]),
                      "x.md", "221"), False))
    R.append(case("never mentioned -> not placed",
                  witness.is_placed(StubServer([]), "y.md", "221"), False))

    n, p = len(R), sum(R)
    print(f"\n{p}/{n} passed")
    sys.exit(0 if p == n else 1)


if __name__ == "__main__":
    main()
