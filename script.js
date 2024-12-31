let currentInput = '';
let currentOperator = null;
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    currentOperator = null;
    document.getElementById('result').value = '';
}

function operator(op) {
    if (currentInput === '') return;

    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (currentOperator) {
        firstOperand = calculateResult(firstOperand, currentInput);
    }

    currentOperator = op;
    currentInput = '';
}

function calculateResult() {
    if (currentInput === '') return;

    if (firstOperand !== null && currentOperator) {
        let result;
        switch (currentOperator) {
            case '+':
                result = firstOperand + parseFloat(currentInput);
                break;
            case '-':
                result = firstOperand - parseFloat(currentInput);
                break;
            case '*':
                result = firstOperand * parseFloat(currentInput);
                break;
            case '/':
                result = firstOperand / parseFloat(currentInput);
                break;
        }
        document.getElementById('result').value = result;
        firstOperand = result;
        currentOperator = null;
        currentInput = '';
    }
}
