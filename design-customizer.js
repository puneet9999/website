/* ============================================================
   CUSTOM DESIGN SETTINGS LOADER
   Applied from Admin Panel
   ============================================================ */

(function() {
    // Load design settings from localStorage
    function loadDesignSettings() {
        const settings = localStorage.getItem('designSettings');
        if (settings) {
            const config = JSON.parse(settings);
            applyDesignSettings(config);
        }

        // Load individual settings if they exist
        const homepageBg = localStorage.getItem('homepageBgColor');
        const pagesBg = localStorage.getItem('pagesBgColor');
        const opacity = localStorage.getItem('bgOpacity');
        const homeAlign = localStorage.getItem('homepageTextAlign');
        const pageAlign = localStorage.getItem('pagesTextAlign');
        const headingAlign = localStorage.getItem('headingAlign');

        if (homepageBg || pagesBg || opacity || homeAlign || pageAlign || headingAlign) {
            applyBackgroundAndAlignment({
                homepageBg: homepageBg || '#ffffff',
                pagesBg: pagesBg || '#f8f8f8',
                opacity: opacity || '1',
                homeAlign: homeAlign || 'center',
                pageAlign: pageAlign || 'left',
                headingAlign: headingAlign || 'center'
            });
        }
    }

    function applyDesignSettings(config) {
        if (!config) return;

        // Apply colors to CSS variables
        if (config.colors) {
            const root = document.documentElement;
            root.style.setProperty('--primary-dark', config.colors.primary);
            root.style.setProperty('--accent-orange', config.colors.accent);
            root.style.setProperty('--bg-light', config.colors.bg);
            root.style.setProperty('--text-secondary', config.colors.textSecond);
        }

        // Apply background settings
        if (config.background && config.applyTo) {
            if (config.applyTo.homepage) {
                document.body.style.backgroundColor = config.background.homepage;
                document.body.style.opacity = config.background.opacity;
            }
        }

        // Apply text alignment settings
        if (config.alignment && config.applyTo) {
            if (config.applyTo.homepage) {
                document.body.style.textAlign = config.alignment.homepage;
                const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
                headings.forEach(h => {
                    h.style.textAlign = config.alignment.heading;
                });
            }

            if (config.applyTo.projectPages) {
                const projectContent = document.querySelector('.project-content');
                if (projectContent) {
                    projectContent.style.textAlign = config.alignment.pages;
                }
            }

            if (config.applyTo.propertyPages) {
                const propertyContent = document.querySelector('.property-content');
                if (propertyContent) {
                    propertyContent.style.textAlign = config.alignment.pages;
                }
            }

            if (config.applyTo.otherPages) {
                const mainContent = document.querySelector('main');
                if (mainContent) {
                    mainContent.style.textAlign = config.alignment.pages;
                }
            }
        }
    }

    function applyBackgroundAndAlignment(settings) {
        // Create or update style tag
        let styleTag = document.getElementById('custom-design-styles');
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = 'custom-design-styles';
            document.head.appendChild(styleTag);
        }

        const css = `
            body {
                background-color: ${settings.homepageBg} !important;
                opacity: ${settings.opacity};
                text-align: ${settings.homeAlign} !important;
            }

            h1, h2, h3, h4, h5, h6 {
                text-align: ${settings.headingAlign} !important;
            }

            .project-content,
            .property-content,
            main p {
                text-align: ${settings.pageAlign} !important;
            }

            .hero-content,
            .section-header {
                text-align: center !important;
            }

            .about-text,
            .project-details {
                text-align: ${settings.pageAlign} !important;
            }
        `;

        styleTag.innerHTML = css;
    }

    // Load settings when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadDesignSettings);
    } else {
        loadDesignSettings();
    }
})();
