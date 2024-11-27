# String Calculator
A simple String Calculator built with JavaScript using Test-Driven Development (TDD) principles. It takes a string of numbers and returns their sum. The calculator supports features like custom delimiters, handling newline characters, and validation for negative numbers.

# Features
    1.  Handles an empty string ("") and returns 0.
    2.  Sums comma-separated numbers (e.g., "1,2,3").
    3.  Supports newline characters as delimiters (e.g., "1\n2,3").
    4.  Allows custom delimiters defined in the format //[delimiter]\n[numbers] (e.g., "//;\n1;2").
    5.  Throws exceptions when negative numbers are provided, listing all negative numbers in the error message.

# Getting Started

# Prerequisites

        Node.js installed on your system.

# Installation

        1. Clone the repository
              git clone https://github.com/AtreyaViv/string-calculator-tdd.git

        2. Navigate to the project directory
                cd string-calculator-tdd

        3. Install dependencies:
            npm install

        4. Running Tests
            The project uses Jest for testing. To run the tests:
            Execute the following command:
            npm test

The output will show the test cases, ensuring all functionalities work correctly.
Examples of Usage
Here’s how the String Calculator behaves with different inputs:

Input       Output      Notes
""              0       Returns 0 for an empty string.
"1"             1       A single number returns the number itself.
"1,2,3"         6       Sums up comma-separated numbers.
"1\n2,3"        6       Handles newlines and commas as delimiters.
"//;\n1;2"      3       Supports custom delimiters like ;.
"1,-2,3,-4"     Error   Throws an error: Negative numbers not allowed: -2, -4.