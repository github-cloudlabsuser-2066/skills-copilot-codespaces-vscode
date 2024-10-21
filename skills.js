function addTwoNumbers(a, b) {
    return a + b;
}


/**
 * Checks if a given number is a prime number.
 *
 * @param {number} num - The number to check for primality.
 * @returns {boolean} - Returns true if the number is prime, otherwise false.
 */
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

/**
 * Finds the smallest 7-digit prime number.
 *
 * This function starts from the smallest 7-digit number (1000000) and increments
 * until it finds a prime number.
 *
 * @returns {number} The smallest 7-digit prime number.
 */
function findSmallest7thDigitPrime() {
    let num = 1000000; // 7-digit numbers start from 1000000
    while (!isPrime(num)) {
        num++;
    }
    return num;
}

console.log(findSmallest7thDigitPrime());



/**
 * Calculates the sum of two numbers.
 *
 * @param {number} var1 - The first number.
 * @param {number} var2 - The second number.
 * @returns {number} The sum of var1 and var2.
 */
function calculateNumbers(var1, var2) {
    // Add your implementation here
    return var1 - var2; // Changed implementation to subtract the numbers
}

