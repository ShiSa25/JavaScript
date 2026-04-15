//JS programs for DSA practice

//write a program to search an element in an array and return its index. If the element is not found, return -1.

// function searchElement(arr, x) {
//     for (let i = 0; i < arr.length ; i++) {
//         if(arr[i] == x) {
//             return i;
//         }
//     }
//     return -1;
// }

// let arr = [2, 4, 0, 1, 9];

// let result =searchElement(arr, 4);

// console.log(result);

//write a program to count the negative numbers in an array.

// function countNegatives(arr) {

//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             count++;
//         }
//     }
//     return count;
// }

// let arr = [2 ,-9, 17, 0, 1, -10, -4, -8];

// let result = countNegatives(arr);

// console.log(result);

//write a program to find the largest element in an array.

// function findLargest(arr) {
//     let largest = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }

// let arr = [5, 0, 10, 8, 17, 1, 99];

// let res = findLargest(arr);
// console.log(res);

//write a program to find 2nd largest element in an array.

// function secondLargest(arr) {
//   let firstlargest = -Infinity;
//   let secondLargest = -Infinity;

//    for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstlargest) {
//         secondLargest = firstlargest;
//         firstlargest = arr[i];
//     }
//     else if( arr[i] > secondLargest && arr[i] != firstlargest) {
//         secondLargest = arr[i];
//     }
//    }
//    return secondLargest;
// }

// let arr = [4, 9, 0, 12, 10, 2, 8, 7, 1]

// let res = secondLargest(arr);
// console.log(res);

//star pattern 1

// let n= 5;

// for (let i = 0; i < n ; i++) {
//     let row = "";
//     for (let j = 0; j < n; j++) {
//         row = row + "*";
//     }
//     console.log(row);
// }

// star pattern 2

// let n = 5;

// for (let i = 0; i < n ; i++) {
//     let row = "";
//     for (let j = 0; j <= i ; j++) {
//         row = row + "*";
//     }
//     console.log(row);
// }

// star pattern 3

// let n = 5; 

// for (let i = 0; i <n ; i++) {

//     let row = "";
//     for (j = 0; j <= i ; j++) {
//         row = row + (j+1) + " ";
//     }
//     console.log(row);
// }

// star pattern 4

// let n = 5; 

// for (let i = 0; i < n ; i++) {

//     let row = "";
//     for (j = 0; j <= i ; j++) {
//         row = row + (i+1) + " ";
//     }
//     console.log(row);
// }

// star pattern 5

// let n = 5;

// for (let i = 0; i < n ; i++) {

//     let row = "";
//     for (let j = 0; j < n-i ; j++) {
//         row = row + (j+1) + " ";
//     }
//     console.log(row);
// }

// star pattern 6

// let n = 5;

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n - (i+1); j++) {
//         row = row + "_";
//     }
//     for (let k = 0; k < i+1 ; k++) {
//         row = row + "*";
//     }
//     console.log(row);
// }

// star pattern 7

// let n = 5;
// let toggle = 1;
// for (let i = 0; i < n ; i++) {
//     let row = "";
    
//     for (let j = 0; j < i+1; j++) {
//         row = row + toggle + " ";

//         if (toggle == 1) {
//             toggle = 0;
//         }
//         else {
//             toggle = 1;
//         }
//     }
//     console.log(row); 
// }

// program to count digits in a number

// let num = -2746347594;
// num = Math.abs(num);
// let count = 0;
// if(num == 0) return 1;
// while (num > 0) {
//     num = Math.floor(num/10);
//     count++;
// }
// console.log(count);

//palindroome check

// let n = 121;
// let temp = n;
// let rev = 0;
// if (n < 0) return false;
// while (temp > 0) {
//     let rem = temp % 10;
//     rev = rev *10 + rem;
//     temp = Math.floor(temp/10);
// }
// if (n == rev) {
//     console.log("Palindrome");
// } else {
//     console.log("Not a Palindrome");
// }

// reverse a 32 bit signed integer

// let n = -24432;

// let ncopy = n;
// n = Math.abs(n);
// let rev = 0;
// while (n > 0) {
//     let rem = n % 10;
//     rev = rev * 10 + rem;
//     n = Math.floor(n/10);
// }

// let limit = Math.pow(2, 31);
// if(rev < -limit || rev > limit) {
//     console.log("0");
// }
// else {
//     console.log((ncopy<0) ? -rev : rev);
// }

