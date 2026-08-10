@echo off
echo ==========================================
echo   Muhammad Shahbaz - Portfolio Launcher
echo ==========================================
echo.
echo Starting Backend Server (Contact Form)...
start "Backend - Portfolio" cmd /k "cd /d "C:\Users\Adnan FM\Desktop\2nd project\backend" && node server.js"

ping 127.0.0.1 -n 3 > nul

echo Starting Frontend Server (Website)...
start "Frontend - Portfolio" cmd /k "cd /d "C:\Users\Adnan FM\Desktop\2nd project\frontend" && npm run dev"

ping 127.0.0.1 -n 4 > nul

echo.
echo ==========================================
echo   Both servers are starting!
echo   Website: http://localhost:5173
echo   Backend: http://localhost:5000
echo ==========================================
echo.
echo Opening browser...
start http://localhost:5173

echo Done! You can close this window.
