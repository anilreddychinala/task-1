// Function to calculate factorial iteratively
function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function to calculate factorial recursively
function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

// Function to validate input and calculate factorial
function calculateFactorial(method) {
    const input = document.getElementById('number').value;
    const number = parseInt(input);

    // Clear previous error message
    document.getElementById('error-message').innerHTML = "";

    // Check for valid positive integer input
    if (isNaN(number) || number < 0) {
        document.getElementById('error-message').innerHTML = "Please enter a valid positive integer.";
        document.getElementById('result').innerHTML = "";
        return;
    }

    let result;
    if (method === 'iterative') {
        result = factorialIterative(number);
    } else {
        result = factorialRecursive(number);
    }

    document.getElementById('result').innerHTML = Factorial of ${number} (${method} method) is: ${result};
}