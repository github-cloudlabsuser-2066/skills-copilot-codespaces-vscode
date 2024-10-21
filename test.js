const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

function calculate(operation, a, b) {
    switch (operation) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            throw new Error("Invalid operation.");
    }
}

function promptUser() {
    rl.question('Enter the first number: ', (firstInput) => {
        const a = parseFloat(firstInput);
        rl.question('Enter the operation (+, -, *, /): ', (operation) => {
            rl.question('Enter the second number: ', (secondInput) => {
                const b = parseFloat(secondInput);
                try {
                    const result = calculate(operation, a, b);
                    console.log(`Result: ${result}`);
                } catch (error) {
                    console.error(error.message);
                }
                rl.close();
            });
        });
    });
}

promptUser();