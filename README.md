# Math Utilities

A simple JavaScript library providing basic mathematical operations.

## Available Functions

- `add(a, b)` - Adds two numbers together
- `subtract(a, b)` - Subtracts the second number from the first
- `multiply(a, b)` - Multiplies two numbers
- `divide(a, b)` - Divides the first number by the second
- `power(base, exponent)` - Calculates the power of a number

## Usage

```javascript
const mathUtils = require('./sample.js');

// Addition
console.log(mathUtils.add(5, 3));  // Output: 8

// Subtraction
console.log(mathUtils.subtract(10, 4));  // Output: 6

// Multiplication
console.log(mathUtils.multiply(3, 4));  // Output: 12

// Division
console.log(mathUtils.divide(10, 2));  // Output: 5

// Power
console.log(mathUtils.power(2, 3));  // Output: 8
```

## Error Handling

The `divide` function includes error handling to prevent division by zero:

```javascript
try {
  mathUtils.divide(10, 0);
} catch (error) {
  console.error(error.message);  // Output: Division by zero is not allowed
}
```

