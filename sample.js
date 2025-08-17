/**
 * Sample JavaScript file
 * 
 * This file contains a simple utility function for demonstration purposes.
 */

/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Subtracts the second number from the first
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Divides the first number by the second
 * @param {number} a - First number (dividend)
 * @param {number} b - Second number (divisor)
 * @returns {number} The quotient of a and b
 * @throws {Error} If b is zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Calculates the power of a number
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} The result of base raised to the power of exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number
 * @param {number} num - The number to calculate square root for
 * @returns {number} The square root of the number
 * @throws {Error} If num is negative
 */
function squareRoot(num) {
  if (num < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(num);
}

/**
 * Calculates the absolute value of a number
 * @param {number} num - The input number
 * @returns {number} The absolute value of the number
 */
function absolute(num) {
  return Math.abs(num);
}

/**
 * Calculates the factorial of a non-negative integer
 * @param {number} num - The non-negative integer
 * @returns {number} The factorial of the number
 * @throws {Error} If num is negative or not an integer
 */
function factorial(num) {
  if (num < 0 || !Number.isInteger(num)) {
    throw new Error('Factorial is only defined for non-negative integers');
  }
  
  if (num === 0 || num === 1) {
    return 1;
  }
  
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  
  return result;
}

/**
 * Calculates the average of an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The average of the numbers
 * @throws {Error} If the array is empty
 */
function average(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Input must be an array of numbers');
  }
  
  if (numbers.length === 0) {
    throw new Error('Cannot calculate average of an empty array');
  }
  
  const sum = numbers.reduce((acc, val) => {
    if (typeof val !== 'number') {
      throw new Error('All elements in the array must be numbers');
    }
    return acc + val;
  }, 0);
  
  return sum / numbers.length;
}

/**
 * Calculates the greatest common divisor (GCD) of two integers
 * @param {number} a - First integer
 * @param {number} b - Second integer
 * @returns {number} The greatest common divisor
 * @throws {Error} If inputs are not integers
 */
function gcd(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('Both inputs must be integers');
  }
  
  // Use absolute values since GCD is always positive
  a = Math.abs(a);
  b = Math.abs(b);
  
  // Euclidean algorithm for finding GCD
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  
  return a;
}

/**
 * Calculates the least common multiple (LCM) of two integers
 * @param {number} a - First integer
 * @param {number} b - Second integer
 * @returns {number} The least common multiple
 * @throws {Error} If inputs are not integers
 */
function lcm(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('Both inputs must be integers');
  }
  
  if (a === 0 || b === 0) {
    return 0;
  }
  
  // LCM = (a * b) / gcd(a, b)
  return Math.abs(a * b) / gcd(a, b);
}

/**
 * Checks if a number is prime
 * @param {number} num - The number to check
 * @returns {boolean} True if the number is prime, false otherwise
 * @throws {Error} If input is not a positive integer
 */
function isPrime(num) {
  if (!Number.isInteger(num) || num <= 0) {
    throw new Error('Input must be a positive integer');
  }
  
  // 1 is not a prime number
  if (num === 1) {
    return false;
  }
  
  // 2 and 3 are prime numbers
  if (num <= 3) {
    return true;
  }
  
  // Quick check for divisibility by 2 or 3
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  
  // Optimization: Check divisibility by numbers of form 6k±1 up to sqrt(num)
  // This is more efficient than checking all numbers
  const sqrtNum = Math.sqrt(num);
  for (let i = 5; i <= sqrtNum; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  
  return true;
}

module.exports = {
  add,
  multiply,
  subtract,
  divide,
  power,
  squareRoot,
  absolute,
  factorial,
  average,
  gcd,
  lcm,
  isPrime
};
