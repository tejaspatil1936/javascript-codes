// multiplication
let x = 9007199254740995n;
let y = 9007199254740995n;
let z = x * y;
console.log(z);


// division , bigint cannot have decimals it returns a whole no value
let a = 5n;
let b = a / 2n;
console.log(b);

// bigint cannot operate on different data types we need to typecast it
let m = 7n;
let n = Number(m) / 2;
console.log(n);
