let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNewNums = myNums
                .map((num) => (num * 10))
                .map((num) => (num / 2))
                .filter((num) => (num > 20))

    console.log(myNewNums);