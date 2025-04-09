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

if (fruit == "apple") {
    console.log("this is apple");
} else if (fruit == "mango") {
    console.log("this is mango");
} else if (fruit == "banana") {
    console.log("this is banana");
} else {
    console.log("this is default");
}
