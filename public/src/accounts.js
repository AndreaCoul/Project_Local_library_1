const { getBooksBorrowedCount } = require("./home");

function findAccountById(accounts, id) {
  let foundAccount = accounts.find((account)=>account.id === id); // find account using an account id
  return foundAccount; // return the account info
}

function sortAccountsByLastName(accounts) {
  let lastNameSort = accounts.sort((accountA, accountB) => 
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1); // sorts by last name; need to change to lowecase to ensure sorts correctly
  return lastNameSort; //returns accounts sorted by last name
}

function getTotalNumberOfBorrows(account, books) {
  // create array that contains objects from  all borrows
 const allBorrows = books.reduce((acc, book) => {
  const borrows = book.borrows  
  if (!acc.length) {return borrows // if no accumulator length set array
     } else {return acc.concat(borrows) // if accumulator length concat  book's borrows object
      }
 }, []);
 
//filter the all borrows by specific borrower account id  
const filteredBorrows = allBorrows.filter((borrow) => borrow.id === account.id)
    return filteredBorrows.length; // return the length to get the count
 }
  
function getBooksPossessedByAccount(account, books, authors) {
   
  /* filter the list of books into an array `isCheckedOut` 
    where  account id matches and returned status of false */
  
    let isCheckedOut = books.filter((book) => 
        book.borrows.some((borrow) => 
            account.id === borrow.id && borrow.returned == false)); // looks to see if true that account has booked checked out
    
  // add the author info to the object containing the book info
  isCheckedOut.forEach((book) => book.author = authors.find((author) => book.authorId === author.id))

     return isCheckedOut // return checked out book(s) with author info 
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
