// Default Parameters In ES6 

// Multiplication of two numbers 

// ES5 
function multiply(a,b){
    console.log(a*b);
}
multiply(5,10);
// This will print "NaN" 
multiply(6);

// ES6 
function mult(x,y){
    y = (typeof y !== 'undefined' ? b : 2)
    console.log(x*y);
}
mult(8);


// Or we can assign the default value of the variable while defining the function
const multi = (m, n=4) => {
    console.log(`The multiplication of m and n is ${m*n}`)
}
multi(5);