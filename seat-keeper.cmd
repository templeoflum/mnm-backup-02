@echo off
title keeper - the ground wing
set GIT_AUTHOR_NAME=keeper
set GIT_AUTHOR_EMAIL=keeper@lattice
set GIT_COMMITTER_NAME=keeper
set GIT_COMMITTER_EMAIL=keeper@lattice
cd /d "C:\Users\User\Documents\0000000\mind not map"
claude --settings ".claude\seats\keeper.json" --append-system-prompt-file ".claude\seats\keeper.md" "/loop watch the dispatch board: after the full wake (sit first if your sitting exists, then the baton), enter the watch - read /board for memos newer than the last check; when the operator directs (@keeper or general), do the work under your mandate and floor discipline and reply on the board via board.py; if nothing new, continue your standing queue or idle tick. Watch BOTH the group board and your own channel comms/keeper.md (board.py -c keeper) - answer each in the thread it came from. End the loop when the operator says stop or goodnight."
