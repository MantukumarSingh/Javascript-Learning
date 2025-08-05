const { memo } = require("react");


/*
Data types are of two types: primitive and reference types.

Primitive types include:
- Number
- String
- Boolean
- Undefined
- Null
- Symbol (ES6) 
- BigInt (ES11) 
Primitive types are immutable and compared by value.
They are stored directly in the variable and represent a single value.
For example, a number like 42 is a primitive type, and it is stored directly in the variable.
When you compare two primitive values, JavaScript checks if they are the same value.
For example, comparing 42 and 42 will return true, while comparing 42 and 43 will return false.
Primitive types are immutable, meaning they cannot be changed.
For example, if you have a string "hello", you cannot change it to "world" directly.
Instead, you create a new string with the desired value.
lets have exanple of primitive types:
let num = 42; // Number     
let str = "hello"; // String
let bool = true; // Boolean
let undef; // Undefined
let nul = null; // Null
let sym = Symbol("description"); // Symbol (ES6)
let bigInt = BigInt(12345678901234567890); // BigInt (ES11)
// Example of comparing primitive types:
console.log(num === 42); // true
console.log(str === "hello"); // true
console.log(bool === true); // true
console.log(undef === undefined); // true
console.log(nul === null); // true
console.log(sym === Symbol("description")); // false (different symbols)
console.log(bigInt === BigInt(12345678901234567890)); // true
*/
let num = 42;
let str ="Mantu";





/*
Reference types include: (also know as non-primitive types)
- Object
- Array
- Function
- Function (ES6)
Reference types are mutable and compared by reference.
They are stored as a reference to an object in memory.
For example, an object like { name: "Alice" } is a reference type, and it is stored as a reference to the object in memory.
When you compare two reference values, JavaScript checks if they refer to the same object in memory.
For example, if you have two objects with the same properties, they are still different references, and comparing them will return false.    
For example, comparing { name: "Alice" } and { name: "Alice" } will return false,
while comparing two variables that refer to the same object will return true.
For example, if you have two variables pointing to the same object, like:
let obj1 = { name: "Alice" };
let obj2 = obj1;
Then comparing obj1 and obj2 will return true, because they refer to the same object in memory.
Reference types can be changed, meaning you can modify the properties of an object or the elements of an array.  
For example, if you have an object { name: "Alice" }, you can change it to { name: "Bob" } by modifying the properties of the object.    
For example, if you have an array [1, 2, 3], you can change it to [4, 5, 6] by modifying the elements of the array.  
For Example :
*/
//  let arr = [1,2,3];
//  let personDetails ={
//       name: "Mantu",
//       age: 25,
//       isStudent: true ,
//       hobbies: ["reading", "coding", "gaming"] 
//  }

//  let personDetails2 = personDetails; // Reference to the same object
// // Example of comparing reference types:
// // console.log(arr === [1, 2, 3]); // false (different arrays)
// console.log(personDetails === personDetails2); // true (same reference)
// console.log(typeof (arr)); // "object"
// console.log(typeof (personDetails)); // "object"

// function myfunction() {
//       console.log("This is a function");
// }

// console.log(typeof (myfunction)); // "function"
// let myFunction2 = myfunction; // Reference to the same function      
// console.log(myfunction === myFunction2); // true (same reference)



/*  Comparisons of null and undefined with numbers and other values can lead to unexpected results due to type coercion.
    It's important to understand how JavaScript handles these comparisons to avoid confusion.    
    The following comparisons illustrate how null and undefined behave in comparisons with numbers:
*/
// console.log(null > 0); // false
// console.log(null < 0); // false
// console.log(null >= 0); // true
// console.log(null <= 0); // true
// console.log(null == 0); // false
// console.log(null === 0); // false         


/* Stack and Heap Memory */

let num1 = 42; // Primitive type stored in stack memory
let str1 = "hello"; // Primitive type stored in stack memory
let obj1 = { name: "Alice" }; // Reference type stored in heap memory, with a reference in stack memory
let arr1 = [1, 2, 3]; // Reference type stored in heap memory, with a reference in stack memory        
// Example of stack and heap memory
console.log(num); // 42
console.log(str); // "hello"
console.log(obj); // { name: "Alice" }
console.log(arr); // [1, 2, 3]                  


//  stack memory is used for primitive types and function calls,
//  while heap memory is used for reference types like objects and arrays.   

// Stack memory is faster to access than heap memory,
//  but heap memory can store larger and more complex data structures.    
// Understanding the differences between stack and heap memory is crucial for optimizing performance in JavaScript applications.
// Primitive types are stored directly in the stack,
// while reference types are stored in the heap with a reference in the stack.
// Primitive types are immutable and compared by value,
// while reference types are mutable and compared by reference.   
// In summary, primitive types are stored in stack memory,
// while reference types are stored in heap memory with a reference in stack memory.

//  while reference types are mutable and compared by reference.      