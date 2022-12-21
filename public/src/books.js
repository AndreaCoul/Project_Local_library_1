const { getTotalAccountsCount } = require("./home");

function findAuthorById(authors, id) {
  // leverages the find function to return author info when id is supplied
  const foundAuthor = authors.find((author) => author.id === id);
  return foundAuthor; // returns specific author info
}

function findBookById(books, id) {
  // leverages the find function to return book info when book id is supplied
  const foundBook = books.find((book) => book.id === id);
  return foundBook;  //returns specific book info
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
  /* build array of account holders who have borrowed the specific book
    include the book's return status*/ 
  const borrowers = book.borrows.map(({id, returned}) => { // array of borrowers from book id
    let accountInfo = accounts.find((account) => //find accounts
          account.id === id); // where account id matches from borrows account id
          return {...accountInfo, returned,};}); // return object(s) of account info concat returned status of borrowed book
  
    //show only first 10 borrowers
  const tenBorrowers = borrowers.slice(0,10);
    return tenBorrowers; // returns the 10 borrowers
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
