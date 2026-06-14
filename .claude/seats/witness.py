#!/usr/bin/env python3
"""Boundary witnessing hook (Q3).

PostToolUse on Write|Edit. When a seat writes/edits a file with the plain
tools (bypassing the lattice verbs), neither book sees it — this closes that
gap. The rule is membership, not tool:

  - target NOT yet placed in the manifest  -> NEW  -> a manifest row (201)
  - target ALREADY placed                  -> EDIT -> a session-log line (222)

So a Write of a brand-new file registers it; an Edit of an existing file is
logged as activity; and any unregistered file you touch self-heals into the
books. Only fires for files at real lattice addresses — .claude/, node_modules,
and root junk resolve to no address and are skipped.

Reuses server.py (the operational layer) so it works even when the server is
down. Never blocks: any failure exits 0 silently.
"""
import sys
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT))


def addr_from_path(file_path):
    """Deepest lattice-address folder in the path → its digits, else None."""
    try:
        rel = Path(file_path).resolve().relative_to(ROOT)
    except (ValueError, OSError):
        return None
    addr = None
    for part in rel.parts[:-1]:  # parents only, not the filename
        m = re.match(r'^([012]{1,3})\.', part)
        if m:
            addr = m.group(1)  # keep the deepest match (most specific address)
    return addr


def is_placed(server, name, addr):
    """Does the manifest's running word place (name) at (addr) right now?"""
    placed = False
    for e in server._manifest_entries():
        if e['file'] != name:
            continue
        if e['op'] == 'delete':
            if e['from'] in (addr, '-', ''):
                placed = False
            continue
        if e['from'] == addr:
            placed = False
        if e['to'] == addr:
            placed = True
    return placed


def append_manifest_row(server, name, addr, notes):
    """New placement → one manifest row (201). No log line (that's for edits)."""
    ts = server.timestamp_str()
    mpath = server.resolve_path('201') / 'manifest.live.md'
    if not mpath.exists():
        header = '| timestamp | operation | file | from | to | notes |\n'
        header += '|-----------|-----------|------|------|----|-------|\n'
        mpath.write_text(header, encoding='utf-8')
    with open(mpath, 'a', encoding='utf-8') as f:
        f.write(f'| {ts} | witness | {name} | - | {addr} | {notes} |\n')


def main():
    try:
        data = json.load(sys.stdin)
    except Exception:
        return
    file_path = (data.get('tool_input') or {}).get('file_path')
    if not file_path:
        return
    addr = addr_from_path(file_path)
    if not addr:
        return  # not a lattice file — nothing to witness
    name = Path(file_path).name

    try:
        import server
    except Exception:
        return

    try:
        if is_placed(server, name, addr):
            # already placed → an edit → activity trail (222)
            server.op_log('C', f'edit: {name}', addr, f'{addr}→{addr}',
                          'edited via Write/Edit tool, witnessed')
        else:
            # not placed → new → placement ledger (201)
            append_manifest_row(server, name, addr,
                                'new file via Write/Edit tool, witnessed')
    except Exception:
        return  # witnessing never blocks the work


if __name__ == '__main__':
    main()
