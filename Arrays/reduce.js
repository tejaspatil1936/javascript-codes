let myArray = [1, 2, 3, 4, 5]
function modArray(E1, E2) {
    console.log(`E1 : ${E1} & E2 : ${E2}`);
    return E1 + E2;
}
const reducedArray = myArray.reduce(modArray);
console.log(`original array : ${myArray}`);
console.log(`reduced Array : ${reducedArray}`);