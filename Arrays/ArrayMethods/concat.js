// The concat() method creates a new array by merging (concatenating) existing arrays:
// The concat() method does not change the existing arrays. It always returns a new array.
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
console.log(myGirls);
console.log(myBoys);
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);



// The concat() method can take any number of array arguments:
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const mychildren = arr1.concat(arr2, arr3);
console.log(mychildren);


// The concat() method can also take strings as arguments:
const arr = ["Emil", "Tobias", "Linus"];
const myarr = arr.concat("Peter"); 
console.log(myarr);

