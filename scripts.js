const calculator = document.querySelector('.calculator-container');

const display = document.querySelector('.results');

function getToDisplay() {
    if (display.innerText === '0') {
        display.innerText = event.target.innerText;
    } else {
        display.innerText = display.innerText + event.target.innerText;
    }
}

function deleteFromDisplay() {
    if (display.innerText.length > 1 && display.innerText !== '1') {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = 0;
    }
}

function clearDisplay() {
    display.innerText = 0;
}

function initialCalc() {
    total += parseInt(display.innerText);
    operator = event.target.innerText;
}

function secondaryCalc() {
    total = parseInt(display.innerText);
    operator = event.target.innerText;
}

var total = 0;
var operator = '';

calculator.addEventListener('click', function(event) {
    if (!isNaN(parseInt(event.target.innerText))) {
        getToDisplay();
    } else if (event.target.innerText === '←') {
        deleteFromDisplay();
    } else if (event.target.innerText === 'C') {
        clearDisplay();
        total = 0;
    } else if (event.target.innerText === '+') {
        if (total === 0) {
            // total += parseInt(display.innerText);
            // operator = event.target.innerText;
            initialCalc();
            clearDisplay();
            console.log(total);
        } else if (display.innerText !== '0') {
            // total = parseInt(display.innerText);
            // operator = event.target.innerText;
            secondaryCalc();
            clearDisplay();
        }
    } else if (event.target.innerText === '−') {
        if (total === 0) {
            initialCalc();
            clearDisplay();
        } else if (display.innerText !== '0') {
            secondaryCalc();
            clearDisplay();
        }
    } else if (event.target.innerText === '×') {
        if (total === 0) {
            initialCalc();
            clearDisplay();
        } else if (display.innerText !== '0') {
            secondaryCalc();
            clearDisplay();
        }
    } else if (event.target.innerText === '÷') {
        if (total === 0) {
            initialCalc();
            clearDisplay();
        } else if (display.innerText !== '0') {
            secondaryCalc();
            clearDisplay();
        }
    } else if (event.target.innerText === '=') {
        if (operator === '+') {
            display.innerText = total + parseInt(display.innerText);
            operator = '';
        } else if (operator === '−') {
            display.innerText = total - parseInt(display.innerText);
            operator = '';
        } else if (operator == '×') {
            display.innerText = total * parseInt(display.innerText);
            operator = '';
        } else if (operator === '÷') {
            display.innerText = total / parseInt(display.innerText);
            operator = '';
        }
    }
});
