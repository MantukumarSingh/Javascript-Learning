// let num1 = 10;
// let num2 = 20;
// // console.log( num1 = num2);
// console.log( num1 == num2);

// console.log( 2 > 3);
// console.log( 2 < 3);
// console.log(null == 1);
// console.log(null == null);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof(null));
// console.log(typeof(Boolean(null)));
// console.log(typeof(Boolean));
// console.log("2" > 1);
// console.log(null == 1);


// console.log(null == 0);
// console.log(null == 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(null > 1 );
// console.log(null <= 1);
// console.log(null < 1 );
// console.log(null == 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// === 

// console.log("2" === 2);

/**** Comparsion of null datatypes work differently *****/

console.log(null > 0 ); // false
console.log(null < 0 ); // false
console.log(null >= 0); // true 
console.log(null >= 0); // true  which is same as null == 0 


// Explanation of the above comparisons:// null > 0 evaluates to false because null is not greater than 0.
// null < 0 evaluates to false because null is not less than 0.
// null >= 0 evaluates to true because null is treated as 0 in this comparison.     
// null <= 0 evaluates to true because null is treated as 0 in this comparison.
// null == 0 evaluates to false because null is not equal to 0.
// null > 0 is false because null is not greater than 0.
// null < 0 is false because null is not less than 0.
// null >= 0 is true because null is treated as 0 in the comparison.
// null <= 0 is true because null is treated as 0 in the comparison.
// null == 0 is false because null is not equal to 0.
// null > 0 is false because null is not greater than 0.
// Here null is treated as 0 in the comparison  
// so null >= 0 is true, but null > 0 is false because null is not greater than 0 .
/* In JavaScript, null is a special value that represents the absence of any object value.
When comparing null with a number, JavaScript treats null as 0 for the purpose of comparison
but does not consider it greater than or less than 0.
This is why null >= 0 evaluates to true, while null > 0 evaluates to false

// This behavior is part of JavaScript's type coercion rules, which can sometimes lead to unexpected results
// when comparing different types of values.        
// It is important to be aware of these rules to avoid confusion and bugs in your code.
// Always use strict equality (===) to avoid type coercion issues in comparisons.   
// This is why null == 0 evaluates to false, while null >= 0 evaluates to true.
// To avoid confusion, it is generally recommended to use strict equality (===) for comparisons in JavaScript,
// as it does not perform type coercion and checks both value and type equality.            
*/


/* The reason is that an equality check == and compariosn > , < , >= , <= work differently . */
/* Comparison convert null to a number, treating it as 0. That's why null >= 0 and null > 0 is false */


/* comparion of undefined  */
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
console.log(undefined == 0); // false
console.log(undefined < 1); // false
console.log(undefined <= 1); // false
console.log(undefined == 1); // false
/* explaination = "In JavaScript, undefined is a special value that represents the absence of a value or an uninitialized variable.
   When comparing undefined with a number, JavaScript treats undefined as NaN (Not-a-Number) for the purpose of comparison.
   This is why all comparisons involving undefined and numbers return false,
   except for strict equality checks (===) which will also return false."; 
*/
console.log(undefined === 1);
 