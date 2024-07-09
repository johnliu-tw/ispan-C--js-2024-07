// practice2
let calculateDiscount = (price, discount = 0.2) => console.log(price * (1- discount));
calculateDiscount(100);
calculateDiscount(100, 0.3);

// practice1
function findMax(...numbers){
  let max = 0;
  for(let number of numbers){
    console.log('number:' + number);
    console.log('max:' + max);
    if(number > max){
      max = number;
    }
  }
  
  console.log(max);
}


findMax(1,2,3,4,5);
findMax(1,2,10,4,6);

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
