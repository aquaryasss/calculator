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

let operand1;
let operator;
let operand2;

const phone = document.querySelector('#phone');
let sum = add(5, 3);
let difference = subtract(5, 3);
let product = multiply(5, 3);
let quotient = divide(5, 3);
let result = modulo(5, 3);
phone.textContent = result;
