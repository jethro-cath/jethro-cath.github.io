'use strict';

let tabs = document.querySelectorAll('.side-pannel__tab-title');

for(let tabTitle of tabs) {
    tabTitle.onclick = function() {
        let tabActive = document.querySelector('.tab-title_active');
        tabActive.classList.remove('tab-title_active');
        tabTitle.classList.add('tab-title_active');

        let settingsWindowActive = document.querySelector('.side-pannel_active');
        settingsWindowActive.classList.remove('side-pannel_active');
        let settingsWindowId = tabTitle.dataset.tab;
        let settingsWindow = document.querySelector(settingsWindowId);
        settingsWindow.classList.add('side-pannel_active');
        
    };
}

let colorPresets = document.querySelectorAll('.colors__preset');

for(let colorPreset of colorPresets) {
    colorPreset.style.backgroundColor = colorPreset.dataset.color;
}
