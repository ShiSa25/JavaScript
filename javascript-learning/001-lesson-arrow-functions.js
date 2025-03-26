/*
 * ARROW FUNCTIONS IN JAVASCRIPT
 * ============================
 * 
 * Arrow functions are a more concise way to write functions in JavaScript,
 * introduced in ES6 (ECMAScript 2015).
 */

// Traditional function expression
const traditionalGreet = function(name) {
  return "Hello, " + name + "!";
};

// The same function as an arrow function
const arrowGreet = (name) => {
  return "Hello, " + name + "!";
};

// Even more concise - when there's just one parameter, parentheses are optional
const shortArrowGreet = name => {
  return "Hello, " + name + "!";
};

// When the function body is a single expression, curly braces and 'return' can be omitted
const superShortGreet = name => "Hello, " + name + "!";

// Arrow functions with multiple parameters need parentheses
const introduce = (name, age) => "My name is " + name + " and I am " + age + " years old.";

// Arrow functions with no parameters require empty parentheses
const sayHi = () => "Hi there!";

/*
 * Try running this file with Node.js to see the output of these functions!
 * You can use: node 001-lesson-arrow-functions.js
 */

// Let's add some console.log statements to see the results
console.log(traditionalGreet("Shivanshu"));
console.log(arrowGreet("Shivanshu"));
console.log(shortArrowGreet("Shivanshu"));
console.log(superShortGreet("Shivanshu"));
console.log(introduce("Shivanshu", 25));
console.log(sayHi());
