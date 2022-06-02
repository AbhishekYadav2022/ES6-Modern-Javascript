// This is one of the most popular feature of ES6 

// ES5
var sum = function(){
    let a = 5;
    let b = 10;
    return a+b;
}

console.log(sum());

// ES6
const product = () => {
    let a = 15;
    let b = 20; 
    return a*b;
}
console.log(product());

let x = 504;
let y = 344;

// Use this 
// const sumOnNum = () => {return x+y};

// Or this
const sumOnNum = () => x+y;

console.log(sumOnNum());