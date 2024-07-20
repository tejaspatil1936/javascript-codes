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


// ++++++++++++++ real life example ++++++++++++++++
// we get such data from database an which users can apply filters just like amazon and flipkart 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  
  let filteredBooks = books.filter((book) => {
    return book.genre == "History"
  })

  let otherFilter = books.filter( ( book ) =>{
    return book.publish >= 1990
  } )
  console.log(filteredBooks);
  console.log(otherFilter);
  