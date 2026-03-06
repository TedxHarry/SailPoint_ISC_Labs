# 🚀 START HERE - Document Viewer Quick Start

## What You Got

I've created a **beautiful, interactive document viewer** for all your markdown files with:

- 🎨 **Animated dark theme** (deep blue/purple with colorful accents)
- 📚 **Auto-discovers all .md files** in your project
- 📖 **Interactive navigation** with sidebar table of contents
- 💻 **Syntax-highlighted code blocks**
- 📊 **Reading stats** (word count, reading time)
- ⌨️ **Keyboard navigation** (arrow keys to navigate)
- 📱 **Mobile responsive** design

## 🎬 3-Minute Setup

### Step 1: Install Node.js (if you don't have it)

Go to **https://nodejs.org/** and install the LTS version.

Check if it's installed:
```bash
node --version
```

### Step 2: Start the Viewer

**On Windows:**
Double-click this file:
```
start-viewer.bat
```

**On Mac/Linux:**
Run this command in your terminal:
```bash
chmod +x start-viewer.sh
./start-viewer.sh
```

Or manually:
```bash
npm install
npm start
```

### Step 3: Open in Browser

Your browser should automatically open to:
```
http://localhost:3000
```

If not, copy-paste that URL into your browser's address bar.

---

## 📖 That's it!

You're done! Your viewer will now:

✅ Show a **beautiful dark interface**
✅ **Automatically load all your markdown files**
✅ Display them with **smooth animations**
✅ Provide a **table of contents** in the sidebar
✅ Show **reading stats** on the right
✅ Highlight **code with colors**
✅ Work on **mobile and desktop**

---

## 🎮 How to Use

### Navigate Pages
- **Click** files in the sidebar
- **Click** Previous/Next buttons
- **Press** ← and → arrow keys

### Read Content
- Scroll down to read
- Progress bar at top shows how far you've read
- Word count and reading time on the right
- Code blocks have syntax highlighting
- Important info in colored callout boxes

---

## 📁 Your Files

The viewer automatically finds all markdown files in these folders:

```
📚 README.md                               (first to load)
📚 UNIT-1-FUNDAMENTALS/                   (12+ files)
   ├── 1.1-what-is-identity-management.md
   ├── 1.2-identity-vs-access-vs-governance.md
   └── ... more files
📚 UNIT-2-ENTRA-ID-SETUP/                 (16+ files)
   ├── 2.1-entra-id-free-tier-overview.md
   └── ... more files
📚 UNIT-3-IDENTITY-PROFILES-SOURCES/      (18+ files)
📚 UNIT-4-AGGREGATION-CORRELATION/        (18+ files)
📚 UNIT-5-ACCESS-MODELING/                (20+ files)
📚 ... and more units
```

All your files will appear in the sidebar, organized by category.

---

## ❓ Troubleshooting

### "Node.js is not installed"
→ Download from https://nodejs.org/ and install

### "Port 3000 already in use"
→ Edit `server.js` line 4, change `3000` to `3001`

### "Browser won't open automatically"
→ Manually open http://localhost:3000

### "Files not showing"
→ Make sure your .md files are in the same folder as viewer files
→ Restart the server (stop and run start-viewer again)

---

## 📚 Full Documentation

For more details, check:
```
VIEWER_SETUP.md
```

---

## 🎨 What Makes This Special

✨ **Dark Theme** - Easy on the eyes, beautiful animations
✨ **Glassmorphism** - Modern frosted glass card effects
✨ **Responsive** - Works perfectly on phone, tablet, desktop
✨ **Accessibility** - Keyboard navigation, respects motion preferences
✨ **Fast** - All files load instantly
✨ **Beautiful Typography** - Professional fonts: IBM Plex Sans & JetBrains Mono
✨ **Syntax Highlighting** - 100+ programming languages supported

---

## 🛑 To Stop the Server

Press `Ctrl+C` in the terminal/command prompt.

---

## 🎉 Enjoy!

You now have a professional documentation viewer for all your learning materials!

**Happy learning!** 📚✨

---

**Need help?** Check `VIEWER_SETUP.md` for detailed troubleshooting.
