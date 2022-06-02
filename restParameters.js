// Rest Parameters

// ES5

// 🤣🤣🤣🤣🤣
function sum(a,b,c,d,f,g,h,i,j){
    console.log(a+b+c+d+f+g+h+i+j);
}
sum(3,4,2,5,3,6,6,7,4,2);

// ES6

function addition(...nums){
    console.log(...nums);
    let total = 0;
    for (let i of nums){
        total += i;
    };
    console.log(total);
};

addition(1,4,3,7,8,3,4);