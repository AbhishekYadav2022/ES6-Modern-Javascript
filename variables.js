// Variables declared with "var" in Javascript are function scoped.
// Variables declared with "let & const" are block scoped.

var name = "Ram";
function sayHello() {
  // Function scope starts here
  var name = "Abhishek";
  console.log(name);
} // Function scope ends here
sayHello();
console.log(name);

function hello(hi) {
  if (hi) {
    // First block scope starts here
    let name = "John";
    console.log(name);
  } // First block scope ends here

  if (hi) {
    // Second block scope starts here
    var name = "Ram"; // If we don't wirte this line we shall ger name not defined error
    console.log(name);
  } // Second block scope ends here
}

hello(true);
