#include <iostream>
#include "../include/gcd.hpp"

int main() {
    int num1, num2;

    // Prompt the user to enter two integers with input validation
    std::cout << "Enter the first integer to find its GCD: ";
    num1 = getValidInteger();

    std::cout << "Enter the second integer to find its GCD: ";
    num2 = getValidInteger();

    // Calling the gcd function and storing the result
    int result = gcd(num1, num2);

    // Display the result
    std::cout << "The GCD of " << num1 << " and " << num2 << " is: " << result << std::endl;

    return 0;
}
