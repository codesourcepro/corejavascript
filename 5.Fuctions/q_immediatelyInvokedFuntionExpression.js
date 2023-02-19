/**
 * Immediately Invoked Funtion Expression (IIFE)
 * => IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
 * => It is a design pattern which is also known as Self-Executing Anonymous Function and
contains two major parts. The first is the anonymous function with lexical scope
enclosed within the Grouping Operator (). This prevents accessing variables within the
IIFE idiom as well as polluting the global scope.

    => The second part is creating the immediately executing function expression (), through
which the JavaScript engine will directly interpret the function.


Some important Points to remember:
• Avoid Creating Global variable and Functions
• As it doesn't define variable and function globally so there
    will be no name conflicts
• Scope is limited to that particular function
 */

// IIFE
(function (x, y) {
    var a = 10;
    console.log(a);
    console.log(x + y);
})(10, 20);