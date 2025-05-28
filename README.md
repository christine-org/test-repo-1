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

## Usage

```javascript
const mathUtils = require('./sample.js');

// Examples
console.log(mathUtils.add(5, 3));        // 8
console.log(mathUtils.subtract(10, 4));  // 6
console.log(mathUtils.power(2, 3));      // 8
console.log(mathUtils.squareRoot(16));   // 4
```

## Error Handling

Some functions include error handling:
- `divide(a, b)` throws an error if the divisor is zero
- `squareRoot(num)` throws an error if the input is negative

## Installation

To use these utility functions in your project:

1. Clone this repository
2. Import the functions you need

```javascript
// Import specific functions
const { add, multiply } = require('./sample.js');

// Or import all functions
const mathUtils = require('./sample.js');
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

