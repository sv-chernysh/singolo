const HEADER = document.querySelector('.main-header');
const NAV = document.querySelector('.main-nav');
const PORTFOLIO_LIST = document.querySelector('.portfolio__list');
const PROJECT_FORM = document.querySelector('.project-form');
const SUBMIT = document.querySelector('.project-form__btn');
const MODAL = document.querySelector('.modal');
const MODAL_SUBJECT = document.querySelector('.modal__subject');
const MODAL_DESCRIPTION = document.querySelector('.modal__description');
const MODAL_BTN = document.querySelector('.modal__btn');
const OVERLAY = document.querySelector('.overlay');
const USER_NAME = document.getElementById('user-name');
const USER_EMAIL = document.getElementById('user-email');

// NAV.addEventListener('click', (event) => {
//   let target = event.target;
//   if (target.tagName !== 'A') return;
//   NAV.querySelectorAll('.main-nav__link').forEach(el => el.classList.remove('main-nav__link--active'));
//   target.classList.add('main-nav__link--active');
// });

document.addEventListener('scroll', (event) => {
  const curPosY = window.pageYOffset;
  const anchors = document.querySelectorAll('a.anchor');
  const links = document.querySelectorAll('.main-nav__link');
  
  anchors.forEach((el) => {
    if (el.offsetTop <= curPosY && (el.offsetTop + el.parentElement.offsetHeight) > curPosY) {
      links.forEach((a) => {
        a.classList.remove('main-nav__link--active');
        if (el.getAttribute('id') === a.getAttribute('href').slice(1)) {
          a.classList.add('main-nav__link--active');
        }
      })
    }
  });
});

PORTFOLIO_LIST.addEventListener('click', (event) => {
  let target = event.target;
  if (target.tagName !== 'IMG') return;
  PORTFOLIO_LIST.querySelectorAll('.portfolio__item').forEach(el => el.classList.remove('portfolio__item--active'));
  target.parentElement.classList.add('portfolio__item--active');
});

SUBMIT.addEventListener('click', () => {
  if (USER_NAME.checkValidity() && USER_EMAIL.checkValidity()) {
    const subject = document.getElementById('subject').value.toString() || 'Without subject';
    const description = document.getElementById('project-description').value.toString() || 'Without description';
    MODAL_SUBJECT.textContent = subject;
    MODAL_DESCRIPTION.textContent = description;
    MODAL.classList.add('modal--show');
    OVERLAY.classList.add('overlay--show');
  }
});

MODAL_BTN.addEventListener('click', () => {
  MODAL.classList.remove('modal--show');
  OVERLAY.classList.remove('overlay--show');
  PROJECT_FORM.reset();
});

OVERLAY.addEventListener('click', () => {
  MODAL.classList.remove('modal--show');
  OVERLAY.classList.remove('overlay--show');
  PROJECT_FORM.reset();
});

window.addEventListener('keydown', (event) => {
  if (event.keyCode === 27 && MODAL.classList.contains('modal--show')) {
    MODAL.classList.remove('modal--show');
    OVERLAY.classList.remove('overlay--show');
    PROJECT_FORM.reset();
  }
});

PROJECT_FORM.addEventListener('submit', (event) => event.preventDefault());