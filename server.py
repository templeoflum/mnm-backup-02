"""
lattice server — operational layer for the lattice instrument.

three layers mirroring the matrix:
  0 specification — address resolver, naming engine
  1 operation     — the verbs: list, read, receive, move, fold, create, log
  2 configuration — tracing: filesystem + manifest + log

python stdlib only. serves static files and lattice API.
address: 211 (motion · builds · form)
"""

import http.server
import json
import os
import re
import shutil
import socket
import subprocess
import time
import urllib.parse
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PORT = 8000


# ============================================================
# LAYER 0 — SPECIFICATION
# the address is the truth. everything resolves from it.
# ============================================================

ROLES = ['n', 'v', 'm']    # noun, verb, modifier
MODES = ['i', 'd', 'g']    # is, does, goes
REGS  = ['s', 'o', 'c']    # spec, ops, config

ROLE_DECODE = {'n': 'noun', 'v': 'verb', 'm': 'modifier'}
MODE_DECODE = {'i': 'is', 'd': 'does', 'g': 'goes'}
REG_DECODE  = {'s': 'spec', 'o': 'ops', 'c': 'config'}

# triads: noun · verb · modifier at every address depth
TRIADS = {
    '0': ('relation', 'grounds', 'measure'),
    '1': ('presence', 'minds', 'awareness'),
    '2': ('structure', 'maintains', 'order'),
    '00': ('constant', 'references', 'flux'),
    '01': ('gauge', 'calibrates', 'accuracy'),
    '02': ('magnitude', 'measures', 'number'),
    '10': ('gaze', 'beholds', 'totality'),
    '11': ('focus', 'discerns', 'difference'),
    '12': ('thought', 'grasps', 'sense'),
    '20': ('intake', 'stages', 'priority'),
    '21': ('labor', 'installs', 'practice'),
    '22': ('thread', 'dresses', 'weave'),
    '000': ('unit', 'holds', 'one'),
    '001': ('ratio', 'reciprocates', 'scale'),
    '002': ('interval', 'spans', 'continuum'),
    '010': ('standard', 'sets', 'zero'),
    '011': ('comparison', 'analyzes', 'deviation'),
    '012': ('adjustment', 'corrects', 'range'),
    '020': ('sample', 'captures', 'grain'),
    '021': ('rate', 'cycles', 'stream'),
    '022': ('point', 'plots', 'graph'),
    '100': ('wonder', 'bounds', 'frame'),
    '101': ('lucidity', 'reconfigures', 'scene'),
    '102': ('chaos', 'untethers', 'finality'),
    '110': ('attention', 'watches', 'knot'),
    '111': ('view', 'connects', 'continuity'),
    '112': ('break', 'lands', 'edge'),
    '120': ('logic', 'describes', 'state'),
    '121': ('reason', 'guides', 'decision'),
    '122': ('creativity', 'carries', 'potential'),
    '200': ('delivery', 'receives', 'material'),
    '201': ('manifest', 'confirms', 'count'),
    '202': ('schedule', 'sorts', 'inventory'),
    '210': ('layout', 'positions', 'work'),
    '211': ('motion', 'builds', 'form'),
    '212': ('coherence', 'adapts', 'snag'),
    '220': ('trim', 'cleans', 'slack'),
    '221': ('trace', 'audits', 'path'),
    '222': ('sign', 'hands', 'record'),
}

# document types recognized by the naming convention
DOC_TYPES = [
    'manifest', 'count', 'schedule', 'frame', 'audit', 'log',
    'review', 'survey', 'extract', 'crossref', 'dream', 'parked',
    'memo',  # provisional (W4 comms board) — formalizes in the naming rework
]

FOLD_CEILING = 39  # 3+9+27 checkpoint tree. f0 is origin, f39 is the ceiling.

# directories the books never enter (.claude stays out by operator word, 20260612)
EXCLUDE_DIRS = {'.git', 'node_modules', '__pycache__', '.claude'}

# A project is ONE tracked unit, not a sub-tree of lattice addresses. It declares
# itself with this marker file at its root; the witness and the browser both stop
# there, treating the folder as a single thing (frame.unit-marker.f0, 210). The
# marker is a dotfile, so it is read for presence and never itself listed.
UNIT_MARKER = '.unit'


def is_unit(path):
    """Is this folder a self-contained project unit (does it hold the marker)?"""
    return (Path(path) / UNIT_MARKER).exists()


# A shelf is reference library — material you PULL from on request, not freight the
# floor holds all at once. The sweep books a shelf as one node and does NOT deep-walk
# it (frame: library is pull-on-request); its contents are reached lazily by browsing
# in, level by level. Same scan behavior as a unit, different intent: a unit is a
# project, a shelf is a knowledge base you read from. The marker is a dotfile.
SHELF_MARKER = '.shelf'


def is_shelf(path):
    """Is this folder a reference-library shelf (does it hold the marker)?"""
    return (Path(path) / SHELF_MARKER).exists()


# Address folders (the lattice's own structure) declare their depth with a marker:
# .stem (1-digit, the trunk from the root), .leaf (2-digit), .cell (3-digit). The
# browser hides them — they are reached through the address UI, not browsed as
# folders (frame.unit-marker.f1, 210). The markers also give each address a typed
# handle for later use. Orthogonal to .unit: address folders ARE witnessed (their
# files live at lattice addresses); they are only hidden from the browse list.
ADDRESS_MARKERS = {1: '.stem', 2: '.leaf', 3: '.cell'}


def address_marker_for_depth(depth):
    """The marker a depth-`depth` address folder carries (1→.stem, 2→.leaf, 3→.cell)."""
    return ADDRESS_MARKERS.get(depth)


def is_address(path):
    """Is this folder a lattice address folder (does it carry a depth marker)?"""
    p = Path(path)
    return any((p / m).exists() for m in ADDRESS_MARKERS.values())


def ensure_address_marker(addr):
    """Drop the depth-correct marker in an address folder if missing. Idempotent —
    keeps a freshly-made address folder born typed. Written server-side (not via the
    Write tool), so it raises no witness churn; the marker is a dotfile, unlisted."""
    marker = address_marker_for_depth(len(addr))
    if not marker:
        return
    directory = resolve_path(addr)
    if directory.is_dir():
        mpath = directory / marker
        if not mpath.exists():
            mpath.write_text('', encoding='utf-8')


def seed_address_markers():
    """One-time migration: ensure every EXISTING address folder carries its depth
    marker. Returns the list seeded. Idempotent (safe to re-run)."""
    seeded = []
    for addr, path, _ in _scan_locations():
        if not addr.isdigit():
            continue  # skip the 'root' pseudo-address
        if path.is_dir():
            marker = address_marker_for_depth(len(addr))
            if marker and not (path / marker).exists():
                (path / marker).write_text('', encoding='utf-8')
                seeded.append(f'{addr}:{marker}')
    return seeded


