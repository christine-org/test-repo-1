# Math Utilities

A simple JavaScript library that provides basic mathematical operations.

## Available Functions

- `add(a, b)` - Adds two numbers together
- `subtract(a, b)` - Subtracts the second number from the first
- `multiply(a, b)` - Multiplies two numbers
- `divide(a, b)` - Divides the first number by the second (throws error if divisor is zero)
- `power(base, exponent)` - Calculates the power of a number
- `squareRoot(value)` - Calculates the square root of a number (throws error if value is negative)
- `absolute(value)` - Calculates the absolute value of a number

## Usage Example

```javascript
const mathUtils = require('./sample.js');

console.log(mathUtils.add(5, 3));        // 8
console.log(mathUtils.subtract(10, 4));  // 6
console.log(mathUtils.power(2, 3));      // 8
console.log(mathUtils.absolute(-5));     // 5
```

## Error Handling

Some functions throw errors for invalid inputs:
- `divide(a, 0)` throws "Division by zero is not allowed"
- `squareRoot(-1)` throws "Cannot calculate square root of a negative number"

