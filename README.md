# Math Utility Functions

A lightweight JavaScript library providing essential mathematical operations for your projects.

## 📋 Overview

This repository contains a collection of JavaScript utility functions for common mathematical operations. These functions are designed to be simple, efficient, and easy to integrate into your projects.

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/christine-org/test-repo-1.git

# Navigate to the project directory
cd test-repo-1
```

## 📊 Available Functions

| Function | Description | Example |
|----------|-------------|---------|
| `add(a, b)` | Adds two numbers together | `add(5, 3)` → `8` |
| `subtract(a, b)` | Subtracts the second number from the first | `subtract(10, 4)` → `6` |
| `multiply(a, b)` | Multiplies two numbers | `multiply(2, 3)` → `6` |
| `divide(a, b)` | Divides the first number by the second | `divide(10, 2)` → `5` |
| `power(base, exponent)` | Calculates the power of a number | `power(2, 3)` → `8` |
| `squareRoot(num)` | Calculates the square root of a number | `squareRoot(16)` → `4` |
| `absolute(num)` | Calculates the absolute value of a number | `absolute(-5)` → `5` |
| `factorial(num)` | Calculates the factorial of a non-negative integer | `factorial(5)` → `120` |
| `average(numbers)` | Calculates the average of an array of numbers | `average([1, 2, 3, 4, 5])` → `3` |

## 💻 Usage

```javascript
const mathUtils = require('./sample.js');

// Basic operations
console.log(mathUtils.add(5, 3));        // 8
console.log(mathUtils.subtract(10, 4));  // 6
console.log(mathUtils.multiply(6, 7));   // 42
console.log(mathUtils.divide(20, 5));    // 4

// Advanced operations
console.log(mathUtils.power(2, 3));      // 8
console.log(mathUtils.squareRoot(16));   // 4
console.log(mathUtils.absolute(-10));    // 10
console.log(mathUtils.factorial(5));     // 120
console.log(mathUtils.average([1, 2, 3, 4, 5])); // 3
```

## ⚠️ Error Handling

The library includes robust error handling for various edge cases:

- `divide(a, b)` throws an error if the divisor is zero
- `squareRoot(num)` throws an error if the input is negative
- `factorial(num)` throws an error if the input is negative or not an integer
- `average(numbers)` throws an error if:
  - The input is not an array
  - The array is empty
  - The array contains non-numeric values

Example of handling errors:

```javascript
const mathUtils = require('./sample.js');

try {
  const result = mathUtils.divide(10, 0);
} catch (error) {
  console.error(error.message); // "Division by zero is not allowed"
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

