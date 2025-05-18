# Test Repository 1

This repository contains JavaScript utility functions for mathematical operations.

## Files

- `sample.js` - Basic arithmetic operations (add, subtract, multiply, divide)
- `mathUtils.js` - Advanced mathematical operations (square, cube, power, square root, absolute)

## Usage

```javascript
const basicMath = require('./sample.js');
const advancedMath = require('./mathUtils.js');

// Basic operations
console.log(basicMath.add(5, 3));        // 8
console.log(basicMath.subtract(10, 4));  // 6
console.log(basicMath.multiply(3, 7));   // 21
console.log(basicMath.divide(15, 3));    // 5

// Advanced operations
console.log(advancedMath.square(4));        // 16
console.log(advancedMath.cube(3));          // 27
console.log(advancedMath.power(2, 8));      // 256
console.log(advancedMath.squareRoot(25));   // 5
console.log(advancedMath.absolute(-10));    // 10
```

## Error Handling

Both modules include proper error handling:
- `divide()` throws an error when attempting to divide by zero
- `squareRoot()` throws an error when attempting to find the square root of a negative number

