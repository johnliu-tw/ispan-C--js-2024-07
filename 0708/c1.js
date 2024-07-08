// practice 15
let person = {
  name: '野原新之助',
  age: 5,
  hobbies: ['drawing', 'coding','reading', 'swimming', 'skating', 'running'],
  getInfo: function(){
    return `你好, 我是 ${this.name}, 今年 ${this.age}歲`; 
  },
  isAdult: function(){
    return this.age >= 18 ? true : false;
  },
  printHobbies: function(){
    let count = 1;
    for(hobby of this.hobbies){
      if(hobby === 'coding'){
        continue;
      }
      
      count++;
      console.log(`hobby:${hobby}`);
      if(count === 5){
         break;
      }
    }
  }
}

console.log(person.getInfo());
console.log(person.isAdult());
person.printHobbies();


// practice 14
let products = [
  { name: "蘋果", price: 100 },
  { name: "水梨", price: null },
  { name: "香蕉", price: 200 },
  { name: "橘子", price: 300 },
  { name: "葡萄", price: 400 }
];

for(let product of products){
  if(product.price === null){
    continue;
  }
  
  if(product.price >= 300){
    for(key in product){
      console.log(`${key}: ${product[key]}`);
    }
    break;
  }
}

// practice 13
let price1 = '10';
let price2 = '10';

let sum = parseInt(price1) + parseInt(price2);
console.log(`嗨，您的價格${ sum >= 50 ? '' : '沒有'}超過限制`);


// practice 12
let fruitSeller = {
  name: '野原新之助',
  age: 5,
  fruits: ['Orange', 'Apple', 'Papaya', 'Kiwi', 'Papaya'],
  countFruits: function(fruitName){
    let count = 0;
    for(let i = 0; i< this.fruits.length; i++){
      if(this.fruits[i] === fruitName){
        count++;
      }
    }

    return count;
  },
  getInfo: function(){
    return "你好, 我是" + this.name + ", 今年" + this.age + "歲";
  }
}

console.log(fruitSeller.countFruits('Apple'));
console.log(fruitSeller.getInfo());

// practice 11
function countPapaya(array){
  let count = 0;
  for(let i = 0; i< array.length; i++){
    if(array[i] === 'Papaya'){
      count++;
    }
  }
  
  return count;
}

let result = countPapaya(['Orange', 'Apple', 'Papaya', 'Kiwi', 'Papaya']);
console.log(result)

// practice 10
function countSum(array){
  for(let i = 0; i < array.length; i++){
    let n = array[i];
    let sum = 0;
    for(let i = 1; i <= n; i++){
      sum += i;
    }

    console.log(sum);
  }
  
  return true;
}

let result = countSum([3, 10, 13]);
console.log(result);

// practice 9
let array = [3, 10, 13];
for(let i = 0; i < array.length; i++){
  let n = array[i];
  let sum = 0;
  for(let i = 1; i <= n; i++){
    sum += i;
  }

  console.log(sum);
}



// practice 8
let students = ['Alice', 'Bob'];
students.push('Charlie');
students.unshift('David');
students.splice(1, 1);
console.log(students);
console.log(students.length);

// practice 7
for(let y = 1; y <= 9; y++){
  for(let z = 1; z <= 9; z++){
    if(y === z){
      console.log(y + " x " + z + " = " + y*z + " 棒!");
    } else {
      console.log(y + " x " + z + " = " + y*z);
    }
  }
}

// practice 6
let n = 10;
let sum = 0;
for(let i = 1; i <= n; i++){
  sum += i;
}

console.log(sum);


// practice 5
let n = 10;
let sum = 0;
let i = 1;

while(i <= n){
  sum += i;
  i ++;
}

console.log(sum);

// practice 4
let weekNumber = 1;
switch(weekNumber){
  case 1:
    console.log('星期一');
    break;
  case 2:
    console.log('星期二');
    break;
  case 3:
    console.log('星期三');
    break;
  case 4:
    console.log('星期四');
    break;
  case 5:
    console.log('星期五');
    break;
  case 6:
    console.log('星期六');
    break;
  case 7:
    console.log('星期日');
    break;
  default:
    console.log('');
}

// practice 3
let questions = 50;
let totalScore = 0;
if(questions <= 10){
  totalScore = questions * 6;
} else if (questions <= 20){
  totalScore = 10 * 6 + (questions - 10) * 2;
} else if (questions <= 40){
  totalScore = 10 * 6 + 10 * 2 + (questions - 20) * 1;
} else {
  totalScore = 100;
}

console.log(totalScore);

// practice 2
let grade = 35;
if(grade >= 90){
  console.log('A');
} else if (grade >= 80){
  console.log('B');
} else if (grade >= 70){
  console.log('C');
} else if (grade >= 60){
  console.log('D');
} else {
  console.log('E');
}


// practice 1
let chi = 100;
let math = 100;
let eng = 80;

let sum = chi+math+eng;
console.log(sum/3);
console.log(sum);
