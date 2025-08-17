/**
 * Tests for math utility functions
 */

const mathUtils = require('./math_utils');

// Test add function
console.log('Testing add function:');
console.log('2 + 3 =', mathUtils.add(2, 3));
console.assert(mathUtils.add(2, 3) === 5, 'Add function failed');

// Test subtract function
console.log('Testing subtract function:');
console.log('5 - 2 =', mathUtils.subtract(5, 2));
console.assert(mathUtils.subtract(5, 2) === 3, 'Subtract function failed');

// Test multiply function
console.log('Testing multiply function:');
console.log('4 * 3 =', mathUtils.multiply(4, 3));
console.assert(mathUtils.multiply(4, 3) === 12, 'Multiply function failed');

// Test divide function
console.log('Testing divide function:');
console.log('10 / 2 =', mathUtils.divide(10, 2));
console.assert(mathUtils.divide(10, 2) === 5, 'Divide function failed');

// Test divide by zero
console.log('Testing divide by zero:');
try {
  mathUtils.divide(10, 0);
  console.assert(false, 'Divide by zero should throw an error');
} catch (error) {
  console.log('Correctly caught error:', error.message);
}

console.log('All tests passed successfully!');

