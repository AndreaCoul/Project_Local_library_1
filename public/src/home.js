function getTotalBooksCount(books) {
  let total = 0; // initialize counter

  //loop over books array and count each record
  for (let i = 0; i < books.length; i++){
    total = total + 1;
  }
  return total; //returns total count
}

function getTotalAccountsCount(accounts) {
  let total = 0; // initialize counter

  //loop over accounts array and count each record
  for(let i = 0; i < accounts.length; i++){
    total = total + 1;
  }
  return total; //returns total count
}

function getBooksBorrowedCount(books) {
  let totalCount = 0; // initialize counter

  //loop over books array and count each record where the book is borrowed out
  books.forEach((book) => {if (book.borrows[0].returned === false) totalCount = totalCount + 1;});

  return totalCount; //returns total count
}

function getMostCommonGenres(books) {
  let genreList = books.map((book) => book.genre);
  console.log(genreList);
  let genreWithCount = [];
  for (i = 0; i < genreList.length; i++){
    genreWithCount.push({genre: genreList[i], count: 1}); 
  }
  console.log(genreWithCount);
 let genreCountTotal = [];
 let count = 0;
  for (i = 0; i < genreWithCount.length; i++){
   if (genreWithCount[i].genre === genreCountTotal[i].genre){
    genreCountTotal[i].count = genreCountTotal[i].count + 1;
   } else { genreCountTotal.push(genreWithCount[i])}
   
   count = genreWithCount.length; 
  
  }
  console.log(count);
  console.log(genreCountTotal);
}

function getMostPopularBooks(books) {
  // create a new array called `popularBooks` containing book title and number of times borrowed
  let popularBooks = books.map((book) => ({name: book.title, count: book.borrows.length}))
  popularBooks.sort((a,b) => b.count - a.count); // sort array in descending order by borrowed count
  return popularBooks.slice(0,5); // return only the top 5 by count total
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = books.map((book) => ({author: book.authorId, count: book.borrows.length}))
  let popularAuthorName = [];
  for (let i = 0; i < popularAuthors.length; i++){ 
    if(popularAuthors[i].author = authors.id) 
      popularAuthorName.push({author: {first: authors.name.first, last: authors.name.last}, count: popularAuthors[i].count})
  }
  popularAuthorName.sort((a,b) => b.count - a.count);
  console.log(popularAuthorName);
  return popularAuthorName.slice(0,5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
