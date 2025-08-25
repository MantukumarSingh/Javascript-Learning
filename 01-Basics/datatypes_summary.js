// JavaScript Data Types Summary
// This code provides a summary of JavaScript data types, including primitive and reference types,
// their characteristics, and how they are stored in memory.
// It also includes examples of how to work with these data types and how they behave in comparisons  
// and memory management.
// and how they are compared in JavaScript.
// The code is structured to illustrate the differences between primitive and reference types,
// their mutability, and how they are stored in memory.
// It also includes examples of how to work with these data types and how they behave in comparisons.
// This code is intended for educational purposes to help learners understand JavaScript data types and memory management.

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
// console.log(num); // 42
// console.log(str); // "hello"
// console.log(obj1); // { name: "Alice" }
// console.log(arr1); // [1, 2, 3]                  


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

// Understanding these differences is essential for effective memory management and performance optimization in JavaScript applications.
module.exports = {
  num,
  str,
  // arr,
  // personDetails,
  // personDetails2,
  // myfunction,
  // myFunction2,
  // obj1,
  // arr1
}; 
// The code above provides a comprehensive overview of JavaScript data types, their characteristics, and how they are stored in memory.
// It explains the differences between primitive and reference types, their mutability, and how they are compared.
// The examples illustrate how to work with these data types and how they behave in comparisons.   


// This knowledge is crucial for understanding JavaScript's type system and memory management, which can help developers write more efficient and effective code.
// The code also highlights the importance of understanding how JavaScript handles comparisons, especially with null and undefined values, to avoid unexpected results.
/*********************************************************************************************/
let myYouTubeChannel = "Mantu's Channel";
let newChannelName  = myYouTubeChannel;
newChannelName = "The's Channel";

console.log(newChannelName);

let employeeDetails = {
      name: "Mantu",
      age: 25,
      isStudent: true,
      hobbies: ["reading", "coding", "gaming"]
};
let employeeDetails2 = employeeDetails; // Reference to the same object
employeeDetails2.name = "Mantu Kumar Singh"; // Modifying the object through the reference
console.log(employeeDetails.name); // "Mantu Kumar Singh"
// Example of modifying an object through a reference
console.log(employeeDetails2.name); // "Mantu Kumar Singh"
console.log(employeeDetails2); // { name: "Mantu Kumar Singh", age: 25, isStudent: true, hobbies: ["reading", "coding", "gaming"] }
console.table([employeeDetails, employeeDetails2]);

console.log(typeof employeeDetails); // "object"
console.table(employeeDetails); // Displays the object in a table format;

// Example of modifying an array through a reference
let myArray = [1, 2, 3];
let myArray2 = myArray; // Reference to the same array
myArray2.push(4); // Modifying the array through the reference
console.log(myArray); // [1, 2, 3, 4]
console.log(myArray2); // [1, 2, 3, 4]
console.table(myArray); // Displays the array in a table format
console.table(myArray2); // Displays the array in a table format
console.log(typeof myArray); // "object"
console.log(typeof myArray2); // "object"
// Example of comparing two different objects
let obj3 = { name: "Alice" };
let obj4 = { name: "Alice" }; // Different object with the same properties
console.log(obj3 === obj4); // false (different references)
console.log(obj3.name === obj4.name); // true (same property values)  
// Example of comparing two different arrays
let arr2 = [1, 2, 3];
let arr3 = [1, 2, 3]; // Different array with the same elements
console.log(arr2 === arr3); // false (different references)
console.log(arr2[0] === arr3[0]); // true (same element values)
// Example of comparing a primitive type with a reference type
let num2 = 42; // Primitive type
let obj5 = { value: 42 }; // Reference type with a property value
console.log(num2 === obj5.value); // true (comparing primitive value with property value)

/**********                                            ***********/
/*  What is Stack Memory and Heap Memory  */
// Stack Memory: Used for primitive types and function calls.
// It is a region of memory that stores variables and function calls in a last-in, first-out (LIFO) manner.
// Stack memory is faster to access than heap memory, but it has a limited size.
// When a function is called, a new stack frame is created, and when the function returns, the stack frame is removed.
// Primitive types like numbers, strings, and booleans are stored directly in stack memory.
// For example, when you declare a variable like `let x = 10;`, the value `10` is stored directly in stack memory.
// Stack memory is automatically managed by JavaScript, and variables are removed from the stack when they go out of scope.
// It is important to note that stack memory is not suitable for storing large or complex data structures, as it
// has a limited size and can lead to stack overflow errors if too much memory is used. 

// Heap Memory: Used for reference types like objects and arrays.
// It is a region of memory that stores objects and arrays, which can be larger and more complex than primitive types.
// Heap memory is slower to access than stack memory, but it can store larger and more complex data structures.
// When you create an object or an array, JavaScript allocates memory in the heap and stores a reference to that memory in the stack.
// For example, when you create an object like `let obj = { name: "Alice" };`, the object is stored in heap memory, and a reference to that object is stored in the stack.
// Heap memory is dynamically managed, meaning that JavaScript can allocate and deallocate memory as needed.
// It is important to manage heap memory carefully, as excessive memory usage can lead to performance issues and memory leaks.
// JavaScript uses a garbage collector to automatically free up memory that is no longer needed, but developers should still be mindful of
// how they use memory to avoid unnecessary allocations and deallocations.  
