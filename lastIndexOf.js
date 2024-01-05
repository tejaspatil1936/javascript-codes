//lastIndexOf indiacates index of last occurance of string 

let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");
console.log(index);

// 15 is the starting point for search
let text2 = "Please locate where 'locate' occurs!";
text2.lastIndexOf("locate", 15);


// returns -1 because 'john' does not exist
let text1 = "Please locate where 'locate' occurs!";
let index1 = text1.lastIndexOf("John");
console.log(index1);