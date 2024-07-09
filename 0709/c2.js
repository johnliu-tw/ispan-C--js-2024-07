// practice6
const getTaiwanDate = function(year = 0, month = 0, date = 0){
  const dateObject = new Date();
  if(year !== 0){
    dateObject.setFullYear(year);
  }
  if(month !== 0){
    dateObject.setMonth(month-1);
  }
  if(date !== 0){
    dateObject.setDate(date);
  }
  
  const twYear = dateObject.getFullYear() - 1911;
  let twMonth = dateObject.getMonth() + 1;
  let twDate = dateObject.getDate();
  twMonth = twMonth > 9 ? twMonth : ('0' + twMonth);
  twDate = twDate > 9 ? twDate : ('0' + twDate);
  
  return `${twYear}-${twMonth}-${twDate}`;
}

console.log(getTaiwanDate(2024, 10, 4));

const getLuckyNumber = function(min = 20, max = 46){
  min = Math.ceil(min);
  max = Math.floor(max);
  
  return Math.round((Math.random() * (max - min)) + min);
}

console.log(getLuckyNumber(1.44, 3.89));

// practice5
const numbers = [5, 2, -8, 12, 15];

let result1 = Math.max(...numbers);
let result2 = Math.min(...numbers);

let newNumbers = [];
for(let number of numbers){
  newNumbers.push(Math.abs(number));
}
let result3 = Math.max(...newNumbers);
let result4 = Math.sqrt(Math.pow(2, 6));
let result5 = Math.ceil(-5.7);
let result6 = Math.floor(15.2);
let result7 = Math.round(12.4);

console.log(result1 + result2 + result3 + result4 + result5 + result6 + result7)


// practice4
let inviteList = ['John', 'Dave', 'Macy'];
let newInviteList = ['Judy', 'Tom'];

console.log(inviteList.includes('Dave'));
console.log(inviteList.indexOf('Dave'));
inviteList = inviteList.concat(newInviteList);
inviteList = inviteList.reverse();
inviteList = inviteList.join(',');
console.log(inviteList);


// practice3
let str = "Visit my blogs http://blog1.com and https://blog2.com for more info."

str = str.replaceAll('https://', '');
str = str.replaceAll('http://', '');
let words = str.split(' ');
for(let word of words ){
  if(word.endsWith('.com')){
    // Repeat 版
    // console.log((word + ' ').repeat(3).trim());

    // 空格暴力版
    // console.log(`${word} ${word} ${word}`);
    
    // 空格迴圈版
    // let newWord = word;
    // for(let i = 0; i < 2; i ++){
    //   newWord += ` ${word}`;
    // }
    // console.log(newWord)
  }
}

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
