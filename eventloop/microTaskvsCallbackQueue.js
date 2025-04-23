'use strict';
// console.log('start');
// setTimeout(() => {
//   console.log('Timer Done');
// }, 1000);

// let sum = 0;
// for (let i = 0; i < 1000000000; i++) {
//   sum += i;
// }
// console.log(sum);
// for (let i = 1; i < 99; i++) {
//   fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
//     .then((response) => response.json())
//     .then((response) => console.log(response));
// }
// console.log('end');
console.log('start');
setTimeout(() => {
  console.log('Timer Done');
}, 5000);
console.log('end');

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log('while expired');
