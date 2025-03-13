'use strict';
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Peter';
delete user.name;
console.log(user);

const isEmpty = (obj) => {
  let flag = true;
  for (let key in obj) {
    flag = false;
  }
  return flag;
};

let schedule = {};
console.log(isEmpty(schedule)); // true
schedule['8:30'] = 'get up';
console.log(isEmpty(schedule)); // false

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const findSum = (obj) => {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
};

console.log(findSum(salaries));

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (!isNaN(obj[key])) {
      obj[key] = obj[key] * 2;
    }
  }
};

multiplyNumeric(menu);
console.log(menu);

const person = {
  name: 'Ayisha',
  sayHi() {
    console.log(this.name);
  },
};

const admin = { ...person };
console.log(admin.name);
admin.name = 'Mazahir';
console.log(admin.name);
admin.sayHi();
