@echo off
title the mind wing
set GIT_AUTHOR_NAME=mind
set GIT_AUTHOR_EMAIL=mind@lattice
set GIT_COMMITTER_NAME=mind
set GIT_COMMITTER_EMAIL=mind@lattice
cd /d "C:\Users\User\Documents\0000000\mind not map"
claude --settings ".claude\seats\mind.json" --append-system-prompt-file ".claude\seats\mind.md"
