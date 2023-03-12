/**
 * Object in JavaScript
 * => 
 */

// Object
var fees = {};
fees["Pramod"] = 240;
fees["Raj"] = 300;
fees["Sumit"] = 400;
fees["Spider Man"] = 1000;

console.log(fees['Pramod'], fees["Spider Man"]);

// or 
fees.Jackson = 10;
fees.Rahul = 20;
fees.Kiran = 30;


// Using Object Literal
var marks = {
    Pramod: 100,
    Rahul: 200,
    Rohan: 300,
    "Super Man": 500,
    total: function () { return (100 + 200) }
};
console.log(marks['total']());