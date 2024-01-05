let text = "5";
let paddedText = text.padStart(4, "0");
console.log(paddedText);


// The padStart() method is a string method.
// To pad a number, convert the number to a string first.
// See the example below.

let numb = 58;
let text1 = numb.toString();
let paddedText1 = text1.padStart(4, "0");
console.log(paddedText1);
