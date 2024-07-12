// practice 1
let jsonData = '{"name": "John Doe", "age": 30, "city": "New York"}';

let person = JSON.parse(jsonData);
person.job = 'Engineer';
console.log(JSON.stringify(person));
