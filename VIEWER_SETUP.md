# 📚 SailPoint ISC Labs - Document Viewer Setup

A beautiful, interactive dark-themed documentation viewer for reading all your markdown files with smooth animations and visual polish.

## 🎨 Features

- ✨ **Animated Dark Theme** - Deep blue/purple with colorful accents
- 📖 **Auto-Discovery** - Automatically finds and indexes all .md and .txt files
- 🎯 **Interactive Navigation** - Sidebar table of contents with active highlighting
- 📊 **Reading Stats** - Word count, reading time, last updated
- 💻 **Syntax Highlighting** - Code blocks with language detection
- 📱 **Responsive Design** - Works on mobile, tablet, and desktop
- ⌨️ **Keyboard Navigation** - Use arrow keys to navigate pages
- ♿ **Accessible** - Respects prefers-reduced-motion, semantic HTML
- 🚀 **Fast** - Smooth transitions and animations

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14+) - [Download here](https://nodejs.org/)

### Installation & Running

#### Step 1: Install Dependencies
```bash
npm install
```

This will install:
- `express` - Web server
- `marked` - Markdown to HTML converter

#### Step 2: Start the Server
```bash
npm start
```

You should see:
```
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║   📚 SailPoint ISC Labs - Document Viewer                 ║
║                                                            ║
║   Server running at: http://localhost:3000                ║
║                                                            ║
║   Open your browser and navigate to the URL above         ║
║                                                            ║
║   Press Ctrl+C to stop the server                         ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

#### Step 3: Open in Browser
Open your web browser and navigate to:
```
http://localhost:3000
```

## 📁 File Organization

The viewer automatically discovers all markdown files in the directory structure:

```
📦 Project Root
├── viewer.html           (The viewer interface)
├── server.js            (The server that serves files)
├── package.json         (Dependencies)
├── README.md            (Will be shown as first file)
├── UNIT-1-FUNDAMENTALS/
│   ├── 1.1-what-is-identity-management.md
│   ├── 1.2-identity-vs-access-vs-governance.md
│   └── ... (more unit files)
├── UNIT-2-ENTRA-ID-SETUP/
│   ├── 2.1-entra-id-free-tier-overview.md
│   └── ... (more unit files)
└── ... (more units)
```

Files are automatically:
- **Discovered** from all subdirectories
- **Indexed** by category (folder name)
- **Sorted** alphabetically within each category
- **Formatted** with proper headings and syntax highlighting

## 🎮 How to Use

### Navigation
- **Sidebar**: Click any file to jump to it
- **Buttons**: Use Previous/Next buttons to navigate sequentially
- **Keyboard**: Press ← (left arrow) and → (right arrow) to navigate

### Reading
- **Progress Bar** at the top shows how far you've scrolled
- **Breadcrumbs** show your current location
- **Reading Stats** on the right show word count and estimated reading time
- **Code Blocks** have syntax highlighting for multiple languages
- **Callout Boxes** highlight important information (Info, Warning, Danger)

### Dark/Light Mode
The viewer automatically detects your system theme:
- If your OS is set to dark mode → dark theme
- If your OS is set to light mode → light theme

## 📝 Supported Content

### Markdown Features
- ✅ Headers (h1-h6)
- ✅ Bold, italic, bold-italic text
- ✅ Links and anchor tags
- ✅ Ordered and unordered lists
- ✅ Code blocks with language detection
- ✅ Inline code
- ✅ Blockquotes
- ✅ Tables
- ✅ Horizontal rules
- ✅ HTML entities

### Syntax Highlighting
Supports all common programming languages:
- `javascript`, `js`
- `python`, `py`
- `java`
- `json`
- `xml`
- `html`
- `css`
- `bash`, `shell`
- `ruby`, `rb`
- And 100+ more...

Example code block:
````markdown
```javascript
const greeting = "Hello, World!";
console.log(greeting);
```
````

## 🎨 Design System

### Colors
| Element | Color |
|---------|-------|
| Background | `#0F172A` (Deep Blue) |
| Primary | `#1E293B` (Slate) |
| Accent 1 | `#22C55E` (Green) |
| Accent 2 | `#3B82F6` (Blue) |
| Accent 3 | `#8B5CF6` (Purple) |
| Text | `#F8FAFC` (Off-White) |

### Typography
- **Headings & UI**: IBM Plex Sans (400-700 weight)
- **Code Blocks**: JetBrains Mono (400-700 weight)

### Animations
- **Page transitions**: 400ms smooth fade-in
- **Hover effects**: 200ms cubic-bezier easing
- **Scroll animations**: Smooth reveal effects
- **Respects prefers-reduced-motion** for accessibility

## 🔧 Troubleshooting

### Server won't start
```bash
# Make sure Node.js is installed
node --version

# If not installed, download from https://nodejs.org/

# Try reinstalling dependencies
rm -rf node_modules
npm install
npm start
```

### Port 3000 already in use
```bash
# Edit server.js and change:
const PORT = 3000;
# to:
const PORT = 3001; # (or any free port)
```

### Files not showing up
1. Ensure markdown files are in the same directory as `server.js`
2. Make sure files have `.md` extension (case-sensitive on Linux/Mac)
3. Files starting with `.` (hidden files) are ignored
4. Try restarting the server

### Content not loading
1. Check browser console (F12) for errors
2. Verify server is running: `http://localhost:3000` should show the viewer
3. Try refreshing the page (Ctrl+R)
4. Clear browser cache (Ctrl+Shift+Delete)

## 📖 Example Content

The viewer comes with sample content showing different formatting styles:

### Callout Boxes
```markdown
> **Info:** This is an information box
> **Warning:** This is a warning
> **Danger:** This is a danger notice
```

### Code Examples
```javascript
function example() {
  return "syntax highlighted";
}
```

### Tables
```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

## 🚀 Advanced Usage

### Running on a Different Port
Edit `server.js`:
```javascript
const PORT = 5000; // Change this to any free port
```

### Adding Custom CSS
Edit `viewer.html` and add to the `<style>` section before `</style>`

### Performance Tips
1. The viewer caches content in browser memory
2. Markdown conversion happens on first load
3. Syntax highlighting is done on client-side
4. All animations respect `prefers-reduced-motion`

## 📞 Support

If you encounter issues:
1. Check the console (F12 → Console tab)
2. Verify file paths match your directory structure
3. Ensure all markdown files are valid UTF-8 encoded
4. Check that file extensions are `.md` or `.txt`

## 📄 License

This viewer is provided as-is for personal use.

---

**Happy Reading!** 📚✨
