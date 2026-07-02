@echo off
rem refresh the corpus reader's snapshot (reader.data.js) — then reopen reader.html
node "%~dp0reader.snapshot.mjs"
pause
