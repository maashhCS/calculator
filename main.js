'use strict';
let result = "";
let previousNum = "";
let currentNum = "";
const currentNumArr = [];
let operation = "";
let minusPressed = false;

const buttons = document.querySelectorAll('.calculator-buttons');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.matches('#button-clear')){
            clear();
        }
        
        if (e.target.matches('#button-delete')){
            deleteCurrentNum();
        }

        if(e.target.matches('#button-divide')){
            if(currentNumArr.length === 0){
                return;
            } else if(currentNumArr[0] === "-" && minusPressed){
                return;
            } else if(currentNum !== "" && previousNum !== ""){
                equal();
            } else{
                operation = '÷';
                previousNum = currentNum;
                updateTopScreen();
            }
        }

        if(e.target.matches('#button-number1')){
            currentNumArr.push('1');
            updateScreen();
        }

        if(e.target.matches('#button-number2')){
            currentNumArr.push('2');
            updateScreen();
        }

        if(e.target.matches('#button-number3')){
            currentNumArr.push('3');
            updateScreen();
        }

        if(e.target.matches('#button-multiply')){
            if(currentNumArr.length === 0){
                return;
            } else if(currentNumArr[0] === "-" && minusPressed){
                return;
            } else if(currentNum !== "" && previousNum !== ""){
                equal();
            } else{
                operation = '*';
                previousNum = currentNum;
                updateTopScreen();
            }
        }

        if(e.target.matches('#button-number4')){
            currentNumArr.push('4');
            updateScreen();
        }

        if(e.target.matches('#button-number5')){
            currentNumArr.push('5');
            updateScreen();
            minusPressed = false;
        }

        if(e.target.matches('#button-number6')){
            currentNumArr.push('6');
            updateScreen();
            minusPressed = false;
        }

        if(e.target.matches('#button-plus')){
            if(currentNumArr.length === 0){
                return;
            } else if(currentNumArr[0] === "-" && minusPressed){
                return;
            } else if(currentNum !== "" && previousNum !== ""){
                equal();
            } else{
                operation = '+';
                previousNum = currentNum;
                updateTopScreen();
            }
        }

        if(e.target.matches('#button-number7')){
            currentNumArr.push('7');
            updateScreen();
            minusPressed = false;
        }

        if(e.target.matches('#button-number8')){
            currentNumArr.push('8');
            updateScreen();
            minusPressed = false;
        }

        if(e.target.matches('#button-number9')){
            currentNumArr.push('9');
            updateScreen();
            minusPressed = false;
        }

        if(e.target.matches('#button-minus')){
            if(currentNumArr.length === 0){
                currentNumArr.push('-');
                updateScreen();
                minusPressed = true;
            } else if(minusPressed){
                return;
            } else if(currentNum !== '' && previousNum !== ''){
                equal();
                    minusPressed = false;
            } else if(currentNum !== ''){
                operation = '-';
                previousNum = currentNum;
                updateTopScreen()
                minusPressed = false;
            } else{
                operation = '-';
                previousNum = currentNum;
                updateTopScreen()
                minusPressed = false;
            }
        }

        if(e.target.matches('#button-comma')){
            if(currentNumArr.indexOf('.') === -1){
                currentNumArr.push('.');
                updateScreen();
            } else{
                return;
            }
        }

        if(e.target.matches('#button-number0')){
            currentNumArr.push('0');
            updateScreen();
            minusPressed = false;
        }

        if(e.target.matches('#button-equal')){
            equal();
        }
    })
})

function plus(num1, num2){
    result = round(num1 + num2, 10);
}

function minus(num1, num2){
    result = round(num1 - num2, 10);
}

function multiply(num1, num2){
    result = round(num1 * num2, 10);
}

function divide(num1, num2){
    if(num2 === 0){
        result = 80085;
    } else{
        result = round(num1 / num2, 10);
    }
}

function updateTopScreen(){
    deleteCurrentNum();
    topText.innerText = `${previousNum}${operation}`;
    bottomText.innerText = "⠀";
}

function updateScreen(){
    currentNum = currentNumArr.join('')
    bottomText.innerText = `${currentNum}`;
}

function updateResultScreen(){
    bottomText.innerText = `${currentNum}`;
    topText.innerText = "";
}

const bottomText = document.querySelector('#text-bottom');
const topText = document.querySelector('#text-top');
function clear(){
    result = "";
    previousNum = "";
    currentNum = "";
    currentNumArr.splice(0, currentNumArr.length);
    operation = "";
    topText.innerText = "⠀";
    bottomText.innerText = "⠀";
}

function deleteCurrentNum(){
    currentNum = "";
    currentNumArr.splice(0, currentNumArr.length);
    bottomText.innerText = "⠀";

}

function equal(){
    currentNum = parseFloat(currentNum);
    previousNum = parseFloat(previousNum);
    if(operation === "+"){
        plus(currentNum, previousNum);
    } else if (operation === "-"){
        minus(previousNum, currentNum);
    } else if (operation === "*"){
        multiply(currentNum, previousNum);
    } else if (operation === "÷"){
        divide(previousNum, currentNum);
    }
    currentNum = result;
    currentNumArr.splice(0, currentNumArr.length);
    currentNumArr.push(result);
    previousNum = "";
    updateResultScreen();
}

const round = (number, decimalPlaces) => {
    const factorOfTen = Math.pow(10, decimalPlaces)
    return Math.round(number * factorOfTen) / factorOfTen
  }