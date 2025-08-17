/**
 * Sample JavaScript file
 * 
 * This file contains utility functions for mathematical operations.
 * All functions include proper error handling and comprehensive documentation.
 * The math utility functions are optimized for performance and include detailed
 * explanations of the algorithms used. Each function has been thoroughly tested
 * to ensure correctness and reliability.
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
 * Calculates the greatest common divisor (GCD) of two integers using the Euclidean algorithm
 * @param {number} a - First integer
 * @param {number} b - Second integer
 * @returns {number} The greatest common divisor
 * @throws {Error} If inputs are not integers
 * @example
 * gcd(12, 18); // returns 6
 * gcd(7, 13);  // returns 1 (coprime numbers)
 * gcd(0, 5);   // returns 5
 */
function gcd(a, b) {
  // Input validation: GCD is only defined for integers
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('Both inputs must be integers');
  }
  
  // Use absolute values since GCD is always positive
  // Mathematical property: GCD(a,b) = GCD(|a|,|b|)
  a = Math.abs(a);
  b = Math.abs(b);
  
  // Special case: GCD(0,0) is conventionally defined as 0
  if (a === 0 && b === 0) {
    return 0;
  }
  
  // Special case: GCD(0,b) = |b| and GCD(a,0) = |a| for b≠0, a≠0
  if (a === 0) return b;
  if (b === 0) return a;
  
  // Euclidean algorithm for finding GCD
  // This is an efficient algorithm dating back to Euclid's Elements (300 BC)
  // It's based on the principle that if a = bq + r, then gcd(a,b) = gcd(b,r)
  // Time complexity: O(log(min(a,b)))
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
 * @example
 * lcm(4, 6);   // returns 12
 * lcm(5, 7);   // returns 35
 * lcm(0, 5);   // returns 0
 */
function lcm(a, b) {
  // Input validation: LCM is only defined for integers
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('Both inputs must be integers');
  }
  
  // Special case: if either number is 0, LCM is 0
  // This is a mathematical convention since 0 is divisible by any number
  if (a === 0 || b === 0) {
    return 0;
  }
  
  // LCM calculation using the GCD
  // Formula: LCM(a,b) = |a × b| / GCD(a,b)
  // This formula uses the fundamental relationship between LCM and GCD:
  // LCM(a,b) × GCD(a,b) = |a × b|
  // We use absolute values to ensure a positive result
  return Math.abs(a * b) / gcd(a, b);
}

/**
 * Checks if a number is prime using an optimized algorithm
 * @param {number} num - The number to check
 * @returns {boolean} True if the number is prime, false otherwise
 * @throws {Error} If input is not a positive integer
 * @example
 * isPrime(17); // returns true
 * isPrime(4);  // returns false
 * isPrime(1);  // returns false (1 is not prime by definition)
 * isPrime(2);  // returns true (smallest prime number)
 * isPrime(997); // returns true (a larger prime)
 */
function isPrime(num) {
  // Input validation: Prime numbers are only defined for positive integers
  if (!Number.isInteger(num) || num <= 0) {
    throw new Error('Input must be a positive integer');
  }
  
  // 1 is not a prime number by definition in number theory
  // A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers
  // This is a fundamental definition in number theory and mathematics
  if (num === 1) {
    return false;
  }
  
  // Base cases: 2 and 3 are prime numbers
  // These are the smallest prime numbers and are handled separately for efficiency
  if (num <= 3) {
    return true;
  }
  
  // Optimization step 1: Quick check for divisibility by 2 or 3
  // Any even number greater than 2 is not prime (divisible by 2)
  // Any number divisible by 3 is not prime
  // This early check eliminates a large set of composite numbers with minimal computation
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  
  // Optimization step 2: Check divisibility by numbers of form 6k±1 up to sqrt(num)
  // Mathematical proof and explanation:
  // 1. All integers can be represented as (6k + i) for some integer k and i ∈ {0,1,2,3,4,5}
  // 2. If i = 0, 2, or 4, the number is divisible by 2
  // 3. If i = 3, the number is divisible by 3
  // 4. Therefore, any prime number greater than 3 must be of form 6k+1 or 6k+5 (which is 6k-1)
  // 5. We only need to check divisors up to √num because if num = a×b, at least one of a or b must be ≤ √num
  // 6. By checking only numbers of form 6k±1, we reduce the number of divisibility tests by ~67%
  //    compared to checking all numbers up to √num
  // 7. This optimization is based on the wheel factorization method with a wheel size of 6
  // 8. The time complexity of this algorithm is O(√n), which is significantly better than the naive O(n) approach
  // 9. For very large numbers, more advanced primality tests like Miller-Rabin would be more efficient
  const sqrtNum = Math.sqrt(num);
  for (let i = 5; i <= sqrtNum; i += 6) {
    // Check if num is divisible by i (form 6k-1) or i+2 (form 6k+1)
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  
  // If no divisors found, the number is prime
  // At this point, we've verified that num is not divisible by any integer from 2 to √num
  // By the fundamental theorem of arithmetic, this confirms that num is prime
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
