/**
 * Default Parameter
 * => 
 * Syntax:
 *  function function_name(para1, para2, para3 = "value"){
 *      // Block of Code
 *  }
 * 
 * Problem Undefined 
 * function function_name(para1, para2= "value", para3 ){
 *      // Block of Code
 *  }
 */

function add(a, b, c = 75) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log("------------------------")

}

add(25) // result => 25, undefined, 75
add(25, 50)  // result => 25, 50, 75
add(25, 50, 100)  // result => 25, 50, 100

/**
 * => Javascript also allows the use of arrays and null as default values.
*/
function sub(a, b, c = null) {
    console.log(a, b, c);
}
sub(25) // result => 25, undefined, null
sub(25, 50)  // result => 25, 50, null
sub(25, 50, 100)  // result => 25, 50, 100