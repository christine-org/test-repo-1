/**
 * Test file for the factorial function
 * 
 * This file demonstrates the improved factorial function with:
 * - Better error handling
 * - Performance optimizations
 * - Memoization for repeated calls
 */

const mathUtils = require('./sample.js');

// Basic functionality tests
console.log('Basic functionality:');
console.log(`factorial(0) = ${mathUtils.factorial(0)}`);  // 1
console.log(`factorial(1) = ${mathUtils.factorial(1)}`);  // 1
console.log(`factorial(5) = ${mathUtils.factorial(5)}`);  // 120
console.log(`factorial(10) = ${mathUtils.factorial(10)}`); // 3628800

// Performance test with memoization
console.log('\nPerformance test with memoization:');
console.time('First call');
const result1 = mathUtils.factorial(20);
console.timeEnd('First call');

console.time('Second call (should be faster due to memoization)');
const result2 = mathUtils.factorial(20);
console.timeEnd('Second call (should be faster due to memoization)');

console.log(`factorial(20) = ${result1}`);

// Error handling demonstration
console.log('\nError handling:');
try {
  mathUtils.factorial(-1);
} catch (error) {
  console.log(`Error for negative input: ${error.message}`);
}

try {
  mathUtils.factorial(3.5);
} catch (error) {
  console.log(`Error for non-integer input: ${error.message}`);
}

try {
  mathUtils.factorial('5');
} catch (error) {
  console.log(`Error for non-number input: ${error.message}`);
}

console.log('\nLarge number handling:');
console.log(`factorial(21) = ${mathUtils.factorial(21)}`);

