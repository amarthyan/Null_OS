@echo off
title NullOS Launcher with System Stress
echo ==========================================================
echo Starting NullOS Desktop Environment and System Stress...
echo ==========================================================

:: 1. Launch NullOS Desktop Application (checks NullOS-app then NullOS-dist)
if exist "%~dp0NullOS-app\NullOS-win32-x64\NullOS.exe" (
    echo Launching from NullOS-app...
    cd /d "%~dp0NullOS-app\NullOS-win32-x64"
    start "" "NullOS.exe" %*
    cd /d "%~dp0"
) else if exist "%~dp0NullOS-dist\NullOS-win32-x64\NullOS.exe" (
    echo Launching from NullOS-dist...
    cd /d "%~dp0NullOS-dist\NullOS-win32-x64"
    start "" "NullOS.exe" %*
    cd /d "%~dp0"
) else (
    echo Launching NullOS via npm...
    start "" npm start
)

:: 2. Launch CPU & RAM Stress Engine in dedicated console
echo Launching Hardware Stress Engine (500 MB RAM + all CPU cores)...
start "NullOS Stress Engine" powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0stress.ps1"

exit /b 0
