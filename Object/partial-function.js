function userGreetings(name, greeting) {
  console.log(`${greeting} ${name}`);
}

const sayHi = userGreetings.bind(null, 'Hi');

sayHi('Mazahir');
