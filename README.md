# Math Utility Functions

A lightweight JavaScript library providing a collection of common mathematical operations with robust error handling.

## 📋 Features

- Simple and intuitive API
- Comprehensive error handling
- Well-documented functions
- Zero dependencies
- Fully tested

## 🔢 Available Functions

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

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/christine-org/test-repo-1.git

# Navigate to the project directory
cd test-repo-1
```

## 💻 Usage

```javascript
const mathUtils = require('./sample.js');

// Basic operations
console.log(mathUtils.add(5, 3));        // 8
console.log(mathUtils.subtract(10, 4));  // 6
console.log(mathUtils.multiply(3, 4));   // 12
console.log(mathUtils.divide(10, 2));    // 5

// Advanced operations
console.log(mathUtils.power(2, 3));      // 8
console.log(mathUtils.squareRoot(16));   // 4
console.log(mathUtils.absolute(-5));     // 5
console.log(mathUtils.factorial(5));     // 120
console.log(mathUtils.average([1, 2, 3, 4, 5])); // 3
```

## ⚠️ Error Handling

The library includes robust error handling for various edge cases:

| Function | Error Condition |
|----------|----------------|
| `divide(a, b)` | Throws an error if the divisor is zero |
| `squareRoot(num)` | Throws an error if the input is negative |
| `factorial(num)` | Throws an error if the input is negative or not an integer |
| `average(numbers)` | Throws an error if the array is empty or contains non-numeric values |

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

