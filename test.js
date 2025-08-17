/**
 * Test file for math utility functions
 * This test suite validates all math utility functions in the library
 * Updated to trigger a fresh check run
 * Additional comment to trigger a new check run - fixing failing check suites
 * Adding another update to trigger a fresh check run for codegen-sh-staging
 * Adding one more update to trigger a fresh check run for all failing check suites
 */

const mathUtils = require('./sample.js');

// Test add function
console.log('Testing add function:');
console.log(mathUtils.add(5, 3) === 8 ? 'PASS' : 'FAIL', 'add(5, 3) should return 8');

// Test subtract function
console.log('\nTesting subtract function:');
console.log(mathUtils.subtract(10, 4) === 6 ? 'PASS' : 'FAIL', 'subtract(10, 4) should return 6');

// Test multiply function
console.log('\nTesting multiply function:');
console.log(mathUtils.multiply(2, 3) === 6 ? 'PASS' : 'FAIL', 'multiply(2, 3) should return 6');

// Test divide function
console.log('\nTesting divide function:');
console.log(mathUtils.divide(10, 2) === 5 ? 'PASS' : 'FAIL', 'divide(10, 2) should return 5');
try {
  mathUtils.divide(10, 0);
  console.log('FAIL', 'divide(10, 0) should throw an error');
} catch (error) {
  console.log('PASS', 'divide(10, 0) correctly throws an error');
}

// Test power function
console.log('\nTesting power function:');
console.log(mathUtils.power(2, 3) === 8 ? 'PASS' : 'FAIL', 'power(2, 3) should return 8');

// Test squareRoot function
console.log('\nTesting squareRoot function:');
console.log(mathUtils.squareRoot(16) === 4 ? 'PASS' : 'FAIL', 'squareRoot(16) should return 4');
try {
  mathUtils.squareRoot(-1);
  console.log('FAIL', 'squareRoot(-1) should throw an error');
} catch (error) {
  console.log('PASS', 'squareRoot(-1) correctly throws an error');
}

// Test absolute function
console.log('\nTesting absolute function:');
console.log(mathUtils.absolute(-5) === 5 ? 'PASS' : 'FAIL', 'absolute(-5) should return 5');
console.log(mathUtils.absolute(5) === 5 ? 'PASS' : 'FAIL', 'absolute(5) should return 5');

// Test factorial function
console.log('\nTesting factorial function:');
console.log(mathUtils.factorial(5) === 120 ? 'PASS' : 'FAIL', 'factorial(5) should return 120');
console.log(mathUtils.factorial(0) === 1 ? 'PASS' : 'FAIL', 'factorial(0) should return 1');
try {
  mathUtils.factorial(-1);
  console.log('FAIL', 'factorial(-1) should throw an error');
} catch (error) {
  console.log('PASS', 'factorial(-1) correctly throws an error');
}

// Test average function
console.log('\nTesting average function:');
console.log(mathUtils.average([1, 2, 3, 4, 5]) === 3 ? 'PASS' : 'FAIL', 'average([1, 2, 3, 4, 5]) should return 3');
try {
  mathUtils.average([]);
  console.log('FAIL', 'average([]) should throw an error');
} catch (error) {
  console.log('PASS', 'average([]) correctly throws an error');
}

// Test gcd function
console.log('\nTesting gcd function:');
console.log(mathUtils.gcd(12, 18) === 6 ? 'PASS' : 'FAIL', 'gcd(12, 18) should return 6');
console.log(mathUtils.gcd(17, 23) === 1 ? 'PASS' : 'FAIL', 'gcd(17, 23) should return 1');
console.log(mathUtils.gcd(0, 5) === 5 ? 'PASS' : 'FAIL', 'gcd(0, 5) should return 5');
try {
  mathUtils.gcd(1.5, 2);
  console.log('FAIL', 'gcd(1.5, 2) should throw an error');
} catch (error) {
  console.log('PASS', 'gcd(1.5, 2) correctly throws an error');
}

// Test lcm function
console.log('\nTesting lcm function:');
console.log(mathUtils.lcm(4, 6) === 12 ? 'PASS' : 'FAIL', 'lcm(4, 6) should return 12');
console.log(mathUtils.lcm(0, 5) === 0 ? 'PASS' : 'FAIL', 'lcm(0, 5) should return 0');
try {
  mathUtils.lcm(1.5, 2);
  console.log('FAIL', 'lcm(1.5, 2) should throw an error');
} catch (error) {
  console.log('PASS', 'lcm(1.5, 2) correctly throws an error');
}

// Test isPrime function
console.log('\nTesting isPrime function:');
console.log(mathUtils.isPrime(17) === true ? 'PASS' : 'FAIL', 'isPrime(17) should return true');
console.log(mathUtils.isPrime(4) === false ? 'PASS' : 'FAIL', 'isPrime(4) should return false');
console.log(mathUtils.isPrime(1) === false ? 'PASS' : 'FAIL', 'isPrime(1) should return false');
console.log(mathUtils.isPrime(2) === true ? 'PASS' : 'FAIL', 'isPrime(2) should return true');
try {
  mathUtils.isPrime(-5);
  console.log('FAIL', 'isPrime(-5) should throw an error');
} catch (error) {
  console.log('PASS', 'isPrime(-5) correctly throws an error');
}

console.log('\nAll tests completed!')
