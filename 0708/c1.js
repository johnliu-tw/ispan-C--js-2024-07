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
