//code to print sum of 1 to 1000 with AP
// function sumOfAP(a, d, n) {
//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//         sum += a + (i * d);
//     }
//     return sum;
// }

// sum = sumOfAP(1, 1, 1000);
// console.log(sum);

//code to print sum of 1 to 1000 with GP
// function sumOfGP(a, r, n) {
//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//         sum += a * Math.pow(r, i);
//     }
//     return sum;
// }
// sum = sumOfGP(1, 2, 1000);
// console.log(sum);

//code to generate fibonacci series
function fibonacci(n) {
    let a = 0;
    let b = 1;
    let c;
    console.log(a);
    console.log(b);
    for (let i = 2; i < n; i++) {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}
fibonacci(10);
