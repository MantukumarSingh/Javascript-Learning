
/*Variables are used to store data . 
Data is nothing it is collection of information . 
There are three types of variables in javaScript .

const, let , var 

By uing this we can store  Data , which will allocate some memory space to allocate date with variable  name .
Variable name is always start with small letter.

Let's see ex:-
*/

//  Que: What is variable declartion and initialization
// Variable declaration is the process of defining a variable without assigning a value to it.
// Initialization is the process of assigning a value to a variable after it has been declared.
let name; // Declaration    
name = "Mantu"; // Initialization
// You can also declare and initialize a variable in one step:
let age = 25; // Declaration and Initialization
// Variables can be declared using `let`, `const`, or `var`.
// `let` allows you to declare variables that can be reassigned later.
// `const` is used for variables that should not be reassigned.
// `var` is an older way to declare variables, but it's generally recommended to use `let` or `const` in modern JavaScript. 
// Example of variable declaration and initialization:
let myName = "Mantu"; // Declaration and Initialization
let myAge = 25; // Declaration and Initialization
// Variables can be reassigned later if declared with `let` or `var`, but not with `const`.
// Example of reassigning a variable:
myAge = 26; // Reassignment
// Variables can be used to store different types of data, including numbers, strings, booleans, objects, and arrays.
// Example of using variables to store different data types:
let isStudent = true; // Boolean


const accountId = 12345;
let accountType = "saving";
let accountNumber = 12345678901;
var emailId = "mantu@gmail.com"
let  mobileNumber = 9122986734;
let accountState ;
let accountCity ; 
console.log(accountId);
console.log(accountType);
console.log(accountNumber);
console.log(accountState);

console.table([accountId,accountType,accountNumber,emailId,mobileNumber,accountState,,accountCity]);

// Variables are used to define value name .
