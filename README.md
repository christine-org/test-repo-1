# Math Utility Functions

A lightweight JavaScript library providing essential mathematical operations for your projects.

## 📋 Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage Examples](#usage-examples)
- [API Reference](#api-reference)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Installation

Simply include the `sample.js` file in your project:

```javascript
const mathUtils = require('./sample.js');
```

## ✨ Features

This library provides a collection of commonly used mathematical functions:

- Basic arithmetic operations (add, subtract, multiply, divide)
- Power and root calculations
- Statistical functions (average)
- Number utilities (absolute value, factorial)

## 💻 Usage Examples

```javascript
const mathUtils = require('./sample.js');

// Basic arithmetic
console.log(mathUtils.add(5, 3));        // 8
console.log(mathUtils.subtract(10, 4));  // 6
console.log(mathUtils.multiply(2, 3));   // 6
console.log(mathUtils.divide(10, 2));    // 5

// Advanced operations
console.log(mathUtils.power(2, 3));      // 8
console.log(mathUtils.squareRoot(16));   // 4
console.log(mathUtils.absolute(-5));     // 5
console.log(mathUtils.factorial(5));     // 120

// Statistical functions
console.log(mathUtils.average([1, 2, 3, 4, 5])); // 3
```

## 📚 API Reference

### Basic Arithmetic

| Function | Description | Parameters | Returns | Throws |
|----------|-------------|------------|---------|--------|
| `add(a, b)` | Adds two numbers | `a`, `b`: numbers | Sum of `a` and `b` | - |
| `subtract(a, b)` | Subtracts second number from first | `a`, `b`: numbers | Difference of `a` and `b` | - |
| `multiply(a, b)` | Multiplies two numbers | `a`, `b`: numbers | Product of `a` and `b` | - |
| `divide(a, b)` | Divides first number by second | `a`: dividend, `b`: divisor | Quotient of `a` and `b` | Error if `b` is zero |

### Advanced Operations

| Function | Description | Parameters | Returns | Throws |
|----------|-------------|------------|---------|--------|
| `power(base, exponent)` | Calculates power of a number | `base`: number, `exponent`: number | `base` raised to `exponent` | - |
| `squareRoot(num)` | Calculates square root | `num`: number | Square root of `num` | Error if `num` is negative |
| `absolute(num)` | Calculates absolute value | `num`: number | Absolute value of `num` | - |
| `factorial(num)` | Calculates factorial | `num`: non-negative integer | Factorial of `num` | Error if `num` is negative or not an integer |

### Statistical Functions

| Function | Description | Parameters | Returns | Throws |
|----------|-------------|------------|---------|--------|
| `average(numbers)` | Calculates average of numbers | `numbers`: array of numbers | Average of values in `numbers` | Error if array is empty or contains non-numeric values |

## ⚠️ Error Handling

The library includes robust error handling:

- `divide(a, b)` throws an error if the divisor is zero
- `squareRoot(num)` throws an error if the input is negative
- `factorial(num)` throws an error if the input is negative or not an integer
- `average(numbers)` throws an error if:
  - The array is empty
  - The input is not an array
  - The array contains non-numeric values

Example of handling errors:

```javascript
try {
  const result = mathUtils.divide(10, 0);
} catch (error) {
  console.error(error.message); // "Division by zero is not allowed"
}
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request to enhance the functionality.

## 📄 License

This project is open source and available under the MIT License.

