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
import subprocess
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
    'review', 'survey', 'extract', 'crossref', 'dream', 'parked'
]

FOLD_CEILING = 39  # 3+9+27 checkpoint tree. f0 is origin, f39 is the ceiling.

# directories the books never enter (.claude stays out by operator word, 20260612)
EXCLUDE_DIRS = {'.git', 'node_modules', '__pycache__', '.claude'}


def resolve(digits):
    """Address digits → filesystem path components.

    211 → ['2.m.g.c.0667.structure-maintains-order',
           '21.mv.gd.co.0778.labor-installs-practice',
           '211.mvv.gdd.coo.0815.motion-builds-form']
    """
    parts = []
    for i in range(1, len(digits) + 1):
        sub = digits[:i]
        role = ''.join(ROLES[int(c)] for c in sub)
        mode = ''.join(MODES[int(c)] for c in sub)
        reg  = ''.join(REGS[int(c)] for c in sub)
        rat  = ratio(sub)
        n, v, m = TRIADS[sub]
        parts.append(f'{sub}.{role}.{mode}.{reg}.{rat}.{n}-{v}-{m}')
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

def op_list(digits):
    """What lives at this address. Files grouped as documents.

    Returns {files: [...], documents: {base: [versions]}, path: str}
    """
    directory = resolve_path(digits)
    if not directory.exists():
        return {'files': [], 'documents': {}, 'path': str(directory.relative_to(ROOT))}

    files = sorted(
        f.name for f in directory.iterdir()
        if f.is_file() and not f.name.startswith('.')
    )

    # group into documents: strip fold number and timestamp to get base
    documents = {}
    for fname in files:
        # try to extract type.scope base from naming convention
        # handles both YYYYMMDD-HHMMSS and YYMMDD-HHMMSS timestamps
        m = re.match(r'^(.+?)\.f\d+\.\d{6,8}-\d{6}\.', fname)
        base = m.group(1) if m else fname
        documents.setdefault(base, []).append(fname)

    return {
        'files': files,
        'documents': documents,
        'path': str(directory.relative_to(ROOT))
    }


def op_read(digits, filename):
    """Read file content at address."""
    filepath = resolve_path(digits) / filename
    if not filepath.exists():
        return None
    return filepath.read_text(encoding='utf-8', errors='replace')


def op_receive(filename, content, addr='200'):
    """Unsigned work arrives at 200. Returns created filename."""
    directory = resolve_path(addr)
    directory.mkdir(parents=True, exist_ok=True)
    dest = directory / filename
    dest.write_text(content, encoding='utf-8')
    trace('receive', filename, None, addr)
    return {'file': filename, 'addr': addr, 'path': str(dest.relative_to(ROOT))}


def op_move(filename, from_addr, to_addr):
    """Transfer between addresses. Logs the movement."""
    src = resolve_path(from_addr) / filename
    if not src.exists():
        return {'error': f'{filename} not found at {from_addr}'}

    dest_dir = resolve_path(to_addr)
    dest_dir.mkdir(parents=True, exist_ok=True)
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


SEATS = ('clerk', 'mind', 'ground')

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

    # find or create today's session log
    today = utc_now().strftime('%Y%m%d')
    existing = sorted(
        f.name for f in log_dir.iterdir()
        if f.is_file() and f.name.startswith(f'log.session.') and today in f.name
    )

    if existing:
        log_file = log_dir / existing[-1]
    else:
        log_name = name('log', 'session', '222')
        log_file = log_dir / log_name

    ts = utc_now().strftime('%H:%M:%S')
    entry = f'{entry_type} [{ts}] {what} | {path} | {trail} | {landing}\n'

    with open(log_file, 'a', encoding='utf-8') as f:
        f.write(entry)

    return {
        'entry': entry.strip(),
        'log': log_file.name,
        'path': str(log_file.relative_to(ROOT))
    }


# ============================================================
# LAYER 2 — CONFIGURATION
# every operation traces itself. three-point update:
# filesystem + manifest + log.
# ============================================================

def trace(operation, filename, from_addr, to_addr, notes=''):
    """Record the operation. Updates manifest and session log.

    Three-point update:
    1. filesystem — already done by the caller
    2. manifest — appended here
    3. log — appended here
    """
    ts = timestamp_str()

    # manifest update at 201
    manifest_dir = resolve_path('201')
    manifest_dir.mkdir(parents=True, exist_ok=True)
    manifest_file = manifest_dir / 'manifest.live.md'
    line = f'| {ts} | {operation} | {filename} | {from_addr or "-"} | {to_addr or "-"} | {notes} |\n'

    if not manifest_file.exists():
        header = '| timestamp | operation | file | from | to | notes |\n'
        header += '|-----------|-----------|------|------|----|-------|\n'
        manifest_file.write_text(header, encoding='utf-8')

    with open(manifest_file, 'a', encoding='utf-8') as f:
        f.write(line)

    # log update at 222
    log_dir = resolve_path('222')
    log_dir.mkdir(parents=True, exist_ok=True)

    today = utc_now().strftime('%Y%m%d')
    existing = sorted(
        f.name for f in log_dir.iterdir()
        if f.is_file() and f.name.startswith('log.session.') and today in f.name
    )

    if existing:
        log_file = log_dir / existing[-1]
    else:
        log_name = name('log', 'session', '222')
        log_file = log_dir / log_name

    time_str = utc_now().strftime('%H:%M:%S')
    trail = f'{from_addr or "-"}→{to_addr or "-"}'
    entry = f'C [{time_str}] {operation}: {filename} | {trail} | {notes}\n'

    with open(log_file, 'a', encoding='utf-8') as f:
        f.write(entry)


# ============================================================
# HTTP SERVER
# lattice verbs, not REST.
# ============================================================

class LatticeHandler(http.server.SimpleHTTPRequestHandler):
    """Serves static files and lattice API."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = urllib.parse.unquote(parsed.path)

        # API: /list/{digits}
        m = re.match(r'^/list/([012]{1,3})$', path)
        if m:
            result = op_list(m.group(1))
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
    server = http.server.HTTPServer(('', PORT), LatticeHandler)
    print(f'lattice server on :{PORT}')
    print(f'root: {ROOT}')
    print(f'serving static files + lattice API')
    print(f'routes: /list/{{digits}} /read/{{digits}}/{{file}} /manifest /scan /scan/files /reconcile')
    print(f'        /receive /move /fold /create /write /delete /log /seed /launch /reveal')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nshutdown.')
        server.server_close()
