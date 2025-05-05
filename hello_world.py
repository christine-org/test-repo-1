#!/usr/bin/env python3
"""
A simple Hello World script to demonstrate Python functionality.
"""

def greet(name="World"):
    """
    Returns a greeting message for the given name.
    
    Args:
        name (str): The name to greet. Defaults to "World".
        
    Returns:
        str: A greeting message.
    """
    return f"Hello, {name}!"

def main():
    """
    Main function to demonstrate the greet function.
    """
    print(greet())
    print(greet("GitHub"))
    print(greet("Codegen"))

if __name__ == "__main__":
    main()

