'use strict';

let calcWindow = document.querySelector('.calc-window');
let numberButtons = document.querySelectorAll('.numbers-keyboard__button');
let operatorButtons = document.querySelectorAll('.operators__small-button');
let result = document.querySelector('.operators__result');
let num1 = null;
let num2 = null;
let operator = null;

for(let numberButton of numberButtons) {
    numberButton.onclick = function() {
        if(calcWindow.textContent === 'Ошибка!') {
            calcWindow.textContent = numberButton.dataset.value;
            
        };

        if(calcWindow.textContent === '0') {
            if(numberButton.dataset.value === '0') {
                calcWindow.textContent = numberButton.dataset.value;
            } else if (numberButton.dataset.value === '.') {
                calcWindow.textContent = calcWindow.textContent + numberButton.dataset.value;
            }
            else {
            calcWindow.textContent = '';
            calcWindow.textContent = calcWindow.textContent + numberButton.dataset.value;
            } 
        } else {
            calcWindow.textContent = calcWindow.textContent + numberButton.dataset.value;
        };

        if(typeof(num1) === 'number') {
            if(num2 === null) {
                num2 = numberButton.dataset.value;
            } else if(typeof(num2) === 'number') {
                num2 = num2;
            }
            else {
                num2 = num2 + numberButton.dataset.value;
            };
        };

        if(num1 === null) {
            num1 = numberButton.dataset.value;
        } else if(typeof(num1) === 'number') {
            num1 = num1;
        }
        else {
            num1 = num1 + numberButton.dataset.value;
        };        
    }
};

for(let operatorButton of operatorButtons) {
    operatorButton.onclick = function() {
        num1 = Number(num1);
        operator = operatorButton.dataset.value;
        calcWindow.textContent = calcWindow.textContent + operatorButton.dataset.value;
    };
};

result.onclick = function() {
    num2 = Number(num2);
    console.log(num1);
    console.log(num2);
    if(operator === '+') {
        calcWindow.textContent = num1 + num2;
    } else if (operator === '-') {
        calcWindow.textContent = num1 - num2;
    } else if (operator === '*') {
        calcWindow.textContent = num1 * num2;
    } else if (operator === '/') {
        if(num2 !== 0) {
            calcWindow.textContent = num1 / num2;
        } else {
            calcWindow.textContent = 'Ошибка!';
            num1 = null;
            num2 = null;  
        }
    } else {
        calcWindow.textContent = 'Ошибка!';
        num1 = null;
        num2 = null;
    }
    num1 = calcWindow.textContent;
    num2 = null;
};

let clear = document.querySelector('.clear');
clear.onclick = function() {
    calcWindow.textContent = 0;
    num1 = null;
    num2 = null;
}
