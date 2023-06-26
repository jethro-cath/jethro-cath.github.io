'use strict';

const burgerButton = document.querySelector('.page-header__burger');
const closeButton = document.querySelector('.page-header__close');
const headerMenu = document.querySelector('.page-header');
const hero = document.querySelector('.hero');

burgerButton.onclick = function() {
    headerMenu.classList.add('page-header-mobile');
    hero.classList.add('hero_when-burger-opened');
}

closeButton.onclick = function() {
    headerMenu.classList.remove('page-header-mobile');
    hero.classList.remove('hero_when-burger-opened');
};

// let bookingForm = document.querySelector('.hero__booking-form');
// let container = getComputedStyle(document.querySelector('.hero__title'));
// let padding = 0;

// function paddingChanger() {
//     let num1 = container.marginLeft;
//     console.log(num1);
//     let num2 = container.paddingLeft;
//     padding = parseInt(num1) + parseInt(num2);
//     bookingForm.style.paddingLeft = padding + 'px';
// }

// paddingChanger();
// window.addEventListener("resize", paddingChanger);