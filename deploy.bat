@echo off
chcp 65001 >nul
REM ===== อัปเว็บขึ้น GitHub แล้ว Cloudflare จะอัปเดตเว็บให้เอง =====
cd /d "%~dp0"
git add -A
git commit -m "update %date% %time%"
git push
echo.
echo ===== ส่งขึ้นแล้ว รอ 1-2 นาที แล้วเปิดเว็บดู =====
pause
