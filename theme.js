(function () {
  const KEY = 'theme-pref';
  const root = document.documentElement;

  // Apply saved theme before first paint to prevent flash
  if (localStorage.getItem(KEY) === 'dark') {
    root.setAttribute('data-theme', 'dark');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    function sync() {
      btn.setAttribute('aria-pressed', String(root.getAttribute('data-theme') === 'dark'));
    }
    sync();

    btn.addEventListener('click', function () {
      const isDark = root.getAttribute('data-theme') === 'dark';
      if (isDark) {
        root.removeAttribute('data-theme');
        localStorage.setItem(KEY, 'light');
      } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem(KEY, 'dark');
      }
      sync();
    });
  });
}());
