/**
 * Closure
 * => A closure is a function having access to the parent scope. It preserve the data from outside.
 * => A closure is an inner function that has access to the outer(enclosing) function's variables.
 * => For every closure we have three scopes:-
 *      - Local Scope (Own scope)
 *      - Outer Functions Scope
 *      - Global Scope
 */

// Closure 1
var i = 10;
function show() {
    var j = 20;
    console.log(i);
    console.log(j);
}
show()

// Closure with nested function
function funOutter() {
    var j = "Local Scope with Outer function";
    console.log(j);

    function funInner() {
        var k = "Local Scope with Inner Function";
        console.log(k);
        console.log(j);
    }
    funInner()
}
funOutter()