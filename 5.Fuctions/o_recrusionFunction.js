/**
 * Recursion Function in JavaScript
 * => Recursion is a programming pattern or concept embedded in many programming languages, and JavaScript is not left out. It is a feature used in creating a function that keeps calling itself but with a smaller input every consecutive time until the code’s desired result from the start is achieved.
 * => This tends to keep a very clean slate of codes while providing solutions to multiple tasks of similar structure. A function that operates on the concept of recursion is called a recursive function.
 */


// Calculate sum of natural number using recursion
function n_sum(n) {
    if (n == 0) {
        return 0;
    } else {
        return n + n_sum(n - 1);
    }
}

total = n_sum(10);
console.log("Sum of given natural number: ", total);