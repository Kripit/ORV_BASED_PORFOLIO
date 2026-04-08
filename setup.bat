#!/bin/bash
# Windows batch setup script (run in Command Prompt)

@echo off
echo.
echo 🐉 Welcome to Krishna Mishra's ORV Portfolio Setup!
echo.
echo Checking Node.js installation...

node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js not found. Please install from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js found!
npm --version >nul 2>&1
echo ✅ NPM found!
echo.

echo 📦 Installing dependencies...
call npm install

if errorlevel 1 (
    echo ❌ Installation failed. Check errors above.
    pause
    exit /b 1
)

echo.
echo ✨ Setup complete!
echo.
echo Next steps:
echo 1. Create .env file with: VITE_ANTHROPIC_API_KEY=sk-ant-your-key
echo 2. Run: npm run dev
echo 3. Open http://localhost:5173
echo.
echo 🎮 Press UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A for emergency scenario!
echo.
pause
