#!/usr/bin/env python3
"""reconcile.index.py - keeper's index-vs-disk reconcile, committed (standing-rules C, 20260704).

Disk is the truth; the index is a claim about it. This prints the disk counts by
type (what keeper writes into the index's state line) and, if it can find the
index's own stated total, compares - so a count drift shows as a mismatch, never
as a number nobody re-checked. Run from anywhere; finds records/ and the newest
corpus.index relative to itself.

    python docs/reconcile.index.py

Exit 0 if the index's stated total matches disk (or no stated total found to
compare), 1 on mismatch.
"""
import os
import re
import sys
from collections import Counter

HERE = os.path.dirname(os.path.abspath(__file__))
CORPUS = os.path.normpath(os.path.join(HERE, ".."))
RECORDS = os.path.join(CORPUS, "records")

HANDLE_RE = re.compile(r"^((?:field|system|source|object)\.[a-z0-9-]+)\.f\d+\.\d{8}-\d{6}\.md$")


def disk_counts():
    handles = {}
    for fn in os.listdir(RECORDS):
        m = HANDLE_RE.match(fn)
        if m:
            handles.setdefault(m.group(1), None)
    c = Counter(h.split(".")[0] for h in handles)
    return len(handles), c


def newest_index():
    idx = [f for f in os.listdir(CORPUS) if f.startswith("corpus.index.f") and f.endswith(".md")]
    if not idx:
        return None
    # sort by fold number embedded in corpus.index.fN.timestamp.md
    def foldnum(f):
        m = re.search(r"corpus\.index\.f(\d+)\.", f)
        return int(m.group(1)) if m else -1
    return os.path.join(CORPUS, sorted(idx, key=foldnum)[-1])


def main():
    total, c = disk_counts()
    print("disk: {0} records = {1} field + {2} system + {3} source + {4} object".format(
        total, c.get("field", 0), c.get("system", 0), c.get("source", 0), c.get("object", 0)))

    idx = newest_index()
    if not idx:
        print("no corpus.index found - disk counts above are the truth to write")
        return 0
    text = open(idx, encoding="utf-8").read()
    # the state line reads e.g. "**2567 records** - 141 field - 34 system - ..."
    m = re.search(r"\*\*(\d+)\s+records\*\*", text)
    stated = int(m.group(1)) if m else None
    print("index ({0}): stated total {1}".format(os.path.basename(idx), stated if stated is not None else "not found"))
    if stated is None:
        print("--- no stated total to compare; disk is the truth ---")
        return 0
    if stated == total:
        print("--- reconcile CLEAN: index total matches disk ({0}) ---".format(total))
        return 0
    print("--- reconcile DRIFT: index says {0}, disk has {1} (delta {2:+d}) ---".format(
        stated, total, total - stated))
    return 1


if __name__ == "__main__":
    sys.exit(main())
