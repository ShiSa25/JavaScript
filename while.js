// n = -346276354
// count = 0;
// n = Math.abs(n);
// while (n > 0) {
//     n = Math.floor(n/10);
//     count++;
// }
// console.log(count);

//palindrome check

// let n = 1221;
// let num = n;
// let rev = 0;
//
// while (n > 0) {
//    let rem = n % 10;
//     rev = (10 * rev) + rem;
//     n = Math.floor(n/10);
// }
//
// if (rev === num) {
//     console.log("Palindrome");
// }
// else {
//     console.log("Not a Palindrome");
// }

// let n = -123564;
// let num = n;
// n = Math.abs(n);
// let rev = 0;
// while (n > 0 ) {
//     let rem = n % 10;
//     rev = (10 * rev) + rem;
//     n = Math.floor(n/10);
// }
// let limit = Math.pow(2 , 31);
// if (rev < -limit || rev > limit) {console.log("Overflow");}
// else if (num < 0) {
//     console.log(-rev);
// } else {console.log(rev);}

// code to remove duplicates from an array
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[k]) {
        k++;
        nums[k] = nums[i];
    }
}
console.log(k + 1);
console.log(nums);
