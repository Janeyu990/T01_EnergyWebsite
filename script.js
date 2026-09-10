// Page-switching logic — swaps which <section class="page"> is visible
// and keeps the nav in sync with which page is active.

function showPage(pageName) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(function (page) {
    if (page.dataset.page === pageName) {
      page.hidden = false;
    } else {
      page.hidden = true;
    }
  });

  const links = document.querySelectorAll('.nav-link');
  links.forEach(function (link) {
    if (link.dataset.page === pageName) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  // Keep the URL hash in sync so a page refresh / shared link lands
  // on the right section, without a full page reload.
  history.replaceState(null, '', '#' + pageName);

  // Move focus to the new content for keyboard/screen-reader users.
  const activePage = document.getElementById('page-' + pageName);
  if (activePage) {
    activePage.setAttribute('tabindex', '-1');
    activePage.focus();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Nav link clicks
  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      showPage(link.dataset.page);
    });
  });

  // Logo click always returns to home
  document.getElementById('logoBtn').addEventListener('click', function () {
    showPage('home');
  });

  // Footer year, set automatically so it never goes stale
  document.getElementById('footerYear').textContent = new Date().getFullYear();

  // Land on whichever page the URL hash points to, defaulting to home
  const startPage = window.location.hash.replace('#', '') || 'home';
  const validPages = ['home', 'televisions', 'about'];
  showPage(validPages.includes(startPage) ? startPage : 'home');
});
