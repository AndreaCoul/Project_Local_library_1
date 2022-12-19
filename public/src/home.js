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
  
  let commonGenres = books.reduce((acc, book) => {
     acc.push({name: book.genre, count: book.borrows.length,});
  
     console.log("acc: "+ acc)
     //return acc
     
 } , []);
     console.log("commonGenres: " + commonGenres);
  let sortedGenres = commonGenres.sort((a,b) => b.count - a.count)  
  return sortedGenres.slice(0,5);  
  //====================================================================
// create array parsing out the genres
/*const genreList = books.map((book) => book.genre); */

// add to each genre a count of 1
/*let genreWithCount = [];
for (i = 0; i < genreList.length; i++){
  genreWithCount.push({genre: genreList[i], count: 1}); 
}
console.log(genreWithCount);

let commonGenres = genreWithCount.reduce((accumulated, genre) => 
     {accumulated.push({name: genre.genre, count: genre.count.length});
     console.log(commonGenres);
     });
     
  let sortedGenres = commonGenres.sort((a,b) => b.count - a.count)  
  return sortedGenres.slice(0,5);


  //====================================================================
 /* // create array parsing out the genres
  const genreList = books.map((book) => book.genre);
  
  // add to each genre a count of 1
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
  console.log(genreCountTotal);*/ 
}

function getMostPopularBooks(books) {
  // create a new array called `popularBooks` containing book title and number of times borrowed
  let popularBooks = books.map((book) => ({name: book.title, count: book.borrows.length}))
  popularBooks.sort((a,b) => b.count - a.count); // sort array in descending order by borrowed count
  return popularBooks.slice(0,5); // return only the top 5 by count total
}

function getMostPopularAuthors(books, authors) {
  // create an array of only the author id and count of borrows
  let popularAuthors = books.map((book) => ({author: book.authorId, count: book.borrows.length}))
 
  let popularAuthorName = []; // initialize new array to house author name and count
  // loop to grab the author id from popularAuthors array
  for (let i = 0; i < popularAuthors.length; i++){ 
    //loops to grap the author id from the authors array
    for (let j = 0; j<authors.length; j++) {
     if(popularAuthors[i].author === authors[j].id) { //compare the author ids
      // if matches push author name and count to the popularAuthorName array
      popularAuthorName.push(
        {name: `${authors[j].name.first} ${authors[j].name.last}`, count: popularAuthors[i].count})}
    }
  }
  popularAuthorName.sort((a,b) => b.count - a.count); // sort desending by count
  return popularAuthorName.slice(0,5); //only show top 5
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
