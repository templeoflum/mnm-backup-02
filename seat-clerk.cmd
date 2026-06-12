@echo off
title the clerk - at the warehouse
set GIT_AUTHOR_NAME=clerk
set GIT_AUTHOR_EMAIL=clerk@lattice
set GIT_COMMITTER_NAME=clerk
set GIT_COMMITTER_EMAIL=clerk@lattice
cd /d "C:\Users\User\Documents\0000000\mind not map"
claude --settings ".claude\seats\clerk.json" --append-system-prompt-file ".claude\seats\clerk.md"
