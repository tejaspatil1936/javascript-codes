let text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll("Cats");
console.log(iterator);


let text1 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator1 = text1.matchAll(/cats/gi);
console.log(iterator1);
