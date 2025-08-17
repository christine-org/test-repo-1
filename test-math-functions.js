/**
 * Simple test file for math utility functions
 */

const mathUtils = require('./sample.js');
const demonstrateMathFunctions = require('./codegen-check-trigger.js');

// Test basic math operations
console.log('Testing basic math operations:');
console.log(`2 + 3 = ${mathUtils.add(2, 3)}`);
console.log(`4 * 5 = ${mathUtils.multiply(4, 5)}`);
console.log(`10 / 2 = ${mathUtils.divide(10, 2)}`);
console.log(`7 - 3 = ${mathUtils.subtract(7, 3)}`);

// Test advanced math operations
console.log('\nTesting advanced math operations:');
console.log(`GCD of 48 and 18 = ${mathUtils.gcd(48, 18)}`);
console.log(`LCM of 12 and 15 = ${mathUtils.lcm(12, 15)}`);
console.log(`Is 17 prime? ${mathUtils.isPrime(17)}`);
console.log(`Is 20 prime? ${mathUtils.isPrime(20)}`);

// Test the demonstration function
console.log('\nTesting demonstration function:');
const results = demonstrateMathFunctions(12, 8);
console.log(JSON.stringify(results, null, 2));

console.log('\nAll tests completed successfully!');

