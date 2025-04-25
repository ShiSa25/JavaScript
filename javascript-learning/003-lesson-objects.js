/*
 * JAVASCRIPT OBJECTS
 * =================
 * Objects are collections of key-value pairs (properties) and are fundamental
 * to JavaScript programming.
 */

// 1. Object Creation
// -----------------
// Object literal notation
const person = {
    name: "John",
    age: 30,
    isEmployed: true
};

// Using constructor
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";

// 2. Accessing Properties
// ----------------------
console.log(person.name);        // Dot notation
console.log(person["age"]);      // Bracket notation

// 3. Adding and Modifying Properties
// --------------------------------
person.email = "john@example.com";    // Add new property
person.age = 31;                      // Modify existing property
delete person.isEmployed;             // Delete property

// 4. Object Methods
// ----------------
const calculator = {
    value: 0,
    add(x) {
        this.value += x;
    },
    subtract: function(x) {        // Traditional method syntax
        this.value -= x;
    }
};

// 5. Object Property Descriptors
// ----------------------------
const settings = {};
Object.defineProperty(settings, 'readonly', {
    value: 42,
    writable: false,
    enumerable: true,
    configurable: false
});

// 6. Object Destructuring
// ----------------------
const { name, age } = person;
console.log(name, age);

// 7. Spread and Rest with Objects
// -----------------------------
const baseConfig = { theme: 'dark', language: 'en' };
const userConfig = { ...baseConfig, fontSize: 14 };

// 8. Object Methods from Object Class
// --------------------------------
console.log(Object.keys(person));         // Get array of keys
console.log(Object.values(person));       // Get array of values
console.log(Object.entries(person));      // Get array of [key, value] pairs
const frozen = Object.freeze(person);     // Make object immutable
const sealed = Object.seal(car);          // Prevent adding/deleting properties

// 9. Object Property Shorthand
// --------------------------
const name2 = "Jane";
const age2 = 25;
const user = { name2, age2 };            // Same as { name2: name2, age2: age2 }

// 10. Computed Property Names
// -------------------------
const propertyName = "dynamicKey";
const dynamic = {
    [propertyName]: "dynamic value",
    [`computed${propertyName}`]: 42
};

// 11. Object References
// -------------------
const obj1 = { value: 10 };
const obj2 = obj1;                // Reference, not copy
obj2.value = 20;
console.log(obj1.value);          // Also 20

// 12. Shallow vs Deep Clone
// -----------------------
const shallow = Object.assign({}, person);    // Shallow clone
const deep = JSON.parse(JSON.stringify(person)); // Deep clone (with limitations)

// 13. Object Property Existence Checks
// ---------------------------------
console.log('name' in person);              // true
console.log(person.hasOwnProperty('age'));  // true

// 14. Object Inheritance
// --------------------
const parent = {
    greet() {
        console.log("Hello!");
    }
};

const child = Object.create(parent);
child.name = "Child Object";

// 15. Object Property Getters and Setters
// ------------------------------------
const account = {
    _balance: 0,
    get balance() {
        return `$${this._balance}`;
    },
    set balance(value) {
        if (value >= 0) {
            this._balance = value;
        }
    }
};

// Example Usage
console.log("\n=== Example Usage ===");
account.balance = 100;
console.log(account.balance);          // "$100"
account.balance = -50;                 // Won't set due to validation
console.log(account.balance);          // Still "$100"

// Practice Exercise
console.log("\n=== Practice Exercise ===");
const library = {
    books: [],
    addBook(title, author) {
        this.books.push({ title, author, id: this.books.length + 1 });
    },
    removeBook(id) {
        this.books = this.books.filter(book => book.id !== id);
    },
    getAllBooks() {
        return this.books;
    }
};

library.addBook("1984", "George Orwell");
library.addBook("The Hobbit", "J.R.R. Tolkien");
console.log(library.getAllBooks());

//code to print star pattern
for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "*";
    }
    console.log(str);
}

//function to write mobile regex
function isMobileNumberValid(number) {
    const regex = /^\+91\d{10}$/;
    return regex.test(number);
}

//code to fetch data from api
const fetch = require('node-fetch');
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));

//code to convert date to string
const date = new Date();
console.log(date.toString());

