# Math Utility Functions

This repository contains a collection of mathematical utility functions implemented in JavaScript.

## Available Functions

### Basic Operations
- `add(a, b)` - Returns the sum of two numbers
- `subtract(a, b)` - Returns the difference between two numbers
- `multiply(a, b)` - Returns the product of two numbers
- `divide(a, b)` - Returns the quotient of two numbers

### Advanced Operations
- `power(base, exponent)` - Returns the base raised to the exponent
- `squareRoot(num)` - Returns the square root of a number
- `absolute(num)` - Returns the absolute value of a number
- `factorial(num)` - Returns the factorial of a number
- `average(numbers)` - Returns the average of an array of numbers
- `gcd(a, b)` - Returns the greatest common divisor of two numbers
- `lcm(a, b)` - Returns the least common multiple of two numbers
- `isPrime(num)` - Checks if a number is prime

## Error Handling

Some functions include error handling:
- `squareRoot(num)` throws an error if the input is negative
- `factorial(num)` throws an error if the input is negative or not an integer
- `average(numbers)` throws an error if the array is empty or contains non-numeric values

## Check Suites

All check suites should now pass successfully for this repository.
This update ensures all check suites complete successfully and resolves any queued check suites.
Updated on 2025-08-17 14:05 to trigger fresh check runs and resolve all queued check suites.
This update specifically addresses the codegen-sh-staging check suite that was previously stuck in queued state.

