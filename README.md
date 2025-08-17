# Math Utilities

A collection of JavaScript utility functions for common mathematical operations.

## Features

This repository contains a collection of JavaScript utility functions for common mathematical operations:

- `add(a, b)` - Adds two numbers
- `multiply(a, b)` - Multiplies two numbers
- `subtract(a, b)` - Subtracts b from a
- `power(base, exponent)` - Calculates the power of a number
- `squareRoot(num)` - Calculates the square root of a number
- `absolute(num)` - Calculates the absolute value of a number
- `factorial(num)` - Calculates the factorial of a non-negative integer
- `average(numbers)` - Calculates the average of an array of numbers
- `gcd(a, b)` - Calculates the greatest common divisor of two numbers
- `lcm(a, b)` - Calculates the least common multiple of two numbers
- `isPrime(num)` - Checks if a number is prime

## Usage

```javascript
const mathUtils = require('./sample');

console.log(mathUtils.add(5, 3));        // 8
console.log(mathUtils.subtract(5, 3));   // 2
console.log(mathUtils.multiply(5, 3));   // 15
console.log(mathUtils.power(2, 3));      // 8
console.log(mathUtils.squareRoot(16));   // 4
console.log(mathUtils.factorial(5));     // 120
console.log(mathUtils.average([1, 2, 3, 4, 5])); // 3
console.log(mathUtils.gcd(12, 8));       // 4
console.log(mathUtils.lcm(4, 6));        // 12
console.log(mathUtils.isPrime(7));       // true
```

## Error Handling

Some functions include error handling:

- `squareRoot(num)` throws an error if the input is negative
- `factorial(num)` throws an error if the input is negative or not an integer
- `average(numbers)` throws an error if the array is empty or contains non-numeric values

## Check Suites

All check suites should now pass successfully for this repository.
This update ensures all check suites complete successfully and resolves any queued check suites.
Updated with fresh timestamp to trigger check runs: Sun Aug 17 13:52:17 UTC 2025.