def full_label(digits):
    """Address digits → the full card/keystone notation for one segment.

    '21' → '21.mv.gd.co.0778.labor-installs-practice'

    The detailed read: role/mode/register/ratio. Lives here as card/keystone
    info — the folder name carries only digit+triad (see resolve()).
    """
    role = ''.join(ROLES[int(c)] for c in digits)
    mode = ''.join(MODES[int(c)] for c in digits)
    reg  = ''.join(REGS[int(c)] for c in digits)
    rat  = ratio(digits)
    n, v, m = TRIADS[digits]
    return f'{digits}.{role}.{mode}.{reg}.{rat}.{n}-{v}-{m}'


def resolve(digits):
    """Address digits → filesystem path components (digit + triad).

    211 → ['2.structure-maintains-order',
           '21.labor-installs-practice',
           '211.motion-builds-form']

    The folder name carries digit+triad only; the full notation
    (role/mode/register/ratio) is card/keystone info — see full_label().
    """
    parts = []
    for i in range(1, len(digits) + 1):
        sub = digits[:i]
        n, v, m = TRIADS[sub]
        parts.append(f'{sub}.{n}-{v}-{m}')
    return parts


def resolve_path(digits):
    """Address digits → absolute filesystem path."""
    return ROOT / os.path.join(*resolve(digits))


def ratio(digits):
    """Ternary ratio. d1/3 + d2/9 + d3/27 → four-digit string."""
    val = sum(int(c) * (3 ** -(i + 1)) for i, c in enumerate(digits))
    return str(round(val * 1000)).zfill(4)


def utc_now():
    """Current UTC datetime."""
    return datetime.now(timezone.utc)


def timestamp_str(dt=None):
    """YYYYMMDD-HHMMSS UTC."""
    dt = dt or utc_now()
    return dt.strftime('%Y%m%d-%H%M%S')


def name(doc_type, scope, addr, dt=None):
    """Generate filename at address. Auto-fold, auto-timestamp.

    Scans existing files at addr, finds highest fN for matching
    type.scope pattern, returns fN+1 filename.

    Pattern: type.scope.fN.YYYYMMDD-HHMMSS.md
    """
    dt = dt or utc_now()
    ts = timestamp_str(dt)
    directory = resolve_path(addr)
    prefix = f'{doc_type}.{scope}.'

    highest_fold = -1
    if directory.exists():
        for f in directory.iterdir():
            if f.is_file() and f.name.startswith(prefix):
                m = re.search(r'\.f(\d+)\.', f.name)
                if m:
                    highest_fold = max(highest_fold, int(m.group(1)))

    fold = highest_fold + 1
    if fold > FOLD_CEILING:
        return None
    return f'{doc_type}.{scope}.f{fold}.{ts}.md'


def valid_digits(digits):
    """Validate address digits: 1-3 chars, each 0-2."""
    return bool(re.match(r'^[012]{1,3}$', digits))


# ============================================================
# LAYER 1 — OPERATION
# the verbs. each one does exactly what it says.
# ============================================================

def op_list(digits, subpath=''):
    """What lives at this address (or a subfolder of it). Files grouped as
    documents; subfolders reported so the client can browse into them.

    Returns {files, folders, documents, path, subpath}. Address folders (carrying
    a .stem/.leaf/.cell marker) are omitted — they are navigated by the address UI,
    not browsed; project units and freight folders are listed normally.
    """
    base = resolve_path(digits)
    # subpath guard: no escaping the address (no '..', no absolute)
    parts = [p for p in subpath.split('/') if p and p != '.']
    if any(p == '..' for p in parts):
        parts = []
    subpath = '/'.join(parts)
    directory = base / subpath if subpath else base
    if not directory.exists() or not directory.is_dir():
        return {'files': [], 'folders': [], 'documents': {},
                'path': str(base.relative_to(ROOT)), 'subpath': subpath}

    files, folders, units, shelves = [], [], [], []
    for f in sorted(directory.iterdir(), key=lambda p: p.name):
        if f.name.startswith('.') or f.name in EXCLUDE_DIRS:
            continue
        if f.is_file():
            files.append(f.name)
        elif f.is_dir():
            if is_address(f):
                continue  # an address folder — reached via the address UI, not browsed
            folders.append(f.name)
            if is_unit(f):
                # a project unit IS browsable (listed in folders) but is invisible to
                # /scan/files (booked once, not scanned file-by-file). The client's
                # freshness sweep needs this subset to compare like-for-like against
                # scan, else a cell holding a unit mismatches every sweep and churns.
                units.append(f.name)
            elif is_shelf(f):
                # a reference-library shelf — browsable, but scan-invisible like a unit
                # (booked once, pulled from on request). Same freshness-sweep concern:
                # the client must drop shelves from the cache side, or churn every sweep.
                shelves.append(f.name)

    # group into documents: strip fold number and timestamp to get base
    documents = {}
    for fname in files:
        # handles both YYYYMMDD-HHMMSS and YYMMDD-HHMMSS timestamps
        m = re.match(r'^(.+?)\.f\d+\.\d{6,8}-\d{6}\.', fname)
        b = m.group(1) if m else fname
        documents.setdefault(b, []).append(fname)

    return {
        'files': files,
        'folders': folders,
        'units': units,
        'shelves': shelves,
        'documents': documents,
        'path': str(base.relative_to(ROOT)),
        'subpath': subpath,
    }


def op_read(digits, filename):
    """Read file content at address."""
    filepath = resolve_path(digits) / filename
    if not filepath.exists():
        return None
    return filepath.read_text(encoding='utf-8', errors='replace')


def _intake_fold_name(filename, directory):
    """Canonical fold name for an incoming file (universal folding, operator
    word 20260614).

    - unnumbered arrival → its first canonical fold (f0)
    - already-folded arrival with no clash → kept verbatim (preserve its stamp)
    - a clash that would make a SECOND f0 for the same base → bumped to the next
      fold, so two f0s of one name can never cross

    Fold *signing* (where in the fold, how it's marked processed) is deferred to
    the naming rework — for now, intake just guarantees one f0 per name.
    """
    if '.' in filename:
        stem, ext = filename.rsplit('.', 1)
        ext = '.' + ext
    else:
        stem, ext = filename, ''
    m = re.match(r'^(.+?)\.f(\d+)\.\d{6,8}-\d{6}$', stem)
    already_folded = bool(m)
    base = m.group(1) if already_folded else stem

    highest = -1
    pat = re.compile(re.escape(base) + r'\.f(\d+)\.\d{6,8}-\d{6}' + re.escape(ext) + r'$')
    if directory.exists():
        for f in directory.iterdir():
            if f.is_file():
                mm = pat.match(f.name)
                if mm:
                    highest = max(highest, int(mm.group(1)))

    # already canonical and nothing of this base here yet → keep its own stamp
    if already_folded and highest < 0:
        return filename
    fold = highest + 1  # f0 if none exist, else the next fold (never a 2nd f0)
    return f'{base}.f{fold}.{timestamp_str()}{ext}'


