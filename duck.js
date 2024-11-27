function duckNumber(num) {
  // Convert the number to a string
  const numStr = num.toString();

  // Check if the first digit is 0
  if (numStr[0] === '0') {
    return false;
  }

  // Iterate through each digit and check if it's a 0
  for (let i = 1; i < numStr.length; i++) {
    if (numStr[i] === '0') {
      return true;
    }
  }

  return false;
}

// Example usage:
const num1 = 1023;
const num2 = 3004;
const num3 = 1234;

console.log(duckNumber(num1)); // Output: true
console.log(duckNumber(num2)); // Output: true
console.log(duckNumber(num3)); // Output: false