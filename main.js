'use strict';
let result;
let previousNum;
let currentNum;
let operation;


const buttons = document.querySelectorAll('.calculator-buttons');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.matches('#button-clear')){
        };
        
        if (e.target.matches('#button-delete')){
            console.log('delete');
        };

        if(e.target.matches('#button-divide')){
            console.log('divide');
        };

        if(e.target.matches('#button-number1')){
            
        };

        if(e.target.matches('#button-number2')){
            console.log('number2');
        };

        if(e.target.matches('#button-number3')){
            console.log('number3');
        };

        if(e.target.matches('#button-multiply')){
            console.log('multiply');
        };

        if(e.target.matches('#button-number4')){
            console.log('number4');
        };

        if(e.target.matches('#button-number5')){
            console.log('number5');
        };

        if(e.target.matches('#button-number6')){
            console.log('number6');
        };

        if(e.target.matches('#button-plus')){
            console.log('plus');
        };

        if(e.target.matches('#button-number7')){
            console.log('number7');
        };

        if(e.target.matches('#button-number8')){
            console.log('number8');
        };

        if(e.target.matches('#button-number9')){
            console.log('number9');
        };

        if(e.target.matches('#button-minus')){
            console.log('minus');
        };

        if(e.target.matches('#button-comma')){
            console.log('comma');
        };

        if(e.target.matches('#button-number0')){
            console.log('number0');
        };

        if(e.target.matches('#button-equal')){
            console.log('equal');
        };
    });
});

function plus(){

}
