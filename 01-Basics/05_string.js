
// Strings in JavaScript are used for storing and manipulating text.
// They are a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks 

// Example of string declarations:
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let backtickString = `Hello, World!`;
// Strings can include letters, numbers, symbols, and spaces.
// Example of a string with various characters:
let complexString = "It's a beautiful day in 2024! #JavaScript @OpenAI";
// Strings can be concatenated using the + operator or template literals.
let greeting = "Hello, " + "World!";
let name = "Alice";
let personalizedGreeting = `Hello, ${name}!`;
// Strings have various methods for manipulation, such as length, toUpperCase, toLowerCase, slice, and replace.
let sampleString  =  "Javascript is fun !";
// console.log(sampleString.length); // Outputs: 19
// console.log(sampleString.toUpperCase()); // Outputs: "JAVASCRIPT IS FUN !"
// console.log(sampleString.toLowerCase()); // Outputs: "javascript is fun !"
// console.log(sampleString.slice(0,10)); // Outputs: "Javascript")
// console.log(sampleString.replace("fun", "awesome"));
// Outputs: "Javascript is awesome !"

// Strings are immutable, meaning once created, they cannot be changed. However, you can create new strings based on existing ones.
let immutableString = "Hello";
let newString = immutableString + ", World!"; // Creates a new string
// console.log(newString); // Outputs: "Hello, World!"

// Understanding strings is essential for tasks such as user input handling, data processing, and web development.
// Practice using strings in various ways to become proficient in JavaScript programming.

// Example of using string methods:
let exampleString = "  JavaScript is awesome!  ";
let trimmedString = exampleString.trim(); // Removes whitespace from both ends
console.log(trimmedString);
