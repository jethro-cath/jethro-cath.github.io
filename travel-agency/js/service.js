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


// Первый экран

const backgroundSwiper = new Swiper('.first-screen .swiper', {
    direction: 'vertical',
    slidesPerView: 1,
    loop: true,
    // rewind: true,
    // height: window.innerHeight,
  
    // If we need pagination
    pagination: {
      el: '.slider-change-pannel__bullet-list',
      bulletElement: 'li',
      bulletClass: 'slider-change-pannel__bullet',
      bulletActiveClass: 'slider-change-pannel__bullet_active',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.bg-down',
      prevEl: '.bg-up',
    },
  });


// Второй экран

const swiperDestinations = new Swiper('.popular-destinations.swiper', {
    slidesPerView: 1,
    loop: true,
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
            rewind: true,
            loop: false,
        },
        1152: {
            slidesPerView: 2.5,
            rewind: true,
            loop: false,
        },
    },
  
});



// Третий экран
const swiperSpecialOffer = new Swiper('.special-offer.swiper', {
    slidesPerView: 1,
    loop: true,
    // loopedSlides: 6,
    spaceBetween: 32,
    // centeredSlides: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.special-offer__slider-arrows .right-arrow',
      prevEl: '.special-offer__slider-arrows .left-arrow',

      enabled: true,
    },

    breakpoints: {
        1152: {
            slidesPerView: 3,
            rewind: true,
            loop: false,
        },
    },
  
});



// Галерея
const swiperGallery = new Swiper('.gallery.swiper', {
    slidesPerView: 1,
    loop: true,
    // loopedSlides: 6,
    spaceBetween: 32,
    // centeredSlides: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.gallery__slider-arrows .right-arrow',
      prevEl: '.gallery__slider-arrows .left-arrow',

      enabled: true,
    },

    breakpoints: {
        1152: {
            slidesPerView: 4,
            rewind: true,
            loop: false,
        },
    },
  
});


// Отзывы
const swiperFeedback = new Swiper('.feedback.swiper', {
    slidesPerView: 1,
    loop: true,
    // loopedSlides: 6,
    spaceBetween: 32,
    // centeredSlides: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.feedback__slider-arrows .right-arrow',
      prevEl: '.feedback__slider-arrows .left-arrow',

      enabled: true,
    },

    breakpoints: {
        1152: {
            slidesPerView: 2.5,
            rewind: true,
            loop: false,
        },
    },
  
});


// Выбор даты

flatpickr("#check-in", {
    altInput: true,
    altFormat: "D, J F Y",
    dateFormat: "Y-m-d",
    minDate: "today",
    defaultDate: "today",
});
flatpickr("#check-out", {
    altInput: true,
    altFormat: "D, J F Y",
    dateFormat: "Y-m-d",
    minDate: new Date().fp_incr(14),
    defaultDate: new Date().fp_incr(14),
});

require("flatpickr/dist/themes/material_orange.css");
