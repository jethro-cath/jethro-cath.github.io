'use strict';

let bookingForm = document.querySelector('.hero__booking-form');
let container = getComputedStyle(document.querySelector('.hero__title'));
let padding = 0;

function paddingChanger() {
    let num1 = container.marginLeft;
    console.log(num1);
    let num2 = container.paddingLeft;
    padding = parseInt(num1) + parseInt(num2);
    bookingForm.style.paddingLeft = padding + 'px';
}

paddingChanger();
window.addEventListener("resize", paddingChanger);
// window.onresize = paddingChanger();