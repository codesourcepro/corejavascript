/**
 * Variable Hoisting
 * => Hoisting is Javascript default behaviour of moving declaration to the top of the function, if defined in a function, or the top of the global context, if outside a function.
 * 
 * var a; => variable declaration
 * a = 10; => variable initialization
 * 
 * Example:
 *  var a = 10;
 *  console.log(a);
 *  var c = 20;
 *  ===> it treated like (Compile Phase)
 *  var a;
 *  var c;
 *  a = 10;
 *  console.log(a);
 *  b = 20;
 * 
 * Some points
 * - A variable can be used before it has declared.
 *      eg:
 *          a = 10;
 *          console.log(a);
 *          var a;
 *       it gives
 *          var a;
 *          a = 10;
 *          console.log(a)
 */

// Hoisting Example
var a = 10;
console.log(a);
console.log(b); // It gives undefined because initialization not hoisted
var b = 20;     // Only variable declaration is hoisted
console.log(b)  // Now it gives the value of b.


// Hoisting in function example
var i = "Code Source Pro";
console.log(i);
function display() {
    console.log(i);
    var i = "Hoisting in function";
    console.log(i);
}
display()