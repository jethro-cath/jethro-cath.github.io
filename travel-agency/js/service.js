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





const swiper = new Swiper('.popular-destinations.swiper', {
    slidesPerView: 1,
    rewind: true,
    // loop: true,
    // loopedSlides: 6,
    spaceBetween: 32,
    // centeredSlides: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.popular-destinations__slider-arrows .right-arrow',
      prevEl: '.popular-destinations__slider-arrows .left-arrow',

      enabled: true,
    },

    breakpoints: {
        1441: {
            slidesPerView: 3,
        },
        1152: {
            slidesPerView: 2.5,
        },
        // 1024: {
        //     slidesPerView: 2.1,
        // }
    },
  
});