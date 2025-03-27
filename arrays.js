// JavaScript Arrays - Comprehensive Guide

// 1. Array Creation
console.log('=== Array Creation ===');
const numbers = [1, 2, 3, 4, 5];                    // Array literal
const fruits = new Array('apple', 'banana', 'orange'); // Array constructor
const mixed = [1, 'hello', true, null, { name: 'John' }]; // Mixed data types
const matrix = [[1, 2], [3, 4]];                    // Nested array

console.log(numbers, fruits, mixed, matrix);

// 2. Basic Array Operations
console.log('\n=== Basic Operations ===');
// Accessing elements
console.log('First element:', numbers[0]);          // First element
console.log('Last element:', numbers[numbers.length - 1]); // Last element

// Modifying elements
numbers[1] = 20;                                    // Change element
console.log('Modified array:', numbers);

// Array properties
console.log('Array length:', numbers.length);

// 3. Array Methods - Adding/Removing Elements
console.log('\n=== Adding/Removing Elements ===');
const stack = [1, 2, 3];
stack.push(4);                                      // Add to end
console.log('After push:', stack);
stack.pop();                                        // Remove from end
console.log('After pop:', stack);
stack.unshift(0);                                   // Add to beginning
console.log('After unshift:', stack);
stack.shift();                                      // Remove from beginning
console.log('After shift:', stack);

// 4. Array Methods - Modifying Arrays
console.log('\n=== Modifying Arrays ===');
const letters = ['a', 'b', 'c', 'd', 'e'];
// Slice - doesn't modify original array
console.log('Slice:', letters.slice(1, 3));         // ['b', 'c']
// Splice - modifies original array
letters.splice(1, 2, 'x', 'y');                     // Remove 2 elements from index 1, add 'x', 'y'
console.log('After splice:', letters);

// 5. Array Methods - Searching and Filtering
console.log('\n=== Searching and Filtering ===');
const scores = [75, 80, 85, 90, 95];
console.log('Index of 85:', scores.indexOf(85));    // Find index
console.log('Includes 100?:', scores.includes(100)); // Check existence
// Filter scores above 80
const highScores = scores.filter(score => score > 80);
console.log('High scores:', highScores);

// 6. Array Transformation Methods
console.log('\n=== Array Transformations ===');
// Map - create new array with transformed values
const doubled = numbers.map(num => num * 2);
console.log('Doubled numbers:', doubled);

// Reduce - compute single value from array
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of numbers:', sum);

// 7. Array Iteration Methods
console.log('\n=== Array Iteration ===');
// forEach
fruits.forEach((fruit, index) => {
    console.log(`Fruit ${index + 1}: ${fruit}`);
});

// 8. Sorting Arrays
console.log('\n=== Array Sorting ===');
const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
console.log('Sorted numbers:', [...unsorted].sort((a, b) => a - b));
console.log('Sorted strings:', [...fruits].sort());

// 9. Advanced Array Methods
console.log('\n=== Advanced Methods ===');
// Find - get first element meeting condition
const firstHighScore = scores.find(score => score > 85);
console.log('First high score:', firstHighScore);

// Some/Every - test array elements
console.log('Some scores > 90:', scores.some(score => score > 90));
console.log('All scores > 70:', scores.every(score => score > 70));

// 10. Array Destructuring and Spread
console.log('\n=== Destructuring and Spread ===');
const [first, second, ...rest] = numbers;           // Array destructuring
console.log('Destructured:', first, second, rest);

const combined = [...numbers, ...scores];           // Spread operator
console.log('Combined arrays:', combined);

// Practice Exercise
console.log('\n=== Practice Exercise ===');
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 }
];

// Find average score
const avgScore = students.reduce((acc, student) => acc + student.score, 0) / students.length;
console.log('Average score:', avgScore);

// Get names of passing students (score > 80)
const passingStudents = students
    .filter(student => student.score > 80)
    .map(student => student.name);
console.log('Passing students:', passingStudents);