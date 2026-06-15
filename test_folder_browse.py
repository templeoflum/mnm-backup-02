#!/usr/bin/env python3
"""Tests for folder-visibility — server.op_list reports subfolders and browses
into them, with a path-traversal guard (folder-visibility build, 20260615).

Lives WITH the code it tests (server.py at repo root). Run standalone:

    python test_folder_browse.py    # exits 0 all-pass, 1 on any failure
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import server


def case(desc, ok):
    print(("PASS" if ok else "FAIL") + f": {desc}")
    return ok


def main():
    R = []

    # find any address that has a subfolder (robust — no hardcoded path).
    # op_list takes digit-addresses only (the route enforces it); skip the
    # 'root' pseudo-address that _scan_locations also yields.
    addr_with_folder = None
    for addr, path, _ in server._scan_locations():
        if not addr.isdigit():
            continue
        r = server.op_list(addr)
        if r.get('folders'):
            addr_with_folder = (addr, r['folders'][0])
            break

    R.append(case("op_list returns a 'folders' key", 'folders' in server.op_list('000')))

    if addr_with_folder:
        addr, fld = addr_with_folder
        sub = server.op_list(addr, fld)
        R.append(case(f"browse into {addr}/{fld} returns its own listing",
                      sub['subpath'] == fld and isinstance(sub['files'], list)))
        # the subfolder view differs from the top (or at least is well-formed)
        R.append(case("subfolder view carries files or nested folders",
                      isinstance(sub['files'], list) and isinstance(sub['folders'], list)))
    else:
        print("note: no subfolders on the floor to browse — skipping browse case")
        R.append(True)

    # path-traversal guard: '..' is stripped, can't escape the address
    esc = server.op_list('000', '../../../etc')
    R.append(case("'..' escape is neutralized (subpath empty)", esc['subpath'] == ''))
    top = server.op_list('000')
    R.append(case("escaped list == top-of-address list (no leak)",
                  esc['files'] == top['files']))

    # node_modules / hidden are excluded from folders
    r = server.op_list('000')
    R.append(case("excluded dirs never appear as folders",
                  all(f not in server.EXCLUDE_DIRS and not f.startswith('.')
                      for f in r['folders'])))

    # address folders carrying a marker are hidden from the browse list; freight
    # and project units stay listed. Throwaway temp folders under a real cell.
    import shutil
    cell = server.resolve_path('211')
    addr_tmp = cell / '_test_addr_folder'
    freight_tmp = cell / '_test_freight_folder'
    try:
        addr_tmp.mkdir(exist_ok=True)
        freight_tmp.mkdir(exist_ok=True)
        before = server.op_list('211')
        R.append(case("unmarked folders both appear",
                      addr_tmp.name in before['folders'] and freight_tmp.name in before['folders']))
        (addr_tmp / '.leaf').write_text('', encoding='utf-8')  # mark one as an address
        after = server.op_list('211')
        R.append(case("address folder hidden from browse list", addr_tmp.name not in after['folders']))
        R.append(case("freight folder still listed", freight_tmp.name in after['folders']))
    finally:
        shutil.rmtree(addr_tmp, ignore_errors=True)
        shutil.rmtree(freight_tmp, ignore_errors=True)

    n, p = len(R), sum(R)
    print(f"\n{p}/{n} passed")
    sys.exit(0 if p == n else 1)


if __name__ == "__main__":
    main()
