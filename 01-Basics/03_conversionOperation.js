// // console.log("Conversion Operations");
// // Convert string to number

// let strNumber = "123.45";
// let numFromStr = Number(strNumber); 
// // console.log(numFromStr); // 123.45

// // Convert number to string
// let num = 456;
// let strFromNum = String(num);
// // console.log(strFromNum); // "456"

// // Convert boolean to string
// let bool = true;
// let strFromBool = String(bool);
// // console.log(strFromBool); // "true"

// // Convert string to boolean
// let strBool = "false";  
// let boolFromStr = (strBool === "true");
// // console.log(boolFromStr); // false

// // Convert number to boolean
// let numZero = 0;
// let boolFromNum = Boolean(numZero);
// // console.log(boolFromNum); // false  

// // Convert string to number with parseInt
// let strInt = "100px";   
// let intFromStr = parseInt(strInt, 10);
// // console.log(intFromStr); // 100     

// // Convert string to number with parseFloat
// let strFloat = "123.45abc"; 
// let floatFromStr = parseFloat(strFloat);
// // console.log(floatFromStr); // 123.45

// // Convert boolean to number
// let boolTrue = true;    
// let numFromBool = Number(boolTrue);
// // console.log(numFromBool); // 1     

// // Convert boolean false to number
// let boolfalse = false;
// let numFromBollFalse = Number( boolfalse);
// // console.log(numFromBollFasle);
// // 0

// // Convert null to number
// let nullValue = null;
// let nullFromNum = Number(nullValue);
// // console.log(nullFromNum);
// // 0

// // Convert undefined to number
// let undefinedValue = undefined;
// let undefinedFromNum = Number(undefinedValue);
// // console.log(undefinedFromNum);
// // NaN

// // Convert NaN to string
// let nanValue = NaN;
// let nanFromStr = String(nanValue);
// // console.log(nanFromstr);
// // "NaN"

// // Convert NaN to boolean
// let nanValue2 = NaN;
// let boolFromNan = Boolean(nanValue2);
// // console.log(boolFromNan); // false

// // Convert NaN to number
// let nanValue3 = NaN;
// let numFromBool2 = Number(nanValue3);
// // console.log(numFromBool2);
// // NaN  

// // Convert empty string to number
// let emptyStr = "";
// let numFromEmptyStr = Number(emptyStr);
// // console.log(numFromEmptyStr);
// // 0

// // Convert empty string to boolean
// let emptyStrBool = Boolean(emptyStr);
// console.log(emptyStrBool); // false

// // Convert empty string to string
// // let emptyStrTostr = String(emptyStr);
// // console.log(emptyStrTostr);
// // ""

// // Convert empty string to boolean  
// let emptyStrBool2 = Boolean(emptyStr);
// // console.log(emptyStrBool2); // false


// // console.log(typeof emptyStrBool2); // "boolean"
// // console.log(tyoeof(empStrBool2)); // "boolean"

/******************************** Operation Summary ********************************/
// console.log("Operation Summary");
// console.log("String to Number: " + numFromStr); // 123.45
// console.log("Number to String: " + strFromNum); // "456"
// console.log("Boolean to String: " + strFromBool); // "true"


console.log("3" + 4 );
console.log("2" - "2");
let fisrtName ="Mantu";
let lastName = "Kumar";
let fullName = fisrtName + lastName;
console.log(fullName); // MantuKumar
console.log(`"hello" + "  " + ${fisrtName} + " " + ${lastName}`); // "hello" + "  " + Mantu + " " + Kumar


let isLoggedIn = true;
let numFromIsloggedIn = Number(isLoggedIn);
console.log(numFromIsloggedIn);

let strNumber = String(numFromIsloggedIn);
console.log(strNumber); // "1"
