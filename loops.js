//code to print sum of 1 to 1000 with AP
function sumOfAP(a, d, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += a + (i * d);
    }
    return sum;
}

sum = sumOfAP(1, 1, 1000);
console.log(sum);