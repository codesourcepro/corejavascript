/**
 * VAR, LET and CONST keywords in Javascripts
 * var - The scope of a variable declared with var is its current execution context, which
either the enclosing function or, for variables declared outside any function, global.

let - let allows you to declare variables that are limited in scope to the block, statement
or expression on which it is used.

const - This declaration creates a constant whose scope can be either global or local to
the block in which it is declared. Global constants do not become properties of the
window object, unlike var variables. An initializer for a constant is required; that is,
you must specify its value in the same statement in which it's declared which can't be
changed later.
 * 
 * 
 */

var a = 10;
let b = 25;
const pi = 3.14;

console.log(a);
console.log(b);
console.log(pi);


// Var 
console.log("-------------var EXAMple------\n")
function varEx() {
    var a = 2;
    console.log("Initail VAR value: ", a);
    if (true) {
        var a = 5;
        console.log("In Scope VAR value: ", a);
    }
    console.log("At last VAR value: ", a);
}
varEx();

// let
console.log("\n-------------let EXAMple------\n")
function letEx() {
    let a = 2;
    console.log("Initail LET value: ", a);
    if (true) {
        let a = 5;
        console.log("In Scope LET value: ", a);
    }
    console.log("At last LET value: ", a);
}
letEx();