def op_receive(filename, content, addr='200'):
    """Unsigned work arrives at the dock. Universal folding on intake: the
    arrival is given its first canonical fold; one f0 per name (operator word
    20260614). Returns the stored name (may differ from the sent name)."""
    directory = resolve_path(addr)
    directory.mkdir(parents=True, exist_ok=True)
    ensure_address_marker(addr)
    stored = _intake_fold_name(filename, directory)
    dest = directory / stored
    dest.write_text(content, encoding='utf-8')
    notes = '' if stored == filename else f'auto-fold on intake (sent: {filename})'
    trace('receive', stored, None, addr, notes=notes)
    return {'file': stored, 'original': filename, 'addr': addr,
            'path': str(dest.relative_to(ROOT))}


def op_move(filename, from_addr, to_addr):
    """Transfer between addresses. Logs the movement."""
    src = resolve_path(from_addr) / filename
    if not src.exists():
        return {'error': f'{filename} not found at {from_addr}'}

    dest_dir = resolve_path(to_addr)
    dest_dir.mkdir(parents=True, exist_ok=True)
    ensure_address_marker(to_addr)
    dest = dest_dir / filename

    shutil.move(str(src), str(dest))
    trace('move', filename, from_addr, to_addr)
    return {
        'file': filename,
        'from': from_addr,
        'to': to_addr,
        'path': str(dest.relative_to(ROOT))
    }


def op_fold(filename, addr):
    """Create fN+1 of a file at the same address.

    Copies content, increments fold number, new timestamp.
    """
    src = resolve_path(addr) / filename
    if not src.exists():
        return {'error': f'{filename} not found at {addr}'}

    content = src.read_text(encoding='utf-8', errors='replace')

    # parse the fold pattern: name.fN.timestamp.ext
    # handles both YYYYMMDD-HHMMSS and YYMMDD-HHMMSS timestamps
    m = re.match(r'^(.+?)\.f(\d+)\.\d{6,8}-\d{6}\.(.+)$', filename)
    if not m:
        return {'error': f'{filename} does not match fold naming pattern'}

    base, fold_num, ext = m.group(1), int(m.group(2)), m.group(3)
    new_fold = fold_num + 1
    if new_fold > FOLD_CEILING:
        return {'error': f'fold ceiling reached (f{FOLD_CEILING}). address existing folds before folding again.'}
    ts = timestamp_str()
    new_name = f'{base}.f{new_fold}.{ts}.{ext}'

    dest = resolve_path(addr) / new_name
    dest.write_text(content, encoding='utf-8')
    trace('fold', new_name, addr, addr, notes=f'f{fold_num}→f{new_fold}')
    return {
        'file': new_name,
        'source': filename,
        'addr': addr,
        'fold': new_fold,
        'ceiling': FOLD_CEILING,
        'path': str(dest.relative_to(ROOT))
    }


def op_create(doc_type, scope, addr, content=''):
    """Create new named file at address."""
    directory = resolve_path(addr)
    directory.mkdir(parents=True, exist_ok=True)
    ensure_address_marker(addr)

    filename = name(doc_type, scope, addr)
    if filename is None:
        return {'error': f'fold ceiling reached (f{FOLD_CEILING}). address existing folds before creating again.'}
    filepath = directory / filename
    filepath.write_text(content, encoding='utf-8')
    trace('create', filename, None, addr)
    return {
        'file': filename,
        'addr': addr,
        'path': str(filepath.relative_to(ROOT))
    }


def op_delete(digits, filename):
    """Delete a file at address."""
    filepath = resolve_path(digits) / filename
    if not filepath.exists():
        return {'error': f'{filename} not found at {digits}'}
    filepath.unlink()
    trace('delete', filename, digits, None, notes='deleted via instrument')
    return {
        'file': filename,
        'addr': digits,
    }


def op_write(digits, filename, content):
    """Write content to an existing file at address."""
    filepath = resolve_path(digits) / filename
    if not filepath.exists():
        return {'error': f'{filename} not found at {digits}'}
    filepath.write_text(content, encoding='utf-8')
    trace('write', filename, digits, digits, notes='edited via instrument')
    return {
        'file': filename,
        'addr': digits,
        'path': str(filepath.relative_to(ROOT))
    }


SEATS = ('clerk', 'lantern', 'keeper')

def op_launch(seat):
    """Launch an agent seat: opens seat-{seat}.cmd in a new console window."""
    if seat not in SEATS:
        return {'error': f'unknown seat: {seat}'}
    script = ROOT / f'seat-{seat}.cmd'
    if not script.exists():
        return {'error': f'{script.name} not found at root'}
    subprocess.Popen(['cmd', '/c', 'start', '', str(script)], cwd=str(ROOT))
    return {'launched': seat, 'script': script.name}


def op_reveal(digits):
    """Open an address's folder in the OS file explorer (U-1, operator word).

    The shortcut from the lattice straight to the directory on disk.
    """
    if not valid_digits(digits):
        return {'error': f'invalid address: {digits}'}
    path = resolve_path(digits)
    if not path.exists():
        return {'error': f'no folder at {digits}'}
    try:
        os.startfile(str(path))  # Windows
    except Exception as e:
        return {'error': str(e)}
    return {'revealed': digits, 'path': str(path.relative_to(ROOT))}


def op_manifest():
    """Read manifest.live.md at 201, return entries as JSON."""
    manifest_path = resolve_path('201') / 'manifest.live.md'
    if not manifest_path.exists():
        return {'entries': []}
    content = manifest_path.read_text(encoding='utf-8', errors='replace')
    entries = []
    for line in content.split('\n'):
        line = line.strip()
        if not line.startswith('|') or line.startswith('| timestamp') or line.startswith('|---'):
            continue
        cells = [c.strip() for c in line.split('|')[1:-1]]
        if len(cells) >= 6:
            entries.append({
                'ts': cells[0],
                'op': cells[1],
                'file': cells[2],
                'from': cells[3],
                'to': cells[4],
                'notes': cells[5]
            })
    return {'entries': entries[-50:][::-1]}


def _manifest_entries():
    """Read ALL manifest.live.md entries. Internal helper."""
    manifest_path = resolve_path('201') / 'manifest.live.md'
    if not manifest_path.exists():
        return []
    content = manifest_path.read_text(encoding='utf-8', errors='replace')
    entries = []
    for line in content.split('\n'):
        line = line.strip()
        if not line.startswith('|') or line.startswith('| timestamp') or line.startswith('|---'):
            continue
        cells = [c.strip() for c in line.split('|')[1:-1]]
        if len(cells) >= 6:
            entries.append({
                'ts': cells[0],
                'op': cells[1],
                'file': cells[2],
                'from': cells[3],
                'to': cells[4],
                'notes': cells[5]
            })
    return entries


