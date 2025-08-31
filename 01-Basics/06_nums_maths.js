
let score = 100;
console.log(" Initial Score : " + score ); // Initial Score : 100
console.log( typeof(score) ); // number

// new Number() constructor
// It creates a Number object.  
// It is not a number data type but an object type
// Generally, it is not recommended to create Number objects.

let balance = new Number(100);
console.log( " Initial Balance : " + balance ); // Initial Balance : 100
console.log( balance ); // [Number: 100]
console.log( typeof(balance)); // object

// toString() method of Number object
console.log( balance.toString() ); // 100
console.log( typeof(balance));

let balanceUpdated = balance.toString();
console.log(balanceUpdated);
console.log( typeof (balanceUpdated) ); // string(100 is now string type not object type)

console.log(balanceUpdated.length); // 3
console.log(balanceUpdated[0]); // 1
console.log(balanceUpdated[1]); // 0
console.log(balanceUpdated[2]); // 0
// console.log(balanceUpdated[3]); // undefined

// toFixed() method of Number object
// It converts a number into a string, rounding to a specified number of decimals.

console.log(balance.toFixed()) ; // 100.00

//console.log(balanceUpdated.toFixed()) ; // TypeError: balanceUpdated.toFixed is not a function
// balanceUpdated is string type so it doesn't have toFixed() method    

let bonus = 200;
console.log( bonus.toFixed(1) ); // 200.0
console.log( bonus.toFixed(2) ); // 200.00
console.log( bonus.toFixed(3) ); // 200.000


let otherNumber = 123.456789;
console.log( otherNumber.toFixed()); // 123
console.log( otherNumber.toFixed(1)); // 123.5
console.log( otherNumber.toFixed(2)); // 123.46
console.log( otherNumber.toPrecision()); // 123.456789
console.log(otherNumber.toPrecision(4)); // 123.5
console.log(otherNumber.toPrecision(7)); // 123.4568
console.log(otherNumber.toPrecision(10)); // 123.4567890
console.log(otherNumber.toPrecision(2)); // 1.2e+2

console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("")); // 0

// toLocaleString() method of Number object
// It converts a number into a string, using local language format.
let newBalance = 1000000;
console.log( newBalance.toLocaleString() ); // 1,000,000
console.log( newBalance.toLocaleString('en-IN') ); // 10,00,000