'use strict';

const form = document.querySelector('.head__search');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

const openMenu = document.querySelector('#open');
const menu  = document.querySelector('.menu');
openMenu.addEventListener('click', () => {
  menu.classList.add('menu_open')
});
const closeMenu = document.querySelector('#close');
closeMenu.addEventListener('click', () => {
  menu.classList.remove('menu_open')
});