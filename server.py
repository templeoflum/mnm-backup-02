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

# document types recognized by the naming convention
DOC_TYPES = [
    'manifest', 'count', 'schedule', 'frame', 'audit', 'log',
    'review', 'survey', 'extract', 'crossref', 'dream', 'parked'
]

FOLD_CEILING = 39  # 3+9+27 checkpoint tree. f0 is origin, f39 is the ceiling.


def resolve(digits):
    """Address digits → filesystem path components.

    211 → ['2.m.g.c.0667', '21.mv.gd.co.0778', '211.mvv.gdd.coo.0815']
    """
    parts = []
    for i in range(1, len(digits) + 1):
        sub = digits[:i]
        role = ''.join(ROLES[int(c)] for c in sub)
        mode = ''.join(MODES[int(c)] for c in sub)
        reg  = ''.join(REGS[int(c)] for c in sub)
        rat  = ratio(sub)
        parts.append(f'{sub}.{role}.{mode}.{reg}.{rat}')
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


def op_scan():
    """Scan all cells and return file counts."""
    counts = {}
    for b in range(3):
        for l in range(3):
            for c in range(3):
                digits = f'{b}{l}{c}'
                path = resolve_path(digits)
                if path.exists():
                    n = sum(1 for f in path.iterdir()
                            if f.is_file() and not f.name.startswith('.'))
                    if n > 0:
                        counts[digits] = n
    return {'counts': counts}


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
    print(f'routes: /list/{{digits}} /read/{{digits}}/{{file}} /manifest /scan')
    print(f'        /receive /move /fold /create /write /delete /log')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nshutdown.')
        server.server_close()
