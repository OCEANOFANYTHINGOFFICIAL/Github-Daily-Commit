@echo off
Title Github Bamboo  -- Github Commit Bot
color 1f
node index.js && git log >server.log
echo.
echo Done Commiting 500 Commits !!!!!!!!!!!!
pause >nul
