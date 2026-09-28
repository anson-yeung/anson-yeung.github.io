// Mobile nav: toggle via the button; close on link click or click outside
const navBtn = document.querySelector('.nav-toggle');
const nav = document.getElementById('main-nav');

function setNav(open) {
  nav.classList.toggle('show', open);
  navBtn.setAttribute('aria-expanded', open);
  navBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

document.addEventListener('click', (e) => {
  if (navBtn.contains(e.target)) setNav(!nav.classList.contains('show'));
  else if (!nav.contains(e.target) || e.target.closest('a')) setNav(false);
});

// Film page: highlight the section tab for the section currently in view
const tabs = document.querySelectorAll('.section-tab');
if (tabs.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      tabs.forEach((t) => t.classList.toggle('active', t.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('.media-section').forEach((s) => io.observe(s));
}
