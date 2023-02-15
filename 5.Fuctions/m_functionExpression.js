/**
 * Function Expression
 * => When we create a function and assign it to a variable, known as function expression.
 * Note: You can't call function expression before function definition.
 *       Function expressions in jS are not hoisted, unlike function declarations.
 * 
 * 
 */

// Example;

// Function declaration
show();
function show() {
    console.log("Function Declaration");
}
show();

// Function Expression
// disp();
var disp = function show() {
    console.log("Function Expression");
};
disp();