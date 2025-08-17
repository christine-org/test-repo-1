/**
 * Math Utility Functions
 * 
 * This file contains utility functions for mathematical operations.
 */

/**
 * Calculates the Greatest Common Divisor (GCD) of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The GCD of a and b
 */
function GCD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  
  // Ensure inputs are integers
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('GCD is only defined for integers');
  }
  
  // GCD(0, 0) is undefined, but we'll return 0 for this case
  if (a === 0 && b === 0) {
    return 0;
  }
  
  // GCD(a, 0) = |a|
  if (b === 0) {
    return a;
  }
  
  // Euclidean algorithm
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  
  return a;
}

/**
 * Calculates the Least Common Multiple (LCM) of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The LCM of a and b
 */
function LCM(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  
  // Ensure inputs are integers
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('LCM is only defined for integers');
  }
  
  // LCM(0, 0) is undefined, but we'll return 0 for this case
  if (a === 0 && b === 0) {
    return 0;
  }
  
  // LCM(a, 0) = 0
  if (a === 0 || b === 0) {
    return 0;
  }
  
  // LCM(a, b) = |a * b| / GCD(a, b)
  return (a * b) / GCD(a, b);
}

/**
 * Checks if a number is prime
 * @param {number} num - The number to check
 * @returns {boolean} True if the number is prime, false otherwise
 */
function isPrime(num) {
  // Ensure input is an integer
  if (!Number.isInteger(num)) {
    throw new Error('isPrime is only defined for integers');
  }
  
  // Numbers less than 2 are not prime
  if (num < 2) {
    return false;
  }
  
  // 2 and 3 are prime
  if (num <= 3) {
    return true;
  }
  
  // Numbers divisible by 2 or 3 are not prime
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  
  // Check divisibility by numbers of form 6k ± 1 up to sqrt(num)
  const sqrtNum = Math.sqrt(num);
  for (let i = 5; i <= sqrtNum; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  
  return true;
}

module.exports = {
  GCD,
  LCM,
  isPrime
};

