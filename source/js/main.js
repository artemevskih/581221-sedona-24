const button = document.querySelector('.main-nav__button');
const menu = document.querySelector('.main-nav__list');
button.addEventListener('click', function() {
  menu.classList.toggle('main-nav__list--close');
  button.classList.toggle('main-nav__button--close');
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 767) {
    if (!menu.classList.contains('main-nav__list--close')) {
      menu.classList.add('main-nav__list--close');
    };
    if (button.classList.contains('main-nav__button--close')) {
      button.classList.remove('main-nav__button--close');
    };
  };
});