def _scan_locations():
    """Every bookable location on the floor: tree root, branches, leaves, cells.

    Yields (addr, path, recursive). Only cells recurse — their subfolders are
    freight (e.g. marginalia/); branch and leaf dirs contain the address tree
    itself, so only their direct files are listed. Root pseudo-address: 'root'
    (operator word, 20260612). H13: frame.scan-coverage.f1.
    """
    yield ('root', ROOT, False)
    for b in '012':
        yield (b, resolve_path(b), False)
        for l in '012':
            yield (b + l, resolve_path(b + l), False)
            for c in '012':
                yield (b + l + c, resolve_path(b + l + c), True)


def _list_files(path, recursive):
    """Direct files at path; if recursive, subfolder files as subpath/name."""
    names = []
    for f in path.iterdir():
        if f.name.startswith('.') or f.name in EXCLUDE_DIRS:
            continue
        if f.is_file():
            names.append(f.name)
        elif recursive and f.is_dir():
            if is_unit(f) or is_shelf(f):
                continue  # a unit or shelf — booked once, not deep-walked (a shelf is
                          # reference library, pulled from on request, not held at once)
            for sub in f.rglob('*'):
                rel = sub.relative_to(path)
                if sub.is_file() and not any(
                        p.startswith('.') or p in EXCLUDE_DIRS
                        for p in rel.parts):
                    names.append(rel.as_posix())
    return sorted(names)


def op_scan():
    """Scan the whole floor and return file counts per address."""
    counts = {}
    for addr, path, recursive in _scan_locations():
        if path.exists():
            n = len(_list_files(path, recursive))
            if n > 0:
                counts[addr] = n
    return {'counts': counts}


def op_scan_files():
    """Scan the whole floor and return file names per address."""
    files = {}
    for addr, path, recursive in _scan_locations():
        if path.exists():
            names = _list_files(path, recursive)
            if names:
                files[addr] = names
    return {'files': files}


def op_seed():
    """One-time registration of all existing files into manifest.live.md."""
    existing = _manifest_entries()
    if any(e['op'] == 'seed' for e in existing):
        return {'error': 'already seeded',
                'seed_entries': sum(1 for e in existing if e['op'] == 'seed')}

    scan = op_scan_files()
    ts = timestamp_str()

    manifest_dir = resolve_path('201')
    manifest_dir.mkdir(parents=True, exist_ok=True)
    manifest_path = manifest_dir / 'manifest.live.md'
    if not manifest_path.exists():
        header = '| timestamp | operation | file | from | to | notes |\n'
        header += '|-----------|-----------|------|------|----|-------|\n'
        manifest_path.write_text(header, encoding='utf-8')

    # write seed entries directly — not via trace, avoids per-file log noise
    count = 0
    with open(manifest_path, 'a', encoding='utf-8') as f:
        for addr in sorted(scan['files']):
            for name in scan['files'][addr]:
                f.write(f'| {ts} | seed | {name} | - | {addr} | initial inventory |\n')
                count += 1

    # one summary log entry
    op_log('C', f'seed: {count} files registered across {len(scan["files"])} addresses',
           '201', '-\u2192201', 'initial inventory baseline')

    return {'seeded': count, 'addresses': len(scan['files'])}


def op_reconcile():
    """Compare filesystem reality against manifest claims."""
    scan = op_scan_files()
    entries = _manifest_entries()

    # what's actually on disk
    on_disk = set()
    for addr, names in scan['files'].items():
        for name in names:
            on_disk.add((name, addr))

    # what the manifest has placed somewhere
    in_manifest = set()
    for e in entries:
        if e['to'] and e['to'] != '-':
            in_manifest.add((e['file'], e['to']))

    # unregistered: on disk but no manifest entry places it there
    unregistered = [
        {'file': name, 'addr': addr}
        for name, addr in sorted(on_disk)
        if (name, addr) not in in_manifest
    ]

    # missing: manifest's last word says (file, addr), but it's not on disk.
    # keyed by (file, addr) — same name at two addresses is two facts (H13).
    last_location = {}
    for e in entries:
        if e['op'] == 'delete':
            if e['from'] and e['from'] != '-':
                last_location.pop((e['file'], e['from']), None)
            else:
                # legacy delete rows carry no from — pop the name everywhere
                for k in [k for k in last_location if k[0] == e['file']]:
                    last_location.pop(k)
            continue
        if e['from'] and e['from'] != '-':
            last_location.pop((e['file'], e['from']), None)
        if e['to'] and e['to'] != '-':
            last_location[(e['file'], e['to'])] = {'ts': e['ts'], 'op': e['op']}

    missing = [
        {'file': fname, 'addr': addr, **info}
        for (fname, addr), info in sorted(last_location.items())
        if (fname, addr) not in on_disk
    ]

    clean = len(unregistered) == 0 and len(missing) == 0

    return {
        'clean': clean,
        'unregistered': unregistered,
        'missing': missing,
        'counts': {
            'scanned': len(on_disk),
            'registered': len(on_disk) - len(unregistered),
            'unregistered': len(unregistered),
            'missing': len(missing)
        }
    }


def op_foldrate():
    """Per-document fold-rate signal (W5, operator word 20260612).

    Walks the floor, groups fold-named files by (type, scope, addr), reports
    fold count and folds-per-day. The tripwire that would have caught the
    schedule erosion at f5: accumulator types (schedule, manifest) folding
    fast is the alarm condition. Reads only; judgment stays with the reader.
    """
    pat = re.compile(r'^([a-z][a-z0-9-]*)\.([^.]+(?:\.[^.]+)*?)\.f(\d+)\.(\d{8}-\d{6})\.md$')
    lineages = {}
    scan = op_scan_files()
    for addr, names in scan['files'].items():
        for n in names:
            m = pat.match(n.split('/')[-1])
            if not m:
                continue
            dtype, scope, fold, ts = m.group(1), m.group(2), int(m.group(3)), m.group(4)
            key = (dtype, scope, addr)
            entry = lineages.setdefault(key, {'folds': [], 'stamps': []})
            entry['folds'].append(fold)
            entry['stamps'].append(ts)

    ACCUMULATORS = ('schedule', 'manifest')  # fold only on completion cleanup or format change
    out = []
    for (dtype, scope, addr), e in lineages.items():
        if len(e['folds']) < 2:
            continue
        stamps = sorted(e['stamps'])
        try:
            t0 = datetime.strptime(stamps[0], '%Y%m%d-%H%M%S')
            t1 = datetime.strptime(stamps[-1], '%Y%m%d-%H%M%S')
            days = max((t1 - t0).total_seconds() / 86400.0, 1 / 24.0)
        except ValueError:
            days = None
        folds = max(e['folds'])
        rate = round(len(e['folds']) / days, 2) if days else None
        out.append({
            'type': dtype, 'scope': scope, 'addr': addr,
            'highest_fold': folds, 'files': len(e['folds']),
            'first': stamps[0], 'last': stamps[-1],
            'folds_per_day': rate,
            'accumulator': dtype in ACCUMULATORS,
            'ceiling_room': FOLD_CEILING - folds
        })
    out.sort(key=lambda x: (x['folds_per_day'] or 0), reverse=True)
    alarms = [x for x in out
              if (x['accumulator'] and (x['folds_per_day'] or 0) > 0.5)
              or x['ceiling_room'] <= 5]
    return {'lineages': out, 'alarms': alarms}


