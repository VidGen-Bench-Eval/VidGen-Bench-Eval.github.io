document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigationLinks = document.querySelector('#nav-links');
const closeMenu = () => {
  navigationLinks.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
};
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigationLinks.classList.toggle('is-open', !expanded);
});
navigationLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 1241px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});
