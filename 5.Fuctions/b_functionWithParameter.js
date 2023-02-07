/*
Function with Parameter
Syntax:
    function function_name(parameter1, parameter2, ....){
        Block of Statement
    }
Example:
    function display(name){
        document.write(name)
    }
- JavaScript functioin definition do note specify data types for paramters.
- JavaScript functions do not perform type checking on the passed arguments.
- JavaScript functions do not check the number of arguments received.

 
 */

// Creating Function
function display(name1, name2) {
    console.log(name1); // in terminal
    console.log(name2); // in terminal
    // document.write(name1);  => for html
    // document.write(name2);  => for html
    console.log(name1 + " " + name2 + " " + "Pro")
}
// Calling Functionf
display("Code", "Source") // 1st time