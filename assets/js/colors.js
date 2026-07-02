const link = document.getElementById('css-theme-link');
const theme = localStorage.getItem('cherri_theme') ?? 'default';

function getThemeHref(themeName) {
    if (!themeName || themeName === 'default') {
        return '/assets/css/colors.css';
    }

    return `/assets/css/themes/${themeName}.css`;
}

function applyThemeStylesheet(themeName) {
    if (!link) return;

    link.href = getThemeHref(themeName);
}

function setSiteTheme(themeName) {
    const nextTheme = themeName || 'default';
    localStorage.setItem('cherri_theme', nextTheme);
    applyThemeStylesheet(nextTheme);
}

function toggleSiteTheme() {
    const currentTheme = localStorage.getItem('cherri_theme') ?? 'default';
    const nextTheme = currentTheme === 'black' ? 'default' : 'black';
    setSiteTheme(nextTheme);
    return nextTheme;
}

window.applyThemeStylesheet = applyThemeStylesheet;
window.setSiteTheme = setSiteTheme;
window.toggleSiteTheme = toggleSiteTheme;

applyThemeStylesheet(theme);