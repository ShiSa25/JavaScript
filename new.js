//function to match the scores
const matchScores = (score1, score2) => {
    if (score1 === score2) {
        return true;
    }
    return false;
};

//function to pick highest score
const pickHighestScore = (score1, score2) => {
    if (score1 > score2) {
        return score1;
    }
    return score2;
};

// function to pick lowest score
const pickLowestScore = (score1, score2) => {
    if (score1 < score2) {
        return score1;
    }
    return score2;
};

// function to calculate the difference between two scores
const calculateDifference = (score1, score2) => {
    return Math.abs(score1 - score2);
};

//function to display the results
const displayResults = (score1, score2) => {
    console.log("Score 1: ", score1);
    console.log("Score 2: ", score2);
    console.log("Scores are equal: ", matchScores(score1, score2));
    console.log("Highest score: ", pickHighestScore(score1, score2));
    console.log("Lowest score: ", pickLowestScore(score1, score2));
    console.log("Difference: ", calculateDifference(score1, score2));
};

//function to write a new function to check if a number is even or odd 
const checkEvenOdd = (number) => {
    if (number % 2 === 0) {
        return "Even";
    }
    return "Odd";
};

//function to calculate the factorial of a number
const calculateFactorial = (number) => {
    if (number === 0) {
        return 1;
    }
    return number * calculateFactorial(number - 1);
};

//function to reverse a string
const reverseString = (str) => {
    return str.split('').reverse().join('');
};

//function to find the largest number in an array
const findLargestNumber = (arr) => {
    let largestNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i];
        }
    }
    return largestNumber;
};

//function to find the smallest number in an array
const findSmallestNumber = (arr) => {
    let smallestNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallestNumber) {
            smallestNumber = arr[i];
        }
    }
    return smallestNumber;
};

//function to calculate the sum of all the numbers in an array
const calculateSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

//function to calculate the average of all the numbers in an array
const calculateAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

//function to find the median of an array
const findMedian = (arr) => {
    let sortedArr = arr.sort((a, b) => a - b);
    let mid = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
        return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    }
    return sortedArr[mid];
};

//function to find the mode of an array
const findMode = (arr) => {
    let mode = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mode) {
            mode = arr[i];
        }
    }
    return mode;
};