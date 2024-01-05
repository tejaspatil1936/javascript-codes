// The splice() method can be used to add new items to an array to nth index:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.splice(2, 2, "Lemon", "Kiwi");
console.log(fruit);

