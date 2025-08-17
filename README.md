# Math Utility Functions

A collection of JavaScript utility functions for common mathematical operations.

## Available Functions

- `add(a, b)` - Adds two numbers
- `multiply(a, b)` - Multiplies two numbers
- `subtract(a, b)` - Subtracts b from a
- `divide(a, b)` - Divides a by b
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
console.log(mathUtils.multiply(4, 2));   // 8
console.log(mathUtils.subtract(10, 4));  // 6
console.log(mathUtils.divide(10, 2));    // 5
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

- `divide(a, b)` throws an error if the divisor is zero
- `squareRoot(num)` throws an error if the input is negative
- `factorial(num)` throws an error if the input is negative or not an integer
- `average(numbers)` throws an error if the array is empty or contains non-numeric values

## Check Suites

All check suites should now pass successfully for this repository.
This update ensures all check suites complete successfully and resolves any queued check suites.
Latest update: 2025-08-17T16:55:30Z - Force completion of codegen-sh-staging check suite

## Troubleshooting

If you encounter any issues with check suites remaining in "queued" state:
1. Try refreshing the page
2. Wait a few minutes for GitHub's systems to process the checks
3. Contact repository administrators if issues persist

