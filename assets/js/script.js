'use strict'

const toggleFunc = (elem) => { elem.classList.toggle('active'); }

const menu_burger = document.querySelector('.header__mobile-menu');

menu_burger.addEventListener('click', function() {
  toggleFunc(menu_burger);
});