'use strict';

let xValue = 5;
let yValue = 5;

let line = document.querySelector('.painting-space');
let column = document.querySelector('.line');

let currentColor = 'white';

let colors = document.querySelectorAll('.colors__preset');

for(let color of colors) { 
    color.onclick = function() {
        currentColor = color.dataset.color;
    };
}

let eraser = document.querySelector('.eraser');

eraser.onclick = function() {
    currentColor = 'white';
}

function painting() {
    let canvas = document.querySelectorAll('.square');

    for(let pixel of canvas) {
        pixel.onclick = function() {
            pixel.style.backgroundColor = currentColor;
            console.log(currentColor);
        };
    }
}

function generateCanvas() {
    for(let i = 1; i <= yValue; i++) {
        let newLine = document.createElement('div');
        newLine.classList.add('line');
        painting();
        line.append(newLine);

        for(let j = 1; j <= xValue; j++) {
            let newSquare = document.createElement('div');
            newSquare.classList.add('square');
            painting();
            newLine.append(newSquare);
        }
    }
}

function clearCanvas() {
    let lineForDelete = document.querySelector('.line');
    while(lineForDelete) {
        lineForDelete.remove();
        lineForDelete = document.querySelector('.line');

        if (!lineForDelete) {
            break;
        }
    }
}

generateCanvas();

let canvasPresetsButtons = document.querySelectorAll('.presets__button');
let canvasSize = document.querySelector('.canvas__value');

for(let canvasPresetButton of canvasPresetsButtons) {
    canvasPresetButton.onclick = function() {
        xValue = canvasPresetButton.dataset.horizontal;
        yValue = canvasPresetButton.dataset.vertical;
        canvasSize.textContent = xValue + 'x' + yValue;

        clearCanvas();
        generateCanvas();

        horizontalSlider.value = xValue;
        verticalSlider.value = yValue;
    };
}

let horizontalSlider = document.getElementById('horizontal');
let verticalSlider = document.getElementById('vertical');

horizontalSlider.oninput = function() {
    xValue = horizontalSlider.value;
    canvasSize.textContent = xValue + 'x' + yValue;
    clearCanvas();
    generateCanvas();
};

verticalSlider.oninput = function() {
    yValue = verticalSlider.value;
    canvasSize.textContent = xValue + 'x' + yValue;
    clearCanvas();
    generateCanvas();
};

let generateButton = document.querySelector('.canvas__confirm-button');

// generateButton.onclick = function() {
//     clearCanvas();
//     generateCanvas();
// };





