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
const eraseButton = document.querySelector('#erase');
let currentInput = "";

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



window.addEventListener('keydown', handleKeyboardInput);

/* to fix 
- cant have many dots 
*/ 