def op_log(entry_type, what, path, trail, landing):
    """Append C/O/D entry to current session log at 222.

    entry_type: C (change), O (observation), D (decision)
    """
    log_dir = resolve_path('222')
    log_dir.mkdir(parents=True, exist_ok=True)
    log_file = _session_log_file(log_dir)

    ts = utc_now().strftime('%H:%M:%S')
    entry = f'{entry_type} [{ts}] {what} | {path} | {trail} | {landing}\n'
    _locked_append(log_file, entry)

    return {
        'entry': entry.strip(),
        'log': log_file.name,
        'path': str(log_file.relative_to(ROOT))
    }


def op_memo(handle, body):
    """Post a memo to the universal board at 222 (W4 comms — frame.comms.f1).

    One live thread; every handle posts with its own name. Addressing is by
    @mention in the body (@clerk @lantern @keeper @operator), not by routing.

    One op, two doors (dispatch S2): POST /memo through the running server, or
    board.py by direct import — every writer lands through _locked_append, so
    concurrent posts never race the file. Words and pointers only — no cargo
    (constitution rule 1). Memos are on the books: the board is a tracked file
    at 222, registered once on creation; the thread itself is the record.
    """
    if not handle or not str(handle).strip():
        return {'error': 'memo needs a handle'}
    if not body or not str(body).strip():
        return {'error': 'memo needs a body'}
    handle = str(handle).strip()
    # one memo = one line; collapse newlines, escape the table delimiter
    line_body = ' '.join(str(body).split())
    cell_body = line_body.replace('|', r'\|')

    board_dir = resolve_path('222')
    board_dir.mkdir(parents=True, exist_ok=True)

    existing = sorted(
        f.name for f in board_dir.iterdir()
        if f.is_file() and f.name.startswith('memo.board.')
    )
    if existing:
        board_file = board_dir / existing[-1]   # latest fold is the live board
        created = False
    else:
        board_name = name('memo', 'board', '222')
        board_file = board_dir / board_name
        created = True

    if created:
        header = (
            '# memo — board — the one live thread (W4 comms)\n\n'
            'Append-only. The server is the sole writer (post via `/memo`).\n'
            'Words and pointers only, no cargo. Address by @mention.\n\n'
            '| timestamp | from | memo |\n'
            '|-----------|------|------|\n'
        )
        board_file.write_text(header, encoding='utf-8')

    ts = timestamp_str()
    # locked append: the CLI door (board.py, direct import) is a second writer
    # PROCESS beside the server — the shared cross-process lock serializes them
    # (same hardening as the manifest/log writers, witness-hardening 20260615)
    _locked_append(board_file, f'| {ts} | {handle} | {cell_body} |\n')

    if created:
        # register the board once on the books (server is writing it, no witness fires)
        trace('memo-board', board_file.name, None, '222',
              notes='comms board created (W4, server-written)')

    mentions = re.findall(r'@(\w+)', line_body)
    return {
        'posted': True,
        'from': handle,
        'mentions': mentions,
        'board': board_file.name,
        'path': str(board_file.relative_to(ROOT)),
    }


def op_halt(action, scope='all', reason='', by='operator'):
    """The cord (dispatch S1 slice 1.2 — frame.dispatch at 210).

    action 'pull' writes a halt flag; 'clear' removes it. Flags live at
    .claude/halt/<scope> ('all' = master, else a seat name) — live control
    state, gitignored; halt.py (the PreToolUse wall in every seat body) reads
    them before each tool act. The RECORD is the ledger row this writes at
    222: a stop is a record, never a shame. Anyone may pull; the operator
    clears.
    """
    action = str(action or '').strip().lower()
    scope = str(scope or '').strip().lower() or 'all'
    if action not in ('pull', 'clear'):
        return {'error': "action must be 'pull' or 'clear'"}
    if not re.match(r'^[a-z][a-z0-9_-]{0,31}$', scope):
        return {'error': 'bad scope (all or a seat name)'}
    flag = ROOT / '.claude' / 'halt' / scope

    if action == 'pull':
        flag.parent.mkdir(parents=True, exist_ok=True)
        text = ' '.join(str(reason or '').split()) or '(no reason written)'
        flag.write_text(text + '\n', encoding='utf-8')
        op_log('D', f'HALT pulled ({scope}) by {by}', '222',
               f'.claude/halt/{scope}', text)
        return {'halted': scope, 'reason': text, 'by': by}

    # clears are the operator's alone (slice 1.3 poka-yoke): a seat may pull
    # the cord — its own or the master — but never release one. A wall against
    # accident, not malice: `by` is self-reported; the halt hook is the wall.
    if str(by).strip().lower() in SEATS:
        return {'error': 'only the operator clears the cord (seat pulls are '
                         'one-way — a stop is released by the hand that '
                         'answers it)'}
    stood = flag.exists()
    if stood:
        flag.unlink()
    op_log('D', f'halt cleared ({scope}) by {by}', '222',
           f'.claude/halt/{scope}', 'flag removed' if stood else 'no flag stood')
    return {'cleared': scope, 'stood': stood}


def op_halt_state():
    """Read the cord: which halt flags stand right now (surface read)."""
    hdir = ROOT / '.claude' / 'halt'
    flags = []
    if hdir.exists():
        for f in sorted(hdir.iterdir()):
            if not f.is_file() or f.name.endswith('.lock'):
                continue
            try:
                reason = f.read_text(encoding='utf-8-sig').strip()
            except OSError:
                reason = '(reason unreadable)'
            flags.append({'scope': f.name, 'reason': reason})
    return {'halted': bool(flags), 'flags': flags}


def op_board():
    """Read the live comms board (W4) as structured entries (surface read).

    Finds the latest memo.board.* at 222 and parses its table rows. The client
    reads here instead of hardcoding the timestamped filename.
    """
    board_dir = resolve_path('222')
    if not board_dir.exists():
        return {'board': None, 'entries': [], 'count': 0}
    boards = sorted(
        f.name for f in board_dir.iterdir()
        if f.is_file() and f.name.startswith('memo.board.')
    )
    if not boards:
        return {'board': None, 'entries': [], 'count': 0}
    board_name = boards[-1]   # latest fold is the live board
    text = (board_dir / board_name).read_text(encoding='utf-8')

    entries = []
    for line in text.splitlines():
        line = line.strip()
        if not line.startswith('|'):
            continue
        inner = line[1:-1] if line.endswith('|') else line[1:]
        parts = inner.split('|', 2)
        if len(parts) != 3:
            continue
        ts, frm, memo = (p.strip() for p in parts)
        if ts == 'timestamp' or not ts:
            continue                       # header row
        if set(ts) <= set('-: '):
            continue                       # separator row
        entries.append({'ts': ts, 'from': frm, 'memo': memo.replace(r'\|', '|')})
    return {'board': board_name, 'entries': entries, 'count': len(entries)}


