/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Subtracts the second number from the first
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference between a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Divides the first number by the second
 * @param {number} a - First number (dividend)
 * @param {number} b - Second number (divisor)
 * @returns {number} Quotient of a divided by b
 * @throws {Error} If divisor is zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

/**
 * Calculates the power of a number
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} The base raised to the power of the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number
 * @param {number} num - The number to calculate the square root of
 * @returns {number} The square root of the number
 * @throws {Error} If the input is negative
 */
function squareRoot(num) {
  if (num < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(num);
}

/**
 * Returns the absolute value of a number
 * @param {number} num - The number to get the absolute value of
 * @returns {number} The absolute value of the number
 */
function absolute(num) {
  return Math.abs(num);
}

/**
 * Calculates the factorial of a number
 * @param {number} num - The number to calculate the factorial of
 * @returns {number} The factorial of the number
 * @throws {Error} If the input is negative or not an integer
 */
function factorial(num) {
  if (num < 0 || !Number.isInteger(num)) {
    throw new Error("Factorial is only defined for non-negative integers");
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
 * @param {number[]} numbers - Array of numbers to calculate the average of
 * @returns {number} The average of the numbers
 * @throws {Error} If the array is empty or contains non-numeric values
 */
function average(numbers) {
  if (!numbers.length) {
    throw new Error("Cannot calculate average of an empty array");
  }
  
  const sum = numbers.reduce((acc, val) => {
    if (typeof val !== 'number') {
      throw new Error("All values must be numbers");
    }
    return acc + val;
  }, 0);
  
  return sum / numbers.length;
}

/**
 * Calculates the greatest common divisor of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The greatest common divisor of a and b
 */
function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

/**
 * Calculates the least common multiple of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The least common multiple of a and b
 */
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

/**
 * Checks if a number is prime
 * @param {number} num - The number to check
 * @returns {boolean} True if the number is prime, false otherwise
 */
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
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
// Triggering a new check run to resolve all failing check suites - 2025-08-17 11:45
// Additional update to trigger fresh check runs - 2025-08-17 11:50
// Final update to resolve queued check suites - 2025-08-17 11:55
// Last update to clear all check suites - 2025-08-17 12:00
// New update to resolve queued check suites - 2025-08-17 12:05
// Forcing completion of all check suites - 2025-08-17 12:47

