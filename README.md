# Math Utility Functions

This repository contains a collection of JavaScript utility functions for common mathematical operations.

## Available Functions

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

// Basic operations
console.log(mathUtils.add(5, 3));        // 8
console.log(mathUtils.subtract(10, 4));  // 6
console.log(mathUtils.multiply(2, 6));   // 12
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

- `divide(a, b)` throws an error if b is zero
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

// GCD of negative numbers (uses absolute values)
const negativeGcd = mathUtils.gcd(-24, 36);  // 12
```

### Least Common Multiple (LCM)
```javascript
// Find LCM of two numbers
const lcmResult = mathUtils.lcm(4, 6);  // 12

// LCM of coprime numbers
const coprimeLcm = mathUtils.lcm(5, 7);  // 35

// LCM with zero
const lcmWithZero = mathUtils.lcm(0, 5);  // 0

// LCM of negative numbers (uses absolute values)
const negativeLcm = mathUtils.lcm(-8, 12);  // 24
```

### Prime Number Checking
```javascript
// Check if a number is prime
mathUtils.isPrime(17);  // true
mathUtils.isPrime(4);   // false
mathUtils.isPrime(1);   // false (1 is not prime by definition)
mathUtils.isPrime(2);   // true (smallest prime number)
mathUtils.isPrime(3);   // true
mathUtils.isPrime(997); // true (a larger prime)
```

### Performance Considerations

- The `isPrime` function uses an optimized algorithm with O(√n) time complexity
- The `gcd` function implements the Euclidean algorithm with O(log(min(a,b))) time complexity
- The `lcm` function leverages the GCD calculation for efficiency

## Implementation Details

### GCD Implementation
The Greatest Common Divisor is implemented using the Euclidean algorithm, which has been known since ancient times. The algorithm works by repeatedly applying the division algorithm and has a logarithmic time complexity.

### LCM Implementation
The Least Common Multiple is calculated using the relationship between LCM and GCD:
```
LCM(a,b) = |a × b| / GCD(a,b)
```
This approach is more efficient than finding the LCM directly.

### Prime Number Testing
The primality test uses the 6k±1 optimization, which significantly reduces the number of divisibility checks needed. This is based on the observation that all primes greater than 3 can be expressed in the form 6k±1.

## Contributing

Contributions to improve the library are welcome! Here are some ways you can contribute:

1. Add new mathematical functions
2. Improve the performance of existing algorithms
3. Enhance documentation and examples
4. Add more comprehensive tests

Please ensure that any new functions include:
- Proper JSDoc documentation
- Appropriate error handling
- Unit tests

To contribute, please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

