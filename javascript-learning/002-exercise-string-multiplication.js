/*
 * String Multiplication Exercise
 * =============================
 *
 * Problem: Given two non-negative integers num1 and num2 represented as strings, 
 * return the product of num1 and num2, also represented as a string.
 *
 * Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
 *
 * Examples:
 * - Input: num1 = "2", num2 = "3" → Output: "6"
 * - Input: num1 = "123", num2 = "456" → Output: "56088"
 *
 * Constraints:
 * - 1 <= num1.length, num2.length <= 200
 * - num1 and num2 consist of digits only
 * - Both num1 and num2 do not contain any leading zero, except the number 0 itself
 */

/**
 * Multiplies two numbers represented as strings
 * @param {string} num1 - First number as string
 * @param {string} num2 - Second number as string
 * @return {string} - Product as string
 */
function multiply(num1, num2) {
  // Edge cases: if either number is 0, the product is 0
  if (num1 === '0' || num2 === '0') return '0';
  
  // Initialize an array to store the result
  // The maximum length of the result will be num1.length + num2.length
  const result = new Array(num1.length + num2.length).fill(0);
  
  // Start from right to left (least significant digit first)
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      // Get the current digits
      const digit1 = parseInt(num1[i]);
      const digit2 = parseInt(num2[j]);
      
      // Calculate the product and add it to the appropriate position
      const position = i + j + 1; // +1 because we're 0-indexed
      const product = digit1 * digit2 + result[position];
      
      // Update the current position and carry over if needed
      result[position] = product % 10;
      result[position - 1] += Math.floor(product / 10);
    }
  }
  
  // Convert the result array to a string and remove leading zeros
  let resultString = result.join('');
  // Remove leading zeros
  resultString = resultString.replace(/^0+/, '');
  
  return resultString;
}

// Test cases
console.log(multiply("2", "3")); // Should output: "6"
console.log(multiply("123", "456")); // Should output: "56088"
