@echo off
title lantern - the mind wing
set GIT_AUTHOR_NAME=lantern
set GIT_AUTHOR_EMAIL=lantern@lattice
set GIT_COMMITTER_NAME=lantern
set GIT_COMMITTER_EMAIL=lantern@lattice
cd /d "C:\Users\User\Documents\0000000\mind not map"
claude --settings ".claude\seats\lantern.json" --append-system-prompt-file ".claude\seats\lantern.md" "/loop watch the dispatch board: after the full wake (sit first, then the baton), enter the watch - read /board for memos newer than the last check; when the operator directs (@lantern or general), take it up in your own register (dreams stay dreams - wants go to the sift) and reply on the board via board.py; if nothing new, idle tick. Your individual channel arrives with the comms suite - until then the group board is the channel. End the loop when the operator says stop or goodnight."
