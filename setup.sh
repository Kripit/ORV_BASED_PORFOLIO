#!/bin/bash
# Quick setup script for ORV Portfolio

echo "🐉 Welcome to Krishna Mishra's ORV Portfolio Setup!"
echo "⚔️  Frontend Sorcerer's Scenario Beginning..."
echo ""

# Check if Node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo "✅ NPM found: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✨ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Create .env file with your Claude API key"
echo "2. Run: npm run dev"
echo "3. Open http://localhost:5173"
echo ""
echo "🎮 Press ↑↑↓↓←→←→BA for emergency scenario!"
