const inputButtons = document.querySelectorAll('.input-button');
const mainDisplay = document.querySelector('#main-display');
const secondaryDisplay = document.querySelector('#secondary-display');
const eraseButton = document.querySelector('#erase');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const timesButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalButton = document.querySelector('#equal');
const moduloButton = document.querySelector('#modulo');
const clearButton = document.querySelector('#clear');
let currentInput = "";
let operand1 = 0;
let operand2 = 0;
let operation;

function add(x, y){
	return x + y;
}

function subtract(x, y){
	return x - y;
}

function multiply(x, y){
	return x * y;
}

function divide(x, y){ // round nearest 4
	return x / y;
}

function modulo(x, y){
	return x % y;
}

function hasLongDecimal(num){
    const output = String(num);
    if(!output.includes('.'))
        return false;
    const decimalPart = output.split('.')[1];
    return decimalPart.length > 5;
}

function operate(x, y){
    x = Number(x);
    y = Number(y);
    let result;
    if(operation == 'addition')
        result = add(x, y);
    else if(operation == 'subtraction')
        result = subtract(x, y);
    else if(operation == 'multiplication')
        result = multiply(x, y);
    else if(operation == 'division'){
        if(operand2 == 0)
            result = "BAWAL 0";
        else
            result = divide(x, y);
    }else if(operation == 'modulo')
        result = modulo(x, y);
    if(hasLongDecimal(result))
        result = result.toFixed(5);
        
    operand1 = result;
    mainDisplay.textContent = result;
    currentInput = "";
}

function handleKeyboardInput(userInput){ // add operation keys
    const key = userInput.key;
    const button = document.querySelector(`button[data-key='${key}']`);
    if(button)
        button.click();
}

function appendToDisplay(userInput){
    if(userInput == '.' && currentInput.includes('.'))
        return;
    currentInput += userInput;
    mainDisplay.textContent = currentInput;
}

function getOperatorSymbol(op) {
    switch(op){
        case 'addition': return '+';
        case 'subtraction': return '-';
        case 'multiplication': return '×';
        case 'division': return '÷';
        case 'modulo': return '%';
    }
}

function setOperation(op){
    if (operation && currentInput === "") {
        operation = op;
        const operatorSymbol = getOperatorSymbol(op);
        secondaryDisplay.textContent = `${operand1} ${operatorSymbol}`;
        return;
    }
    if(operation){
        operand2 = Number(currentInput);
        operate(operand1, operand2);
    }

    operand1 = Number(mainDisplay.textContent);
    currentInput = "";
    operation = op;
    const operatorSymbol = getOperatorSymbol(op);
    secondaryDisplay.textContent = `${operand1} ${operatorSymbol}`;
}

inputButtons.forEach(input => { // add operation keys
    input.addEventListener('click', () => {
        appendToDisplay(input.textContent.trim());
    });
});

eraseButton.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    if(currentInput == "")
        mainDisplay.textContent = "0";
    else 
        mainDisplay.textContent = currentInput;

});

plusButton.addEventListener('click', () => {
    setOperation("addition");
});

minusButton.addEventListener('click', () => {
    setOperation("subtraction");
});

timesButton.addEventListener('click', () => {
    setOperation("multiplication");
});

divideButton.addEventListener('click', () => {
    setOperation("division");
});

moduloButton.addEventListener('click', () => {
    setOperation("modulo");
});

equalButton.addEventListener('click', () => {
    if(!operation || currentInput == "")
        return;
    operand2 = Number(currentInput);
    const operatorSymbol = getOperatorSymbol(operation);
    secondaryDisplay.textContent = `${operand1} ${operatorSymbol} ${operand2}`;
    operate(operand1, operand2);
    operation = null;
});

clearButton.addEventListener('click', () => {
    operand1 = operand2 = 0;
    operation = null;
    currentInput = "";
    result = 0;
    mainDisplay.textContent = "0";
    secondaryDisplay.textContent = "";
});

mainDisplay.textContent = "0";
window.addEventListener('keydown', handleKeyboardInput);


