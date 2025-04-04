//program to print the marks of a student in an obj using for loop

//let obj = {harry : 98, rohan : 70, akash :7}

/*using for in loop
for (let key in obj) {
     console.log(key, obj[key]);   
}

//using for of loop
for (let key of Object.keys(obj)) {
    console.log(key, obj[key]);
}*/

//using for loop
//for (let i = 0; i < Object.keys(obj).length; i++) {
//    console.log(Object.keys(obj)[i], obj[Object.keys(obj)[i]]);
//}

//var a = b = c = 10;
//console.log(a, b, c);

//program to print "try again" until the user enters 100
/*let num = 0;
while (num != 100) {
    num = parseInt(prompt("Enter a number"));
    if (num == 100)
        console.log("good");
    else 
        console.log("try again");
}*/

//func to find mean of 5 nums


// let allUsers = [{
//     firstName: 'shiva',
//     gender: 'male'
// }, {
//     firstName: 'sid',
//     gender: "male"
// }, {
//     firstName: 'betu',
//     gender: 'femaale'
// }]

// for (let i = 0; i < allUsers.length; i++) {
//     if (allUsers[i]['gender'] == 'male') {
//         console.log(allUsers[i]['firstName'])
//     }    
// }

// console.log('1'%5);
// console.log(1+'1');

 const prompt = require('prompt-sync')();
// let age = prompt("what is your age");
// age = Number(age);
// console.log(age);

//Nan, type casting, Math.floor,ceil,round,trunc,pow,sqrt,abs,max,min,random,tofixed

// let a= 20;
// let b= 30;
// a = a + b;
// b = a - b;
// a = a - b;

// [a, b] = [b, a];
// console.log(a, b);

// let a= 3472;
// let b= a%10;
// let c= Math.floor(a/10);

// console.log(b,c);

//console.log(13 === '13');

// let a = true;
// a++;
// console.log(a);

// let i = 11
// let j = ++(++i);
// console.log(j);

//console.log(Math.trunc((Math.random() * 9000)+1000));

// let unit = Number(prompt("enter units"));
// let bill = 0;

// if(unit>400) {
//     bill = (unit-400) * 13;
//     unit = 400;
// } if(unit>200 && unit<=400) {
//     bill += (unit-200) * 8;
//     unit = 200;
// } if(unit>100 && unit<=200) {
//     bill += (unit-100) * 6;
//     unit = 100;
// } 
// bill += unit *4;
// console.log(bill);

//ternary operator and nested ternary operator and switch cases
console.log(typeof(x));
console.log(typeof(y));