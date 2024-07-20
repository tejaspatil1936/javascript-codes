let text = "5";
let paddedText = text.padEnd(4,"x");
console.log(paddedText);


// The padEnd() method is a string method.
// To pad a number, convert the number to a string first.
// See the example below.

let numb = 5;
let text1 = numb.toString();
let paddedText1 = text1.padEnd(4,"0");
console.log(paddedText1);
