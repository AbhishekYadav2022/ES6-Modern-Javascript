// Number & Global Methods in ES6 

// The isFinite() Method 
// The global isFinite() Method returns false if the argument is Infinity or NaN

let num = 5;
let infiniteNumber = -65;

console.log(isFinite(num));
console.log(isFinite(infiniteNumber));

// The global isNaN() method returns true if the argument is NaN. Otherwise it returns false

let a = 5;
let name = "Abhishek";

console.log(isNaN(a));
console.log(isNaN(name));

// The Number.isInteger() Method
// The Number.isInteger() method returns true if the argument is an integer. 
// It is inside number object.

let m = 6;
let n = -6;
let o = 5.5;

console.log(Number.isInteger(m));
console.log(Number.isInteger(n));
console.log(Number.isInteger(o));

