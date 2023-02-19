/**
 * Arrow Funtion
 * => An arrow function expression (previously, and now incorrectly known as fat arrow function) has a shorter syntax compared to function expressions. Arrow functions are always anonymous.
 * Syntax:
 *  () => {statements};
 * 
 * var myfun = function show(){
 *      console.log("Code Source Pro");
 * }
 * as=>>>>>>>>>>>
 * var myfun = () => {
 *  console.log("Code Source Pro");
 * }
 */

// Arrow Function
var arFun = () => {
    console.log("Code Source Pro");
}
arFun();

// Arrow Function with Only one parameter
var myfun = a => {  // does not need parenthesis
    console.log(a);
};
myfun(10);

// Arrow Function with more than one parameter
var morefun = (a, b) => {
    console.log(a + b);
};
morefun(10, 20);