// The Destructuring assingnment syntax is a Javascript expression that makes it possible to unpack values from arrays, or properties from isObjectIdOrHexString, into distinct variables. 

const intro = {
    name: "Ram",
    age: 35,
    deg: "MCS"
}

let {name, age, deg} = intro;
console.log(age);

// This is how we can rename the variables in object destructuring. 
let {name: clientName, age: ageOfClient, deg: degOfClient} = intro;
console.log(ageOfClient);

// This is how we can assign object in object in object destructuring. 

const studentData = {
    student: "John",
    class: 5,
    marks: {
        english: 20,
        math: 30,
        science: 25
    }
}

let {student:studentName, class:className, marks} = studentData;
console.log(marks.math);