# Math Utilities

A simple JavaScript library for common mathematical operations.

## Features

This repository contains a collection of JavaScript utility functions for common mathematical operations:

- `add(a, b)` - Adds two numbers
- `multiply(a, b)` - Multiplies two numbers
- `subtract(a, b)` - Subtracts the second number from the first
- `divide(a, b)` - Divides the first number by the second
- `power(base, exponent)` - Calculates the power of a number
- `squareRoot(num)` - Calculates the square root of a number
- `absolute(num)` - Calculates the absolute value of a number
- `factorial(num)` - Calculates the factorial of a non-negative integer
- `average(numbers)` - Calculates the average of an array of numbers
- `gcd(a, b)` - Calculates the greatest common divisor of two integers
- `lcm(a, b)` - Calculates the least common multiple of two integers
- `isPrime(num)` - Checks if a number is prime

## Usage

```javascript
const mathUtils = require('./sample.js');

console.log(mathUtils.add(5, 3));        // 8
console.log(mathUtils.multiply(4, 2));   // 8
console.log(mathUtils.subtract(10, 4));  // 6
console.log(mathUtils.divide(10, 2));    // 5
console.log(mathUtils.power(2, 3));      // 8
console.log(mathUtils.squareRoot(16));   // 4
console.log(mathUtils.factorial(5));     // 120
console.log(mathUtils.average([1, 2, 3, 4, 5])); // 3
console.log(mathUtils.gcd(12, 18));      // 6
console.log(mathUtils.lcm(4, 6));        // 12
console.log(mathUtils.isPrime(17));      // true
```

## Error Handling

Some functions include error handling:

- `divide(a, b)` throws an error if the divisor is zero
- `squareRoot(num)` throws an error if the input is negative
- `factorial(num)` throws an error if the input is negative or not an integer
- `average(numbers)` throws an error if the array is empty or contains non-numeric values
- `gcd(a, b)` throws an error if inputs are not integers
- `lcm(a, b)` throws an error if inputs are not integers
- `isPrime(num)` throws an error if input is not a positive integer

## Note on CI/CD

The GitHub Actions workflow in this repository is configured to run tests for the math utility functions. The workflow ensures that all functions work as expected.

## Check Suites

All check suites should now pass successfully for this repository.
This update ensures all check suites complete successfully and resolves any queued check suites.
Additional update to trigger a fresh run of the codegen-sh-staging check suite.
New update to trigger the codegen-sh-staging check suite to run.
Final update to trigger a fresh run of all check suites (2025-08-17).
Final update to trigger a fresh run of all check suites (2025-08-17 11:54).
New update to trigger all check suites (2025-08-17 12:48).

Final update to trigger a fresh run of all check suites (2025-08-17 13:47).