def op_seats():
    """Read the three seat configs into a read-only summary for the seat board (U-5).

    Surfaces each seat's identity, body (permissions), wake lean, and hooks from
    .claude/seats/<seat>.json. Read-only: never writes.
    """
    seats_dir = ROOT / '.claude' / 'seats'
    # wake leans mirror .claude/seats/wake.py (the settled per-seat postures)
    leans = {'clerk': 'injected', 'lantern': 'walking', 'keeper': 'calibrating'}
    out = []
    for seat in SEATS:
        cfg_path = seats_dir / f'{seat}.json'
        try:
            cfg = json.loads(cfg_path.read_text(encoding='utf-8'))
        except Exception as e:
            out.append({'seat': seat, 'error': f'could not read {seat}.json: {e}'})
            continue
        env = cfg.get('env', {})
        sl = cfg.get('statusLine', {}).get('command', '')
        wm = re.search(r'"([^"]+)"', sl)   # the quoted home label, e.g. "2 structure-maintains-order"
        perms = cfg.get('permissions', {})
        out.append({
            'seat': seat,
            'author': env.get('GIT_AUTHOR_NAME', seat),
            'home': wm.group(1) if wm else '',
            'allow': perms.get('allow', []),
            'ask': perms.get('ask', []),
            'deny': perms.get('deny', []),
            'has_body': bool(perms),
            'wake': leans.get(seat, ''),
            'has_wake': 'SessionStart' in cfg.get('hooks', {}),
            'hooks': sorted(cfg.get('hooks', {}).keys()),
        })
    return {'seats': out}


def op_presence():
    """Per-seat presence for the dispatch window (S3 bottom row): latest baton
    (name + gait), last commit by the seat's hand, halt state, board mentions.
    Read-only — the trail and the flags are the source, nothing is cached.
    """
    import subprocess
    halt = op_halt_state()
    halted_scopes = {f['scope'] for f in halt['flags']}
    board = op_board()
    wings = {
        'clerk': '2.structure-maintains-order',
        'lantern': '1.presence-minds-awareness',
        'keeper': '0.relation-grounds-measure',
    }
    out = []
    for seat in SEATS:
        baton_name, gait = None, ''
        wing = ROOT / wings[seat]
        batons = sorted(wing.glob(f'**/baton.{seat}.f*.md'),
                        key=lambda p: p.stat().st_mtime)
        if batons:
            baton_name = batons[-1].name
            try:
                txt = batons[-1].read_text(encoding='utf-8', errors='replace')
                m = re.search(r'gait[:\s*\[]*([a-z]+)', txt, re.I)
                gait = m.group(1).lower() if m else ''
            except OSError:
                pass
        last = ''
        try:
            r = subprocess.run(
                ['git', 'log', '-1', f'--author={seat}',
                 '--format=%h | %ad | %s', '--date=format:%m-%d %H:%M'],
                cwd=str(ROOT), capture_output=True, text=True,
                encoding='utf-8', errors='replace', timeout=10)
            last = r.stdout.strip()
        except Exception:
            pass
        mentions = [e for e in board['entries'] if ('@' + seat) in e['memo']]
        out.append({
            'seat': seat,
            'halted': 'all' in halted_scopes or seat in halted_scopes,
            'baton': baton_name,
            'gait': gait,
            'last_commit': last,
            'mentions': len(mentions),
            'last_mention': mentions[-1]['ts'] if mentions else None,
        })
    return {'seats': out, 'halted_all': 'all' in halted_scopes}


def op_flag(addr, file, line_no, old, new, by='operator'):
    """Dispatch S4 — one targeted line change from the window: a status
    dropdown, a flag switch, or the signature. Optimistic: the line must
    still read exactly as the changer saw it, or the change bounces
    ('reload'). The write lands on the floor uncommitted (the owning seat
    commits, as with /write); the D row at 222 is the record.

    new == '__SIGN__' turns a 'SIGN:' line into 'SIGNED: <by> <stamp>' with
    the server's clock — stamps are fetched, never estimated.
    """
    try:
        line_no = int(line_no)
    except (TypeError, ValueError):
        return {'error': 'bad line number'}
    p = resolve_path(addr) / str(file)
    if not p.exists() or not p.is_file():
        return {'error': f'no such file: {addr}/{file}'}
    text = p.read_text(encoding='utf-8')
    lines = text.split('\n')
    if not (0 <= line_no < len(lines)):
        return {'error': 'line out of range'}
    if lines[line_no] != old:
        return {'error': 'line changed underneath - reload the pane'}
    if new == '__SIGN__':
        if 'SIGN:' not in old:
            return {'error': 'not a SIGN line'}
        new = re.sub(r'SIGN:.*$', f'SIGNED: {by} {timestamp_str()}', old)
    lines[line_no] = str(new)
    p.write_text('\n'.join(lines), encoding='utf-8')
    op_log('D', f'flag: {file} line {line_no + 1} by {by}', addr,
           old.strip()[:70], str(new).strip()[:90])
    return {'ok': True, 'line': line_no, 'new': lines[line_no]}


def op_active():
    """The active dial (dispatch v2): which files each seat declares itself
    working right now. Read-only; seats write via active.py; ON at wake /
    frame pickup, OFF at close."""
    d = ROOT / '.claude' / 'active'
    out = []
    if d.exists():
        for f in sorted(d.iterdir()):
            if not f.is_file():
                continue
            try:
                for line in f.read_text(encoding='utf-8-sig').splitlines():
                    line = line.strip()
                    if line:
                        out.append({'seat': f.name, 'path': line})
            except OSError:
                continue
    return {'active': out, 'count': len(out)}


APPROVALS_DIR_NAME = 'approvals'


def _approvals_dir():
    return ROOT / '.claude' / APPROVALS_DIR_NAME


def op_approvals():
    """Pending permission requests from the seats (dispatch S4 extension —
    operator board memos 20260703-144906/-145222). approve.py (the
    PermissionRequest hook) writes <id>.json; a decision file answers it;
    unanswered requests time out hook-side and fall back to the CLI prompt.
    """
    d = _approvals_dir()
    pending = []
    if d.exists():
        for f in sorted(d.iterdir()):
            if f.suffix != '.json' or (d / (f.stem + '.decision')).exists():
                continue
            try:
                req = json.loads(f.read_text(encoding='utf-8-sig'))
            except Exception:
                continue
            req['id'] = f.stem
            pending.append(req)
    return {'pending': pending, 'count': len(pending)}


