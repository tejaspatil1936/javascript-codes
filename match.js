let text = "The rain in SPAIN stays mainly in the plain";
let result = text.match("ain");
console.log(result);

let text1 = "The rain in SPAIN stays mainly in the plain";
result1 = text1.match(/ain/g);
console.log(result1);


let text2 = "The rain in SPAIN stays mainly in the plain";
result2 = text2.match(/ain/gi);
console.log(result2);