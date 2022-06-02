// Spread Operator 

// ES5
// function sum(a,b,c){
//     console.log(a+b+c);
// }
// sum(4,2,4);

// ES6
let arr1 = [4,6,3];
console.log(...arr1);

function sum(a,b,c) {
    console.log(a+b+c);
};

sum(...arr1);

// Replace Concat()
let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [7,8,9];

array1 = array1.concat(array2);
console.log(array1);

// In ES6
array1 = [...array1,...array2,...array3];
console.log(array1);

// Replace copy()
let arrA = [11,12,13];
// let arrB = arrA;

// If we push two more values in arrB 
// It adds the values in arrA also
// arrB.push(14, 15);

// console.log(arrA);
// console.log(arrB);

// In ES6
let arrB = [...arrA,14,15,16];

console.log(arrA);
console.log(arrB);