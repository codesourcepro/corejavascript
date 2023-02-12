/**
 * Variable Scope
 * =>There are two scopes in JavaScripts
 *  1. Global Scope
 *  => A variable that is declared outside a function definition is a global varialbe, and its value is accessible and modificable throughout your program.
 *  => In a web browser, global varible are deleted when you close the browser window(or tab), but remain available to new pages loaded into the same window.
 * 
 *  2. Local Variable
 *  => A variable that is declared inside a function definition is local. It is created and destroyed every time the function is executed, and it cannot be accessed by any code outside the function. Inside a function, if a variable has not been delcared with var it is created as a global variable.
 *  => If there is function inside a function the inner function can access outer function's variables but outer function cannot access inner function's variables.
 *  => Function arguments (parameter) work as local variable inside functions.
 * 
 * 
 */

// Global Variable Example
var i = "I am globle";   // Global Varialbe => Accessible from anywhere
function show() {
    console.log(i);
}
console.log(i) // Access from outside funtion
show();

// Local Variable Example
function disp() {
    // local variable
    var j = "I am local";
    console.log(j);

    // Global variable inside funtion
    var k = "I am global inside function"
    console.log("Access from same inside function:: ", k);
}
console.log("Access from outside function:: ", k);
disp();