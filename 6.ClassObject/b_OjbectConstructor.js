/**
 * Usint Ojbect Constructor
 * Syntax: var object_name = new Object();
 * 
 * The above syntax only creates a single object. In the real world, however, we often need a blueprint for creating multiple objects. That blueprint is similar to how a class constructor behaves in languages like Python, C++ and Java.

In a strikingly similar fashion JavaScript allows us to create objects by using a constructor function. Objects are created by calling the constructor function with the new keyword. It is called a function constructor because it actually creates a new Function object.

* Let’s see how it works.
//Function Constructor
function Person(title, firstname, lastname){
  //this points to the empty object
  this.title = title;
  this.firstname = firstname;
  this.lastname = lastname;
  //automatically returns
}
 - this keyword automatically creates an empty object and points to it
 - The constructor returns the object pointed to by thethis keyword automatically at the end of the code block.

 Now, let’s create an object from this constructor.

//Creating a new object
var p1 = new Person('Mrs.','Tanka', 'Jahari');
console.log(p1);
//Properties of Function Constructor
console.log("Length - "+ Person.length + " | Name - "+ Person.name);
 */

// Example
var marks = new Object();
marks['Promod'] = 100;  // marks.Promod = 100;
marks['Bijaya'] = 200;  // marks.Bijaya = 200;
marks['Binod'] = 300;   // marks.Binod = 300;

console.log(marks.Promod);

//  Add Object Properties and Methods
marks.AddObject = 600;
console.log(marks, marks.AddObject);