# Math Utility Functions

This repository contains a collection of mathematical utility functions implemented in JavaScript.

## Available Functions

- `add(a, b)`: Adds two numbers
- `multiply(a, b)`: Multiplies two numbers
- `divide(a, b)`: Divides two numbers
- `subtract(a, b)`: Subtracts two numbers
- `power(base, exponent)`: Calculates the power of a number
- `squareRoot(num)`: Calculates the square root of a number
- `absolute(num)`: Calculates the absolute value of a number
- `factorial(num)`: Calculates the factorial of a non-negative integer
- `average(numbers)`: Calculates the average of an array of numbers
- `gcd(a, b)`: Calculates the greatest common divisor of two integers
- `lcm(a, b)`: Calculates the least common multiple of two integers
- `isPrime(num)`: Checks if a number is prime

## Usage

```javascript
const mathUtils = require('./sample.js');

// Basic operations
const sum = mathUtils.add(5, 3);        // 8
const product = mathUtils.multiply(4, 2); // 8
const quotient = mathUtils.divide(10, 2); // 5
const diff = mathUtils.subtract(7, 3);   // 4

// Advanced operations
const gcdValue = mathUtils.gcd(48, 18);  // 6
const lcmValue = mathUtils.lcm(12, 15);  // 60
const isPrime17 = mathUtils.isPrime(17); // true
```

## Testing

Run the test file to verify all functions are working correctly:

```
node test-math-functions.js
```

## License

MIT

