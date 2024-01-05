let myArray = [1, 2, 3, 4, 5];

function filterArr(element) {
    return element > 2;
}

const filteredArray = myArray.filter(filterArr);

// const filteredArray = myArray.filter(function filterArr(element) {
//     return element > 2;
// })
console.log(myArray);
console.log(filteredArray);