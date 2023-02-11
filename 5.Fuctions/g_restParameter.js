/**
 * Rest Parameter
 * => The rest parameter allows to represent an indefinite number of arguments as an array.
 *  Syntax: without parameters
 *      function function_name(...args){
 *          // block of statement;
 *      }
 * -----------------------------
 *  Syntax: with parameters
 *      function function_name(a, ...args){
 *          // block of statement;
 *      }
 * => The rest operator must be the last parameter to a function.
 * 
 */

// Rest Parameters without arguments
function show(...args) {
    console.log(args)
}

show(1, 2, 3, 4, 5);

// Rest Parameter with parameter
function show(a, ...args) {
    console.log(a);
    console.log(args);
    console.log(args[0]);
}

show(10, 20, 30, 40, 50);