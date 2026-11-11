// Site-level override of the theme's contact-fab.js.
// Same open/close behavior, plus: the button stays hidden while the top of the
// page (which already shows Email and LinkedIn links) is on screen, so it no
// longer covers the "Get in Touch" button on narrow screens.
(function () {
  var fab = document.getElementById('contact-fab');
  var popover = document.getElementById('contact-fab-popover');
  if (!fab || !popover) return;
  var hero = document.getElementById('top');

  function close() {
    popover.classList.remove('open');
    fab.setAttribute('aria-expanded', 'false');
  }

  fab.addEventListener('click', function () {
    if (popover.classList.contains('open')) {
      close();
    } else {
      popover.classList.add('open');
      fab.setAttribute('aria-expanded', 'true');
    }
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!fab.contains(e.target) && !popover.contains(e.target)) close();
  });

  function updateVisibility() {
    var away = hero ? window.scrollY < hero.offsetHeight * 0.6 : false;
    fab.classList.toggle('fab-away', away);
    popover.classList.toggle('fab-away', away);
    fab.tabIndex = away ? -1 : 0;
    fab.setAttribute('aria-hidden', away ? 'true' : 'false');
    if (away) close();
  }

  window.addEventListener('scroll', updateVisibility, { passive: true });
  window.addEventListener('resize', updateVisibility);
  updateVisibility();
})();
