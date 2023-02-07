/*
Function
- A function is basically a group of statements that perform specific tasks/operations
- Functions provide a way to create reusable code packages which are more portable and easier to debug
- Functions allow a programmer to divide a big program into a number of/several small and manageable functions
- It helps programmers in writing modular codes
- The function is a kind of reusable tool where we can write code/functionality to reuse whenever we want (Function allow the code to be called many times without repetition)
- Wrapping up / making smaller chunks of statements / reusable codes together for readability or separation of concern/proper organization is functions – (Grouping of a repetitive task)
- Functions (logical block of code) are one of the most important control structure in any programming language
- In other languages, it might be called MODULES, SUBROUTINES(SUB-ROUTINES)
- There are two steps to utilize function:
    - create/define a function with function keyword
    - call/invoke a function

=> Creating a Function
    Syntax:
        function function_name(){
            // Block of Statement
        }
    - Example:
        function display(){
            console.log("Code Source Pro");
        }
=> Calling a Function
    Syntax:
        function_name();
    
    - Example:
        display()

=> Rules 
    - Function name only starts with a letter, an underscore(_).
    - Function name cannot start with number.
    - Do not use reserved keywords. eg:- else, if etc.
    - Function names are case-sensitive in JavaScript.

 */

// Creating Function
function display() {
    console.log("Code Source Pro"); // in terminal
    // document.write("Code Source Pro");  => for html
}
// Calling Function
display() // 1st time
display() // 2nd time