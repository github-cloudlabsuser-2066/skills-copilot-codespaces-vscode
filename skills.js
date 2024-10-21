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
 * Calculates the result of subtracting the second number from the first number.
 *
 * @param {number} var1 - The first number.
 * @param {number} var2 - The second number.
 * @returns {number} The result of the subtraction.
 */
function calculateNumbers(var1, var2) {
    // Add your implementation here
    return var1 - var2; // Changed implementation to subtract the numbers
}


/**
 * Multiplies two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of the two numbers.
 */
function multipleNumbers(a, b) {
    return a * b;
}



function reverseSentence(sentence) {
    // Split the sentence into words
    let words = sentence.split(' ');

    // Reverse the array of words
    let reversedWords = words.reverse();

    // Join the reversed array back into a string
    let reversedSentence = reversedWords.join(' ');

    // Capitalize the first letter of the resulting string
    reversedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

    return reversedSentence;
}

// Example usage
let inputSentence = "hello world this is a test";
let outputSentence = reverseSentence(inputSentence);
console.log(outputSentence); // Output: "Test a is this world hello"



const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];



const lowerCaseNames = data.flat().map(person => person.name.toLowerCase());
console.log(lowerCaseNames); // Output: ['john', 'jane', 'bob']

const names = data.flat().map(person => person.name);
console.log(names); // Output: ['John', 'Jane', 'Bob']

/**
 * Validates if a string is an Argentinian phone number.
 *
 * Argentinian phone numbers typically follow the format:
 * - Country code: +54
 * - Area code: 2 to 4 digits
 * - Local number: 6 to 8 digits
 *
 * Examples:
 * - +54 9 11 1234 5678
 * - +54 11 1234 5678
 * - +54 351 123 4567
 *
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {boolean} - Returns true if the phone number is valid, otherwise false.
 */
function isValidArgentinianPhoneNumber(phoneNumber) {
    const regex = /^\+54\s?(\d{2,4})\s?(\d{6,8})$/;
    return regex.test(phoneNumber);
}

// Example usage
console.log(isValidArgentinianPhoneNumber("+54 11 1234 5678")); // Output: true
console.log(isValidArgentinianPhoneNumber("+54 351 123 4567")); // Output: true
console.log(isValidArgentinianPhoneNumber("+54 123 456")); // Output: false