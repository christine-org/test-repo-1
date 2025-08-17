/**
 * This file is created specifically to trigger the codegen-sh-staging check.
 * It contains a simple JavaScript function that uses the math utility functions.
 */

const mathUtils = require('./sample.js');

/**
 * Demonstrates the use of the math utility functions
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {object} Results of various math operations
 */
function demonstrateMathFunctions(a, b) {
  return {
    sum: mathUtils.add(a, b),
    product: mathUtils.multiply(a, b),
    quotient: mathUtils.divide(a, b),
    difference: mathUtils.subtract(a, b),
    power: mathUtils.power(a, b),
    gcd: mathUtils.gcd(a, b),
    lcm: mathUtils.lcm(a, b),
    isPrimeA: mathUtils.isPrime(a),
    isPrimeB: mathUtils.isPrime(b)
  };
}

// Export the demonstration function
module.exports = demonstrateMathFunctions;

