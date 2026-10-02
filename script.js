let currentInput = "0";
let previousInput = "";
let operator = "";

const display = document.getElementById("display");
const previousDisplay = document.getElementById("previous-display");

function updateDisplay() {
    display.value = currentInput;
    previousDisplay.textContent = previousInput + (operator ? " " + operator : "");
}

function appendNumber(number) {

    if (number === "." && currentInput.includes(".")) {
        return;
    }

    if (currentInput === "0" && number !== ".") {
        currentInput = number;
    } else {
        currentInput += number;
    }

    updateDisplay();
}

function chooseOperator(selectedOperator) {

    if (currentInput === "") {
        return;
    }

    if (previousInput !== "") {
        calculate();
    }

    previousInput = currentInput;
    operator = selectedOperator;
    currentInput = "";

    updateDisplay();
}

function calculate() {

    if (previousInput === "" || currentInput === "" || operator === "") {
        return;
    }

    const firstNumber = parseFloat(previousInput);
    const secondNumber = parseFloat(currentInput);

    let result;

    switch (operator) {

        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "/":
            if (secondNumber === 0) {
                currentInput = "Error";
                previousInput = "";
                operator = "";
                updateDisplay();
                return;
            }

            result = firstNumber / secondNumber;
            break;

        case "%":
            result = firstNumber % secondNumber;
            break;
    }

    currentInput = String(result);
    previousInput = "";
    operator = "";

    updateDisplay();
}

function clearDisplay() {

    currentInput = "0";
    previousInput = "";
    operator = "";

    updateDisplay();
}

function deleteLast() {

    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = "0";
    }

    updateDisplay();
}

updateDisplay();