/* Datatypes are of  different types in javaScript 
=>
    Number, bigInt , String , Boolean ,
*/
console.log(3+3);
// console.log(3+3) console.log(5+6);
// SyntaxError: Unexpected identifier 'console'

console.log(3+3); console.log(7+8);
// It will give output give output but the the coding standard matter  , readable , Have some coding standard .
// In javaScript , we can write multiple statements in a single line , but it is not a good practice to do so.
// It is better to write each statement in a new line for better readability and maintainability of the code.
// Number data type
let age = 25;
console.log(age);
// In javaScript , we can declare a variable using let , const , var
// let is used to declare a variable that can be changed later
// const is used to declare a variable that cannot be changed later
// var is used to declare a variable that can be changed later , but it is not recommended
// because it has a function scope and can lead to unexpected behavior. 
// It is better to use let and const for variable declaration.
let price = 99.99;
console.log(price);
  

let score = 33;
console.log(score);
// BigInt data type
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);
// BigInt is used to represent large integers that cannot be represented by the Number data type.
// It is denoted by appending 'n' to the end of the number. 
// String data type
let name = "John Doe";
console.log(name);
// String is used to represent text data in javaScript.
// It can be declared using single quotes, double quotes, or backticks (template literals).
let greeting = 'Hello, World!';
console.log(greeting);
let templateLiteral = `Hello, ${name}!`;
console.log(templateLiteral);
// Template literals are used to create multi-line strings and can include expressions using ${} syntax.    
// Boolean data type
let isActive = true;
console.log(isActive);
let isAvailable = false;
console.log(isAvailable);
// Boolean is used to represent true or false values.
// It is often used in conditional statements to control the flow of the program.       
// Undefined data type
let undefinedVariable;
console.log(undefinedVariable);
// Undefined is a data type that represents a variable that has been declared but not assigned a value
// It is automatically assigned to variables that are declared but not initialized. 
// Null data type
let nullVariable = null;
console.log(nullVariable);
// Null is a data type that represents the intentional absence of any object value.
// It is often used to indicate that a variable should have no value or that an object does not exist.
// In JavaScript, null is a primitive value that represents the absence of any object value
// It is often used to indicate that a variable should have no value or that an object does not exist.
// It is important to note that null is different from undefined, which represents a variable that
// has been declared but not assigned a value.          



let name = "Mantu";
console.log(name)


let isloggedIn = false;
console.log(isloggedIn);
let isLoggedIn = true;
console.log(isLoggedIn);
// In javaScript , variable names are case sensitive , isloggedIn and isLoggedIn are different variables
let isLoggedInToday = true;
console.log(isLoggedInToday);
// In javaScript , variable names can be written in camelCase , snake_case , kebab-case , PascalCase
// But the coding standard is to use camelCase for variable names and PascalCase for class names



let phoneNumber = null;
console.log(phoneNumber);
// When you declare a variable and assign null to it , it is null


let address;
console.log(address); 
// When you declare a variable and do not assign any value to it , it is undefined .
// Undefined is a type of data type in javaScript , it is not a value , it is a type of data type .






