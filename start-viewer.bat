@echo off
REM SailPoint ISC Labs - Document Viewer Launcher for Windows

color 0A
cls

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║   📚 SailPoint ISC Labs - Document Viewer                 ║
echo ║                                                            ║
echo ║   Starting server...                                       ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM Check if node is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ ERROR: Node.js is not installed
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

REM Check if node_modules exists
if not exist node_modules (
    echo 📦 Installing dependencies...
    call npm install
    echo.
)

REM Start the server
echo 🚀 Starting server on http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.
timeout /t 2 /nobreak

start http://localhost:3000
node server.js
