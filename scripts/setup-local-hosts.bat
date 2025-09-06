@echo off
REM RC RaceHub - Local Development Hosts Setup for Windows
REM Run this as Administrator

echo 🏁 RC RaceHub - Setting up local development hosts for Windows...
echo.

set HOSTS_FILE=C:\Windows\System32\drivers\etc\hosts

echo 📝 Adding entries to %HOSTS_FILE%...
echo.

REM Check if running as administrator
net session >nul 2>&1
if %errorLevel% == 0 (
    echo ✅ Running as Administrator
    
    REM Add ntar.localhost if it doesn't exist
    findstr /C:"ntar.localhost" "%HOSTS_FILE%" >nul
    if %errorLevel% == 0 (
        echo ✅ ntar.localhost already exists in hosts file
    ) else (
        echo 127.0.0.1 ntar.localhost >> "%HOSTS_FILE%"
        echo ✅ Added ntar.localhost
    )
    
    REM Add speedway.localhost if it doesn't exist
    findstr /C:"speedway.localhost" "%HOSTS_FILE%" >nul
    if %errorLevel% == 0 (
        echo ✅ speedway.localhost already exists in hosts file
    ) else (
        echo 127.0.0.1 speedway.localhost >> "%HOSTS_FILE%"
        echo ✅ Added speedway.localhost
    )
    
    echo.
    echo 🎉 Setup complete! You can now access:
    echo    Main site: http://localhost:3001
    echo    NTAR:      http://ntar.localhost:3001
    echo    Speedway:  http://speedway.localhost:3001
    echo.
    echo 💡 Tip: Clear your browser cache or use incognito mode if subdomains don't work immediately
    
) else (
    echo ❌ This script must be run as Administrator
    echo.
    echo 🔧 To run as Administrator:
    echo    1. Right-click on this file
    echo    2. Select "Run as administrator"
    echo.
    echo 📝 Or manually add these lines to %HOSTS_FILE%:
    echo    127.0.0.1 ntar.localhost
    echo    127.0.0.1 speedway.localhost
)

echo.
echo 🔧 After updating hosts file:
echo    1. Clear browser cache or use incognito mode
echo    2. Restart your browser
echo    3. Test the URLs above

pause
