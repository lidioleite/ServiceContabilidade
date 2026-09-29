const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  menuToggle.setAttribute('aria-label', isExpanded ? 'Abrir menu' : 'Fechar menu');
  mobileMenu.hidden = isExpanded;
});

mobileMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  });
});

document.getElementById('current-year').textContent = new Date().getFullYear();
