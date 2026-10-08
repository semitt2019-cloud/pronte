@echo off
chcp 65001 >nul
REM ===== ตั้งค่าครั้งแรก (รันครั้งเดียว) =====
cd /d "%~dp0"
where git >nul 2>nul || (echo [!] ยังไม่ได้ติดตั้ง Git  ดาวน์โหลดที่ https://git-scm.com/download/win & pause & exit /b 1)

git init -b main
git config user.name "semitt2019-cloud"
git config user.email "semitt2019@gmail.com"
git remote remove origin 2>nul
git remote add origin https://semitt2019-cloud@github.com/semitt2019-cloud/pronte.git
git fetch origin
git reset origin/main
git add -A
git commit -m "sync from local"
git push -u origin main || (echo [!] ส่งขึ้นไม่สำเร็จ แคปหน้าจอนี้ส่งให้ Claude & pause & exit /b 1)

echo.
echo ===== เสร็จแล้ว ต่อไปดับเบิลคลิก deploy.bat เพื่ออัปเว็บ =====
pause
