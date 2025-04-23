let user = {
  firstName: 'Ayisha',
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};
// setTimeout(() => user.sayHi(), 3000);
const sayHi = user.sayHi.bind(user);
setTimeout(sayHi, 3000);

user = {
  firstName: 'Mazahir',
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};
