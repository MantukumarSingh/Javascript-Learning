
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
// console.log(trimmedString); // Outputs: "JavaScript is awesome!"(` `).

// Example of string interpolations using template literals :
let user = "Mantu" ;
let welcomeMessage = `Hello , ${user}! welcome to JavaScript World. `;
console.log(welcomeMessage);

// Outputs: "Hello , Mantu! welcome to JavaScript World. "

// Example of using escape characters in strings:
let escapeString = "He said, \"JavaScript is awesome!\" \nLet's learn it.";
console.log(escapeString);
// Outputs:
// He said, "JavaScript is awesome!"
// Let's learn it.
// Example of accessing characters in a string:
let accessString = "JavaScript";
let firstChar = accessString[0]; // 'J'
let lastChar = accessString[accessString.length - 1]; // 't'
console.log(`First Character: ${firstChar}, Last Character: ${lastChar}`);
// Outputs: First Character: J, Last Character: t
// Example of splitting a string into an array:
let csvString = "apple,banana,cherry";
let fruitsArray = csvString.split(","); // ['apple', 'banana', 'cherry]
console.log(fruitsArray);
// Outputs: ['apple', 'banana', 'cherry']
// Example of joining an array into a string:
let wordsArray = ["Hello", "World"];
let joinedString = wordsArray.join(" "); // "Hello World"
console.log(joinedString);
// Outputs: "Hello World"



