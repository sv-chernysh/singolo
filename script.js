const HEADER = document.querySelector('.main-header');
const NAV = document.querySelector('.main-nav');

NAV.addEventListener('click', (event) => {
  let target = event.target;
  if (target.tagName !== 'A') return;
  NAV.querySelectorAll('.main-nav__link').forEach(el => el.classList.remove('main-nav__link--active'));
  target.classList.add('main-nav__link--active');
});