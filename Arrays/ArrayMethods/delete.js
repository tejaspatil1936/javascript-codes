// Using delete leaves undefined holes in the array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
console.log(fruits);
console.log(fruits.length);