
// Data Type Conversions in JavaScript

// String to Number

let strNumber = "123";
let strFloat = "45.67";
let strInvalid = "abc";

console.log(Number(strNumber));    // 123
console.log(parseInt(strFloat));   // 45
console.log(parseFloat(strFloat)); // 45.67
console.log(Number(strInvalid));   // NaN

// Using unary plus
console.log(+strNumber); // 123

// Number to String
let num = 100;

console.log(String(num));     // "100"
console.log(num.toString());  // "100"
console.log("" + num);        // "100"

// Boolean Conversions
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean("hello"));  // true
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false

// Boolean to Number
console.log(Number(true));   // 1
console.log(Number(false));  // 0

// Number to Boolean
console.log(Boolean(10));    // true
console.log(Boolean(-5));    // true
console.log(Boolean(0));     // false

// Other Common Conversions

// Null and Undefined
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN

// Arrays
console.log(Number([]));        // 0
console.log(Number([10]));      // 10
console.log(Number([1, 2]));    // NaN

// Objects
console.log(String({}));        // "[object Object]"
console.log(Number({}));        // NaN

// Type Checking
let value = "50";
console.log(typeof value);        // string
value = Number(value);
console.log(typeof value);        // number
