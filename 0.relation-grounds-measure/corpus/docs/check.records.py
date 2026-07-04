#!/usr/bin/env python3
"""check.records.py - keeper's batch-check, committed (standing-rules C, 20260704).

The immune pass keeper hand-wrote every dive, made a fact the body emits.
Run from the corpus root or anywhere; it finds records/ relative to itself.

    python docs/check.records.py                 -> check the whole corpus
    python docs/check.records.py 20260704-052516 -> check only that batch (by stamp),
                                                    reciprocity still resolved against all

Reports, in order: counts by type · duplicate-lineage handles · dangling refs ·
reciprocity gaps (object depends-on <-> used-by). Exit 0 clean, 1 if any fault.
A clean run is four zeros; that is the gate keeper reads before touching the index.
"""
import os
import re
import sys
from collections import Counter

HERE = os.path.dirname(os.path.abspath(__file__))
RECORDS = os.path.normpath(os.path.join(HERE, "..", "records"))

HANDLE_RE = re.compile(r"^((?:field|system|source|object)\.[a-z0-9-]+)\.f(\d+)\.(\d{8}-\d{6})\.md$")
REF_RE = re.compile(r"\[\[((?:field|system|source|object)\.[a-z0-9-]+)\]\]")


def fm_list(text, key):
    """Handles inside a frontmatter list field, e.g. depends-on: ["[[object.x]]"]."""
    m = re.search(r"^" + re.escape(key) + r":\s*\[(.*)\]\s*$", text, re.M)
    return re.findall(r"\[\[([^\]]+)\]\]", m.group(1)) if m else []


def load():
    """handle -> list of (fold:int, stamp, filename); plus filename->text cache."""
    handles = {}
    for fn in os.listdir(RECORDS):
        m = HANDLE_RE.match(fn)
        if not m:
            continue
        handle, fold, stamp = m.group(1), int(m.group(2)), m.group(3)
        handles.setdefault(handle, []).append((fold, stamp, fn))
    return handles


def newest_file(handles, handle):
    if handle not in handles:
        return None
    return sorted(handles[handle])[-1][2]


def main():
    batch = sys.argv[1] if len(sys.argv) > 1 else None
    handles = load()
    text = {}

    def read(fn):
        if fn not in text:
            with open(os.path.join(RECORDS, fn), encoding="utf-8") as f:
                text[fn] = f.read()
        return text[fn]

    # which files this run inspects for dangling/reciprocity (batch or all)
    inspect = []
    for hs in handles.values():
        for _, stamp, fn in hs:
            if batch is None or batch in fn:
                inspect.append(fn)

    faults = 0

    # 1 - counts by type (unique handles)
    counts = Counter(h.split(".")[0] for h in handles)
    total = len(handles)
    print("counts: {0} = {1} field + {2} system + {3} source + {4} object".format(
        total, counts.get("field", 0), counts.get("system", 0),
        counts.get("source", 0), counts.get("object", 0)))
    files = sum(len(v) for v in handles.values())
    if files != total:
        # more files than handles is normal (folds); flag only if a handle has
        # colliding fold numbers, handled below - here just report the spread
        print("  ({0} record files across {1} handles - folds counted)".format(files, total))

    # 2 - duplicate-lineage: a handle with two files sharing a fold number
    dup = []
    for h, hs in handles.items():
        folds = [f for f, _, _ in hs]
        if len(folds) != len(set(folds)):
            dup.append(h)
    print("duplicate-lineage handles: {0}".format(sorted(dup) or "NONE"))
    faults += len(dup)

    # 3 - dangling refs (in inspected files, resolved against all handles)
    dangling = []
    for fn in inspect:
        for ref in set(REF_RE.findall(read(fn))):
            if ref not in handles:
                dangling.append((fn, ref))
    print("dangling refs: {0}".format(dangling or "NONE"))
    faults += len(dangling)

    # 4 - reciprocity: object depends-on <-> used-by (inspected objects, both ways)
    recip = []
    for fn in inspect:
        base = HANDLE_RE.match(fn)
        if not base or base.group(1).split(".")[0] != "object":
            continue
        me = base.group(1)
        t = read(fn)
        for d in fm_list(t, "depends-on"):
            if not d.startswith("object."):
                continue
            tf = newest_file(handles, d)
            if tf is None:
                recip.append((me, "depends-on", d, "missing target"))
            elif me not in fm_list(read(tf), "used-by"):
                recip.append((me, "depends-on", d, "no inverse"))
        for u in fm_list(t, "used-by"):
            tf = newest_file(handles, u)
            if tf is None:
                recip.append((me, "used-by", u, "missing target"))
            elif me not in fm_list(read(tf), "depends-on"):
                recip.append((me, "used-by", u, "no inverse"))
    print("reciprocity gaps: {0}".format(recip or "NONE"))
    faults += len(recip)

    scope = "batch {0}".format(batch) if batch else "whole corpus"
    print("--- {0}: {1} ---".format(scope, "CLEAN" if faults == 0 else "{0} FAULT(S)".format(faults)))
    return 0 if faults == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
