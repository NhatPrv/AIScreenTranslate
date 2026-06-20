@echo off
title AI Screen Translate Runner
cls
:menu
echo ==================================================
echo         AI SCREEN TRANSLATE RUNNER
echo ==================================================
echo 1. Cai dat thu vien bang Bun (bun install)
echo 2. Chay ung dung bang Bun (bun dev)
echo 3. Cai dat thu vien bang npm (npm install)
echo 4. Chay ung dung bang npm (npm run dev)
echo 5. Thoat
echo ==================================================
set /p choice="Nhap lua chon cua ban (1-5): "

if "%choice%"=="1" goto bun_install
if "%choice%"=="2" goto bun_dev
if "%choice%"=="3" goto npm_install
if "%choice%"=="4" goto npm_dev
if "%choice%"=="5" goto exit
echo Lua chon khong hop le! Vui long chon lai.
pause
goto menu

:bun_install
echo Dang cai dat thu vien bang Bun...
call bun install
pause
goto menu

:bun_dev
echo Dang khoi chay ung dung bang Bun...
call bun dev
pause
goto menu

:npm_install
echo Dang cai dat thu vien bang npm...
call npm install
pause
goto menu

:npm_dev
echo Dang khoi chay ung dung bang npm...
call npm run dev
pause
goto menu

:exit
exit
