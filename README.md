# Math Utility Functions

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight JavaScript library providing a collection of common mathematical operations with robust error handling.

## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Available Functions](#available-functions)
- [Usage Examples](#usage-examples)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- Simple and intuitive API
- Comprehensive error handling
- Well-documented functions
- Zero dependencies
- Fully tested

## 📦 Installation

### Using npm

```bash
npm install math-utils
```

### Direct include

You can also directly include the library in your project:

```javascript
const mathUtils = require('./path/to/sample.js');
```

## 🧮 Available Functions

| Function | Description | Parameters | Returns |
|----------|-------------|------------|---------|
| `add(a, b)` | Adds two numbers | Two numbers | Sum |
| `subtract(a, b)` | Subtracts the second number from the first | Two numbers | Difference |
| `multiply(a, b)` | Multiplies two numbers | Two numbers | Product |
| `divide(a, b)` | Divides the first number by the second | Two numbers (divisor cannot be zero) | Quotient |
| `power(base, exponent)` | Calculates the power of a number | Base and exponent | Result of base raised to exponent |
| `squareRoot(num)` | Calculates the square root of a number | Non-negative number | Square root |
| `absolute(num)` | Calculates the absolute value of a number | Any number | Absolute value |
| `factorial(num)` | Calculates the factorial of a non-negative integer | Non-negative integer | Factorial |
| `average(numbers)` | Calculates the average of an array of numbers | Array of numbers | Average value |

## 🚀 Usage Examples

```javascript
const mathUtils = require('./sample.js');

// Basic arithmetic
console.log(mathUtils.add(5, 3));        // 8
console.log(mathUtils.subtract(10, 4));  // 6
console.log(mathUtils.multiply(2, 6));   // 12
console.log(mathUtils.divide(10, 2));    // 5

// Advanced functions
console.log(mathUtils.power(2, 3));      // 8
console.log(mathUtils.squareRoot(16));   // 4
console.log(mathUtils.absolute(-42));    // 42
console.log(mathUtils.factorial(5));     // 120
console.log(mathUtils.average([1, 2, 3, 4, 5])); // 3
```

## ⚠️ Error Handling

The library includes robust error handling to prevent common mathematical errors:

- `divide(a, b)` throws an error if the divisor is zero
- `squareRoot(num)` throws an error if the input is negative
- `factorial(num)` throws an error if the input is negative or not an integer
- `average(numbers)` throws an error if:
  - The input is not an array
  - The array is empty
  - The array contains non-numeric values

Example of handling errors:

```javascript
try {
  const result = mathUtils.divide(10, 0);
} catch (error) {
  console.error(error.message); // "Division by zero is not allowed"
}
```

## 🧪 Testing

To run the tests:

```bash
npm test
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

