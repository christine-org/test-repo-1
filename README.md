# Math Utility Functions

This repository contains a collection of simple JavaScript utility functions for basic mathematical operations.

## Available Functions

- `add(a, b)` - Adds two numbers together
- `subtract(a, b)` - Subtracts the second number from the first
- `multiply(a, b)` - Multiplies two numbers
- `divide(a, b)` - Divides the first number by the second
- `power(base, exponent)` - Raises the base to the power of the exponent

## Usage

```javascript
const mathUtils = require('./sample.js');

// Examples
console.log(mathUtils.add(5, 3));        // 8
console.log(mathUtils.subtract(10, 4));  // 6
console.log(mathUtils.multiply(2, 6));   // 12
console.log(mathUtils.divide(10, 2));    // 5
console.log(mathUtils.power(2, 3));      // 8
```

## Error Handling

The `divide` function includes error handling to prevent division by zero.

