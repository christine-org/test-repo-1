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
  // Input validation with more descriptive error messages
  if (typeof num !== 'number') {
    throw new TypeError('Input must be a number');
  }
  
  if (!Number.isInteger(num)) {
    throw new TypeError('Factorial is only defined for integers');
  }
  
  if (num < 0) {
    throw new RangeError('Factorial is only defined for non-negative integers');
  }
  
  // Handle base cases
  if (num === 0 || num === 1) {
    return 1;
  }
  
  // Use memoization for better performance with repeated calls
  if (!factorial.cache) {
    factorial.cache = new Map();
  }
  
  // Check if we've already calculated this factorial
  if (factorial.cache.has(num)) {
    return factorial.cache.get(num);
  }
  
  // For small numbers, use iterative approach
  if (num <= 20) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    
    // Cache the result before returning
    factorial.cache.set(num, result);
    return result;
  }
  
  // For larger numbers, use recursive approach with memoization
  // Note: JavaScript has precision limitations for very large numbers
  const result = num * factorial(num - 1);
  factorial.cache.set(num, result);
  return result;
}

module.exports = {
  add,
  multiply,
  subtract,
  divide,
  power,
  squareRoot,
  absolute,
  factorial
};
