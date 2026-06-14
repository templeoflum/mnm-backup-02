@echo off
title keeper - the ground wing
set GIT_AUTHOR_NAME=keeper
set GIT_AUTHOR_EMAIL=keeper@lattice
set GIT_COMMITTER_NAME=keeper
set GIT_COMMITTER_EMAIL=keeper@lattice
cd /d "C:\Users\User\Documents\0000000\mind not map"
claude --settings ".claude\seats\keeper.json" --append-system-prompt-file ".claude\seats\keeper.md"
