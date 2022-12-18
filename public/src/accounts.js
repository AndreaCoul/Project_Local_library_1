function findAccountById(accounts, id) {
  let foundAccount = accounts.find((account)=>account.id === id); // find account using an account id
  return foundAccount; // return the account info
}

function sortAccountsByLastName(accounts) {
  let lastNameSort = accounts.sort((accountA, accountB) => 
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1); // sorts by last name; need to change to lowecase to ensure sorts correctly
  return lastNameSort;
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrowed = 0
 /* for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].id === account){
      totalBorrowed = totalBorrowed + 1;
    }
  }
  console.log("total borrowed: " + totalBorrowed);
  return totalBorrowed; */
  books.forEach((book) => {
    
    if (book.borrows[0].id === account){
      totalBorrowed = totalBorrowed +1;}});

  console.log("Total Borrowed: " + totalBorrowed);
  return totalBorrowed; 
}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
