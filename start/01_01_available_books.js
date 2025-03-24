// Write your code here

class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // getter
  getAvailability() {
    return this.getAvailability();
  }

  // Method
  getAvailability(){
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    } else {
      return "In stock";
    }
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 5){
    this.numCopies += numCopiesStocked;
  }
}