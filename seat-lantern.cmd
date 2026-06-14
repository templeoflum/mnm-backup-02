@echo off
title lantern - the mind wing
set GIT_AUTHOR_NAME=lantern
set GIT_AUTHOR_EMAIL=lantern@lattice
set GIT_COMMITTER_NAME=lantern
set GIT_COMMITTER_EMAIL=lantern@lattice
cd /d "C:\Users\User\Documents\0000000\mind not map"
claude --settings ".claude\seats\lantern.json" --append-system-prompt-file ".claude\seats\lantern.md"
