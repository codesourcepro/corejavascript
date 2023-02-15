/**
 * Anonymous Functions
 * => Anonymous functions allow the creation of functions which have no specified name.
 *      - Can be stored in a variable.
 *      - Can be returned in a function.
 *      - Can be pass in a function.
 * Syntax:
 *      function(){
 *          body of function;
 *      };
 */

// Anonymous Function without parameter
var a = function () {
    console.log("Code Source Pro");
};

a();

// Anonymous Function with parameter
var b = function (x, y) {
    console.log(x + y);
};


b(10, 20);

// Passing Anonymous Function as Argument
function disp(myFun) {
    return myFun;
}
console.log(disp(function () {
    return "Passing Anonymous Function as Argument";
}));


// Returning Anonymous Function
function show(a) {
    return function (b) {
        return a + b;
    };
}

var af = (disp(10));
console.log(af(20));