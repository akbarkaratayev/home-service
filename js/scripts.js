'use strict';
const navContainer = document.querySelector('.header__nav-container');
document.addEventListener('scroll', () => {
  if(document.querySelector('html').scrollTop>=100){
    navContainer.classList.add('darken')
  } else {
    navContainer.classList.remove('darken')
  }
});
const burger = document.querySelector('.burger');
const menuCheckbox = document.querySelector('#menu');
const nav = document.querySelector('.nav')
burger.addEventListener('click', ()=>{
  menuCheckbox.checked = !menuCheckbox.checked;
  if (menuCheckbox.checked) {
    nav.classList.add('active');
    burger.classList.add('active');
  } else {
    nav.classList.remove('active');
    burger.classList.remove('active');
  }
})
