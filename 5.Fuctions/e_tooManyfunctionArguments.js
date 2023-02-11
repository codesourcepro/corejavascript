/**
 * Many Function Arguments
 * => If a function is called with too many arguments, these arguments can be reached using the arguments objects object which is built-in.
 */
function add(a, b) {
    console.log(a);
    console.log(b);
    console.log(arguments[2]);
}

add(2, 4, 6)