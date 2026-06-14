@echo off
cd /d "%~dp0"
set "URL=http://localhost:8000/2.m.g.c.0667.structure-maintains-order/21.mv.gd.co.0778.labor-installs-practice/211.mvv.gdd.coo.0815.motion-builds-form/lattice.f2.20260609-102857.html"

rem already running? (something is LISTENING on :8000) — don't start a second server window
netstat -an | findstr /c:":8000 " | findstr "LISTENING" >nul
if %errorlevel%==0 (
  echo lattice server already running on :8000 - opening browser only.
  start "" "%URL%"
  goto :eof
)

start "" "%URL%"
python server.py
