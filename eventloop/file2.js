console.log('A');
setTimeout(() => {
  console.log('B');
}, 1500);

setTimeout(() => {
  console.log('C');
}, 1000);

console.log('D');
