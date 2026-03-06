const express = require('express');
const fs = require('fs');
const path = require('path');
const marked = require('marked');

const app = express();
const PORT = 3000;

// Configure marked for better rendering
marked.setOptions({
  breaks: true,
  gfm: true,
});

// Serve static files
app.use(express.static(__dirname));

// API endpoint to get markdown content
app.get('/api/content/*', (req, res) => {
  let filePath = req.params[0];

  // Try different extensions
  const extensions = ['.md', '.txt', ''];
  let fullPath = null;

  for (const ext of extensions) {
    const candidate = path.join(__dirname, filePath + ext);
    if (fs.existsSync(candidate)) {
      fullPath = candidate;
      break;
    }
  }

  if (!fullPath) {
    return res.status(404).json({ error: 'File not found' });
  }

  try {
    const markdown = fs.readFileSync(fullPath, 'utf8');
    const html = marked.parse(markdown);
    const words = markdown.split(/\s+/).length;
    const readingTime = Math.ceil(words / 200);

    res.json({
      title: path.basename(filePath),
      html,
      words,
      readingTime,
      lastUpdated: fs.statSync(fullPath).mtime.toLocaleDateString(),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API endpoint to list all files
app.get('/api/files', (req, res) => {
  const files = [];

  function scanDirectory(dir, prefix = '') {
    try {
      const items = fs.readdirSync(dir);

      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory() && !item.startsWith('.')) {
          scanDirectory(fullPath, prefix + item + '/');
        } else if ((item.endsWith('.md') || item.endsWith('.txt')) && !item.startsWith('.')) {
          files.push({
            title: item.replace(/\.(md|txt)$/, '').replace(/-/g, ' ').replace(/^\d+\-/, ''),
            path: (prefix + item).replace(/\\/g, '/'),
            category: prefix.split('/')[0] || 'Root',
            fullPath: (prefix + item),
          });
        }
      });
    } catch (err) {
      console.error(`Error scanning ${dir}:`, err.message);
    }
  }

  scanDirectory(__dirname);

  // Sort by category then by title
  files.sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return a.title.localeCompare(b.title);
  });

  res.json(files);
});

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║   📚 SailPoint ISC Labs - Document Viewer                 ║
║                                                            ║
║   Server running at: http://localhost:${PORT}              ║
║                                                            ║
║   Open your browser and navigate to the URL above         ║
║                                                            ║
║   Press Ctrl+C to stop the server                         ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
  `);
});
