#!/usr/bin/env python3
"""portguard.py - the one-listener watchdog for the dispatch server (:8000).

Barrier for incident.dispatch-estop-disabled (20260707): a stray listener on
the production port (a screenshot rig's `python -m http.server 8000`) bound
:8000 on IPv6 alongside the real server on IPv4, silently shadowed the API for
localhost/browser requests, and disabled the dispatch/e-stop - undetected,
because board.py talks IPv4 and kept working.

    python portguard.py check   -> report :8000 listeners + localhost health; KILL NOTHING (safe, default)
    python portguard.py guard   -> same, but KILL any intruder + print a LOUD ALARM line

Definitions, deliberately conservative so this never kills the real server:
  legit server = a process whose command line contains 'server.py'
  intruder     = a process LISTENING on :8000 whose command line does NOT
                 contain 'server.py' (e.g. a stray 'http.server')
server.py is NEVER a kill target. If the real server is absent, that is an
alarm (SERVER-DOWN), not a reason to kill anything.

Also checks the operator's REAL path: localhost:8000 (IPv6-first) must reach
the true API (/channels returns JSON), because that is how the dispatch is hit
and it is where the shadowing hid.

Run `guard` in a loop (a Monitor) so a second binder is killed + alarmed within
seconds. Read-only 'check' is always safe to run.
"""
import json
import subprocess
import sys
import urllib.request

PORT = 8000


def _listeners():
    """[(pid, cmdline)] for every process LISTENING on :PORT. PowerShell is the
    reliable source on Windows (netstat PID mapping is flaky)."""
    # double-quoted PS interpolation + a distinctive delimiter (single-quoted PS
    # does NOT expand `t, and cmdlines can contain tabs/pipes - so |~| is the seam).
    # $procid, not $pid: $pid is an automatic variable in PowerShell.
    ps = (
        "Get-NetTCPConnection -LocalPort %d -State Listen -ErrorAction SilentlyContinue | "
        "ForEach-Object { $procid=$_.OwningProcess; "
        "$p=Get-CimInstance Win32_Process -Filter \"ProcessId=$procid\" -ErrorAction SilentlyContinue; "
        "\"$procid|~|$($p.CommandLine)\" }"
    ) % PORT
    try:
        r = subprocess.run(["powershell", "-NoProfile", "-Command", ps],
                           capture_output=True, text=True, timeout=20)
    except Exception as e:
        return [], "listener query failed: {0}".format(e)
    out = []
    seen = set()
    for line in (r.stdout or "").splitlines():
        line = line.strip()
        if not line or "|~|" not in line:
            continue
        pid, cmd = line.split("|~|", 1)
        pid = pid.strip()
        if not pid.isdigit() or pid in seen:
            continue
        seen.add(pid)
        out.append((int(pid), (cmd or "").strip()))
    return out, None


def _is_legit(cmdline):
    c = (cmdline or "").lower()
    return "server.py" in c and "-m http.server" not in c


def _localhost_api_ok():
    """The operator's real path: localhost (IPv6-first) must reach the API."""
    try:
        with urllib.request.urlopen("http://localhost:{0}/channels".format(PORT), timeout=4) as resp:
            body = resp.read().decode("utf-8", "replace")
            return ("channels" in body), body[:80]
    except Exception as e:
        return False, str(e)


def _kill(pid):
    try:
        subprocess.run(["taskkill", "/F", "/PID", str(pid)],
                       capture_output=True, text=True, timeout=10)
        return True
    except Exception:
        return False


def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else "check"
    listeners, err = _listeners()
    if err:
        print("ALARM portguard: " + err)
        return 2

    legit = [(p, c) for p, c in listeners if _is_legit(c)]
    intruders = [(p, c) for p, c in listeners if not _is_legit(c)]

    # 1) intruders on the production port
    for pid, cmd in intruders:
        if mode == "guard":
            killed = _kill(pid)
            print("ALARM portguard: intruder on :{0} pid={1} [{2}] -> {3}".format(
                PORT, pid, cmd[:80], "KILLED" if killed else "KILL FAILED"))
        else:
            print("ALARM portguard: intruder on :{0} pid={1} [{2}] (check mode - NOT killed)".format(
                PORT, pid, cmd[:80]))

    # 2) the real server must be present
    if not legit:
        print("ALARM portguard: SERVER-DOWN - no server.py listening on :{0}".format(PORT))

    # 3) the operator's real path must reach the API
    ok, detail = _localhost_api_ok()
    if not ok:
        print("ALARM portguard: localhost:{0} does NOT reach the API ({1}) - dispatch/e-stop may be shadowed".format(PORT, detail))

    # guard mode writes a heartbeat each cycle so allclear.py can verify the
    # watchdog is actually RUNNING (a stopped guard = no barrier = not clear)
    if mode == "guard":
        try:
            import os
            import time
            d = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), ".claude", "status")
            os.makedirs(d, exist_ok=True)
            with open(os.path.join(d, "portguard.beat"), "w", encoding="utf-8") as f:
                f.write(str(int(time.time())))
        except OSError:
            pass

    # quiet success in check mode prints a one-line all-clear; guard mode stays
    # silent unless something fired (so a Monitor only wakes on real trouble)
    if mode == "check" and not intruders and legit and ok:
        print("ok: 1 legit server (pid {0}), no intruders, localhost API reachable".format(legit[0][0]))
    return 0


if __name__ == "__main__":
    sys.exit(main())
