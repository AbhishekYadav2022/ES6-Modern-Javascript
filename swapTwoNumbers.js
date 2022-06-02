// Program to swap two numbers without using third variable

// Before
// let a = 5;
// let b = 10;

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);
// console.log(c);

// In ES6 
let a = 5;
let b = 10;

[a,b] = [b,a];

console.log(a);
console.log(b);
