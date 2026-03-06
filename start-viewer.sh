#!/bin/bash

# SailPoint ISC Labs - Document Viewer Launcher for Mac/Linux

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║                                                            ║"
echo "║   📚 SailPoint ISC Labs - Document Viewer                 ║"
echo "║                                                            ║"
echo "║   Starting server...                                       ║"
echo "║                                                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "❌ ERROR: Node.js is not installed"
    echo ""
    echo "Please install Node.js from: https://nodejs.org/"
    echo ""
    echo "Or use your package manager:"
    echo "  macOS:  brew install node"
    echo "  Ubuntu: sudo apt install nodejs npm"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Start the server
echo "🚀 Starting server on http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

sleep 2

# Try to open browser (macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
    open http://localhost:3000
fi

# Try to open browser (Linux)
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    xdg-open http://localhost:3000 2>/dev/null || echo "📌 Open http://localhost:3000 in your browser"
fi

node server.js
