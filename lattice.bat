@echo off
cd /d "%~dp0"
set "URL=http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.f2.20260609-102857.html"

rem already running? (something is LISTENING on :8000)
netstat -an | findstr /c:":8000 " | findstr "LISTENING" >nul
if %errorlevel%==0 goto running

rem not running — start the server and open the tab
start "" "%URL%"
python server.py
goto :eof

:running
echo lattice server already running on :8000 - a tab is probably already open.
choice /c YN /n /t 5 /d N /m "open a new browser tab anyway? [y/N] "
if errorlevel 2 goto :eof
start "" "%URL%"
