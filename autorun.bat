@echo off
title Ampersand RP5 - Midnight
echo Ampersand auto-run is starting ...
:main
node --max-old-space-size=12192 main.js
timeout /t 30
echo Ampersand crashed! Restarting ...
goto main