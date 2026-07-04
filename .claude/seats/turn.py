#!/usr/bin/env python3
"""turn.py - real turn-state from the harness's own edges (working-signal
pilot; proposal.working-signal.f0 at 210, signed 20260704-042310).

    python .claude/seats/turn.py <seat> start   -> UserPromptSubmit: turn opens
    python .claude/seats/turn.py <seat> beat    -> PreToolUse: an act happened
    python .claude/seats/turn.py <seat> stop    -> Stop: the agent finished
    python .claude/seats/turn.py <seat> end     -> SessionEnd: session closed

Writes .claude/turn/<seat>.json: which OS process the seat is (pid + creation
FILETIME, so a reused pid can't lie) and whether a turn is open. /presence
verifies the pid against the OS live; the card renders WORKING only for an
open turn on a live process. Control state, gitignored.

Fail-open and silent: a broken stamp must never break the seat, and hook
stdout crosses into the session - print nothing, exit 0 always.
"""
import json
import os
import sys
import time

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TURN = os.path.join(ROOT, '.claude', 'turn')


def _ancestors():
    """(pid, ppid, exe) for every process, via the toolhelp snapshot."""
    import ctypes
    from ctypes import wintypes

    class PROCESSENTRY32(ctypes.Structure):
        _fields_ = [
            ('dwSize', wintypes.DWORD),
            ('cntUsage', wintypes.DWORD),
            ('th32ProcessID', wintypes.DWORD),
            ('th32DefaultHeapID', ctypes.POINTER(ctypes.c_ulong)),
            ('th32ModuleID', wintypes.DWORD),
            ('cntThreads', wintypes.DWORD),
            ('th32ParentProcessID', wintypes.DWORD),
            ('pcPriClassBase', ctypes.c_long),
            ('dwFlags', wintypes.DWORD),
            ('szExeFile', ctypes.c_char * 260),
        ]

    k = ctypes.windll.kernel32
    snap = k.CreateToolhelp32Snapshot(0x2, 0)  # TH32CS_SNAPPROCESS
    if snap == -1:
        return {}
    procs = {}
    try:
        e = PROCESSENTRY32()
        e.dwSize = ctypes.sizeof(PROCESSENTRY32)
        if k.Process32First(snap, ctypes.byref(e)):
            while True:
                procs[e.th32ProcessID] = (e.th32ParentProcessID,
                                          e.szExeFile.decode('mbcs', 'replace').lower())
                if not k.Process32Next(snap, ctypes.byref(e)):
                    break
    finally:
        k.CloseHandle(snap)
    return procs


def _creation_filetime(pid):
    """The process's creation FILETIME as an int - its identity beyond pid."""
    import ctypes
    from ctypes import wintypes
    k = ctypes.windll.kernel32
    h = k.OpenProcess(0x1000, False, int(pid))  # QUERY_LIMITED_INFORMATION
    if not h:
        return None
    try:
        c, x, ku, uu = (wintypes.FILETIME(), wintypes.FILETIME(),
                        wintypes.FILETIME(), wintypes.FILETIME())
        if not k.GetProcessTimes(h, ctypes.byref(c), ctypes.byref(x),
                                 ctypes.byref(ku), ctypes.byref(uu)):
            return None
        return (c.dwHighDateTime << 32) | c.dwLowDateTime
    finally:
        k.CloseHandle(h)


def _session_process():
    """Walk up from this hook to the long-lived session process (node/claude).
    Returns (pid, creation_filetime) or (None, None) - unknown stays unknown,
    it is never guessed."""
    procs = _ancestors()
    pid = os.getpid()
    for _ in range(12):
        entry = procs.get(pid)
        if not entry:
            return None, None
        ppid, exe = entry
        if 'node' in exe or 'claude' in exe:
            ft = _creation_filetime(pid)
            return (pid, ft) if ft is not None else (None, None)
        pid = ppid
    return None, None


def main():
    try:
        seat = sys.argv[1]
        event = sys.argv[2]
        path = os.path.join(TURN, seat + '.json')
        state = {}
        try:
            with open(path, encoding='utf-8-sig') as f:
                state = json.load(f)
        except (OSError, ValueError):
            state = {}
        if event in ('start', 'beat') and not state.get('pid'):
            pid, ft = _session_process()
            state['pid'], state['pid_created'] = pid, ft
        if event in ('start', 'beat'):
            state['turn'] = 'open'
        elif event in ('stop', 'end'):
            state['turn'] = 'closed'
        state['last_event'] = event
        state['ts'] = time.time()
        os.makedirs(TURN, exist_ok=True)
        tmp = path + '.tmp'
        with open(tmp, 'w', encoding='utf-8') as f:
            json.dump(state, f)
        os.replace(tmp, path)
    except Exception:
        pass
    return 0


if __name__ == '__main__':
    sys.exit(main())
