//switch fruit loop by fruit
let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("this is apple");
        break;
    case "mango":
        console.log("this is mango");
        break;
    case "banana":
        console.log("this is banana");
        break;
    default:
        console.log("this is default");
        break;
}

console.log(fruit);



//write a function to find mean of 5 numbers
function mean(a, b, c, d, e) {
    return (a + b + c + d + e) / 5;
}

//code to print perfect numbers from 1 to 1000
function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

for (let i = 1; i <= 1000; i++) {
    if (isPerfectNumber(i)) {
        console.log(i);
    }
}

//code to print prime numbers from 1 to 1000
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 1; i <= 1000; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}

//code to print armstrong numbers from 1 to 1000
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** 3;
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}

for (let i = 1; i <= 1000; i++) {
    if (isArmstrong(i)) {
        console.log(i);
    }
}