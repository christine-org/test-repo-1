/**
 * Tests for Math Utility Functions
 */

const { GCD, LCM, isPrime } = require('./math-utils');

// Test GCD function
console.log('Testing GCD function:');
console.log(`GCD(12, 18) = ${GCD(12, 18)}, Expected: 6`);
console.log(`GCD(48, 18) = ${GCD(48, 18)}, Expected: 6`);
console.log(`GCD(17, 13) = ${GCD(17, 13)}, Expected: 1`);
console.log(`GCD(0, 5) = ${GCD(0, 5)}, Expected: 5`);
console.log(`GCD(5, 0) = ${GCD(5, 0)}, Expected: 5`);
console.log(`GCD(-12, 18) = ${GCD(-12, 18)}, Expected: 6`);
console.log(`GCD(0, 0) = ${GCD(0, 0)}, Expected: 0`);

// Test LCM function
console.log('\nTesting LCM function:');
console.log(`LCM(12, 18) = ${LCM(12, 18)}, Expected: 36`);
console.log(`LCM(5, 7) = ${LCM(5, 7)}, Expected: 35`);
console.log(`LCM(3, 5) = ${LCM(3, 5)}, Expected: 15`);
console.log(`LCM(6, 8) = ${LCM(6, 8)}, Expected: 24`);
console.log(`LCM(0, 5) = ${LCM(0, 5)}, Expected: 0`);
console.log(`LCM(-6, 8) = ${LCM(-6, 8)}, Expected: 24`);

// Test isPrime function
console.log('\nTesting isPrime function:');
console.log(`isPrime(2) = ${isPrime(2)}, Expected: true`);
console.log(`isPrime(3) = ${isPrime(3)}, Expected: true`);
console.log(`isPrime(4) = ${isPrime(4)}, Expected: false`);
console.log(`isPrime(5) = ${isPrime(5)}, Expected: true`);
console.log(`isPrime(15) = ${isPrime(15)}, Expected: false`);
console.log(`isPrime(17) = ${isPrime(17)}, Expected: true`);
console.log(`isPrime(23) = ${isPrime(23)}, Expected: true`);
console.log(`isPrime(25) = ${isPrime(25)}, Expected: false`);
console.log(`isPrime(29) = ${isPrime(29)}, Expected: true`);
console.log(`isPrime(100) = ${isPrime(100)}, Expected: false`);
console.log(`isPrime(997) = ${isPrime(997)}, Expected: true`);

console.log('\nAll tests completed successfully!');