def op_approve(req_id, decision, by='operator'):
    """Answer a pending permission request: decision 'allow' | 'deny'.
    The D row is the record; the hook consumes the decision file."""
    decision = str(decision or '').strip().lower()
    if decision not in ('allow', 'deny'):
        return {'error': "decision must be 'allow' or 'deny'"}
    if not re.match(r'^[a-zA-Z0-9_-]+$', str(req_id or '')):
        return {'error': 'bad request id'}
    d = _approvals_dir()
    req_file = d / f'{req_id}.json'
    if not req_file.exists():
        return {'error': 'no such pending request (answered or timed out)'}
    (d / f'{req_id}.decision').write_text(
        json.dumps({'decision': decision, 'by': by}), encoding='utf-8')
    try:
        req = json.loads(req_file.read_text(encoding='utf-8-sig'))
    except Exception:
        req = {}
    op_log('D', f'permission {decision} ({req.get("seat", "?")}) by {by}',
           '222', req.get('tool', '?'), str(req.get('preview', ''))[:90])
    return {'ok': True, 'id': req_id, 'decision': decision}


def op_latest(digits, prefix):
    """Newest file at an address matching a name prefix (surface read).

    The dispatch panes resolve 'the live fold' here (frame.dispatch,
    schedule.lattice, …) instead of hardcoding stamped filenames. Newest by
    mtime — fold numbers sort wrong lexically (f9 > f13).
    """
    d = resolve_path(digits)
    if not d.exists():
        return {'error': f'no such address: {digits}'}
    matches = [f for f in d.iterdir() if f.is_file() and f.name.startswith(prefix)]
    if not matches:
        return {'file': None, 'addr': digits}
    newest = max(matches, key=lambda p: p.stat().st_mtime)
    return {'file': newest.name, 'addr': digits}


# ============================================================
# LAYER 2 — CONFIGURATION
# every operation traces itself. three-point update:
# filesystem + manifest + log.
# ============================================================

MANIFEST_HEADER = ('| timestamp | operation | file | from | to | notes |\n'
                   '|-----------|-----------|------|------|----|-------|\n')

# witness-hardening (20260615): every writer to the ledger and the session log
# shares this lock. Windows 'a' mode is seek-then-write (not atomic), so
# concurrent witness PROCESSES were clobbering each other's rows — the
# silent-miss. An O_CREAT|O_EXCL lockfile is a portable cross-process mutex;
# bounded retry + a stale-lock breaker mean it never deadlocks and never blocks
# the tool for long; fsync makes the row durable.
_APPEND_RETRIES = 100      # × delay = ~5s ceiling; real bursts clear in <100ms
_APPEND_DELAY = 0.05
_LOCK_STALE = 15.0         # a lock older than this is a crashed writer — steal it


def _locked_append(path, text, header=None):
    """Atomic cross-process append. Returns True if the line landed, False only
    if it exhausted its retry budget (catastrophic contention — the clerk
    reconcile remains the backstop). If header is given and the file is absent,
    the header is written first, inside the same lock (no header race)."""
    path = str(path)
    lock = path + '.lock'
    for _ in range(_APPEND_RETRIES):
        try:
            fd = os.open(lock, os.O_CREAT | os.O_EXCL | os.O_WRONLY)
        except (FileExistsError, PermissionError):
            # lock is held. Windows raises PermissionError (not FileExistsError)
            # when the lockfile is mid-delete or has a sharing lock — both mean
            # "contended, retry." Break it only if the holder looks crashed.
            try:
                if time.time() - os.path.getmtime(lock) > _LOCK_STALE:
                    os.unlink(lock)        # crashed holder — break it, retry now
                    continue
            except OSError:
                pass
            time.sleep(_APPEND_DELAY)
            continue
        try:
            if header is not None and not os.path.exists(path):
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(header)
            with open(path, 'a', encoding='utf-8') as f:
                f.write(text)
                f.flush()
                os.fsync(f.fileno())
            return True
        finally:
            os.close(fd)
            try:
                os.unlink(lock)
            except OSError:
                pass
    return False


def _session_log_file(log_dir):
    """Today's session log at 222 — the latest existing, or a fresh name."""
    today = utc_now().strftime('%Y%m%d')
    existing = sorted(
        f.name for f in log_dir.iterdir()
        if f.is_file() and f.name.startswith('log.session.') and today in f.name
        and f.name.endswith('.md')  # exclude .lock mutexes — they share the prefix
    )
    return log_dir / (existing[-1] if existing else name('log', 'session', '222'))


def trace(operation, filename, from_addr, to_addr, notes=''):
    """Record the operation. Updates manifest and session log.

    Three-point update:
    1. filesystem — already done by the caller
    2. manifest — appended here (locked, atomic across processes)
    3. log — appended here (locked)
    """
    ts = timestamp_str()

    # manifest update at 201
    manifest_dir = resolve_path('201')
    manifest_dir.mkdir(parents=True, exist_ok=True)
    manifest_file = manifest_dir / 'manifest.live.md'
    line = f'| {ts} | {operation} | {filename} | {from_addr or "-"} | {to_addr or "-"} | {notes} |\n'
    _locked_append(manifest_file, line, header=MANIFEST_HEADER)

    # log update at 222
    log_dir = resolve_path('222')
    log_dir.mkdir(parents=True, exist_ok=True)
    log_file = _session_log_file(log_dir)

    time_str = utc_now().strftime('%H:%M:%S')
    trail = f'{from_addr or "-"}→{to_addr or "-"}'
    entry = f'C [{time_str}] {operation}: {filename} | {trail} | {notes}\n'
    _locked_append(log_file, entry)


# ============================================================
# HTTP SERVER
# lattice verbs, not REST.
# ============================================================

