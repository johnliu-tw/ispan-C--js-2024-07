// Homework1

let keyMap = {
    title: "標題",
    author: "作者",
    year: "出版年",
    isBorrowed: "是否被借了",
}

let book = {
  title: "JavaScript 從入門到精通",
  author: "John Doe",
  year: 2024,
  isBorrowed: false,
  toggleBorrowedStatus: function(){
    this.isBorrowed = !this.isBorrowed;
  },
  displayInfo: function(){
    for(key in this){
      if(typeof this[key] === 'function'){
         continue;
      }
      console.log(`${keyMap[key]}: ${this[key]}`);
    }
  }
};

book.displayInfo();
book.toggleBorrowedStatus();
book.displayInfo();
