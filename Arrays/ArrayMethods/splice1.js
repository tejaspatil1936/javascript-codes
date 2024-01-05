// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits);

// The first parameter (0) defines the position where new elements should be added (spliced in).
// The second parameter (1) defines how many elements should be removed.
// The rest of the parameters are omitted. No new elements will be added.