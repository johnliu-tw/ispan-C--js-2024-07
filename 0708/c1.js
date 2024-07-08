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
