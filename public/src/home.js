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

/* `compareGenreOrder` is a helper function 
    for the getMostCommonGenres function*/
function compareGenreOrder(aCount,bCount){
  if (aCount[1] === bCount){
    return 0; // if counts equal remain in place
  } else {return (aCount[1] < bCount[1]) ? 1 : -1;} // compare and order high to low
}

function getMostCommonGenres(books) {

  let genreCount = {} // initialize object
  // loop through each book creating object of genre and count of genre occurrence 
  books.forEach((book)=> 
    {const genre = book.genre; 
     if(!genreCount[genre]){genreCount[book.genre] = 1 // if genre is not in object `genreCount` add it
     }else{genreCount[book.genre] += 1}; // if genre is in `genreCount` object increment by 1
    });

  // convert genreCount object into an array
  const genres = Object.entries(genreCount) 

  // sort array in decending order using helper func `cpmpareGenreOrder`
  let sorted = genres.sort(compareGenreOrder);

  /* turn 2-dimensional array `sorted` back into an array with
     objects in format {name: , count:} and return only top 5 */
  let result = sorted.map(([name, count])=> ({name, count})) // change from array to object
   return result.slice(0,5); //return 5 results
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
