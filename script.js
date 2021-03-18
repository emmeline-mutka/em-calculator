let numbers = document.getElementsByClassName('numbers');
let signs = document.getElementsByClassName('signs');
let result = document.getElementById('result');
let resultsList = document.getElementById('results')
let firstInput = true;

for(let i=0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', numberListener);
}

for(let i=0; i < signs.length; i++) {
    signs[i].addEventListener('click', signListener);
}

function signListener() {
    if(this.innerText == '=') {
       calculate();
    } else {
        display(this.innerText);
    }
}

function numberListener() {
    display(this.innerText);
}

function display(value) {
    if(firstInput) {
        result.innerText = '';
        firstInput = false;
    }
    result.innerText += value;
}

function calculate() {
   let res = eval(result.innerText);
   display('=' + res);
   firstInput = true;
   displayResults(result.innerText);
}

function displayResults(value) {
    let listItem = document.createElement('div');
    listItem.innerText = value;
    resultsList.appendChild(listItem);
}