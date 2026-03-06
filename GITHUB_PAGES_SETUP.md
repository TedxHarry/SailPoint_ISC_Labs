# 🚀 GitHub Pages - The Simplest Setup

You want the **easiest possible way** to read all your files? Here's what to do:

## Step 1: Push to GitHub

Make sure your project is on GitHub. If not:

```bash
git add .
git commit -m "Add document viewer"
git push
```

## Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** (top right)
3. Scroll down to **Pages** section
4. Select **Deploy from a branch**
5. Choose branch: **main**
6. Choose folder: **/ (root)**
7. Click **Save**

GitHub will show: `Your site is published at https://yourusername.github.io/SailPoint_ISC_Labs/`

## Step 3: Click the Link

That's it! Visit that URL and your viewer automatically loads! 📚

---

## ✅ What You Get

Your GitHub Pages will automatically:
- ✅ Display as a beautiful dark-themed website
- ✅ Show all your markdown files
- ✅ Navigate smoothly with sidebar
- ✅ Highlight code with colors
- ✅ Show reading time & word count
- ✅ Work on mobile & desktop
- ✅ No server needed!

---

## 📝 Add More Files to Viewer

The simple viewer displays these files:
- README.md
- GLOSSARY.md
- PRACTICE-EXAM-QUESTIONS.md
- PROJECT-SUMMARY.md

To add more files, edit the `FILE_LIST` array in `index.html`. Search for:

```javascript
const FILE_LIST = [
    { title: 'README', path: 'README.md', category: 'Start' },
    { title: 'Glossary', path: 'GLOSSARY.md', category: 'Reference' },
    // ADD MORE HERE:
    { title: 'Unit 1', path: 'UNIT-1-FUNDAMENTALS/1.1-what-is-identity-management.md', category: 'Fundamentals' },
];
```

Then push to GitHub:
```bash
git add index.html
git commit -m "Add more files to viewer"
git push
```

The changes appear on GitHub Pages within seconds! ⚡

---

## 🎨 Customize the Viewer

The viewer is styled with **dark theme** by default. To customize colors, edit the CSS variables in `index.html`:

```css
:root {
    --bg: #0F172A;           /* Dark blue background */
    --accent: #22C55E;       /* Green accent */
    --accent2: #3B82F6;      /* Blue accent */
    --accent3: #8B5CF6;      /* Purple accent */
    --text: #F8FAFC;         /* Light text */
}
```

---

## 🆚 Comparison

| Feature | GitHub Pages | Node.js Server |
|---------|--------------|-----------------|
| Setup Time | 30 seconds | 5 minutes |
| Cost | FREE | FREE |
| Server Needed | NO | YES |
| Always Online | YES | Local only |
| Share Link | Shareable URL | localhost:3000 |
| Others Can Read | YES | NO |

---

## 🎉 Done!

Your documentation is now live on the internet! Share the GitHub Pages URL with anyone and they can read all your materials with the beautiful viewer.

**Enjoy!** 📚✨
