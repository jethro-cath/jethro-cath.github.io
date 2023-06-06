'use strict';

const openButton = document.querySelector('.side-pannel__open-button');
const openButtonIcon = document.querySelector('.open-button__icon');
const sidePannel = document.querySelector('.side-pannel__content');
const sidePannelTab = document.querySelector('.side-pannel__tab');
const tabTitles = document.querySelector('.side-pannel__tabs');
const sliders = document.querySelector('.canvas__sliders');
const canvasData = document.querySelector('.canvas__confirm-data');
const colorsSettings = document.querySelector('.colors__settings');
const eraserButton = document.querySelector('.eraser');
const eraserButtonText = document.querySelector('.eraser__text');


let buttonStatus = 'closed';

openButton.onclick = function() {
    if(buttonStatus === 'closed') {
        sidePannel.classList.add('side-pannel__content_shown');
        sidePannelTab.classList.add('side-pannel__tab_shown');
        openButtonIcon.classList.add('open-button__icon_opened');
        tabTitles.classList.remove('mobiles_minimized');
        sliders.classList.remove('mobiles_minimized');
        canvasData.classList.remove('mobiles_minimized');
        colorsSettings.classList.add('colors__settings_opened');
        eraserButton.classList.add('eraser__opened');
        eraserButtonText.classList.remove('eraser__minimized');
        buttonStatus = 'opened';
    } else {
        sidePannel.classList.remove('side-pannel__content_shown');
        sidePannelTab.classList.remove('side-pannel__tab_shown');
        openButtonIcon.classList.remove('open-button__icon_opened');
        tabTitles.classList.add('mobiles_minimized');
        sliders.classList.add('mobiles_minimized');
        canvasData.classList.add('mobiles_minimized');
        colorsSettings.classList.remove('colors__settings_opened');
        eraserButton.classList.remove('eraser__opened');
        eraserButtonText.classList.add('eraser__minimized');
        buttonStatus = 'closed';
    }
};