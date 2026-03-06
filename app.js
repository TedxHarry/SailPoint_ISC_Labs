// ============= APP INITIALIZATION =============
const app = {
    currentModule: null,
    modules: {},
    isLoading: false,
    basePath: (() => {
        // Detect base path for GitHub Pages or local development
        const pathname = window.location.pathname;
        if (pathname.includes('/SailPoint_ISC_Labs/')) {
            return '/SailPoint_ISC_Labs';
        }
        return '';
    })(),

    init() {
        this.setupDOM();
        this.setupEventListeners();
        this.loadModuleLinks();
        this.handleHashRoute();
        window.addEventListener('hashchange', () => this.handleHashRoute());
        console.log('✨ SailPoint ISC Labs loaded! Base path:', this.basePath);
    },

    setupDOM() {
        // Ensure essential elements exist
        if (!document.getElementById('readerWrapper')) {
            console.error('❌ Reader wrapper not found!');
        }
    },

    setupEventListeners() {
        // Menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const closeSidebar = document.getElementById('closeSidebar');
        const sidebar = document.getElementById('sidebar');

        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                sidebar?.classList.toggle('open');
            });
        }

        if (closeSidebar) {
            closeSidebar.addEventListener('click', () => {
                sidebar?.classList.remove('open');
            });
        }

        // Close sidebar on link click
        document.querySelectorAll('.module-link').forEach(link => {
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
            searchInput.addEventListener('focus', () => {
                this.showToast('Type to search modules...');
            });
        }

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                searchInput?.focus();
            }
            if (e.key === 'Escape') {
                sidebar?.classList.remove('open');
            }
        });
    },

    loadModuleLinks() {
        document.querySelectorAll('.module-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const module = link.getAttribute('data-module');
                if (module) {
                    this.loadModule(module);
                }
            });
        });
    },

    handleHashRoute() {
        const hash = window.location.hash.slice(1);
        if (hash.startsWith('module-')) {
            const module = hash.replace('module-', '');
            this.loadModule(module);
        }
    },

    async loadModule(moduleName) {
        if (this.currentModule === moduleName) return;

        const readerWrapper = document.getElementById('readerWrapper');
        const hero = document.getElementById('hero');

        if (!readerWrapper) {
            console.error('❌ Reader wrapper not found!');
            return;
        }

        // Hide hero
        if (hero) hero.style.display = 'none';

        // Show loading state
        readerWrapper.innerHTML = `
            <div style="text-align: center; padding: 60px 20px;">
                <div style="display: inline-block; width: 50px; height: 50px; border: 3px solid rgba(99, 102, 241, 0.2); border-top-color: #6366f1; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                <p style="color: #cbd5e1; margin-top: 20px; font-size: 16px;">Loading ${this.escapeHtml(moduleName)}...</p>
            </div>
            <style>
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            </style>
        `;

        try {
            // Try different path variations with base path
            const paths = [
                `${this.basePath}/${moduleName}.md`,
                `${this.basePath}/${moduleName}/${moduleName.split('/').pop()}.md`,
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
            this.showToast('✨ Content loaded!');
        } catch (error) {
            this.showError(`Failed to load module: ${error.message}`);
            console.error('Module loading error:', error);
        }
    },

    renderMarkdown(markdown) {
        const readerWrapper = document.getElementById('readerWrapper');

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
            readerWrapper.innerHTML = `<article class="article">${html}</article>`;

            // Add click handlers for links
            readerWrapper.querySelectorAll('a').forEach(link => {
                const href = link.getAttribute('href');
                if (href && href.endsWith('.md')) {
                    link.style.cursor = 'pointer';
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const module = href.replace('.md', '').replace('./', '');
                        this.loadModule(module);
                    });
                }
            });

            // Add animation to images
            readerWrapper.querySelectorAll('img').forEach(img => {
                img.style.borderRadius = '12px';
                img.style.marginTop = '20px';
                img.style.marginBottom = '20px';
                img.style.maxWidth = '100%';
                img.style.height = 'auto';
            });
        } catch (error) {
            readerWrapper.innerHTML = `
                <article class="article">
                    <h2 style="color: #ef4444;">⚠️ Error Rendering Content</h2>
                    <p style="color: #cbd5e1;">Failed to parse markdown: ${this.escapeHtml(error.message)}</p>
                </article>
            `;
        }
    },

    updateActiveLink(moduleName) {
        document.querySelectorAll('.module-link').forEach(link => {
            link.classList.remove('active');
            if (moduleName && link.getAttribute('data-module') === moduleName) {
                link.classList.add('active');
            }
        });
    },

    filterNavigation(query) {
        const normalizedQuery = query.toLowerCase();
        let visibleSections = 0;

        document.querySelectorAll('.module-section').forEach(section => {
            let hasVisibleLinks = false;

            section.querySelectorAll('.module-link').forEach(link => {
                const text = link.textContent.toLowerCase();
                const module = link.getAttribute('data-module')?.toLowerCase() || '';
                const matches = text.includes(normalizedQuery) || module.includes(normalizedQuery);

                if (matches) {
                    link.parentElement.style.display = 'block';
                    hasVisibleLinks = true;
                } else {
                    link.parentElement.style.display = 'none';
                }
            });

            section.style.display = hasVisibleLinks ? 'block' : 'none';
            if (hasVisibleLinks) visibleSections++;
        });

        if (visibleSections === 0 && query) {
            this.showToast('No modules found matching your search');
        }
    },

    toggleTheme() {
        document.documentElement.style.filter =
            document.documentElement.style.filter === 'invert(1)' ? '' : 'invert(1)';
        const icon = document.querySelector('.theme-btn i');
        if (icon) {
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        }
        this.showToast('Theme toggled!');
    },

    showError(message) {
        const readerWrapper = document.getElementById('readerWrapper');
        const hero = document.getElementById('hero');
        if (hero) hero.style.display = 'none';

        readerWrapper.innerHTML = `
            <article class="article">
                <h2 style="color: #ef4444;">⚠️ Error</h2>
                <p style="color: #cbd5e1;">${this.escapeHtml(message)}</p>
                <p><a href="#" id="backToHome" style="color: #6366f1;">← Back to Home</a></p>
            </article>
        `;

        // Add event listener for back link
        const backLink = document.getElementById('backToHome');
        if (backLink) {
            backLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.hash = '';
                if (hero) hero.style.display = 'block';
                readerWrapper.innerHTML = '';
            });
        }
    },

    showToast(message) {
        const toast = document.getElementById('toast');
        if (!toast) return;

        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    },

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
};

// ============= INITIALIZATION =============
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

// ============= LOCAL STORAGE FOR PREFERENCES =============
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

// Resume last module
window.addEventListener('beforeunload', () => {
    if (app.currentModule) {
        storage.save('lastModule', app.currentModule);
    }
});

// Check if page is taking too long to load
setTimeout(() => {
    if (!app.currentModule && window.location.hash === '') {
        console.log('✨ Ready! Click a module from the sidebar to get started.');
    }
}, 100);