class LatticeHandler(http.server.SimpleHTTPRequestHandler):
    """Serves static files and lattice API."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def setup(self):
        super().setup()
        # disable Nagle: without TCP_NODELAY the header/body two-write pattern hits the
        # ~200ms delayed-ACK stall per request — which a 23-file refresh multiplies into seconds.
        try:
            self.connection.setsockopt(socket.IPPROTO_TCP, socket.TCP_NODELAY, 1)
        except OSError:
            pass

    def end_headers(self):
        # no-cache (not no-store): the browser may keep a copy but MUST revalidate
        # before using it. Served files get an If-Modified-Since check — 304 when
        # unchanged (cheap), fresh 200 when edited. This is what keeps a reloaded
        # unit honest as we develop, and what stops a stale index.html from pinning
        # the tab to a deleted bundle (the failure that cost us a session).
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = urllib.parse.unquote(parsed.path)

        # API: /list/{digits}  or  /list/{digits}/{subpath}  (browse subfolders)
        m = re.match(r'^/list/([012]{1,3})(?:/(.+))?$', path)
        if m:
            result = op_list(m.group(1), m.group(2) or '')
            self._json_response(result)
            return

        # API: /read/{digits}/(.+)
        m = re.match(r'^/read/([012]{1,3})/(.+)$', path)
        if m:
            content = op_read(m.group(1), m.group(2))
            if content is None:
                self._json_response({'error': 'not found'}, 404)
            else:
                self._json_response({'content': content, 'file': m.group(2), 'addr': m.group(1)})
            return

        # API: /board (W4 comms — the live memo thread)
        if path == '/board':
            self._json_response(op_board())
            return

        # API: /halt (dispatch S1 — the cord's state)
        if path == '/halt':
            self._json_response(op_halt_state())
            return

        # API: /presence (dispatch S3 — the seat row)
        if path == '/presence':
            self._json_response(op_presence())
            return

        # API: /latest/{digits}/{prefix} (dispatch S3 — resolve the live fold)
        m = re.match(r'^/latest/([012]{1,3})/(.+)$', path)
        if m:
            self._json_response(op_latest(m.group(1), m.group(2)))
            return

        # API: /approvals (dispatch S4 ext — pending permission requests)
        if path == '/approvals':
            self._json_response(op_approvals())
            return

        # API: /active (dispatch v2 — the active dial)
        if path == '/active':
            self._json_response(op_active())
            return

        # API: /seats (U-5 — the read-only seat board)
        if path == '/seats':
            self._json_response(op_seats())
            return

        # API: /manifest
        if path == '/manifest':
            self._json_response(op_manifest())
            return

        # API: /scan
        if path == '/scan':
            self._json_response(op_scan())
            return

        # API: /scan/files
        if path == '/scan/files':
            self._json_response(op_scan_files())
            return

        # API: /reconcile
        if path == '/reconcile':
            self._json_response(op_reconcile())
            return

        # API: /foldrate — per-lineage fold counts + rates; accumulator alarm
        if path == '/foldrate':
            self._json_response(op_foldrate())
            return

        # static files — fall through to SimpleHTTPRequestHandler
        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = urllib.parse.unquote(parsed.path)
        body = self._read_body()

        if path == '/receive':
            if not body or 'file' not in body:
                self._json_response({'error': 'missing file'}, 400)
                return
            result = op_receive(
                body['file'],
                body.get('content', ''),
                body.get('addr', '200')
            )
            self._json_response(result)

        elif path == '/move':
            if not body or not all(k in body for k in ('file', 'from', 'to')):
                self._json_response({'error': 'missing file, from, or to'}, 400)
                return
            if not valid_digits(body['from']) or not valid_digits(body['to']):
                self._json_response({'error': 'invalid address digits'}, 400)
                return
            result = op_move(body['file'], body['from'], body['to'])
            self._json_response(result, 404 if 'error' in result else 200)

        elif path == '/fold':
            if not body or not all(k in body for k in ('file', 'addr')):
                self._json_response({'error': 'missing file or addr'}, 400)
                return
            if not valid_digits(body['addr']):
                self._json_response({'error': 'invalid address digits'}, 400)
                return
            result = op_fold(body['file'], body['addr'])
            self._json_response(result, 400 if 'error' in result else 200)

        elif path == '/create':
            if not body or not all(k in body for k in ('type', 'scope', 'addr')):
                self._json_response({'error': 'missing type, scope, or addr'}, 400)
                return
            if not valid_digits(body['addr']):
                self._json_response({'error': 'invalid address digits'}, 400)
                return
            result = op_create(
                body['type'],
                body['scope'],
                body['addr'],
                body.get('content', '')
            )
            self._json_response(result, 400 if 'error' in result else 200)

        elif path == '/write':
            if not body or not all(k in body for k in ('file', 'addr', 'content')):
                self._json_response({'error': 'missing file, addr, or content'}, 400)
                return
            if not valid_digits(body['addr']):
                self._json_response({'error': 'invalid address digits'}, 400)
                return
            result = op_write(body['addr'], body['file'], body['content'])
            self._json_response(result, 404 if 'error' in result else 200)

        elif path == '/delete':
            if not body or not all(k in body for k in ('file', 'addr')):
                self._json_response({'error': 'missing file or addr'}, 400)
                return
            if not valid_digits(body['addr']):
                self._json_response({'error': 'invalid address digits'}, 400)
                return
            result = op_delete(body['addr'], body['file'])
            self._json_response(result, 404 if 'error' in result else 200)

        elif path == '/log':
            if not body or 'type' not in body or 'what' not in body:
                self._json_response({'error': 'missing type or what'}, 400)
                return
            result = op_log(
                body['type'],
                body['what'],
                body.get('path', ''),
                body.get('trail', ''),
                body.get('landing', '')
            )
            self._json_response(result)

        elif path == '/seed':
            result = op_seed()
            self._json_response(result, 400 if 'error' in result else 200)

        elif path == '/launch':
            seat = (body or {}).get('seat', '')
            result = op_launch(seat)
            self._json_response(result, 400 if 'error' in result else 200)

        elif path == '/reveal':
            addr = (body or {}).get('addr', '')
            result = op_reveal(addr)
            self._json_response(result, 400 if 'error' in result else 200)

        elif path == '/memo':
            b = body or {}
            handle = b.get('handle', '') or b.get('from', '')
            text = b.get('body', '') or b.get('memo', '')
            result = op_memo(handle, text)
            self._json_response(result, 400 if 'error' in result else 200)

        elif path == '/halt':
            b = body or {}
            result = op_halt(b.get('action', ''), b.get('scope', 'all'),
                             b.get('reason', ''), b.get('by', 'operator'))
            self._json_response(result, 400 if 'error' in result else 200)

        elif path == '/flag':
            b = body or {}
            result = op_flag(b.get('addr', ''), b.get('file', ''),
                             b.get('line', -1), b.get('old', ''),
                             b.get('new', ''), b.get('by', 'operator'))
            self._json_response(result, 400 if 'error' in result else 200)

        elif path == '/approve':
            b = body or {}
            result = op_approve(b.get('id', ''), b.get('decision', ''),
                                b.get('by', 'operator'))
            self._json_response(result, 400 if 'error' in result else 200)

        else:
            self._json_response({'error': 'unknown route'}, 404)

    def _read_body(self):
        length = int(self.headers.get('Content-Length', 0))
        if length == 0:
            return None
        raw = self.rfile.read(length)
        try:
            return json.loads(raw.decode('utf-8'))
        except (json.JSONDecodeError, UnicodeDecodeError):
            return None

    def _json_response(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False, indent=2).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def log_message(self, format, *args):
        # quiet down the default logging, show just method + path
        if args:
            msg = args[0] if isinstance(args[0], str) else format % args
            print(f'  {msg}')


# ============================================================
# MAIN
# ============================================================

if __name__ == '__main__':
    # ThreadingHTTPServer: each request gets its own thread, so the client's concurrent polls
    # (scan/list/memos/hot-reload) don't queue behind one slow request (the "unreachable while
    # running" + sluggishness). Reads are independent; writes are infrequent (atomicity stays
    # the already-known unhardened area, not introduced here).
    server = http.server.ThreadingHTTPServer(('', PORT), LatticeHandler)
    print(f'lattice server on :{PORT}')
    print(f'root: {ROOT}')
    print(f'serving static files + lattice API')
    print(f'routes: /list/{{digits}} /read/{{digits}}/{{file}} /board /presence /latest /manifest /scan /scan/files /reconcile')
    print(f'        /receive /move /fold /create /write /delete /log /seed /launch /reveal /memo /halt')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nshutdown.')
        server.server_close()
