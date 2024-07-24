let display = document.getElementById('display');

const clearBtn = document.getElementById('clearBtn')
const decimalBtn = document.getElementById('decimal');
const zeroBtn = document.getElementById('zero');
const oneBtn = document.getElementById('one');
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
const subtractionBtn = document.getElementById('subtraction');
const plusBtn = document.getElementById('plus');
const equalsBtn = document.getElementById('equals');

oneBtn.addEventListener('click', () => {
    display.value += '1';
});
twoBtn.addEventListener('click', () => {
    display.value += '2';
});
threeBtn.addEventListener('click', () => {
    display.value += '3';
});
fourBtn.addEventListener('click', () => {
    display.value += '4';
});
fiveBtn.addEventListener('click', () => {
    display.value += '5';
});
sixBtn.addEventListener('click', () => {
    display.value += '6';
});
sevenBtn.addEventListener('click', () => {
    display.value += '7';
});
eightBtn.addEventListener('click', () => {
    display.value += '8';
});
nineBtn.addEventListener('click', () => {
    display.value += '9';
});
zeroBtn.addEventListener('click', () => {
    display.value += '0';
});

equalsBtn.addEventListener('click', () => {
    display.value = eval(display.value);
});
plusBtn.addEventListener('click', () => {
    display.value += '+';
});
subtractionBtn.addEventListener('click', () => {
    display.value += '-';
});
divisionBtn.addEventListener('click', () => {
    display.value += '/';
});
multiplierBtn.addEventListener('click', () => {
    display.value += '*';
});
decimalBtn.addEventListener('click', () => {
    display.value += '.';
});
clearBtn.addEventListener('click', () => {
    display.value = '';
});



