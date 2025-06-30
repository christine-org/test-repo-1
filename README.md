# JavaScript Math Utilities

A lightweight, dependency-free collection of JavaScript utility functions for common mathematical operations. This library provides simple, reliable implementations of frequently used math operations with proper error handling.

## Installation

You can include this library in your project by cloning this repository:

```bash
git clone https://github.com/christine-org/test-repo-1.git
cd test-repo-1
```

Or simply copy the `sample.js` file into your project.

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

## Usage

Import the library into your JavaScript project:

```javascript
const mathUtils = require('./sample.js');

// Basic operations
console.log(mathUtils.add(5, 3));        // 8
console.log(mathUtils.subtract(10, 4));  // 6
console.log(mathUtils.multiply(7, 2));   // 14
console.log(mathUtils.divide(20, 4));    // 5

// Advanced operations
console.log(mathUtils.power(2, 3));      // 8
console.log(mathUtils.squareRoot(16));   // 4
console.log(mathUtils.absolute(-42));    // 42
console.log(mathUtils.factorial(5));     // 120
console.log(mathUtils.average([1, 2, 3, 4, 5])); // 3
```

## Error Handling

The library includes robust error handling to prevent common mathematical errors:

- `divide(a, b)` throws an error if the divisor is zero
- `squareRoot(num)` throws an error if the input is negative
- `factorial(num)` throws an error if the input is negative or not an integer
- `average(numbers)` throws an error if the array is empty or contains non-numeric values

Example of handling errors:

```javascript
try {
  const result = mathUtils.divide(10, 0);
} catch (error) {
  console.error(error.message); // "Division by zero is not allowed"
}
```

## Contributing

Contributions are welcome! If you'd like to add new mathematical functions or improve existing ones:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-function`)
3. Commit your changes (`git commit -m 'Add some amazing function'`)
4. Push to the branch (`git push origin feature/amazing-function`)
5. Open a Pull Request

Please ensure all new functions include proper JSDoc comments and error handling.

## License

This project is available as open source under the terms of the MIT License.

