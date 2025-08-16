# Math Utility Functions

This repository contains a collection of JavaScript utility functions for common mathematical operations.

## Available Functions

- `add(a, b)` - Adds two numbers together
- `subtract(a, b)` - Subtracts the second number from the first
- `multiply(a, b)` - Multiplies two numbers
- `divide(a, b)` - Divides the first number by the second
- `power(base, exponent)` - Calculates the power of a number
- `squareRoot(num)` - Calculates the square root of a number
- `absolute(num)` - Calculates the absolute value of a number
- `factorial(num)` - Calculates the factorial of a non-negative integer
- `average(numbers)` - Calculates the average of an array of numbers
- `modulo(a, b)` - Calculates the remainder when dividing the first number by the second

## Usage

```javascript
const mathUtils = require('./sample.js');

// Examples
console.log(mathUtils.add(5, 3));        // 8
console.log(mathUtils.subtract(10, 4));  // 6
console.log(mathUtils.power(2, 3));      // 8
console.log(mathUtils.squareRoot(16));   // 4
console.log(mathUtils.factorial(5));     // 120
console.log(mathUtils.average([1, 2, 3, 4, 5])); // 3
console.log(mathUtils.modulo(10, 3));    // 1
```

## Error Handling

Some functions include error handling:
- `divide(a, b)` throws an error if the divisor is zero
- `squareRoot(num)` throws an error if the input is negative
- `factorial(num)` throws an error if the input is negative or not an integer
- `average(numbers)` throws an error if the array is empty or contains non-numeric values
- `modulo(a, b)` throws an error if the divisor is zero
