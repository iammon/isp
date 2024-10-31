#include <iostream>
#include <limits> // For std::numeric_limits
#include "../include/gcd.hpp"

// Function to find the Greatest Common Divisor (GCD) of two integers
// This function uses the Euclidean algorithm in a recursive manner
int gcd(int a, int b) {
    // Base Case: If b is zero, GCD is a (since any number divided by zero is undefined,
    // we assume a is the GCD when remainder is zero)
    if (b == 0) {
        return a;
    }

    // Recursive Case: GCD(a, b) is the same as GCD(b, a % b)
    // Here, 'a % b' gives the remainder when 'a' is divided by 'b'.
    // We keep calling gcd with new values (b and a % b) until b becomes zero
    return gcd(b, a % b);
}

// Function to get a valid integer input from the user
int getValidInteger() {
    int num;

    // Loop until valid input is provided
    while (true) {
        std::cin >> num;

        // Check if the input is an integer
        if (std::cin.fail()) {
            std::cin.clear(); // Clear the error flag
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); // Discard invalid input
            std::cout << "Invalid input. Please enter a valid integer: ";
        } else {
            return num; // Valid integer, return it
        }
    }
}
