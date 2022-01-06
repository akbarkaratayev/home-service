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
const body = document.querySelector('body');
burger.addEventListener('click', ()=>{
  menuCheckbox.checked = !menuCheckbox.checked;
  if (menuCheckbox.checked) {
    nav.classList.add('active');
    body.style.overflowY = 'hidden';
    burger.classList.add('active');
  } else {
    nav.classList.remove('active');
    body.style.overflowY = 'scroll';
    burger.classList.remove('active');
  }
});

let links = document.querySelectorAll(".menu_link");
links.forEach(item=>{
  item.addEventListener('click', ()=>{
    nav.classList.remove('active');
    body.style.overflowY = 'scroll';
    burger.classList.remove('active');
  })
})
