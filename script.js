let display = document.getElementById('display');

const zero = 0;
const one = 1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;
const seven = 7;
const eight = 8;
const nine = 9;

const division = '/';
const multiplier = '*';
const minus = '-';
const plus = '+';
const equals = '=';

const clearBtn = document.getElementById('clearBtn')
const zeroBtn = document.getElementById('zero');
const oneBtn = document.documentElement('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');

const divisionBtn = document.getElementById('division');
const multiplierBtn = document.getElementById('multiplier');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const equalsBtn = document.getElementById('equals');

let btn = document.querySelectorAll('button');

let operand = undefined;

btn.addEventListener('click', () => {
    display.appendChild('p').textContent = btn.value;
})


