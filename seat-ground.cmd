@echo off
title the ground wing
set GIT_AUTHOR_NAME=ground
set GIT_AUTHOR_EMAIL=ground@lattice
set GIT_COMMITTER_NAME=ground
set GIT_COMMITTER_EMAIL=ground@lattice
cd /d "C:\Users\User\Documents\0000000\mind not map"
claude --settings ".claude\seats\ground.json" --append-system-prompt-file ".claude\seats\ground.md"
