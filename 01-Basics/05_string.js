
// Strings in JavaScript are used for storing and manipulating text.
// They are a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks  ()

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
// console.log(greeting); // Outputs: Hello, World!
// console.log(personalizedGreeting); // Outputs: Hello, Alice!

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
console.log(accessString.length); 
// Outputs: 10
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

// Example of checking if a string includes a substring:
let mainString = "JavaScript is fun!";
let includesFun = mainString.includes("fun"); // true
console.log(includesFun);
// Outputs: true

// Example of repeating a string:
let repeatString = "Ha! ".repeat(3); // "Ha! Ha! Ha! "
console.log(repeatString);
// Outputs: "Ha! Ha! Ha! "

// Example of converting a string to an array of characters:
let charArray = Array.from("Hello"); // ['H', 'e', 'l', 'l', 'o']
console.log(charArray);
// Outputs: ['H', 'e', 'l', 'l', 'o']

// Example of finding the index of a substring:
let indexString = "JavaScript is fun!";
let index = indexString.indexOf("fun"); // 15
console.log(index);
// Outputs: 15

// Example of checking if a string starts or ends with a specific substring:
let checkString = "JavaScript is fun!";
let startsWithJava = checkString.startsWith("Java"); // true
let endsWithFun = checkString.endsWith("fun!"); // true
console.log(`Starts with 'Java': ${startsWithJava}, Ends with 'fun!': ${endsWithFun}`);
// Outputs: Starts with 'Java': true, Ends with 'fun!': true

// Example of using the charAt method to get a character at a specific index:
let charAtString = "JavaScript";
let charAtIndex2 = charAtString.charAt(2); // 'v'
console.log(charAtIndex2);
// Outputs: 'v'

// Example of using the substring method to extract a part of a string:
let substringString = "JavaScript is fun!";
let extractedSubstring = substringString.substring(0, 10); // "JavaScript"
console.log(extractedSubstring);
// Outputs: "JavaScript"

// Example of using the concat method to join strings:
let concatString1 = "Hello, ";
let concatString2 = "World!";
let fullConcatString = concatString1.concat(concatString2); // "Hello, World!"
console.log(fullConcatString);
// Outputs: "Hello, World!"

// Example of using the padStart and padEnd methods to add padding to a string:
let padString = "5";
let paddedStartString = padString.padStart(3, "0"); // "005"
let paddedEndString = padString.padEnd(3, "0"); // "500"
console.log(`Padded Start: ${paddedStartString}, Padded End: ${paddedEndString}`);
// Outputs: Padded Start: 005, Padded End: 500
// Example of using the match method to find matches in a string using a regular expression:




