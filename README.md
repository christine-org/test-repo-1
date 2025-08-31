# Math Utility Functions

This repository contains a collection of JavaScript utility functions for common mathematical operations. These functions are designed to be simple, reliable, and easy to use in your JavaScript projects.

## Installation

```bash
# Clone the repository
git clone https://github.com/christine-org/test-repo-1.git

# Navigate to the project directory
cd test-repo-1

# If you're using npm to manage dependencies in your project
npm install --save ./
```

## Available Functions

| Function | Description | Example |
|----------|-------------|---------|
| `add(a, b)` | Adds two numbers together | `add(5, 3)` → `8` |
| `subtract(a, b)` | Subtracts the second number from the first | `subtract(10, 4)` → `6` |
| `multiply(a, b)` | Multiplies two numbers | `multiply(4, 5)` → `20` |
| `divide(a, b)` | Divides the first number by the second | `divide(20, 4)` → `5` |
| `power(base, exponent)` | Calculates the power of a number | `power(2, 3)` → `8` |
| `squareRoot(num)` | Calculates the square root of a number | `squareRoot(16)` → `4` |
| `absolute(num)` | Calculates the absolute value of a number | `absolute(-10)` → `10` |
| `factorial(num)` | Calculates the factorial of a non-negative integer | `factorial(5)` → `120` |
| `average(numbers)` | Calculates the average of an array of numbers | `average([1, 2, 3, 4, 5])` → `3` |

## Usage Examples

### Basic Operations

```javascript
const mathUtils = require('./sample.js');

// Basic arithmetic
console.log(mathUtils.add(5, 3));        // 8
console.log(mathUtils.subtract(10, 4));  // 6
console.log(mathUtils.multiply(4, 5));   // 20
console.log(mathUtils.divide(20, 4));    // 5

// More complex operations
console.log(mathUtils.power(2, 3));      // 8
console.log(mathUtils.squareRoot(16));   // 4
console.log(mathUtils.absolute(-10));    // 10
console.log(mathUtils.factorial(5));     // 120
```

### Working with Arrays

```javascript
const mathUtils = require('./sample.js');

// Calculate average of an array
const numbers = [1, 2, 3, 4, 5];
console.log(mathUtils.average(numbers));  // 3

// Combining functions
const squares = numbers.map(num => mathUtils.power(num, 2));
console.log(squares);  // [1, 4, 9, 16, 25]
console.log(mathUtils.average(squares));  // 11
```

## Error Handling

These functions include robust error handling to prevent common issues:

- `divide(a, b)` throws an error if the divisor is zero
  ```javascript
  try {
    mathUtils.divide(10, 0);  // Throws Error: Division by zero is not allowed
  } catch (error) {
    console.error(error.message);
  }
  ```

- `squareRoot(num)` throws an error if the input is negative
  ```javascript
  try {
    mathUtils.squareRoot(-4);  // Throws Error: Cannot calculate square root of negative number
  } catch (error) {
    console.error(error.message);
  }
  ```

- `factorial(num)` throws an error if the input is negative or not an integer
  ```javascript
  try {
    mathUtils.factorial(-1);  // Throws Error: Factorial is only defined for non-negative integers
  } catch (error) {
    console.error(error.message);
  }
  ```

- `average(numbers)` throws an error if the array is empty or contains non-numeric values
  ```javascript
  try {
    mathUtils.average([]);  // Throws Error: Cannot calculate average of an empty array
    mathUtils.average([1, 2, 'three']);  // Throws Error: All elements in the array must be numbers
  } catch (error) {
    console.error(error.message);
  }
  ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

