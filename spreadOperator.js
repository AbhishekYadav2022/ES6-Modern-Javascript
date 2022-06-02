// Spread Operator 

// ES5
// function sum(a,b,c){
//     console.log(a+b+c);
// }
// sum(4,2,4);

// ES6
let arr1 = [4,6,3,4];
console.log(...arr1);

function sum(a,b,...c) {
    console.log(a+b+c);
};

console.log(c);
// sum(...arr1);
