// JavaScript Strings Guide
// ======================

// 1. String Creation
// -----------------
// Using string literals
const singleQuotes = 'Hello World';
const doubleQuotes = "Hello World";
const backticks = `Hello World`;

// Using String constructor
const stringObject = new String("Hello World");

// 2. Template Literals (String Interpolation)
// -----------------------------------------
const name = "John";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

// 3. String Properties
// -------------------
const text = "Hello World";
console.log(text.length); // 11
console.log(text.constructor); // [Function: String]

// 4. String Methods
// ----------------

// Case manipulation
console.log(text.toUpperCase()); // "HELLO WORLD"
console.log(text.toLowerCase()); // "hello world"

// Searching and finding
console.log(text.indexOf("World")); // 6
console.log(text.lastIndexOf("l")); // 9
console.log(text.includes("World")); // true
console.log(text.startsWith("Hello")); // true
console.log(text.endsWith("World")); // true

// Extracting substrings
console.log(text.slice(0, 5)); // "Hello"
console.log(text.substring(0, 5)); // "Hello"
console.log(text.substr(0, 5)); // "Hello" (deprecated)

// Trimming whitespace
const paddedText = "   Hello World   ";
console.log(paddedText.trim()); // "Hello World"
console.log(paddedText.trimStart()); // "Hello World   "
console.log(paddedText.trimEnd()); // "   Hello World"

// Replacing content
console.log(text.replace("World", "JavaScript")); // "Hello JavaScript"
console.log(text.replaceAll("l", "L")); // "HeLLo WorLd"

// Splitting and joining
const words = text.split(" "); // ["Hello", "World"]
console.log(words.join("-")); // "Hello-World"

// Padding
console.log(text.padStart(15, "*")); // "****Hello World"
console.log(text.padEnd(15, "*")); // "Hello World****"

// 5. String Comparison
// -------------------
const str1 = "Hello";
const str2 = "hello";
console.log(str1 === str2); // false (case-sensitive)
console.log(str1.toLowerCase() === str2.toLowerCase()); // true

// 6. Unicode and Special Characters
// --------------------------------
const unicode = "Hello\u0020World"; // Space using Unicode
const specialChars = "Line 1\nLine 2\tTabbed"; // Newline and tab
console.log(specialChars);

// 7. String Concatenation
// ----------------------
const firstName = "John";
const lastName = "Doe";
console.log(firstName + " " + lastName); // "John Doe"
console.log(`${firstName} ${lastName}`); // "John Doe"
console.log(firstName.concat(" ", lastName)); // "John Doe"

// 8. String Immutability
// ---------------------
let immutable = "Hello";
immutable[0] = "h"; // This won't work - strings are immutable
console.log(immutable); // Still "Hello"

// 9. Regular Expressions with Strings
// ---------------------------------
const email = "user@example.com";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test(email)); // true

// 10. String to Array and Array to String
// -------------------------------------
const str = "Hello";
const arr = Array.from(str); // ["H", "e", "l", "l", "o"]
console.log(arr.join("")); // "Hello"

// 11. String Methods with Regular Expressions
// -----------------------------------------
const textWithNumbers = "Hello123World456";
console.log(textWithNumbers.match(/\d+/g)); // ["123", "456"]
console.log(textWithNumbers.replace(/\d+/g, "X")); // "HelloXWorldX"

// 12. String Length and Character Access
// ------------------------------------
const sample = "JavaScript";
console.log(sample.length); // 10
console.log(sample[0]); // "J"
console.log(sample.charAt(0)); // "J"
console.log(sample.charCodeAt(0)); // 74 (Unicode value)

// 13. String Iteration
// -------------------
for (let char of sample) {
    console.log(char);
}

// 14. String Search Methods
// ------------------------
const searchText = "Hello World, Hello JavaScript";
console.log(searchText.search("World")); // 6
console.log(searchText.match(/Hello/g)); // ["Hello", "Hello"]
console.log(searchText.matchAll(/Hello/g)); // Returns an iterator

// 15. String Localization
// ----------------------
const number = 1234.56;
console.log(number.toLocaleString()); // "1,234.56"
console.log(number.toLocaleString('de-DE')); // "1.234,56" (German format)
