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

function operate(op, x, y){
	// calls one of the above functions on the numbers
}

const inputButtons = document.querySelectorAll('.input-button');
const mainDisplay = document.querySelector('#main-display');
let currentInput = "";

function handleKeyboardInput(userInput){ // add operation keys
    const key = userInput.key;
    let button;
    if(key == '.' && currentInput.includes('.'))
        return;
    if(key == '0')
        button = document.querySelector("button[data-key='0']");
    else if(key == '1')
        button = document.querySelector("button[data-key='1']");
    else if(key == '2')
        button = document.querySelector("button[data-key='2']");
    else if(key == '3')
        button = document.querySelector("button[data-key='3']");
    else if(key == '4')
        button = document.querySelector("button[data-key='4']");
    else if(key == '5')
        button = document.querySelector("button[data-key='5']");
    else if(key == '6')
        button = document.querySelector("button[data-key='6']");
    else if(key == '7')
        button = document.querySelector("button[data-key='7']");
    else if(key == '8')
        button = document.querySelector("button[data-key='8']");
    else if(key == '9')
        button = document.querySelector("button[data-key='9']");
    else if(key == '.')
        button = document.querySelector("button[data-key='.']");

    if(button)
        button.click();
}

function appendToDisplay(userInput){
    if(userInput == '.' && currentInput.includes('.'))
        return;
    currentInput += userInput;
    mainDisplay.textContent = currentInput;
}

inputButtons.forEach(input => { // add operation keys
    input.addEventListener('click', () => {
        appendToDisplay(input.textContent);
    });
});

window.addEventListener('keydown', handleKeyboardInput);

/* to fix 
- cant have many dots 
*/ 

