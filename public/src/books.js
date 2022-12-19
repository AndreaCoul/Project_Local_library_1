const { getTotalAccountsCount } = require("./home");

function findAuthorById(authors, id) {
  // leverages the find function to return author info when id is supplied
  let foundAuthor = authors.find((author) => author.id === id);
  return foundAuthor;
}

function findBookById(books, id) {
  // leverages the find function to return book info when book id is supplied
  let foundBook = books.find((book) => book.id === id);
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = []; // create  new array to store borrowed books
  const returnedBooks = []; // create new array to story returned books
  const result = []; // create array that stores combined arrays (borrowed and returned books)
  
  // loop through books and add then to the borrowed or returned array based on returned status
  for (let i = 0; i < books.length; i++){
     (!books[i].borrows[0].returned) ? borrowedBooks.push(books[i]) :  returnedBooks.push(books[i]);
    }   

  // now that looping through all books are complete, add both arrays to the result array
  result.push(borrowedBooks);
  result.push(returnedBooks);

  return result; // returns the array contianing an array of borrowed books and and array of returned books
}

function getBorrowersForBook(book, accounts) {
  //build array of id and returned status of borrowers
  let borrowers = book.borrows.map(({id, returned}) => {
   
    let accountInfo = accounts.find((account) => account.id === id);
          
    return {...accountInfo, returned,};});
   
  let tenBorrowers = borrowers.slice(0,10);

  return tenBorrowers;
   

}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
