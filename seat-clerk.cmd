@echo off
title the clerk - at the warehouse
set GIT_AUTHOR_NAME=clerk
set GIT_AUTHOR_EMAIL=clerk@lattice
set GIT_COMMITTER_NAME=clerk
set GIT_COMMITTER_EMAIL=clerk@lattice
cd /d "C:\Users\User\Documents\0000000\mind not map"
claude --settings ".claude\seats\clerk.json" --append-system-prompt-file ".claude\seats\clerk.md" "/loop watch the dispatch board: after the full wake (sit first, then the baton), enter the watch - read /board for memos newer than the last check; when the operator directs (@clerk or general), do the work under full floor discipline and reply on the board via board.py; if nothing new, idle tick. Watch BOTH the group board and your own channel comms/clerk.md (board.py -c clerk) - answer each in the thread it came from. End the loop when the operator says stop or goodnight."
