/**
 * Agruments Object in Javascript
 * => The arguments object contains an array of the arguements used when the function was called.
 * => The object contains an entry for each arguments passed to the function, the first entry's index starting at 0.The arguments object is not an Array. It is similar to an Array, but does not have any Array properties except lenght.
 * 
 */

function disp(name1, name2) {
    arguments[0] = "CSP";
    console.log(arguments[0]);
    console.log(arguments[1]);

    // lenght property =>gives numbers of agruments
    console.log(arguments.length);

    // display result using for loop
    arguments[0] = "Code";
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }

    // callee property => details about function
    console.log(arguments.callee)
}

disp("Code", "Source", "Pro")