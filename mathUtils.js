/**
 * Advanced Math Utilities
 * 
 * This file contains additional mathematical utility functions.
 */

/**
 * Calculates the square of a number
 * @param {number} x - The number to square
 * @returns {number} The square of x
 */
function square(x) {
  return x * x;
}

/**
 * Calculates the cube of a number
 * @param {number} x - The number to cube
 * @returns {number} The cube of x
 */
function cube(x) {
  return x * x * x;
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
 * @param {number} x - The number to find the square root of
 * @returns {number} The square root of x
 * @throws {Error} If x is negative
 */
function squareRoot(x) {
  if (x < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(x);
}

/**
 * Calculates the absolute value of a number
 * @param {number} x - The number to find the absolute value of
 * @returns {number} The absolute value of x
 */
function absolute(x) {
  return Math.abs(x);
}

module.exports = {
  square,
  cube,
  power,
  squareRoot,
  absolute
};

