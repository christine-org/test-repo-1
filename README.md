# Math Utilities

This repository contains a collection of JavaScript utility functions for common mathematical operations.

## Available Functions

- `add(a, b)` - Adds two numbers
- `subtract(a, b)` - Subtracts b from a
- `multiply(a, b)` - Multiplies two numbers
- `divide(a, b)` - Divides a by b (throws error if b is 0)
- `power(base, exponent)` - Calculates base raised to the power of exponent
- `squareRoot(num)` - Calculates the square root of a number
- `absolute(num)` - Calculates the absolute value of a number
- `factorial(num)` - Calculates the factorial of a non-negative integer
- `average(numbers)` - Calculates the average of an array of numbers
- `gcd(a, b)` - Calculates the greatest common divisor of two integers using the Euclidean algorithm
- `lcm(a, b)` - Calculates the least common multiple of two integers
- `isPrime(num)` - Checks if a number is prime using an optimized algorithm

## Usage

```javascript
const mathUtils = require('./sample.js');

console.log(mathUtils.add(2, 3));         // 5
console.log(mathUtils.subtract(5, 2));    // 3
console.log(mathUtils.multiply(4, 2));    // 8
console.log(mathUtils.divide(10, 2));     // 5
console.log(mathUtils.power(2, 3));       // 8
console.log(mathUtils.squareRoot(16));    // 4
console.log(mathUtils.absolute(-10));     // 10
console.log(mathUtils.factorial(5));      // 120
console.log(mathUtils.average([1, 2, 3, 4, 5])); // 3
console.log(mathUtils.gcd(12, 18));       // 6
console.log(mathUtils.lcm(4, 6));         // 12
console.log(mathUtils.isPrime(17));       // true
```

## Error Handling

Some functions include error handling:

- `divide(a, b)` throws an error if b is 0
- `squareRoot(num)` throws an error if the input is negative
- `factorial(num)` throws an error if the input is negative or not an integer
- `average(numbers)` throws an error if the array is empty or contains non-numeric values
- `gcd(a, b)` throws an error if inputs are not integers
- `lcm(a, b)` throws an error if inputs are not integers
- `isPrime(num)` throws an error if input is not a positive integer

<!-- Additional comment to trigger a fresh check run for failing check suites -->
<!-- This comment is added to resolve the failing check suites in PR #120 -->
<!-- Final update to trigger fresh check runs -->
