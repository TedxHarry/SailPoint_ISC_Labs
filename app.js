// ============= APP INITIALIZATION =============
const app = {
    currentModule: null,
    modules: {},
    isLoading: false,

    init() {
        this.setupEventListeners();
        this.loadModuleLinks();
        this.handleHashRoute();
        window.addEventListener('hashchange', () => this.handleHashRoute());
    },

    setupEventListeners() {
        // Sidebar toggle
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebar = document.querySelector('.sidebar');
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => {
                sidebar.classList.toggle('open');
            });
        }

        // Close sidebar on link click (mobile)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidebar?.classList.remove('open');
                }
            });
        });

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.filterNavigation(e.target.value));
        }

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    },

    loadModuleLinks() {
        document.querySelectorAll('.nav-link[data-module]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const module = link.getAttribute('data-module');
                this.loadModule(module);
            });
        });
    },

    handleHashRoute() {
        const hash = window.location.hash.slice(1);
        if (hash.startsWith('module-')) {
            const module = hash.replace('module-', '');
            this.loadModule(module);
        } else if (!hash) {
            this.showHero();
        }
    },

    async loadModule(moduleName) {
        if (this.currentModule === moduleName) return;

        const contentArea = document.getElementById('content');
        const hero = document.getElementById('hero');

        if (hero) hero.style.display = 'none';

        // Show loading state
        contentArea.innerHTML = `
            <div class="article-loading">
                <div class="spinner"></div>
                <p>Loading ${moduleName}...</p>
            </div>
        `;

        try {
            // Try different path variations
            const paths = [
                `./${moduleName}.md`,
                `./${moduleName}/${moduleName.split('/').pop()}.md`,
            ];

            let content = null;
            let loadedPath = null;

            for (const path of paths) {
                try {
                    const response = await fetch(path);
                    if (response.ok) {
                        content = await response.text();
                        loadedPath = path;
                        break;
                    }
                } catch (e) {
                    // Try next path
                }
            }

            if (!content) {
                throw new Error(`Module not found: ${moduleName}`);
            }

            this.renderMarkdown(content);
            this.currentModule = moduleName;
            this.updateBreadcrumb(moduleName);
            this.updateActiveLink(moduleName);
            window.location.hash = `module-${moduleName}`;

            // Highlight code blocks
            if (window.hljs) {
                document.querySelectorAll('pre code').forEach(block => {
                    hljs.highlightElement(block);
                });
            }

            // Scroll to top
            window.scrollTo(0, 0);
        } catch (error) {
            this.showError(`Failed to load module: ${error.message}`);
            console.error('Module loading error:', error);
        }
    },

    renderMarkdown(markdown) {
        const contentArea = document.getElementById('content');

        // Configure marked options
        marked.setOptions({
            breaks: true,
            gfm: true,
            pedantic: false,
            headerIds: true,
            mangle: false,
        });

        try {
            const html = marked.parse(markdown);
            contentArea.innerHTML = `<article class="article">${html}</article>`;

            // Add click handlers for links
            contentArea.querySelectorAll('a').forEach(link => {
                const href = link.getAttribute('href');
                if (href && href.endsWith('.md')) {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const module = href.replace('.md', '').replace('./', '');
                        this.loadModule(module);
                    });
                }
            });
        } catch (error) {
            contentArea.innerHTML = `
                <article class="article">
                    <h2>Error Rendering Content</h2>
                    <p>Failed to parse markdown: ${error.message}</p>
                </article>
            `;
        }
    },

    showHero() {
        const contentArea = document.getElementById('content');
        const hero = document.getElementById('hero');

        if (hero) {
            hero.style.display = 'block';
        }
        contentArea.innerHTML = '';
        this.currentModule = null;
        this.updateBreadcrumb(null);
        this.updateActiveLink(null);
    },

    updateBreadcrumb(moduleName) {
        const breadcrumb = document.getElementById('breadcrumb');
        if (!breadcrumb) return;

        if (!moduleName) {
            breadcrumb.innerHTML = '<a href="#" onclick="app.showHero(); return false;">Home</a>';
            return;
        }

        const parts = moduleName.split('/');
        const breadcrumbHTML = [
            '<a href="#" onclick="app.showHero(); return false;">Home</a>',
            ...parts.map((part, index) => {
                const href = parts.slice(0, index + 1).join('/');
                const label = part.replace(/-/g, ' ').replace(/^\d+\./, '');
                return `<span> / </span><a href="#module-${href}">${label}</a>`;
            })
        ].join('');

        breadcrumb.innerHTML = breadcrumbHTML;
    },

    updateActiveLink(moduleName) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (moduleName && link.getAttribute('data-module') === moduleName) {
                link.classList.add('active');
            }
        });
    },

    filterNavigation(query) {
        const normalizedQuery = query.toLowerCase();
        document.querySelectorAll('.nav-link').forEach(link => {
            const text = link.textContent.toLowerCase();
            const module = link.getAttribute('data-module')?.toLowerCase() || '';
            const matches = text.includes(normalizedQuery) || module.includes(normalizedQuery);
            link.parentElement.style.display = matches ? 'block' : 'none';
        });

        // Hide empty sections
        document.querySelectorAll('.nav-section').forEach(section => {
            const hasVisibleLinks = Array.from(section.querySelectorAll('.nav-list li'))
                .some(li => li.style.display !== 'none');
            section.style.display = hasVisibleLinks ? 'block' : 'none';
        });
    },

    toggleTheme() {
        document.documentElement.style.filter =
            document.documentElement.style.filter === 'invert(1)' ? '' : 'invert(1)';
        const icon = document.querySelector('.theme-toggle i');
        if (icon) {
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        }
    },

    showError(message) {
        const contentArea = document.getElementById('content');
        contentArea.innerHTML = `
            <article class="article">
                <h2>⚠️ Error</h2>
                <p>${message}</p>
                <p><a href="#" onclick="app.showHero(); return false;">← Back to Home</a></p>
            </article>
        `;
    },

    showToast(message, duration = 3000) {
        const toast = document.getElementById('toast');
        if (!toast) return;

        toast.textContent = message;
        toast.classList.add('show');
        toast.classList.remove('hide');

        setTimeout(() => {
            toast.classList.remove('show');
            toast.classList.add('hide');
        }, duration);
    }
};

// ============= INITIALIZATION =============
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

// ============= KEYBOARD SHORTCUTS =============
document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.focus();
    }

    // Escape to close sidebar on mobile
    if (e.key === 'Escape') {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar?.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    }
});

// ============= SMOOTH SCROLL FOR ANCHOR LINKS =============
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('#') && !href.startsWith('#module-')) {
            const element = document.querySelector(href);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
});

// ============= RESPONSIVE SIDEBAR HANDLING =============
window.addEventListener('resize', () => {
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth > 768 && sidebar?.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
});

// ============= LOCAL STORAGE FOR USER PREFERENCES =============
const storage = {
    save(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn('Storage error:', e);
        }
    },

    load(key) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (e) {
            console.warn('Storage error:', e);
            return null;
        }
    }
};

// Save current module to resume reading
window.addEventListener('beforeunload', () => {
    if (app.currentModule) {
        storage.save('lastModule', app.currentModule);
    }
});

// Resume last module on page load
window.addEventListener('load', () => {
    const lastModule = storage.load('lastModule');
    if (lastModule && window.location.hash === '') {
        app.loadModule(lastModule);
    }
});
