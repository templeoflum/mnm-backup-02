@echo off
cd /d "%~dp0"
set "URL=http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.f2.20260609-102857.html"

rem one motion opens the town (proposal.town-open-close.f0, signed 20260704):
rem ground first (server + tab), then the residents - town.py open waits for
rem :8000 and launches the three seats staggered, skipping consoles already up.

rem already running? (something is LISTENING on :8000)
netstat -an | findstr /c:":8000 " | findstr "LISTENING" >nul
if %errorlevel%==0 goto running

rem not running - open the tab, arm the seat wakes, run the server in THIS window
start "" "%URL%"
start "town open" /min cmd /c python .claude\seats\town.py open
python server.py
goto :eof

:running
rem the server survives a town close by design, so this is the usual next open:
rem launch whichever seats are dark (awake consoles are skipped, never doubled)
echo lattice server already running on :8000 - opening the town against it.
start "town open" /min cmd /c python .claude\seats\town.py open
choice /c YN /n /t 5 /d N /m "open a new browser tab anyway? [y/N] "
if errorlevel 2 goto :eof
start "" "%URL%"
