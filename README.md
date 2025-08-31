# Math Utility Functions

This repository contains a collection of JavaScript utility functions for common mathematical operations.

## Installation

```bash
# Clone the repository
git clone https://github.com/christine-org/test-repo-1.git

# Navigate to the project directory
cd test-repo-1

# If you're using npm to manage dependencies in your project
npm install
```

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

```javascript
const mathUtils = require('./sample.js');

// Examples
console.log(mathUtils.add(5, 3));        // 8
console.log(mathUtils.subtract(10, 4));  // 6
console.log(mathUtils.power(2, 3));      // 8
console.log(mathUtils.squareRoot(16));   // 4
console.log(mathUtils.factorial(5));     // 120
console.log(mathUtils.average([1, 2, 3, 4, 5])); // 3
```

## Error Handling

Some functions include error handling:
- `divide(a, b)` throws an error if the divisor is zero
- `squareRoot(num)` throws an error if the input is negative
- `factorial(num)` throws an error if the input is negative or not an integer
- `average(numbers)` throws an error if the array is empty or contains non-numeric values

## API Reference

### add(a, b)
Adds two numbers together.
```javascript
const sum = mathUtils.add(5, 3); // 8
```

### subtract(a, b)
Subtracts the second number from the first.
```javascript
const difference = mathUtils.subtract(10, 4); // 6
```

### multiply(a, b)
Multiplies two numbers.
```javascript
const product = mathUtils.multiply(5, 3); // 15
```

### divide(a, b)
Divides the first number by the second.
```javascript
const quotient = mathUtils.divide(10, 2); // 5
// mathUtils.divide(10, 0) will throw an error
```

### power(base, exponent)
Calculates the power of a number.
```javascript
const result = mathUtils.power(2, 3); // 8
```

### squareRoot(num)
Calculates the square root of a number.
```javascript
const result = mathUtils.squareRoot(16); // 4
// mathUtils.squareRoot(-1) will throw an error
```

### absolute(num)
Calculates the absolute value of a number.
```javascript
const result = mathUtils.absolute(-5); // 5
```

### factorial(num)
Calculates the factorial of a non-negative integer.
```javascript
const result = mathUtils.factorial(5); // 120
// mathUtils.factorial(-1) will throw an error
```

### average(numbers)
Calculates the average of an array of numbers.
```javascript
const result = mathUtils.average([1, 2, 3, 4, 5]); // 3
// mathUtils.average([]) will throw an error
// mathUtils.average([1, 2, 'three']) will throw an error
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

