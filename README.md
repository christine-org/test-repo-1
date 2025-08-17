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
- `gcd(a, b)` - Calculates the greatest common divisor of two integers
- `lcm(a, b)` - Calculates the least common multiple of two integers
- `isPrime(num)` - Checks if a number is prime

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
- `gcd(a, b)` and `lcm(a, b)` throw errors if inputs are not integers
- `isPrime(num)` throws an error if the input is not a positive integer

## Advanced Examples

### Greatest Common Divisor (GCD)
```javascript
// Find GCD of two numbers
const gcdResult = mathUtils.gcd(48, 18);  // 6

// GCD of coprime numbers
const coprimeGcd = mathUtils.gcd(13, 7);  // 1

// GCD with zero
const gcdWithZero = mathUtils.gcd(0, 5);  // 5
```

### Least Common Multiple (LCM)
```javascript
// Find LCM of two numbers
const lcmResult = mathUtils.lcm(4, 6);  // 12

// LCM of coprime numbers
const coprimeLcm = mathUtils.lcm(5, 7);  // 35

// LCM with zero
const lcmWithZero = mathUtils.lcm(0, 5);  // 0
```

### Prime Number Checking
```javascript
// Check if a number is prime
mathUtils.isPrime(17);  // true
mathUtils.isPrime(4);   // false
mathUtils.isPrime(1);   // false (1 is not prime by definition)
mathUtils.isPrime(2);   // true (smallest prime number)
```

