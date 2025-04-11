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